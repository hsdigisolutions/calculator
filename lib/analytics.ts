import { track } from "@vercel/analytics";

/**
 * Thin wrappers around Vercel Analytics custom events. No-op outside Vercel,
 * so they are safe to call anywhere on the client.
 */
export function trackCalculatorUsed(slug: string, category: string) {
  track("calculator_used", { slug, category });
}

export function trackFinderSearch(query: string, resultCount: number) {
  track("finder_search", { query, resultCount });
}

export function trackFinderNavigated(fromQuery: string, toHref: string) {
  track("finder_navigated", { fromQuery, toHref });
}
