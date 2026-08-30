import { describe, it, expect } from "vitest";
import { scienceR7Engines } from "./science-r7-wave3";

const run = (id: string, inputs: Record<string, string>) => scienceR7Engines[id](inputs);

describe("science r7 wave3 engines", () => {
  it("work-done: W = F × d", () => {
    const r = run("work-done", { force: "100", distance: "5" });
    expect(r.work as number).toBeCloseTo(500, 6);
  });

  it("work-done: negative distance still multiplies", () => {
    const r = run("work-done", { force: "10", distance: "-3" });
    expect(r.work as number).toBeCloseTo(-30, 6);
  });

  it("efficiency: output/input as a percentage", () => {
    const r = run("efficiency", { outputEnergy: "750", inputEnergy: "1000" });
    expect(r.efficiency as number).toBeCloseTo(75, 6);
  });

  it("efficiency: zero input → NaN", () => {
    expect(Number.isNaN(run("efficiency", { outputEnergy: "750", inputEnergy: "0" }).efficiency as number)).toBe(true);
  });

  it("hydrostatic-pressure: ρ·g·h with default gravity", () => {
    const r = run("hydrostatic-pressure", { fluidDensity: "1000", depth: "10" });
    expect(r.pressure as number).toBeCloseTo(98100, 4);
  });

  it("hydrostatic-pressure: custom gravity honoured", () => {
    const r = run("hydrostatic-pressure", { fluidDensity: "1000", depth: "10", gravity: "1.62" });
    expect(r.pressure as number).toBeCloseTo(16200, 4);
  });

  it("heat-index: NWS Rothfusz regression at 90°F / 70%", () => {
    const r = run("heat-index", { temperatureF: "90", humidityPercent: "70" });
    expect(r.heatIndexF as number).toBeCloseTo(105.92, 1);
  });

  it("heat-index: below 80°F returns the air temperature", () => {
    const r = run("heat-index", { temperatureF: "70", humidityPercent: "50" });
    expect(r.heatIndexF as number).toBeCloseTo(70, 6);
  });

  it("wind-chill: NWS formula at 30°F / 15 mph", () => {
    const r = run("wind-chill", { temperatureF: "30", windSpeedMph: "15" });
    expect(r.windChillF as number).toBeCloseTo(19.03, 1);
  });

  it("dew-point: Magnus formula at 25°C / 60%", () => {
    const r = run("dew-point", { temperatureC: "25", humidityPercent: "60" });
    expect(r.dewPointC as number).toBeCloseTo(16.68, 1);
  });

  it("dew-point: zero humidity → NaN", () => {
    expect(Number.isNaN(run("dew-point", { temperatureC: "25", humidityPercent: "0" }).dewPointC as number)).toBe(true);
  });

  it("terminal-velocity: skydiver with defaults", () => {
    const r = run("terminal-velocity", { mass: "80", dragCoefficient: "1.0", crossSectionalArea: "0.7" });
    expect(r.terminalVelocity as number).toBeCloseTo(42.78, 1);
  });

  it("escape-velocity: Earth ≈ 11.2 km/s", () => {
    const r = run("escape-velocity", { mass: "5.972e24", radius: "6.371e6" });
    expect(r.escapeVelocity as number).toBeCloseTo(11186, -1);
  });

  it("escape-velocity: zero radius → NaN", () => {
    expect(Number.isNaN(run("escape-velocity", { mass: "5.972e24", radius: "0" }).escapeVelocity as number)).toBe(true);
  });

  it("thin-lens: focal length from object/image distance", () => {
    const r = run("thin-lens", { objectDistance: "30", imageDistance: "15" });
    expect(r.focalLength as number).toBeCloseTo(10, 6);
  });

  it("doppler-effect: approaching source raises frequency", () => {
    const r = run("doppler-effect", { sourceFrequency: "440", sourceSpeed: "30", direction: "approaching" });
    expect(r.observedFrequency as number).toBeCloseTo(482.17, 1);
  });

  it("doppler-effect: receding source lowers frequency", () => {
    const r = run("doppler-effect", { sourceFrequency: "440", sourceSpeed: "30", direction: "receding" });
    expect(r.observedFrequency as number).toBeCloseTo(404.61, 1);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("work-done", { force: "", distance: "5" }).work as number)).toBe(true);
    expect(Number.isNaN(run("terminal-velocity", { mass: "80", dragCoefficient: "", crossSectionalArea: "0.7" }).terminalVelocity as number)).toBe(true);
    expect(Number.isNaN(run("thin-lens", { objectDistance: "0", imageDistance: "15" }).focalLength as number)).toBe(true);
  });
});
