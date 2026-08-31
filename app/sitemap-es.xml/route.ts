import { renderSitemapXml } from "@/lib/sitemap-entries";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapXml("es"), {
    headers: { "Content-Type": "application/xml" },
  });
}
