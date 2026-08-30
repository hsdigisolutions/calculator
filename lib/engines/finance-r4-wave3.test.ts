import { describe, it, expect } from "vitest";
import { financeR4Engines } from "./finance-r4-wave3";

const run = (id: string, inputs: Record<string, string>) => financeR4Engines[id](inputs);

describe("finance r4 wave3 engines", () => {
  it("debt-to-income: ratio and rating", () => {
    const r = run("debt-to-income", { monthlyDebt: "2000", grossMonthlyIncome: "6000" });
    expect(r.dti as number).toBeCloseTo(33.333, 2);
    expect(r.rating).toBe("Healthy");
    const r2 = run("debt-to-income", { monthlyDebt: "2500", grossMonthlyIncome: "6000" });
    expect(r2.rating).toBe("Manageable"); // 41.67%
    const r3 = run("debt-to-income", { monthlyDebt: "3500", grossMonthlyIncome: "6000" });
    expect(r3.rating).toBe("High"); // 58.3%
  });

  it("debt-to-income: zero income returns NaN", () => {
    const r = run("debt-to-income", { monthlyDebt: "2000", grossMonthlyIncome: "0" });
    expect(Number.isNaN(r.dti as number)).toBe(true);
  });

  it("rule-of-72: years to double", () => {
    const r = run("rule-of-72", { annualRate: "8" });
    expect(r.yearsToDouble as number).toBeCloseTo(9, 5);
  });

  it("rule-of-72: zero rate returns NaN", () => {
    const r = run("rule-of-72", { annualRate: "0" });
    expect(Number.isNaN(r.yearsToDouble as number)).toBe(true);
  });

  it("savings-goal: months with growth", () => {
    const r = run("savings-goal", {
      goalAmount: "20000",
      currentSavings: "5000",
      monthlyContribution: "500",
      annualRate: "6",
    });
    // months ≈ 27.0 → ceil 27
    expect(r.monthsToGoal as number).toBe(27);
    expect(r.yearsToGoal as number).toBeCloseTo(27 / 12, 5);
  });

  it("savings-goal: zero rate is simple division", () => {
    const r = run("savings-goal", {
      goalAmount: "10000",
      currentSavings: "1000",
      monthlyContribution: "300",
      annualRate: "0",
    });
    expect(r.monthsToGoal as number).toBe(30); // 9000/300
  });

  it("savings-goal: goal already met returns 0", () => {
    const r = run("savings-goal", {
      goalAmount: "5000",
      currentSavings: "6000",
      monthlyContribution: "100",
      annualRate: "5",
    });
    expect(r.monthsToGoal as number).toBe(0);
  });

  it("savings-goal: unreachable with no contribution returns NaN", () => {
    const r = run("savings-goal", {
      goalAmount: "10000",
      currentSavings: "1000",
      monthlyContribution: "0",
      annualRate: "0",
    });
    expect(Number.isNaN(r.monthsToGoal as number)).toBe(true);
  });

  it("future-value: compound growth", () => {
    const r = run("future-value", {
      presentValue: "10000",
      annualRate: "6",
      years: "10",
      compoundsPerYear: "12",
    });
    expect(r.futureValue as number).toBeCloseTo(18193.97, 0);
    expect(r.totalInterest as number).toBeCloseTo(8193.97, 0);
  });

  it("future-value: missing input returns NaN", () => {
    const r = run("future-value", { presentValue: "", annualRate: "6", years: "10" });
    expect(Number.isNaN(r.futureValue as number)).toBe(true);
  });

  it("present-value: discounts a future amount", () => {
    const r = run("present-value", {
      futureValue: "18193.97",
      annualRate: "6",
      years: "10",
      compoundsPerYear: "12",
    });
    expect(r.presentValue as number).toBeCloseTo(10000, 0);
  });

  it("present-value: missing input returns NaN", () => {
    const r = run("present-value", { futureValue: "", annualRate: "6", years: "10" });
    expect(Number.isNaN(r.presentValue as number)).toBe(true);
  });

  it("annuity-payment: amortized payment and totals", () => {
    const r = run("annuity-payment", {
      principal: "100000",
      annualRate: "6",
      years: "30",
      paymentsPerYear: "12",
    });
    expect(r.payment as number).toBeCloseTo(599.55, 1);
    expect(r.totalPaid as number).toBeCloseTo(215838, -1);
    expect(r.totalInterest as number).toBeCloseTo(115838, -1);
  });

  it("annuity-payment: zero rate splits principal evenly", () => {
    const r = run("annuity-payment", {
      principal: "12000",
      annualRate: "0",
      years: "1",
      paymentsPerYear: "12",
    });
    expect(r.payment as number).toBeCloseTo(1000, 5);
    expect(r.totalInterest as number).toBeCloseTo(0, 5);
  });

  it("salary-raise: new salary and monthly increase", () => {
    const r = run("salary-raise", { currentSalary: "60000", raisePercent: "5" });
    expect(r.newSalary as number).toBeCloseTo(63000, 5);
    expect(r.raiseAmount as number).toBeCloseTo(3000, 5);
    expect(r.monthlyIncrease as number).toBeCloseTo(250, 5);
  });

  it("salary-raise: missing input returns NaN", () => {
    const r = run("salary-raise", { currentSalary: "", raisePercent: "5" });
    expect(Number.isNaN(r.newSalary as number)).toBe(true);
  });

  it("fica-tax: below wage base and Medicare", () => {
    const r = run("fica-tax", { annualWages: "100000" });
    expect(r.socialSecurity as number).toBeCloseTo(6200, 2); // 6.2% of 100k
    expect(r.medicare as number).toBeCloseTo(1450, 2); // 1.45% of 100k
    expect(r.totalFica as number).toBeCloseTo(7650, 2);
  });

  it("fica-tax: caps Social Security at wage base and adds additional Medicare", () => {
    const r = run("fica-tax", { annualWages: "250000" });
    expect(r.socialSecurity as number).toBeCloseTo(0.062 * 168600, 2); // 10453.20
    // Medicare: 1.45% of 250k + 0.9% of (250k-200k)
    expect(r.medicare as number).toBeCloseTo(0.0145 * 250000 + 0.009 * 50000, 2);
  });

  it("fica-tax: negative wages returns NaN", () => {
    const r = run("fica-tax", { annualWages: "-5" });
    expect(Number.isNaN(r.socialSecurity as number)).toBe(true);
  });

  it("capital-gains-tax: gain, tax and net profit", () => {
    const r = run("capital-gains-tax", {
      purchasePrice: "10000",
      salePrice: "15000",
      taxRate: "15",
    });
    expect(r.capitalGain as number).toBeCloseTo(5000, 5);
    expect(r.taxOwed as number).toBeCloseTo(750, 5);
    expect(r.netProfit as number).toBeCloseTo(4250, 5);
  });

  it("capital-gains-tax: a loss owes no tax", () => {
    const r = run("capital-gains-tax", {
      purchasePrice: "15000",
      salePrice: "10000",
      taxRate: "15",
    });
    expect(r.capitalGain as number).toBeCloseTo(-5000, 5);
    expect(r.taxOwed as number).toBe(0);
    expect(r.netProfit as number).toBeCloseTo(-5000, 5);
  });

  it("student-loan: monthly payment and totals", () => {
    const r = run("student-loan", { loanAmount: "30000", annualRate: "5", years: "10" });
    expect(r.monthlyPayment as number).toBeCloseTo(318.2, 0);
    expect(r.totalPaid as number).toBeCloseTo(38184, -1);
    expect(r.totalInterest as number).toBeCloseTo(8184, -1);
  });

  it("student-loan: zero rate divides evenly", () => {
    const r = run("student-loan", { loanAmount: "24000", annualRate: "0", years: "10" });
    expect(r.monthlyPayment as number).toBeCloseTo(200, 5); // 24000/120
    expect(r.totalInterest as number).toBeCloseTo(0, 5);
  });
});
