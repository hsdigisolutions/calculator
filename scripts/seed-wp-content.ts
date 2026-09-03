/**
 * Seed existing Spanish calculator content from the JSON registry into WordPress.
 *
 * Reads every calculator definition, then for each finds its WordPress
 * `calculator_page` entry (by the `calc_slug` meta) and fills the content meta
 * (calc_intro, calc_explanation, calc_example, calc_faqs) via the WP REST API.
 *
 * Idempotent: skips any entry that already has calc_explanation. Runs in batches
 * of 10 to be gentle on the server.
 *
 * Usage:
 *   WP_URL=https://cms.hscalculadora.com \
 *   WP_USER=admin \
 *   WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx" \
 *   npx tsx scripts/seed-wp-content.ts
 *
 * The Application Password is generated in WordPress under Users → Profile →
 * Application Passwords. Basic Auth over HTTPS.
 */
import { getActiveCalculators } from "../lib/registry";

const WP_URL = process.env.WP_URL?.replace(/\/$/, "");
const WP_USER = process.env.WP_USER;
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;
const BATCH = 10;
/** --force overwrites content even when the entry already has an explanation. */
const FORCE = process.argv.includes("--force");

if (!WP_URL || !WP_USER || !WP_APP_PASSWORD) {
  console.error("Missing env. Set WP_URL, WP_USER and WP_APP_PASSWORD.");
  process.exit(1);
}

const ENDPOINT = `${WP_URL}/wp-json/wp/v2/calculator_page`;
const AUTH = "Basic " + Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString("base64");

/** Convert registry plain text (\n\n paragraphs) to simple HTML. */
function toHtml(text: string): string {
  return (text || "")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${p}</p>`)
    .join("\n");
}

interface WpRow {
  id: number;
  meta?: { calc_slug?: string; calc_explanation?: string };
}

/** Fetch all calculator_page entries, mapped by calc_slug. */
async function fetchAll(): Promise<Map<string, WpRow>> {
  const map = new Map<string, WpRow>();
  let page = 1;
  for (;;) {
    const url = `${ENDPOINT}?per_page=100&page=${page}&status=publish&_fields=id,meta.calc_slug,meta.calc_explanation`;
    const res = await fetch(url, { headers: { Authorization: AUTH } });
    if (res.status === 400) break; // requested page beyond the last
    if (!res.ok) {
      throw new Error(`List failed: ${res.status} ${await res.text()}`);
    }
    const rows = (await res.json()) as WpRow[];
    if (!Array.isArray(rows) || rows.length === 0) break;
    for (const r of rows) {
      const slug = r.meta?.calc_slug;
      if (slug) map.set(slug, r);
    }
    const totalPages = Number(res.headers.get("x-wp-totalpages") ?? page);
    if (page >= totalPages) break;
    page += 1;
  }
  return map;
}

async function update(id: number, meta: Record<string, string>): Promise<void> {
  const res = await fetch(`${ENDPOINT}/${id}`, {
    method: "POST",
    headers: { Authorization: AUTH, "Content-Type": "application/json" },
    body: JSON.stringify({ meta }),
  });
  if (!res.ok) {
    throw new Error(`Update ${id} failed: ${res.status} ${await res.text()}`);
  }
}

async function main() {
  const calcs = getActiveCalculators();
  const total = calcs.length;
  console.log(`Fetching existing WordPress calculator pages…`);
  const wpMap = await fetchAll();
  console.log(
    `Found ${wpMap.size} entries in WordPress. Seeding ${total} calculators${FORCE ? " (--force: overwriting existing)" : ""}.\n`
  );

  let updated = 0;
  let skipped = 0;
  let missing = 0;
  let failed = 0;

  for (let i = 0; i < calcs.length; i += BATCH) {
    const slice = calcs.slice(i, i + BATCH);
    await Promise.all(
      slice.map(async (c) => {
        const slug = `${c.categorySlug}/${c.slug}`;
        const wp = wpMap.get(slug);
        if (!wp) {
          missing += 1;
          console.warn(`  ! no WP entry for ${slug}`);
          return;
        }
        // Idempotent by default: skip if content already present (unless --force).
        if (!FORCE && (wp.meta?.calc_explanation ?? "").trim() !== "") {
          skipped += 1;
          return;
        }
        const intro = c.shortDescriptionEs ?? c.shortDescription;
        const explanation = c.explanationEs ?? c.explanation;
        const example = (c.exampleEs ?? c.example)?.explanation ?? "";
        const faqs = (c.faqsEs ?? c.faqs).map((f) => ({ question: f.question, answer: f.answer }));
        try {
          await update(wp.id, {
            calc_intro: toHtml(intro),
            calc_explanation: toHtml(explanation),
            calc_example: toHtml(example),
            calc_faqs: JSON.stringify(faqs),
          });
          updated += 1;
        } catch (err) {
          failed += 1;
          console.error(`  ✗ ${slug}: ${(err as Error).message}`);
        }
      })
    );
    console.log(
      `Seeding ${Math.min(i + BATCH, total)}/${total}…  (updated ${updated}, skipped ${skipped}, missing ${missing}, failed ${failed})`
    );
    await new Promise((r) => setTimeout(r, 300)); // gentle pause between batches
  }

  console.log(
    `\nDone. Updated ${updated}, skipped (already had content) ${skipped}, missing ${missing}, failed ${failed}, of ${total}.`
  );
  if (failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
