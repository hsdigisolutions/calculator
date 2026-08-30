import type { ComputeFn } from "../types";
import { num } from "../utils";

/* ------------------------------------------------------------------ *
 * Construction / materials calculators (Wave 3, Round 4).
 * Pure compute engines keyed by calculator id. No formatting.
 * Invalid / impossible inputs yield NaN (rendered as "—" by the UI).
 * US units throughout (ft, in, sq ft, cu yd).
 * ------------------------------------------------------------------ */

/** Resolve a numeric input, falling back to a default when blank/invalid. */
function withDefault(v: string | undefined, fallback: number): number {
  const n = num(v);
  return Number.isFinite(n) ? n : fallback;
}

// 1. Gravel — volume in cubic yards + tonnage, with optional waste margin.
const gravel: ComputeFn = (i) => {
  const length = num(i.length);
  const width = num(i.width);
  const depth = num(i.depth);
  const waste = withDefault(i.wastePercent, 0);
  if (!(length > 0) || !(width > 0) || !(depth > 0))
    return { cubicYards: NaN, tons: NaN };
  const cubicFeet = length * width * (depth / 12);
  const cubicYards = (cubicFeet / 27) * (1 + waste / 100);
  const tons = cubicYards * 1.4;
  return { cubicYards, tons };
};

// 2. Mulch — cubic yards + number of 2-cubic-foot bags.
const mulch: ComputeFn = (i) => {
  const length = num(i.length);
  const width = num(i.width);
  const depth = num(i.depth);
  if (!(length > 0) || !(width > 0) || !(depth > 0))
    return { cubicYards: NaN, bags2cuft: NaN };
  const cubicFeet = length * width * (depth / 12);
  const cubicYards = cubicFeet / 27;
  const bags2cuft = Math.ceil(cubicFeet / 2);
  return { cubicYards, bags2cuft };
};

// 3. Rebar — grid of bars both ways across a slab.
const rebar: ComputeFn = (i) => {
  const slabLength = num(i.slabLength);
  const slabWidth = num(i.slabWidth);
  const spacing = num(i.spacing);
  if (!(slabLength > 0) || !(slabWidth > 0) || !(spacing > 0))
    return { totalBars: NaN, totalLengthFt: NaN };
  const barsAlongWidth = Math.floor((slabLength * 12) / spacing) + 1;
  const barsAlongLength = Math.floor((slabWidth * 12) / spacing) + 1;
  const totalBars = barsAlongWidth + barsAlongLength;
  const totalLengthFt =
    barsAlongWidth * slabWidth + barsAlongLength * slabLength;
  return { totalBars, totalLengthFt };
};

// 4. Drywall — 4x8 sheets with 10% waste + approximate screw count.
const drywall: ComputeFn = (i) => {
  const wallArea = num(i.wallArea);
  const sheetWidth = withDefault(i.sheetWidth, 4);
  const sheetHeight = withDefault(i.sheetHeight, 8);
  if (!(wallArea > 0) || !(sheetWidth > 0) || !(sheetHeight > 0))
    return { sheets: NaN, screwsApprox: NaN };
  const sheetArea = sheetWidth * sheetHeight;
  const sheets = Math.ceil((wallArea / sheetArea) * 1.1);
  const screwsApprox = sheets * 32;
  return { sheets, screwsApprox };
};

// 5. Roofing — squares + shingle bundles from area, pitch and waste.
const roofing: ComputeFn = (i) => {
  const roofArea = num(i.roofArea);
  const pitchFactor = withDefault(i.pitchFactor, 1.05);
  const waste = withDefault(i.wastePercent, 10);
  if (!(roofArea > 0) || !(pitchFactor > 0))
    return { squares: NaN, bundles: NaN };
  const adjustedArea = roofArea * pitchFactor * (1 + waste / 100);
  const squares = adjustedArea / 100;
  const bundles = Math.ceil(squares * 3);
  return { squares, bundles };
};

// 6. Insulation — number of batt bags for a given area.
const insulation: ComputeFn = (i) => {
  const area = num(i.area);
  const batCoverage = withDefault(i.batCoverage, 40);
  if (!(area > 0) || !(batCoverage > 0)) return { bags: NaN };
  const bags = Math.ceil(area / batCoverage);
  return { bags };
};

// 7. Deck board — boards + total lineal feet.
const deckBoard: ComputeFn = (i) => {
  const deckLength = num(i.deckLength);
  const deckWidth = num(i.deckWidth);
  const boardWidth = withDefault(i.boardWidth, 5.5);
  const boardLength = withDefault(i.boardLength, 8);
  const gap = withDefault(i.gap, 0.125);
  if (
    !(deckLength > 0) ||
    !(deckWidth > 0) ||
    !(boardWidth > 0) ||
    !(boardLength > 0)
  )
    return { boards: NaN, linealFeet: NaN };
  const effectiveBoardWidthFt = (boardWidth + gap) / 12;
  const rows = Math.ceil(deckWidth / effectiveBoardWidthFt);
  const boardsPerRow = Math.ceil(deckLength / boardLength);
  const boards = rows * boardsPerRow;
  const linealFeet = rows * deckLength;
  return { boards, linealFeet };
};

// 8. Fence — posts, sections and pickets.
const fence: ComputeFn = (i) => {
  const fenceLength = num(i.fenceLength);
  const postSpacing = withDefault(i.postSpacing, 8);
  if (!(fenceLength > 0) || !(postSpacing > 0))
    return { posts: NaN, sections: NaN, pickets: NaN };
  const sections = Math.ceil(fenceLength / postSpacing);
  const posts = sections + 1;
  const pickets = Math.ceil(fenceLength / 0.5);
  return { posts, sections, pickets };
};

// 9. Flooring — boxes + total square feet with waste.
const flooring: ComputeFn = (i) => {
  const roomLength = num(i.roomLength);
  const roomWidth = num(i.roomWidth);
  const boxCoverage = withDefault(i.boxCoverage, 20);
  const waste = withDefault(i.wastePercent, 10);
  if (!(roomLength > 0) || !(roomWidth > 0) || !(boxCoverage > 0))
    return { boxes: NaN, totalSqFt: NaN };
  const area = roomLength * roomWidth;
  const totalSqFt = area * (1 + waste / 100);
  const boxes = Math.ceil(totalSqFt / boxCoverage);
  return { boxes, totalSqFt };
};

// 10. Brick — bricks + bricks with 5% waste, by brick type.
const BRICK_PER_SQFT: Record<string, number> = {
  modular: 6.86,
  standard: 6.55,
  queen: 5.76,
};

const brick: ComputeFn = (i) => {
  const wallArea = num(i.wallArea);
  const perSqFt = BRICK_PER_SQFT[String(i.brickType || "modular")];
  if (!(wallArea > 0) || !perSqFt)
    return { bricks: NaN, bricksWithWaste: NaN };
  const bricks = Math.ceil(wallArea * perSqFt);
  const bricksWithWaste = Math.ceil(bricks * 1.05);
  return { bricks, bricksWithWaste };
};

export const constructionR4Engines: Record<string, ComputeFn> = {
  gravel,
  mulch,
  rebar,
  drywall,
  roofing,
  insulation,
  "deck-board": deckBoard,
  fence,
  flooring,
  brick,
};
