import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 5 — Science engines (physics/chemistry). Pure functions, SI units. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);
const DEG2RAD = Math.PI / 180;

// Molarity: c = moles / volume (mol/L).
const molarity: ComputeFn = (i) => {
  const n = num(i.moles);
  const v = num(i.volumeLiters);
  if (!finite(n) || !finite(v) || v === 0) return { molarity: NaN };
  return { molarity: n / v };
};

// Radioactive decay: N = N₀ · 0.5^(t / t½).
const halfLife: ComputeFn = (i) => {
  const n0 = num(i.initialAmount);
  const th = num(i.halfLifeValue);
  const t = num(i.elapsedTime);
  if (!finite(n0) || !finite(th) || !finite(t) || th === 0)
    return { remaining: NaN, fractionRemaining: NaN };
  const fraction = Math.pow(0.5, t / th);
  return { remaining: n0 * fraction, fractionRemaining: fraction * 100 };
};

// Gravitational potential energy: PE = m·g·h (joules).
const potentialEnergy: ComputeFn = (i) => {
  const m = num(i.mass);
  const h = num(i.height);
  const gRaw = num(i.gravity);
  const g = finite(gRaw) ? gRaw : 9.81;
  if (!finite(m) || !finite(h)) return { potentialEnergy: NaN };
  return { potentialEnergy: m * g * h };
};

// Linear momentum: p = m·v (kg·m/s).
const momentum: ComputeFn = (i) => {
  const m = num(i.mass);
  const v = num(i.velocity);
  if (!finite(m) || !finite(v)) return { momentum: NaN };
  return { momentum: m * v };
};

// Acceleration: a = (v_f − v_i) / t (m/s²).
const acceleration: ComputeFn = (i) => {
  const vi = num(i.initialVelocity);
  const vf = num(i.finalVelocity);
  const t = num(i.time);
  if (!finite(vi) || !finite(vf) || !finite(t) || t === 0)
    return { acceleration: NaN };
  return { acceleration: (vf - vi) / t };
};

// Ideal gas law: PV = nRT → n = PV / (R·T), R = 0.082057 L·atm/(mol·K).
const idealGas: ComputeFn = (i) => {
  const p = num(i.pressure);
  const v = num(i.volume);
  const t = num(i.temperature);
  if (!finite(p) || !finite(v) || !finite(t) || t === 0) return { moles: NaN };
  return { moles: (p * v) / (0.082057 * t) };
};

// Projectile motion (launch and land at same height, no drag).
const projectileMotion: ComputeFn = (i) => {
  const v = num(i.initialVelocity);
  const deg = num(i.angleDegrees);
  const gRaw = num(i.gravity);
  const g = finite(gRaw) ? gRaw : 9.81;
  if (!finite(v) || !finite(deg) || g === 0)
    return { range: NaN, maxHeight: NaN, flightTime: NaN };
  const rad = deg * DEG2RAD;
  const range = (v * v * Math.sin(2 * rad)) / g;
  const maxHeight = (v * v * Math.sin(rad) * Math.sin(rad)) / (2 * g);
  const flightTime = (2 * v * Math.sin(rad)) / g;
  return { range, maxHeight, flightTime };
};

// Specific heat: Q = m·c·ΔT (joules).
const specificHeat: ComputeFn = (i) => {
  const m = num(i.mass);
  const c = num(i.specificHeat);
  const dt = num(i.tempChange);
  if (!finite(m) || !finite(c) || !finite(dt)) return { heatEnergy: NaN };
  return { heatEnergy: m * c * dt };
};

// Coulomb's law: F = k·q₁·q₂ / r², k = 8.9875e9 N·m²/C².
const coulombsLaw: ComputeFn = (i) => {
  const q1 = num(i.charge1);
  const q2 = num(i.charge2);
  const d = num(i.distance);
  if (!finite(q1) || !finite(q2) || !finite(d) || d === 0) return { force: NaN };
  return { force: (8.9875e9 * q1 * q2) / (d * d) };
};

// Mass–energy equivalence: E = m·c², c = 299,792,458 m/s.
const massEnergy: ComputeFn = (i) => {
  const m = num(i.mass);
  if (!finite(m)) return { energy: NaN, energyMegajoules: NaN };
  const c = 299792458;
  const energy = m * c * c;
  return { energy, energyMegajoules: energy / 1e6 };
};

export const scienceR5Engines: Record<string, ComputeFn> = {
  molarity,
  "half-life": halfLife,
  "potential-energy": potentialEnergy,
  momentum,
  acceleration,
  "ideal-gas": idealGas,
  "projectile-motion": projectileMotion,
  "specific-heat": specificHeat,
  "coulombs-law": coulombsLaw,
  "mass-energy": massEnergy,
};
