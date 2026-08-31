import type { CalculatorDefinition } from "../types";

export const dateTimeExtraCalculators: CalculatorDefinition[] = [
  {
    id: "date-difference",
    slug: "date-difference-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Date Difference Calculator",
    shortDescription: "Count the time between two dates.",
    seoTitle: "Date Difference Calculator — Days Between Dates",
    metaDescription:
      "Free date difference calculator. Find the number of days, weeks, months and years between any two dates.",
    primaryKeyword: "date difference calculator",
    secondaryKeywords: ["days between dates", "days calculator", "time between dates"],
    fields: [
      { id: "start", label: "Start date", type: "date", required: true, span: 1 },
      { id: "end", label: "End date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "days", label: "Days", format: "number", decimals: 0, unit: "days", isPrimary: true },
      { id: "weeks", label: "Weeks", format: "number", decimals: 0, isPrimary: false },
      { id: "months", label: "Months (approx.)", format: "number", decimals: 0, isPrimary: false },
      { id: "years", label: "Years (approx.)", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "days = |end − start| in whole days; weeks/months/years derived from days",
    formulaSource: "Standard calendar arithmetic",
    explanation:
      "A date difference calculator measures the span between two calendar dates and expresses it as a number of days, then translates that figure into weeks, months and years for a sense of scale. It converts each date to a running day count, takes the absolute gap between them, and reports the result so you never have to tally the uneven lengths of the intervening months by hand.\n\nGetting the interval right matters whenever a deadline, an anniversary or a contract term depends on it. Counting on your fingers across month boundaries is where errors creep in, especially over spans that cross a leap year or several year-ends, and a single miscounted day can mean a missed filing or a mispriced interest period.\n\nThe day count is exact because it works from the real calendar rather than assuming every month is thirty days, while the weeks, months and years are deliberately labelled approximate since months genuinely vary in length. Project managers sizing timelines, lawyers computing notice periods, and anyone counting down to an event lean on a date difference calculator to replace guesswork with a figure that holds up.",
    example: {
      inputs: { start: "2026-01-01", end: "2026-12-31" },
      explanation: "From 1 Jan to 31 Dec 2026 is 364 days — about 52 weeks or 11 months.",
    },
    formulaExplanation:
      "Each date is converted to a serial day number, and the difference between those two numbers is the exact day count — no month-length assumptions enter. Weeks come from dividing days by seven; months and years use average lengths (30.44 and 365.25 days). This works because a continuous day index absorbs every leap day automatically, so only the derived units carry rounding.",
    faqs: [
      { question: "Does it include both the start and end date?", answer: "It counts the days between the two dates, so the start date itself is not added to the total. If you need both endpoints counted inclusively, for example to bill every day a room was occupied, add one to the result. Whether to count inclusively depends on your purpose, which is why the calculator reports the plain interval." },
      { question: "How many days are between two dates exactly?", answer: "The calculator subtracts one date's serial day number from the other, giving an exact count that already includes any leap days in between. This is more reliable than multiplying months by thirty, which drifts because months range from 28 to 31 days. The figure shown is the true number of calendar days separating the two dates." },
      { question: "Are the months and years figures exact?", answer: "No, and they are labelled approximate for that reason. The day count is precise, but months and years are derived using average lengths of about 30.44 and 365.25 days. A gap of 364 days reads as roughly eleven months even though it spans nearly a full calendar year, so treat those figures as a sense of scale rather than a calendar-accurate breakdown." },
      { question: "Does the order of the dates matter?", answer: "No. The calculator uses the absolute difference, so entering the later date first gives the same result as entering it second. This means you never have to worry about which date is earlier. If you need a signed direction, note it yourself, but for measuring the length of an interval the order is irrelevant." },
      { question: "Does it count leap years correctly?", answer: "Yes. Because each date is turned into a continuous day number before subtracting, any 29 February falling inside the range is included automatically. There is no separate leap-year adjustment to remember and no risk of double-counting. A span from early 2024 to early 2025, for instance, correctly includes the extra day from 2024's leap year." },
    ],
    slugEs: "calculadora-de-diferencia-de-fechas",
    titleEs: "Calculadora de Diferencia de Fechas",
    shortDescriptionEs: "Cuenta el tiempo entre dos fechas.",
    seoTitleEs: "Calculadora de Diferencia de Fechas — Días Entre Fechas",
    metaDescriptionEs:
      "Calculadora de diferencia de fechas gratuita. Encuentra el número de días, semanas, meses y años entre dos fechas cualesquiera.",
    primaryKeywordEs: "calculadora de diferencia de fechas",
    secondaryKeywordsEs: ["dias entre fechas", "calculadora de dias", "tiempo entre fechas"],
    formulaExplanationEs:
      "Cada fecha se convierte en un número de día en serie, y la diferencia entre esos dos números es el conteo exacto de días — sin que entre ninguna suposición sobre la longitud de los meses. Las semanas se obtienen dividiendo los días entre siete; los meses y los años usan longitudes medias (30,44 y 365,25 días). Esto funciona porque un índice de días continuo absorbe automáticamente cada día bisiesto, así que solo las unidades derivadas arrastran redondeo.",
    explanationEs:
      "Una calculadora de diferencia de fechas mide el lapso entre dos fechas de calendario y lo expresa como un número de días, para luego traducir esa cifra en semanas, meses y años y dar una idea de escala. Convierte cada fecha en un conteo de días acumulado, toma la diferencia absoluta entre ambas e informa el resultado, así que nunca tienes que sumar a mano las longitudes desiguales de los meses intermedios.\n\nAcertar el intervalo importa siempre que un plazo, un aniversario o la vigencia de un contrato dependan de él. Contar con los dedos a través de los límites de los meses es donde se cuelan los errores, especialmente en lapsos que cruzan un año bisiesto o varios finales de año, y un solo día mal contado puede significar una presentación perdida o un periodo de interés mal calculado.\n\nEl conteo de días es exacto porque parte del calendario real en lugar de suponer que cada mes tiene treinta días, mientras que las semanas, los meses y los años se etiquetan deliberadamente como aproximados, ya que los meses varían de verdad en longitud. Los gestores de proyectos que dimensionan cronogramas, los abogados que calculan periodos de aviso y cualquiera que cuente los días para un evento se apoyan en una calculadora de diferencia de fechas para sustituir las conjeturas por una cifra fiable.",
    exampleEs: {
      inputs: { start: "2026-01-01", end: "2026-12-31" },
      explanation: "Del 1 de enero al 31 de diciembre de 2026 hay 364 días — unas 52 semanas u 11 meses.",
    },
    faqsEs: [
      { question: "¿Incluye tanto la fecha de inicio como la de fin?", answer: "Cuenta los días entre las dos fechas, así que la fecha de inicio en sí no se suma al total. Si necesitas contar ambos extremos de forma inclusiva, por ejemplo para facturar cada día que se ocupó una habitación, suma uno al resultado. Contar de forma inclusiva o no depende de tu propósito, y por eso la calculadora informa el intervalo simple." },
      { question: "¿Cuántos días hay exactamente entre dos fechas?", answer: "La calculadora resta el número de día en serie de una fecha del de la otra, dando un conteo exacto que ya incluye cualquier día bisiesto intermedio. Esto es más fiable que multiplicar los meses por treinta, que se desvía porque los meses van de 28 a 31 días. La cifra mostrada es el número verdadero de días de calendario que separan las dos fechas." },
      { question: "¿Las cifras de meses y años son exactas?", answer: "No, y por eso se etiquetan como aproximadas. El conteo de días es preciso, pero los meses y los años se obtienen usando longitudes medias de unos 30,44 y 365,25 días. Un lapso de 364 días se lee como unos once meses aunque abarque casi un año de calendario completo, así que trata esas cifras como una idea de escala en lugar de un desglose exacto según el calendario." },
      { question: "¿Importa el orden de las fechas?", answer: "No. La calculadora usa la diferencia absoluta, así que introducir primero la fecha posterior da el mismo resultado que introducirla en segundo lugar. Esto significa que nunca tienes que preocuparte de cuál fecha es la anterior. Si necesitas una dirección con signo, anótala tú mismo, pero para medir la longitud de un intervalo el orden es irrelevante." },
      { question: "¿Cuenta correctamente los años bisiestos?", answer: "Sí. Como cada fecha se convierte en un número de día continuo antes de restar, cualquier 29 de febrero que caiga dentro del rango se incluye automáticamente. No hay que recordar ningún ajuste de año bisiesto por separado ni existe riesgo de contar dos veces. Un lapso de principios de 2024 a principios de 2025, por ejemplo, incluye correctamente el día extra del año bisiesto de 2024." },
    ],
    relatedCalculators: ["age-calculator", "business-days-calculator", "time-duration-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "business-days",
    slug: "business-days-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Business Days Calculator",
    shortDescription: "Count working days between two dates.",
    seoTitle: "Business Days Calculator — Working Days Between Dates",
    metaDescription:
      "Free business days calculator. Count the working days (Monday–Friday) between two dates, excluding weekends.",
    primaryKeyword: "business days calculator",
    secondaryKeywords: ["working days calculator", "weekdays between dates", "business day count"],
    fields: [
      { id: "start", label: "Start date", type: "date", required: true, span: 1 },
      { id: "end", label: "End date", type: "date", required: true, span: 1 },
    ],
    results: [
      { id: "businessDays", label: "Business days", format: "number", decimals: 0, unit: "days", isPrimary: true },
      { id: "totalDays", label: "Total days", format: "number", decimals: 0, isPrimary: false },
      { id: "weekendDays", label: "Weekend days", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "Count each calendar day from start to end, excluding Saturdays and Sundays",
    formulaSource: "Standard calendar arithmetic",
    explanation:
      "A business days calculator counts only the working weekdays, Monday through Friday, between a start and end date, treating Saturdays and Sundays as non-working. It walks the calendar from the first date to the last inclusively and tallies every day that is not a weekend, giving the figure that actually governs delivery windows and turnaround times.\n\nThis matters because most commercial commitments are quoted in working days, not calendar days. A five-working-day shipping estimate landing on a Wednesday reaches a customer the following Wednesday, not the coming Monday, and confusing the two sets the wrong expectation. Contracts, service-level agreements and payment terms almost always mean weekdays when they say days, so counting the right ones keeps promises realistic.\n\nThe method works by classifying each date by its day of the week and excluding the two weekend days, which is fast and unambiguous for the standard Monday-to-Friday week. A business days calculator does not remove public holidays, since those differ by country and region, so subtract any that fall on a weekday for your locale. Operations teams, logistics planners, HR departments and finance staff all use a business days calculator to size deadlines that customers and colleagues will hold them to.",
    example: {
      inputs: { start: "2026-08-03", end: "2026-08-14" },
      explanation: "From Mon 3 Aug to Fri 14 Aug 2026 there are 10 business days across 12 calendar days.",
    },
    formulaExplanation:
      "The span is split into whole weeks plus a remainder: every complete seven-day week contributes exactly five weekdays, and the leftover days are checked individually against their weekday. Counting weekday remainders this way avoids inspecting each date one by one and stays exact regardless of which day the range starts on, because the pattern of weekends repeats cleanly every seven days.",
    faqs: [
      { question: "Does it exclude public holidays?", answer: "No. It removes only Saturdays and Sundays, because public holidays vary widely by country, state and even industry. To get a net working-days figure for your region, count the holidays that fall on a weekday within your range and subtract them from the result. Fixed-date holidays landing on a weekend do not reduce the count, since those days were already excluded." },
      { question: "Is the count inclusive of both dates?", answer: "Yes. Both the start and end dates are included whenever they are weekdays. So a range from a Monday to the Friday of the same week counts as five business days, not four. This inclusive basis matches how delivery and service windows are normally quoted, where the first working day is counted rather than skipped." },
      { question: "Which days count as weekends?", answer: "Saturday and Sunday, following the standard Western working week. Some regions, particularly parts of the Middle East, treat Friday and Saturday or Friday and Sunday as the weekend. This calculator uses the Monday-to-Friday convention, so for a different working week you would need to adjust the result for the days your region actually treats as non-working." },
      { question: "How do I count working days for a delivery estimate?", answer: "Enter the dispatch date as the start and the promised date as the end, and read the business days figure. If your carrier does not count the dispatch day itself, subtract one. Remember to also subtract any public holidays in the destination region, since a holiday effectively adds a non-working day the calculator does not know about." },
      { question: "Why does the calendar-day total differ from the business-day count?", answer: "The total-days figure counts every day in the range, while the business-days figure drops weekends. A twelve-calendar-day span that includes two weekends therefore shows ten business days. The weekend-days result tells you exactly how many were removed, so the three numbers always reconcile: business days plus weekend days equals total days." },
    ],
    slugEs: "calculadora-de-dias-habiles",
    titleEs: "Calculadora de Días Hábiles",
    shortDescriptionEs: "Cuenta los días laborables entre dos fechas.",
    seoTitleEs: "Calculadora de Días Hábiles — Días Laborables Entre Fechas",
    metaDescriptionEs:
      "Calculadora de días hábiles gratuita. Cuenta los días laborables (de lunes a viernes) entre dos fechas, excluyendo los fines de semana.",
    primaryKeywordEs: "calculadora de dias habiles",
    secondaryKeywordsEs: ["calculadora de dias laborables", "dias entre semana entre fechas", "conteo de dias habiles"],
    formulaExplanationEs:
      "El lapso se divide en semanas completas más un resto: cada semana completa de siete días aporta exactamente cinco días laborables, y los días sobrantes se comprueban individualmente según su día de la semana. Contar así los restos de días laborables evita inspeccionar cada fecha una por una y se mantiene exacto sin importar en qué día empieza el rango, porque el patrón de fines de semana se repite limpiamente cada siete días.",
    explanationEs:
      "Una calculadora de días hábiles cuenta solo los días laborables de la semana, de lunes a viernes, entre una fecha de inicio y una de fin, tratando los sábados y domingos como no laborables. Recorre el calendario desde la primera fecha hasta la última de forma inclusiva y contabiliza cada día que no sea fin de semana, dando la cifra que realmente rige los plazos de entrega y los tiempos de respuesta.\n\nEsto importa porque la mayoría de los compromisos comerciales se cotizan en días laborables, no en días de calendario. Una estimación de envío de cinco días laborables que cae un miércoles llega a un cliente el miércoles siguiente, no el lunes próximo, y confundir ambos crea una expectativa equivocada. Los contratos, los acuerdos de nivel de servicio y los plazos de pago casi siempre se refieren a días entre semana cuando dicen días, así que contar los correctos mantiene las promesas realistas.\n\nEl método funciona clasificando cada fecha por su día de la semana y excluyendo los dos días del fin de semana, lo cual es rápido e inequívoco para la semana estándar de lunes a viernes. Una calculadora de días hábiles no elimina los días festivos, ya que estos difieren según el país y la región, así que resta los que caigan en un día laborable de tu localidad. Los equipos de operaciones, los planificadores de logística, los departamentos de recursos humanos y el personal de finanzas usan una calculadora de días hábiles para dimensionar plazos que clientes y colegas les exigirán.",
    exampleEs: {
      inputs: { start: "2026-08-03", end: "2026-08-14" },
      explanation: "Del lunes 3 de agosto al viernes 14 de agosto de 2026 hay 10 días hábiles en 12 días de calendario.",
    },
    faqsEs: [
      { question: "¿Excluye los días festivos?", answer: "No. Elimina solo los sábados y domingos, porque los días festivos varían mucho según el país, el estado e incluso el sector. Para obtener una cifra neta de días laborables para tu región, cuenta los festivos que caen en un día laborable dentro de tu rango y réstalos del resultado. Los festivos de fecha fija que caen en fin de semana no reducen el conteo, ya que esos días ya estaban excluidos." },
      { question: "¿El conteo incluye ambas fechas?", answer: "Sí. Tanto la fecha de inicio como la de fin se incluyen siempre que sean días laborables. Así, un rango de un lunes al viernes de la misma semana cuenta como cinco días hábiles, no cuatro. Esta base inclusiva coincide con cómo se cotizan normalmente las ventanas de entrega y servicio, donde el primer día laborable se cuenta en lugar de omitirse." },
      { question: "¿Qué días cuentan como fin de semana?", answer: "El sábado y el domingo, siguiendo la semana laboral occidental estándar. Algunas regiones, en particular partes de Oriente Medio, tratan el viernes y el sábado o el viernes y el domingo como fin de semana. Esta calculadora usa la convención de lunes a viernes, así que para una semana laboral diferente tendrías que ajustar el resultado según los días que tu región trate realmente como no laborables." },
      { question: "¿Cómo cuento los días laborables para una estimación de entrega?", answer: "Introduce la fecha de despacho como inicio y la fecha prometida como fin, y lee la cifra de días hábiles. Si tu transportista no cuenta el día de despacho en sí, resta uno. Recuerda restar también cualquier día festivo en la región de destino, ya que un festivo añade efectivamente un día no laborable que la calculadora desconoce." },
      { question: "¿Por qué el total de días de calendario difiere del conteo de días hábiles?", answer: "La cifra de días totales cuenta todos los días del rango, mientras que la de días hábiles descarta los fines de semana. Un lapso de doce días de calendario que incluye dos fines de semana muestra por tanto diez días hábiles. El resultado de días de fin de semana te indica exactamente cuántos se eliminaron, así que las tres cifras siempre concilian: días hábiles más días de fin de semana es igual al total de días." },
    ],
    relatedCalculators: ["date-difference-calculator", "age-calculator", "overtime-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "time-duration",
    slug: "time-duration-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Time Duration Calculator",
    shortDescription: "Find the duration between two times.",
    seoTitle: "Time Duration Calculator — Hours Between Two Times",
    metaDescription:
      "Free time duration calculator. Find the hours and minutes between a start and end time, including across midnight.",
    primaryKeyword: "time duration calculator",
    secondaryKeywords: ["hours between times", "time difference calculator", "time card calculator"],
    fields: [
      { id: "start", label: "Start time", type: "text", placeholder: "09:00", required: true, span: 1, helpText: "24-hour format, HH:MM" },
      { id: "end", label: "End time", type: "text", placeholder: "17:30", required: true, span: 1, helpText: "24-hour format, HH:MM" },
    ],
    results: [
      { id: "duration", label: "Duration", format: "text", isPrimary: true },
      { id: "hours", label: "In decimal hours", format: "number", decimals: 2, unit: "h", isPrimary: false },
      { id: "minutes", label: "In minutes", format: "number", decimals: 0, unit: "min", isPrimary: false },
    ],
    formula: "duration = end − start; if negative, add 24 hours (crosses midnight)",
    formulaSource: "Standard timekeeping arithmetic",
    explanation:
      "A time duration calculator finds the elapsed time between a start clock time and an end clock time, returning the result as hours and minutes and also as decimal hours. It converts each time to minutes past midnight, subtracts, and when the end reads earlier than the start it adds a full day so an overnight span is measured correctly rather than showing a negative gap.\n\nThis is the arithmetic behind every timesheet, and getting it right protects both pay and planning. Working out that a shift from the evening into the small hours lasted eight and a quarter hours is easy to fumble by hand, particularly across midnight, and errors there feed straight into wages, billable hours and rota coverage. A dependable time duration calculator removes that risk.\n\nThe method uses minutes-past-midnight because clock time is not plain decimal — sixty minutes make an hour, not a hundred — so subtracting raw HH:MM values gives wrong answers. Converting to a single unit first sidesteps that. Shift workers, freelancers logging billable hours, payroll clerks and managers building rotas all reach for a time duration calculator, and the decimal-hours output drops directly into pay systems that multiply hours by a rate.",
    example: {
      inputs: { start: "09:00", end: "17:30" },
      explanation: "From 09:00 to 17:30 is 8 hours 30 minutes, or 8.5 decimal hours (510 minutes).",
    },
    formulaExplanation:
      "Each time is converted to total minutes since midnight, then the start is subtracted from the end. A negative result means the clock passed midnight, so 1,440 minutes — one full day — is added to make it positive. The minutes total is then split back into hours and minutes, and dividing by sixty gives decimal hours. Working in a single minute unit avoids mixing base-60 clock fields.",
    faqs: [
      { question: "How do I enter times?", answer: "Use 24-hour format as HH:MM, so nine in the morning is 09:00 and half past five in the afternoon is 17:30. To convert an afternoon or evening PM time, add twelve to the hour: 1:15 PM becomes 13:15, and 11:45 PM becomes 23:45. Midnight is 00:00. Entering times this way removes any AM/PM ambiguity from the calculation." },
      { question: "Does it handle overnight shifts?", answer: "Yes. When the end time is earlier than the start time, the calculator assumes the period ran past midnight and adds a full 24 hours, so a shift from 22:00 to 06:00 correctly reads as eight hours rather than a negative figure. This makes it reliable for night shifts, on-call windows and any span that crosses into the next day." },
      { question: "What are decimal hours and why use them?", answer: "Decimal hours express minutes as a fraction of an hour, so eight hours thirty minutes becomes 8.5 and fifteen minutes becomes 0.25. Payroll and invoicing systems use this form because you can multiply it straight by an hourly rate. The conversion is minutes divided by sixty, which is why 30 minutes reads as 0.5 rather than 0.30." },
      { question: "Does it account for unpaid breaks?", answer: "No. The result is the raw elapsed time between the two clock times. If a shift includes an unpaid lunch, subtract that break from the decimal-hours figure before applying a pay rate. For a 09:00 to 17:30 shift with a 30-minute break, the paid time would be 8.0 hours rather than the 8.5 shown." },
      { question: "Can I use this as a time card calculator?", answer: "Yes. Enter your clock-in as the start and clock-out as the end for each shift, and read the decimal hours for payroll. It handles single shifts including overnight ones. For a weekly total, run each day and add the decimal-hour figures, remembering to deduct any unpaid breaks before summing." },
    ],
    slugEs: "calculadora-de-duracion-de-tiempo",
    titleEs: "Calculadora de Duración de Tiempo",
    shortDescriptionEs: "Encuentra la duración entre dos horas.",
    seoTitleEs: "Calculadora de Duración de Tiempo — Horas entre dos horarios",
    metaDescriptionEs:
      "Calculadora de duración de tiempo gratuita. Halla las horas y minutos entre una hora de inicio y una de fin, incluso cuando el período cruza la medianoche.",
    primaryKeywordEs: "calculadora de duración de tiempo",
    secondaryKeywordsEs: ["horas entre dos horarios", "calculadora de diferencia de tiempo", "calculadora de tarjeta de tiempo"],
    formulaEs: "duración = fin − inicio; si es negativa, sumar 24 horas (cruza la medianoche)",
    formulaExplanationEs:
      "Cada hora se convierte en el total de minutos transcurridos desde la medianoche y luego se resta el inicio del fin. Un resultado negativo indica que el reloj pasó la medianoche, por lo que se suman 1.440 minutos —un día completo— para volverlo positivo. El total de minutos se divide de nuevo en horas y minutos, y al dividir entre sesenta se obtienen las horas decimales. Trabajar con una sola unidad de minutos evita mezclar los campos del reloj en base sesenta.",
    explanationEs:
      "Una calculadora de duración de tiempo halla el tiempo transcurrido entre una hora de inicio y una hora de fin, devolviendo el resultado en horas y minutos y también en horas decimales. Convierte cada hora a minutos desde la medianoche, resta, y cuando el fin es anterior al inicio suma un día completo para que un período nocturno se mida correctamente en lugar de mostrar una diferencia negativa.\n\nEsta es la aritmética detrás de cualquier hoja de horas, y hacerla bien protege tanto el salario como la planificación. Calcular a mano que un turno que va de la tarde a la madrugada duró ocho horas y cuarto es fácil de equivocar, sobre todo al cruzar la medianoche, y esos errores repercuten directamente en sueldos, horas facturables y cobertura de turnos. Una calculadora fiable elimina ese riesgo.\n\nEl método usa minutos desde la medianoche porque la hora del reloj no es decimal: sesenta minutos forman una hora, no cien, así que restar valores HH:MM en crudo da respuestas erróneas. Trabajadores por turnos, autónomos que registran horas facturables, personal de nóminas y responsables de cuadrantes recurren a esta herramienta, y la salida en horas decimales encaja directamente en los sistemas de pago que multiplican horas por una tarifa.",
    exampleEs: {
      inputs: { start: "09:00", end: "17:30" },
      explanation: "De 09:00 a 17:30 son 8 horas y 30 minutos, es decir 8,5 horas decimales (510 minutos).",
    },
    faqsEs: [
      { question: "¿Cómo introduzco las horas?", answer: "Usa el formato de 24 horas como HH:MM, así las nueve de la mañana son 09:00 y las cinco y media de la tarde son 17:30. Para convertir una hora de la tarde o la noche, suma doce a la hora: la 1:15 p. m. se convierte en 13:15 y las 11:45 p. m. en 23:45. La medianoche es 00:00. Introducir las horas de esta forma elimina cualquier ambigüedad entre a. m. y p. m. en el cálculo." },
      { question: "¿Gestiona los turnos nocturnos?", answer: "Sí. Cuando la hora de fin es anterior a la de inicio, la calculadora asume que el período pasó la medianoche y suma 24 horas completas, de modo que un turno de 22:00 a 06:00 se lee correctamente como ocho horas en lugar de una cifra negativa. Esto la hace fiable para turnos de noche, guardias y cualquier período que se extienda al día siguiente." },
      { question: "¿Qué son las horas decimales y por qué usarlas?", answer: "Las horas decimales expresan los minutos como una fracción de una hora, de modo que ocho horas y treinta minutos se convierten en 8,5 y quince minutos en 0,25. Los sistemas de nómina y facturación usan esta forma porque puedes multiplicarla directamente por una tarifa por hora. La conversión es minutos divididos entre sesenta, por eso 30 minutos se leen como 0,5 y no como 0,30." },
      { question: "¿Tiene en cuenta las pausas no pagadas?", answer: "No. El resultado es el tiempo transcurrido en bruto entre las dos horas del reloj. Si un turno incluye un almuerzo no pagado, resta esa pausa de la cifra de horas decimales antes de aplicar una tarifa. Para un turno de 09:00 a 17:30 con una pausa de 30 minutos, el tiempo pagado sería 8,0 horas en lugar de las 8,5 mostradas." },
      { question: "¿Puedo usarla como calculadora de tarjeta de tiempo?", answer: "Sí. Introduce tu entrada como inicio y tu salida como fin para cada turno, y lee las horas decimales para la nómina. Gestiona turnos individuales, incluidos los nocturnos. Para un total semanal, calcula cada día y suma las cifras de horas decimales, recordando descontar las pausas no pagadas antes de sumar." },
    ],
    relatedCalculators: ["overtime-calculator", "date-difference-calculator", "business-days-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "overtime",
    slug: "overtime-calculator",
    category: "Date & Time",
    categorySlug: "date-time",
    title: "Overtime Calculator",
    shortDescription: "Calculate pay with overtime hours.",
    seoTitle: "Overtime Calculator — Overtime Pay Calculator",
    metaDescription:
      "Free overtime calculator. Work out total pay from regular hours, overtime hours, hourly rate and an overtime multiplier.",
    primaryKeyword: "overtime calculator",
    secondaryKeywords: ["overtime pay calculator", "time and a half calculator", "overtime rate"],
    fields: [
      { id: "regularHours", label: "Regular hours", type: "number", placeholder: "40", required: true, span: 1, min: 0 },
      { id: "overtimeHours", label: "Overtime hours", type: "number", placeholder: "6", required: true, span: 1, min: 0 },
      { id: "hourlyRate", label: "Hourly rate", type: "number", unit: "$", placeholder: "25", required: true, span: 1, min: 0, step: 0.01 },
      { id: "multiplier", label: "Overtime multiplier", type: "number", unit: "×", placeholder: "1.5", required: false, span: 1, min: 1, step: 0.1, defaultValue: 1.5 },
    ],
    results: [
      { id: "total", label: "Total pay", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "regularPay", label: "Regular pay", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "overtimePay", label: "Overtime pay", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Total = regular hours × rate + overtime hours × rate × multiplier",
    formulaSource: "U.S. Department of Labor — Fair Labor Standards Act (FLSA)",
    sourceUrl: "https://www.dol.gov/agencies/whd/overtime",
    explanation:
      "An overtime calculator works out gross pay when some hours are paid at a premium rate, separating regular hours paid at your base rate from overtime hours paid at that rate multiplied by an uplift. It computes the two pay pools independently and adds them, so you see not just the total but how much of it came from the overtime premium.\n\nThis split matters because overtime is where paychecks most often go wrong. Under the Fair Labor Standards Act, non-exempt US employees must receive at least one and a half times their regular rate for hours worked beyond forty in a workweek, and applying that only to the excess hours — never the whole week — is exactly the distinction an overtime calculator keeps straight. Getting it wrong under- or over-pays and can breach the law.\n\nThe method mirrors how payroll is actually run: base hours at the base rate, premium hours at rate times multiplier. A multiplier of 1.5 is the familiar time and a half, while 2.0 is double time some employers pay on holidays. Hourly workers checking a paycheck, small-business owners running payroll, and managers costing a shift schedule all use an overtime calculator to confirm the premium is applied correctly to the right hours.",
    example: {
      inputs: { regularHours: 40, overtimeHours: 6, hourlyRate: 25, multiplier: 1.5 },
      explanation: "Regular: 40 × $25 = $1,000. Overtime: 6 × $25 × 1.5 = $225. Total = $1,225.",
    },
    formulaExplanation:
      "Pay is built from two separate products: regular hours times the base rate, and overtime hours times the base rate times the multiplier. They are added for the total. The premium applies only to the overtime hours because those are the hours worked beyond the standard threshold — multiplying the whole week by 1.5 would wrongly pay a premium on ordinary hours the law treats as regular time.",
    faqs: [
      { question: "What is time and a half?", answer: "Time and a half means each overtime hour is paid at 1.5 times your normal hourly rate. At a $25 base rate, overtime hours are worth $37.50 each. Enter 1.5 as the multiplier to apply it. Under the Fair Labor Standards Act this is the federal minimum overtime premium for non-exempt employees working beyond forty hours in a workweek." },
      { question: "What overtime multiplier should I use?", answer: "For standard US overtime beyond forty hours a week, use 1.5. Some employers pay 2.0, known as double time, for holidays or hours past a daily threshold, and a few states such as California have their own daily overtime rules. Check your employment contract or state labor law, as the federal FLSA sets only the 1.5 floor and states may require more." },
      { question: "Does this include taxes and deductions?", answer: "No. The result is gross pay before income tax, Social Security, Medicare, benefits or any other withholding. Your actual take-home pay will be lower once those are applied. Use this figure to check that your employer calculated the correct gross amount, then compare net pay separately against your payslip's deductions." },
      { question: "How is overtime calculated over forty hours?", answer: "Under the FLSA, hours worked beyond forty in a single workweek are overtime and must be paid at your premium rate, while the first forty stay at the base rate. Enter forty as regular hours and the excess as overtime hours. The threshold is weekly, not daily, under federal law, so a long single day is not automatically overtime unless the weekly total exceeds forty." },
      { question: "Is salaried or exempt work eligible for overtime?", answer: "Not always. The FLSA exempts certain salaried executive, administrative and professional employees who meet specific duties tests and earn above a set salary threshold. Non-exempt employees, including most hourly workers, must receive overtime. If you are unsure of your status, check your job classification, because being paid a salary alone does not make a role exempt from overtime pay." },
    ],
    slugEs: "calculadora-de-horas-extra",
    titleEs: "Calculadora de Horas Extra",
    shortDescriptionEs: "Calcula el pago con horas extra.",
    seoTitleEs: "Calculadora de Horas Extra — Pago de horas extraordinarias",
    metaDescriptionEs:
      "Calculadora de horas extra gratuita. Calcula el pago total a partir de horas normales, horas extra, tarifa por hora y un multiplicador de horas extra.",
    primaryKeywordEs: "calculadora de horas extra",
    secondaryKeywordsEs: ["calculadora de pago de horas extra", "calculadora de tiempo y medio", "tarifa de horas extra"],
    formulaEs: "Total = horas normales × tarifa + horas extra × tarifa × multiplicador",
    formulaExplanationEs:
      "El pago se construye a partir de dos productos separados: las horas normales por la tarifa base y las horas extra por la tarifa base multiplicada por el multiplicador. Ambos se suman para el total. El recargo se aplica solo a las horas extra porque son las trabajadas más allá del umbral estándar; multiplicar toda la semana por 1,5 pagaría erróneamente un recargo sobre las horas ordinarias que la ley trata como tiempo normal.",
    explanationEs:
      "Una calculadora de horas extra determina el pago bruto cuando algunas horas se pagan a una tarifa con recargo, separando las horas normales pagadas a tu tarifa base de las horas extra pagadas a esa tarifa multiplicada por un incremento. Calcula las dos bolsas de pago de forma independiente y las suma, de modo que ves no solo el total sino cuánto proviene del recargo por horas extra.\n\nEsta separación importa porque las horas extra son donde los recibos de pago suelen fallar. Según la Ley de Normas Justas de Trabajo (FLSA) de EE. UU., los empleados no exentos deben recibir al menos una vez y media su tarifa normal por las horas trabajadas más allá de cuarenta en una semana laboral, y aplicar eso solo a las horas en exceso —nunca a toda la semana— es exactamente la distinción que la calculadora mantiene clara. Hacerlo mal paga de menos o de más y puede infringir la ley.\n\nEl método refleja cómo se ejecuta realmente la nómina: horas base a la tarifa base, horas con recargo a la tarifa por el multiplicador. Un multiplicador de 1,5 es el conocido tiempo y medio, mientras que 2,0 es el pago doble que algunos empleadores dan en días festivos. Trabajadores por hora que revisan un recibo, dueños de pequeños negocios que gestionan la nómina y responsables que calculan el costo de un cuadrante usan esta herramienta para confirmar que el recargo se aplica correctamente a las horas adecuadas.",
    exampleEs: {
      inputs: { regularHours: 40, overtimeHours: 6, hourlyRate: 25, multiplier: 1.5 },
      explanation: "Normal: 40 × $25 = $1.000. Horas extra: 6 × $25 × 1,5 = $225. Total = $1.225.",
    },
    faqsEs: [
      { question: "¿Qué es el tiempo y medio?", answer: "Tiempo y medio significa que cada hora extra se paga a 1,5 veces tu tarifa por hora normal. Con una tarifa base de $25, las horas extra valen $37,50 cada una. Introduce 1,5 como multiplicador para aplicarlo. Según la Ley de Normas Justas de Trabajo, este es el recargo mínimo federal por horas extra para empleados no exentos que trabajan más de cuarenta horas en una semana laboral." },
      { question: "¿Qué multiplicador de horas extra debo usar?", answer: "Para las horas extra estándar de EE. UU. por encima de cuarenta a la semana, usa 1,5. Algunos empleadores pagan 2,0, conocido como pago doble, en festivos o por horas que superan un umbral diario, y algunos estados como California tienen sus propias reglas diarias. Consulta tu contrato o la ley laboral estatal, ya que la FLSA federal fija solo el mínimo de 1,5 y los estados pueden exigir más." },
      { question: "¿Incluye impuestos y deducciones?", answer: "No. El resultado es el pago bruto antes del impuesto sobre la renta, el Seguro Social, Medicare, prestaciones o cualquier otra retención. Tu pago neto real será menor una vez aplicados. Usa esta cifra para comprobar que tu empleador calculó el importe bruto correcto y luego compara el pago neto por separado con las deducciones de tu recibo." },
      { question: "¿Cómo se calculan las horas extra por encima de cuarenta?", answer: "Según la FLSA, las horas trabajadas más allá de cuarenta en una sola semana laboral son horas extra y deben pagarse a tu tarifa con recargo, mientras que las primeras cuarenta se mantienen a la tarifa base. Introduce cuarenta como horas normales y el exceso como horas extra. El umbral es semanal, no diario, bajo la ley federal, así que un día largo no genera horas extra salvo que el total semanal supere cuarenta." },
      { question: "¿El trabajo asalariado o exento tiene derecho a horas extra?", answer: "No siempre. La FLSA exime a ciertos empleados asalariados ejecutivos, administrativos y profesionales que cumplen pruebas de funciones específicas y ganan por encima de un umbral salarial. Los empleados no exentos, incluida la mayoría de los trabajadores por hora, deben recibir horas extra. Si dudas de tu situación, revisa tu clasificación, porque cobrar un salario por sí solo no exime a un puesto del pago de horas extra." },
    ],
    relatedCalculators: ["time-duration-calculator", "freelance-rate-calculator", "business-days-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
