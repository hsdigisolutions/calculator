import { renderSitemapIndexXml } from "@/lib/sitemap-entries";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapIndexXml(), {
    headers: { "Content-Type": "application/xml" },
  });
}
