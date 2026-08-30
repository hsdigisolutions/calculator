import { describe, it, expect } from "vitest";
import { businessR8Engines } from "./business-r8-wave3";

const run = (id: string, inputs: Record<string, string>) => businessR8Engines[id](inputs);

describe("business r8 wave3 engines", () => {
  it("markup-to-margin: converts markup % to margin %", () => {
    const r = run("markup-to-margin", { markupPercent: "50" });
    expect(r.marginPercent as number).toBeCloseTo(33.3333, 3);
  });

  it("discount-chain: applies two successive discounts", () => {
    const r = run("discount-chain", {
      originalPrice: "100",
      discount1Percent: "20",
      discount2Percent: "10",
    });
    expect(r.finalPrice as number).toBeCloseTo(72, 2);
    expect(r.totalSavings as number).toBeCloseTo(28, 2);
    expect(r.effectiveDiscount as number).toBeCloseTo(28, 2);
  });

  it("sales-commission: percent of sales", () => {
    const r = run("sales-commission", { salesAmount: "20000", commissionPercent: "5" });
    expect(r.commission as number).toBeCloseTo(1000, 2);
  });

  it("target-profit-price: price from cost and desired margin", () => {
    const r = run("target-profit-price", { unitCost: "40", desiredMarginPercent: "20" });
    expect(r.sellingPrice as number).toBeCloseTo(50, 2);
    expect(r.profitPerUnit as number).toBeCloseTo(10, 2);
  });

  it("employee-turnover-rate: separations over average headcount", () => {
    const r = run("employee-turnover-rate", { separations: "15", averageEmployees: "120" });
    expect(r.turnoverRate as number).toBeCloseTo(12.5, 3);
  });

  it("revenue-per-employee: revenue divided by headcount", () => {
    const r = run("revenue-per-employee", { totalRevenue: "5000000", employees: "25" });
    expect(r.revenuePerEmployee as number).toBeCloseTo(200000, 2);
  });

  it("operating-cash-flow: net income + depreciation − WC change", () => {
    const r = run("operating-cash-flow", {
      netIncome: "500000",
      depreciation: "80000",
      workingCapitalChange: "30000",
    });
    expect(r.operatingCashFlow as number).toBeCloseTo(550000, 2);
  });

  it("quick-ratio: liquid assets over current liabilities", () => {
    const r = run("quick-ratio", {
      currentAssets: "300000",
      inventory: "100000",
      currentLiabilities: "150000",
    });
    expect(r.quickRatio as number).toBeCloseTo(1.3333, 3);
  });

  it("debt-to-equity: total debt over total equity", () => {
    const r = run("debt-to-equity", { totalDebt: "400000", totalEquity: "800000" });
    expect(r.debtToEquity as number).toBeCloseTo(0.5, 3);
  });

  it("return-on-assets: net income over total assets", () => {
    const r = run("return-on-assets", { netIncome: "90000", totalAssets: "600000" });
    expect(r.roa as number).toBeCloseTo(15, 3);
  });

  it("returns NaN on invalid or divide-by-zero inputs", () => {
    expect(Number.isNaN(run("markup-to-margin", { markupPercent: "" }).marginPercent as number)).toBe(true);
    expect(Number.isNaN(run("discount-chain", { originalPrice: "0", discount1Percent: "10", discount2Percent: "5" }).finalPrice as number)).toBe(true);
    expect(Number.isNaN(run("sales-commission", { salesAmount: "abc", commissionPercent: "5" }).commission as number)).toBe(true);
    expect(Number.isNaN(run("target-profit-price", { unitCost: "40", desiredMarginPercent: "100" }).sellingPrice as number)).toBe(true);
    expect(Number.isNaN(run("employee-turnover-rate", { separations: "10", averageEmployees: "0" }).turnoverRate as number)).toBe(true);
    expect(Number.isNaN(run("revenue-per-employee", { totalRevenue: "100000", employees: "0" }).revenuePerEmployee as number)).toBe(true);
    expect(Number.isNaN(run("operating-cash-flow", { netIncome: "", depreciation: "5", workingCapitalChange: "3" }).operatingCashFlow as number)).toBe(true);
    expect(Number.isNaN(run("quick-ratio", { currentAssets: "100", inventory: "20", currentLiabilities: "0" }).quickRatio as number)).toBe(true);
    expect(Number.isNaN(run("debt-to-equity", { totalDebt: "100", totalEquity: "0" }).debtToEquity as number)).toBe(true);
    expect(Number.isNaN(run("return-on-assets", { netIncome: "100", totalAssets: "0" }).roa as number)).toBe(true);
  });
});
