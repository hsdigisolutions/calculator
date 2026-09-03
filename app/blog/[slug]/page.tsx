import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  getPostBySlug,
  getPostSlugs,
  stripHtml,
  formatPostDate,
} from "@/lib/wordpress";

export const revalidate = 3600;
// New posts published after build are rendered on-demand, then cached.
export const dynamicParams = true;

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const seo = post.seo;
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const rmTitle = seo?.title?.trim();
  const description = seo?.description || stripHtml(post.excerpt).slice(0, 158) || undefined;
  const robots = seo?.robots ?? [];
  const ogImage =
    seo?.openGraph?.image?.secureUrl ||
    seo?.openGraph?.image?.url ||
    post.featuredImage?.node.sourceUrl ||
    undefined;

  return {
    // RankMath titles already include branding, so use `absolute` to bypass the
    // site's "%s — HSCalculadora" template; fall back to the plain post title.
    title: rmTitle ? { absolute: rmTitle } : post.title,
    description,
    alternates: { canonical: seo?.canonicalUrl || pageUrl },
    robots: robots.length
      ? { index: !robots.includes("noindex"), follow: !robots.includes("nofollow") }
      : undefined,
    openGraph: {
      title: seo?.openGraph?.title || rmTitle || post.title,
      description: seo?.openGraph?.description || description,
      url: seo?.openGraph?.url || pageUrl,
      type: "article",
      siteName: SITE_NAME,
      publishedTime: post.date ?? undefined,
      modifiedTime: post.modified ?? undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.openGraph?.title || rmTitle || post.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

// Token-consistent styling for the raw WordPress HTML (dark-mode-first, DM Sans
// body / Syne headings via the base CSS, brand-accented links).
const PROSE = cn(
  "text-text-secondary leading-relaxed",
  "[&_p]:mt-5 [&_p]:text-text-secondary [&_p]:leading-relaxed",
  "[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-text-primary",
  "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text-primary",
  "[&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-text-primary",
  "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80",
  "[&_strong]:text-text-primary [&_strong]:font-semibold",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-text-secondary",
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2",
  "[&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:italic",
  "[&_img]:mt-6 [&_img]:rounded-2xl [&_img]:border [&_img]:border-line",
  "[&_figure]:mt-6 [&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-text-tertiary",
  "[&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono",
  "[&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-surface-2 [&_pre]:p-4 [&_pre]:text-sm",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
  "[&_hr]:my-8 [&_hr]:border-line"
);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const img = post.featuredImage?.node;
  const date = formatPostDate(post.date);
  const author = post.author?.node?.name;
  const plainTitle = stripHtml(post.title);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seo?.title || plainTitle,
    description: post.seo?.description || stripHtml(post.excerpt),
    url: pageUrl,
    datePublished: post.date ?? undefined,
    dateModified: post.modified ?? post.date ?? undefined,
    author: author ? { "@type": "Person", name: author } : { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    image: img?.sourceUrl ? [img.sourceUrl] : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return (
    <article className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.seo?.breadcrumbTitle || plainTitle, href: `/blog/${post.slug}` },
        ]}
      />

      <header className="mx-auto max-w-2xl">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-text-tertiary">
          {date && (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="CalendarClock" size={14} />
              {date}
            </span>
          )}
          {author && <span>· {author}</span>}
        </div>
        <h1
          className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </header>

      {img && (
        <div className="mx-auto mt-8 max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.sourceUrl}
            alt={img.altText ?? plainTitle}
            className="w-full rounded-2xl border border-line"
          />
        </div>
      )}

      <div
        className={cn("mx-auto mt-8 max-w-2xl", PROSE)}
        dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
      />

      <div className="mx-auto mt-12 max-w-2xl border-t border-line pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          <Icon name="ChevronRight" size={14} className="rotate-180" />
          Back to blog
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
