import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — additional Everyday cost engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Electricity bill: kWh = watts × hours/day × days/month ÷ 1000; cost = kWh × rate.
const electricityBill: ComputeFn = (i) => {
  const watts = num(i.watts);
  const hoursPerDay = num(i.hoursPerDay);
  const daysPerMonth = num(i.daysPerMonth);
  const rate = num(i.rate);
  if (!finite(watts) || !finite(hoursPerDay) || !finite(daysPerMonth) || !finite(rate))
    return { monthlyCost: NaN, monthlyKwh: NaN, annualCost: NaN };
  const kwh = (watts * hoursPerDay * daysPerMonth) / 1000;
  const cost = kwh * rate;
  return { monthlyCost: cost, monthlyKwh: kwh, annualCost: cost * 12 };
};

// Subscription cost: annual = monthly × 12; total over N years; daily = annual / 365.
const subscriptionCost: ComputeFn = (i) => {
  const monthlyTotal = num(i.monthlyTotal);
  const years = num(i.years);
  if (!finite(monthlyTotal) || !finite(years))
    return { annualCost: NaN, totalCost: NaN, dailyCost: NaN };
  const annual = monthlyTotal * 12;
  return { annualCost: annual, totalCost: annual * years, dailyCost: annual / 365 };
};

// Commute fuel cost: weekly miles ÷ mpg × fuel price, scaled to day/year.
const commuteCost: ComputeFn = (i) => {
  const milesPerDay = num(i.milesPerDay);
  const daysPerWeek = num(i.daysPerWeek);
  const mpg = num(i.mpg);
  const fuelPrice = num(i.fuelPrice);
  if (!finite(milesPerDay) || !finite(daysPerWeek) || !finite(fuelPrice))
    return { annualCost: NaN, weeklyCost: NaN, dailyCost: NaN };
  const weeklyMiles = milesPerDay * daysPerWeek;
  const weeklyCost = mpg > 0 ? (weeklyMiles / mpg) * fuelPrice : NaN;
  return {
    annualCost: weeklyCost * 52,
    weeklyCost,
    dailyCost: daysPerWeek > 0 ? weeklyCost / daysPerWeek : NaN,
  };
};

// Coffee cost: daily = cups × price; annual = daily × 365.
const coffeeCost: ComputeFn = (i) => {
  const cupsPerDay = num(i.cupsPerDay);
  const pricePerCup = num(i.pricePerCup);
  if (!finite(cupsPerDay) || !finite(pricePerCup))
    return { annualCost: NaN, monthlyCost: NaN, tenYearCost: NaN };
  const daily = cupsPerDay * pricePerCup;
  const annual = daily * 365;
  return { annualCost: annual, monthlyCost: annual / 12, tenYearCost: annual * 10 };
};

// Wedding budget: guests × per-guest + venue + extras.
const weddingBudget: ComputeFn = (i) => {
  const guestCount = num(i.guestCount);
  const perGuestCost = num(i.perGuestCost);
  if (!finite(guestCount) || !finite(perGuestCost))
    return { totalBudget: NaN, perGuest: NaN };
  const total = guestCount * perGuestCost + (num(i.venueCost) || 0) + (num(i.extras) || 0);
  return { totalBudget: total, perGuest: guestCount > 0 ? total / guestCount : NaN };
};

// Gift budget: people × budget each.
const giftBudget: ComputeFn = (i) => {
  const numberOfPeople = num(i.numberOfPeople);
  const budgetPerPerson = num(i.budgetPerPerson);
  if (!finite(numberOfPeople) || !finite(budgetPerPerson))
    return { totalBudget: NaN };
  return { totalBudget: numberOfPeople * budgetPerPerson };
};

export const everydayMoreEngines: Record<string, ComputeFn> = {
  "electricity-bill": electricityBill,
  "subscription-cost": subscriptionCost,
  "commute-cost": commuteCost,
  "coffee-cost": coffeeCost,
  "wedding-budget": weddingBudget,
  "gift-budget": giftBudget,
};
