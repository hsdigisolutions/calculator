import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Date & Time — Wave 3 Round 5 engines. Pure and deterministic.
   All date math is done in UTC (parse as "<date>T00:00:00Z", use getUTC*),
   so results never depend on the host timezone or the current moment.
   Invalid inputs → NaN for numeric results, "—" for string results. */

const DAY_MS = 86_400_000;
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Parse a YYYY-MM-DD string into a UTC Date, or null when malformed.
const parseUTCDate = (s: string): Date | null => {
  if (!s || !/^\d{4}-\d{2}-\d{2}$/.test(s.trim())) return null;
  const d = new Date(s.trim() + "T00:00:00Z");
  return Number.isNaN(d.getTime()) ? null : d;
};

// Parse an HH:MM clock string into minutes past midnight, or null.
const parseClock = (s: string): number | null => {
  if (!s) return null;
  const m = /^(\d{1,2}):(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const h = Number(m[1]);
  const mins = Number(m[2]);
  if (h > 23 || mins > 59) return null;
  return h * 60 + mins;
};

const pad2 = (n: number) => String(n).padStart(2, "0");
const fmtDate = (d: Date) =>
  `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
// "H:MM" — hours unpadded, minutes zero-padded.
const fmtHMM = (totalMinutes: number) =>
  `${Math.floor(totalMinutes / 60)}:${pad2(totalMinutes % 60)}`;

const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

// 1. Add (or subtract) whole days to a start date.
const addDays: ComputeFn = (i) => {
  const start = parseUTCDate(i.startDate);
  const days = num(i.days);
  if (!start || !Number.isFinite(days))
    return { endDate: "—", endWeekday: "—" };
  const end = new Date(start.getTime() + Math.trunc(days) * DAY_MS);
  return { endDate: fmtDate(end), endWeekday: WEEKDAYS[end.getUTCDay()] };
};

// 2. ISO-8601 week number and day of the year.
const weekNumber: ComputeFn = (i) => {
  const d = parseUTCDate(i.date);
  if (!d) return { isoWeek: NaN, dayOfYear: NaN };
  // Day of year: difference from Jan 1 of the same year.
  const jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const dayOfYear = Math.round((d.getTime() - jan1.getTime()) / DAY_MS) + 1;
  // ISO week: shift to the Thursday of the current ISO week, then count weeks
  // from that year's first Thursday.
  const target = new Date(d.getTime());
  const dayNr = (d.getUTCDay() + 6) % 7; // Mon=0 … Sun=6
  target.setUTCDate(target.getUTCDate() - dayNr + 3); // nearest Thursday
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const firstDayNr = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNr + 3);
  const isoWeek =
    1 + Math.round((target.getTime() - firstThursday.getTime()) / (7 * DAY_MS));
  return { isoWeek, dayOfYear };
};

// 3. Day of the week for a date, plus a weekend flag.
const dayOfWeek: ComputeFn = (i) => {
  const d = parseUTCDate(i.date);
  if (!d) return { weekday: "—", isWeekend: "—" };
  const wd = d.getUTCDay();
  return {
    weekday: WEEKDAYS[wd],
    isWeekend: wd === 0 || wd === 6 ? "Yes" : "No",
  };
};

// 4. Leap-year test, day count and the next leap year.
const leapYear: ComputeFn = (i) => {
  const year = num(i.year);
  if (!Number.isFinite(year) || !Number.isInteger(year))
    return { isLeapYear: "—", daysInYear: NaN, nextLeapYear: NaN };
  const y = Math.trunc(year);
  let next = y + 1;
  while (!isLeap(next)) next++;
  return {
    isLeapYear: isLeap(y) ? "Yes" : "No",
    daysInYear: isLeap(y) ? 366 : 365,
    nextLeapYear: next,
  };
};

// 5. Time-card hours worked from clock-in / clock-out minus break.
const timeCard: ComputeFn = (i) => {
  const cin = parseClock(i.clockIn);
  const cout = parseClock(i.clockOut);
  const brk = num(i.breakMinutes) || 0;
  if (cin === null || cout === null || !Number.isFinite(brk))
    return { hoursWorked: NaN, formatted: "—" };
  let span = cout - cin;
  if (span < 0) span += 1440; // crossed midnight
  const worked = span - brk;
  if (worked < 0) return { hoursWorked: NaN, formatted: "—" };
  return { hoursWorked: worked / 60, formatted: fmtHMM(worked) };
};

// 6. Decimal hours → H:MM and total minutes.
const decimalHours: ComputeFn = (i) => {
  const dec = num(i.decimalHours);
  if (!Number.isFinite(dec) || dec < 0)
    return { formatted: "—", totalMinutes: NaN };
  const totalMinutes = Math.round(dec * 60);
  return { formatted: fmtHMM(totalMinutes), totalMinutes };
};

// 7. Unix timestamp (seconds) → UTC date-time and weekday.
const unixTimestamp: ComputeFn = (i) => {
  const secs = num(i.unixSeconds);
  if (!Number.isFinite(secs)) return { utcDateTime: "—", weekday: "—" };
  const d = new Date(Math.trunc(secs) * 1000);
  if (Number.isNaN(d.getTime())) return { utcDateTime: "—", weekday: "—" };
  const utc = `${fmtDate(d)} ${pad2(d.getUTCHours())}:${pad2(
    d.getUTCMinutes(),
  )}:${pad2(d.getUTCSeconds())} UTC`;
  return { utcDateTime: utc, weekday: WEEKDAYS[d.getUTCDay()] };
};

// 8. Annual working hours and equivalent 8-hour working days.
const annualWorkHours: ComputeFn = (i) => {
  const hoursPerWeek = num(i.hoursPerWeek);
  const weeksPerYear = Number.isFinite(num(i.weeksPerYear))
    ? num(i.weeksPerYear)
    : 52;
  if (!Number.isFinite(hoursPerWeek) || !Number.isFinite(weeksPerYear))
    return { totalHours: NaN, workingDays: NaN };
  const totalHours = hoursPerWeek * weeksPerYear;
  return { totalHours, workingDays: totalHours / 8 };
};

// 9. Calendar age at a given date (years, remaining months, total days).
const ageOnDate: ComputeFn = (i) => {
  const birth = parseUTCDate(i.birthDate);
  const asOf = parseUTCDate(i.asOfDate);
  if (!birth || !asOf || asOf.getTime() < birth.getTime())
    return { years: NaN, months: NaN, totalDays: NaN };
  let years = asOf.getUTCFullYear() - birth.getUTCFullYear();
  let months = asOf.getUTCMonth() - birth.getUTCMonth();
  const days = asOf.getUTCDate() - birth.getUTCDate();
  if (days < 0) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const totalDays = Math.round((asOf.getTime() - birth.getTime()) / DAY_MS);
  return { years, months, totalDays };
};

// 10. Add hours and minutes to a start time; report day rollover.
const addTime: ComputeFn = (i) => {
  const start = parseClock(i.startTime);
  const addH = num(i.addHours);
  const addM = num(i.addMinutes);
  if (start === null || !Number.isFinite(addH) || !Number.isFinite(addM))
    return { endTime: "—", dayOffset: NaN };
  const total = start + addH * 60 + addM;
  const dayOffset = Math.floor(total / 1440);
  const rem = total - dayOffset * 1440; // always 0..1439
  return {
    endTime: `${pad2(Math.floor(rem / 60))}:${pad2(rem % 60)}`,
    dayOffset,
  };
};

export const datetimeR5Engines: Record<string, ComputeFn> = {
  "add-days": addDays,
  "week-number": weekNumber,
  "day-of-week": dayOfWeek,
  "leap-year": leapYear,
  "time-card": timeCard,
  "decimal-hours": decimalHours,
  "unix-timestamp": unixTimestamp,
  "annual-work-hours": annualWorkHours,
  "age-on-date": ageOnDate,
  "add-time": addTime,
};
