import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Logistics engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Dimensional (volumetric) weight = L × W × H ÷ divisor. Billed at the greater
// of dimensional and actual weight when an actual weight is supplied.
const dimensionalWeight: ComputeFn = (i) => {
  const length = num(i.length);
  const width = num(i.width);
  const height = num(i.height);
  const divisor = finite(num(i.divisor)) ? num(i.divisor) : 139;
  if (!finite(length) || !finite(width) || !finite(height) || divisor === 0)
    return { dimWeight: NaN, billableWeight: NaN };
  const dimWeight = (length * width * height) / divisor;
  const actual = num(i.actualWeight);
  const billable = finite(actual) ? Math.max(actual, dimWeight) : dimWeight;
  return { dimWeight, billableWeight: billable };
};

// CBM = (L × W × H) ÷ 1,000,000 × quantity (cm → cubic metres).
const cbm: ComputeFn = (i) => {
  const length = num(i.length);
  const width = num(i.width);
  const height = num(i.height);
  const quantity = num(i.quantity);
  if (!finite(length) || !finite(width) || !finite(height) || !finite(quantity))
    return { cbm: NaN, volumetricWeight: NaN };
  const total = ((length * width * height) / 1000000) * quantity;
  return { cbm: total, volumetricWeight: total * 167 };
};

// Pallet count = ceil(total units ÷ units per pallet).
const palletCount: ComputeFn = (i) => {
  const totalUnits = num(i.totalUnits);
  const unitsPerLayer = num(i.unitsPerLayer);
  const layersPerPallet = num(i.layersPerPallet);
  if (!finite(totalUnits) || !finite(unitsPerLayer) || !finite(layersPerPallet))
    return { pallets: NaN, unitsPerPallet: NaN };
  const unitsPerPallet = unitsPerLayer * layersPerPallet;
  const pallets = unitsPerPallet > 0 ? Math.ceil(totalUnits / unitsPerPallet) : NaN;
  return { pallets, unitsPerPallet };
};

// Freight density = weight ÷ cubic feet (L × W × H ÷ 1728, inches → ft³).
const freightDensity: ComputeFn = (i) => {
  const weight = num(i.weight);
  const length = num(i.length);
  const width = num(i.width);
  const height = num(i.height);
  if (!finite(weight) || !finite(length) || !finite(width) || !finite(height))
    return { density: NaN, cubicFeet: NaN };
  const cubicFeet = (length * width * height) / 1728;
  const density = cubicFeet > 0 ? weight / cubicFeet : NaN;
  return { density, cubicFeet };
};

// Landed cost = product cost + freight + duty + insurance; duty = cost × duty%.
const landedCost: ComputeFn = (i) => {
  const productCost = num(i.productCost);
  if (!finite(productCost)) return { landedCost: NaN, duty: NaN };
  const freight = finite(num(i.freight)) ? num(i.freight) : 0;
  const insurance = finite(num(i.insurance)) ? num(i.insurance) : 0;
  const dutyPercent = finite(num(i.dutyPercent)) ? num(i.dutyPercent) : 0;
  const duty = (productCost * dutyPercent) / 100;
  return { landedCost: productCost + freight + duty + insurance, duty };
};

// Container loading = ceil(cargo CBM ÷ container capacity), by container type.
const containerLoading: ComputeFn = (i) => {
  const cargoCbm = num(i.cargoCbm);
  const containerType = i.containerType;
  if (!finite(cargoCbm))
    return {
      containersNeeded: NaN,
      containerCapacity: NaN,
      utilizationPercent: NaN,
    };
  const cap = containerType === "40hc" ? 76 : containerType === "40ft" ? 67 : 33;
  const containers = Math.ceil(cargoCbm / cap);
  return {
    containersNeeded: containers,
    containerCapacity: cap,
    utilizationPercent: (cargoCbm / (containers * cap)) * 100,
  };
};

export const logisticsWave3Engines: Record<string, ComputeFn> = {
  "dimensional-weight": dimensionalWeight,
  cbm,
  "pallet-count": palletCount,
  "freight-density": freightDensity,
  "landed-cost": landedCost,
  "container-loading": containerLoading,
};
