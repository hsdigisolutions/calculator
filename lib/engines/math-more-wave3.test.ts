import { describe, it, expect } from "vitest";
import { mathMoreEngines } from "./math-more-wave3";

const run = (slug: string, inputs: Record<string, string>) =>
  mathMoreEngines[slug](inputs);

describe("math more wave3 engines", () => {
  it("percent-error: 9.8 vs 9.81", () => {
    const r = run("percent-error", { experimental: "9.8", theoretical: "9.81" });
    expect(r.percentError as number).toBeCloseTo(0.102, 2);
    expect(r.absoluteError as number).toBeCloseTo(0.01, 6);
  });
  it("percent-error: zero theoretical -> NaN", () => {
    const r = run("percent-error", { experimental: "5", theoretical: "0" });
    expect(Number.isNaN(r.percentError as number)).toBe(true);
  });

  it("scientific-notation of 0", () => {
    const r = run("scientific-notation", { number: "0" });
    expect(r.mantissa).toBe(0);
    expect(r.exponent).toBe(0);
    expect(r.notation).toBe("0");
  });

  it("slope through (0,0) and (2,4)", () => {
    const r = run("slope", { x1: "0", y1: "0", x2: "2", y2: "4" });
    expect(r.slope).toBe(2);
    expect(r.yIntercept).toBe(0);
  });
  it("slope: vertical line -> NaN", () => {
    const r = run("slope", { x1: "1", y1: "0", x2: "1", y2: "5" });
    expect(Number.isNaN(r.slope as number)).toBe(true);
  });

  it("distance between (0,0) and (3,4)", () => {
    const r = run("distance-two-points", { x1: "0", y1: "0", x2: "3", y2: "4" });
    expect(r.distance).toBe(5);
    expect(r.deltaX).toBe(3);
    expect(r.deltaY).toBe(4);
  });

  it("midpoint of (0,0) and (4,6)", () => {
    const r = run("midpoint", { x1: "0", y1: "0", x2: "4", y2: "6" });
    expect(r.midX).toBe(2);
    expect(r.midY).toBe(3);
    expect(r.midpoint).toBe("(2, 3)");
  });

  it("arithmetic sequence: a=2, d=3, n=5", () => {
    const r = run("arithmetic-sequence", {
      firstTerm: "2",
      commonDifference: "3",
      n: "5",
    });
    expect(r.nthTerm).toBe(14);
    expect(r.sum).toBe(40);
  });
});
