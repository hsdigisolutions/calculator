import { describe, it, expect } from "vitest";
import { engines } from "./index";

const run = (slug: string, inputs: Record<string, string>) => engines[slug](inputs);

describe("technology wave3 engines", () => {
  it("download-time: 100 MB at 100 Mbps -> 8 seconds", () => {
    const r = run("download-time", { fileSize: "100", speed: "100" });
    expect(r.seconds).toBe(8);
    expect(r.minutes as number).toBeCloseTo(0.1333, 3);
  });
  it("download-time: zero speed -> NaN", () => {
    expect(Number.isNaN(run("download-time", { fileSize: "100", speed: "0" }).seconds as number)).toBe(true);
  });

  it("hosting-bandwidth: 10000 x 3 x 2 MB", () => {
    const r = run("hosting-bandwidth", { monthlyVisitors: "10000", pageViewsPerVisit: "3", pageSize: "2" });
    expect(r.monthlyMb).toBe(60000);
    expect(r.monthlyGb as number).toBeCloseTo(58.59, 2);
  });

  it("ip-subnet: /24 -> 254 usable, 256 total", () => {
    const r = run("ip-subnet", { cidr: "24" });
    expect(r.usableHosts).toBe(254);
    expect(r.totalAddresses).toBe(256);
    expect(r.hostBits).toBe(8);
  });
  it("ip-subnet: /31 -> 2 usable, /32 -> 1 usable", () => {
    expect(run("ip-subnet", { cidr: "31" }).usableHosts).toBe(2);
    expect(run("ip-subnet", { cidr: "32" }).usableHosts).toBe(1);
  });

  it("screen-ppi: 1920x1080 at 15.6 in -> ~141.2 PPI", () => {
    const r = run("screen-ppi", { widthPx: "1920", heightPx: "1080", diagonalInches: "15.6" });
    expect(r.ppi as number).toBeCloseTo(141.2, 1);
  });

  it("video-bitrate: 8 Mbps x 10 min -> 600 MB", () => {
    const r = run("video-bitrate", { durationMinutes: "10", bitrateMbps: "8" });
    expect(r.sizeMb).toBe(600);
    expect(r.sizeGb as number).toBeCloseTo(0.586, 3);
  });

  it("uptime-sla: 99.9% -> ~525.6 min/year", () => {
    const r = run("uptime-sla", { uptimePercent: "99.9" });
    expect(r.downtimeYearMinutes as number).toBeCloseTo(525.6, 1);
  });

  it("aspect-ratio: 1920x1080 -> 16:9", () => {
    const r = run("aspect-ratio", { width: "1920", height: "1080" });
    expect(r.ratio).toBe("16:9");
    expect(r.decimal as number).toBeCloseTo(1.7778, 4);
  });
  it("aspect-ratio: invalid -> NaN decimal", () => {
    expect(Number.isNaN(run("aspect-ratio", { width: "0", height: "1080" }).decimal as number)).toBe(true);
  });
});
