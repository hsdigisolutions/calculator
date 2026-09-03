import { describe, it, expect } from "vitest";
import { getActiveCalculators } from "./registry";
import { getCategory, CATEGORIES } from "./categories";
import { calcSlugFor, categorySlugFor } from "./i18n";

/**
 * Spanish routing invariants. ES calculator pages are keyed by (categoryEs,
 * slugEs); two active calculators sharing that path would make one page
 * unreachable, so it must be unique. Cross-category slug reuse is allowed.
 */
describe("Spanish routing slugs", () => {
  it("no two active calculators share a categoryEs/slugEs path", () => {
    const seen = new Map<string, string>();
    const collisions: string[] = [];
    for (const c of getActiveCalculators()) {
      const cat = getCategory(c.categorySlug);
      const catEs = cat ? categorySlugFor(cat, "es") : c.categorySlug;
      const key = `${catEs}/${calcSlugFor(c, "es")}`;
      const prev = seen.get(key);
      if (prev && prev !== c.slug) collisions.push(`${key}  (${prev} vs ${c.slug})`);
      else seen.set(key, c.slug);
    }
    expect(collisions, `ES route collisions:\n${collisions.join("\n")}`).toEqual([]);
  });

  it("category es slugs are unique", () => {
    const slugs = CATEGORIES.map((c) => categorySlugFor(c, "es"));
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
