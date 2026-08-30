import { describe, it, expect } from "vitest";
import { technologyR8Engines } from "./technology-r8-wave3";

const run = (id: string, inputs: Record<string, string>) => technologyR8Engines[id](inputs);

describe("technology r8 wave3 engines", () => {
  it("data-usage: monthly and annual GB", () => {
    const r = run("data-usage", { hoursPerDay: "4", gbPerHour: "3" });
    expect(r.monthlyGb as number).toBeCloseTo(360, 6); // 4×3×30
    expect(r.annualGb as number).toBeCloseTo(4320, 6); // ×12
  });

  it("video-file-size: size in MB and GB", () => {
    const r = run("video-file-size", { durationMinutes: "60", bitrateMbps: "8" });
    // 8 × 60 × 60 / 8 = 3600 MB
    expect(r.sizeMb as number).toBeCloseTo(3600, 6);
    expect(r.sizeGb as number).toBeCloseTo(3600 / 1024, 6);
  });

  it("ssd-lifespan: years from TBW and daily writes", () => {
    const r = run("ssd-lifespan", { tbwRating: "600", dailyWriteGb: "50" });
    // 600×1000 / (50×365) = 600000/18250
    expect(r.lifespanYears as number).toBeCloseTo(32.876712, 4);
  });

  it("color-contrast: black on white is 21:1 and passes AA", () => {
    const r = run("color-contrast", { foregroundHex: "#000000", backgroundHex: "#FFFFFF" });
    expect(r.contrastRatio as number).toBeCloseTo(21, 2);
    expect(r.wcagAA).toBe("Pass");
  });

  it("color-contrast: low-contrast pair fails AA", () => {
    const r = run("color-contrast", { foregroundHex: "#777777", backgroundHex: "#888888" });
    expect(r.wcagAA).toBe("Fail");
    expect((r.contrastRatio as number) < 4.5).toBe(true);
  });

  it("color-contrast: invalid hex → NaN and —", () => {
    const r = run("color-contrast", { foregroundHex: "zzz", backgroundHex: "#FFFFFF" });
    expect(Number.isNaN(r.contrastRatio as number)).toBe(true);
    expect(r.wcagAA).toBe("—");
  });

  it("number-base: binary to decimal", () => {
    expect(run("number-base", { value: "1010", from: "binary", to: "decimal" }).result).toBe("10");
  });

  it("number-base: decimal to hex uppercase", () => {
    expect(run("number-base", { value: "255", from: "decimal", to: "hex" }).result).toBe("FF");
  });

  it("number-base: hex to binary", () => {
    expect(run("number-base", { value: "FF", from: "hex", to: "binary" }).result).toBe("11111111");
  });

  it("number-base: invalid digits for base → —", () => {
    expect(run("number-base", { value: "1234", from: "binary", to: "decimal" }).result).toBe("—");
  });

  it("subnet-hosts: /24 gives 254 usable, 256 total", () => {
    const r = run("subnet-hosts", { cidrPrefix: "24" });
    expect(r.usableHosts as number).toBe(254);
    expect(r.totalAddresses as number).toBe(256);
  });

  it("subnet-hosts: out-of-range prefix → NaN", () => {
    expect(Number.isNaN(run("subnet-hosts", { cidrPrefix: "40" }).usableHosts as number)).toBe(true);
  });

  it("webpage-load-time: seconds from size and speed", () => {
    const r = run("webpage-load-time", { pageSizeMb: "5", connectionMbps: "20" });
    // 5×8/20 = 2s
    expect(r.loadSeconds as number).toBeCloseTo(2, 6);
  });

  it("email-storage: total GB", () => {
    const r = run("email-storage", { emailsPerDay: "50", avgSizeMb: "0.5", years: "5" });
    // 50×0.5×365×5 / 1024 = 45625/1024
    expect(r.totalStorageGb as number).toBeCloseTo(45625 / 1024, 6);
  });

  it("device-battery-life: hours from capacity and draw", () => {
    const r = run("device-battery-life", { batteryMah: "4000", deviceDrawMa: "500" });
    expect(r.batteryHours as number).toBeCloseTo(8, 6);
  });

  it("print-size: inches from pixels and DPI", () => {
    const r = run("print-size", { pixelsWide: "3000", pixelsTall: "2400", dpi: "300" });
    expect(r.printWidthInches as number).toBeCloseTo(10, 6);
    expect(r.printHeightInches as number).toBeCloseTo(8, 6);
  });

  it("returns NaN / — for missing or zero-divisor inputs", () => {
    expect(Number.isNaN(run("data-usage", { hoursPerDay: "", gbPerHour: "3" }).monthlyGb as number)).toBe(true);
    expect(Number.isNaN(run("ssd-lifespan", { tbwRating: "600", dailyWriteGb: "0" }).lifespanYears as number)).toBe(true);
    expect(Number.isNaN(run("webpage-load-time", { pageSizeMb: "5", connectionMbps: "0" }).loadSeconds as number)).toBe(true);
    expect(Number.isNaN(run("device-battery-life", { batteryMah: "0", deviceDrawMa: "500" }).batteryHours as number)).toBe(true);
    expect(Number.isNaN(run("print-size", { pixelsWide: "3000", pixelsTall: "2400", dpi: "0" }).printWidthInches as number)).toBe(true);
    expect(run("number-base", { value: "", from: "binary", to: "decimal" }).result).toBe("—");
  });
});
