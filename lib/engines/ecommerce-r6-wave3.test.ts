import { describe, it, expect } from "vitest";
import { ecommerceR6Engines } from "./ecommerce-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => ecommerceR6Engines[id](inputs);

describe("ecommerce r6 wave3 engines", () => {
  it("average-order-value: revenue divided by orders", () => {
    const r = run("average-order-value", { totalRevenue: "12500", numberOfOrders: "250" });
    expect(r.aov as number).toBeCloseTo(50, 6);
  });

  it("average-order-value: zero orders → NaN", () => {
    const r = run("average-order-value", { totalRevenue: "12500", numberOfOrders: "0" });
    expect(Number.isNaN(r.aov as number)).toBe(true);
  });

  it("ecom-conversion-rate: orders over visitors as a percentage", () => {
    const r = run("ecom-conversion-rate", { orders: "45", visitors: "1500" });
    expect(r.conversionRate as number).toBeCloseTo(3, 6);
  });

  it("ecom-conversion-rate: zero visitors → NaN", () => {
    const r = run("ecom-conversion-rate", { orders: "45", visitors: "0" });
    expect(Number.isNaN(r.conversionRate as number)).toBe(true);
  });

  it("cart-abandonment: abandonment and completion split", () => {
    const r = run("cart-abandonment", { cartsCreated: "1000", completedPurchases: "300" });
    expect(r.abandonmentRate as number).toBeCloseTo(70, 6);
    expect(r.completionRate as number).toBeCloseTo(30, 6);
  });

  it("cart-abandonment: zero carts → NaN", () => {
    const r = run("cart-abandonment", { cartsCreated: "0", completedPurchases: "0" });
    expect(Number.isNaN(r.abandonmentRate as number)).toBe(true);
    expect(Number.isNaN(r.completionRate as number)).toBe(true);
  });

  it("product-profit: net profit and margin after all costs", () => {
    const r = run("product-profit", {
      sellingPrice: "50",
      productCost: "18",
      shippingCost: "5",
      platformFees: "7",
    });
    expect(r.netProfit as number).toBeCloseTo(20, 6);
    expect(r.profitMargin as number).toBeCloseTo(40, 6);
  });

  it("product-profit: optional costs default to zero", () => {
    const r = run("product-profit", { sellingPrice: "100", productCost: "40" });
    expect(r.netProfit as number).toBeCloseTo(60, 6);
    expect(r.profitMargin as number).toBeCloseTo(60, 6);
  });

  it("days-of-inventory: units divided by daily sales", () => {
    const r = run("days-of-inventory", { inventoryUnits: "600", avgDailySales: "20" });
    expect(r.daysOfSupply as number).toBeCloseTo(30, 6);
  });

  it("days-of-inventory: zero daily sales → NaN", () => {
    const r = run("days-of-inventory", { inventoryUnits: "600", avgDailySales: "0" });
    expect(Number.isNaN(r.daysOfSupply as number)).toBe(true);
  });

  it("reorder-point: usage times lead time plus safety stock", () => {
    const r = run("reorder-point", { avgDailyUsage: "25", leadTimeDays: "7", safetyStock: "50" });
    expect(r.reorderPoint as number).toBeCloseTo(225, 6);
  });

  it("reorder-point: safety stock defaults to zero", () => {
    const r = run("reorder-point", { avgDailyUsage: "10", leadTimeDays: "5" });
    expect(r.reorderPoint as number).toBeCloseTo(50, 6);
  });

  it("sell-through-rate: sold over received as a percentage", () => {
    const r = run("sell-through-rate", { unitsSold: "180", unitsReceived: "240" });
    expect(r.sellThrough as number).toBeCloseTo(75, 6);
  });

  it("sell-through-rate: zero received → NaN", () => {
    const r = run("sell-through-rate", { unitsSold: "180", unitsReceived: "0" });
    expect(Number.isNaN(r.sellThrough as number)).toBe(true);
  });

  it("gmv: average order value times number of orders", () => {
    const r = run("gmv", { averageOrderValue: "65", numberOfOrders: "1200" });
    expect(r.gmv as number).toBeCloseTo(78000, 6);
  });

  it("customer-retention-rate: retained share of starting customers", () => {
    const r = run("customer-retention-rate", {
      customersAtEnd: "1050",
      newCustomersAcquired: "200",
      customersAtStart: "1000",
    });
    expect(r.retentionRate as number).toBeCloseTo(85, 6);
  });

  it("customer-retention-rate: zero starting customers → NaN", () => {
    const r = run("customer-retention-rate", {
      customersAtEnd: "1050",
      newCustomersAcquired: "200",
      customersAtStart: "0",
    });
    expect(Number.isNaN(r.retentionRate as number)).toBe(true);
  });

  it("ecommerce-shipping-cost: total shipping divided by orders", () => {
    const r = run("ecommerce-shipping-cost", { totalShippingCost: "3600", numberOfOrders: "450" });
    expect(r.costPerOrder as number).toBeCloseTo(8, 6);
  });

  it("ecommerce-shipping-cost: zero orders → NaN", () => {
    const r = run("ecommerce-shipping-cost", { totalShippingCost: "3600", numberOfOrders: "0" });
    expect(Number.isNaN(r.costPerOrder as number)).toBe(true);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("average-order-value", { totalRevenue: "", numberOfOrders: "250" }).aov as number)).toBe(true);
    expect(Number.isNaN(run("product-profit", { sellingPrice: "50", productCost: "" }).netProfit as number)).toBe(true);
    expect(Number.isNaN(run("gmv", { averageOrderValue: "", numberOfOrders: "1200" }).gmv as number)).toBe(true);
  });
});
