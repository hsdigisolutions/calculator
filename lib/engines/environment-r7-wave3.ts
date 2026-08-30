import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — Environment engines. Pure functions, published emission/usage
   factors (EPA, EIA, USGS). Invalid or zero-divide inputs → NaN (rendered as —). */

const finite = (x: number) => Number.isFinite(x);

// Trees needed to offset a yearly CO₂ output, each tree absorbing a set kg/yr.
const treeCarbonOffset: ComputeFn = (i) => {
  const co2KgPerYear = num(i.co2KgPerYear);
  const kgAbsorbedPerTree = num(i.kgAbsorbedPerTree);
  if (!finite(co2KgPerYear) || !finite(kgAbsorbedPerTree) || kgAbsorbedPerTree <= 0)
    return { treesNeeded: NaN };
  return { treesNeeded: Math.ceil(co2KgPerYear / kgAbsorbedPerTree) };
};

// CO₂ avoided by recycling paper, plastic, and glass (kg CO₂ per kg material).
const recyclingImpact: ComputeFn = (i) => {
  const paperKg = num(i.paperKg);
  const plasticKg = num(i.plasticKg);
  const glassKg = num(i.glassKg);
  if (!finite(paperKg) || !finite(plasticKg) || !finite(glassKg))
    return { co2SavedKg: NaN };
  return { co2SavedKg: paperKg * 1.1 + plasticKg * 1.5 + glassKg * 0.3 };
};

// Rainwater a roof can capture in a year from area, rainfall, and capture efficiency.
const rainwaterHarvesting: ComputeFn = (i) => {
  const roofAreaSqM = num(i.roofAreaSqM);
  const annualRainfallMm = num(i.annualRainfallMm);
  const efficiencyPercent = num(i.efficiencyPercent);
  if (!finite(roofAreaSqM) || !finite(annualRainfallMm) || !finite(efficiencyPercent))
    return { litersPerYear: NaN };
  return {
    litersPerYear: (roofAreaSqM * annualRainfallMm * efficiencyPercent) / 100,
  };
};

// Annual savings and kWh saved by switching incandescent bulbs to LED.
const ledSavings: ComputeFn = (i) => {
  const bulbs = num(i.bulbs);
  const wattsIncandescent = num(i.wattsIncandescent);
  const wattsLed = num(i.wattsLed);
  const hoursPerDay = num(i.hoursPerDay);
  const pricePerKwh = num(i.pricePerKwh);
  if (
    !finite(bulbs) ||
    !finite(wattsIncandescent) ||
    !finite(wattsLed) ||
    !finite(hoursPerDay) ||
    !finite(pricePerKwh)
  )
    return { annualSavings: NaN, kwhSaved: NaN };
  const kwhSaved =
    (bulbs * (wattsIncandescent - wattsLed) / 1000) * hoursPerDay * 365;
  return { annualSavings: kwhSaved * pricePerKwh, kwhSaved };
};

// Driving CO₂ from miles, fuel economy, and CO₂ per gallon of gasoline.
const drivingEmissions: ComputeFn = (i) => {
  const miles = num(i.miles);
  const mpg = num(i.mpg);
  const co2KgPerGallon = num(i.co2KgPerGallon);
  if (!finite(miles) || !finite(mpg) || mpg === 0 || !finite(co2KgPerGallon))
    return { co2Kg: NaN };
  return { co2Kg: (miles / mpg) * co2KgPerGallon };
};

// Annual dietary CO₂ from weekly beef, chicken, and dairy consumption.
const dietCarbonFootprint: ComputeFn = (i) => {
  const beefKgPerWeek = num(i.beefKgPerWeek);
  const chickenKgPerWeek = num(i.chickenKgPerWeek);
  const dairyKgPerWeek = num(i.dairyKgPerWeek);
  if (!finite(beefKgPerWeek) || !finite(chickenKgPerWeek) || !finite(dairyKgPerWeek))
    return { annualCo2Kg: NaN };
  return {
    annualCo2Kg:
      (beefKgPerWeek * 27 + chickenKgPerWeek * 6.9 + dairyKgPerWeek * 3.2) * 52,
  };
};

// Household water usage from people and per-person daily gallons.
const householdWaterUsage: ComputeFn = (i) => {
  const people = num(i.people);
  const gallonsPerPersonPerDay = num(i.gallonsPerPersonPerDay);
  if (!finite(people) || !finite(gallonsPerPersonPerDay))
    return { dailyGallons: NaN, annualGallons: NaN };
  const dailyGallons = people * gallonsPerPersonPerDay;
  return { dailyGallons, annualGallons: dailyGallons * 365 };
};

// Wind turbine power output from blade radius, wind speed, efficiency, and air density.
const windTurbineOutput: ComputeFn = (i) => {
  const bladeRadiusM = num(i.bladeRadiusM);
  const windSpeedMs = num(i.windSpeedMs);
  const efficiencyPercent = num(i.efficiencyPercent);
  const airDensity = num(i.airDensity);
  if (
    !finite(bladeRadiusM) ||
    !finite(windSpeedMs) ||
    !finite(efficiencyPercent) ||
    !finite(airDensity)
  )
    return { powerWatts: NaN };
  const powerWatts =
    0.5 *
    airDensity *
    Math.PI *
    bladeRadiusM *
    bladeRadiusM *
    Math.pow(windSpeedMs, 3) *
    (efficiencyPercent / 100);
  return { powerWatts };
};

// Food waste diverted from landfill by composting, and the methane-equivalent CO₂ avoided.
const compostImpact: ComputeFn = (i) => {
  const foodWasteKgPerWeek = num(i.foodWasteKgPerWeek);
  if (!finite(foodWasteKgPerWeek))
    return { annualDivertedKg: NaN, co2AvoidedKg: NaN };
  const annualDivertedKg = foodWasteKgPerWeek * 52;
  return { annualDivertedKg, co2AvoidedKg: annualDivertedKg * 0.5 };
};

// Annual single-use plastic mass and its embodied CO₂ from bottle use.
const plasticFootprint: ComputeFn = (i) => {
  const bottlesPerWeek = num(i.bottlesPerWeek);
  const gramsPerBottle = num(i.gramsPerBottle);
  if (!finite(bottlesPerWeek) || !finite(gramsPerBottle))
    return { annualPlasticKg: NaN, co2Kg: NaN };
  const annualPlasticKg = (bottlesPerWeek * 52 * gramsPerBottle) / 1000;
  return { annualPlasticKg, co2Kg: annualPlasticKg * 6 };
};

export const environmentR7Engines: Record<string, ComputeFn> = {
  "tree-carbon-offset": treeCarbonOffset,
  "recycling-impact": recyclingImpact,
  "rainwater-harvesting": rainwaterHarvesting,
  "led-savings": ledSavings,
  "driving-emissions": drivingEmissions,
  "diet-carbon-footprint": dietCarbonFootprint,
  "household-water-usage": householdWaterUsage,
  "wind-turbine-output": windTurbineOutput,
  "compost-impact": compostImpact,
  "plastic-footprint": plasticFootprint,
};
