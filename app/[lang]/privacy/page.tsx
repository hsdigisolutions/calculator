import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/site";
import { LOCALES, isLocale, type Locale, t, homePath } from "@/lib/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const paths = (l: Locale) => (l === "en" ? "/en/privacy" : "/privacy");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const l = lang as Locale;
  return {
    title: l === "es" ? "Política de privacidad" : "Privacy Policy",
    description: `How ${SITE_NAME} handles data: calculations run in your browser and your inputs are never stored.`,
    alternates: {
      canonical: paths(l),
      languages: { es: paths("es"), en: paths("en"), "x-default": paths("es") },
    },
  };
}

export default async function PrivacyPage({
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
          { label: l === "es" ? "Privacidad" : "Privacy", href: paths(l) },
        ]}
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {l === "es" ? "Política de privacidad" : "Privacy Policy"}
      </h1>
      <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
        <p>
          {SITE_NAME} is built to be private by architecture. The numbers you
          enter into any calculator are processed entirely in your browser. They
          are never sent to a server, never logged and never stored.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          What we collect
        </h2>
        <p>
          We use privacy-conscious, aggregate analytics to understand which
          calculators are used and how the site performs. This measures page
          views and anonymous usage events — not the values you type into
          calculators. We do not use advertising cookies or sell data.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          Your theme preference
        </h2>
        <p>
          If you switch between light and dark mode, that single preference is
          stored locally in your browser (localStorage) so the site remembers it
          on your next visit. It never leaves your device.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">Contact</h2>
        <p>
          Questions about privacy can be sent through the contact link in the
          footer.
        </p>
      </div>
    </div>
  );
}
