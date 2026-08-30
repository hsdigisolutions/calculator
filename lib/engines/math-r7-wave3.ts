import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — Math (geometry / algebra) engines.
 * Pure functions, no formatting. Invalid / impossible inputs yield NaN
 * (rendered as "—" by the UI). */

const finite = (x: number) => Number.isFinite(x);

// Rectangle: area = length × width; perimeter = 2(length + width).
const rectangleArea: ComputeFn = (i) => {
  const length = num(i.length);
  const width = num(i.width);
  if (!finite(length) || !finite(width))
    return { area: NaN, perimeter: NaN };
  return { area: length * width, perimeter: 2 * (length + width) };
};

// Sphere: volume = 4/3·π·r³; surface area = 4·π·r².
const sphereVolume: ComputeFn = (i) => {
  const radius = num(i.radius);
  if (!finite(radius) || radius < 0)
    return { volume: NaN, surfaceArea: NaN };
  return {
    volume: (4 / 3) * Math.PI * radius ** 3,
    surfaceArea: 4 * Math.PI * radius ** 2,
  };
};

// Cylinder: volume = π·r²·h; surface area = 2·π·r·(r + h).
const cylinderVolume: ComputeFn = (i) => {
  const radius = num(i.radius);
  const height = num(i.height);
  if (!finite(radius) || !finite(height) || radius < 0 || height < 0)
    return { volume: NaN, surfaceArea: NaN };
  return {
    volume: Math.PI * radius ** 2 * height,
    surfaceArea: 2 * Math.PI * radius * (radius + height),
  };
};

// Cone: volume = 1/3·π·r²·h.
const coneVolume: ComputeFn = (i) => {
  const radius = num(i.radius);
  const height = num(i.height);
  if (!finite(radius) || !finite(height) || radius < 0 || height < 0)
    return { volume: NaN };
  return { volume: (1 / 3) * Math.PI * radius ** 2 * height };
};

// Trapezoid: area = (base1 + base2) / 2 × height.
const trapezoidArea: ComputeFn = (i) => {
  const base1 = num(i.base1);
  const base2 = num(i.base2);
  const height = num(i.height);
  if (!finite(base1) || !finite(base2) || !finite(height))
    return { area: NaN };
  return { area: ((base1 + base2) / 2) * height };
};

// Harmonic mean of three numbers = 3 / (1/n1 + 1/n2 + 1/n3). Any zero → NaN.
const harmonicMean: ComputeFn = (i) => {
  const n1 = num(i.number1);
  const n2 = num(i.number2);
  const n3 = num(i.number3);
  if (
    !finite(n1) ||
    !finite(n2) ||
    !finite(n3) ||
    n1 === 0 ||
    n2 === 0 ||
    n3 === 0
  )
    return { harmonicMean: NaN };
  return { harmonicMean: 3 / (1 / n1 + 1 / n2 + 1 / n3) };
};

// Exponential growth: final = initial·(1 + rate)^periods; totalGrowth = final − initial.
const exponentialGrowth: ComputeFn = (i) => {
  const initial = num(i.initialValue);
  const ratePercent = num(i.growthRatePercent);
  const periods = num(i.periods);
  if (!finite(initial) || !finite(ratePercent) || !finite(periods))
    return { finalValue: NaN, totalGrowth: NaN };
  const finalValue = initial * (1 + ratePercent / 100) ** periods;
  return { finalValue, totalGrowth: finalValue - initial };
};

// Percentage of total = part / whole × 100.
const percentageOfTotal: ComputeFn = (i) => {
  const part = num(i.part);
  const whole = num(i.whole);
  if (!finite(part) || !finite(whole) || whole === 0)
    return { percentage: NaN };
  return { percentage: (part / whole) * 100 };
};

// Sum of consecutive integers from start to end (inclusive), plus the count.
const consecutiveIntegerSum: ComputeFn = (i) => {
  const start = num(i.startNumber);
  const end = num(i.endNumber);
  if (
    !finite(start) ||
    !finite(end) ||
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start > end
  )
    return { sum: NaN, count: NaN };
  const sum = (end * (end + 1)) / 2 - ((start - 1) * start) / 2;
  return { sum, count: end - start + 1 };
};

// Golden ratio: split a length so the longer part = total / φ.
const PHI = 1.618033988749895;
const goldenRatio: ComputeFn = (i) => {
  const total = num(i.totalLength);
  if (!finite(total)) return { longerSegment: NaN, shorterSegment: NaN };
  const longerSegment = total / PHI;
  return { longerSegment, shorterSegment: total - longerSegment };
};

export const mathR7Engines: Record<string, ComputeFn> = {
  "rectangle-area": rectangleArea,
  "sphere-volume": sphereVolume,
  "cylinder-volume": cylinderVolume,
  "cone-volume": coneVolume,
  "trapezoid-area": trapezoidArea,
  "harmonic-mean": harmonicMean,
  "exponential-growth": exponentialGrowth,
  "percentage-of-total": percentageOfTotal,
  "consecutive-integer-sum": consecutiveIntegerSum,
  "golden-ratio": goldenRatio,
};
