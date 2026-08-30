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
    relatedCalculators: ["speed-converter", "length-converter", "fuel-economy-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
