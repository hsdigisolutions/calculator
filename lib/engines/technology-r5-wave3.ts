import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 5 — Technology engines. Pure functions. Invalid → NaN (or "—" for strings). */

const finite = (x: number) => Number.isFinite(x);

// Password entropy = length × log2(charsetSize); label bins the bit strength.
const passwordEntropy: ComputeFn = (i) => {
  const length = num(i.length);
  const charsetSize = num(i.charsetSize);
  if (!finite(length) || !finite(charsetSize) || length <= 0 || charsetSize <= 1)
    return { entropyBits: NaN, crackLabel: "—" };
  const entropyBits = length * Math.log2(charsetSize);
  let crackLabel: string;
  if (entropyBits < 40) crackLabel = "Weak";
  else if (entropyBits < 60) crackLabel = "Fair";
  else if (entropyBits < 80) crackLabel = "Strong";
  else crackLabel = "Very strong";
  return { entropyBits, crackLabel };
};

// Hex → RGB. Accepts 3- or 6-digit hex, with or without a leading #.
const hexRgb: ComputeFn = (i) => {
  const raw = String(i.hex ?? "").trim().replace(/^#/, "");
  const invalid = { rgb: "—", red: NaN, green: NaN, blue: NaN };
  if (!/^[0-9a-fA-F]{3}$/.test(raw) && !/^[0-9a-fA-F]{6}$/.test(raw)) return invalid;
  let hex = raw;
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return { rgb: `rgb(${red}, ${green}, ${blue})`, red, green, blue };
};

// Uncompressed image size = width × height × bitDepth ÷ 8, in MB and KB.
const imageFileSize: ComputeFn = (i) => {
  const widthPx = num(i.widthPx);
  const heightPx = num(i.heightPx);
  const bitDepth = num(i.bitDepth);
  if (!finite(widthPx) || !finite(heightPx) || !finite(bitDepth))
    return { sizeMB: NaN, sizeKB: NaN };
  const bytes = (widthPx * heightPx * bitDepth) / 8;
  return { sizeMB: bytes / 1048576, sizeKB: bytes / 1024 };
};

// px → rem (and em), relative to the root font size.
const pxRem: ComputeFn = (i) => {
  const pixels = num(i.pixels);
  const rootFontSize = num(i.rootFontSize);
  if (!finite(pixels) || !finite(rootFontSize) || rootFontSize === 0)
    return { rem: NaN, em: NaN };
  const rem = pixels / rootFontSize;
  return { rem, em: rem };
};

// Typing speed: gross WPM, net WPM (errors removed), and accuracy %.
const typingSpeed: ComputeFn = (i) => {
  const words = num(i.words);
  const minutes = num(i.minutes);
  const errors = num(i.errors);
  if (!finite(words) || !finite(minutes) || !finite(errors) || minutes === 0 || words === 0)
    return { grossWpm: NaN, netWpm: NaN, accuracy: NaN };
  const grossWpm = words / minutes;
  const netWpm = (words - errors) / minutes;
  const accuracy = ((words - errors) / words) * 100;
  return { grossWpm, netWpm, accuracy };
};

// Cloud storage cost = GB × price per GB-month × months.
const cloudStorageCost: ComputeFn = (i) => {
  const gigabytes = num(i.gigabytes);
  const pricePerGbMonth = num(i.pricePerGbMonth);
  const months = num(i.months);
  if (!finite(gigabytes) || !finite(pricePerGbMonth) || !finite(months))
    return { totalCost: NaN, monthlyCost: NaN };
  const monthlyCost = gigabytes * pricePerGbMonth;
  return { totalCost: monthlyCost * months, monthlyCost };
};

// API rate limit: total requests over the window, and requests per minute.
const apiRateLimit: ComputeFn = (i) => {
  const requestsPerSecond = num(i.requestsPerSecond);
  const hours = num(i.hours);
  if (!finite(requestsPerSecond) || !finite(hours))
    return { totalRequests: NaN, perMinute: NaN };
  return {
    totalRequests: requestsPerSecond * 3600 * hours,
    perMinute: requestsPerSecond * 60,
  };
};

// Network latency: propagation delay over distance, one-way and round-trip.
const SPEED_OF_LIGHT_KM_S = 299792.458;
const networkLatency: ComputeFn = (i) => {
  const distanceKm = num(i.distanceKm);
  const mediumFactor = num(i.mediumFactor);
  if (!finite(distanceKm) || !finite(mediumFactor) || mediumFactor === 0)
    return { oneWayMs: NaN, roundTripMs: NaN };
  const effectiveSpeed = SPEED_OF_LIGHT_KM_S / mediumFactor;
  const oneWayMs = (distanceKm / effectiveSpeed) * 1000;
  return { oneWayMs, roundTripMs: 2 * oneWayMs };
};

// Bandwidth cost = monthly GB × price per GB; annual is 12 months.
const bandwidthCost: ComputeFn = (i) => {
  const monthlyGb = num(i.monthlyGb);
  const pricePerGb = num(i.pricePerGb);
  if (!finite(monthlyGb) || !finite(pricePerGb))
    return { monthlyCost: NaN, annualCost: NaN };
  const monthlyCost = monthlyGb * pricePerGb;
  return { monthlyCost, annualCost: monthlyCost * 12 };
};

// Compression: ratio (original/compressed), % saved, KB saved.
const gzipSavings: ComputeFn = (i) => {
  const originalKb = num(i.originalKb);
  const compressedKb = num(i.compressedKb);
  if (!finite(originalKb) || !finite(compressedKb) || compressedKb === 0 || originalKb === 0)
    return { savedPercent: NaN, compressionRatio: NaN, savedKb: NaN };
  return {
    savedPercent: (1 - compressedKb / originalKb) * 100,
    compressionRatio: originalKb / compressedKb,
    savedKb: originalKb - compressedKb,
  };
};

export const technologyR5Engines: Record<string, ComputeFn> = {
  "password-entropy": passwordEntropy,
  "hex-rgb": hexRgb,
  "image-file-size": imageFileSize,
  "px-rem": pxRem,
  "typing-speed": typingSpeed,
  "cloud-storage-cost": cloudStorageCost,
  "api-rate-limit": apiRateLimit,
  "network-latency": networkLatency,
  "bandwidth-cost": bandwidthCost,
  "gzip-savings": gzipSavings,
};
