import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 7 — Science (physics/weather) engines. Pure functions, SI + NWS
   meteorological formulas. Invalid/zero-where-undefined → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Work done W = F × d (joules).
const workDone: ComputeFn = (i) => {
  const force = num(i.force);
  const distance = num(i.distance);
  if (!finite(force) || !finite(distance)) return { work: NaN };
  return { work: force * distance };
};

// Efficiency η = (useful output ÷ input) × 100 (percentage).
const efficiency: ComputeFn = (i) => {
  const output = num(i.outputEnergy);
  const input = num(i.inputEnergy);
  if (!finite(output) || !finite(input) || input === 0) return { efficiency: NaN };
  return { efficiency: (output / input) * 100 };
};

// Hydrostatic pressure P = ρ × g × h (pascals).
const hydrostaticPressure: ComputeFn = (i) => {
  const density = num(i.fluidDensity);
  const depth = num(i.depth);
  const g = i.gravity === undefined || i.gravity === "" ? 9.81 : num(i.gravity);
  if (!finite(density) || !finite(depth) || !finite(g)) return { pressure: NaN };
  return { pressure: density * g * depth };
};

// NWS Rothfusz heat index regression (T in °F, R in %). Valid ≥ 80°F only;
// below that the apparent temperature equals the air temperature.
const heatIndex: ComputeFn = (i) => {
  const T = num(i.temperatureF);
  const R = num(i.humidityPercent);
  if (!finite(T) || !finite(R)) return { heatIndexF: NaN };
  if (T < 80) return { heatIndexF: T };
  const hi =
    -42.379 +
    2.04901523 * T +
    10.14333127 * R -
    0.22475541 * T * R -
    0.00683783 * T * T -
    0.05481717 * R * R +
    0.00122874 * T * T * R +
    0.00085282 * T * R * R -
    0.00000199 * T * T * R * R;
  return { heatIndexF: hi };
};

// NWS wind chill (T in °F, V in mph).
const windChill: ComputeFn = (i) => {
  const T = num(i.temperatureF);
  const V = num(i.windSpeedMph);
  if (!finite(T) || !finite(V) || V < 0) return { windChillF: NaN };
  const v16 = Math.pow(V, 0.16);
  return { windChillF: 35.74 + 0.6215 * T - 35.75 * v16 + 0.4275 * T * v16 };
};

// Dew point via the Magnus formula (T in °C, RH in %).
const dewPoint: ComputeFn = (i) => {
  const T = num(i.temperatureC);
  const RH = num(i.humidityPercent);
  if (!finite(T) || !finite(RH) || RH <= 0) return { dewPointC: NaN };
  const a = 17.27;
  const b = 237.7;
  const gamma = (a * T) / (b + T) + Math.log(RH / 100);
  return { dewPointC: (b * gamma) / (a - gamma) };
};

// Terminal velocity vt = sqrt(2·m·g / (ρ·A·Cd)) (m/s).
const terminalVelocity: ComputeFn = (i) => {
  const mass = num(i.mass);
  const cd = num(i.dragCoefficient);
  const area = num(i.crossSectionalArea);
  const rho = i.fluidDensity === undefined || i.fluidDensity === "" ? 1.225 : num(i.fluidDensity);
  const g = i.gravity === undefined || i.gravity === "" ? 9.81 : num(i.gravity);
  if (![mass, cd, area, rho, g].every(finite)) return { terminalVelocity: NaN };
  const denom = rho * area * cd;
  if (denom === 0) return { terminalVelocity: NaN };
  const inner = (2 * mass * g) / denom;
  if (inner < 0) return { terminalVelocity: NaN };
  return { terminalVelocity: Math.sqrt(inner) };
};

// Escape velocity ve = sqrt(2·G·M / r) (m/s), G = 6.674e-11.
const escapeVelocity: ComputeFn = (i) => {
  const mass = num(i.mass);
  const radius = num(i.radius);
  if (!finite(mass) || !finite(radius) || radius === 0) return { escapeVelocity: NaN };
  const G = 6.674e-11;
  const inner = (2 * G * mass) / radius;
  if (inner < 0) return { escapeVelocity: NaN };
  return { escapeVelocity: Math.sqrt(inner) };
};

// Thin lens 1/f = 1/do + 1/di → f (cm).
const thinLens: ComputeFn = (i) => {
  const doDist = num(i.objectDistance);
  const diDist = num(i.imageDistance);
  if (!finite(doDist) || !finite(diDist) || doDist === 0 || diDist === 0)
    return { focalLength: NaN };
  const invF = 1 / doDist + 1 / diDist;
  if (invF === 0) return { focalLength: NaN };
  return { focalLength: 1 / invF };
};

// Doppler effect for a moving source, stationary observer (Hz).
const dopplerEffect: ComputeFn = (i) => {
  const f = num(i.sourceFrequency);
  const vs = num(i.sourceSpeed);
  const c = i.speedOfSound === undefined || i.speedOfSound === "" ? 343 : num(i.speedOfSound);
  const direction = i.direction === "receding" ? "receding" : "approaching";
  if (!finite(f) || !finite(vs) || !finite(c)) return { observedFrequency: NaN };
  const denom = direction === "approaching" ? c - vs : c + vs;
  if (denom === 0) return { observedFrequency: NaN };
  return { observedFrequency: (f * c) / denom };
};

export const scienceR7Engines: Record<string, ComputeFn> = {
  "work-done": workDone,
  efficiency,
  "hydrostatic-pressure": hydrostaticPressure,
  "heat-index": heatIndex,
  "wind-chill": windChill,
  "dew-point": dewPoint,
  "terminal-velocity": terminalVelocity,
  "escape-velocity": escapeVelocity,
  "thin-lens": thinLens,
  "doppler-effect": dopplerEffect,
};
