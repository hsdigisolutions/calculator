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
    slugEs: "conversor-de-temperatura",
    titleEs: "Conversor de Temperatura",
    shortDescriptionEs: "Convierte entre Celsius, Fahrenheit y Kelvin.",
    seoTitleEs: "Conversor de Temperatura — Celsius, Fahrenheit y Kelvin",
    metaDescriptionEs:
      "Conversor de temperatura gratuito. Convierte al instante entre Celsius, Fahrenheit y Kelvin, con las fórmulas de conversión y un ejemplo resuelto.",
    primaryKeywordEs: "conversor de temperatura",
    secondaryKeywordsEs: ["celsius a fahrenheit", "fahrenheit a celsius", "conversor de kelvin"],
    formulaEs: "°F = °C × 9/5 + 32  ·  K = °C + 273,15",
    formulaExplanationEs:
      "Cada entrada se reduce primero a Celsius, el punto de referencia compartido, y luego se lleva a la escala de destino. Fahrenheit se relaciona con Celsius mediante una pendiente de 9/5 y un desfase de 32 grados porque las dos escalas colocan sus ceros y el tamaño de sus grados de forma distinta; Kelvin es Celsius más 273,15, un desplazamiento puro con el mismo tamaño de grado. Pivotar a través de una sola base hace que las seis direcciones sean coherentes.",
    explanationEs:
      "Un conversor de temperatura traduce una lectura en una escala a su equivalente en otra, moviéndose entre Celsius, Fahrenheit y Kelvin. Primero normaliza lo que introduces a Celsius como pivote común y luego aplica la fórmula de la escala de destino, de modo que cualquiera de las tres combinaciones funciona por una única ruta consistente en lugar de necesitar una regla distinta para cada dirección.\n\nEsto importa porque las tres escalas están presentes en la vida diaria y en el trabajo técnico de formas que chocan constantemente. Una receta indica el horno en Fahrenheit mientras tu mando marca Celsius; un parte meteorológico en el extranjero significa algo distinto del número que esperas; un problema de física o una hoja de datos especifica Kelvin. Un conversor resuelve estos conflictos al instante y elimina el riesgo de un error mental con el factor de 9/5.\n\nSe usa el método del pivote porque Celsius y Fahrenheit están relacionados linealmente con un desfase de 32 grados, mientras que Kelvin es simplemente Celsius desplazado en 273,15 para que el cero quede en el cero absoluto. Reducir cada entrada a Celsius primero mantiene esas relaciones exactas. Cocineros, viajeros, estudiantes, científicos e ingenieros recurren a un conversor de temperatura siempre que un número llega en la escala equivocada.",
    exampleEs: {
      inputs: { value: 100, from: "C", to: "F" },
      explanation: "100 °C × 9/5 + 32 = 180 + 32 = 212 °F, el punto de ebullición del agua.",
    },
    faqsEs: [
      { question: "¿Cómo convierto Celsius a Fahrenheit?", answer: "Multiplica la cifra en Celsius por 9/5 (que es 1,8) y suma 32. Así, 20 °C se convierten en 20 × 1,8 + 32 = 68 °F, y la temperatura corporal de 37 °C se convierte en 98,6 °F. La multiplicación tiene en cuenta que los grados Fahrenheit son más pequeños, y el +32 desplaza el punto cero, ya que 0 °C es el punto de congelación del agua pero 32 °F marca esa misma temperatura." },
      { question: "¿Cómo convierto Fahrenheit a Celsius?", answer: "Invierte la operación: resta primero 32 y luego multiplica por 5/9. Por ejemplo, 212 °F se convierten en (212 − 32) × 5/9 = 100 °C, el punto de ebullición del agua. Hacer la resta antes de la multiplicación importa, porque el desfase de 32 grados debe eliminarse antes de reescalar el tamaño del grado. Saltarse el orden da una respuesta equivocada." },
      { question: "¿Qué es el cero absoluto?", answer: "El cero absoluto es la temperatura más fría físicamente posible, el punto en el que el movimiento molecular alcanza su mínimo. Equivale a 0 Kelvin, que son −273,15 °C o −459,67 °F. La escala Kelvin se construye en torno a él, comenzando desde este punto, por lo que los científicos usan Kelvin para trabajos de termodinámica y criogenia donde lo que importa es la distancia por encima del cero absoluto." },
      { question: "¿Puede el Kelvin ser negativo?", answer: "No. Como la escala Kelvin comienza en el cero absoluto, la temperatura más baja posible, no existen valores Kelvin negativos válidos en el uso ordinario. Si una conversión produce una cifra Kelvin negativa, el valor Celsius o Fahrenheit de entrada estaba por debajo del cero absoluto y, por tanto, no es físicamente real. El Kelvin también se escribe sin símbolo de grado, simplemente como K." },
      { question: "¿Por qué el Kelvin no lleva símbolo de grado?", answer: "El Kelvin es una unidad base del SI de temperatura por derecho propio, así que por convención se escribe como un número seguido de K, por ejemplo 300 K, sin signo de grado. Celsius y Fahrenheit son escalas medidas en grados y conservan el símbolo °. Esta es una regla de formato establecida por el sistema SI, no algo relativo a la temperatura en sí." },
    ],
    relatedCalculators: ["length-converter", "weight-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
