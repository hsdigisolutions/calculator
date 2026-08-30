import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Ecommerce Round 6 — Wave 3 engines. Pure functions, USD. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Average order value: total revenue divided by number of orders.
const averageOrderValue: ComputeFn = (i) => {
  const totalRevenue = num(i.totalRevenue);
  const numberOfOrders = num(i.numberOfOrders);
  if (![totalRevenue, numberOfOrders].every(finite) || numberOfOrders === 0)
    return { aov: NaN };
  return { aov: totalRevenue / numberOfOrders };
};

// Conversion rate: share of visitors that placed an order.
const ecomConversionRate: ComputeFn = (i) => {
  const orders = num(i.orders);
  const visitors = num(i.visitors);
  if (![orders, visitors].every(finite) || visitors === 0)
    return { conversionRate: NaN };
  return { conversionRate: (orders / visitors) * 100 };
};

// Cart abandonment: share of created carts that never converted.
const cartAbandonment: ComputeFn = (i) => {
  const cartsCreated = num(i.cartsCreated);
  const completedPurchases = num(i.completedPurchases);
  if (![cartsCreated, completedPurchases].every(finite) || cartsCreated === 0)
    return { abandonmentRate: NaN, completionRate: NaN };
  const completionRate = (completedPurchases / cartsCreated) * 100;
  return { abandonmentRate: 100 - completionRate, completionRate };
};

// Product profit: price minus product cost, shipping and platform fees.
const productProfit: ComputeFn = (i) => {
  const sellingPrice = num(i.sellingPrice);
  const productCost = num(i.productCost);
  const shippingCost = num(i.shippingCost) || 0;
  const platformFees = num(i.platformFees) || 0;
  if (![sellingPrice, productCost].every(finite))
    return { netProfit: NaN, profitMargin: NaN };
  const netProfit = sellingPrice - productCost - shippingCost - platformFees;
  return {
    netProfit,
    profitMargin: sellingPrice === 0 ? NaN : (netProfit / sellingPrice) * 100,
  };
};

// Days of inventory: how many days current stock lasts at the daily sales rate.
const daysOfInventory: ComputeFn = (i) => {
  const inventoryUnits = num(i.inventoryUnits);
  const avgDailySales = num(i.avgDailySales);
  if (![inventoryUnits, avgDailySales].every(finite) || avgDailySales === 0)
    return { daysOfSupply: NaN };
  return { daysOfSupply: inventoryUnits / avgDailySales };
};

// Reorder point: stock level that triggers a new order given lead time.
const reorderPoint: ComputeFn = (i) => {
  const avgDailyUsage = num(i.avgDailyUsage);
  const leadTimeDays = num(i.leadTimeDays);
  const safetyStock = num(i.safetyStock) || 0;
  if (![avgDailyUsage, leadTimeDays].every(finite))
    return { reorderPoint: NaN };
  return { reorderPoint: avgDailyUsage * leadTimeDays + safetyStock };
};

// Sell-through rate: units sold as a share of units received.
const sellThroughRate: ComputeFn = (i) => {
  const unitsSold = num(i.unitsSold);
  const unitsReceived = num(i.unitsReceived);
  if (![unitsSold, unitsReceived].every(finite) || unitsReceived === 0)
    return { sellThrough: NaN };
  return { sellThrough: (unitsSold / unitsReceived) * 100 };
};

// Gross merchandise value: average order value times number of orders.
const gmv: ComputeFn = (i) => {
  const averageOrderValue = num(i.averageOrderValue);
  const numberOfOrders = num(i.numberOfOrders);
  if (![averageOrderValue, numberOfOrders].every(finite))
    return { gmv: NaN };
  return { gmv: averageOrderValue * numberOfOrders };
};

// Customer retention rate: share of starting customers retained over a period.
const customerRetentionRate: ComputeFn = (i) => {
  const customersAtEnd = num(i.customersAtEnd);
  const newCustomersAcquired = num(i.newCustomersAcquired);
  const customersAtStart = num(i.customersAtStart);
  if (![customersAtEnd, newCustomersAcquired, customersAtStart].every(finite) || customersAtStart === 0)
    return { retentionRate: NaN };
  return {
    retentionRate: ((customersAtEnd - newCustomersAcquired) / customersAtStart) * 100,
  };
};

// Shipping cost per order: total shipping spend divided by orders.
const ecommerceShippingCost: ComputeFn = (i) => {
  const totalShippingCost = num(i.totalShippingCost);
  const numberOfOrders = num(i.numberOfOrders);
  if (![totalShippingCost, numberOfOrders].every(finite) || numberOfOrders === 0)
    return { costPerOrder: NaN };
  return { costPerOrder: totalShippingCost / numberOfOrders };
};

export const ecommerceR6Engines: Record<string, ComputeFn> = {
  "average-order-value": averageOrderValue,
  "ecom-conversion-rate": ecomConversionRate,
  "cart-abandonment": cartAbandonment,
  "product-profit": productProfit,
  "days-of-inventory": daysOfInventory,
  "reorder-point": reorderPoint,
  "sell-through-rate": sellThroughRate,
  "gmv": gmv,
  "customer-retention-rate": customerRetentionRate,
  "ecommerce-shipping-cost": ecommerceShippingCost,
};
