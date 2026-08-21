import type { CalculatorDefinition } from "./types";
import { SITE_NAME, SITE_URL } from "./site";

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

export function calculatorAppSchema(calc: CalculatorDefinition, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    description: calc.metaDescription,
    url,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: calc.secondaryKeywords.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    creator: organization,
  };
}

export function articleSchema(calc: CalculatorDefinition, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: calc.seoTitle,
    description: calc.metaDescription,
    url,
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
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} Calculators`,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    hasPart: calculators.map((calc) => ({
      "@type": "WebApplication",
      name: calc.title,
      url: `${SITE_URL}/${calc.categorySlug}/${calc.slug}`,
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
