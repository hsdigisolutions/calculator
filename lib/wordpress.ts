/**
 * Headless WordPress (WPGraphQL) client for the blog.
 *
 * Fetches posts + RankMath SEO from the WPGraphQL endpoint. All queries use
 * Next's fetch cache with ISR (revalidate) so pages stay static and refresh in
 * the background. Every call is resilient: on a network/GraphQL error it returns
 * a safe empty value so the build and pages never crash when the CMS is down or
 * has no content yet.
 */

export const WP_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  "https://cms.hscalculadora.com/graphql";

/** Seconds between background revalidations (1 hour). */
export const BLOG_REVALIDATE = 3600;

// ---------------- Types ----------------

export interface WPImage {
  sourceUrl: string;
  altText: string | null;
}

export interface WPSeoOpenGraph {
  title: string | null;
  description: string | null;
  url: string | null;
  type: string | null;
  image: {
    url: string | null;
    secureUrl: string | null;
    width: number | null;
    height: number | null;
  } | null;
}

export interface WPSeo {
  title: string | null;
  description: string | null;
  canonicalUrl: string | null;
  focusKeywords: string[] | null;
  robots: string[] | null;
  breadcrumbTitle: string | null;
  openGraph: WPSeoOpenGraph | null;
}

export interface WPPostListItem {
  databaseId: number;
  title: string;
  slug: string;
  date: string | null;
  excerpt: string | null;
  featuredImage: { node: WPImage } | null;
  author: { node: { name: string | null } } | null;
  seo: Pick<WPSeo, "title" | "description"> | null;
}

export interface WPPost extends WPPostListItem {
  content: string | null;
  modified: string | null;
  seo: WPSeo | null;
}

// ---------------- Fetch ----------------

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

async function wpFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate: number = BLOG_REVALIDATE
): Promise<T | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
      next: { revalidate },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as GraphQLResponse<T>;
    if (json.errors?.length) {
      console.error("WPGraphQL errors:", json.errors.map((e) => e.message).join("; "));
      return null;
    }
    return json.data ?? null;
  } catch (err) {
    // Timeout, DNS failure, CMS down — degrade gracefully rather than break the build.
    console.error("WPGraphQL fetch failed:", (err as Error).message);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// ---------------- Queries ----------------

const LIST_FIELDS = `
  databaseId
  title
  slug
  date
  excerpt
  featuredImage { node { sourceUrl altText } }
  author { node { name } }
  seo { title description }
`;

const SEO_FIELDS = `
  seo {
    title
    description
    canonicalUrl
    focusKeywords
    robots
    breadcrumbTitle
    openGraph {
      title
      description
      url
      type
      image { url secureUrl width height }
    }
  }
`;

/** List published posts, newest first, for the blog index. */
export async function getPosts(first = 24): Promise<WPPostListItem[]> {
  const data = await wpFetch<{ posts: { nodes: WPPostListItem[] } }>(
    `query BlogPosts($first: Int!) {
      posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
        nodes { ${LIST_FIELDS} }
      }
    }`,
    { first }
  );
  return data?.posts?.nodes ?? [];
}

/** All published post slugs, for generateStaticParams. */
export async function getPostSlugs(): Promise<string[]> {
  const data = await wpFetch<{ posts: { nodes: { slug: string }[] } }>(
    `query BlogSlugs {
      posts(first: 200, where: { status: PUBLISH }) { nodes { slug } }
    }`
  );
  return (data?.posts?.nodes ?? []).map((n) => n.slug);
}

/** Strip HTML tags and decode a few common entities (for excerpts/titles in text contexts). */
export function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

/** Format an ISO date for display. */
export function formatPostDate(iso?: string | null): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

/** A single post by slug, with content + full RankMath SEO. */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await wpFetch<{ post: WPPost | null }>(
    `query BlogPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        databaseId
        title
        slug
        date
        modified
        content
        excerpt
        featuredImage { node { sourceUrl altText } }
        author { node { name } }
        ${SEO_FIELDS}
      }
    }`,
    { slug }
  );
  return data?.post ?? null;
}
