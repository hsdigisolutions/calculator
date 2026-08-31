import { CATEGORIES } from "@/lib/categories";
import { getCalculatorsByCategory, getActiveCalculators } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorCard } from "@/components/CalculatorCard";
import { type Locale, t, homePath, allCalculatorsPath, categoryName } from "@/lib/i18n";

export function AllCalculatorsView({ locale }: { locale: Locale }) {
  const s = t(locale);
  const total = getActiveCalculators().length;
  const heading = s.allCalculators;
  const subtitle =
    locale === "es"
      ? `${total} calculadoras gratuitas en ${CATEGORIES.length} categorías.`
      : `${total} free calculators across ${CATEGORIES.length} categories.`;

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: s.home, href: homePath(locale) },
          { label: heading, href: allCalculatorsPath(locale) },
        ]}
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {heading}
      </h1>
      <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>

      <div className="mt-10 space-y-12">
        {CATEGORIES.map((cat) => {
          const calcs = getCalculatorsByCategory(cat.slug);
          if (calcs.length === 0) return null;
          return (
            <section key={cat.slug} id={cat.slug}>
              <h2 className="text-xl font-semibold text-text-primary">
                {categoryName(cat, locale)}
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {calcs.map((c) => (
                  <CalculatorCard key={c.slug} calc={c} locale={locale} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
