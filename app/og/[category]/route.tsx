import { ImageResponse } from "next/og";
import { getCategory } from "@/lib/categories";
import { getCategoryColor } from "@/lib/category-config";

// Generated on demand (nodejs runtime) and CDN-cached, so build time stays flat
// as categories grow rather than prerendering every image up front.
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const color = getCategoryColor(category);
  const label = getCategory(category)?.name ?? "Calculators";
  // Precompute as single strings so each div has exactly one text child
  // (Satori requires display:flex on any div with multiple children).
  const headline = `Free ${label} Calculators`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "520px",
            height: "520px",
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            fontSize: "26px",
            color: "rgba(244,244,245,0.5)",
            marginBottom: "16px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Calcvora
        </div>
        <div
          style={{
            display: "flex",
            background: `${color}22`,
            border: `1px solid ${color}66`,
            color: color,
            fontSize: "20px",
            padding: "8px 20px",
            borderRadius: "100px",
            marginBottom: "28px",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            color: "#F4F4F5",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            display: "flex",
          }}
        >
          {headline}
        </div>
        <div
          style={{
            width: "88px",
            height: "5px",
            background: color,
            borderRadius: "3px",
            marginTop: "36px",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
