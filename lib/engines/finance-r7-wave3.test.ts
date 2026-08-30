import { describe, it, expect } from "vitest";
import { financeR7Engines } from "./finance-r7-wave3";

const run = (id: string, inputs: Record<string, string>) => financeR7Engines[id](inputs);

describe("finance r7 wave3 engines", () => {
  it("simple-vs-compound: simple, compound and the gap between them", () => {
    const r = run("simple-vs-compound", { principal: "10000", annualRate: "5", years: "10" });
    expect(r.simpleInterest as number).toBeCloseTo(5000, 2);
    expect(r.compoundInterest as number).toBeCloseTo(6288.95, 2);
    expect(r.difference as number).toBeCloseTo(1288.95, 2);
  });

  it("loan-affordability: max loan from a monthly payment", () => {
    const r = run("loan-affordability", { monthlyPayment: "1000", annualRate: "6", years: "5" });
    expect(r.maxLoanAmount as number).toBeCloseTo(51725.56, 0);
  });

  it("loan-affordability: zero rate is payment × months", () => {
    const r = run("loan-affordability", { monthlyPayment: "1000", annualRate: "0", years: "5" });
    expect(r.maxLoanAmount as number).toBeCloseTo(60000, 2);
  });

  it("effective-annual-rate: 12% compounded monthly", () => {
    const r = run("effective-annual-rate", { nominalRate: "12", compoundsPerYear: "12" });
    expect(r.ear as number).toBeCloseTo(12.6825, 3);
  });

  it("sinking-fund: monthly deposit to hit a goal", () => {
    const r = run("sinking-fund", { futureGoal: "100000", annualRate: "6", years: "10" });
    expect(r.monthlyDeposit as number).toBeCloseTo(610.21, 1);
  });

  it("debt-snowball: months to payoff and total interest", () => {
    const r = run("debt-snowball", { totalDebt: "10000", monthlyPayment: "300", annualRate: "12" });
    expect(r.monthsToPayoff).toBe(41);
    expect(r.totalInterest as number).toBeCloseTo(2224.6, 0);
  });

  it("debt-snowball: payment below monthly interest never clears", () => {
    const r = run("debt-snowball", { totalDebt: "10000", monthlyPayment: "50", annualRate: "12" });
    expect(Number.isNaN(r.monthsToPayoff as number)).toBe(true);
    expect(Number.isNaN(r.totalInterest as number)).toBe(true);
  });

  it("dividend-yield: dividend as a percent of price", () => {
    const r = run("dividend-yield", { annualDividendPerShare: "2.50", sharePrice: "50" });
    expect(r.dividendYield as number).toBeCloseTo(5, 4);
  });

  it("pe-ratio: price divided by earnings per share", () => {
    const r = run("pe-ratio", { sharePrice: "150", earningsPerShare: "5" });
    expect(r.peRatio as number).toBeCloseTo(30, 4);
  });

  it("bond-current-yield: coupon as a percent of price", () => {
    const r = run("bond-current-yield", { annualCouponPayment: "50", bondPrice: "950" });
    expect(r.currentYield as number).toBeCloseTo(5.2632, 3);
  });

  it("stock-break-even: cost basis plus fees per share", () => {
    const r = run("stock-break-even", { buyPrice: "100", shares: "10", totalFees: "20" });
    expect(r.breakEvenPrice as number).toBeCloseTo(102, 4);
  });

  it("nest-egg: target from expenses and withdrawal rate", () => {
    const r = run("nest-egg", { annualExpenses: "40000", withdrawalRate: "4" });
    expect(r.nestEggTarget as number).toBeCloseTo(1000000, 2);
    expect(r.monthlyIncomeSupported as number).toBeCloseTo(3333.33, 2);
  });

  it("returns NaN when a required input is missing or invalid", () => {
    expect(Number.isNaN(run("simple-vs-compound", { principal: "", annualRate: "5", years: "10" }).simpleInterest as number)).toBe(true);
    expect(Number.isNaN(run("pe-ratio", { sharePrice: "150", earningsPerShare: "0" }).peRatio as number)).toBe(true);
    expect(Number.isNaN(run("nest-egg", { annualExpenses: "40000", withdrawalRate: "0" }).nestEggTarget as number)).toBe(true);
  });
});
