/** Global site constants used for SEO, metadata and canonical URLs. */
export const SITE_NAME = "Calcvora";
export const SITE_TAGLINE = "Calculate Anything.";
export const SITE_DESCRIPTION =
  "Free, beautiful calculators for finance, health, math and everyday life. Fast, accurate and trusted.";

/** Public origin. Set NEXT_PUBLIC_SITE_URL in production (no trailing slash). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://calcvora.com";
