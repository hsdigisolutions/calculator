import type { CalculatorDefinition } from "../types";

/* Date & Time — Wave 3 Round 5 definitions (10 calculators).
   Engines live in lib/engines/datetime-r5-wave3.ts, keyed by `id`.
   String results use format: "text"; every calc has one isPrimary result. */

const RELATED = [
  "age-calculator",
  "date-difference-calculator",
  "business-days-calculator",
  "time-duration-calculator",
  "countdown-calculator",
];

export const datetimeR5Calculators: CalculatorDefinition[] = [
  {
    id: "add-days",
    slug: "add-days-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Add Days Calculator",
    shortDescription: "Add or subtract days from a date.",
    seoTitle: "Add Days Calculator — Add or Subtract Days From a Date",
    metaDescription:
      "Free add days calculator. Add or subtract any number of days from a start date and see the resulting date and weekday.",
    primaryKeyword: "add days calculator",
    secondaryKeywords: [
      "date plus days",
      "days from date calculator",
      "add days to date",
    ],
    fields: [
      { id: "startDate", label: "Start date", type: "date", required: true, span: 1 },
      {
        id: "days",
        label: "Days to add",
        type: "number",
        placeholder: "30",
        required: true,
        span: 1,
        step: 1,
        helpText: "Use a negative number to count backwards",
      },
    ],
    results: [
      { id: "endDate", label: "Resulting date", format: "text", isPrimary: true },
      { id: "endWeekday", label: "Weekday", format: "text", isPrimary: false },
    ],
    formula: "endDate = startDate + days (whole days), evaluated on the UTC calendar",
    formulaSource: "ISO 8601 / Gregorian calendar",
    explanation:
      "An add days calculator takes a starting date and a number of days and returns the date that lands that many days later, along with the weekday it falls on. Enter a negative number and it counts backwards instead, so the same tool answers both \"what date is 45 days from now\" and \"what date was 45 days ago.\" It works from a continuous day count rather than nudging the day-of-month field, so it steps cleanly over month ends and year boundaries without you tracking how long each month is.\n\nThis matters wherever a deadline is defined as an offset. Payment terms of net-30, a 90-day return window, a 14-day cancellation right, an incubation period, or a project milestone stated as \"start plus 60 working-adjacent days\" all reduce to adding days to a known date. Doing it by hand across February or a year-end is exactly where off-by-one and wrong-month mistakes appear, and a single miscounted day can void a return or miss a filing.\n\nThe weekday output is often as useful as the date itself, since a deadline that lands on a Saturday or Sunday usually rolls to the next working day in practice. Contract administrators, logistics planners, HR teams and anyone counting toward an event use an add days calculator to turn an offset into a firm calendar date they can put on a schedule.",
    example: {
      inputs: { startDate: "2026-01-01", days: "10" },
      explanation:
        "Ten days after 1 January 2026 is 11 January 2026, which is a Sunday.",
    },
    formulaExplanation:
      "The start date is converted to a single continuous count of days (via a UTC timestamp), the offset is added, and the total is converted back to a calendar date. Because a running day index has no notion of month length, every 30-day and 31-day month and every leap day is absorbed automatically. The weekday comes from the result's position in the seven-day cycle, and negative offsets simply subtract, so counting backwards needs no special case.",
    faqs: [
      { question: "How do I subtract days instead of adding them?", answer: "Enter the number of days as a negative value. Typing -45 in the days field returns the date 45 days before the start date, along with its weekday. The calculator uses the same continuous day count for both directions, so subtracting across a month start or a year boundary is handled exactly the same way as adding, with no separate mode to switch on." },
      { question: "Does it count the start date as day one?", answer: "No. The start date is day zero, so adding one day gives the following calendar date, not the start date itself. If your rule counts the start date inclusively, for example a warranty that runs from and including the purchase day, subtract one from the number of days you enter. Whether to count inclusively depends on the wording of your deadline or contract." },
      { question: "Is the weekday accurate across leap years?", answer: "Yes. The result is derived from a continuous day count that already includes any 29 February in the range, so the weekday reflects the true position in the seven-day cycle. There is no separate leap-year adjustment to apply. A span that crosses a leap day will shift the weekday by the extra day automatically, which is one reason manual counting so often lands on the wrong weekday." },
      { question: "Does it skip weekends or holidays?", answer: "No. This calculator adds calendar days, so weekends and public holidays are included in the count and the result can land on any day of the week. If you need to add working days only, use a business-days tool instead. The weekday output helps here: if your deadline falls on a Saturday or Sunday you can roll it forward to the next working day yourself." },
      { question: "Why compute the date in UTC?", answer: "Working on the UTC calendar keeps the result stable regardless of the timezone or daylight-saving rules of whoever runs the calculator. Because only whole calendar days are involved, there is no hour component to shift, so the date you get is the same everywhere. This determinism is what lets the same offset produce the same answer for every user rather than varying by an hour near midnight." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "week-number",
    slug: "week-number-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Week Number Calculator",
    shortDescription: "Find the ISO week number of a date.",
    seoTitle: "Week Number Calculator — ISO-8601 Week of the Year",
    metaDescription:
      "Free week number calculator. Find the ISO-8601 week number and the day of the year for any date.",
    primaryKeyword: "week number calculator",
    secondaryKeywords: [
      "iso week number",
      "what week is it",
      "day of year calculator",
    ],
    fields: [{ id: "date", label: "Date", type: "date", required: true }],
    results: [
      { id: "isoWeek", label: "ISO week number", format: "number", decimals: 0, isPrimary: true },
      { id: "dayOfYear", label: "Day of the year", format: "number", decimals: 0, isPrimary: false },
    ],
    formula:
      "ISO-8601 week: week 1 is the week containing the year's first Thursday; weeks run Monday–Sunday",
    formulaSource: "ISO 8601 / Gregorian calendar",
    explanation:
      "A week number calculator tells you which numbered week of the year a date falls in under the ISO-8601 standard, and also how many days into the year that date is. ISO weeks run Monday to Sunday, and week 1 is defined as the week that contains the year's first Thursday, which is the same as the week holding 4 January. That definition is what businesses, ERP systems and calendars mean when they refer to \"week 32\" or \"CW14.\"\n\nThis matters because week numbers are a common planning currency, especially in Europe and in manufacturing, logistics and retail. Production schedules, shipping windows, sprint plans and financial calendars are frequently quoted by week number rather than by date, and everyone involved has to agree on the same numbering. The ISO rule removes ambiguity about which week a date near a year boundary belongs to, where informal counting tends to disagree.\n\nThe day-of-year figure, from 1 to 365 or 366, is the ordinal date and is handy for logs, sequence numbering and quick gap estimates. Because the ISO definition anchors on Thursdays, the first days of January can belong to week 52 or 53 of the previous year, and the last days of December can belong to week 1 of the next, which a week number calculator resolves correctly so you never mislabel a cross-year week.",
    example: {
      inputs: { date: "2026-06-15" },
      explanation:
        "15 June 2026 is a Monday in ISO week 25, and it is the 166th day of 2026.",
    },
    formulaExplanation:
      "The date is shifted to the Thursday of its own Monday–Sunday week, because ISO ties each week to its Thursday. The number of whole weeks between that Thursday and the first Thursday of its year, plus one, is the ISO week number. Anchoring on Thursday is what makes 1–3 January sometimes fall in the previous year's week 52 or 53, and 29–31 December sometimes fall in week 1 of the next year. Day of the year is the date minus 1 January.",
    faqs: [
      { question: "What is the ISO-8601 week numbering rule?", answer: "Under ISO-8601, weeks start on Monday and week 1 is the week that contains the year's first Thursday, equivalently the week containing 4 January. This means the year's first calendar days can belong to the last week of the previous year, and a year has either 52 or 53 weeks. The rule is used across Europe and by most business and software systems for unambiguous week references." },
      { question: "Why can 1 January be in week 52 or 53?", answer: "Because ISO week 1 must contain the first Thursday, any early-January days that fall before that Thursday's Monday belong to the final week of the previous ISO year. For example, if 1 January is a Friday, it sits in the last week of the outgoing year. This is intentional: it keeps every ISO week a full seven days and tied to a single dominant year." },
      { question: "How many weeks are in a year?", answer: "An ISO year has 53 weeks when it starts on a Thursday, or when it is a leap year starting on a Wednesday; otherwise it has 52. Most years have 52 weeks. The 53-week years, such as 2026, matter for payroll and retail calendars that budget by week, because they include one extra pay or reporting period compared with a 52-week year." },
      { question: "What is the day of the year used for?", answer: "The day of the year, also called the ordinal date, numbers each day from 1 on 1 January to 365 or 366 on 31 December. It is useful in logging, filenames, batch numbering and astronomy, and for quickly estimating the gap between two dates in the same year by subtracting one ordinal from the other. It complements the week number when you need a single running index." },
      { question: "Does the calculator use Sunday or Monday as the first day?", answer: "It uses Monday, following the ISO-8601 standard, so a week runs Monday through Sunday. This differs from the US convention where weeks are often shown starting on Sunday and numbered differently. If your organisation uses a Sunday-start or a different week-1 rule, the ISO number here may differ by one near the year's edges, so confirm which standard your systems expect." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "day-of-week",
    slug: "day-of-week-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Day of the Week Calculator",
    shortDescription: "Find what day of the week a date falls on.",
    seoTitle: "Day of the Week Calculator — What Day Was a Date",
    metaDescription:
      "Free day of the week calculator. Find which weekday any past or future date falls on, and whether it is a weekend.",
    primaryKeyword: "day of the week calculator",
    secondaryKeywords: [
      "what day was i born",
      "weekday of a date",
      "day finder",
    ],
    fields: [{ id: "date", label: "Date", type: "date", required: true }],
    results: [
      { id: "weekday", label: "Day of the week", format: "text", isPrimary: true },
      { id: "isWeekend", label: "Weekend?", format: "text", isPrimary: false },
    ],
    formula:
      "weekday = position of the date in the seven-day Monday–Sunday cycle (Gregorian calendar)",
    formulaSource: "ISO 8601 / Gregorian calendar",
    explanation:
      "A day of the week calculator names the weekday for any date, past or future, and tells you whether that date is a weekend. Give it a date and it returns Monday through Sunday, so you can answer \"what day was I born,\" \"what day does the deadline land on,\" or \"is that anniversary on a weekend\" without paging through a calendar. It works entirely from the date's position in the repeating seven-day cycle of the Gregorian calendar.\n\nKnowing the weekday changes how a date is treated. A payment or filing due on a Saturday usually rolls to the next working day, an event on a Friday reads very differently from the same event on a Tuesday, and shift and delivery planning depends on which days are weekdays. Working the weekday out by hand means counting from a known reference and adjusting for leap years, which is fiddly and error-prone over long spans.\n\nThe calculation is exact because it maps the date to a continuous day count and reads off its remainder within the seven-day week, so leap days are already accounted for. The weekend flag uses the standard Saturday–Sunday convention. Genealogists confirming a birth day, event planners choosing dates, and anyone checking whether a deadline falls on a working day rely on a day of the week calculator for an instant, dependable answer.",
    example: {
      inputs: { date: "2026-07-04" },
      explanation:
        "4 July 2026 falls on a Saturday, which the calculator flags as a weekend.",
    },
    formulaExplanation:
      "The date is converted to a continuous count of days on the proleptic Gregorian calendar, and the remainder of that count within a seven-day cycle gives the weekday. Because the day index already contains every leap day, no separate correction is needed, and the answer is exact for dates centuries in the past or future. The weekend flag simply checks whether the resulting weekday is Saturday or Sunday, the standard Western non-working days.",
    faqs: [
      { question: "What day of the week was I born on?", answer: "Enter your date of birth and the calculator returns the exact weekday, from Monday to Sunday. It works for any date on the Gregorian calendar, including dates well over a century ago, because it computes from a continuous day count that includes every leap day. This is the same method almanacs use, so the birth-day answer it gives matches historical records for the Gregorian era." },
      { question: "Which days count as the weekend?", answer: "The calculator uses Saturday and Sunday as the weekend, following the standard Western working week. Some regions, particularly in the Middle East and parts of Asia, treat Friday and Saturday or Friday and Sunday as the weekend. If your context uses a different convention, read the named weekday and apply your own rule, since the day name itself is universal even where the weekend definition differs." },
      { question: "Does it work for future dates?", answer: "Yes. The seven-day cycle and the Gregorian leap-year rules are fully defined into the future, so the weekday for any upcoming date is exact, not an estimate. This makes it reliable for planning events, deadlines and schedules years ahead. The only caveat is that civil calendars could in principle be reformed, but no such change is planned, so future weekdays computed this way are dependable." },
      { question: "Is it accurate for very old dates?", answer: "It is accurate on the proleptic Gregorian calendar, which extends today's rules backwards. For dates before a country adopted the Gregorian calendar in 1582 or later, historical records may have used the Julian calendar, so the weekday people recorded at the time could differ. For modern dates in any country that has adopted the Gregorian system, the result matches the calendar in everyday use." },
      { question: "Why does the weekday matter for deadlines?", answer: "Many rules move a due date that lands on a weekend to the next business day, so knowing the weekday tells you whether an adjustment applies. A tax payment, court filing or invoice due on a Saturday is often effectively due the following Monday. Checking the weekday first lets you plan around these rollovers instead of being caught out by a deadline that quietly shifts." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "leap-year",
    slug: "leap-year-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Leap Year Calculator",
    shortDescription: "Check if a year is a leap year.",
    seoTitle: "Leap Year Calculator — Is It a Leap Year?",
    metaDescription:
      "Free leap year calculator. Check whether a year is a leap year, how many days it has, and the next leap year.",
    primaryKeyword: "leap year calculator",
    secondaryKeywords: [
      "is it a leap year",
      "leap year checker",
      "days in a year",
    ],
    fields: [
      {
        id: "year",
        label: "Year",
        type: "number",
        placeholder: "2026",
        required: true,
        step: 1,
      },
    ],
    results: [
      { id: "isLeapYear", label: "Leap year?", format: "text", isPrimary: true },
      { id: "daysInYear", label: "Days in the year", format: "number", decimals: 0, unit: "days", isPrimary: false },
      { id: "nextLeapYear", label: "Next leap year", format: "number", decimals: 0, isPrimary: false },
    ],
    formula:
      "Leap year if divisible by 4, except centuries, which must be divisible by 400",
    formulaSource: "ISO 8601 / Gregorian calendar",
    explanation:
      "A leap year calculator checks whether a given year has an extra day, 29 February, tells you whether that year runs to 365 or 366 days, and points to the next leap year ahead. Leap years exist to keep the calendar aligned with the Earth's orbit, which takes about 365.2422 days, so an extra day roughly every four years stops the seasons from drifting against the dates over time.\n\nThe rule is not simply \"every fourth year.\" A year is a leap year if it is divisible by four, but century years are an exception: they are leap years only when also divisible by 400. So 2000 was a leap year while 1700, 1800 and 1900 were not, and 2100 will not be. This 400-year correction fine-tunes the average calendar year to 365.2425 days, extremely close to the true solar year, and is exactly the subtlety people miss when counting by hand.\n\nKnowing whether a year is a leap year matters for anyone computing durations, interest on a daily basis, project schedules or birthdays on 29 February. A leap year calculator settles the question instantly and, by also giving the day count and the next leap year, helps with planning that has to account for the occasional 366-day year rather than assuming every year is the same length.",
    example: {
      inputs: { year: "2026" },
      explanation:
        "2026 is not a leap year, so it has 365 days; the next leap year is 2028.",
    },
    formulaExplanation:
      "A year qualifies as a leap year when it is divisible by 4, with one exception: years divisible by 100 are not leap years unless they are also divisible by 400. That layered test makes the average calendar year 365.2425 days, matching the solar year to within half a minute. A leap year therefore has 366 days and a common year 365, and the next leap year is found by stepping forward until the same test passes.",
    faqs: [
      { question: "How do I know if a year is a leap year?", answer: "Check three conditions in order: if the year is not divisible by 4 it is common; if it is divisible by 4 but not by 100 it is a leap year; if it is divisible by 100 it is a leap year only when also divisible by 400. So 2024 is leap, 1900 is not, and 2000 is. The calculator applies this test for you and states the result plainly." },
      { question: "Why are some century years not leap years?", answer: "A plain four-year rule would over-correct, making the calendar year slightly too long and letting the seasons drift over centuries. Skipping the leap day in century years not divisible by 400 removes three leap days every 400 years, tuning the average year to 365.2425 days. That is why 1700, 1800 and 1900 were common years while 2000 kept its 29 February, and 2100 will again be a common year." },
      { question: "How many days are in a leap year?", answer: "A leap year has 366 days, one more than a common year's 365, with the extra day added as 29 February. This affects anything measured in days across the year: daily interest accrues for one more day, annual salaries spread over one more day, and a full-year span between two leap-day-adjacent dates covers 366 days. The calculator reports the exact day count for the year you enter." },
      { question: "What happens to 29 February birthdays?", answer: "People born on 29 February, sometimes called leaplings, have an actual birthday only in leap years. In common years they typically celebrate on 28 February or 1 March, and laws differ on which date counts for legal purposes such as coming of age. The calculator can tell you which upcoming years contain a 29 February so a leapling knows when their true birthday next falls." },
      { question: "When is the next leap year?", answer: "The calculator returns the next leap year after the one you enter by stepping forward until a year passes the leap-year test. Leap years usually occur every four years, so from 2026 the next is 2028, but the century rule can create an eight-year gap, as between 1896 and 1904, because 1900 was skipped. The result accounts for that exception automatically." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "time-card",
    slug: "time-card-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Time Card Calculator",
    shortDescription: "Work out hours worked from a shift.",
    seoTitle: "Time Card Calculator — Hours Worked From Clock In/Out",
    metaDescription:
      "Free time card calculator. Enter clock-in, clock-out and break time to get hours worked as a decimal and in H:MM.",
    primaryKeyword: "time card calculator",
    secondaryKeywords: [
      "hours worked calculator",
      "timesheet calculator",
      "work hours calculator",
    ],
    fields: [
      { id: "clockIn", label: "Clock in", type: "text", placeholder: "09:00", required: true, span: 1, helpText: "24-hour format, HH:MM" },
      { id: "clockOut", label: "Clock out", type: "text", placeholder: "17:30", required: true, span: 1, helpText: "24-hour format, HH:MM" },
      { id: "breakMinutes", label: "Unpaid break", type: "number", unit: "min", placeholder: "30", required: false, span: 1, min: 0, defaultValue: 0 },
    ],
    results: [
      { id: "hoursWorked", label: "Hours worked", format: "number", decimals: 2, unit: "h", isPrimary: true },
      { id: "formatted", label: "In H:MM", format: "text", isPrimary: false },
    ],
    formula:
      "hours = (clockOut − clockIn, +24h if overnight) − break; shown as decimal and H:MM",
    formulaSource: "Standard timekeeping arithmetic",
    explanation:
      "A time card calculator turns a shift's clock-in and clock-out times, minus any unpaid break, into the hours worked, shown both as a decimal figure for payroll and as hours and minutes for reading. It converts each time to minutes past midnight, finds the gap, and when the clock-out is earlier than the clock-in it adds a full day so an overnight shift is measured correctly instead of showing a negative span.\n\nThis is the everyday arithmetic behind wages, and small errors compound fast. Misreading a shift that runs past midnight, or forgetting to deduct a lunch break, feeds straight into over- or under-payment and disputes. Because clock time is base-60 rather than decimal, subtracting HH:MM values directly gives wrong answers, so converting to a single unit of minutes first is what keeps the result honest.\n\nThe decimal-hours output is deliberately the primary figure because payroll and invoicing systems multiply decimal hours by an hourly rate: 8 hours 30 minutes is 8.5, not 8.30. The H:MM view is there for a human sanity check. Shift workers verifying a paycheck, small-business owners running payroll, and freelancers logging billable time use a time card calculator to convert raw punches into the exact paid hours, one shift at a time, with unpaid breaks removed.",
    example: {
      inputs: { clockIn: "09:00", clockOut: "17:30", breakMinutes: "30" },
      explanation:
        "09:00 to 17:30 is 8.5 hours; a 30-minute unpaid break leaves 8.00 hours (8:00).",
    },
    formulaExplanation:
      "Both clock times are converted to minutes since midnight and subtracted. If the result is negative the shift crossed midnight, so 1,440 minutes — one full day — is added to make it positive. The unpaid break in minutes is then subtracted, and the remaining minutes are divided by sixty for decimal hours and split into whole hours and minutes for the H:MM view. Working in a single minute unit avoids mixing base-60 clock fields.",
    faqs: [
      { question: "How do I enter the times?", answer: "Use 24-hour format as HH:MM, so 9 in the morning is 09:00 and half past five in the afternoon is 17:30. For PM times, add twelve to the hour: 1:15 PM is 13:15 and 11:45 PM is 23:45, while midnight is 00:00. Entering times this way removes any AM/PM ambiguity and lets the calculator handle overnight shifts correctly by comparing the two values directly." },
      { question: "Does it handle overnight shifts?", answer: "Yes. When the clock-out time is earlier than the clock-in time, the calculator assumes the shift ran past midnight and adds 24 hours, so a shift from 22:00 to 06:00 reads as eight hours rather than a negative figure. This makes it reliable for night shifts and on-call windows. It assumes a single shift under 24 hours long, which covers essentially all real work patterns." },
      { question: "What are decimal hours and why are they primary?", answer: "Decimal hours express minutes as a fraction of an hour, so 8 hours 30 minutes is 8.5 and 15 minutes is 0.25. Payroll and invoicing systems use this form because it multiplies directly by an hourly rate, whereas 8:30 does not. That is why the decimal figure is the main result and the H:MM value is provided alongside only as an easy-to-read cross-check." },
      { question: "How is the unpaid break treated?", answer: "The break, entered in minutes, is subtracted from the elapsed shift time, because unpaid meal and rest breaks are not counted as worked hours. A 09:00–17:30 shift is 8.5 hours of elapsed time, but a 30-minute unpaid break leaves 8.00 paid hours. If your break is paid, enter zero so the full elapsed time is counted. Leaving the field blank treats the break as zero." },
      { question: "Can I total a whole week with this?", answer: "Run each shift separately and add the decimal-hours results to get a weekly total, which is the form most payroll systems expect. Keep breaks deducted per shift before summing. If weekly hours exceed the overtime threshold, typically 40 in the US, split the excess into overtime and apply the premium rate separately, since this calculator reports worked hours rather than pay." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "decimal-hours",
    slug: "decimal-hours-to-time-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Decimal Hours to Time Calculator",
    shortDescription: "Convert decimal hours to hours and minutes.",
    seoTitle: "Decimal Hours to Time Calculator — Decimal to H:MM",
    metaDescription:
      "Free decimal hours to time calculator. Convert decimal hours like 7.75 into hours and minutes (H:MM) and total minutes.",
    primaryKeyword: "decimal hours to time calculator",
    secondaryKeywords: [
      "decimal to hours and minutes",
      "convert decimal hours",
      "decimal time converter",
    ],
    fields: [
      {
        id: "decimalHours",
        label: "Decimal hours",
        type: "number",
        placeholder: "7.75",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],
    results: [
      { id: "formatted", label: "Hours and minutes", format: "text", isPrimary: true },
      { id: "totalMinutes", label: "Total minutes", format: "number", decimals: 0, unit: "min", isPrimary: false },
    ],
    formula: "minutes = round(decimalHours × 60); H:MM = ⌊min/60⌋ : min mod 60",
    formulaSource: "Standard timekeeping arithmetic",
    explanation:
      "A decimal hours to time calculator converts a decimal figure such as 7.75 hours into ordinary hours and minutes, here 7 hours 45 minutes, and also reports the total in minutes. Timesheets, payroll exports and scheduling tools often store durations as decimals because they multiply cleanly by an hourly rate, but people read and record time in hours and minutes, so a conversion back and forth is constantly needed.\n\nThe conversion trips people up because the fractional part is not minutes directly. Half an hour is 0.5, not 0.30, and 0.75 is 45 minutes, not 75. Reading 7.75 as \"7 hours 75 minutes\" or as \"7:75\" is a common mistake that inflates or deflates recorded time. The correct step is to multiply the fractional part by sixty, and this calculator does exactly that, rounding to the nearest whole minute.\n\nGetting it right matters wherever decimal time meets human-readable time: reconciling a payroll system's 38.5 hours against a paper timesheet, quoting a job booked as 2.25 hours, or logging billable work. Freelancers, payroll clerks, project managers and anyone exporting time data use a decimal hours to time calculator to move between the two formats without introducing rounding errors that quietly distort pay or invoices.",
    example: {
      inputs: { decimalHours: "7.75" },
      explanation:
        "7.75 decimal hours is 7 hours 45 minutes (7:45), or 465 total minutes.",
    },
    formulaExplanation:
      "The decimal hours are multiplied by sixty to get the total number of minutes, rounded to the nearest whole minute to avoid trailing fractions. That minute total is then split into whole hours by integer division and leftover minutes by the remainder, giving the H:MM form. Multiplying by sixty is the key step because each hour is sixty minutes, not a hundred, which is why 0.75 of an hour is 45 minutes rather than 75.",
    faqs: [
      { question: "Why is 0.5 hours 30 minutes and not 50?", answer: "Because an hour has 60 minutes, a decimal fraction of an hour is that fraction of 60, not of 100. So 0.5 hour is 0.5 × 60 = 30 minutes, and 0.25 hour is 15 minutes. Treating the digits after the decimal point as if they were minutes is the classic error: 7.5 hours is 7 hours 30 minutes, never 7 hours 50 minutes. The calculator always multiplies the fraction by sixty." },
      { question: "How do I convert decimal hours to minutes and seconds?", answer: "This calculator rounds to the nearest whole minute, which is enough for payroll and billing. If you need seconds, take the leftover fraction of a minute and multiply by sixty: for example 0.01 hour is 0.6 minute, which is 36 seconds. For most timesheet purposes whole minutes are standard, so the total-minutes figure shown is the practical output for further calculation." },
      { question: "What is 7.75 hours in hours and minutes?", answer: "7.75 hours is 7 hours and 45 minutes, because 0.75 × 60 = 45. As a total it is 465 minutes. This is a common payroll value: a shift recorded as 7.75 is three-quarters of an hour past seven, not seven hours seventy-five. The calculator returns both the 7:45 form and the 465-minute total so you can drop either into your records." },
      { question: "Does it round the minutes?", answer: "Yes. The result is rounded to the nearest whole minute, so a value like 3.999 hours shows as 4:00 rather than 3 hours 59.94 minutes. This keeps the output clean and matches how timesheets record time. If you are chaining several conversions, work from the total-minutes figure to avoid accumulating rounding differences across steps." },
      { question: "Why do payroll systems use decimal hours at all?", answer: "Decimal hours multiply directly by an hourly rate, so 8.5 hours at $20 is simply 8.5 × 20 = $170, whereas 8:30 cannot be multiplied as written. Storing time as a decimal makes wage and invoice calculations trivial and spreadsheet-friendly. The trade-off is that people read hours and minutes more naturally, which is exactly why a converter between the two forms is so frequently needed." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "unix-timestamp",
    slug: "unix-timestamp-converter",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Unix Timestamp Converter",
    shortDescription: "Convert a Unix timestamp to a UTC date.",
    seoTitle: "Unix Timestamp Converter — Epoch Seconds to UTC Date",
    metaDescription:
      "Free Unix timestamp converter. Turn epoch seconds into a readable UTC date and time and the weekday.",
    primaryKeyword: "unix timestamp converter",
    secondaryKeywords: [
      "epoch to date",
      "unix time converter",
      "timestamp to date",
    ],
    fields: [
      {
        id: "unixSeconds",
        label: "Unix timestamp (seconds)",
        type: "number",
        placeholder: "1609459200",
        required: true,
        step: 1,
      },
    ],
    results: [
      { id: "utcDateTime", label: "UTC date and time", format: "text", isPrimary: true },
      { id: "weekday", label: "Weekday", format: "text", isPrimary: false },
    ],
    formula:
      "UTC datetime = 1970-01-01 00:00:00 UTC + unixSeconds seconds",
    formulaSource: "ISO 8601 / Unix epoch (POSIX time)",
    explanation:
      "A Unix timestamp converter turns a count of seconds since the Unix epoch — midnight UTC on 1 January 1970 — into a human-readable UTC date and time, and names the weekday. Unix time, also called epoch or POSIX time, is how most computers, databases, APIs and log files store an instant, because a single integer is compact, unambiguous and easy to compare or subtract.\n\nDevelopers and analysts constantly meet raw timestamps like 1609459200 in logs, JSON payloads, database rows and cookies, and need to know what moment they represent. Converting by hand is impractical, and doing it in the wrong timezone is a frequent source of off-by-hours bugs. Presenting the result explicitly in UTC removes that ambiguity: UTC is the reference the epoch is defined against, so the conversion is exact and location-independent.\n\nThe weekday is a useful extra for spotting patterns in event data, such as whether errors cluster on weekends or a job ran on the expected day. This converter takes whole seconds, the most common form, though some systems store milliseconds; if a value looks a thousand times too large, divide by 1000 first. Engineers debugging systems, data analysts reading exports, and anyone decoding an API response use a Unix timestamp converter to translate machine time into a date they can reason about.",
    example: {
      inputs: { unixSeconds: "1609459200" },
      explanation:
        "1609459200 seconds is 2021-01-01 00:00:00 UTC, a Friday.",
    },
    formulaExplanation:
      "The Unix epoch fixes second zero at midnight UTC on 1 January 1970. Adding the given number of seconds to that anchor point yields the target instant, which is then expressed on the UTC calendar as year, month, day, hour, minute and second. Because leap years and month lengths are built into the calendar conversion, and UTC ignores daylight-saving shifts, the result is exact and identical no matter where or when the conversion is run.",
    faqs: [
      { question: "What is a Unix timestamp?", answer: "A Unix timestamp is the number of seconds that have elapsed since the Unix epoch, midnight UTC on 1 January 1970, not counting leap seconds. It is the standard way computers represent a point in time, because storing an instant as one integer makes it compact and trivial to compare or subtract. Timestamps appear throughout logs, databases, APIs and file metadata, which is why converting them to dates is a routine task." },
      { question: "Why is the result shown in UTC?", answer: "The Unix epoch is defined in UTC, so converting to UTC is exact and free of timezone or daylight-saving ambiguity. Showing a local time would require assuming a timezone, which invites off-by-hours errors when the same timestamp is read in different regions. If you need local time, take the UTC result and apply your own zone's offset, remembering that the offset can change across daylight-saving boundaries." },
      { question: "My timestamp has 13 digits — what do I do?", answer: "A 13-digit value is almost certainly in milliseconds rather than seconds, which many JavaScript and Java systems use. Divide it by 1000 to get seconds before entering it here, dropping any fractional part. As a rule of thumb, a seconds-based timestamp for a recent date has about 10 digits; a 13-digit number is a thousand times larger and would otherwise convert to a date far in the future." },
      { question: "What was timestamp zero?", answer: "Timestamp 0 corresponds to 1970-01-01 00:00:00 UTC, the moment the Unix epoch begins, which fell on a Thursday. Negative timestamps, where supported, represent times before 1970. This fixed origin is what makes Unix time a universal reference: every system counting from the same instant can exchange timestamps without needing to agree on anything else about the calendar." },
      { question: "Does this account for leap seconds?", answer: "No, and by design. Standard Unix time ignores leap seconds, treating every day as exactly 86,400 seconds, which is why it converts cleanly to a calendar date. Occasional leap seconds inserted into UTC mean Unix time can be a second out of step with astronomical time around those events, but for everyday date conversion this has no practical effect and the result matches the civil calendar." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "annual-work-hours",
    slug: "annual-work-hours-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Annual Work Hours Calculator",
    shortDescription: "Estimate total work hours in a year.",
    seoTitle: "Annual Work Hours Calculator — Work Hours Per Year",
    metaDescription:
      "Free annual work hours calculator. Estimate total working hours per year from weekly hours and weeks worked.",
    primaryKeyword: "annual work hours calculator",
    secondaryKeywords: [
      "work hours per year",
      "yearly hours calculator",
      "working days per year",
    ],
    fields: [
      { id: "hoursPerWeek", label: "Hours per week", type: "number", placeholder: "40", required: true, span: 1, min: 0, step: 0.5 },
      { id: "weeksPerYear", label: "Weeks worked per year", type: "number", placeholder: "52", required: false, span: 1, min: 0, max: 53, defaultValue: 52 },
    ],
    results: [
      { id: "totalHours", label: "Total hours per year", format: "number", decimals: 0, unit: "h", isPrimary: true },
      { id: "workingDays", label: "Equivalent 8-hour days", format: "number", decimals: 1, unit: "days", isPrimary: false },
    ],
    formula: "totalHours = hoursPerWeek × weeksPerYear; workingDays = totalHours ÷ 8",
    formulaSource: "Standard timekeeping arithmetic",
    explanation:
      "An annual work hours calculator estimates how many hours you work in a year by multiplying your usual weekly hours by the number of weeks you actually work, and expresses the result as an equivalent number of standard eight-hour days. It is the quick way to turn a weekly schedule into a yearly figure for salary comparisons, capacity planning and contract sizing.\n\nThe number of weeks matters as much as the hours. A calendar year has 52 weeks plus a day or two, but few people work all of them: subtract annual leave, public holidays and any unpaid weeks and the effective figure often falls to around 46 to 48. Using a realistic weeks-worked value gives a far more honest annual total than blindly multiplying by 52, which overstates capacity by the weeks you are actually off.\n\nThe eight-hour-days output reframes the total as full working days, which is intuitive for comparing roles, costing a contractor's year, or checking utilisation against a target. Employers modelling staffing, freelancers pricing an annual retainer, and employees comparing a full-time offer against part-time or contract work all use an annual work hours calculator to convert a weekly pattern into the yearly numbers those decisions turn on.",
    example: {
      inputs: { hoursPerWeek: "40", weeksPerYear: "52" },
      explanation:
        "40 hours × 52 weeks = 2,080 hours a year, equivalent to 260 eight-hour days.",
    },
    formulaExplanation:
      "Weekly hours are multiplied by the number of weeks worked to give the annual hour total, a direct scaling of the weekly pattern across the year. Dividing that total by eight expresses it as standard working days, since eight hours is the conventional full day. Choosing a realistic weeks-worked figure — reducing 52 by leave and holidays — is what makes the estimate reflect actual working time rather than a theoretical maximum.",
    faqs: [
      { question: "How many work hours are in a full-time year?", answer: "A common benchmark is 2,080 hours, from 40 hours a week times 52 weeks, which is why many salaries are quoted against it. In practice, once you deduct two to four weeks of leave and public holidays, actual worked hours are often nearer 1,880 to 1,960. Enter your real weeks-worked figure rather than 52 to get a total that reflects the time you are genuinely at work." },
      { question: "How many weeks should I enter?", answer: "Start from 52 and subtract the weeks you do not work: annual leave, public holidays grouped into week-equivalents, and any unpaid time off. Many full-time employees land around 46 to 48 effective weeks. If you want a theoretical maximum rather than a realistic figure, leave it at 52. The field defaults to 52 so you get the standard benchmark unless you change it." },
      { question: "What does the eight-hour-days figure mean?", answer: "It converts your annual hours into the number of standard eight-hour working days they represent, so 2,080 hours becomes 260 days. This is useful for comparing roles, costing a contractor's availability, or checking how a total maps onto a working calendar. It is a unit conversion, not a count of calendar dates, so it does not account for which specific days fall on weekends or holidays." },
      { question: "Does this include overtime or breaks?", answer: "It uses whatever weekly hours you enter, so include or exclude overtime and unpaid breaks to match what you want to measure. For contracted hours, enter your scheduled week; for actual worked time, add typical overtime and remove unpaid breaks first. The calculator simply scales the weekly figure you give it, so the accuracy of the annual total depends on the weekly number reflecting your real pattern." },
      { question: "How do I use this for part-time or contract work?", answer: "Enter your actual part-time weekly hours and the number of weeks in the engagement or year. A 24-hour week over 48 worked weeks is 1,152 hours, or 144 eight-hour days, which you can compare directly against a full-time year or use to price an annual contract. For irregular schedules, use an average weekly hours figure to get a representative yearly estimate." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "age-on-date",
    slug: "age-on-date-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Age on Date Calculator",
    shortDescription: "Find someone's age on a specific date.",
    seoTitle: "Age on Date Calculator — Age at a Specific Date",
    metaDescription:
      "Free age on date calculator. Find exact age in years, months and total days at any chosen date, not just today.",
    primaryKeyword: "age on date calculator",
    secondaryKeywords: [
      "age at a specific date",
      "age as of date",
      "how old on date",
    ],
    fields: [
      { id: "birthDate", label: "Date of birth", type: "date", required: true, span: 1 },
      { id: "asOfDate", label: "As-of date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "years", label: "Age (years)", format: "number", decimals: 0, unit: "years", isPrimary: true },
      { id: "months", label: "Extra months", format: "number", decimals: 0, unit: "months", isPrimary: false },
      { id: "totalDays", label: "Total days lived", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "Calendar age at the as-of date: full years, then remaining whole months, plus total elapsed days",
    formulaSource: "ISO 8601 / Gregorian calendar",
    explanation:
      "An age on date calculator works out how old someone is on a specific chosen date rather than only today, giving the result as complete years, the remaining whole months, and the total number of days lived. You supply a date of birth and an as-of date, and it computes the calendar age exactly as a person would state it — for example 36 years and 2 months — on that reference day.\n\nBeing able to pick the reference date is what sets this apart from an ordinary age calculator. Eligibility rules, school cut-offs, insurance bands, pension entitlements and sports age-group divisions are all defined as an age reached on a particular date, not the age today. Checking whether a child is old enough on the first day of a school year, or how old someone will be at a policy's renewal, needs the age evaluated on that exact day.\n\nThe calculation follows how calendar age actually works: count full years first, then the leftover whole months, borrowing correctly when the as-of day of the month is earlier than the birth day. The total-days figure gives a precise elapsed count that already includes every leap day. Parents checking enrolment, HR and benefits staff applying age bands, and event organisers verifying age categories use an age on date calculator to determine age at the date that matters.",
    example: {
      inputs: { birthDate: "1990-06-15", asOfDate: "2026-08-30" },
      explanation:
        "Someone born on 15 June 1990 is 36 years and 2 months old on 30 August 2026.",
    },
    formulaExplanation:
      "Age is built from the calendar fields of both dates. The birth year is subtracted from the as-of year for a first estimate of years, and the months are compared; if the as-of day of the month is earlier than the birth day, one month is borrowed, and if the month count then goes negative, one year is borrowed and twelve months added back. Total days lived is the plain difference between the two dates in whole days, which already includes every leap day.",
    faqs: [
      { question: "How is this different from a normal age calculator?", answer: "A standard age calculator uses today's date as the reference, whereas this one lets you set any as-of date. That matters when a rule depends on age reached on a specific day rather than the age right now, such as a school entry cut-off, an insurance renewal, or a competition's age-group date. By choosing the reference date you get the age that the rule actually cares about, which may differ from the current age." },
      { question: "How are years and months worked out?", answer: "The calculator counts complete years from the birth date to the as-of date, then the remaining whole months, borrowing when the as-of day of the month is before the birth day. So from 15 June to 30 August is two full months because the 30th is past the 15th, but from 15 June to 10 August would be one month, since the 10th has not yet reached the 15th. This mirrors how people naturally state age." },
      { question: "What does total days lived include?", answer: "It is the exact number of calendar days between the date of birth and the as-of date, counting every day including all leap days that fall in the span. Because it is computed from a continuous day count rather than by multiplying months, it is precise regardless of how many February 29ths the period contains. It is handy for milestone days, such as celebrating 10,000 days lived." },
      { question: "Can I use a future as-of date?", answer: "Yes. Set the as-of date to any future day to find how old someone will be then, which is useful for planning around eligibility dates, milestone birthdays or policy renewals. The calculation works identically for future and past reference dates, since it simply measures the calendar distance from the birth date. Only an as-of date earlier than the birth date is rejected, as a negative age is undefined." },
      { question: "What if the as-of date is before the birth date?", answer: "The calculator treats that as invalid and returns no age, because a person has no age before they are born. Make sure the birth date is the earlier of the two and the as-of date is the day on which you want the age evaluated. If you meant to measure a gap in the other direction, swap the dates so the earlier one is entered as the date of birth." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "add-time",
    slug: "add-time-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Add Time Calculator",
    shortDescription: "Add hours and minutes to a time.",
    seoTitle: "Add Time Calculator — Add Hours and Minutes to a Time",
    metaDescription:
      "Free add time calculator. Add hours and minutes to a start time and see the end time and any day rollover.",
    primaryKeyword: "add time calculator",
    secondaryKeywords: [
      "add hours to time",
      "time addition calculator",
      "what time will it be",
    ],
    fields: [
      { id: "startTime", label: "Start time", type: "text", placeholder: "09:00", required: true, span: 2, helpText: "24-hour format, HH:MM" },
      { id: "addHours", label: "Add hours", type: "number", placeholder: "5", required: true, span: 1, step: 1 },
      { id: "addMinutes", label: "Add minutes", type: "number", placeholder: "30", required: true, span: 1, step: 1 },
    ],
    results: [
      { id: "endTime", label: "End time", format: "text", isPrimary: true },
      { id: "dayOffset", label: "Days rolled over", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "endTime = (startTime + addHours:addMinutes) mod 24h; dayOffset = whole days rolled over",
    formulaSource: "Standard timekeeping arithmetic",
    explanation:
      "An add time calculator takes a start time and a duration in hours and minutes and tells you the clock time you land on, together with how many days the result rolls over. It answers everyday questions like \"if I start a 5-hour-30-minute process at 09:00, when does it finish\" and handles the wrap past midnight cleanly instead of producing an impossible time like 26:30.\n\nClock arithmetic is easy to get wrong by hand because time is base-60 for minutes and wraps at 24 hours, not 10 or 100. Adding 45 minutes to 09:30 is not 09:75, and adding several hours can quietly push you into the next day. The calculator sidesteps both traps by converting everything to minutes, adding, and then wrapping the total back onto a 24-hour clock while counting whole days that spilled over.\n\nThe day-rollover figure is what makes it reliable for scheduling: a task starting at 22:00 that takes five hours ends at 03:00 the next day, and knowing it is +1 day prevents booking it on the wrong date. Cooks timing a long roast, shift planners projecting an end time, and anyone estimating an arrival or completion time use an add time calculator to add a duration to a clock time without tripping over midnight.",
    example: {
      inputs: { startTime: "09:00", addHours: "5", addMinutes: "30" },
      explanation:
        "09:00 plus 5 hours 30 minutes is 14:30 on the same day (0 days rolled over).",
    },
    formulaExplanation:
      "The start time is converted to minutes past midnight, and the added hours and minutes are turned into minutes and summed. The total is divided by 1,440 — the minutes in a day — with the whole-number quotient giving how many days rolled over and the remainder giving minutes past midnight for the end time. Using a floor division means the remainder is always a valid 0–1,439 time even if the inputs are large, and the result is then formatted back to HH:MM.",
    faqs: [
      { question: "How do I enter the start time?", answer: "Use 24-hour format as HH:MM, so 9 in the morning is 09:00 and 2 in the afternoon is 14:00. For PM times, add twelve to the hour: 3:30 PM is 15:30 and midnight is 00:00. Using 24-hour input removes AM/PM ambiguity and lets the calculator wrap correctly past midnight. The hours and minutes to add are entered separately as plain numbers in their own fields." },
      { question: "What does the days-rolled-over figure mean?", answer: "It counts how many whole days the end time moved past the start day. Adding six hours to 22:00 gives 04:00 with a rollover of 1, meaning the next day, while adding 30 hours would roll over one day and land at 04:00 the following day too, but reported against the correct day count. This tells you not just the clock time but which day it falls on, which matters for scheduling." },
      { question: "Does it handle durations longer than a day?", answer: "Yes. If the hours you add exceed 24, the calculator still wraps the clock correctly and reports the full number of days rolled over. Adding 50 hours to 08:00, for instance, advances two days and lands at 10:00, shown as a two-day rollover. The clock time is always the remainder after removing whole days, so it stays a valid time between 00:00 and 23:59." },
      { question: "Can I add time across midnight?", answer: "Yes, that is the main thing it handles. When the added duration pushes the time past 24:00, the result wraps to the early hours of the next day and the rollover counter increments, rather than showing an invalid hour like 25:00. A process starting at 23:15 and running two hours correctly ends at 01:15 the next day, flagged as one day over." },
      { question: "Can I subtract time by entering negatives?", answer: "You can enter negative hours or minutes to move backwards, and the calculator handles the wrap in that direction too, reporting a negative day offset when the result falls on a previous day. For clarity, though, adding is the intended use. If you mainly need to go backwards, entering the later time as the start and a negative duration will land you on the correct earlier clock time." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
