import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 4 — additional Health engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Lean body mass — Boer formula. weight kg, height cm → kg.
const leanBodyMass: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const heightCm = num(i.heightCm);
  const sex = String(i.sex ?? "male");
  if (!finite(weightKg) || !finite(heightCm) || weightKg <= 0 || heightCm <= 0)
    return { leanBodyMass: NaN, bodyFatMass: NaN };
  const lbm =
    sex === "female"
      ? 0.252 * weightKg + 0.473 * heightCm - 48.3
      : 0.407 * weightKg + 0.267 * heightCm - 19.2;
  return { leanBodyMass: lbm, bodyFatMass: weightKg - lbm };
};

// Army / US Navy body fat method. Circumferences and height in cm.
const armyBodyFat: ComputeFn = (i) => {
  const sex = String(i.sex ?? "male");
  const heightCm = num(i.heightCm);
  const neckCm = num(i.neckCm);
  const waistCm = num(i.waistCm);
  const hipCm = num(i.hipCm);
  if (!finite(heightCm) || !finite(neckCm) || !finite(waistCm) || heightCm <= 0)
    return { bodyFatPercent: NaN };
  let bf: number;
  if (sex === "female") {
    if (!finite(hipCm) || waistCm + hipCm - neckCm <= 0) return { bodyFatPercent: NaN };
    bf =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistCm + hipCm - neckCm) +
          0.221 * Math.log10(heightCm)) -
      450;
  } else {
    if (waistCm - neckCm <= 0) return { bodyFatPercent: NaN };
    bf =
      495 /
        (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) -
      450;
  }
  return { bodyFatPercent: bf };
};

// Target heart rate — max HR and Karvonen (if resting supplied).
const targetHeartRate: ComputeFn = (i) => {
  const age = num(i.age);
  const rest = num(i.restingHeartRate);
  const intensity = num(i.intensityPercent);
  if (!finite(age) || age < 0 || !finite(intensity))
    return { targetBpm: NaN, maxHeartRate: NaN };
  const maxHr = 220 - age;
  const target =
    finite(rest) && rest > 0
      ? ((maxHr - rest) * intensity) / 100 + rest
      : (maxHr * intensity) / 100;
  return { targetBpm: target, maxHeartRate: maxHr };
};

// Calorie deficit — required daily deficit for a weight-loss target.
const calorieDeficit: ComputeFn = (i) => {
  const maintenance = num(i.maintenanceCalories);
  const targetLoss = num(i.targetWeightLossKg);
  const weeks = num(i.weeks);
  if (!finite(maintenance) || !finite(targetLoss) || !finite(weeks) || weeks <= 0)
    return { dailyDeficit: NaN, dailyCalories: NaN };
  const totalDeficit = targetLoss * 7700;
  const dailyDeficit = totalDeficit / (weeks * 7);
  return { dailyDeficit, dailyCalories: maintenance - dailyDeficit };
};

// Daily water intake — baseline plus exercise allowance.
const waterIntake: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const exerciseMinutes = num(i.exerciseMinutes);
  if (!finite(weightKg) || weightKg <= 0) return { litersPerDay: NaN, ouncesPerDay: NaN };
  const exercise = finite(exerciseMinutes) && exerciseMinutes > 0 ? exerciseMinutes : 0;
  const liters = (35 * weightKg + (exercise / 30) * 350) / 1000;
  return { litersPerDay: liters, ouncesPerDay: liters * 33.814 };
};

// Ponderal index — weight ÷ height³.
const ponderalIndex: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const heightCm = num(i.heightCm);
  if (!finite(weightKg) || !finite(heightCm) || weightKg <= 0 || heightCm <= 0)
    return { ponderalIndex: NaN };
  const heightM = heightCm / 100;
  return { ponderalIndex: weightKg / Math.pow(heightM, 3) };
};

// Alcohol units — UK units and grams of alcohol.
const alcoholUnits: ComputeFn = (i) => {
  const volumeMl = num(i.volumeMl);
  const abv = num(i.abvPercent);
  if (!finite(volumeMl) || !finite(abv) || volumeMl < 0 || abv < 0)
    return { units: NaN, gramsAlcohol: NaN };
  const units = (volumeMl * abv) / 1000;
  const gramsAlcohol = volumeMl * (abv / 100) * 0.789;
  return { units, gramsAlcohol };
};

// Sleep cycle — bedtimes for 4/5/6 cycles before a wake time.
const pad = (n: number) => String(n).padStart(2, "0");
const sleepCycle: ComputeFn = (i) => {
  const wakeHour = num(i.wakeHour);
  const wakeMinute = num(i.wakeMinute);
  if (
    !finite(wakeHour) ||
    !finite(wakeMinute) ||
    wakeHour < 0 ||
    wakeHour > 23 ||
    wakeMinute < 0 ||
    wakeMinute > 59
  )
    return { bedtime6cycles: "—", bedtime5cycles: "—", bedtime4cycles: "—" };
  const wakeTotal = wakeHour * 60 + wakeMinute;
  const bedtimeFor = (cycles: number) => {
    const mins = ((wakeTotal - (cycles * 90 + 15)) % 1440 + 1440) % 1440;
    return `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;
  };
  return {
    bedtime6cycles: bedtimeFor(6),
    bedtime5cycles: bedtimeFor(5),
    bedtime4cycles: bedtimeFor(4),
  };
};

// Macros by goal — split a calorie target into grams by ratio.
const macrosByGoal: ComputeFn = (i) => {
  const calories = num(i.calories);
  const goal = String(i.goal ?? "balanced");
  if (!finite(calories) || calories <= 0)
    return { proteinGrams: NaN, carbsGrams: NaN, fatGrams: NaN };
  const ratios: Record<string, [number, number, number]> = {
    balanced: [0.3, 0.4, 0.3],
    lowcarb: [0.4, 0.2, 0.4],
    highprotein: [0.4, 0.35, 0.25],
  };
  const [p, c, f] = ratios[goal] ?? ratios.balanced;
  return {
    proteinGrams: (calories * p) / 4,
    carbsGrams: (calories * c) / 4,
    fatGrams: (calories * f) / 9,
  };
};

// BMI Prime — BMI relative to the upper healthy limit of 25.
const bmiPrime: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const heightCm = num(i.heightCm);
  if (!finite(weightKg) || !finite(heightCm) || weightKg <= 0 || heightCm <= 0)
    return { bmiPrime: NaN, bmi: NaN };
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return { bmiPrime: bmi / 25, bmi };
};

export const healthR4Engines: Record<string, ComputeFn> = {
  "lean-body-mass": leanBodyMass,
  "army-body-fat": armyBodyFat,
  "target-heart-rate": targetHeartRate,
  "calorie-deficit": calorieDeficit,
  "water-intake-daily": waterIntake,
  "ponderal-index": ponderalIndex,
  "alcohol-units": alcoholUnits,
  "sleep-cycle": sleepCycle,
  "macros-by-goal": macrosByGoal,
  "bmi-prime": bmiPrime,
};
