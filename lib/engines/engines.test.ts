import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) =>
  engines[slug](inputs);

describe("math engines", () => {
  it("percentage: 20% of 150 = 30", () => {
    expect(run("percentage", { percent: "20", value: "150" }).result).toBe(30);
  });
  it("percentage: handles zero", () => {
    expect(run("percentage", { percent: "0", value: "150" }).result).toBe(0);
  });

  it("percentage-increase: 200 -> 250 = +25%", () => {
    const r = run("percentage-increase", { original: "200", updated: "250" });
    expect(r.change).toBe(25);
    expect(r.difference).toBe(50);
  });
  it("percentage-increase: decrease is negative", () => {
    expect(run("percentage-increase", { original: "100", updated: "80" }).change).toBe(-20);
  });
  it("percentage-increase: zero original -> NaN", () => {
    expect(Number.isNaN(run("percentage-increase", { original: "0", updated: "5" }).change as number)).toBe(true);
  });

  it("percentage-difference: 40 vs 60 = 40%", () => {
    const r = run("percentage-difference", { a: "40", b: "60" });
    expect(r.difference).toBe(40);
    expect(r.absolute).toBe(20);
  });
  it("percentage-difference: symmetric", () => {
    const ab = run("percentage-difference", { a: "40", b: "60" }).difference;
    const ba = run("percentage-difference", { a: "60", b: "40" }).difference;
    expect(ab).toBe(ba);
  });

  it("average: mean/median/sum/min/max", () => {
    const r = run("average", { numbers: "12, 18, 24, 30" });
    expect(r.mean).toBe(21);
    expect(r.median).toBe(21);
    expect(r.sum).toBe(84);
    expect(r.count).toBe(4);
    expect(r.min).toBe(12);
    expect(r.max).toBe(30);
  });
  it("average: empty input -> count 0", () => {
    expect(run("average", { numbers: "" }).count).toBe(0);
  });

  it("square-root: 144 -> 12", () => {
    const r = run("square-root", { number: "144" });
    expect(r.root).toBe(12);
    expect(r.squared).toBe(20736);
  });
  it("square-root: negative -> NaN", () => {
    expect(Number.isNaN(run("square-root", { number: "-4" }).root as number)).toBe(true);
  });
});

describe("finance engines", () => {
  it("mortgage: standard amortization", () => {
    const r = run("mortgage", { homePrice: "400000", downPayment: "80000", rate: "6.5", term: "30" });
    expect(r.principal).toBe(320000);
    expect(r.monthlyPayment as number).toBeCloseTo(2022.62, 1);
    expect(r.totalInterest as number).toBeGreaterThan(0);
  });
  it("mortgage: 0% rate divides evenly", () => {
    const r = run("mortgage", { homePrice: "12000", downPayment: "0", rate: "0", term: "1" });
    expect(r.monthlyPayment as number).toBeCloseTo(1000, 5);
  });
  it("mortgage: invalid (no loan) -> NaN", () => {
    expect(Number.isNaN(run("mortgage", { homePrice: "0", downPayment: "0", rate: "5", term: "30" }).monthlyPayment as number)).toBe(true);
  });

  it("compound-interest: 0% keeps principal", () => {
    const r = run("compound-interest", { principal: "1000", rate: "0", years: "10", frequency: "12", contribution: "0" });
    expect(r.futureValue as number).toBeCloseTo(1000, 5);
    expect(r.totalInterest as number).toBeCloseTo(0, 5);
  });
  it("compound-interest: grows with rate", () => {
    const r = run("compound-interest", { principal: "1000", rate: "10", years: "10", frequency: "1", contribution: "0" });
    expect(r.futureValue as number).toBeCloseTo(2593.74, 1);
  });

  it("roi: 5000 -> 8000 over 3y", () => {
    const r = run("roi", { initial: "5000", final: "8000", years: "3" });
    expect(r.roi).toBe(60);
    expect(r.netProfit).toBe(3000);
    expect(r.annualized as number).toBeCloseTo(16.96, 1);
  });
  it("roi: zero initial -> NaN", () => {
    expect(Number.isNaN(run("roi", { initial: "0", final: "100", years: "1" }).roi as number)).toBe(true);
  });
});

describe("health engines", () => {
  it("bmi: metric normal weight", () => {
    const r = run("bmi", { system: "metric", weight: "70", height: "175" });
    expect(r.bmi as number).toBeCloseTo(22.86, 1);
    expect(r.category).toBe("Normal weight");
  });
  it("bmi: imperial", () => {
    const r = run("bmi", { system: "imperial", weight: "154", height: "69" });
    expect(r.bmi as number).toBeCloseTo(22.74, 1);
  });
  it("bmi: categories", () => {
    expect(run("bmi", { system: "metric", weight: "40", height: "175" }).category).toBe("Underweight");
    expect(run("bmi", { system: "metric", weight: "100", height: "175" }).category).toBe("Obese");
  });

  it("bmr: Mifflin-St Jeor male", () => {
    expect(run("bmr", { system: "metric", sex: "male", age: "30", weight: "70", height: "175" }).bmr as number).toBeCloseTo(1648.75, 2);
  });
  it("bmr: female differs by 166", () => {
    const male = run("bmr", { system: "metric", sex: "male", age: "30", weight: "70", height: "175" }).bmr as number;
    const female = run("bmr", { system: "metric", sex: "female", age: "30", weight: "70", height: "175" }).bmr as number;
    expect(male - female).toBeCloseTo(166, 5);
  });
});

describe("date & time engines", () => {
  it("age: 20 years", () => {
    const r = run("age", { birthDate: "2000-01-01", asOf: "2020-01-01" });
    expect(r.years).toBe(20);
    expect(r.totalDays as number).toBeGreaterThan(7000);
  });
  it("age: future birth -> NaN", () => {
    expect(Number.isNaN(run("age", { birthDate: "2030-01-01", asOf: "2020-01-01" }).years as number)).toBe(true);
  });
});

describe("converter engines", () => {
  it("temperature: 100C -> 212F", () => {
    expect(run("temperature", { value: "100", from: "C", to: "F" }).result).toBe(212);
  });
  it("temperature: 32F -> 0C", () => {
    expect(run("temperature", { value: "32", from: "F", to: "C" }).result as number).toBeCloseTo(0, 6);
  });
  it("temperature: 0C -> 273.15K", () => {
    expect(run("temperature", { value: "0", from: "C", to: "K" }).result as number).toBeCloseTo(273.15, 5);
  });
});

describe("business / construction engines", () => {
  it("freelance-rate", () => {
    const r = run("freelance-rate", { targetIncome: "70000", expenses: "8000", billableHours: "25", weeks: "48", taxRate: "25" });
    expect(r.hourlyRate as number).toBeCloseTo(86.67, 1);
    expect(r.dayRate as number).toBeCloseTo(693.33, 1);
  });
  it("freelance-rate: zero hours -> NaN", () => {
    expect(Number.isNaN(run("freelance-rate", { targetIncome: "70000", billableHours: "0", weeks: "48" }).hourlyRate as number)).toBe(true);
  });

  it("paint: gallons and cans", () => {
    const r = run("paint", { wallArea: "800", deductions: "60", coats: "2", coverage: "350" });
    expect(r.gallons as number).toBeCloseTo(4.229, 2);
    expect(r.cans).toBe(5);
  });
});

describe("education engines", () => {
  it("grade: weighted", () => {
    const r = run("grade", { scores: "88, 92, 79", weights: "20, 30, 50" });
    expect(r.finalGrade as number).toBeCloseTo(84.7, 1);
    expect(r.letter).toBe("B");
  });
  it("grade: simple average when no weights", () => {
    expect(run("grade", { scores: "80, 90, 100", weights: "" }).finalGrade).toBe(90);
  });

  it("gpa: weighted by credits", () => {
    const r = run("gpa", { grades: "A, B+, A-, C", credits: "3, 4, 3, 3" });
    expect(r.gpa as number).toBeCloseTo(3.25, 2);
    expect(r.totalCredits).toBe(13);
    expect(r.courses).toBe(4);
  });
});

describe("ecommerce / marketing engines", () => {
  it("ecommerce-profit", () => {
    const r = run("ecommerce-profit", { sellingPrice: "49.99", productCost: "18", feePercent: "15", shippingCost: "5", otherCost: "2" });
    expect(r.feeAmount as number).toBeCloseTo(7.4985, 3);
    expect(r.netProfit as number).toBeCloseTo(17.49, 2);
    expect(r.margin as number).toBeCloseTo(34.99, 1);
  });

  it("roas: 20000 / 5000 = 4x", () => {
    const r = run("roas", { revenue: "20000", adSpend: "5000" });
    expect(r.roas).toBe(4);
    expect(r.roasPercent).toBe(400);
    expect(r.profit).toBe(15000);
  });
  it("roas: zero spend -> NaN", () => {
    expect(Number.isNaN(run("roas", { revenue: "100", adSpend: "0" }).roas as number)).toBe(true);
  });
});
