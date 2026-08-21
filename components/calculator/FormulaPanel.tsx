import type { CalculatorDefinition } from "@/lib/types";
import { Icon } from "@/components/Icon";

export function FormulaPanel({ definition }: { definition: CalculatorDefinition }) {
  return (
    <section className="mt-10" aria-labelledby="how-it-works">
      <h2 id="how-it-works" className="text-2xl font-semibold text-text-primary">
        How it works
      </h2>
      <p className="mt-3 text-text-secondary leading-relaxed max-w-2xl">
        {definition.explanation}
      </p>

      <div className="mt-5 rounded-xl bg-surface-2 p-5 border border-line">
        <div className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
          Formula
        </div>
        <p className="mt-2 font-mono text-sm sm:text-base text-text-primary">
          {definition.formula}
        </p>
      </div>

      {definition.formulaExplanation && (
        <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
          {definition.formulaExplanation}
        </p>
      )}

      {definition.formulaSource && (
        <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
          <Icon name="ShieldCheck" size={15} />
          <span>Source:</span>
          {definition.sourceUrl ? (
            <a
              href={definition.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-accent underline underline-offset-2 hover:text-brand"
            >
              {definition.formulaSource}
            </a>
          ) : (
            <span>{definition.formulaSource}</span>
          )}
          <span aria-hidden>·</span>
          Last reviewed {formatDate(definition.lastReviewed)}
        </p>
      )}
    </section>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
