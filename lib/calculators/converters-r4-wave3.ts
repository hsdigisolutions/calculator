import type { CalculatorDefinition, FieldOption } from "../types";

/* Wave 3 Round 4 — 10 additional unit Converters.
 * Shared FieldOption arrays declared once, reused across definitions.
 * id === engine key in lib/engines/converters-r4-wave3.ts. */

const NIST_SOURCE = "International System of Units (SI) — NIST";
const NIST_URL = "https://www.nist.gov/pml/owm/metric-si/unit-conversion";

const powerUnits: FieldOption[] = [
  { value: "W", label: "Watts (W)" },
  { value: "kW", label: "Kilowatts (kW)" },
  { value: "MW", label: "Megawatts (MW)" },
  { value: "hp", label: "Horsepower (mechanical, hp)" },
  { value: "ps", label: "Metric horsepower (PS)" },
  { value: "BTU/h", label: "BTU per hour (BTU/h)" },
  { value: "ft-lb/s", label: "Foot-pounds per second (ft·lb/s)" },
];

const torqueUnits: FieldOption[] = [
  { value: "N·m", label: "Newton-metres (N·m)" },
  { value: "kN·m", label: "Kilonewton-metres (kN·m)" },
  { value: "lbf·ft", label: "Pound-force feet (lbf·ft)" },
  { value: "lbf·in", label: "Pound-force inches (lbf·in)" },
  { value: "kgf·m", label: "Kilogram-force metres (kgf·m)" },
];

const angleUnits: FieldOption[] = [
  { value: "deg", label: "Degrees (°)" },
  { value: "rad", label: "Radians (rad)" },
  { value: "grad", label: "Gradians (grad)" },
  { value: "arcmin", label: "Arcminutes (′)" },
  { value: "arcsec", label: "Arcseconds (″)" },
  { value: "turn", label: "Turns (revolutions)" },
];

const frequencyUnits: FieldOption[] = [
  { value: "Hz", label: "Hertz (Hz)" },
  { value: "kHz", label: "Kilohertz (kHz)" },
  { value: "MHz", label: "Megahertz (MHz)" },
  { value: "GHz", label: "Gigahertz (GHz)" },
  { value: "rpm", label: "Revolutions per minute (rpm)" },
];

const fuelUnits: FieldOption[] = [
  { value: "mpgUS", label: "Miles per gallon (US)" },
  { value: "mpgUK", label: "Miles per gallon (UK/imperial)" },
  { value: "km/L", label: "Kilometres per litre (km/L)" },
  { value: "L/100km", label: "Litres per 100 km (L/100km)" },
];

const forceUnits: FieldOption[] = [
  { value: "N", label: "Newtons (N)" },
  { value: "kN", label: "Kilonewtons (kN)" },
  { value: "kgf", label: "Kilogram-force (kgf)" },
  { value: "lbf", label: "Pound-force (lbf)" },
  { value: "dyne", label: "Dynes (dyn)" },
];

const timeUnits: FieldOption[] = [
  { value: "s", label: "Seconds (s)" },
  { value: "ms", label: "Milliseconds (ms)" },
  { value: "min", label: "Minutes (min)" },
  { value: "h", label: "Hours (h)" },
  { value: "day", label: "Days" },
  { value: "week", label: "Weeks" },
  { value: "month(30d)", label: "Months (30-day)" },
  { value: "year", label: "Years (365-day)" },
];

const dataRateUnits: FieldOption[] = [
  { value: "bit/s", label: "Bits per second (bit/s)" },
  { value: "kbit/s", label: "Kilobits per second (kbit/s)" },
  { value: "Mbit/s", label: "Megabits per second (Mbit/s)" },
  { value: "Gbit/s", label: "Gigabits per second (Gbit/s)" },
  { value: "B/s", label: "Bytes per second (B/s)" },
  { value: "KB/s", label: "Kilobytes per second (KB/s)" },
  { value: "MB/s", label: "Megabytes per second (MB/s)" },
  { value: "GB/s", label: "Gigabytes per second (GB/s)" },
];

const cookingVolumeUnits: FieldOption[] = [
  { value: "ml", label: "Millilitres (ml)" },
  { value: "l", label: "Litres (L)" },
  { value: "tsp", label: "Teaspoons (US, tsp)" },
  { value: "tbsp", label: "Tablespoons (US, tbsp)" },
  { value: "cup(US)", label: "Cups (US)" },
  { value: "fl oz(US)", label: "Fluid ounces (US, fl oz)" },
  { value: "pint", label: "Pints (US)" },
  { value: "quart", label: "Quarts (US)" },
  { value: "gallon", label: "Gallons (US)" },
];

const paceUnits: FieldOption[] = [
  { value: "min/km", label: "Minutes per kilometre (min/km)" },
  { value: "min/mi", label: "Minutes per mile (min/mi)" },
  { value: "km/h", label: "Kilometres per hour (km/h)" },
  { value: "mph", label: "Miles per hour (mph)" },
];

export const convertersR4Calculators: CalculatorDefinition[] = [
  {
    id: "power",
    slug: "power-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Power Converter",
    shortDescription: "Convert between watts, kilowatts, horsepower and BTU/h.",
    seoTitle: "Power Converter — Watts, kW, Horsepower, BTU/h",
    metaDescription:
      "Free power converter. Convert between watts, kilowatts, megawatts, mechanical and metric horsepower, BTU per hour and foot-pounds per second instantly.",
    primaryKeyword: "power converter",
    secondaryKeywords: ["watts to horsepower", "kw to hp", "hp to watts"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "hp", options: powerUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "kW", options: powerUnits },
    ],
    results: [{ id: "result", label: "Converted power", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to watts via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A power converter restates a rate of energy transfer in a different unit, moving between watts, kilowatts and megawatts on the metric side and mechanical horsepower, metric horsepower (PS), BTU per hour and foot-pounds per second on the customary side. It reduces whatever you enter to watts, the SI base unit for power, and then scales out to the unit you want, so a single mechanism covers engine ratings, appliance loads, heating and cooling capacities and electrical demand alike.\n\nThis matters because power turns up in wildly different units depending on the industry. Car and motorcycle engines are quoted in horsepower or PS; air conditioners and furnaces in BTU per hour; solar panels, motors and data-centre loads in watts and kilowatts. Comparing a heat pump rated in BTU/h against a heater rated in kilowatts, or a US car's horsepower against a European car's PS, is impossible until everything sits in one unit.\n\nThe convert-through-watts method is used because every power unit has a fixed, defined ratio to the watt — one mechanical horsepower is about 745.7 W, one metric PS is about 735.5 W — so pivoting through that base keeps results exact and needs only one factor per unit. Engineers, mechanics, HVAC installers, electricians and buyers comparing specs all reach for a power converter whenever a rating lands in an unfamiliar unit.",
    example: {
      inputs: { value: 100, from: "hp", to: "kW" },
      explanation: "100 hp × 745.6999 W = 74,569.99 W ÷ 1000 ≈ 74.57 kW.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of watts to express the value in watts, then divided by the target unit's watt value to finish the conversion. Because every power unit is defined as a constant number of watts, chaining through this single SI base is algebraically exact and lets the converter store just one factor per unit instead of a separate rule for each of the many possible unit pairings.",
    faqs: [
      { question: "How many watts are in one horsepower?", answer: "One mechanical horsepower equals about 745.7 watts, the figure used here for the imperial 'hp' unit. Metric horsepower, written PS or CV and common in Europe, is slightly smaller at about 735.5 watts. So a 100 hp engine is roughly 74.6 kilowatts, while 100 PS is about 73.5 kilowatts. The two horsepower definitions differ by around one and a half percent." },
      { question: "What is the difference between hp and PS?", answer: "Mechanical horsepower (hp) is defined as 550 foot-pounds per second, about 745.7 watts, and is standard in the United States. Metric horsepower (PS, from the German Pferdestärke) is defined as 75 kilogram-force metres per second, about 735.5 watts, and is standard across much of Europe and Asia. Because PS is smaller, the same engine shows a slightly higher number in PS than in hp." },
      { question: "How do I convert BTU/h to watts for an air conditioner?", answer: "Multiply the BTU per hour figure by about 0.293 to get watts. A 12,000 BTU/h air conditioner, often called 'one ton' of cooling, is therefore about 3,517 watts or 3.5 kilowatts of heat-moving capacity. To reverse it, divide watts by 0.293. This lets you compare a BTU-rated cooler directly against a kilowatt-rated heat pump on the same scale." },
      { question: "How many kilowatts is 100 horsepower?", answer: "About 74.6 kilowatts, using mechanical horsepower of 745.7 watts each. This pivots through watts: 100 hp becomes 74,570 watts, which is 74.57 kilowatts. If the figure were metric PS instead, 100 PS would be about 73.5 kilowatts. The converter carries the full factor, so the displayed answer is precise to the decimals shown rather than a rounded estimate." },
      { question: "Why convert power through watts?", answer: "The watt is the SI base unit for power, one joule of energy per second, so every other power unit has a fixed, exactly defined ratio to it. Using the watt as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps every result exact, and matches the unit that physics and electrical engineering equations expect for calculations." },
    ],
    slugEs: "conversor-de-potencia",
    titleEs: "Conversor de Potencia",
    shortDescriptionEs: "Convierte entre vatios, kilovatios, caballos de fuerza y BTU/h.",
    seoTitleEs: "Conversor de Potencia — Vatios, kW, Caballos, BTU/h",
    metaDescriptionEs:
      "Conversor de potencia gratuito. Convierte al instante entre vatios, kilovatios, megavatios, caballos de fuerza mecánicos y métricos, BTU por hora y libras-pie por segundo.",
    primaryKeywordEs: "conversor de potencia",
    secondaryKeywordsEs: ["vatios a caballos", "kw a hp", "hp a vatios"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de vatios de su unidad para expresar el valor en vatios y luego se divide entre el valor en vatios de la unidad de destino para completar la conversión. Como cada unidad de potencia se define como una cantidad constante de vatios, encadenar a través de esta única base del SI es algebraicamente exacto y permite que el conversor almacene solo un factor por unidad en lugar de una regla distinta para cada uno de los muchos pares de unidades posibles.",
    explanationEs:
      "Un conversor de potencia reexpresa una tasa de transferencia de energía en una unidad diferente, moviéndose entre vatios, kilovatios y megavatios en el lado métrico y caballos de fuerza mecánicos, caballos métricos (PS), BTU por hora y libras-pie por segundo en el lado tradicional. Reduce lo que ingresa a vatios, la unidad base del SI para la potencia, y luego escala hacia la unidad que desea, de modo que un único mecanismo cubre potencias de motores, cargas de electrodomésticos, capacidades de calefacción y refrigeración y demanda eléctrica por igual.\n\nEsto importa porque la potencia aparece en unidades muy distintas según la industria. Los motores de coches y motocicletas se expresan en caballos o PS; los aires acondicionados y las calderas en BTU por hora; los paneles solares, motores y cargas de centros de datos en vatios y kilovatios. Comparar una bomba de calor medida en BTU/h con un calefactor medido en kilovatios, o los caballos de un coche estadounidense con los PS de uno europeo, es imposible hasta que todo queda en una sola unidad.\n\nSe usa el método de convertir a través de vatios porque cada unidad de potencia tiene una razón fija y definida respecto al vatio —un caballo de fuerza mecánico equivale a unos 745,7 W y un PS métrico a unos 735,5 W— así que pivotar por esa base mantiene los resultados exactos y solo necesita un factor por unidad. Ingenieros, mecánicos, instaladores de climatización, electricistas y compradores que comparan especificaciones recurren a un conversor de potencia siempre que una cifra aparece en una unidad poco familiar.",
    exampleEs: {
      inputs: { value: 100, from: "hp", to: "kW" },
      explanation: "100 hp × 745,6999 W = 74.569,99 W ÷ 1000 ≈ 74,57 kW.",
    },
    faqsEs: [
      { question: "¿Cuántos vatios hay en un caballo de fuerza?", answer: "Un caballo de fuerza mecánico equivale a unos 745,7 vatios, la cifra que se usa aquí para la unidad imperial 'hp'. El caballo métrico, escrito PS o CV y común en Europa, es algo menor, unos 735,5 vatios. Así, un motor de 100 hp equivale a unos 74,6 kilovatios, mientras que 100 PS son unos 73,5 kilovatios. Las dos definiciones difieren en aproximadamente un uno y medio por ciento." },
      { question: "¿Cuál es la diferencia entre hp y PS?", answer: "El caballo de fuerza mecánico (hp) se define como 550 libras-pie por segundo, unos 745,7 vatios, y es estándar en Estados Unidos. El caballo métrico (PS, del alemán Pferdestärke) se define como 75 kilogramos-fuerza metro por segundo, unos 735,5 vatios, y es estándar en gran parte de Europa y Asia. Como el PS es menor, el mismo motor muestra un número algo más alto en PS que en hp." },
      { question: "¿Cómo convierto BTU/h a vatios para un aire acondicionado?", answer: "Multiplique la cifra de BTU por hora por unos 0,293 para obtener vatios. Un aire acondicionado de 12.000 BTU/h, a menudo llamado 'una tonelada' de refrigeración, equivale por tanto a unos 3.517 vatios o 3,5 kilovatios de capacidad de enfriamiento. Para invertirlo, divida los vatios entre 0,293. Esto permite comparar un enfriador en BTU directamente con una bomba de calor en kilovatios en la misma escala." },
      { question: "¿Cuántos kilovatios son 100 caballos de fuerza?", answer: "Unos 74,6 kilovatios, usando caballos mecánicos de 745,7 vatios cada uno. Esto pivota a través de vatios: 100 hp se convierten en 74.570 vatios, es decir, 74,57 kilovatios. Si la cifra fuera en PS métricos, 100 PS serían unos 73,5 kilovatios. El conversor lleva el factor completo, así que la respuesta mostrada es precisa hasta los decimales indicados en lugar de una estimación redondeada." },
      { question: "¿Por qué convertir la potencia a través de vatios?", answer: "El vatio es la unidad base del SI para la potencia, un julio de energía por segundo, así que cualquier otra unidad de potencia tiene una razón fija y definida respecto a él. Usar el vatio como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, mantiene todo resultado exacto y coincide con la unidad que la física y las ecuaciones de ingeniería eléctrica esperan en los cálculos." },
    ],
    relatedCalculators: ["energy-converter", "torque-converter", "force-converter", "pressure-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "torque",
    slug: "torque-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Torque Converter",
    shortDescription: "Convert between N·m, lbf·ft, lbf·in and kgf·m.",
    seoTitle: "Torque Converter — N·m, lb-ft, lb-in, kgf·m",
    metaDescription:
      "Free torque converter. Convert between newton-metres, kilonewton-metres, pound-force feet, pound-force inches and kilogram-force metres instantly.",
    primaryKeyword: "torque converter",
    secondaryKeywords: ["nm to lb ft", "lb ft to nm", "torque units"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "N·m", options: torqueUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "lbf·ft", options: torqueUnits },
    ],
    results: [{ id: "result", label: "Converted torque", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to newton-metres via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A torque converter restates a rotational, or turning, force in a different unit, moving between newton-metres and kilonewton-metres on the metric side and pound-force feet, pound-force inches and kilogram-force metres on the customary side. It reduces your figure to newton-metres, the SI unit for torque, then scales out to the unit you choose, so a single pivot handles engine specifications, bolt tightening figures and machine-design loads alike.\n\nThis matters because torque is one of the most unit-fragmented quantities in engineering. A car's engine may be quoted in newton-metres in Europe but pound-force feet in the United States; a bolt's tightening specification might arrive in pound-force inches for small fasteners; older or continental machinery sometimes uses kilogram-force metres. Following a torque spec in the wrong unit can leave a fastener dangerously loose or over-tightened to failure, so a reliable converter is a genuine safety tool, not just a convenience.\n\nThe convert-through-newton-metres method is used because every torque unit has a fixed, defined ratio to the newton-metre — one pound-force foot is about 1.3558 N·m, one kilogram-force metre is 9.80665 N·m — so pivoting through that base keeps results exact and needs only one factor per unit. Mechanics, assembly technicians, machinists and engineers reading mixed-unit specifications all rely on a torque converter to apply the correct turning force every time.",
    example: {
      inputs: { value: 100, from: "N·m", to: "lbf·ft" },
      explanation: "100 N·m ÷ 1.35581795 ≈ 73.76 lbf·ft.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed ratio to the newton-metre to express the torque in newton-metres, then divided by the target unit's ratio to complete the conversion. Because torque is a force acting at a distance, and both force and distance reduce to constants against the newton and the metre, every torque unit's ratio to the N·m is fixed, so chaining through that one base stays exact for all unit pairs.",
    faqs: [
      { question: "How do I convert newton-metres to pound-force feet?", answer: "Divide the newton-metre figure by about 1.3558 to get pound-force feet, or equivalently multiply by 0.7376. So 100 N·m is about 73.8 lbf·ft, a typical wheel-nut range. To reverse it, multiply pound-force feet by 1.3558. The factor is exact because a pound-force foot is defined from the exact pound-force and foot, so only display rounding appears in the result." },
      { question: "What is the difference between lb-ft and lb-in?", answer: "A pound-force foot (lbf·ft) is twelve times larger than a pound-force inch (lbf·in), because a foot is twelve inches. Larger fasteners and engine torque use lb-ft, while small screws, electronics and delicate assemblies specify lb-in for finer control. So 10 lbf·ft equals 120 lbf·in. Mixing the two by a factor of twelve is a common and damaging mistake this converter helps avoid." },
      { question: "Is torque the same as energy since both use force times distance?", answer: "No, and the shared units are a coincidence worth understanding. Energy is force applied along the direction of motion, measured in joules; torque is force applied at a right angle to a lever arm, causing rotation. By convention torque keeps the newton-metre name and energy uses the joule, even though both reduce to the same base units, so never treat a torque figure as energy." },
      { question: "What is a kilogram-force metre?", answer: "A kilogram-force metre (kgf·m) is the torque produced by one kilogram-force acting on a one-metre lever arm, equal to exactly 9.80665 newton-metres because that is standard gravity. It appears on older European and Japanese machinery and in some engine literature. So 10 kgf·m is about 98.07 N·m. The converter uses the exact standard-gravity value, so the result is precise to the decimals shown." },
      { question: "Why convert torque through newton-metres?", answer: "The newton-metre is the SI unit for torque, so every other torque unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, and it keeps results exact. It is also the unit that engineering torque and rotational-dynamics equations expect, which makes cross-checking calculations straightforward." },
    ],
    slugEs: "conversor-de-torque",
    titleEs: "Conversor de Torque",
    shortDescriptionEs: "Convierte entre N·m, lbf·ft, lbf·in y kgf·m.",
    seoTitleEs: "Conversor de Torque — N·m, lb-ft, lb-in, kgf·m",
    metaDescriptionEs:
      "Conversor de torque gratuito. Convierte al instante entre newton-metro, kilonewton-metro, libra-fuerza pie, libra-fuerza pulgada y kilogramo-fuerza metro.",
    primaryKeywordEs: "conversor de torque",
    secondaryKeywordsEs: ["nm a lb ft", "lb ft a nm", "unidades de torque"],
    formulaExplanationEs:
      "La entrada se multiplica por la razón fija de su unidad respecto al newton-metro para expresar el par en newton-metro y luego se divide entre la razón de la unidad de destino para completar la conversión. Como el par es una fuerza que actúa a una distancia, y tanto la fuerza como la distancia se reducen a constantes frente al newton y al metro, la razón de cada unidad de par respecto al N·m es fija, así que encadenar por esa única base permanece exacto para todos los pares de unidades.",
    explanationEs:
      "Un conversor de torque reexpresa una fuerza de giro o rotacional en una unidad diferente, moviéndose entre newton-metro y kilonewton-metro en el lado métrico y libra-fuerza pie, libra-fuerza pulgada y kilogramo-fuerza metro en el lado tradicional. Reduce su cifra a newton-metro, la unidad del SI para el par, y luego escala hacia la unidad que elija, de modo que un único pivote maneja especificaciones de motores, valores de apriete de pernos y cargas de diseño de máquinas por igual.\n\nEsto importa porque el par es una de las magnitudes más fragmentadas en unidades de toda la ingeniería. El motor de un coche puede expresarse en newton-metro en Europa pero en libra-fuerza pie en Estados Unidos; la especificación de apriete de un perno podría llegar en libra-fuerza pulgada para sujetadores pequeños; la maquinaria antigua o continental a veces usa kilogramo-fuerza metro. Seguir una especificación de par en la unidad equivocada puede dejar un sujetador peligrosamente flojo o apretado hasta la falla, así que un conversor fiable es una verdadera herramienta de seguridad, no solo una comodidad.\n\nSe usa el método de convertir a través de newton-metro porque cada unidad de par tiene una razón fija y definida respecto al newton-metro —una libra-fuerza pie equivale a unos 1,3558 N·m y un kilogramo-fuerza metro a 9,80665 N·m— así que pivotar por esa base mantiene los resultados exactos y solo necesita un factor por unidad. Mecánicos, técnicos de montaje, maquinistas e ingenieros que leen especificaciones en unidades mixtas confían en un conversor de torque para aplicar la fuerza de giro correcta cada vez.",
    exampleEs: {
      inputs: { value: 100, from: "N·m", to: "lbf·ft" },
      explanation: "100 N·m ÷ 1,35581795 ≈ 73,76 lbf·ft.",
    },
    faqsEs: [
      { question: "¿Cómo convierto newton-metro a libra-fuerza pie?", answer: "Divida la cifra en newton-metro entre unos 1,3558 para obtener libra-fuerza pie, o equivalentemente multiplique por 0,7376. Así, 100 N·m son unos 73,8 lbf·ft, un rango típico de tuerca de rueda. Para invertirlo, multiplique la libra-fuerza pie por 1,3558. El factor es exacto porque la libra-fuerza pie se define a partir de la libra-fuerza y el pie exactos, así que solo aparece el redondeo de visualización en el resultado." },
      { question: "¿Cuál es la diferencia entre lb-ft y lb-in?", answer: "Una libra-fuerza pie (lbf·ft) es doce veces mayor que una libra-fuerza pulgada (lbf·in), porque un pie tiene doce pulgadas. Los sujetadores grandes y el par de motores usan lb-ft, mientras que los tornillos pequeños, la electrónica y los montajes delicados especifican lb-in para un control más fino. Así, 10 lbf·ft equivalen a 120 lbf·in. Confundir ambas por un factor de doce es un error común y dañino que este conversor ayuda a evitar." },
      { question: "¿Es el par lo mismo que la energía, ya que ambos usan fuerza por distancia?", answer: "No, y las unidades compartidas son una coincidencia que vale la pena entender. La energía es la fuerza aplicada en la dirección del movimiento, medida en julios; el par es la fuerza aplicada en ángulo recto a un brazo de palanca, causando rotación. Por convención el par conserva el nombre newton-metro y la energía usa el julio, aunque ambos se reducen a las mismas unidades base, así que nunca trate una cifra de par como energía." },
      { question: "¿Qué es un kilogramo-fuerza metro?", answer: "Un kilogramo-fuerza metro (kgf·m) es el par producido por un kilogramo-fuerza que actúa sobre un brazo de palanca de un metro, igual a exactamente 9,80665 newton-metro porque esa es la gravedad estándar. Aparece en maquinaria europea y japonesa antigua y en cierta literatura de motores. Así, 10 kgf·m son unos 98,07 N·m. El conversor usa el valor exacto de gravedad estándar, así que el resultado es preciso hasta los decimales mostrados." },
      { question: "¿Por qué convertir el par a través de newton-metro?", answer: "El newton-metro es la unidad del SI para el par, así que cualquier otra unidad de par tiene una razón fija y exactamente definida respecto a él. Usarlo como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, y mantiene los resultados exactos. También es la unidad que las ecuaciones de par y dinámica rotacional esperan, lo que facilita la verificación de los cálculos." },
    ],
    relatedCalculators: ["power-converter", "force-converter", "energy-converter", "pressure-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "angle",
    slug: "angle-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Angle Converter",
    shortDescription: "Convert between degrees, radians, gradians and more.",
    seoTitle: "Angle Converter — Degrees, Radians, Gradians, Arcminutes",
    metaDescription:
      "Free angle converter. Convert between degrees, radians, gradians, arcminutes, arcseconds and full turns instantly and accurately.",
    primaryKeyword: "angle converter",
    secondaryKeywords: ["degrees to radians", "radians to degrees", "arcminutes"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "180", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "deg", options: angleUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "rad", options: angleUnits },
    ],
    results: [{ id: "result", label: "Converted angle", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to degrees via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "An angle converter restates the size of an angle in a different unit, moving between degrees, radians, gradians, arcminutes, arcseconds and full turns. It reduces your value to degrees, used here as the common base, and then scales out to the unit you want, so one mechanism covers geometry homework, trigonometry, navigation bearings, astronomy and engineering drawings alike.\n\nThis matters because different fields settle on different angle units, and mixing them silently breaks calculations. School geometry and everyday direction use degrees; calculus, physics and almost every programming language's trigonometric functions expect radians; surveying in parts of Europe uses gradians, where a right angle is a clean 100 units; astronomy and precise optics split a degree into sixty arcminutes and each of those into sixty arcseconds. Feeding degrees into a function that expects radians is one of the most common bugs in scientific code, and an angle converter makes the correct value obvious.\n\nThe convert-through-degrees method works because every angle unit has a fixed ratio to the degree — a radian is 180/π degrees, a gradian is 0.9 degrees, a full turn is 360 degrees — so pivoting through that base keeps results exact and needs only one factor per unit. Students, programmers, surveyors, astronomers and engineers all reach for an angle converter whenever an angle appears in a unit their tool or formula does not expect.",
    example: {
      inputs: { value: 180, from: "deg", to: "rad" },
      explanation: "180° × (1 ÷ 57.2957795) ≈ 3.1416 radians, which is π.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of degrees to express the angle in degrees, then divided by the target unit's degree value to complete the conversion. Because every angular unit is defined as a constant fraction or multiple of a full circle, each has a fixed ratio to the degree, so pivoting through that single base is exact and covers every pairing with just one stored factor per unit.",
    faqs: [
      { question: "How do I convert degrees to radians?", answer: "Multiply the degree figure by π and divide by 180, which is the same as dividing by about 57.2958. So 180 degrees is exactly π radians, 90 degrees is π/2, and 360 degrees is 2π. To reverse it, multiply radians by 180 and divide by π. Radians are the natural unit for calculus and programming, where trigonometric functions almost always expect radian inputs." },
      { question: "What is a gradian?", answer: "A gradian, also called a gon or grade, divides a right angle into exactly 100 units, so a full circle is 400 gradians and one gradian is 0.9 degrees. It was designed to fit the metric decimal system and is still used in some European surveying and civil engineering. Its appeal is that a quarter turn is a round 100, which simplifies slope and bearing arithmetic in the field." },
      { question: "What are arcminutes and arcseconds?", answer: "An arcminute is one-sixtieth of a degree, and an arcsecond is one-sixtieth of an arcminute, so there are 3,600 arcseconds in a single degree. Astronomers use them to describe tiny angular sizes and separations, such as the apparent width of a planet or the resolving power of a telescope. Latitude and longitude minutes and seconds use the same sixty-based subdivision of a degree." },
      { question: "Why do programming languages use radians?", answer: "Functions like sine and cosine in most languages, including JavaScript, Python and C, expect their input in radians because radians make the underlying calculus clean — the derivative of sine is cosine only when angles are in radians. Passing degrees directly produces wrong results silently, with no error raised. Converting degrees to radians first, by multiplying by π/180, is the standard fix this converter performs." },
      { question: "How many degrees are in a full turn?", answer: "A full turn, or one complete revolution, is exactly 360 degrees, 2π radians, 400 gradians or 21,600 arcminutes. The number 360 comes from ancient Babylonian astronomy and its convenient divisibility by many whole numbers. Expressing rotations as turns is handy in mechanical and animation contexts, where saying an object rotated 'two and a half turns' is clearer than quoting 900 degrees." },
    ],
    slugEs: "conversor-de-angulos",
    titleEs: "Conversor de Ángulos",
    shortDescriptionEs: "Convierte entre grados, radianes, gradianes y más.",
    seoTitleEs: "Conversor de Ángulos — Grados, Radianes, Gradianes, Arcominutos",
    metaDescriptionEs:
      "Conversor de ángulos gratuito. Convierte al instante y con precisión entre grados, radianes, gradianes, arcominutos, arcosegundos y vueltas completas.",
    primaryKeywordEs: "conversor de ángulos",
    secondaryKeywordsEs: ["grados a radianes", "radianes a grados", "arcominutos"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de grados de su unidad para expresar el ángulo en grados y luego se divide entre el valor en grados de la unidad de destino para completar la conversión. Como cada unidad angular se define como una fracción o múltiplo constante de una circunferencia completa, cada una tiene una razón fija respecto al grado, así que pivotar por esa única base es exacto y cubre todos los pares con solo un factor almacenado por unidad.",
    explanationEs:
      "Un conversor de ángulos reexpresa el tamaño de un ángulo en una unidad diferente, moviéndose entre grados, radianes, gradianes, arcominutos, arcosegundos y vueltas completas. Reduce su valor a grados, usados aquí como base común, y luego escala hacia la unidad que desea, de modo que un único mecanismo cubre tareas de geometría, trigonometría, rumbos de navegación, astronomía y planos de ingeniería por igual.\n\nEsto importa porque distintos campos adoptan distintas unidades angulares, y mezclarlas rompe silenciosamente los cálculos. La geometría escolar y la orientación cotidiana usan grados; el cálculo, la física y casi todas las funciones trigonométricas de los lenguajes de programación esperan radianes; la topografía en partes de Europa usa gradianes, donde un ángulo recto son 100 unidades exactas; la astronomía y la óptica de precisión dividen un grado en sesenta arcominutos y cada uno en sesenta arcosegundos. Introducir grados en una función que espera radianes es uno de los errores más comunes en el código científico, y un conversor de ángulos hace evidente el valor correcto.\n\nEl método de convertir a través de grados funciona porque cada unidad angular tiene una razón fija respecto al grado —un radián es 180/π grados, un gradián es 0,9 grados, una vuelta completa es 360 grados— así que pivotar por esa base mantiene los resultados exactos y solo necesita un factor por unidad. Estudiantes, programadores, topógrafos, astrónomos e ingenieros recurren a un conversor de ángulos siempre que un ángulo aparece en una unidad que su herramienta o fórmula no espera.",
    exampleEs: {
      inputs: { value: 180, from: "deg", to: "rad" },
      explanation: "180° × (1 ÷ 57,2957795) ≈ 3,1416 radianes, es decir, π.",
    },
    faqsEs: [
      { question: "¿Cómo convierto grados a radianes?", answer: "Multiplique la cifra en grados por π y divida entre 180, lo que equivale a dividir entre unos 57,2958. Así, 180 grados son exactamente π radianes, 90 grados son π/2 y 360 grados son 2π. Para invertirlo, multiplique los radianes por 180 y divida entre π. Los radianes son la unidad natural del cálculo y la programación, donde las funciones trigonométricas casi siempre esperan entradas en radianes." },
      { question: "¿Qué es un gradián?", answer: "Un gradián, también llamado gon o grado centesimal, divide un ángulo recto en exactamente 100 unidades, así que una circunferencia completa son 400 gradianes y un gradián son 0,9 grados. Se diseñó para encajar con el sistema decimal métrico y aún se usa en cierta topografía e ingeniería civil europea. Su atractivo es que un cuarto de vuelta son 100 exactos, lo que simplifica la aritmética de pendientes y rumbos en el campo." },
      { question: "¿Qué son los arcominutos y arcosegundos?", answer: "Un arcominuto es una sesentava parte de un grado, y un arcosegundo es una sesentava parte de un arcominuto, así que hay 3.600 arcosegundos en un solo grado. Los astrónomos los usan para describir tamaños y separaciones angulares diminutas, como el ancho aparente de un planeta o el poder de resolución de un telescopio. Los minutos y segundos de latitud y longitud usan la misma subdivisión sexagesimal del grado." },
      { question: "¿Por qué los lenguajes de programación usan radianes?", answer: "Funciones como el seno y el coseno en la mayoría de los lenguajes, incluidos JavaScript, Python y C, esperan su entrada en radianes porque los radianes hacen limpio el cálculo subyacente: la derivada del seno es el coseno solo cuando los ángulos están en radianes. Pasar grados directamente produce resultados erróneos de forma silenciosa, sin generar ningún error. Convertir grados a radianes primero, multiplicando por π/180, es la solución estándar que realiza este conversor." },
      { question: "¿Cuántos grados hay en una vuelta completa?", answer: "Una vuelta completa, o una revolución completa, son exactamente 360 grados, 2π radianes, 400 gradianes o 21.600 arcominutos. El número 360 proviene de la astronomía babilónica antigua y su cómoda divisibilidad entre muchos números enteros. Expresar rotaciones como vueltas es útil en contextos mecánicos y de animación, donde decir que un objeto giró 'dos vueltas y media' es más claro que citar 900 grados." },
    ],
    relatedCalculators: ["length-converter", "area-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "frequency",
    slug: "frequency-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Frequency Converter",
    shortDescription: "Convert between Hz, kHz, MHz, GHz and rpm.",
    seoTitle: "Frequency Converter — Hz, kHz, MHz, GHz, rpm",
    metaDescription:
      "Free frequency converter. Convert between hertz, kilohertz, megahertz, gigahertz and revolutions per minute instantly and accurately.",
    primaryKeyword: "frequency converter",
    secondaryKeywords: ["hz to khz", "mhz to ghz", "rpm to hz"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1000", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "MHz", options: frequencyUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "GHz", options: frequencyUnits },
    ],
    results: [{ id: "result", label: "Converted frequency", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to hertz via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A frequency converter restates how often something repeats per unit of time in a different unit, moving between hertz, kilohertz, megahertz and gigahertz, and also to and from revolutions per minute. It reduces your figure to hertz, the SI unit for frequency of one cycle per second, then scales out to the unit you choose, so one mechanism covers radio bands, processor clock speeds, audio, and rotating machinery alike.\n\nThis matters because frequency spans an enormous range and each domain settles on its own convenient unit. Audio and mains power sit in the tens to thousands of hertz; radio and Wi-Fi live in megahertz and gigahertz; computer processors are quoted in gigahertz; engines, turbines and motors are measured in revolutions per minute. Comparing a motor's rpm against a vibration limit in hertz, or lining up a radio frequency quoted in megahertz against one in gigahertz, is only possible once everything shares a single unit.\n\nThe convert-through-hertz method is used because every frequency unit is a fixed multiple of the hertz — one kilohertz is 1,000 Hz, one gigahertz is a billion Hz, and one rpm is one cycle per sixty seconds or 1/60 Hz — so pivoting through that base stays exact and needs only one factor per unit. Engineers, radio and audio technicians, IT professionals and machinery operators all use a frequency converter whenever a rate arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 1000, from: "MHz", to: "GHz" },
      explanation: "1000 MHz × 1,000,000 Hz = 1e9 Hz ÷ 1e9 = 1 GHz.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of hertz to express the frequency in hertz, then divided by the target unit's hertz value to complete the conversion. Because each metric frequency prefix is an exact power of ten and one rpm is exactly one-sixtieth of a hertz, every unit has a fixed ratio to the hertz, so chaining through that single base is exact for every pairing with just one stored factor per unit.",
    faqs: [
      { question: "How do I convert MHz to GHz?", answer: "Divide the megahertz figure by 1,000 to get gigahertz, since a gigahertz is 1,000 megahertz. So a 2,400 MHz Wi-Fi channel is 2.4 GHz, and a 3,600 MHz memory module is 3.6 GHz. To reverse it, multiply gigahertz by 1,000. Both units are exact powers of ten above the hertz, so the conversion is simply a shift of the decimal point by three places." },
      { question: "How do I convert rpm to hertz?", answer: "Divide revolutions per minute by 60 to get hertz, because one revolution per minute is one cycle spread across sixty seconds. So a motor at 3,000 rpm turns at 50 Hz, and 1,800 rpm is 30 Hz. To reverse it, multiply hertz by 60. This link is useful for matching rotating machinery speed to electrical supply frequency or to vibration limits quoted in hertz." },
      { question: "What is hertz a measure of?", answer: "Hertz measures frequency, the number of complete cycles or events that occur each second, named after physicist Heinrich Hertz. One hertz is one cycle per second. It applies to any repeating phenomenon — a sound wave's pitch, an alternating current's rate, a radio carrier, or a processor's clock ticks — which is why the same unit spans audio, power, radio and computing." },
      { question: "Is a higher-GHz processor always faster?", answer: "Not necessarily. Clock frequency in gigahertz tells you how many cycles the processor runs per second, but real-world speed also depends on how much work each cycle does, the number of cores, cache size and architecture. A newer 3.0 GHz chip can outperform an older 4.0 GHz one. Frequency is one important factor among several, not a complete measure of performance on its own." },
      { question: "Why convert frequency through hertz?", answer: "The hertz is the SI unit for frequency, one cycle per second, so every other frequency unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that physics and signal-processing equations use, making cross-checks straightforward." },
    ],
    slugEs: "conversor-de-frecuencia",
    titleEs: "Conversor de Frecuencia",
    shortDescriptionEs: "Convierte entre Hz, kHz, MHz, GHz y rpm.",
    seoTitleEs: "Conversor de Frecuencia — Hz, kHz, MHz, GHz, rpm",
    metaDescriptionEs:
      "Conversor de frecuencia gratuito. Convierte al instante y con precisión entre hercios, kilohercios, megahercios, gigahercios y revoluciones por minuto.",
    primaryKeywordEs: "conversor de frecuencia",
    secondaryKeywordsEs: ["hz a khz", "mhz a ghz", "rpm a hz"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de hercios de su unidad para expresar la frecuencia en hercios y luego se divide entre el valor en hercios de la unidad de destino para completar la conversión. Como cada prefijo métrico de frecuencia es una potencia exacta de diez y una rpm es exactamente una sesentava parte de un hercio, cada unidad tiene una razón fija respecto al hercio, así que encadenar por esa única base es exacto para cada par con solo un factor almacenado por unidad.",
    explanationEs:
      "Un conversor de frecuencia reexpresa con qué frecuencia se repite algo por unidad de tiempo en una unidad diferente, moviéndose entre hercios, kilohercios, megahercios y gigahercios, y también hacia y desde revoluciones por minuto. Reduce su cifra a hercios, la unidad del SI para la frecuencia de un ciclo por segundo, y luego escala hacia la unidad que elija, de modo que un único mecanismo cubre bandas de radio, velocidades de reloj de procesadores, audio y maquinaria rotativa por igual.\n\nEsto importa porque la frecuencia abarca un rango enorme y cada dominio adopta su propia unidad conveniente. El audio y la red eléctrica se sitúan entre decenas y miles de hercios; la radio y el wifi viven en megahercios y gigahercios; los procesadores de las computadoras se expresan en gigahercios; los motores, turbinas y máquinas se miden en revoluciones por minuto. Comparar las rpm de un motor con un límite de vibración en hercios, o alinear una frecuencia de radio expresada en megahercios con otra en gigahercios, solo es posible una vez que todo comparte una sola unidad.\n\nSe usa el método de convertir a través de hercios porque cada unidad de frecuencia es un múltiplo fijo del hercio —un kilohercio son 1.000 Hz, un gigahercio son mil millones de Hz y una rpm es un ciclo por sesenta segundos, o 1/60 Hz— así que pivotar por esa base permanece exacto y solo necesita un factor por unidad. Ingenieros, técnicos de radio y audio, profesionales de TI y operadores de maquinaria usan un conversor de frecuencia siempre que una tasa llega en una unidad poco familiar.",
    exampleEs: {
      inputs: { value: 1000, from: "MHz", to: "GHz" },
      explanation: "1000 MHz × 1.000.000 Hz = 1e9 Hz ÷ 1e9 = 1 GHz.",
    },
    faqsEs: [
      { question: "¿Cómo convierto MHz a GHz?", answer: "Divida la cifra en megahercios entre 1.000 para obtener gigahercios, ya que un gigahercio son 1.000 megahercios. Así, un canal wifi de 2.400 MHz son 2,4 GHz, y un módulo de memoria de 3.600 MHz son 3,6 GHz. Para invertirlo, multiplique los gigahercios por 1.000. Ambas unidades son potencias exactas de diez por encima del hercio, así que la conversión es simplemente un desplazamiento del punto decimal tres lugares." },
      { question: "¿Cómo convierto rpm a hercios?", answer: "Divida las revoluciones por minuto entre 60 para obtener hercios, porque una revolución por minuto es un ciclo repartido en sesenta segundos. Así, un motor a 3.000 rpm gira a 50 Hz, y 1.800 rpm son 30 Hz. Para invertirlo, multiplique los hercios por 60. Este vínculo es útil para ajustar la velocidad de maquinaria rotativa a la frecuencia del suministro eléctrico o a límites de vibración expresados en hercios." },
      { question: "¿Qué mide el hercio?", answer: "El hercio mide la frecuencia, el número de ciclos o eventos completos que ocurren cada segundo, nombrado en honor al físico Heinrich Hertz. Un hercio es un ciclo por segundo. Se aplica a cualquier fenómeno repetitivo —el tono de una onda sonora, la tasa de una corriente alterna, una portadora de radio o los tics de reloj de un procesador— por lo que la misma unidad abarca audio, energía, radio y computación." },
      { question: "¿Un procesador con más GHz es siempre más rápido?", answer: "No necesariamente. La frecuencia de reloj en gigahercios indica cuántos ciclos ejecuta el procesador por segundo, pero la velocidad real también depende de cuánto trabajo hace cada ciclo, del número de núcleos, del tamaño de la caché y de la arquitectura. Un chip nuevo de 3,0 GHz puede superar a uno antiguo de 4,0 GHz. La frecuencia es un factor importante entre varios, no una medida completa del rendimiento por sí sola." },
      { question: "¿Por qué convertir la frecuencia a través de hercios?", answer: "El hercio es la unidad del SI para la frecuencia, un ciclo por segundo, así que cualquier otra unidad de frecuencia tiene una razón fija y exactamente definida respecto a él. Usarlo como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, mantiene los resultados exactos y coincide con la unidad que la física y las ecuaciones de procesamiento de señales usan, facilitando las verificaciones." },
    ],
    relatedCalculators: ["data-transfer-rate-converter", "time-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "fuel-economy",
    slug: "fuel-economy-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Fuel Economy Converter",
    shortDescription: "Convert between MPG (US/UK), km/L and L/100km.",
    seoTitle: "Fuel Economy Converter — MPG, km/L, L/100km",
    metaDescription:
      "Free fuel economy converter. Convert between US MPG, imperial UK MPG, kilometres per litre and litres per 100 km accurately.",
    primaryKeyword: "fuel economy converter",
    secondaryKeywords: ["mpg to l/100km", "mpg to km/l", "us mpg to uk mpg"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "30", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "mpgUS", options: fuelUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "L/100km", options: fuelUnits },
    ],
    results: [{ id: "result", label: "Converted fuel economy", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert through litres per 100 km, inverting distance-per-fuel units where needed",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A fuel economy converter restates how efficiently a vehicle uses fuel in a different unit, moving between US miles per gallon, imperial UK miles per gallon, kilometres per litre and litres per 100 kilometres. Unlike simple unit conversions, this one is not a single multiply-and-divide, because some units measure distance per fuel (higher is better) while others measure fuel per distance (lower is better), so the converter inverts as well as rescales.\n\nThis matters because fuel efficiency is quoted differently across the world, and the numbers are not comparable at a glance. The United States uses miles per gallon on a 3.785-litre gallon; the United Kingdom uses miles per gallon on a larger 4.546-litre imperial gallon, so a UK figure always looks better than the US figure for the same car; continental Europe uses litres per 100 kilometres, where a smaller number means a thriftier vehicle. Comparing a US-spec car against a European one, or reading an imported vehicle's brochure, demands a proper conversion.\n\nThe converter pivots through litres per 100 kilometres, turning each distance-per-fuel input into that fuel-per-distance base and back out again. Because miles-per-gallon and km/L are inverse measures, a direct multiply would give nonsense; inverting through the shared base keeps every result correct. Buyers comparing models, drivers of imported cars, fleet managers and travellers renting abroad all rely on a fuel economy converter to judge running costs on one honest scale.",
    example: {
      inputs: { value: 30, from: "mpgUS", to: "L/100km" },
      explanation: "235.214583 ÷ 30 ≈ 7.84 litres per 100 km.",
    },
    formulaExplanation:
      "Distance-per-fuel units and fuel-per-distance units are inverses, so the converter first turns the input into litres per 100 km: from US mpg it computes 235.214583 divided by the value, from UK mpg 282.481 divided by the value, and from km/L 100 divided by the value. It then inverts that base figure into the target unit with the matching constant. A value of zero or below is rejected as NaN, since it would divide by zero or imply negative consumption.",
    faqs: [
      { question: "Why is UK MPG higher than US MPG for the same car?", answer: "Because the imperial gallon used in the UK is about 4.546 litres, while the US gallon is about 3.785 litres — roughly twenty percent larger. Since a bigger gallon carries the car further, the same vehicle posts a higher miles-per-gallon number in imperial units. A car rated 30 US mpg is about 36 UK mpg. Always check which gallon a figure uses before comparing." },
      { question: "How do I convert MPG to L/100km?", answer: "Divide the constant 235.215 by the US miles-per-gallon figure to get litres per 100 kilometres, or divide 282.481 by the imperial UK figure. So 30 US mpg is about 7.84 L/100km. The relationship is inverse, not linear, because one unit measures distance per fuel and the other fuel per distance, which is why you divide a fixed constant rather than multiplying." },
      { question: "Is a lower L/100km better?", answer: "Yes. Litres per 100 kilometres measures how much fuel the car consumes to travel a set distance, so a smaller number means the car burns less fuel and is more efficient. This is the opposite of miles per gallon, where a higher number is better. A car at 5 L/100km is thriftier than one at 8 L/100km, using less fuel for the same journey." },
      { question: "What is a good fuel economy figure?", answer: "It depends on the vehicle class, but a modern efficient petrol car often achieves around 5 to 6 L/100km, roughly 40 to 47 US mpg or 47 to 56 UK mpg. Hybrids can reach 4 L/100km or better, while large trucks and SUVs may sit at 10 to 15 L/100km. Real-world figures vary with driving style, load, weather and traffic conditions." },
      { question: "Why can't I just multiply to convert fuel economy?", answer: "Because miles per gallon and litres per 100 km are reciprocal measures — one is distance divided by fuel, the other fuel divided by distance. Multiplying by a single factor would only rescale within the same type. Converting between them requires inverting the value through a shared base, which is why the converter divides a constant by your figure rather than scaling it directly, and rejects zero inputs." },
    ],
    slugEs: "conversor-de-consumo-de-combustible",
    titleEs: "Conversor de Consumo de Combustible",
    shortDescriptionEs: "Convierte entre MPG (EE. UU./RU), km/L y L/100km.",
    seoTitleEs: "Conversor de Consumo de Combustible — MPG, km/L, L/100km",
    metaDescriptionEs:
      "Conversor de consumo de combustible gratuito. Convierte con precisión entre MPG de EE. UU., MPG imperial del RU, kilómetros por litro y litros por 100 km.",
    primaryKeywordEs: "conversor de consumo de combustible",
    secondaryKeywordsEs: ["mpg a l/100km", "mpg a km/l", "mpg eeuu a mpg ru"],
    formulaExplanationEs:
      "Las unidades de distancia por combustible y las de combustible por distancia son inversas, así que el conversor primero convierte la entrada en litros por 100 km: desde MPG de EE. UU. calcula 235,214583 dividido entre el valor, desde MPG del RU 282,481 dividido entre el valor, y desde km/L 100 dividido entre el valor. Luego invierte esa cifra base hacia la unidad de destino con la constante correspondiente. Un valor de cero o inferior se rechaza como NaN, ya que dividiría entre cero o implicaría un consumo negativo.",
    explanationEs:
      "Un conversor de consumo de combustible reexpresa la eficiencia con que un vehículo usa combustible en una unidad diferente, moviéndose entre millas por galón de EE. UU., millas por galón imperial del RU, kilómetros por litro y litros por 100 kilómetros. A diferencia de las conversiones simples, esta no es una única multiplicación y división, porque algunas unidades miden distancia por combustible (más es mejor) mientras que otras miden combustible por distancia (menos es mejor), así que el conversor invierte además de reescalar.\n\nEsto importa porque la eficiencia de combustible se expresa de forma distinta en el mundo y las cifras no son comparables a simple vista. Estados Unidos usa millas por galón sobre un galón de 3,785 litros; el Reino Unido usa millas por galón sobre un galón imperial mayor de 4,546 litros, así que una cifra del RU siempre parece mejor que la de EE. UU. para el mismo coche; Europa continental usa litros por 100 kilómetros, donde un número menor significa un vehículo más ahorrador. Comparar un coche de especificación estadounidense con uno europeo, o leer el folleto de un vehículo importado, exige una conversión adecuada.\n\nEl conversor pivota a través de litros por 100 kilómetros, convirtiendo cada entrada de distancia por combustible en esa base de combustible por distancia y de vuelta. Como las millas por galón y los km/L son medidas inversas, una multiplicación directa daría un sinsentido; invertir a través de la base compartida mantiene cada resultado correcto. Compradores que comparan modelos, conductores de coches importados, gestores de flotas y viajeros que alquilan en el extranjero recurren a un conversor de consumo para juzgar los costes en una sola escala honesta.",
    exampleEs: {
      inputs: { value: 30, from: "mpgUS", to: "L/100km" },
      explanation: "235,214583 ÷ 30 ≈ 7,84 litros por 100 km.",
    },
    faqsEs: [
      { question: "¿Por qué el MPG del RU es más alto que el de EE. UU. para el mismo coche?", answer: "Porque el galón imperial usado en el RU es de unos 4,546 litros, mientras que el galón de EE. UU. es de unos 3,785 litros, aproximadamente un veinte por ciento mayor. Como un galón más grande lleva el coche más lejos, el mismo vehículo muestra un número de millas por galón más alto en unidades imperiales. Un coche de 30 mpg de EE. UU. son unos 36 mpg del RU. Compruebe siempre qué galón usa una cifra antes de comparar." },
      { question: "¿Cómo convierto MPG a L/100km?", answer: "Divida la constante 235,215 entre la cifra de millas por galón de EE. UU. para obtener litros por 100 kilómetros, o divida 282,481 entre la cifra imperial del RU. Así, 30 mpg de EE. UU. son unos 7,84 L/100km. La relación es inversa, no lineal, porque una unidad mide distancia por combustible y la otra combustible por distancia, por lo que se divide una constante fija en lugar de multiplicar." },
      { question: "¿Es mejor un L/100km más bajo?", answer: "Sí. Los litros por 100 kilómetros miden cuánto combustible consume el coche para recorrer una distancia fija, así que un número menor significa que el coche quema menos combustible y es más eficiente. Esto es lo opuesto a las millas por galón, donde un número mayor es mejor. Un coche de 5 L/100km es más ahorrador que uno de 8 L/100km, ya que usa menos combustible para el mismo trayecto." },
      { question: "¿Qué es una buena cifra de consumo de combustible?", answer: "Depende de la clase de vehículo, pero un coche de gasolina moderno y eficiente suele lograr unos 5 a 6 L/100km, aproximadamente 40 a 47 mpg de EE. UU. o 47 a 56 mpg del RU. Los híbridos pueden alcanzar 4 L/100km o mejor, mientras que los camiones y todoterrenos grandes pueden situarse en 10 a 15 L/100km. Las cifras reales varían con el estilo de conducción, la carga, el clima y el tráfico." },
      { question: "¿Por qué no puedo simplemente multiplicar para convertir el consumo de combustible?", answer: "Porque las millas por galón y los litros por 100 km son medidas recíprocas: una es distancia dividida entre combustible, la otra combustible dividido entre distancia. Multiplicar por un solo factor solo reescalaría dentro del mismo tipo. Convertir entre ellas requiere invertir el valor a través de una base compartida, por eso el conversor divide una constante entre su cifra en lugar de escalarla directamente, y rechaza las entradas de cero." },
    ],
    relatedCalculators: ["length-converter", "volume-converter", "pace-speed-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "force-unit",
    slug: "force-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Force Converter",
    shortDescription: "Convert between newtons, kilonewtons, kgf, lbf and dynes.",
    seoTitle: "Force Converter — Newtons, kN, kgf, lbf, Dynes",
    metaDescription:
      "Free force converter. Convert between newtons, kilonewtons, kilogram-force, pound-force and dynes instantly and accurately.",
    primaryKeyword: "force converter",
    secondaryKeywords: ["newtons to pounds force", "kgf to n", "lbf to n"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "N", options: forceUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "lbf", options: forceUnits },
    ],
    results: [{ id: "result", label: "Converted force", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to newtons via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A force converter restates a push or pull in a different unit, moving between newtons and kilonewtons on the metric side and kilogram-force, pound-force and dynes on the customary and older scientific sides. It reduces your figure to newtons, the SI unit for force, then scales out to the unit you choose, so one mechanism covers structural loads, spring and actuator ratings, weights expressed as force, and laboratory measurements alike.\n\nThis matters because force is expressed in several coexisting systems, and mixing them produces serious errors. Structural and mechanical engineering runs on newtons and kilonewtons; many everyday and industrial specifications quote kilogram-force, treating a mass's weight as a force; American engineering and many fastener and cable ratings use pound-force; older physics texts and some material-science work use the tiny dyne from the centimetre-gram-second system. A load rating misread across these units can under-design a structure or overload a component.\n\nThe convert-through-newtons method is used because every force unit has a fixed, defined ratio to the newton — one kilogram-force is exactly 9.80665 N at standard gravity, one pound-force is about 4.4482 N, and one dyne is exactly 1e-5 N — so pivoting through that base keeps results exact and needs only one factor per unit. Structural and mechanical engineers, physicists, technicians reading mixed-unit datasheets and students all rely on a force converter whenever a load lands in an unfamiliar unit.",
    example: {
      inputs: { value: 100, from: "N", to: "lbf" },
      explanation: "100 N ÷ 4.44822162 ≈ 22.48 lbf.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of newtons to express the force in newtons, then divided by the target unit's newton value to complete the conversion. Because each force unit is defined as a constant number of newtons — kilogram-force via standard gravity, pound-force via the pound and standard gravity, and the dyne via the CGS base units — every unit's ratio to the newton is fixed, so chaining through that single base is exact for all pairings.",
    faqs: [
      { question: "How do I convert newtons to pound-force?", answer: "Divide the newton figure by about 4.4482 to get pound-force, or multiply by 0.2248. So 100 newtons is about 22.5 pound-force, and 1,000 N is about 224.8 lbf. To reverse it, multiply pound-force by 4.4482. The factor comes from the exact definitions of the pound and standard gravity, so the conversion is precise to the decimals the calculator displays." },
      { question: "What is kilogram-force?", answer: "Kilogram-force (kgf), sometimes called a kilopond, is the force that standard Earth gravity exerts on a mass of one kilogram, defined as exactly 9.80665 newtons. It is convenient because a one-kilogram object simply weighs one kilogram-force, but it is not an SI unit. It still appears on some industrial equipment, tension gauges and continental engineering documents, which is why converting it to newtons is often necessary." },
      { question: "What is a dyne?", answer: "A dyne is the unit of force in the older centimetre-gram-second (CGS) system, defined as the force needed to accelerate one gram at one centimetre per second squared. It equals exactly one hundred-thousandth of a newton, or 1e-5 N, making it very small. Dynes appear in older physics literature and in some surface-tension and material-science measurements, where the tiny unit is convenient." },
      { question: "Is weight a force?", answer: "Yes. Weight is the force gravity exerts on a mass, which is why it is properly measured in newtons or pound-force rather than kilograms or pounds, which are mass units. In everyday speech we blur the distinction, but in engineering the difference matters: a 10-kilogram mass has a weight of about 98.1 newtons on Earth. This converter handles the force side of that relationship." },
      { question: "Why convert force through newtons?", answer: "The newton is the SI unit for force, defined as one kilogram-metre per second squared, so every other force unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that mechanics and structural equations expect, simplifying any cross-check." },
    ],
    slugEs: "conversor-de-fuerza",
    titleEs: "Conversor de Fuerza",
    shortDescriptionEs: "Convierte entre newtons, kilonewtons, kgf, lbf y dinas.",
    seoTitleEs: "Conversor de Fuerza — Newtons, kN, kgf, lbf, Dinas",
    metaDescriptionEs:
      "Conversor de fuerza gratuito. Convierte al instante y con precisión entre newtons, kilonewtons, kilogramo-fuerza, libra-fuerza y dinas.",
    primaryKeywordEs: "conversor de fuerza",
    secondaryKeywordsEs: ["newtons a libras fuerza", "kgf a n", "lbf a n"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de newtons de su unidad para expresar la fuerza en newtons y luego se divide entre el valor en newtons de la unidad de destino para completar la conversión. Como cada unidad de fuerza se define como una cantidad constante de newtons —el kilogramo-fuerza mediante la gravedad estándar, la libra-fuerza mediante la libra y la gravedad estándar, y la dina mediante las unidades base CGS— la razón de cada unidad respecto al newton es fija, así que encadenar por esa única base es exacto para todos los pares.",
    explanationEs:
      "Un conversor de fuerza reexpresa un empuje o tirón en una unidad diferente, moviéndose entre newtons y kilonewtons en el lado métrico y kilogramo-fuerza, libra-fuerza y dinas en los lados tradicional y científico antiguo. Reduce su cifra a newtons, la unidad del SI para la fuerza, y luego escala hacia la unidad que elija, de modo que un único mecanismo cubre cargas estructurales, valores de resortes y actuadores, pesos expresados como fuerza y mediciones de laboratorio por igual.\n\nEsto importa porque la fuerza se expresa en varios sistemas coexistentes, y mezclarlos produce errores graves. La ingeniería estructural y mecánica funciona con newtons y kilonewtons; muchas especificaciones cotidianas e industriales expresan kilogramo-fuerza, tratando el peso de una masa como una fuerza; la ingeniería estadounidense y muchas especificaciones de sujetadores y cables usan libra-fuerza; los textos de física antiguos y cierto trabajo de ciencia de materiales usan la diminuta dina del sistema centímetro-gramo-segundo. Malinterpretar la especificación de una carga entre estas unidades puede infradiseñar una estructura o sobrecargar un componente.\n\nSe usa el método de convertir a través de newtons porque cada unidad de fuerza tiene una razón fija y definida respecto al newton —un kilogramo-fuerza es exactamente 9,80665 N a la gravedad estándar, una libra-fuerza son unos 4,4482 N y una dina es exactamente 1e-5 N— así que pivotar por esa base mantiene los resultados exactos y solo necesita un factor por unidad. Ingenieros estructurales y mecánicos, físicos, técnicos que leen hojas de datos en unidades mixtas y estudiantes recurren a un conversor de fuerza siempre que una carga aparece en una unidad poco familiar.",
    exampleEs: {
      inputs: { value: 100, from: "N", to: "lbf" },
      explanation: "100 N ÷ 4,44822162 ≈ 22,48 lbf.",
    },
    faqsEs: [
      { question: "¿Cómo convierto newtons a libra-fuerza?", answer: "Divida la cifra en newtons entre unos 4,4482 para obtener libra-fuerza, o multiplique por 0,2248. Así, 100 newtons son unas 22,5 libras-fuerza, y 1.000 N son unas 224,8 lbf. Para invertirlo, multiplique la libra-fuerza por 4,4482. El factor proviene de las definiciones exactas de la libra y la gravedad estándar, así que la conversión es precisa hasta los decimales que muestra la calculadora." },
      { question: "¿Qué es el kilogramo-fuerza?", answer: "El kilogramo-fuerza (kgf), a veces llamado kilopondio, es la fuerza que la gravedad estándar de la Tierra ejerce sobre una masa de un kilogramo, definida como exactamente 9,80665 newtons. Es cómodo porque un objeto de un kilogramo simplemente pesa un kilogramo-fuerza, pero no es una unidad del SI. Todavía aparece en algunos equipos industriales, dinamómetros de tensión y documentos de ingeniería continentales, por lo que convertirlo a newtons suele ser necesario." },
      { question: "¿Qué es una dina?", answer: "Una dina es la unidad de fuerza del antiguo sistema centímetro-gramo-segundo (CGS), definida como la fuerza necesaria para acelerar un gramo a un centímetro por segundo al cuadrado. Equivale exactamente a una cienmilésima de newton, o 1e-5 N, lo que la hace muy pequeña. Las dinas aparecen en la literatura de física antigua y en algunas mediciones de tensión superficial y ciencia de materiales, donde la unidad diminuta resulta conveniente." },
      { question: "¿El peso es una fuerza?", answer: "Sí. El peso es la fuerza que la gravedad ejerce sobre una masa, por lo que se mide correctamente en newtons o libra-fuerza en lugar de kilogramos o libras, que son unidades de masa. En el habla cotidiana difuminamos la distinción, pero en ingeniería la diferencia importa: una masa de 10 kilogramos tiene un peso de unos 98,1 newtons en la Tierra. Este conversor maneja el lado de la fuerza de esa relación." },
      { question: "¿Por qué convertir la fuerza a través de newtons?", answer: "El newton es la unidad del SI para la fuerza, definida como un kilogramo-metro por segundo al cuadrado, así que cualquier otra unidad de fuerza tiene una razón fija y exactamente definida respecto a él. Usarlo como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, mantiene los resultados exactos y coincide con la unidad que la mecánica y las ecuaciones estructurales esperan, simplificando cualquier verificación." },
    ],
    relatedCalculators: ["power-converter", "torque-converter", "pressure-converter", "energy-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "time-unit",
    slug: "time-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Time Unit Converter",
    shortDescription: "Convert between seconds, minutes, hours, days and years.",
    seoTitle: "Time Converter — Seconds, Minutes, Hours, Days, Years",
    metaDescription:
      "Free time unit converter. Convert between milliseconds, seconds, minutes, hours, days, weeks, months and years instantly.",
    primaryKeyword: "time converter",
    secondaryKeywords: ["seconds to hours", "days to seconds", "minutes to milliseconds"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "90", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "min", options: timeUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "s", options: timeUnits },
    ],
    results: [{ id: "result", label: "Converted time", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to seconds via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A time unit converter restates a duration in a different unit, moving between milliseconds, seconds, minutes, hours, days, weeks, 30-day months and 365-day years. It reduces your figure to seconds, the SI base unit for time, then scales out to the unit you choose, so one mechanism covers stopwatch splits, project timelines, scientific measurements and everyday scheduling alike.\n\nThis matters because time appears in many units and the conversions are not as simple as decimal shifts. There are sixty seconds in a minute, sixty minutes in an hour and twenty-four hours in a day, so turning 5,400 seconds into hours and minutes by hand is easy to get wrong. Programmers routinely juggle milliseconds and seconds; scientists work in fractions of a second; planners think in days, weeks and months. A converter removes the mental arithmetic and the risk of a dropped factor of sixty.\n\nThe convert-through-seconds method is used because every unit here has a fixed number of seconds — a minute is 60, an hour 3,600, a day 86,400 — so pivoting through that base keeps results exact and needs only one factor per unit. Note that this tool uses conventional 30-day months and 365-day years for quick estimates; it is deliberately named a time-unit converter rather than a calendar tool, because real months vary in length and leap years add a day. Developers, scientists, students and planners all use it whenever a duration lands in an inconvenient unit.",
    example: {
      inputs: { value: 90, from: "min", to: "s" },
      explanation: "90 min × 60 s = 5,400 seconds.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of seconds to express the duration in seconds, then divided by the target unit's second value to complete the conversion. The sub-day units are exact by definition, while the month is fixed at 30 days and the year at 365 days for estimation. Because each unit is a constant number of seconds, chaining through that single base is exact for the definitions used, with one stored factor per unit.",
    faqs: [
      { question: "How many seconds are in a day?", answer: "Exactly 86,400 seconds, found by multiplying 24 hours by 60 minutes by 60 seconds. A week is seven times that, 604,800 seconds. These figures are exact for a standard day. Note that rare leap seconds, added occasionally to keep clocks aligned with Earth's rotation, can make a specific real day one second longer, but this converter uses the standard 86,400 for everyday calculations." },
      { question: "How long is a month in this converter?", answer: "This tool treats a month as exactly 30 days, or 2,592,000 seconds, for quick estimation. Real calendar months range from 28 to 31 days, so for precise date arithmetic you should use a date-difference calculator instead. The 30-day convention is common in finance and rough planning because it gives a consistent, round figure that is easy to reason about across many months." },
      { question: "Why is a year 365 days here and not 365.25?", answer: "This converter uses a flat 365-day year, 31,536,000 seconds, for simple estimates rather than the astronomical 365.25-day figure that accounts for leap years. Over four years the quarter-day difference adds up to one extra day, which is why the calendar inserts February 29. For exact multi-year durations spanning leap years, use a dedicated date calculator rather than this unit converter." },
      { question: "How do I convert milliseconds to seconds?", answer: "Divide the millisecond figure by 1,000, since one second is 1,000 milliseconds. So 2,500 milliseconds is 2.5 seconds. To reverse it, multiply seconds by 1,000. Milliseconds are widely used in programming, web performance and audio timing, where sub-second precision matters, so converting cleanly between the two is a routine task for developers and engineers." },
      { question: "Why convert time through seconds?", answer: "The second is the SI base unit for time, so every other duration unit has a fixed number of seconds attached to it. Using the second as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, and it keeps results exact for the definitions used. It also matches the unit that scientific and programming timing systems rely on internally." },
    ],
    slugEs: "conversor-de-tiempo",
    titleEs: "Conversor de Unidades de Tiempo",
    shortDescriptionEs: "Convierte entre segundos, minutos, horas, días y años.",
    seoTitleEs: "Conversor de Tiempo — Segundos, Minutos, Horas, Días, Años",
    metaDescriptionEs:
      "Conversor de unidades de tiempo gratuito. Convierte al instante entre milisegundos, segundos, minutos, horas, días, semanas, meses y años.",
    primaryKeywordEs: "conversor de tiempo",
    secondaryKeywordsEs: ["segundos a horas", "días a segundos", "minutos a milisegundos"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de segundos de su unidad para expresar la duración en segundos y luego se divide entre el valor en segundos de la unidad de destino para completar la conversión. Las unidades de menos de un día son exactas por definición, mientras que el mes se fija en 30 días y el año en 365 días para la estimación. Como cada unidad es un número constante de segundos, encadenar por esa única base es exacto para las definiciones usadas, con un factor almacenado por unidad.",
    explanationEs:
      "Un conversor de unidades de tiempo reexpresa una duración en una unidad diferente, moviéndose entre milisegundos, segundos, minutos, horas, días, semanas, meses de 30 días y años de 365 días. Reduce su cifra a segundos, la unidad base del SI para el tiempo, y luego escala hacia la unidad que elija, de modo que un único mecanismo cubre parciales de cronómetro, cronogramas de proyectos, mediciones científicas y planificación cotidiana por igual.\n\nEsto importa porque el tiempo aparece en muchas unidades y las conversiones no son tan simples como desplazamientos decimales. Hay sesenta segundos en un minuto, sesenta minutos en una hora y veinticuatro horas en un día, así que convertir 5.400 segundos en horas y minutos a mano es fácil de equivocar. Los programadores manejan rutinariamente milisegundos y segundos; los científicos trabajan en fracciones de segundo; los planificadores piensan en días, semanas y meses. Un conversor elimina el cálculo mental y el riesgo de perder un factor de sesenta.\n\nSe usa el método de convertir a través de segundos porque cada unidad aquí tiene un número fijo de segundos —un minuto son 60, una hora 3.600, un día 86.400— así que pivotar por esa base mantiene los resultados exactos y solo necesita un factor por unidad. Tenga en cuenta que esta herramienta usa meses convencionales de 30 días y años de 365 días para estimaciones rápidas; se llama deliberadamente conversor de unidades de tiempo en lugar de herramienta de calendario, porque los meses reales varían de longitud y los años bisiestos añaden un día. Desarrolladores, científicos, estudiantes y planificadores lo usan siempre que una duración aparece en una unidad inconveniente.",
    exampleEs: {
      inputs: { value: 90, from: "min", to: "s" },
      explanation: "90 min × 60 s = 5.400 segundos.",
    },
    faqsEs: [
      { question: "¿Cuántos segundos hay en un día?", answer: "Exactamente 86.400 segundos, obtenidos multiplicando 24 horas por 60 minutos por 60 segundos. Una semana son siete veces eso, 604.800 segundos. Estas cifras son exactas para un día estándar. Tenga en cuenta que los raros segundos intercalares, añadidos ocasionalmente para mantener los relojes alineados con la rotación de la Tierra, pueden hacer que un día real concreto sea un segundo más largo, pero este conversor usa los 86.400 estándar para los cálculos cotidianos." },
      { question: "¿Cuánto dura un mes en este conversor?", answer: "Esta herramienta trata un mes como exactamente 30 días, o 2.592.000 segundos, para una estimación rápida. Los meses de calendario reales van de 28 a 31 días, así que para aritmética de fechas precisa debería usar una calculadora de diferencia de fechas en su lugar. La convención de 30 días es común en finanzas y planificación aproximada porque da una cifra consistente y redonda, fácil de razonar a lo largo de muchos meses." },
      { question: "¿Por qué un año son 365 días aquí y no 365,25?", answer: "Este conversor usa un año plano de 365 días, 31.536.000 segundos, para estimaciones simples en lugar de la cifra astronómica de 365,25 días que tiene en cuenta los años bisiestos. A lo largo de cuatro años, la diferencia de un cuarto de día suma un día extra, por eso el calendario inserta el 29 de febrero. Para duraciones exactas de varios años que abarcan bisiestos, use una calculadora de fechas dedicada en lugar de este conversor de unidades." },
      { question: "¿Cómo convierto milisegundos a segundos?", answer: "Divida la cifra en milisegundos entre 1.000, ya que un segundo son 1.000 milisegundos. Así, 2.500 milisegundos son 2,5 segundos. Para invertirlo, multiplique los segundos por 1.000. Los milisegundos se usan ampliamente en programación, rendimiento web y sincronización de audio, donde importa la precisión de fracción de segundo, así que convertir limpiamente entre ambos es una tarea rutinaria para desarrolladores e ingenieros." },
      { question: "¿Por qué convertir el tiempo a través de segundos?", answer: "El segundo es la unidad base del SI para el tiempo, así que cualquier otra unidad de duración tiene un número fijo de segundos asociado. Usar el segundo como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, y mantiene los resultados exactos para las definiciones usadas. También coincide con la unidad en la que se basan internamente los sistemas de sincronización científicos y de programación." },
    ],
    relatedCalculators: ["frequency-converter", "speed-converter", "data-transfer-rate-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "data-rate",
    slug: "data-transfer-rate-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Data Transfer Rate Converter",
    shortDescription: "Convert between bit/s, Mbit/s, MB/s and more.",
    seoTitle: "Data Transfer Rate Converter — Mbps, MB/s, Gbps",
    metaDescription:
      "Free data transfer rate converter. Convert between bits and bytes per second across kbit/s, Mbit/s, Gbit/s, KB/s, MB/s and GB/s.",
    primaryKeyword: "data transfer rate converter",
    secondaryKeywords: ["mbps to mb/s", "gbps to mb/s", "bits to bytes per second"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "Mbit/s", options: dataRateUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "MB/s", options: dataRateUnits },
    ],
    results: [{ id: "result", label: "Converted data rate", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to bits per second via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A data transfer rate converter restates a network or storage speed in a different unit, moving between bits per second and bytes per second across their kilo, mega and giga multiples. It reduces your figure to bits per second, the base rate, then scales out to the unit you choose, so one mechanism covers broadband plans, Wi-Fi throughput, file-copy speeds and interface bandwidth alike.\n\nThis matters because the single most common confusion in networking is bits versus bytes. Internet and network speeds are advertised in bits per second — megabits (Mbit/s or Mbps) — while file sizes and download managers report bytes per second — megabytes (MB/s). Because one byte is eight bits, a 100 Mbit/s connection delivers only about 12.5 MB/s at best, which surprises people who expected 100. A converter makes that factor of eight explicit and stops the disappointment turning into a support ticket.\n\nThis converter uses decimal (1000-based) multiples for the rate prefixes, which is the SI convention that internet service providers and networking standards follow, so a megabit is exactly 1,000,000 bits per second. The bit-to-byte step is a factor of eight. Pivoting through bits per second keeps every result exact and needs only one factor per unit. Anyone comparing an internet plan against real download speeds, sizing a backup window, or reading interface specifications reaches for a data transfer rate converter to keep bits and bytes straight.",
    example: {
      inputs: { value: 100, from: "Mbit/s", to: "MB/s" },
      explanation: "100 Mbit/s ÷ 8 = 12.5 MB/s.",
    },
    formulaExplanation:
      "Each unit is defined as a fixed number of bits per second: the bit prefixes are decimal powers of ten, and each byte unit is eight times its bit counterpart because one byte is eight bits. The input is multiplied by its unit's bit-per-second value, then divided by the target unit's value. Because every unit reduces to a constant number of bits per second, pivoting through that single base is exact for every pairing, with one stored factor per unit.",
    faqs: [
      { question: "What is the difference between Mbps and MB/s?", answer: "Mbps, or megabits per second, measures network speed, while MB/s, megabytes per second, measures data volume over time. One byte is eight bits, so MB/s is eight times larger than Mbps. A 100 Mbps internet plan tops out around 12.5 MB/s of actual file download. Providers advertise in bits to make the numbers look bigger, while download managers usually display bytes, causing frequent confusion." },
      { question: "Why is my download speed only an eighth of my internet plan?", answer: "Because your plan is quoted in megabits per second while your download manager shows megabytes per second, and there are eight bits in a byte. A 200 Mbps connection therefore delivers about 25 MB/s at best. The two figures are not in conflict — they are the same speed in different units. Real speeds are also reduced slightly by network overhead and shared congestion." },
      { question: "Does this converter use 1000 or 1024 for prefixes?", answer: "It uses decimal 1000-based prefixes for the data-rate units, which is the SI and networking-industry convention. So one megabit per second is exactly 1,000,000 bits per second, and one Mbit/s to kbit/s step is a factor of 1,000. This matches how internet providers and Ethernet standards define their speeds, unlike file-storage sizes, which are often reported in 1024-based binary units." },
      { question: "How many MB/s is a gigabit connection?", answer: "A 1 Gbit/s, or gigabit, connection is 1,000 Mbit/s, which divided by eight is about 125 MB/s of raw byte throughput. In practice, protocol overhead and disk write speeds usually cap real transfers a little below that. Gigabit is common for fibre broadband and wired local networks, and understanding its byte-per-second equivalent helps set realistic expectations for large file transfers and backups." },
      { question: "Why convert through bits per second?", answer: "Bits per second is the fundamental rate at which digital data moves, so every other transfer unit is a fixed multiple of it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and cleanly captures the crucial eight-to-one relationship between bytes and bits that causes most speed confusion in the first place." },
    ],
    slugEs: "conversor-de-velocidad-de-transferencia-de-datos",
    titleEs: "Conversor de Velocidad de Transferencia de Datos",
    shortDescriptionEs: "Convierte entre bit/s, Mbit/s, MB/s y más.",
    seoTitleEs: "Conversor de Velocidad de Transferencia de Datos — Mbps, MB/s, Gbps",
    metaDescriptionEs:
      "Conversor de velocidad de transferencia de datos gratuito. Convierte entre bits y bytes por segundo en kbit/s, Mbit/s, Gbit/s, KB/s, MB/s y GB/s.",
    primaryKeywordEs: "conversor de velocidad de transferencia de datos",
    secondaryKeywordsEs: ["mbps a mb/s", "gbps a mb/s", "bits a bytes por segundo"],
    formulaExplanationEs:
      "Cada unidad se define como un número fijo de bits por segundo: los prefijos de bits son potencias decimales de diez, y cada unidad de bytes es ocho veces su equivalente en bits porque un byte son ocho bits. La entrada se multiplica por el valor en bits por segundo de su unidad y luego se divide entre el valor de la unidad de destino. Como cada unidad se reduce a un número constante de bits por segundo, pivotar por esa única base es exacto para cada par, con un factor almacenado por unidad.",
    explanationEs:
      "Un conversor de velocidad de transferencia de datos reexpresa una velocidad de red o almacenamiento en una unidad diferente, moviéndose entre bits por segundo y bytes por segundo a través de sus múltiplos kilo, mega y giga. Reduce su cifra a bits por segundo, la tasa base, y luego escala hacia la unidad que elija, de modo que un único mecanismo cubre planes de banda ancha, rendimiento de wifi, velocidades de copia de archivos y ancho de banda de interfaces por igual.\n\nEsto importa porque la confusión más común en redes es bits frente a bytes. Las velocidades de internet y de red se anuncian en bits por segundo —megabits (Mbit/s o Mbps)— mientras que los tamaños de archivo y los gestores de descargas informan en bytes por segundo —megabytes (MB/s)—. Como un byte son ocho bits, una conexión de 100 Mbit/s entrega solo unos 12,5 MB/s en el mejor de los casos, lo que sorprende a quienes esperaban 100. Un conversor hace explícito ese factor de ocho y evita que la decepción se convierta en una incidencia de soporte.\n\nEste conversor usa múltiplos decimales (base 1000) para los prefijos de tasa, que es la convención del SI que siguen los proveedores de internet y los estándares de redes, así que un megabit son exactamente 1.000.000 de bits por segundo. El paso de bit a byte es un factor de ocho. Pivotar a través de bits por segundo mantiene cada resultado exacto y solo necesita un factor por unidad. Cualquiera que compare un plan de internet con velocidades reales de descarga, dimensione una ventana de respaldo o lea especificaciones de interfaz recurre a un conversor de velocidad de transferencia de datos para mantener claros los bits y los bytes.",
    exampleEs: {
      inputs: { value: 100, from: "Mbit/s", to: "MB/s" },
      explanation: "100 Mbit/s ÷ 8 = 12,5 MB/s.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre Mbps y MB/s?", answer: "Mbps, o megabits por segundo, mide la velocidad de red, mientras que MB/s, megabytes por segundo, mide el volumen de datos en el tiempo. Un byte son ocho bits, así que MB/s es ocho veces mayor que Mbps. Un plan de internet de 100 Mbps alcanza como máximo unos 12,5 MB/s de descarga real de archivos. Los proveedores anuncian en bits para que los números parezcan mayores, mientras que los gestores de descargas suelen mostrar bytes, causando confusión frecuente." },
      { question: "¿Por qué mi velocidad de descarga es solo un octavo de mi plan de internet?", answer: "Porque su plan se expresa en megabits por segundo mientras que su gestor de descargas muestra megabytes por segundo, y hay ocho bits en un byte. Una conexión de 200 Mbps entrega por tanto unos 25 MB/s en el mejor de los casos. Las dos cifras no están en conflicto: son la misma velocidad en unidades diferentes. Las velocidades reales también se reducen ligeramente por la sobrecarga de red y la congestión compartida." },
      { question: "¿Este conversor usa 1000 o 1024 para los prefijos?", answer: "Usa prefijos decimales de base 1000 para las unidades de tasa de datos, que es la convención del SI y de la industria de redes. Así, un megabit por segundo son exactamente 1.000.000 de bits por segundo, y un paso de Mbit/s a kbit/s es un factor de 1.000. Esto coincide con cómo los proveedores de internet y los estándares Ethernet definen sus velocidades, a diferencia de los tamaños de almacenamiento, que a menudo se informan en unidades binarias de base 1024." },
      { question: "¿Cuántos MB/s es una conexión de gigabit?", answer: "Una conexión de 1 Gbit/s, o gigabit, son 1.000 Mbit/s, que dividido entre ocho son unos 125 MB/s de rendimiento bruto de bytes. En la práctica, la sobrecarga de protocolo y las velocidades de escritura de disco suelen limitar las transferencias reales un poco por debajo. El gigabit es común en banda ancha de fibra y redes locales cableadas, y entender su equivalente en bytes por segundo ayuda a fijar expectativas realistas para transferencias grandes y respaldos." },
      { question: "¿Por qué convertir a través de bits por segundo?", answer: "Los bits por segundo son la tasa fundamental a la que se mueven los datos digitales, así que cualquier otra unidad de transferencia es un múltiplo fijo de ella. Usarla como pivote hace que el conversor necesite solo un factor por unidad en lugar de una regla por cada par, mantiene los resultados exactos y captura limpiamente la crucial relación de ocho a uno entre bytes y bits que causa la mayor parte de la confusión de velocidad." },
    ],
    relatedCalculators: ["data-storage-converter", "frequency-converter", "time-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cooking-volume",
    slug: "cooking-volume-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Cooking Volume Converter",
    shortDescription: "Convert between cups, tablespoons, ml, litres and more.",
    seoTitle: "Cooking Volume Converter — Cups, tbsp, tsp, ml, Litres",
    metaDescription:
      "Free cooking volume converter. Convert between millilitres, litres, teaspoons, tablespoons, US cups, fluid ounces, pints, quarts and gallons.",
    primaryKeyword: "cooking volume converter",
    secondaryKeywords: ["cups to ml", "tablespoons to ml", "cups to tablespoons"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "cup(US)", options: cookingVolumeUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "ml", options: cookingVolumeUnits },
    ],
    results: [{ id: "result", label: "Converted volume", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to millilitres via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A cooking volume converter restates a kitchen measurement in a different unit, moving between millilitres and litres on the metric side and US teaspoons, tablespoons, cups, fluid ounces, pints, quarts and gallons on the customary side. It reduces your figure to millilitres, a convenient base, then scales out to the unit you choose, so one mechanism handles scaling a recipe up or down and translating between metric and US measurements alike.\n\nThis matters because recipes travel across borders and measuring systems, and a mistranslated quantity can ruin a dish. A European recipe lists millilitres and grams; an American one lists cups and tablespoons; a quick bake needs teaspoons. Baking in particular is sensitive to ratios, so getting the liquid volumes right is the difference between a batter that works and one that does not. A converter removes guesswork and the temptation to eyeball an unfamiliar unit.\n\nThe convert-through-millilitres method is used because every volume unit has a fixed ratio to the millilitre — a US cup is about 236.6 ml, a tablespoon about 14.79 ml, a teaspoon about 4.93 ml — so pivoting through that base keeps results consistent and needs only one factor per unit. Note that these are US customary measures; the UK and Australia use slightly different cup and tablespoon sizes, so check your recipe's origin. Home cooks, bakers, students following international recipes and anyone halving or doubling a dish all rely on a cooking volume converter for dependable results.",
    example: {
      inputs: { value: 1, from: "cup(US)", to: "ml" },
      explanation: "1 US cup × 236.588 = 236.588 millilitres.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of millilitres to express the volume in millilitres, then divided by the target unit's millilitre value to complete the conversion. The units here are US customary measures, each defined as a constant number of millilitres, so chaining through that single base is exact for those definitions. Because ratios are fixed, the converter stores just one factor per unit rather than a rule for every pairing.",
    faqs: [
      { question: "How many millilitres are in a US cup?", answer: "A US customary cup is about 236.6 millilitres. This differs from the metric cup used in Australia and some recipes, which is a round 250 ml, and from the UK, which historically used a 284 ml cup. Because the difference is small but real, always check whether a recipe is US, metric or imperial before converting, especially for baking where precise liquid ratios matter to the result." },
      { question: "How many tablespoons are in a cup?", answer: "In US measures there are 16 tablespoons in a cup, since a US cup is about 236.6 ml and a tablespoon about 14.79 ml. There are also 3 teaspoons in a tablespoon, so a cup holds 48 teaspoons. These clean whole-number relationships make US recipes easy to scale by hand, and the converter reproduces them exactly to the decimals shown when you convert between the units." },
      { question: "Are US and UK cups the same?", answer: "No. This converter uses US customary units, where a cup is about 236.6 ml and a fluid ounce about 29.57 ml. UK and Australian recipes commonly use a 250 ml metric cup, and the UK fluid ounce is about 28.41 ml. The differences are small per unit but add up in larger quantities, so match the converter's US basis to a US recipe, or adjust if your recipe is metric." },
      { question: "Can I convert dry ingredients like flour with this?", answer: "This tool converts volume to volume, so it works for the volume of any ingredient, wet or dry. What it cannot do is turn a volume into a weight, because that depends on the ingredient's density — a cup of flour and a cup of sugar weigh different amounts. For volume-to-gram conversions you need an ingredient-specific density, not a pure volume converter like this one." },
      { question: "How do I halve or double a recipe?", answer: "Convert each ingredient's volume to a single common unit such as millilitres, then multiply by your scaling factor — 0.5 to halve, 2 to double — and convert back to the units you prefer to measure in. Working through millilitres avoids awkward fractions of cups and tablespoons. This converter handles the unit changes, and the arithmetic in between is a simple multiplication by your chosen factor." },
    ],
    slugEs: "conversor-de-volumen-de-cocina",
    titleEs: "Conversor de Volumen de Cocina",
    shortDescriptionEs: "Convierte entre tazas, cucharadas, ml, litros y más.",
    seoTitleEs: "Conversor de Volumen de Cocina — Tazas, cda, cdta, ml, Litros",
    metaDescriptionEs:
      "Conversor de volumen de cocina gratuito. Convierte entre mililitros, litros, cucharaditas, cucharadas, tazas de EE. UU., onzas líquidas, pintas, cuartos y galones.",
    primaryKeywordEs: "conversor de volumen de cocina",
    secondaryKeywordsEs: ["tazas a ml", "cucharadas a ml", "tazas a cucharadas"],
    formulaExplanationEs:
      "La entrada se multiplica por el número fijo de mililitros de su unidad para expresar el volumen en mililitros y luego se divide entre el valor en mililitros de la unidad de destino para completar la conversión. Las unidades aquí son medidas tradicionales de EE. UU., cada una definida como un número constante de mililitros, así que encadenar por esa única base es exacto para esas definiciones. Como las razones son fijas, el conversor almacena solo un factor por unidad en lugar de una regla para cada par.",
    explanationEs:
      "Un conversor de volumen de cocina reexpresa una medida de cocina en una unidad diferente, moviéndose entre mililitros y litros en el lado métrico y cucharaditas, cucharadas, tazas, onzas líquidas, pintas, cuartos y galones de EE. UU. en el lado tradicional. Reduce su cifra a mililitros, una base conveniente, y luego escala hacia la unidad que elija, de modo que un único mecanismo maneja el ajuste de una receta hacia arriba o hacia abajo y la traducción entre medidas métricas y de EE. UU. por igual.\n\nEsto importa porque las recetas viajan a través de fronteras y sistemas de medida, y una cantidad mal traducida puede arruinar un plato. Una receta europea indica mililitros y gramos; una estadounidense indica tazas y cucharadas; un horneado rápido necesita cucharaditas. La repostería en particular es sensible a las proporciones, así que acertar con los volúmenes de líquidos es la diferencia entre una masa que funciona y una que no. Un conversor elimina las conjeturas y la tentación de calcular a ojo una unidad poco familiar.\n\nSe usa el método de convertir a través de mililitros porque cada unidad de volumen tiene una razón fija respecto al mililitro —una taza de EE. UU. son unos 236,6 ml, una cucharada unos 14,79 ml, una cucharadita unos 4,93 ml— así que pivotar por esa base mantiene los resultados consistentes y solo necesita un factor por unidad. Tenga en cuenta que estas son medidas tradicionales de EE. UU.; el RU y Australia usan tamaños de taza y cucharada ligeramente distintos, así que compruebe el origen de su receta. Cocineros caseros, reposteros, estudiantes que siguen recetas internacionales y cualquiera que reduzca a la mitad o duplique un plato recurren a un conversor de volumen de cocina para obtener resultados fiables.",
    exampleEs: {
      inputs: { value: 1, from: "cup(US)", to: "ml" },
      explanation: "1 taza de EE. UU. × 236,588 = 236,588 mililitros.",
    },
    faqsEs: [
      { question: "¿Cuántos mililitros hay en una taza de EE. UU.?", answer: "Una taza tradicional de EE. UU. son unos 236,6 mililitros. Esto difiere de la taza métrica usada en Australia y algunas recetas, que son 250 ml redondos, y del RU, que históricamente usaba una taza de 284 ml. Como la diferencia es pequeña pero real, compruebe siempre si una receta es estadounidense, métrica o imperial antes de convertir, especialmente en repostería donde las proporciones precisas de líquidos importan al resultado." },
      { question: "¿Cuántas cucharadas hay en una taza?", answer: "En medidas de EE. UU. hay 16 cucharadas en una taza, ya que una taza de EE. UU. son unos 236,6 ml y una cucharada unos 14,79 ml. También hay 3 cucharaditas en una cucharada, así que una taza contiene 48 cucharaditas. Estas relaciones limpias de números enteros hacen que las recetas de EE. UU. sean fáciles de ajustar a mano, y el conversor las reproduce exactamente hasta los decimales mostrados al convertir entre las unidades." },
      { question: "¿Son iguales las tazas de EE. UU. y del RU?", answer: "No. Este conversor usa unidades tradicionales de EE. UU., donde una taza son unos 236,6 ml y una onza líquida unos 29,57 ml. Las recetas del RU y de Australia suelen usar una taza métrica de 250 ml, y la onza líquida del RU son unos 28,41 ml. Las diferencias son pequeñas por unidad pero se acumulan en cantidades mayores, así que ajuste la base de EE. UU. del conversor a una receta estadounidense, o adapte si su receta es métrica." },
      { question: "¿Puedo convertir ingredientes secos como la harina con esto?", answer: "Esta herramienta convierte volumen a volumen, así que funciona para el volumen de cualquier ingrediente, húmedo o seco. Lo que no puede hacer es convertir un volumen en un peso, porque eso depende de la densidad del ingrediente: una taza de harina y una taza de azúcar pesan cantidades distintas. Para conversiones de volumen a gramos necesita una densidad específica del ingrediente, no un conversor de volumen puro como este." },
      { question: "¿Cómo reduzco a la mitad o duplico una receta?", answer: "Convierta el volumen de cada ingrediente a una unidad común como mililitros, luego multiplique por su factor de ajuste —0,5 para reducir a la mitad, 2 para duplicar— y vuelva a convertir a las unidades que prefiera medir. Trabajar a través de mililitros evita fracciones incómodas de tazas y cucharadas. Este conversor maneja los cambios de unidad, y la aritmética intermedia es una simple multiplicación por su factor elegido." },
    ],
    relatedCalculators: ["volume-converter", "weight-converter", "length-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "pace-speed",
    slug: "pace-speed-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Pace & Speed Converter",
    shortDescription: "Convert between running pace and speed — min/km, min/mi, km/h, mph.",
    seoTitle: "Pace & Speed Converter — min/km, min/mi, km/h, mph",
    metaDescription:
      "Free running pace and speed converter. Convert between minutes per kilometre, minutes per mile, kilometres per hour and miles per hour.",
    primaryKeyword: "pace to speed converter",
    secondaryKeywords: ["min/km to km/h", "pace to mph", "min per mile to km/h"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "5", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "min/km", options: paceUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "km/h", options: paceUnits },
    ],
    results: [{ id: "result", label: "Converted pace / speed", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert through metres per second, inverting between pace and speed as needed",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A pace and speed converter translates how fast you are moving between two different ways of expressing it: pace, the time taken to cover a set distance (minutes per kilometre or minutes per mile), and speed, the distance covered per unit of time (kilometres per hour or miles per hour). Because pace and speed are inverses of each other, this is not a plain multiply-and-divide; the converter pivots through metres per second and inverts where needed to keep every result correct.\n\nThis matters because runners, cyclists and coaches think in pace, while treadmills, apps and vehicle speedometers often show speed, and the two are easy to confuse. A runner who trains at a 5:00 min/km pace needs to know that equals 12 km/h to set a treadmill, and that a 8:00 min/mile pace is about 7.5 mph. Mixing the metric and imperial versions on top of the pace-versus-speed distinction makes mental conversion genuinely awkward, so a dedicated tool saves time and avoids mis-set workouts.\n\nThe converter reduces any input to metres per second — a pace of minutes per kilometre becomes 1000 divided by the seconds taken, a speed of km/h is divided by 3.6 — then rebuilds the target unit from that base. Values of zero or below are rejected, since a zero pace or speed has no physical meaning. Runners, triathletes, cyclists, treadmill users and coaches all rely on a pace and speed converter to plan sessions and races on whichever scale suits them.",
    example: {
      inputs: { value: 5, from: "min/km", to: "km/h" },
      explanation: "5:00 min/km → 1000 ÷ (5 × 60) = 3.33 m/s → × 3.6 = 12 km/h.",
    },
    formulaExplanation:
      "Every input is first reduced to metres per second: a min/km pace becomes 1000 divided by the value times 60, a min/mi pace uses 1609.344 in place of 1000, a km/h speed is divided by 3.6, and an mph speed is multiplied by 0.44704. The target unit is then rebuilt from that metres-per-second base, inverting back to a time-per-distance pace where required. This pivot handles the pace-to-speed reciprocal correctly; zero or negative inputs return NaN.",
    faqs: [
      { question: "How do I convert running pace to speed?", answer: "For minutes per kilometre, divide 60 by your pace in decimal minutes to get km/h. A 5:00 min/km pace is 5.0 minutes, so 60 ÷ 5 = 12 km/h. For minutes per mile, divide 60 by the pace to get mph. The relationship is reciprocal because pace is time per distance and speed is distance per time, which is why you divide rather than multiply." },
      { question: "What is a 5-minute-per-kilometre pace in km/h?", answer: "Exactly 12 km/h. A 5:00 min/km pace means each kilometre takes five minutes, and since there are twelve five-minute blocks in an hour, you cover twelve kilometres per hour. In miles per hour that is about 7.46 mph. This is a solid, sustainable pace for many recreational runners and a common target for improving 5K and 10K race times." },
      { question: "How do I convert min/mile to min/km?", answer: "Divide your minutes-per-mile pace by 1.609 to get minutes per kilometre, because a mile is 1.609 kilometres and pace is time per distance. So an 8:00 min/mile pace is about 4:58 min/km. The converter handles this by reducing both to metres per second first, which avoids the common error of multiplying instead of dividing when moving between the longer and shorter distance units." },
      { question: "Why does pace go down as speed goes up?", answer: "Because pace measures the time to cover a fixed distance, so moving faster means spending less time per kilometre or mile — a smaller pace number. Speed measures distance per time, so it rises as you move faster. The two are inverses: as one increases the other decreases. This is exactly why the converter pivots through metres per second and inverts, rather than scaling by a single factor." },
      { question: "Why are zero or negative values rejected?", answer: "A pace or speed of zero would mean no movement, and dividing by it to find the reciprocal is undefined, while a negative pace or speed has no physical meaning for running or cycling. To keep results sensible, the converter returns a blank result for any value of zero or below. Enter a positive pace or speed, and the tool will produce the equivalent in your chosen unit." },
    ],
    slugEs: "conversor-de-ritmo-y-velocidad",
    titleEs: "Conversor de Ritmo y Velocidad",
    shortDescriptionEs: "Convierte entre ritmo y velocidad de carrera — min/km, min/mi, km/h, mph.",
    seoTitleEs: "Conversor de Ritmo y Velocidad — min/km, min/mi, km/h, mph",
    metaDescriptionEs:
      "Conversor gratuito de ritmo y velocidad de carrera. Convierte entre minutos por kilómetro, minutos por milla, kilómetros por hora y millas por hora.",
    primaryKeywordEs: "conversor de ritmo a velocidad",
    secondaryKeywordsEs: ["min/km a km/h", "ritmo a mph", "min por milla a km/h"],
    formulaExplanationEs:
      "Cada entrada se reduce primero a metros por segundo: un ritmo min/km se convierte en 1000 dividido entre el valor por 60, un ritmo min/mi usa 1609,344 en lugar de 1000, una velocidad km/h se divide entre 3,6 y una velocidad mph se multiplica por 0,44704. La unidad de destino se reconstruye luego a partir de esa base de metros por segundo, invirtiendo de vuelta a un ritmo de tiempo por distancia donde se requiera. Este pivote maneja correctamente el recíproco de ritmo a velocidad; las entradas de cero o negativas devuelven NaN.",
    explanationEs:
      "Un conversor de ritmo y velocidad traduce lo rápido que se mueve entre dos formas distintas de expresarlo: el ritmo, el tiempo que se tarda en cubrir una distancia fija (minutos por kilómetro o minutos por milla), y la velocidad, la distancia cubierta por unidad de tiempo (kilómetros por hora o millas por hora). Como el ritmo y la velocidad son inversos entre sí, esto no es una simple multiplicación y división; el conversor pivota a través de metros por segundo e invierte donde es necesario para mantener cada resultado correcto.\n\nEsto importa porque corredores, ciclistas y entrenadores piensan en ritmo, mientras que las cintas de correr, las aplicaciones y los velocímetros de vehículos a menudo muestran velocidad, y las dos son fáciles de confundir. Un corredor que entrena a un ritmo de 5:00 min/km necesita saber que eso equivale a 12 km/h para ajustar la cinta, y que un ritmo de 8:00 min/milla son unos 7,5 mph. Mezclar las versiones métrica e imperial además de la distinción ritmo-velocidad hace la conversión mental genuinamente incómoda, así que una herramienta dedicada ahorra tiempo y evita entrenamientos mal ajustados.\n\nEl conversor reduce cualquier entrada a metros por segundo —un ritmo de minutos por kilómetro se convierte en 1000 dividido entre los segundos empleados, una velocidad de km/h se divide entre 3,6— y luego reconstruye la unidad de destino a partir de esa base. Los valores de cero o inferiores se rechazan, ya que un ritmo o velocidad de cero no tiene significado físico. Corredores, triatletas, ciclistas, usuarios de cinta de correr y entrenadores recurren a un conversor de ritmo y velocidad para planificar sesiones y carreras en la escala que les convenga.",
    exampleEs: {
      inputs: { value: 5, from: "min/km", to: "km/h" },
      explanation: "5:00 min/km → 1000 ÷ (5 × 60) = 3,33 m/s → × 3,6 = 12 km/h.",
    },
    faqsEs: [
      { question: "¿Cómo convierto el ritmo de carrera a velocidad?", answer: "Para minutos por kilómetro, divida 60 entre su ritmo en minutos decimales para obtener km/h. Un ritmo de 5:00 min/km son 5,0 minutos, así que 60 ÷ 5 = 12 km/h. Para minutos por milla, divida 60 entre el ritmo para obtener mph. La relación es recíproca porque el ritmo es tiempo por distancia y la velocidad es distancia por tiempo, por eso se divide en lugar de multiplicar." },
      { question: "¿Cuánto es un ritmo de 5 minutos por kilómetro en km/h?", answer: "Exactamente 12 km/h. Un ritmo de 5:00 min/km significa que cada kilómetro tarda cinco minutos, y como hay doce bloques de cinco minutos en una hora, se recorren doce kilómetros por hora. En millas por hora son unos 7,46 mph. Este es un ritmo sólido y sostenible para muchos corredores recreativos y un objetivo común para mejorar los tiempos de 5K y 10K." },
      { question: "¿Cómo convierto min/milla a min/km?", answer: "Divida su ritmo de minutos por milla entre 1,609 para obtener minutos por kilómetro, porque una milla son 1,609 kilómetros y el ritmo es tiempo por distancia. Así, un ritmo de 8:00 min/milla son unos 4:58 min/km. El conversor lo maneja reduciendo ambos a metros por segundo primero, lo que evita el error común de multiplicar en lugar de dividir al pasar entre las unidades de distancia más larga y más corta." },
      { question: "¿Por qué el ritmo baja cuando la velocidad sube?", answer: "Porque el ritmo mide el tiempo para cubrir una distancia fija, así que moverse más rápido significa gastar menos tiempo por kilómetro o milla, un número de ritmo menor. La velocidad mide distancia por tiempo, así que sube al moverse más rápido. Los dos son inversos: cuando uno aumenta el otro disminuye. Por esto exactamente el conversor pivota a través de metros por segundo e invierte, en lugar de escalar por un solo factor." },
      { question: "¿Por qué se rechazan los valores de cero o negativos?", answer: "Un ritmo o velocidad de cero significaría que no hay movimiento, y dividir entre él para hallar el recíproco es indefinido, mientras que un ritmo o velocidad negativo no tiene significado físico para correr o pedalear. Para mantener resultados sensatos, el conversor devuelve un resultado en blanco para cualquier valor de cero o inferior. Ingrese un ritmo o velocidad positivo y la herramienta producirá el equivalente en su unidad elegida." },
    ],
    relatedCalculators: ["speed-converter", "length-converter", "fuel-economy-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
