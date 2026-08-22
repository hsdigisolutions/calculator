import type { ComputeFn } from "../types";
import { num } from "../utils";

/* ------------------------------------------------------------------
 * Wave 2 engines — Health, Math, Date/Time, Converters, Business,
 * Everyday Life categories.
 * Each function keyed by calculator id (not slug).
 * ------------------------------------------------------------------ */

// =================== HEALTH ===================

const tdee: ComputeFn = (i) => {
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
  const base = 10 * kg + 6.25 * cm - 5 * age;
  const bmrVal = sex === "female" ? base - 161 : base + 5;
  const activityFactor = num(i.activityLevel) || 1.2;
  const tdeeVal = bmrVal * activityFactor;
  return {
    tdee: tdeeVal,
    bmr: bmrVal,
    weightLoss: tdeeVal - 500,
    weightGain: tdeeVal + 500,
  };
};

const bodyFat: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const system = i.system || "metric";
  let neck: number, waist: number, hip: number, heightCm: number;
  if (system === "imperial") {
    neck = num(i.neck) * 2.54;
    waist = num(i.waist) * 2.54;
    hip = num(i.hip) * 2.54;
    heightCm = num(i.height) * 2.54;
  } else {
    neck = num(i.neck);
    waist = num(i.waist);
    hip = num(i.hip);
    heightCm = num(i.height);
  }
  if (heightCm <= 0 || neck <= 0 || waist <= 0) return { bodyFat: NaN, leanMass: NaN, fatMass: NaN };
  let bf: number;
  if (sex === "female") {
    if (hip <= 0) return { bodyFat: NaN, leanMass: NaN, fatMass: NaN };
    bf = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(heightCm) - 78.387;
  } else {
    bf = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(heightCm) + 36.76;
  }
  const weightKg = num(i.weight) * (system === "imperial" ? 0.45359237 : 1);
  return {
    bodyFat: bf,
    leanMass: weightKg * (1 - bf / 100),
    fatMass: weightKg * (bf / 100),
  };
};

const idealWeight: ComputeFn = (i) => {
  const sex = i.sex || "male";
  const system = i.system || "metric";
  let heightCm: number;
  if (system === "imperial") {
    heightCm = num(i.height) * 2.54;
  } else {
    heightCm = num(i.height);
  }
  if (heightCm <= 0) return { devine: NaN, robinson: NaN, miller: NaN, bmi25: NaN };
  const heightIn = heightCm / 2.54;
  const heightAbove60 = Math.max(0, heightIn - 60);
  let devine: number, robinson: number, miller: number;
  if (sex === "female") {
    devine = 45.5 + 2.3 * heightAbove60;
    robinson = 49 + 1.7 * heightAbove60;
    miller = 53.1 + 1.36 * heightAbove60;
  } else {
    devine = 50 + 2.3 * heightAbove60;
    robinson = 52 + 1.9 * heightAbove60;
    miller = 56.2 + 1.41 * heightAbove60;
  }
  const hm = heightCm / 100;
  const bmi25 = 25 * hm * hm;
  return { devine, robinson, miller, bmi25 };
};

const calories: ComputeFn = (i) => {
  const goal = i.goal || "maintain";
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
  const base = 10 * kg + 6.25 * cm - 5 * age;
  const bmrVal = sex === "female" ? base - 161 : base + 5;
  const activityFactor = num(i.activityLevel) || 1.2;
  const maintenance = bmrVal * activityFactor;
  let target = maintenance;
  if (goal === "lose") target = maintenance - 500;
  else if (goal === "gain") target = maintenance + 500;
  return { targetCalories: target, maintenance, deficit: maintenance - target };
};

const protein: ComputeFn = (i) => {
  const goal = i.goal || "maintain";
  const system = i.system || "metric";
  let kg: number;
  if (system === "imperial") {
    kg = num(i.weight) * 0.45359237;
  } else {
    kg = num(i.weight);
  }
  if (kg <= 0) return { minProtein: NaN, optimalProtein: NaN, maxProtein: NaN };
  const multipliers: Record<string, [number, number, number]> = {
    sedentary: [0.8, 1.0, 1.2],
    maintain: [1.2, 1.6, 2.0],
    lose: [1.4, 1.8, 2.2],
    gain: [1.6, 2.0, 2.4],
    athlete: [1.8, 2.2, 3.0],
  };
  const [minM, optM, maxM] = multipliers[goal] || multipliers["maintain"];
  return {
    minProtein: kg * minM,
    optimalProtein: kg * optM,
    maxProtein: kg * maxM,
  };
};

const macro: ComputeFn = (i) => {
  const calories = num(i.calories);
  const goal = i.goal || "balanced";
  if (!Number.isFinite(calories) || calories <= 0) return { protein: NaN, carbs: NaN, fat: NaN, proteinCal: NaN, carbCal: NaN, fatCal: NaN };
  // Macros: [protein%, carbs%, fat%]
  const splits: Record<string, [number, number, number]> = {
    balanced: [0.30, 0.40, 0.30],
    lowCarb: [0.35, 0.20, 0.45],
    highProtein: [0.40, 0.35, 0.25],
    keto: [0.25, 0.05, 0.70],
    athletic: [0.25, 0.50, 0.25],
  };
  const [pPct, cPct, fPct] = splits[goal] || splits["balanced"];
  return {
    protein: (calories * pPct) / 4, // 4 cal/g
    carbs: (calories * cPct) / 4,
    fat: (calories * fPct) / 9, // 9 cal/g
    proteinCal: calories * pPct,
    carbCal: calories * cPct,
    fatCal: calories * fPct,
  };
};

const waterIntake: ComputeFn = (i) => {
  const system = i.system || "metric";
  let kg: number;
  if (system === "imperial") {
    kg = num(i.weight) * 0.45359237;
  } else {
    kg = num(i.weight);
  }
  const activityLevel = i.activityLevel || "moderate";
  const climate = i.climate || "temperate";
  if (kg <= 0) return { liters: NaN, cups: NaN, ounces: NaN };
  let base = kg * 0.033; // 33ml per kg
  if (activityLevel === "active") base += 0.5;
  if (activityLevel === "veryActive") base += 1.0;
  if (climate === "hot") base += 0.5;
  return {
    liters: base,
    cups: base * 4.22675,
    ounces: base * 33.814,
  };
};

const runningPace: ComputeFn = (i) => {
  const distance = num(i.distance);
  const unit = i.unit || "km";
  const hours = num(i.hours) || 0;
  const minutes = num(i.minutes) || 0;
  const seconds = num(i.seconds) || 0;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  if (distance <= 0 || totalSeconds <= 0) return { pacePerKm: NaN, pacePerMile: NaN, speed: NaN, speedMph: NaN };
  const distKm = unit === "miles" ? distance * 1.60934 : distance;
  const distMi = unit === "km" ? distance / 1.60934 : distance;
  const pacePerKmSec = totalSeconds / distKm;
  const pacePerMiSec = totalSeconds / distMi;
  const speedKmh = (distKm / totalSeconds) * 3600;
  return {
    pacePerKm: pacePerKmSec / 60,
    pacePerMile: pacePerMiSec / 60,
    speed: speedKmh,
    speedMph: speedKmh / 1.60934,
  };
};

const heartRate: ComputeFn = (i) => {
  const age = num(i.age);
  if (age <= 0) return { maxHR: NaN, zone1Low: NaN, zone1High: NaN, zone2Low: NaN, zone2High: NaN, zone3Low: NaN, zone3High: NaN, zone4Low: NaN, zone4High: NaN, zone5Low: NaN, zone5High: NaN };
  const restingHR = num(i.restingHR) || 60;
  const maxHR = 220 - age;
  const hrr = maxHR - restingHR; // Heart Rate Reserve
  // Karvonen zones
  const z = (pct: number) => Math.round(restingHR + hrr * pct);
  return {
    maxHR,
    zone1Low: z(0.50), zone1High: z(0.60),
    zone2Low: z(0.60), zone2High: z(0.70),
    zone3Low: z(0.70), zone3High: z(0.80),
    zone4Low: z(0.80), zone4High: z(0.90),
    zone5Low: z(0.90), zone5High: maxHR,
  };
};

const sleepCycle: ComputeFn = (i) => {
  const wakeHour = num(i.wakeHour);
  const wakeMinute = num(i.wakeMinute) || 0;
  if (!Number.isFinite(wakeHour)) return { bedtime1: NaN, bedtime2: NaN, bedtime3: NaN, bedtime4: NaN };
  // 14 min to fall asleep, 90 min per cycle
  const fallAsleepMin = 14;
  const cycleMin = 90;
  const wakeMinTotal = wakeHour * 60 + wakeMinute;
  const times = [4, 5, 6, 7].map((cycles) => {
    const neededMin = cycles * cycleMin + fallAsleepMin;
    let bedMin = wakeMinTotal - neededMin;
    if (bedMin < 0) bedMin += 24 * 60;
    const h = Math.floor(bedMin / 60) % 24;
    const m = bedMin % 60;
    return h * 60 + m; // store as minutes for result
  });
  return {
    bedtime1: times[0],
    bedtime2: times[1],
    bedtime3: times[2],
    bedtime4: times[3],
  };
};

const caloriesBurned: ComputeFn = (i) => {
  const system = i.system || "metric";
  let kg: number;
  if (system === "imperial") {
    kg = num(i.weight) * 0.45359237;
  } else {
    kg = num(i.weight);
  }
  const met = num(i.met) || 4; // MET value of activity
  const duration = num(i.duration); // minutes
  if (kg <= 0 || duration <= 0 || met <= 0) return { calories: NaN, caloriesPerHour: NaN };
  const caloriesPerMin = (met * 3.5 * kg) / 200;
  return {
    calories: caloriesPerMin * duration,
    caloriesPerHour: caloriesPerMin * 60,
  };
};

// =================== MATH ===================

function parseList(raw: string | undefined): number[] {
  if (!raw) return [];
  return String(raw).split(/[\s,;\n]+/).map(s => s.trim()).filter(s => s.length > 0).map(parseFloat).filter(Number.isFinite);
}

const standardDeviation: ComputeFn = (i) => {
  const list = parseList(i.numbers);
  if (list.length === 0) return { mean: NaN, stdDev: NaN, variance: NaN, count: 0 };
  const mean = list.reduce((a, b) => a + b, 0) / list.length;
  const type = i.type || "population";
  const n = type === "sample" ? list.length - 1 : list.length;
  if (n <= 0) return { mean, stdDev: NaN, variance: NaN, count: list.length };
  const variance = list.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / n;
  return { mean, stdDev: Math.sqrt(variance), variance, count: list.length };
};

const combinations: ComputeFn = (i) => {
  const n = Math.round(num(i.n));
  const r = Math.round(num(i.r));
  if (!Number.isFinite(n) || !Number.isFinite(r) || n < 0 || r < 0 || r > n)
    return { combinations: NaN, permutations: NaN };
  function factorial(x: number): number {
    if (x <= 1) return 1;
    let result = 1;
    for (let k = 2; k <= x; k++) result *= k;
    return result;
  }
  const nFact = factorial(n);
  const rFact = factorial(r);
  const nrFact = factorial(n - r);
  return {
    combinations: nFact / (rFact * nrFact),
    permutations: nFact / nrFact,
  };
};

const primeFactorization: ComputeFn = (i) => {
  let n = Math.round(Math.abs(num(i.number)));
  if (!Number.isFinite(n) || n < 2) return { isPrime: n === 2 ? 1 : 0, factorCount: NaN, largestFactor: NaN };
  const factors: number[] = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
  }
  if (n > 1) factors.push(n);
  return {
    isPrime: factors.length === 1 ? 1 : 0,
    factorCount: factors.length,
    largestFactor: factors[factors.length - 1] || NaN,
  };
};

const exponent: ComputeFn = (i) => {
  const base = num(i.base);
  const exp = num(i.exponent);
  if (!Number.isFinite(base) || !Number.isFinite(exp)) return { result: NaN, inverse: NaN };
  const result = Math.pow(base, exp);
  return {
    result,
    inverse: exp !== 0 ? Math.pow(base, -exp) : NaN,
  };
};

const logarithm: ComputeFn = (i) => {
  const val = num(i.value);
  const base = num(i.base) || Math.E;
  if (val <= 0) return { result: NaN, ln: NaN, log10: NaN };
  return {
    result: Math.log(val) / Math.log(base),
    ln: Math.log(val),
    log10: Math.log10(val),
  };
};

const meanMedianMode: ComputeFn = (i) => {
  const list = parseList(i.numbers);
  if (list.length === 0) return { mean: NaN, median: NaN, mode: NaN, range: NaN };
  const sorted = [...list].sort((a, b) => a - b);
  const mean = list.reduce((a, b) => a + b, 0) / list.length;
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  // Mode
  const freq: Record<number, number> = {};
  list.forEach(x => { freq[x] = (freq[x] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));
  const modes = Object.entries(freq).filter(([, f]) => f === maxFreq).map(([v]) => Number(v));
  return {
    mean,
    median,
    mode: modes.length === list.length ? NaN : modes[0], // NaN if no repeating values
    range: sorted[sorted.length - 1] - sorted[0],
  };
};

const zScore: ComputeFn = (i) => {
  const value = num(i.value);
  const mean = num(i.mean);
  const stdDev = num(i.stdDev);
  if (stdDev === 0) return { zScore: NaN, percentile: NaN };
  const z = (value - mean) / stdDev;
  // Approximate cumulative normal distribution
  function erf(x: number): number {
    const t = 1 / (1 + 0.3275911 * Math.abs(x));
    const poly = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
    return 1 - poly * Math.exp(-x * x) * (x < 0 ? -1 : 1);
  }
  const percentile = 50 * (1 + erf(z / Math.sqrt(2)));
  return { zScore: z, percentile };
};

const probability: ComputeFn = (i) => {
  const favorable = num(i.favorable);
  const total = num(i.total);
  if (total <= 0 || favorable < 0 || favorable > total) return { probability: NaN, odds: NaN, percentage: NaN };
  const p = favorable / total;
  return {
    probability: p,
    odds: p < 1 ? p / (1 - p) : Infinity,
    percentage: p * 100,
  };
};

const factorial: ComputeFn = (i) => {
  const n = Math.round(num(i.n));
  if (!Number.isFinite(n) || n < 0 || n > 20) return { result: NaN };
  let result = 1;
  for (let k = 2; k <= n; k++) result *= k;
  return { result };
};

const numberBase: ComputeFn = (i) => {
  const value = String(i.value || "").trim();
  const from = Math.round(num(i.from)) || 10;
  if (!value || from < 2 || from > 16) return { binary: NaN, octal: NaN, decimal: NaN, hex: NaN };
  const decimal = parseInt(value, from);
  if (isNaN(decimal)) return { binary: NaN, octal: NaN, decimal: NaN, hex: NaN };
  return {
    decimal,
    binary: parseInt(decimal.toString(2)),
    octal: parseInt(decimal.toString(8)),
    hex: NaN, // hex returned as string below — use custom
  };
};

const modulo: ComputeFn = (i) => {
  const dividend = num(i.dividend);
  const divisor = num(i.divisor);
  if (divisor === 0) return { remainder: NaN, quotient: NaN };
  return {
    remainder: ((dividend % divisor) + divisor) % divisor,
    quotient: Math.floor(dividend / divisor),
  };
};

// =================== DATE & TIME ===================

function parseDate(s: string | undefined): Date | null {
  if (!s) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

const dateDifference: ComputeFn = (i) => {
  const start = parseDate(i.startDate);
  const end = parseDate(i.endDate);
  if (!start || !end) return { days: NaN, weeks: NaN, months: NaN, years: NaN };
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.round((end.getTime() - start.getTime()) / msPerDay);
  const years = end.getFullYear() - start.getFullYear();
  const months = years * 12 + end.getMonth() - start.getMonth();
  return {
    days,
    weeks: days / 7,
    months,
    years: days / 365.25,
  };
};

const businessDays: ComputeFn = (i) => {
  const start = parseDate(i.startDate);
  const end = parseDate(i.endDate);
  if (!start || !end) return { businessDays: NaN, calendarDays: NaN, weekends: NaN };
  const msPerDay = 1000 * 60 * 60 * 24;
  const calendarDays = Math.round((end.getTime() - start.getTime()) / msPerDay);
  let count = 0;
  const cur = new Date(start);
  while (cur <= end) {
    const day = cur.getDay();
    if (day !== 0 && day !== 6) count++;
    cur.setTime(cur.getTime() + msPerDay);
  }
  return {
    businessDays: count,
    calendarDays,
    weekends: calendarDays - count,
  };
};

const timeDuration: ComputeFn = (i) => {
  const hours = num(i.hours) || 0;
  const minutes = num(i.minutes) || 0;
  const seconds = num(i.seconds) || 0;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return {
    totalSeconds,
    totalMinutes: totalSeconds / 60,
    totalHours: totalSeconds / 3600,
    days: totalSeconds / 86400,
  };
};

const overtime: ComputeFn = (i) => {
  const regularHours = num(i.regularHours) || 40;
  const totalHours = num(i.totalHours);
  const hourlyRate = num(i.hourlyRate);
  const overtimeMultiplier = num(i.overtimeMultiplier) || 1.5;
  if (!Number.isFinite(totalHours) || !Number.isFinite(hourlyRate))
    return { overtimeHours: NaN, regularPay: NaN, overtimePay: NaN, totalPay: NaN };
  const otHours = Math.max(0, totalHours - regularHours);
  const regHours = Math.min(totalHours, regularHours);
  const regularPay = regHours * hourlyRate;
  const overtimePay = otHours * hourlyRate * overtimeMultiplier;
  return {
    overtimeHours: otHours,
    regularPay,
    overtimePay,
    totalPay: regularPay + overtimePay,
  };
};

const countdown: ComputeFn = (i) => {
  const target = parseDate(i.targetDate);
  if (!target) return { days: NaN, hours: NaN, minutes: NaN, totalDays: NaN };
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, totalDays: 0 };
  const totalDays = diff / (1000 * 60 * 60 * 24);
  const days = Math.floor(totalDays);
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes, totalDays };
};

const unixTimestamp: ComputeFn = (i) => {
  const mode = i.mode || "toUnix";
  if (mode === "toUnix") {
    const d = parseDate(i.date);
    if (!d) return { unix: NaN, year: NaN, month: NaN, day: NaN };
    return { unix: Math.floor(d.getTime() / 1000), year: NaN, month: NaN, day: NaN };
  } else {
    const unix = num(i.unix);
    if (!Number.isFinite(unix)) return { unix: NaN, year: NaN, month: NaN, day: NaN };
    const d = new Date(unix * 1000);
    return { unix, year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
  }
};

const dayOfYear: ComputeFn = (i) => {
  const d = parseDate(i.date);
  if (!d) return { dayOfYear: NaN, weekOfYear: NaN, daysRemaining: NaN };
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayNum = Math.floor(diff / msPerDay);
  const isLeap = (d.getFullYear() % 4 === 0 && d.getFullYear() % 100 !== 0) || d.getFullYear() % 400 === 0;
  const daysInYear = isLeap ? 366 : 365;
  const weekOfYear = Math.ceil(dayNum / 7);
  return { dayOfYear: dayNum, weekOfYear, daysRemaining: daysInYear - dayNum };
};

const weeksBetween: ComputeFn = (i) => {
  const start = parseDate(i.startDate);
  const end = parseDate(i.endDate);
  if (!start || !end) return { weeks: NaN, days: NaN, fullWeeks: NaN };
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.abs((end.getTime() - start.getTime()) / msPerDay);
  return { weeks: days / 7, days, fullWeeks: Math.floor(days / 7) };
};

// =================== CONVERTERS ===================

const area: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "sqm";
  const to = i.to || "sqft";
  // All to sq meters first
  const toSqm: Record<string, number> = {
    sqm: 1, sqkm: 1e6, sqft: 0.092903, sqyd: 0.836127,
    sqmi: 2589988, acre: 4046.86, hectare: 10000, sqcm: 1e-4, sqin: 0.00064516,
  };
  const fromRate = toSqm[from];
  const toRate = toSqm[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const volume: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "liter";
  const to = i.to || "gallon";
  const toLiter: Record<string, number> = {
    liter: 1, ml: 0.001, cubicMeter: 1000, cubicFt: 28.3168, cubicIn: 0.016387,
    gallon: 3.78541, quart: 0.946353, pint: 0.473176, cup: 0.236588,
    flOz: 0.0295735, tablespoon: 0.0147868, teaspoon: 0.00492892,
    imperialGallon: 4.54609,
  };
  const fromRate = toLiter[from];
  const toRate = toLiter[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const pressure: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "pascal";
  const to = i.to || "psi";
  const toPascal: Record<string, number> = {
    pascal: 1, kilopascal: 1000, megapascal: 1e6, bar: 1e5,
    psi: 6894.76, atm: 101325, mmHg: 133.322, inHg: 3386.39,
  };
  const fromRate = toPascal[from];
  const toRate = toPascal[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const energy: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "joule";
  const to = i.to || "calorie";
  const toJoule: Record<string, number> = {
    joule: 1, kilojoule: 1000, calorie: 4.184, kilocalorie: 4184,
    wattHour: 3600, kilowattHour: 3600000, btu: 1055.06, footPound: 1.35582,
    electronVolt: 1.60218e-19,
  };
  const fromRate = toJoule[from];
  const toRate = toJoule[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const speed: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "kmh";
  const to = i.to || "mph";
  const toMs: Record<string, number> = {
    ms: 1, kmh: 1 / 3.6, mph: 0.44704, knot: 0.514444,
    ftPerSec: 0.3048, mach: 343,
  };
  const fromRate = toMs[from];
  const toRate = toMs[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const weight: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "kg";
  const to = i.to || "lb";
  const toKg: Record<string, number> = {
    kg: 1, g: 0.001, mg: 1e-6, lb: 0.453592, oz: 0.0283495,
    ton: 907.185, metricTon: 1000, stone: 6.35029, grain: 6.47989e-5,
  };
  const fromRate = toKg[from];
  const toRate = toKg[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const length: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "meter";
  const to = i.to || "foot";
  const toMeter: Record<string, number> = {
    meter: 1, km: 1000, cm: 0.01, mm: 0.001, micrometer: 1e-6,
    mile: 1609.34, yard: 0.9144, foot: 0.3048, inch: 0.0254,
    nauticalMile: 1852, lightYear: 9.461e15, au: 1.496e11,
  };
  const fromRate = toMeter[from];
  const toRate = toMeter[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const dataStorage: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "gb";
  const to = i.to || "tb";
  const toBit: Record<string, number> = {
    bit: 1, byte: 8, kb: 8000, mb: 8e6, gb: 8e9, tb: 8e12, pb: 8e15,
    kibibyte: 8192, mebibyte: 8388608, gibibyte: 8589934592, tebibyte: 8796093022208,
  };
  const fromRate = toBit[from];
  const toRate = toBit[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

const cookingMeasurement: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "cup";
  const to = i.to || "ml";
  const toMl: Record<string, number> = {
    ml: 1, liter: 1000, cup: 236.588, tablespoon: 14.7868, teaspoon: 4.92892,
    flOz: 29.5735, pint: 473.176, quart: 946.353, gallon: 3785.41,
    stick: 113.398, // butter stick
  };
  const fromRate = toMl[from];
  const toRate = toMl[to];
  if (!fromRate || !toRate) return { result: NaN };
  return { result: (value * fromRate) / toRate };
};

// =================== BUSINESS ===================

const revenueCalc: ComputeFn = (i) => {
  const unitPrice = num(i.unitPrice);
  const unitsSold = num(i.unitsSold);
  const recurringRevenue = num(i.recurringRevenue) || 0;
  if (!Number.isFinite(unitPrice) || !Number.isFinite(unitsSold))
    return { revenue: NaN, monthlyRevenue: NaN, annualRevenue: NaN };
  const revenue = unitPrice * unitsSold + recurringRevenue;
  return {
    revenue,
    monthlyRevenue: revenue / 12,
    annualRevenue: revenue,
  };
};

const profitMargin: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const cogs = num(i.cogs) || 0;
  const operatingExpenses = num(i.operatingExpenses) || 0;
  if (!Number.isFinite(revenue) || revenue === 0)
    return { grossProfit: NaN, grossMargin: NaN, operatingProfit: NaN, netMargin: NaN };
  const grossProfit = revenue - cogs;
  const operatingProfit = grossProfit - operatingExpenses;
  return {
    grossProfit,
    grossMargin: (grossProfit / revenue) * 100,
    operatingProfit,
    netMargin: (operatingProfit / revenue) * 100,
  };
};

const markup: ComputeFn = (i) => {
  const cost = num(i.cost);
  const markupPct = num(i.markupPercent);
  if (!Number.isFinite(cost)) return { sellingPrice: NaN, profit: NaN, margin: NaN };
  const sellingPrice = cost * (1 + markupPct / 100);
  const profit = sellingPrice - cost;
  return {
    sellingPrice,
    profit,
    margin: sellingPrice !== 0 ? (profit / sellingPrice) * 100 : NaN,
  };
};

const breakEven: ComputeFn = (i) => {
  const fixedCosts = num(i.fixedCosts);
  const variableCostPerUnit = num(i.variableCostPerUnit);
  const pricePerUnit = num(i.pricePerUnit);
  const contributionMargin = pricePerUnit - variableCostPerUnit;
  if (contributionMargin <= 0) return { units: NaN, revenue: NaN, contributionMargin };
  return {
    units: fixedCosts / contributionMargin,
    revenue: (fixedCosts / contributionMargin) * pricePerUnit,
    contributionMargin,
  };
};

const cashFlow: ComputeFn = (i) => {
  const revenue = num(i.revenue);
  const cogs = num(i.cogs) || 0;
  const operatingExpenses = num(i.operatingExpenses) || 0;
  const taxes = num(i.taxes) || 0;
  const capex = num(i.capex) || 0;
  const depreciation = num(i.depreciation) || 0;
  const grossProfit = revenue - cogs;
  const ebitda = grossProfit - operatingExpenses;
  const ebit = ebitda - depreciation;
  const netIncome = ebit - taxes;
  const operatingCashFlow = netIncome + depreciation;
  const freeCashFlow = operatingCashFlow - capex;
  return { grossProfit, ebitda, ebit, netIncome, operatingCashFlow, freeCashFlow };
};

const employeeCost: ComputeFn = (i) => {
  const salary = num(i.salary);
  const benefits = num(i.benefitsPercent) || 25;
  const payrollTax = num(i.payrollTaxPercent) || 7.65;
  const overhead = num(i.overheadPercent) || 10;
  if (!Number.isFinite(salary)) return { totalCost: NaN, benefitsAmount: NaN, payrollTaxAmount: NaN, overheadAmount: NaN, costPerHour: NaN };
  const benefitsAmount = salary * (benefits / 100);
  const payrollTaxAmount = salary * (payrollTax / 100);
  const overheadAmount = salary * (overhead / 100);
  const totalCost = salary + benefitsAmount + payrollTaxAmount + overheadAmount;
  return {
    totalCost,
    benefitsAmount,
    payrollTaxAmount,
    overheadAmount,
    costPerHour: totalCost / 2080,
  };
};

// =================== EVERYDAY LIFE ===================

const tipCalculator: ComputeFn = (i) => {
  const billAmount = num(i.billAmount);
  const tipPercent = num(i.tipPercent) || 18;
  const numPeople = num(i.numPeople) || 1;
  if (!Number.isFinite(billAmount)) return { tipAmount: NaN, totalBill: NaN, perPerson: NaN, tipPerPerson: NaN };
  const tipAmount = billAmount * (tipPercent / 100);
  const totalBill = billAmount + tipAmount;
  return {
    tipAmount,
    totalBill,
    perPerson: totalBill / numPeople,
    tipPerPerson: tipAmount / numPeople,
  };
};

const splitBill: ComputeFn = (i) => {
  const totalBill = num(i.totalBill);
  const numPeople = num(i.numPeople) || 1;
  const tipPercent = num(i.tipPercent) || 0;
  if (!Number.isFinite(totalBill) || numPeople <= 0)
    return { perPerson: NaN, totalWithTip: NaN, tipPerPerson: NaN };
  const tipAmount = totalBill * (tipPercent / 100);
  const totalWithTip = totalBill + tipAmount;
  return {
    perPerson: totalWithTip / numPeople,
    totalWithTip,
    tipPerPerson: tipAmount / numPeople,
  };
};

const discount: ComputeFn = (i) => {
  const originalPrice = num(i.originalPrice);
  const discountPercent = num(i.discountPercent) || 0;
  const discountAmount = num(i.discountAmount) || 0;
  if (!Number.isFinite(originalPrice)) return { finalPrice: NaN, savings: NaN, savingsPercent: NaN };
  let savings: number;
  if (discountAmount > 0) {
    savings = discountAmount;
  } else {
    savings = originalPrice * (discountPercent / 100);
  }
  const finalPrice = originalPrice - savings;
  return {
    finalPrice,
    savings,
    savingsPercent: (savings / originalPrice) * 100,
  };
};

const salesTax: ComputeFn = (i) => {
  const price = num(i.price);
  const taxRate = num(i.taxRate);
  if (!Number.isFinite(price) || !Number.isFinite(taxRate))
    return { taxAmount: NaN, totalPrice: NaN };
  const taxAmount = price * (taxRate / 100);
  return {
    taxAmount,
    totalPrice: price + taxAmount,
  };
};

const unitPrice: ComputeFn = (i) => {
  const price1 = num(i.price1);
  const quantity1 = num(i.quantity1);
  const price2 = num(i.price2);
  const quantity2 = num(i.quantity2);
  const unit1 = price1 / quantity1;
  const unit2 = price2 / quantity2;
  if (!Number.isFinite(unit1) || !Number.isFinite(unit2)) return { unitPrice1: NaN, unitPrice2: NaN, savings: NaN, cheaperOption: NaN };
  return {
    unitPrice1: unit1,
    unitPrice2: unit2,
    savings: Math.abs(unit1 - unit2),
    cheaperOption: unit1 <= unit2 ? 1 : 2,
  };
};

export const wave2OtherEngines: Record<string, (i: Record<string, string>) => Record<string, number | string>> = {
  // Health
  tdee,
  "body-fat": bodyFat,
  "ideal-weight": idealWeight,
  "calorie-calculator": calories,
  "protein-calculator": protein,
  "macro-calculator": macro,
  "water-intake": waterIntake,
  "running-pace": runningPace,
  "heart-rate": heartRate,
  "sleep-cycle": sleepCycle,
  "calories-burned": caloriesBurned,
  // Math
  "standard-deviation": standardDeviation,
  combinations,
  "prime-factorization": primeFactorization,
  exponent,
  logarithm,
  "mean-median-mode": meanMedianMode,
  "z-score": zScore,
  probability,
  factorial,
  "number-base": numberBase,
  modulo,
  // Date & Time
  "date-difference": dateDifference,
  "business-days": businessDays,
  "time-duration": timeDuration,
  overtime,
  countdown,
  "unix-timestamp": unixTimestamp,
  "day-of-year": dayOfYear,
  "weeks-between": weeksBetween,
  // Converters
  "area-converter": area,
  "volume-converter": volume,
  "pressure-converter": pressure,
  "energy-converter": energy,
  "speed-converter": speed,
  "weight-converter": weight,
  "length-converter": length,
  "data-storage-converter": dataStorage,
  "cooking-measurement": cookingMeasurement,
  // Business
  "revenue-calculator": revenueCalc,
  "profit-margin": profitMargin,
  "markup-calculator": markup,
  "break-even": breakEven,
  "cash-flow": cashFlow,
  "employee-cost": employeeCost,
  // Everyday Life
  tip: tipCalculator,
  "split-bill": splitBill,
  discount,
  "sales-tax": salesTax,
  "unit-price": unitPrice,
};
