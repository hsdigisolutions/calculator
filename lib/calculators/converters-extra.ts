import type { CalculatorDefinition, FieldOption } from "../types";

const lengthUnits: FieldOption[] = [
  { value: "mm", label: "Millimetres (mm)" },
  { value: "cm", label: "Centimetres (cm)" },
  { value: "m", label: "Metres (m)" },
  { value: "km", label: "Kilometres (km)" },
  { value: "in", label: "Inches (in)" },
  { value: "ft", label: "Feet (ft)" },
  { value: "yd", label: "Yards (yd)" },
  { value: "mi", label: "Miles (mi)" },
];
const weightUnits: FieldOption[] = [
  { value: "mg", label: "Milligrams (mg)" },
  { value: "g", label: "Grams (g)" },
  { value: "kg", label: "Kilograms (kg)" },
  { value: "t", label: "Tonnes (t)" },
  { value: "oz", label: "Ounces (oz)" },
  { value: "lb", label: "Pounds (lb)" },
  { value: "st", label: "Stone (st)" },
];
const speedUnits: FieldOption[] = [
  { value: "m/s", label: "Metres/second (m/s)" },
  { value: "km/h", label: "Kilometres/hour (km/h)" },
  { value: "mph", label: "Miles/hour (mph)" },
  { value: "knot", label: "Knots" },
  { value: "ft/s", label: "Feet/second (ft/s)" },
];
const dataUnits: FieldOption[] = [
  { value: "bit", label: "Bits" },
  { value: "B", label: "Bytes (B)" },
  { value: "KB", label: "Kilobytes (KB)" },
  { value: "MB", label: "Megabytes (MB)" },
  { value: "GB", label: "Gigabytes (GB)" },
  { value: "TB", label: "Terabytes (TB)" },
  { value: "PB", label: "Petabytes (PB)" },
];

export const converterExtraCalculators: CalculatorDefinition[] = [
  {
    id: "length",
    slug: "length-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Length Converter",
    shortDescription: "Convert between metric and imperial length units.",
    seoTitle: "Length Converter — cm, m, inches, feet, miles",
    metaDescription:
      "Free length converter. Convert between millimetres, centimetres, metres, kilometres, inches, feet, yards and miles instantly.",
    primaryKeyword: "length converter",
    secondaryKeywords: ["cm to inches", "feet to meters", "miles to km"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "cm", options: lengthUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "in", options: lengthUnits },
    ],
    results: [{ id: "result", label: "Converted length", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to metres via known factors, then to the target unit",
    formulaSource: "International System of Units (SI) — NIST",
    sourceUrl: "https://www.nist.gov/pml/owm/metric-si/unit-conversion",
    explanation:
      "A length converter turns a distance expressed in one unit into its equivalent in another, spanning metric units like millimetres, centimetres, metres and kilometres and imperial units like inches, feet, yards and miles. It works by reducing your value to metres, the base unit, and then scaling out to whatever unit you select, so a single mechanism covers every pairing across both systems.\n\nThis matters because metric and imperial live side by side in everyday life, and mixing them causes real errors. Furniture measured in centimetres has to fit a room quoted in feet; an overseas recipe, a running route or a construction spec may arrive in the system you do not use daily. A length converter removes the guesswork and the risk of a slipped decimal that turns a sensible number into a nonsense one.\n\nThe normalise-to-metres approach is used because every length unit has a fixed, internationally defined ratio to the metre — one inch is exactly 0.0254 m, one mile is 1,609.344 m — so pivoting through that base keeps results exact rather than approximate. Students, tradespeople, travellers, engineers and online shoppers all reach for a length converter whenever a measurement shows up in the wrong unit.",
    example: {
      inputs: { value: 100, from: "cm", to: "in" },
      explanation: "100 cm = 1 m, and 1 m ÷ 0.0254 ≈ 39.3701 inches.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed ratio to the metre to get a value in metres, then divided by the target unit's ratio to reach the answer. This two-step pivot works because every length unit is defined as a constant number of metres, so chaining through the shared base is algebraically exact and avoids storing a separate factor for each of the many unit pairs.",
    faqs: [
      { question: "How many centimetres are in an inch?", answer: "Exactly 2.54 centimetres, by international definition since 1959. This is not a rounded figure but an exact one, which is why inch-to-centimetre conversions are precise. It follows that one foot is 30.48 cm and one metre is about 39.37 inches. Because the definition is exact, any rounding you see comes only from the number of decimal places displayed, not the underlying factor." },
      { question: "How do I convert miles to kilometres?", answer: "Multiply the number of miles by 1.609344 to get kilometres. So 5 miles is about 8.05 km, and a 26.2-mile marathon is roughly 42.2 km. To go the other way, divide kilometres by 1.609344, or multiply by about 0.6214. The factor is exact because a mile is defined as exactly 1,609.344 metres, or 1,760 yards." },
      { question: "How many feet are in a metre?", answer: "One metre is about 3.2808 feet, since a foot is defined as exactly 0.3048 metres. That means 10 metres is roughly 32.81 feet. For a quick mental estimate, a metre is a little over three feet three inches. The exact route is to divide the metre value by 0.3048, which the converter does automatically to the displayed precision." },
      { question: "Are the conversions exact?", answer: "Yes. The converter uses the internationally defined factors, all of which tie back to the metre, so results are accurate to the decimals shown. Where you see a rounded figure such as 39.3701 inches, the rounding is purely for display; the calculation itself carries full precision. Metric-to-imperial factors like the inch and mile are exact definitions rather than measured approximations." },
      { question: "What is the difference between metric and imperial length units?", answer: "Metric units — millimetre, centimetre, metre, kilometre — scale in powers of ten, making conversions within the system simple shifts of the decimal point. Imperial units — inch, foot, yard, mile — use varied factors of 12, 3 and 1,760. Most of the world uses metric, while the US and, informally, the UK retain imperial for some purposes, which is exactly why a converter between the two is so useful." },
    ],
    relatedCalculators: ["weight-converter", "temperature-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "weight",
    slug: "weight-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Weight Converter",
    shortDescription: "Convert between kg, lb, oz and more.",
    seoTitle: "Weight Converter — kg, lb, oz, grams, stone",
    metaDescription:
      "Free weight converter. Convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stone instantly.",
    primaryKeyword: "weight converter",
    secondaryKeywords: ["kg to lbs", "grams to ounces", "pounds to kg"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "70", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "kg", options: weightUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "lb", options: weightUnits },
    ],
    results: [{ id: "result", label: "Converted weight", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to kilograms via known factors, then to the target unit",
    formulaSource: "International System of Units (SI) — NIST",
    sourceUrl: "https://www.nist.gov/pml/owm/metric-si/unit-conversion",
    explanation:
      "A weight converter changes a mass from one unit into another, covering metric units like milligrams, grams, kilograms and tonnes alongside imperial and customary units like ounces, pounds and stone. It reduces whatever you enter to kilograms, the base unit, and then scales out to your chosen unit, so one consistent route handles every combination across the two measurement systems.\n\nThis matters because mass is quoted differently depending on where you are and what you are doing. Body weight appears in kilograms, pounds or stone depending on the country; recipes mix grams and ounces; shipping and freight juggle kilograms, pounds and tonnes. A weight converter settles those differences at once and prevents the kind of slip that turns a parcel's cost or a dose calculation into an expensive mistake.\n\nThe normalise-to-kilograms method is used because every mass unit has a fixed ratio to the kilogram — one pound is exactly 0.45359237 kg, one ounce is a sixteenth of a pound — so pivoting through that base keeps every result exact. Home cooks, travellers, gym-goers tracking progress, warehouse and logistics staff, and healthcare workers all rely on a weight converter whenever a figure lands in an unfamiliar unit.",
    example: {
      inputs: { value: 70, from: "kg", to: "lb" },
      explanation: "70 kg ÷ 0.45359237 ≈ 154.3236 lb.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed ratio to the kilogram to express it in kilograms, then divided by the target unit's ratio to finish the conversion. Because every mass unit is defined as a constant number of kilograms, chaining through this single base is exact and means the converter stores just one factor per unit rather than a factor for every possible pairing.",
    faqs: [
      { question: "How many pounds are in a kilogram?", answer: "About 2.20462 pounds per kilogram. So 70 kg is roughly 154.32 lb, and 100 kg is about 220.46 lb. To reverse it, multiply pounds by 0.453592 to get kilograms. The factor comes from the exact definition that one pound equals 0.45359237 kilograms, so the pounds-per-kilogram figure is simply the reciprocal of that value." },
      { question: "How do I convert kilograms to pounds?", answer: "Multiply the kilogram figure by 2.20462, or equivalently divide by 0.453592. For example, 5 kg is about 11.02 lb. For a rough mental estimate, double the kilograms and add about ten percent. The precise route the converter uses pivots through the exact pound definition, so the displayed answer is accurate to the decimals shown rather than an approximation." },
      { question: "What is a stone in weight?", answer: "A stone equals 14 pounds, or about 6.35 kilograms, and is still widely used for body weight in the UK and Ireland. So 70 kg is roughly 11 stone. Stone is normally expressed with a remainder in pounds, such as 11 stone 0 pounds, rather than as a decimal. The converter reports the decimal stone value, which you can split into whole stone and pounds." },
      { question: "Is weight the same as mass?", answer: "Strictly, mass measures the amount of matter while weight is the force gravity exerts on it, but in everyday use the terms are interchangeable. The units here — grams, kilograms, pounds and so on — all measure mass. Because conversions between them are ratios, and gravity is effectively constant across Earth's surface, the distinction does not affect the numbers this converter produces." },
      { question: "How many grams are in an ounce?", answer: "One ounce is about 28.3495 grams, since an ounce is defined as one-sixteenth of a pound. So four ounces is roughly 113.4 grams, a common figure in cooking. This is the avoirdupois ounce used for everyday weight; the troy ounce used for precious metals is heavier at about 31.10 grams, so do not use this converter for gold or silver pricing." },
    ],
    relatedCalculators: ["length-converter", "temperature-converter", "data-storage-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "speed",
    slug: "speed-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Speed Converter",
    shortDescription: "Convert between mph, km/h, m/s and knots.",
    seoTitle: "Speed Converter — mph, km/h, m/s, knots",
    metaDescription:
      "Free speed converter. Convert between metres per second, kilometres per hour, miles per hour, knots and feet per second.",
    primaryKeyword: "speed converter",
    secondaryKeywords: ["mph to kmh", "km/h to mph", "knots to mph"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "km/h", options: speedUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "mph", options: speedUnits },
    ],
    results: [{ id: "result", label: "Converted speed", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to metres per second via known factors, then to the target unit",
    formulaSource: "International System of Units (SI) — NIST",
    sourceUrl: "https://www.nist.gov/pml/owm/metric-si/unit-conversion",
    explanation:
      "A speed converter restates a rate of travel in a different unit, moving between metres per second, kilometres per hour, miles per hour, knots and feet per second. It reduces your figure to metres per second, the SI base for speed, then scales out to the unit you want, so a single pivot handles road speeds, wind speeds, running paces and vessel speeds alike.\n\nThis matters because speed is quoted in different units depending on the setting, and the same journey can look faster or slower purely from the unit. A car's speedometer may read km/h where the limit is posted in mph; a weather forecast gives wind in knots or metres per second; aviation and sailing run on knots entirely. A speed converter reconciles them instantly so comparisons are like for like.\n\nThe convert-through-metres-per-second method is used because each unit has a fixed ratio to that base — 1 km/h is exactly 1000/3600 m/s, a knot is one nautical mile per hour at 0.514444 m/s — so pivoting through it keeps results exact. Drivers crossing borders, pilots and sailors, meteorologists, athletes checking pace and physics students all use a speed converter whenever a rate arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 100, from: "km/h", to: "mph" },
      explanation: "100 km/h ≈ 27.78 m/s ≈ 62.14 mph.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed ratio to metres per second, then divided by the target unit's ratio to land on the answer. This works because every speed unit is a distance unit over a time unit, and both of those reduce to constants against the metre and the second, so their combined ratio to m/s is fixed and pivoting through that one base stays exact.",
    faqs: [
      { question: "How do I convert km/h to mph?", answer: "Multiply the km/h figure by about 0.6214 to get mph. So 100 km/h is roughly 62.1 mph, and a 50 km/h urban limit is about 31 mph. To reverse it, multiply mph by 1.60934. The factor is the ratio of a kilometre to a mile, since both speeds share the per-hour time unit, so only the distance part needs converting." },
      { question: "What is a knot?", answer: "A knot is one nautical mile per hour, used in aviation and marine navigation because a nautical mile corresponds to one minute of latitude, which makes chart work simpler. One knot is about 1.151 mph or 1.852 km/h. So a ship at 20 knots is doing roughly 23 mph. The unit's name comes from the knotted line sailors once used to gauge a vessel's speed." },
      { question: "How fast is 100 km/h in mph?", answer: "About 62.14 mph, which passes through roughly 27.78 metres per second. This is a common motorway or freeway speed. A quick mental shortcut is to multiply km/h by 0.6, giving 60 as a slight underestimate, then nudge up. The converter carries the full 0.62137 factor, so its answer is precise to the decimals displayed rather than the rough estimate." },
      { question: "Why convert through metres per second?", answer: "Metres per second is the SI base unit for speed, so every other unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, and it keeps results exact. It is also the unit physics equations expect, which is why scientific work quotes speed in m/s." },
      { question: "What is a good running pace in these units?", answer: "Running is usually tracked as pace, the time per kilometre or mile, but it converts directly to speed. A brisk 10 km/h equals about 6.2 mph, or a six-minute kilometre. Elite marathon speed is around 20 km/h, roughly 12.4 mph. To turn a speed into pace, divide 60 by the km/h figure to get minutes per kilometre, which many runners find easier to judge." },
    ],
    relatedCalculators: ["length-converter", "temperature-converter", "weight-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "data-storage",
    slug: "data-storage-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Data Storage Converter",
    shortDescription: "Convert between bytes, KB, MB, GB and TB.",
    seoTitle: "Data Storage Converter — Bytes, KB, MB, GB, TB",
    metaDescription:
      "Free data storage converter. Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and petabytes.",
    primaryKeyword: "data storage converter",
    secondaryKeywords: ["mb to gb", "bytes to megabytes", "gb to tb"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1024", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "MB", options: dataUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "GB", options: dataUnits },
    ],
    results: [{ id: "result", label: "Converted size", format: "number", decimals: 6, isPrimary: true }],
    formula: "Binary units: 1 KB = 1024 B, 1 MB = 1024 KB, and so on (1 byte = 8 bits)",
    formulaSource: "International System of Units (SI) — NIST",
    sourceUrl: "https://www.nist.gov/pml/owm/metric-si/unit-conversion",
    explanation:
      "A data storage converter restates a quantity of digital information in a different unit, moving between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and petabytes. It reduces your figure to a common base and scales out to the unit you choose, using binary (1024-based) steps where each rung of the ladder is 1,024 times the one below and a byte is eight bits.\n\nThis matters because storage figures drive real decisions and the units are easy to muddle. Whether a video library fits on a drive, how long a file takes to download, or whether a backup will complete all hinge on comparing sizes in a consistent unit. A data storage converter makes those comparisons reliable, and the binary basis reflects how operating systems actually report file and disk sizes.\n\nThe binary method is used because computer memory is organised in powers of two, so 1,024 rather than 1,000 is the natural step between units. Drive manufacturers, by contrast, often use decimal (1000-based) units, which is why a drive sold as 1 TB shows less usable space in your operating system. IT staff, developers, students and anyone managing files or bandwidth reach for a data storage converter whenever sizes appear in mismatched units.",
    example: {
      inputs: { value: 1024, from: "MB", to: "GB" },
      explanation: "1024 MB ÷ 1024 = 1 GB (binary).",
    },
    formulaExplanation:
      "Each unit is defined as a fixed number of bytes — a power of 1,024 in the binary convention, with a byte equal to 8 bits. The input is reduced to bytes by multiplying by its unit's byte value, then divided by the target unit's byte value. This works because computer memory is addressed in powers of two, so 1,024 is the natural multiplier and every unit is an exact byte constant.",
    faqs: [
      { question: "Why does my hard drive show less space than advertised?", answer: "Manufacturers measure capacity in decimal units, where 1 TB equals 1,000,000,000,000 bytes, while operating systems typically report in binary units, where 1 TB is 1,099,511,627,776 bytes. Dividing the decimal capacity by the larger binary unit makes the reported figure look smaller — about seven percent less at the terabyte scale — even though no space is actually missing. Formatting overhead can reduce usable space slightly further." },
      { question: "How many megabytes are in a gigabyte?", answer: "In the binary convention this converter uses, there are 1,024 megabytes in a gigabyte, matching how operating systems count. In the decimal convention favoured by storage marketing, it is 1,000. The gap compounds at each level, so the difference between binary and decimal grows larger for terabytes and petabytes. This calculator uses the 1,024 step throughout for consistency with reported file sizes." },
      { question: "How many bits are in a byte?", answer: "Eight bits make one byte, which is why file sizes in bytes and connection speeds in bits differ by a factor of eight. A byte is the smallest unit that typically stores a single character, while a bit is a single binary digit. Network speeds are usually quoted in bits per second, so an 80 Mbps line transfers roughly 10 megabytes per second before overhead." },
      { question: "What is the difference between binary and decimal storage units?", answer: "Binary units step by 1,024 (2 to the tenth power) and reflect how memory is physically addressed; decimal units step by 1,000 and follow the standard metric prefixes. Strictly, the binary units should be labelled kibibyte, mebibyte and so on, but common usage keeps KB, MB and GB for both. This converter applies the 1,024 binary step, which matches what most operating systems display." },
      { question: "How do I convert MB to GB?", answer: "Divide the megabyte figure by 1,024 to get gigabytes in binary units. So 1,024 MB is exactly 1 GB, and 512 MB is 0.5 GB. To go the other way, multiply gigabytes by 1,024. If a source is using decimal units, the divisor would be 1,000 instead, but for file and disk sizes shown by your operating system, 1,024 is the correct step." },
    ],
    relatedCalculators: ["length-converter", "weight-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
