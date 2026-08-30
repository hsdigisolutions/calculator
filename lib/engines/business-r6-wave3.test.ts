import { describe, it, expect } from "vitest";
import { businessR6Engines } from "./business-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => businessR6Engines[id](inputs);

describe("business r6 wave3 engines", () => {
  it("gross-profit: revenue minus COGS and the margin", () => {
    const r = run("gross-profit", { revenue: "100000", cogs: "60000" });
    expect(r.grossProfit as number).toBe(40000);
    expect(r.grossMargin as number).toBeCloseTo(40, 6);
  });

  it("gross-profit: zero revenue leaves margin undefined", () => {
    const r = run("gross-profit", { revenue: "0", cogs: "500" });
    expect(r.grossProfit as number).toBe(-500);
    expect(Number.isNaN(r.grossMargin as number)).toBe(true);
  });

  it("operating-margin: operating income over revenue", () => {
    const r = run("operating-margin", { operatingIncome: "25000", revenue: "125000" });
    expect(r.operatingMargin as number).toBeCloseTo(20, 6);
  });

  it("ebitda: sums the five add-backs", () => {
    const r = run("ebitda", {
      netIncome: "500000",
      interest: "120000",
      taxes: "80000",
      depreciation: "60000",
      amortization: "40000",
    });
    expect(r.ebitda as number).toBe(800000);
  });

  it("payback-period: years and months from investment and cash flow", () => {
    const r = run("payback-period", { initialInvestment: "50000", annualCashFlow: "12500" });
    expect(r.years as number).toBeCloseTo(4, 6);
    expect(r.months as number).toBeCloseTo(48, 6);
  });

  it("inventory-turnover: ratio and days to sell", () => {
    const r = run("inventory-turnover", { cogs: "500000", averageInventory: "100000" });
    expect(r.turnoverRatio as number).toBeCloseTo(5, 6);
    expect(r.daysToSell as number).toBeCloseTo(73, 6);
  });

  it("cagr: compound annual growth rate", () => {
    const r = run("cagr", { beginningValue: "100000", endingValue: "200000", years: "5" });
    expect(r.cagr as number).toBeCloseTo(14.8698, 3);
  });

  it("net-profit-margin: net profit over revenue", () => {
    const r = run("net-profit-margin", { netProfit: "18000", revenue: "150000" });
    expect(r.netMargin as number).toBeCloseTo(12, 6);
  });

  it("contribution-margin: per unit and ratio", () => {
    const r = run("contribution-margin", { pricePerUnit: "50", variableCostPerUnit: "30" });
    expect(r.contributionMargin as number).toBe(20);
    expect(r.cmRatio as number).toBeCloseTo(40, 6);
  });

  it("working-capital: assets minus liabilities and the current ratio", () => {
    const r = run("working-capital", { currentAssets: "300000", currentLiabilities: "150000" });
    expect(r.workingCapital as number).toBe(150000);
    expect(r.currentRatio as number).toBeCloseTo(2, 6);
  });

  it("burn-rate: monthly burn and runway", () => {
    const r = run("burn-rate", { startingCash: "600000", endingCash: "360000", months: "6" });
    expect(r.monthlyBurn as number).toBeCloseTo(40000, 6);
    expect(r.runwayMonths as number).toBeCloseTo(9, 6);
  });

  it("burn-rate: cash grew, so runway is undefined", () => {
    const r = run("burn-rate", { startingCash: "300000", endingCash: "360000", months: "6" });
    expect((r.monthlyBurn as number) < 0).toBe(true);
    expect(Number.isNaN(r.runwayMonths as number)).toBe(true);
  });

  it("returns NaN on missing or zero-denominator inputs", () => {
    expect(Number.isNaN(run("operating-margin", { operatingIncome: "10", revenue: "0" }).operatingMargin as number)).toBe(true);
    expect(Number.isNaN(run("payback-period", { initialInvestment: "1000", annualCashFlow: "0" }).years as number)).toBe(true);
    expect(Number.isNaN(run("inventory-turnover", { cogs: "1000", averageInventory: "0" }).turnoverRatio as number)).toBe(true);
    expect(Number.isNaN(run("cagr", { beginningValue: "0", endingValue: "200", years: "5" }).cagr as number)).toBe(true);
    expect(Number.isNaN(run("ebitda", { netIncome: "", interest: "1", taxes: "1", depreciation: "1", amortization: "1" }).ebitda as number)).toBe(true);
  });
});
