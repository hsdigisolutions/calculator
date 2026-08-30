import { describe, it, expect } from "vitest";
import { scienceR5Engines } from "./science-r5-wave3";

const run = (id: string, inputs: Record<string, string>) => scienceR5Engines[id](inputs);

describe("science round 5 wave3 engines", () => {
  it("molarity: concentration = moles / volume", () => {
    const r = run("molarity", { moles: "2", volumeLiters: "4" });
    expect(r.molarity as number).toBeCloseTo(0.5, 10);
  });

  it("molarity: zero volume → NaN", () => {
    expect(Number.isNaN(run("molarity", { moles: "2", volumeLiters: "0" }).molarity as number)).toBe(true);
  });

  it("half-life: one half-life leaves 50%", () => {
    const r = run("half-life", { initialAmount: "100", halfLifeValue: "5", elapsedTime: "5" });
    expect(r.remaining as number).toBeCloseTo(50, 10);
    expect(r.fractionRemaining as number).toBeCloseTo(50, 10);
  });

  it("half-life: three half-lives leaves one eighth", () => {
    const r = run("half-life", { initialAmount: "80", halfLifeValue: "2", elapsedTime: "6" });
    expect(r.remaining as number).toBeCloseTo(10, 10);
    expect(r.fractionRemaining as number).toBeCloseTo(12.5, 10);
  });

  it("potential-energy: PE = m·g·h with default gravity", () => {
    const r = run("potential-energy", { mass: "2", height: "10", gravity: "" });
    expect(r.potentialEnergy as number).toBeCloseTo(196.2, 4);
  });

  it("potential-energy: custom gravity is honoured", () => {
    const r = run("potential-energy", { mass: "5", height: "3", gravity: "1.62" });
    expect(r.potentialEnergy as number).toBeCloseTo(24.3, 4);
  });

  it("momentum: p = m·v (negative velocity allowed)", () => {
    expect(run("momentum", { mass: "3", velocity: "4" }).momentum as number).toBeCloseTo(12, 10);
    expect(run("momentum", { mass: "3", velocity: "-4" }).momentum as number).toBeCloseTo(-12, 10);
  });

  it("acceleration: a = (vf − vi) / t", () => {
    const r = run("acceleration", { initialVelocity: "0", finalVelocity: "20", time: "4" });
    expect(r.acceleration as number).toBeCloseTo(5, 10);
  });

  it("acceleration: zero time → NaN", () => {
    expect(Number.isNaN(run("acceleration", { initialVelocity: "0", finalVelocity: "20", time: "0" }).acceleration as number)).toBe(true);
  });

  it("ideal-gas: n = PV / (R·T)", () => {
    const r = run("ideal-gas", { pressure: "1", volume: "22.414", temperature: "273.15" });
    expect(r.moles as number).toBeCloseTo(1, 2);
  });

  it("projectile-motion: 45° gives max range and known values", () => {
    const r = run("projectile-motion", { initialVelocity: "20", angleDegrees: "45", gravity: "9.81" });
    expect(r.range as number).toBeCloseTo(40.77, 1);
    expect(r.maxHeight as number).toBeCloseTo(10.19, 1);
    expect(r.flightTime as number).toBeCloseTo(2.883, 2);
  });

  it("specific-heat: Q = m·c·ΔT", () => {
    const r = run("specific-heat", { mass: "100", specificHeat: "4.18", tempChange: "20" });
    expect(r.heatEnergy as number).toBeCloseTo(8360, 6);
  });

  it("coulombs-law: F = k·q1·q2 / r²", () => {
    const r = run("coulombs-law", { charge1: "1e-6", charge2: "1e-6", distance: "0.1" });
    expect(r.force as number).toBeCloseTo(0.89875, 4);
  });

  it("coulombs-law: zero distance → NaN", () => {
    expect(Number.isNaN(run("coulombs-law", { charge1: "1e-6", charge2: "1e-6", distance: "0" }).force as number)).toBe(true);
  });

  it("mass-energy: E = m·c²", () => {
    const r = run("mass-energy", { mass: "1" });
    const c2 = 299792458 * 299792458;
    expect(r.energy as number).toBe(c2);
    expect((r.energy as number) / 1e16).toBeCloseTo(8.98755, 4);
    expect(r.energyMegajoules as number).toBe(c2 / 1e6);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("molarity", { moles: "", volumeLiters: "4" }).molarity as number)).toBe(true);
    expect(Number.isNaN(run("momentum", { mass: "2", velocity: "" }).momentum as number)).toBe(true);
    expect(Number.isNaN(run("mass-energy", { mass: "" }).energy as number)).toBe(true);
    expect(Number.isNaN(run("specific-heat", { mass: "10", specificHeat: "", tempChange: "5" }).heatEnergy as number)).toBe(true);
  });
});
