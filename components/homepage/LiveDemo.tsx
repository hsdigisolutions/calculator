import { getCalculatorBySlug } from "@/lib/registry";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";
import { Icon } from "@/components/Icon";
import type { Locale } from "@/lib/i18n";

const DEMO_STRINGS = {
  es: {
    badge: "Demo en vivo",
    heading: "No nos creas. Úsala.",
    intro: "Esta es una calculadora totalmente funcional, ejecutándose aquí mismo en la página de inicio. Escribe un porcentaje y un valor: el resultado aparece al instante, igual que en su propia página.",
    points: [
      { icon: "Zap", title: "Sin recargas de página, nunca", body: "El cálculo se ejecuta en tu navegador. Cambia un número y la respuesta se actualiza en el mismo instante." },
      { icon: "ShieldCheck", title: "El mismo motor en todas partes", body: "Esta herramienta integrada es la misma calculadora que obtienes en su propia página: un motor probado, cientos de calculadoras." },
      { icon: "Gauge", title: "Nada entre tú y la respuesta", body: "Sin muros de registro, sin ventanas emergentes, sin anuncios entre la entrada y el resultado." },
    ],
  },
  en: {
    badge: "Live demo",
    heading: "Don't take our word for it. Use one.",
    intro: "This is a fully working calculator, running right here on the homepage. Type a percentage and a value — the result appears instantly, exactly as it would on its own page.",
    points: [
      { icon: "Zap", title: "No page reloads, ever", body: "The math runs in your browser. Change a number and the answer updates on the same frame." },
      { icon: "ShieldCheck", title: "The same engine everywhere", body: "This embedded tool is the exact calculator you get on its own page — one tested engine, hundreds of calculators." },
      { icon: "Gauge", title: "Nothing between you and the answer", body: "No sign-up wall, no pop-ups, no ads wedged between the input and the result." },
    ],
  },
} as const;

export function LiveDemo({ locale = "en" }: { locale?: Locale }) {
  const s = DEMO_STRINGS[locale];
  const percent = getCalculatorBySlug("percentage-calculator");
  if (!percent) return null;

  return (
    <section className="w-full border-t border-line bg-surface/30">
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand util">
              {s.badge}
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              {s.heading}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-md">
              {s.intro}
            </p>

            <ul className="mt-8 space-y-5">
              {s.points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">{p.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Working calculator */}
          <div className="lg:justify-self-end w-full max-w-calc">
            <CalculatorShell definition={percent} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
