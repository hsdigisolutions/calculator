import { ImageResponse } from "next/og";
import { CATEGORIES } from "@/lib/categories";

// Statically prerender one OG image per category at build time (nodejs runtime).
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

const CATEGORY_COLORS: Record<string, string> = {
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
};

const CATEGORY_LABELS: Record<string, string> = {
  finance: "Finance",
  health: "Health & Fitness",
  math: "Math & Numbers",
  "date-time": "Date & Time",
  converters: "Converters",
  business: "Business",
  construction: "Construction",
  education: "Education",
  ecommerce: "E-commerce",
  marketing: "Marketing",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const color = CATEGORY_COLORS[category] ?? "#0EA5E9";
  const label = CATEGORY_LABELS[category] ?? "Calculators";
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
