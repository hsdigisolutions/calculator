import { describe, it, expect } from "vitest";
import { convertersR4Engines } from "./converters-r4-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  convertersR4Engines[id](inputs);

describe("converters r4 wave3 engines", () => {
  it("power: 1 hp = 745.6999 W", () => {
    const r = run("power", { value: "1", from: "hp", to: "W" });
    expect(r.result as number).toBeCloseTo(745.6999, 3);
  });
  it("power: 1000 W = 1 kW", () => {
    const r = run("power", { value: "1000", from: "W", to: "kW" });
    expect(r.result as number).toBeCloseTo(1, 6);
  });
  it("power: unknown unit -> NaN", () => {
    const r = run("power", { value: "1", from: "hp", to: "xyz" });
    expect(Number.isNaN(r.result as number)).toBe(true);
  });

  it("torque: 1 lbf·ft = 1.35581795 N·m", () => {
    const r = run("torque", { value: "1", from: "lbf·ft", to: "N·m" });
    expect(r.result as number).toBeCloseTo(1.35581795, 6);
  });
  it("torque: 1 kgf·m = 9.80665 N·m", () => {
    const r = run("torque", { value: "1", from: "kgf·m", to: "N·m" });
    expect(r.result as number).toBeCloseTo(9.80665, 5);
  });

  it("angle: 180 deg = pi rad", () => {
    const r = run("angle", { value: "180", from: "deg", to: "rad" });
    expect(r.result as number).toBeCloseTo(Math.PI, 5);
  });
  it("angle: 1 turn = 360 deg", () => {
    const r = run("angle", { value: "1", from: "turn", to: "deg" });
    expect(r.result as number).toBeCloseTo(360, 6);
  });

  it("frequency: 60 rpm = 1 Hz", () => {
    const r = run("frequency", { value: "60", from: "rpm", to: "Hz" });
    expect(r.result as number).toBeCloseTo(1, 6);
  });
  it("frequency: 1 GHz = 1e9 Hz", () => {
    const r = run("frequency", { value: "1", from: "GHz", to: "Hz" });
    expect(r.result as number).toBeCloseTo(1e9, 0);
  });

  it("fuel-economy: 30 mpgUS = 7.8405 L/100km", () => {
    const r = run("fuel-economy", { value: "30", from: "mpgUS", to: "L/100km" });
    expect(r.result as number).toBeCloseTo(7.8405, 3);
  });
  it("fuel-economy: 100 km/L = 1 L/100km", () => {
    const r = run("fuel-economy", { value: "100", from: "km/L", to: "L/100km" });
    expect(r.result as number).toBeCloseTo(1, 6);
  });
  it("fuel-economy: mpgUS -> mpgUK cross", () => {
    const r = run("fuel-economy", { value: "30", from: "mpgUS", to: "mpgUK" });
    // 235.214583/30 = 7.8405 L/100km ; 282.481/7.8405 = 36.03 mpgUK
    expect(r.result as number).toBeCloseTo(36.026, 2);
  });
  it("fuel-economy: zero/negative -> NaN", () => {
    expect(Number.isNaN(run("fuel-economy", { value: "0", from: "mpgUS", to: "L/100km" }).result as number)).toBe(true);
    expect(Number.isNaN(run("fuel-economy", { value: "-5", from: "mpgUS", to: "L/100km" }).result as number)).toBe(true);
  });

  it("force: 1 kgf = 9.80665 N", () => {
    const r = run("force-unit", { value: "1", from: "kgf", to: "N" });
    expect(r.result as number).toBeCloseTo(9.80665, 5);
  });
  it("force: 1 lbf = 4.44822162 N", () => {
    const r = run("force-unit", { value: "1", from: "lbf", to: "N" });
    expect(r.result as number).toBeCloseTo(4.44822162, 6);
  });

  it("time-unit: 1 h = 3600 s", () => {
    const r = run("time-unit", { value: "1", from: "h", to: "s" });
    expect(r.result as number).toBeCloseTo(3600, 6);
  });
  it("time-unit: 1 day = 24 h", () => {
    const r = run("time-unit", { value: "1", from: "day", to: "h" });
    expect(r.result as number).toBeCloseTo(24, 6);
  });

  it("data-rate: 1 MB/s = 8 Mbit/s", () => {
    const r = run("data-rate", { value: "1", from: "MB/s", to: "Mbit/s" });
    expect(r.result as number).toBeCloseTo(8, 6);
  });
  it("data-rate: 1 Gbit/s = 1000 Mbit/s", () => {
    const r = run("data-rate", { value: "1", from: "Gbit/s", to: "Mbit/s" });
    expect(r.result as number).toBeCloseTo(1000, 6);
  });

  it("cooking-volume: 1 cup(US) = 236.588 ml", () => {
    const r = run("cooking-volume", { value: "1", from: "cup(US)", to: "ml" });
    expect(r.result as number).toBeCloseTo(236.588, 3);
  });
  it("cooking-volume: 1 gallon = 3785.41 ml", () => {
    const r = run("cooking-volume", { value: "1", from: "gallon", to: "ml" });
    expect(r.result as number).toBeCloseTo(3785.41, 2);
  });

  it("pace-speed: 5 min/km = 12 km/h", () => {
    const r = run("pace-speed", { value: "5", from: "min/km", to: "km/h" });
    expect(r.result as number).toBeCloseTo(12, 5);
  });
  it("pace-speed: 12 km/h = 5 min/km", () => {
    const r = run("pace-speed", { value: "12", from: "km/h", to: "min/km" });
    expect(r.result as number).toBeCloseTo(5, 5);
  });
  it("pace-speed: mph <-> min/mi round trip", () => {
    const r = run("pace-speed", { value: "6", from: "mph", to: "min/mi" });
    expect(r.result as number).toBeCloseTo(10, 4); // 6 mph = 10 min/mile
  });
  it("pace-speed: zero/negative -> NaN", () => {
    expect(Number.isNaN(run("pace-speed", { value: "0", from: "min/km", to: "km/h" }).result as number)).toBe(true);
    expect(Number.isNaN(run("pace-speed", { value: "-3", from: "km/h", to: "mph" }).result as number)).toBe(true);
  });

  it("empty value -> NaN across converters", () => {
    expect(Number.isNaN(run("power", { value: "", from: "hp", to: "W" }).result as number)).toBe(true);
    expect(Number.isNaN(run("angle", { value: "", from: "deg", to: "rad" }).result as number)).toBe(true);
  });
});
