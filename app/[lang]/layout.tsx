import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorFinder } from "@/components/finder/CalculatorFinder";
import { getSearchIndex } from "@/lib/registry";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const searchIndex = getSearchIndex();
  const skipText = locale === "es" ? "Saltar al contenido principal" : "Skip to main content";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        {skipText}
      </a>
      <Header locale={locale} />
      <main id="main-content" lang={lang} className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <CalculatorFinder index={searchIndex} />
    </>
  );
}
