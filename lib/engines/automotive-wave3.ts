import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Automotive engines. Pure functions. Invalid / zero-divide → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Fuel cost: gallons = distance / mpg; totalCost = gallons × price.
const fuelCost: ComputeFn = (i) => {
  const distance = num(i.distance);
  const mpg = num(i.mpg);
  const fuelPrice = num(i.fuelPrice);
  if (!finite(distance) || !finite(mpg) || mpg === 0 || !finite(fuelPrice))
    return { totalCost: NaN, gallons: NaN, costPerMile: NaN };
  const gallons = distance / mpg;
  const totalCost = gallons * fuelPrice;
  const costPerMile = distance !== 0 ? totalCost / distance : NaN;
  return { totalCost, gallons, costPerMile };
};

// Fuel economy: mpg = miles / gallons; L/100km = 235.215 / mpg.
const mpg: ComputeFn = (i) => {
  const miles = num(i.miles);
  const gallons = num(i.gallons);
  if (!finite(miles) || !finite(gallons) || gallons === 0)
    return { mpg: NaN, lPer100km: NaN, costPerMile: NaN };
  const mpgValue = miles / gallons;
  const lPer100km = mpgValue !== 0 ? 235.215 / mpgValue : NaN;
  const fuelPrice = num(i.fuelPrice);
  const costPerMile =
    finite(fuelPrice) && mpgValue !== 0 ? fuelPrice / mpgValue : NaN;
  return { mpg: mpgValue, lPer100km, costPerMile };
};

// EV savings: annual gas cost vs annual electricity cost.
const evSavings: ComputeFn = (i) => {
  const annualMiles = num(i.annualMiles);
  const gasMpg = num(i.gasMpg);
  const gasPrice = num(i.gasPrice);
  const evEfficiency = num(i.evEfficiency);
  const electricityRate = num(i.electricityRate);
  if (
    !finite(annualMiles) ||
    !finite(gasMpg) ||
    gasMpg === 0 ||
    !finite(gasPrice) ||
    !finite(evEfficiency) ||
    evEfficiency === 0 ||
    !finite(electricityRate)
  )
    return { annualSavings: NaN, gasCost: NaN, evCost: NaN };
  const gasCost = (annualMiles / gasMpg) * gasPrice;
  const evCost = (annualMiles / evEfficiency) * electricityRate;
  const annualSavings = gasCost - evCost;
  return { annualSavings, gasCost, evCost };
};

// Tire size: P-metric sidewall + overall diameter, revs per mile.
const tireSize: ComputeFn = (i) => {
  const width = num(i.width);
  const aspectRatio = num(i.aspectRatio);
  const rimDiameter = num(i.rimDiameter);
  if (!finite(width) || !finite(aspectRatio) || !finite(rimDiameter))
    return { diameter: NaN, sidewall: NaN, revsPerMile: NaN };
  const sidewallMm = (width * aspectRatio) / 100;
  const diameterMm = rimDiameter * 25.4 + 2 * sidewallMm;
  const diameterIn = diameterMm / 25.4;
  const circumferenceIn = diameterIn * Math.PI;
  const revsPerMile = circumferenceIn !== 0 ? 63360 / circumferenceIn : NaN;
  return { diameter: diameterIn, sidewall: sidewallMm, revsPerMile };
};

// Car loan: standard amortization over a term in months.
const carLoan: ComputeFn = (i) => {
  const vehiclePrice = num(i.vehiclePrice);
  const rate = num(i.rate);
  const term = num(i.term);
  if (!finite(vehiclePrice) || !finite(rate) || !finite(term) || term === 0)
    return { monthlyPayment: NaN, totalInterest: NaN, amountFinanced: NaN };
  const downPayment = finite(num(i.downPayment)) ? num(i.downPayment) : 0;
  const tradeIn = finite(num(i.tradeIn)) ? num(i.tradeIn) : 0;
  const loan = vehiclePrice - downPayment - tradeIn;
  if (loan <= 0)
    return { monthlyPayment: NaN, totalInterest: NaN, amountFinanced: loan };
  const r = rate / 100 / 12;
  const monthly =
    r === 0 ? loan / term : (loan * r) / (1 - Math.pow(1 + r, -term));
  const totalPaid = monthly * term;
  const totalInterest = totalPaid - loan;
  return { monthlyPayment: monthly, totalInterest, amountFinanced: loan };
};

export const automotiveWave3Engines: Record<string, ComputeFn> = {
  "fuel-cost": fuelCost,
  mpg,
  "ev-savings": evSavings,
  "tire-size": tireSize,
  "car-loan": carLoan,
};
