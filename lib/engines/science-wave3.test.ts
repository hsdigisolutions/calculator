import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("science wave3 engines", () => {
  it("ohms-law: V & I -> R and power", () => {
    const r = run("ohms-law", { voltage: "12", current: "2", resistance: "" });
    expect(r.resistance).toBe(6);
    expect(r.power).toBe(24);
  });
  it("ohms-law: V & R -> I", () => {
    const r = run("ohms-law", { voltage: "12", current: "", resistance: "6" });
    expect(r.current).toBe(2);
    expect(r.power).toBe(24);
  });

  it("density = m/v", () => {
    const r = run("density", { mass: "10", volume: "2" });
    expect(r.density).toBe(5);
    expect(r.gPerCm3).toBeCloseTo(0.005, 6);
  });

  it("force = m*a", () => {
    const r = run("force", { mass: "10", acceleration: "9.81" });
    expect(r.force as number).toBeCloseTo(98.1, 5);
    expect(r.lbf as number).toBeCloseTo(22.055, 2);
  });

  it("kinetic energy = 0.5 m v^2", () => {
    const r = run("kinetic-energy", { mass: "2", velocity: "3" });
    expect(r.ke).toBe(9);
    expect(r.momentum).toBe(6);
  });

  it("pH of 1e-3 M", () => {
    const r = run("ph", { concentration: "0.001" });
    expect(r.ph as number).toBeCloseTo(3, 6);
    expect(r.poh as number).toBeCloseTo(11, 6);
    expect(r.classification).toBe("Acidic");
  });
  it("pH: invalid concentration -> NaN", () => {
    expect(Number.isNaN(run("ph", { concentration: "0" }).ph as number)).toBe(true);
  });

  it("speed = distance/time", () => {
    const r = run("speed-distance-time", { distance: "100", time: "2", speed: "" });
    expect(r.speed).toBe(50);
    expect(r.mph as number).toBeCloseTo(31.07, 1);
  });
});
