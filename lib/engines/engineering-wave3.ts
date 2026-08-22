import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Engineering engines. Pure functions, SI units. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Gear ratio = drivenTeeth / drivingTeeth. Output speed drops, torque rises.
const gearRatio: ComputeFn = (i) => {
  const driving = num(i.drivingTeeth);
  const driven = num(i.drivenTeeth);
  const rpm = num(i.inputRpm);
  const torque = num(i.inputTorque);
  if (!finite(driving) || !finite(driven) || driving === 0)
    return { ratio: NaN, outputRpm: NaN, outputTorque: NaN };
  const ratio = driven / driving;
  const outputRpm = ratio !== 0 ? rpm / ratio : NaN;
  const outputTorque = torque * ratio;
  return { ratio, outputRpm, outputTorque };
};

// Voltage divider: Vout = Vin · R2 / (R1 + R2); series current = Vin / (R1 + R2).
const voltageDivider: ComputeFn = (i) => {
  const vin = num(i.vin);
  const r1 = num(i.r1);
  const r2 = num(i.r2);
  const total = r1 + r2;
  if (!finite(vin) || !finite(r1) || !finite(r2) || total === 0)
    return { vout: NaN, current: NaN };
  const vout = (vin * r2) / total;
  const current = vin / total;
  return { vout, current };
};

// Hooke's law: k = force / displacement; stored energy = ½·k·x².
const springConstant: ComputeFn = (i) => {
  const force = num(i.force);
  const displacement = num(i.displacement);
  if (!finite(force) || !finite(displacement) || displacement === 0)
    return { springConstant: NaN, energy: NaN };
  const k = force / displacement;
  const energy = 0.5 * k * displacement * displacement;
  return { springConstant: k, energy };
};

// Stress = F/A; strain = ΔL/L; Young's modulus = stress / strain.
const stressStrain: ComputeFn = (i) => {
  const force = num(i.force);
  const area = num(i.area);
  const originalLength = num(i.originalLength);
  const deformation = num(i.deformation);
  if (!finite(force) || !finite(area) || area === 0)
    return { stress: NaN, strain: NaN, modulus: NaN };
  if (!finite(originalLength) || originalLength === 0)
    return { stress: NaN, strain: NaN, modulus: NaN };
  const stress = force / area;
  const strain = deformation / originalLength;
  const modulus = strain !== 0 ? stress / strain : NaN;
  return { stress, strain, modulus };
};

// Motor power: hp = torque·rpm / 5252; kW = hp · 0.7457.
const motorPower: ComputeFn = (i) => {
  const torque = num(i.torque);
  const rpm = num(i.rpm);
  if (!finite(torque) || !finite(rpm)) return { hp: NaN, kw: NaN };
  const hp = (torque * rpm) / 5252;
  const kw = hp * 0.7457;
  return { hp, kw };
};

// Simply supported beam, uniform load: δ = 5·w·L⁴ / (384·E·I).
const beamDeflection: ComputeFn = (i) => {
  const load = num(i.load);
  const length = num(i.length);
  const modulus = num(i.modulus);
  const inertia = num(i.inertia);
  const denom = 384 * modulus * inertia;
  if (!finite(load) || !finite(length) || denom === 0)
    return { deflection: NaN };
  const deflection = (5 * load * Math.pow(length, 4)) / denom;
  return { deflection };
};

// Reynolds number Re = ρ·v·L / μ; regime from laminar/transitional/turbulent bands.
const reynoldsNumber: ComputeFn = (i) => {
  const density = num(i.density);
  const velocity = num(i.velocity);
  const length = num(i.length);
  const viscosity = num(i.viscosity);
  if (
    !finite(density) ||
    !finite(velocity) ||
    !finite(length) ||
    !finite(viscosity) ||
    viscosity === 0
  )
    return { reynolds: NaN, regime: "—" };
  const re = (density * velocity * length) / viscosity;
  const regime = re < 2300 ? "Laminar" : re > 4000 ? "Turbulent" : "Transitional";
  return { reynolds: re, regime };
};

export const engineeringWave3Engines: Record<string, ComputeFn> = {
  "gear-ratio": gearRatio,
  "voltage-divider": voltageDivider,
  "spring-constant": springConstant,
  "stress-strain": stressStrain,
  "motor-power": motorPower,
  "beam-deflection": beamDeflection,
  "reynolds-number": reynoldsNumber,
};
