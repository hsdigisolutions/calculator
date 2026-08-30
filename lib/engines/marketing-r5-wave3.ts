import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 5 — Marketing engines. Pure functions, USD. Invalid/zero-denominator → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Cost per mille — advertising cost per thousand impressions.
const cpm: ComputeFn = (i) => {
  const totalCost = num(i.totalCost);
  const impressions = num(i.impressions);
  if (![totalCost, impressions].every(finite) || impressions === 0)
    return { cpm: NaN };
  return { cpm: (totalCost / impressions) * 1000 };
};

// Cost per click — average spend for each click.
const cpc: ComputeFn = (i) => {
  const totalCost = num(i.totalCost);
  const clicks = num(i.clicks);
  if (![totalCost, clicks].every(finite) || clicks === 0)
    return { cpc: NaN };
  return { cpc: totalCost / clicks };
};

// Click-through rate — share of impressions that became clicks.
const ctr: ComputeFn = (i) => {
  const clicks = num(i.clicks);
  const impressions = num(i.impressions);
  if (![clicks, impressions].every(finite) || impressions === 0)
    return { ctr: NaN };
  return { ctr: (clicks / impressions) * 100 };
};

// Conversion rate — share of visitors that converted.
const conversionRate: ComputeFn = (i) => {
  const conversions = num(i.conversions);
  const visitors = num(i.visitors);
  if (![conversions, visitors].every(finite) || visitors === 0)
    return { conversionRate: NaN };
  return { conversionRate: (conversions / visitors) * 100 };
};

// Cost per acquisition — spend for each acquisition/action.
const cpaMetric: ComputeFn = (i) => {
  const totalSpend = num(i.totalSpend);
  const acquisitions = num(i.acquisitions);
  if (![totalSpend, acquisitions].every(finite) || acquisitions === 0)
    return { cpa: NaN };
  return { cpa: totalSpend / acquisitions };
};

// Customer lifetime value — total revenue expected across the relationship.
const customerLifetimeValue: ComputeFn = (i) => {
  const avgOrderValue = num(i.avgOrderValue);
  const purchaseFrequency = num(i.purchaseFrequency);
  const customerLifespan = num(i.customerLifespan);
  if (![avgOrderValue, purchaseFrequency, customerLifespan].every(finite))
    return { ltv: NaN, annualValue: NaN };
  return {
    ltv: avgOrderValue * purchaseFrequency * customerLifespan,
    annualValue: avgOrderValue * purchaseFrequency,
  };
};

// Customer acquisition cost — marketing spend per new customer.
const customerAcquisitionCost: ComputeFn = (i) => {
  const marketingSpend = num(i.marketingSpend);
  const newCustomers = num(i.newCustomers);
  if (![marketingSpend, newCustomers].every(finite) || newCustomers === 0)
    return { cac: NaN };
  return { cac: marketingSpend / newCustomers };
};

// Churn rate — share of customers lost, plus retention.
const churnRate: ComputeFn = (i) => {
  const customersLost = num(i.customersLost);
  const customersStart = num(i.customersStart);
  if (![customersLost, customersStart].every(finite) || customersStart === 0)
    return { churnRate: NaN, retentionRate: NaN };
  const churn = (customersLost / customersStart) * 100;
  return { churnRate: churn, retentionRate: 100 - churn };
};

// Monthly recurring revenue and its annualised value.
const mrr: ComputeFn = (i) => {
  const customers = num(i.customers);
  const avgMonthlyRevenue = num(i.avgMonthlyRevenue);
  if (![customers, avgMonthlyRevenue].every(finite))
    return { mrr: NaN, arr: NaN };
  const recurring = customers * avgMonthlyRevenue;
  return { mrr: recurring, arr: recurring * 12 };
};

// Email marketing ROI — return and net profit from a campaign.
const emailRoi: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const campaignCost = num(i.campaignCost);
  if (![revenue, campaignCost].every(finite) || campaignCost === 0)
    return { roi: NaN, netProfit: NaN };
  return {
    roi: ((revenue - campaignCost) / campaignCost) * 100,
    netProfit: revenue - campaignCost,
  };
};

export const marketingR5Engines: Record<string, ComputeFn> = {
  cpm,
  cpc,
  ctr,
  "conversion-rate": conversionRate,
  "cpa-metric": cpaMetric,
  "customer-lifetime-value": customerLifetimeValue,
  "customer-acquisition-cost": customerAcquisitionCost,
  "churn-rate": churnRate,
  mrr,
  "email-roi": emailRoi,
};
