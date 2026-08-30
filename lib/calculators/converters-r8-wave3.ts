import type { CalculatorDefinition, FieldOption } from "../types";

/* Wave 3 Round 8 — 10 additional unit Converters.
 * Shared FieldOption arrays declared once, reused across definitions.
 * id === engine key in lib/engines/converters-r8-wave3.ts.
 * NOTE: ids carry a "-unit" suffix to stay globally unique against the
 * physics engines that already use `density`, `acceleration`, `force`. */

const NIST_SOURCE = "International System of Units (SI) — NIST";
const NIST_URL = "https://www.nist.gov/pml/owm/metric-si/unit-conversion";

const accelerationUnits: FieldOption[] = [
  { value: "m/s²", label: "Metres per second squared (m/s²)" },
  { value: "ft/s²", label: "Feet per second squared (ft/s²)" },
  { value: "g", label: "Standard gravity (g)" },
  { value: "gal", label: "Gal (cm/s², galileo)" },
];

const densityUnits: FieldOption[] = [
  { value: "kg/m³", label: "Kilograms per cubic metre (kg/m³)" },
  { value: "g/cm³", label: "Grams per cubic centimetre (g/cm³)" },
  { value: "g/mL", label: "Grams per millilitre (g/mL)" },
  { value: "lb/ft³", label: "Pounds per cubic foot (lb/ft³)" },
  { value: "lb/in³", label: "Pounds per cubic inch (lb/in³)" },
];

const flowRateUnits: FieldOption[] = [
  { value: "L/s", label: "Litres per second (L/s)" },
  { value: "L/min", label: "Litres per minute (L/min)" },
  { value: "m³/h", label: "Cubic metres per hour (m³/h)" },
  { value: "gal/min", label: "US gallons per minute (gal/min)" },
  { value: "ft³/s", label: "Cubic feet per second (ft³/s)" },
];

const illuminanceUnits: FieldOption[] = [
  { value: "lux", label: "Lux (lx)" },
  { value: "foot-candle", label: "Foot-candles (fc)" },
  { value: "phot", label: "Phot (ph)" },
];

const magneticFieldUnits: FieldOption[] = [
  { value: "T", label: "Tesla (T)" },
  { value: "mT", label: "Millitesla (mT)" },
  { value: "µT", label: "Microtesla (µT)" },
  { value: "gauss", label: "Gauss (G)" },
];

const radiationDoseUnits: FieldOption[] = [
  { value: "Sv", label: "Sievert (Sv)" },
  { value: "mSv", label: "Millisievert (mSv)" },
  { value: "µSv", label: "Microsievert (µSv)" },
  { value: "rem", label: "Rem" },
];

const cookingWeightUnits: FieldOption[] = [
  { value: "g", label: "Grams (g)" },
  { value: "kg", label: "Kilograms (kg)" },
  { value: "mg", label: "Milligrams (mg)" },
  { value: "oz", label: "Ounces (oz)" },
  { value: "lb", label: "Pounds (lb)" },
];

const typographyUnits: FieldOption[] = [
  { value: "pt", label: "Points (pt)" },
  { value: "px", label: "Pixels (px, at 96 DPI)" },
  { value: "pica", label: "Picas (pc)" },
  { value: "inch", label: "Inches (in)" },
  { value: "mm", label: "Millimetres (mm)" },
  { value: "cm", label: "Centimetres (cm)" },
];

const bloodSugarUnits: FieldOption[] = [
  { value: "mg/dL", label: "Milligrams per decilitre (mg/dL)" },
  { value: "mmol/L", label: "Millimoles per litre (mmol/L)" },
];

const shoeSizeUnits: FieldOption[] = [
  { value: "US", label: "US (men's)" },
  { value: "UK", label: "UK (men's)" },
  { value: "EU", label: "EU (men's)" },
];

export const convertersR8Calculators: CalculatorDefinition[] = [
  {
    id: "acceleration-unit",
    slug: "acceleration-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Acceleration Converter",
    shortDescription: "Convert between m/s², ft/s², g and gal.",
    seoTitle: "Acceleration Converter — m/s², ft/s², g, Gal",
    metaDescription:
      "Free acceleration converter. Convert between metres per second squared, feet per second squared, standard gravity (g) and gal instantly and accurately.",
    primaryKeyword: "acceleration converter",
    secondaryKeywords: ["m/s2 to g", "g to m/s2", "ft/s2 to m/s2"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "9.80665", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "g", options: accelerationUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "m/s²", options: accelerationUnits },
    ],
    results: [{ id: "result", label: "Converted acceleration", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to metres per second squared via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "An acceleration converter restates a rate of change of velocity in a different unit, moving between metres per second squared and feet per second squared, the g-force multiple of standard gravity, and the gal used in geophysics. It reduces whatever you enter to metres per second squared, the SI unit for acceleration, and then scales out to the unit you want, so one mechanism covers vehicle performance figures, ride and roller-coaster forces, seismic and gravity surveys and physics coursework alike.\n\nThis matters because acceleration is quoted in different units depending on the field. Engineers and physicists use metres per second squared; American engineering often uses feet per second squared; the ride, aerospace and automotive worlds describe forces as multiples of g, where one g is the pull of Earth's gravity; geophysicists mapping tiny variations in gravity use the gal and its thousandth, the milligal. Comparing a car's cornering grip in g against a sensor spec in m/s², or a survey reading in gal against a textbook value, is impossible until every figure sits in one unit.\n\nThe convert-through-metres-per-second-squared method is used because every acceleration unit has a fixed, defined ratio to that base — one g is exactly 9.80665 m/s², one foot per second squared is 0.3048 m/s², and one gal is exactly 0.01 m/s² — so pivoting through it keeps results exact and needs only one factor per unit. Engineers, physicists, ride designers, geophysicists and students all reach for an acceleration converter whenever a figure arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 1, from: "g", to: "m/s²" },
      explanation: "1 g × 9.80665 = 9.80665 m/s².",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of metres per second squared to express the acceleration in that base, then divided by the target unit's value to finish the conversion. Because g is defined as exactly 9.80665 m/s², a foot per second squared as 0.3048 m/s², and a gal as one centimetre per second squared, every unit has a constant ratio to the SI base, so chaining through it is exact and stores just one factor per unit.",
    faqs: [
      { question: "How many m/s² is 1 g?", answer: "Standard gravity, written g, is defined as exactly 9.80665 metres per second squared, the conventional acceleration a free-falling object experiences at Earth's surface. So a rider pulling 3 g feels about 29.4 m/s². The value is a fixed international standard rather than a local measurement, which is why the converter uses it precisely; actual gravity varies slightly with latitude and altitude." },
      { question: "What is a gal in acceleration?", answer: "A gal, named after Galileo, is a unit from the centimetre-gram-second system equal to one centimetre per second squared, or exactly 0.01 metres per second squared. Geophysicists use it, and its thousandth the milligal, to map tiny variations in Earth's gravitational field caused by different rock densities. So one gal is about a thousandth of standard gravity, a convenient size for survey work." },
      { question: "How do I convert ft/s² to m/s²?", answer: "Multiply the feet-per-second-squared figure by 0.3048, since one foot is exactly 0.3048 metres. So 32.174 ft/s², the customary value of gravity, becomes about 9.807 m/s². To reverse it, divide the metric figure by 0.3048. The factor is exact because the international foot is defined from the metre, so only display rounding appears in the answer." },
      { question: "What does g-force actually measure?", answer: "G-force expresses acceleration as a multiple of standard gravity, so a value of 2 g means twice the acceleration of free fall, about 19.6 m/s². It is popular because people intuitively feel forces relative to their own weight. Pilots, astronauts, race drivers and roller-coaster designers all use g to describe the loads a body experiences during rapid changes in speed or direction." },
      { question: "Why convert acceleration through m/s²?", answer: "The metre per second squared is the SI unit for acceleration, so every other acceleration unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps every result exact, and matches the unit that physics equations such as Newton's second law expect for calculations." },
    ],
    relatedCalculators: ["length-converter", "speed-converter", "pressure-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "density-unit",
    slug: "density-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Density Converter",
    shortDescription: "Convert between kg/m³, g/cm³, lb/ft³ and more.",
    seoTitle: "Density Converter — kg/m³, g/cm³, lb/ft³, lb/in³",
    metaDescription:
      "Free density converter. Convert between kilograms per cubic metre, grams per cubic centimetre, grams per millilitre, pounds per cubic foot and per cubic inch.",
    primaryKeyword: "density converter",
    secondaryKeywords: ["kg/m3 to g/cm3", "g/cm3 to kg/m3", "lb/ft3 to kg/m3"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "g/cm³", options: densityUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "kg/m³", options: densityUnits },
    ],
    results: [{ id: "result", label: "Converted density", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to kilograms per cubic metre via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A density converter restates how much mass sits in a given volume in a different unit, moving between kilograms per cubic metre and grams per cubic centimetre on the metric side, the closely related grams per millilitre, and pounds per cubic foot and per cubic inch on the customary side. It reduces your figure to kilograms per cubic metre, the SI unit for density, then scales out to the unit you choose, so one mechanism covers material data sheets, fluid properties, shipping weights and laboratory work alike.\n\nThis matters because density is quoted in several coexisting units and the numbers look wildly different for the same substance. A materials table might list steel as 7.85 g/cm³, a shipping estimate as 490 lb/ft³ and an engineering model as 7,850 kg/m³ — all identical densities in different clothing. Comparing a plastic's data sheet against a metal's, or checking whether a material will float, is only possible once every value shares one unit.\n\nThe convert-through-kilograms-per-cubic-metre method is used because every density unit has a fixed ratio to that base — one gram per cubic centimetre is exactly 1,000 kg/m³, one pound per cubic foot is about 16.02 kg/m³ — so pivoting through it keeps results exact and needs only one factor per unit. Note that grams per millilitre equals grams per cubic centimetre exactly, since a millilitre is a cubic centimetre. Engineers, chemists, machinists, shippers and students all rely on a density converter whenever a value lands in an unfamiliar unit.",
    example: {
      inputs: { value: 1, from: "g/cm³", to: "kg/m³" },
      explanation: "1 g/cm³ × 1000 = 1000 kg/m³ (the density of water).",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of kilograms per cubic metre to express the density in that base, then divided by the target unit's value to complete the conversion. Because density is mass divided by volume, and both mass and volume units reduce to constants against the kilogram and the cubic metre, every density unit has a fixed ratio to the SI base, so chaining through it stays exact for all unit pairs with one stored factor each.",
    faqs: [
      { question: "How do I convert g/cm³ to kg/m³?", answer: "Multiply the grams-per-cubic-centimetre figure by 1,000, since a gram is a thousandth of a kilogram but a cubic centimetre is a millionth of a cubic metre, giving a net factor of one thousand. So water at 1 g/cm³ is 1,000 kg/m³. To reverse it, divide by 1,000. This clean factor of a thousand makes the two units easy to switch between mentally." },
      { question: "Is g/mL the same as g/cm³?", answer: "Yes, exactly. One millilitre is defined as one cubic centimetre, so grams per millilitre and grams per cubic centimetre are numerically identical for any substance. Chemists often write g/mL for liquids and g/cm³ for solids, but the values are interchangeable. This converter treats them as equal, so converting between them always returns the same number you entered." },
      { question: "What is the density of water?", answer: "Pure water at about 4°C has a density very close to 1 gram per cubic centimetre, which equals 1,000 kilograms per cubic metre or about 62.4 pounds per cubic foot. This tidy value is why water is the reference for specific gravity: a material with density above 1 g/cm³ sinks in water, while one below it floats. Density changes slightly with temperature and dissolved substances." },
      { question: "How do I convert lb/ft³ to kg/m³?", answer: "Multiply the pounds-per-cubic-foot figure by about 16.02 to get kilograms per cubic metre. So a material at 50 lb/ft³ is about 801 kg/m³. To reverse it, divide by 16.02. The factor combines the pound-to-kilogram and cubic-foot-to-cubic-metre conversions, and the converter carries the full precision so the displayed answer is accurate to the decimals shown." },
      { question: "Why convert density through kg/m³?", answer: "The kilogram per cubic metre is the SI unit for density, so every other density unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that engineering and fluid-dynamics equations expect, which makes cross-checking calculations straightforward." },
    ],
    relatedCalculators: ["weight-converter", "volume-converter", "pressure-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "flow-rate-unit",
    slug: "flow-rate-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Flow Rate Converter",
    shortDescription: "Convert between L/s, L/min, m³/h, gal/min and ft³/s.",
    seoTitle: "Flow Rate Converter — L/s, L/min, m³/h, GPM, ft³/s",
    metaDescription:
      "Free volumetric flow rate converter. Convert between litres per second and minute, cubic metres per hour, US gallons per minute and cubic feet per second.",
    primaryKeyword: "flow rate converter",
    secondaryKeywords: ["gpm to l/min", "l/s to m3/h", "cfs to l/s"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "L/s", options: flowRateUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "gal/min", options: flowRateUnits },
    ],
    results: [{ id: "result", label: "Converted flow rate", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to litres per second via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A flow rate converter restates a volumetric flow — how much fluid passes a point per unit of time — in a different unit, moving between litres per second and per minute, cubic metres per hour, US gallons per minute and cubic feet per second. It reduces your figure to litres per second, used here as the common base, then scales out to the unit you choose, so one mechanism covers pumps, plumbing, irrigation, HVAC ducting and river or channel flows alike.\n\nThis matters because flow rate is expressed in different units across trades and regions, and mixing them can badly mis-size a system. Plumbers and pump specifications in the United States use gallons per minute; European and scientific work uses litres per second or cubic metres per hour; ventilation and gas flows sometimes use cubic feet per second; drip irrigation is often litres per minute. Choosing a pump or pipe from a spec in the wrong unit can leave a system starved or wastefully oversized.\n\nThe convert-through-litres-per-second method is used because every flow unit has a fixed ratio to that base — one litre per minute is one-sixtieth of a litre per second, one US gallon per minute is about 0.0631 L/s, one cubic metre per hour is about 0.278 L/s — so pivoting through it keeps results consistent and needs only one factor per unit. Plumbers, mechanical and process engineers, irrigation designers and HVAC installers all rely on a flow rate converter whenever a specification arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 1, from: "L/s", to: "gal/min" },
      explanation: "1 L/s ÷ 0.0630902 ≈ 15.85 US gallons per minute.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of litres per second to express the flow in that base, then divided by the target unit's value to complete the conversion. Because a volumetric flow is a volume divided by a time, and both reduce to constants against the litre and the second, every flow unit has a fixed ratio to litres per second, so chaining through that single base is exact for every pairing with just one stored factor per unit.",
    faqs: [
      { question: "How do I convert GPM to litres per minute?", answer: "Multiply US gallons per minute by about 3.785 to get litres per minute, since one US gallon is about 3.785 litres. So 10 GPM is roughly 37.85 L/min. To reverse it, divide litres per minute by 3.785. Note that the imperial UK gallon is larger, about 4.546 litres, so a UK-sourced GPM figure would use that factor instead; this converter uses US gallons." },
      { question: "What is the difference between L/s and m³/h?", answer: "Litres per second and cubic metres per hour both measure volumetric flow but on very different time and size scales. One litre per second equals 3.6 cubic metres per hour, because there are 1,000 litres in a cubic metre and 3,600 seconds in an hour. So a pump rated 5 L/s moves 18 m³/h. Larger industrial and water-supply flows are often quoted in m³/h for convenience." },
      { question: "How do I convert cubic feet per second to litres per second?", answer: "Multiply cubic feet per second by about 28.32 to get litres per second, since one cubic foot is about 28.32 litres. So a stream at 2 ft³/s flows at about 56.6 L/s. Cubic feet per second, often written cfs, is common in US hydrology for rivers and channels, while litres per second suits smaller engineered systems and scientific measurement." },
      { question: "Does this use US or imperial gallons?", answer: "This converter uses US gallons, where one gallon is about 3.785 litres and one US gallon per minute is about 0.0631 litres per second. The UK imperial gallon is larger at about 4.546 litres, so an imperial GPM figure would convert to a proportionally higher metric flow. If your specification is British, adjust for the larger gallon before comparing, or the result will read low." },
      { question: "Why convert flow rate through litres per second?", answer: "Litres per second is a convenient, coherent base close to the SI cubic-metre-per-second unit, so every other flow unit has a fixed ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and sits at a practical scale for the pump, plumbing and irrigation flows people most often need to compare." },
    ],
    relatedCalculators: ["volume-converter", "cooking-volume-converter", "time-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "illuminance-unit",
    slug: "illuminance-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Illuminance Converter",
    shortDescription: "Convert between lux, foot-candles and phot.",
    seoTitle: "Illuminance Converter — Lux, Foot-candles, Phot",
    metaDescription:
      "Free illuminance converter. Convert between lux, foot-candles and phot instantly and accurately for lighting design and photography.",
    primaryKeyword: "illuminance converter",
    secondaryKeywords: ["lux to foot candles", "foot candles to lux", "lux to phot"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "500", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "lux", options: illuminanceUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "foot-candle", options: illuminanceUnits },
    ],
    results: [{ id: "result", label: "Converted illuminance", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to lux via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "An illuminance converter restates how much light falls on a surface in a different unit, moving between lux, foot-candles and the older phot. It reduces your figure to lux, the SI unit for illuminance of one lumen per square metre, then scales out to the unit you choose, so one mechanism covers lighting design, photography, workplace-safety standards and horticulture alike.\n\nThis matters because illuminance is quoted in different units on either side of the Atlantic and across disciplines. Lighting engineers and most of the world specify workspace and street lighting in lux; North American lighting practice and much photographic literature use foot-candles, the illuminance of one lumen per square foot; older scientific texts occasionally use the phot from the centimetre-gram-second system. A workplace standard given in lux and a fixture rated in foot-candles cannot be compared until both share one unit.\n\nThe convert-through-lux method is used because every illuminance unit has a fixed ratio to the lux — one foot-candle is about 10.764 lux, matching the number of square feet in a square metre, and one phot is exactly 10,000 lux, one lumen per square centimetre — so pivoting through it keeps results exact and needs only one factor per unit. Lighting designers, architects, photographers, safety officers and growers all rely on an illuminance converter whenever a light-level figure arrives in an unfamiliar unit, so they can meet standards and set exposures correctly.",
    example: {
      inputs: { value: 1, from: "foot-candle", to: "lux" },
      explanation: "1 foot-candle × 10.7639 = 10.7639 lux.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of lux to express the illuminance in lux, then divided by the target unit's lux value to complete the conversion. Because a foot-candle is one lumen per square foot and a lux is one lumen per square metre, their ratio is exactly the number of square feet in a square metre, about 10.764; the phot is one lumen per square centimetre, exactly 10,000 lux, so every unit has a fixed ratio.",
    faqs: [
      { question: "How do I convert foot-candles to lux?", answer: "Multiply the foot-candle figure by about 10.764 to get lux, because a lux is one lumen spread over a square metre while a foot-candle is one lumen over a square foot, and a square metre holds about 10.764 square feet. So 50 foot-candles is about 538 lux. To reverse it, divide lux by 10.764. The factor is geometric, coming purely from the area conversion." },
      { question: "What is a good lux level for an office?", answer: "General office work typically calls for around 300 to 500 lux, while detailed tasks such as drafting or fine assembly may need 750 to 1,000 lux. Corridors and storage areas can be much lower, around 100 lux. Expressed in foot-candles, 500 lux is about 46 foot-candles. Lighting standards vary by country and task, so check the relevant local code, but these ranges are widely used guidance." },
      { question: "What is a phot?", answer: "A phot is a unit of illuminance from the older centimetre-gram-second system, equal to one lumen per square centimetre. Because a square centimetre is tiny compared with a square metre, one phot is a very intense 10,000 lux. It rarely appears in modern practice but shows up in older scientific literature, so the converter includes it to translate legacy figures into familiar lux or foot-candles." },
      { question: "Is illuminance the same as brightness?", answer: "Not quite. Illuminance, measured in lux or foot-candles, is the amount of light landing on a surface. Brightness as a perception relates more closely to luminance, the light reflected or emitted toward the eye from a surface, measured in candelas per square metre. This converter handles illuminance only, which is what light meters read and what workplace and photographic standards specify." },
      { question: "Why convert illuminance through lux?", answer: "The lux is the SI unit for illuminance, one lumen per square metre, so every other illuminance unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that international lighting standards and photometry equations use for specifying light levels." },
    ],
    relatedCalculators: ["energy-converter", "power-converter", "length-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "magnetic-field-unit",
    slug: "magnetic-field-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Magnetic Field Converter",
    shortDescription: "Convert between tesla, millitesla, microtesla and gauss.",
    seoTitle: "Magnetic Field Converter — Tesla, mT, µT, Gauss",
    metaDescription:
      "Free magnetic flux density converter. Convert between tesla, millitesla, microtesla and gauss instantly and accurately.",
    primaryKeyword: "magnetic field converter",
    secondaryKeywords: ["tesla to gauss", "gauss to tesla", "mt to gauss"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "T", options: magneticFieldUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "gauss", options: magneticFieldUnits },
    ],
    results: [{ id: "result", label: "Converted magnetic field", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to tesla via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A magnetic field converter restates a magnetic flux density in a different unit, moving between the SI tesla and its millitesla and microtesla subdivisions, and the older gauss from the centimetre-gram-second system. It reduces your figure to tesla, the SI unit for magnetic flux density, then scales out to the unit you choose, so one mechanism covers MRI scanner ratings, magnet specifications, Earth's field measurements and physics coursework alike.\n\nThis matters because magnetism is described in two coexisting systems whose numbers differ by a factor of ten thousand. Medical and engineering work usually uses tesla — an MRI scanner is quoted as 1.5 or 3 tesla — while much laboratory equipment, older physics texts and consumer magnet specifications use gauss. Earth's magnetic field is a small fraction of a gauss, more naturally written in microtesla. Reading a magnet rated in gauss against a scanner rated in tesla, or a compass sensor spec in microtesla, is only possible once every figure shares one unit.\n\nThe convert-through-tesla method is used because every field unit has a fixed ratio to the tesla — one gauss is exactly one ten-thousandth of a tesla, one millitesla is a thousandth, one microtesla a millionth — so pivoting through it keeps results exact and needs only one factor per unit. Physicists, electrical and biomedical engineers, MRI technicians and students all rely on a magnetic field converter whenever a flux-density figure arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 1, from: "T", to: "gauss" },
      explanation: "1 tesla × (1 ÷ 0.0001) = 10,000 gauss.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of tesla to express the field in tesla, then divided by the target unit's tesla value to complete the conversion. The metric prefixes milli and micro are exact powers of ten below the tesla, and one gauss is defined as exactly 1e-4 tesla, so every unit has a fixed ratio to the SI base, making the pivot exact for every pairing with one stored factor per unit.",
    faqs: [
      { question: "How do I convert tesla to gauss?", answer: "Multiply the tesla figure by 10,000, since one tesla equals exactly ten thousand gauss. So a 1.5 tesla MRI scanner produces a field of 15,000 gauss. To reverse it, divide gauss by 10,000. The relationship is exact by definition, as the gauss is the centimetre-gram-second counterpart to the SI tesla, so only display rounding appears in the converted result." },
      { question: "How strong is Earth's magnetic field?", answer: "Earth's magnetic field at the surface is roughly 25 to 65 microtesla, or about 0.25 to 0.65 gauss, depending on location. That is tens of thousands of times weaker than an MRI scanner. Because the value is small, it is often expressed in microtesla or nanotesla for convenience. Compass and smartphone magnetometer sensors are calibrated to detect this weak field for navigation." },
      { question: "What is a tesla?", answer: "The tesla is the SI unit of magnetic flux density, named after inventor Nikola Tesla, defined as one weber of magnetic flux per square metre. It is a large unit: fridge magnets are a few hundredths of a tesla, medical MRI scanners are 1.5 to 3 tesla, and the strongest research magnets exceed 40 tesla. Everyday magnetic fields are therefore often quoted in milli- or microtesla." },
      { question: "Is gauss still used today?", answer: "Yes, gauss remains common in some laboratory instruments, magnet product specifications and older physics literature, even though the tesla is the official SI unit. Handheld gaussmeters and many consumer magnet listings still report in gauss. Because one tesla is ten thousand gauss, converting between the two is a frequent need when comparing legacy or product figures against modern SI-based specifications." },
      { question: "Why convert magnetic field through tesla?", answer: "The tesla is the SI unit for magnetic flux density, so every other field unit has a fixed, exactly defined ratio to it. Using it as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that electromagnetism equations expect, which makes cross-checking laboratory and engineering calculations straightforward and reliable." },
    ],
    relatedCalculators: ["energy-converter", "power-converter", "frequency-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "radiation-dose-unit",
    slug: "radiation-dose-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Radiation Dose Converter",
    shortDescription: "Convert between sievert, mSv, µSv and rem.",
    seoTitle: "Radiation Dose Converter — Sievert, mSv, µSv, Rem",
    metaDescription:
      "Free radiation dose converter. Convert between sievert, millisievert, microsievert and rem for equivalent dose instantly and accurately.",
    primaryKeyword: "radiation dose converter",
    secondaryKeywords: ["sievert to rem", "rem to sievert", "msv to rem"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "mSv", options: radiationDoseUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "rem", options: radiationDoseUnits },
    ],
    results: [{ id: "result", label: "Converted dose", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to sievert via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    sensitivity: "health",
    explanation:
      "A radiation dose converter restates an equivalent radiation dose in a different unit, moving between the SI sievert and its millisievert and microsievert subdivisions, and the older rem still common in the United States. It reduces your figure to sieverts, the SI unit for equivalent and effective dose, then scales out to the unit you choose, so one mechanism covers medical imaging doses, occupational exposure limits, background radiation figures and safety reports alike.\n\nThis matters because radiation dose is reported in different units depending on the country and era, and the numbers differ by a factor of a hundred. International and medical practice uses sieverts, usually as millisieverts for a scan or microsieverts for small everyday exposures; United States regulations and older literature use rem, where one rem is one-hundredth of a sievert. A chest scan quoted in millisieverts and an occupational limit quoted in rem cannot be compared until both share one unit, and getting that wrong by a factor of a hundred is a serious matter.\n\nThe convert-through-sievert method is used because every dose unit has a fixed ratio to the sievert — one rem is exactly 0.01 Sv, one millisievert is a thousandth, one microsievert a millionth — so pivoting through it keeps results exact and needs only one factor per unit. This tool converts units of equivalent dose only; it does not assess health risk. Radiographers, health physicists, nuclear workers, researchers and students rely on a radiation dose converter whenever a figure arrives in an unfamiliar unit.",
    example: {
      inputs: { value: 1, from: "rem", to: "mSv" },
      explanation: "1 rem × 0.01 Sv = 0.01 Sv ÷ 0.001 = 10 mSv.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of sieverts to express the dose in sieverts, then divided by the target unit's sievert value to complete the conversion. The metric prefixes milli and micro are exact powers of ten below the sievert, and one rem is defined as exactly 0.01 sievert, so every unit has a fixed ratio to the SI base, making the pivot exact for every pairing with one stored factor per unit.",
    faqs: [
      { question: "How do I convert sievert to rem?", answer: "Multiply the sievert figure by 100, since one sievert equals exactly 100 rem. So a 1 millisievert scan is 0.1 rem, and 5 mSv is 0.5 rem. To reverse it, divide rem by 100. The relationship is exact by definition, so only display rounding appears. Keeping the factor of a hundred straight is important, since a slip changes a dose figure dramatically." },
      { question: "What is a millisievert in everyday terms?", answer: "A millisievert is one-thousandth of a sievert and a convenient scale for medical and background doses. For rough context, natural background radiation is often a few millisieverts per year, and a chest X-ray is a small fraction of a millisievert, while a CT scan may be several millisieverts. This converter changes units only and does not evaluate whether any dose is safe; consult qualified guidance for that." },
      { question: "What is the difference between sievert and gray?", answer: "The gray measures absorbed dose, the raw energy deposited per kilogram of tissue, while the sievert measures equivalent or effective dose, which weights that energy by how harmful the radiation type and affected organs are. For many common exposures the numbers are similar, but they are conceptually different. This converter handles sievert-based equivalent-dose units and their rem counterpart, not the gray." },
      { question: "Why is rem still used?", answer: "Rem, standing for roentgen equivalent man, remains in use in the United States nuclear and regulatory context, and in older literature worldwide, even though the sievert is the official SI unit. Many US dose limits and instrument readouts are still stated in rem or millirem. Because one sievert is a hundred rem, converting between them is a routine need when comparing US and international figures." },
      { question: "Does this converter tell me if a dose is dangerous?", answer: "No. It only changes a dose figure between units of equivalent dose; it does not assess health risk, which depends on many factors including the exposure duration, the tissues involved and individual circumstances. For any question about whether an exposure is safe, consult a qualified health physicist, radiographer or medical professional and the relevant regulatory limits rather than relying on a unit conversion alone." },
    ],
    relatedCalculators: ["energy-converter", "power-converter", "weight-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cooking-weight-unit",
    slug: "cooking-weight-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Cooking Weight Converter",
    shortDescription: "Convert between grams, kilograms, ounces and pounds.",
    seoTitle: "Cooking Weight Converter — Grams, kg, Ounces, Pounds",
    metaDescription:
      "Free cooking weight converter. Convert recipe weights between grams, kilograms, milligrams, ounces and pounds instantly and accurately.",
    primaryKeyword: "cooking weight converter",
    secondaryKeywords: ["grams to ounces", "ounces to grams", "grams to pounds"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "g", options: cookingWeightUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "oz", options: cookingWeightUnits },
    ],
    results: [{ id: "result", label: "Converted weight", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to grams via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A cooking weight converter restates a recipe weight in a different unit, moving between grams and kilograms on the metric side, the smaller milligram, and ounces and pounds on the customary side. It reduces your figure to grams, a convenient base for kitchen quantities, then scales out to the unit you choose, so one mechanism handles scaling a recipe, translating between metric and imperial weights and reading international ingredient lists alike.\n\nThis matters because recipes cross borders and measuring systems, and weight is where precision matters most, especially in baking. A European recipe lists grams; an American or British one lists ounces and pounds; a spice or leavening quantity may be a few grams that a customary recipe would render awkwardly in fractions of an ounce. Weighing ingredients is more accurate than measuring by volume, so serious bakers work by weight — but only if the units line up. A converter removes the fiddly arithmetic and the risk of a mis-scaled batch.\n\nThe convert-through-grams method is used because every weight unit here has a fixed ratio to the gram — one ounce is about 28.35 grams, one pound is about 453.6 grams, one kilogram is exactly 1,000 grams — so pivoting through it keeps results consistent and needs only one factor per unit. Note that these are avoirdupois ounces and pounds, the standard for food, not the troy units used for precious metals. Home cooks, bakers, recipe developers and anyone following a foreign recipe rely on a cooking weight converter for dependable results.",
    example: {
      inputs: { value: 100, from: "g", to: "oz" },
      explanation: "100 g ÷ 28.3495 ≈ 3.53 ounces.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of grams to express the weight in grams, then divided by the target unit's gram value to complete the conversion. The ounce and pound used are avoirdupois, each defined as a constant number of grams, and the metric units are exact powers of ten, so every unit has a fixed ratio to the gram, making the pivot exact for every pairing with one stored factor per unit.",
    faqs: [
      { question: "How many grams are in an ounce?", answer: "One avoirdupois ounce, the standard used for food, is about 28.35 grams. So 4 ounces of flour is about 113 grams, and a pound, being 16 ounces, is about 453.6 grams. To convert grams to ounces, divide by 28.35. Do not confuse this with the troy ounce used for gold and silver, which is heavier at about 31.1 grams and not used in cooking." },
      { question: "How do I convert grams to pounds?", answer: "Divide the gram figure by about 453.6 to get pounds, since one pound is about 453.592 grams. So 1,000 grams is about 2.2 pounds. To reverse it, multiply pounds by 453.6. For mixed pounds and ounces, convert the whole weight to grams first, then split as needed. Working through grams keeps recipe scaling clean and avoids awkward fractional-pound arithmetic." },
      { question: "Should I weigh ingredients instead of using cups?", answer: "For baking, weighing is usually more accurate than measuring by volume, because a cup of flour can vary widely depending on how it is scooped and settled, while its weight in grams is consistent. Many modern recipes give both. If you want repeatable results, a kitchen scale set to grams is the reliable choice, and this converter helps translate any recipe's weights into the unit your scale uses." },
      { question: "Is a cooking ounce the same as a fluid ounce?", answer: "No, and confusing them is a common mistake. A weight ounce, about 28.35 grams, measures mass, while a fluid ounce measures volume, about 29.57 millilitres in the US system. They happen to be similar numbers for water but differ for other ingredients. This converter handles weight ounces only; for liquid volumes in fluid ounces, cups or millilitres, use a volume converter instead." },
      { question: "Why convert cooking weights through grams?", answer: "The gram is a coherent metric base at a practical scale for kitchen quantities, and every weight unit here has a fixed, exactly defined ratio to it. Using the gram as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit most modern recipes and kitchen scales use for precise, repeatable measurement." },
    ],
    relatedCalculators: ["weight-converter", "cooking-volume-converter", "volume-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "typography-unit",
    slug: "typography-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Typography Unit Converter",
    shortDescription: "Convert between points, pixels, picas, inches and mm.",
    seoTitle: "Typography Converter — Points, Pixels, Picas, Inches, mm",
    metaDescription:
      "Free typography unit converter. Convert between points, pixels, picas, inches, millimetres and centimetres for print and web design.",
    primaryKeyword: "typography converter",
    secondaryKeywords: ["points to pixels", "px to pt", "picas to inches"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "12", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "pt", options: typographyUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "px", options: typographyUnits },
    ],
    results: [{ id: "result", label: "Converted length", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert to points via known factors, then to the target unit",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A typography unit converter restates a type or layout measurement in a different unit, moving between points, pixels, picas, inches, millimetres and centimetres. It reduces your figure to points, the traditional base of typography, then scales out to the unit you choose, so one mechanism covers font sizing, line spacing, print layout and web design alike.\n\nThis matters because print and screen design use different, overlapping units and getting them wrong throws off a layout. Font sizes and leading are specified in points; print columns and gutters are often measured in picas, each of which is twelve points; web and screen work is done in pixels; page dimensions and margins may be given in inches or millimetres. A designer moving a print specification to the web, or matching a CSS pixel size to a printed point size, needs a reliable bridge between these worlds.\n\nThe convert-through-points method is used because every typography unit has a fixed ratio to the point in the modern desktop-publishing system — there are exactly 72 points to an inch, 12 points to a pica, and, at the standard 96 pixels-per-inch screen resolution, one pixel equals 0.75 points. Millimetres and centimetres follow from the inch. Pivoting through points keeps results exact and needs only one factor per unit. Note that the pixel relationship assumes the conventional 96 DPI baseline used by CSS. Graphic designers, typesetters, web developers and anyone bridging print and screen rely on a typography converter for consistent sizing.",
    example: {
      inputs: { value: 12, from: "pt", to: "px" },
      explanation: "12 pt ÷ 0.75 = 16 px at the standard 96 DPI.",
    },
    formulaExplanation:
      "The input is multiplied by its unit's fixed number of points to express the measurement in points, then divided by the target unit's point value to complete the conversion. In the modern desktop-publishing system there are exactly 72 points per inch and 12 points per pica, and at the standard 96 pixels-per-inch screen density one pixel is 0.75 points, so every unit has a fixed ratio to the point, making the pivot exact.",
    faqs: [
      { question: "How do I convert points to pixels?", answer: "At the standard 96 pixels-per-inch screen resolution, multiply points by 4 and divide by 3, since one point is 0.75 pixels the other way. So a 12-point font is 16 pixels, and 9 points is 12 pixels. To reverse it, multiply pixels by 0.75 to get points. This relationship underlies the common CSS convention where 1pt equals 1.333px at the default 96 DPI baseline." },
      { question: "How many points are in an inch?", answer: "There are exactly 72 points in an inch in the modern desktop-publishing point used by software like Adobe applications and by PostScript and PDF. This makes a point about 0.353 millimetres. Historically several slightly different point sizes existed, but the 72-per-inch definition is now standard, which is why this converter uses it for all point, pica and inch relationships." },
      { question: "What is a pica?", answer: "A pica is a typographic unit equal to exactly 12 points, or one-sixth of an inch, so there are 6 picas to an inch. Picas are traditionally used to measure column widths, line lengths and page layout dimensions, while points measure smaller things like font size and leading. So a column 20 picas wide is 240 points or about 3.33 inches across." },
      { question: "Does the pixel conversion depend on screen resolution?", answer: "Yes. This converter uses the standard 96 pixels-per-inch baseline that CSS and most operating systems assume, giving 1 pixel equal to 0.75 points. On a high-density display the physical pixels are smaller, but software still maps CSS pixels to that 96 DPI reference, so the conversion holds for layout purposes. For device-specific physical pixel sizing you would need that display's actual pixel density." },
      { question: "Why convert typography units through points?", answer: "The point is the traditional base unit of typography, and every other unit here — picas, inches, pixels, millimetres — has a fixed, defined ratio to it in the modern system. Using the point as the pivot means the converter needs only one factor per unit rather than a separate rule for each pair, keeps results exact, and matches the unit that font and layout software use internally for type sizing." },
    ],
    relatedCalculators: ["length-converter", "area-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "blood-sugar-unit",
    slug: "blood-sugar-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Blood Sugar Converter",
    shortDescription: "Convert blood glucose between mg/dL and mmol/L.",
    seoTitle: "Blood Sugar Converter — mg/dL to mmol/L",
    metaDescription:
      "Free blood sugar converter. Convert blood glucose readings between mg/dL and mmol/L instantly and accurately using the standard molar mass of glucose.",
    primaryKeyword: "blood sugar converter",
    secondaryKeywords: ["mg/dl to mmol/l", "mmol/l to mg/dl", "glucose conversion"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", required: true, span: 2, step: 0.0001 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "mg/dL", options: bloodSugarUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "mmol/L", options: bloodSugarUnits },
    ],
    results: [{ id: "result", label: "Converted glucose", format: "number", decimals: 4, isPrimary: true }],
    formula: "Convert between mg/dL and mmol/L using the glucose factor 18.0182",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    sensitivity: "health",
    explanation:
      "A blood sugar converter restates a blood glucose reading in the other of the two units used worldwide: milligrams per decilitre (mg/dL) and millimoles per litre (mmol/L). It works by dividing or multiplying by 18.0182, the conversion factor specific to glucose, so a value entered in one unit appears correctly in the other. This lets a reading from one meter, guideline or country be understood in the unit someone is used to.\n\nThis matters because the two units are split geographically. The United States, Germany and a few other countries report glucose in mg/dL; the United Kingdom, Canada, Australia and much of the rest of the world use mmol/L. A traveller, a person reading an international guideline, or a clinician comparing meters can face a number in an unfamiliar unit, and glucose targets are narrow enough that translating them correctly matters.\n\nThe factor 18.0182 comes from the molar mass of glucose, about 180.16 grams per mole: because a mole per litre relates mass to amount of substance, converting a mass concentration (mg/dL) to a molar concentration (mmol/L) uses that molar mass, and the decilitre-to-litre step folds into the same constant. This tool is a unit converter for glucose only and does not interpret readings or give medical advice. People with diabetes, carers, travellers and health professionals all use a blood sugar converter to read glucose figures on whichever scale they know.",
    example: {
      inputs: { value: 100, from: "mg/dL", to: "mmol/L" },
      explanation: "100 mg/dL ÷ 18.0182 ≈ 5.55 mmol/L.",
    },
    formulaExplanation:
      "To convert milligrams per decilitre to millimoles per litre, divide by 18.0182; to go the other way, multiply by 18.0182. The constant is fixed by the molar mass of glucose, about 180.16 grams per mole, combined with the decilitre-to-litre relationship, so it applies specifically to glucose and not to other blood substances. Because the factor is constant, the conversion is a single exact multiply or divide in either direction.",
    faqs: [
      { question: "How do I convert mg/dL to mmol/L for blood sugar?", answer: "Divide the mg/dL figure by 18.0182 to get mmol/L. So a fasting reading of 100 mg/dL is about 5.55 mmol/L, and 180 mg/dL is about 9.99 mmol/L. To go the other way, multiply mmol/L by 18.0182. The factor is specific to glucose because it derives from glucose's molar mass, so it should not be used for other blood measurements." },
      { question: "Why is the conversion factor 18.0182?", answer: "It comes from the molar mass of glucose, about 180.16 grams per mole. Converting a mass-based concentration in milligrams per decilitre to a molar concentration in millimoles per litre requires dividing by the molar mass, and the decilitre-to-litre unit step is folded into the same constant, yielding 18.0182. Because it is tied to glucose specifically, the same factor does not apply to cholesterol or other blood analytes." },
      { question: "Which countries use mg/dL versus mmol/L?", answer: "The United States, Germany, France, Japan and several others report blood glucose in mg/dL, while the United Kingdom, Canada, Australia, China and much of the rest of the world use mmol/L. This split is why travellers and people reading international guidelines often need to convert. The number looks very different — 5.5 mmol/L versus about 100 mg/dL — even though it is the same glucose level." },
      { question: "What is a normal blood sugar level?", answer: "General reference figures often cite a fasting level around 70 to 100 mg/dL, roughly 3.9 to 5.6 mmol/L, but exact targets depend on the individual, the time relative to meals and clinical guidance. This converter only changes units and does not interpret whether a reading is normal or a target is met. Always rely on a healthcare professional and the relevant guidelines for interpretation." },
      { question: "Does this converter give medical advice?", answer: "No. It converts a glucose figure between mg/dL and mmol/L and nothing more. It does not diagnose, interpret a reading, or recommend any action, and it must not replace a glucose meter, laboratory test or professional judgement. If you have questions about your blood sugar, targets or treatment, consult a doctor, diabetes educator or pharmacist rather than relying on a unit conversion." },
    ],
    relatedCalculators: ["weight-converter", "volume-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "shoe-size-unit",
    slug: "shoe-size-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Shoe Size Converter",
    shortDescription: "Convert men's shoe sizes between US, UK and EU (approximate).",
    seoTitle: "Shoe Size Converter — US, UK, EU (Men's)",
    metaDescription:
      "Free men's shoe size converter. Convert approximate men's shoe sizes between US, UK and EU systems. Approximate only — check the brand's chart.",
    primaryKeyword: "shoe size converter",
    secondaryKeywords: ["us to uk shoe size", "us to eu shoe size", "mens shoe size chart"],
    fields: [
      { id: "value", label: "Size", type: "number", placeholder: "10", required: true, span: 2, step: 0.5 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "US", options: shoeSizeUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "UK", options: shoeSizeUnits },
    ],
    results: [{ id: "result", label: "Converted shoe size", format: "number", decimals: 4, isPrimary: true }],
    formula: "Pivot through US men's size: UK = US − 0.5, EU = US + 33 (approximate)",
    formulaSource: NIST_SOURCE,
    sourceUrl: NIST_URL,
    explanation:
      "A shoe size converter translates an approximate men's shoe size between the three most common systems: US, UK and EU (European). Unlike physical unit conversions, shoe sizing is not governed by an exact international standard, so this tool uses widely accepted approximate relationships, pivoting through the US men's size: a UK men's size is roughly half a size below the US size, and an EU size is roughly the US size plus 33. It converts your input to the US pivot first, then out to the target system.\n\nThis matters because footwear is sold worldwide and the same foot carries a different number in each system. A US men's 10 is about a UK 9.5 and an EU 43. Someone buying from an international retailer, ordering imported shoes, or reading a foreign size label needs a quick, sensible translation to pick the right size to try. Getting it badly wrong means an uncomfortable or unwearable shoe and the hassle of returns.\n\nThese conversions are deliberately labelled approximate. Real sizing varies between brands, shoe styles and even individual lasts, and the US-to-EU offset in particular is a rounded rule of thumb rather than an exact figure. Half sizes and width fittings add further variation. For that reason the converter is best used to find a starting size, after which you should always check the specific brand's own size chart and, where possible, try the shoe on. Shoppers, travellers and anyone buying footwear across regions rely on it as a first estimate.",
    example: {
      inputs: { value: 10, from: "US", to: "EU" },
      explanation: "US men's 10 → 10 + 33 = EU 43 (approximate).",
    },
    formulaExplanation:
      "The converter pivots through the US men's size. To reach the pivot it treats a UK size as US minus 0.5 (so US equals UK plus 0.5) and an EU size as US plus 33 (so US equals EU minus 33). It first converts the input to US, then applies the outward rule for the target system. These offsets are approximate industry rules of thumb, not exact standards, and non-positive results are rejected as NaN since a shoe size at or below zero is meaningless.",
    faqs: [
      { question: "How do I convert a US men's shoe size to UK?", answer: "For men's sizes, a UK size is approximately half a size smaller than the US size, so subtract 0.5. A US men's 10 is about a UK 9.5, and a US 11 is about a UK 10.5. This is an approximate industry convention rather than an exact standard, so treat it as a starting point and always confirm against the specific brand's size chart before buying." },
      { question: "How do I convert US men's to EU shoe size?", answer: "As a rough rule for men's footwear, add about 33 to the US size to get the European size, so a US 10 is roughly an EU 43 and a US 9 about an EU 42. The offset is only approximate and rounds off the underlying half-size steps, so different brands may differ by a size. Use it to choose a starting size, then check the maker's chart." },
      { question: "Are these shoe size conversions exact?", answer: "No. There is no single exact international standard linking US, UK and EU shoe sizes, so this converter uses widely accepted approximate offsets. Real fit varies with the brand, the shoe's shape and last, half sizes and width fittings. The result is a sensible starting estimate, not a guarantee, which is why you should always consult the specific brand's size guide and ideally try the shoe on." },
      { question: "Does this converter work for women's or children's sizes?", answer: "No. This tool uses men's sizing relationships only. Women's and children's size systems use different offsets between US, UK and EU, so applying the men's rules would give the wrong answer. If you need a women's or children's conversion, use a chart built for that category, or check the brand's own size guide, which usually lists separate men's, women's and children's columns." },
      { question: "Why does the converter reject some values?", answer: "The converter returns a blank result when a conversion would produce a size at or below zero, or when the value is not a valid positive number, because a shoe size of zero or less has no physical meaning. For example, an extremely small EU input could map to a non-positive US pivot. Enter a realistic positive size in a supported system to get a sensible converted result." },
    ],
    relatedCalculators: ["length-converter", "weight-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
