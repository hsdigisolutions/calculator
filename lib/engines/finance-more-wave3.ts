import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — additional Finance engines. Pure functions, USD. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Roth IRA growth: lump sum compounds while annual contributions form an annuity.
const rothIra: ComputeFn = (i) => {
  const currentBalance = num(i.currentBalance);
  const annualContribution = num(i.annualContribution);
  const annualReturn = num(i.annualReturn);
  const years = num(i.years);
  if (![currentBalance, annualContribution, annualReturn, years].every(finite))
    return { futureValue: NaN, totalContributed: NaN, totalGrowth: NaN };
  const r = annualReturn / 100;
  const fvCurrent = currentBalance * Math.pow(1 + r, years);
  const fvContrib =
    r === 0
      ? annualContribution * years
      : annualContribution * ((Math.pow(1 + r, years) - 1) / r);
  const fv = fvCurrent + fvContrib;
  const totalContributed = currentBalance + annualContribution * years;
  return { futureValue: fv, totalContributed, totalGrowth: fv - totalContributed };
};

// 401(k): monthly compounding of balance, your contributions and employer match.
const fourZeroOneK: ComputeFn = (i) => {
  const currentBalance = num(i.currentBalance);
  const monthlyContribution = num(i.monthlyContribution);
  const annualReturn = num(i.annualReturn);
  const years = num(i.years);
  const employerMatchMonthly = num(i.employerMatchMonthly) || 0;
  if (![currentBalance, monthlyContribution, annualReturn, years].every(finite))
    return { futureValue: NaN, employerTotal: NaN, yourContributions: NaN };
  const rate = annualReturn / 100 / 12;
  const n = years * 12;
  const grow = (pmt: number) =>
    rate === 0 ? pmt * n : pmt * ((Math.pow(1 + rate, n) - 1) / rate);
  const fv =
    currentBalance * Math.pow(1 + rate, n) +
    grow(monthlyContribution) +
    grow(employerMatchMonthly);
  return {
    futureValue: fv,
    employerTotal: employerMatchMonthly * n,
    yourContributions: currentBalance + monthlyContribution * n,
  };
};

// Credit card payoff time from balance, APR and a fixed monthly payment.
const creditCardPayoff: ComputeFn = (i) => {
  const balance = num(i.balance);
  const apr = num(i.apr);
  const monthlyPayment = num(i.monthlyPayment);
  if (![balance, apr, monthlyPayment].every(finite))
    return { monthsToPayoff: NaN, totalInterest: NaN };
  const rate = apr / 1200;
  const minInterest = balance * rate;
  if (monthlyPayment <= minInterest)
    return { monthsToPayoff: NaN, totalInterest: NaN };
  const n = -Math.log(1 - (balance * rate) / monthlyPayment) / Math.log(1 + rate);
  return { monthsToPayoff: Math.ceil(n), totalInterest: monthlyPayment * n - balance };
};

// Car affordability: largest loan (and price) a monthly budget supports.
const carAffordability: ComputeFn = (i) => {
  const monthlyBudget = num(i.monthlyBudget);
  const rate = num(i.rate);
  const term = num(i.term);
  const downPayment = num(i.downPayment) || 0;
  if (![monthlyBudget, rate, term].every(finite))
    return { maxCarPrice: NaN, maxLoan: NaN };
  const r = rate / 100 / 12;
  const maxLoan =
    r === 0 ? monthlyBudget * term : (monthlyBudget * (1 - Math.pow(1 + r, -term))) / r;
  return { maxCarPrice: maxLoan + downPayment, maxLoan };
};

// Certificate of deposit maturity value at a fixed APY.
const cdInterest: ComputeFn = (i) => {
  const principal = num(i.principal);
  const apy = num(i.apy);
  const years = num(i.years);
  if (![principal, apy, years].every(finite))
    return { maturityValue: NaN, interestEarned: NaN };
  const maturity = principal * Math.pow(1 + apy / 100, years);
  return { maturityValue: maturity, interestEarned: maturity - principal };
};

// Mortgage discount points: upfront cost and months to break even on savings.
const mortgagePoints: ComputeFn = (i) => {
  const loanAmount = num(i.loanAmount);
  const points = num(i.points);
  const monthlySavings = num(i.monthlySavings);
  if (![loanAmount, points, monthlySavings].every(finite))
    return { pointsCost: NaN, breakevenMonths: NaN };
  const cost = (loanAmount * points) / 100;
  return {
    pointsCost: cost,
    breakevenMonths: monthlySavings > 0 ? Math.ceil(cost / monthlySavings) : NaN,
  };
};

export const financeMoreEngines: Record<string, ComputeFn> = {
  "roth-ira": rothIra,
  "401k": fourZeroOneK,
  "credit-card-payoff": creditCardPayoff,
  "car-affordability": carAffordability,
  "cd-interest": cdInterest,
  "mortgage-points": mortgagePoints,
};
