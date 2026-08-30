import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 6 — Engineering engines. Pure functions, SI units. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Joule heating: P = I²·R (power dissipated in a resistor).
const powerDissipation: ComputeFn = (i) => {
  const current = num(i.current);
  const resistance = num(i.resistance);
  if (!finite(current) || !finite(resistance)) return { power: NaN };
  const power = current * current * resistance;
  return { power };
};

// Resistor combination: series R = R1 + R2; parallel R = (R1·R2)/(R1 + R2).
const resistor: ComputeFn = (i) => {
  const r1 = num(i.r1);
  const r2 = num(i.r2);
  const configuration = String(i.configuration ?? "series");
  if (!finite(r1) || !finite(r2)) return { resistance: NaN };
  if (configuration === "parallel") {
    const sum = r1 + r2;
    if (sum === 0) return { resistance: NaN };
    return { resistance: (r1 * r2) / sum };
  }
  return { resistance: r1 + r2 };
};

// Capacitor stored energy: E = ½·C·V².
const capacitorEnergy: ComputeFn = (i) => {
  const c = num(i.capacitanceFarads);
  const v = num(i.voltage);
  if (!finite(c) || !finite(v)) return { energy: NaN };
  const energy = 0.5 * c * v * v;
  return { energy };
};

// Open belt length: L = 2·C + (π/2)·(D1+D2) + (D1−D2)²/(4·C).
const beltLength: ComputeFn = (i) => {
  const d1 = num(i.pulley1Diameter);
  const d2 = num(i.pulley2Diameter);
  const c = num(i.centerDistance);
  if (!finite(d1) || !finite(d2) || !finite(c) || c === 0)
    return { beltLength: NaN };
  const beltLength =
    2 * c + (Math.PI / 2) * (d1 + d2) + Math.pow(d1 - d2, 2) / (4 * c);
  return { beltLength };
};

// Pressure = Force / Area.
const hydraulicPressure: ComputeFn = (i) => {
  const force = num(i.force);
  const area = num(i.area);
  if (!finite(force) || !finite(area) || area === 0) return { pressure: NaN };
  return { pressure: force / area };
};

// Factor of safety = ultimate strength / applied stress.
const safetyFactor: ComputeFn = (i) => {
  const ultimate = num(i.ultimateStrength);
  const applied = num(i.appliedStress);
  if (!finite(ultimate) || !finite(applied) || applied === 0)
    return { safetyFactor: NaN };
  return { safetyFactor: ultimate / applied };
};

// Fourier conduction: Q = k·A·ΔT / thickness.
const heatTransferRate: ComputeFn = (i) => {
  const k = num(i.thermalConductivity);
  const area = num(i.area);
  const dt = num(i.tempDifference);
  const thickness = num(i.thickness);
  if (!finite(k) || !finite(area) || !finite(dt) || !finite(thickness) || thickness === 0)
    return { heatRate: NaN };
  return { heatRate: (k * area * dt) / thickness };
};

// Rotational power: P = τ·2π·N / 60 (N in rpm).
const shaftPower: ComputeFn = (i) => {
  const torque = num(i.torque);
  const rpm = num(i.rpm);
  if (!finite(torque) || !finite(rpm)) return { power: NaN };
  return { power: (torque * 2 * Math.PI * rpm) / 60 };
};

// Volumetric flow: Q = v·π·(D/2)²; also in litres per second.
const pipeFlowRate: ComputeFn = (i) => {
  const velocity = num(i.velocity);
  const diameter = num(i.pipeDiameter);
  if (!finite(velocity) || !finite(diameter))
    return { flowRate: NaN, flowLitersPerSec: NaN };
  const flowRate = velocity * Math.PI * Math.pow(diameter / 2, 2);
  return { flowRate, flowLitersPerSec: flowRate * 1000 };
};

// Hydraulic pump power: P = ρ·g·Q·H.
const pumpPower: ComputeFn = (i) => {
  const flowRate = num(i.flowRate);
  const head = num(i.head);
  const density = num(i.fluidDensity);
  const gravity = num(i.gravity);
  if (!finite(flowRate) || !finite(head) || !finite(density) || !finite(gravity))
    return { hydraulicPower: NaN };
  return { hydraulicPower: density * gravity * flowRate * head };
};

export const engineeringR6Engines: Record<string, ComputeFn> = {
  "power-dissipation": powerDissipation,
  resistor: resistor,
  "capacitor-energy": capacitorEnergy,
  "belt-length": beltLength,
  "hydraulic-pressure": hydraulicPressure,
  "safety-factor": safetyFactor,
  "heat-transfer-rate": heatTransferRate,
  "shaft-power": shaftPower,
  "pipe-flow-rate": pipeFlowRate,
  "pump-power": pumpPower,
};
