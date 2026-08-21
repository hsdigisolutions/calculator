import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("math extra", () => {
  it("fraction add + simplify", () => {
    const r = run("fraction", { n1: "1", d1: "2", op: "+", n2: "1", d2: "3" });
    expect(r.result).toBe("5/6");
    expect(r.decimal as number).toBeCloseTo(0.8333, 3);
  });
  it("fraction: zero denominator -> dash", () => {
    expect(run("fraction", { n1: "1", d1: "2", op: "+", n2: "1", d2: "0" }).result).toBe("—");
  });
  it("ratio simplify + scale", () => {
    const r = run("ratio", { a: "16", b: "9", scaleA: "1920" });
    expect(r.simplified).toBe("16 : 9");
    expect(r.decimal as number).toBeCloseTo(1.7778, 3);
    expect(r.scaledValue as number).toBeCloseTo(1080, 5);
  });
  it("gcf/lcm of a list", () => {
    const g = run("gcf", { numbers: "24, 36, 60" });
    expect(g.gcf).toBe(12);
    expect(g.lcm).toBe(360);
    const l = run("lcm", { numbers: "4, 6, 8" });
    expect(l.lcm).toBe(24);
    expect(l.gcf).toBe(2);
  });
  it("scientific functions", () => {
    expect(run("scientific", { value: "45", operation: "sin", angleUnit: "deg" }).result as number).toBeCloseTo(0.70711, 4);
    expect(run("scientific", { value: "144", operation: "sqrt" }).result).toBe(12);
    expect(run("scientific", { value: "5", operation: "factorial" }).result).toBe(120);
    expect(Number.isNaN(run("scientific", { value: "-1", operation: "ln" }).result as number)).toBe(true);
  });
});

describe("finance extra", () => {
  it("loan payment", () => {
    const r = run("loan", { amount: "20000", rate: "8", term: "5" });
    expect(r.monthlyPayment as number).toBeCloseTo(405.53, 1);
  });
  it("simple interest", () => {
    const r = run("simple-interest", { principal: "5000", rate: "5", years: "3" });
    expect(r.interest).toBe(750);
    expect(r.total).toBe(5750);
  });
  it("investment: zero rate keeps contributions", () => {
    const r = run("investment", { principal: "1000", contribution: "0", rate: "0", years: "10" });
    expect(r.futureValue as number).toBeCloseTo(1000, 5);
    expect(r.totalEarnings as number).toBeCloseTo(0, 5);
  });
  it("savings: zero rate sums deposits", () => {
    const r = run("savings", { start: "0", monthly: "100", rate: "0", years: "1" });
    expect(r.futureValue as number).toBeCloseTo(1200, 5);
    expect(r.interestEarned as number).toBeCloseTo(0, 5);
  });
  it("profit margin & markup", () => {
    const r = run("profit-margin", { revenue: "100", cost: "60" });
    expect(r.profit).toBe(40);
    expect(r.margin).toBe(40);
    expect(r.markup as number).toBeCloseTo(66.67, 1);
  });
  it("markup -> price", () => {
    const r = run("markup", { cost: "60", markup: "50" });
    expect(r.price).toBe(90);
    expect(r.profit).toBe(30);
    expect(r.margin as number).toBeCloseTo(33.33, 1);
  });
  it("break-even units", () => {
    const r = run("break-even", { fixedCosts: "10000", pricePerUnit: "40", variableCost: "15" });
    expect(r.units).toBe(400);
    expect(r.revenue).toBe(16000);
  });
  it("break-even: price below variable -> NaN", () => {
    expect(Number.isNaN(run("break-even", { fixedCosts: "1000", pricePerUnit: "10", variableCost: "15" }).units as number)).toBe(true);
  });
});

describe("health extra", () => {
  it("tdee = bmr * activity", () => {
    const r = run("tdee", { system: "metric", sex: "male", age: "30", weight: "70", height: "175", activity: "moderate" });
    expect(r.bmr as number).toBeCloseTo(1648.75, 1);
    expect(r.tdee as number).toBeCloseTo(2555.56, 0);
  });
  it("calorie target applies goal adjustment", () => {
    const maintain = run("calorie", { system: "metric", sex: "male", age: "30", weight: "70", height: "175", activity: "moderate", goal: "maintain" }).target as number;
    const lose = run("calorie", { system: "metric", sex: "male", age: "30", weight: "70", height: "175", activity: "moderate", goal: "lose-0.5" }).target as number;
    expect(maintain - lose).toBeCloseTo(250, 5);
  });
  it("body fat (Navy) male", () => {
    const r = run("body-fat", { system: "metric", sex: "male", height: "175", neck: "38", waist: "85" });
    expect(r.bodyFat as number).toBeCloseTo(16.94, 1);
    expect(r.category).toBe("Fitness");
  });
  it("ideal weight (Devine) male", () => {
    const r = run("ideal-weight", { system: "metric", sex: "male", height: "175" });
    expect(r.ideal as number).toBeCloseTo(70.5, 0);
  });
  it("protein for muscle", () => {
    const r = run("protein", { system: "metric", weight: "70", goal: "build-muscle" });
    expect(r.low as number).toBeCloseTo(112, 0);
    expect(r.high as number).toBeCloseTo(154, 0);
  });
  it("macro split", () => {
    const r = run("macro", { calories: "2200", split: "balanced" });
    expect(r.protein as number).toBeCloseTo(165, 0);
    expect(r.carbs as number).toBeCloseTo(220, 0);
    expect(r.fat as number).toBeCloseTo(73.33, 1);
  });
  it("water intake", () => {
    const r = run("water-intake", { system: "metric", weight: "70", activity: "45" });
    expect(r.ml as number).toBeCloseTo(2835, 0);
  });
  it("running pace", () => {
    const r = run("running-pace", { distance: "10", unit: "km", hours: "0", minutes: "50", seconds: "0" });
    expect(r.pacePerKm).toBe("5:00");
    expect(r.speedKmh as number).toBeCloseTo(12, 5);
  });
});

describe("date & time extra", () => {
  it("date difference in days", () => {
    expect(run("date-difference", { start: "2026-01-01", end: "2026-12-31" }).days).toBe(364);
  });
  it("business days: any 7-day window has 5 business + 2 weekend", () => {
    const r = run("business-days", { start: "2026-08-10", end: "2026-08-16" });
    expect(r.totalDays).toBe(7);
    expect(r.businessDays).toBe(5);
    expect(r.weekendDays).toBe(2);
  });
  it("time duration", () => {
    const r = run("time-duration", { start: "09:00", end: "17:30" });
    expect(r.duration).toBe("8h 30m");
    expect(r.hours).toBe(8.5);
    expect(r.minutes).toBe(510);
  });
  it("time duration across midnight", () => {
    expect(run("time-duration", { start: "22:00", end: "06:00" }).minutes).toBe(480);
  });
  it("overtime pay", () => {
    const r = run("overtime", { regularHours: "40", overtimeHours: "6", hourlyRate: "25", multiplier: "1.5" });
    expect(r.total).toBe(1225);
    expect(r.overtimePay).toBe(225);
  });
});

describe("converters extra", () => {
  it("length cm -> in", () => {
    expect(run("length", { value: "100", from: "cm", to: "in" }).result as number).toBeCloseTo(39.3701, 3);
  });
  it("weight kg -> lb", () => {
    expect(run("weight", { value: "70", from: "kg", to: "lb" }).result as number).toBeCloseTo(154.3236, 3);
  });
  it("speed km/h -> mph", () => {
    expect(run("speed", { value: "100", from: "km/h", to: "mph" }).result as number).toBeCloseTo(62.137, 2);
  });
  it("data MB -> GB (binary)", () => {
    expect(run("data-storage", { value: "1024", from: "MB", to: "GB" }).result as number).toBeCloseTo(1, 6);
  });
});

describe("business & construction extra", () => {
  it("revenue + gross profit", () => {
    const r = run("revenue", { units: "500", price: "40", unitCost: "22" });
    expect(r.revenue).toBe(20000);
    expect(r.grossProfit).toBe(9000);
    expect(r.margin).toBe(45);
  });
  it("cash flow", () => {
    const r = run("cash-flow", { start: "5000", inflows: "12000", outflows: "9000" });
    expect(r.net).toBe(3000);
    expect(r.ending).toBe(8000);
  });
  it("concrete volume + bags", () => {
    const r = run("concrete", { length: "10", width: "10", thickness: "4" });
    expect(r.cubicFeet as number).toBeCloseTo(33.333, 2);
    expect(r.cubicYards as number).toBeCloseTo(1.235, 2);
    expect(r.bags60).toBe(75);
  });
  it("tile count with waste", () => {
    const r = run("tile", { area: "120", tileWidth: "12", tileHeight: "12", waste: "10" });
    expect(r.tiles).toBe(120);
    expect(r.withWaste).toBe(132);
  });
});
