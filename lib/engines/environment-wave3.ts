import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Environment engines. Pure functions, EPA equivalency factors. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Household carbon footprint from driving + home electricity (metric tons CO₂/yr).
const carbonFootprint: ComputeFn = (i) => {
  const annualMiles = num(i.annualMiles);
  const mpg = num(i.mpg);
  const monthlyKwh = num(i.monthlyKwh);
  if (!finite(annualMiles) || !finite(mpg) || mpg === 0 || !finite(monthlyKwh))
    return { totalTons: NaN, carTons: NaN, homeTons: NaN };
  const carTons = ((annualMiles / mpg) * 8.887) / 1000;
  const homeTons = (monthlyKwh * 12 * 0.417) / 1000;
  return { totalTons: carTons + homeTons, carTons, homeTons };
};

// Solar savings from system size, sun hours, and electricity rate.
const solarSavings: ComputeFn = (i) => {
  const systemSizeKw = num(i.systemSizeKw);
  const sunHours = num(i.sunHours);
  const electricityRate = num(i.electricityRate);
  if (!finite(systemSizeKw) || !finite(sunHours) || !finite(electricityRate))
    return { annualSavings: NaN, annualKwh: NaN, twentyFiveYear: NaN };
  const annualKwh = systemSizeKw * sunHours * 365;
  const annualSavings = annualKwh * electricityRate;
  return { annualSavings, annualKwh, twentyFiveYear: annualSavings * 25 };
};

// Air-travel CO₂ from distance and passenger count (0.115 kg per passenger-km).
const flightEmissions: ComputeFn = (i) => {
  const distanceKm = num(i.distanceKm);
  const passengers = num(i.passengers);
  if (!finite(distanceKm) || !finite(passengers))
    return { co2Kg: NaN, co2Tons: NaN };
  const co2Kg = distanceKm * 0.115 * passengers;
  return { co2Kg, co2Tons: co2Kg / 1000 };
};

// Running cost of an appliance from wattage, daily hours, and rate.
const homeEnergyCost: ComputeFn = (i) => {
  const watts = num(i.watts);
  const hoursPerDay = num(i.hoursPerDay);
  const rate = num(i.rate);
  if (!finite(watts) || !finite(hoursPerDay) || !finite(rate))
    return { monthlyCost: NaN, monthlyKwh: NaN, annualCost: NaN };
  const monthlyKwh = (watts * hoursPerDay * 30) / 1000;
  const monthlyCost = monthlyKwh * rate;
  return { monthlyCost, monthlyKwh, annualCost: monthlyCost * 12 };
};

// EV charging cost from battery size, charge percentage, and electricity rate.
const evChargingCost: ComputeFn = (i) => {
  const batteryKwh = num(i.batteryKwh);
  const chargePercent = num(i.chargePercent);
  const electricityRate = num(i.electricityRate);
  if (!finite(batteryKwh) || !finite(chargePercent) || !finite(electricityRate))
    return { cost: NaN, kwhUsed: NaN };
  const kwhUsed = batteryKwh * (chargePercent / 100);
  return { cost: kwhUsed * electricityRate, kwhUsed };
};

// Shower water footprint from minutes, frequency, and flow rate.
const waterFootprint: ComputeFn = (i) => {
  const showerMinutes = num(i.showerMinutes);
  const showersPerWeek = num(i.showersPerWeek);
  const flowRate = num(i.flowRate);
  if (!finite(showerMinutes) || !finite(showersPerWeek) || !finite(flowRate))
    return { weeklyLitres: NaN, annualLitres: NaN, annualGallons: NaN };
  const weeklyLitres = showerMinutes * showersPerWeek * flowRate;
  return {
    weeklyLitres,
    annualLitres: weeklyLitres * 52,
    annualGallons: (weeklyLitres * 52) / 3.785,
  };
};

export const environmentWave3Engines: Record<string, ComputeFn> = {
  "carbon-footprint": carbonFootprint,
  "solar-savings": solarSavings,
  "flight-emissions": flightEmissions,
  "home-energy-cost": homeEnergyCost,
  "ev-charging-cost": evChargingCost,
  "water-footprint": waterFootprint,
};
