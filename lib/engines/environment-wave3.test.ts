import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("environment wave3 engines", () => {
  it("solar-savings: annual kWh and savings", () => {
    const r = run("solar-savings", {
      systemSizeKw: "5",
      sunHours: "5",
      electricityRate: "0.15",
    });
    expect(r.annualKwh).toBe(9125);
    expect(r.annualSavings as number).toBeCloseTo(1368.75, 6);
    expect(r.twentyFiveYear as number).toBeCloseTo(34218.75, 4);
  });

  it("solar-savings: invalid rate -> NaN", () => {
    expect(
      Number.isNaN(
        run("solar-savings", { systemSizeKw: "5", sunHours: "5", electricityRate: "" })
          .annualSavings as number,
      ),
    ).toBe(true);
  });

  it("ev-charging-cost: cost and kWh used", () => {
    const r = run("ev-charging-cost", {
      batteryKwh: "60",
      chargePercent: "80",
      electricityRate: "0.15",
    });
    expect(r.cost as number).toBeCloseTo(7.2, 6);
    expect(r.kwhUsed).toBe(48);
  });

  it("carbon-footprint: totals from car + home", () => {
    const r = run("carbon-footprint", {
      annualMiles: "12000",
      mpg: "25",
      monthlyKwh: "900",
    });
    expect(r.carTons as number).toBeCloseTo(4.26576, 4);
    expect(r.homeTons as number).toBeCloseTo(4.5036, 4);
    expect(r.totalTons as number).toBeCloseTo(8.76936, 4);
  });

  it("carbon-footprint: zero mpg -> NaN", () => {
    expect(
      Number.isNaN(
        run("carbon-footprint", { annualMiles: "12000", mpg: "0", monthlyKwh: "900" })
          .totalTons as number,
      ),
    ).toBe(true);
  });

  it("flight-emissions: co2 from distance and passengers", () => {
    const r = run("flight-emissions", { distanceKm: "1000", passengers: "2" });
    expect(r.co2Kg as number).toBeCloseTo(230, 6);
    expect(r.co2Tons as number).toBeCloseTo(0.23, 6);
  });

  it("home-energy-cost: monthly and annual cost", () => {
    const r = run("home-energy-cost", { watts: "100", hoursPerDay: "5", rate: "0.15" });
    expect(r.monthlyKwh as number).toBeCloseTo(15, 6);
    expect(r.monthlyCost as number).toBeCloseTo(2.25, 6);
    expect(r.annualCost as number).toBeCloseTo(27, 6);
  });

  it("water-footprint: weekly, annual litres and gallons", () => {
    const r = run("water-footprint", {
      showerMinutes: "8",
      showersPerWeek: "7",
      flowRate: "9",
    });
    expect(r.weeklyLitres).toBe(504);
    expect(r.annualLitres).toBe(26208);
    expect(r.annualGallons as number).toBeCloseTo(6924.17, 1);
  });
});
