import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — additional Math engines. Pure functions, no formatting.
 * Invalid / impossible inputs yield NaN (rendered as "—" by the UI). */

const finite = (x: number) => Number.isFinite(x);

// Percent error = |experimental − theoretical| ÷ |theoretical| × 100.
const percentError: ComputeFn = (i) => {
  const experimental = num(i.experimental);
  const theoretical = num(i.theoretical);
  const abserr = Math.abs(experimental - theoretical);
  return {
    percentError:
      finite(experimental) && finite(theoretical) && theoretical !== 0
        ? (abserr / Math.abs(theoretical)) * 100
        : NaN,
    absoluteError: abserr,
  };
};

// Scientific notation: mantissa × 10^exponent.
const scientificNotation: ComputeFn = (i) => {
  const number = num(i.number);
  if (!finite(number)) return { mantissa: NaN, exponent: NaN, notation: "—" };
  if (number === 0) return { mantissa: 0, exponent: 0, notation: "0" };
  const exponent = Math.floor(Math.log10(Math.abs(number)));
  const mantissa = number / Math.pow(10, exponent);
  return { mantissa, exponent, notation: `${mantissa} × 10^${exponent}` };
};

// Slope of the line through two points, plus its equation.
const slope: ComputeFn = (i) => {
  const x1 = num(i.x1);
  const y1 = num(i.y1);
  const x2 = num(i.x2);
  const y2 = num(i.y2);
  if (!finite(x1) || !finite(y1) || !finite(x2) || !finite(y2))
    return { slope: NaN, yIntercept: NaN, equation: "—" };
  const m = x2 - x1 !== 0 ? (y2 - y1) / (x2 - x1) : NaN;
  const yIntercept = y1 - m * x1;
  return {
    slope: m,
    yIntercept,
    equation: finite(m) ? `y = ${m}x + ${yIntercept}` : "—",
  };
};

// Distance between two points via the Pythagorean theorem.
const distanceTwoPoints: ComputeFn = (i) => {
  const x1 = num(i.x1);
  const y1 = num(i.y1);
  const x2 = num(i.x2);
  const y2 = num(i.y2);
  if (!finite(x1) || !finite(y1) || !finite(x2) || !finite(y2))
    return { distance: NaN, deltaX: NaN, deltaY: NaN };
  const dx = x2 - x1;
  const dy = y2 - y1;
  return { distance: Math.sqrt(dx * dx + dy * dy), deltaX: dx, deltaY: dy };
};

// Midpoint of the segment joining two points.
const midpoint: ComputeFn = (i) => {
  const x1 = num(i.x1);
  const y1 = num(i.y1);
  const x2 = num(i.x2);
  const y2 = num(i.y2);
  if (!finite(x1) || !finite(y1) || !finite(x2) || !finite(y2))
    return { midX: NaN, midY: NaN, midpoint: "—" };
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return { midX: mx, midY: my, midpoint: `(${mx}, ${my})` };
};

// Arithmetic sequence: nth term and the sum of the first n terms.
const arithmeticSequence: ComputeFn = (i) => {
  const firstTerm = num(i.firstTerm);
  const commonDifference = num(i.commonDifference);
  const n = num(i.n);
  if (!finite(firstTerm) || !finite(commonDifference) || !finite(n) || n < 1)
    return { nthTerm: NaN, sum: NaN };
  const nthTerm = firstTerm + (n - 1) * commonDifference;
  const sum = (n / 2) * (2 * firstTerm + (n - 1) * commonDifference);
  return { nthTerm, sum };
};

export const mathMoreEngines: Record<string, ComputeFn> = {
  "percent-error": percentError,
  "scientific-notation": scientificNotation,
  slope,
  "distance-two-points": distanceTwoPoints,
  midpoint,
  "arithmetic-sequence": arithmeticSequence,
};
