import { describe, it, expect } from "vitest";
import { cookingR6Engines } from "./cooking-r6-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  cookingR6Engines[id](inputs);

describe("cooking r6 wave3 engines", () => {
  it("butter-converter: sticks/cups/tbsp via grams base", () => {
    expect(run("butter-converter", { amount: "1", from: "stick", to: "gram" }).result as number).toBeCloseTo(113, 5);
    expect(run("butter-converter", { amount: "1", from: "cup", to: "tbsp" }).result as number).toBeCloseTo(15.9859, 3);
    expect(run("butter-converter", { amount: "2", from: "stick", to: "cup" }).result as number).toBeCloseTo(0.99559, 4);
  });

  it("oven-temperature: C/F/gas pairs", () => {
    expect(run("oven-temperature", { value: "180", from: "C", to: "F" }).result as number).toBeCloseTo(356, 5);
    expect(run("oven-temperature", { value: "356", from: "F", to: "C" }).result as number).toBeCloseTo(180, 5);
    expect(run("oven-temperature", { value: "220", from: "C", to: "gas" }).result as number).toBe(7);
    expect(run("oven-temperature", { value: "4", from: "gas", to: "F" }).result as number).toBe(350);
    expect(run("oven-temperature", { value: "4", from: "gas", to: "C" }).result as number).toBeCloseTo(176.6667, 3);
    expect(run("oven-temperature", { value: "200", from: "C", to: "C" }).result as number).toBeCloseTo(200, 5);
  });

  it("yeast-converter: pivot through fresh equivalent", () => {
    expect(run("yeast-converter", { amount: "10", from: "fresh", to: "active-dry" }).result as number).toBeCloseTo(4, 5);
    expect(run("yeast-converter", { amount: "10", from: "active-dry", to: "instant" }).result as number).toBeCloseTo(8.25, 5);
    expect(run("yeast-converter", { amount: "10", from: "fresh", to: "fresh" }).result as number).toBeCloseTo(10, 5);
  });

  it("coffee-to-water-ratio: coffee = water / N", () => {
    expect(run("coffee-to-water-ratio", { waterGrams: "500", ratio: "16" }).coffeeGrams as number).toBeCloseTo(31.25, 5);
    expect(run("coffee-to-water-ratio", { waterGrams: "540", ratio: "18" }).coffeeGrams as number).toBeCloseTo(30, 5);
  });

  it("recipe-servings: factor and scaled amount", () => {
    const r = run("recipe-servings", { originalServings: "4", desiredServings: "6", ingredientAmount: "2" });
    expect(r.scaleFactor as number).toBeCloseTo(1.5, 5);
    expect(r.scaledAmount as number).toBeCloseTo(3, 5);
  });

  it("calories-per-serving: total / servings", () => {
    expect(run("calories-per-serving", { totalCalories: "1200", servings: "4" }).caloriesPerServing as number).toBeCloseTo(300, 5);
  });

  it("dough-hydration: water / flour * 100", () => {
    expect(run("dough-hydration", { flourGrams: "500", waterGrams: "350" }).hydration as number).toBeCloseTo(70, 5);
  });

  it("brine: salt grams from water litres and percent", () => {
    expect(run("brine", { waterLiters: "2", saltPercent: "5" }).saltGrams as number).toBeCloseTo(100, 5);
  });

  it("meat-roasting-time: cooking and total minutes", () => {
    const r = run("meat-roasting-time", { weightKg: "2", minutesPerKg: "40", restMinutes: "15" });
    expect(r.cookingMinutes as number).toBeCloseTo(80, 5);
    expect(r.totalMinutes as number).toBeCloseTo(95, 5);
  });

  it("pizza-dough: baker's percentages", () => {
    const r = run("pizza-dough", { numberOfBalls: "4", ballWeightGrams: "250", hydrationPercent: "62" });
    expect(r.flourGrams as number).toBeCloseTo(606.0606, 3);
    expect(r.waterGrams as number).toBeCloseTo(375.7576, 3);
    expect(r.saltGrams as number).toBeCloseTo(15.1515, 3);
    expect(r.yeastGrams as number).toBeCloseTo(3.0303, 3);
  });

  it("returns NaN on invalid/zero inputs", () => {
    expect(Number.isNaN(run("butter-converter", { amount: "", from: "stick", to: "gram" }).result as number)).toBe(true);
    expect(Number.isNaN(run("oven-temperature", { value: "", from: "C", to: "F" }).result as number)).toBe(true);
    expect(Number.isNaN(run("coffee-to-water-ratio", { waterGrams: "500", ratio: "0" }).coffeeGrams as number)).toBe(true);
    expect(Number.isNaN(run("recipe-servings", { originalServings: "0", desiredServings: "6", ingredientAmount: "2" }).scaleFactor as number)).toBe(true);
    expect(Number.isNaN(run("calories-per-serving", { totalCalories: "1200", servings: "0" }).caloriesPerServing as number)).toBe(true);
    expect(Number.isNaN(run("dough-hydration", { flourGrams: "0", waterGrams: "350" }).hydration as number)).toBe(true);
    expect(Number.isNaN(run("pizza-dough", { numberOfBalls: "0", ballWeightGrams: "250", hydrationPercent: "62" }).flourGrams as number)).toBe(true);
  });
});
