import type { CalculatorDefinition } from "../types";

export const converterCalculators: CalculatorDefinition[] = [
  {
    id: "temperature",
    slug: "temperature-converter",
    category: "Converters",
    categorySlug: "converters",
    title: "Temperature Converter",
    shortDescription: "Convert between Celsius, Fahrenheit and Kelvin.",
    seoTitle: "Temperature Converter — Celsius, Fahrenheit & Kelvin",
    metaDescription:
      "Free temperature converter. Convert instantly between Celsius, Fahrenheit and Kelvin, with the conversion formulas and a worked example.",
    primaryKeyword: "temperature converter",
    secondaryKeywords: ["celsius to fahrenheit", "fahrenheit to celsius", "kelvin converter"],
    fields: [
      { id: "value", label: "Temperature", type: "number", placeholder: "100", required: true, span: 2, step: 0.01 },
      {
        id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "C",
        options: [
          { value: "C", label: "Celsius (°C)" },
          { value: "F", label: "Fahrenheit (°F)" },
          { value: "K", label: "Kelvin (K)" },
        ],
      },
      {
        id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "F",
        options: [
          { value: "C", label: "Celsius (°C)" },
          { value: "F", label: "Fahrenheit (°F)" },
          { value: "K", label: "Kelvin (K)" },
        ],
      },
    ],
    results: [{ id: "result", label: "Converted temperature", format: "number", decimals: 2, isPrimary: true }],
    formula: "°F = °C × 9/5 + 32  ·  K = °C + 273.15",
    formulaSource: "International System of Units (SI) — NIST",
    sourceUrl: "https://www.nist.gov/pml/owm/metric-si/unit-conversion",
    explanation:
      "A temperature converter translates a reading on one scale into its equivalent on another, moving between Celsius, Fahrenheit and Kelvin. It first normalises whatever you enter into Celsius as a common pivot, then applies the target scale's formula, so any of the three pairings works through a single, consistent route rather than needing a separate rule for each direction.\n\nThis matters because the three scales are woven through daily life and technical work in ways that constantly collide. A recipe quotes an oven in Fahrenheit while your dial reads Celsius; a weather report abroad means something different from the number you expect; a physics problem or a datasheet specifies Kelvin. A temperature converter resolves these clashes instantly and removes the risk of a mental-arithmetic slip on the factor of 9/5.\n\nThe pivot method is used because Celsius and Fahrenheit are linearly related with an offset of 32 degrees, while Kelvin is simply Celsius shifted by 273.15 so that zero sits at absolute zero. Reducing every input to Celsius first keeps those relationships exact. Cooks, travellers, students, scientists and engineers all lean on a temperature converter whenever a number arrives in the wrong scale.",
    example: {
      inputs: { value: 100, from: "C", to: "F" },
      explanation: "100 °C × 9/5 + 32 = 180 + 32 = 212 °F, the boiling point of water.",
    },
    formulaExplanation:
      "Each input is first reduced to Celsius, the shared reference point, then pushed out to the target scale. Fahrenheit relates to Celsius by a slope of 9/5 and a 32-degree offset because the two scales place their zero points and degree sizes differently; Kelvin is Celsius plus 273.15, a pure shift with the same degree size. Pivoting through one base makes all six directions consistent.",
    faqs: [
      { question: "How do I convert Celsius to Fahrenheit?", answer: "Multiply the Celsius figure by 9/5 (which is 1.8) and add 32. So 20 °C becomes 20 × 1.8 + 32 = 68 °F, and body temperature of 37 °C becomes 98.6 °F. The multiplication accounts for Fahrenheit degrees being smaller, and the +32 shifts the zero point, since 0 °C is the freezing point of water but 32 °F marks the same temperature." },
      { question: "How do I convert Fahrenheit to Celsius?", answer: "Reverse the operation: subtract 32 first, then multiply by 5/9. For example, 212 °F becomes (212 − 32) × 5/9 = 100 °C, the boiling point of water. Doing the subtraction before the multiplication matters, because the 32-degree offset must be removed before rescaling the degree size. Skipping the order gives a wrong answer." },
      { question: "What is absolute zero?", answer: "Absolute zero is the coldest temperature physically possible, the point where molecular motion reaches its minimum. It equals 0 Kelvin, which is −273.15 °C or −459.67 °F. The Kelvin scale is built around it, starting from this point, which is why scientists use Kelvin for work in thermodynamics and cryogenics where distance above absolute zero is what matters." },
      { question: "Can Kelvin be negative?", answer: "No. Because the Kelvin scale begins at absolute zero, the lowest possible temperature, there are no valid negative Kelvin values in ordinary use. If a conversion produces a negative Kelvin figure, the input Celsius or Fahrenheit value was below absolute zero and therefore not physically real. Kelvin is also written without a degree symbol, simply as K." },
      { question: "Why is there no degree symbol on Kelvin?", answer: "Kelvin is an SI base unit of temperature in its own right, so by convention it is written as a plain number followed by K, such as 300 K, with no degree sign. Celsius and Fahrenheit are scales measured in degrees and keep the ° symbol. This is a formatting rule set by the SI system rather than anything about the temperature itself." },
    ],
    relatedCalculators: ["length-converter", "weight-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
