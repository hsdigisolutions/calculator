import type { CalculatorDefinition } from "../types";

export const dateTimeCalculators: CalculatorDefinition[] = [
  {
    id: "age",
    slug: "age-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Age Calculator",
    shortDescription: "Find an exact age in years, months and days.",
    seoTitle: "Age Calculator — Free Exact Age in Years, Months & Days",
    metaDescription:
      "Free age calculator. Find your exact age in years, months and days from your date of birth, plus total days, weeks and months lived.",
    primaryKeyword: "age calculator",
    secondaryKeywords: ["date of birth calculator", "how old am i", "age in days calculator"],
    fields: [
      { id: "birthDate", label: "Date of birth", type: "date", required: true, span: 1 },
      { id: "asOf", label: "Age at date", type: "date", required: false, span: 1, helpText: "Leave blank for today." },
    ],
    results: [
      { id: "age", label: "Age", format: "text", isPrimary: true },
      { id: "totalMonths", label: "Total months", format: "number", decimals: 0, isPrimary: false },
      { id: "totalWeeks", label: "Total weeks", format: "number", decimals: 0, isPrimary: false },
      { id: "totalDays", label: "Total days", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "age = calendar difference between date of birth and the chosen date",
    formulaSource: "Standard calendar (Gregorian) arithmetic",
    explanation:
      "An age calculator measures the elapsed span between a date of birth and a reference date, breaking it into completed years, months and days rather than a single rounded figure. It reads the two dates as calendar components and subtracts them piece by piece, borrowing days from the previous month and months from the previous year whenever a subtraction would go negative, exactly as you would when doing long subtraction by hand.\n\nThe precision matters because so many thresholds hang on an exact figure: legal majority, school entry cut-offs, retirement eligibility, insurance bands and medication dosing all turn on whether someone has actually reached a birthday. A rough estimate of years multiplied by 365 quietly drifts off by several days over a lifetime, and that drift can push a date across one of those lines.\n\nThis component-comparison method is used because it mirrors how the Gregorian calendar itself behaves, with months of unequal length and a leap day every four years. Parents tracking an infant in weeks, HR teams confirming eligibility, genealogists dating records and anyone simply asking how old they are all rely on an age calculator to turn two dates into a figure they can trust.",
    example: {
      inputs: { birthDate: "1990-01-15", asOf: "2026-08-20" },
      explanation: "From 15 Jan 1990 to 20 Aug 2026 is 36 years, 7 months and 5 days.",
    },
    formulaExplanation:
      "The two dates are subtracted component by component — days, then months, then years — borrowing from the next unit up whenever a difference goes negative, just like long subtraction. This works because the Gregorian calendar has months of unequal length and a leap day every fourth year, so only a real date-versus-date comparison, not a fixed-length assumption, yields the true completed years, months and days.",
    faqs: [
      { question: "Does it account for leap years?", answer: "Yes. Because the method compares actual calendar dates rather than assuming a fixed year length, every 29 February between the two dates is counted precisely. Someone born on a leap day sees their completed years tick over on 28 February in common years, which is how most legal systems treat leap-day birthdays for age thresholds." },
      { question: "Can I calculate age at a past or future date?", answer: "Yes. Enter any date in the 'Age at date' field and the result reflects age on that exact day rather than today. This is useful for checking eligibility on a policy renewal, working out how old someone will be at a wedding, or confirming an age as of a historical record. Leave the field blank to default to the current date." },
      { question: "Why does the day count differ from years multiplied by 365?", answer: "A calendar year averages roughly 365.25 days once leap years are folded in, so a plain multiplication understates the true total. Over 36 years that gap grows to about nine extra days. The calculator counts real elapsed days from the calendar instead, which is why its total-days figure sits slightly above the naive estimate." },
      { question: "How do I calculate age in months or weeks only?", answer: "The result panel reports total completed months and total weeks alongside the years-months-days breakdown. Total months counts every whole month that has elapsed, and total weeks divides the exact day count by seven. Parents of newborns often prefer weeks, while month totals suit tracking milestones in the first couple of years." },
      { question: "Is age counted from the day you are born or the day after?", answer: "Standard convention counts age from the day of birth, so you are zero years old on your birth date and turn one on your first birthday. This calculator follows that convention. A handful of East Asian traditional systems count differently, but for legal, medical and everyday Western use the day-of-birth basis is correct." },
    ],
    relatedCalculators: ["date-difference-calculator", "business-days-calculator", "time-duration-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
