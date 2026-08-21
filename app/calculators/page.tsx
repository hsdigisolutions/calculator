import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/categories";
import { getCalculatorsByCategory, getActiveCalculators } from "@/lib/registry";
import { SITE_NAME } from "@/lib/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorCard } from "@/components/CalculatorCard";

export const metadata: Metadata = {
  title: "All Calculators",
  description: `Browse every free calculator on ${SITE_NAME} — finance, health, math, converters and more.`,
  alternates: { canonical: "/calculators" },
};

export default function AllCalculatorsPage() {
  const total = getActiveCalculators().length;

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "All calculators", href: "/calculators" },
        ]}
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        All calculators
      </h1>
      <p className="mt-3 text-lg text-text-secondary">
        {total} free calculators across {CATEGORIES.length} categories.
      </p>

      <div className="mt-10 space-y-12">
        {CATEGORIES.map((cat) => {
          const calcs = getCalculatorsByCategory(cat.slug);
          if (calcs.length === 0) return null;
          return (
            <section key={cat.slug} id={cat.slug}>
              <h2 className="text-xl font-semibold text-text-primary">
                {cat.name}
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {calcs.map((c) => (
                  <CalculatorCard key={c.slug} calc={c} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
