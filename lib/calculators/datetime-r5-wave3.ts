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
      "Free add days calculator. Add or subtract any number of days from a start date to see the resulting date and weekday, skipping the manual counting.",
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
    slugEs: "calculadora-de-sumar-dias",
    titleEs: "Calculadora de Sumar Días",
    shortDescriptionEs: "Suma o resta días a una fecha.",
    seoTitleEs: "Calculadora de Sumar Días — Sumar o Restar Días a una Fecha",
    metaDescriptionEs:
      "Calculadora gratuita para sumar días. Suma o resta cualquier número de días a una fecha inicial y obtén la fecha resultante y el día de la semana.",
    primaryKeywordEs: "calculadora de sumar días",
    secondaryKeywordsEs: [
      "sumar días a una fecha",
      "fecha más días",
      "restar días a una fecha",
    ],
    formulaExplanationEs:
      "La fecha inicial se convierte en un recuento continuo de días (mediante una marca de tiempo UTC), se suma el desplazamiento y el total se vuelve a convertir en una fecha del calendario. Como un índice de días corrido no tiene noción de la longitud de los meses, cada mes de 30 y 31 días y cada día bisiesto se absorbe de forma automática. El día de la semana surge de la posición del resultado en el ciclo de siete días, y los desplazamientos negativos simplemente restan, de modo que contar hacia atrás no requiere ningún caso especial.",
    explanationEs:
      "Una calculadora de sumar días toma una fecha de partida y un número de días y devuelve la fecha que cae ese número de días después, junto con el día de la semana en que ocurre. Si introduces un número negativo, cuenta hacia atrás, por lo que la misma herramienta responde tanto a «qué fecha será dentro de 45 días» como a «qué fecha fue hace 45 días». Funciona a partir de un recuento continuo de días en lugar de mover el campo del día del mes, así que salta con limpieza sobre los finales de mes y los límites de año sin que tengas que seguir cuántos días tiene cada mes.\n\nEsto importa siempre que un plazo se define como un desplazamiento. Condiciones de pago a 30 días, una ventana de devolución de 90 días, un derecho de cancelación de 14 días, un periodo de incubación o un hito de proyecto expresado como «inicio más 60 días» se reducen a sumar días a una fecha conocida. Hacerlo a mano a través de febrero o de un fin de año es justo donde aparecen los errores de un día y de mes equivocado, y un solo día mal contado puede anular una devolución o incumplir una presentación.\n\nEl resultado del día de la semana suele ser tan útil como la propia fecha, ya que un plazo que cae en sábado o domingo normalmente se traslada al siguiente día hábil. Administradores de contratos, planificadores logísticos, equipos de recursos humanos y cualquiera que cuente hacia un evento usan una calculadora de sumar días para convertir un desplazamiento en una fecha firme del calendario.",
    exampleEs: {
      inputs: { startDate: "2026-01-01", days: "10" },
      explanation:
        "Diez días después del 1 de enero de 2026 es el 11 de enero de 2026, que es domingo.",
    },
    faqsEs: [
      { question: "¿Cómo resto días en lugar de sumarlos?", answer: "Introduce el número de días como un valor negativo. Al escribir -45 en el campo de días, se devuelve la fecha 45 días antes de la fecha inicial, junto con su día de la semana. La calculadora usa el mismo recuento continuo de días para ambas direcciones, así que restar a través del inicio de un mes o de un límite de año se maneja exactamente igual que sumar, sin ningún modo aparte que activar." },
      { question: "¿Cuenta la fecha inicial como el día uno?", answer: "No. La fecha inicial es el día cero, así que sumar un día da la fecha del calendario siguiente, no la fecha inicial en sí. Si tu regla cuenta la fecha inicial de forma inclusiva, por ejemplo una garantía que corre desde el día de compra incluido, resta uno al número de días que introduces. Si conviene contar de forma inclusiva depende de la redacción de tu plazo o contrato." },
      { question: "¿Es exacto el día de la semana en años bisiestos?", answer: "Sí. El resultado se deriva de un recuento continuo de días que ya incluye cualquier 29 de febrero del intervalo, así que el día de la semana refleja la posición real en el ciclo de siete días. No hay ningún ajuste de año bisiesto que aplicar. Un intervalo que cruce un día bisiesto desplazará el día de la semana un día de forma automática, lo cual es una razón por la que el conteo manual a menudo cae en el día equivocado." },
      { question: "¿Omite fines de semana o festivos?", answer: "No. Esta calculadora suma días naturales, así que los fines de semana y los festivos se incluyen en el recuento y el resultado puede caer en cualquier día de la semana. Si necesitas sumar solo días hábiles, usa una herramienta de días laborables. El día de la semana ayuda aquí: si tu plazo cae en sábado o domingo, puedes adelantarlo tú mismo al siguiente día hábil." },
      { question: "¿Por qué se calcula la fecha en UTC?", answer: "Trabajar en el calendario UTC mantiene el resultado estable sin importar la zona horaria o las reglas de horario de verano de quien use la calculadora. Como solo intervienen días naturales completos, no hay componente de hora que desplazar, así que la fecha que obtienes es la misma en todas partes. Ese determinismo es lo que permite que el mismo desplazamiento produzca la misma respuesta para todos los usuarios." },
    ],
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
      "Free week number calculator. Find the ISO-8601 week number and the day of the year for any date, plus which week today falls in and the days left.",
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
    slugEs: "calculadora-de-numero-de-semana",
    titleEs: "Calculadora de Número de Semana",
    shortDescriptionEs: "Encuentra el número de semana ISO de una fecha.",
    seoTitleEs: "Calculadora de Número de Semana — Semana ISO-8601 del Año",
    metaDescriptionEs:
      "Calculadora gratuita de número de semana. Encuentra el número de semana ISO-8601 y el día del año de cualquier fecha.",
    primaryKeywordEs: "calculadora de número de semana",
    secondaryKeywordsEs: [
      "número de semana iso",
      "en qué semana estamos",
      "calculadora del día del año",
    ],
    formulaExplanationEs:
      "La fecha se desplaza al jueves de su propia semana de lunes a domingo, porque la norma ISO vincula cada semana a su jueves. El número de semanas completas entre ese jueves y el primer jueves de su año, más uno, es el número de semana ISO. Anclar en el jueves es lo que hace que del 1 al 3 de enero a veces caigan en la semana 52 o 53 del año anterior, y que del 29 al 31 de diciembre a veces caigan en la semana 1 del año siguiente. El día del año es la fecha menos el 1 de enero.",
    explanationEs:
      "Una calculadora de número de semana te indica en qué semana numerada del año cae una fecha según la norma ISO-8601, y también cuántos días del año han transcurrido hasta esa fecha. Las semanas ISO van de lunes a domingo, y la semana 1 se define como la semana que contiene el primer jueves del año, que es la misma que contiene el 4 de enero. Esa definición es lo que significan las empresas, los sistemas ERP y los calendarios cuando hablan de «semana 32» o «CW14».\n\nEsto importa porque los números de semana son una moneda común de planificación, sobre todo en Europa y en la industria, la logística y el comercio minorista. Los programas de producción, las ventanas de envío, los planes de sprint y los calendarios financieros se citan a menudo por número de semana en lugar de por fecha, y todos los implicados deben coincidir en la misma numeración. La regla ISO elimina la ambigüedad sobre a qué semana pertenece una fecha cercana a un límite de año, donde el conteo informal tiende a discrepar.\n\nLa cifra del día del año, de 1 a 365 o 366, es la fecha ordinal y resulta útil para registros, numeración de secuencias y estimaciones rápidas de intervalos. Como la definición ISO se ancla en los jueves, los primeros días de enero pueden pertenecer a la semana 52 o 53 del año anterior, y los últimos días de diciembre a la semana 1 del siguiente, algo que una calculadora de número de semana resuelve correctamente para que nunca etiquetes mal una semana que cruza el año.",
    exampleEs: {
      inputs: { date: "2026-06-15" },
      explanation:
        "El 15 de junio de 2026 es un lunes de la semana ISO 25, y es el día 166 de 2026.",
    },
    faqsEs: [
      { question: "¿Cuál es la regla de numeración de semanas ISO-8601?", answer: "Según la norma ISO-8601, las semanas empiezan en lunes y la semana 1 es la que contiene el primer jueves del año, equivalentemente la que contiene el 4 de enero. Esto significa que los primeros días naturales del año pueden pertenecer a la última semana del año anterior, y un año tiene 52 o 53 semanas. La regla se usa en toda Europa y en la mayoría de sistemas empresariales y de software para referencias de semana sin ambigüedad." },
      { question: "¿Por qué el 1 de enero puede estar en la semana 52 o 53?", answer: "Como la semana 1 ISO debe contener el primer jueves, los días de principios de enero que caen antes del lunes de ese jueves pertenecen a la última semana del año ISO anterior. Por ejemplo, si el 1 de enero es viernes, se sitúa en la última semana del año saliente. Esto es intencionado: mantiene cada semana ISO con siete días completos y vinculada a un único año dominante." },
      { question: "¿Cuántas semanas tiene un año?", answer: "Un año ISO tiene 53 semanas cuando empieza en jueves, o cuando es bisiesto y empieza en miércoles; de lo contrario tiene 52. La mayoría de los años tienen 52 semanas. Los años de 53 semanas, como 2026, importan para nóminas y calendarios minoristas que presupuestan por semana, porque incluyen un periodo de pago o informe adicional en comparación con un año de 52 semanas." },
      { question: "¿Para qué sirve el día del año?", answer: "El día del año, también llamado fecha ordinal, numera cada día desde el 1 el 1 de enero hasta el 365 o 366 el 31 de diciembre. Es útil en registros, nombres de archivo, numeración por lotes y astronomía, y para estimar rápidamente el intervalo entre dos fechas del mismo año restando un ordinal del otro. Complementa el número de semana cuando necesitas un único índice corrido." },
      { question: "¿La calculadora usa domingo o lunes como primer día?", answer: "Usa el lunes, siguiendo la norma ISO-8601, así que una semana va de lunes a domingo. Esto difiere de la convención estadounidense, donde las semanas suelen mostrarse empezando en domingo y numeradas de otra forma. Si tu organización usa un inicio en domingo o una regla distinta para la semana 1, el número ISO aquí puede diferir en uno cerca de los bordes del año, así que confirma qué estándar esperan tus sistemas." },
    ],
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
      "Free day of the week calculator. Find which weekday any past or future date falls on and whether it is a weekend, using the Gregorian calendar.",
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
    slugEs: "calculadora-de-dia-de-la-semana",
    titleEs: "Calculadora de Día de la Semana",
    shortDescriptionEs: "Averigua en qué día de la semana cae una fecha.",
    seoTitleEs: "Calculadora de Día de la Semana — Qué Día Fue una Fecha",
    metaDescriptionEs:
      "Calculadora gratuita de día de la semana. Averigua en qué día cae cualquier fecha pasada o futura y si es fin de semana.",
    primaryKeywordEs: "calculadora de día de la semana",
    secondaryKeywordsEs: [
      "qué día nací",
      "día de la semana de una fecha",
      "buscador de día",
    ],
    formulaExplanationEs:
      "La fecha se convierte en un recuento continuo de días en el calendario gregoriano proléptico, y el resto de ese recuento dentro de un ciclo de siete días da el día de la semana. Como el índice de días ya contiene cada día bisiesto, no se necesita ninguna corrección aparte, y la respuesta es exacta para fechas de siglos en el pasado o el futuro. La marca de fin de semana simplemente comprueba si el día resultante es sábado o domingo, los días no laborables occidentales estándar.",
    explanationEs:
      "Una calculadora de día de la semana nombra el día en que cae cualquier fecha, pasada o futura, y te dice si esa fecha es fin de semana. Le das una fecha y devuelve de lunes a domingo, así que puedes responder «qué día nací», «en qué día cae el plazo» o «ese aniversario cae en fin de semana» sin hojear un calendario. Funciona por completo a partir de la posición de la fecha en el ciclo repetido de siete días del calendario gregoriano.\n\nSaber el día de la semana cambia cómo se trata una fecha. Un pago o una presentación que vence en sábado normalmente se traslada al siguiente día hábil, un evento en viernes se lee muy distinto del mismo evento en martes, y la planificación de turnos y entregas depende de qué días son laborables. Calcular el día de la semana a mano implica contar desde una referencia conocida y ajustar por los años bisiestos, lo cual es engorroso y propenso a errores en intervalos largos.\n\nEl cálculo es exacto porque asigna la fecha a un recuento continuo de días y lee su resto dentro de la semana de siete días, así que los días bisiestos ya están contabilizados. La marca de fin de semana usa la convención estándar de sábado y domingo. Genealogistas que confirman un día de nacimiento, organizadores de eventos que eligen fechas y cualquiera que compruebe si un plazo cae en día hábil recurren a una calculadora de día de la semana para una respuesta instantánea y fiable.",
    exampleEs: {
      inputs: { date: "2026-07-04" },
      explanation:
        "El 4 de julio de 2026 cae en sábado, que la calculadora marca como fin de semana.",
    },
    faqsEs: [
      { question: "¿En qué día de la semana nací?", answer: "Introduce tu fecha de nacimiento y la calculadora devuelve el día exacto de la semana, de lunes a domingo. Funciona para cualquier fecha del calendario gregoriano, incluidas fechas de hace más de un siglo, porque calcula a partir de un recuento continuo de días que incluye cada día bisiesto. Es el mismo método que usan los almanaques, así que la respuesta del día de nacimiento coincide con los registros históricos de la era gregoriana." },
      { question: "¿Qué días cuentan como fin de semana?", answer: "La calculadora usa el sábado y el domingo como fin de semana, siguiendo la semana laboral occidental estándar. Algunas regiones, en particular en Oriente Medio y partes de Asia, tratan el viernes y el sábado o el viernes y el domingo como fin de semana. Si tu contexto usa otra convención, lee el día nombrado y aplica tu propia regla, ya que el nombre del día es universal aunque la definición de fin de semana difiera." },
      { question: "¿Funciona para fechas futuras?", answer: "Sí. El ciclo de siete días y las reglas gregorianas de años bisiestos están totalmente definidos hacia el futuro, así que el día de la semana de cualquier fecha próxima es exacto, no una estimación. Esto lo hace fiable para planificar eventos, plazos y programas con años de antelación. La única salvedad es que los calendarios civiles podrían en principio reformarse, pero no se prevé ningún cambio así, por lo que los días futuros calculados de este modo son fiables." },
      { question: "¿Es exacto para fechas muy antiguas?", answer: "Es exacto en el calendario gregoriano proléptico, que extiende las reglas actuales hacia atrás. Para fechas anteriores a la adopción del calendario gregoriano por un país en 1582 o después, los registros históricos pueden haber usado el calendario juliano, así que el día de la semana que la gente registró entonces podría diferir. Para fechas modernas en cualquier país que haya adoptado el sistema gregoriano, el resultado coincide con el calendario de uso cotidiano." },
      { question: "¿Por qué importa el día de la semana para los plazos?", answer: "Muchas reglas trasladan una fecha de vencimiento que cae en fin de semana al siguiente día hábil, así que saber el día de la semana te dice si aplica un ajuste. Un pago de impuestos, una presentación judicial o una factura que vence en sábado suele vencer efectivamente el lunes siguiente. Comprobar primero el día de la semana te permite planificar en torno a estos traslados en lugar de que te sorprenda un plazo que se desplaza sin aviso." },
    ],
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
      "Free leap year calculator. Check whether any year is a leap year, how many days it has, and find the next and previous leap years in one click.",
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
    slugEs: "calculadora-de-ano-bisiesto",
    titleEs: "Calculadora de Año Bisiesto",
    shortDescriptionEs: "Comprueba si un año es bisiesto.",
    seoTitleEs: "Calculadora de Año Bisiesto — ¿Es un Año Bisiesto?",
    metaDescriptionEs:
      "Calculadora gratuita de año bisiesto. Comprueba si un año es bisiesto, cuántos días tiene y cuál es el próximo año bisiesto.",
    primaryKeywordEs: "calculadora de año bisiesto",
    secondaryKeywordsEs: [
      "es un año bisiesto",
      "verificador de año bisiesto",
      "días de un año",
    ],
    formulaExplanationEs:
      "Un año es bisiesto cuando es divisible entre 4, con una excepción: los años divisibles entre 100 no son bisiestos a menos que también sean divisibles entre 400. Esa prueba en capas hace que el año medio del calendario sea de 365,2425 días, coincidiendo con el año solar con un margen de menos de medio minuto. Un año bisiesto tiene por tanto 366 días y uno común 365, y el próximo año bisiesto se halla avanzando hasta que se cumpla la misma prueba.",
    explanationEs:
      "Una calculadora de año bisiesto comprueba si un año dado tiene un día adicional, el 29 de febrero, te indica si ese año tiene 365 o 366 días y señala el próximo año bisiesto. Los años bisiestos existen para mantener el calendario alineado con la órbita de la Tierra, que dura unos 365,2422 días, de modo que un día extra aproximadamente cada cuatro años impide que las estaciones se desplacen respecto a las fechas con el tiempo.\n\nLa regla no es simplemente «cada cuatro años». Un año es bisiesto si es divisible entre cuatro, pero los años seculares son una excepción: solo son bisiestos cuando además son divisibles entre 400. Así, el año 2000 fue bisiesto mientras que 1700, 1800 y 1900 no lo fueron, y 2100 tampoco lo será. Esta corrección de 400 años ajusta con precisión el año medio del calendario a 365,2425 días, muy cercano al año solar real, y es exactamente la sutileza que la gente pasa por alto al contar a mano.\n\nSaber si un año es bisiesto importa a cualquiera que calcule duraciones, intereses diarios, programas de proyecto o cumpleaños del 29 de febrero. Una calculadora de año bisiesto resuelve la cuestión al instante y, al ofrecer también el recuento de días y el próximo año bisiesto, ayuda con la planificación que debe tener en cuenta el ocasional año de 366 días en lugar de suponer que todos los años tienen la misma duración.",
    exampleEs: {
      inputs: { year: "2026" },
      explanation:
        "2026 no es un año bisiesto, así que tiene 365 días; el próximo año bisiesto es 2028.",
    },
    faqsEs: [
      { question: "¿Cómo sé si un año es bisiesto?", answer: "Comprueba tres condiciones en orden: si el año no es divisible entre 4 es común; si es divisible entre 4 pero no entre 100 es bisiesto; si es divisible entre 100 es bisiesto solo cuando además es divisible entre 400. Así, 2024 es bisiesto, 1900 no lo es y 2000 sí. La calculadora aplica esta prueba por ti y expresa el resultado con claridad." },
      { question: "¿Por qué algunos años seculares no son bisiestos?", answer: "Una regla simple de cuatro años corregiría de más, haciendo el año del calendario algo demasiado largo y dejando que las estaciones se desplacen a lo largo de los siglos. Omitir el día bisiesto en los años seculares no divisibles entre 400 elimina tres días bisiestos cada 400 años, ajustando el año medio a 365,2425 días. Por eso 1700, 1800 y 1900 fueron años comunes mientras que 2000 conservó su 29 de febrero, y 2100 volverá a ser un año común." },
      { question: "¿Cuántos días tiene un año bisiesto?", answer: "Un año bisiesto tiene 366 días, uno más que los 365 de un año común, con el día extra añadido como 29 de febrero. Esto afecta a todo lo medido en días a lo largo del año: el interés diario se acumula un día más, los salarios anuales se reparten en un día más, y un intervalo de un año completo entre dos fechas próximas al día bisiesto abarca 366 días. La calculadora informa del recuento exacto de días del año que introduces." },
      { question: "¿Qué pasa con los cumpleaños del 29 de febrero?", answer: "Las personas nacidas el 29 de febrero, a veces llamadas «bisiestas», tienen un cumpleaños real solo en años bisiestos. En años comunes suelen celebrarlo el 28 de febrero o el 1 de marzo, y las leyes difieren sobre qué fecha cuenta a efectos legales como la mayoría de edad. La calculadora puede indicarte qué años próximos contienen un 29 de febrero para que sepas cuándo cae de nuevo tu verdadero cumpleaños." },
      { question: "¿Cuándo es el próximo año bisiesto?", answer: "La calculadora devuelve el próximo año bisiesto después del que introduces, avanzando hasta que un año supere la prueba de año bisiesto. Los años bisiestos suelen ocurrir cada cuatro años, así que desde 2026 el siguiente es 2028, pero la regla secular puede crear un intervalo de ocho años, como entre 1896 y 1904, porque 1900 se omitió. El resultado tiene en cuenta esa excepción de forma automática." },
    ],
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
      "Free time card calculator. Enter your clock-in, clock-out and break times to get total hours worked as a decimal and in H:MM, ideal for payroll.",
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
    slugEs: "calculadora-de-horas-trabajadas",
    titleEs: "Calculadora de Tarjeta de Horas",
    shortDescriptionEs: "Calcula las horas trabajadas de un turno.",
    seoTitleEs: "Calculadora de Tarjeta de Horas — Horas Trabajadas por Fichaje",
    metaDescriptionEs:
      "Calculadora gratuita de tarjeta de horas. Introduce la entrada, la salida y el descanso para obtener las horas trabajadas en decimal y en H:MM.",
    primaryKeywordEs: "calculadora de horas trabajadas",
    secondaryKeywordsEs: [
      "calculadora de horas de trabajo",
      "calculadora de hoja de horas",
      "horas trabajadas por turno",
    ],
    formulaExplanationEs:
      "Ambas horas de reloj se convierten en minutos desde la medianoche y se restan. Si el resultado es negativo, el turno cruzó la medianoche, así que se suman 1440 minutos —un día completo— para hacerlo positivo. Luego se resta el descanso no pagado en minutos, y los minutos restantes se dividen entre sesenta para las horas decimales y se separan en horas y minutos enteros para la vista H:MM. Trabajar en una única unidad de minutos evita mezclar campos de reloj en base 60.",
    explanationEs:
      "Una calculadora de tarjeta de horas convierte la hora de entrada y de salida de un turno, menos cualquier descanso no pagado, en las horas trabajadas, mostradas tanto como una cifra decimal para nóminas como en horas y minutos para leerlas. Convierte cada hora en minutos desde la medianoche, halla la diferencia y, cuando la salida es anterior a la entrada, suma un día completo para que un turno nocturno se mida correctamente en lugar de mostrar un intervalo negativo.\n\nEsta es la aritmética cotidiana detrás de los salarios, y los pequeños errores se acumulan rápido. Leer mal un turno que pasa de la medianoche, u olvidar descontar un descanso para comer, se traduce directamente en pagos de más o de menos y en disputas. Como la hora de reloj es de base 60 y no decimal, restar valores HH:MM directamente da respuestas erróneas, así que convertir primero a una única unidad de minutos es lo que mantiene el resultado honesto.\n\nLa salida en horas decimales es deliberadamente la cifra principal porque los sistemas de nómina y facturación multiplican las horas decimales por una tarifa horaria: 8 horas 30 minutos son 8,5, no 8,30. La vista H:MM está ahí para una comprobación humana. Trabajadores por turnos que verifican una nómina, dueños de pequeños negocios que gestionan la nómina y autónomos que registran horas facturables usan una calculadora de tarjeta de horas para convertir los fichajes en las horas pagadas exactas, un turno a la vez, con los descansos no pagados descontados.",
    exampleEs: {
      inputs: { clockIn: "09:00", clockOut: "17:30", breakMinutes: "30" },
      explanation:
        "De 09:00 a 17:30 son 8,5 horas; un descanso no pagado de 30 minutos deja 8,00 horas (8:00).",
    },
    faqsEs: [
      { question: "¿Cómo introduzco las horas?", answer: "Usa el formato de 24 horas como HH:MM, así que las 9 de la mañana son 09:00 y las cinco y media de la tarde son 17:30. Para horas PM, suma doce a la hora: la 1:15 PM son las 13:15 y las 11:45 PM son las 23:45, mientras que la medianoche es 00:00. Introducir las horas de este modo elimina la ambigüedad AM/PM y permite a la calculadora manejar bien los turnos nocturnos comparando los dos valores directamente." },
      { question: "¿Maneja los turnos nocturnos?", answer: "Sí. Cuando la hora de salida es anterior a la de entrada, la calculadora asume que el turno pasó de la medianoche y suma 24 horas, así que un turno de 22:00 a 06:00 se lee como ocho horas en lugar de una cifra negativa. Esto lo hace fiable para turnos de noche y ventanas de guardia. Asume un solo turno de menos de 24 horas, lo que cubre prácticamente todos los patrones de trabajo reales." },
      { question: "¿Qué son las horas decimales y por qué son las principales?", answer: "Las horas decimales expresan los minutos como una fracción de una hora, así que 8 horas 30 minutos son 8,5 y 15 minutos son 0,25. Los sistemas de nómina y facturación usan esta forma porque se multiplica directamente por una tarifa horaria, mientras que 8:30 no. Por eso la cifra decimal es el resultado principal y el valor H:MM se ofrece al lado solo como una comprobación fácil de leer." },
      { question: "¿Cómo se trata el descanso no pagado?", answer: "El descanso, introducido en minutos, se resta del tiempo transcurrido del turno, porque los descansos no pagados para comer y descansar no cuentan como horas trabajadas. Un turno de 09:00 a 17:30 son 8,5 horas de tiempo transcurrido, pero un descanso no pagado de 30 minutos deja 8,00 horas pagadas. Si tu descanso es pagado, introduce cero para que se cuente todo el tiempo transcurrido. Dejar el campo en blanco trata el descanso como cero." },
      { question: "¿Puedo sumar toda una semana con esto?", answer: "Calcula cada turno por separado y suma los resultados en horas decimales para obtener un total semanal, que es la forma que esperan la mayoría de los sistemas de nómina. Mantén los descansos descontados por turno antes de sumar. Si las horas semanales superan el umbral de horas extra, normalmente 40 en EE. UU., separa el exceso en horas extra y aplica la tarifa de recargo por separado, ya que esta calculadora informa de las horas trabajadas y no del pago." },
    ],
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
      "Free decimal hours to time calculator. Convert decimal hours like 7.75 into hours and minutes (H:MM) and total minutes, ideal for payroll and billing.",
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
    slugEs: "conversor-de-horas-decimales-a-tiempo",
    titleEs: "Conversor de Horas Decimales a Tiempo",
    shortDescriptionEs: "Convierte horas decimales a horas y minutos.",
    seoTitleEs: "Conversor de Horas Decimales a Tiempo — Decimal a H:MM",
    metaDescriptionEs:
      "Conversor gratuito de horas decimales a tiempo. Convierte horas decimales como 7,75 en horas y minutos (H:MM) y minutos totales.",
    primaryKeywordEs: "conversor de horas decimales a tiempo",
    secondaryKeywordsEs: [
      "decimal a horas y minutos",
      "convertir horas decimales",
      "conversor de tiempo decimal",
    ],
    formulaExplanationEs:
      "Las horas decimales se multiplican por sesenta para obtener el número total de minutos, redondeado al minuto entero más cercano para evitar fracciones sobrantes. Ese total de minutos se separa luego en horas enteras mediante división entera y en minutos restantes mediante el residuo, dando la forma H:MM. Multiplicar por sesenta es el paso clave, porque cada hora tiene sesenta minutos, no cien, razón por la que 0,75 de una hora son 45 minutos y no 75.",
    explanationEs:
      "Un conversor de horas decimales a tiempo transforma una cifra decimal como 7,75 horas en horas y minutos normales, aquí 7 horas 45 minutos, y también informa del total en minutos. Las hojas de horas, las exportaciones de nómina y las herramientas de programación suelen almacenar las duraciones como decimales porque se multiplican con limpieza por una tarifa horaria, pero las personas leen y registran el tiempo en horas y minutos, así que una conversión de ida y vuelta se necesita constantemente.\n\nLa conversión confunde a la gente porque la parte fraccionaria no son minutos directamente. Media hora es 0,5, no 0,30, y 0,75 son 45 minutos, no 75. Leer 7,75 como «7 horas 75 minutos» o como «7:75» es un error común que infla o reduce el tiempo registrado. El paso correcto es multiplicar la parte fraccionaria por sesenta, y esta calculadora hace justo eso, redondeando al minuto entero más cercano.\n\nAcertar importa allí donde el tiempo decimal se encuentra con el tiempo legible por humanos: conciliar las 38,5 horas de un sistema de nómina con una hoja de horas en papel, cotizar un trabajo reservado como 2,25 horas o registrar trabajo facturable. Autónomos, administrativos de nómina, jefes de proyecto y cualquiera que exporte datos de tiempo usan un conversor de horas decimales a tiempo para pasar de un formato a otro sin introducir errores de redondeo que distorsionen en silencio el pago o las facturas.",
    exampleEs: {
      inputs: { decimalHours: "7.75" },
      explanation:
        "7,75 horas decimales son 7 horas 45 minutos (7:45), o 465 minutos en total.",
    },
    faqsEs: [
      { question: "¿Por qué 0,5 horas son 30 minutos y no 50?", answer: "Porque una hora tiene 60 minutos, una fracción decimal de una hora es esa fracción de 60, no de 100. Así, 0,5 hora es 0,5 × 60 = 30 minutos, y 0,25 hora son 15 minutos. Tratar los dígitos después del punto decimal como si fueran minutos es el error clásico: 7,5 horas son 7 horas 30 minutos, nunca 7 horas 50 minutos. La calculadora siempre multiplica la fracción por sesenta." },
      { question: "¿Cómo convierto horas decimales a minutos y segundos?", answer: "Esta calculadora redondea al minuto entero más cercano, lo que basta para nómina y facturación. Si necesitas segundos, toma la fracción sobrante de un minuto y multiplícala por sesenta: por ejemplo, 0,01 hora es 0,6 minuto, que son 36 segundos. Para la mayoría de las hojas de horas los minutos enteros son lo estándar, así que la cifra de minutos totales mostrada es la salida práctica para cálculos posteriores." },
      { question: "¿Cuánto son 7,75 horas en horas y minutos?", answer: "7,75 horas son 7 horas y 45 minutos, porque 0,75 × 60 = 45. Como total son 465 minutos. Es un valor de nómina común: un turno registrado como 7,75 son tres cuartos de hora pasadas las siete, no siete horas setenta y cinco. La calculadora devuelve tanto la forma 7:45 como el total de 465 minutos para que puedas usar cualquiera de los dos en tus registros." },
      { question: "¿Redondea los minutos?", answer: "Sí. El resultado se redondea al minuto entero más cercano, así que un valor como 3,999 horas se muestra como 4:00 en lugar de 3 horas 59,94 minutos. Esto mantiene la salida limpia y coincide con cómo las hojas de horas registran el tiempo. Si encadenas varias conversiones, trabaja a partir de la cifra de minutos totales para evitar acumular diferencias de redondeo entre pasos." },
      { question: "¿Por qué los sistemas de nómina usan horas decimales?", answer: "Las horas decimales se multiplican directamente por una tarifa horaria, así que 8,5 horas a 20 $ son simplemente 8,5 × 20 = 170 $, mientras que 8:30 no se puede multiplicar tal como está escrito. Almacenar el tiempo como decimal hace triviales los cálculos de salario y factura y facilita el uso en hojas de cálculo. La contrapartida es que las personas leen las horas y minutos con más naturalidad, que es justo por lo que un conversor entre las dos formas se necesita tan a menudo." },
    ],
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
      "Free Unix timestamp converter. Turn epoch seconds into a readable UTC date, time and weekday, or convert any date back into a Unix timestamp instantly.",
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
    slugEs: "conversor-de-marca-de-tiempo-unix",
    titleEs: "Conversor de Marca de Tiempo Unix",
    shortDescriptionEs: "Convierte una marca de tiempo Unix a fecha UTC.",
    seoTitleEs: "Conversor de Marca de Tiempo Unix — Segundos Epoch a Fecha UTC",
    metaDescriptionEs:
      "Conversor gratuito de marca de tiempo Unix. Convierte segundos epoch en una fecha y hora UTC legible y el día de la semana.",
    primaryKeywordEs: "conversor de marca de tiempo unix",
    secondaryKeywordsEs: [
      "epoch a fecha",
      "conversor de tiempo unix",
      "marca de tiempo a fecha",
    ],
    formulaExplanationEs:
      "La época Unix fija el segundo cero en la medianoche UTC del 1 de enero de 1970. Sumar el número dado de segundos a ese punto de anclaje produce el instante objetivo, que luego se expresa en el calendario UTC como año, mes, día, hora, minuto y segundo. Como los años bisiestos y las longitudes de los meses están integrados en la conversión del calendario, y UTC ignora los cambios de horario de verano, el resultado es exacto e idéntico sin importar dónde ni cuándo se realice la conversión.",
    explanationEs:
      "Un conversor de marca de tiempo Unix transforma un recuento de segundos desde la época Unix —la medianoche UTC del 1 de enero de 1970— en una fecha y hora UTC legible para humanos, y nombra el día de la semana. El tiempo Unix, también llamado tiempo epoch o POSIX, es cómo la mayoría de ordenadores, bases de datos, APIs y archivos de registro almacenan un instante, porque un único número entero es compacto, inequívoco y fácil de comparar o restar.\n\nDesarrolladores y analistas se encuentran constantemente con marcas de tiempo en bruto como 1609459200 en registros, cargas JSON, filas de bases de datos y cookies, y necesitan saber qué momento representan. Convertir a mano es poco práctico, y hacerlo en la zona horaria equivocada es una fuente frecuente de errores de horas. Presentar el resultado explícitamente en UTC elimina esa ambigüedad: UTC es la referencia contra la que se define la época, así que la conversión es exacta e independiente de la ubicación.\n\nEl día de la semana es un extra útil para detectar patrones en los datos de eventos, como si los errores se agrupan los fines de semana o si un trabajo se ejecutó el día esperado. Este conversor toma segundos enteros, la forma más común, aunque algunos sistemas almacenan milisegundos; si un valor parece mil veces demasiado grande, divídelo entre 1000 primero. Ingenieros que depuran sistemas, analistas de datos que leen exportaciones y cualquiera que descodifique una respuesta de API usan un conversor de marca de tiempo Unix para traducir el tiempo de máquina a una fecha comprensible.",
    exampleEs: {
      inputs: { unixSeconds: "1609459200" },
      explanation:
        "1609459200 segundos son 2021-01-01 00:00:00 UTC, un viernes.",
    },
    faqsEs: [
      { question: "¿Qué es una marca de tiempo Unix?", answer: "Una marca de tiempo Unix es el número de segundos transcurridos desde la época Unix, la medianoche UTC del 1 de enero de 1970, sin contar los segundos intercalares. Es la forma estándar en que los ordenadores representan un punto en el tiempo, porque almacenar un instante como un entero lo hace compacto y trivial de comparar o restar. Las marcas de tiempo aparecen en registros, bases de datos, APIs y metadatos de archivos, por lo que convertirlas en fechas es una tarea rutinaria." },
      { question: "¿Por qué el resultado se muestra en UTC?", answer: "La época Unix se define en UTC, así que convertir a UTC es exacto y libre de ambigüedad de zona horaria u horario de verano. Mostrar una hora local exigiría suponer una zona horaria, lo que invita a errores de horas cuando la misma marca de tiempo se lee en distintas regiones. Si necesitas la hora local, toma el resultado UTC y aplica el desfase de tu zona, recordando que el desfase puede cambiar en los límites del horario de verano." },
      { question: "Mi marca de tiempo tiene 13 dígitos, ¿qué hago?", answer: "Un valor de 13 dígitos casi con certeza está en milisegundos en lugar de segundos, que muchos sistemas de JavaScript y Java usan. Divídelo entre 1000 para obtener segundos antes de introducirlo aquí, descartando cualquier parte fraccionaria. Como regla práctica, una marca de tiempo en segundos para una fecha reciente tiene unos 10 dígitos; un número de 13 dígitos es mil veces mayor y, de lo contrario, se convertiría en una fecha muy lejana en el futuro." },
      { question: "¿Qué fue la marca de tiempo cero?", answer: "La marca de tiempo 0 corresponde a 1970-01-01 00:00:00 UTC, el momento en que empieza la época Unix, que cayó en jueves. Las marcas de tiempo negativas, donde se admiten, representan momentos anteriores a 1970. Este origen fijo es lo que hace del tiempo Unix una referencia universal: cada sistema que cuenta desde el mismo instante puede intercambiar marcas de tiempo sin necesidad de acordar nada más sobre el calendario." },
      { question: "¿Tiene en cuenta los segundos intercalares?", answer: "No, y por diseño. El tiempo Unix estándar ignora los segundos intercalares, tratando cada día como exactamente 86 400 segundos, razón por la que se convierte con limpieza en una fecha del calendario. Los segundos intercalares ocasionales insertados en UTC hacen que el tiempo Unix pueda quedar un segundo desfasado del tiempo astronómico en torno a esos eventos, pero para la conversión de fechas cotidiana esto no tiene efecto práctico y el resultado coincide con el calendario civil." },
    ],
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
      "Free annual work hours calculator. Estimate your total working hours per year from weekly hours and weeks worked, minus holidays and paid time off.",
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
    slugEs: "calculadora-de-horas-de-trabajo-anuales",
    titleEs: "Calculadora de Horas de Trabajo Anuales",
    shortDescriptionEs: "Estima el total de horas de trabajo en un año.",
    seoTitleEs: "Calculadora de Horas de Trabajo Anuales — Horas de Trabajo por Año",
    metaDescriptionEs:
      "Calculadora gratuita de horas de trabajo anuales. Estima el total de horas de trabajo al año a partir de las horas semanales y las semanas trabajadas.",
    primaryKeywordEs: "calculadora de horas de trabajo anuales",
    secondaryKeywordsEs: [
      "horas de trabajo por año",
      "calculadora de horas anuales",
      "días laborables por año",
    ],
    formulaExplanationEs:
      "Las horas semanales se multiplican por el número de semanas trabajadas para dar el total de horas anuales, un escalado directo del patrón semanal a lo largo del año. Dividir ese total entre ocho lo expresa como días de trabajo estándar, ya que ocho horas es la jornada completa convencional. Elegir una cifra realista de semanas trabajadas —reduciendo 52 por vacaciones y festivos— es lo que hace que la estimación refleje el tiempo de trabajo real en lugar de un máximo teórico.",
    explanationEs:
      "Una calculadora de horas de trabajo anuales estima cuántas horas trabajas en un año multiplicando tus horas semanales habituales por el número de semanas que realmente trabajas, y expresa el resultado como un número equivalente de jornadas estándar de ocho horas. Es la forma rápida de convertir un horario semanal en una cifra anual para comparar salarios, planificar la capacidad y dimensionar contratos.\n\nEl número de semanas importa tanto como las horas. Un año natural tiene 52 semanas más un día o dos, pero pocas personas trabajan todas: resta las vacaciones anuales, los festivos y cualquier semana no pagada y la cifra efectiva suele caer a alrededor de 46 a 48. Usar un valor realista de semanas trabajadas da un total anual mucho más honesto que multiplicar a ciegas por 52, que sobrestima la capacidad por las semanas que realmente estás libre.\n\nLa salida en jornadas de ocho horas replantea el total como días de trabajo completos, algo intuitivo para comparar puestos, presupuestar el año de un contratista o comprobar la utilización frente a un objetivo. Empleadores que modelan plantillas, autónomos que ponen precio a un contrato anual y empleados que comparan una oferta a tiempo completo frente a trabajo a tiempo parcial o por contrato usan una calculadora de horas de trabajo anuales para convertir un patrón semanal en las cifras anuales de las que dependen esas decisiones.",
    exampleEs: {
      inputs: { hoursPerWeek: "40", weeksPerYear: "52" },
      explanation:
        "40 horas × 52 semanas = 2080 horas al año, equivalentes a 260 jornadas de ocho horas.",
    },
    faqsEs: [
      { question: "¿Cuántas horas de trabajo tiene un año a tiempo completo?", answer: "Un valor de referencia común es 2080 horas, de 40 horas a la semana por 52 semanas, razón por la que muchos salarios se cotizan contra él. En la práctica, una vez descontadas de dos a cuatro semanas de vacaciones y festivos, las horas realmente trabajadas suelen rondar entre 1880 y 1960. Introduce tu cifra real de semanas trabajadas en lugar de 52 para obtener un total que refleje el tiempo que estás genuinamente trabajando." },
      { question: "¿Cuántas semanas debo introducir?", answer: "Parte de 52 y resta las semanas que no trabajas: vacaciones anuales, festivos agrupados en equivalentes de semana y cualquier tiempo libre no pagado. Muchos empleados a tiempo completo se sitúan en torno a 46 a 48 semanas efectivas. Si quieres un máximo teórico en lugar de una cifra realista, déjalo en 52. El campo tiene 52 por defecto para que obtengas el valor de referencia estándar salvo que lo cambies." },
      { question: "¿Qué significa la cifra de jornadas de ocho horas?", answer: "Convierte tus horas anuales en el número de jornadas estándar de ocho horas que representan, así que 2080 horas se convierten en 260 días. Es útil para comparar puestos, presupuestar la disponibilidad de un contratista o comprobar cómo se traduce un total en un calendario de trabajo. Es una conversión de unidades, no un recuento de fechas del calendario, así que no tiene en cuenta qué días concretos caen en fines de semana o festivos." },
      { question: "¿Incluye esto las horas extra o los descansos?", answer: "Usa las horas semanales que introduzcas, así que incluye o excluye las horas extra y los descansos no pagados según lo que quieras medir. Para las horas contratadas, introduce tu semana programada; para el tiempo realmente trabajado, añade las horas extra típicas y quita primero los descansos no pagados. La calculadora simplemente escala la cifra semanal que le das, así que la exactitud del total anual depende de que el número semanal refleje tu patrón real." },
      { question: "¿Cómo uso esto para trabajo a tiempo parcial o por contrato?", answer: "Introduce tus horas semanales reales a tiempo parcial y el número de semanas del encargo o del año. Una semana de 24 horas durante 48 semanas trabajadas son 1152 horas, o 144 jornadas de ocho horas, que puedes comparar directamente con un año a tiempo completo o usar para poner precio a un contrato anual. Para horarios irregulares, usa una cifra de horas semanales promedio para obtener una estimación anual representativa." },
    ],
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
      "Free age on date calculator. Find an exact age in years, months and total days at any chosen date, not just today, perfect for eligibility checks.",
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
    slugEs: "calculadora-de-edad-en-fecha",
    titleEs: "Calculadora de Edad en Fecha",
    shortDescriptionEs: "Halla la edad de alguien en una fecha concreta.",
    seoTitleEs: "Calculadora de Edad en Fecha — Edad en una Fecha Concreta",
    metaDescriptionEs:
      "Calculadora gratuita de edad en fecha. Halla la edad exacta en años, meses y días totales en cualquier fecha elegida, no solo hoy.",
    primaryKeywordEs: "calculadora de edad en fecha",
    secondaryKeywordsEs: [
      "edad en una fecha concreta",
      "edad a una fecha",
      "qué edad en una fecha",
    ],
    formulaExplanationEs:
      "La edad se construye a partir de los campos de calendario de ambas fechas. El año de nacimiento se resta del año de referencia para una primera estimación de años, y se comparan los meses; si el día del mes de referencia es anterior al día de nacimiento, se toma prestado un mes, y si el conteo de meses queda entonces negativo, se toma prestado un año y se suman doce meses. Los días totales vividos son la diferencia simple entre las dos fechas en días enteros, que ya incluye cada día bisiesto.",
    explanationEs:
      "Una calculadora de edad en fecha averigua qué edad tiene alguien en una fecha concreta elegida en lugar de solo hoy, dando el resultado como años completos, los meses enteros restantes y el número total de días vividos. Le indicas una fecha de nacimiento y una fecha de referencia, y calcula la edad de calendario exactamente como la expresaría una persona —por ejemplo, 36 años y 2 meses— en ese día de referencia.\n\nPoder elegir la fecha de referencia es lo que distingue esto de una calculadora de edad ordinaria. Las reglas de elegibilidad, los cortes escolares, los tramos de seguros, los derechos de pensión y las categorías por edad en el deporte se definen todas como una edad alcanzada en una fecha concreta, no la edad de hoy. Comprobar si un niño tiene edad suficiente el primer día del curso escolar, o qué edad tendrá alguien en la renovación de una póliza, requiere evaluar la edad en ese día exacto.\n\nEl cálculo sigue cómo funciona realmente la edad de calendario: cuenta primero los años completos, luego los meses enteros sobrantes, tomando prestado correctamente cuando el día del mes de referencia es anterior al día de nacimiento. La cifra de días totales da un recuento preciso de los días transcurridos que ya incluye cada día bisiesto. Padres que comprueban la matriculación, personal de recursos humanos y prestaciones que aplica tramos de edad y organizadores de eventos que verifican categorías por edad usan una calculadora de edad en fecha para determinar la edad en la fecha que importa.",
    exampleEs: {
      inputs: { birthDate: "1990-06-15", asOfDate: "2026-08-30" },
      explanation:
        "Alguien nacido el 15 de junio de 1990 tiene 36 años y 2 meses el 30 de agosto de 2026.",
    },
    faqsEs: [
      { question: "¿En qué se diferencia esto de una calculadora de edad normal?", answer: "Una calculadora de edad estándar usa la fecha de hoy como referencia, mientras que esta te permite fijar cualquier fecha de referencia. Eso importa cuando una regla depende de la edad alcanzada en un día concreto en lugar de la edad actual, como un corte de admisión escolar, la renovación de un seguro o la fecha de la categoría por edad de una competición. Al elegir la fecha de referencia obtienes la edad que a la regla realmente le importa, que puede diferir de la edad actual." },
      { question: "¿Cómo se calculan los años y los meses?", answer: "La calculadora cuenta los años completos desde la fecha de nacimiento hasta la fecha de referencia, luego los meses enteros restantes, tomando prestado cuando el día del mes de referencia es anterior al día de nacimiento. Así, del 15 de junio al 30 de agosto son dos meses completos porque el 30 es posterior al 15, pero del 15 de junio al 10 de agosto sería un mes, ya que el 10 aún no ha llegado al 15. Esto refleja cómo la gente expresa la edad de forma natural." },
      { question: "¿Qué incluye el total de días vividos?", answer: "Es el número exacto de días naturales entre la fecha de nacimiento y la fecha de referencia, contando cada día incluidos todos los días bisiestos que caen en el intervalo. Como se calcula a partir de un recuento continuo de días en lugar de multiplicando meses, es preciso sin importar cuántos 29 de febrero contenga el periodo. Resulta práctico para días de hito, como celebrar los 10 000 días vividos." },
      { question: "¿Puedo usar una fecha de referencia futura?", answer: "Sí. Fija la fecha de referencia en cualquier día futuro para averiguar qué edad tendrá alguien entonces, algo útil para planificar en torno a fechas de elegibilidad, cumpleaños de hito o renovaciones de pólizas. El cálculo funciona de forma idéntica para fechas de referencia futuras y pasadas, ya que simplemente mide la distancia de calendario desde la fecha de nacimiento. Solo se rechaza una fecha de referencia anterior a la de nacimiento, pues una edad negativa no está definida." },
      { question: "¿Y si la fecha de referencia es anterior a la de nacimiento?", answer: "La calculadora lo trata como no válido y no devuelve ninguna edad, porque una persona no tiene edad antes de nacer. Asegúrate de que la fecha de nacimiento sea la más temprana de las dos y de que la fecha de referencia sea el día en que quieres evaluar la edad. Si querías medir un intervalo en la otra dirección, intercambia las fechas para que la más temprana se introduzca como fecha de nacimiento." },
    ],
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
      "Free add time calculator. Add hours and minutes to any start time to see the resulting end time and whether the total rolls into the next day.",
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
    slugEs: "calculadora-de-sumar-tiempo",
    titleEs: "Calculadora de Sumar Tiempo",
    shortDescriptionEs: "Suma horas y minutos a una hora.",
    seoTitleEs: "Calculadora de Sumar Tiempo — Sumar Horas y Minutos a una Hora",
    metaDescriptionEs:
      "Calculadora gratuita para sumar tiempo. Suma horas y minutos a una hora inicial y obtén la hora final y cualquier cambio de día.",
    primaryKeywordEs: "calculadora de sumar tiempo",
    secondaryKeywordsEs: [
      "sumar horas a una hora",
      "calculadora de suma de tiempo",
      "qué hora será",
    ],
    formulaExplanationEs:
      "La hora inicial se convierte en minutos desde la medianoche, y las horas y minutos añadidos se transforman en minutos y se suman. El total se divide entre 1440 —los minutos de un día— y el cociente entero da cuántos días se acumularon y el residuo da los minutos desde la medianoche para la hora final. Usar la división entera hace que el residuo sea siempre una hora válida de 0 a 1439 aunque las entradas sean grandes, y el resultado se formatea luego de vuelta a HH:MM.",
    explanationEs:
      "Una calculadora de sumar tiempo toma una hora inicial y una duración en horas y minutos y te dice la hora de reloj a la que llegas, junto con cuántos días se acumula el resultado. Responde preguntas cotidianas como «si empiezo un proceso de 5 horas 30 minutos a las 09:00, ¿cuándo termina?» y maneja con limpieza el paso de la medianoche en lugar de producir una hora imposible como 26:30.\n\nLa aritmética de reloj es fácil de equivocar a mano porque el tiempo es de base 60 para los minutos y se reinicia a las 24 horas, no a las 10 o a las 100. Sumar 45 minutos a las 09:30 no son las 09:75, y sumar varias horas puede empujarte en silencio al día siguiente. La calculadora evita ambas trampas convirtiendo todo a minutos, sumando y luego reajustando el total a un reloj de 24 horas mientras cuenta los días completos que se acumularon.\n\nLa cifra de días acumulados es lo que la hace fiable para la programación: una tarea que empieza a las 22:00 y dura cinco horas termina a las 03:00 del día siguiente, y saber que es +1 día evita reservarla en la fecha equivocada. Cocineros que cronometran un asado largo, planificadores de turnos que proyectan una hora de fin y cualquiera que estime una hora de llegada o de finalización usan una calculadora de sumar tiempo para añadir una duración a una hora de reloj sin tropezar con la medianoche.",
    exampleEs: {
      inputs: { startTime: "09:00", addHours: "5", addMinutes: "30" },
      explanation:
        "09:00 más 5 horas 30 minutos son las 14:30 del mismo día (0 días acumulados).",
    },
    faqsEs: [
      { question: "¿Cómo introduzco la hora inicial?", answer: "Usa el formato de 24 horas como HH:MM, así que las 9 de la mañana son las 09:00 y las 2 de la tarde son las 14:00. Para horas PM, suma doce a la hora: las 3:30 PM son las 15:30 y la medianoche es 00:00. Usar la entrada de 24 horas elimina la ambigüedad AM/PM y permite a la calculadora reajustar correctamente al pasar la medianoche. Las horas y minutos que sumar se introducen por separado como números simples en sus propios campos." },
      { question: "¿Qué significa la cifra de días acumulados?", answer: "Cuenta cuántos días completos avanzó la hora final más allá del día inicial. Sumar seis horas a las 22:00 da las 04:00 con una acumulación de 1, es decir, el día siguiente, mientras que sumar 30 horas acumularía un día y también caería a las 04:00 del día siguiente, pero informado contra el conteo de días correcto. Esto te dice no solo la hora de reloj sino en qué día cae, algo que importa para la programación." },
      { question: "¿Maneja duraciones de más de un día?", answer: "Sí. Si las horas que sumas superan 24, la calculadora sigue reajustando el reloj correctamente e informa del número total de días acumulados. Sumar 50 horas a las 08:00, por ejemplo, avanza dos días y cae a las 10:00, mostrado como una acumulación de dos días. La hora de reloj es siempre el residuo tras quitar los días completos, así que se mantiene como una hora válida entre las 00:00 y las 23:59." },
      { question: "¿Puedo sumar tiempo cruzando la medianoche?", answer: "Sí, eso es lo principal que maneja. Cuando la duración añadida empuja la hora más allá de las 24:00, el resultado se reajusta a las primeras horas del día siguiente y el contador de acumulación aumenta, en lugar de mostrar una hora inválida como las 25:00. Un proceso que empieza a las 23:15 y dura dos horas termina correctamente a la 01:15 del día siguiente, marcado como un día acumulado." },
      { question: "¿Puedo restar tiempo introduciendo negativos?", answer: "Puedes introducir horas o minutos negativos para retroceder, y la calculadora maneja el reajuste también en esa dirección, informando de un desfase de días negativo cuando el resultado cae en un día anterior. Para mayor claridad, sin embargo, sumar es el uso previsto. Si sobre todo necesitas retroceder, introducir la hora posterior como inicio y una duración negativa te llevará a la hora de reloj anterior correcta." },
    ],
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
