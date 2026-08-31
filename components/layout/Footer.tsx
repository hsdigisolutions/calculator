import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { Icon } from "@/components/Icon";
import {
  type Locale,
  homePath,
  categoryPath,
  allCalculatorsPath,
  categoryName,
} from "@/lib/i18n";

const HALF = Math.ceil(CATEGORIES.length / 2);

const FOOTER_STRINGS = {
  es: {
    blurb: "Calculadoras gratuitas, rápidas y fiables para la vida cotidiana, las finanzas, la salud y mucho más.",
    categories: "Categorías",
    more: "Más",
    company: "Empresa",
    about: "Acerca de",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    sitemap: "Mapa del sitio",
    rights: "Todas las cálculos son estimaciones ofrecidas a título informativo; consulta nuestros",
    termsWord: "términos",
  },
  en: {
    blurb: "Free, fast and trustworthy calculators for everyday life, finance, health and more.",
    categories: "Categories",
    more: "More",
    company: "Company",
    about: "About",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    sitemap: "Sitemap",
    rights: "All calculations are estimates provided for general information — see our",
    termsWord: "terms",
  },
} as const;

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const s = FOOTER_STRINGS[locale];
  const colA = CATEGORIES.slice(0, HALF);
  const colB = CATEGORIES.slice(HALF);
  const legalPrefix = locale === "en" ? "/en" : "";

  return (
    <footer className="mt-8 border-t border-line">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href={homePath(locale)} className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] text-white">
                <Icon name="Calculator" size={17} />
              </span>
              <span className="font-bold text-text-primary">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              {SITE_TAGLINE} {s.blurb}
            </p>
          </div>

          <FooterCol
            title={s.categories}
            links={colA.map((c) => ({ label: categoryName(c, locale), href: categoryPath(c, locale) }))}
          />
          <FooterCol
            title={s.more}
            links={colB.map((c) => ({ label: categoryName(c, locale), href: categoryPath(c, locale) }))}
          />
          <FooterCol
            title={s.company}
            links={[
              { label: locale === "es" ? "Todas las calculadoras" : "All calculators", href: allCalculatorsPath(locale) },
              { label: s.about, href: `${legalPrefix}/about` },
              { label: s.privacy, href: `${legalPrefix}/privacy` },
              { label: s.terms, href: `${legalPrefix}/terms` },
              { label: s.sitemap, href: "/sitemap.xml" },
            ]}
          />
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-text-tertiary">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {s.rights}{" "}
            <Link href={`${legalPrefix}/terms`} className="underline hover:text-text-primary">
              {s.termsWord}
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="util text-2xs font-semibold text-text-tertiary">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
