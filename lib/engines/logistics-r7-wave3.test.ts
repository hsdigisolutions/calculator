import { describe, it, expect } from "vitest";
import { logisticsR7Engines } from "./logistics-r7-wave3";

const run = (id: string, inputs: Record<string, string>) => logisticsR7Engines[id](inputs);

describe("logistics r7 wave3 engines", () => {
  it("cost-per-mile: total cost divided by miles", () => {
    const r = run("cost-per-mile", { totalCost: "1500", miles: "600" });
    expect(r.costPerMile as number).toBeCloseTo(2.5, 4);
  });

  it("cost-per-mile: zero miles → NaN", () => {
    expect(Number.isNaN(run("cost-per-mile", { totalCost: "1500", miles: "0" }).costPerMile as number)).toBe(true);
  });

  it("fuel-surcharge: surcharge and total rate", () => {
    const r = run("fuel-surcharge", { baseRate: "1000", surchargePercent: "12" });
    expect(r.surcharge as number).toBeCloseTo(120, 4);
    expect(r.totalRate as number).toBeCloseTo(1120, 4);
  });

  it("delivery-time-estimate: driving plus rest hours", () => {
    const r = run("delivery-time-estimate", { distanceMiles: "300", avgSpeedMph: "60", restHours: "2" });
    expect(r.drivingHours as number).toBeCloseTo(5, 4);
    expect(r.totalHours as number).toBeCloseTo(7, 4);
  });

  it("delivery-time-estimate: rest defaults to 0", () => {
    const r = run("delivery-time-estimate", { distanceMiles: "300", avgSpeedMph: "60" });
    expect(r.totalHours as number).toBeCloseTo(5, 4);
  });

  it("delivery-time-estimate: zero speed → NaN", () => {
    expect(Number.isNaN(run("delivery-time-estimate", { distanceMiles: "300", avgSpeedMph: "0" }).totalHours as number)).toBe(true);
  });

  it("truck-load-utilization: used over capacity as percent", () => {
    const r = run("truck-load-utilization", { usedCubicFeet: "1500", truckCapacityCubicFeet: "3000" });
    expect(r.utilization as number).toBeCloseTo(50, 4);
  });

  it("truck-load-utilization: zero capacity → NaN", () => {
    expect(Number.isNaN(run("truck-load-utilization", { usedCubicFeet: "1500", truckCapacityCubicFeet: "0" }).utilization as number)).toBe(true);
  });

  it("warehouse-space: pallets times sq ft per pallet", () => {
    const r = run("warehouse-space", { palletCount: "100", sqFtPerPallet: "13.4" });
    expect(r.totalSqFt as number).toBeCloseTo(1340, 4);
  });

  it("warehouse-space: sqFtPerPallet defaults to 13.4", () => {
    const r = run("warehouse-space", { palletCount: "10" });
    expect(r.totalSqFt as number).toBeCloseTo(134, 4);
  });

  it("order-picking-time: items times seconds over 60", () => {
    const r = run("order-picking-time", { numberOfItems: "120", secondsPerItem: "30" });
    expect(r.totalMinutes as number).toBeCloseTo(60, 4);
  });

  it("order-picking-time: secondsPerItem defaults to 30", () => {
    const r = run("order-picking-time", { numberOfItems: "10" });
    expect(r.totalMinutes as number).toBeCloseTo(5, 4);
  });

  it("safety-stock: usage gap times lead time", () => {
    const r = run("safety-stock", { maxDailyUsage: "100", avgDailyUsage: "70", leadTimeDays: "5" });
    expect(r.safetyStock as number).toBeCloseTo(150, 4);
  });

  it("freight-class: density in lb/ft3", () => {
    const r = run("freight-class", { weightLbs: "30", lengthIn: "12", widthIn: "12", heightIn: "12" });
    expect(r.densityPcf as number).toBeCloseTo(30, 4);
  });

  it("freight-class: zero dimension → NaN", () => {
    expect(Number.isNaN(run("freight-class", { weightLbs: "30", lengthIn: "0", widthIn: "12", heightIn: "12" }).densityPcf as number)).toBe(true);
  });

  it("chargeable-weight: greater of actual and volumetric", () => {
    const r = run("chargeable-weight", { actualWeightKg: "10", lengthCm: "100", widthCm: "50", heightCm: "50", divisor: "5000" });
    expect(r.volumetricWeight as number).toBeCloseTo(50, 4);
    expect(r.chargeableWeight as number).toBeCloseTo(50, 4);
  });

  it("chargeable-weight: actual wins when heavier", () => {
    const r = run("chargeable-weight", { actualWeightKg: "80", lengthCm: "100", widthCm: "50", heightCm: "50" });
    expect(r.chargeableWeight as number).toBeCloseTo(80, 4);
  });

  it("pallet-stack-height: base plus box height times boxes", () => {
    const r = run("pallet-stack-height", { boxHeightIn: "10", boxesPerStack: "5", palletBaseIn: "6" });
    expect(r.totalHeightIn as number).toBeCloseTo(56, 4);
  });

  it("pallet-stack-height: palletBase defaults to 6", () => {
    const r = run("pallet-stack-height", { boxHeightIn: "10", boxesPerStack: "4" });
    expect(r.totalHeightIn as number).toBeCloseTo(46, 4);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("cost-per-mile", { totalCost: "", miles: "600" }).costPerMile as number)).toBe(true);
    expect(Number.isNaN(run("safety-stock", { maxDailyUsage: "100", avgDailyUsage: "70", leadTimeDays: "" }).safetyStock as number)).toBe(true);
    expect(Number.isNaN(run("chargeable-weight", { actualWeightKg: "", lengthCm: "100", widthCm: "50", heightCm: "50" }).chargeableWeight as number)).toBe(true);
  });
});
