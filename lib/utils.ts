import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CalculatorResult } from "./types";

/** Tailwind-aware className combiner. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Parse a raw form string into a finite number, or NaN. */
export function num(v: string | number | undefined | null): number {
  if (v === undefined || v === null || v === "") return NaN;
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : NaN;
}

/** Round to a fixed number of decimals without floating-point noise. */
export function round(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return value;
  const f = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * f) / f;
}

/** Format a duration expressed in whole days as "X years, Y months, Z days". */
export function formatDaysAsYMD(totalDays: number): string {
  const days = Math.max(0, Math.round(totalDays));
  const years = Math.floor(days / 365.25);
  const afterYears = days - Math.floor(years * 365.25);
  const months = Math.floor(afterYears / 30.4375);
  const remDays = Math.round(afterYears - months * 30.4375);
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  parts.push(`${remDays} ${remDays === 1 ? "day" : "days"}`);
  return parts.join(", ");
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

/**
 * Format a computed output value for display, based on the result definition.
 * Calculation logic never formats — this is the single display layer.
 */
export function formatResult(
  value: number | string,
  result: CalculatorResult
): string {
  if (typeof value === "string") return value;
  if (!Number.isFinite(value)) return "—";

  const decimals = result.decimals ?? 2;

  switch (result.format) {
    case "currency": {
      const code = result.currency ?? "USD";
      try {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: code,
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(value);
      } catch {
        const sym = CURRENCY_SYMBOLS[code] ?? "";
        return sym + formatNumber(value, decimals);
      }
    }
    case "percentage":
      return `${formatNumber(value, decimals)}%`;
    case "duration":
      return formatDaysAsYMD(value);
    case "number":
    default: {
      const s = formatNumber(value, decimals);
      return result.unit ? `${s} ${result.unit}` : s;
    }
  }
}

/** Grouped number with a bounded number of decimals, trailing zeros trimmed. */
export function formatNumber(value: number, decimals = 2): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Split a formatted result into its numeric body and trailing unit/symbol. */
export function splitResultDisplay(display: string): {
  main: string;
  suffix: string;
} {
  const m = display.match(/^(.*?)(\s[a-zA-Z%°/²³]+.*)?$/);
  if (m && m[2]) return { main: m[1], suffix: m[2].trim() };
  return { main: display, suffix: "" };
}
