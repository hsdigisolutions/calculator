import { describe, it, expect } from "vitest";
import { constructionR8Engines } from "./construction-r8-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  constructionR8Engines[id](inputs);

describe("construction r8 wave3 engines", () => {
  it("stair: steps, actual riser height and total run", () => {
    const r = run("stair", {
      totalRiseIn: "45",
      riserHeightIn: "7.5",
      treadDepthIn: "10",
    });
    expect(r.numberOfSteps).toBe(6);
    expect(r.actualRiserHeightIn as number).toBeCloseTo(7.5, 5);
    expect(r.totalRunIn as number).toBeCloseTo(50, 5);
  });

  it("stair: uneven rise rounds step count up and adjusts riser", () => {
    const r = run("stair", { totalRiseIn: "44" });
    // 44 / 7.5 = 5.87 → 6 steps; 44/6 = 7.333 riser; run = 5 * 10 = 50
    expect(r.numberOfSteps).toBe(6);
    expect(r.actualRiserHeightIn as number).toBeCloseTo(7.3333, 3);
    expect(r.totalRunIn as number).toBeCloseTo(50, 5);
  });

  it("wallpaper: rolls from strips per roll and strips needed", () => {
    const r = run("wallpaper", {
      wallWidthFt: "15",
      wallHeightFt: "8",
      rollWidthFt: "1.73",
      rollLengthFt: "33",
    });
    // stripsPerRoll = floor(33/8) = 4; stripsNeeded = ceil(15/1.73) = 9; rolls = ceil(9/4) = 3
    expect(r.stripsPerRoll).toBe(4);
    expect(r.stripsNeeded).toBe(9);
    expect(r.rollsNeeded).toBe(3);
  });

  it("paver: pavers needed with waste margin", () => {
    const r = run("paver", {
      areaSqFt: "100",
      paverLengthIn: "12",
      paverWidthIn: "12",
      wastePercent: "5",
    });
    // paver area = 144/144 = 1 sqft; 100/1 * 1.05 = 105
    expect(r.paversNeeded).toBe(105);
  });

  it("topsoil: cubic yards and cubic feet", () => {
    const r = run("topsoil", { lengthFt: "10", widthFt: "10", depthIn: "6" });
    // 10*10*0.5 = 50 ft3; /27 = 1.851 yd3
    expect(r.cubicFeet as number).toBeCloseTo(50, 5);
    expect(r.cubicYards as number).toBeCloseTo(1.8519, 3);
  });

  it("sod: area, rolls and pallets", () => {
    const r = run("sod", { lengthFt: "30", widthFt: "30" });
    // area = 900; rolls = ceil(900/10) = 90; pallets = ceil(900/450) = 2
    expect(r.areaSqFt as number).toBeCloseTo(900, 5);
    expect(r.rollsNeeded).toBe(90);
    expect(r.pallets).toBe(2);
  });

  it("board-foot: volume of lumber for a quantity", () => {
    const r = run("board-foot", {
      thicknessIn: "2",
      widthIn: "6",
      lengthFt: "8",
      quantity: "10",
    });
    // (2*6*96)/144 * 10 = 8 * 10 = 80
    expect(r.boardFeet as number).toBeCloseTo(80, 5);
  });

  it("board-foot: quantity defaults to 1", () => {
    const r = run("board-foot", { thicknessIn: "2", widthIn: "6", lengthFt: "8" });
    expect(r.boardFeet as number).toBeCloseTo(8, 5);
  });

  it("wall-stud: studs at 16-inch spacing plus one", () => {
    const r = run("wall-stud", { wallLengthFt: "20", studSpacingIn: "16" });
    // ceil(240/16) + 1 = 15 + 1 = 16
    expect(r.studs).toBe(16);
  });

  it("excavation: cubic yards and cubic feet", () => {
    const r = run("excavation", { lengthFt: "27", widthFt: "1", depthFt: "1" });
    expect(r.cubicFeet as number).toBeCloseTo(27, 5);
    expect(r.cubicYards as number).toBeCloseTo(1, 5);
  });

  it("asphalt: tons from area, thickness and density", () => {
    const r = run("asphalt", {
      lengthFt: "100",
      widthFt: "20",
      thicknessIn: "3",
      densityLbPerCubicFt: "145",
    });
    // volume = 100*20*0.25 = 500 ft3; 500*145/2000 = 36.25 tons
    expect(r.tons as number).toBeCloseTo(36.25, 2);
  });

  it("plywood-sheet: sheets to cover an area", () => {
    const r = run("plywood-sheet", { areaSqFt: "500", sheetSqFt: "32" });
    // ceil(500/32) = 16
    expect(r.sheets).toBe(16);
  });

  it("returns NaN on missing / zero / negative inputs", () => {
    expect(Number.isNaN(run("stair", { totalRiseIn: "" }).numberOfSteps as number)).toBe(true);
    expect(Number.isNaN(run("wallpaper", { wallWidthFt: "0", wallHeightFt: "8" }).rollsNeeded as number)).toBe(true);
    expect(Number.isNaN(run("paver", { areaSqFt: "-5", paverLengthIn: "12", paverWidthIn: "12" }).paversNeeded as number)).toBe(true);
    expect(Number.isNaN(run("topsoil", { lengthFt: "10", widthFt: "10", depthIn: "" }).cubicYards as number)).toBe(true);
    expect(Number.isNaN(run("sod", { lengthFt: "0", widthFt: "30" }).rollsNeeded as number)).toBe(true);
    expect(Number.isNaN(run("board-foot", { thicknessIn: "", widthIn: "6", lengthFt: "8" }).boardFeet as number)).toBe(true);
    expect(Number.isNaN(run("wall-stud", { wallLengthFt: "-1" }).studs as number)).toBe(true);
    expect(Number.isNaN(run("excavation", { lengthFt: "10", widthFt: "10", depthFt: "0" }).cubicYards as number)).toBe(true);
    expect(Number.isNaN(run("asphalt", { lengthFt: "", widthFt: "20", thicknessIn: "3" }).tons as number)).toBe(true);
    expect(Number.isNaN(run("plywood-sheet", { areaSqFt: "0" }).sheets as number)).toBe(true);
  });
});
