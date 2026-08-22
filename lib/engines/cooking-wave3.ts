import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Cooking engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Recipe scaler: scaleFactor = desired ÷ original; scaledAmount = ingredient × scaleFactor.
const recipeScaler: ComputeFn = (i) => {
  const original = num(i.originalServings);
  const desired = num(i.desiredServings);
  const ingredient = num(i.ingredientAmount);
  const scaleFactor = original !== 0 ? desired / original : NaN;
  const scaledAmount =
    finite(ingredient) && finite(scaleFactor) ? ingredient * scaleFactor : NaN;
  return { scaleFactor, scaledAmount };
};

// Baking conversion between cups and grams using per-ingredient density.
const bakingConversion: ComputeFn = (i) => {
  const amount = num(i.amount);
  const fromUnit = String(i.fromUnit || "");
  const toUnit = String(i.toUnit || "");
  const densities: Record<string, number> = {
    flour: 120,
    sugar: 200,
    butter: 227,
    water: 236,
  };
  const density = densities[String(i.ingredient || "")] ?? 120;
  if (!finite(amount)) return { result: NaN };
  let result: number;
  if (fromUnit === toUnit) result = amount;
  else if (fromUnit === "cups" && toUnit === "grams") result = amount * density;
  else if (fromUnit === "grams" && toUnit === "cups") result = amount / density;
  else result = NaN;
  return { result };
};

// Roasting time: weight × minutes per pound, with a safe target temperature note.
const cookingTime: ComputeFn = (i) => {
  const weight = num(i.weight);
  const meatType = String(i.meatType || "");
  const minPerLb: Record<string, number> = {
    beef: 20,
    chicken: 20,
    pork: 25,
    turkey: 15,
  };
  const rate = minPerLb[meatType] ?? 20;
  const targets: Record<string, string> = {
    beef: "63°C (145°F) medium-rare",
    chicken: "74°C (165°F)",
    pork: "63°C (145°F)",
    turkey: "74°C (165°F)",
  };
  const targetTemp = targets[meatType] ?? "63°C (145°F) medium-rare";
  const time = finite(weight) ? weight * rate : NaN;
  return { cookingTime: time, targetTemp };
};

export const cookingWave3Engines: Record<string, ComputeFn> = {
  "recipe-scaler": recipeScaler,
  "baking-conversion": bakingConversion,
  "cooking-time": cookingTime,
};
