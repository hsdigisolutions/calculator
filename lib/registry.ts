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
import { healthMoreCalculators } from "./calculators/health-more-wave3";
import { scienceMoreCalculators } from "./calculators/science-wave3-more";
import { mathMoreCalculators } from "./calculators/math-more-wave3";
import { realEstateWave3Calculators } from "./calculators/realestate-wave3";
import { automotiveWave3Calculators } from "./calculators/automotive-wave3";
import { cookingWave3Calculators } from "./calculators/cooking-wave3";
import { engineeringWave3Calculators } from "./calculators/engineering-wave3";
import { sportsWave3Calculators } from "./calculators/sports-wave3";
import { technologyWave3Calculators } from "./calculators/technology-wave3";
import { environmentWave3Calculators } from "./calculators/environment-wave3";
import { logisticsWave3Calculators } from "./calculators/logistics-wave3";
import { financeMoreCalculators } from "./calculators/finance-more-wave3";
import { everydayMoreCalculators } from "./calculators/everyday-more-wave3";
import { financeR4Calculators } from "./calculators/finance-r4-wave3";
import { healthR4Calculators } from "./calculators/health-r4-wave3";
import { mathR4Calculators } from "./calculators/math-r4-wave3";
import { convertersR4Calculators } from "./calculators/converters-r4-wave3";
import { constructionR4Calculators } from "./calculators/construction-r4-wave3";
import { marketingR5Calculators } from "./calculators/marketing-r5-wave3";
import { datetimeR5Calculators } from "./calculators/datetime-r5-wave3";
import { technologyR5Calculators } from "./calculators/technology-r5-wave3";
import { scienceR5Calculators } from "./calculators/science-r5-wave3";
import { autoSportsR5Calculators } from "./calculators/auto-sports-r5-wave3";
import { businessR6Calculators } from "./calculators/business-r6-wave3";
import { educationR6Calculators } from "./calculators/education-r6-wave3";
import { ecommerceR6Calculators } from "./calculators/ecommerce-r6-wave3";
import { engineeringR6Calculators } from "./calculators/engineering-r6-wave3";
import { cookingR6Calculators } from "./calculators/cooking-r6-wave3";
import { everydayR6Calculators } from "./calculators/everyday-r6-wave3";
import { realestateR6Calculators } from "./calculators/realestate-r6-wave3";

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
  ...healthMoreCalculators,
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
  ...mathMoreCalculators,
  ...realEstateWave3Calculators,
  ...automotiveWave3Calculators,
  ...cookingWave3Calculators,
  ...engineeringWave3Calculators,
  ...sportsWave3Calculators,
  ...technologyWave3Calculators,
  ...environmentWave3Calculators,
  ...logisticsWave3Calculators,
  ...financeMoreCalculators,
  ...everydayMoreCalculators,
  ...financeR4Calculators,
  ...healthR4Calculators,
  ...mathR4Calculators,
  ...convertersR4Calculators,
  ...constructionR4Calculators,
  ...marketingR5Calculators,
  ...datetimeR5Calculators,
  ...technologyR5Calculators,
  ...scienceR5Calculators,
  ...autoSportsR5Calculators,
  ...businessR6Calculators,
  ...educationR6Calculators,
  ...ecommerceR6Calculators,
  ...engineeringR6Calculators,
  ...cookingR6Calculators,
  ...everydayR6Calculators,
  ...realestateR6Calculators,
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
