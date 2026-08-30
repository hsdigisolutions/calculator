import { describe, it, expect } from "vitest";
import { realestateR6Engines } from "./realestate-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => realestateR6Engines[id](inputs);

describe("real estate r6 wave3 engines", () => {
  it("price-per-square-foot: price divided by area", () => {
    const r = run("price-per-square-foot", { propertyPrice: "400000", squareFeet: "2000" });
    expect(r.pricePerSqFt as number).toBeCloseTo(200, 6);
  });

  it("price-per-square-foot: zero area returns NaN", () => {
    expect(Number.isNaN(run("price-per-square-foot", { propertyPrice: "400000", squareFeet: "0" }).pricePerSqFt as number)).toBe(true);
  });

  it("gross-rent-multiplier: price divided by annual rent", () => {
    const r = run("gross-rent-multiplier", { propertyPrice: "500000", annualGrossRent: "40000" });
    expect(r.grm as number).toBeCloseTo(12.5, 6);
  });

  it("gross-rent-multiplier: zero rent returns NaN", () => {
    expect(Number.isNaN(run("gross-rent-multiplier", { propertyPrice: "500000", annualGrossRent: "0" }).grm as number)).toBe(true);
  });

  it("cash-on-cash-return: cash flow over invested as percent", () => {
    const r = run("cash-on-cash-return", { annualPreTaxCashFlow: "8000", totalCashInvested: "100000" });
    expect(r.cocReturn as number).toBeCloseTo(8, 6);
  });

  it("cash-on-cash-return: zero invested returns NaN", () => {
    expect(Number.isNaN(run("cash-on-cash-return", { annualPreTaxCashFlow: "8000", totalCashInvested: "0" }).cocReturn as number)).toBe(true);
  });

  it("net-operating-income: income minus expenses (can be negative)", () => {
    expect(run("net-operating-income", { grossOperatingIncome: "50000", operatingExpenses: "18000" }).noi as number).toBe(32000);
    expect(run("net-operating-income", { grossOperatingIncome: "10000", operatingExpenses: "18000" }).noi as number).toBe(-8000);
  });

  it("net-operating-income: missing input returns NaN", () => {
    expect(Number.isNaN(run("net-operating-income", { grossOperatingIncome: "", operatingExpenses: "18000" }).noi as number)).toBe(true);
  });

  it("vacancy-rate: vacant over total, plus occupancy", () => {
    const r = run("vacancy-rate", { vacantUnits: "3", totalUnits: "50" });
    expect(r.vacancyRate as number).toBeCloseTo(6, 6);
    expect(r.occupancyRate as number).toBeCloseTo(94, 6);
  });

  it("vacancy-rate: zero total units returns NaN", () => {
    expect(Number.isNaN(run("vacancy-rate", { vacantUnits: "3", totalUnits: "0" }).vacancyRate as number)).toBe(true);
  });

  it("rent-affordability: monthly income times share", () => {
    const r = run("rent-affordability", { annualIncome: "60000", rentToIncomePercent: "30" });
    expect(r.maxMonthlyRent as number).toBeCloseTo(1500, 6);
  });

  it("mortgage-payoff: months and total interest", () => {
    const r = run("mortgage-payoff", { currentBalance: "200000", monthlyPayment: "1200", annualRate: "5" });
    // r=0.0041667; n = -ln(1 - 200000*r/1200)/ln(1+r) ≈ 285.14 months
    expect(r.monthsToPayoff as number).toBeCloseTo(285.14, 1);
    expect(r.totalInterest as number).toBeCloseTo(142170.5, 0);
  });

  it("mortgage-payoff: payment below monthly interest never pays off", () => {
    const r = run("mortgage-payoff", { currentBalance: "200000", monthlyPayment: "500", annualRate: "5" });
    expect(Number.isNaN(r.monthsToPayoff as number)).toBe(true);
    expect(Number.isNaN(r.totalInterest as number)).toBe(true);
  });

  it("mortgage-payoff: zero rate divides evenly", () => {
    const r = run("mortgage-payoff", { currentBalance: "12000", monthlyPayment: "1000", annualRate: "0" });
    expect(r.monthsToPayoff as number).toBeCloseTo(12, 6);
    expect(r.totalInterest as number).toBeCloseTo(0, 6);
  });

  it("home-appreciation: compounds and reports gain", () => {
    const r = run("home-appreciation", { currentValue: "300000", annualAppreciationRate: "4", years: "10" });
    expect(r.futureValue as number).toBeCloseTo(444073.29, 1);
    expect(r.totalGain as number).toBeCloseTo(144073.29, 1);
  });

  it("rental-property-roi: net income over price as percent", () => {
    const r = run("rental-property-roi", { annualRentalIncome: "24000", annualExpenses: "9000", purchasePrice: "250000" });
    expect(r.roi as number).toBeCloseTo(6, 6);
    expect(r.annualCashFlow as number).toBe(15000);
  });

  it("rental-property-roi: zero price returns NaN", () => {
    expect(Number.isNaN(run("rental-property-roi", { annualRentalIncome: "24000", annualExpenses: "9000", purchasePrice: "0" }).roi as number)).toBe(true);
  });

  it("seller-net-proceeds: sale minus balance, commission and costs", () => {
    const r = run("seller-net-proceeds", { salePrice: "500000", mortgageBalance: "300000", commissionPercent: "6", otherClosingCosts: "4000" });
    // commission = 30000; totalCosts = 34000; net = 500000-300000-30000-4000 = 166000
    expect(r.netProceeds as number).toBe(166000);
    expect(r.totalCosts as number).toBe(34000);
  });

  it("seller-net-proceeds: missing sale price returns NaN", () => {
    expect(Number.isNaN(run("seller-net-proceeds", { salePrice: "", mortgageBalance: "300000", commissionPercent: "6", otherClosingCosts: "4000" }).netProceeds as number)).toBe(true);
  });
});
