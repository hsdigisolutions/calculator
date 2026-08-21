import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { getActiveCalculators } from "@/lib/registry";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const calcRoutes: MetadataRoute.Sitemap = getActiveCalculators().map((c) => ({
    url: `${SITE_URL}/${c.categorySlug}/${c.slug}`,
    lastModified: new Date(c.lastReviewed),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...calcRoutes];
}
