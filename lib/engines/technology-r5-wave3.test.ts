import { describe, it, expect } from "vitest";
import { technologyR5Engines } from "./technology-r5-wave3";

const run = (id: string, inputs: Record<string, string>) => technologyR5Engines[id](inputs);

describe("technology r5 wave3 engines", () => {
  it("password-entropy: bits = length × log2(charset), labelled by strength", () => {
    const r = run("password-entropy", { length: "16", charsetSize: "95" });
    expect(r.entropyBits as number).toBeCloseTo(105.12, 1);
    expect(r.crackLabel).toBe("Very strong");
    expect(run("password-entropy", { length: "8", charsetSize: "26" }).crackLabel).toBe("Weak");
  });

  it("hex-rgb: parses 6-digit and 3-digit hex", () => {
    const r = run("hex-rgb", { hex: "#0EA5E9" });
    expect(r.rgb).toBe("rgb(14, 165, 233)");
    expect(r.red).toBe(14);
    expect(r.green).toBe(165);
    expect(r.blue).toBe(233);
    const short = run("hex-rgb", { hex: "0af" });
    expect(short.rgb).toBe("rgb(0, 170, 255)");
  });

  it("hex-rgb: invalid hex returns dash / NaN", () => {
    const r = run("hex-rgb", { hex: "xyz" });
    expect(r.rgb).toBe("—");
    expect(Number.isNaN(r.red as number)).toBe(true);
  });

  it("image-file-size: width × height × depth ÷ 8 in MB and KB", () => {
    const r = run("image-file-size", { widthPx: "1920", heightPx: "1080", bitDepth: "24" });
    expect(r.sizeMB as number).toBeCloseTo(5.9326, 3);
    expect(r.sizeKB as number).toBeCloseTo(6075, 0);
  });

  it("px-rem: pixels ÷ root font size, em matches rem", () => {
    const r = run("px-rem", { pixels: "24", rootFontSize: "16" });
    expect(r.rem as number).toBeCloseTo(1.5, 5);
    expect(r.em as number).toBeCloseTo(1.5, 5);
  });

  it("typing-speed: gross, net WPM and accuracy", () => {
    const r = run("typing-speed", { words: "400", minutes: "5", errors: "10" });
    expect(r.grossWpm as number).toBeCloseTo(80, 5);
    expect(r.netWpm as number).toBeCloseTo(78, 5);
    expect(r.accuracy as number).toBeCloseTo(97.5, 5);
  });

  it("cloud-storage-cost: GB × price × months", () => {
    const r = run("cloud-storage-cost", { gigabytes: "1000", pricePerGbMonth: "0.023", months: "12" });
    expect(r.monthlyCost as number).toBeCloseTo(23, 5);
    expect(r.totalCost as number).toBeCloseTo(276, 5);
  });

  it("api-rate-limit: total over window and per-minute rate", () => {
    const r = run("api-rate-limit", { requestsPerSecond: "10", hours: "24" });
    expect(r.totalRequests as number).toBe(864000);
    expect(r.perMinute as number).toBe(600);
  });

  it("network-latency: one-way propagation and round-trip", () => {
    const r = run("network-latency", { distanceKm: "1000", mediumFactor: "1.47" });
    expect(r.oneWayMs as number).toBeCloseTo(4.9034, 3);
    expect(r.roundTripMs as number).toBeCloseTo(9.8068, 3);
  });

  it("bandwidth-cost: monthly and annual", () => {
    const r = run("bandwidth-cost", { monthlyGb: "1000", pricePerGb: "0.09" });
    expect(r.monthlyCost as number).toBeCloseTo(90, 5);
    expect(r.annualCost as number).toBeCloseTo(1080, 5);
  });

  it("gzip-savings: ratio, percent saved, KB saved", () => {
    const r = run("gzip-savings", { originalKb: "100", compressedKb: "25" });
    expect(r.compressionRatio as number).toBeCloseTo(4, 5);
    expect(r.savedPercent as number).toBeCloseTo(75, 5);
    expect(r.savedKb as number).toBeCloseTo(75, 5);
  });

  it("returns NaN on missing or zero-denominator inputs", () => {
    expect(Number.isNaN(run("px-rem", { pixels: "24", rootFontSize: "0" }).rem as number)).toBe(true);
    expect(Number.isNaN(run("typing-speed", { words: "400", minutes: "0", errors: "0" }).netWpm as number)).toBe(true);
    expect(Number.isNaN(run("gzip-savings", { originalKb: "100", compressedKb: "0" }).compressionRatio as number)).toBe(true);
    expect(Number.isNaN(run("image-file-size", { widthPx: "", heightPx: "1080", bitDepth: "24" }).sizeMB as number)).toBe(true);
  });
});
