/**
 * Shared sitemap data. Each entry carries the localized URL for a locale plus
 * the es/en alternates for hreflang annotations inside the sitemap.
 */
import { CATEGORIES, getCategory } from "./categories";
import { getActiveCalculators } from "./registry";
import { SITE_URL } from "./site";
import {
  type Locale,
  homePath,
  categoryPath,
  calcPath,
  allCalculatorsPath,
} from "./i18n";

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternates: { es: string; en: string };
}

const abs = (path: string) => `${SITE_URL}${path}`;

export function getSitemapEntries(locale: Locale): SitemapEntry[] {
  const now = new Date().toISOString();
  const entries: SitemapEntry[] = [];

  const push = (
    pathFor: (l: Locale) => string,
    lastmod: string,
    changefreq: string,
    priority: number
  ) => {
    entries.push({
      loc: abs(pathFor(locale)),
      lastmod,
      changefreq,
      priority,
      alternates: { es: abs(pathFor("es")), en: abs(pathFor("en")) },
    });
  };

  push(homePath, now, "weekly", 1);
  push(allCalculatorsPath, now, "weekly", 0.8);

  for (const c of CATEGORIES) {
    push((l) => categoryPath(c, l), now, "weekly", 0.7);
  }

  for (const calc of getActiveCalculators()) {
    const cat = getCategory(calc.categorySlug);
    push(
      (l) => calcPath(calc, cat, l),
      new Date(calc.lastReviewed).toISOString(),
      "monthly",
      0.9
    );
  }

  return entries;
}

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** Serialize one locale's entries into a urlset with hreflang alternates. */
export function renderSitemapXml(locale: Locale): string {
  const entries = getSitemapEntries(locale);
  const urls = entries
    .map((e) => {
      const links = (["es", "en"] as const)
        .map(
          (l) =>
            `<xhtml:link rel="alternate" hreflang="${l}" href="${escapeXml(e.alternates[l])}"/>`
        )
        .join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(e.alternates.es)}"/>`;
      return `<url><loc>${escapeXml(e.loc)}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority>${links}${xDefault}</url>`;
    })
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

/** Serialize the sitemap index listing the per-language sitemaps. */
export function renderSitemapIndexXml(): string {
  const now = new Date().toISOString();
  const items = ["sitemap-es.xml", "sitemap-en.xml"]
    .map(
      (f) =>
        `<sitemap><loc>${SITE_URL}/${f}</loc><lastmod>${now}</lastmod></sitemap>`
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</sitemapindex>`;
}
