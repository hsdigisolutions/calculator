import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategoryByLocalizedSlug } from "@/lib/categories";
import { CategoryView } from "@/components/pages/CategoryView";
import { categoryMetadata } from "@/lib/seo";
import { LOCALES, isLocale, type Locale, categorySlugFor } from "@/lib/i18n";

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  const params: { lang: string; category: string }[] = [];
  for (const lang of LOCALES) {
    for (const c of CATEGORIES) {
      params.push({ lang, category: categorySlugFor(c, lang) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  if (!isLocale(lang)) return {};
  const cat = getCategoryByLocalizedSlug(lang as Locale, category);
  if (!cat) return {};
  return categoryMetadata(cat, lang as Locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang, category } = await params;
  if (!isLocale(lang)) notFound();
  const cat = getCategoryByLocalizedSlug(lang as Locale, category);
  if (!cat) notFound();
  return <CategoryView category={cat} locale={lang as Locale} />;
}
