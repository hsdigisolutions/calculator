import type { CalculatorDefinition } from "@/lib/types";
import { Icon } from "@/components/Icon";
import {
  type Locale,
  t,
  DATE_LOCALE,
  calcExplanation,
  calcFormula,
  calcFormulaExplanation,
} from "@/lib/i18n";

export function FormulaPanel({
  definition,
  locale = "en",
  explanationHtml,
}: {
  definition: CalculatorDefinition;
  locale?: Locale;
  /** Optional CMS-authored HTML explanation that replaces the JSON prose. */
  explanationHtml?: string;
}) {
  const s = t(locale);
  const formulaExplanation = calcFormulaExplanation(definition, locale);
  return (
    <section className="mt-10" aria-labelledby="how-it-works">
      <h2 id="how-it-works" className="text-2xl font-semibold text-text-primary">
        {s.howItWorks}
      </h2>
      {explanationHtml ? (
        <div
          className="calcvora-cms mt-3 text-text-secondary leading-relaxed max-w-2xl"
          dangerouslySetInnerHTML={{ __html: explanationHtml }}
        />
      ) : (
        <p className="mt-3 text-text-secondary leading-relaxed max-w-2xl">
          {calcExplanation(definition, locale)}
        </p>
      )}

      <div className="mt-5 rounded-xl bg-surface-2 p-5 border border-line">
        <div className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
          {s.formula}
        </div>
        <p className="mt-2 font-mono text-sm sm:text-base text-text-primary">
          {calcFormula(definition, locale)}
        </p>
      </div>

      {formulaExplanation && (
        <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
          {formulaExplanation}
        </p>
      )}

      {definition.formulaSource && (
        <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
          <Icon name="ShieldCheck" size={15} />
          <span>{s.source}:</span>
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
          {s.lastReviewed} {formatDate(definition.lastReviewed, locale)}
        </p>
      )}
    </section>
  );
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString(DATE_LOCALE[locale], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
