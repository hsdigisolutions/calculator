import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — Automotive engines. Pure functions. Invalid / zero-divide → NaN. */

const finite = (x: number) => Number.isFinite(x);

// MPG → L/100km: litersPer100km = 235.214583 / mpg.
const mpgToL100km: ComputeFn = (i) => {
  const mpg = num(i.mpg);
  if (!finite(mpg) || mpg === 0) return { litersPer100km: NaN };
  return { litersPer100km: 235.214583 / mpg };
};

// Car lease payment: depreciation + finance charge.
const carLeasePayment: ComputeFn = (i) => {
  const carPrice = num(i.carPrice);
  const residualPercent = num(i.residualPercent);
  const leaseMonths = num(i.leaseMonths);
  if (
    !finite(carPrice) ||
    !finite(residualPercent) ||
    !finite(leaseMonths) ||
    leaseMonths === 0
  )
    return { monthlyPayment: NaN };
  const downPayment = finite(num(i.downPayment)) ? num(i.downPayment) : 0;
  const moneyFactor = finite(num(i.moneyFactor)) ? num(i.moneyFactor) : 0.0025;
  const residual = (carPrice * residualPercent) / 100;
  const depreciation = (carPrice - downPayment - residual) / leaseMonths;
  const financeCharge = (carPrice - downPayment + residual) * moneyFactor;
  const monthlyPayment = depreciation + financeCharge;
  return { monthlyPayment };
};

// Car cost per mile: annualCosts / annualMiles.
const carCostPerMile: ComputeFn = (i) => {
  const annualCosts = num(i.annualCosts);
  const annualMiles = num(i.annualMiles);
  if (!finite(annualCosts) || !finite(annualMiles) || annualMiles === 0)
    return { costPerMile: NaN };
  return { costPerMile: annualCosts / annualMiles };
};

// Tire diameter: overall diameter in inches from a P-metric size.
const tireDiameter: ComputeFn = (i) => {
  const widthMm = num(i.widthMm);
  const aspectRatio = num(i.aspectRatio);
  const wheelDiameterIn = num(i.wheelDiameterIn);
  if (!finite(widthMm) || !finite(aspectRatio) || !finite(wheelDiameterIn))
    return { overallDiameterIn: NaN };
  const overallDiameterIn =
    wheelDiameterIn + (2 * ((widthMm * aspectRatio) / 100)) / 25.4;
  return { overallDiameterIn };
};

// Speedometer error: actual speed and percentage error after a tire size change.
const speedometerError: ComputeFn = (i) => {
  const originalDiameterIn = num(i.originalDiameterIn);
  const newDiameterIn = num(i.newDiameterIn);
  const indicatedSpeed = num(i.indicatedSpeed);
  if (
    !finite(originalDiameterIn) ||
    originalDiameterIn === 0 ||
    !finite(newDiameterIn) ||
    !finite(indicatedSpeed)
  )
    return { actualSpeed: NaN, errorPercent: NaN };
  const actualSpeed = (indicatedSpeed * newDiameterIn) / originalDiameterIn;
  const errorPercent =
    indicatedSpeed !== 0
      ? ((actualSpeed - indicatedSpeed) / indicatedSpeed) * 100
      : NaN;
  return { actualSpeed, errorPercent };
};

// Trip fuel: gallons needed = distance / mpg.
const tripFuel: ComputeFn = (i) => {
  const distanceMiles = num(i.distanceMiles);
  const mpg = num(i.mpg);
  if (!finite(distanceMiles) || !finite(mpg) || mpg === 0)
    return { gallonsNeeded: NaN };
  return { gallonsNeeded: distanceMiles / mpg };
};

// Oil change cost: changes per year and annual cost.
const oilChangeCost: ComputeFn = (i) => {
  const annualMiles = num(i.annualMiles);
  const costPerChange = num(i.costPerChange);
  if (!finite(annualMiles) || !finite(costPerChange))
    return { changesPerYear: NaN, annualCost: NaN };
  const intervalMiles = finite(num(i.intervalMiles)) ? num(i.intervalMiles) : 5000;
  if (intervalMiles === 0) return { changesPerYear: NaN, annualCost: NaN };
  const changesPerYear = annualMiles / intervalMiles;
  const annualCost = changesPerYear * costPerChange;
  return { changesPerYear, annualCost };
};

// Car payment affordability: max payment as a share of monthly income.
const carPaymentAffordability: ComputeFn = (i) => {
  const monthlyIncome = num(i.monthlyIncome);
  if (!finite(monthlyIncome)) return { maxCarPayment: NaN };
  const percentOfIncome = finite(num(i.percentOfIncome))
    ? num(i.percentOfIncome)
    : 15;
  return { maxCarPayment: (monthlyIncome * percentOfIncome) / 100 };
};

// EV range: rangeMiles = batteryKwh × efficiency.
const evRange: ComputeFn = (i) => {
  const batteryKwh = num(i.batteryKwh);
  if (!finite(batteryKwh)) return { rangeMiles: NaN };
  const efficiencyMilesPerKwh = finite(num(i.efficiencyMilesPerKwh))
    ? num(i.efficiencyMilesPerKwh)
    : 3.5;
  return { rangeMiles: batteryKwh * efficiencyMilesPerKwh };
};

// Horsepower → torque at a given RPM.
const horsepowerToTorque: ComputeFn = (i) => {
  const horsepower = num(i.horsepower);
  const rpm = num(i.rpm);
  if (!finite(horsepower) || !finite(rpm) || rpm === 0)
    return { torqueLbFt: NaN };
  return { torqueLbFt: (horsepower * 5252) / rpm };
};

export const automotiveR7Engines: Record<string, ComputeFn> = {
  "mpg-to-l100km": mpgToL100km,
  "car-lease-payment": carLeasePayment,
  "car-cost-per-mile": carCostPerMile,
  "tire-diameter": tireDiameter,
  "speedometer-error": speedometerError,
  "trip-fuel": tripFuel,
  "oil-change-cost": oilChangeCost,
  "car-payment-affordability": carPaymentAffordability,
  "ev-range": evRange,
  "horsepower-to-torque": horsepowerToTorque,
};
