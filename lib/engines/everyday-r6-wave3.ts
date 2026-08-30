import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 6 — additional Everyday calculators. Pure functions. Invalid → NaN (or "—" for strings). */

const finite = (x: number) => Number.isFinite(x);

// Gas trip cost: gallons = distance / mpg; cost = gallons × price per gallon.
const gasTripCost: ComputeFn = (i) => {
  const distanceMiles = num(i.distanceMiles);
  const mpg = num(i.mpg);
  const gasPricePerGallon = num(i.gasPricePerGallon);
  if (!finite(distanceMiles) || !finite(gasPricePerGallon) || !(mpg > 0))
    return { tripCost: NaN, gallonsUsed: NaN };
  const gallonsUsed = distanceMiles / mpg;
  return { tripCost: gallonsUsed * gasPricePerGallon, gallonsUsed };
};

// Cost per use: item cost divided by number of times used.
const costPerUse: ComputeFn = (i) => {
  const itemCost = num(i.itemCost);
  const timesUsed = num(i.timesUsed);
  if (!finite(itemCost) || !(timesUsed > 0)) return { costPerUse: NaN };
  return { costPerUse: itemCost / timesUsed };
};

// Price per unit comparison: unit price of each option; flag the better deal.
const pricePerUnitComparison: ComputeFn = (i) => {
  const priceA = num(i.priceA);
  const sizeA = num(i.sizeA);
  const priceB = num(i.priceB);
  const sizeB = num(i.sizeB);
  const unitPriceA = finite(priceA) && sizeA > 0 ? priceA / sizeA : NaN;
  const unitPriceB = finite(priceB) && sizeB > 0 ? priceB / sizeB : NaN;
  let betterDeal: string;
  if (!finite(unitPriceA) || !finite(unitPriceB)) betterDeal = "—";
  else if (unitPriceA < unitPriceB) betterDeal = "A";
  else if (unitPriceB < unitPriceA) betterDeal = "B";
  else betterDeal = "Equal";
  return { unitPriceA, unitPriceB, betterDeal };
};

// Tip split: total including tip divided evenly; also the tip total.
const tipSplit: ComputeFn = (i) => {
  const billAmount = num(i.billAmount);
  const tipPercent = num(i.tipPercent);
  const numberOfPeople = num(i.numberOfPeople);
  if (!finite(billAmount) || !finite(tipPercent) || !(numberOfPeople > 0))
    return { totalPerPerson: NaN, tipTotal: NaN };
  const tipTotal = billAmount * (tipPercent / 100);
  const total = billAmount + tipTotal;
  return { totalPerPerson: total / numberOfPeople, tipTotal };
};

// Savings rate: monthly savings as a percentage of monthly income.
const savingsRate: ComputeFn = (i) => {
  const monthlyIncome = num(i.monthlyIncome);
  const monthlySavings = num(i.monthlySavings);
  if (!finite(monthlySavings) || !(monthlyIncome > 0)) return { savingsRate: NaN };
  return { savingsRate: (monthlySavings / monthlyIncome) * 100 };
};

// Hourly to salary: annual = rate × hours/week × weeks/year; monthly = annual / 12.
const hourlyToSalary: ComputeFn = (i) => {
  const hourlyRate = num(i.hourlyRate);
  const hoursPerWeek = num(i.hoursPerWeek);
  const weeksPerYear = num(i.weeksPerYear);
  if (!finite(hourlyRate) || !finite(hoursPerWeek) || !finite(weeksPerYear))
    return { annualSalary: NaN, monthlySalary: NaN };
  const annualSalary = hourlyRate * hoursPerWeek * weeksPerYear;
  return { annualSalary, monthlySalary: annualSalary / 12 };
};

// Grocery budget: weekly = people × weekly per person; monthly = weekly × 4.345.
const groceryBudget: ComputeFn = (i) => {
  const people = num(i.people);
  const weeklyPerPerson = num(i.weeklyPerPerson);
  if (!finite(people) || !finite(weeklyPerPerson))
    return { weeklyBudget: NaN, monthlyBudget: NaN };
  const weeklyBudget = people * weeklyPerPerson;
  return { weeklyBudget, monthlyBudget: weeklyBudget * 4.345 };
};

// Screen time: hours/day scaled to week and year; days per year equivalent.
const screenTime: ComputeFn = (i) => {
  const hoursPerDay = num(i.hoursPerDay);
  if (!finite(hoursPerDay))
    return { hoursPerWeek: NaN, hoursPerYear: NaN, daysPerYear: NaN };
  const hoursPerYear = hoursPerDay * 365;
  return {
    hoursPerWeek: hoursPerDay * 7,
    hoursPerYear,
    daysPerYear: hoursPerYear / 24,
  };
};

// Water usage cost: daily = gallons/day ÷ 1000 × price; monthly = daily × 30.
const waterUsageCost: ComputeFn = (i) => {
  const gallonsPerDay = num(i.gallonsPerDay);
  const pricePer1000Gallons = num(i.pricePer1000Gallons);
  if (!finite(gallonsPerDay) || !finite(pricePer1000Gallons))
    return { dailyCost: NaN, monthlyCost: NaN };
  const dailyCost = (gallonsPerDay / 1000) * pricePer1000Gallons;
  return { dailyCost, monthlyCost: dailyCost * 30 };
};

// Pet food cost: days per bag = (bag lbs × 16) / daily ounces; monthly cost = bag cost / days × 30.
const petFoodCost: ComputeFn = (i) => {
  const dailyFoodOunces = num(i.dailyFoodOunces);
  const bagSizePounds = num(i.bagSizePounds);
  const bagCost = num(i.bagCost);
  if (!finite(bagSizePounds) || !finite(bagCost) || !(dailyFoodOunces > 0))
    return { daysPerBag: NaN, monthlyCost: NaN };
  const daysPerBag = (bagSizePounds * 16) / dailyFoodOunces;
  const monthlyCost = daysPerBag > 0 ? (bagCost / daysPerBag) * 30 : NaN;
  return { daysPerBag, monthlyCost };
};

export const everydayR6Engines: Record<string, ComputeFn> = {
  "gas-trip-cost": gasTripCost,
  "cost-per-use": costPerUse,
  "price-per-unit-comparison": pricePerUnitComparison,
  "tip-split": tipSplit,
  "savings-rate": savingsRate,
  "hourly-to-salary": hourlyToSalary,
  "grocery-budget": groceryBudget,
  "screen-time": screenTime,
  "water-usage-cost": waterUsageCost,
  "pet-food-cost": petFoodCost,
};
