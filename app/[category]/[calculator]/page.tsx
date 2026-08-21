import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getActiveCalculators, getCalculatorBySlug } from "@/lib/registry";
import { getCategory } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";
import { calculatorAppSchema, articleSchema, ROBOTS } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";
import { ShareBar } from "@/components/calculator/ShareBar";
import { HowToUse } from "@/components/calculator/HowToUse";
import { FormulaPanel } from "@/components/calculator/FormulaPanel";
import { ExamplePanel } from "@/components/calculator/ExamplePanel";
import { FAQSection } from "@/components/calculator/FAQSection";
import { RelatedCalculators } from "@/components/calculator/RelatedCalculators";

export const dynamicParams = false;

interface Params {
  category: string;
  calculator: string;
}

export function generateStaticParams(): Params[] {
  return getActiveCalculators().map((c) => ({
    category: c.categorySlug,
    calculator: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, calculator } = await params;
  const calc = getCalculatorBySlug(calculator);
  if (!calc || calc.categorySlug !== category) return {};
  const url = `/${calc.categorySlug}/${calc.slug}`;
  return {
    title: calc.seoTitle,
    description: calc.metaDescription,
    keywords: [calc.primaryKeyword, ...calc.secondaryKeywords],
    alternates: { canonical: url },
    robots: ROBOTS,
    openGraph: {
      title: calc.seoTitle,
      description: calc.metaDescription,
      url,
      siteName: "Calcvora",
      type: "website",
      images: [{ url: `/og/${calc.categorySlug}`, width: 1200, height: 630, alt: calc.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: calc.seoTitle,
      description: calc.metaDescription,
      images: [`/og/${calc.categorySlug}`],
    },
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categoryParam, calculator } = await params;
  const calc = getCalculatorBySlug(calculator);
  if (!calc || calc.categorySlug !== categoryParam) notFound();

  const category = getCategory(calc.categorySlug);
  const pageUrl = `${SITE_URL}/${calc.categorySlug}/${calc.slug}`;

  // WebApplication + Article JSON-LD. FAQPage and BreadcrumbList are emitted
  // by the FAQSection and Breadcrumb components below.
  const schemas = [calculatorAppSchema(calc, pageUrl), articleSchema(calc, pageUrl)];

  return (
    <article className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: category?.name ?? calc.category, href: `/${calc.categorySlug}` },
          { label: calc.title, href: `/${calc.categorySlug}/${calc.slug}` },
        ]}
      />

      <div className="max-w-calc">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          {calc.title}
        </h1>
        <p className="mt-3 text-lg text-text-secondary">{calc.shortDescription}</p>
        <div className="mt-4">
          <ShareBar title={calc.title} />
        </div>
      </div>

      <div className="mt-8 max-w-calc">
        <CalculatorShell definition={calc} />
      </div>

      <div className="max-w-calc">
        <FormulaPanel definition={calc} />
        <ExamplePanel definition={calc} />
        <HowToUse definition={calc} />
        <FAQSection definition={calc} />
      </div>

      <RelatedCalculators definition={calc} />

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
