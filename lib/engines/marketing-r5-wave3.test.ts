import { describe, it, expect } from "vitest";
import { marketingR5Engines } from "./marketing-r5-wave3";

const run = (id: string, inputs: Record<string, string>) => marketingR5Engines[id](inputs);

describe("marketing r5 wave3 engines", () => {
  it("cpm: cost per thousand impressions", () => {
    const r = run("cpm", { totalCost: "500", impressions: "100000" });
    expect(r.cpm as number).toBeCloseTo(5, 6);
  });

  it("cpc: cost per click", () => {
    const r = run("cpc", { totalCost: "800", clicks: "400" });
    expect(r.cpc as number).toBeCloseTo(2, 6);
  });

  it("ctr: click-through rate as percentage", () => {
    const r = run("ctr", { clicks: "250", impressions: "10000" });
    expect(r.ctr as number).toBeCloseTo(2.5, 6);
  });

  it("conversion-rate: conversions over visitors", () => {
    const r = run("conversion-rate", { conversions: "45", visitors: "1500" });
    expect(r.conversionRate as number).toBeCloseTo(3, 6);
  });

  it("cpa-metric: spend per acquisition", () => {
    const r = run("cpa-metric", { totalSpend: "2000", acquisitions: "80" });
    expect(r.cpa as number).toBeCloseTo(25, 6);
  });

  it("customer-lifetime-value: ltv and annual value", () => {
    const r = run("customer-lifetime-value", {
      avgOrderValue: "60",
      purchaseFrequency: "4",
      customerLifespan: "5",
    });
    expect(r.ltv as number).toBeCloseTo(1200, 6);
    expect(r.annualValue as number).toBeCloseTo(240, 6);
  });

  it("customer-acquisition-cost: spend per new customer", () => {
    const r = run("customer-acquisition-cost", {
      marketingSpend: "10000",
      newCustomers: "200",
    });
    expect(r.cac as number).toBeCloseTo(50, 6);
  });

  it("churn-rate: churn and retention", () => {
    const r = run("churn-rate", { customersLost: "30", customersStart: "600" });
    expect(r.churnRate as number).toBeCloseTo(5, 6);
    expect(r.retentionRate as number).toBeCloseTo(95, 6);
  });

  it("mrr: monthly recurring and annual run rate", () => {
    const r = run("mrr", { customers: "500", avgMonthlyRevenue: "40" });
    expect(r.mrr as number).toBeCloseTo(20000, 6);
    expect(r.arr as number).toBeCloseTo(240000, 6);
  });

  it("email-roi: return percentage and net profit", () => {
    const r = run("email-roi", { revenue: "9000", campaignCost: "1500" });
    expect(r.roi as number).toBeCloseTo(500, 6);
    expect(r.netProfit as number).toBeCloseTo(7500, 6);
  });

  it("returns NaN on zero denominators", () => {
    expect(Number.isNaN(run("cpm", { totalCost: "500", impressions: "0" }).cpm as number)).toBe(true);
    expect(Number.isNaN(run("cpc", { totalCost: "500", clicks: "0" }).cpc as number)).toBe(true);
    expect(Number.isNaN(run("ctr", { clicks: "10", impressions: "0" }).ctr as number)).toBe(true);
    expect(Number.isNaN(run("conversion-rate", { conversions: "10", visitors: "0" }).conversionRate as number)).toBe(true);
    expect(Number.isNaN(run("cpa-metric", { totalSpend: "100", acquisitions: "0" }).cpa as number)).toBe(true);
    expect(Number.isNaN(run("customer-acquisition-cost", { marketingSpend: "100", newCustomers: "0" }).cac as number)).toBe(true);
    expect(Number.isNaN(run("churn-rate", { customersLost: "5", customersStart: "0" }).churnRate as number)).toBe(true);
    expect(Number.isNaN(run("email-roi", { revenue: "100", campaignCost: "0" }).roi as number)).toBe(true);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("cpm", { totalCost: "", impressions: "1000" }).cpm as number)).toBe(true);
    expect(Number.isNaN(run("customer-lifetime-value", { avgOrderValue: "60", purchaseFrequency: "", customerLifespan: "5" }).ltv as number)).toBe(true);
    expect(Number.isNaN(run("mrr", { customers: "", avgMonthlyRevenue: "40" }).mrr as number)).toBe(true);
  });
});
