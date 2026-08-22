import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Real Estate engines. */

function amortize(principal: number, annualRate: number, months: number): number {
  const r = annualRate / 100 / 12;
  if (!(principal > 0) || !(months > 0)) return NaN;
  return r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
}

const capRate: ComputeFn = (i) => {
  const value = num(i.propertyValue);
  const rent = num(i.annualRent);
  const vac = num(i.vacancyRate) || 0;
  const exp = num(i.annualExpenses) || 0;
  if (!(value > 0) || !Number.isFinite(rent))
    return { capRate: NaN, noi: NaN, grm: NaN };
  const noi = rent * (1 - vac / 100) - exp;
  return { capRate: (noi / value) * 100, noi, grm: rent > 0 ? value / rent : NaN };
};

const rentVsBuy: ComputeFn = (i) => {
  const price = num(i.homePrice);
  const down = num(i.downPayment) || 0;
  const rate = num(i.rate);
  const years = num(i.term) || 30;
  const taxRate = num(i.propertyTaxRate) || 0;
  const rent = num(i.monthlyRent);
  const loan = price - down;
  const mortgage = amortize(loan, rate, years * 12);
  const monthlyTax = (price * (taxRate / 100)) / 12;
  const maintenance = (price * 0.01) / 12; // 1%/yr rule of thumb
  const buyMonthly = mortgage + monthlyTax + maintenance;
  if (!Number.isFinite(buyMonthly) || !Number.isFinite(rent))
    return { buyMonthly: NaN, rentMonthly: rent, difference: NaN };
  return { buyMonthly, rentMonthly: rent, difference: buyMonthly - rent };
};

const loanToValue: ComputeFn = (i) => {
  const loan = num(i.loanAmount);
  const value = num(i.propertyValue);
  if (!(value > 0) || !Number.isFinite(loan))
    return { ltv: NaN, equity: NaN, equityPercent: NaN };
  const ltv = (loan / value) * 100;
  return { ltv, equity: value - loan, equityPercent: 100 - ltv };
};

const downPayment: ComputeFn = (i) => {
  const price = num(i.homePrice);
  const pct = num(i.downPaymentPercent);
  if (!Number.isFinite(price) || !Number.isFinite(pct))
    return { downPayment: NaN, loanAmount: NaN };
  const dp = (price * pct) / 100;
  return { downPayment: dp, loanAmount: price - dp };
};

const closingCosts: ComputeFn = (i) => {
  const price = num(i.homePrice);
  const rate = num(i.rate) || 3;
  if (!(price > 0)) return { estimated: NaN, low: NaN, high: NaN };
  return {
    estimated: price * (rate / 100),
    low: price * 0.02,
    high: price * 0.05,
  };
};

const propertyTax: ComputeFn = (i) => {
  const assessed = num(i.assessedValue);
  const rate = num(i.taxRate);
  if (!(assessed >= 0) || !Number.isFinite(rate))
    return { annualTax: NaN, monthlyTax: NaN };
  const annual = assessed * (rate / 100);
  return { annualTax: annual, monthlyTax: annual / 12 };
};

const mortgageRefinance: ComputeFn = (i) => {
  const balance = num(i.currentBalance);
  const currentPayment = num(i.currentPayment);
  const newRate = num(i.newRate);
  const newYears = num(i.newTerm) || 30;
  const closing = num(i.closingCosts) || 0;
  const newPayment = amortize(balance, newRate, newYears * 12);
  if (!Number.isFinite(newPayment) || !Number.isFinite(currentPayment))
    return { newPayment: NaN, monthlySavings: NaN, breakevenMonths: NaN };
  const savings = currentPayment - newPayment;
  return {
    newPayment,
    monthlySavings: savings,
    breakevenMonths: savings > 0 ? Math.ceil(closing / savings) : NaN,
  };
};

export const realEstateWave3Engines: Record<string, ComputeFn> = {
  "cap-rate": capRate,
  "rent-vs-buy": rentVsBuy,
  "loan-to-value": loanToValue,
  "down-payment": downPayment,
  "closing-costs": closingCosts,
  "property-tax": propertyTax,
  "mortgage-refinance": mortgageRefinance,
};
