import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/categories";
import { getCalculatorsByCategory } from "@/lib/registry";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { collectionPageSchema, ROBOTS } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryGridFilter } from "@/components/category/CategoryGridFilter";
import { Icon } from "@/components/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name} Calculators`;
  return {
    title: `${title} — Free Online ${category.name} Tools`,
    description: category.seoIntro.slice(0, 158),
    alternates: { canonical: `/${category.slug}` },
    robots: ROBOTS,
    openGraph: {
      title,
      description: category.description,
      url: `/${category.slug}`,
      siteName: "Calcvora",
      images: [{ url: `/og/${category.slug}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: category.description,
      images: [`/og/${category.slug}`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const calcs = getCalculatorsByCategory(category.slug);
  const schema = collectionPageSchema(
    category.name,
    category.seoIntro,
    calcs,
    `${SITE_URL}/${category.slug}`
  );

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: category.name, href: `/${category.slug}` },
        ]}
      />

      <div className="flex items-start gap-4">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <Icon name={category.icon} size={28} />
        </span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            {category.name} Calculators
          </h1>
          <p className="mt-2 text-lg text-text-secondary">{category.description}</p>
        </div>
      </div>

      {calcs.length > 0 ? (
        <CategoryGridFilter
          icon={category.icon}
          items={calcs.map((c) => ({
            title: c.title,
            href: `/${c.categorySlug}/${c.slug}`,
            shortDescription: c.shortDescription,
            keywords: [c.primaryKeyword, ...c.secondaryKeywords]
              .join(" ")
              .toLowerCase(),
          }))}
        />
      ) : (
        <p className="mt-10 text-text-secondary">
          Calculators in this category are coming soon.
        </p>
      )}

      <section className="mt-16 max-w-2xl">
        <h2 className="text-2xl font-semibold text-text-primary">
          About {SITE_NAME}&apos;s {category.name.toLowerCase()} calculators
        </h2>
        <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
          {(category.about ?? category.seoIntro).split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {category.faqs && category.faqs.length > 0 && (
        <section className="mt-14 max-w-2xl" aria-labelledby="cat-faq">
          <h2 id="cat-faq" className="text-2xl font-semibold text-text-primary">
            Common questions about {category.name.toLowerCase()} calculators
          </h2>
          <div className="mt-4 divide-y divide-line rounded-2xl bg-surface border border-line shadow-sm">
            {category.faqs.map((f, i) => (
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
                mainEntity: category.faqs.map((f) => ({
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
