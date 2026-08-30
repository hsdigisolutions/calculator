import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — additional Health engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Body surface area — DuBois & DuBois (1916). weight kg, height cm → m².
const bodySurfaceArea: ComputeFn = (i) => {
  const weight = num(i.weight);
  const height = num(i.height);
  if (!finite(weight) || !finite(height) || weight <= 0 || height <= 0)
    return { bsa: NaN };
  const bsa = 0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425);
  return { bsa };
};

// Waist-to-height ratio — waist and height in the same unit.
const waistToHeightRatio: ComputeFn = (i) => {
  const waist = num(i.waist);
  const height = num(i.height);
  if (!finite(waist) || !finite(height) || height <= 0)
    return { ratio: NaN, category: "—" };
  const ratio = waist / height;
  const category =
    ratio < 0.4
      ? "Underweight risk"
      : ratio < 0.5
      ? "Healthy"
      : ratio < 0.6
      ? "Increased risk"
      : "High risk";
  return { ratio, category };
};

// Sleep debt — accumulated shortfall over a number of nights.
const sleepDebt: ComputeFn = (i) => {
  const idealHours = num(i.idealHours);
  const actualHours = num(i.actualHours);
  const nights = num(i.nights);
  if (!finite(idealHours) || !finite(actualHours) || !finite(nights))
    return { sleepDebt: NaN, weeklyAverage: NaN };
  const debt = (idealHours - actualHours) * nights;
  return { sleepDebt: debt, weeklyAverage: idealHours - actualHours };
};

// Blood alcohol content — Widmark estimate. Result in % BAC, floored at 0.
const bloodAlcoholContent: ComputeFn = (i) => {
  const drinks = num(i.drinks);
  const weightKg = num(i.weightKg);
  const hours = num(i.hours);
  const sex = String(i.sex ?? "male");
  if (!finite(drinks) || !finite(weightKg) || !finite(hours) || weightKg <= 0)
    return { bac: NaN };
  const r = sex === "female" ? 0.55 : 0.68;
  const grams = drinks * 14;
  const bac = Math.max(0, (grams / (weightKg * 1000 * r)) * 100 - 0.015 * hours);
  return { bac };
};

// Maximum heart rate — 220 minus age, with training zones.
const maxHeartRate: ComputeFn = (i) => {
  const age = num(i.age);
  if (!finite(age) || age < 0) return { maxHeartRate: NaN, fatBurnLow: NaN, cardioHigh: NaN };
  const maxHr = 220 - age;
  return { maxHeartRate: maxHr, fatBurnLow: 0.5 * maxHr, cardioHigh: 0.85 * maxHr };
};

export const healthMoreEngines: Record<string, ComputeFn> = {
  "body-surface-area": bodySurfaceArea,
  "waist-to-height-ratio": waistToHeightRatio,
  "sleep-debt": sleepDebt,
  "blood-alcohol-content": bloodAlcoholContent,
  "max-heart-rate": maxHeartRate,
};
