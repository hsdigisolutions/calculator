import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("logistics wave3 engines", () => {
  it("dimensional-weight = L*W*H / divisor", () => {
    const r = run("dimensional-weight", {
      length: "12",
      width: "12",
      height: "12",
      divisor: "139",
    });
    expect(r.dimWeight as number).toBeCloseTo(12.43, 2);
    expect(r.billableWeight as number).toBeCloseTo(12.43, 2);
  });

  it("dimensional-weight: billable is the greater of actual and dimensional", () => {
    const r = run("dimensional-weight", {
      length: "12",
      width: "12",
      height: "12",
      divisor: "139",
      actualWeight: "20",
    });
    expect(r.billableWeight as number).toBeCloseTo(20, 5);
  });

  it("dimensional-weight: invalid dimension -> NaN", () => {
    const r = run("dimensional-weight", { length: "", width: "12", height: "12" });
    expect(Number.isNaN(r.dimWeight as number)).toBe(true);
  });

  it("cbm = (L*W*H)/1,000,000 * quantity", () => {
    const r = run("cbm", {
      length: "100",
      width: "100",
      height: "100",
      quantity: "1",
    });
    expect(r.cbm as number).toBeCloseTo(1, 6);
    expect(r.volumetricWeight as number).toBeCloseTo(167, 4);
  });

  it("pallet-count rounds up", () => {
    const r = run("pallet-count", {
      totalUnits: "500",
      unitsPerLayer: "10",
      layersPerPallet: "5",
    });
    expect(r.unitsPerPallet).toBe(50);
    expect(r.pallets).toBe(10);
  });

  it("pallet-count: zero capacity -> NaN", () => {
    const r = run("pallet-count", {
      totalUnits: "500",
      unitsPerLayer: "0",
      layersPerPallet: "5",
    });
    expect(Number.isNaN(r.pallets as number)).toBe(true);
  });

  it("freight-density = weight / cubic feet", () => {
    const r = run("freight-density", {
      weight: "30",
      length: "12",
      width: "12",
      height: "12",
    });
    expect(r.cubicFeet as number).toBeCloseTo(1, 6);
    expect(r.density as number).toBeCloseTo(30, 5);
  });

  it("landed-cost sums product, freight, duty and insurance", () => {
    const r = run("landed-cost", {
      productCost: "1000",
      freight: "200",
      dutyPercent: "5",
      insurance: "50",
    });
    expect(r.duty as number).toBeCloseTo(50, 5);
    expect(r.landedCost as number).toBeCloseTo(1300, 5);
  });

  it("container-loading: 40ft needs 2 containers for 100 CBM", () => {
    const r = run("container-loading", {
      cargoCbm: "100",
      containerType: "40ft",
    });
    expect(r.containersNeeded).toBe(2);
    expect(r.containerCapacity).toBe(67);
    expect(r.utilizationPercent as number).toBeCloseTo(74.63, 1);
  });
});
