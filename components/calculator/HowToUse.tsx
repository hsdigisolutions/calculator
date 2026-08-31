import type { CalculatorDefinition } from "@/lib/types";
import { type Locale, t, fieldLabel, resultLabel } from "@/lib/i18n";

export function HowToUse({
  definition,
  locale = "en",
}: {
  definition: CalculatorDefinition;
  locale?: Locale;
}) {
  const s = t(locale);
  const required = definition.fields
    .filter((f) => f.required)
    .map((f) => fieldLabel(definition, f.id, f.label, locale));
  const optional = definition.fields
    .filter((f) => !f.required)
    .map((f) => fieldLabel(definition, f.id, f.label, locale));
  const primaryResult = definition.results.find((r) => r.isPrimary);
  const primary = primaryResult
    ? resultLabel(definition, primaryResult.id, primaryResult.label, locale)
    : s.yourResult;

  const enterText =
    required.length > 0
      ? locale === "es"
        ? `Introduce ${listPhrase(required, locale)}.`
        : `Enter ${listPhrase(required, locale)}.`
      : s.enterFallback;
  const adjustText =
    optional.length > 0
      ? locale === "es"
        ? `Ajusta ${listPhrase(optional, locale)} si corresponde — ya hay valores predeterminados sensatos.`
        : `Adjust ${listPhrase(optional, locale)} if they apply — sensible defaults are already set.`
      : s.adjustFallback;

  const steps = [
    { n: 1, title: s.step1Title, body: enterText },
    { n: 2, title: s.step2Title, body: adjustText },
    { n: 3, title: s.step3Title, body: `${primary} ${s.resultUpdates}` },
  ];

  return (
    <section className="mt-10" aria-labelledby="how-to-use">
      <h2 id="how-to-use" className="text-2xl font-semibold text-text-primary">
        {s.howToUseTitle}
      </h2>
      <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.n}
            className="rounded-2xl border border-line bg-surface p-5 shadow-sm"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-semibold text-brand">
              {step.n}
            </span>
            <h3 className="mt-3 font-semibold text-text-primary">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function listPhrase(items: string[], locale: Locale): string {
  const and = locale === "es" ? "y" : "and";
  const lower = items.map((str) => str.toLowerCase());
  if (lower.length === 1) return lower[0];
  if (lower.length === 2) return `${lower[0]} ${and} ${lower[1]}`;
  return `${lower.slice(0, -1).join(", ")} ${and} ${lower[lower.length - 1]}`;
}
