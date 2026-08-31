import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/site";
import { LOCALES, isLocale, type Locale, t, homePath } from "@/lib/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const paths = (l: Locale) => (l === "en" ? "/en/terms" : "/terms");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const l = lang as Locale;
  return {
    title: l === "es" ? "Términos del servicio" : "Terms of Service",
    description: `Terms for using ${SITE_NAME}: calculators are provided as-is for general information, not professional advice.`,
    alternates: {
      canonical: paths(l),
      languages: { es: paths("es"), en: paths("en"), "x-default": paths("es") },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: t(l).home, href: homePath(l) },
          { label: l === "es" ? "Términos" : "Terms", href: paths(l) },
        ]}
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {l === "es" ? "Términos del servicio" : "Terms of Service"}
      </h1>
      <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
        <p>
          By using {SITE_NAME}, you agree to these terms. The calculators are
          provided free of charge and &ldquo;as is&rdquo; for general
          informational and educational purposes.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          Not professional advice
        </h2>
        <p>
          Results are estimates based on the inputs you provide and standard
          formulas. They are not a substitute for professional advice. Health,
          medical and fitness tools do not constitute medical advice; financial
          and tax tools do not constitute financial, legal or tax advice. Always
          consult a qualified professional before making decisions that affect
          your health or finances.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">Accuracy</h2>
        <p>
          We work hard to keep formulas correct and cite authoritative sources
          where they exist, but we make no warranty that every result is free of
          error or suitable for your specific situation. You use the calculators
          at your own discretion.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          Limitation of liability
        </h2>
        <p>
          {SITE_NAME} is not liable for any loss or damage arising from reliance
          on a calculation. Verify important figures independently before acting
          on them.
        </p>
      </div>
    </div>
  );
}
