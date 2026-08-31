import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing:
 *  - English is served directly under /en/...
 *  - Spanish is the default and is served prefix-less; requests are rewritten to
 *    the internal /es/... tree so the URL bar stays clean.
 *  - Any explicit /es/... URL is 308-redirected to its canonical prefix-less form
 *    so there is exactly one indexable Spanish URL.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // English: serve the /en tree directly.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  // Canonicalize any /es-prefixed URL to the prefix-less form.
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = req.nextUrl.clone();

  // Localized all-calculators slug: public /calculadoras -> internal /es/calculators.
  if (pathname === "/calculadoras") {
    url.pathname = "/es/calculators";
    return NextResponse.rewrite(url);
  }
  // Avoid a duplicate at the English word: redirect to the canonical Spanish slug.
  if (pathname === "/calculators") {
    url.pathname = "/calculadoras";
    return NextResponse.redirect(url, 308);
  }

  // Everything else prefix-less = Spanish: rewrite into the internal /es tree.
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, the OG image routes, sitemaps, robots and any file with an extension.
  matcher: ["/((?!_next|og|sitemap|robots\\.txt|.*\\.).*)"],
};
