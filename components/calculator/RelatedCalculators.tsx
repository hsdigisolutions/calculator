import type { CalculatorDefinition } from "@/lib/types";
import { getRelatedCalculators } from "@/lib/registry";
import { CalculatorCard } from "@/components/CalculatorCard";

export function RelatedCalculators({
  definition,
}: {
  definition: CalculatorDefinition;
}) {
  const related = getRelatedCalculators(definition.relatedCalculators);
  if (related.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="related">
      <h2 id="related" className="text-2xl font-semibold text-text-primary">
        Related calculators
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((c) => (
          <CalculatorCard key={c.slug} calc={c} />
        ))}
      </div>
    </section>
  );
}
