import { describe, it, expect } from "vitest";
import { sportsR8Engines } from "./sports-r8-wave3";

const run = (id: string, inputs: Record<string, string>) => sportsR8Engines[id](inputs);

describe("sports r8 wave3 engines", () => {
  it("running-calories: weight × distance × 1.036", () => {
    const r = run("running-calories", { weightKg: "70", distanceKm: "10" });
    expect(r.caloriesBurned as number).toBeCloseTo(725.2, 3);
  });

  it("marathon-time-predictor: Riegel scaling 5k to 10k", () => {
    const r = run("marathon-time-predictor", {
      recentDistanceKm: "5",
      recentTimeMinutes: "25",
      targetDistanceKm: "10",
    });
    expect(r.predictedMinutes as number).toBeCloseTo(25 * Math.pow(2, 1.06), 4);
  });

  it("race-finish-time: distance × pace, mirrored to duration", () => {
    const r = run("race-finish-time", { distanceKm: "10", paceMinPerKm: "5.5" });
    expect(r.finishMinutes as number).toBeCloseTo(55, 5);
    expect(r.finishTime as number).toBeCloseTo(55, 5);
  });

  it("power-to-weight-ratio: watts per kg", () => {
    const r = run("power-to-weight-ratio", { powerWatts: "300", weightKg: "75" });
    expect(r.wattsPerKg as number).toBeCloseTo(4, 5);
  });

  it("target-pace: pace and speed from goal", () => {
    const r = run("target-pace", { goalDistanceKm: "10", goalTimeMinutes: "50" });
    expect(r.paceMinPerKm as number).toBeCloseTo(5, 5);
    expect(r.speedKmh as number).toBeCloseTo(12, 5);
  });

  it("swim-pace-per-100: minutes per 100 m", () => {
    const r = run("swim-pace-per-100", { totalMeters: "1500", totalMinutes: "30" });
    expect(r.pacePer100m as number).toBeCloseTo(2, 5);
  });

  it("wilks-score: male lifter coefficient applied", () => {
    const r = run("wilks-score", { bodyWeightKg: "90", liftedKg: "200", sex: "male" });
    expect(r.wilksScore as number).toBeCloseTo(127.7, 0);
  });

  it("wilks-score: female lifter coefficient differs from male", () => {
    const male = run("wilks-score", { bodyWeightKg: "70", liftedKg: "150", sex: "male" });
    const female = run("wilks-score", { bodyWeightKg: "70", liftedKg: "150", sex: "female" });
    expect(Number.isFinite(female.wilksScore as number)).toBe(true);
    expect(female.wilksScore).not.toBe(male.wilksScore);
  });

  it("race-split: proportional split time", () => {
    const r = run("race-split", {
      totalDistanceKm: "42.195",
      totalTimeMinutes: "240",
      splitDistanceKm: "21.0975",
    });
    expect(r.splitTimeMinutes as number).toBeCloseTo(120, 5);
  });

  it("cycling-calories: MET × 3.5 × weight / 200 × minutes", () => {
    const r = run("cycling-calories", { weightKg: "80", durationMinutes: "60", metValue: "8" });
    expect(r.caloriesBurned as number).toBeCloseTo(672, 3);
  });

  it("stride-length: height × factor and steps per km", () => {
    const male = run("stride-length", { heightCm: "180", sex: "male" });
    expect(male.strideLengthCm as number).toBeCloseTo(74.7, 3);
    expect(male.stepsPerKm as number).toBeCloseTo(100000 / 74.7, 3);
    const female = run("stride-length", { heightCm: "180", sex: "female" });
    expect(female.strideLengthCm as number).toBeCloseTo(74.34, 3);
  });

  it("returns NaN for invalid, zero, or missing inputs", () => {
    expect(Number.isNaN(run("running-calories", { weightKg: "0", distanceKm: "10" }).caloriesBurned as number)).toBe(true);
    expect(Number.isNaN(run("marathon-time-predictor", { recentDistanceKm: "", recentTimeMinutes: "25", targetDistanceKm: "10" }).predictedMinutes as number)).toBe(true);
    expect(Number.isNaN(run("power-to-weight-ratio", { powerWatts: "300", weightKg: "0" }).wattsPerKg as number)).toBe(true);
    expect(Number.isNaN(run("swim-pace-per-100", { totalMeters: "0", totalMinutes: "30" }).pacePer100m as number)).toBe(true);
    expect(Number.isNaN(run("wilks-score", { bodyWeightKg: "90", liftedKg: "200", sex: "" }).wilksScore as number)).toBe(true);
    expect(Number.isNaN(run("cycling-calories", { weightKg: "80", durationMinutes: "60", metValue: "0" }).caloriesBurned as number)).toBe(true);
    expect(Number.isNaN(run("stride-length", { heightCm: "-1", sex: "male" }).strideLengthCm as number)).toBe(true);
  });
});
