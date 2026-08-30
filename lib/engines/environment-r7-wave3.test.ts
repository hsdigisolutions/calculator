import { describe, it, expect } from "vitest";
import { environmentR7Engines } from "./environment-r7-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  environmentR7Engines[id](inputs);

describe("environment r7 wave3 engines", () => {
  it("tree-carbon-offset: rounds trees up to whole trees", () => {
    const r = run("tree-carbon-offset", { co2KgPerYear: "1000", kgAbsorbedPerTree: "21" });
    // 1000 / 21 = 47.6 → ceil 48
    expect(r.treesNeeded).toBe(48);
  });

  it("recycling-impact: weighted CO₂ saved across materials", () => {
    const r = run("recycling-impact", { paperKg: "10", plasticKg: "5", glassKg: "20" });
    // 10*1.1 + 5*1.5 + 20*0.3 = 11 + 7.5 + 6 = 24.5
    expect(r.co2SavedKg as number).toBeCloseTo(24.5, 5);
  });

  it("rainwater-harvesting: litres from area, rainfall, efficiency", () => {
    const r = run("rainwater-harvesting", {
      roofAreaSqM: "100",
      annualRainfallMm: "800",
      efficiencyPercent: "80",
    });
    // 100 * 800 * 80 / 100 = 64000
    expect(r.litersPerYear as number).toBeCloseTo(64000, 5);
  });

  it("led-savings: annual savings and kWh saved", () => {
    const r = run("led-savings", {
      bulbs: "10",
      wattsIncandescent: "60",
      wattsLed: "9",
      hoursPerDay: "5",
      pricePerKwh: "0.15",
    });
    // kwhSaved = 10*(60-9)/1000 * 5 * 365 = 0.51 * 5 * 365 = 930.75
    expect(r.kwhSaved as number).toBeCloseTo(930.75, 2);
    expect(r.annualSavings as number).toBeCloseTo(139.6125, 3);
  });

  it("driving-emissions: CO₂ from miles, mpg, factor", () => {
    const r = run("driving-emissions", { miles: "12000", mpg: "25", co2KgPerGallon: "8.89" });
    // 12000 / 25 * 8.89 = 480 * 8.89 = 4267.2
    expect(r.co2Kg as number).toBeCloseTo(4267.2, 2);
  });

  it("driving-emissions: zero mpg → NaN", () => {
    const r = run("driving-emissions", { miles: "12000", mpg: "0", co2KgPerGallon: "8.89" });
    expect(Number.isNaN(r.co2Kg as number)).toBe(true);
  });

  it("diet-carbon-footprint: annual CO₂ from weekly diet", () => {
    const r = run("diet-carbon-footprint", {
      beefKgPerWeek: "1",
      chickenKgPerWeek: "2",
      dairyKgPerWeek: "3",
    });
    // (1*27 + 2*6.9 + 3*3.2)*52 = (27 + 13.8 + 9.6)*52 = 50.4*52 = 2620.8
    expect(r.annualCo2Kg as number).toBeCloseTo(2620.8, 2);
  });

  it("household-water-usage: daily and annual gallons", () => {
    const r = run("household-water-usage", { people: "4", gallonsPerPersonPerDay: "82" });
    expect(r.dailyGallons as number).toBeCloseTo(328, 5);
    expect(r.annualGallons as number).toBeCloseTo(119720, 5);
  });

  it("wind-turbine-output: power from swept area and wind speed", () => {
    const r = run("wind-turbine-output", {
      bladeRadiusM: "40",
      windSpeedMs: "10",
      efficiencyPercent: "40",
      airDensity: "1.225",
    });
    // 0.5 * 1.225 * PI * 1600 * 1000 * 0.4
    const expected = 0.5 * 1.225 * Math.PI * 1600 * 1000 * 0.4;
    expect(r.powerWatts as number).toBeCloseTo(expected, 2);
  });

  it("compost-impact: diverted mass and CO₂ avoided", () => {
    const r = run("compost-impact", { foodWasteKgPerWeek: "5" });
    // annual = 5*52 = 260; co2 = 260*0.5 = 130
    expect(r.annualDivertedKg as number).toBeCloseTo(260, 5);
    expect(r.co2AvoidedKg as number).toBeCloseTo(130, 5);
  });

  it("plastic-footprint: annual plastic kg and CO₂", () => {
    const r = run("plastic-footprint", { bottlesPerWeek: "7", gramsPerBottle: "10" });
    // annual kg = 7*52*10/1000 = 3.64; co2 = 3.64*6 = 21.84
    expect(r.annualPlasticKg as number).toBeCloseTo(3.64, 5);
    expect(r.co2Kg as number).toBeCloseTo(21.84, 5);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("tree-carbon-offset", { co2KgPerYear: "", kgAbsorbedPerTree: "21" }).treesNeeded as number)).toBe(true);
    expect(Number.isNaN(run("recycling-impact", { paperKg: "10", plasticKg: "", glassKg: "5" }).co2SavedKg as number)).toBe(true);
    expect(Number.isNaN(run("led-savings", { bulbs: "10", wattsIncandescent: "60", wattsLed: "9", hoursPerDay: "5", pricePerKwh: "" }).annualSavings as number)).toBe(true);
    expect(Number.isNaN(run("wind-turbine-output", { bladeRadiusM: "40", windSpeedMs: "10", efficiencyPercent: "40", airDensity: "" }).powerWatts as number)).toBe(true);
  });
});
