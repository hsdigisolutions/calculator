import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 8 — Technology engines. Pure functions. Invalid → NaN (or "—" for strings). */

const finite = (x: number) => Number.isFinite(x);

// Data usage: monthly GB = hours/day × GB/hour × 30; annual = ×12.
const dataUsage: ComputeFn = (i) => {
  const hoursPerDay = num(i.hoursPerDay);
  const gbPerHour = num(i.gbPerHour);
  if (!finite(hoursPerDay) || !finite(gbPerHour) || hoursPerDay < 0 || gbPerHour <= 0)
    return { monthlyGb: NaN, annualGb: NaN };
  const monthlyGb = hoursPerDay * gbPerHour * 30;
  return { monthlyGb, annualGb: monthlyGb * 12 };
};

// Video file size: sizeMb = bitrate(Mbps) × minutes × 60 ÷ 8; sizeGb = /1024.
const videoFileSize: ComputeFn = (i) => {
  const durationMinutes = num(i.durationMinutes);
  const bitrateMbps = num(i.bitrateMbps);
  if (!finite(durationMinutes) || !finite(bitrateMbps) || durationMinutes < 0 || bitrateMbps < 0)
    return { sizeGb: NaN, sizeMb: NaN };
  const sizeMb = (bitrateMbps * durationMinutes * 60) / 8;
  return { sizeGb: sizeMb / 1024, sizeMb };
};

// SSD lifespan (years) = TBW × 1000 ÷ (daily GB written × 365).
const ssdLifespan: ComputeFn = (i) => {
  const tbwRating = num(i.tbwRating);
  const dailyWriteGb = num(i.dailyWriteGb);
  if (!finite(tbwRating) || !finite(dailyWriteGb) || tbwRating <= 0 || dailyWriteGb <= 0)
    return { lifespanYears: NaN };
  return { lifespanYears: (tbwRating * 1000) / (dailyWriteGb * 365) };
};

// WCAG relative luminance from a #RRGGBB (or #RGB) hex string.
const relativeLuminance = (hex: string): number | null => {
  const raw = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3}$/.test(raw) && !/^[0-9a-fA-F]{6}$/.test(raw)) return null;
  let full = raw;
  if (full.length === 3) full = full.split("").map((c) => c + c).join("");
  const channel = (hexPair: string) => {
    const cs = parseInt(hexPair, 16) / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  };
  const r = channel(full.slice(0, 2));
  const g = channel(full.slice(2, 4));
  const b = channel(full.slice(4, 6));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Color contrast ratio per WCAG; AA pass at ≥ 4.5:1 for normal text.
const colorContrast: ComputeFn = (i) => {
  const lFg = relativeLuminance(String(i.foregroundHex ?? ""));
  const lBg = relativeLuminance(String(i.backgroundHex ?? ""));
  if (lFg === null || lBg === null) return { contrastRatio: NaN, wcagAA: "—" };
  const lighter = Math.max(lFg, lBg);
  const darker = Math.min(lFg, lBg);
  const contrastRatio = (lighter + 0.05) / (darker + 0.05);
  return { contrastRatio, wcagAA: contrastRatio >= 4.5 ? "Pass" : "Fail" };
};

// Number base conversion between binary / decimal / hexadecimal (integer values).
const BASES: Record<string, number> = { binary: 2, decimal: 10, hex: 16 };
const numberBase: ComputeFn = (i) => {
  const value = String(i.value ?? "").trim().replace(/^0[bx]/i, "");
  const from = BASES[String(i.from ?? "")];
  const to = BASES[String(i.to ?? "")];
  const invalid = { result: "—" };
  if (!from || !to || value === "") return invalid;
  const valid: Record<number, RegExp> = {
    2: /^[01]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/,
  };
  if (!valid[from].test(value)) return invalid;
  const parsed = parseInt(value, from);
  if (!Number.isFinite(parsed)) return invalid;
  return { result: parsed.toString(to).toUpperCase() };
};

// Subnet hosts from a CIDR prefix: usable = 2^(32−prefix) − 2, total = 2^(32−prefix).
const subnetHosts: ComputeFn = (i) => {
  const cidrPrefix = num(i.cidrPrefix);
  if (!finite(cidrPrefix) || cidrPrefix < 0 || cidrPrefix > 32 || !Number.isInteger(cidrPrefix))
    return { usableHosts: NaN, totalAddresses: NaN };
  const totalAddresses = Math.pow(2, 32 - cidrPrefix);
  const usableHosts = Math.max(totalAddresses - 2, 0);
  return { usableHosts, totalAddresses };
};

// Webpage load time (s) = page size (MB) × 8 ÷ connection (Mbps).
const webpageLoadTime: ComputeFn = (i) => {
  const pageSizeMb = num(i.pageSizeMb);
  const connectionMbps = num(i.connectionMbps);
  if (!finite(pageSizeMb) || !finite(connectionMbps) || connectionMbps <= 0 || pageSizeMb < 0)
    return { loadSeconds: NaN };
  return { loadSeconds: (pageSizeMb * 8) / connectionMbps };
};

// Email storage (GB) = emails/day × avg size(MB) × 365 × years ÷ 1024.
const emailStorage: ComputeFn = (i) => {
  const emailsPerDay = num(i.emailsPerDay);
  const avgSizeMb = num(i.avgSizeMb);
  const years = num(i.years);
  if (!finite(emailsPerDay) || !finite(avgSizeMb) || !finite(years) || emailsPerDay < 0 || avgSizeMb < 0 || years < 0)
    return { totalStorageGb: NaN };
  return { totalStorageGb: (emailsPerDay * avgSizeMb * 365 * years) / 1024 };
};

// Device battery life (hours) = capacity (mAh) ÷ draw (mA).
const deviceBatteryLife: ComputeFn = (i) => {
  const batteryMah = num(i.batteryMah);
  const deviceDrawMa = num(i.deviceDrawMa);
  if (!finite(batteryMah) || !finite(deviceDrawMa) || batteryMah <= 0 || deviceDrawMa <= 0)
    return { batteryHours: NaN };
  return { batteryHours: batteryMah / deviceDrawMa };
};

// Print size: inches = pixels ÷ DPI, per dimension.
const printSize: ComputeFn = (i) => {
  const pixelsWide = num(i.pixelsWide);
  const pixelsTall = num(i.pixelsTall);
  const dpi = num(i.dpi);
  if (!finite(pixelsWide) || !finite(pixelsTall) || !finite(dpi) || dpi <= 0 || pixelsWide < 0 || pixelsTall < 0)
    return { printWidthInches: NaN, printHeightInches: NaN };
  return { printWidthInches: pixelsWide / dpi, printHeightInches: pixelsTall / dpi };
};

export const technologyR8Engines: Record<string, ComputeFn> = {
  "data-usage": dataUsage,
  "video-file-size": videoFileSize,
  "ssd-lifespan": ssdLifespan,
  "color-contrast": colorContrast,
  "number-base": numberBase,
  "subnet-hosts": subnetHosts,
  "webpage-load-time": webpageLoadTime,
  "email-storage": emailStorage,
  "device-battery-life": deviceBatteryLife,
  "print-size": printSize,
};
