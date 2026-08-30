import { describe, it, expect } from "vitest";
import { autoSportsR5Engines } from "./auto-sports-r5-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  autoSportsR5Engines[id](inputs);

describe("auto + sports round 5 wave3 engines", () => {
  it("horsepower: hp = torque × rpm / 5252", () => {
    const r = run("horsepower", { torqueLbFt: "300", rpm: "5252" });
    expect(r.horsepower as number).toBeCloseTo(300, 4);
  });

  it("horsepower: NaN when an input is missing", () => {
    expect(Number.isNaN(run("horsepower", { torqueLbFt: "", rpm: "5252" }).horsepower as number)).toBe(true);
  });

  it("engine-displacement: cc and litres from bore/stroke/cylinders", () => {
    const r = run("engine-displacement", { boreMm: "86", strokeMm: "86", cylinders: "4" });
    expect(r.displacementCc as number).toBeCloseTo(1998.23, 1);
    expect(r.displacementLiters as number).toBeCloseTo(1.998, 2);
  });

  it("tire-pressure-temp: ~1 psi per 10°F", () => {
    const r = run("tire-pressure-temp", { currentPsi: "32", tempChangeF: "20" });
    expect(r.adjustedPsi as number).toBeCloseTo(34, 6);
    expect(r.pressureChange as number).toBeCloseTo(2, 6);
  });

  it("tire-pressure-temp: negative temperature change lowers pressure", () => {
    const r = run("tire-pressure-temp", { currentPsi: "32", tempChangeF: "-30" });
    expect(r.adjustedPsi as number).toBeCloseTo(29, 6);
    expect(r.pressureChange as number).toBeCloseTo(-3, 6);
  });

  it("towing-capacity: GCWR minus curb and cargo", () => {
    const r = run("towing-capacity", { gcwr: "12000", curbWeight: "6000", passengerCargoWeight: "1000" });
    expect(r.towingCapacity as number).toBeCloseTo(5000, 6);
  });

  it("towing-capacity: cargo defaults to zero when blank", () => {
    const r = run("towing-capacity", { gcwr: "12000", curbWeight: "6000", passengerCargoWeight: "" });
    expect(r.towingCapacity as number).toBeCloseTo(6000, 6);
  });

  it("fuel-savings: annual savings from a more efficient car", () => {
    const r = run("fuel-savings", { annualMiles: "12000", oldMpg: "20", newMpg: "30", fuelPrice: "4" });
    expect(r.oldAnnualCost as number).toBeCloseTo(2400, 6);
    expect(r.newAnnualCost as number).toBeCloseTo(1600, 6);
    expect(r.annualSavings as number).toBeCloseTo(800, 6);
  });

  it("fuel-savings: NaN when old MPG is zero", () => {
    expect(Number.isNaN(run("fuel-savings", { annualMiles: "12000", oldMpg: "0", newMpg: "30", fuelPrice: "4" }).annualSavings as number)).toBe(true);
  });

  it("ffmi: height-adjusted fat-free mass index", () => {
    const r = run("ffmi", { weightKg: "90", heightCm: "180", bodyFatPercent: "15" });
    expect(r.fatFreeMass as number).toBeCloseTo(76.5, 6);
    expect(r.ffmi as number).toBeCloseTo(23.611, 2);
  });

  it("golf-handicap: differential on a standard slope", () => {
    const r = run("golf-handicap", { score: "90", courseRating: "72", slopeRating: "113" });
    expect(r.handicapDifferential as number).toBeCloseTo(18, 6);
  });

  it("golf-handicap: NaN when slope rating is zero", () => {
    expect(Number.isNaN(run("golf-handicap", { score: "90", courseRating: "72", slopeRating: "0" }).handicapDifferential as number)).toBe(true);
  });

  it("points-per-game: total points over games", () => {
    const r = run("points-per-game", { totalPoints: "250", games: "10" });
    expect(r.ppg as number).toBeCloseTo(25, 6);
  });

  it("points-per-game: NaN when games is zero", () => {
    expect(Number.isNaN(run("points-per-game", { totalPoints: "250", games: "0" }).ppg as number)).toBe(true);
  });

  it("batting-average: hits over at-bats", () => {
    const r = run("batting-average", { hits: "150", atBats: "500" });
    expect(r.battingAverage as number).toBeCloseTo(0.3, 6);
  });

  it("batting-average: NaN when at-bats is zero", () => {
    expect(Number.isNaN(run("batting-average", { hits: "0", atBats: "0" }).battingAverage as number)).toBe(true);
  });

  it("elo-rating: even match win adds half of K", () => {
    const r = run("elo-rating", { playerRating: "1600", opponentRating: "1600", result: "1", kFactor: "32" });
    expect(r.newRating as number).toBeCloseTo(1616, 6);
    expect(r.ratingChange as number).toBeCloseTo(16, 6);
  });

  it("elo-rating: k factor defaults to 32 when blank", () => {
    const r = run("elo-rating", { playerRating: "1600", opponentRating: "1600", result: "0", kFactor: "" });
    expect(r.newRating as number).toBeCloseTo(1584, 6);
    expect(r.ratingChange as number).toBeCloseTo(-16, 6);
  });
});
