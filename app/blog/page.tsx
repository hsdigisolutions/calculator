import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PostCard } from "@/components/blog/PostCard";
import { getPosts } from "@/lib/wordpress";
import { SITE_NAME } from "@/lib/site";
import { ROBOTS } from "@/lib/schema";

// ISR: statically generated, revalidated hourly in the background.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides, tips and updates from ${SITE_NAME} — calculators, formulas and how to get the most from every tool.`,
  alternates: { canonical: "/blog" },
  robots: ROBOTS,
  openGraph: {
    title: `Blog — ${SITE_NAME}`,
    description: "Guides, tips and updates on calculators, formulas and getting the most from every tool.",
    url: "/blog",
    siteName: SITE_NAME,
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Blog
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          Guides, tips and updates on calculators, formulas and getting the most
          from every tool.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.databaseId} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-2xl border border-line bg-surface p-10 text-center shadow-sm">
          <p className="text-text-secondary">
            No articles yet — check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
