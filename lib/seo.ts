/**
 * Per-locale metadata builders. Produce canonical + hreflang alternates,
 * og:locale, and localized titles/descriptions for every page type.
 */
import type { Metadata } from "next";
import type { CalculatorDefinition, Category } from "./types";
import type { CalculatorWPData } from "./wordpress-calculators";
import { getCategory } from "./categories";
import { SITE_NAME } from "./site";
import { ROBOTS, INDEX_ROBOTS } from "./schema";
import {
  type Locale,
  OG_LOCALE,
  calcPath,
  categoryPath,
  homePath,
  allCalculatorsPath,
  calcSeoTitle,
  calcMetaDescription,
  calcPrimaryKeyword,
  calcSecondaryKeywords,
  calcTitle,
  categoryName,
  categorySeoIntro,
  categoryDescription,
} from "./i18n";

function ogLocaleBlock(locale: Locale) {
  const alternate = locale === "es" ? OG_LOCALE.en : OG_LOCALE.es;
  return { locale: OG_LOCALE[locale], alternateLocale: [alternate] };
}

export function calculatorMetadata(
  def: CalculatorDefinition,
  locale: Locale,
  wp?: CalculatorWPData | null
): Metadata {
  const cat = getCategory(def.categorySlug);
  const pathFor = (l: Locale) => calcPath(def, cat, l);
  const url = pathFor(locale);

  // WP content overrides are Spanish-only; the index toggle applies to both locales.
  const es = locale === "es";
  const title = es && wp?.rmTitle ? wp.rmTitle : calcSeoTitle(def, locale);
  const description = es && wp?.rmDescription ? wp.rmDescription : calcMetaDescription(def, locale);
  const canonical = es && wp?.rmCanonical ? wp.rmCanonical : url;
  const keywords = [calcPrimaryKeyword(def, locale), ...calcSecondaryKeywords(def, locale)];

  // Default is noindex; a page is indexed only when WordPress explicitly opts it in.
  const index = wp ? wp.isIndexed : false;
  const robots = index ? INDEX_ROBOTS : ROBOTS;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        es: pathFor("es"),
        en: pathFor("en"),
        "x-default": pathFor("es"),
      },
    },
    robots,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      ...ogLocaleBlock(locale),
      images: [{ url: `/og/${def.categorySlug}`, width: 1200, height: 630, alt: calcTitle(def, locale) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og/${def.categorySlug}`],
    },
  };
}

export function categoryMetadata(cat: Category, locale: Locale): Metadata {
  const pathFor = (l: Locale) => categoryPath(cat, l);
  const url = pathFor(locale);
  const name = categoryName(cat, locale);
  const title =
    locale === "es"
      ? `Calculadoras de ${name} — Herramientas gratis en línea`
      : `${name} Calculators — Free Online ${name} Tools`;
  return {
    title,
    description: categorySeoIntro(cat, locale).slice(0, 158),
    alternates: {
      canonical: url,
      languages: { es: pathFor("es"), en: pathFor("en"), "x-default": pathFor("es") },
    },
    robots: ROBOTS,
    openGraph: {
      title,
      description: categoryDescription(cat, locale),
      url,
      siteName: SITE_NAME,
      ...ogLocaleBlock(locale),
      images: [{ url: `/og/${cat.slug}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: categoryDescription(cat, locale),
      images: [`/og/${cat.slug}`],
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const pathFor = (l: Locale) => homePath(l);
  const url = pathFor(locale);
  const title =
    locale === "es"
      ? `${SITE_NAME} — Calcula lo que sea`
      : `${SITE_NAME} — Calculate Anything`;
  const description =
    locale === "es"
      ? "Calculadoras gratuitas y elegantes para finanzas, salud, matemáticas y la vida cotidiana. Rápidas, precisas y fiables."
      : "Free, beautiful calculators for finance, health, math and everyday life. Fast, accurate and trusted.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: pathFor("es"), en: pathFor("en"), "x-default": pathFor("es") },
    },
    robots: ROBOTS,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      ...ogLocaleBlock(locale),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function allCalculatorsMetadata(locale: Locale): Metadata {
  const pathFor = (l: Locale) => allCalculatorsPath(l);
  const url = pathFor(locale);
  const title =
    locale === "es" ? "Todas las calculadoras" : "All calculators";
  const description =
    locale === "es"
      ? "Explora todas las calculadoras gratuitas en línea, organizadas por categoría."
      : "Browse every free online calculator, organized by category.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: pathFor("es"), en: pathFor("en"), "x-default": pathFor("es") },
    },
    robots: ROBOTS,
    openGraph: { title, description, url, siteName: SITE_NAME, ...ogLocaleBlock(locale) },
    twitter: { card: "summary_large_image", title, description },
  };
}
