import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 8 — additional unit Converters. Pure functions, no formatting.
 * Each converter takes value / from / to. Linear converters pivot through a
 * base unit via a factor map; shoe-size uses a special integer/step pivot via
 * US men's sizing. Invalid inputs or unknown units yield NaN → "—". */

/** Linear pivot: value × from-factor ÷ to-factor. Missing unit → NaN. */
function convert(
  value: number,
  factors: Record<string, number>,
  from: string,
  to: string,
): number {
  const f = factors[from];
  const t = factors[to];
  if (f === undefined || t === undefined || !Number.isFinite(value) || !(t !== 0))
    return NaN;
  return (value * f) / t;
}

// ---- Linear factor maps (each unit → its value in the base unit) ----

// base: metre per second squared (m/s²)
const ACCELERATION: Record<string, number> = {
  "m/s²": 1,
  "ft/s²": 0.3048,
  g: 9.80665,
  gal: 0.01,
};

// base: kilogram per cubic metre (kg/m³)
const DENSITY: Record<string, number> = {
  "kg/m³": 1,
  "g/cm³": 1000,
  "g/mL": 1000,
  "lb/ft³": 16.0185,
  "lb/in³": 27679.9,
};

// base: litre per second (L/s)
const FLOW_RATE: Record<string, number> = {
  "L/s": 1,
  "L/min": 0.0166667,
  "m³/h": 0.277778,
  "gal/min": 0.0630902,
  "ft³/s": 28.3168,
};

// base: lux
const ILLUMINANCE: Record<string, number> = {
  lux: 1,
  "foot-candle": 10.7639,
  phot: 10000,
};

// base: tesla (T)
const MAGNETIC_FIELD: Record<string, number> = {
  T: 1,
  mT: 0.001,
  "µT": 1e-6,
  gauss: 1e-4,
};

// base: sievert (Sv)
const RADIATION_DOSE: Record<string, number> = {
  Sv: 1,
  mSv: 0.001,
  "µSv": 1e-6,
  rem: 0.01,
};

// base: gram (g)
const COOKING_WEIGHT: Record<string, number> = {
  g: 1,
  kg: 1000,
  mg: 0.001,
  oz: 28.3495,
  lb: 453.592,
};

// base: point (pt)
const TYPOGRAPHY: Record<string, number> = {
  pt: 1,
  px: 0.75,
  pica: 12,
  inch: 72,
  mm: 2.83465,
  cm: 28.3465,
};

// base: milligrams per decilitre (mg/dL), glucose
const BLOOD_SUGAR: Record<string, number> = {
  "mg/dL": 1,
  "mmol/L": 18.0182,
};

// ---- Linear converter engines ----

const acceleration: ComputeFn = (i) => ({
  result: convert(num(i.value), ACCELERATION, i.from || "m/s²", i.to || "g"),
});
const density: ComputeFn = (i) => ({
  result: convert(num(i.value), DENSITY, i.from || "kg/m³", i.to || "g/cm³"),
});
const flowRate: ComputeFn = (i) => ({
  result: convert(num(i.value), FLOW_RATE, i.from || "L/s", i.to || "gal/min"),
});
const illuminance: ComputeFn = (i) => ({
  result: convert(num(i.value), ILLUMINANCE, i.from || "lux", i.to || "foot-candle"),
});
const magneticField: ComputeFn = (i) => ({
  result: convert(num(i.value), MAGNETIC_FIELD, i.from || "T", i.to || "gauss"),
});
const radiationDose: ComputeFn = (i) => ({
  result: convert(num(i.value), RADIATION_DOSE, i.from || "mSv", i.to || "rem"),
});
const cookingWeight: ComputeFn = (i) => ({
  result: convert(num(i.value), COOKING_WEIGHT, i.from || "g", i.to || "oz"),
});
const typography: ComputeFn = (i) => ({
  result: convert(num(i.value), TYPOGRAPHY, i.from || "pt", i.to || "px"),
});
const bloodSugar: ComputeFn = (i) => ({
  result: convert(num(i.value), BLOOD_SUGAR, i.from || "mg/dL", i.to || "mmol/L"),
});

// ---- Shoe size (special; approximate men's sizes, pivot via US men's) ----

const SHOE_UNITS = ["US", "UK", "EU"];

/** Convert any supported shoe size to the US men's pivot. */
function toUSShoe(value: number, from: string): number {
  switch (from) {
    case "US":
      return value;
    case "UK":
      return value + 0.5;
    case "EU":
      return value - 33;
    default:
      return NaN;
  }
}

/** Convert from the US men's pivot to any supported shoe size. */
function fromUSShoe(us: number, to: string): number {
  switch (to) {
    case "US":
      return us;
    case "UK":
      return us - 0.5;
    case "EU":
      return us + 33;
    default:
      return NaN;
  }
}

const shoeSize: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "US";
  const to = i.to || "UK";
  if (
    !SHOE_UNITS.includes(from) ||
    !SHOE_UNITS.includes(to) ||
    !Number.isFinite(value) ||
    value <= 0
  )
    return { result: NaN };
  const us = toUSShoe(value, from);
  if (!Number.isFinite(us)) return { result: NaN };
  const out = fromUSShoe(us, to);
  // A converted size at or below zero is nonsensical for footwear.
  if (!Number.isFinite(out) || out <= 0) return { result: NaN };
  return { result: out };
};

export const convertersR8Engines: Record<string, ComputeFn> = {
  "acceleration-unit": acceleration,
  "density-unit": density,
  "flow-rate-unit": flowRate,
  "illuminance-unit": illuminance,
  "magnetic-field-unit": magneticField,
  "radiation-dose-unit": radiationDose,
  "cooking-weight-unit": cookingWeight,
  "typography-unit": typography,
  "blood-sugar-unit": bloodSugar,
  "shoe-size-unit": shoeSize,
};
