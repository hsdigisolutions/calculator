import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import {
  getActiveCalculators,
  getCalculatorsByCategory,
  categoryCount,
} from "@/lib/registry";
import { SITE_TAGLINE } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { CalculatorCard } from "@/components/CalculatorCard";
import { SearchBar, type SearchItem } from "@/components/homepage/SearchBar";
import { MeshGradient } from "@/components/animations/MeshGradient";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { LiveDemo } from "@/components/homepage/LiveDemo";
import { CategoryTabs, type CategoryTab } from "@/components/homepage/CategoryTabs";

// Full-bleed section: background spans the viewport, content stays centered.
const INNER = "mx-auto w-full max-w-content px-4 sm:px-6";

export default function HomePage() {
  const all = getActiveCalculators();
  const searchItems: SearchItem[] = all.map((c) => ({
    title: c.title,
    href: `/${c.categorySlug}/${c.slug}`,
    category: c.category,
    keywords: [c.primaryKeyword, ...c.secondaryKeywords].join(" "),
  }));

  const popular = all.slice(0, 6);

  const tabs: CategoryTab[] = CATEGORIES.filter(
    (c) => getCalculatorsByCategory(c.slug).length > 0
  ).map((c) => ({
    slug: c.slug,
    name: c.name,
    icon: c.icon,
    calcs: getCalculatorsByCategory(c.slug).map((k) => ({
      title: k.title,
      href: `/${k.categorySlug}/${k.slug}`,
      shortDescription: k.shortDescription,
    })),
  }));

  return (
    <div className="w-full">
      {/* Hero — full-bleed mesh background, centered content */}
      <section className="relative w-full overflow-hidden border-b border-line">
        <MeshGradient />
        <div className={`${INNER} pt-16 sm:pt-24 pb-16 text-center`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-1.5 text-sm text-text-secondary">
            <Icon name="Sparkles" size={15} className="text-brand" />
            {all.length} calculators and growing
          </div>
          <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight text-text-primary">
            {SITE_TAGLINE}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            Beautiful, fast and trusted calculators for finance, health, math
            and everyday life. Free, with no sign-up.
          </p>

          <div className="mt-9">
            <SearchBar items={searchItems} />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-line-strong transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="w-full">
        <div className={`${INNER} py-16 sm:py-20`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Browse by category
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
                    href={`/${c.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-2xl bg-surface p-6 border border-line shadow-sm hover:shadow-lg hover:border-line-strong transition-all duration-300 ease-spring"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:scale-105 transition-transform">
                        <Icon name={c.icon} size={24} />
                      </span>
                      {count > 0 && (
                        <span className="text-xs font-medium text-text-tertiary">
                          {count} {count === 1 ? "tool" : "tools"}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {c.tagline}
                      </p>
                    </div>
                    {samples.length > 0 && (
                      <ul className="mt-auto space-y-1">
                        {samples.map((s) => (
                          <li
                            key={s.slug}
                            className="flex items-center gap-1.5 text-sm text-text-tertiary"
                          >
                            <Icon name="ChevronRight" size={13} />
                            {s.title.replace(" Calculator", "")}
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
              Popular calculators
            </h2>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              View all
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
          <ScrollReveal
            variant="stagger"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {popular.map((c) => (
              <CalculatorCard key={c.slug} calc={c} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Live demo — a real working calculator on the homepage */}
      <LiveDemo />

      {/* Tabbed category deep-dive */}
      <section className="w-full border-t border-line">
        <div className={`${INNER} py-16 sm:py-20`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Explore every category
          </h2>
          <p className="mt-2 text-text-secondary">
            Switch categories to browse the tools inside — no page load.
          </p>
          <div className="mt-8">
            <CategoryTabs tabs={tabs} />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="w-full border-t border-line">
        <div className={`${INNER} py-16 sm:py-20`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "Zap",
                title: "Instant results",
                body: "Every calculator runs in your browser and updates the moment you type.",
              },
              {
                icon: "ShieldCheck",
                title: "Trusted formulas",
                body: "Health and finance tools cite their sources and show the exact formula used.",
              },
              {
                icon: "Gauge",
                title: "Fast & private",
                body: "No sign-up, no tracking of your inputs. Built for speed on any device.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-surface p-6 border border-line"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="mt-4 font-semibold text-text-primary">
                  {f.title}
                </h3>
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
