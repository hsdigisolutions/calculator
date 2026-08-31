import type { CalculatorDefinition } from "@/lib/types";
import { Icon } from "@/components/Icon";
import { type Locale, t, calcExample, fieldLabel } from "@/lib/i18n";

export function ExamplePanel({
  definition,
  locale = "en",
}: {
  definition: CalculatorDefinition;
  locale?: Locale;
}) {
  const { fields } = definition;
  const example = calcExample(definition, locale);
  const labelOf = (id: string) => {
    const base = fields.find((f) => f.id === id)?.label ?? id;
    return fieldLabel(definition, id, base, locale);
  };

  return (
    <section className="mt-10" aria-labelledby="example">
      <h2 id="example" className="text-2xl font-semibold text-text-primary">
        {t(locale).workedExample}
      </h2>
      <div className="mt-4 rounded-2xl bg-surface p-5 sm:p-6 border border-line shadow-sm">
        <div className="flex flex-wrap gap-2">
          {Object.entries(example.inputs).map(([k, v]) => (
            <span
              key={k}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-sm"
            >
              <span className="text-text-tertiary">{labelOf(k)}:</span>
              <span className="font-medium text-text-primary">{String(v)}</span>
            </span>
          ))}
        </div>
        <p className="mt-4 flex gap-2.5 text-text-secondary leading-relaxed">
          <Icon name="Sparkles" size={18} className="mt-0.5 shrink-0 text-brand" />
          <span>{example.explanation}</span>
        </p>
      </div>
    </section>
  );
}
