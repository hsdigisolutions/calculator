import { describe, it, expect } from "vitest";
import { mathR7Engines } from "./math-r7-wave3";

const run = (slug: string, inputs: Record<string, string>) =>
  mathR7Engines[slug](inputs);

describe("math r7 wave3 engines", () => {
  it("rectangle-area: 5 × 3", () => {
    const r = run("rectangle-area", { length: "5", width: "3" });
    expect(r.area).toBe(15);
    expect(r.perimeter).toBe(16);
  });
  it("rectangle-area: invalid -> NaN", () => {
    const r = run("rectangle-area", { length: "", width: "3" });
    expect(Number.isNaN(r.area as number)).toBe(true);
  });

  it("sphere-volume: r = 3", () => {
    const r = run("sphere-volume", { radius: "3" });
    expect(r.volume as number).toBeCloseTo(113.0973, 3);
    expect(r.surfaceArea as number).toBeCloseTo(113.0973, 3);
  });
  it("sphere-volume: negative -> NaN", () => {
    const r = run("sphere-volume", { radius: "-2" });
    expect(Number.isNaN(r.volume as number)).toBe(true);
  });

  it("cylinder-volume: r = 2, h = 5", () => {
    const r = run("cylinder-volume", { radius: "2", height: "5" });
    expect(r.volume as number).toBeCloseTo(62.8319, 3);
    expect(r.surfaceArea as number).toBeCloseTo(87.9646, 3);
  });

  it("cone-volume: r = 3, h = 4", () => {
    const r = run("cone-volume", { radius: "3", height: "4" });
    expect(r.volume as number).toBeCloseTo(37.6991, 3);
  });

  it("trapezoid-area: b1 = 4, b2 = 6, h = 3", () => {
    const r = run("trapezoid-area", { base1: "4", base2: "6", height: "3" });
    expect(r.area).toBe(15);
  });

  it("harmonic-mean: 1, 2, 4", () => {
    const r = run("harmonic-mean", {
      number1: "1",
      number2: "2",
      number3: "4",
    });
    expect(r.harmonicMean as number).toBeCloseTo(1.7143, 3);
  });
  it("harmonic-mean: a zero -> NaN", () => {
    const r = run("harmonic-mean", {
      number1: "0",
      number2: "2",
      number3: "4",
    });
    expect(Number.isNaN(r.harmonicMean as number)).toBe(true);
  });

  it("exponential-growth: 1000 at 5% for 3 periods", () => {
    const r = run("exponential-growth", {
      initialValue: "1000",
      growthRatePercent: "5",
      periods: "3",
    });
    expect(r.finalValue as number).toBeCloseTo(1157.625, 3);
    expect(r.totalGrowth as number).toBeCloseTo(157.625, 3);
  });

  it("percentage-of-total: 25 of 200", () => {
    const r = run("percentage-of-total", { part: "25", whole: "200" });
    expect(r.percentage).toBe(12.5);
  });
  it("percentage-of-total: zero whole -> NaN", () => {
    const r = run("percentage-of-total", { part: "5", whole: "0" });
    expect(Number.isNaN(r.percentage as number)).toBe(true);
  });

  it("consecutive-integer-sum: 1 to 10", () => {
    const r = run("consecutive-integer-sum", {
      startNumber: "1",
      endNumber: "10",
    });
    expect(r.sum).toBe(55);
    expect(r.count).toBe(10);
  });
  it("consecutive-integer-sum: 5 to 8", () => {
    const r = run("consecutive-integer-sum", {
      startNumber: "5",
      endNumber: "8",
    });
    expect(r.sum).toBe(26);
    expect(r.count).toBe(4);
  });
  it("consecutive-integer-sum: start > end -> NaN", () => {
    const r = run("consecutive-integer-sum", {
      startNumber: "10",
      endNumber: "1",
    });
    expect(Number.isNaN(r.sum as number)).toBe(true);
  });
  it("consecutive-integer-sum: non-integer -> NaN", () => {
    const r = run("consecutive-integer-sum", {
      startNumber: "1.5",
      endNumber: "10",
    });
    expect(Number.isNaN(r.sum as number)).toBe(true);
  });

  it("golden-ratio: total = 100", () => {
    const r = run("golden-ratio", { totalLength: "100" });
    expect(r.longerSegment as number).toBeCloseTo(61.8034, 3);
    expect(r.shorterSegment as number).toBeCloseTo(38.1966, 3);
  });
  it("golden-ratio: invalid -> NaN", () => {
    const r = run("golden-ratio", { totalLength: "" });
    expect(Number.isNaN(r.longerSegment as number)).toBe(true);
  });
});
