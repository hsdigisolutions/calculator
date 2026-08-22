import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 (more) — Science engines. Pure functions, SI units. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Wave equation: wavelength = wave speed / frequency; period = 1 / frequency.
const wavelength: ComputeFn = (i) => {
  const v = num(i.waveSpeed);
  const f = num(i.frequency);
  if (!finite(v) || !finite(f) || f === 0)
    return { wavelength: NaN, period: NaN };
  return { wavelength: v / f, period: 1 / f };
};

// Electrical power P = V × I; resistance R = V / I when current is non-zero.
const electricPower: ComputeFn = (i) => {
  const voltage = num(i.voltage);
  const current = num(i.current);
  if (!finite(voltage) || !finite(current))
    return { power: NaN, resistance: NaN };
  const power = voltage * current;
  const resistance = current !== 0 ? voltage / current : NaN;
  return { power, resistance };
};

// Newton's law of gravitation: F = G·m₁·m₂ / r².
const gravitationalForce: ComputeFn = (i) => {
  const mass1 = num(i.mass1);
  const mass2 = num(i.mass2);
  const distance = num(i.distance);
  const G = 6.674e-11;
  if (!finite(mass1) || !finite(mass2) || !finite(distance) || distance <= 0)
    return { force: NaN };
  return { force: (G * mass1 * mass2) / (distance * distance) };
};

// Linear thermal expansion: ΔL = α·L₀·ΔT; new length = L₀ + ΔL.
const thermalExpansion: ComputeFn = (i) => {
  const originalLength = num(i.originalLength);
  const coefficient = num(i.coefficient);
  const tempChange = num(i.tempChange);
  if (!finite(originalLength) || !finite(coefficient) || !finite(tempChange))
    return { expansion: NaN, newLength: NaN };
  const expansion = coefficient * originalLength * tempChange;
  return { expansion, newLength: originalLength + expansion };
};

// Boyle's law: P₁V₁ = P₂V₂, so new volume = P₁V₁ / P₂.
const pressureVolume: ComputeFn = (i) => {
  const pressure1 = num(i.pressure1);
  const volume1 = num(i.volume1);
  const pressure2 = num(i.pressure2);
  if (!finite(pressure1) || !finite(volume1) || !finite(pressure2) || pressure2 === 0)
    return { newVolume: NaN };
  return { newVolume: (pressure1 * volume1) / pressure2 };
};

export const scienceMoreEngines: Record<string, ComputeFn> = {
  wavelength,
  "electric-power": electricPower,
  "gravitational-force": gravitationalForce,
  "thermal-expansion": thermalExpansion,
  "pressure-volume": pressureVolume,
};
