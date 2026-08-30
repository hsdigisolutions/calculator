import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 4 — additional unit Converters. Pure functions, no formatting.
 * Each converter takes value / from / to. Linear converters pivot through a
 * base unit via a factor map; fuel-economy and pace-speed use special
 * (non-linear or reciprocal) formulas. Invalid inputs yield NaN → "—". */

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

// base: watt (W)
const POWER: Record<string, number> = {
  W: 1,
  kW: 1000,
  MW: 1e6,
  hp: 745.6999,
  ps: 735.49875,
  "BTU/h": 0.29307107,
  "ft-lb/s": 1.3558179,
};

// base: newton-metre (N·m)
const TORQUE: Record<string, number> = {
  "N·m": 1,
  "kN·m": 1000,
  "lbf·ft": 1.35581795,
  "lbf·in": 0.112984829,
  "kgf·m": 9.80665,
};

// base: degree
const ANGLE: Record<string, number> = {
  deg: 1,
  rad: 57.2957795,
  grad: 0.9,
  arcmin: 1 / 60,
  arcsec: 1 / 3600,
  turn: 360,
};

// base: hertz (Hz)
const FREQUENCY: Record<string, number> = {
  Hz: 1,
  kHz: 1000,
  MHz: 1e6,
  GHz: 1e9,
  rpm: 1 / 60,
};

// base: newton (N)
const FORCE: Record<string, number> = {
  N: 1,
  kN: 1000,
  kgf: 9.80665,
  lbf: 4.44822162,
  dyne: 1e-5,
};

// base: second (s)
const TIME: Record<string, number> = {
  s: 1,
  ms: 0.001,
  min: 60,
  h: 3600,
  day: 86400,
  week: 604800,
  "month(30d)": 2592000,
  year: 31536000,
};

// base: bit per second (bit/s)
const DATA_RATE: Record<string, number> = {
  "bit/s": 1,
  "kbit/s": 1000,
  "Mbit/s": 1e6,
  "Gbit/s": 1e9,
  "B/s": 8,
  "KB/s": 8000,
  "MB/s": 8e6,
  "GB/s": 8e9,
};

// base: millilitre (ml)
const COOKING_VOLUME: Record<string, number> = {
  ml: 1,
  l: 1000,
  tsp: 4.92892,
  tbsp: 14.7868,
  "cup(US)": 236.588,
  "fl oz(US)": 29.5735,
  pint: 473.176,
  quart: 946.353,
  gallon: 3785.41,
};

// ---- Linear converter engines ----

const power: ComputeFn = (i) => ({
  result: convert(num(i.value), POWER, i.from || "W", i.to || "hp"),
});
const torque: ComputeFn = (i) => ({
  result: convert(num(i.value), TORQUE, i.from || "N·m", i.to || "lbf·ft"),
});
const angle: ComputeFn = (i) => ({
  result: convert(num(i.value), ANGLE, i.from || "deg", i.to || "rad"),
});
const frequency: ComputeFn = (i) => ({
  result: convert(num(i.value), FREQUENCY, i.from || "Hz", i.to || "kHz"),
});
const force: ComputeFn = (i) => ({
  result: convert(num(i.value), FORCE, i.from || "N", i.to || "lbf"),
});
const timeUnit: ComputeFn = (i) => ({
  result: convert(num(i.value), TIME, i.from || "min", i.to || "s"),
});
const dataRate: ComputeFn = (i) => ({
  result: convert(num(i.value), DATA_RATE, i.from || "Mbit/s", i.to || "MB/s"),
});
const cookingVolume: ComputeFn = (i) => ({
  result: convert(num(i.value), COOKING_VOLUME, i.from || "cup(US)", i.to || "ml"),
});

// ---- Fuel economy (non-linear; pivot via L/100km) ----

const toL100km: Record<string, (v: number) => number> = {
  mpgUS: (v) => 235.214583 / v,
  mpgUK: (v) => 282.481 / v,
  "km/L": (v) => 100 / v,
  "L/100km": (v) => v,
};
const fromL100km: Record<string, (l: number) => number> = {
  mpgUS: (l) => 235.214583 / l,
  mpgUK: (l) => 282.481 / l,
  "km/L": (l) => 100 / l,
  "L/100km": (l) => l,
};

const fuelEconomy: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "mpgUS";
  const to = i.to || "L/100km";
  const toFn = toL100km[from];
  const fromFn = fromL100km[to];
  if (!toFn || !fromFn || !Number.isFinite(value) || value <= 0)
    return { result: NaN };
  const l100 = toFn(value);
  if (!Number.isFinite(l100) || l100 <= 0) return { result: NaN };
  return { result: fromFn(l100) };
};

// ---- Pace / speed (non-linear; pivot via metres per second) ----

const toMs: Record<string, (v: number) => number> = {
  "min/km": (v) => 1000 / (v * 60),
  "min/mi": (v) => 1609.344 / (v * 60),
  "km/h": (v) => v / 3.6,
  mph: (v) => v * 0.44704,
};
const fromMs: Record<string, (ms: number) => number> = {
  "min/km": (ms) => 1000 / ms / 60,
  "min/mi": (ms) => 1609.344 / ms / 60,
  "km/h": (ms) => ms * 3.6,
  mph: (ms) => ms / 0.44704,
};

const paceSpeed: ComputeFn = (i) => {
  const value = num(i.value);
  const from = i.from || "min/km";
  const to = i.to || "km/h";
  const toFn = toMs[from];
  const fromFn = fromMs[to];
  if (!toFn || !fromFn || !Number.isFinite(value) || value <= 0)
    return { result: NaN };
  const ms = toFn(value);
  if (!Number.isFinite(ms) || ms <= 0) return { result: NaN };
  return { result: fromFn(ms) };
};

export const convertersR4Engines: Record<string, ComputeFn> = {
  power,
  torque,
  angle,
  frequency,
  "fuel-economy": fuelEconomy,
  "force-unit": force,
  "time-unit": timeUnit,
  "data-rate": dataRate,
  "cooking-volume": cookingVolume,
  "pace-speed": paceSpeed,
};
