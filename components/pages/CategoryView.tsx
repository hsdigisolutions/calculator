import type { Category } from "@/lib/types";
import { getCalculatorsByCategory } from "@/lib/registry";
import { getCategory } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";
import { collectionPageSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryGridFilter } from "@/components/category/CategoryGridFilter";
import { Icon } from "@/components/Icon";
import {
  type Locale,
  t,
  homePath,
  categoryPath,
  calcPath,
  calcTitle,
  calcShortDescription,
  calcPrimaryKeyword,
  calcSecondaryKeywords,
  categoryName,
  categoryDescription,
  categorySeoIntro,
  categoryAbout,
  categoryFaqs,
} from "@/lib/i18n";

export function CategoryView({
  category,
  locale,
}: {
  category: Category;
  locale: Locale;
}) {
  const s = t(locale);
  const name = categoryName(category, locale);
  const nameLower = name.toLowerCase();
  const calcs = getCalculatorsByCategory(category.slug);
  const faqs = categoryFaqs(category, locale);
  const about = categoryAbout(category, locale) ?? categorySeoIntro(category, locale);

  const schema = collectionPageSchema(
    name,
    categorySeoIntro(category, locale),
    calcs,
    `${SITE_URL}${categoryPath(category, locale)}`,
    locale
  );

  const heading =
    locale === "es" ? `Calculadoras de ${name}` : `${name} Calculators`;

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: s.home, href: homePath(locale) },
          { label: name, href: categoryPath(category, locale) },
        ]}
      />

      <div className="flex items-start gap-4">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <Icon name={category.icon} size={28} />
        </span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            {heading}
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            {categoryDescription(category, locale)}
          </p>
        </div>
      </div>

      {calcs.length > 0 ? (
        <CategoryGridFilter
          icon={category.icon}
          locale={locale}
          items={calcs.map((c) => {
            const cat = getCategory(c.categorySlug);
            return {
              title: calcTitle(c, locale),
              href: calcPath(c, cat, locale),
              shortDescription: calcShortDescription(c, locale),
              keywords: [calcPrimaryKeyword(c, locale), ...calcSecondaryKeywords(c, locale)]
                .join(" ")
                .toLowerCase(),
            };
          })}
        />
      ) : (
        <p className="mt-10 text-text-secondary">{s.comingSoon}</p>
      )}

      <section className="mt-16 max-w-2xl">
        <h2 className="text-2xl font-semibold text-text-primary">
          {s.aboutHeading} {nameLower}
        </h2>
        <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
          {about.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="mt-14 max-w-2xl" aria-labelledby="cat-faq">
          <h2 id="cat-faq" className="text-2xl font-semibold text-text-primary">
            {s.commonQuestions} {nameLower}
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
                <p className="pb-4 -mt-1 text-text-secondary leading-relaxed">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              }),
            }}
          />
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
