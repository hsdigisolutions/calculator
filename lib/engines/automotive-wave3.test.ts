import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("automotive wave3 engines", () => {
  it("fuel-cost: distance/mpg -> gallons, total, per mile", () => {
    const r = run("fuel-cost", { distance: "300", mpg: "30", fuelPrice: "4" });
    expect(r.totalCost).toBe(40);
    expect(r.gallons).toBe(10);
    expect(r.costPerMile as number).toBeCloseTo(0.1333, 4);
  });
  it("fuel-cost: zero mpg -> NaN", () => {
    expect(Number.isNaN(run("fuel-cost", { distance: "300", mpg: "0", fuelPrice: "4" }).totalCost as number)).toBe(true);
  });

  it("mpg: miles/gallons -> mpg and L/100km", () => {
    const r = run("mpg", { miles: "300", gallons: "10" });
    expect(r.mpg).toBe(30);
    expect(r.lPer100km as number).toBeCloseTo(7.84, 2);
    expect(Number.isNaN(r.costPerMile as number)).toBe(true);
  });
  it("mpg: with fuel price -> cost per mile", () => {
    const r = run("mpg", { miles: "300", gallons: "10", fuelPrice: "4" });
    expect(r.costPerMile as number).toBeCloseTo(0.1333, 4);
  });

  it("ev-savings: gas vs electric annual cost", () => {
    const r = run("ev-savings", {
      annualMiles: "12000",
      gasMpg: "30",
      gasPrice: "4",
      evEfficiency: "3.5",
      electricityRate: "0.15",
    });
    expect(r.gasCost as number).toBeCloseTo(1600, 2);
    expect(r.evCost as number).toBeCloseTo(514.29, 2);
    expect(r.annualSavings as number).toBeCloseTo(1085.71, 2);
  });

  it("tire-size: 225/45R17 -> diameter, sidewall, revs", () => {
    const r = run("tire-size", { width: "225", aspectRatio: "45", rimDiameter: "17" });
    expect(r.diameter as number).toBeCloseTo(24.97, 2);
    expect(r.sidewall).toBe(101.25);
    expect(r.revsPerMile as number).toBeCloseTo(807.6, 0);
  });

  it("car-loan: amortized monthly payment", () => {
    const r = run("car-loan", {
      vehiclePrice: "30000",
      downPayment: "5000",
      tradeIn: "0",
      rate: "6",
      term: "60",
    });
    expect(r.monthlyPayment as number).toBeCloseTo(483.32, 2);
    expect(r.amountFinanced).toBe(25000);
    expect(r.totalInterest as number).toBeCloseTo(3999.2, 1);
  });
  it("car-loan: zero interest -> principal / term", () => {
    const r = run("car-loan", {
      vehiclePrice: "12000",
      downPayment: "0",
      tradeIn: "0",
      rate: "0",
      term: "48",
    });
    expect(r.monthlyPayment).toBe(250);
    expect(r.totalInterest as number).toBeCloseTo(0, 6);
  });
});
