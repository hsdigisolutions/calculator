import { describe, it, expect } from "vitest";
import { engineeringR6Engines } from "./engineering-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => engineeringR6Engines[id](inputs);

describe("engineering r6 wave3 engines", () => {
  it("power-dissipation: P = I²·R", () => {
    const r = run("power-dissipation", { current: "3", resistance: "4" });
    expect(r.power as number).toBeCloseTo(36, 6);
  });

  it("power-dissipation: zero current gives zero power, invalid gives NaN", () => {
    expect(run("power-dissipation", { current: "0", resistance: "4" }).power as number).toBe(0);
    expect(Number.isNaN(run("power-dissipation", { current: "", resistance: "4" }).power as number)).toBe(true);
  });

  it("resistor: series adds resistances", () => {
    const r = run("resistor", { r1: "100", r2: "200", configuration: "series" });
    expect(r.resistance as number).toBeCloseTo(300, 6);
  });

  it("resistor: parallel combines reciprocally", () => {
    const r = run("resistor", { r1: "100", r2: "200", configuration: "parallel" });
    expect(r.resistance as number).toBeCloseTo(66.6666667, 5);
  });

  it("resistor: parallel of two zeros is NaN (zero denominator)", () => {
    expect(Number.isNaN(run("resistor", { r1: "0", r2: "0", configuration: "parallel" }).resistance as number)).toBe(true);
  });

  it("capacitor-energy: E = ½·C·V²", () => {
    const r = run("capacitor-energy", { capacitanceFarads: "0.001", voltage: "12" });
    expect(r.energy as number).toBeCloseTo(0.072, 6);
  });

  it("belt-length: open belt formula", () => {
    const r = run("belt-length", { pulley1Diameter: "0.2", pulley2Diameter: "0.1", centerDistance: "0.5" });
    expect(r.beltLength as number).toBeCloseTo(1.4762389, 6);
  });

  it("belt-length: zero center distance is NaN", () => {
    expect(Number.isNaN(run("belt-length", { pulley1Diameter: "0.2", pulley2Diameter: "0.1", centerDistance: "0" }).beltLength as number)).toBe(true);
  });

  it("hydraulic-pressure: P = F/A", () => {
    const r = run("hydraulic-pressure", { force: "1000", area: "0.01" });
    expect(r.pressure as number).toBeCloseTo(100000, 6);
    expect(Number.isNaN(run("hydraulic-pressure", { force: "1000", area: "0" }).pressure as number)).toBe(true);
  });

  it("safety-factor: ultimate / applied", () => {
    const r = run("safety-factor", { ultimateStrength: "400", appliedStress: "100" });
    expect(r.safetyFactor as number).toBeCloseTo(4, 6);
    expect(Number.isNaN(run("safety-factor", { ultimateStrength: "400", appliedStress: "0" }).safetyFactor as number)).toBe(true);
  });

  it("heat-transfer-rate: Q = k·A·ΔT/thickness", () => {
    const r = run("heat-transfer-rate", { thermalConductivity: "0.5", area: "2", tempDifference: "30", thickness: "0.1" });
    expect(r.heatRate as number).toBeCloseTo(300, 6);
    expect(Number.isNaN(run("heat-transfer-rate", { thermalConductivity: "0.5", area: "2", tempDifference: "30", thickness: "0" }).heatRate as number)).toBe(true);
  });

  it("shaft-power: P = τ·2π·N/60", () => {
    const r = run("shaft-power", { torque: "50", rpm: "3000" });
    expect(r.power as number).toBeCloseTo(15707.963, 3);
  });

  it("pipe-flow-rate: Q = v·π·(D/2)² with litres conversion", () => {
    const r = run("pipe-flow-rate", { velocity: "2", pipeDiameter: "0.1" });
    expect(r.flowRate as number).toBeCloseTo(0.0157079633, 8);
    expect(r.flowLitersPerSec as number).toBeCloseTo(15.7079633, 5);
  });

  it("pump-power: P = ρ·g·Q·H", () => {
    const r = run("pump-power", { flowRate: "0.05", head: "10", fluidDensity: "1000", gravity: "9.81" });
    expect(r.hydraulicPower as number).toBeCloseTo(4905, 6);
    expect(Number.isNaN(run("pump-power", { flowRate: "", head: "10", fluidDensity: "1000", gravity: "9.81" }).hydraulicPower as number)).toBe(true);
  });
});
