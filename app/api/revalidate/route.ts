/**
 * On-demand ISR revalidation, called by the WordPress plugin when an SEO expert
 * saves a calculator page. Secured with a shared secret (constant-time compare).
 *
 * POST body: { slug: "category/calculator" }  (English canonical slug)
 * Header:    x-calcvora-secret: <REVALIDATE_SECRET>
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { getCalculatorBySlug } from "@/lib/registry";
import { getCategory } from "@/lib/categories";
import { categorySlugFor, calcSlugFor } from "@/lib/i18n";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const provided = req.headers.get("x-calcvora-secret") ?? "";
  if (!secret || !safeEqual(provided, secret)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  let body: { slug?: string } = {};
  try {
    body = (await req.json()) as { slug?: string };
  } catch {
    // ignore — validated below
  }

  const slug = (body.slug || "").replace(/^\/+/, "");
  if (!slug || !slug.includes("/")) {
    return NextResponse.json({ ok: false, error: "invalid slug" }, { status: 400 });
  }

  const [catSlug, calcSlug] = slug.split("/");
  const def = getCalculatorBySlug(calcSlug);
  if (!def || def.categorySlug !== catSlug) {
    return NextResponse.json({ ok: false, error: "unknown calculator" }, { status: 404 });
  }

  const cat = getCategory(def.categorySlug);
  const esPath = `/es/${cat ? categorySlugFor(cat, "es") : def.categorySlug}/${calcSlugFor(def, "es")}`;
  const enPath = `/en/${def.categorySlug}/${def.slug}`;

  // Bust the cached WP response, then regenerate both localized pages.
  revalidateTag(`calc:${slug}`);
  revalidatePath(esPath);
  revalidatePath(enPath);

  return NextResponse.json({ ok: true, revalidated: [esPath, enPath] });
}
