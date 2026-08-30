import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 8 — additional Business engines. Pure functions, USD. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Markup % → margin %: margin = markup ÷ (100 + markup) × 100.
const markupToMargin: ComputeFn = (i) => {
  const markupPercent = num(i.markupPercent);
  if (!finite(markupPercent) || 100 + markupPercent === 0)
    return { marginPercent: NaN };
  return { marginPercent: (markupPercent / (100 + markupPercent)) * 100 };
};

// Two successive discounts applied to an original price.
const discountChain: ComputeFn = (i) => {
  const originalPrice = num(i.originalPrice);
  const discount1Percent = num(i.discount1Percent);
  const discount2Percent = num(i.discount2Percent);
  if (![originalPrice, discount1Percent, discount2Percent].every(finite) || originalPrice === 0)
    return { finalPrice: NaN, totalSavings: NaN, effectiveDiscount: NaN };
  const finalPrice = originalPrice * (1 - discount1Percent / 100) * (1 - discount2Percent / 100);
  const totalSavings = originalPrice - finalPrice;
  return {
    finalPrice,
    totalSavings,
    effectiveDiscount: (totalSavings / originalPrice) * 100,
  };
};

// Sales commission = sales amount × commission %.
const salesCommission: ComputeFn = (i) => {
  const salesAmount = num(i.salesAmount);
  const commissionPercent = num(i.commissionPercent);
  if (![salesAmount, commissionPercent].every(finite)) return { commission: NaN };
  return { commission: (salesAmount * commissionPercent) / 100 };
};

// Target selling price from cost and desired margin; profit per unit.
const targetProfitPrice: ComputeFn = (i) => {
  const unitCost = num(i.unitCost);
  const desiredMarginPercent = num(i.desiredMarginPercent);
  if (![unitCost, desiredMarginPercent].every(finite) || 1 - desiredMarginPercent / 100 === 0)
    return { sellingPrice: NaN, profitPerUnit: NaN };
  const sellingPrice = unitCost / (1 - desiredMarginPercent / 100);
  if (!finite(sellingPrice)) return { sellingPrice: NaN, profitPerUnit: NaN };
  return { sellingPrice, profitPerUnit: sellingPrice - unitCost };
};

// Employee turnover rate = separations ÷ average employees × 100.
const employeeTurnoverRate: ComputeFn = (i) => {
  const separations = num(i.separations);
  const averageEmployees = num(i.averageEmployees);
  if (![separations, averageEmployees].every(finite) || averageEmployees === 0)
    return { turnoverRate: NaN };
  return { turnoverRate: (separations / averageEmployees) * 100 };
};

// Revenue per employee = total revenue ÷ employees.
const revenuePerEmployee: ComputeFn = (i) => {
  const totalRevenue = num(i.totalRevenue);
  const employees = num(i.employees);
  if (![totalRevenue, employees].every(finite) || employees === 0)
    return { revenuePerEmployee: NaN };
  return { revenuePerEmployee: totalRevenue / employees };
};

// Operating cash flow = net income + depreciation − change in working capital.
const operatingCashFlow: ComputeFn = (i) => {
  const netIncome = num(i.netIncome);
  const depreciation = num(i.depreciation);
  const workingCapitalChange = num(i.workingCapitalChange);
  if (![netIncome, depreciation, workingCapitalChange].every(finite))
    return { operatingCashFlow: NaN };
  return { operatingCashFlow: netIncome + depreciation - workingCapitalChange };
};

// Quick ratio = (current assets − inventory) ÷ current liabilities.
const quickRatio: ComputeFn = (i) => {
  const currentAssets = num(i.currentAssets);
  const inventory = num(i.inventory);
  const currentLiabilities = num(i.currentLiabilities);
  if (![currentAssets, inventory, currentLiabilities].every(finite) || currentLiabilities === 0)
    return { quickRatio: NaN };
  return { quickRatio: (currentAssets - inventory) / currentLiabilities };
};

// Debt-to-equity = total debt ÷ total equity.
const debtToEquity: ComputeFn = (i) => {
  const totalDebt = num(i.totalDebt);
  const totalEquity = num(i.totalEquity);
  if (![totalDebt, totalEquity].every(finite) || totalEquity === 0)
    return { debtToEquity: NaN };
  return { debtToEquity: totalDebt / totalEquity };
};

// Return on assets = net income ÷ total assets × 100.
const returnOnAssets: ComputeFn = (i) => {
  const netIncome = num(i.netIncome);
  const totalAssets = num(i.totalAssets);
  if (![netIncome, totalAssets].every(finite) || totalAssets === 0)
    return { roa: NaN };
  return { roa: (netIncome / totalAssets) * 100 };
};

export const businessR8Engines: Record<string, ComputeFn> = {
  "markup-to-margin": markupToMargin,
  "discount-chain": discountChain,
  "sales-commission": salesCommission,
  "target-profit-price": targetProfitPrice,
  "employee-turnover-rate": employeeTurnoverRate,
  "revenue-per-employee": revenuePerEmployee,
  "operating-cash-flow": operatingCashFlow,
  "quick-ratio": quickRatio,
  "debt-to-equity": debtToEquity,
  "return-on-assets": returnOnAssets,
};
