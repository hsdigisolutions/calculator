import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Extended engines — the remaining MVP calculators. Pure math only. */

function parseList(raw: string | undefined): number[] {
  if (!raw) return [];
  return String(raw)
    .split(/[\s,;\n]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => parseFloat(s))
    .filter((n) => Number.isFinite(n));
}

function gcd(a: number, b: number): number {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
function lcm2(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function toKg(value: number, system: string) {
  return system === "imperial" ? value * 0.45359237 : value;
}
function toCm(value: number, system: string) {
  return system === "imperial" ? value * 2.54 : value;
}

function amortize(principal: number, annualRate: number, months: number) {
  const r = annualRate / 100 / 12;
  if (principal <= 0 || months <= 0)
    return { monthlyPayment: NaN, totalPaid: NaN, totalInterest: NaN };
  const monthly =
    r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  const totalPaid = monthly * months;
  return { monthlyPayment: monthly, totalPaid, totalInterest: totalPaid - principal };
}

// ---------------- MATH ----------------

const fraction: ComputeFn = (i) => {
  const n1 = num(i.n1), d1 = num(i.d1), n2 = num(i.n2), d2 = num(i.d2);
  const op = i.op || "+";
  if (d1 === 0 || d2 === 0) return { result: "—", decimal: NaN };
  let n: number, d: number;
  switch (op) {
    case "-": n = n1 * d2 - n2 * d1; d = d1 * d2; break;
    case "*": n = n1 * n2; d = d1 * d2; break;
    case "/": n = n1 * d2; d = d1 * n2; break;
    default: n = n1 * d2 + n2 * d1; d = d1 * d2;
  }
  if (d === 0) return { result: "—", decimal: NaN };
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  const sn = n / g, sd = d / g;
  const text = sd === 1 ? `${sn}` : `${sn}/${sd}`;
  return { result: text, decimal: n / d };
};

const ratio: ComputeFn = (i) => {
  const a = num(i.a), b = num(i.b);
  if (b === 0) return { simplified: "—", decimal: NaN, scaledValue: NaN };
  const g = gcd(a, b) || 1;
  const simplified = `${a / g} : ${b / g}`;
  const scaleA = num(i.scaleA);
  let scaledValue: number = NaN;
  if (Number.isFinite(scaleA)) scaledValue = (scaleA * b) / a;
  return { simplified, decimal: a / b, scaledValue };
};

const gcfCalc: ComputeFn = (i) => {
  const list = parseList(i.numbers).map((n) => Math.abs(Math.trunc(n))).filter((n) => n > 0);
  if (list.length < 1) return { gcf: NaN, lcm: NaN };
  const g = list.reduce((acc, n) => gcd(acc, n));
  const l = list.reduce((acc, n) => lcm2(acc, n));
  return { gcf: g, lcm: l };
};

const lcmCalc: ComputeFn = (i) => {
  const list = parseList(i.numbers).map((n) => Math.abs(Math.trunc(n))).filter((n) => n > 0);
  if (list.length < 1) return { lcm: NaN, gcf: NaN };
  const l = list.reduce((acc, n) => lcm2(acc, n));
  const g = list.reduce((acc, n) => gcd(acc, n));
  return { lcm: l, gcf: g };
};

const factorial = (n: number): number => {
  if (n < 0 || !Number.isInteger(n)) return NaN;
  if (n > 170) return Infinity;
  let r = 1;
  for (let k = 2; k <= n; k++) r *= k;
  return r;
};

const scientific: ComputeFn = (i) => {
  const x = num(i.value);
  const op = i.operation || "sqrt";
  const unit = i.angleUnit || "deg";
  const toRad = (v: number) => (unit === "deg" ? (v * Math.PI) / 180 : v);
  const fromRad = (v: number) => (unit === "deg" ? (v * 180) / Math.PI : v);
  let result: number;
  switch (op) {
    case "sin": result = Math.sin(toRad(x)); break;
    case "cos": result = Math.cos(toRad(x)); break;
    case "tan": result = Math.tan(toRad(x)); break;
    case "asin": result = x < -1 || x > 1 ? NaN : fromRad(Math.asin(x)); break;
    case "acos": result = x < -1 || x > 1 ? NaN : fromRad(Math.acos(x)); break;
    case "atan": result = fromRad(Math.atan(x)); break;
    case "ln": result = x <= 0 ? NaN : Math.log(x); break;
    case "log10": result = x <= 0 ? NaN : Math.log10(x); break;
    case "sqrt": result = x < 0 ? NaN : Math.sqrt(x); break;
    case "cbrt": result = Math.cbrt(x); break;
    case "square": result = x * x; break;
    case "cube": result = x * x * x; break;
    case "exp": result = Math.exp(x); break;
    case "factorial": result = factorial(x); break;
    case "reciprocal": result = x === 0 ? NaN : 1 / x; break;
    case "abs": result = Math.abs(x); break;
    default: result = NaN;
  }
  return { result };
};

// ---------------- FINANCE ----------------

const loan: ComputeFn = (i) => {
  const amount = num(i.amount);
  const rate = num(i.rate);
  const years = num(i.term);
  const r = amortize(amount, rate, years * 12);
  return { ...r, principal: amount };
};

const simpleInterest: ComputeFn = (i) => {
  const p = num(i.principal), rate = num(i.rate), t = num(i.years);
  if (!Number.isFinite(p) || !Number.isFinite(rate) || !Number.isFinite(t))
    return { interest: NaN, total: NaN };
  const interest = (p * rate * t) / 100;
  return { interest, total: p + interest };
};

const investment: ComputeFn = (i) => {
  const P = num(i.principal);
  const monthly = num(i.contribution) || 0;
  const annual = num(i.rate) / 100;
  const years = num(i.years);
  if (!Number.isFinite(P) || !Number.isFinite(years))
    return { futureValue: NaN, totalContributions: NaN, totalEarnings: NaN };
  const rM = annual / 12;
  const n = years * 12;
  const fvP = rM === 0 ? P : P * Math.pow(1 + rM, n);
  const fvC =
    monthly === 0 ? 0 : rM === 0 ? monthly * n : monthly * ((Math.pow(1 + rM, n) - 1) / rM);
  const fv = fvP + fvC;
  const contrib = P + monthly * n;
  return { futureValue: fv, totalContributions: contrib, totalEarnings: fv - contrib };
};

const savings: ComputeFn = (i) => {
  const monthly = num(i.monthly);
  const annual = num(i.rate) / 100;
  const years = num(i.years);
  const start = num(i.start) || 0;
  if (!Number.isFinite(monthly) || !Number.isFinite(years))
    return { futureValue: NaN, totalDeposited: NaN, interestEarned: NaN };
  const rM = annual / 12;
  const n = years * 12;
  const fvStart = rM === 0 ? start : start * Math.pow(1 + rM, n);
  const fvDep =
    monthly === 0 ? 0 : rM === 0 ? monthly * n : monthly * ((Math.pow(1 + rM, n) - 1) / rM);
  const fv = fvStart + fvDep;
  const deposited = start + monthly * n;
  return { futureValue: fv, totalDeposited: deposited, interestEarned: fv - deposited };
};

const profitMargin: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const cost = num(i.cost);
  if (!Number.isFinite(revenue) || !Number.isFinite(cost))
    return { profit: NaN, margin: NaN, markup: NaN };
  const profit = revenue - cost;
  return {
    profit,
    margin: revenue !== 0 ? (profit / revenue) * 100 : NaN,
    markup: cost !== 0 ? (profit / cost) * 100 : NaN,
  };
};

const markup: ComputeFn = (i) => {
  const cost = num(i.cost);
  const markupPct = num(i.markup);
  if (!Number.isFinite(cost) || !Number.isFinite(markupPct))
    return { price: NaN, profit: NaN, margin: NaN };
  const price = cost * (1 + markupPct / 100);
  const profit = price - cost;
  return { price, profit, margin: price !== 0 ? (profit / price) * 100 : NaN };
};

const breakEven: ComputeFn = (i) => {
  const fixed = num(i.fixedCosts);
  const price = num(i.pricePerUnit);
  const variable = num(i.variableCost);
  const contribution = price - variable;
  if (!Number.isFinite(fixed) || contribution <= 0)
    return { units: NaN, revenue: NaN, contribution };
  const units = fixed / contribution;
  return { units: Math.ceil(units), revenue: Math.ceil(units) * price, contribution };
};

// ---------------- HEALTH ----------------

function mifflinBMR(sex: string, kg: number, cm: number, age: number) {
  const base = 10 * kg + 6.25 * cm - 5 * age;
  return sex === "female" ? base - 161 : base + 5;
}
const ACTIVITY: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  athlete: 1.9,
};

const tdee: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const age = num(i.age);
  const kg = toKg(num(i.weight), i.system || "metric");
  const cm = toCm(num(i.height), i.system || "metric");
  const bmr = mifflinBMR(sex, kg, cm, age);
  const factor = ACTIVITY[i.activity || "moderate"] ?? 1.55;
  return { tdee: bmr * factor, bmr };
};

const calorie: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const age = num(i.age);
  const kg = toKg(num(i.weight), i.system || "metric");
  const cm = toCm(num(i.height), i.system || "metric");
  const bmr = mifflinBMR(sex, kg, cm, age);
  const maintenance = bmr * (ACTIVITY[i.activity || "moderate"] ?? 1.55);
  const goal = i.goal || "maintain";
  const adj: Record<string, number> = {
    "lose-1": -500, "lose-0.5": -250, maintain: 0, "gain-0.5": 250, "gain-1": 500,
  };
  const target = maintenance + (adj[goal] ?? 0);
  return { target: Math.max(0, target), maintenance };
};

const bodyFat: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const cm = toCm(num(i.height), i.system || "metric");
  const neck = toCm(num(i.neck), i.system || "metric");
  const waist = toCm(num(i.waist), i.system || "metric");
  const hip = toCm(num(i.hip), i.system || "metric");
  let bf: number;
  if (sex === "female") {
    const denom = waist + hip - neck;
    bf = denom > 0 && cm > 0
      ? 495 / (1.29579 - 0.35004 * Math.log10(denom) + 0.221 * Math.log10(cm)) - 450
      : NaN;
  } else {
    const denom = waist - neck;
    bf = denom > 0 && cm > 0
      ? 495 / (1.0324 - 0.19077 * Math.log10(denom) + 0.15456 * Math.log10(cm)) - 450
      : NaN;
  }
  let category = "—";
  if (Number.isFinite(bf)) {
    const male = sex !== "female";
    if (bf < (male ? 6 : 14)) category = "Essential";
    else if (bf < (male ? 14 : 21)) category = "Athletic";
    else if (bf < (male ? 18 : 25)) category = "Fitness";
    else if (bf < (male ? 25 : 32)) category = "Average";
    else category = "High";
  }
  return { bodyFat: bf, category };
};

const idealWeight: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const cm = toCm(num(i.height), i.system || "metric");
  if (!(cm > 0)) return { ideal: NaN, rangeLow: NaN, rangeHigh: NaN };
  const inches = cm / 2.54;
  const over60 = Math.max(0, inches - 60);
  const devine = (sex === "female" ? 45.5 : 50) + 2.3 * over60;
  const m = cm / 100;
  return { ideal: devine, rangeLow: 18.5 * m * m, rangeHigh: 24.9 * m * m };
};

const protein: ComputeFn = (i) => {
  const kg = toKg(num(i.weight), i.system || "metric");
  const goal = i.goal || "active";
  const factors: Record<string, [number, number]> = {
    sedentary: [0.8, 1.0], active: [1.2, 1.6], "build-muscle": [1.6, 2.2], "lose-fat": [1.6, 2.4],
  };
  const [lo, hi] = factors[goal] ?? [1.2, 1.6];
  if (!(kg > 0)) return { grams: NaN, low: NaN, high: NaN };
  return { grams: kg * ((lo + hi) / 2), low: kg * lo, high: kg * hi };
};

const macro: ComputeFn = (i) => {
  const cal = num(i.calories);
  const split = i.split || "balanced";
  const splits: Record<string, [number, number, number]> = {
    balanced: [40, 30, 30], "low-carb": [20, 40, 40], "high-protein": [30, 40, 30], keto: [5, 30, 65],
  };
  const [c, p, f] = splits[split] ?? [40, 30, 30];
  if (!Number.isFinite(cal)) return { protein: NaN, carbs: NaN, fat: NaN };
  return { protein: (cal * p) / 100 / 4, carbs: (cal * c) / 100 / 4, fat: (cal * f) / 100 / 9 };
};

const waterIntake: ComputeFn = (i) => {
  const kg = toKg(num(i.weight), i.system || "metric");
  const activityMin = num(i.activity) || 0;
  if (!(kg > 0)) return { litres: NaN, ml: NaN, cups: NaN };
  const ml = kg * 33 + (activityMin / 30) * 350;
  return { litres: ml / 1000, ml, cups: ml / 240 };
};

const runningPace: ComputeFn = (i) => {
  const distance = num(i.distance);
  const unit = i.unit || "km";
  const totalSeconds =
    (num(i.hours) || 0) * 3600 + (num(i.minutes) || 0) * 60 + (num(i.seconds) || 0);
  if (!(distance > 0) || !(totalSeconds > 0))
    return { pacePerKm: "—", pacePerMile: "—", speedKmh: NaN };
  const km = unit === "mi" ? distance * 1.609344 : distance;
  const secPerKm = totalSeconds / km;
  const secPerMile = secPerKm * 1.609344;
  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.round(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };
  return {
    pacePerKm: fmt(secPerKm),
    pacePerMile: fmt(secPerMile),
    speedKmh: km / (totalSeconds / 3600),
  };
};

// ---------------- DATE & TIME ----------------

function parseDate(s: string | undefined): Date | null {
  if (!s) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}
const MS_DAY = 86400000;

const dateDifference: ComputeFn = (i) => {
  const a = parseDate(i.start);
  const b = parseDate(i.end);
  if (!a || !b) return { days: NaN, weeks: NaN, months: NaN, years: NaN };
  const days = Math.round(Math.abs(b.getTime() - a.getTime()) / MS_DAY);
  return {
    days,
    weeks: Math.floor(days / 7),
    months: Math.floor(days / 30.4375),
    years: Math.floor(days / 365.25),
  };
};

const businessDays: ComputeFn = (i) => {
  const a = parseDate(i.start);
  const b = parseDate(i.end);
  if (!a || !b || b < a) return { businessDays: NaN, totalDays: NaN, weekendDays: NaN };
  let business = 0, weekend = 0, total = 0;
  const cur = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const end = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  while (cur <= end) {
    const day = cur.getDay();
    if (day === 0 || day === 6) weekend++;
    else business++;
    total++;
    cur.setDate(cur.getDate() + 1);
  }
  return { businessDays: business, totalDays: total, weekendDays: weekend };
};

const timeDuration: ComputeFn = (i) => {
  const parse = (s: string | undefined) => {
    if (!s) return NaN;
    const [h, m] = s.split(":").map((x) => parseInt(x, 10));
    if (Number.isNaN(h)) return NaN;
    return h * 60 + (m || 0);
  };
  const start = parse(i.start);
  const end = parse(i.end);
  if (Number.isNaN(start) || Number.isNaN(end))
    return { duration: "—", hours: NaN, minutes: NaN };
  let diff = end - start;
  if (diff < 0) diff += 24 * 60; // crosses midnight
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  return {
    duration: `${h}h ${m}m`,
    hours: diff / 60,
    minutes: diff,
  };
};

const overtime: ComputeFn = (i) => {
  const regular = num(i.regularHours) || 0;
  const otHours = num(i.overtimeHours) || 0;
  const rate = num(i.hourlyRate);
  const mult = num(i.multiplier) || 1.5;
  if (!Number.isFinite(rate)) return { total: NaN, regularPay: NaN, overtimePay: NaN };
  const regularPay = regular * rate;
  const overtimePay = otHours * rate * mult;
  return { total: regularPay + overtimePay, regularPay, overtimePay };
};

// ---------------- CONVERTERS ----------------

function convert(value: number, factors: Record<string, number>, from: string, to: string) {
  const f = factors[from], t = factors[to];
  if (!f || !t || !Number.isFinite(value)) return NaN;
  return (value * f) / t;
}

const LENGTH: Record<string, number> = {
  mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
};
const WEIGHT: Record<string, number> = {
  mg: 1e-6, g: 0.001, kg: 1, t: 1000, oz: 0.028349523125, lb: 0.45359237, st: 6.35029318,
};
const SPEED: Record<string, number> = {
  "m/s": 1, "km/h": 0.277778, mph: 0.44704, knot: 0.514444, "ft/s": 0.3048,
};
const DATA: Record<string, number> = {
  bit: 0.125, B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776, PB: 1125899906842624,
};

const lengthConv: ComputeFn = (i) => ({ result: convert(num(i.value), LENGTH, i.from || "m", i.to || "ft") });
const weightConv: ComputeFn = (i) => ({ result: convert(num(i.value), WEIGHT, i.from || "kg", i.to || "lb") });
const speedConv: ComputeFn = (i) => ({ result: convert(num(i.value), SPEED, i.from || "km/h", i.to || "mph") });
const dataConv: ComputeFn = (i) => ({ result: convert(num(i.value), DATA, i.from || "MB", i.to || "GB") });

// ---------------- BUSINESS ----------------

const revenue: ComputeFn = (i) => {
  const units = num(i.units);
  const price = num(i.price);
  const unitCost = num(i.unitCost) || 0;
  if (!Number.isFinite(units) || !Number.isFinite(price))
    return { revenue: NaN, cost: NaN, grossProfit: NaN, margin: NaN };
  const rev = units * price;
  const cost = units * unitCost;
  const profit = rev - cost;
  return { revenue: rev, cost, grossProfit: profit, margin: rev !== 0 ? (profit / rev) * 100 : NaN };
};

const cashFlow: ComputeFn = (i) => {
  const start = num(i.start) || 0;
  const inflows = num(i.inflows) || 0;
  const outflows = num(i.outflows) || 0;
  const net = inflows - outflows;
  return { net, ending: start + net, inflows, outflows };
};

// ---------------- CONSTRUCTION ----------------

const concrete: ComputeFn = (i) => {
  const lengthFt = num(i.length);
  const widthFt = num(i.width);
  const thicknessIn = num(i.thickness);
  if (!(lengthFt > 0) || !(widthFt > 0) || !(thicknessIn > 0))
    return { cubicYards: NaN, cubicFeet: NaN, bags60: NaN, bags80: NaN };
  const cubicFeet = lengthFt * widthFt * (thicknessIn / 12);
  return {
    cubicYards: cubicFeet / 27,
    cubicFeet,
    bags60: Math.ceil(cubicFeet / 0.45),
    bags80: Math.ceil(cubicFeet / 0.6),
  };
};

const tile: ComputeFn = (i) => {
  const area = num(i.area);
  const tileW = num(i.tileWidth);
  const tileH = num(i.tileHeight);
  const waste = num(i.waste) || 10;
  if (!(area > 0) || !(tileW > 0) || !(tileH > 0))
    return { tiles: NaN, withWaste: NaN, tileAreaSqft: NaN };
  const tileAreaSqft = (tileW * tileH) / 144;
  const base = area / tileAreaSqft;
  const withWaste = Math.ceil(base * (1 + waste / 100));
  return { tiles: Math.ceil(base), withWaste, tileAreaSqft };
};

export const extendedEngines: Record<string, ComputeFn> = {
  fraction,
  ratio,
  gcf: gcfCalc,
  lcm: lcmCalc,
  scientific,
  loan,
  "simple-interest": simpleInterest,
  investment,
  savings,
  "profit-margin": profitMargin,
  markup,
  "break-even": breakEven,
  tdee,
  calorie,
  "body-fat": bodyFat,
  "ideal-weight": idealWeight,
  protein,
  macro,
  "water-intake": waterIntake,
  "running-pace": runningPace,
  "date-difference": dateDifference,
  "business-days": businessDays,
  "time-duration": timeDuration,
  overtime,
  length: lengthConv,
  weight: weightConv,
  speed: speedConv,
  "data-storage": dataConv,
  revenue,
  "cash-flow": cashFlow,
  concrete,
  tile,
};
