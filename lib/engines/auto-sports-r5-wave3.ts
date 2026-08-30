import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 5 — Automotive + Sports engines. Pure functions. Invalid / zero-divide → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Horsepower from torque and RPM: hp = torque × rpm / 5252.
const horsepower: ComputeFn = (i) => {
  const torqueLbFt = num(i.torqueLbFt);
  const rpm = num(i.rpm);
  if (!finite(torqueLbFt) || !finite(rpm)) return { horsepower: NaN };
  return { horsepower: (torqueLbFt * rpm) / 5252 };
};

// Engine displacement from bore, stroke, cylinders.
const engineDisplacement: ComputeFn = (i) => {
  const boreMm = num(i.boreMm);
  const strokeMm = num(i.strokeMm);
  const cylinders = num(i.cylinders);
  if (!finite(boreMm) || !finite(strokeMm) || !finite(cylinders))
    return { displacementCc: NaN, displacementLiters: NaN };
  const boreCm = boreMm / 10;
  const strokeCm = strokeMm / 10;
  const displacementCc =
    (Math.PI / 4) * boreCm * boreCm * strokeCm * cylinders;
  const displacementLiters = displacementCc / 1000;
  return { displacementCc, displacementLiters };
};

// Tire pressure change with temperature (~1 psi per 10°F).
const tirePressureTemp: ComputeFn = (i) => {
  const currentPsi = num(i.currentPsi);
  const tempChangeF = num(i.tempChangeF);
  if (!finite(currentPsi) || !finite(tempChangeF))
    return { adjustedPsi: NaN, pressureChange: NaN };
  const pressureChange = tempChangeF / 10;
  const adjustedPsi = currentPsi + pressureChange;
  return { adjustedPsi, pressureChange };
};

// Towing capacity = GCWR − curb weight − passenger/cargo weight.
const towingCapacity: ComputeFn = (i) => {
  const gcwr = num(i.gcwr);
  const curbWeight = num(i.curbWeight);
  if (!finite(gcwr) || !finite(curbWeight))
    return { towingCapacity: NaN };
  const passengerCargoWeight = finite(num(i.passengerCargoWeight))
    ? num(i.passengerCargoWeight)
    : 0;
  return { towingCapacity: gcwr - curbWeight - passengerCargoWeight };
};

// Fuel savings from switching to a more efficient vehicle.
const fuelSavings: ComputeFn = (i) => {
  const annualMiles = num(i.annualMiles);
  const oldMpg = num(i.oldMpg);
  const newMpg = num(i.newMpg);
  const fuelPrice = num(i.fuelPrice);
  if (
    !finite(annualMiles) ||
    !finite(oldMpg) ||
    oldMpg === 0 ||
    !finite(newMpg) ||
    newMpg === 0 ||
    !finite(fuelPrice)
  )
    return { annualSavings: NaN, oldAnnualCost: NaN, newAnnualCost: NaN };
  const oldAnnualCost = (annualMiles / oldMpg) * fuelPrice;
  const newAnnualCost = (annualMiles / newMpg) * fuelPrice;
  const annualSavings = oldAnnualCost - newAnnualCost;
  return { annualSavings, oldAnnualCost, newAnnualCost };
};

// FFMI (fat-free mass index), height-adjusted.
const ffmi: ComputeFn = (i) => {
  const weightKg = num(i.weightKg);
  const heightCm = num(i.heightCm);
  const bodyFatPercent = num(i.bodyFatPercent);
  if (
    !finite(weightKg) ||
    !finite(heightCm) ||
    heightCm === 0 ||
    !finite(bodyFatPercent)
  )
    return { ffmi: NaN, fatFreeMass: NaN };
  const leanMass = weightKg * (1 - bodyFatPercent / 100);
  const heightM = heightCm / 100;
  const ffmiValue = leanMass / (heightM * heightM) + 6.1 * (1.8 - heightM);
  return { ffmi: ffmiValue, fatFreeMass: leanMass };
};

// Golf handicap differential.
const golfHandicap: ComputeFn = (i) => {
  const score = num(i.score);
  const courseRating = num(i.courseRating);
  const slopeRating = num(i.slopeRating);
  if (
    !finite(score) ||
    !finite(courseRating) ||
    !finite(slopeRating) ||
    slopeRating === 0
  )
    return { handicapDifferential: NaN };
  return {
    handicapDifferential: ((score - courseRating) * 113) / slopeRating,
  };
};

// Points per game.
const pointsPerGame: ComputeFn = (i) => {
  const totalPoints = num(i.totalPoints);
  const games = num(i.games);
  if (!finite(totalPoints) || !finite(games) || games === 0)
    return { ppg: NaN };
  return { ppg: totalPoints / games };
};

// Batting average = hits / at-bats.
const battingAverage: ComputeFn = (i) => {
  const hits = num(i.hits);
  const atBats = num(i.atBats);
  if (!finite(hits) || !finite(atBats) || atBats === 0)
    return { battingAverage: NaN };
  return { battingAverage: hits / atBats };
};

// Elo rating update after a result.
const eloRating: ComputeFn = (i) => {
  const playerRating = num(i.playerRating);
  const opponentRating = num(i.opponentRating);
  const result = num(i.result);
  if (!finite(playerRating) || !finite(opponentRating) || !finite(result))
    return { newRating: NaN, ratingChange: NaN };
  const kFactor = finite(num(i.kFactor)) ? num(i.kFactor) : 32;
  const expected =
    1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  const newRating = playerRating + kFactor * (result - expected);
  const ratingChange = newRating - playerRating;
  return { newRating, ratingChange };
};

export const autoSportsR5Engines: Record<string, ComputeFn> = {
  horsepower,
  "engine-displacement": engineDisplacement,
  "tire-pressure-temp": tirePressureTemp,
  "towing-capacity": towingCapacity,
  "fuel-savings": fuelSavings,
  ffmi,
  "golf-handicap": golfHandicap,
  "points-per-game": pointsPerGame,
  "batting-average": battingAverage,
  "elo-rating": eloRating,
};
