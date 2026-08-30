import { describe, it, expect } from "vitest";
import { constructionR4Engines } from "./construction-r4-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  constructionR4Engines[id](inputs);

describe("construction r4 wave3 engines", () => {
  it("gravel: 10x10x4in, no waste", () => {
    const r = run("gravel", {
      length: "10",
      width: "10",
      depth: "4",
      wastePercent: "0",
    });
    // 10*10*(4/12)=33.333 ft³; /27 = 1.2346 yd³
    expect(r.cubicYards as number).toBeCloseTo(1.2346, 3);
    expect(r.tons as number).toBeCloseTo(1.7284, 3);
  });
  it("gravel: waste 10% increases volume", () => {
    const r = run("gravel", {
      length: "10",
      width: "10",
      depth: "4",
      wastePercent: "10",
    });
    expect(r.cubicYards as number).toBeCloseTo(1.358, 3);
  });
  it("gravel: blank waste defaults to 0", () => {
    const r = run("gravel", { length: "10", width: "10", depth: "4", wastePercent: "" });
    expect(r.cubicYards as number).toBeCloseTo(1.2346, 3);
  });
  it("gravel: zero dims -> NaN", () => {
    const r = run("gravel", { length: "0", width: "10", depth: "4", wastePercent: "0" });
    expect(Number.isNaN(r.cubicYards as number)).toBe(true);
  });

  it("mulch: 20x10x3in", () => {
    const r = run("mulch", { length: "20", width: "10", depth: "3" });
    // 20*10*0.25 = 50 ft³; /27 = 1.8519 yd³; ceil(50/2)=25 bags
    expect(r.cubicYards as number).toBeCloseTo(1.8519, 3);
    expect(r.bags2cuft).toBe(25);
  });
  it("mulch: negative depth -> NaN", () => {
    const r = run("mulch", { length: "20", width: "10", depth: "-3" });
    expect(Number.isNaN(r.cubicYards as number)).toBe(true);
  });

  it("rebar: 10x10 slab, 12in spacing", () => {
    const r = run("rebar", { slabLength: "10", slabWidth: "10", spacing: "12" });
    // barsAlongWidth = floor(120/12)+1 = 11; barsAlongLength = 11; total 22
    expect(r.totalBars).toBe(22);
    // 11*10 + 11*10 = 220
    expect(r.totalLengthFt).toBe(220);
  });
  it("rebar: zero spacing -> NaN", () => {
    const r = run("rebar", { slabLength: "10", slabWidth: "10", spacing: "0" });
    expect(Number.isNaN(r.totalBars as number)).toBe(true);
  });

  it("drywall: 1000 sq ft, default sheet", () => {
    const r = run("drywall", { wallArea: "1000", sheetWidth: "4", sheetHeight: "8" });
    // sheetArea 32; 1000/32*1.1 = 34.375 -> ceil 35
    expect(r.sheets).toBe(35);
    expect(r.screwsApprox).toBe(35 * 32);
  });
  it("drywall: blank sheet dims use defaults", () => {
    const r = run("drywall", { wallArea: "1000", sheetWidth: "", sheetHeight: "" });
    expect(r.sheets).toBe(35);
  });

  it("roofing: 2000 sq ft, defaults", () => {
    const r = run("roofing", { roofArea: "2000", pitchFactor: "1.05", wastePercent: "10" });
    // adjusted = 2000*1.05*1.1 = 2310; squares = 23.1; bundles = ceil(69.3)=70
    expect(r.squares as number).toBeCloseTo(23.1, 5);
    expect(r.bundles).toBe(70);
  });
  it("roofing: zero area -> NaN", () => {
    const r = run("roofing", { roofArea: "0", pitchFactor: "1.05", wastePercent: "10" });
    expect(Number.isNaN(r.squares as number)).toBe(true);
  });

  it("insulation: 800 sq ft, 40 per bag", () => {
    const r = run("insulation", { area: "800", batCoverage: "40" });
    expect(r.bags).toBe(20);
  });
  it("insulation: 810 sq ft rounds up", () => {
    const r = run("insulation", { area: "810", batCoverage: "40" });
    expect(r.bags).toBe(21);
  });

  it("deck-board: 16x12 deck, defaults", () => {
    const r = run("deck-board", {
      deckLength: "16",
      deckWidth: "12",
      boardWidth: "5.5",
      boardLength: "8",
      gap: "0.125",
    });
    // effWidth = (5.625)/12 = 0.46875 ft; rows = ceil(12/0.46875)=ceil(25.6)=26
    // boardsPerRow = ceil(16/8)=2; boards=52; linealFeet = 26*16=416
    expect(r.boards).toBe(52);
    expect(r.linealFeet).toBe(416);
  });
  it("deck-board: zero width -> NaN", () => {
    const r = run("deck-board", { deckLength: "16", deckWidth: "0" });
    expect(Number.isNaN(r.boards as number)).toBe(true);
  });

  it("fence: 100 ft, 8ft spacing", () => {
    const r = run("fence", { fenceLength: "100", postSpacing: "8" });
    // sections = ceil(12.5)=13; posts=14; pickets=ceil(100/0.5)=200
    expect(r.sections).toBe(13);
    expect(r.posts).toBe(14);
    expect(r.pickets).toBe(200);
  });
  it("fence: blank spacing defaults to 8", () => {
    const r = run("fence", { fenceLength: "100", postSpacing: "" });
    expect(r.posts).toBe(14);
  });

  it("flooring: 12x10 room, defaults", () => {
    const r = run("flooring", {
      roomLength: "12",
      roomWidth: "10",
      boxCoverage: "20",
      wastePercent: "10",
    });
    // area=120; totalSqFt=132; boxes=ceil(132/20)=7
    expect(r.totalSqFt as number).toBeCloseTo(132, 5);
    expect(r.boxes).toBe(7);
  });
  it("flooring: zero dims -> NaN", () => {
    const r = run("flooring", { roomLength: "0", roomWidth: "10" });
    expect(Number.isNaN(r.boxes as number)).toBe(true);
  });

  it("brick: 200 sq ft modular", () => {
    const r = run("brick", { wallArea: "200", brickType: "modular" });
    // 200*6.86 = 1372; withWaste ceil(1440.6)=1441
    expect(r.bricks).toBe(1372);
    expect(r.bricksWithWaste).toBe(1441);
  });
  it("brick: standard type", () => {
    const r = run("brick", { wallArea: "200", brickType: "standard" });
    // 200*6.55=1310
    expect(r.bricks).toBe(1310);
  });
  it("brick: invalid type -> NaN", () => {
    const r = run("brick", { wallArea: "200", brickType: "nope" });
    expect(Number.isNaN(r.bricks as number)).toBe(true);
  });
});
