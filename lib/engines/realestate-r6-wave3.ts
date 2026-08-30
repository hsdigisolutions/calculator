import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 6 — Real Estate engines. */

const pricePerSquareFoot: ComputeFn = (i) => {
  const price = num(i.propertyPrice);
  const sqft = num(i.squareFeet);
  if (!(sqft > 0) || !Number.isFinite(price)) return { pricePerSqFt: NaN };
  return { pricePerSqFt: price / sqft };
};

const grossRentMultiplier: ComputeFn = (i) => {
  const price = num(i.propertyPrice);
  const rent = num(i.annualGrossRent);
  if (!(rent > 0) || !Number.isFinite(price)) return { grm: NaN };
  return { grm: price / rent };
};

const cashOnCashReturn: ComputeFn = (i) => {
  const cashFlow = num(i.annualPreTaxCashFlow);
  const invested = num(i.totalCashInvested);
  if (!(invested > 0) || !Number.isFinite(cashFlow)) return { cocReturn: NaN };
  return { cocReturn: (cashFlow / invested) * 100 };
};

const netOperatingIncome: ComputeFn = (i) => {
  const income = num(i.grossOperatingIncome);
  const expenses = num(i.operatingExpenses);
  if (!Number.isFinite(income) || !Number.isFinite(expenses)) return { noi: NaN };
  return { noi: income - expenses };
};

const vacancyRate: ComputeFn = (i) => {
  const vacant = num(i.vacantUnits);
  const total = num(i.totalUnits);
  if (!(total > 0) || !(vacant >= 0)) return { vacancyRate: NaN, occupancyRate: NaN };
  const rate = (vacant / total) * 100;
  return { vacancyRate: rate, occupancyRate: 100 - rate };
};

const rentAffordability: ComputeFn = (i) => {
  const income = num(i.annualIncome);
  const pct = num(i.rentToIncomePercent);
  if (!(income >= 0) || !Number.isFinite(pct)) return { maxMonthlyRent: NaN };
  return { maxMonthlyRent: (income / 12) * (pct / 100) };
};

const mortgagePayoff: ComputeFn = (i) => {
  const balance = num(i.currentBalance);
  const payment = num(i.monthlyPayment);
  const annualRate = num(i.annualRate);
  if (!(balance > 0) || !(payment > 0) || !Number.isFinite(annualRate))
    return { monthsToPayoff: NaN, totalInterest: NaN };
  const r = annualRate / 100 / 12;
  if (r === 0) {
    const n = balance / payment;
    return { monthsToPayoff: n, totalInterest: payment * n - balance };
  }
  // If the payment does not exceed the monthly interest, the loan never pays off.
  if (payment <= balance * r) return { monthsToPayoff: NaN, totalInterest: NaN };
  const n = -Math.log(1 - (balance * r) / payment) / Math.log(1 + r);
  return { monthsToPayoff: n, totalInterest: payment * n - balance };
};

const homeAppreciation: ComputeFn = (i) => {
  const cv = num(i.currentValue);
  const rate = num(i.annualAppreciationRate);
  const years = num(i.years);
  if (!(cv >= 0) || !Number.isFinite(rate) || !(years >= 0))
    return { futureValue: NaN, totalGain: NaN };
  const fv = cv * Math.pow(1 + rate / 100, years);
  return { futureValue: fv, totalGain: fv - cv };
};

const rentalPropertyRoi: ComputeFn = (i) => {
  const income = num(i.annualRentalIncome);
  const expenses = num(i.annualExpenses);
  const price = num(i.purchasePrice);
  if (!(price > 0) || !Number.isFinite(income) || !Number.isFinite(expenses))
    return { roi: NaN, annualCashFlow: NaN };
  const cashFlow = income - expenses;
  return { roi: (cashFlow / price) * 100, annualCashFlow: cashFlow };
};

const sellerNetProceeds: ComputeFn = (i) => {
  const sale = num(i.salePrice);
  const balance = num(i.mortgageBalance);
  const commissionPct = num(i.commissionPercent);
  const closing = num(i.otherClosingCosts) || 0;
  if (!(sale >= 0) || !Number.isFinite(balance) || !Number.isFinite(commissionPct))
    return { netProceeds: NaN, totalCosts: NaN };
  const commission = (sale * commissionPct) / 100;
  const totalCosts = commission + closing;
  return { netProceeds: sale - balance - commission - closing, totalCosts };
};

export const realestateR6Engines: Record<string, ComputeFn> = {
  "price-per-square-foot": pricePerSquareFoot,
  "gross-rent-multiplier": grossRentMultiplier,
  "cash-on-cash-return": cashOnCashReturn,
  "net-operating-income": netOperatingIncome,
  "vacancy-rate": vacancyRate,
  "rent-affordability": rentAffordability,
  "mortgage-payoff": mortgagePayoff,
  "home-appreciation": homeAppreciation,
  "rental-property-roi": rentalPropertyRoi,
  "seller-net-proceeds": sellerNetProceeds,
};
