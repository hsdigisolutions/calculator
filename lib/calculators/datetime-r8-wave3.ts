import type { CalculatorDefinition } from "../types";

/* Date & Time — Wave 3 Round 8 definitions (10 calculators).
   Engines live in lib/engines/datetime-r8-wave3.ts, keyed by `id`.
   String results use format: "text"; every calc has one isPrimary result. */

const RELATED = [
  "date-difference-calculator",
  "business-days-calculator",
  "age-calculator",
  "time-duration-calculator",
];

export const datetimeR8Calculators: CalculatorDefinition[] = [
  {
    id: "days-360",
    slug: "days-360-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Days 360 Calculator",
    shortDescription: "Count days between dates on the 30/360 basis.",
    seoTitle: "Days 360 Calculator — 30/360 Day Count Between Dates",
    metaDescription:
      "Free days 360 calculator. Count the number of days between two dates using the 30/360 US day-count convention used in finance.",
    primaryKeyword: "days 360 calculator",
    secondaryKeywords: [
      "30/360 day count",
      "days360 calculator",
      "bond day count calculator",
    ],
    fields: [
      { id: "startDate", label: "Start date", type: "date", required: true, span: 1 },
      { id: "endDate", label: "End date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "days360", label: "Days (30/360)", format: "number", decimals: 0, unit: "days", isPrimary: true },
    ],
    formula:
      "days360 = (endY − startY) × 360 + (endM − startM) × 30 + (min(endD,30) − min(startD,30))",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A days 360 calculator counts the number of days between two dates using the 30/360 convention, a simplified day-count method that treats every month as exactly 30 days and every year as exactly 360 days. It answers questions like \"how many 30/360 days are there from the settlement date to the coupon date,\" which is the basis many bonds, mortgages and accrued-interest calculations are quoted against rather than the true calendar count.\n\nThe reason this convention exists is convenience and consistency. When interest accrues daily but is quoted on a clean annual basis, pretending each month is 30 days and each year is 360 makes the arithmetic uniform: every full month contributes the same number of days regardless of whether it is a 28, 30 or 31-day month. That uniformity is exactly why treasurers, accountants and fixed-income desks adopted it, even though it does not match the real calendar.\n\nThe US (NASD) variant used here caps the day-of-month at 30 for both endpoints, so the 31st of a month is treated as the 30th. This calculator applies that rule precisely, computing the year, month and capped-day components separately and summing them. Bond analysts pricing accrued interest, loan officers computing per-diem charges, and anyone reconciling a financial system that reports on a 30/360 basis use it to reproduce the exact figure their contracts and software expect.",
    example: {
      inputs: { startDate: "2026-01-15", endDate: "2026-04-15" },
      explanation:
        "From 15 January to 15 April 2026 is three whole 30-day months, so the 30/360 count is 90 days.",
    },
    formulaExplanation:
      "The count is assembled from three parts rather than a raw calendar subtraction. The difference in years is multiplied by 360, the difference in months by 30, and the difference in the day-of-month numbers is added directly, with each day-of-month first capped at 30 under the US convention. Capping means the 31st behaves as the 30th, so no month ever contributes more than 30 days. Summing the three components gives a day count where every full month is worth exactly 30 days and every full year exactly 360.",
    faqs: [
      { question: "What is the 30/360 day-count convention?", answer: "It is a method that assumes each month has 30 days and each year has 360 days, used widely in bond markets and lending. Instead of counting actual calendar days, it counts standardised days so that interest accrues uniformly across months of different lengths. This makes coupon and per-diem calculations simpler and consistent, which is why many fixed-income instruments and loan agreements specify a 30/360 basis in their terms." },
      { question: "How does the US 30/360 rule handle the 31st?", answer: "Under the US (NASD) convention this calculator uses, any day-of-month of 31 is treated as 30 for both the start and end dates. So a date landing on the 31st contributes the same as the 30th, ensuring no month exceeds 30 days in the count. There are stricter variants that also adjust when the start date is the last day of February, but the basic day-capping rule covers the common case." },
      { question: "Why does 30/360 differ from the actual day count?", answer: "Because real months have 28 to 31 days, the 30/360 count deliberately ignores those differences and pretends every month is 30 days. Over a period that includes 31-day months or February, the 30/360 figure will differ from the true calendar days between the dates. That is expected: the convention trades calendar accuracy for arithmetic uniformity so that interest per period is even and easy to compute." },
      { question: "Where is the days 360 method actually used?", answer: "It appears in corporate and government bond accrued-interest calculations, many mortgage and commercial-loan interest computations, and financial software and spreadsheets, where a DAYS360 function implements it directly. Accountants use it for consistent monthly interest accrual, and treasurers use it when a contract specifies a 30/360 basis. Whenever a document quotes interest on a 360-day year with 30-day months, this is the count it refers to." },
      { question: "Can the result be negative?", answer: "Yes. If the end date is earlier than the start date, the components subtract to a negative total, which correctly represents counting backwards in time. For normal use you would enter the earlier date as the start and the later date as the end to get a positive count. A negative figure simply signals that the dates were entered in reverse order relative to the direction you intended to measure." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "weeks-between",
    slug: "weeks-between-dates-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Weeks Between Dates Calculator",
    shortDescription: "Count the weeks and days between two dates.",
    seoTitle: "Weeks Between Dates Calculator — Whole Weeks and Days",
    metaDescription:
      "Free weeks between dates calculator. Find the number of full weeks, leftover days and total days between two dates.",
    primaryKeyword: "weeks between dates calculator",
    secondaryKeywords: [
      "how many weeks between dates",
      "weeks calculator",
      "count weeks between two dates",
    ],
    fields: [
      { id: "startDate", label: "Start date", type: "date", required: true, span: 1 },
      { id: "endDate", label: "End date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "weeks", label: "Full weeks", format: "number", decimals: 0, unit: "weeks", isPrimary: true },
      { id: "extraDays", label: "Extra days", format: "number", decimals: 0, unit: "days", isPrimary: false },
      { id: "totalDays", label: "Total days", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "totalDays = endDate − startDate; weeks = ⌊totalDays ÷ 7⌋; extraDays = totalDays mod 7",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A weeks between dates calculator tells you how many full weeks separate two dates, how many leftover days remain beyond those whole weeks, and the total number of days for reference. It answers everyday planning questions like \"how many weeks until the deadline\" or \"how many weeks was I away,\" breaking a span down into the units people actually schedule in.\n\nWeeks are a natural planning currency: pregnancies, sprints, notice periods, training programmes and countdowns are all commonly counted in weeks rather than raw days. Converting a day count into weeks plus a remainder is more useful than either alone, because \"seven weeks and three days\" is easier to reason about than \"52 days.\" Doing it by hand means dividing by seven and tracking the remainder, which is where small mistakes creep in, especially across month and year boundaries.\n\nThe calculation is exact because it works from a continuous day count on the UTC calendar, so every leap day inside the span is already included before dividing by seven. The full-weeks figure uses floor division, and the extra days are the remainder, so the two always reconstruct the total. Project managers tracking timelines, expectant parents counting gestational weeks, and anyone measuring a stretch of time use a weeks between dates calculator to turn two dates into weeks and days at a glance.",
    example: {
      inputs: { startDate: "2026-01-01", endDate: "2026-01-18" },
      explanation:
        "From 1 to 18 January 2026 is 17 days, which is 2 full weeks and 3 extra days.",
    },
    formulaExplanation:
      "The two dates are converted to a continuous count of whole days, and the end count minus the start count gives the total days between them. Dividing that total by seven with floor division yields the number of complete weeks, and the remainder after removing those weeks is the leftover days, always between zero and six. Because the day total is taken from a UTC day index, every leap day within the range is counted automatically, so the weeks-and-days breakdown is exact.",
    faqs: [
      { question: "How many weeks are between two dates?", answer: "Take the total number of days between the dates and divide by seven; the whole-number part is the full weeks and the remainder is the leftover days. This calculator does both, so 17 days becomes 2 weeks and 3 days. Counting complete weeks this way is more meaningful for planning than a raw day figure, and the leftover days tell you exactly how far into the next week the end date falls." },
      { question: "Does it count the start or end date?", answer: "It measures the gap between the two dates, so the start date is day zero and the end date is counted, giving the number of days from one to the other. If you need to include both endpoints, for example counting inclusive days in a booking, add one to the total-days figure before converting to weeks. Whether to count inclusively depends on what you are measuring, so the tool reports the plain gap." },
      { question: "Why show extra days as well as weeks?", answer: "Because most real spans are not an exact multiple of seven days, the remainder matters. Reporting only whole weeks would hide up to six days, which can be the difference between meeting and missing a deadline. Showing weeks plus extra days lets you state a duration precisely, such as a notice period of \"six weeks and two days,\" while still giving the total days for any calculation that needs the raw count." },
      { question: "Is it accurate across leap years?", answer: "Yes. The total-days figure is taken from a continuous day count that already includes any 29 February falling between the two dates, so the week count is correct even when the span crosses a leap day. There is no separate adjustment to make. This is why computing from a day index is more reliable than trying to count weeks month by month, where a leap day is easy to overlook." },
      { question: "How do I count pregnancy or gestational weeks?", answer: "Enter the start date, typically the first day of the last menstrual period, and the current or due date, and read the full weeks and extra days. Gestational age is conventionally stated as completed weeks plus days, exactly the form this calculator returns, so 30 weeks and 4 days reads directly. For medical decisions always confirm with a clinician, as due dates are estimates and dating methods vary." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "months-between",
    slug: "months-between-dates-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Months Between Dates Calculator",
    shortDescription: "Count full months and days between two dates.",
    seoTitle: "Months Between Dates Calculator — Full Months and Days",
    metaDescription:
      "Free months between dates calculator. Find the number of complete calendar months and the remaining days between two dates.",
    primaryKeyword: "months between dates calculator",
    secondaryKeywords: [
      "how many months between dates",
      "calendar months calculator",
      "count months between two dates",
    ],
    fields: [
      { id: "startDate", label: "Start date", type: "date", required: true, span: 1 },
      { id: "endDate", label: "End date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "months", label: "Full months", format: "number", decimals: 0, unit: "months", isPrimary: true },
      { id: "remainingDays", label: "Remaining days", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "months = full calendar months from start to end; remainingDays = end − (start + months)",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A months between dates calculator works out how many complete calendar months lie between two dates, then how many extra days remain after those whole months. It answers questions like \"how many months is this lease,\" \"how long since I started,\" or \"how far apart are these two dates in months,\" expressed the way people naturally state durations rather than as a large number of days.\n\nCounting months is trickier than counting days or weeks because months are not equal in length. A month from 15 January to 15 February is one month, and so is a month from 31 January to 28 February, even though the day counts differ. This calculator follows the calendar-month rule people intuitively use: it counts each time the same day-of-month is reached or passed, and only credits a full month once the end day catches up to the start day.\n\nThe remaining-days figure fills the gap between the last completed month and the end date, so the two together describe the span exactly, as in \"seven months and twelve days.\" This is the form used for tenancy lengths, loan terms, subscription durations, contract periods and age in months. Landlords and tenants measuring a lease, HR staff computing length of service, and anyone stating a duration in months use a months between dates calculator to get the count right across uneven month lengths.",
    example: {
      inputs: { startDate: "2026-01-15", endDate: "2026-03-20" },
      explanation:
        "From 15 January to 20 March 2026 is 2 full months (to 15 March) plus 5 remaining days.",
    },
    formulaExplanation:
      "A first estimate of months comes from the difference in years times twelve plus the difference in month numbers. If the end day-of-month is earlier than the start day-of-month, the latest month is not yet complete, so one month is subtracted. The start date is then advanced by that many whole months to form an anchor, and the plain day count from the anchor to the end date gives the remaining days. This mirrors how a full calendar month is only credited once the same day-of-month is reached.",
    faqs: [
      { question: "How are full months counted?", answer: "A full month is credited each time the calculation reaches the same day-of-month as the start date. From the 15th to the 15th is one month regardless of whether the month had 28 or 31 days. If the end date's day-of-month has not yet reached the start's, that final month is incomplete and is not counted, with the extra time reported instead as remaining days. This matches how people describe durations like a lease or length of service." },
      { question: "What are the remaining days?", answer: "After counting the complete months, the calculator advances the start date by that many months and measures the plain day gap to the end date. That gap is the remaining days, always less than a full month. So a span might be seven months and twelve days, where the twelve days are the part beyond the last whole month. Together the months and remaining days reconstruct the full duration between the two dates." },
      { question: "Why not just divide days by 30?", answer: "Because months vary from 28 to 31 days, dividing the total days by 30 gives an approximation that drifts over long spans and disagrees with how contracts count. Calendar-month counting instead tracks the actual day-of-month, so it matches leases, loan terms and age-in-months exactly. Dividing by 30 is fine for a rough estimate, but for anything contractual the calendar method this calculator uses is the correct one." },
      { question: "How does it handle end-of-month dates?", answer: "When the start date is late in a long month and the target month is shorter, the count still advances correctly because it compares day-of-month numbers. For example, from 31 January the next monthly milestone falls at the end of February, and the calculator credits the month once February ends and reports any spill-over as remaining days. Very short target months are the classic edge case, and day-of-month comparison handles them consistently." },
      { question: "What if the end date is before the start date?", answer: "The calculator treats an end date earlier than the start date as invalid and returns no result, because the months count is defined for a forward span. Enter the earlier date as the start and the later date as the end to measure the duration. If you need the distance in the other direction, simply swap the two dates, and the same months-and-days breakdown applies to that reversed span." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "fiscal-quarter",
    slug: "fiscal-quarter-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Fiscal Quarter Calculator",
    shortDescription: "Find which quarter a date falls in.",
    seoTitle: "Fiscal Quarter Calculator — Which Quarter Is a Date In",
    metaDescription:
      "Free fiscal quarter calculator. Find which calendar quarter (Q1–Q4) any date falls in, with the quarter label.",
    primaryKeyword: "fiscal quarter calculator",
    secondaryKeywords: [
      "what quarter is it",
      "quarter of the year calculator",
      "date to quarter",
    ],
    fields: [{ id: "date", label: "Date", type: "date", required: true }],
    results: [
      { id: "quarter", label: "Quarter number", format: "number", decimals: 0, isPrimary: true },
      { id: "quarterLabel", label: "Quarter label", format: "text", isPrimary: false },
    ],
    formula: "quarter = ⌊month ÷ 3⌋ + 1, with months numbered 0 (January) to 11 (December)",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A fiscal quarter calculator tells you which quarter of the year a date belongs to, returning both the quarter number and a label such as Q3. Under the standard calendar-quarter split, January to March is Q1, April to June is Q2, July to September is Q3, and October to December is Q4, so the tool maps any date straight onto that four-way division of the year.\n\nQuarters are the heartbeat of business reporting. Revenue, earnings, sales targets, tax estimates and OKRs are all tracked and reported by quarter, so being able to place a date in the right one is a constant need when tagging transactions, scheduling reviews or aggregating data. Doing it in your head is easy to slip on around the boundaries — remembering whether September is Q3 or Q4, for instance — and a mis-tagged date quietly corrupts a quarterly total.\n\nThis calculator uses the standard calendar quarters, where each quarter is a block of three consecutive months starting in January. Many organisations run a fiscal year that starts in a different month, in which case their fiscal quarters are shifted, but the calendar-quarter answer here is the common reference and the starting point for any offset. Finance teams categorising entries, analysts building quarterly rollups, and anyone labelling dates for reporting use a fiscal quarter calculator to assign each date to Q1 through Q4 without second-guessing the boundaries.",
    example: {
      inputs: { date: "2026-07-01" },
      explanation:
        "1 July 2026 is in the third calendar quarter, so the calculator returns 3, labelled Q3.",
    },
    formulaExplanation:
      "Months are numbered from zero for January to eleven for December. Dividing that month number by three with floor division groups the twelve months into four blocks of three — 0–2, 3–5, 6–8 and 9–11 — and adding one shifts the result to the familiar 1-to-4 range. So January through March map to Q1 and October through December to Q4. The label is simply the letter Q joined to that quarter number, giving Q1 to Q4.",
    faqs: [
      { question: "Which months are in each quarter?", answer: "On the standard calendar, Q1 is January, February and March; Q2 is April, May and June; Q3 is July, August and September; and Q4 is October, November and December. Each quarter is three consecutive months, and four quarters make the year. This calculator returns the quarter for whatever date you enter, so you never have to remember which block a boundary month like September or December falls into." },
      { question: "What is the difference between calendar and fiscal quarters?", answer: "Calendar quarters always start in January, but a fiscal year can begin in another month, shifting the quarters. A company whose fiscal year starts in April would call April to June its Q1. This tool reports the calendar quarter, which is the common default. If your organisation uses an offset fiscal year, take the calendar quarter as a reference and shift it by however many months your fiscal year is displaced." },
      { question: "How is the quarter calculated from a date?", answer: "The calculator looks only at the month of the date, groups the twelve months into four blocks of three, and returns the block number from 1 to 4. The day of the month does not affect the quarter, so any date in July returns Q3. This makes the result stable and easy to verify: the quarter depends solely on which of the four three-month spans the month lands in." },
      { question: "Why do businesses report by quarter?", answer: "Quarters strike a balance between timeliness and stability: reporting every month can be noisy and burdensome, while yearly reporting is too infrequent to steer a business. Three-month periods smooth out short-term fluctuations while still giving four checkpoints a year for earnings, targets and taxes. Because so much financial and operational data is organised this way, correctly tagging each date to its quarter is essential for clean quarterly rollups." },
      { question: "Does the day of the month change the quarter?", answer: "No. Only the month determines the quarter, so 1 July and 31 July are both in Q3. The day matters for ordering within a quarter and for knowing how far through it you are, but not for which quarter a date belongs to. If you need the position within the quarter, use a date-difference tool against the quarter's start date; for the quarter label itself, the month is all that counts." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "time-addition",
    slug: "time-addition-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Time Addition Calculator",
    shortDescription: "Add two durations in hours and minutes.",
    seoTitle: "Time Addition Calculator — Add Hours and Minutes Together",
    metaDescription:
      "Free time addition calculator. Add two durations in hours and minutes and get the total as H:MM and in total minutes.",
    primaryKeyword: "time addition calculator",
    secondaryKeywords: [
      "add hours and minutes",
      "sum of two times",
      "add time together",
    ],
    fields: [
      { id: "hours1", label: "First duration — hours", type: "number", placeholder: "2", required: true, span: 1, step: 1 },
      { id: "minutes1", label: "First duration — minutes", type: "number", placeholder: "45", required: true, span: 1, step: 1 },
      { id: "hours2", label: "Second duration — hours", type: "number", placeholder: "1", required: true, span: 1, step: 1 },
      { id: "minutes2", label: "Second duration — minutes", type: "number", placeholder: "30", required: true, span: 1, step: 1 },
    ],
    results: [
      { id: "totalTime", label: "Total time", format: "text", isPrimary: true },
      { id: "totalMinutes", label: "Total minutes", format: "number", decimals: 0, unit: "min", isPrimary: false },
    ],
    formula:
      "totalMinutes = (h1 × 60 + m1) + (h2 × 60 + m2); total = ⌊totalMinutes ÷ 60⌋ : (totalMinutes mod 60)",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A time addition calculator adds two durations expressed in hours and minutes and returns the combined time as hours and minutes, plus the total in minutes. It answers questions like \"what is 2 hours 45 minutes plus 1 hour 30 minutes,\" giving 4 hours 15 minutes, without you having to juggle the base-60 carry between minutes and hours in your head.\n\nAdding time by hand is error-prone precisely because minutes roll over at 60, not 100. Add 45 and 30 minutes and you get 75, which is one hour and 15 minutes, not \"1.75\" and not \"75 minutes\" left as-is. Forgetting to carry that extra hour, or writing an impossible value like 4:75, is the classic mistake. This calculator sidesteps it by converting both durations to plain minutes, summing them, and only then splitting back into hours and minutes.\n\nThe total-minutes output is useful in its own right for feeding into rate or pacing calculations, while the H:MM total is the human-readable answer. Because the durations are treated as elapsed time rather than clock times, the hours can exceed 24 without wrapping, so adding several long spans stays correct. People totalling task times, adding up leg durations of a journey, or combining multiple logged intervals use a time addition calculator to sum hours and minutes cleanly.",
    example: {
      inputs: { hours1: "2", minutes1: "45", hours2: "1", minutes2: "30" },
      explanation:
        "2 hours 45 minutes plus 1 hour 30 minutes is 255 minutes, which is 4 hours 15 minutes (4:15).",
    },
    formulaExplanation:
      "Each duration is converted to a single count of minutes by multiplying its hours by sixty and adding its minutes. The two minute totals are summed to get the combined minutes, which avoids any base-60 carry problem during the addition. That grand total is then split back into hours by integer division by sixty and minutes by the remainder, producing the H:MM form. Because these are durations, the hours are not wrapped at 24, so long combined times are reported in full.",
    faqs: [
      { question: "How do I add hours and minutes correctly?", answer: "Convert each time to total minutes first: multiply the hours by 60 and add the minutes. Add the two minute totals, then convert back by dividing by 60 for the hours and taking the remainder for the minutes. This avoids the common error of adding the minute fields past 60 without carrying. The calculator does all of this, so 2:45 plus 1:30 correctly becomes 4:15 rather than 3:75." },
      { question: "Why can't I just add the numbers directly?", answer: "Because minutes wrap at 60, not 100, adding the minute parts can produce a value of 60 or more that must carry into the hours. Writing 45 + 30 as 75 minutes and leaving it gives an invalid time like 3:75. Time is a base-60 system for minutes, so direct decimal-style addition of HH:MM values is wrong unless you handle the carry, which is exactly what converting to minutes first takes care of." },
      { question: "Does it handle totals over 24 hours?", answer: "Yes. The inputs are treated as elapsed durations, not clock times, so the combined hours are not wrapped at 24. Adding 20 hours to 10 hours gives 30 hours, reported as 30:00 rather than rolling over to a next-day clock time. This makes it suitable for totalling long work logs or multi-leg journey times where the sum can legitimately exceed a full day." },
      { question: "What does the total-minutes figure give me?", answer: "It expresses the whole combined duration as a single number of minutes, which is convenient for further calculation. To convert to decimal hours, divide it by 60; to apply a per-minute rate, multiply directly. The H:MM total is easier to read, but the minutes figure is the better input when you need to feed the result into pacing, billing or averaging calculations that expect one number." },
      { question: "Can I add more than two durations?", answer: "This calculator adds two durations at a time, but you can chain it: add the first two, then add the third to that running total, and so on. Working from the total-minutes output at each step avoids repeated rounding. For a long list of intervals, keeping a running minute total and converting to H:MM only at the end is the cleanest approach and matches how the calculator combines each pair." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "time-to-decimal",
    slug: "time-to-decimal-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Time to Decimal Calculator",
    shortDescription: "Convert hours and minutes to decimal hours.",
    seoTitle: "Time to Decimal Calculator — Hours and Minutes to Decimal",
    metaDescription:
      "Free time to decimal calculator. Convert hours and minutes into decimal hours for payroll, billing and timesheets.",
    primaryKeyword: "time to decimal calculator",
    secondaryKeywords: [
      "hours and minutes to decimal",
      "convert time to decimal hours",
      "minutes to decimal",
    ],
    fields: [
      { id: "hours", label: "Hours", type: "number", placeholder: "7", required: true, span: 1, min: 0, step: 1 },
      { id: "minutes", label: "Minutes", type: "number", placeholder: "45", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "decimalHours", label: "Decimal hours", format: "number", decimals: 2, unit: "h", isPrimary: true },
    ],
    formula: "decimalHours = hours + minutes ÷ 60",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A time to decimal calculator converts a time given in hours and minutes into decimal hours, so 7 hours 45 minutes becomes 7.75. It is the counterpart to reading a timesheet: people record work as hours and minutes, but payroll and billing systems need decimal hours because they multiply cleanly by an hourly rate. This tool bridges the two forms in the direction from clock-style time to a single decimal number.\n\nThe conversion catches people out because minutes are sixtieths of an hour, not hundredths. Fifteen minutes is 0.25 of an hour, thirty minutes is 0.5, and forty-five is 0.75 — never 0.15, 0.30 or 0.45. Writing 7 hours 45 minutes as \"7.45\" is a frequent and costly error that misstates pay or an invoice. The correct step is to divide the minutes by sixty and add them to the hours, which is exactly what this calculator does.\n\nDecimal hours are the standard input for wage runs, contractor invoices, project time tracking and utilisation reports, because 7.75 hours at a given rate is a single multiplication. Payroll clerks converting a paper timesheet, freelancers billing logged time, and project managers rolling up effort use a time to decimal calculator to turn hours and minutes into the decimal figure their spreadsheets and payroll software expect, without introducing rounding slips.",
    example: {
      inputs: { hours: "7", minutes: "45" },
      explanation:
        "7 hours 45 minutes converts to 7 + 45 ÷ 60 = 7.75 decimal hours.",
    },
    formulaExplanation:
      "The minutes are divided by sixty to express them as a fraction of an hour, then added to the whole hours to give decimal hours. Dividing by sixty is the essential step because an hour contains sixty minutes, so each minute is one-sixtieth, or about 0.0167, of an hour. That is why 45 minutes is 0.75 rather than 0.45. The result is a single decimal number that multiplies directly by an hourly rate for pay or billing.",
    faqs: [
      { question: "Why is 45 minutes 0.75 and not 0.45?", answer: "Because an hour has 60 minutes, minutes are counted in sixtieths of an hour, not hundredths. So 45 minutes is 45 ÷ 60 = 0.75 of an hour. Treating the minutes as the digits after a decimal point — writing 45 minutes as 0.45 — is the classic mistake and understates the time. Fifteen minutes is 0.25, thirty is 0.5, and forty-five is 0.75, each found by dividing the minutes by sixty." },
      { question: "How do I convert time to decimal hours?", answer: "Divide the minutes by 60 and add the result to the hours. For 7 hours 45 minutes, that is 7 + 45 ÷ 60 = 7.75 hours. The whole hours carry over unchanged, and only the minutes are converted to a fraction. This calculator performs the division for you and shows the decimal hours rounded to two places, which is the precision payroll and billing systems typically use." },
      { question: "Why do payroll systems want decimal hours?", answer: "Decimal hours multiply directly by an hourly rate, so 7.75 hours at $20 is simply 7.75 × 20 = $155. A time written as 7:45 cannot be multiplied as-is because its parts are in different units. Storing and computing time as a decimal makes wage and invoice math trivial and spreadsheet-friendly, which is why timesheet exports and payroll software almost always work in decimal hours rather than hours and minutes." },
      { question: "How precise is the decimal result?", answer: "The calculator shows decimal hours to two places, which resolves to increments of about 36 seconds and is more than enough for payroll and billing. Some minute values, such as 20 minutes being 0.333…, do not terminate, so they are rounded to two decimals. If you are chaining several conversions, keep more precision in intermediate steps, but for a single timesheet entry two decimal places is the standard and expected output." },
      { question: "Can I convert decimal hours back to time?", answer: "Yes, by reversing the process: multiply the fractional part of the decimal by 60 to get the minutes. For 7.75 hours, 0.75 × 60 = 45, giving 7 hours 45 minutes. That reverse conversion is what a decimal-hours-to-time tool does. This calculator handles the forward direction, from hours and minutes to a decimal, which is the step needed when entering timesheet data into a payroll or invoicing system." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "workday-end-time",
    slug: "workday-end-time-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Workday End Time Calculator",
    shortDescription: "Find when a shift ends from start, length and break.",
    seoTitle: "Workday End Time Calculator — When Does My Shift End",
    metaDescription:
      "Free workday end time calculator. Enter start time, shift length and break to find the exact end time and any day rollover.",
    primaryKeyword: "workday end time calculator",
    secondaryKeywords: [
      "when does my shift end",
      "shift end time calculator",
      "clock out time calculator",
    ],
    fields: [
      { id: "startTime", label: "Start time", type: "text", placeholder: "09:00", required: true, span: 2, helpText: "24-hour format, HH:MM" },
      { id: "shiftHours", label: "Shift length (hours)", type: "number", placeholder: "8", required: true, span: 1, min: 0, step: 0.25 },
      { id: "breakMinutes", label: "Break (minutes)", type: "number", unit: "min", placeholder: "30", required: false, span: 1, min: 0, defaultValue: 0 },
    ],
    results: [
      { id: "endTime", label: "End time", format: "text", isPrimary: true },
      { id: "dayOffset", label: "Days rolled over", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "total = startTime + shiftHours × 60 + breakMinutes; endTime = total mod 1440; dayOffset = ⌊total ÷ 1440⌋",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A workday end time calculator tells you what time your shift finishes, given the time you start, how long the shift lasts, and any break that extends your day. It answers the practical question \"if I clock in at 09:00, work eight hours and take a 30-minute break, when do I clock out,\" and it flags when the finish rolls past midnight into the next day.\n\nThe arithmetic is the sort that is easy to fumble under time pressure. Adding hours to a clock time means carrying across the 60-minute and 24-hour boundaries, and adding an unpaid break pushes the end time later still. A shift that starts in the evening can finish after midnight, and writing the end as an impossible time like 25:30, or forgetting the break, leads to wrong clock-out times and scheduling clashes. Converting everything to minutes past midnight removes the guesswork.\n\nHere the break is treated as time that lengthens the working day — a paid presence including a 30-minute break means you leave 30 minutes later — so it is added to the span. The day-rollover figure makes overnight shifts unambiguous: a 22:00 start plus five hours ends at 03:00 the next day, marked as +1. Shift workers checking their finish time, managers building rosters, and anyone planning around a working day use a workday end time calculator to pin down the exact clock-out moment.",
    example: {
      inputs: { startTime: "09:00", shiftHours: "8", breakMinutes: "30" },
      explanation:
        "Starting at 09:00, an 8-hour shift plus a 30-minute break ends at 17:30 the same day.",
    },
    formulaExplanation:
      "The start time is converted to minutes past midnight, the shift length in hours is multiplied by sixty to get minutes, and the break minutes are added, since a break lengthens the total time on site. The grand total is divided by 1,440 — the minutes in a day — with the whole-number quotient giving how many days the finish rolls over and the remainder giving the minutes past midnight of the end time. Formatting that remainder as HH:MM yields a valid clock time even when the shift crosses midnight.",
    faqs: [
      { question: "How do I enter the start time?", answer: "Use 24-hour format as HH:MM, so 9 in the morning is 09:00 and 10 at night is 22:00. For afternoon and evening times add twelve to the hour: 2 PM is 14:00 and 11:30 PM is 23:30, while midnight is 00:00. Using 24-hour input avoids AM/PM confusion and lets the calculator wrap correctly past midnight when a shift finishes in the early hours of the next day." },
      { question: "How is the break handled?", answer: "The break minutes are added to the working span, because a break extends how long you are at work before you can leave. If you start at 09:00, work eight paid hours and take a 30-minute break, you finish at 17:30 rather than 17:00. If your break is part of the shift length you entered and does not extend your day, set the break field to zero so it is not added twice. The field defaults to zero." },
      { question: "What does the days-rolled-over figure mean?", answer: "It counts how many whole days the end time falls past the start day. A shift beginning at 22:00 and lasting five hours ends at 03:00 with a rollover of 1, meaning the next calendar day. This matters for rostering and pay, because the finish belongs to a different date than the start. A same-day shift shows a rollover of zero, confirming the clock-out is on the day it began." },
      { question: "Does it work for overnight shifts?", answer: "Yes. Because the calculation works in total minutes and then wraps onto a 24-hour clock, a shift that finishes after midnight is handled cleanly, showing the correct early-morning end time and a day rollover of one. Even shifts longer than 24 hours are wrapped correctly with the full day count reported. This makes it reliable for night shifts, on-call windows and long production runs that span more than one day." },
      { question: "Can I enter a fractional shift length?", answer: "Yes. Enter the shift length in decimal hours, so seven and a half hours is 7.5 and a quarter-hour is 0.25. The calculator multiplies the hours by sixty to convert to minutes, so fractional hours are handled exactly. If you prefer to think in hours and minutes, convert the minutes to a fraction first — 45 minutes is 0.75 — or add them to the break field, whichever matches how your shift length is defined." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "add-business-days",
    slug: "add-business-days-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Add Business Days Calculator",
    shortDescription: "Add working days to a date, skipping weekends.",
    seoTitle: "Add Business Days Calculator — Add Working Days to a Date",
    metaDescription:
      "Free add business days calculator. Add working days to a start date, skipping Saturdays and Sundays, to find the resulting date.",
    primaryKeyword: "add business days calculator",
    secondaryKeywords: [
      "add working days to a date",
      "business days from date",
      "working days calculator",
    ],
    fields: [
      { id: "startDate", label: "Start date", type: "date", required: true, span: 1 },
      { id: "businessDays", label: "Business days to add", type: "number", placeholder: "10", required: true, span: 1, step: 1, helpText: "Use a negative number to count backwards" },
    ],
    results: [
      { id: "resultDate", label: "Resulting date", format: "text", isPrimary: true },
      { id: "calendarDaysSpanned", label: "Calendar days spanned", format: "number", decimals: 0, unit: "days", isPrimary: false },
    ],
    formula:
      "Step one calendar day at a time from the start date, counting only Mon–Fri, until the required number of business days is reached",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "An add business days calculator adds a number of working days to a start date, stepping over Saturdays and Sundays so the result always lands on a weekday. It answers deadline questions phrased in business days — \"payment is due 10 business days after invoice,\" \"results within 5 working days,\" \"a 15-working-day processing window\" — and reports both the resulting date and how many calendar days the span actually covered.\n\nBusiness days are the natural unit for commercial and legal deadlines because work does not happen at weekends. Counting them by hand is fiddly: you cannot simply add the number of days, because each weekend inserts two skipped days, and long spans can skip several weekends. Miscounting is easy and the cost is real, since a deadline stated in working days that you convert wrongly can be missed by days. The calculator removes that risk by advancing one day at a time and only decrementing the count on weekdays.\n\nThe calendar-days-spanned figure shows the true elapsed time, which is always longer than the business-day count because of the skipped weekends — 10 business days typically spans 14 calendar days. This tool counts weekends only; public holidays vary by country and are not deducted, so subtract any holidays in your span separately. Accounts teams tracking payment terms, operations staff quoting turnaround times, and anyone working to a working-day deadline use an add business days calculator to find the exact due date.",
    example: {
      inputs: { startDate: "2026-01-02", businessDays: "1" },
      explanation:
        "Friday 2 January 2026 plus 1 business day skips the weekend to land on Monday 5 January, spanning 3 calendar days.",
    },
    formulaExplanation:
      "Starting from the given date, the calculator moves forward one calendar day at a time. Each time it lands on a weekday (Monday to Friday) it counts one business day toward the target; when it lands on a Saturday or Sunday it moves on without counting. It stops once the required number of business days has been reached, and that date is the result. A negative input steps backwards using the same weekday-only counting. Calendar days spanned is the plain day gap between the start and result dates.",
    faqs: [
      { question: "What counts as a business day?", answer: "This calculator treats Monday through Friday as business days and skips Saturdays and Sundays. It does not account for public holidays, which differ by country and region, so a national holiday falling on a weekday is still counted here as a working day. If your deadline must exclude specific holidays, work out the date with this tool and then push it forward by the number of holidays that fall within the span." },
      { question: "How is this different from adding calendar days?", answer: "Adding calendar days counts every day including weekends, whereas adding business days skips Saturdays and Sundays, so the result always lands on a weekday and the span covers more calendar time. Ten business days is about two calendar weeks, not ten days. Many contracts and service commitments are written in business days precisely to exclude weekends, so converting them correctly requires the weekend-skipping this calculator provides rather than a plain day addition." },
      { question: "Why is calendar days spanned larger than the business days?", answer: "Because each weekend inside the span adds two days that are not counted as business days but still pass on the calendar. Ten business days usually includes two weekends, so the calendar span is around 14 days. The calendar-days figure tells you the real elapsed time, which is useful for understanding how far ahead a working-day deadline actually is when planning around it in ordinary dates." },
      { question: "Can I count backwards in business days?", answer: "Yes. Enter a negative number of business days to step backwards from the start date, skipping weekends in the same way, which answers questions like \"what date was 10 working days before this deadline.\" The result still lands on a weekday. This is handy for back-planning, such as finding the last day to send something so it arrives a set number of working days before an event, allowing for weekends." },
      { question: "Does the start date count as day zero?", answer: "Yes. The start date itself is not counted as a business day; counting begins on the next weekday. So adding one business day to a Friday gives the following Monday, not the Friday. If your rule counts the start date as the first business day, subtract one from the number you enter. Whether the start day counts depends on the wording of your deadline, so check the terms you are working to." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "sleep-duration",
    slug: "sleep-duration-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Sleep Duration Calculator",
    shortDescription: "Find how long you slept from bedtime to wake time.",
    seoTitle: "Sleep Duration Calculator — Hours Slept From Bed to Wake",
    metaDescription:
      "Free sleep duration calculator. Enter your bedtime and wake time to find how many hours you slept, handling overnight sleep.",
    primaryKeyword: "sleep duration calculator",
    secondaryKeywords: [
      "hours of sleep calculator",
      "how much did i sleep",
      "sleep time calculator",
    ],
    fields: [
      { id: "bedTime", label: "Bedtime", type: "text", placeholder: "23:00", required: true, span: 1, helpText: "24-hour format, HH:MM" },
      { id: "wakeTime", label: "Wake time", type: "text", placeholder: "07:00", required: true, span: 1, helpText: "24-hour format, HH:MM" },
    ],
    results: [
      { id: "hoursSlept", label: "Hours slept", format: "number", decimals: 2, unit: "h", isPrimary: true },
    ],
    formula:
      "hoursSlept = (wakeTime − bedTime, +24h if wake ≤ bed) ÷ 60, working in minutes past midnight",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "A sleep duration calculator works out how long you slept from the time you went to bed to the time you woke up, correctly handling the usual case where sleep runs across midnight. Enter a bedtime of 23:00 and a wake time of 07:00 and it returns eight hours, rather than the negative or wrong figure a naive subtraction would give.\n\nThe overnight wrap is the whole difficulty. Because bedtime is usually before midnight and wake time after it, subtracting the clock values directly gives a negative number, so the calculator adds a full 24 hours whenever the wake time is at or before the bedtime. This turns \"23:00 to 07:00\" into a clean eight-hour span. Working in minutes past midnight and then dividing by sixty keeps the result exact, including half-hours and quarter-hours.\n\nKnowing your actual sleep duration matters for tracking sleep habits against the commonly recommended seven to nine hours for adults, spotting short nights, and timing naps. It is the raw figure behind sleep diaries and many wellness routines. People logging their rest, parents tracking a child's sleep, and anyone comparing bedtime routines use a sleep duration calculator to convert two clock times into hours slept. It measures time in bed between the two points and is a personal tracking aid, not medical advice.",
    example: {
      inputs: { bedTime: "23:00", wakeTime: "07:00" },
      explanation:
        "From a bedtime of 23:00 to a wake time of 07:00 is 8 hours of sleep across midnight.",
    },
    formulaExplanation:
      "Both times are converted to minutes past midnight. If the wake time is at or before the bedtime, the sleep clearly crossed midnight, so 1,440 minutes — a full day — is added to the wake time to place it on the following day. Subtracting the bedtime from that adjusted wake time gives the sleep span in minutes, which is divided by sixty for hours. Working in minutes and adding a day when needed is what lets a normal overnight sleep produce a correct positive duration.",
    faqs: [
      { question: "How does it handle sleeping past midnight?", answer: "When the wake time is at or before the bedtime on the clock, the calculator assumes you slept overnight and adds 24 hours to the wake time before subtracting. So 23:00 to 07:00 becomes an eight-hour span rather than a negative figure. This overnight handling is the main thing the tool does, since most sleep crosses midnight and a plain clock subtraction would otherwise give the wrong answer." },
      { question: "How do I enter the times?", answer: "Use 24-hour format as HH:MM, so 11 at night is 23:00 and 7 in the morning is 07:00. For a bedtime after midnight, such as 1 AM, enter 01:00, and the calculator still measures forward to your wake time. Entering times in 24-hour form avoids AM/PM confusion, which is easy to make when sleep spans the midnight boundary between one day and the next." },
      { question: "What if I nap during the day?", answer: "For a daytime nap where you lie down and get up on the same afternoon, enter the start and end times normally and the calculator returns the gap directly. The overnight rule only adds a day when the wake time is at or before the bedtime, so a 14:00 to 15:30 nap correctly reads as one and a half hours. For very long naps that cross midnight, the same overnight handling applies automatically." },
      { question: "How many hours of sleep should I get?", answer: "Most adults are commonly advised to aim for seven to nine hours a night, with children and teenagers needing more, but individual needs vary and this is general guidance rather than medical advice. The calculator measures the time between your bedtime and wake time, which is time in bed rather than true sleep, since it cannot know how long you were actually asleep. Use it as a tracking aid and consult a professional for sleep concerns." },
      { question: "Does it measure time in bed or actual sleep?", answer: "It measures the elapsed time between the bedtime and wake time you enter, which is time in bed. Actual sleep is usually a little less, because it takes time to fall asleep and there may be brief awakenings. If you know roughly how long you were awake in bed, subtract that to estimate true sleep. For precise sleep staging you would need a wearable or a sleep study rather than a clock-time calculation." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "hours-between-times",
    slug: "hours-between-times-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Hours Between Times Calculator",
    shortDescription: "Find the hours between two clock times.",
    seoTitle: "Hours Between Times Calculator — Time Between Two Clock Times",
    metaDescription:
      "Free hours between times calculator. Find the hours and minutes between two clock times, handling spans that cross midnight.",
    primaryKeyword: "hours between times calculator",
    secondaryKeywords: [
      "time between two times",
      "hours between two times",
      "elapsed time calculator",
    ],
    fields: [
      { id: "startTime", label: "Start time", type: "text", placeholder: "09:00", required: true, span: 1, helpText: "24-hour format, HH:MM" },
      { id: "endTime", label: "End time", type: "text", placeholder: "17:30", required: true, span: 1, helpText: "24-hour format, HH:MM" },
    ],
    results: [
      { id: "totalHours", label: "Total hours", format: "number", decimals: 2, unit: "h", isPrimary: true },
      { id: "totalMinutes", label: "Total minutes", format: "number", decimals: 0, unit: "min", isPrimary: false },
    ],
    formula:
      "totalMinutes = endTime − startTime (+1440 if end < start); totalHours = totalMinutes ÷ 60",
    formulaSource: "Gregorian calendar / ISO 8601",
    explanation:
      "An hours between times calculator finds how much time passes between two clock times, returning the span both as decimal hours and as total minutes. It answers questions like \"how long from 09:00 to 17:30\" — eight and a half hours — and correctly handles spans that run past midnight, so a window from 22:00 to 06:00 reads as eight hours rather than a negative value.\n\nThe midnight wrap is the usual stumbling block. Subtracting the start time from the end time works only when the end is later on the same day; when the end time is earlier on the clock, the span crossed midnight and a full 24 hours must be added. This calculator handles that automatically by adding 1,440 minutes whenever the end is before the start, so overnight windows come out right without any manual adjustment.\n\nWorking in minutes past midnight keeps the arithmetic exact, avoiding the base-60 traps of subtracting HH:MM values directly. The decimal-hours output is ready for pay and billing calculations, while the total minutes are handy for pacing and rate work. People measuring a work window, an appointment length, a parking or delivery duration, or any gap between two times use an hours between times calculator to get the elapsed time cleanly, including across the midnight boundary.",
    example: {
      inputs: { startTime: "09:00", endTime: "17:30" },
      explanation:
        "From 09:00 to 17:30 is 510 minutes, which is 8.5 hours.",
    },
    formulaExplanation:
      "Both clock times are converted to minutes past midnight and the start is subtracted from the end. If the end time is earlier than the start, the span must have crossed midnight, so 1,440 minutes — one full day — is added to make the result positive. That minute total is the elapsed time, reported directly and also divided by sixty for decimal hours. Converting to a single minute unit first avoids the errors of subtracting hours and minutes separately in base 60.",
    faqs: [
      { question: "How do I calculate the hours between two times?", answer: "Convert each time to minutes past midnight, subtract the start from the end, and divide by 60 for hours. If the end time is earlier on the clock than the start, add 24 hours first because the span crossed midnight. The calculator does all of this, so 09:00 to 17:30 gives 8.5 hours and an overnight window like 22:00 to 06:00 correctly gives 8 hours rather than a negative result." },
      { question: "Does it handle times crossing midnight?", answer: "Yes. When the end time is earlier than the start time, the calculator assumes the span ran past midnight and adds a full 24 hours, so a window from 22:00 to 06:00 reads as eight hours. This makes it reliable for night shifts, overnight parking, or any interval that spans two days. It assumes a single span under 24 hours, which covers essentially every everyday case of measuring the gap between two clock times." },
      { question: "How do I enter the times?", answer: "Use 24-hour format as HH:MM, so 9 in the morning is 09:00 and half past five in the afternoon is 17:30. For PM times add twelve to the hour: 1:15 PM is 13:15 and 11:45 PM is 23:45, while midnight is 00:00. Entering times this way removes AM/PM ambiguity and lets the calculator correctly detect and handle windows that cross the midnight boundary between two days." },
      { question: "What is the difference between total hours and total minutes?", answer: "Both describe the same span in different units. Total minutes is the raw elapsed time as a whole number, convenient for rate and pacing calculations, while total hours expresses it as a decimal, which multiplies directly by an hourly rate for pay or billing. So 510 minutes and 8.5 hours are the same duration; you pick whichever unit your next calculation needs, with the decimal hours being the more common payroll input." },
      { question: "Can I use this to work out hours worked?", answer: "Yes, for a single shift enter your clock-in as the start and clock-out as the end to get the elapsed hours, including overnight shifts. Note that this measures the full span and does not subtract unpaid breaks, so deduct any break time yourself, or use a dedicated time-card tool that includes a break field. The decimal-hours output is the figure most payroll systems expect once breaks are accounted for." },
    ],
    relatedCalculators: RELATED,
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
