import { describe, it, expect } from "vitest";
import { automotiveR7Engines } from "./automotive-r7-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  automotiveR7Engines[id](inputs);

describe("automotive r7 wave3 engines", () => {
  it("mpg-to-l100km: converts MPG to litres per 100 km", () => {
    const r = run("mpg-to-l100km", { mpg: "30" });
    expect(r.litersPer100km as number).toBeCloseTo(7.8405, 3);
  });

  it("car-lease-payment: depreciation plus finance charge", () => {
    const r = run("car-lease-payment", {
      carPrice: "35000",
      residualPercent: "55",
      downPayment: "3000",
      leaseMonths: "36",
      moneyFactor: "0.0025",
    });
    // residual = 19250; dep = (35000-3000-19250)/36 = 354.1667;
    // finance = (35000-3000+19250)*0.0025 = 128.125; total = 482.29
    expect(r.monthlyPayment as number).toBeCloseTo(482.29, 2);
  });

  it("car-lease-payment: money factor defaults to 0.0025", () => {
    const explicit = run("car-lease-payment", {
      carPrice: "35000",
      residualPercent: "55",
      downPayment: "3000",
      leaseMonths: "36",
    });
    expect(explicit.monthlyPayment as number).toBeCloseTo(482.29, 2);
  });

  it("car-cost-per-mile: total annual costs divided by miles", () => {
    const r = run("car-cost-per-mile", {
      annualCosts: "9000",
      annualMiles: "12000",
    });
    expect(r.costPerMile as number).toBeCloseTo(0.75, 4);
  });

  it("tire-diameter: overall diameter in inches", () => {
    const r = run("tire-diameter", {
      widthMm: "225",
      aspectRatio: "45",
      wheelDiameterIn: "17",
    });
    // 17 + 2*(225*45/100)/25.4 = 17 + 2*101.25/25.4 = 24.9724
    expect(r.overallDiameterIn as number).toBeCloseTo(24.9724, 3);
  });

  it("speedometer-error: actual speed and error percent", () => {
    const r = run("speedometer-error", {
      originalDiameterIn: "25",
      newDiameterIn: "26",
      indicatedSpeed: "60",
    });
    expect(r.actualSpeed as number).toBeCloseTo(62.4, 3);
    expect(r.errorPercent as number).toBeCloseTo(4, 3);
  });

  it("trip-fuel: gallons needed for a trip", () => {
    const r = run("trip-fuel", { distanceMiles: "450", mpg: "30" });
    expect(r.gallonsNeeded as number).toBeCloseTo(15, 4);
  });

  it("oil-change-cost: changes per year and annual cost", () => {
    const r = run("oil-change-cost", {
      annualMiles: "15000",
      intervalMiles: "5000",
      costPerChange: "60",
    });
    expect(r.changesPerYear as number).toBeCloseTo(3, 4);
    expect(r.annualCost as number).toBeCloseTo(180, 2);
  });

  it("oil-change-cost: interval defaults to 5000", () => {
    const r = run("oil-change-cost", {
      annualMiles: "15000",
      costPerChange: "60",
    });
    expect(r.changesPerYear as number).toBeCloseTo(3, 4);
  });

  it("car-payment-affordability: percent of income defaults to 15", () => {
    const r = run("car-payment-affordability", { monthlyIncome: "5000" });
    expect(r.maxCarPayment as number).toBeCloseTo(750, 2);
    const custom = run("car-payment-affordability", {
      monthlyIncome: "5000",
      percentOfIncome: "20",
    });
    expect(custom.maxCarPayment as number).toBeCloseTo(1000, 2);
  });

  it("ev-range: battery times efficiency, default 3.5", () => {
    const r = run("ev-range", { batteryKwh: "75" });
    expect(r.rangeMiles as number).toBeCloseTo(262.5, 2);
    const custom = run("ev-range", {
      batteryKwh: "75",
      efficiencyMilesPerKwh: "4",
    });
    expect(custom.rangeMiles as number).toBeCloseTo(300, 2);
  });

  it("horsepower-to-torque: torque from HP and RPM", () => {
    const r = run("horsepower-to-torque", { horsepower: "300", rpm: "5252" });
    expect(r.torqueLbFt as number).toBeCloseTo(300, 3);
  });

  it("returns NaN on missing or zero-divide inputs", () => {
    expect(Number.isNaN(run("mpg-to-l100km", { mpg: "0" }).litersPer100km as number)).toBe(true);
    expect(Number.isNaN(run("mpg-to-l100km", { mpg: "" }).litersPer100km as number)).toBe(true);
    expect(Number.isNaN(run("car-cost-per-mile", { annualCosts: "9000", annualMiles: "0" }).costPerMile as number)).toBe(true);
    expect(Number.isNaN(run("trip-fuel", { distanceMiles: "450", mpg: "0" }).gallonsNeeded as number)).toBe(true);
    expect(Number.isNaN(run("horsepower-to-torque", { horsepower: "300", rpm: "0" }).torqueLbFt as number)).toBe(true);
    expect(Number.isNaN(run("speedometer-error", { originalDiameterIn: "0", newDiameterIn: "26", indicatedSpeed: "60" }).actualSpeed as number)).toBe(true);
    expect(Number.isNaN(run("car-lease-payment", { carPrice: "35000", residualPercent: "55", leaseMonths: "0" }).monthlyPayment as number)).toBe(true);
  });
});
