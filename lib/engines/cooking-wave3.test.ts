import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("cooking wave3 engines", () => {
  it("recipe-scaler: 4 -> 6 gives 1.5x and scaled amount", () => {
    const r = run("recipe-scaler", {
      originalServings: "4",
      desiredServings: "6",
      ingredientAmount: "2",
    });
    expect(r.scaleFactor).toBe(1.5);
    expect(r.scaledAmount).toBe(3);
  });
  it("recipe-scaler: zero original servings -> NaN", () => {
    const r = run("recipe-scaler", {
      originalServings: "0",
      desiredServings: "6",
      ingredientAmount: "2",
    });
    expect(Number.isNaN(r.scaleFactor as number)).toBe(true);
    expect(Number.isNaN(r.scaledAmount as number)).toBe(true);
  });
  it("recipe-scaler: no ingredient amount -> scaledAmount NaN", () => {
    const r = run("recipe-scaler", {
      originalServings: "4",
      desiredServings: "6",
      ingredientAmount: "",
    });
    expect(r.scaleFactor).toBe(1.5);
    expect(Number.isNaN(r.scaledAmount as number)).toBe(true);
  });

  it("baking-conversion: 2 cups flour -> 240 g", () => {
    const r = run("baking-conversion", {
      ingredient: "flour",
      amount: "2",
      fromUnit: "cups",
      toUnit: "grams",
    });
    expect(r.result).toBe(240);
  });
  it("baking-conversion: grams -> cups", () => {
    const r = run("baking-conversion", {
      ingredient: "sugar",
      amount: "200",
      fromUnit: "grams",
      toUnit: "cups",
    });
    expect(r.result).toBe(1);
  });
  it("baking-conversion: same unit returns amount", () => {
    const r = run("baking-conversion", {
      ingredient: "butter",
      amount: "3",
      fromUnit: "cups",
      toUnit: "cups",
    });
    expect(r.result).toBe(3);
  });

  it("cooking-time: 3 lb chicken -> 60 min", () => {
    const r = run("cooking-time", { meatType: "chicken", weight: "3" });
    expect(r.cookingTime).toBe(60);
    expect(r.targetTemp).toBe("74°C (165°F)");
  });
  it("cooking-time: invalid weight -> NaN", () => {
    const r = run("cooking-time", { meatType: "beef", weight: "" });
    expect(Number.isNaN(r.cookingTime as number)).toBe(true);
  });
});
