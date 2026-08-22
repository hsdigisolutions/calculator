import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("science wave3 (more) engines", () => {
  it("wavelength = wave speed / frequency", () => {
    const r = run("wavelength", { waveSpeed: "340", frequency: "170" });
    expect(r.wavelength).toBe(2);
    expect(r.period as number).toBeCloseTo(1 / 170, 8);
  });
  it("wavelength: zero frequency -> NaN", () => {
    expect(Number.isNaN(run("wavelength", { waveSpeed: "340", frequency: "0" }).wavelength as number)).toBe(true);
  });

  it("electric-power: P = V * I", () => {
    const r = run("electric-power", { voltage: "12", current: "2" });
    expect(r.power).toBe(24);
    expect(r.resistance).toBe(6);
  });
  it("electric-power: zero current -> resistance NaN", () => {
    const r = run("electric-power", { voltage: "12", current: "0" });
    expect(r.power).toBe(0);
    expect(Number.isNaN(r.resistance as number)).toBe(true);
  });

  it("gravitational-force = G m1 m2 / r^2", () => {
    const r = run("gravitational-force", { mass1: "5.972e24", mass2: "70", distance: "6371000" });
    expect(r.force as number).toBeCloseTo(686.9, 0);
  });
  it("gravitational-force: zero distance -> NaN", () => {
    expect(Number.isNaN(run("gravitational-force", { mass1: "10", mass2: "10", distance: "0" }).force as number)).toBe(true);
  });

  it("thermal-expansion: dL = a * L0 * dT", () => {
    const r = run("thermal-expansion", { originalLength: "10", coefficient: "0.000012", tempChange: "50" });
    expect(r.expansion as number).toBeCloseTo(0.006, 6);
    expect(r.newLength as number).toBeCloseTo(10.006, 6);
  });

  it("pressure-volume: Boyle's law new volume", () => {
    const r = run("pressure-volume", { pressure1: "2", volume1: "3", pressure2: "6" });
    expect(r.newVolume).toBe(1);
  });
  it("pressure-volume: zero final pressure -> NaN", () => {
    expect(Number.isNaN(run("pressure-volume", { pressure1: "2", volume1: "3", pressure2: "0" }).newVolume as number)).toBe(true);
  });
});
