import { describe, it, expect } from "vitest";
import { datetimeR8Engines } from "./datetime-r8-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  datetimeR8Engines[id](inputs);

describe("datetime r8 wave3 engines", () => {
  it("days-360: 30/360 US convention", () => {
    // 2026-01-15 → 2026-04-15: 0*360 + 3*30 + (15-15) = 90
    expect(run("days-360", { startDate: "2026-01-15", endDate: "2026-04-15" }).days360).toBe(90);
    // Full year: 2025-01-01 → 2026-01-01 = 360
    expect(run("days-360", { startDate: "2025-01-01", endDate: "2026-01-01" }).days360).toBe(360);
    // Day capping at 30: 2026-01-31 → 2026-02-28 = 0 + 30 + (28-30) = 28
    expect(run("days-360", { startDate: "2026-01-31", endDate: "2026-02-28" }).days360).toBe(28);
  });

  it("weeks-between: floor weeks, extra days, total days", () => {
    const r = run("weeks-between", { startDate: "2026-01-01", endDate: "2026-01-18" });
    expect(r.totalDays).toBe(17);
    expect(r.weeks).toBe(2);
    expect(r.extraDays).toBe(3);
    // Exact multiple of 7
    const r2 = run("weeks-between", { startDate: "2026-01-01", endDate: "2026-01-15" });
    expect(r2.weeks).toBe(2);
    expect(r2.extraDays).toBe(0);
  });

  it("months-between: full calendar months + remaining days", () => {
    // 2026-01-15 → 2026-03-20: 2 months, 5 remaining days
    const r = run("months-between", { startDate: "2026-01-15", endDate: "2026-03-20" });
    expect(r.months).toBe(2);
    expect(r.remainingDays).toBe(5);
    // Day not yet reached: 2026-01-15 → 2026-03-10 = 1 month + leftover
    const r2 = run("months-between", { startDate: "2026-01-15", endDate: "2026-03-10" });
    expect(r2.months).toBe(1);
    expect(r2.remainingDays).toBe(23);
  });

  it("fiscal-quarter: quarter number and label", () => {
    expect(run("fiscal-quarter", { date: "2026-01-10" }).quarter).toBe(1);
    expect(run("fiscal-quarter", { date: "2026-07-01" }).quarter).toBe(3);
    expect(run("fiscal-quarter", { date: "2026-07-01" }).quarterLabel).toBe("Q3");
    expect(run("fiscal-quarter", { date: "2026-12-31" }).quarterLabel).toBe("Q4");
  });

  it("time-addition: sums two H:MM durations", () => {
    const r = run("time-addition", { hours1: "2", minutes1: "45", hours2: "1", minutes2: "30" });
    expect(r.totalTime).toBe("4:15");
    expect(r.totalMinutes).toBe(255);
    // Rolls past 10 hours, stays H:MM not clock
    const r2 = run("time-addition", { hours1: "8", minutes1: "50", hours2: "3", minutes2: "20" });
    expect(r2.totalTime).toBe("12:10");
    expect(r2.totalMinutes).toBe(730);
  });

  it("time-to-decimal: hours + minutes/60", () => {
    expect(run("time-to-decimal", { hours: "7", minutes: "45" }).decimalHours).toBeCloseTo(7.75, 10);
    expect(run("time-to-decimal", { hours: "0", minutes: "30" }).decimalHours).toBeCloseTo(0.5, 10);
  });

  it("workday-end-time: end time with rollover past midnight", () => {
    // 09:00 + 8h shift + 30 min break = 17:30
    const r = run("workday-end-time", { startTime: "09:00", shiftHours: "8", breakMinutes: "30" });
    expect(r.endTime).toBe("17:30");
    expect(r.dayOffset).toBe(0);
    // 22:00 + 5h + 0 break = 03:00 next day
    const r2 = run("workday-end-time", { startTime: "22:00", shiftHours: "5", breakMinutes: "0" });
    expect(r2.endTime).toBe("03:00");
    expect(r2.dayOffset).toBe(1);
  });

  it("add-business-days: skips weekends", () => {
    // Fri 2026-01-02 + 1 business day = Mon 2026-01-05
    const r = run("add-business-days", { startDate: "2026-01-02", businessDays: "1" });
    expect(r.resultDate).toBe("2026-01-05");
    expect(r.calendarDaysSpanned).toBe(3);
    // Mon 2026-01-05 + 5 business days = Mon 2026-01-12
    const r2 = run("add-business-days", { startDate: "2026-01-05", businessDays: "5" });
    expect(r2.resultDate).toBe("2026-01-12");
    expect(r2.calendarDaysSpanned).toBe(7);
  });

  it("sleep-duration: overnight aware", () => {
    // 23:00 → 07:00 = 8 hours
    expect(run("sleep-duration", { bedTime: "23:00", wakeTime: "07:00" }).hoursSlept).toBeCloseTo(8, 10);
    // Same-evening span 22:30 → 06:15 = 7.75 hours
    expect(run("sleep-duration", { bedTime: "22:30", wakeTime: "06:15" }).hoursSlept).toBeCloseTo(7.75, 10);
  });

  it("hours-between-times: overnight aware, hours + minutes", () => {
    const r = run("hours-between-times", { startTime: "09:00", endTime: "17:30" });
    expect(r.totalHours).toBeCloseTo(8.5, 10);
    expect(r.totalMinutes).toBe(510);
    // Crosses midnight: 22:00 → 06:00 = 8h
    const r2 = run("hours-between-times", { startTime: "22:00", endTime: "06:00" });
    expect(r2.totalHours).toBeCloseTo(8, 10);
    expect(r2.totalMinutes).toBe(480);
  });

  it("returns NaN / — for invalid inputs", () => {
    expect(Number.isNaN(run("days-360", { startDate: "", endDate: "2026-01-01" }).days360 as number)).toBe(true);
    expect(Number.isNaN(run("weeks-between", { startDate: "bad", endDate: "2026-01-01" }).weeks as number)).toBe(true);
    expect(Number.isNaN(run("months-between", { startDate: "2026-05-01", endDate: "2026-01-01" }).months as number)).toBe(true);
    expect(run("fiscal-quarter", { date: "" }).quarterLabel).toBe("—");
    expect(run("time-addition", { hours1: "", minutes1: "0", hours2: "1", minutes2: "0" }).totalTime).toBe("—");
    expect(Number.isNaN(run("time-to-decimal", { hours: "", minutes: "30" }).decimalHours as number)).toBe(true);
    expect(run("workday-end-time", { startTime: "bad", shiftHours: "8", breakMinutes: "0" }).endTime).toBe("—");
    expect(run("add-business-days", { startDate: "2026-01-01", businessDays: "" }).resultDate).toBe("—");
    expect(Number.isNaN(run("sleep-duration", { bedTime: "", wakeTime: "07:00" }).hoursSlept as number)).toBe(true);
    expect(Number.isNaN(run("hours-between-times", { startTime: "bad", endTime: "06:00" }).totalHours as number)).toBe(true);
  });
});
