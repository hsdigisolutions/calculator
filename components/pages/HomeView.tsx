import Link from "next/link";
import { CATEGORIES, getCategory } from "@/lib/categories";
import {
  getActiveCalculators,
  getCalculatorsByCategory,
  categoryCount,
} from "@/lib/registry";
import { Icon } from "@/components/Icon";
import { CalculatorCard } from "@/components/CalculatorCard";
import { SearchBar, type SearchItem } from "@/components/homepage/SearchBar";
import { MeshGradient } from "@/components/animations/MeshGradient";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { LiveDemo } from "@/components/homepage/LiveDemo";
import { CategoryTabs, type CategoryTab } from "@/components/homepage/CategoryTabs";
import {
  type Locale,
  categoryPath,
  calcPath,
  allCalculatorsPath,
  calcTitle,
  calcShortDescription,
  calcPrimaryKeyword,
  calcSecondaryKeywords,
  categoryName,
} from "@/lib/i18n";

const INNER = "mx-auto w-full max-w-content px-4 sm:px-6";

const HOME_STRINGS = {
  es: {
    andGrowing: "calculadoras y sumando",
    tagline: "Calcula lo que sea",
    heroSub: "Calculadoras elegantes, rápidas y fiables para finanzas, salud, matemáticas y la vida cotidiana. Gratis y sin registro.",
    figureOut: "¿Qué estás intentando averiguar?",
    browseByCategory: "Explora por categoría",
    popular: "Calculadoras populares",
    viewAll: "Ver todas",
    exploreEvery: "Explora todas las categorías",
    exploreSub: "Cambia de categoría para ver las herramientas dentro, sin recargar la página.",
    tool: "herramienta",
    tools: "herramientas",
    intents: [
      { icon: "Landmark", title: "Planifica tu dinero", slug: "finance", blurb: "Hipotecas, préstamos e interés" },
      { icon: "HeartPulse", title: "Cuida tu salud", slug: "health", blurb: "IMC, calorías y métricas corporales" },
      { icon: "Sigma", title: "Haz cálculos", slug: "math", blurb: "Porcentajes, fracciones y más" },
      { icon: "ArrowLeftRight", title: "Convierte unidades", slug: "converters", blurb: "Longitud, peso y temperatura" },
    ],
    trust: [
      { icon: "Zap", title: "Resultados instantáneos", body: "Cada calculadora se ejecuta en tu navegador y se actualiza en cuanto escribes." },
      { icon: "ShieldCheck", title: "Fórmulas fiables", body: "Las herramientas de salud y finanzas citan sus fuentes y muestran la fórmula exacta." },
      { icon: "Gauge", title: "Rápido y privado", body: "Sin registro y sin rastrear tus datos. Diseñado para ser veloz en cualquier dispositivo." },
    ],
  },
  en: {
    andGrowing: "calculators and growing",
    tagline: "Calculate Anything.",
    heroSub: "Beautiful, fast and trusted calculators for finance, health, math and everyday life. Free, with no sign-up.",
    figureOut: "What are you trying to figure out?",
    browseByCategory: "Browse by category",
    popular: "Popular calculators",
    viewAll: "View all",
    exploreEvery: "Explore every category",
    exploreSub: "Switch categories to browse the tools inside — no page load.",
    tool: "tool",
    tools: "tools",
    intents: [
      { icon: "Landmark", title: "Plan your money", slug: "finance", blurb: "Mortgages, loans & interest" },
      { icon: "HeartPulse", title: "Stay healthy", slug: "health", blurb: "BMI, calories & body metrics" },
      { icon: "Sigma", title: "Crunch numbers", slug: "math", blurb: "Percentages, fractions & more" },
      { icon: "ArrowLeftRight", title: "Convert units", slug: "converters", blurb: "Length, weight & temperature" },
    ],
    trust: [
      { icon: "Zap", title: "Instant results", body: "Every calculator runs in your browser and updates the moment you type." },
      { icon: "ShieldCheck", title: "Trusted formulas", body: "Health and finance tools cite their sources and show the exact formula used." },
      { icon: "Gauge", title: "Fast & private", body: "No sign-up, no tracking of your inputs. Built for speed on any device." },
    ],
  },
} as const;

export function HomeView({ locale }: { locale: Locale }) {
  const s = HOME_STRINGS[locale];
  const all = getActiveCalculators();
  const searchItems: SearchItem[] = all.map((c) => {
    const cat = getCategory(c.categorySlug);
    return {
      title: calcTitle(c, locale),
      href: calcPath(c, cat, locale),
      category: cat ? categoryName(cat, locale) : c.category,
      keywords: [calcPrimaryKeyword(c, locale), ...calcSecondaryKeywords(c, locale)].join(" "),
    };
  });

  const popular = all.slice(0, 6);

  const tabs: CategoryTab[] = CATEGORIES.filter(
    (c) => getCalculatorsByCategory(c.slug).length > 0
  ).map((c) => ({
    slug: c.slug,
    name: categoryName(c, locale),
    icon: c.icon,
    href: categoryPath(c, locale),
    calcs: getCalculatorsByCategory(c.slug).map((k) => ({
      title: calcTitle(k, locale),
      href: calcPath(k, c, locale),
      shortDescription: calcShortDescription(k, locale),
    })),
  }));

  return (
    <div className="w-full">
      {/* Hero — no overflow-hidden here: the .mesh background self-clips (its own
          overflow:hidden), and clipping the section would cut off the SearchBar's
          absolute autocomplete dropdown (it must overflow into the space below). */}
      <section className="relative w-full border-b border-line">
        <MeshGradient />
        <div className={`${INNER} pt-16 sm:pt-24 pb-16 text-center`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-1.5 text-sm text-text-secondary">
            <Icon name="Sparkles" size={15} className="text-brand" />
            {all.length} {s.andGrowing}
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary">
            {s.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            {s.heroSub}
          </p>

          <div className="mt-9">
            <SearchBar items={searchItems} locale={locale} />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={categoryPath(c, locale)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-line-strong transition-colors"
              >
                {categoryName(c, locale)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intent navigation */}
      <section className="w-full border-t border-line bg-surface/30">
        <div className={`${INNER} py-14 sm:py-16`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {s.figureOut}
          </h2>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {s.intents.map((it) => {
              const cat = getCategory(it.slug);
              const n = categoryCount(it.slug);
              return (
                <Link
                  key={it.slug}
                  href={cat ? categoryPath(cat, locale) : "#"}
                  className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-line-strong transition-all duration-300 ease-spring"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon name={it.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">{it.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{it.blurb}</p>
                  </div>
                  {n > 0 && (
                    <span className="mt-auto text-xs font-medium text-text-tertiary">
                      {n} {n === 1 ? s.tool : s.tools} →
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="w-full">
        <div className={`${INNER} py-16 sm:py-20`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {s.browseByCategory}
          </h2>
          <ScrollReveal
            variant="stagger"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {CATEGORIES.map((c) => {
              const count = categoryCount(c.slug);
              const samples = getCalculatorsByCategory(c.slug).slice(0, 3);
              return (
                <TiltCard key={c.slug}>
                  <Link
                    href={categoryPath(c, locale)}
                    className="group flex h-full flex-col gap-4 rounded-2xl bg-surface p-6 border border-line shadow-sm hover:shadow-lg hover:border-line-strong transition-all duration-300 ease-spring"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:scale-105 transition-transform">
                        <Icon name={c.icon} size={24} />
                      </span>
                      {count > 0 && (
                        <span className="text-xs font-medium text-text-tertiary">
                          {count} {count === 1 ? s.tool : s.tools}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {categoryName(c, locale)}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {c.taglineEs && locale === "es" ? c.taglineEs : c.tagline}
                      </p>
                    </div>
                    {samples.length > 0 && (
                      <ul className="mt-auto space-y-1">
                        {samples.map((sample) => (
                          <li
                            key={sample.slug}
                            className="flex items-center gap-1.5 text-sm text-text-tertiary"
                          >
                            <Icon name="ChevronRight" size={13} />
                            {calcTitle(sample, locale).replace(
                              / Calculator| Calculadora| Converter| Conversor/i,
                              ""
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </TiltCard>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Popular calculators */}
      <section className="w-full border-t border-line bg-surface/30">
        <div className={`${INNER} py-16 sm:py-20`}>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              {s.popular}
            </h2>
            <Link
              href={allCalculatorsPath(locale)}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              {s.viewAll}
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
          <ScrollReveal
            variant="stagger"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {popular.map((c) => (
              <CalculatorCard key={c.slug} calc={c} locale={locale} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Live demo */}
      <LiveDemo locale={locale} />

      {/* Tabbed category deep-dive */}
      <section className="w-full border-t border-line">
        <div className={`${INNER} py-16 sm:py-20`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {s.exploreEvery}
          </h2>
          <p className="mt-2 text-text-secondary">{s.exploreSub}</p>
          <div className="mt-8">
            <CategoryTabs tabs={tabs} locale={locale} />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="w-full border-t border-line">
        <div className={`${INNER} py-16 sm:py-20`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {s.trust.map((f) => (
              <div key={f.title} className="rounded-2xl bg-surface p-6 border border-line">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="mt-4 font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
