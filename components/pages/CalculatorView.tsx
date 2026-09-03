import type { CalculatorDefinition } from "@/lib/types";
import type { CalculatorWPData } from "@/lib/wordpress-calculators";
import { parseSchemaOverride } from "@/lib/wordpress-calculators";
import { getCategory } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";
import { calculatorAppSchema, articleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";
import { ShareBar } from "@/components/calculator/ShareBar";
import { HowToUse } from "@/components/calculator/HowToUse";
import { CalculatorSidebar } from "@/components/calculator/CalculatorSidebar";
import { FormulaPanel } from "@/components/calculator/FormulaPanel";
import { ExamplePanel } from "@/components/calculator/ExamplePanel";
import { FAQSection } from "@/components/calculator/FAQSection";
import { RelatedCalculators } from "@/components/calculator/RelatedCalculators";
import {
  type Locale,
  t,
  homePath,
  categoryPath,
  calcPath,
  calcTitle,
  calcShortDescription,
  categoryName,
} from "@/lib/i18n";

export function CalculatorView({
  calc,
  locale,
  wp,
}: {
  calc: CalculatorDefinition;
  locale: Locale;
  wp?: CalculatorWPData | null;
}) {
  const s = t(locale);
  const category = getCategory(calc.categorySlug);
  const catName = category ? categoryName(category, locale) : calc.category;
  const pageUrl = `${SITE_URL}${calcPath(calc, category, locale)}`;

  // WP content overrides apply to Spanish pages only.
  const cms = locale === "es" ? wp : null;
  const introHtml = cms?.intro?.trim() || "";
  const explanationHtml = cms?.explanation?.trim() || "";
  const exampleHtml = cms?.example?.trim() || "";
  const faqsOverride = cms?.faqs && cms.faqs.length > 0 ? cms.faqs : undefined;

  // Schema override replaces the auto WebApplication schema when valid JSON.
  const override = cms?.schemaOverride ? parseSchemaOverride(cms.schemaOverride) : null;
  const schemas = [
    override ?? calculatorAppSchema(calc, pageUrl, locale),
    articleSchema(calc, pageUrl, locale),
  ];

  return (
    <article className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: s.home, href: homePath(locale) },
          { label: catName, href: category ? categoryPath(category, locale) : homePath(locale) },
          { label: calcTitle(calc, locale), href: calcPath(calc, category, locale) },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          <header className="max-w-calc">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              {calcTitle(calc, locale)}
            </h1>
            <p className="mt-3 text-lg text-text-secondary">
              {calcShortDescription(calc, locale)}
            </p>
            <div className="mt-4">
              <ShareBar title={calcTitle(calc, locale)} locale={locale} />
            </div>
          </header>

          {introHtml && (
            <div
              className="calcvora-cms mt-6 max-w-calc text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: introHtml }}
            />
          )}

          <div className="mt-8 max-w-calc">
            <CalculatorShell definition={calc} locale={locale} />
          </div>

          <div className="max-w-calc">
            <FormulaPanel definition={calc} locale={locale} explanationHtml={explanationHtml || undefined} />
            <ExamplePanel definition={calc} locale={locale} exampleHtml={exampleHtml || undefined} />
            <HowToUse definition={calc} locale={locale} />
            <FAQSection definition={calc} locale={locale} faqsOverride={faqsOverride} />
          </div>
        </div>

        <CalculatorSidebar definition={calc} locale={locale} />
      </div>

      <RelatedCalculators definition={calc} locale={locale} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </article>
  );
}
