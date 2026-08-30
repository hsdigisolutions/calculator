import { describe, it, expect } from "vitest";
import { everydayR6Engines } from "./everyday-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => everydayR6Engines[id](inputs);

describe("everyday r6 wave3 engines", () => {
  it("gas-trip-cost: cost and gallons from distance, mpg, price", () => {
    const r = run("gas-trip-cost", { distanceMiles: "300", mpg: "30", gasPricePerGallon: "4" });
    expect(r.gallonsUsed as number).toBeCloseTo(10, 6);
    expect(r.tripCost as number).toBeCloseTo(40, 6);
  });

  it("gas-trip-cost: zero mpg → NaN", () => {
    const r = run("gas-trip-cost", { distanceMiles: "300", mpg: "0", gasPricePerGallon: "4" });
    expect(Number.isNaN(r.tripCost as number)).toBe(true);
    expect(Number.isNaN(r.gallonsUsed as number)).toBe(true);
  });

  it("cost-per-use: item cost over times used", () => {
    const r = run("cost-per-use", { itemCost: "120", timesUsed: "40" });
    expect(r.costPerUse as number).toBeCloseTo(3, 6);
  });

  it("cost-per-use: zero uses → NaN", () => {
    const r = run("cost-per-use", { itemCost: "120", timesUsed: "0" });
    expect(Number.isNaN(r.costPerUse as number)).toBe(true);
  });

  it("price-per-unit-comparison: picks lower unit price", () => {
    const r = run("price-per-unit-comparison", { priceA: "6", sizeA: "12", priceB: "4", sizeB: "10" });
    expect(r.unitPriceA as number).toBeCloseTo(0.5, 6);
    expect(r.unitPriceB as number).toBeCloseTo(0.4, 6);
    expect(r.betterDeal).toBe("B");
  });

  it("price-per-unit-comparison: A cheaper, and equal case", () => {
    expect(run("price-per-unit-comparison", { priceA: "2", sizeA: "10", priceB: "6", sizeB: "10" }).betterDeal).toBe("A");
    expect(run("price-per-unit-comparison", { priceA: "5", sizeA: "10", priceB: "10", sizeB: "20" }).betterDeal).toBe("Equal");
  });

  it("price-per-unit-comparison: zero size → '—'", () => {
    const r = run("price-per-unit-comparison", { priceA: "6", sizeA: "0", priceB: "4", sizeB: "10" });
    expect(Number.isNaN(r.unitPriceA as number)).toBe(true);
    expect(r.betterDeal).toBe("—");
  });

  it("tip-split: total per person and tip total", () => {
    const r = run("tip-split", { billAmount: "100", tipPercent: "20", numberOfPeople: "4" });
    expect(r.tipTotal as number).toBeCloseTo(20, 6);
    expect(r.totalPerPerson as number).toBeCloseTo(30, 6);
  });

  it("tip-split: zero people → NaN", () => {
    const r = run("tip-split", { billAmount: "100", tipPercent: "20", numberOfPeople: "0" });
    expect(Number.isNaN(r.totalPerPerson as number)).toBe(true);
  });

  it("savings-rate: savings as percent of income", () => {
    const r = run("savings-rate", { monthlyIncome: "5000", monthlySavings: "1000" });
    expect(r.savingsRate as number).toBeCloseTo(20, 6);
  });

  it("savings-rate: zero income → NaN", () => {
    expect(Number.isNaN(run("savings-rate", { monthlyIncome: "0", monthlySavings: "1000" }).savingsRate as number)).toBe(true);
  });

  it("hourly-to-salary: annual and monthly", () => {
    const r = run("hourly-to-salary", { hourlyRate: "25", hoursPerWeek: "40", weeksPerYear: "52" });
    expect(r.annualSalary as number).toBeCloseTo(52000, 6);
    expect(r.monthlySalary as number).toBeCloseTo(4333.333, 2);
  });

  it("hourly-to-salary: missing rate → NaN", () => {
    expect(Number.isNaN(run("hourly-to-salary", { hourlyRate: "", hoursPerWeek: "40", weeksPerYear: "52" }).annualSalary as number)).toBe(true);
  });

  it("grocery-budget: weekly and monthly", () => {
    const r = run("grocery-budget", { people: "4", weeklyPerPerson: "75" });
    expect(r.weeklyBudget as number).toBeCloseTo(300, 6);
    expect(r.monthlyBudget as number).toBeCloseTo(1303.5, 4);
  });

  it("grocery-budget: missing input → NaN", () => {
    expect(Number.isNaN(run("grocery-budget", { people: "", weeklyPerPerson: "75" }).weeklyBudget as number)).toBe(true);
  });

  it("screen-time: week, year, and days per year", () => {
    const r = run("screen-time", { hoursPerDay: "3" });
    expect(r.hoursPerWeek as number).toBeCloseTo(21, 6);
    expect(r.hoursPerYear as number).toBeCloseTo(1095, 6);
    expect(r.daysPerYear as number).toBeCloseTo(45.625, 4);
  });

  it("screen-time: missing input → NaN", () => {
    expect(Number.isNaN(run("screen-time", { hoursPerDay: "" }).hoursPerYear as number)).toBe(true);
  });

  it("water-usage-cost: daily and monthly", () => {
    const r = run("water-usage-cost", { gallonsPerDay: "150", pricePer1000Gallons: "5" });
    expect(r.dailyCost as number).toBeCloseTo(0.75, 6);
    expect(r.monthlyCost as number).toBeCloseTo(22.5, 6);
  });

  it("water-usage-cost: missing input → NaN", () => {
    expect(Number.isNaN(run("water-usage-cost", { gallonsPerDay: "", pricePer1000Gallons: "5" }).dailyCost as number)).toBe(true);
  });

  it("pet-food-cost: days per bag and monthly cost", () => {
    const r = run("pet-food-cost", { dailyFoodOunces: "8", bagSizePounds: "30", bagCost: "45" });
    expect(r.daysPerBag as number).toBeCloseTo(60, 6);
    expect(r.monthlyCost as number).toBeCloseTo(22.5, 6);
  });

  it("pet-food-cost: zero daily ounces → NaN", () => {
    const r = run("pet-food-cost", { dailyFoodOunces: "0", bagSizePounds: "30", bagCost: "45" });
    expect(Number.isNaN(r.daysPerBag as number)).toBe(true);
    expect(Number.isNaN(r.monthlyCost as number)).toBe(true);
  });
});
