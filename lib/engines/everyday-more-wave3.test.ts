import { describe, it, expect } from "vitest";
import { everydayMoreEngines } from "./everyday-more-wave3";

const run = (slug: string, inputs: Record<string, string>) =>
  everydayMoreEngines[slug](inputs);

describe("everyday more wave3 engines", () => {
  it("electricity-bill: kWh and cost", () => {
    const r = run("electricity-bill", {
      watts: "1000",
      hoursPerDay: "5",
      daysPerMonth: "30",
      rate: "0.15",
    });
    expect(r.monthlyKwh).toBe(150);
    expect(r.monthlyCost).toBe(22.5);
    expect(r.annualCost as number).toBeCloseTo(270, 6);
  });

  it("electricity-bill: invalid rate -> NaN", () => {
    expect(
      Number.isNaN(
        run("electricity-bill", {
          watts: "1000",
          hoursPerDay: "5",
          daysPerMonth: "30",
          rate: "",
        }).monthlyCost as number
      )
    ).toBe(true);
  });

  it("subscription-cost: annual, total, daily", () => {
    const r = run("subscription-cost", { monthlyTotal: "50", years: "3" });
    expect(r.annualCost).toBe(600);
    expect(r.totalCost).toBe(1800);
    expect(r.dailyCost as number).toBeCloseTo(1.6438, 3);
  });

  it("commute-cost: weekly, annual, daily", () => {
    const r = run("commute-cost", {
      milesPerDay: "40",
      daysPerWeek: "5",
      mpg: "25",
      fuelPrice: "4",
    });
    expect(r.weeklyCost).toBe(32);
    expect(r.annualCost).toBe(1664);
    expect(r.dailyCost as number).toBeCloseTo(6.4, 6);
  });

  it("commute-cost: zero mpg -> NaN weekly", () => {
    expect(
      Number.isNaN(
        run("commute-cost", {
          milesPerDay: "40",
          daysPerWeek: "5",
          mpg: "0",
          fuelPrice: "4",
        }).weeklyCost as number
      )
    ).toBe(true);
  });

  it("coffee-cost: annual, monthly, ten-year", () => {
    const r = run("coffee-cost", { cupsPerDay: "2", pricePerCup: "5" });
    expect(r.annualCost).toBe(3650);
    expect(r.monthlyCost as number).toBeCloseTo(304.1667, 3);
    expect(r.tenYearCost).toBe(36500);
  });

  it("wedding-budget: total and per guest", () => {
    const r = run("wedding-budget", {
      guestCount: "100",
      perGuestCost: "150",
      venueCost: "5000",
      extras: "3000",
    });
    expect(r.totalBudget).toBe(23000);
    expect(r.perGuest).toBe(230);
  });

  it("gift-budget: total", () => {
    const r = run("gift-budget", { numberOfPeople: "8", budgetPerPerson: "25" });
    expect(r.totalBudget).toBe(200);
  });
});
