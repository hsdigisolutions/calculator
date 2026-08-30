import { describe, it, expect } from "vitest";
import { financeMoreEngines } from "./finance-more-wave3";

const run = (id: string, inputs: Record<string, string>) => financeMoreEngines[id](inputs);

describe("finance more wave3 engines", () => {
  it("cd-interest: maturity value compounds at APY", () => {
    const r = run("cd-interest", { principal: "10000", apy: "5", years: "3" });
    expect(r.maturityValue as number).toBeCloseTo(11576.25, 2);
    expect(r.interestEarned as number).toBeCloseTo(1576.25, 2);
  });

  it("car-affordability: max car price from budget plus down payment", () => {
    const r = run("car-affordability", {
      monthlyBudget: "400",
      rate: "6",
      term: "60",
      downPayment: "3000",
    });
    expect(r.maxCarPrice as number).toBeCloseTo(23690, -1);
    expect(r.maxLoan as number).toBeCloseTo(20690, -1);
  });

  it("credit-card-payoff: months to clear the balance", () => {
    const r = run("credit-card-payoff", {
      balance: "5000",
      apr: "20",
      monthlyPayment: "200",
    });
    // n ≈ 32.61 → ceil rounds a partial final month up to a whole month.
    expect(r.monthsToPayoff).toBe(33);
    expect(r.totalInterest as number).toBeCloseTo(1521.71, 0);
  });

  it("credit-card-payoff: payment below monthly interest never clears", () => {
    const r = run("credit-card-payoff", { balance: "5000", apr: "20", monthlyPayment: "50" });
    expect(Number.isNaN(r.monthsToPayoff as number)).toBe(true);
    expect(Number.isNaN(r.totalInterest as number)).toBe(true);
  });

  it("roth-ira: contributions grow as an annuity on top of the balance", () => {
    const r = run("roth-ira", {
      currentBalance: "10000",
      annualContribution: "7000",
      annualReturn: "7",
      years: "30",
    });
    expect(r.futureValue as number).toBeCloseTo(737348, -1);
    expect(r.totalContributed as number).toBe(220000);
  });

  it("mortgage-points: cost and break-even months", () => {
    const r = run("mortgage-points", {
      loanAmount: "300000",
      points: "1",
      monthlySavings: "50",
    });
    expect(r.pointsCost).toBe(3000);
    expect(r.breakevenMonths).toBe(60);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("cd-interest", { principal: "", apy: "5", years: "3" }).maturityValue as number)).toBe(true);
    expect(Number.isNaN(run("roth-ira", { currentBalance: "1000", annualContribution: "", annualReturn: "7", years: "10" }).futureValue as number)).toBe(true);
  });
});
