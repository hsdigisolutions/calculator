import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Science engines. Pure functions, SI units. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Ohm's law: enter any two of voltage (V), current (I), resistance (R).
const ohmsLaw: ComputeFn = (i) => {
  let V = num(i.voltage);
  let I = num(i.current);
  let R = num(i.resistance);
  if (finite(V) && finite(I)) R = I !== 0 ? V / I : NaN;
  else if (finite(V) && finite(R)) I = R !== 0 ? V / R : NaN;
  else if (finite(I) && finite(R)) V = I * R;
  else return { power: NaN, voltage: NaN, current: NaN, resistance: NaN };
  const power = finite(V) && finite(I) ? V * I : NaN;
  return { power, voltage: V, current: I, resistance: R };
};

// Density ρ = m / V (kg per m³), plus g/cm³ (÷1000).
const density: ComputeFn = (i) => {
  const m = num(i.mass);
  const v = num(i.volume);
  if (!finite(m) || !finite(v) || v === 0)
    return { density: NaN, gPerCm3: NaN };
  const d = m / v;
  return { density: d, gPerCm3: d / 1000 };
};

// Newton's second law: F = m·a (newtons), plus pounds-force.
const force: ComputeFn = (i) => {
  const m = num(i.mass);
  const a = num(i.acceleration);
  if (!finite(m) || !finite(a)) return { force: NaN, lbf: NaN };
  const f = m * a;
  return { force: f, lbf: f / 4.4482216153 };
};

// Kinetic energy KE = ½·m·v² (joules), plus momentum p = m·v.
const kineticEnergy: ComputeFn = (i) => {
  const m = num(i.mass);
  const v = num(i.velocity);
  if (!finite(m) || !finite(v)) return { ke: NaN, momentum: NaN };
  return { ke: 0.5 * m * v * v, momentum: m * v };
};

// pH = −log10[H⁺]; pOH = 14 − pH; [OH⁻] = 10^(−pOH).
const ph: ComputeFn = (i) => {
  const h = num(i.concentration);
  if (!finite(h) || h <= 0)
    return { ph: NaN, poh: NaN, ohConcentration: NaN, classification: "—" };
  const pH = -Math.log10(h);
  const pOH = 14 - pH;
  const oh = Math.pow(10, -pOH);
  let classification = "Neutral";
  if (pH < 6.5) classification = "Acidic";
  else if (pH > 7.5) classification = "Basic (alkaline)";
  else if (pH < 7) classification = "Slightly acidic";
  else if (pH > 7) classification = "Slightly basic";
  return { ph: pH, poh: pOH, ohConcentration: oh, classification };
};

// Speed = distance / time. Enter any two of speed (km/h), distance (km), time (h).
const speedDistanceTime: ComputeFn = (i) => {
  let s = num(i.speed);
  let d = num(i.distance);
  let t = num(i.time);
  if (finite(d) && finite(t)) s = t !== 0 ? d / t : NaN;
  else if (finite(s) && finite(t)) d = s * t;
  else if (finite(s) && finite(d)) t = s !== 0 ? d / s : NaN;
  else return { speed: NaN, distance: NaN, time: NaN, ms: NaN, mph: NaN };
  return {
    speed: s,
    distance: d,
    time: t,
    ms: finite(s) ? (s * 1000) / 3600 : NaN,
    mph: finite(s) ? s / 1.609344 : NaN,
  };
};

export const scienceWave3Engines: Record<string, ComputeFn> = {
  "ohms-law": ohmsLaw,
  density,
  force,
  "kinetic-energy": kineticEnergy,
  ph,
  "speed-distance-time": speedDistanceTime,
};
