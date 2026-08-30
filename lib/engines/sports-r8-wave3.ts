import type { ComputeFn } from "../types";

/* Wave 3 Round 8 — Sports engines. Pure functions, invalid/zero → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Running calories = weight (kg) × distance (km) × 1.036.
const runningCalories: ComputeFn = (i) => {
  const weightKg = Number(i.weightKg);
  const distanceKm = Number(i.distanceKm);
  if (!finite(weightKg) || !finite(distanceKm) || weightKg <= 0 || distanceKm < 0)
    return { caloriesBurned: NaN };
  return { caloriesBurned: weightKg * distanceKm * 1.036 };
};

// Riegel marathon time predictor: T2 = T1 × (D2 / D1)^1.06.
const marathonTimePredictor: ComputeFn = (i) => {
  const recentDistanceKm = Number(i.recentDistanceKm);
  const recentTimeMinutes = Number(i.recentTimeMinutes);
  const targetDistanceKm = Number(i.targetDistanceKm);
  if (
    !finite(recentDistanceKm) ||
    !finite(recentTimeMinutes) ||
    !finite(targetDistanceKm) ||
    recentDistanceKm <= 0 ||
    recentTimeMinutes <= 0 ||
    targetDistanceKm <= 0
  )
    return { predictedMinutes: NaN };
  return {
    predictedMinutes: recentTimeMinutes * Math.pow(targetDistanceKm / recentDistanceKm, 1.06),
  };
};

// Race finish time = distance (km) × pace (min/km).
const raceFinishTime: ComputeFn = (i) => {
  const distanceKm = Number(i.distanceKm);
  const paceMinPerKm = Number(i.paceMinPerKm);
  if (!finite(distanceKm) || !finite(paceMinPerKm) || distanceKm <= 0 || paceMinPerKm <= 0)
    return { finishMinutes: NaN, finishTime: NaN };
  const finishMinutes = distanceKm * paceMinPerKm;
  return { finishMinutes, finishTime: finishMinutes };
};

// Power-to-weight ratio = power (W) / weight (kg).
const powerToWeightRatio: ComputeFn = (i) => {
  const powerWatts = Number(i.powerWatts);
  const weightKg = Number(i.weightKg);
  if (!finite(powerWatts) || !finite(weightKg) || powerWatts < 0 || weightKg <= 0)
    return { wattsPerKg: NaN };
  return { wattsPerKg: powerWatts / weightKg };
};

// Target pace = goal time (min) / goal distance (km); speed = distance / hours.
const targetPace: ComputeFn = (i) => {
  const goalDistanceKm = Number(i.goalDistanceKm);
  const goalTimeMinutes = Number(i.goalTimeMinutes);
  if (
    !finite(goalDistanceKm) ||
    !finite(goalTimeMinutes) ||
    goalDistanceKm <= 0 ||
    goalTimeMinutes <= 0
  )
    return { paceMinPerKm: NaN, speedKmh: NaN };
  return {
    paceMinPerKm: goalTimeMinutes / goalDistanceKm,
    speedKmh: goalDistanceKm / (goalTimeMinutes / 60),
  };
};

// Swim pace per 100 m = total minutes / total metres × 100.
const swimPacePer100: ComputeFn = (i) => {
  const totalMeters = Number(i.totalMeters);
  const totalMinutes = Number(i.totalMinutes);
  if (!finite(totalMeters) || !finite(totalMinutes) || totalMeters <= 0 || totalMinutes <= 0)
    return { pacePer100m: NaN };
  return { pacePer100m: (totalMinutes / totalMeters) * 100 };
};

// Wilks score = lifted (kg) × Wilks coefficient (sex-specific 5th-order polynomial).
const wilksScore: ComputeFn = (i) => {
  const bodyWeightKg = Number(i.bodyWeightKg);
  const liftedKg = Number(i.liftedKg);
  const sex = i.sex;
  if (
    !finite(bodyWeightKg) ||
    !finite(liftedKg) ||
    bodyWeightKg <= 0 ||
    liftedKg < 0 ||
    (sex !== "male" && sex !== "female")
  )
    return { wilksScore: NaN };
  const c =
    sex === "female"
      ? {
          a: 594.31747775582,
          b: -27.23842536447,
          cc: 0.82112226871,
          d: -0.00930733913,
          e: 4.731582e-5,
          f: -9.054e-8,
        }
      : {
          a: -216.0475144,
          b: 16.2606339,
          cc: -0.002388645,
          d: -0.00113732,
          e: 7.01863e-6,
          f: -1.291e-8,
        };
  const w = bodyWeightKg;
  const denom =
    c.a + c.b * w + c.cc * w ** 2 + c.d * w ** 3 + c.e * w ** 4 + c.f * w ** 5;
  if (!finite(denom) || denom === 0) return { wilksScore: NaN };
  const coeff = 500 / denom;
  return { wilksScore: liftedKg * coeff };
};

// Race split = total time / total distance × split distance.
const raceSplit: ComputeFn = (i) => {
  const totalDistanceKm = Number(i.totalDistanceKm);
  const totalTimeMinutes = Number(i.totalTimeMinutes);
  const splitDistanceKm = Number(i.splitDistanceKm);
  if (
    !finite(totalDistanceKm) ||
    !finite(totalTimeMinutes) ||
    !finite(splitDistanceKm) ||
    totalDistanceKm <= 0 ||
    totalTimeMinutes <= 0 ||
    splitDistanceKm < 0
  )
    return { splitTimeMinutes: NaN };
  return { splitTimeMinutes: (totalTimeMinutes / totalDistanceKm) * splitDistanceKm };
};

// Cycling calories = MET × 3.5 × weight (kg) / 200 × duration (min).
const cyclingCalories: ComputeFn = (i) => {
  const weightKg = Number(i.weightKg);
  const durationMinutes = Number(i.durationMinutes);
  const metValue = Number(i.metValue);
  if (
    !finite(weightKg) ||
    !finite(durationMinutes) ||
    !finite(metValue) ||
    weightKg <= 0 ||
    durationMinutes < 0 ||
    metValue <= 0
  )
    return { caloriesBurned: NaN };
  return { caloriesBurned: (metValue * 3.5 * weightKg / 200) * durationMinutes };
};

// Stride length = height (cm) × factor; steps per km = 100000 / stride.
const strideLength: ComputeFn = (i) => {
  const heightCm = Number(i.heightCm);
  const sex = i.sex;
  if (!finite(heightCm) || heightCm <= 0 || (sex !== "male" && sex !== "female"))
    return { strideLengthCm: NaN, stepsPerKm: NaN };
  const strideLengthCm = heightCm * (sex === "female" ? 0.413 : 0.415);
  return { strideLengthCm, stepsPerKm: 100000 / strideLengthCm };
};

export const sportsR8Engines: Record<string, ComputeFn> = {
  "running-calories": runningCalories,
  "marathon-time-predictor": marathonTimePredictor,
  "race-finish-time": raceFinishTime,
  "power-to-weight-ratio": powerToWeightRatio,
  "target-pace": targetPace,
  "swim-pace-per-100": swimPacePer100,
  "wilks-score": wilksScore,
  "race-split": raceSplit,
  "cycling-calories": cyclingCalories,
  "stride-length": strideLength,
};
