import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("engineering wave3 engines", () => {
  it("gear-ratio: ratio, output speed and torque", () => {
    const r = run("gear-ratio", {
      drivingTeeth: "10",
      drivenTeeth: "30",
      inputRpm: "1000",
      inputTorque: "5",
    });
    expect(r.ratio).toBe(3);
    expect(r.outputRpm as number).toBeCloseTo(333.33, 2);
    expect(r.outputTorque).toBe(15);
  });
  it("gear-ratio: zero driving teeth -> NaN", () => {
    const r = run("gear-ratio", {
      drivingTeeth: "0",
      drivenTeeth: "30",
      inputRpm: "1000",
      inputTorque: "5",
    });
    expect(Number.isNaN(r.ratio as number)).toBe(true);
  });

  it("voltage-divider: Vout and current", () => {
    const r = run("voltage-divider", { vin: "12", r1: "1000", r2: "2000" });
    expect(r.vout).toBe(8);
    expect(r.current as number).toBeCloseTo(0.004, 6);
  });
  it("voltage-divider: zero total resistance -> NaN", () => {
    const r = run("voltage-divider", { vin: "12", r1: "0", r2: "0" });
    expect(Number.isNaN(r.vout as number)).toBe(true);
  });

  it("spring-constant: k and stored energy", () => {
    const r = run("spring-constant", { force: "20", displacement: "0.1" });
    expect(r.springConstant as number).toBeCloseTo(200, 6);
    expect(r.energy as number).toBeCloseTo(1, 6);
  });
  it("spring-constant: zero displacement -> NaN", () => {
    const r = run("spring-constant", { force: "20", displacement: "0" });
    expect(Number.isNaN(r.springConstant as number)).toBe(true);
  });

  it("stress-strain: stress, strain and modulus", () => {
    const r = run("stress-strain", {
      force: "1000",
      area: "0.01",
      originalLength: "2",
      deformation: "0.001",
    });
    expect(r.stress).toBe(100000);
    expect(r.strain as number).toBeCloseTo(0.0005, 8);
    expect(r.modulus as number).toBeCloseTo(200000000, 0);
  });

  it("motor-power: hp and kW", () => {
    const r = run("motor-power", { torque: "100", rpm: "2000" });
    expect(r.hp as number).toBeCloseTo(38.08, 2);
    expect(r.kw as number).toBeCloseTo(28.4, 1);
  });

  it("beam-deflection: mid-span deflection", () => {
    const r = run("beam-deflection", {
      load: "1000",
      length: "4",
      modulus: "200000000000",
      inertia: "0.0001",
    });
    expect(r.deflection as number).toBeCloseTo(0.0001667, 6);
  });

  it("reynolds-number: value and turbulent regime", () => {
    const r = run("reynolds-number", {
      density: "1000",
      velocity: "2",
      length: "0.1",
      viscosity: "0.001",
    });
    expect(r.reynolds).toBe(200000);
    expect(r.regime).toBe("Turbulent");
  });
  it("reynolds-number: laminar regime", () => {
    const r = run("reynolds-number", {
      density: "1000",
      velocity: "0.01",
      length: "0.1",
      viscosity: "0.001",
    });
    expect(r.regime).toBe("Laminar");
  });
  it("reynolds-number: zero viscosity -> NaN", () => {
    const r = run("reynolds-number", {
      density: "1000",
      velocity: "2",
      length: "0.1",
      viscosity: "0",
    });
    expect(Number.isNaN(r.reynolds as number)).toBe(true);
  });
});
