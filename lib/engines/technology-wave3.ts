import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 — Technology engines. Pure functions. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

const gcd = (a: number, b: number): number => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

// Download time = fileSize (MB) × 8 ÷ speed (Mbps), in seconds and minutes.
const downloadTime: ComputeFn = (i) => {
  const fileSize = num(i.fileSize);
  const speed = num(i.speed);
  if (!finite(fileSize) || !finite(speed) || speed === 0)
    return { seconds: NaN, minutes: NaN };
  const seconds = (fileSize * 8) / speed;
  return { seconds, minutes: seconds / 60 };
};

// Hosting bandwidth = visitors × pageViews × pageSize, in GB and MB per month.
const hostingBandwidth: ComputeFn = (i) => {
  const monthlyVisitors = num(i.monthlyVisitors);
  const pageSize = num(i.pageSize);
  const pageViewsPerVisit = num(i.pageViewsPerVisit);
  if (!finite(monthlyVisitors) || !finite(pageSize) || !finite(pageViewsPerVisit))
    return { monthlyGb: NaN, monthlyMb: NaN };
  const totalMb = monthlyVisitors * pageViewsPerVisit * pageSize;
  return { monthlyGb: totalMb / 1024, monthlyMb: totalMb };
};

// IPv4 subnet: from a CIDR prefix, host bits, total and usable addresses.
const ipSubnet: ComputeFn = (i) => {
  const cidr = num(i.cidr);
  if (!finite(cidr)) return { usableHosts: NaN, totalAddresses: NaN, hostBits: NaN };
  const n = Math.max(0, Math.min(32, Math.trunc(cidr)));
  const totalAddresses = Math.pow(2, 32 - n);
  const usableHosts = n >= 31 ? (n === 32 ? 1 : 2) : totalAddresses - 2;
  return { usableHosts, totalAddresses, hostBits: 32 - n };
};

// Screen PPI = √(widthPx² + heightPx²) ÷ diagonalInches.
const screenPpi: ComputeFn = (i) => {
  const widthPx = num(i.widthPx);
  const heightPx = num(i.heightPx);
  const diagonalInches = num(i.diagonalInches);
  if (!finite(widthPx) || !finite(heightPx) || !finite(diagonalInches) || diagonalInches === 0)
    return { ppi: NaN };
  const ppi = Math.sqrt(widthPx * widthPx + heightPx * heightPx) / diagonalInches;
  return { ppi };
};

// Video file size = bitrate (Mbps) × duration (min) × 60 ÷ 8, in GB and MB.
const videoBitrate: ComputeFn = (i) => {
  const durationMinutes = num(i.durationMinutes);
  const bitrateMbps = num(i.bitrateMbps);
  if (!finite(durationMinutes) || !finite(bitrateMbps))
    return { sizeGb: NaN, sizeMb: NaN };
  const sizeMb = (bitrateMbps * durationMinutes * 60) / 8;
  return { sizeGb: sizeMb / 1024, sizeMb };
};

// Uptime SLA: from a target uptime %, the allowed downtime per year, month, day.
const uptimeSla: ComputeFn = (i) => {
  const uptimePercent = num(i.uptimePercent);
  if (!finite(uptimePercent))
    return { downtimeYearMinutes: NaN, downtimeMonthMinutes: NaN, downtimeDayMinutes: NaN };
  const down = 1 - uptimePercent / 100;
  const yearMin = down * 365 * 24 * 60;
  return {
    downtimeYearMinutes: yearMin,
    downtimeMonthMinutes: yearMin / 12,
    downtimeDayMinutes: down * 24 * 60,
  };
};

// Aspect ratio: reduce width:height by their greatest common divisor.
const aspectRatio: ComputeFn = (i) => {
  const width = num(i.width);
  const height = num(i.height);
  if (!finite(width) || !finite(height) || width === 0 || height === 0)
    return { ratio: "—", decimal: NaN };
  const g = gcd(Math.round(width), Math.round(height));
  const ratioW = width / g;
  const ratioH = height / g;
  return { ratio: `${ratioW}:${ratioH}`, decimal: width / height };
};

export const technologyWave3Engines: Record<string, ComputeFn> = {
  "download-time": downloadTime,
  "hosting-bandwidth": hostingBandwidth,
  "ip-subnet": ipSubnet,
  "screen-ppi": screenPpi,
  "video-bitrate": videoBitrate,
  "uptime-sla": uptimeSla,
  "aspect-ratio": aspectRatio,
};
