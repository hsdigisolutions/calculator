import type { ComputeFn } from "../types";

/* Wave 3 R7 — additional Finance engines. Pure functions, USD. Invalid/zero → NaN. */

const finite = (x: number) => Number.isFinite(x);
// Number() parse, but empty/missing input is invalid → NaN (renders as "—").
const n = (v: string | undefined) => (v === undefined || v === "" ? NaN : Number(v));

// Simple vs compound interest on a principal over a number of years.
const simpleVsCompound: ComputeFn = (i) => {
  const principal = n(i.principal);
  const annualRate = n(i.annualRate);
  const years = n(i.years);
  if (![principal, annualRate, years].every(finite))
    return { simpleInterest: NaN, compoundInterest: NaN, difference: NaN };
  const r = annualRate / 100;
  const simple = principal * r * years;
  const compound = principal * (Math.pow(1 + r, years) - 1);
  return {
    simpleInterest: simple,
    compoundInterest: compound,
    difference: compound - simple,
  };
};

// Largest loan a fixed monthly payment supports over a term of years.
const loanAffordability: ComputeFn = (i) => {
  const monthlyPayment = n(i.monthlyPayment);
  const annualRate = n(i.annualRate);
  const years = n(i.years);
  if (![monthlyPayment, annualRate, years].every(finite) || years <= 0)
    return { maxLoanAmount: NaN };
  const r = annualRate / 100 / 12;
  const N = years * 12;
  const maxLoan =
    r === 0 ? monthlyPayment * N : (monthlyPayment * (1 - Math.pow(1 + r, -N))) / r;
  return { maxLoanAmount: maxLoan };
};

// Effective annual rate from a nominal rate compounded n times per year.
const effectiveAnnualRate: ComputeFn = (i) => {
  const nominalRate = n(i.nominalRate);
  const compoundsPerYear = n(i.compoundsPerYear);
  if (![nominalRate, compoundsPerYear].every(finite) || compoundsPerYear <= 0)
    return { ear: NaN };
  const periods = compoundsPerYear;
  const ear = (Math.pow(1 + nominalRate / 100 / periods, periods) - 1) * 100;
  return { ear };
};

// Level monthly deposit needed to reach a future savings goal (sinking fund).
const sinkingFund: ComputeFn = (i) => {
  const futureGoal = n(i.futureGoal);
  const annualRate = n(i.annualRate);
  const years = n(i.years);
  if (![futureGoal, annualRate, years].every(finite) || years <= 0)
    return { monthlyDeposit: NaN };
  const r = annualRate / 100 / 12;
  const N = years * 12;
  const deposit = r === 0 ? futureGoal / N : (futureGoal * r) / (Math.pow(1 + r, N) - 1);
  return { monthlyDeposit: deposit };
};

// Debt payoff time and total interest from a fixed monthly payment.
const debtSnowball: ComputeFn = (i) => {
  const totalDebt = n(i.totalDebt);
  const monthlyPayment = n(i.monthlyPayment);
  const annualRate = n(i.annualRate);
  if (![totalDebt, monthlyPayment, annualRate].every(finite))
    return { monthsToPayoff: NaN, totalInterest: NaN };
  const r = annualRate / 100 / 12;
  if (r === 0) {
    if (monthlyPayment <= 0) return { monthsToPayoff: NaN, totalInterest: NaN };
    const n0 = totalDebt / monthlyPayment;
    return { monthsToPayoff: Math.ceil(n0), totalInterest: 0 };
  }
  const monthlyInterest = totalDebt * r;
  if (monthlyPayment <= monthlyInterest)
    return { monthsToPayoff: NaN, totalInterest: NaN };
  const months = -Math.log(1 - (totalDebt * r) / monthlyPayment) / Math.log(1 + r);
  return { monthsToPayoff: Math.ceil(months), totalInterest: monthlyPayment * months - totalDebt };
};

// Dividend yield: annual dividend per share as a percent of share price.
const dividendYield: ComputeFn = (i) => {
  const annualDividendPerShare = n(i.annualDividendPerShare);
  const sharePrice = n(i.sharePrice);
  if (![annualDividendPerShare, sharePrice].every(finite) || sharePrice <= 0)
    return { dividendYield: NaN };
  return { dividendYield: (annualDividendPerShare / sharePrice) * 100 };
};

// Price-to-earnings ratio: share price divided by earnings per share.
const peRatio: ComputeFn = (i) => {
  const sharePrice = n(i.sharePrice);
  const earningsPerShare = n(i.earningsPerShare);
  if (![sharePrice, earningsPerShare].every(finite) || earningsPerShare === 0)
    return { peRatio: NaN };
  return { peRatio: sharePrice / earningsPerShare };
};

// Bond current yield: annual coupon as a percent of the bond's market price.
const bondCurrentYield: ComputeFn = (i) => {
  const annualCouponPayment = n(i.annualCouponPayment);
  const bondPrice = n(i.bondPrice);
  if (![annualCouponPayment, bondPrice].every(finite) || bondPrice <= 0)
    return { currentYield: NaN };
  return { currentYield: (annualCouponPayment / bondPrice) * 100 };
};

// Stock break-even price: cost basis plus fees spread across the shares held.
const stockBreakEven: ComputeFn = (i) => {
  const buyPrice = n(i.buyPrice);
  const shares = n(i.shares);
  const totalFees = n(i.totalFees);
  if (![buyPrice, shares, totalFees].every(finite) || shares <= 0)
    return { breakEvenPrice: NaN };
  return { breakEvenPrice: (buyPrice * shares + totalFees) / shares };
};

// Retirement nest egg target from annual expenses and a safe withdrawal rate.
const nestEgg: ComputeFn = (i) => {
  const annualExpenses = n(i.annualExpenses);
  const withdrawalRate = n(i.withdrawalRate);
  if (![annualExpenses, withdrawalRate].every(finite) || withdrawalRate <= 0)
    return { nestEggTarget: NaN, monthlyIncomeSupported: NaN };
  return {
    nestEggTarget: annualExpenses / (withdrawalRate / 100),
    monthlyIncomeSupported: annualExpenses / 12,
  };
};

export const financeR7Engines: Record<string, ComputeFn> = {
  "simple-vs-compound": simpleVsCompound,
  "loan-affordability": loanAffordability,
  "effective-annual-rate": effectiveAnnualRate,
  "sinking-fund": sinkingFund,
  "debt-snowball": debtSnowball,
  "dividend-yield": dividendYield,
  "pe-ratio": peRatio,
  "bond-current-yield": bondCurrentYield,
  "stock-break-even": stockBreakEven,
  "nest-egg": nestEgg,
};
