/**
 * Headless WordPress SEO layer for calculator pages.
 *
 * Fetches per-calculator overrides (RankMath title/description/canonical, index
 * toggle, editable Spanish content, JSON-LD) from the `calcvora-seo-manager`
 * plugin over WPGraphQL. Kept separate from the blog's lib/wordpress.ts.
 *
 * Contract: NEVER throws, 3s timeout, returns null on any error or when disabled,
 * so the calculator pages always render from their built-in JSON data.
 */
import { cache } from "react";

export interface CalcWPFaq {
  question: string;
  answer: string;
}

export interface CalculatorWPData {
  isIndexed: boolean;
  seoStatus: string;
  intro: string;
  explanation: string;
  example: string;
  faqs: CalcWPFaq[];
  schemaOverride: string;
  /** RankMath custom title (already cleaned: empty if unset/template). */
  rmTitle: string;
  rmDescription: string;
  rmCanonical: string;
}

const ENDPOINT = process.env.WORDPRESS_API_URL; // e.g. https://cms.hscalculadora.com/graphql
const ENABLED = process.env.WP_SEO_ENABLED === "true";

const QUERY = /* GraphQL */ `
  query CalcSEO($slug: String!) {
    calculatorPageBySlug(slug: $slug) {
      calcMeta {
        isIndexed
        seoStatus
        intro
        explanation
        example
        faqs { question answer }
        schemaOverride
        rmTitle
        rmDescription
        rmCanonical
      }
    }
  }
`;

/** RankMath raw meta is only a usable override when a human set a literal value. */
function cleanRankMath(v: unknown): string {
  const s = typeof v === "string" ? v.trim() : "";
  if (!s || s.includes("%")) return ""; // ignore empty or unresolved %variable% templates
  return s;
}

/**
 * @param canonicalSlug English "category/slug", e.g. "finance/mortgage-calculator".
 */
export const getCalculatorSEO = cache(
  async (canonicalSlug: string): Promise<CalculatorWPData | null> => {
    if (!ENABLED || !ENDPOINT) return null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: QUERY, variables: { slug: canonicalSlug } }),
        signal: controller.signal,
        next: { revalidate: 3600, tags: [`calc:${canonicalSlug}`] },
      });
      if (!res.ok) return null;
      const json = (await res.json()) as {
        data?: { calculatorPageBySlug?: { calcMeta?: Record<string, unknown> } };
      };
      const m = json?.data?.calculatorPageBySlug?.calcMeta;
      if (!m) return null;

      const faqs = Array.isArray(m.faqs)
        ? (m.faqs as CalcWPFaq[]).filter((f) => f && f.question)
        : [];

      return {
        isIndexed: m.isIndexed !== false, // default true (safe)
        seoStatus: typeof m.seoStatus === "string" ? m.seoStatus : "pending",
        intro: typeof m.intro === "string" ? m.intro : "",
        explanation: typeof m.explanation === "string" ? m.explanation : "",
        example: typeof m.example === "string" ? m.example : "",
        faqs,
        schemaOverride: typeof m.schemaOverride === "string" ? m.schemaOverride : "",
        rmTitle: cleanRankMath(m.rmTitle),
        rmDescription: cleanRankMath(m.rmDescription),
        rmCanonical: typeof m.rmCanonical === "string" ? m.rmCanonical.trim() : "",
      };
    } catch {
      return null; // timeout, network, GraphQL — all fail soft
    } finally {
      clearTimeout(timeout);
    }
  }
);

/** Parse a schema-override string; returns null if empty or invalid JSON. */
export function parseSchemaOverride(raw: string): unknown | null {
  const s = (raw || "").trim();
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
