/**
 * Per-category accent colors. The global brand stays electric sky (#0EA5E9);
 * these give each category a distinct accent used in the full-screen nav and
 * OG images without overriding the site-wide brand.
 */
export const CATEGORY_COLORS: Record<string, string> = {
  finance: "#0EA5E9",
  health: "#22C55E",
  math: "#8B5CF6",
  "date-time": "#F59E0B",
  converters: "#06B6D4",
  business: "#EC4899",
  construction: "#F97316",
  education: "#10B981",
  ecommerce: "#6366F1",
  marketing: "#EF4444",
  everyday: "#14B8A6",
  science: "#2DD4BF",
  "real-estate": "#0D9488",
  automotive: "#E11D48",
  cooking: "#D97706",
  engineering: "#3B82F6",
  sports: "#F97316",
  technology: "#6366F1",
};

export function getCategoryColor(slug: string): string {
  return CATEGORY_COLORS[slug] ?? "#0EA5E9";
}
