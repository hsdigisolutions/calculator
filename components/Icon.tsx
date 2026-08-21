import type { SVGProps, ReactNode } from "react";

/**
 * Hand-crafted line-icon set — zero external icon libraries.
 * Each entry is the inner geometry of a 24×24 viewBox drawn with
 * currentColor strokes, rounded joins. Keeps a name-based API so call
 * sites read <Icon name="Search" size={18} />.
 */
const PATHS: Record<string, ReactNode> = {
  // ---- UI ----
  Search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </>
  ),
  ChevronRight: <path d="M9 6l6 6-6 6" />,
  ChevronDown: <path d="M6 9l6 6 6-6" />,
  ArrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  Check: <path d="M20 6L9 17l-5-5" />,
  Copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  RotateCcw: (
    <>
      <path d="M3 8a9 9 0 1 0 2.6-3.1L3 8" />
      <path d="M3 3.5V8h4.5" />
    </>
  ),
  Sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  Moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
  Info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 7.5h.01" />
    </>
  ),
  Sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
      <path d="M18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8L16 17.5l1.8-.7z" />
    </>
  ),
  Zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  Gauge: (
    <>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16l3.5-4" />
      <path d="M3 20h18" />
    </>
  ),
  ShieldCheck: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  Share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
  Printer: (
    <>
      <path d="M6 9V3h12v6" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="7" rx="1" />
    </>
  ),
  Calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <rect x="8" y="5" width="8" height="4" rx="1" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
    </>
  ),

  // ---- Category icons ----
  Sigma: <path d="M18 4H6.5l7 8-7 8H18" />,
  Landmark: (
    <>
      <path d="M12 3l9 5H3z" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 21h18" />
    </>
  ),
  HeartPulse: (
    <>
      <path d="M12 20S4 15 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 1.2-.4 2.3-1 3.3" />
      <path d="M20 13h-3l-1.5 3-3-6-1.5 3H8.5" />
    </>
  ),
  CalendarClock: (
    <>
      <path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" />
      <path d="M3 9h18M8 2v4M16 2v4" />
      <circle cx="17.5" cy="17.5" r="3.5" />
      <path d="M17.5 16v1.7l1.2.8" />
    </>
  ),
  ArrowLeftRight: (
    <>
      <path d="M4 9h16" />
      <path d="M17 6l3 3-3 3" />
      <path d="M20 15H4" />
      <path d="M7 12l-3 3 3 3" />
    </>
  ),
  Briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  HardHat: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.5V6a2 2 0 0 1 4 0v2.5" />
      <path d="M2.5 16h19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
    </>
  ),
  GraduationCap: (
    <>
      <path d="M2 9l10-4 10 4-10 4z" />
      <path d="M6 11v4.5c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5V11" />
      <path d="M22 9v5" />
    </>
  ),
  ShoppingCart: (
    <>
      <path d="M3 4h2l2.2 11h10l2-7H6.5" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  Megaphone: (
    <>
      <path d="M4 10v4h3l9 5V5L7 10H4z" />
      <path d="M18.5 9a3.5 3.5 0 0 1 0 6" />
    </>
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const geometry = PATHS[name] ?? PATHS.Calculator;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {geometry}
    </svg>
  );
}
