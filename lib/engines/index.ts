import type { ComputeFn } from "../types";
import { num } from "../utils";
import { extendedEngines } from "./extended";
import { wave2Engines } from "./extended-wave2";
import { wave2OtherEngines } from "./extended-wave2-other";
import { scienceWave3Engines } from "./science-wave3";

/* ------------------------------------------------------------------ *
 * Pure calculation engines. No formatting, no display concerns.
 * Each returns raw numbers/strings keyed by result id.
 * Invalid / impossible inputs yield NaN (rendered as "—" by the UI).
 * ------------------------------------------------------------------ */

/** Parse a delimited list of numbers (comma / space / newline separated). */
function parseList(raw: string | undefined): number[] {
  if (!raw) return [];
  return String(raw)
    .split(/[\s,;\n]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => parseFloat(s))
    .filter((n) => Number.isFinite(n));
}

function median(sorted: number[]): number {
  if (sorted.length === 0) return NaN;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

// ---------------- MATH ----------------

const percentage: ComputeFn = (i) => {
  const percent = num(i.percent);
  const value = num(i.value);
  return { result: (percent / 100) * value };
};

const percentageIncrease: ComputeFn = (i) => {
  const original = num(i.original);
  const updated = num(i.updated);
  if (original === 0) return { change: NaN, difference: updated - original };
  return {
    change: ((updated - original) / Math.abs(original)) * 100,
    difference: updated - original,
  };
};

const percentageDifference: ComputeFn = (i) => {
  const a = num(i.a);
  const b = num(i.b);
  const avg = (a + b) / 2;
  if (avg === 0) return { difference: NaN, absolute: Math.abs(a - b) };
  return {
    difference: (Math.abs(a - b) / Math.abs(avg)) * 100,
    absolute: Math.abs(a - b),
  };
};

const average: ComputeFn = (i) => {
  const list = parseList(i.numbers);
  if (list.length === 0)
    return { mean: NaN, sum: NaN, count: 0, median: NaN, min: NaN, max: NaN };
  const sum = list.reduce((a, b) => a + b, 0);
  const sorted = [...list].sort((a, b) => a - b);
  return {
    mean: sum / list.length,
    sum,
    count: list.length,
    median: median(sorted),
    min: sorted[0],
    max: sorted[sorted.length - 1],
  };
};

const squareRoot: ComputeFn = (i) => {
  const n = num(i.number);
  if (n < 0) return { root: NaN, squared: NaN };
  return { root: Math.sqrt(n), squared: n * n };
};

// ---------------- FINANCE ----------------

const mortgage: ComputeFn = (i) => {
  const price = num(i.homePrice);
  const down = num(i.downPayment) || 0;
  const principal = price - down;
  const annualRate = num(i.rate);
  const years = num(i.term);
  const n = years * 12;
  const r = annualRate / 100 / 12;
  if (principal <= 0 || n <= 0)
    return { monthlyPayment: NaN, totalPaid: NaN, totalInterest: NaN, principal };
  let monthly: number;
  if (r === 0) monthly = principal / n;
  else monthly = (principal * r) / (1 - Math.pow(1 + r, -n));
  const totalPaid = monthly * n;
  return {
    monthlyPayment: monthly,
    totalPaid,
    totalInterest: totalPaid - principal,
    principal,
  };
};

const compoundInterest: ComputeFn = (i) => {
  const P = num(i.principal);
  const annualRate = num(i.rate) / 100;
  const years = num(i.years);
  const nPer = num(i.frequency) || 12; // compounds per year
  const monthlyContribution = num(i.contribution) || 0;
  if (!Number.isFinite(P) || !Number.isFinite(years))
    return { futureValue: NaN, totalContributions: NaN, totalInterest: NaN };
  const ratePerPeriod = annualRate / nPer;
  const periods = nPer * years;
  const fvPrincipal =
    ratePerPeriod === 0
      ? P
      : P * Math.pow(1 + ratePerPeriod, periods);
  // Contributions modeled monthly, compounded at the account rate.
  const monthlyRate = annualRate / 12;
  const months = years * 12;
  const fvContrib =
    monthlyContribution === 0
      ? 0
      : monthlyRate === 0
        ? monthlyContribution * months
        : monthlyContribution *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const futureValue = fvPrincipal + fvContrib;
  const totalContributions = P + monthlyContribution * months;
  return {
    futureValue,
    totalContributions,
    totalInterest: futureValue - totalContributions,
  };
};

const roi: ComputeFn = (i) => {
  const initial = num(i.initial);
  const final = num(i.final);
  const years = num(i.years);
  if (initial === 0) return { roi: NaN, netProfit: final - initial, annualized: NaN };
  const netProfit = final - initial;
  const roiPct = (netProfit / initial) * 100;
  let annualized = NaN;
  if (Number.isFinite(years) && years > 0 && final / initial > 0) {
    annualized = (Math.pow(final / initial, 1 / years) - 1) * 100;
  }
  return { roi: roiPct, netProfit, annualized };
};

// ---------------- HEALTH ----------------

const bmi: ComputeFn = (i) => {
  const system = i.system || "metric";
  let bmiVal: number;
  if (system === "imperial") {
    const lb = num(i.weight);
    const inch = num(i.height);
    bmiVal = inch > 0 ? (703 * lb) / (inch * inch) : NaN;
  } else {
    const kg = num(i.weight);
    const cm = num(i.height);
    const m = cm / 100;
    bmiVal = m > 0 ? kg / (m * m) : NaN;
  }
  let category = "—";
  if (Number.isFinite(bmiVal)) {
    if (bmiVal < 18.5) category = "Underweight";
    else if (bmiVal < 25) category = "Normal weight";
    else if (bmiVal < 30) category = "Overweight";
    else category = "Obese";
  }
  return { bmi: bmiVal, category };
};

const bmr: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const age = num(i.age);
  const system = i.system || "metric";
  let kg: number, cm: number;
  if (system === "imperial") {
    kg = num(i.weight) * 0.45359237;
    cm = num(i.height) * 2.54;
  } else {
    kg = num(i.weight);
    cm = num(i.height);
  }
  // Mifflin-St Jeor
  const base = 10 * kg + 6.25 * cm - 5 * age;
  const bmrVal = sex === "female" ? base - 161 : base + 5;
  return {
    bmr: bmrVal,
    // Sedentary maintenance estimate (×1.2) for quick context
    maintenance: bmrVal * 1.2,
  };
};

// ---------------- DATE & TIME ----------------

function parseDate(s: string | undefined): Date | null {
  if (!s) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

const age: ComputeFn = (i) => {
  const birth = parseDate(i.birthDate);
  const asOf = parseDate(i.asOf) ?? new Date();
  if (!birth || birth > asOf)
    return { age: "—", years: NaN, totalDays: NaN, totalWeeks: NaN, totalMonths: NaN };
  let years = asOf.getFullYear() - birth.getFullYear();
  let months = asOf.getMonth() - birth.getMonth();
  let days = asOf.getDate() - birth.getDate();
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(asOf.getFullYear(), asOf.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((asOf.getTime() - birth.getTime()) / msPerDay);
  const parts = [`${years} years`, `${months} months`, `${days} days`];
  return {
    age: parts.join(", "),
    years,
    totalMonths: years * 12 + months,
    totalWeeks: Math.floor(totalDays / 7),
    totalDays,
  };
};

// ---------------- CONVERTERS ----------------

const temperature: ComputeFn = (i) => {
  const v = num(i.value);
  const from = i.from || "C";
  const to = i.to || "F";
  // Normalize to Celsius first
  let c: number;
  if (from === "C") c = v;
  else if (from === "F") c = ((v - 32) * 5) / 9;
  else c = v - 273.15; // K
  let out: number;
  if (to === "C") out = c;
  else if (to === "F") out = (c * 9) / 5 + 32;
  else out = c + 273.15;
  return { result: out };
};

// ---------------- BUSINESS ----------------

const freelanceRate: ComputeFn = (i) => {
  const targetIncome = num(i.targetIncome);
  const expenses = num(i.expenses) || 0;
  const billableHours = num(i.billableHours);
  const weeks = num(i.weeks) || 48;
  const taxRate = num(i.taxRate) || 0;
  const totalBillableHours = billableHours * weeks;
  if (totalBillableHours <= 0)
    return { hourlyRate: NaN, dayRate: NaN, weeklyRevenue: NaN };
  const grossNeeded = (targetIncome + expenses) / (1 - taxRate / 100);
  const hourly = grossNeeded / totalBillableHours;
  return {
    hourlyRate: hourly,
    dayRate: hourly * 8,
    weeklyRevenue: hourly * billableHours,
  };
};

// ---------------- CONSTRUCTION ----------------

const paint: ComputeFn = (i) => {
  const area = num(i.wallArea);
  const coats = num(i.coats) || 1;
  const coverage = num(i.coverage) || 350; // sq ft per gallon
  const doorsWindows = num(i.deductions) || 0;
  const paintable = Math.max(0, area - doorsWindows);
  if (paintable <= 0 || coverage <= 0)
    return { gallons: NaN, cans: NaN, litres: NaN };
  const gallons = (paintable * coats) / coverage;
  return {
    gallons,
    cans: Math.ceil(gallons),
    litres: gallons * 3.78541,
  };
};

// ---------------- EDUCATION ----------------

const GRADE_POINTS: Record<string, number> = {
  "A+": 4.0, A: 4.0, "A-": 3.7,
  "B+": 3.3, B: 3.0, "B-": 2.7,
  "C+": 2.3, C: 2.0, "C-": 1.7,
  "D+": 1.3, D: 1.0, "D-": 0.7,
  F: 0.0,
};

const gpa: ComputeFn = (i) => {
  const grades = String(i.grades || "")
    .split(/[\s,;\n]+/)
    .map((g) => g.trim().toUpperCase())
    .filter(Boolean);
  const credits = parseList(i.credits);
  if (grades.length === 0)
    return { gpa: NaN, totalCredits: NaN, courses: 0 };
  let totalPoints = 0;
  let totalCredits = 0;
  grades.forEach((g, idx) => {
    const pts = GRADE_POINTS[g];
    if (pts === undefined) return;
    const cr = credits[idx] ?? 1;
    totalPoints += pts * cr;
    totalCredits += cr;
  });
  if (totalCredits === 0) return { gpa: NaN, totalCredits: 0, courses: grades.length };
  return {
    gpa: totalPoints / totalCredits,
    totalCredits,
    courses: grades.length,
  };
};

function letterFromPct(pct: number): string {
  if (!Number.isFinite(pct)) return "—";
  if (pct >= 97) return "A+";
  if (pct >= 93) return "A";
  if (pct >= 90) return "A-";
  if (pct >= 87) return "B+";
  if (pct >= 83) return "B";
  if (pct >= 80) return "B-";
  if (pct >= 77) return "C+";
  if (pct >= 73) return "C";
  if (pct >= 70) return "C-";
  if (pct >= 67) return "D+";
  if (pct >= 63) return "D";
  if (pct >= 60) return "D-";
  return "F";
}

const grade: ComputeFn = (i) => {
  const scores = parseList(i.scores);
  const weights = parseList(i.weights);
  if (scores.length === 0) return { finalGrade: NaN, letter: "—", totalWeight: NaN };
  // If weights provided and align, weighted average; else simple average.
  if (weights.length === scores.length && weights.length > 0) {
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    if (totalWeight === 0) return { finalGrade: NaN, letter: "—", totalWeight };
    const weighted = scores.reduce((acc, s, idx) => acc + s * weights[idx], 0);
    const final = weighted / totalWeight;
    return { finalGrade: final, letter: letterFromPct(final), totalWeight };
  }
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return { finalGrade: avg, letter: letterFromPct(avg), totalWeight: 100 };
};

// ---------------- E-COMMERCE ----------------

const ecommerceProfit: ComputeFn = (i) => {
  const price = num(i.sellingPrice);
  const cost = num(i.productCost) || 0;
  const feePct = num(i.feePercent) || 0;
  const shipping = num(i.shippingCost) || 0;
  const other = num(i.otherCost) || 0;
  if (!Number.isFinite(price))
    return { netProfit: NaN, margin: NaN, feeAmount: NaN, markup: NaN };
  const feeAmount = price * (feePct / 100);
  const netProfit = price - cost - feeAmount - shipping - other;
  const totalCost = cost + feeAmount + shipping + other;
  return {
    netProfit,
    margin: price !== 0 ? (netProfit / price) * 100 : NaN,
    feeAmount,
    markup: totalCost !== 0 ? (netProfit / totalCost) * 100 : NaN,
  };
};

// ---------------- MARKETING ----------------

const roas: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const spend = num(i.adSpend);
  if (spend === 0) return { roas: NaN, roasPercent: NaN, profit: revenue };
  return {
    roas: revenue / spend,
    roasPercent: (revenue / spend) * 100,
    profit: revenue - spend,
  };
};

/**
 * Client-safe engine registry, keyed by calculator slug.
 * The interactive shell looks up its compute function here.
 */
export const engines: Record<string, ComputeFn> = {
  // Wave 2 first so existing/extended engines win on any shared id (merge/skip).
  ...wave2Engines,
  ...wave2OtherEngines,
  percentage,
  "percentage-increase": percentageIncrease,
  "percentage-difference": percentageDifference,
  average,
  "square-root": squareRoot,
  mortgage,
  "compound-interest": compoundInterest,
  roi,
  bmi,
  bmr,
  age,
  temperature,
  "freelance-rate": freelanceRate,
  paint,
  grade,
  gpa,
  "ecommerce-profit": ecommerceProfit,
  roas,
  ...extendedEngines,
  ...scienceWave3Engines,
};

export function getEngine(slug: string): ComputeFn | undefined {
  return engines[slug];
}
