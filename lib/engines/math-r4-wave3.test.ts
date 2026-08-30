import { describe, it, expect } from "vitest";
import { mathR4Engines } from "./math-r4-wave3";

const run = (slug: string, inputs: Record<string, string>) =>
  mathR4Engines[slug](inputs);

describe("math r4 wave3 engines", () => {
  it("quadratic-formula: x² − 5x + 6 = 0 -> roots 3 and 2", () => {
    const r = run("quadratic-formula", { a: "1", b: "-5", c: "6" });
    expect(r.root1).toBe(3);
    expect(r.root2).toBe(2);
    expect(r.discriminant).toBe(1);
    expect(r.nature).toBe("Two real roots");
  });
  it("quadratic-formula: one real root (discriminant 0)", () => {
    const r = run("quadratic-formula", { a: "1", b: "-2", c: "1" });
    expect(r.root1).toBe(1);
    expect(r.root2).toBe(1);
    expect(r.discriminant).toBe(0);
    expect(r.nature).toBe("One real root");
  });
  it("quadratic-formula: complex roots -> NaN", () => {
    const r = run("quadratic-formula", { a: "1", b: "0", c: "1" });
    expect(Number.isNaN(r.root1 as number)).toBe(true);
    expect(r.nature).toBe("Complex roots");
  });
  it("quadratic-formula: a = 0 -> NaN", () => {
    const r = run("quadratic-formula", { a: "0", b: "2", c: "1" });
    expect(Number.isNaN(r.root1 as number)).toBe(true);
  });

  it("pythagorean: 3, 4 -> 5", () => {
    const r = run("pythagorean", { sideA: "3", sideB: "4" });
    expect(r.hypotenuse).toBe(5);
  });
  it("pythagorean: negative -> NaN", () => {
    const r = run("pythagorean", { sideA: "-3", sideB: "4" });
    expect(Number.isNaN(r.hypotenuse as number)).toBe(true);
  });

  it("circle: radius 2", () => {
    const r = run("circle", { radius: "2" });
    expect(r.area as number).toBeCloseTo(12.566, 3);
    expect(r.circumference as number).toBeCloseTo(12.566, 3);
    expect(r.diameter).toBe(4);
  });
  it("circle: negative radius -> NaN", () => {
    const r = run("circle", { radius: "-1" });
    expect(Number.isNaN(r.area as number)).toBe(true);
  });

  it("triangle-area: base 10, height 4 -> 20", () => {
    const r = run("triangle-area", { base: "10", height: "4" });
    expect(r.area).toBe(20);
  });
  it("triangle-area: negative -> NaN", () => {
    const r = run("triangle-area", { base: "-10", height: "4" });
    expect(Number.isNaN(r.area as number)).toBe(true);
  });

  it("permutations: 5P2 -> 20", () => {
    const r = run("permutations", { n: "5", r: "2" });
    expect(r.permutations).toBe(20);
  });
  it("permutations: nPn = n!", () => {
    const r = run("permutations", { n: "4", r: "4" });
    expect(r.permutations).toBe(24);
  });
  it("permutations: r > n -> NaN", () => {
    const r = run("permutations", { n: "3", r: "5" });
    expect(Number.isNaN(r.permutations as number)).toBe(true);
  });
  it("permutations: non-integer -> NaN", () => {
    const r = run("permutations", { n: "5.5", r: "2" });
    expect(Number.isNaN(r.permutations as number)).toBe(true);
  });

  it("prime-factorization: 60 -> 2 × 2 × 3 × 5", () => {
    const r = run("prime-factorization", { number: "60" });
    expect(r.factorization).toBe("2 × 2 × 3 × 5");
    expect(r.factorCount).toBe(4);
  });
  it("prime-factorization: prime 13", () => {
    const r = run("prime-factorization", { number: "13" });
    expect(r.factorization).toBe("13");
    expect(r.factorCount).toBe(1);
  });
  it("prime-factorization: below 2 -> empty", () => {
    const r = run("prime-factorization", { number: "1" });
    expect(Number.isNaN(r.factorCount as number)).toBe(true);
  });

  it("cube-root: 27 -> 3", () => {
    const r = run("cube-root", { number: "27" });
    expect(r.cubeRoot as number).toBeCloseTo(3, 10);
  });
  it("cube-root: negative -8 -> -2", () => {
    const r = run("cube-root", { number: "-8" });
    expect(r.cubeRoot as number).toBeCloseTo(-2, 10);
  });

  it("proportion: 2/4 = 3/x -> x = 6", () => {
    const r = run("proportion", { a: "2", b: "4", c: "3" });
    expect(r.x).toBe(6);
  });
  it("proportion: a = 0 -> NaN", () => {
    const r = run("proportion", { a: "0", b: "4", c: "3" });
    expect(Number.isNaN(r.x as number)).toBe(true);
  });

  it("rounding: 3.14159 to 2 places", () => {
    const r = run("rounding", { number: "3.14159", decimalPlaces: "2" });
    expect(r.rounded).toBe(3.14);
    expect(r.roundedUp).toBe(3.15);
    expect(r.roundedDown).toBe(3.14);
  });
  it("rounding: default 0 places", () => {
    const r = run("rounding", { number: "2.7", decimalPlaces: "" });
    expect(r.rounded).toBe(3);
    expect(r.roundedUp).toBe(3);
    expect(r.roundedDown).toBe(2);
  });
  it("rounding: negative places -> NaN", () => {
    const r = run("rounding", { number: "2.7", decimalPlaces: "-1" });
    expect(Number.isNaN(r.rounded as number)).toBe(true);
  });

  it("linear-interpolation: midpoint", () => {
    const r = run("linear-interpolation", {
      x1: "0",
      y1: "0",
      x2: "10",
      y2: "100",
      x: "5",
    });
    expect(r.y).toBe(50);
  });
  it("linear-interpolation: x2 == x1 -> NaN", () => {
    const r = run("linear-interpolation", {
      x1: "5",
      y1: "0",
      x2: "5",
      y2: "100",
      x: "5",
    });
    expect(Number.isNaN(r.y as number)).toBe(true);
  });
});
