import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 6 — Cooking engines. Pure functions. Invalid/zero → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Butter converter: normalise the amount to grams via a per-unit weight, then
// divide by the target unit's weight. Base unit = grams.
const butterConverter: ComputeFn = (i) => {
  const amount = num(i.amount);
  const grams: Record<string, number> = {
    stick: 113,
    cup: 227,
    tbsp: 14.2,
    tsp: 4.73,
    oz: 28.35,
    gram: 1,
  };
  const from = grams[String(i.from || "")];
  const to = grams[String(i.to || "")];
  if (!finite(amount) || from === undefined || to === undefined || to === 0)
    return { result: NaN };
  return { result: (amount * from) / to };
};

// Oven temperature: convert between Celsius, Fahrenheit and (approximate) gas mark.
const ovenTemperature: ComputeFn = (i) => {
  const value = num(i.value);
  const from = String(i.from || "");
  const to = String(i.to || "");
  if (!finite(value)) return { result: NaN };

  // Reduce every input to a Fahrenheit base first.
  let f: number;
  if (from === "C") f = (value * 9) / 5 + 32;
  else if (from === "F") f = value;
  else if (from === "gas") f = value * 25 + 250; // approximate inverse
  else return { result: NaN };

  let result: number;
  if (to === "F") result = f;
  else if (to === "C") result = ((f - 32) * 5) / 9;
  else if (to === "gas") result = Math.round((f - 250) / 25); // approximate
  else return { result: NaN };

  return { result };
};

// Yeast converter: pivot through the fresh-yeast equivalent weight.
// fresh = 1, active-dry = 0.4, instant = 0.33.
const yeastConverter: ComputeFn = (i) => {
  const amount = num(i.amount);
  const factors: Record<string, number> = {
    fresh: 1,
    "active-dry": 0.4,
    instant: 0.33,
  };
  const from = factors[String(i.from || "")];
  const to = factors[String(i.to || "")];
  if (!finite(amount) || from === undefined || to === undefined || from === 0)
    return { result: NaN };
  const freshEquiv = amount / from;
  return { result: freshEquiv * to };
};

// Coffee-to-water ratio: coffee = water ÷ N for a 1:N ratio.
const coffeeToWaterRatio: ComputeFn = (i) => {
  const water = num(i.waterGrams);
  const ratio = num(i.ratio);
  if (!finite(water) || !finite(ratio) || ratio === 0)
    return { coffeeGrams: NaN };
  return { coffeeGrams: water / ratio };
};

// Recipe servings: scaleFactor = desired ÷ original; scaledAmount = amount × factor.
const recipeServings: ComputeFn = (i) => {
  const original = num(i.originalServings);
  const desired = num(i.desiredServings);
  const amount = num(i.ingredientAmount);
  const scaleFactor = finite(desired) && original !== 0 ? desired / original : NaN;
  const scaledAmount =
    finite(amount) && finite(scaleFactor) ? amount * scaleFactor : NaN;
  return { scaledAmount, scaleFactor };
};

// Calories per serving: total ÷ servings.
const caloriesPerServing: ComputeFn = (i) => {
  const total = num(i.totalCalories);
  const servings = num(i.servings);
  if (!finite(total) || servings === 0 || !finite(servings))
    return { caloriesPerServing: NaN };
  return { caloriesPerServing: total / servings };
};

// Dough hydration: water ÷ flour × 100 (baker's percentage).
const doughHydration: ComputeFn = (i) => {
  const flour = num(i.flourGrams);
  const water = num(i.waterGrams);
  if (!finite(water) || flour === 0 || !finite(flour))
    return { hydration: NaN };
  return { hydration: (water / flour) * 100 };
};

// Brine: salt (g) = water (L) × 1000 × salt% ÷ 100.
const brine: ComputeFn = (i) => {
  const waterLiters = num(i.waterLiters);
  const saltPercent = num(i.saltPercent);
  if (!finite(waterLiters) || !finite(saltPercent))
    return { saltGrams: NaN };
  return { saltGrams: (waterLiters * 1000 * saltPercent) / 100 };
};

// Meat roasting time: cooking = weight × min/kg; total = cooking + rest.
const meatRoastingTime: ComputeFn = (i) => {
  const weight = num(i.weightKg);
  const rate = num(i.minutesPerKg);
  const rest = num(i.restMinutes);
  const cookingMinutes = finite(weight) && finite(rate) ? weight * rate : NaN;
  const totalMinutes =
    finite(cookingMinutes) && finite(rest) ? cookingMinutes + rest : NaN;
  return { cookingMinutes, totalMinutes };
};

// Pizza dough: baker's percentages with salt 2.5% and yeast 0.5% of flour.
const pizzaDough: ComputeFn = (i) => {
  const balls = num(i.numberOfBalls);
  const ballWeight = num(i.ballWeightGrams);
  const hydration = num(i.hydrationPercent);
  if (!finite(balls) || !finite(ballWeight) || !finite(hydration) || balls === 0)
    return {
      flourGrams: NaN,
      waterGrams: NaN,
      saltGrams: NaN,
      yeastGrams: NaN,
    };
  const totalDough = balls * ballWeight;
  const flourGrams = totalDough / (1 + hydration / 100 + 0.025 + 0.005);
  const waterGrams = (flourGrams * hydration) / 100;
  const saltGrams = flourGrams * 0.025;
  const yeastGrams = flourGrams * 0.005;
  return { flourGrams, waterGrams, saltGrams, yeastGrams };
};

export const cookingR6Engines: Record<string, ComputeFn> = {
  "butter-converter": butterConverter,
  "oven-temperature": ovenTemperature,
  "yeast-converter": yeastConverter,
  "coffee-to-water-ratio": coffeeToWaterRatio,
  "recipe-servings": recipeServings,
  "calories-per-serving": caloriesPerServing,
  "dough-hydration": doughHydration,
  brine: brine,
  "meat-roasting-time": meatRoastingTime,
  "pizza-dough": pizzaDough,
};
