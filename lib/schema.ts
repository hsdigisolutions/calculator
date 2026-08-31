import type { CalculatorDefinition } from "./types";
import { SITE_NAME, SITE_URL } from "./site";
import { getCategory } from "./categories";
import {
  type Locale,
  calcTitle,
  calcSeoTitle,
  calcMetaDescription,
  calcSecondaryKeywords,
  calcPath,
} from "./i18n";

/**
 * JSON-LD schema generators. All values are drawn from real definition data or
 * the site organization — no fabricated authors/reviewers and no references to
 * assets that don't exist, since false E-E-A-T signals can harm rankings.
 *
 * FAQPage and BreadcrumbList schema are emitted by their components
 * (FAQSection, Breadcrumb) to stay colocated with the rendered content.
 */

const organization = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

const inLang = (locale: Locale) => (locale === "es" ? "es-ES" : "en-US");

export function calculatorAppSchema(
  calc: CalculatorDefinition,
  url: string,
  locale: Locale = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calcTitle(calc, locale),
    description: calcMetaDescription(calc, locale),
    url,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: calcSecondaryKeywords(calc, locale).join(", "),
    inLanguage: inLang(locale),
    isAccessibleForFree: true,
    creator: organization,
  };
}

export function articleSchema(
  calc: CalculatorDefinition,
  url: string,
  locale: Locale = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: calcSeoTitle(calc, locale),
    description: calcMetaDescription(calc, locale),
    url,
    inLanguage: inLang(locale),
    datePublished: calc.lastReviewed,
    dateModified: calc.lastReviewed,
    author: organization,
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function collectionPageSchema(
  categoryName: string,
  description: string,
  calculators: CalculatorDefinition[],
  url: string,
  locale: Locale = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      locale === "es"
        ? `Calculadoras de ${categoryName}`
        : `${categoryName} Calculators`,
    description,
    url,
    inLanguage: inLang(locale),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    hasPart: calculators.map((calc) => ({
      "@type": "WebApplication",
      name: calcTitle(calc, locale),
      url: `${SITE_URL}${calcPath(calc, getCategory(calc.categorySlug), locale)}`,
      applicationCategory: "UtilityApplication",
    })),
  };
}

/** Shared robots directives with the richer googleBot preview settings. */
export const ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};
