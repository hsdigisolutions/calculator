import { describe, it, expect } from "vitest";
import { convertersR8Engines } from "./converters-r8-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  convertersR8Engines[id](inputs);

describe("converters r8 wave3 engines", () => {
  it("acceleration-unit: g to m/s²", () => {
    const r = run("acceleration-unit", { value: "1", from: "g", to: "m/s²" });
    expect(r.result as number).toBeCloseTo(9.80665, 4);
  });

  it("acceleration-unit: ft/s² to m/s²", () => {
    const r = run("acceleration-unit", { value: "10", from: "ft/s²", to: "m/s²" });
    expect(r.result as number).toBeCloseTo(3.048, 4);
  });

  it("density-unit: g/cm³ to kg/m³", () => {
    const r = run("density-unit", { value: "1", from: "g/cm³", to: "kg/m³" });
    expect(r.result as number).toBeCloseTo(1000, 4);
  });

  it("density-unit: lb/ft³ to kg/m³", () => {
    const r = run("density-unit", { value: "1", from: "lb/ft³", to: "kg/m³" });
    expect(r.result as number).toBeCloseTo(16.0185, 4);
  });

  it("flow-rate-unit: L/s to L/min", () => {
    const r = run("flow-rate-unit", { value: "1", from: "L/s", to: "L/min" });
    expect(r.result as number).toBeCloseTo(60, 1);
  });

  it("flow-rate-unit: m³/h to L/s", () => {
    const r = run("flow-rate-unit", { value: "1", from: "m³/h", to: "L/s" });
    expect(r.result as number).toBeCloseTo(0.277778, 4);
  });

  it("illuminance-unit: foot-candle to lux", () => {
    const r = run("illuminance-unit", { value: "1", from: "foot-candle", to: "lux" });
    expect(r.result as number).toBeCloseTo(10.7639, 4);
  });

  it("magnetic-field-unit: tesla to gauss", () => {
    const r = run("magnetic-field-unit", { value: "1", from: "T", to: "gauss" });
    expect(r.result as number).toBeCloseTo(10000, 1);
  });

  it("magnetic-field-unit: mT to µT", () => {
    const r = run("magnetic-field-unit", { value: "1", from: "mT", to: "µT" });
    expect(r.result as number).toBeCloseTo(1000, 1);
  });

  it("radiation-dose-unit: rem to mSv", () => {
    const r = run("radiation-dose-unit", { value: "1", from: "rem", to: "mSv" });
    expect(r.result as number).toBeCloseTo(10, 4);
  });

  it("radiation-dose-unit: Sv to rem", () => {
    const r = run("radiation-dose-unit", { value: "1", from: "Sv", to: "rem" });
    expect(r.result as number).toBeCloseTo(100, 1);
  });

  it("cooking-weight-unit: oz to g", () => {
    const r = run("cooking-weight-unit", { value: "1", from: "oz", to: "g" });
    expect(r.result as number).toBeCloseTo(28.3495, 4);
  });

  it("cooking-weight-unit: lb to kg", () => {
    const r = run("cooking-weight-unit", { value: "1", from: "lb", to: "kg" });
    expect(r.result as number).toBeCloseTo(0.453592, 5);
  });

  it("typography-unit: inch to pt", () => {
    const r = run("typography-unit", { value: "1", from: "inch", to: "pt" });
    expect(r.result as number).toBeCloseTo(72, 4);
  });

  it("typography-unit: px to pt", () => {
    const r = run("typography-unit", { value: "16", from: "px", to: "pt" });
    expect(r.result as number).toBeCloseTo(12, 4);
  });

  it("blood-sugar-unit: mmol/L to mg/dL", () => {
    const r = run("blood-sugar-unit", { value: "1", from: "mmol/L", to: "mg/dL" });
    expect(r.result as number).toBeCloseTo(18.0182, 4);
  });

  it("blood-sugar-unit: mg/dL to mmol/L (100 mg/dL ≈ 5.55)", () => {
    const r = run("blood-sugar-unit", { value: "100", from: "mg/dL", to: "mmol/L" });
    expect(r.result as number).toBeCloseTo(5.5499, 3);
  });

  it("shoe-size-unit: US to UK subtracts 0.5", () => {
    const r = run("shoe-size-unit", { value: "10", from: "US", to: "UK" });
    expect(r.result as number).toBeCloseTo(9.5, 4);
  });

  it("shoe-size-unit: US to EU adds 33", () => {
    const r = run("shoe-size-unit", { value: "10", from: "US", to: "EU" });
    expect(r.result as number).toBeCloseTo(43, 4);
  });

  it("shoe-size-unit: EU to UK round trips through US", () => {
    const r = run("shoe-size-unit", { value: "43", from: "EU", to: "UK" });
    // EU 43 → US 10 → UK 9.5
    expect(r.result as number).toBeCloseTo(9.5, 4);
  });

  it("shoe-size-unit: same unit returns same value", () => {
    const r = run("shoe-size-unit", { value: "9", from: "UK", to: "UK" });
    expect(r.result as number).toBeCloseTo(9, 4);
  });

  it("returns NaN for unknown units", () => {
    expect(Number.isNaN(run("acceleration-unit", { value: "1", from: "furlong", to: "g" }).result as number)).toBe(true);
    expect(Number.isNaN(run("density-unit", { value: "1", from: "kg/m³", to: "??" }).result as number)).toBe(true);
    expect(Number.isNaN(run("shoe-size-unit", { value: "10", from: "US", to: "JP" }).result as number)).toBe(true);
  });

  it("returns NaN for missing or invalid value", () => {
    expect(Number.isNaN(run("acceleration-unit", { value: "", from: "g", to: "m/s²" }).result as number)).toBe(true);
    expect(Number.isNaN(run("cooking-weight-unit", { value: "abc", from: "g", to: "oz" }).result as number)).toBe(true);
  });

  it("shoe-size-unit: rejects zero and negative sizes", () => {
    expect(Number.isNaN(run("shoe-size-unit", { value: "0", from: "US", to: "UK" }).result as number)).toBe(true);
    expect(Number.isNaN(run("shoe-size-unit", { value: "-5", from: "US", to: "UK" }).result as number)).toBe(true);
  });
});
