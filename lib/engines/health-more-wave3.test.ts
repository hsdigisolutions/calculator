import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("health more wave3 engines", () => {
  it("body-surface-area: DuBois BSA ~1.85 m²", () => {
    const r = run("body-surface-area", { weight: "70", height: "175" });
    expect(r.bsa as number).toBeCloseTo(1.85, 1);
  });

  it("body-surface-area: invalid inputs -> NaN", () => {
    const r = run("body-surface-area", { weight: "0", height: "175" });
    expect(Number.isNaN(r.bsa as number)).toBe(true);
  });

  it("waist-to-height-ratio: ~0.457 and Healthy", () => {
    const r = run("waist-to-height-ratio", { waist: "80", height: "175" });
    expect(r.ratio as number).toBeCloseTo(0.457, 2);
    expect(r.category).toBe("Healthy");
  });

  it("waist-to-height-ratio: high risk band", () => {
    const r = run("waist-to-height-ratio", { waist: "110", height: "175" });
    expect(r.category).toBe("High risk");
  });

  it("sleep-debt: accumulates shortfall", () => {
    const r = run("sleep-debt", { idealHours: "8", actualHours: "6.5", nights: "7" });
    expect(r.sleepDebt as number).toBeCloseTo(10.5, 5);
    expect(r.weeklyAverage as number).toBeCloseTo(1.5, 5);
  });

  it("blood-alcohol-content: floored at 0, male ratio", () => {
    const r = run("blood-alcohol-content", { drinks: "3", weightKg: "70", hours: "2", sex: "male" });
    expect(r.bac as number).toBeGreaterThan(0);
    const sober = run("blood-alcohol-content", { drinks: "1", weightKg: "70", hours: "10", sex: "male" });
    expect(sober.bac as number).toBe(0);
  });

  it("max-heart-rate: 220 - age and zones", () => {
    const r = run("max-heart-rate", { age: "30" });
    expect(r.maxHeartRate).toBe(190);
    expect(r.fatBurnLow).toBe(95);
    expect(r.cardioHigh as number).toBeCloseTo(161.5, 5);
  });
});
