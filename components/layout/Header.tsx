import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { getCalculatorsByCategory, categoryCount } from "@/lib/registry";
import { SITE_NAME } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FullscreenNav, type NavCategory } from "@/components/layout/FullscreenNav";
import { OpenFinderButton } from "@/components/finder/OpenFinderButton";
import {
  type Locale,
  t,
  homePath,
  categoryPath,
  calcPath,
  allCalculatorsPath,
  calcTitle,
  categoryName,
} from "@/lib/i18n";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const menu: NavCategory[] = CATEGORIES.filter(
    (c) => categoryCount(c.slug) > 0
  ).map((c) => ({
    slug: c.slug,
    name: categoryName(c, locale),
    icon: c.icon,
    count: categoryCount(c.slug),
    href: categoryPath(c, locale),
    tools: getCalculatorsByCategory(c.slug).map((k) => ({
      label: calcTitle(k, locale).replace(
        / Calculator| Converter| Calculadora| Conversor/i,
        ""
      ),
      href: calcPath(k, c, locale),
    })),
  }));

  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[var(--glass-bg)] backdrop-blur-glass print:hidden">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
        <Link href={homePath(locale)} className="flex items-center gap-2 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] text-white shadow-glow">
            <Icon name="Calculator" size={19} />
          </span>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <FullscreenNav menu={menu} locale={locale} />
          <Link
            href={allCalculatorsPath(locale)}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
          >
            {s.allCalculators}
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href={homePath(otherLocale)}
            hrefLang={otherLocale}
            className="rounded-full px-2.5 sm:px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
            aria-label={s.otherLanguage}
          >
            {s.otherLanguage}
          </Link>
          <OpenFinderButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
