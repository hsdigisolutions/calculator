import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — additional Health engines. Pure functions. Invalid → NaN (or "—" for text). */

const finite = (x: number) => Number.isFinite(x);

// Calories burned by activity — MET formula. kcal = MET × 3.5 × kg / 200 × minutes.
const caloriesBurnedActivity: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const metValue = num(i.metValue);
  const minutes = num(i.minutes);
  if (
    !finite(weightKg) || !finite(metValue) || !finite(minutes) ||
    weightKg <= 0 || metValue <= 0 || minutes < 0
  )
    return { caloriesBurned: NaN };
  const caloriesBurned = (metValue * 3.5 * weightKg) / 200 * minutes;
  return { caloriesBurned };
};

// Body frame size — height ÷ wrist ratio banded into small / medium / large.
const bodyFrameSize: ComputeFn = (i) => {
  const heightCm = num(i.heightCm);
  const wristCm = num(i.wristCm);
  if (!finite(heightCm) || !finite(wristCm) || heightCm <= 0 || wristCm <= 0)
    return { ratio: NaN, frame: "—" };
  const ratio = heightCm / wristCm;
  const frame = ratio > 10.4 ? "Small frame" : ratio >= 9.6 ? "Medium frame" : "Large frame";
  return { ratio, frame };
};

// Pregnancy weight gain — IOM ranges keyed to pre-pregnancy BMI.
const pregnancyWeightGain: ComputeFn = (i) => {
  const prePregnancyWeightKg = num(i.prePregnancyWeightKg);
  const heightCm = num(i.heightCm);
  if (
    !finite(prePregnancyWeightKg) || !finite(heightCm) ||
    prePregnancyWeightKg <= 0 || heightCm <= 0
  )
    return { bmi: NaN, recommendedGainLowKg: NaN, recommendedGainHighKg: NaN };
  const m = heightCm / 100;
  const bmi = prePregnancyWeightKg / (m * m);
  let low: number;
  let high: number;
  if (bmi < 18.5) {
    low = 12.5;
    high = 18;
  } else if (bmi < 25) {
    low = 11.5;
    high = 16;
  } else if (bmi < 30) {
    low = 7;
    high = 11.5;
  } else {
    low = 5;
    high = 9;
  }
  return { bmi, recommendedGainLowKg: low, recommendedGainHighKg: high };
};

// Weight-loss calorie goal — subtract the daily deficit implied by weekly loss (7700 kcal/kg).
const weightLossCalorieGoal: ComputeFn = (i) => {
  const tdee = num(i.tdee);
  const weeklyLossKg = num(i.weeklyLossKg);
  if (!finite(tdee) || !finite(weeklyLossKg) || tdee <= 0 || weeklyLossKg < 0)
    return { dailyCalories: NaN, weeklyDeficit: NaN };
  const weeklyDeficit = weeklyLossKg * 7700;
  const dailyCalories = tdee - weeklyDeficit / 7;
  return { dailyCalories, weeklyDeficit };
};

// Heart-rate zones — 220 − age with zone 2/3/4 boundaries.
const heartRateZones: ComputeFn = (i) => {
  const age = num(i.age);
  if (!finite(age) || age <= 0 || age >= 220)
    return { maxHeartRate: NaN, zone2Bpm: NaN, zone3Bpm: NaN, zone4Bpm: NaN };
  const maxHeartRate = 220 - age;
  return {
    maxHeartRate,
    zone2Bpm: maxHeartRate * 0.6,
    zone3Bpm: maxHeartRate * 0.7,
    zone4Bpm: maxHeartRate * 0.85,
  };
};

// Daily protein intake — grams per kilogram of body weight.
const dailyProteinIntake: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const activityFactor = num(i.activityFactor);
  if (
    !finite(weightKg) || !finite(activityFactor) ||
    weightKg <= 0 || activityFactor <= 0
  )
    return { proteinGrams: NaN };
  return { proteinGrams: weightKg * activityFactor };
};

// Exercise hydration — fluid to replace from duration × sweat rate.
const exerciseHydration: ComputeFn = (i) => {
  const exerciseMinutes = num(i.exerciseMinutes);
  const sweatRateLitersPerHour = num(i.sweatRateLitersPerHour);
  if (
    !finite(exerciseMinutes) || !finite(sweatRateLitersPerHour) ||
    exerciseMinutes < 0 || sweatRateLitersPerHour <= 0
  )
    return { fluidNeededLiters: NaN, fluidNeededOz: NaN };
  const fluidNeededLiters = (exerciseMinutes / 60) * sweatRateLitersPerHour;
  return { fluidNeededLiters, fluidNeededOz: fluidNeededLiters * 33.814 };
};

// Steps to calories — steps × weight × constant.
const stepsToCalories: ComputeFn = (i) => {
  const steps = num(i.steps);
  const weightKg = num(i.weightKg);
  if (!finite(steps) || !finite(weightKg) || steps < 0 || weightKg <= 0)
    return { caloriesBurned: NaN };
  return { caloriesBurned: steps * weightKg * 0.00057 };
};

// Blood-pressure category — AHA classification from systolic and diastolic.
const bloodPressureCategory: ComputeFn = (i) => {
  const systolic = num(i.systolic);
  const diastolic = num(i.diastolic);
  if (!finite(systolic) || !finite(diastolic) || systolic <= 0 || diastolic <= 0)
    return { category: "—" };
  let category: string;
  if (systolic >= 180 || diastolic >= 120) category = "Hypertensive crisis";
  else if (systolic >= 140 || diastolic >= 90) category = "Hypertension stage 2";
  else if (systolic >= 130 || diastolic >= 80) category = "Hypertension stage 1";
  else if (systolic >= 120) category = "Elevated";
  else category = "Normal";
  return { category };
};

// Waist-to-hip ratio — waist ÷ hip with sex-specific WHO risk bands.
const waistToHipRatio: ComputeFn = (i) => {
  const waistCm = num(i.waistCm);
  const hipCm = num(i.hipCm);
  const sex = String(i.sex ?? "male");
  if (!finite(waistCm) || !finite(hipCm) || waistCm <= 0 || hipCm <= 0)
    return { whr: NaN, riskCategory: "—" };
  const whr = waistCm / hipCm;
  const threshold = sex === "female" ? 0.85 : 0.9;
  const riskCategory = whr > threshold ? "Elevated risk" : "Low risk";
  return { whr, riskCategory };
};

export const healthR7Engines: Record<string, ComputeFn> = {
  "calories-burned-activity": caloriesBurnedActivity,
  "body-frame-size": bodyFrameSize,
  "pregnancy-weight-gain": pregnancyWeightGain,
  "weight-loss-calorie-goal": weightLossCalorieGoal,
  "heart-rate-zones": heartRateZones,
  "daily-protein-intake": dailyProteinIntake,
  "exercise-hydration": exerciseHydration,
  "steps-to-calories": stepsToCalories,
  "blood-pressure-category": bloodPressureCategory,
  "waist-to-hip-ratio": waistToHipRatio,
};
