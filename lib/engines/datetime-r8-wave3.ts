import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Date & Time — Wave 3 Round 8 engines. Pure and deterministic.
   All date math is done in UTC (parse as "<date>T00:00:00Z", use getUTC*),
   so results never depend on the host timezone or the current moment.
   Times are parsed to minutes past midnight.
   Invalid inputs → NaN for numeric results, "—" for string results. */

const DAY_MS = 86_400_000;

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
// "HH:MM" — both zero-padded, minutes-of-day input.
const fmtHHMM = (minutesOfDay: number) =>
  `${pad2(Math.floor(minutesOfDay / 60))}:${pad2(minutesOfDay % 60)}`;

const wholeDaysBetween = (a: Date, b: Date) =>
  Math.round((b.getTime() - a.getTime()) / DAY_MS);

// 1. Days between two dates on the 30/360 US (NASD) day-count convention.
const days360: ComputeFn = (i) => {
  const start = parseUTCDate(i.startDate);
  const end = parseUTCDate(i.endDate);
  if (!start || !end) return { days360: NaN };
  const startD = Math.min(start.getUTCDate(), 30);
  const endD = Math.min(end.getUTCDate(), 30);
  const value =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 360 +
    (end.getUTCMonth() - start.getUTCMonth()) * 30 +
    (endD - startD);
  return { days360: value };
};

// 2. Whole weeks (and the leftover days) between two dates.
const weeksBetween: ComputeFn = (i) => {
  const start = parseUTCDate(i.startDate);
  const end = parseUTCDate(i.endDate);
  if (!start || !end) return { weeks: NaN, extraDays: NaN, totalDays: NaN };
  const totalDays = wholeDaysBetween(start, end);
  const weeks = Math.floor(totalDays / 7);
  const extraDays = totalDays - weeks * 7; // true modulo, matches floor
  return { weeks, extraDays, totalDays };
};

// 3. Full calendar months between two dates, plus the remaining days.
const monthsBetween: ComputeFn = (i) => {
  const start = parseUTCDate(i.startDate);
  const end = parseUTCDate(i.endDate);
  if (!start || !end || end.getTime() < start.getTime())
    return { months: NaN, remainingDays: NaN };
  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());
  if (end.getUTCDate() < start.getUTCDate()) months -= 1;
  // Anchor = start advanced by `months` whole months, then count leftover days.
  const anchor = new Date(
    Date.UTC(
      start.getUTCFullYear(),
      start.getUTCMonth() + months,
      start.getUTCDate(),
    ),
  );
  const remainingDays = wholeDaysBetween(anchor, end);
  return { months, remainingDays };
};

// 4. Fiscal / calendar quarter that a date falls in.
const fiscalQuarter: ComputeFn = (i) => {
  const d = parseUTCDate(i.date);
  if (!d) return { quarter: NaN, quarterLabel: "—" };
  const quarter = Math.floor(d.getUTCMonth() / 3) + 1;
  return { quarter, quarterLabel: `Q${quarter}` };
};

// 5. Add two H:MM durations together.
const timeAddition: ComputeFn = (i) => {
  const h1 = num(i.hours1);
  const m1 = num(i.minutes1);
  const h2 = num(i.hours2);
  const m2 = num(i.minutes2);
  if (
    !Number.isFinite(h1) ||
    !Number.isFinite(m1) ||
    !Number.isFinite(h2) ||
    !Number.isFinite(m2)
  )
    return { totalTime: "—", totalMinutes: NaN };
  const totalMinutes = h1 * 60 + m1 + (h2 * 60 + m2);
  if (totalMinutes < 0) return { totalTime: "—", totalMinutes: NaN };
  return { totalTime: fmtHMM(totalMinutes), totalMinutes };
};

// 6. Hours + minutes → decimal hours.
const timeToDecimal: ComputeFn = (i) => {
  const hours = num(i.hours);
  const minutes = num(i.minutes);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes))
    return { decimalHours: NaN };
  return { decimalHours: hours + minutes / 60 };
};

// 7. Workday end time from a start time, shift length and unpaid break.
const workdayEndTime: ComputeFn = (i) => {
  const start = parseClock(i.startTime);
  const shiftHours = num(i.shiftHours);
  const brk = num(i.breakMinutes) || 0;
  if (start === null || !Number.isFinite(shiftHours) || !Number.isFinite(brk))
    return { endTime: "—", dayOffset: NaN };
  const total = start + shiftHours * 60 + brk;
  if (total < 0) return { endTime: "—", dayOffset: NaN };
  const dayOffset = Math.floor(total / 1440);
  const rem = Math.round(total - dayOffset * 1440); // 0..1439
  return { endTime: fmtHHMM(rem), dayOffset };
};

// 8. Add business days (skipping Sat/Sun) to a start date.
const addBusinessDays: ComputeFn = (i) => {
  const start = parseUTCDate(i.startDate);
  const businessDays = num(i.businessDays);
  if (!start || !Number.isFinite(businessDays))
    return { resultDate: "—", calendarDaysSpanned: NaN };
  const step = businessDays >= 0 ? 1 : -1;
  let remaining = Math.abs(Math.trunc(businessDays));
  const cursor = new Date(start.getTime());
  while (remaining > 0) {
    cursor.setUTCDate(cursor.getUTCDate() + step);
    const wd = cursor.getUTCDay();
    if (wd !== 0 && wd !== 6) remaining -= 1;
  }
  const calendarDaysSpanned = Math.abs(wholeDaysBetween(start, cursor));
  return { resultDate: fmtDate(cursor), calendarDaysSpanned };
};

// 9. Sleep duration between bedtime and wake time (overnight aware).
const sleepDuration: ComputeFn = (i) => {
  const bed = parseClock(i.bedTime);
  const wake = parseClock(i.wakeTime);
  if (bed === null || wake === null) return { hoursSlept: NaN };
  let end = wake;
  if (end <= bed) end += 1440; // slept overnight
  return { hoursSlept: (end - bed) / 60 };
};

// 10. Hours (and minutes) between two clock times (overnight aware).
const hoursBetweenTimes: ComputeFn = (i) => {
  const start = parseClock(i.startTime);
  const end = parseClock(i.endTime);
  if (start === null || end === null)
    return { totalHours: NaN, totalMinutes: NaN };
  let e = end;
  if (e < start) e += 1440; // crossed midnight
  const totalMinutes = e - start;
  return { totalHours: totalMinutes / 60, totalMinutes };
};

export const datetimeR8Engines: Record<string, ComputeFn> = {
  "days-360": days360,
  "weeks-between": weeksBetween,
  "months-between": monthsBetween,
  "fiscal-quarter": fiscalQuarter,
  "time-addition": timeAddition,
  "time-to-decimal": timeToDecimal,
  "workday-end-time": workdayEndTime,
  "add-business-days": addBusinessDays,
  "sleep-duration": sleepDuration,
  "hours-between-times": hoursBetweenTimes,
};
