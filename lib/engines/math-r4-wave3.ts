import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 4 — additional Math engines. Pure functions, no formatting.
 * Invalid / impossible inputs yield NaN (rendered as "—" by the UI). */

const finite = (x: number) => Number.isFinite(x);

// Quadratic formula: solve ax² + bx + c = 0.
const quadraticFormula: ComputeFn = (i) => {
  const a = num(i.a);
  const b = num(i.b);
  const c = num(i.c);
  if (!finite(a) || !finite(b) || !finite(c) || a === 0)
    return { root1: NaN, root2: NaN, discriminant: NaN, nature: "—" };
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0)
    return { root1: NaN, root2: NaN, discriminant, nature: "Complex roots" };
  const sqrt = Math.sqrt(discriminant);
  const root1 = (-b + sqrt) / (2 * a);
  const root2 = (-b - sqrt) / (2 * a);
  return {
    root1,
    root2,
    discriminant,
    nature: discriminant === 0 ? "One real root" : "Two real roots",
  };
};

// Pythagorean theorem: hypotenuse from the two legs.
const pythagorean: ComputeFn = (i) => {
  const sideA = num(i.sideA);
  const sideB = num(i.sideB);
  if (!finite(sideA) || !finite(sideB) || sideA < 0 || sideB < 0)
    return { hypotenuse: NaN };
  return { hypotenuse: Math.sqrt(sideA * sideA + sideB * sideB) };
};

// Circle: area, circumference, and diameter from the radius.
const circle: ComputeFn = (i) => {
  const radius = num(i.radius);
  if (!finite(radius) || radius < 0)
    return { area: NaN, circumference: NaN, diameter: NaN };
  return {
    area: Math.PI * radius * radius,
    circumference: 2 * Math.PI * radius,
    diameter: 2 * radius,
  };
};

// Triangle area from base and height.
const triangleArea: ComputeFn = (i) => {
  const base = num(i.base);
  const height = num(i.height);
  if (!finite(base) || !finite(height) || base < 0 || height < 0)
    return { area: NaN };
  return { area: 0.5 * base * height };
};

// Permutations: nPr = n! / (n − r)!, ordered selections without repetition.
const factorial = (x: number): number => {
  let acc = 1;
  for (let k = 2; k <= x; k++) acc *= k;
  return acc;
};
const permutations: ComputeFn = (i) => {
  const n = num(i.n);
  const r = num(i.r);
  if (
    !finite(n) ||
    !finite(r) ||
    !Number.isInteger(n) ||
    !Number.isInteger(r) ||
    n < 0 ||
    r < 0 ||
    r > n
  )
    return { permutations: NaN };
  // nPr = n × (n−1) × ... × (n−r+1)
  let result = 1;
  for (let k = 0; k < r; k++) result *= n - k;
  return { permutations: result };
};

// Prime factorization of an integer ≥ 2.
const primeFactorization: ComputeFn = (i) => {
  const number = num(i.number);
  if (!finite(number) || !Number.isInteger(number) || number < 2)
    return { factorization: "—", factorCount: NaN };
  let remaining = number;
  const factors: number[] = [];
  for (let d = 2; d * d <= remaining; d++) {
    while (remaining % d === 0) {
      factors.push(d);
      remaining /= d;
    }
  }
  if (remaining > 1) factors.push(remaining);
  return { factorization: factors.join(" × "), factorCount: factors.length };
};

// Cube root of any real number (handles negatives).
const cubeRoot: ComputeFn = (i) => {
  const number = num(i.number);
  if (!finite(number)) return { cubeRoot: NaN };
  return { cubeRoot: Math.cbrt(number) };
};

// Proportion: solve a/b = c/x for x → x = b·c / a.
const proportion: ComputeFn = (i) => {
  const a = num(i.a);
  const b = num(i.b);
  const c = num(i.c);
  if (!finite(a) || !finite(b) || !finite(c) || a === 0) return { x: NaN };
  return { x: (b * c) / a };
};

// Rounding a number to a given number of decimal places (nearest / up / down).
const rounding: ComputeFn = (i) => {
  const number = num(i.number);
  const placesRaw = i.decimalPlaces === undefined || i.decimalPlaces === "" ? 0 : num(i.decimalPlaces);
  const decimalPlaces = placesRaw;
  if (
    !finite(number) ||
    !finite(decimalPlaces) ||
    !Number.isInteger(decimalPlaces) ||
    decimalPlaces < 0
  )
    return { rounded: NaN, roundedUp: NaN, roundedDown: NaN };
  const factor = Math.pow(10, decimalPlaces);
  return {
    rounded: Math.round(number * factor) / factor,
    roundedUp: Math.ceil(number * factor) / factor,
    roundedDown: Math.floor(number * factor) / factor,
  };
};

// Linear interpolation: estimate y at x between two known points.
const linearInterpolation: ComputeFn = (i) => {
  const x1 = num(i.x1);
  const y1 = num(i.y1);
  const x2 = num(i.x2);
  const y2 = num(i.y2);
  const x = num(i.x);
  if (
    !finite(x1) ||
    !finite(y1) ||
    !finite(x2) ||
    !finite(y2) ||
    !finite(x) ||
    x2 - x1 === 0
  )
    return { y: NaN };
  return { y: y1 + ((x - x1) * (y2 - y1)) / (x2 - x1) };
};

export const mathR4Engines: Record<string, ComputeFn> = {
  "quadratic-formula": quadraticFormula,
  pythagorean,
  circle,
  "triangle-area": triangleArea,
  permutations,
  "prime-factorization": primeFactorization,
  "cube-root": cubeRoot,
  proportion,
  rounding,
  "linear-interpolation": linearInterpolation,
};
