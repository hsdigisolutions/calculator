import { describe, it, expect } from "vitest";
import { datetimeR5Engines } from "./datetime-r5-wave3";

const run = (id: string, inputs: Record<string, string>) =>
  datetimeR5Engines[id](inputs);

describe("datetime r5 wave3 engines", () => {
  it("add-days: adds whole days and reports the weekday", () => {
    const r = run("add-days", { startDate: "2026-01-01", days: "10" });
    expect(r.endDate).toBe("2026-01-11");
    expect(r.endWeekday).toBe("Sunday");
  });

  it("add-days: subtracts with negative days", () => {
    const r = run("add-days", { startDate: "2026-01-11", days: "-10" });
    expect(r.endDate).toBe("2026-01-01");
    expect(r.endWeekday).toBe("Thursday");
  });

  it("week-number: ISO week and day of year", () => {
    const a = run("week-number", { date: "2026-01-01" });
    expect(a.isoWeek).toBe(1);
    expect(a.dayOfYear).toBe(1);
    const b = run("week-number", { date: "2026-06-15" });
    expect(b.isoWeek).toBe(25);
    expect(b.dayOfYear).toBe(166);
  });

  it("week-number: date in an early-January ISO week 53", () => {
    // 2027-01-01 is a Friday → still ISO week 53 of 2026.
    const r = run("week-number", { date: "2027-01-01" });
    expect(r.isoWeek).toBe(53);
  });

  it("day-of-week: weekday name and weekend flag", () => {
    const wd = run("day-of-week", { date: "2026-07-04" });
    expect(wd.weekday).toBe("Saturday");
    expect(wd.isWeekend).toBe("Yes");
    const mon = run("day-of-week", { date: "2026-06-15" });
    expect(mon.weekday).toBe("Monday");
    expect(mon.isWeekend).toBe("No");
  });

  it("leap-year: divisibility rules incl. century exceptions", () => {
    const y2024 = run("leap-year", { year: "2024" });
    expect(y2024.isLeapYear).toBe("Yes");
    expect(y2024.daysInYear).toBe(366);
    expect(y2024.nextLeapYear).toBe(2028);
    const y2026 = run("leap-year", { year: "2026" });
    expect(y2026.isLeapYear).toBe("No");
    expect(y2026.daysInYear).toBe(365);
    expect(y2026.nextLeapYear).toBe(2028);
    expect(run("leap-year", { year: "1900" }).isLeapYear).toBe("No");
    expect(run("leap-year", { year: "2000" }).isLeapYear).toBe("Yes");
    expect(run("leap-year", { year: "1900" }).nextLeapYear).toBe(1904);
  });

  it("time-card: hours worked minus break, with overnight support", () => {
    const day = run("time-card", {
      clockIn: "09:00",
      clockOut: "17:30",
      breakMinutes: "30",
    });
    expect(day.hoursWorked).toBeCloseTo(8, 5);
    expect(day.formatted).toBe("8:00");
    const night = run("time-card", {
      clockIn: "22:00",
      clockOut: "06:00",
      breakMinutes: "0",
    });
    expect(night.hoursWorked).toBeCloseTo(8, 5);
    expect(night.formatted).toBe("8:00");
  });

  it("decimal-hours: decimal → H:MM and minutes", () => {
    const r = run("decimal-hours", { decimalHours: "8.5" });
    expect(r.formatted).toBe("8:30");
    expect(r.totalMinutes).toBe(510);
    expect(run("decimal-hours", { decimalHours: "1.25" }).formatted).toBe("1:15");
  });

  it("unix-timestamp: seconds → UTC date-time and weekday", () => {
    const epoch = run("unix-timestamp", { unixSeconds: "0" });
    expect(epoch.utcDateTime).toBe("1970-01-01 00:00:00 UTC");
    expect(epoch.weekday).toBe("Thursday");
    const y2021 = run("unix-timestamp", { unixSeconds: "1609459200" });
    expect(y2021.utcDateTime).toBe("2021-01-01 00:00:00 UTC");
    expect(y2021.weekday).toBe("Friday");
  });

  it("annual-work-hours: total hours and 8-hour working days", () => {
    const r = run("annual-work-hours", { hoursPerWeek: "40", weeksPerYear: "52" });
    expect(r.totalHours).toBe(2080);
    expect(r.workingDays).toBe(260);
  });

  it("age-on-date: calendar age at a given date", () => {
    const r = run("age-on-date", {
      birthDate: "1990-06-15",
      asOfDate: "2026-08-30",
    });
    expect(r.years).toBe(36);
    expect(r.months).toBe(2);
    const simple = run("age-on-date", {
      birthDate: "2000-01-01",
      asOfDate: "2000-02-01",
    });
    expect(simple.years).toBe(0);
    expect(simple.months).toBe(1);
    expect(simple.totalDays).toBe(31);
    // day borrow: 10th < 15th rolls the month back.
    const borrow = run("age-on-date", {
      birthDate: "2000-01-15",
      asOfDate: "2000-02-10",
    });
    expect(borrow.years).toBe(0);
    expect(borrow.months).toBe(0);
    expect(borrow.totalDays).toBe(26);
  });

  it("add-time: adds hours/minutes and reports day rollover", () => {
    const same = run("add-time", {
      startTime: "09:00",
      addHours: "5",
      addMinutes: "30",
    });
    expect(same.endTime).toBe("14:30");
    expect(same.dayOffset).toBe(0);
    const roll = run("add-time", {
      startTime: "22:00",
      addHours: "5",
      addMinutes: "0",
    });
    expect(roll.endTime).toBe("03:00");
    expect(roll.dayOffset).toBe(1);
  });

  it("invalid inputs → NaN for numbers and '—' for strings", () => {
    expect(run("add-days", { startDate: "", days: "10" }).endDate).toBe("—");
    expect(Number.isNaN(run("week-number", { date: "not-a-date" }).isoWeek as number)).toBe(true);
    expect(run("day-of-week", { date: "" }).weekday).toBe("—");
    expect(Number.isNaN(run("leap-year", { year: "" }).daysInYear as number)).toBe(true);
    expect(Number.isNaN(run("time-card", { clockIn: "bad", clockOut: "17:00", breakMinutes: "0" }).hoursWorked as number)).toBe(true);
    expect(Number.isNaN(run("age-on-date", { birthDate: "2026-01-01", asOfDate: "2000-01-01" }).years as number)).toBe(true);
    expect(run("add-time", { startTime: "25:00", addHours: "1", addMinutes: "0" }).endTime).toBe("—");
  });
});
