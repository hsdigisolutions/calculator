import type { ComputeFn } from "../types";
import { num } from "../utils";

/* ------------------------------------------------------------------ *
 * Construction / materials calculators (Wave 3, Round 8).
 * Pure compute engines keyed by calculator id. No formatting.
 * Invalid / impossible inputs yield NaN (rendered as "—" by the UI).
 * US units throughout (ft, in, sq ft, cu yd, tons).
 * ------------------------------------------------------------------ */

/** Resolve a numeric input, falling back to a default when blank/invalid. */
function withDefault(v: string | undefined, fallback: number): number {
  const n = num(v);
  return Number.isFinite(n) ? n : fallback;
}

// 1. Stair — number of steps, actual riser height, total run.
const stair: ComputeFn = (i) => {
  const totalRiseIn = num(i.totalRiseIn);
  const riserHeightIn = withDefault(i.riserHeightIn, 7.5);
  const treadDepthIn = withDefault(i.treadDepthIn, 10);
  if (!(totalRiseIn > 0) || !(riserHeightIn > 0) || !(treadDepthIn > 0))
    return { numberOfSteps: NaN, actualRiserHeightIn: NaN, totalRunIn: NaN };
  const numberOfSteps = Math.ceil(totalRiseIn / riserHeightIn);
  const actualRiserHeightIn = totalRiseIn / numberOfSteps;
  const totalRunIn = (numberOfSteps - 1) * treadDepthIn;
  return { numberOfSteps, actualRiserHeightIn, totalRunIn };
};

// 2. Wallpaper — rolls needed from wall size and roll dimensions.
const wallpaper: ComputeFn = (i) => {
  const wallWidthFt = num(i.wallWidthFt);
  const wallHeightFt = num(i.wallHeightFt);
  const rollWidthFt = withDefault(i.rollWidthFt, 1.73);
  const rollLengthFt = withDefault(i.rollLengthFt, 33);
  if (
    !(wallWidthFt > 0) ||
    !(wallHeightFt > 0) ||
    !(rollWidthFt > 0) ||
    !(rollLengthFt > 0)
  )
    return { rollsNeeded: NaN, stripsNeeded: NaN, stripsPerRoll: NaN };
  const stripsPerRoll = Math.floor(rollLengthFt / wallHeightFt);
  if (!(stripsPerRoll > 0))
    return { rollsNeeded: NaN, stripsNeeded: NaN, stripsPerRoll: NaN };
  const stripsNeeded = Math.ceil(wallWidthFt / rollWidthFt);
  const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);
  return { rollsNeeded, stripsNeeded, stripsPerRoll };
};

// 3. Paver — pavers needed for an area with a waste margin.
const paver: ComputeFn = (i) => {
  const areaSqFt = num(i.areaSqFt);
  const paverLengthIn = num(i.paverLengthIn);
  const paverWidthIn = num(i.paverWidthIn);
  const wastePercent = withDefault(i.wastePercent, 5);
  if (!(areaSqFt > 0) || !(paverLengthIn > 0) || !(paverWidthIn > 0))
    return { paversNeeded: NaN };
  const paverAreaSqFt = (paverLengthIn * paverWidthIn) / 144;
  const paversNeeded = Math.ceil(
    (areaSqFt / paverAreaSqFt) * (1 + wastePercent / 100)
  );
  return { paversNeeded };
};

// 4. Topsoil — cubic yards + cubic feet for a bed at a given depth.
const topsoil: ComputeFn = (i) => {
  const lengthFt = num(i.lengthFt);
  const widthFt = num(i.widthFt);
  const depthIn = num(i.depthIn);
  if (!(lengthFt > 0) || !(widthFt > 0) || !(depthIn > 0))
    return { cubicYards: NaN, cubicFeet: NaN };
  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  return { cubicYards, cubicFeet };
};

// 5. Sod — area, rolls and pallets to cover a lawn.
const sod: ComputeFn = (i) => {
  const lengthFt = num(i.lengthFt);
  const widthFt = num(i.widthFt);
  if (!(lengthFt > 0) || !(widthFt > 0))
    return { areaSqFt: NaN, rollsNeeded: NaN, pallets: NaN };
  const areaSqFt = lengthFt * widthFt;
  const rollsNeeded = Math.ceil(areaSqFt / 10);
  const pallets = Math.ceil(areaSqFt / 450);
  return { areaSqFt, rollsNeeded, pallets };
};

// 6. Board foot — lumber board feet for a quantity of boards.
const boardFoot: ComputeFn = (i) => {
  const thicknessIn = num(i.thicknessIn);
  const widthIn = num(i.widthIn);
  const lengthFt = num(i.lengthFt);
  const quantity = withDefault(i.quantity, 1);
  if (
    !(thicknessIn > 0) ||
    !(widthIn > 0) ||
    !(lengthFt > 0) ||
    !(quantity > 0)
  )
    return { boardFeet: NaN };
  const boardFeet = ((thicknessIn * widthIn * (lengthFt * 12)) / 144) * quantity;
  return { boardFeet };
};

// 7. Wall stud — studs to frame a wall at a given spacing.
const wallStud: ComputeFn = (i) => {
  const wallLengthFt = num(i.wallLengthFt);
  const studSpacingIn = withDefault(i.studSpacingIn, 16);
  if (!(wallLengthFt > 0) || !(studSpacingIn > 0)) return { studs: NaN };
  const studs = Math.ceil((wallLengthFt * 12) / studSpacingIn) + 1;
  return { studs };
};

// 8. Excavation — cubic yards + cubic feet of soil to remove.
const excavation: ComputeFn = (i) => {
  const lengthFt = num(i.lengthFt);
  const widthFt = num(i.widthFt);
  const depthFt = num(i.depthFt);
  if (!(lengthFt > 0) || !(widthFt > 0) || !(depthFt > 0))
    return { cubicYards: NaN, cubicFeet: NaN };
  const cubicFeet = lengthFt * widthFt * depthFt;
  const cubicYards = cubicFeet / 27;
  return { cubicYards, cubicFeet };
};

// 9. Asphalt — tons of asphalt for a paved area at a given thickness.
const asphalt: ComputeFn = (i) => {
  const lengthFt = num(i.lengthFt);
  const widthFt = num(i.widthFt);
  const thicknessIn = num(i.thicknessIn);
  const densityLbPerCubicFt = withDefault(i.densityLbPerCubicFt, 145);
  if (
    !(lengthFt > 0) ||
    !(widthFt > 0) ||
    !(thicknessIn > 0) ||
    !(densityLbPerCubicFt > 0)
  )
    return { tons: NaN, cubicFeet: NaN };
  const cubicFeet = lengthFt * widthFt * (thicknessIn / 12);
  const tons = (cubicFeet * densityLbPerCubicFt) / 2000;
  return { tons, cubicFeet };
};

// 10. Plywood sheet — sheets to cover an area.
const plywoodSheet: ComputeFn = (i) => {
  const areaSqFt = num(i.areaSqFt);
  const sheetSqFt = withDefault(i.sheetSqFt, 32);
  if (!(areaSqFt > 0) || !(sheetSqFt > 0)) return { sheets: NaN };
  const sheets = Math.ceil(areaSqFt / sheetSqFt);
  return { sheets };
};

export const constructionR8Engines: Record<string, ComputeFn> = {
  stair,
  wallpaper,
  paver,
  topsoil,
  sod,
  "board-foot": boardFoot,
  "wall-stud": wallStud,
  excavation,
  asphalt,
  "plywood-sheet": plywoodSheet,
};
