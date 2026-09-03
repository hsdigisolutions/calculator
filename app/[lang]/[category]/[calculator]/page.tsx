import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getActiveCalculators,
  getCalculatorByLocalizedSlug,
} from "@/lib/registry";
import { getCategory } from "@/lib/categories";
import { CalculatorView } from "@/components/pages/CalculatorView";
import { calculatorMetadata } from "@/lib/seo";
import { getCalculatorSEO } from "@/lib/wordpress-calculators";
import {
  LOCALES,
  isLocale,
  type Locale,
  categorySlugFor,
  calcSlugFor,
} from "@/lib/i18n";

export const dynamicParams = false;
// ISR: rebuild at most hourly; the WordPress save webhook also revalidates on demand.
export const revalidate = 3600;

export function generateStaticParams() {
  const params: { lang: string; category: string; calculator: string }[] = [];
  for (const lang of LOCALES) {
    for (const c of getActiveCalculators()) {
      const cat = getCategory(c.categorySlug);
      params.push({
        lang,
        category: cat ? categorySlugFor(cat, lang) : c.categorySlug,
        calculator: calcSlugFor(c, lang),
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string; calculator: string }>;
}): Promise<Metadata> {
  const { lang, category, calculator } = await params;
  if (!isLocale(lang)) return {};
  const calc = getCalculatorByLocalizedSlug(lang as Locale, category, calculator);
  if (!calc) return {};
  // Canonical English key is stable across locales; getCalculatorSEO is React.cache'd
  // so this shares one request with the page render below.
  const wp = await getCalculatorSEO(`${calc.categorySlug}/${calc.slug}`);
  return calculatorMetadata(calc, lang as Locale, wp);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; category: string; calculator: string }>;
}) {
  const { lang, category, calculator } = await params;
  if (!isLocale(lang)) notFound();
  const calc = getCalculatorByLocalizedSlug(lang as Locale, category, calculator);
  if (!calc) notFound();
  const wp = await getCalculatorSEO(`${calc.categorySlug}/${calc.slug}`);
  return <CalculatorView calc={calc} locale={lang as Locale} wp={wp} />;
}
