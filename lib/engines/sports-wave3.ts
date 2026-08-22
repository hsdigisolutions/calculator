import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Sports engines. Pure functions, invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Epley one-rep max: 1RM = weight × (1 + reps/30), plus 90% and 80% loads.
const oneRepMax: ComputeFn = (i) => {
  const weight = num(i.weight);
  const reps = num(i.reps);
  if (!finite(weight) || !finite(reps) || weight < 0 || reps < 0)
    return { oneRepMax: NaN, at90: NaN, at80: NaN };
  const orm = weight * (1 + reps / 30);
  return { oneRepMax: orm, at90: orm * 0.9, at80: orm * 0.8 };
};

// Cooper 12-minute run: VO2 max = (distance − 504.9) / 44.73.
const vo2Max: ComputeFn = (i) => {
  const distance = num(i.distance);
  if (!finite(distance) || distance < 0) return { vo2max: NaN };
  return { vo2max: (distance - 504.9) / 44.73 };
};

// Swim pace per 100 m and speed in metres per second.
const swimPace: ComputeFn = (i) => {
  const distance = num(i.distance);
  const time = num(i.time);
  if (!finite(distance) || !finite(time)) return { pacePer100: NaN, speed: NaN };
  const pacePer100 = distance > 0 ? (time / distance) * 100 : NaN;
  const speed = time > 0 ? distance / time : NaN;
  return { pacePer100, speed };
};

// Calories burned = MET × weight (kg) × (minutes / 60).
const calorieBurn: ComputeFn = (i) => {
  const met = num(i.met);
  const weight = num(i.weight);
  const minutes = num(i.minutes);
  if (!finite(met) || !finite(weight) || !finite(minutes) || met < 0 || weight < 0 || minutes < 0)
    return { calories: NaN };
  return { calories: met * weight * (minutes / 60) };
};

// Riegel race-time predictor: T2 = T1 × (D2 / D1)^1.06.
const raceTimePredictor: ComputeFn = (i) => {
  const knownDistance = num(i.knownDistance);
  const knownTime = num(i.knownTime);
  const targetDistance = num(i.targetDistance);
  if (
    !finite(knownDistance) ||
    !finite(knownTime) ||
    !finite(targetDistance) ||
    knownDistance <= 0 ||
    knownTime < 0 ||
    targetDistance < 0
  )
    return { predictedTime: NaN };
  return { predictedTime: knownTime * Math.pow(targetDistance / knownDistance, 1.06) };
};

// Steps to distance using stride = height × 0.415 (cm).
const stepsToDistance: ComputeFn = (i) => {
  const steps = num(i.steps);
  const height = num(i.height);
  if (!finite(steps) || !finite(height) || steps < 0 || height < 0)
    return { distanceKm: NaN, distanceMiles: NaN };
  const stride = height * 0.415;
  const distanceKm = (steps * stride) / 100000;
  return { distanceKm, distanceMiles: distanceKm / 1.609344 };
};

// Cycling average speed = distance (km) / time (h), plus mph.
const cyclingSpeed: ComputeFn = (i) => {
  const distance = num(i.distance);
  const time = num(i.time);
  if (!finite(distance) || !finite(time) || distance < 0) return { speed: NaN, mph: NaN };
  const speed = time > 0 ? distance / time : NaN;
  return { speed, mph: finite(speed) ? speed / 1.609344 : NaN };
};

export const sportsWave3Engines: Record<string, ComputeFn> = {
  "one-rep-max": oneRepMax,
  "vo2-max": vo2Max,
  "swim-pace": swimPace,
  "calorie-burn": calorieBurn,
  "race-time-predictor": raceTimePredictor,
  "steps-to-distance": stepsToDistance,
  "cycling-speed": cyclingSpeed,
};
