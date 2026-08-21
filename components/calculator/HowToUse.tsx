import type { CalculatorDefinition } from "@/lib/types";

export function HowToUse({ definition }: { definition: CalculatorDefinition }) {
  const required = definition.fields.filter((f) => f.required).map((f) => f.label);
  const optional = definition.fields.filter((f) => !f.required).map((f) => f.label);
  const primary =
    definition.results.find((r) => r.isPrimary)?.label ?? "your result";

  const enterText =
    required.length > 0
      ? `Enter ${listPhrase(required)}.`
      : "Enter your values in the fields above.";
  const adjustText =
    optional.length > 0
      ? `Adjust ${listPhrase(optional)} if they apply — sensible defaults are already set.`
      : "Fine-tune any options to match your situation.";

  const steps = [
    { n: 1, title: "Enter your values", body: enterText },
    { n: 2, title: "Adjust the options", body: adjustText },
    { n: 3, title: "Read your result", body: `${primary} updates instantly as you type — no button to press.` },
  ];

  return (
    <section className="mt-10" aria-labelledby="how-to-use">
      <h2 id="how-to-use" className="text-2xl font-semibold text-text-primary">
        How to use this calculator
      </h2>
      <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-line bg-surface p-5 shadow-sm"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-mono text-sm font-semibold text-brand">
              {s.n}
            </span>
            <h3 className="mt-3 font-semibold text-text-primary">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function listPhrase(items: string[]): string {
  const lower = items.map((s) => s.toLowerCase());
  if (lower.length === 1) return lower[0];
  if (lower.length === 2) return `${lower[0]} and ${lower[1]}`;
  return `${lower.slice(0, -1).join(", ")} and ${lower[lower.length - 1]}`;
}
