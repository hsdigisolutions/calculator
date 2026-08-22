import type { CalculatorDefinition } from "./types";
import { mathCalculators } from "./calculators/math";
import { financeCalculators } from "./calculators/finance";
import { healthCalculators } from "./calculators/health";
import { dateTimeCalculators } from "./calculators/datetime";
import { converterCalculators } from "./calculators/converters";
import { businessCalculators } from "./calculators/business";
import { constructionCalculators } from "./calculators/construction";
import { educationCalculators } from "./calculators/education";
import { ecommerceCalculators } from "./calculators/ecommerce";
import { marketingCalculators } from "./calculators/marketing";
import { mathExtraCalculators } from "./calculators/math-extra";
import { financeExtraCalculators } from "./calculators/finance-extra";
import { healthExtraCalculators } from "./calculators/health-extra";
import { dateTimeExtraCalculators } from "./calculators/datetime-extra";
import { converterExtraCalculators } from "./calculators/converters-extra";
import { businessExtraCalculators } from "./calculators/business-extra";
import { constructionExtraCalculators } from "./calculators/construction-extra";
import { financeWave2Calculators } from "./calculators/finance-wave2";
import { healthWave2Calculators } from "./calculators/health-wave2";
import { mathWave2Calculators } from "./calculators/math-wave2";
import { dateTimeWave2Calculators } from "./calculators/datetime-wave2";
import { convertersWave2Calculators } from "./calculators/converters-wave2";
import { businessWave2Calculators } from "./calculators/business-wave2";
import { everydayWave2Calculators } from "./calculators/everyday-wave2";
import { scienceWave3Calculators } from "./calculators/science-wave3";
import { scienceMoreCalculators } from "./calculators/science-wave3-more";
import { realEstateWave3Calculators } from "./calculators/realestate-wave3";
import { automotiveWave3Calculators } from "./calculators/automotive-wave3";
import { cookingWave3Calculators } from "./calculators/cooking-wave3";
import { engineeringWave3Calculators } from "./calculators/engineering-wave3";
import { sportsWave3Calculators } from "./calculators/sports-wave3";
import { technologyWave3Calculators } from "./calculators/technology-wave3";

/** All calculator definitions, before de-duplication. */
const RAW_CALCULATORS: CalculatorDefinition[] = [
  ...mathCalculators,
  ...mathExtraCalculators,
  ...mathWave2Calculators,
  ...financeCalculators,
  ...financeExtraCalculators,
  ...financeWave2Calculators,
  ...healthCalculators,
  ...healthExtraCalculators,
  ...healthWave2Calculators,
  ...dateTimeCalculators,
  ...dateTimeExtraCalculators,
  ...dateTimeWave2Calculators,
  ...converterCalculators,
  ...converterExtraCalculators,
  ...convertersWave2Calculators,
  ...businessCalculators,
  ...businessExtraCalculators,
  ...businessWave2Calculators,
  ...constructionCalculators,
  ...constructionExtraCalculators,
  ...educationCalculators,
  ...ecommerceCalculators,
  ...marketingCalculators,
  ...everydayWave2Calculators,
  ...scienceWave3Calculators,
  ...scienceMoreCalculators,
  ...realEstateWave3Calculators,
  ...automotiveWave3Calculators,
  ...cookingWave3Calculators,
  ...engineeringWave3Calculators,
  ...sportsWave3Calculators,
  ...technologyWave3Calculators,
];

// Merge/skip duplicates: keep the FIRST occurrence of each slug (existing,
// tested calculators are listed before their wave2 counterparts), so wave2
// never collides with an existing tool's route, engine or content.
export const ALL_CALCULATORS: CalculatorDefinition[] = RAW_CALCULATORS.filter(
  (c, i) => RAW_CALCULATORS.findIndex((x) => x.slug === c.slug) === i
);

const BY_SLUG = new Map(ALL_CALCULATORS.map((c) => [c.slug, c]));

export function getCalculatorBySlug(slug: string): CalculatorDefinition | undefined {
  return BY_SLUG.get(slug);
}

export function getCalculatorsByCategory(categorySlug: string): CalculatorDefinition[] {
  return ALL_CALCULATORS.filter(
    (c) => c.categorySlug === categorySlug && c.status === "active"
  );
}

export function getActiveCalculators(): CalculatorDefinition[] {
  return ALL_CALCULATORS.filter((c) => c.status === "active");
}

/** Resolve related-calculator slugs to definitions, skipping any not yet built. */
export function getRelatedCalculators(slugs: string[]): CalculatorDefinition[] {
  return slugs
    .map((s) => BY_SLUG.get(s))
    .filter((c): c is CalculatorDefinition => Boolean(c && c.status === "active"));
}

export function categoryCount(categorySlug: string): number {
  return getCalculatorsByCategory(categorySlug).length;
}

export interface SearchIndexItem {
  href: string;
  label: string;
  category: string;
  /** lower-cased haystack of keywords for matching */
  keywords: string;
}

/**
 * Lightweight client-safe index for the CalculatorFinder. Auto-built from the
 * registry so every current and future calculator is findable with no manual
 * intent map to maintain.
 */
export function getSearchIndex(): SearchIndexItem[] {
  return getActiveCalculators().map((c) => ({
    href: `/${c.categorySlug}/${c.slug}`,
    label: c.title,
    category: c.category,
    keywords: [
      c.primaryKeyword,
      ...c.secondaryKeywords,
      c.title,
      c.shortDescription,
    ]
      .join(" ")
      .toLowerCase(),
  }));
}
