import type { CalculatorDefinition } from "@/lib/types";
import { Icon } from "@/components/Icon";
import { type Locale, t, calcFaqs } from "@/lib/i18n";

export function FAQSection({
  definition,
  locale = "en",
  faqsOverride,
}: {
  definition: CalculatorDefinition;
  locale?: Locale;
  /** Optional CMS-authored FAQs (answers may be HTML) that replace the JSON FAQs. */
  faqsOverride?: { question: string; answer: string }[];
}) {
  const isOverride = Array.isArray(faqsOverride) && faqsOverride.length > 0;
  const faqs = isOverride ? faqsOverride! : calcFaqs(definition, locale);
  if (!faqs.length) return null;

  const stripTags = (s: string) => s.replace(/<[^>]*>/g, "").trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: isOverride ? stripTags(f.answer) : f.answer },
    })),
  };

  return (
    <section className="mt-10" aria-labelledby="faq">
      <h2 id="faq" className="text-2xl font-semibold text-text-primary">
        {t(locale).faqs}
      </h2>
      <div className="mt-4 divide-y divide-line rounded-2xl bg-surface border border-line shadow-sm">
        {faqs.map((f, i) => (
          <details key={i} className="group px-5 sm:px-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 list-none">
              <span className="font-medium text-text-primary">{f.question}</span>
              <Icon
                name="ChevronDown"
                size={18}
                className="shrink-0 text-text-tertiary transition-transform group-open:rotate-180"
              />
            </summary>
            {isOverride ? (
              <div
                className="calcvora-cms pb-4 -mt-1 text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            ) : (
              <p className="pb-4 -mt-1 text-text-secondary leading-relaxed">
                {f.answer}
              </p>
            )}
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
