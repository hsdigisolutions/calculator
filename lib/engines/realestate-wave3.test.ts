import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (s: string, i: Record<string, string>) => engines[s](i);

describe("real estate wave3 engines", () => {
  it("cap rate", () => {
    const r = run("cap-rate", { propertyValue: "500000", annualRent: "40000", vacancyRate: "5", annualExpenses: "8000" });
    expect(r.capRate as number).toBeCloseTo(6, 4);
    expect(r.noi).toBe(30000);
    expect(r.grm as number).toBeCloseTo(12.5, 4);
  });
  it("loan-to-value", () => {
    const r = run("loan-to-value", { loanAmount: "320000", propertyValue: "400000" });
    expect(r.ltv).toBe(80);
    expect(r.equity).toBe(80000);
    expect(r.equityPercent).toBe(20);
  });
  it("down payment", () => {
    const r = run("down-payment", { homePrice: "400000", downPaymentPercent: "20" });
    expect(r.downPayment).toBe(80000);
    expect(r.loanAmount).toBe(320000);
  });
  it("closing costs", () => {
    const r = run("closing-costs", { homePrice: "400000", rate: "3" });
    expect(r.estimated).toBe(12000);
    expect(r.low).toBe(8000);
    expect(r.high).toBe(20000);
  });
  it("property tax", () => {
    const r = run("property-tax", { assessedValue: "300000", taxRate: "1.2" });
    expect(r.annualTax as number).toBeCloseTo(3600, 4);
    expect(r.monthlyTax as number).toBeCloseTo(300, 4);
  });
  it("mortgage refinance", () => {
    const r = run("mortgage-refinance", { currentBalance: "300000", currentPayment: "1800", newRate: "5", newTerm: "30", closingCosts: "6000" });
    expect(r.newPayment as number).toBeCloseTo(1610.46, 1);
    expect(r.monthlySavings as number).toBeGreaterThan(180);
    expect(r.breakevenMonths as number).toBe(32);
  });
  it("rent-vs-buy produces a finite monthly cost", () => {
    const r = run("rent-vs-buy", { homePrice: "400000", downPayment: "80000", rate: "6.5", term: "30", propertyTaxRate: "1.2", monthlyRent: "2000" });
    expect(Number.isFinite(r.buyMonthly as number)).toBe(true);
    expect(r.rentMonthly).toBe(2000);
  });
});
