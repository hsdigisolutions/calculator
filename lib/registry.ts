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

/** All calculator definitions in the platform. */
export const ALL_CALCULATORS: CalculatorDefinition[] = [
  ...mathCalculators,
  ...mathExtraCalculators,
  ...financeCalculators,
  ...financeExtraCalculators,
  ...healthCalculators,
  ...healthExtraCalculators,
  ...dateTimeCalculators,
  ...dateTimeExtraCalculators,
  ...converterCalculators,
  ...converterExtraCalculators,
  ...businessCalculators,
  ...businessExtraCalculators,
  ...constructionCalculators,
  ...constructionExtraCalculators,
  ...educationCalculators,
  ...ecommerceCalculators,
  ...marketingCalculators,
];

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
