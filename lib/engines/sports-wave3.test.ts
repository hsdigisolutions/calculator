import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("sports wave3 engines", () => {
  it("one-rep-max: Epley 1RM from weight and reps", () => {
    const r = run("one-rep-max", { weight: "100", reps: "5" });
    expect(r.oneRepMax as number).toBeCloseTo(116.67, 2);
    expect(r.at90 as number).toBeCloseTo(105, 2);
    expect(r.at80 as number).toBeCloseTo(93.33, 2);
  });
  it("one-rep-max: invalid input -> NaN", () => {
    expect(Number.isNaN(run("one-rep-max", { weight: "", reps: "5" }).oneRepMax as number)).toBe(true);
  });

  it("vo2-max: Cooper test estimate", () => {
    const r = run("vo2-max", { distance: "2800" });
    expect(r.vo2max as number).toBeCloseTo(51.31, 2);
  });

  it("swim-pace: pace per 100 m and speed", () => {
    const r = run("swim-pace", { distance: "100", time: "90" });
    expect(r.pacePer100 as number).toBe(90);
    expect(r.speed as number).toBeCloseTo(1.111, 3);
  });

  it("calorie-burn: MET formula", () => {
    const r = run("calorie-burn", { met: "8", weight: "70", minutes: "30" });
    expect(r.calories as number).toBeCloseTo(280, 5);
  });

  it("race-time-predictor: Riegel projection", () => {
    const r = run("race-time-predictor", { knownDistance: "5", knownTime: "1500", targetDistance: "10" });
    expect(r.predictedTime as number).toBeCloseTo(3127.4, 0);
  });

  it("steps-to-distance: stride from height", () => {
    const r = run("steps-to-distance", { steps: "10000", height: "170" });
    expect(r.distanceKm as number).toBeCloseTo(7.055, 3);
    expect(r.distanceMiles as number).toBeCloseTo(4.384, 2);
  });

  it("cycling-speed: distance over time", () => {
    const r = run("cycling-speed", { distance: "40", time: "2" });
    expect(r.speed as number).toBe(20);
    expect(r.mph as number).toBeCloseTo(12.43, 2);
  });
  it("cycling-speed: zero time -> NaN", () => {
    expect(Number.isNaN(run("cycling-speed", { distance: "40", time: "0" }).speed as number)).toBe(true);
  });
});
