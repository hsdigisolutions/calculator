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
    slugEs: "calculadora-de-edad",
    titleEs: "Calculadora de Edad",
    shortDescriptionEs: "Encuentra una edad exacta en años, meses y días.",
    seoTitleEs: "Calculadora de Edad — Edad Exacta Gratis en Años, Meses y Días",
    metaDescriptionEs:
      "Calculadora de edad gratuita. Encuentra tu edad exacta en años, meses y días a partir de tu fecha de nacimiento, además de días, semanas y meses totales vividos.",
    primaryKeywordEs: "calculadora de edad",
    secondaryKeywordsEs: ["calculadora de fecha de nacimiento", "cuantos años tengo", "calculadora de edad en dias"],
    formulaExplanationEs:
      "Las dos fechas se restan componente por componente — primero los días, luego los meses y por último los años — pidiendo prestado a la unidad superior siempre que una diferencia resulta negativa, igual que en una resta larga hecha a mano. Esto funciona porque el calendario gregoriano tiene meses de longitud desigual y un día bisiesto cada cuatro años, así que solo una comparación real de fecha contra fecha, y no una suposición de longitud fija, produce los años, meses y días completos verdaderos.",
    explanationEs:
      "Una calculadora de edad mide el tiempo transcurrido entre una fecha de nacimiento y una fecha de referencia, dividiéndolo en años, meses y días completos en lugar de una sola cifra redondeada. Lee las dos fechas como componentes de calendario y las resta pieza por pieza, pidiendo prestados días al mes anterior y meses al año anterior cada vez que una resta resultaría negativa, exactamente como harías con una resta larga a mano.\n\nLa precisión importa porque muchísimos umbrales dependen de una cifra exacta: la mayoría de edad legal, las fechas de corte para el ingreso escolar, la elegibilidad para la jubilación, los tramos de seguros y la dosificación de medicamentos giran en torno a si alguien ha cumplido realmente un cumpleaños. Una estimación aproximada de años multiplicada por 365 se desvía discretamente varios días a lo largo de una vida, y esa desviación puede empujar una fecha más allá de una de esas líneas.\n\nEste método de comparación de componentes se utiliza porque refleja el comportamiento del propio calendario gregoriano, con meses de longitud desigual y un día bisiesto cada cuatro años. Los padres que siguen a un bebé en semanas, los equipos de recursos humanos que confirman la elegibilidad, los genealogistas que datan registros y cualquiera que simplemente pregunte cuántos años tiene se apoyan en una calculadora de edad para convertir dos fechas en una cifra confiable.",
    exampleEs: {
      inputs: { birthDate: "1990-01-15", asOf: "2026-08-20" },
      explanation: "Del 15 de enero de 1990 al 20 de agosto de 2026 hay 36 años, 7 meses y 5 días.",
    },
    faqsEs: [
      { question: "¿Tiene en cuenta los años bisiestos?", answer: "Sí. Como el método compara fechas de calendario reales en lugar de suponer una longitud de año fija, cada 29 de febrero entre las dos fechas se cuenta con precisión. Alguien nacido en un día bisiesto ve cómo sus años completos avanzan el 28 de febrero en los años comunes, que es como la mayoría de los sistemas legales tratan los cumpleaños en día bisiesto para los umbrales de edad." },
      { question: "¿Puedo calcular la edad en una fecha pasada o futura?", answer: "Sí. Introduce cualquier fecha en el campo 'Edad en la fecha' y el resultado reflejará la edad en ese día exacto en lugar de hoy. Esto resulta útil para comprobar la elegibilidad en la renovación de una póliza, calcular qué edad tendrá alguien en una boda o confirmar una edad según un registro histórico. Deja el campo en blanco para usar la fecha actual de forma predeterminada." },
      { question: "¿Por qué el conteo de días difiere de los años multiplicados por 365?", answer: "Un año de calendario promedia aproximadamente 365,25 días una vez que se incorporan los años bisiestos, por lo que una simple multiplicación subestima el total verdadero. A lo largo de 36 años esa diferencia crece hasta unos nueve días adicionales. La calculadora cuenta los días transcurridos reales del calendario en su lugar, y por eso su cifra de días totales queda ligeramente por encima de la estimación ingenua." },
      { question: "¿Cómo calculo la edad solo en meses o semanas?", answer: "El panel de resultados muestra los meses completos totales y las semanas totales junto al desglose de años, meses y días. Los meses totales cuentan cada mes completo que ha transcurrido, y las semanas totales dividen el conteo exacto de días entre siete. Los padres de recién nacidos a menudo prefieren las semanas, mientras que los totales en meses se adaptan mejor al seguimiento de hitos en los primeros años." },
      { question: "¿La edad se cuenta desde el día en que naces o desde el día siguiente?", answer: "La convención estándar cuenta la edad desde el día de nacimiento, así que tienes cero años en tu fecha de nacimiento y cumples uno en tu primer cumpleaños. Esta calculadora sigue esa convención. Algunos sistemas tradicionales de Asia Oriental cuentan de forma diferente, pero para el uso legal, médico y cotidiano occidental, la base del día de nacimiento es la correcta." },
    ],
    relatedCalculators: ["date-difference-calculator", "business-days-calculator", "time-duration-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
