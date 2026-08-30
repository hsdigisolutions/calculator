import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — Logistics engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Cost per mile = total cost ÷ miles.
const costPerMile: ComputeFn = (i) => {
  const totalCost = num(i.totalCost);
  const miles = num(i.miles);
  if (!finite(totalCost) || !finite(miles) || miles === 0)
    return { costPerMile: NaN };
  return { costPerMile: totalCost / miles };
};

// Fuel surcharge = base rate × surcharge% ÷ 100; total = base + surcharge.
const fuelSurcharge: ComputeFn = (i) => {
  const baseRate = num(i.baseRate);
  const surchargePercent = num(i.surchargePercent);
  if (!finite(baseRate) || !finite(surchargePercent))
    return { surcharge: NaN, totalRate: NaN };
  const surcharge = (baseRate * surchargePercent) / 100;
  return { surcharge, totalRate: baseRate + surcharge };
};

// Delivery time = distance ÷ speed + rest; driving hours = distance ÷ speed.
const deliveryTimeEstimate: ComputeFn = (i) => {
  const distanceMiles = num(i.distanceMiles);
  const avgSpeedMph = num(i.avgSpeedMph);
  const restHours = finite(num(i.restHours)) ? num(i.restHours) : 0;
  if (!finite(distanceMiles) || !finite(avgSpeedMph) || avgSpeedMph === 0)
    return { totalHours: NaN, drivingHours: NaN };
  const drivingHours = distanceMiles / avgSpeedMph;
  return { totalHours: drivingHours + restHours, drivingHours };
};

// Truck load utilization = used ÷ capacity × 100.
const truckLoadUtilization: ComputeFn = (i) => {
  const usedCubicFeet = num(i.usedCubicFeet);
  const truckCapacityCubicFeet = num(i.truckCapacityCubicFeet);
  if (!finite(usedCubicFeet) || !finite(truckCapacityCubicFeet) || truckCapacityCubicFeet === 0)
    return { utilization: NaN };
  return { utilization: (usedCubicFeet / truckCapacityCubicFeet) * 100 };
};

// Warehouse space = pallet count × sq ft per pallet.
const warehouseSpace: ComputeFn = (i) => {
  const palletCount = num(i.palletCount);
  const sqFtPerPallet = finite(num(i.sqFtPerPallet)) ? num(i.sqFtPerPallet) : 13.4;
  if (!finite(palletCount)) return { totalSqFt: NaN };
  return { totalSqFt: palletCount * sqFtPerPallet };
};

// Order picking time = items × seconds per item ÷ 60 (minutes).
const orderPickingTime: ComputeFn = (i) => {
  const numberOfItems = num(i.numberOfItems);
  const secondsPerItem = finite(num(i.secondsPerItem)) ? num(i.secondsPerItem) : 30;
  if (!finite(numberOfItems)) return { totalMinutes: NaN };
  return { totalMinutes: (numberOfItems * secondsPerItem) / 60 };
};

// Safety stock = (max daily usage − avg daily usage) × lead time.
const safetyStock: ComputeFn = (i) => {
  const maxDailyUsage = num(i.maxDailyUsage);
  const avgDailyUsage = num(i.avgDailyUsage);
  const leadTimeDays = num(i.leadTimeDays);
  if (!finite(maxDailyUsage) || !finite(avgDailyUsage) || !finite(leadTimeDays))
    return { safetyStock: NaN };
  return { safetyStock: (maxDailyUsage - avgDailyUsage) * leadTimeDays };
};

// Freight class density = weight ÷ (L × W × H ÷ 1728) in lb/ft³.
const freightClass: ComputeFn = (i) => {
  const weightLbs = num(i.weightLbs);
  const lengthIn = num(i.lengthIn);
  const widthIn = num(i.widthIn);
  const heightIn = num(i.heightIn);
  if (!finite(weightLbs) || !finite(lengthIn) || !finite(widthIn) || !finite(heightIn))
    return { densityPcf: NaN };
  const cubicFeet = (lengthIn * widthIn * heightIn) / 1728;
  if (cubicFeet === 0) return { densityPcf: NaN };
  return { densityPcf: weightLbs / cubicFeet };
};

// Chargeable weight = max(actual, volumetric); volumetric = L × W × H ÷ divisor.
const chargeableWeight: ComputeFn = (i) => {
  const actualWeightKg = num(i.actualWeightKg);
  const lengthCm = num(i.lengthCm);
  const widthCm = num(i.widthCm);
  const heightCm = num(i.heightCm);
  const divisor = finite(num(i.divisor)) ? num(i.divisor) : 5000;
  if (
    !finite(actualWeightKg) ||
    !finite(lengthCm) ||
    !finite(widthCm) ||
    !finite(heightCm) ||
    divisor === 0
  )
    return { chargeableWeight: NaN, volumetricWeight: NaN };
  const volumetricWeight = (lengthCm * widthCm * heightCm) / divisor;
  return {
    chargeableWeight: Math.max(actualWeightKg, volumetricWeight),
    volumetricWeight,
  };
};

// Pallet stack height = pallet base + box height × boxes per stack.
const palletStackHeight: ComputeFn = (i) => {
  const boxHeightIn = num(i.boxHeightIn);
  const boxesPerStack = num(i.boxesPerStack);
  const palletBaseIn = finite(num(i.palletBaseIn)) ? num(i.palletBaseIn) : 6;
  if (!finite(boxHeightIn) || !finite(boxesPerStack))
    return { totalHeightIn: NaN };
  return { totalHeightIn: palletBaseIn + boxHeightIn * boxesPerStack };
};

export const logisticsR7Engines: Record<string, ComputeFn> = {
  "cost-per-mile": costPerMile,
  "fuel-surcharge": fuelSurcharge,
  "delivery-time-estimate": deliveryTimeEstimate,
  "truck-load-utilization": truckLoadUtilization,
  "warehouse-space": warehouseSpace,
  "order-picking-time": orderPickingTime,
  "safety-stock": safetyStock,
  "freight-class": freightClass,
  "chargeable-weight": chargeableWeight,
  "pallet-stack-height": palletStackHeight,
};
