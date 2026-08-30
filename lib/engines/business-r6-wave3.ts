import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 6 — additional Business engines. Pure functions, USD. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Gross profit = revenue − cost of goods sold; margin as a share of revenue.
const grossProfit: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const cogs = num(i.cogs);
  if (![revenue, cogs].every(finite)) return { grossProfit: NaN, grossMargin: NaN };
  const gp = revenue - cogs;
  return { grossProfit: gp, grossMargin: revenue === 0 ? NaN : (gp / revenue) * 100 };
};

// Operating margin = operating income ÷ revenue.
const operatingMargin: ComputeFn = (i) => {
  const operatingIncome = num(i.operatingIncome);
  const revenue = num(i.revenue);
  if (![operatingIncome, revenue].every(finite) || revenue === 0)
    return { operatingMargin: NaN };
  return { operatingMargin: (operatingIncome / revenue) * 100 };
};

// EBITDA = net income + interest + taxes + depreciation + amortization.
const ebitda: ComputeFn = (i) => {
  const netIncome = num(i.netIncome);
  const interest = num(i.interest);
  const taxes = num(i.taxes);
  const depreciation = num(i.depreciation);
  const amortization = num(i.amortization);
  if (![netIncome, interest, taxes, depreciation, amortization].every(finite))
    return { ebitda: NaN };
  return { ebitda: netIncome + interest + taxes + depreciation + amortization };
};

// Payback period = initial investment ÷ annual cash flow.
const paybackPeriod: ComputeFn = (i) => {
  const initialInvestment = num(i.initialInvestment);
  const annualCashFlow = num(i.annualCashFlow);
  if (![initialInvestment, annualCashFlow].every(finite) || annualCashFlow === 0)
    return { years: NaN, months: NaN };
  const years = initialInvestment / annualCashFlow;
  return { years, months: years * 12 };
};

// Inventory turnover = COGS ÷ average inventory; days to sell = 365 ÷ turnover.
const inventoryTurnover: ComputeFn = (i) => {
  const cogs = num(i.cogs);
  const averageInventory = num(i.averageInventory);
  if (![cogs, averageInventory].every(finite) || averageInventory === 0)
    return { turnoverRatio: NaN, daysToSell: NaN };
  const turnover = cogs / averageInventory;
  return { turnoverRatio: turnover, daysToSell: turnover === 0 ? NaN : 365 / turnover };
};

// Compound annual growth rate over a number of years.
const cagr: ComputeFn = (i) => {
  const beginningValue = num(i.beginningValue);
  const endingValue = num(i.endingValue);
  const years = num(i.years);
  if (![beginningValue, endingValue, years].every(finite) || beginningValue <= 0 || years <= 0)
    return { cagr: NaN };
  const ratio = endingValue / beginningValue;
  if (ratio <= 0) return { cagr: NaN };
  return { cagr: (Math.pow(ratio, 1 / years) - 1) * 100 };
};

// Net profit margin = net profit ÷ revenue.
const netProfitMargin: ComputeFn = (i) => {
  const netProfit = num(i.netProfit);
  const revenue = num(i.revenue);
  if (![netProfit, revenue].every(finite) || revenue === 0) return { netMargin: NaN };
  return { netMargin: (netProfit / revenue) * 100 };
};

// Contribution margin per unit and as a ratio of price.
const contributionMargin: ComputeFn = (i) => {
  const pricePerUnit = num(i.pricePerUnit);
  const variableCostPerUnit = num(i.variableCostPerUnit);
  if (![pricePerUnit, variableCostPerUnit].every(finite))
    return { contributionMargin: NaN, cmRatio: NaN };
  const cm = pricePerUnit - variableCostPerUnit;
  return { contributionMargin: cm, cmRatio: pricePerUnit === 0 ? NaN : (cm / pricePerUnit) * 100 };
};

// Working capital = current assets − current liabilities; current ratio = CA ÷ CL.
const workingCapital: ComputeFn = (i) => {
  const currentAssets = num(i.currentAssets);
  const currentLiabilities = num(i.currentLiabilities);
  if (![currentAssets, currentLiabilities].every(finite))
    return { workingCapital: NaN, currentRatio: NaN };
  return {
    workingCapital: currentAssets - currentLiabilities,
    currentRatio: currentLiabilities === 0 ? NaN : currentAssets / currentLiabilities,
  };
};

// Monthly burn rate and remaining runway in months.
const burnRate: ComputeFn = (i) => {
  const startingCash = num(i.startingCash);
  const endingCash = num(i.endingCash);
  const months = num(i.months);
  if (![startingCash, endingCash, months].every(finite) || months === 0)
    return { monthlyBurn: NaN, runwayMonths: NaN };
  const monthlyBurn = (startingCash - endingCash) / months;
  return {
    monthlyBurn,
    runwayMonths: monthlyBurn <= 0 ? NaN : endingCash / monthlyBurn,
  };
};

export const businessR6Engines: Record<string, ComputeFn> = {
  "gross-profit": grossProfit,
  "operating-margin": operatingMargin,
  ebitda: ebitda,
  "payback-period": paybackPeriod,
  "inventory-turnover": inventoryTurnover,
  cagr: cagr,
  "net-profit-margin": netProfitMargin,
  "contribution-margin": contributionMargin,
  "working-capital": workingCapital,
  "burn-rate": burnRate,
};
