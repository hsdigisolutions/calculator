import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AllCalculatorsView } from "@/components/pages/AllCalculatorsView";
import { allCalculatorsMetadata } from "@/lib/seo";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return allCalculatorsMetadata(lang as Locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <AllCalculatorsView locale={lang as Locale} />;
}
