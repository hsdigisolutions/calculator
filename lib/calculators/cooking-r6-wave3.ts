import type { CalculatorDefinition, FieldOption } from "../types";

const butterUnits: FieldOption[] = [
  { value: "stick", label: "Sticks (US)" },
  { value: "cup", label: "Cups" },
  { value: "tbsp", label: "Tablespoons" },
  { value: "tsp", label: "Teaspoons" },
  { value: "oz", label: "Ounces (oz)" },
  { value: "gram", label: "Grams (g)" },
];

const tempUnits: FieldOption[] = [
  { value: "C", label: "Celsius (°C)" },
  { value: "F", label: "Fahrenheit (°F)" },
  { value: "gas", label: "Gas mark" },
];

const yeastUnits: FieldOption[] = [
  { value: "fresh", label: "Fresh (cake) yeast" },
  { value: "active-dry", label: "Active dry yeast" },
  { value: "instant", label: "Instant yeast" },
];

export const cookingR6Calculators: CalculatorDefinition[] = [
  {
    id: "butter-converter",
    slug: "butter-converter-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Butter Converter Calculator",
    shortDescription: "Convert butter between sticks, cups, tablespoons, ounces and grams.",
    seoTitle: "Butter Converter Calculator — Sticks, Cups, Tablespoons, Grams",
    metaDescription:
      "Free butter converter calculator. Convert butter between US sticks, cups, tablespoons, teaspoons, ounces and grams using accurate standard weights.",
    primaryKeyword: "butter converter calculator",
    secondaryKeywords: ["butter sticks to grams", "butter cups to grams", "tablespoons of butter to grams"],
    fields: [
      { id: "amount", label: "Amount", type: "number", placeholder: "1", required: true, span: 2, min: 0, step: 0.01 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "stick", options: butterUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "gram", options: butterUnits },
    ],
    results: [{ id: "result", label: "Converted amount", format: "number", decimals: 2, isPrimary: true }],
    formula: "grams = amount × grams-per-unit; target = grams ÷ grams-per-target-unit",
    formulaExplanation:
      "Butter is sold and measured in a tangle of units — sticks, cups, tablespoons, ounces and grams — that all describe the same physical block. Each unit maps to a fixed weight: a US stick is 113 grams, a cup 227, a tablespoon 14.2, a teaspoon 4.73 and an ounce 28.35. The converter reduces your amount to grams by multiplying by its unit's weight, then divides by the target unit's weight. Pivoting through grams as the common base keeps every pairing exact and means only one factor per unit is needed rather than a rule for each combination.",
    explanation:
      "Butter is one of the most unit-confusing ingredients in the kitchen, and this butter converter calculator settles the confusion by translating any amount between US sticks, cups, tablespoons, teaspoons, ounces and grams. American recipes wrap butter in sticks, British and European recipes weigh it in grams, and older recipes scatter tablespoons and cups throughout, so cooks constantly need to move between them.\n\nGetting the conversion right matters because butter carries structure, moisture and richness in a recipe, and being off by half a stick can leave a cookie flat or a sauce split. A butter converter calculator removes the mental arithmetic and the risk of misremembering that a stick is not quite a quarter cup by volume but is a clean 113 grams by weight, which is the figure most professional bakers actually work from.\n\nThe conversion works because each unit corresponds to a fixed weight of butter: a US stick is 113 grams, a cup is 227 grams, a tablespoon is 14.2 grams, a teaspoon is 4.73 grams and an ounce is 28.35 grams. The tool reduces whatever you enter to grams and then scales out to the unit you want, so the answer stays exact in either direction. Home bakers following recipes from different countries, anyone weighing on a kitchen scale, and cooks halving or doubling a batch all rely on a butter converter calculator to keep quantities honest.",
    example: {
      inputs: { amount: 1, from: "stick", to: "gram" },
      explanation: "1 US stick of butter weighs exactly 113 g.",
    },
    faqs: [
      {
        question: "How many grams are in a stick of butter?",
        answer: "A standard US stick of butter weighs 113 grams, equal to a quarter pound or four ounces. It also equals half a cup or eight tablespoons. Most American recipes assume this size, so when a recipe calls for one stick you can weigh out 113 grams on a scale instead. Using the gram figure is the most reliable way to follow a US recipe with metric measuring tools.",
      },
      {
        question: "How much is a cup of butter?",
        answer: "One cup of butter weighs about 227 grams, which is two US sticks, half a pound, or sixteen tablespoons. Because butter is a solid packed into a volume measure, weighing it is far more accurate than pressing it into a measuring cup, where air gaps and soft spots skew the amount. Set the from-unit to cups and the to-unit to grams to get the exact weight for your recipe.",
      },
      {
        question: "Why convert butter by weight instead of volume?",
        answer: "Butter is a solid, so measuring it by volume in cups or tablespoons is imprecise — how firmly you pack it changes the amount, and softened butter measures differently from cold. Weighing in grams removes that variability entirely, which is why bakeries and precise recipes specify grams. This converter lets you turn any volume measure into grams so you can weigh the exact amount your recipe intends every time.",
      },
      {
        question: "Are US and European butter sticks the same?",
        answer: "Not always. The US stick is 113 grams and is long and thin, while butter in many European countries is sold in 250-gram blocks with no stick markings at all. Some regions also use shorter, fatter sticks. Because of this variation, converting by weight in grams is the safest approach — a gram is a gram everywhere, so weighing sidesteps any difference in how sticks are shaped or portioned.",
      },
      {
        question: "How many tablespoons are in a stick of butter?",
        answer: "A US stick holds eight tablespoons, and each tablespoon of butter weighs about 14.2 grams. Many stick wrappers are printed with tablespoon markings so you can slice off what you need. If your butter has no markings, weigh 14.2 grams per tablespoon instead, or use this converter to translate the tablespoons a recipe asks for into grams or into a fraction of a stick or cup.",
      },
    ],
    relatedCalculators: ["baking-conversion-calculator", "cooking-measurement-converter", "recipe-scaler-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "USDA standard butter weights",
    slugEs: "conversor-de-mantequilla",
    titleEs: "Conversor de Mantequilla",
    shortDescriptionEs: "Convierte mantequilla entre barras, tazas, cucharadas, onzas y gramos.",
    seoTitleEs: "Conversor de Mantequilla — Barras, Tazas, Cucharadas, Gramos",
    metaDescriptionEs:
      "Conversor de mantequilla gratuito. Convierte mantequilla entre barras estadounidenses, tazas, cucharadas, cucharaditas, onzas y gramos con pesos estándar precisos.",
    primaryKeywordEs: "conversor de mantequilla",
    secondaryKeywordsEs: ["barras de mantequilla a gramos", "tazas de mantequilla a gramos", "cucharadas de mantequilla a gramos"],
    formulaExplanationEs:
      "La mantequilla se mide en una maraña de unidades — barras, tazas, cucharadas, onzas y gramos — que describen el mismo bloque físico. Cada unidad corresponde a un peso fijo: una barra estadounidense pesa 113 gramos, una taza 227, una cucharada 14,2, una cucharadita 4,73 y una onza 28,35. El conversor reduce tu cantidad a gramos multiplicando por el peso de su unidad y luego divide por el peso de la unidad de destino. Pivotar a través de los gramos como base común mantiene cada par exacto y solo necesita un factor por unidad en lugar de una regla para cada combinación.",
    explanationEs:
      "La mantequilla es uno de los ingredientes que más confusión de unidades genera en la cocina, y este conversor de mantequilla resuelve el problema al traducir cualquier cantidad entre barras estadounidenses, tazas, cucharadas, cucharaditas, onzas y gramos. Las recetas estadounidenses envuelven la mantequilla en barras, las británicas y europeas la pesan en gramos, y las recetas antiguas reparten cucharadas y tazas por todas partes, así que los cocineros necesitan moverse entre ellas constantemente.\n\nAcertar con la conversión importa porque la mantequilla aporta estructura, humedad y riqueza a una receta, y equivocarse por media barra puede dejar una galleta plana o una salsa cortada. Un conversor de mantequilla elimina la aritmética mental y el riesgo de recordar mal que una barra no es exactamente un cuarto de taza por volumen, pero sí un limpio 113 gramos por peso, la cifra con la que trabajan la mayoría de los panaderos profesionales.\n\nLa conversión funciona porque cada unidad corresponde a un peso fijo de mantequilla: una barra estadounidense pesa 113 gramos, una taza 227 gramos, una cucharada 14,2 gramos, una cucharadita 4,73 gramos y una onza 28,35 gramos. La herramienta reduce lo que introduces a gramos y luego lo escala hacia la unidad que quieras, así que la respuesta se mantiene exacta en ambas direcciones. Los panaderos caseros que siguen recetas de distintos países, quienes pesan en una báscula de cocina y quienes reducen o doblan una tanda confían en un conversor de mantequilla para mantener las cantidades honestas.",
    exampleEs: {
      inputs: { amount: 1, from: "stick", to: "gram" },
      explanation: "1 barra estadounidense de mantequilla pesa exactamente 113 g.",
    },
    faqsEs: [
      {
        question: "¿Cuántos gramos hay en una barra de mantequilla?",
        answer: "Una barra estándar estadounidense de mantequilla pesa 113 gramos, equivalente a un cuarto de libra o cuatro onzas. También equivale a media taza o a ocho cucharadas. La mayoría de las recetas estadounidenses asumen este tamaño, así que cuando una receta pide una barra puedes pesar 113 gramos en una báscula. Usar la cifra en gramos es la forma más fiable de seguir una receta estadounidense con utensilios métricos.",
      },
      {
        question: "¿Cuánto es una taza de mantequilla?",
        answer: "Una taza de mantequilla pesa unos 227 gramos, que son dos barras estadounidenses, media libra o dieciséis cucharadas. Como la mantequilla es un sólido comprimido en una medida de volumen, pesarla es mucho más preciso que presionarla en una taza medidora, donde los huecos de aire y las zonas blandas distorsionan la cantidad. Fija la unidad de origen en tazas y la de destino en gramos para obtener el peso exacto de tu receta.",
      },
      {
        question: "¿Por qué convertir mantequilla por peso en lugar de por volumen?",
        answer: "La mantequilla es un sólido, así que medirla por volumen en tazas o cucharadas es impreciso — cuánto la compactes cambia la cantidad, y la mantequilla ablandada se mide distinto que la fría. Pesarla en gramos elimina por completo esa variabilidad, por lo que las panaderías y las recetas precisas especifican gramos. Este conversor te permite convertir cualquier medida de volumen a gramos para pesar la cantidad exacta que tu receta pretende cada vez.",
      },
      {
        question: "¿Son iguales las barras de mantequilla estadounidenses y europeas?",
        answer: "No siempre. La barra estadounidense pesa 113 gramos y es larga y delgada, mientras que en muchos países europeos la mantequilla se vende en bloques de 250 gramos sin marcas de barra. Algunas regiones usan barras más cortas y gruesas. Por esta variación, convertir por peso en gramos es lo más seguro — un gramo es un gramo en todas partes, así que pesar evita cualquier diferencia en la forma o la porción de las barras.",
      },
      {
        question: "¿Cuántas cucharadas hay en una barra de mantequilla?",
        answer: "Una barra estadounidense contiene ocho cucharadas, y cada cucharada de mantequilla pesa unos 14,2 gramos. Muchos envoltorios de barra vienen impresos con marcas de cucharada para que cortes lo que necesites. Si tu mantequilla no tiene marcas, pesa 14,2 gramos por cucharada, o usa este conversor para traducir las cucharadas que pide una receta a gramos o a una fracción de barra o taza.",
      },
    ],
  },
  {
    id: "oven-temperature",
    slug: "oven-temperature-converter",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Oven Temperature Converter",
    shortDescription: "Convert oven temperatures between Celsius, Fahrenheit and gas mark.",
    seoTitle: "Oven Temperature Converter — Celsius, Fahrenheit, Gas Mark",
    metaDescription:
      "Free oven temperature converter. Convert between Celsius, Fahrenheit and UK gas mark for any recipe, with the gas-mark conversion clearly flagged.",
    primaryKeyword: "oven temperature converter",
    secondaryKeywords: ["celsius to fahrenheit oven", "gas mark to celsius", "fahrenheit to gas mark"],
    fields: [
      { id: "value", label: "Temperature", type: "number", placeholder: "180", required: true, span: 2, step: 1 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "C", options: tempUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "F", options: tempUnits },
    ],
    results: [{ id: "result", label: "Converted temperature", format: "number", decimals: 0, isPrimary: true }],
    formula: "°F = °C × 9/5 + 32; °C = (°F − 32) × 5/9; gas ≈ round((°F − 250) / 25)",
    formulaExplanation:
      "Celsius and Fahrenheit are exact linear scales: multiplying Celsius by nine-fifths and adding thirty-two gives Fahrenheit, and reversing that recovers Celsius. Gas mark is different — it is a coarse dial where roughly every 25 Fahrenheit degrees is one mark, anchored so that gas mark 0 sits near 250°F. The converter first reduces any input to Fahrenheit, then applies the target formula, rounding for gas mark because the scale is stepped rather than continuous. That is why gas-mark results are approximate and pair best with a real oven thermometer.",
    explanation:
      "Recipes travel across borders, and their oven temperatures rarely arrive in the units your oven uses. This oven temperature converter moves any setting between Celsius, Fahrenheit and the UK gas mark scale so you can follow a recipe from anywhere without a mistranslation that burns or undercooks your food.\n\nThe stakes are real because oven temperature governs how food browns, rises and sets. A cake baked forty degrees Fahrenheit too hot can dome and crack; bread proved and baked too cool stays pale and dense. Celsius-to-Fahrenheit conversions are exact, but gas mark is a coarser scale, so this tool flags gas-mark results as approximate and encourages you to lean on an oven thermometer for anything sensitive. Knowing that gas mark 4 is roughly 180°C or 350°F — the classic all-purpose baking temperature — is the kind of anchor this converter makes instant.\n\nThe conversions work because Celsius and Fahrenheit are linear scales related by the formula °F = °C × 9/5 + 32, which the tool inverts to go the other way. Gas mark, by contrast, steps in intervals of about 25°F starting near 250°F for gas mark 1, so the converter approximates it by rounding to the nearest mark. Home cooks with a Fahrenheit oven following a metric recipe, bakers decoding a vintage gas-mark cookbook, and anyone cooking across measurement systems reach for an oven temperature converter to set the dial with confidence.",
    example: {
      inputs: { value: 180, from: "C", to: "F" },
      explanation: "180 × 9/5 + 32 = 356°F, commonly rounded to 350°F (about gas mark 4).",
    },
    faqs: [
      {
        question: "How do I convert Celsius to Fahrenheit for an oven?",
        answer: "Multiply the Celsius figure by nine-fifths, or 1.8, and then add thirty-two. So 180°C becomes 356°F, which recipes usually round to 350°F, and 200°C becomes 392°F, rounded to 400°F. This linear formula is exact, so the only approximation is the rounding cooks apply to reach a tidy oven-dial number. The converter does the arithmetic instantly in either direction so you never have to guess.",
      },
      {
        question: "Why is the gas mark conversion approximate?",
        answer: "Gas mark is a stepped scale rather than a continuous one, where each mark spans roughly 25 Fahrenheit degrees and gas mark 1 sits near 275°F. Because a single mark covers a small range of real temperatures, converting an exact Celsius or Fahrenheit value to a gas mark means rounding to the nearest step. That is why the tool labels gas-mark results as approximate and why an oven thermometer is worth using for precise baking.",
      },
      {
        question: "What is gas mark 4 in Celsius and Fahrenheit?",
        answer: "Gas mark 4 is about 180°C or 350°F, the classic moderate oven temperature used for a huge range of cakes, biscuits and roasts. It is the setting most general-purpose recipes assume when they simply say a moderate oven. Higher marks run hotter — gas mark 6 is roughly 200°C — and lower marks cooler, with each step changing the temperature by about 25°F or 15°C.",
      },
      {
        question: "Should I adjust the temperature for a fan oven?",
        answer: "Yes. Fan or convection ovens circulate hot air and cook more efficiently, so a common rule is to lower the temperature by about 20°C, or roughly 25 to 40°F, compared with a conventional recipe, or to shorten the time instead. This converter handles the unit change but not the fan adjustment, so make that reduction yourself after converting, then watch the food and use a thermometer to confirm.",
      },
      {
        question: "How accurate are home oven thermostats?",
        answer: "Many home ovens run 10 to 30 degrees Fahrenheit hotter or cooler than the dial claims, and they can have hot spots that bake unevenly. Because of this, treat any converted figure as a target rather than a guarantee, especially for delicate baking. An inexpensive oven thermometer placed inside lets you see the true temperature and calibrate your dial, which matters far more than the small rounding in a unit conversion.",
      },
    ],
    relatedCalculators: ["cooking-time-calculator", "meat-roasting-time-calculator", "baking-conversion-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard temperature scale definitions",
    slugEs: "conversor-de-temperatura-de-horno",
    titleEs: "Conversor de Temperatura de Horno",
    shortDescriptionEs: "Convierte temperaturas de horno entre Celsius, Fahrenheit y gas mark.",
    seoTitleEs: "Conversor de Temperatura de Horno — Celsius, Fahrenheit, Gas Mark",
    metaDescriptionEs:
      "Conversor de temperatura de horno gratuito. Convierte entre Celsius, Fahrenheit y gas mark del Reino Unido para cualquier receta, con la conversión de gas mark señalada como aproximada.",
    primaryKeywordEs: "conversor de temperatura de horno",
    secondaryKeywordsEs: ["celsius a fahrenheit horno", "gas mark a celsius", "fahrenheit a gas mark"],
    formulaExplanationEs:
      "Celsius y Fahrenheit son escalas lineales exactas: multiplicar Celsius por nueve quintos y sumar treinta y dos da Fahrenheit, e invertirlo recupera Celsius. Gas mark es distinto — es un dial grueso donde aproximadamente cada 25 grados Fahrenheit equivale a una marca, anclado de modo que el gas mark 0 se sitúa cerca de 250 °F. El conversor primero reduce cualquier entrada a Fahrenheit, luego aplica la fórmula de destino, redondeando para gas mark porque la escala es escalonada y no continua. Por eso los resultados de gas mark son aproximados y encajan mejor con un termómetro de horno real.",
    explanationEs:
      "Las recetas viajan entre fronteras, y sus temperaturas de horno rara vez llegan en las unidades que usa tu horno. Este conversor de temperatura de horno mueve cualquier ajuste entre Celsius, Fahrenheit y la escala gas mark del Reino Unido para que sigas una receta de cualquier lugar sin una mala traducción que queme o deje cruda tu comida.\n\nLo que está en juego es real porque la temperatura del horno gobierna cómo se dora, sube y cuaja la comida. Un bizcocho horneado cuarenta grados Fahrenheit demasiado caliente puede abombarse y agrietarse; el pan fermentado y horneado demasiado frío queda pálido y denso. Las conversiones de Celsius a Fahrenheit son exactas, pero gas mark es una escala más gruesa, así que esta herramienta señala los resultados de gas mark como aproximados y anima a apoyarte en un termómetro de horno para lo delicado. Saber que el gas mark 4 es aproximadamente 180 °C o 350 °F — la clásica temperatura de horneado multiusos — es el tipo de referencia que este conversor hace instantánea.\n\nLas conversiones funcionan porque Celsius y Fahrenheit son escalas lineales relacionadas por la fórmula °F = °C × 9/5 + 32, que la herramienta invierte para ir al revés. Gas mark, en cambio, avanza en intervalos de unos 25 °F empezando cerca de 250 °F para el gas mark 1, así que el conversor lo aproxima redondeando a la marca más cercana. Los cocineros con horno en Fahrenheit siguiendo una receta métrica, los panaderos descifrando un recetario antiguo en gas mark y cualquiera que cocine entre sistemas de medida recurren a un conversor de temperatura de horno para ajustar el dial con confianza.",
    exampleEs: {
      inputs: { value: 180, from: "C", to: "F" },
      explanation: "180 × 9/5 + 32 = 356 °F, comúnmente redondeado a 350 °F (aproximadamente gas mark 4).",
    },
    faqsEs: [
      {
        question: "¿Cómo convierto Celsius a Fahrenheit para un horno?",
        answer: "Multiplica la cifra en Celsius por nueve quintos, o 1,8, y luego suma treinta y dos. Así 180 °C se convierte en 356 °F, que las recetas suelen redondear a 350 °F, y 200 °C en 392 °F, redondeado a 400 °F. Esta fórmula lineal es exacta, así que la única aproximación es el redondeo que aplican los cocineros para llegar a un número redondo del dial. El conversor hace la aritmética al instante en ambas direcciones.",
      },
      {
        question: "¿Por qué la conversión de gas mark es aproximada?",
        answer: "Gas mark es una escala escalonada en lugar de continua, donde cada marca abarca unos 25 grados Fahrenheit y el gas mark 1 se sitúa cerca de 275 °F. Como una sola marca cubre un pequeño rango de temperaturas reales, convertir un valor exacto de Celsius o Fahrenheit a un gas mark implica redondear a la marca más cercana. Por eso la herramienta etiqueta los resultados de gas mark como aproximados y por eso vale la pena usar un termómetro de horno para hornear con precisión.",
      },
      {
        question: "¿Cuánto es el gas mark 4 en Celsius y Fahrenheit?",
        answer: "El gas mark 4 es aproximadamente 180 °C o 350 °F, la clásica temperatura de horno moderada usada para una gran variedad de bizcochos, galletas y asados. Es el ajuste que asumen la mayoría de las recetas multiusos cuando simplemente dicen horno moderado. Las marcas más altas son más calientes — el gas mark 6 es unos 200 °C — y las más bajas más frías, cambiando cada paso la temperatura unos 25 °F o 15 °C.",
      },
      {
        question: "¿Debo ajustar la temperatura para un horno con ventilador?",
        answer: "Sí. Los hornos con ventilador o convección hacen circular el aire caliente y cocinan de forma más eficiente, así que una regla común es bajar la temperatura unos 20 °C, o aproximadamente 25 a 40 °F, respecto a una receta convencional, o acortar el tiempo. Este conversor gestiona el cambio de unidad pero no el ajuste del ventilador, así que haz esa reducción tú después de convertir, vigila la comida y usa un termómetro para confirmar.",
      },
      {
        question: "¿Qué precisión tienen los termostatos de los hornos domésticos?",
        answer: "Muchos hornos domésticos funcionan de 10 a 30 grados Fahrenheit más calientes o fríos de lo que indica el dial, y pueden tener puntos calientes que hornean de forma desigual. Por eso, trata cualquier cifra convertida como un objetivo y no como una garantía, sobre todo para el horneado delicado. Un termómetro de horno económico colocado dentro te deja ver la temperatura real y calibrar tu dial, lo que importa mucho más que el pequeño redondeo de una conversión.",
      },
    ],
  },
  {
    id: "yeast-converter",
    slug: "yeast-converter-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Yeast Converter Calculator",
    shortDescription: "Convert between fresh, active dry and instant yeast by weight.",
    seoTitle: "Yeast Converter Calculator — Fresh, Active Dry, Instant Yeast",
    metaDescription:
      "Free yeast converter calculator. Convert between fresh, active dry and instant yeast by weight using standard baking equivalence factors for reliable rises.",
    primaryKeyword: "yeast converter calculator",
    secondaryKeywords: ["fresh to instant yeast", "active dry to instant yeast", "yeast substitution calculator"],
    fields: [
      { id: "amount", label: "Amount", type: "number", unit: "g", placeholder: "10", required: true, span: 2, min: 0, step: 0.1 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "fresh", options: yeastUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "instant", options: yeastUnits },
    ],
    results: [{ id: "result", label: "Equivalent amount", format: "number", decimals: 2, unit: "g", isPrimary: true }],
    formula: "fresh-equivalent = amount ÷ factor(from); result = fresh-equivalent × factor(to)",
    formulaExplanation:
      "The three common yeasts differ in how much live cell mass they pack per gram, so equal weights are not equally powerful. Relative to fresh yeast at a factor of 1, active dry sits near 0.4 and instant near 0.33, meaning you need far less of the dry forms. The converter first turns your amount into its fresh-yeast equivalent by dividing by the source factor, then multiplies by the target factor to reach the matching weight of the yeast you want to use. Pivoting through the fresh baseline keeps every pairing consistent.",
    explanation:
      "Bread recipes call for fresh, active dry or instant yeast almost interchangeably, but they are not interchangeable gram for gram, and this yeast converter calculator translates any amount from one type to another so your dough rises exactly as intended. Swap the types blindly and you can end up with a sluggish, dense loaf or an over-proofed one that collapses.\n\nThe reason a conversion is needed is that the three yeasts contain different amounts of active, living cells by weight. Fresh yeast, sold as a moist cake, is mostly water and the least concentrated. Active dry and instant yeasts are dehydrated and far more potent, so a recipe written for one needs proportionally less or more when you reach for another. A yeast converter calculator captures those ratios so you can use whatever is in your fridge or cupboard with confidence.\n\nThe tool works by pivoting through a fresh-yeast baseline. Taking fresh yeast as a factor of 1, active dry is about 0.4 and instant about 0.33 of the fresh weight for the same leavening power. To convert, the calculator divides your amount by the source type's factor to find the equivalent weight of fresh yeast, then multiplies by the target type's factor to land on the amount you actually need. Home bakers, sourdough and enriched-dough enthusiasts, and anyone substituting the yeast they have for the yeast a recipe names all rely on a yeast converter calculator to keep the rise predictable.",
    example: {
      inputs: { amount: 10, from: "fresh", to: "instant" },
      explanation: "10 g fresh yeast × 0.33 ≈ 3.3 g instant yeast for the same rise.",
    },
    faqs: [
      {
        question: "How do I convert fresh yeast to instant yeast?",
        answer: "Instant yeast is far more concentrated than fresh, so you use much less. Multiplying a fresh-yeast weight by about 0.33 gives the instant equivalent, meaning 10 grams of fresh yeast becomes roughly 3.3 grams of instant. The converter handles this automatically. As a rough rule of thumb, instant yeast is about one-third the weight of the fresh yeast it replaces, so always scale down when switching to a dry form.",
      },
      {
        question: "What is the difference between active dry and instant yeast?",
        answer: "Both are dehydrated, but instant yeast has smaller granules and a higher proportion of live cells, so it works faster and can be mixed straight into the flour. Active dry yeast is slightly less concentrated and is traditionally dissolved in warm liquid first to rehydrate. In weight terms, active dry sits near a factor of 0.4 against fresh yeast and instant near 0.33, which is why the converter treats them separately.",
      },
      {
        question: "Do I need to change the liquid when swapping fresh for dry yeast?",
        answer: "Fresh yeast contains a lot of water, while dry yeasts are almost moisture-free, so switching from fresh to a dry form removes a small amount of liquid from the dough. For most recipes the difference is minor and can be ignored, but in very precise or high-hydration doughs you may add a teaspoon or two of water to compensate. Focus first on getting the yeast weight right, which matters far more.",
      },
      {
        question: "Can I substitute instant yeast for active dry directly?",
        answer: "Yes, and this converter gives the exact amounts. Because instant is a little more potent than active dry, you use slightly less of it. You can usually skip the proofing step with instant yeast and add it straight to the dry ingredients, whereas active dry benefits from being dissolved in warm liquid first. Converting by weight keeps the leavening power matched even though the handling differs.",
      },
      {
        question: "Does converting yeast change the rising time?",
        answer: "Matching the weight with this converter keeps the leavening power roughly equal, so rise times stay similar, but the yeast type still influences speed. Instant yeast tends to start fastest, active dry a touch slower, and fresh yeast somewhere in between depending on freshness. Temperature, dough richness and salt affect timing far more than the yeast type, so judge the rise by how much the dough has grown rather than the clock alone.",
      },
    ],
    relatedCalculators: ["baking-conversion-calculator", "dough-hydration-calculator", "pizza-dough-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard baking yeast equivalence",
    slugEs: "conversor-de-levadura",
    titleEs: "Conversor de Levadura",
    shortDescriptionEs: "Convierte entre levadura fresca, seca activa e instantánea por peso.",
    seoTitleEs: "Conversor de Levadura — Fresca, Seca Activa, Instantánea",
    metaDescriptionEs:
      "Conversor de levadura gratuito. Convierte entre levadura fresca, seca activa e instantánea por peso usando factores de equivalencia estándar de panadería para fermentaciones fiables.",
    primaryKeywordEs: "conversor de levadura",
    secondaryKeywordsEs: ["levadura fresca a instantánea", "levadura seca activa a instantánea", "calculadora de sustitución de levadura"],
    formulaExplanationEs:
      "Las tres levaduras comunes difieren en cuánta masa celular viva contienen por gramo, así que pesos iguales no son igual de potentes. Respecto a la levadura fresca con un factor de 1, la seca activa se sitúa cerca de 0,4 y la instantánea cerca de 0,33, lo que significa que necesitas mucha menos de las formas secas. El conversor primero convierte tu cantidad a su equivalente en levadura fresca dividiendo por el factor de origen, luego multiplica por el factor de destino para alcanzar el peso equivalente. Pivotar a través de la base fresca mantiene cada par coherente.",
    explanationEs:
      "Las recetas de pan piden levadura fresca, seca activa o instantánea casi indistintamente, pero no son intercambiables gramo a gramo, y este conversor de levadura traduce cualquier cantidad de un tipo a otro para que tu masa fermente exactamente como se pretende. Cámbialas a ciegas y puedes acabar con un pan lento y denso o con uno sobrefermentado que se colapsa.\n\nLa razón por la que hace falta una conversión es que las tres levaduras contienen distintas cantidades de células activas y vivas por peso. La levadura fresca, vendida como una pastilla húmeda, es en su mayoría agua y la menos concentrada. Las levaduras seca activa e instantánea están deshidratadas y son mucho más potentes, así que una receta escrita para una necesita proporcionalmente más o menos cuando recurres a otra. Un conversor de levadura captura esas proporciones para que uses lo que tengas en la nevera o la despensa con confianza.\n\nLa herramienta funciona pivotando a través de una base de levadura fresca. Tomando la levadura fresca como factor de 1, la seca activa es unos 0,4 y la instantánea unos 0,33 del peso fresco para la misma capacidad de fermentación. Para convertir, la calculadora divide tu cantidad por el factor del tipo de origen para hallar el peso equivalente de levadura fresca, luego multiplica por el factor del tipo de destino para llegar a la cantidad que realmente necesitas. Los panaderos caseros, los aficionados a la masa madre y las masas enriquecidas, y cualquiera que sustituya la levadura que tiene por la que nombra una receta confían en un conversor de levadura para mantener la fermentación predecible.",
    exampleEs: {
      inputs: { amount: 10, from: "fresh", to: "instant" },
      explanation: "10 g de levadura fresca × 0,33 ≈ 3,3 g de levadura instantánea para la misma fermentación.",
    },
    faqsEs: [
      {
        question: "¿Cómo convierto levadura fresca a instantánea?",
        answer: "La levadura instantánea es mucho más concentrada que la fresca, así que usas mucha menos. Multiplicar un peso de levadura fresca por unos 0,33 da el equivalente instantáneo, lo que significa que 10 gramos de levadura fresca se convierten en unos 3,3 gramos de instantánea. El conversor lo hace automáticamente. Como regla general, la levadura instantánea es aproximadamente un tercio del peso de la fresca que reemplaza, así que reduce siempre al cambiar a una forma seca.",
      },
      {
        question: "¿Cuál es la diferencia entre levadura seca activa e instantánea?",
        answer: "Ambas están deshidratadas, pero la levadura instantánea tiene gránulos más pequeños y una mayor proporción de células vivas, así que actúa más rápido y puede mezclarse directamente con la harina. La levadura seca activa es algo menos concentrada y tradicionalmente se disuelve primero en líquido tibio para rehidratarla. En peso, la seca activa se sitúa cerca de un factor de 0,4 frente a la fresca y la instantánea cerca de 0,33, por lo que el conversor las trata por separado.",
      },
      {
        question: "¿Necesito cambiar el líquido al sustituir levadura fresca por seca?",
        answer: "La levadura fresca contiene mucha agua, mientras que las levaduras secas casi no tienen humedad, así que cambiar de fresca a una forma seca retira una pequeña cantidad de líquido de la masa. Para la mayoría de las recetas la diferencia es menor y puede ignorarse, pero en masas muy precisas o de alta hidratación puedes añadir una o dos cucharaditas de agua para compensar. Prioriza acertar con el peso de la levadura, que importa mucho más.",
      },
      {
        question: "¿Puedo sustituir levadura instantánea por seca activa directamente?",
        answer: "Sí, y este conversor da las cantidades exactas. Como la instantánea es algo más potente que la seca activa, usas un poco menos. Normalmente puedes saltarte el paso de activación con la levadura instantánea y añadirla directamente a los ingredientes secos, mientras que la seca activa se beneficia de disolverse primero en líquido tibio. Convertir por peso mantiene la capacidad de fermentación equiparada aunque el manejo difiera.",
      },
      {
        question: "¿Convertir la levadura cambia el tiempo de fermentación?",
        answer: "Equiparar el peso con este conversor mantiene la capacidad de fermentación aproximadamente igual, así que los tiempos de fermentación se mantienen similares, pero el tipo de levadura sigue influyendo en la velocidad. La levadura instantánea tiende a empezar más rápido, la seca activa un poco más lenta y la fresca en un punto intermedio según su frescura. La temperatura, la riqueza de la masa y la sal afectan al tiempo mucho más que el tipo de levadura, así que juzga la fermentación por cuánto ha crecido la masa.",
      },
    ],
  },
  {
    id: "coffee-to-water-ratio",
    slug: "coffee-to-water-ratio-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Coffee-to-Water Ratio Calculator",
    shortDescription: "Find the coffee dose for your water from a brew ratio.",
    seoTitle: "Coffee-to-Water Ratio Calculator — Grams of Coffee per Brew",
    metaDescription:
      "Free coffee-to-water ratio calculator. Enter your water in grams and pick a brew ratio to get the exact grams of coffee for a balanced, repeatable cup.",
    primaryKeyword: "coffee to water ratio calculator",
    secondaryKeywords: ["coffee ratio calculator", "grams of coffee per cup", "brew ratio calculator"],
    fields: [
      { id: "waterGrams", label: "Water", type: "number", unit: "g", placeholder: "500", required: true, span: 2, min: 0, step: 1 },
      {
        id: "ratio",
        label: "Brew ratio (1 : N)",
        type: "select",
        required: true,
        span: 2,
        defaultValue: "16",
        options: [
          { value: "15", label: "1:15 — stronger" },
          { value: "16", label: "1:16 — balanced (recommended)" },
          { value: "17", label: "1:17 — lighter" },
          { value: "18", label: "1:18 — mild" },
        ],
      },
    ],
    results: [{ id: "coffeeGrams", label: "Coffee needed", format: "number", decimals: 1, unit: "g", isPrimary: true }],
    formula: "coffee (g) = water (g) ÷ N, for a 1:N brew ratio",
    formulaExplanation:
      "A brew ratio expresses how many grams of water each gram of coffee should meet, written as 1:N. Because water dominates the weight of a cup, the coffee dose is simply the water weight divided by N. A 1:16 ratio with 500 grams of water calls for 31.25 grams of coffee. Lower N values pack more coffee into the same water for a stronger, more intense cup, while higher N values dilute it toward a lighter brew. Dividing by N keeps the strength constant no matter how much you scale the batch up or down.",
    explanation:
      "Great coffee is mostly about proportion, and this coffee-to-water ratio calculator turns your chosen brew ratio and water amount into the exact grams of coffee to grind. Specialty coffee is dialed in by weight rather than scoops, because a level scoop varies wildly between beans, and getting the ratio right is the single biggest lever on how your cup tastes.\n\nThe ratio matters because it sets the strength and extraction balance of the brew. Too little coffee for the water and the cup turns thin, sour and watery; too much and it reads heavy and bitter. A widely recommended starting point is 1:16 — one gram of coffee for every sixteen grams of water — which lands in the sweet spot for pour-over and drip. A coffee-to-water ratio calculator lets you hold that proportion steady whether you are brewing a single cup or a full carafe, so results stay repeatable.\n\nThe math is simple: for a 1:N ratio, the coffee weight equals the water weight divided by N. Pouring 500 grams of water at a 1:16 ratio needs 500 ÷ 16, or about 31 grams of coffee. Dropping to 1:15 makes it stronger, while moving to 1:17 or 1:18 makes it lighter, and the calculator recomputes instantly. Home brewers, pour-over and French-press fans, and anyone chasing a consistent cup use a coffee-to-water ratio calculator to weigh their dose instead of guessing with a spoon.",
    example: {
      inputs: { waterGrams: 500, ratio: "16" },
      explanation: "500 g water ÷ 16 = 31.25 g of coffee for a balanced 1:16 brew.",
    },
    faqs: [
      {
        question: "What is the best coffee-to-water ratio?",
        answer: "A ratio of 1:16 — one gram of coffee for every sixteen grams of water — is a widely recommended starting point that produces a balanced, well-extracted cup for pour-over and drip brewing. From there you can adjust to taste: move toward 1:15 for a stronger, more intense cup, or toward 1:17 and 1:18 for a lighter, milder brew. Dialing in your preferred ratio and then keeping it constant is the key to repeatable results.",
      },
      {
        question: "How many grams of coffee for 500 ml of water?",
        answer: "Since 500 millilitres of water weighs about 500 grams, a 1:16 ratio calls for roughly 31 grams of coffee, which the calculator gives as 31.25 grams. At a stronger 1:15 ratio you would use about 33 grams, and at a lighter 1:18 ratio about 28 grams. Weighing your water is the most accurate approach, but because a millilitre of water weighs a gram, you can treat the two figures as equal.",
      },
      {
        question: "Why weigh coffee instead of using scoops?",
        answer: "A scoop measures volume, and the weight it holds changes with the bean's roast level, grind size and how the grounds settle, so two level scoops can differ by several grams. That variation shifts your ratio and makes the cup inconsistent from day to day. Weighing the coffee in grams on a scale fixes the dose precisely, which is why every specialty brewing guide and barista works by weight rather than by scoop.",
      },
      {
        question: "Does grind size change the ratio I should use?",
        answer: "No — the ratio sets how much coffee meets the water, while grind size controls how fast that coffee extracts. You keep the same ratio and adjust grind to fix the taste: grind finer if the cup is weak or sour, coarser if it is bitter or harsh. Ratio and grind are separate dials, so use this calculator to lock the dose, then tune grind and brew time around it.",
      },
      {
        question: "How do I scale the recipe for more cups?",
        answer: "Because the ratio is a proportion, scaling is straightforward: just enter the total water you want and the calculator returns the matching coffee dose at your chosen ratio. Doubling the water doubles the coffee, so a 1:16 brew that used 31 grams for 500 grams of water needs 62 grams for a litre. Keeping the ratio fixed means a big batch tastes the same as a single cup.",
      },
    ],
    relatedCalculators: ["unit-price-calculator", "recipe-scaler-calculator", "cooking-measurement-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Specialty Coffee Association brew guidance",
    slugEs: "calculadora-de-relacion-cafe-agua",
    titleEs: "Calculadora de Relación Café-Agua",
    shortDescriptionEs: "Halla la dosis de café para tu agua a partir de una relación de preparación.",
    seoTitleEs: "Calculadora de Relación Café-Agua — Gramos de Café por Preparación",
    metaDescriptionEs:
      "Calculadora de relación café-agua gratuita. Introduce el agua en gramos y elige una relación de preparación para obtener los gramos exactos de café para una taza equilibrada y repetible.",
    primaryKeywordEs: "calculadora de relación café agua",
    secondaryKeywordsEs: ["calculadora de relación de café", "gramos de café por taza", "calculadora de ratio de preparación"],
    formulaExplanationEs:
      "Una relación de preparación expresa cuántos gramos de agua debe encontrar cada gramo de café, escrita como 1:N. Como el agua domina el peso de una taza, la dosis de café es simplemente el peso del agua dividido por N. Una relación 1:16 con 500 gramos de agua requiere 31,25 gramos de café. Los valores de N más bajos concentran más café en la misma agua para una taza más fuerte e intensa, mientras que los valores más altos lo diluyen hacia una preparación más ligera. Dividir por N mantiene la fuerza constante sin importar cuánto escales la tanda.",
    explanationEs:
      "El buen café es sobre todo cuestión de proporción, y esta calculadora de relación café-agua convierte tu relación de preparación elegida y la cantidad de agua en los gramos exactos de café a moler. El café de especialidad se ajusta por peso en lugar de por cucharadas, porque una cucharada rasa varía enormemente entre granos, y acertar con la relación es la mayor palanca sobre cómo sabe tu taza.\n\nLa relación importa porque fija la fuerza y el equilibrio de extracción de la preparación. Poco café para el agua y la taza sale fina, ácida y aguada; demasiado y resulta pesada y amarga. Un punto de partida ampliamente recomendado es 1:16 — un gramo de café por cada dieciséis gramos de agua — que cae en el punto justo para el goteo y el vertido. Una calculadora de relación café-agua te permite mantener esa proporción estable tanto si preparas una sola taza como una jarra entera, así que los resultados se mantienen repetibles.\n\nLas matemáticas son simples: para una relación 1:N, el peso del café es igual al peso del agua dividido por N. Verter 500 gramos de agua a una relación 1:16 necesita 500 ÷ 16, o unos 31 gramos de café. Bajar a 1:15 lo hace más fuerte, mientras que pasar a 1:17 o 1:18 lo hace más ligero, y la calculadora recalcula al instante. Los preparadores caseros, los aficionados al vertido y la prensa francesa, y cualquiera que busque una taza consistente usan una calculadora de relación café-agua para pesar su dosis en lugar de adivinar con una cuchara.",
    exampleEs: {
      inputs: { waterGrams: 500, ratio: "16" },
      explanation: "500 g de agua ÷ 16 = 31,25 g de café para una preparación equilibrada 1:16.",
    },
    faqsEs: [
      {
        question: "¿Cuál es la mejor relación café-agua?",
        answer: "Una relación de 1:16 — un gramo de café por cada dieciséis gramos de agua — es un punto de partida ampliamente recomendado que produce una taza equilibrada y bien extraída para el vertido y el goteo. Desde ahí puedes ajustar al gusto: acércate a 1:15 para una taza más fuerte e intensa, o a 1:17 y 1:18 para una preparación más ligera y suave. Ajustar tu relación preferida y luego mantenerla constante es la clave para obtener resultados repetibles.",
      },
      {
        question: "¿Cuántos gramos de café para 500 ml de agua?",
        answer: "Como 500 mililitros de agua pesan unos 500 gramos, una relación 1:16 requiere aproximadamente 31 gramos de café, que la calculadora da como 31,25 gramos. Con una relación más fuerte de 1:15 usarías unos 33 gramos, y con una más ligera de 1:18 unos 28 gramos. Pesar el agua es lo más preciso, pero como un mililitro de agua pesa un gramo, puedes tratar ambas cifras como iguales.",
      },
      {
        question: "¿Por qué pesar el café en lugar de usar cucharadas?",
        answer: "Una cucharada mide volumen, y el peso que contiene cambia con el nivel de tueste, el tamaño de la molienda y cómo se asienta el café molido, así que dos cucharadas rasas pueden diferir en varios gramos. Esa variación desplaza tu relación y hace la taza inconsistente de un día a otro. Pesar el café en gramos en una báscula fija la dosis con precisión, por lo que cada guía de preparación de especialidad y cada barista trabajan por peso en vez de por cucharada.",
      },
      {
        question: "¿El tamaño de la molienda cambia la relación que debo usar?",
        answer: "No — la relación fija cuánto café encuentra el agua, mientras que el tamaño de la molienda controla la rapidez con que ese café se extrae. Mantienes la misma relación y ajustas la molienda para corregir el sabor: muele más fino si la taza queda débil o ácida, más grueso si queda amarga o áspera. La relación y la molienda son diales separados, así que usa esta calculadora para fijar la dosis y luego afina la molienda y el tiempo de preparación alrededor.",
      },
      {
        question: "¿Cómo escalo la receta para más tazas?",
        answer: "Como la relación es una proporción, escalar es sencillo: solo introduce el agua total que quieras y la calculadora devuelve la dosis de café equivalente a tu relación elegida. Doblar el agua dobla el café, así que una preparación 1:16 que usó 31 gramos para 500 gramos de agua necesita 62 gramos para un litro. Mantener fija la relación hace que una tanda grande sepa igual que una sola taza.",
      },
    ],
  },
  {
    id: "recipe-servings",
    slug: "recipe-servings-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Recipe Servings Calculator",
    shortDescription: "Rescale an ingredient for a new number of servings.",
    seoTitle: "Recipe Servings Calculator — Adjust Ingredients by Servings",
    metaDescription:
      "Free recipe servings calculator. Enter original and desired servings plus an ingredient amount to get the scaled quantity and the exact serving multiplier.",
    primaryKeyword: "recipe servings calculator",
    secondaryKeywords: ["adjust recipe servings", "servings scaling calculator", "resize recipe by servings"],
    fields: [
      { id: "originalServings", label: "Original servings", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
      { id: "desiredServings", label: "Desired servings", type: "number", placeholder: "6", required: true, span: 1, min: 0, step: 1 },
      { id: "ingredientAmount", label: "Ingredient amount", type: "number", placeholder: "2", required: false, span: 2, min: 0, step: 0.01, helpText: "Optional — enter one quantity to see it rescaled." },
    ],
    results: [
      { id: "scaledAmount", label: "Scaled ingredient amount", format: "number", decimals: 2, isPrimary: true },
      { id: "scaleFactor", label: "Serving multiplier", format: "number", decimals: 3, unit: "×", isPrimary: false },
    ],
    formula: "multiplier = desired ÷ original; scaled amount = ingredient × multiplier",
    formulaExplanation:
      "A recipe is a fixed set of proportions tied to a serving count. Dividing the desired servings by the original servings gives a single multiplier that preserves every ratio when applied across the board. Multiplying any ingredient by that multiplier gives the amount needed for the new yield. Because all quantities share the same multiplier, the balance of the dish stays intact whether you scale up for a crowd or down for one, which is why the method reduces to one clean division and one multiplication.",
    explanation:
      "Cooking for a different number of people than a recipe was written for is a daily reality, and this recipe servings calculator resizes any ingredient to your target serving count while showing the exact multiplier at work. You enter the servings the recipe makes, the servings you want, and an ingredient amount, and the tool returns the rescaled quantity along with the factor it used.\n\nThis is worth doing precisely because guessing at a scaled recipe is where dishes go wrong, especially with awkward jumps like taking a recipe for four up to seven, or halving one that serves five. A recipe servings calculator removes the arithmetic and keeps every ingredient in the same proportion, so the dish tastes the way it should at any size. Seeing the multiplier also makes it easy to apply the same factor to the rest of the ingredient list yourself.\n\nThe method is simple and reliable: the multiplier is the desired servings divided by the original servings, and each ingredient is multiplied by it. A recipe for four scaled to six gives a multiplier of 1.5, so every quantity grows by half. A few things need judgment rather than straight multiplication — salt, spices and leavening are best scaled a little conservatively, and cooking time changes with pan depth, not servings. Home cooks, hosts planning dinners, and meal-preppers batching food for the week all rely on a recipe servings calculator to hit the right amount every time.",
    example: {
      inputs: { originalServings: 4, desiredServings: 6, ingredientAmount: 2 },
      explanation: "6 ÷ 4 = 1.5× multiplier, so a 2-cup ingredient becomes 3 cups.",
    },
    faqs: [
      {
        question: "How does the serving multiplier work?",
        answer: "The multiplier is simply the desired servings divided by the original servings. Taking a recipe for four up to six gives 6 ÷ 4, or 1.5, meaning every ingredient grows by half again. Scaling down works the same way: from eight servings to two gives a multiplier of 0.25. Multiplying any quantity by this single number keeps all the ingredient ratios in proportion, which is exactly what preserves the balance of the dish.",
      },
      {
        question: "Do I have to enter an ingredient amount?",
        answer: "No, the ingredient field is optional. Leave it blank and the calculator still shows the serving multiplier, which you can then apply to your whole ingredient list yourself. Filling it in is handy when you want to check one specific quantity, such as how much rice a scaled batch needs. You can re-enter different amounts one at a time to convert each line of a recipe in turn without recalculating the multiplier.",
      },
      {
        question: "Should seasoning be scaled by the same multiplier?",
        answer: "Not always exactly. Bulk ingredients like flour, liquid and vegetables scale cleanly, but salt, strong spices, garlic and chilli can taste too intense when multiplied straight up. A good habit is to scale them to around three-quarters of the multiplier, then taste and adjust at the end. Leavening agents such as baking powder can also behave differently in larger batches, so treat those as a starting point rather than a fixed rule.",
      },
      {
        question: "Why doesn't cooking time change with servings?",
        answer: "Cooking time depends on how heat travels through the food, which is set by thickness and surface area, not by how many servings you make. A doubled batch spread across two pans cooks in about the original time, while the same batch piled into one deep dish takes longer. Because of this, judge doneness by colour, internal temperature or a clean skewer rather than assuming the time scales with the serving count.",
      },
      {
        question: "Can I scale a recipe down to one serving?",
        answer: "Yes. Set the original servings to what the recipe makes and the desired servings to one, and the calculator produces a fractional multiplier to shrink each ingredient. Very small quantities can be hard to measure, so use a kitchen scale and measuring spoons for tiny amounts. Ingredients that do not divide neatly, like a single egg, may need sensible rounding, with the surrounding quantities nudged to keep the dish balanced.",
      },
    ],
    relatedCalculators: ["recipe-scaler-calculator", "baking-conversion-calculator", "calories-per-serving-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard recipe scaling",
    slugEs: "calculadora-de-porciones-de-receta",
    titleEs: "Calculadora de Porciones de Receta",
    shortDescriptionEs: "Reescala un ingrediente para un nuevo número de porciones.",
    seoTitleEs: "Calculadora de Porciones de Receta — Ajusta Ingredientes por Porciones",
    metaDescriptionEs:
      "Calculadora de porciones de receta gratuita. Introduce las porciones originales y deseadas más una cantidad de ingrediente para obtener la cantidad escalada y el multiplicador exacto de porciones.",
    primaryKeywordEs: "calculadora de porciones de receta",
    secondaryKeywordsEs: ["ajustar porciones de receta", "calculadora de escalado de porciones", "redimensionar receta por porciones"],
    formulaExplanationEs:
      "Una receta es un conjunto fijo de proporciones ligado a un número de porciones. Dividir las porciones deseadas por las originales da un único multiplicador que preserva cada proporción al aplicarse a todo. Multiplicar cualquier ingrediente por ese multiplicador da la cantidad necesaria para el nuevo rendimiento. Como todas las cantidades comparten el mismo multiplicador, el equilibrio del plato se mantiene intacto tanto si escalas para una multitud como si reduces para uno, por lo que el método se reduce a una división limpia y una multiplicación.",
    explanationEs:
      "Cocinar para un número de personas distinto del que se escribió una receta es una realidad diaria, y esta calculadora de porciones de receta redimensiona cualquier ingrediente a tu número de porciones objetivo mostrando el multiplicador exacto en acción. Introduces las porciones que hace la receta, las que quieres y una cantidad de ingrediente, y la herramienta devuelve la cantidad reescalada junto con el factor que usó.\n\nVale la pena hacerlo con precisión precisamente porque adivinar una receta escalada es donde los platos salen mal, sobre todo con saltos incómodos como llevar una receta de cuatro a siete, o reducir a la mitad una que rinde cinco. Una calculadora de porciones de receta elimina la aritmética y mantiene cada ingrediente en la misma proporción, así que el plato sabe como debe a cualquier tamaño. Ver el multiplicador también facilita aplicar el mismo factor al resto de la lista de ingredientes tú mismo.\n\nEl método es simple y fiable: el multiplicador es las porciones deseadas divididas por las originales, y cada ingrediente se multiplica por él. Una receta para cuatro escalada a seis da un multiplicador de 1,5, así que cada cantidad crece la mitad. Algunas cosas necesitan criterio en lugar de multiplicación directa — la sal, las especias y los agentes leudantes se escalan mejor de forma algo conservadora, y el tiempo de cocción cambia con la profundidad del recipiente, no con las porciones. Los cocineros caseros, los anfitriones que planean cenas y quienes preparan comidas por lotes para la semana confían en una calculadora de porciones de receta para acertar la cantidad correcta cada vez.",
    exampleEs: {
      inputs: { originalServings: 4, desiredServings: 6, ingredientAmount: 2 },
      explanation: "6 ÷ 4 = multiplicador de 1,5×, así que un ingrediente de 2 tazas se convierte en 3 tazas.",
    },
    faqsEs: [
      {
        question: "¿Cómo funciona el multiplicador de porciones?",
        answer: "El multiplicador es simplemente las porciones deseadas divididas por las porciones originales. Llevar una receta de cuatro a seis da 6 ÷ 4, o 1,5, lo que significa que cada ingrediente crece la mitad de nuevo. Reducir funciona igual: de ocho porciones a dos da un multiplicador de 0,25. Multiplicar cualquier cantidad por este único número mantiene todas las proporciones de ingredientes, que es exactamente lo que preserva el equilibrio del plato.",
      },
      {
        question: "¿Tengo que introducir una cantidad de ingrediente?",
        answer: "No, el campo de ingrediente es opcional. Déjalo en blanco y la calculadora aún muestra el multiplicador de porciones, que luego puedes aplicar a toda tu lista de ingredientes tú mismo. Rellenarlo es útil cuando quieres comprobar una cantidad específica, como cuánto arroz necesita una tanda escalada. Puedes volver a introducir distintas cantidades una a una para convertir cada línea de una receta por turnos sin recalcular el multiplicador.",
      },
      {
        question: "¿Debe escalarse el condimento con el mismo multiplicador?",
        answer: "No siempre exactamente. Los ingredientes de volumen como harina, líquido y verduras escalan de forma limpia, pero la sal, las especias fuertes, el ajo y el chile pueden saber demasiado intensos al multiplicarse directamente. Una buena costumbre es escalarlos a unas tres cuartas partes del multiplicador, luego probar y ajustar al final. Los agentes leudantes como la levadura química también pueden comportarse distinto en tandas más grandes, así que trátalos como punto de partida y no como regla fija.",
      },
      {
        question: "¿Por qué el tiempo de cocción no cambia con las porciones?",
        answer: "El tiempo de cocción depende de cómo viaja el calor a través de la comida, que lo fijan el grosor y la superficie, no cuántas porciones hagas. Una tanda doblada repartida en dos recipientes se cocina en aproximadamente el tiempo original, mientras que la misma tanda amontonada en un recipiente profundo tarda más. Por eso, juzga el punto de cocción por el color, la temperatura interna o un pincho limpio en lugar de asumir que el tiempo escala con el número de porciones.",
      },
      {
        question: "¿Puedo reducir una receta a una sola porción?",
        answer: "Sí. Fija las porciones originales en lo que hace la receta y las deseadas en una, y la calculadora produce un multiplicador fraccionario para reducir cada ingrediente. Las cantidades muy pequeñas pueden ser difíciles de medir, así que usa una báscula de cocina y cucharas medidoras para cantidades diminutas. Los ingredientes que no se dividen limpiamente, como un solo huevo, pueden necesitar un redondeo sensato, ajustando las cantidades alrededor para mantener el plato equilibrado.",
      },
    ],
  },
  {
    id: "calories-per-serving",
    slug: "calories-per-serving-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Calories per Serving Calculator",
    shortDescription: "Divide a recipe's total calories by its servings.",
    seoTitle: "Calories per Serving Calculator — Recipe Calories Made Simple",
    metaDescription:
      "Free calories per serving calculator. Enter a recipe's total calories and number of servings to find the calories in each portion for accurate tracking.",
    primaryKeyword: "calories per serving calculator",
    secondaryKeywords: ["recipe calories per portion", "calories per portion calculator", "divide calories by servings"],
    fields: [
      { id: "totalCalories", label: "Total recipe calories", type: "number", unit: "kcal", placeholder: "1200", required: true, span: 1, min: 0, step: 1 },
      { id: "servings", label: "Number of servings", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [{ id: "caloriesPerServing", label: "Calories per serving", format: "number", decimals: 0, unit: "kcal", isPrimary: true }],
    formula: "calories per serving = total recipe calories ÷ number of servings",
    formulaExplanation:
      "A recipe's total energy is fixed once the ingredients are set, so the calories in one portion depend only on how many portions you divide it into. Summing the calories of every ingredient gives the total, and dividing by the number of servings distributes that total evenly across the portions. The result assumes each serving is roughly equal in size, which is why consistent portioning matters. Cutting the same dish into more servings lowers the calories per portion proportionally, and into fewer servings raises it.",
    explanation:
      "Tracking what you actually eat means knowing the calories in a portion, not just the whole pot, and this calories per serving calculator does that division for you. You add up the calories of everything that went into the recipe, enter that total and the number of servings, and the tool returns the calories in each portion.\n\nThis matters for anyone counting calories, managing weight, or logging meals in a food diary, because recipes almost always list ingredients for the full dish rather than per plate. Dividing by servings turns a recipe total into the per-portion figure that food logs and nutrition goals are built around. A calories per serving calculator makes that step instant and removes the risk of mis-dividing in your head, which is easy to do with a large batch.\n\nThe calculation is a straightforward division: total recipe calories divided by the number of servings gives the calories per serving. A 1,200-calorie casserole cut into four portions is 300 calories each; split into six it drops to 200. The accuracy of the result depends on two things — summing the ingredient calories correctly and portioning the dish evenly — so consistent serving sizes matter. Home cooks planning meals, people following a calorie target, and anyone building a personal recipe database rely on a calories per serving calculator to know exactly what a plate delivers.",
    example: {
      inputs: { totalCalories: 1200, servings: 4 },
      explanation: "1,200 kcal ÷ 4 servings = 300 kcal per serving.",
    },
    faqs: [
      {
        question: "How do I find a recipe's total calories?",
        answer: "Add up the calories of every ingredient in the recipe using nutrition labels or a food database, being sure to use the actual amount you put in — for example the calories in the specific weight of oil, flour or cheese used, not a generic serving. Sum those figures to get the recipe total, then enter it here with the number of servings. Accurate ingredient totals are the foundation of a reliable per-serving number.",
      },
      {
        question: "What counts as one serving?",
        answer: "A serving is however you choose to divide the finished dish, so the calorie result is only as consistent as your portioning. If you say a recipe makes four servings, each plate should be about a quarter of the total for the number to hold true. Using the same bowl, weighing portions on a scale, or dividing evenly by eye all help keep servings equal so the per-serving calories match reality.",
      },
      {
        question: "Why divide calories per serving instead of tracking the whole recipe?",
        answer: "Because you rarely eat the entire recipe at once. Food diaries, calorie goals and nutrition labels all work on a per-portion basis, so converting a recipe total into calories per serving lets you log exactly what is on your plate. It also makes it easy to compare dishes fairly and to see how splitting a recipe into more or fewer servings changes the energy in each portion you actually consume.",
      },
      {
        question: "Does this account for protein, carbs and fat?",
        answer: "No, this calculator focuses on total calories per serving. To split macronutrients the same way, add up the grams of protein, carbohydrate and fat across the whole recipe and divide each by the number of servings using the same method. The per-serving calorie figure is the most common starting point for tracking, and you can layer macro breakdowns on top once you have the portioning right.",
      },
      {
        question: "How can I lower the calories per serving?",
        answer: "You have two levers: reduce the recipe's total calories, or increase the number of servings. Cutting back on high-calorie ingredients like oil, butter, sugar and cheese lowers the total, while bulking the dish with vegetables lets you cut larger, more filling portions at fewer calories each. Serving smaller portions raises the serving count and drops the per-portion figure directly, though genuine calorie reduction comes from the ingredients.",
      },
    ],
    relatedCalculators: ["recipe-servings-calculator", "recipe-scaler-calculator", "unit-price-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard nutrition arithmetic",
    slugEs: "calculadora-de-calorias-por-porcion",
    titleEs: "Calculadora de Calorías por Porción",
    shortDescriptionEs: "Divide las calorías totales de una receta entre sus porciones.",
    seoTitleEs: "Calculadora de Calorías por Porción — Calorías de Receta Simplificadas",
    metaDescriptionEs:
      "Calculadora de calorías por porción gratuita. Introduce las calorías totales de una receta y el número de porciones para hallar las calorías de cada porción para un seguimiento preciso.",
    primaryKeywordEs: "calculadora de calorías por porción",
    secondaryKeywordsEs: ["calorías de receta por porción", "calculadora de calorías por ración", "dividir calorías entre porciones"],
    formulaExplanationEs:
      "La energía total de una receta queda fija una vez definidos los ingredientes, así que las calorías de una porción dependen solo de en cuántas porciones la dividas. Sumar las calorías de cada ingrediente da el total, y dividir por el número de porciones reparte ese total uniformemente entre las porciones. El resultado asume que cada porción es de tamaño aproximadamente igual, por lo que un porcionado consistente importa. Cortar el mismo plato en más porciones baja las calorías por porción proporcionalmente, y en menos porciones las sube.",
    explanationEs:
      "Controlar lo que realmente comes significa conocer las calorías de una porción, no solo de toda la olla, y esta calculadora de calorías por porción hace esa división por ti. Sumas las calorías de todo lo que entró en la receta, introduces ese total y el número de porciones, y la herramienta devuelve las calorías de cada porción.\n\nEsto importa para cualquiera que cuente calorías, controle su peso o registre comidas en un diario de alimentación, porque las recetas casi siempre listan ingredientes para el plato completo en lugar de por ración. Dividir entre porciones convierte un total de receta en la cifra por porción sobre la que se construyen los registros de comida y los objetivos nutricionales. Una calculadora de calorías por porción hace ese paso instantáneo y elimina el riesgo de dividir mal en tu cabeza, algo fácil de hacer con una tanda grande.\n\nEl cálculo es una división directa: las calorías totales de la receta divididas por el número de porciones dan las calorías por porción. Una cazuela de 1.200 calorías cortada en cuatro porciones son 300 calorías cada una; dividida en seis baja a 200. La precisión del resultado depende de dos cosas — sumar correctamente las calorías de los ingredientes y porcionar el plato de forma uniforme — así que los tamaños de porción consistentes importan. Los cocineros caseros que planean comidas, las personas que siguen un objetivo calórico y cualquiera que construya una base de datos personal de recetas confían en una calculadora de calorías por porción para saber exactamente qué aporta un plato.",
    exampleEs: {
      inputs: { totalCalories: 1200, servings: 4 },
      explanation: "1.200 kcal ÷ 4 porciones = 300 kcal por porción.",
    },
    faqsEs: [
      {
        question: "¿Cómo encuentro las calorías totales de una receta?",
        answer: "Suma las calorías de cada ingrediente de la receta usando etiquetas nutricionales o una base de datos de alimentos, asegurándote de usar la cantidad real que pusiste — por ejemplo las calorías del peso específico de aceite, harina o queso usado, no una ración genérica. Suma esas cifras para obtener el total de la receta, luego introdúcelo aquí con el número de porciones. Los totales de ingredientes precisos son la base de una cifra fiable por porción.",
      },
      {
        question: "¿Qué cuenta como una porción?",
        answer: "Una porción es como decidas dividir el plato terminado, así que el resultado de calorías es solo tan consistente como tu porcionado. Si dices que una receta hace cuatro porciones, cada plato debería ser aproximadamente un cuarto del total para que la cifra se mantenga. Usar el mismo cuenco, pesar las porciones en una báscula o dividir uniformemente a ojo ayudan a mantener las porciones iguales para que las calorías por porción coincidan con la realidad.",
      },
      {
        question: "¿Por qué dividir las calorías por porción en lugar de contar toda la receta?",
        answer: "Porque rara vez comes la receta entera de una vez. Los diarios de alimentación, los objetivos calóricos y las etiquetas nutricionales trabajan por porción, así que convertir un total de receta en calorías por porción te deja registrar exactamente lo que hay en tu plato. También facilita comparar platos de forma justa y ver cómo dividir una receta en más o menos porciones cambia la energía de cada porción que realmente consumes.",
      },
      {
        question: "¿Esto tiene en cuenta las proteínas, los carbohidratos y las grasas?",
        answer: "No, esta calculadora se centra en las calorías totales por porción. Para repartir los macronutrientes de la misma forma, suma los gramos de proteína, carbohidrato y grasa de toda la receta y divide cada uno por el número de porciones con el mismo método. La cifra de calorías por porción es el punto de partida más común para el seguimiento, y puedes añadir el desglose de macros encima una vez que tengas el porcionado correcto.",
      },
      {
        question: "¿Cómo puedo bajar las calorías por porción?",
        answer: "Tienes dos palancas: reducir las calorías totales de la receta o aumentar el número de porciones. Recortar ingredientes altos en calorías como aceite, mantequilla, azúcar y queso baja el total, mientras que aumentar el volumen del plato con verduras te deja cortar porciones más grandes y saciantes con menos calorías cada una. Servir porciones más pequeñas sube el número de porciones y baja la cifra por porción directamente, aunque la reducción real viene de los ingredientes.",
      },
    ],
  },
  {
    id: "dough-hydration",
    slug: "dough-hydration-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Dough Hydration Calculator",
    shortDescription: "Calculate baker's hydration from flour and water weights.",
    seoTitle: "Dough Hydration Calculator — Baker's Percentage",
    metaDescription:
      "Free dough hydration calculator. Enter flour and water in grams to get the baker's hydration percentage for bread, pizza and sourdough doughs.",
    primaryKeyword: "dough hydration calculator",
    secondaryKeywords: ["bakers percentage calculator", "bread hydration calculator", "sourdough hydration calculator"],
    fields: [
      { id: "flourGrams", label: "Flour", type: "number", unit: "g", placeholder: "500", required: true, span: 1, min: 0, step: 1 },
      { id: "waterGrams", label: "Water", type: "number", unit: "g", placeholder: "350", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [{ id: "hydration", label: "Hydration", format: "number", decimals: 1, unit: "%", isPrimary: true }],
    formula: "hydration % = (water ÷ flour) × 100",
    formulaExplanation:
      "Baker's percentage always measures every ingredient against the flour, which is set at 100%. Hydration is the water weight expressed as a percentage of the flour weight, so dividing water by flour and multiplying by 100 gives it directly. Five hundred grams of flour with 350 grams of water is 70% hydration. Because the figure is a ratio to flour rather than to total dough weight, it stays comparable across recipes of any size, letting bakers describe and reproduce a dough's texture regardless of batch.",
    explanation:
      "Hydration is the single number bakers use to describe how wet a dough is, and this dough hydration calculator computes it from the flour and water weights you enter. Expressed as a baker's percentage — water as a percentage of flour — hydration predicts how a dough will feel, handle and bake, which is why bread, pizza and sourdough recipes are so often discussed in terms of it.\n\nKnowing the hydration matters because it drives the crumb and the workability of the dough. Lower-hydration doughs around 60 percent are firm and easy to shape, giving a tighter crumb, while higher-hydration doughs at 75 percent and above are slack and sticky but reward you with the open, airy holes prized in artisan bread and Neapolitan pizza. A dough hydration calculator lets you put a precise figure on a recipe so you can compare it to others and adjust with intent rather than guesswork.\n\nThe calculation follows the baker's percentage convention, where flour is always 100 percent and every other ingredient is measured against it. Hydration is therefore the water weight divided by the flour weight, times 100. Five hundred grams of flour with 350 grams of water works out to 70 percent hydration. Because it is a ratio to flour, the percentage stays meaningful whether you mix a small test batch or a big production dough. Home bakers, sourdough keepers and pizza makers all rely on a dough hydration calculator to hit a target texture and reproduce their best loaves.",
    example: {
      inputs: { flourGrams: 500, waterGrams: 350 },
      explanation: "350 g water ÷ 500 g flour × 100 = 70% hydration.",
    },
    faqs: [
      {
        question: "What is baker's hydration?",
        answer: "Hydration is the amount of water in a dough expressed as a percentage of the flour weight, using the baker's percentage system where flour is always 100 percent. So a dough with 500 grams of flour and 350 grams of water is 70 percent hydration. It is a compact way to describe how wet a dough is, and because it is measured against flour rather than total weight, it stays comparable across recipes of any size.",
      },
      {
        question: "What hydration should I use for bread?",
        answer: "It depends on the style. Sandwich loaves and enriched doughs often sit around 60 to 65 percent for a soft, easy-to-shape dough, while rustic and artisan breads run higher, from 70 up to 80 percent or more, for an open, airy crumb. Higher hydration is stickier and harder to handle but yields those large, irregular holes. Start near 70 percent for a versatile loaf and adjust to the texture you prefer.",
      },
      {
        question: "Does higher hydration make better bread?",
        answer: "Not automatically — it depends on what you are baking and your skill with wet dough. Higher hydration promotes an open, moist crumb and a longer shelf life, which suits ciabatta and country loaves, but slack dough is trickier to shape and needs good technique. Lower hydration is more forgiving and gives a tighter, more uniform crumb ideal for sandwich bread. The best hydration is the one that matches your recipe and handling ability.",
      },
      {
        question: "How do I increase or decrease hydration?",
        answer: "Adjust the water relative to the flour. To raise hydration, add more water or reduce the flour; to lower it, do the reverse. Because the percentage is water divided by flour, small changes move the figure noticeably, so alter water in modest increments and re-check the result. Keep in mind that different flours absorb water differently — wholemeal and high-protein bread flours drink more — so the same percentage can feel wetter or drier depending on the flour.",
      },
      {
        question: "Should I count starter or other liquids in hydration?",
        answer: "For a precise figure, yes. A sourdough starter contains both flour and water, so bakers doing exact calculations add the starter's flour to the total flour and its water to the total water before working out hydration. Other wet ingredients like milk, oil or eggs also contribute moisture in enriched doughs. This calculator handles the core flour-and-water ratio; for starter-inclusive precision, fold those amounts into the flour and water figures you enter.",
      },
    ],
    relatedCalculators: ["pizza-dough-calculator", "baking-conversion-calculator", "yeast-converter-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Baker's percentage convention",
    slugEs: "calculadora-de-hidratacion-de-masa",
    titleEs: "Calculadora de Hidratación de Masa",
    shortDescriptionEs: "Calcula la hidratación del panadero a partir de los pesos de harina y agua.",
    seoTitleEs: "Calculadora de Hidratación de Masa — Porcentaje del Panadero",
    metaDescriptionEs:
      "Calculadora de hidratación de masa gratuita. Introduce harina y agua en gramos para obtener el porcentaje de hidratación del panadero para masas de pan, pizza y masa madre.",
    primaryKeywordEs: "calculadora de hidratación de masa",
    secondaryKeywordsEs: ["calculadora de porcentaje del panadero", "calculadora de hidratación de pan", "calculadora de hidratación de masa madre"],
    formulaExplanationEs:
      "El porcentaje del panadero siempre mide cada ingrediente frente a la harina, fijada en el 100 %. La hidratación es el peso del agua expresado como porcentaje del peso de la harina, así que dividir el agua entre la harina y multiplicar por 100 la da directamente. Quinientos gramos de harina con 350 gramos de agua es un 70 % de hidratación. Como la cifra es una proporción respecto a la harina y no al peso total de la masa, se mantiene comparable entre recetas de cualquier tamaño, dejando a los panaderos describir y reproducir la textura de una masa.",
    explanationEs:
      "La hidratación es el único número que usan los panaderos para describir cuán húmeda está una masa, y esta calculadora de hidratación de masa la calcula a partir de los pesos de harina y agua que introduces. Expresada como porcentaje del panadero — el agua como porcentaje de la harina — la hidratación predice cómo se sentirá, se manejará y se horneará una masa, por lo que las recetas de pan, pizza y masa madre se discuten tan a menudo en términos de ella.\n\nConocer la hidratación importa porque impulsa la miga y la manejabilidad de la masa. Las masas de menor hidratación en torno al 60 por ciento son firmes y fáciles de dar forma, dando una miga más cerrada, mientras que las masas de mayor hidratación al 75 por ciento y más son flojas y pegajosas pero te recompensan con los agujeros abiertos y aireados apreciados en el pan artesano y la pizza napolitana. Una calculadora de hidratación de masa te deja poner una cifra precisa a una receta para compararla con otras y ajustar con intención en lugar de a ojo.\n\nEl cálculo sigue la convención del porcentaje del panadero, donde la harina es siempre el 100 por ciento y cada otro ingrediente se mide frente a ella. La hidratación es por tanto el peso del agua dividido por el peso de la harina, por 100. Quinientos gramos de harina con 350 gramos de agua resultan en un 70 por ciento de hidratación. Como es una proporción respecto a la harina, el porcentaje sigue siendo significativo tanto si mezclas una pequeña tanda de prueba como una gran masa de producción. Los panaderos caseros, los cuidadores de masa madre y los pizzeros confían en una calculadora de hidratación de masa para alcanzar una textura objetivo y reproducir sus mejores panes.",
    exampleEs: {
      inputs: { flourGrams: 500, waterGrams: 350 },
      explanation: "350 g de agua ÷ 500 g de harina × 100 = 70 % de hidratación.",
    },
    faqsEs: [
      {
        question: "¿Qué es la hidratación del panadero?",
        answer: "La hidratación es la cantidad de agua en una masa expresada como porcentaje del peso de la harina, usando el sistema de porcentaje del panadero donde la harina es siempre el 100 por ciento. Así una masa con 500 gramos de harina y 350 gramos de agua tiene un 70 por ciento de hidratación. Es una forma compacta de describir cuán húmeda está una masa, y como se mide frente a la harina en vez del peso total, se mantiene comparable entre recetas de cualquier tamaño.",
      },
      {
        question: "¿Qué hidratación debo usar para el pan?",
        answer: "Depende del estilo. Los panes de molde y las masas enriquecidas suelen situarse en torno al 60 a 65 por ciento para una masa blanda y fácil de dar forma, mientras que los panes rústicos y artesanos van más altos, del 70 hasta el 80 por ciento o más, para una miga abierta y aireada. Una hidratación más alta es más pegajosa y difícil de manejar pero da esos agujeros grandes e irregulares. Empieza cerca del 70 por ciento para un pan versátil y ajusta a la textura que prefieras.",
      },
      {
        question: "¿Una hidratación más alta hace mejor pan?",
        answer: "No automáticamente — depende de qué hornees y de tu habilidad con la masa húmeda. Una hidratación más alta favorece una miga abierta y húmeda y una vida útil más larga, lo que conviene a la chapata y los panes de campo, pero la masa floja es más difícil de dar forma y necesita buena técnica. Una hidratación más baja es más indulgente y da una miga más cerrada y uniforme ideal para el pan de molde. La mejor hidratación es la que encaja con tu receta y tu manejo.",
      },
      {
        question: "¿Cómo aumento o disminuyo la hidratación?",
        answer: "Ajusta el agua respecto a la harina. Para subir la hidratación, añade más agua o reduce la harina; para bajarla, haz lo contrario. Como el porcentaje es agua dividida por harina, los pequeños cambios mueven la cifra notablemente, así que altera el agua en incrementos modestos y vuelve a comprobar el resultado. Ten en cuenta que las distintas harinas absorben el agua de forma diferente — las integrales y de fuerza beben más — así que el mismo porcentaje puede sentirse más húmedo o seco según la harina.",
      },
      {
        question: "¿Debo contar la masa madre u otros líquidos en la hidratación?",
        answer: "Para una cifra precisa, sí. Una masa madre contiene tanto harina como agua, así que los panaderos que hacen cálculos exactos suman la harina de la masa madre a la harina total y su agua al agua total antes de calcular la hidratación. Otros ingredientes húmedos como leche, aceite o huevos también aportan humedad en masas enriquecidas. Esta calculadora gestiona la proporción básica de harina y agua; para precisión con masa madre, incorpora esas cantidades a las cifras de harina y agua que introduces.",
      },
    ],
  },
  {
    id: "brine",
    slug: "brine-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Brine Calculator",
    shortDescription: "Find the salt weight for a brine at any concentration.",
    seoTitle: "Brine Calculator — Salt for Wet Brining and Fermenting",
    metaDescription:
      "Free brine calculator. Enter water in litres and a salt percentage to get the exact grams of salt for brining meat, poultry or fermenting vegetables.",
    primaryKeyword: "brine calculator",
    secondaryKeywords: ["salt brine calculator", "brining salt ratio", "wet brine calculator"],
    fields: [
      { id: "waterLiters", label: "Water", type: "number", unit: "L", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "saltPercent", label: "Salt concentration", type: "number", unit: "%", placeholder: "5", defaultValue: 5, required: true, span: 1, min: 0, step: 0.1 },
    ],
    results: [{ id: "saltGrams", label: "Salt needed", format: "number", decimals: 0, unit: "g", isPrimary: true }],
    formula: "salt (g) = water (L) × 1000 × salt% ÷ 100",
    formulaExplanation:
      "A brine's strength is the weight of salt relative to the weight of water. Since one litre of water weighs 1000 grams, multiplying the litres by 1000 gives the water weight in grams, and taking the chosen percentage of that yields the salt needed. Two litres of water at 5% needs 100 grams of salt. Because the figure scales directly with both water volume and percentage, you can size any batch and target any concentration while keeping the salt-to-water ratio, and therefore the effect on the food, consistent.",
    explanation:
      "Brining transforms how meat, poultry and vegetables turn out, and this brine calculator gives you the precise weight of salt to dissolve in your water for any concentration you choose. A wet brine is simply salted water, and the salt percentage is what determines whether you get a gentle seasoning brine, a stronger cure, or a fermentation brine for pickles and vegetables.\n\nGetting the salt right matters because concentration controls the outcome. A brine that is too weak barely seasons and does little to keep meat juicy, while one that is too strong can leave food unpleasantly salty or, in fermentation, halt the good bacteria you are relying on. A brine calculator removes the guesswork so you can hit a repeatable percentage every time — a 5 percent brine for poultry, for instance, or the classic range used for fermenting vegetables — instead of eyeballing handfuls of salt.\n\nThe math rests on the fact that one litre of water weighs 1,000 grams. The salt weight is the water in litres times 1,000, times the salt percentage divided by 100. So two litres of water at a 5 percent concentration needs 100 grams of salt. Because it scales directly with both the water and the percentage, you can size a brine for a single chicken breast or a large fermentation crock and keep the strength identical. Cooks brining a holiday turkey, barbecue enthusiasts, and home fermenters all rely on a brine calculator to salt their water accurately.",
    example: {
      inputs: { waterLiters: 2, saltPercent: 5 },
      explanation: "2 L × 1000 × 5 ÷ 100 = 100 g of salt for a 5% brine.",
    },
    faqs: [
      {
        question: "What salt concentration should I use for brining meat?",
        answer: "For a standard wet brine on poultry and pork, a concentration of about 5 to 8 percent salt by weight of water is common, seasoning the meat and helping it retain moisture during cooking. Lighter brines around 3 to 5 percent suit shorter soaks or delicate cuts. Stronger brines act faster but risk over-salting, so match the percentage and soaking time to the size of the cut and check a trusted recipe for specifics.",
      },
      {
        question: "Does the type of salt change the amount?",
        answer: "This calculator works by weight, so the grams it gives are correct for any salt — table, kosher or sea salt — because a gram of salt is a gram regardless of crystal size. The difference only matters if you measure by volume, since coarse kosher salt fills a spoon less densely than fine table salt. Weighing the salt on a scale, as this tool assumes, sidesteps that problem entirely and keeps your brine consistent.",
      },
      {
        question: "How much salt do I need for fermenting vegetables?",
        answer: "Vegetable ferments like sauerkraut and pickles typically use a brine around 2 to 5 percent salt, strong enough to favour the beneficial lactic-acid bacteria while suppressing spoilage organisms. Many pickle recipes land near 3.5 percent. Enter your water volume and the target percentage to get the exact salt weight. Staying within the recommended range is important for fermentation safety, so follow a tested recipe for the concentration and timing.",
      },
      {
        question: "Should I account for the food displacing water?",
        answer: "For most home brining the small volume the food adds is not worth adjusting for, and using the water you pour in gives a close enough concentration. For precise fermentation, some cooks weigh the water plus the vegetables together and calculate salt against that combined weight for tighter control. This calculator bases the salt on the water alone, which is the simplest and most common method for brining meat and quick pickles.",
      },
      {
        question: "Can I reuse or scale a brine?",
        answer: "You can scale a brine freely — because the salt is a fixed percentage of the water, just enter the new water volume and the tool gives the matching salt weight, keeping the strength identical for a bigger or smaller batch. Reusing a brine, however, is not recommended for food safety, since it has been in contact with raw food and is diluted by released juices. Mix a fresh brine each time for reliable, safe results.",
      },
    ],
    relatedCalculators: ["meat-roasting-time-calculator", "cooking-time-calculator", "recipe-servings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard brining ratios",
    slugEs: "calculadora-de-salmuera",
    titleEs: "Calculadora de Salmuera",
    shortDescriptionEs: "Halla el peso de sal para una salmuera a cualquier concentración.",
    seoTitleEs: "Calculadora de Salmuera — Sal para Salmuera Húmeda y Fermentación",
    metaDescriptionEs:
      "Calculadora de salmuera gratuita. Introduce el agua en litros y un porcentaje de sal para obtener los gramos exactos de sal para salmuera de carne, aves o fermentación de verduras.",
    primaryKeywordEs: "calculadora de salmuera",
    secondaryKeywordsEs: ["calculadora de sal para salmuera", "proporción de sal en salmuera", "calculadora de salmuera húmeda"],
    formulaExplanationEs:
      "La fuerza de una salmuera es el peso de la sal respecto al peso del agua. Como un litro de agua pesa 1000 gramos, multiplicar los litros por 1000 da el peso del agua en gramos, y tomar el porcentaje elegido de eso da la sal necesaria. Dos litros de agua al 5 % necesitan 100 gramos de sal. Como la cifra escala directamente con el volumen de agua y el porcentaje, puedes dimensionar cualquier tanda y apuntar a cualquier concentración manteniendo constante la proporción sal-agua y, por tanto, el efecto sobre la comida.",
    explanationEs:
      "La salmuera transforma cómo salen la carne, las aves y las verduras, y esta calculadora de salmuera te da el peso preciso de sal a disolver en tu agua para cualquier concentración que elijas. Una salmuera húmeda es simplemente agua salada, y el porcentaje de sal es lo que determina si obtienes una salmuera suave de sazonado, una cura más fuerte o una salmuera de fermentación para encurtidos y verduras.\n\nAcertar con la sal importa porque la concentración controla el resultado. Una salmuera demasiado débil apenas sazona y hace poco por mantener jugosa la carne, mientras que una demasiado fuerte puede dejar la comida desagradablemente salada o, en la fermentación, detener las bacterias buenas de las que dependes. Una calculadora de salmuera elimina las conjeturas para que alcances un porcentaje repetible cada vez — una salmuera al 5 por ciento para aves, por ejemplo, o el rango clásico usado para fermentar verduras — en lugar de calcular a ojo puñados de sal.\n\nLas matemáticas se basan en que un litro de agua pesa 1.000 gramos. El peso de la sal es el agua en litros por 1.000, por el porcentaje de sal dividido por 100. Así, dos litros de agua a una concentración del 5 por ciento necesitan 100 gramos de sal. Como escala directamente tanto con el agua como con el porcentaje, puedes dimensionar una salmuera para una sola pechuga de pollo o para una gran vasija de fermentación manteniendo idéntica la fuerza. Los cocineros que ponen en salmuera un pavo festivo, los aficionados a la barbacoa y los fermentadores caseros confían en una calculadora de salmuera para salar su agua con precisión.",
    exampleEs: {
      inputs: { waterLiters: 2, saltPercent: 5 },
      explanation: "2 L × 1000 × 5 ÷ 100 = 100 g de sal para una salmuera al 5 %.",
    },
    faqsEs: [
      {
        question: "¿Qué concentración de sal debo usar para poner carne en salmuera?",
        answer: "Para una salmuera húmeda estándar de aves y cerdo, una concentración de aproximadamente 5 a 8 por ciento de sal por peso de agua es común, sazonando la carne y ayudándola a retener humedad durante la cocción. Las salmueras más ligeras de en torno al 3 a 5 por ciento convienen a remojos más cortos o cortes delicados. Las salmueras más fuertes actúan más rápido pero arriesgan salar en exceso, así que ajusta el porcentaje y el tiempo de remojo al tamaño del corte.",
      },
      {
        question: "¿El tipo de sal cambia la cantidad?",
        answer: "Esta calculadora trabaja por peso, así que los gramos que da son correctos para cualquier sal — de mesa, kosher o marina — porque un gramo de sal es un gramo sin importar el tamaño del cristal. La diferencia solo importa si mides por volumen, ya que la sal kosher gruesa llena una cuchara con menos densidad que la sal de mesa fina. Pesar la sal en una báscula, como asume esta herramienta, evita ese problema por completo y mantiene tu salmuera consistente.",
      },
      {
        question: "¿Cuánta sal necesito para fermentar verduras?",
        answer: "Las fermentaciones de verduras como el chucrut y los encurtidos suelen usar una salmuera en torno al 2 a 5 por ciento de sal, lo bastante fuerte para favorecer las bacterias ácido-lácticas beneficiosas mientras suprime los organismos de deterioro. Muchas recetas de encurtidos rondan el 3,5 por ciento. Introduce tu volumen de agua y el porcentaje objetivo para obtener el peso exacto de sal. Mantenerse dentro del rango recomendado es importante para la seguridad de la fermentación, así que sigue una receta probada.",
      },
      {
        question: "¿Debo tener en cuenta que la comida desplaza agua?",
        answer: "Para la mayoría de las salmueras caseras el pequeño volumen que añade la comida no merece ajuste, y usar el agua que viertes da una concentración lo bastante cercana. Para una fermentación precisa, algunos cocineros pesan el agua más las verduras juntas y calculan la sal frente a ese peso combinado para un control más ajustado. Esta calculadora basa la sal solo en el agua, que es el método más simple y común para poner carne en salmuera y encurtidos rápidos.",
      },
      {
        question: "¿Puedo reutilizar o escalar una salmuera?",
        answer: "Puedes escalar una salmuera libremente — como la sal es un porcentaje fijo del agua, solo introduce el nuevo volumen de agua y la herramienta da el peso de sal equivalente, manteniendo idéntica la fuerza para una tanda mayor o menor. Reutilizar una salmuera, sin embargo, no se recomienda por seguridad alimentaria, ya que ha estado en contacto con comida cruda y se diluye con los jugos liberados. Prepara una salmuera fresca cada vez para resultados fiables y seguros.",
      },
    ],
  },
  {
    id: "meat-roasting-time",
    slug: "meat-roasting-time-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Meat Roasting Time Calculator",
    shortDescription: "Estimate roasting time from weight, rate and resting.",
    seoTitle: "Meat Roasting Time Calculator — Cooking Time by Weight",
    metaDescription:
      "Free meat roasting time calculator. Enter weight in kilograms, minutes per kilogram and resting time to estimate total roasting time for any joint.",
    primaryKeyword: "meat roasting time calculator",
    secondaryKeywords: ["roast cooking time calculator", "roasting time by weight", "meat cooking time calculator"],
    fields: [
      { id: "weightKg", label: "Weight", type: "number", unit: "kg", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "minutesPerKg", label: "Minutes per kilogram", type: "number", unit: "min/kg", placeholder: "40", defaultValue: 40, required: true, span: 1, min: 0, step: 1 },
      { id: "restMinutes", label: "Resting time", type: "number", unit: "min", placeholder: "15", defaultValue: 15, required: false, span: 2, min: 0, step: 1 },
    ],
    results: [
      { id: "cookingMinutes", label: "Cooking time", format: "duration", isPrimary: true },
      { id: "totalMinutes", label: "Total time with resting", format: "duration", isPrimary: false },
    ],
    formula: "cooking time = weight × minutes per kg; total = cooking time + resting time",
    formulaExplanation:
      "Roasting time scales with weight because heat has to travel from the surface to the centre of the joint, and a heavier piece has more mass to warm through. Multiplying the weight in kilograms by a per-kilogram rate gives the oven time; the rate you pick reflects the meat and how well done you want it. Adding the resting time gives the total to plan around, since a roast keeps cooking and its juices redistribute off the heat. Both parts are linear, so the schedule scales cleanly with the size of the joint.",
    explanation:
      "Timing a roast so it lands cooked-through but not dried out is far easier when you anchor it to weight, and this meat roasting time calculator turns a joint's weight, a per-kilogram cooking rate and a resting period into a clear schedule. You choose the rate that matches your meat and doneness, and the tool returns both the oven time and the total time including the all-important rest.\n\nThis matters because a roast's cooking time is driven by how long heat takes to reach the centre, which grows with the size of the joint. Using minutes per kilogram gives a dependable estimate you can plan the rest of the meal around, from when the oven goes on to when the plates hit the table. A meat roasting time calculator also builds in resting time, which many cooks forget — the period off the heat where juices settle and carry-over cooking finishes the job.\n\nThe calculation is straightforward: cooking time equals the weight in kilograms multiplied by your chosen minutes-per-kilogram rate, and the total adds the resting minutes on top. A two-kilogram joint at 40 minutes per kilogram needs about 80 minutes in the oven, plus a 15-minute rest for 95 minutes in all. Because the rate is adjustable, you can dial in beef, lamb, pork or poultry and your preferred doneness. Crucially, roasting time is a guide, not a guarantee — oven accuracy, bone and starting temperature all shift it — so always confirm doneness with a meat thermometer. Cooks planning a Sunday roast or a holiday centrepiece rely on a meat roasting time calculator to bring the meal together on time.",
    example: {
      inputs: { weightKg: 2, minutesPerKg: 40, restMinutes: 15 },
      explanation: "2 kg × 40 min/kg = 80 min cooking, plus 15 min resting = 95 min total.",
    },
    faqs: [
      {
        question: "How do I choose the minutes-per-kilogram rate?",
        answer: "The rate depends on the meat and how well done you want it. Roughly, beef and lamb for medium sit around 40 minutes per kilogram, pork nearer 55 to 65, and chicken about 45, though rates vary with recipe and oven temperature. Use a lower rate for rarer beef and a higher one for well-done. Because these are guides, treat the calculated time as a schedule and confirm the real doneness with a meat thermometer.",
      },
      {
        question: "Why does the calculator include resting time?",
        answer: "Resting is a crucial step that many cooks overlook. After roasting, letting the meat sit allows the juices to redistribute and the internal temperature to climb a few more degrees through carry-over cooking, so the meat is juicier and easier to carve. This calculator adds your resting minutes to the cooking time to give a realistic total, helping you plan when to start so the roast is ready — rested and all — exactly when you want to serve.",
      },
      {
        question: "Should I use a thermometer as well?",
        answer: "Yes, always for anything where safety or doneness matters. Time alone never guarantees a roast is properly cooked because ovens, cuts and starting temperatures vary. A meat thermometer inserted into the thickest part, away from bone, is the definitive test — for example around 75°C for poultry and lower targets for beef depending on doneness. Use the calculated time to plan and to know when to start checking, then let the thermometer make the final call.",
      },
      {
        question: "Does bone-in or stuffed meat change the time?",
        answer: "It can. Bone conducts heat differently, so bone-in joints may cook a little faster near the bone but slower through dense muscle. Stuffing a bird adds significant time because the heat must also bring the filling up to a safe temperature, which slows the whole roast. In both cases, increase the minutes-per-kilogram rate or simply lean more heavily on a thermometer in the thickest section rather than trusting the time alone.",
      },
      {
        question: "Should I take the meat out of the fridge first?",
        answer: "Letting a joint sit at room temperature for a while before roasting helps it cook more evenly, since a fridge-cold centre takes longer to warm through and can leave the outside overdone before the middle is ready. Many cooks rest larger roasts out of the fridge for 30 to 60 minutes beforehand, following food-safety limits. A colder starting point pushes the real cooking time up, so factor that in and verify with a thermometer.",
      },
    ],
    relatedCalculators: ["cooking-time-calculator", "oven-temperature-converter", "brine-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard roasting guidance",
    slugEs: "calculadora-de-tiempo-de-asado-de-carne",
    titleEs: "Calculadora de Tiempo de Asado de Carne",
    shortDescriptionEs: "Estima el tiempo de asado a partir del peso, la tasa y el reposo.",
    seoTitleEs: "Calculadora de Tiempo de Asado de Carne — Tiempo de Cocción por Peso",
    metaDescriptionEs:
      "Calculadora de tiempo de asado de carne gratuita. Introduce el peso en kilogramos, los minutos por kilogramo y el tiempo de reposo para estimar el tiempo total de asado de cualquier pieza.",
    primaryKeywordEs: "calculadora de tiempo de asado de carne",
    secondaryKeywordsEs: ["calculadora de tiempo de cocción de asado", "tiempo de asado por peso", "calculadora de tiempo de cocción de carne"],
    formulaExplanationEs:
      "El tiempo de asado escala con el peso porque el calor tiene que viajar desde la superficie hasta el centro de la pieza, y una pieza más pesada tiene más masa que calentar. Multiplicar el peso en kilogramos por una tasa por kilogramo da el tiempo de horno; la tasa que elijas refleja la carne y cuán hecha la quieras. Sumar el tiempo de reposo da el total a planificar, ya que un asado sigue cocinándose y sus jugos se redistribuyen fuera del calor. Ambas partes son lineales, así que el horario escala limpiamente con el tamaño de la pieza.",
    explanationEs:
      "Cronometrar un asado para que quede bien cocido pero no seco es mucho más fácil cuando lo anclas al peso, y esta calculadora de tiempo de asado de carne convierte el peso de una pieza, una tasa de cocción por kilogramo y un periodo de reposo en un horario claro. Eliges la tasa que encaja con tu carne y su punto, y la herramienta devuelve tanto el tiempo de horno como el tiempo total incluido el reposo, tan importante.\n\nEsto importa porque el tiempo de cocción de un asado lo impulsa cuánto tarda el calor en llegar al centro, que crece con el tamaño de la pieza. Usar minutos por kilogramo da una estimación fiable alrededor de la cual planificar el resto de la comida, desde cuándo se enciende el horno hasta cuándo llegan los platos a la mesa. Una calculadora de tiempo de asado de carne también incorpora el tiempo de reposo, que muchos cocineros olvidan — el periodo fuera del calor donde los jugos se asientan y la cocción residual termina el trabajo.\n\nEl cálculo es directo: el tiempo de cocción es igual al peso en kilogramos multiplicado por tu tasa elegida de minutos por kilogramo, y el total suma los minutos de reposo encima. Una pieza de dos kilogramos a 40 minutos por kilogramo necesita unos 80 minutos en el horno, más un reposo de 15 minutos para 95 minutos en total. Como la tasa es ajustable, puedes fijar ternera, cordero, cerdo o aves y tu punto preferido. Fundamentalmente, el tiempo de asado es una guía, no una garantía — la precisión del horno, el hueso y la temperatura inicial lo desplazan — así que confirma siempre el punto con un termómetro de carne. Los cocineros que planean un asado dominical o una pieza central festiva confían en una calculadora de tiempo de asado de carne para que la comida cuadre a tiempo.",
    exampleEs: {
      inputs: { weightKg: 2, minutesPerKg: 40, restMinutes: 15 },
      explanation: "2 kg × 40 min/kg = 80 min de cocción, más 15 min de reposo = 95 min en total.",
    },
    faqsEs: [
      {
        question: "¿Cómo elijo la tasa de minutos por kilogramo?",
        answer: "La tasa depende de la carne y de cuán hecha la quieras. Aproximadamente, la ternera y el cordero al punto rondan los 40 minutos por kilogramo, el cerdo cerca de 55 a 65 y el pollo unos 45, aunque las tasas varían con la receta y la temperatura del horno. Usa una tasa menor para ternera más roja y una mayor para bien hecha. Como son guías, trata el tiempo calculado como un horario y confirma el punto real con un termómetro de carne.",
      },
      {
        question: "¿Por qué la calculadora incluye el tiempo de reposo?",
        answer: "El reposo es un paso crucial que muchos cocineros pasan por alto. Tras el asado, dejar reposar la carne permite que los jugos se redistribuyan y que la temperatura interna suba unos grados más por cocción residual, así que la carne queda más jugosa y fácil de cortar. Esta calculadora suma tus minutos de reposo al tiempo de cocción para dar un total realista, ayudándote a planificar cuándo empezar para que el asado esté listo — reposado incluido — justo cuando quieras servir.",
      },
      {
        question: "¿Debo usar también un termómetro?",
        answer: "Sí, siempre para cualquier cosa donde importe la seguridad o el punto. El tiempo por sí solo nunca garantiza que un asado esté bien cocido porque los hornos, los cortes y las temperaturas iniciales varían. Un termómetro de carne insertado en la parte más gruesa, lejos del hueso, es la prueba definitiva — por ejemplo alrededor de 75 °C para aves y objetivos más bajos para ternera según el punto. Usa el tiempo calculado para planificar y saber cuándo empezar a comprobar, luego deja que el termómetro decida.",
      },
      {
        question: "¿La carne con hueso o rellena cambia el tiempo?",
        answer: "Puede. El hueso conduce el calor de forma distinta, así que las piezas con hueso pueden cocinarse algo más rápido cerca del hueso pero más lento a través del músculo denso. Rellenar un ave añade tiempo significativo porque el calor también debe llevar el relleno a una temperatura segura, lo que ralentiza todo el asado. En ambos casos, aumenta la tasa de minutos por kilogramo o apóyate más en un termómetro en la sección más gruesa en lugar de fiarte solo del tiempo.",
      },
      {
        question: "¿Debo sacar la carne de la nevera primero?",
        answer: "Dejar una pieza a temperatura ambiente un rato antes de asar la ayuda a cocinarse más uniformemente, ya que un centro frío de nevera tarda más en calentarse y puede dejar el exterior demasiado hecho antes de que el medio esté listo. Muchos cocineros dejan reposar los asados grandes fuera de la nevera 30 a 60 minutos antes, respetando los límites de seguridad alimentaria. Un punto de partida más frío sube el tiempo real de cocción, así que tenlo en cuenta y verifica con un termómetro.",
      },
    ],
  },
  {
    id: "pizza-dough",
    slug: "pizza-dough-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Pizza Dough Calculator",
    shortDescription: "Get flour, water, salt and yeast for your pizza dough balls.",
    seoTitle: "Pizza Dough Calculator — Flour, Water, Salt and Yeast",
    metaDescription:
      "Free pizza dough calculator. Enter the number of dough balls, ball weight and hydration to get exact flour, water, salt and yeast from baker's percentages.",
    primaryKeyword: "pizza dough calculator",
    secondaryKeywords: ["pizza dough recipe calculator", "neapolitan dough calculator", "pizza dough ball calculator"],
    fields: [
      { id: "numberOfBalls", label: "Number of dough balls", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
      { id: "ballWeightGrams", label: "Ball weight", type: "number", unit: "g", placeholder: "250", defaultValue: 250, required: true, span: 1, min: 0, step: 1 },
      { id: "hydrationPercent", label: "Hydration", type: "number", unit: "%", placeholder: "62", defaultValue: 62, required: true, span: 2, min: 0, step: 1 },
    ],
    results: [
      { id: "flourGrams", label: "Flour", format: "number", decimals: 0, unit: "g", isPrimary: true },
      { id: "waterGrams", label: "Water", format: "number", decimals: 0, unit: "g", isPrimary: false },
      { id: "saltGrams", label: "Salt", format: "number", decimals: 1, unit: "g", isPrimary: false },
      { id: "yeastGrams", label: "Yeast", format: "number", decimals: 1, unit: "g", isPrimary: false },
    ],
    formula: "total dough = balls × ball weight; flour = total ÷ (1 + hydration/100 + 0.025 + 0.005)",
    formulaExplanation:
      "Pizza dough is built on baker's percentages, where flour is 100% and every other ingredient is a percentage of the flour. With hydration as a chosen percentage, salt at 2.5% and yeast at 0.5%, the total dough weight equals the flour multiplied by (1 + hydration/100 + 0.025 + 0.005). Rearranging, the flour needed is the total dough weight divided by that same factor. Once the flour is known, water is flour times the hydration percentage, salt is 2.5% of flour and yeast 0.5%, so the whole recipe follows from the flour figure.",
    explanation:
      "Making pizza dough well means working backwards from how many bases you want to precise ingredient weights, and this pizza dough calculator does exactly that using baker's percentages. You enter the number of dough balls, how much each should weigh, and your target hydration, and the tool returns the flour, water, salt and yeast to weigh out.\n\nThis approach matters because great pizza is a matter of ratios, not rough handfuls. The weight of each ball sets the size of the pizza — around 250 grams is typical for a Neapolitan-style base — and the hydration sets the texture, from a firmer, crisper crust at lower percentages to a lighter, more open one higher up. A pizza dough calculator lets you scale from a couple of pizzas to a party's worth while keeping the recipe perfectly in proportion, so every batch behaves the same.\n\nThe method uses baker's percentages, where flour is 100 percent and the other ingredients are set against it: hydration as your chosen water percentage, salt at 2.5 percent and yeast at 0.5 percent. The total dough weight is the number of balls times the ball weight, and the flour is that total divided by one plus the hydration fraction plus the salt and yeast fractions. Water, salt and yeast then follow directly from the flour. So four 250-gram balls at 62 percent hydration need about 606 grams of flour, 376 of water, 15 of salt and 3 of yeast. Home pizza makers, dough-obsessed hobbyists and anyone hosting a pizza night rely on a pizza dough calculator to nail the recipe every time.",
    example: {
      inputs: { numberOfBalls: 4, ballWeightGrams: 250, hydrationPercent: 62 },
      explanation: "4 × 250 g = 1000 g dough → about 606 g flour, 376 g water, 15 g salt, 3 g yeast.",
    },
    faqs: [
      {
        question: "How heavy should each pizza dough ball be?",
        answer: "It depends on the pizza size and style. Neapolitan-style bases are commonly 250 to 280 grams, giving a roughly 30-centimetre pizza with a puffy rim. Smaller personal pizzas might use 200 grams, while larger or thicker bases run heavier. Enter your preferred ball weight and the calculator scales everything else to match. Choosing a consistent ball weight is what makes your pizzas come out the same size and thickness batch after batch.",
      },
      {
        question: "What hydration is best for pizza dough?",
        answer: "For home ovens, hydration around 60 to 65 percent is a forgiving and popular range, producing a dough that is easy to stretch and bakes into a crisp yet tender crust. Higher hydration of 70 percent or more gives a lighter, more open and airy crumb favoured for Neapolitan pizza in very hot ovens, but the wetter dough is harder to handle. Start near 62 percent and adjust once you are comfortable managing the dough.",
      },
      {
        question: "Why are salt and yeast such small amounts?",
        answer: "In baker's percentages, salt and yeast are measured against the flour, and pizza dough uses only about 2.5 percent salt and 0.5 percent yeast. Salt controls flavour and tightens the gluten, so too much makes the dough tough while too little leaves it bland and slack. Yeast is kept low because pizza dough is usually given a long, slow rise, which develops flavour and needs only a little yeast to reach a good, well-fermented result.",
      },
      {
        question: "Can I use this for a long cold ferment?",
        answer: "Yes. The ingredient weights the calculator gives work for both same-day and long cold-fermented doughs, since the recipe proportions are the same. For a slow rise in the fridge over one to three days, the modest 0.5 percent yeast is ideal because the dough ferments gradually, deepening flavour and improving digestibility. Just mix to these weights, then choose your fermentation schedule — a longer cold prove generally rewards you with a tastier, more extensible crust.",
      },
      {
        question: "How do I scale the recipe for more pizzas?",
        answer: "Simply change the number of dough balls, and the calculator recomputes the flour, water, salt and yeast to match while keeping every ratio identical. Because the recipe is built on baker's percentages, doubling the balls doubles all the ingredients, so a batch for eight tastes and handles just like a batch for four. This makes it easy to plan for a crowd — decide how many pizzas you need and weigh out exactly what the tool specifies.",
      },
    ],
    relatedCalculators: ["dough-hydration-calculator", "yeast-converter-calculator", "baking-conversion-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Baker's percentage convention",
    slugEs: "calculadora-de-masa-de-pizza",
    titleEs: "Calculadora de Masa de Pizza",
    shortDescriptionEs: "Obtén harina, agua, sal y levadura para tus bolas de masa de pizza.",
    seoTitleEs: "Calculadora de Masa de Pizza — Harina, Agua, Sal y Levadura",
    metaDescriptionEs:
      "Calculadora de masa de pizza gratuita. Introduce el número de bolas de masa, el peso de bola y la hidratación para obtener harina, agua, sal y levadura exactas a partir de porcentajes del panadero.",
    primaryKeywordEs: "calculadora de masa de pizza",
    secondaryKeywordsEs: ["calculadora de receta de masa de pizza", "calculadora de masa napolitana", "calculadora de bolas de masa de pizza"],
    formulaExplanationEs:
      "La masa de pizza se construye sobre porcentajes del panadero, donde la harina es el 100 % y cada otro ingrediente es un porcentaje de la harina. Con la hidratación como porcentaje elegido, la sal al 2,5 % y la levadura al 0,5 %, el peso total de la masa es igual a la harina multiplicada por (1 + hidratación/100 + 0,025 + 0,005). Reordenando, la harina necesaria es el peso total de la masa dividido por ese mismo factor. Una vez conocida la harina, el agua es la harina por el porcentaje de hidratación, la sal el 2,5 % y la levadura el 0,5 %.",
    explanationEs:
      "Hacer bien la masa de pizza significa trabajar hacia atrás desde cuántas bases quieres hasta pesos precisos de ingredientes, y esta calculadora de masa de pizza hace exactamente eso usando porcentajes del panadero. Introduces el número de bolas de masa, cuánto debe pesar cada una y tu hidratación objetivo, y la herramienta devuelve la harina, el agua, la sal y la levadura a pesar.\n\nEste enfoque importa porque la gran pizza es cuestión de proporciones, no de puñados aproximados. El peso de cada bola fija el tamaño de la pizza — unos 250 gramos es típico para una base de estilo napolitano — y la hidratación fija la textura, desde una corteza más firme y crujiente en porcentajes bajos hasta una más ligera y abierta más arriba. Una calculadora de masa de pizza te deja escalar de un par de pizzas a las de una fiesta manteniendo la receta perfectamente en proporción, así que cada tanda se comporta igual.\n\nEl método usa porcentajes del panadero, donde la harina es el 100 por ciento y los demás ingredientes se fijan frente a ella: la hidratación como tu porcentaje de agua elegido, la sal al 2,5 por ciento y la levadura al 0,5 por ciento. El peso total de la masa es el número de bolas por el peso de bola, y la harina es ese total dividido por uno más la fracción de hidratación más las fracciones de sal y levadura. El agua, la sal y la levadura siguen luego directamente de la harina. Así, cuatro bolas de 250 gramos al 62 por ciento de hidratación necesitan unos 606 gramos de harina, 376 de agua, 15 de sal y 3 de levadura. Los pizzeros caseros, los aficionados obsesionados con la masa y cualquiera que organice una noche de pizza confían en una calculadora de masa de pizza para clavar la receta cada vez.",
    exampleEs: {
      inputs: { numberOfBalls: 4, ballWeightGrams: 250, hydrationPercent: 62 },
      explanation: "4 × 250 g = 1000 g de masa → unos 606 g de harina, 376 g de agua, 15 g de sal, 3 g de levadura.",
    },
    faqsEs: [
      {
        question: "¿Cuánto debe pesar cada bola de masa de pizza?",
        answer: "Depende del tamaño y el estilo de la pizza. Las bases de estilo napolitano suelen ser de 250 a 280 gramos, dando una pizza de unos 30 centímetros con un borde esponjoso. Las pizzas personales más pequeñas podrían usar 200 gramos, mientras que las bases más grandes o gruesas van más pesadas. Introduce tu peso de bola preferido y la calculadora escala todo lo demás para coincidir. Elegir un peso de bola consistente es lo que hace que tus pizzas salgan del mismo tamaño y grosor tanda tras tanda.",
      },
      {
        question: "¿Qué hidratación es mejor para la masa de pizza?",
        answer: "Para hornos domésticos, una hidratación en torno al 60 a 65 por ciento es un rango indulgente y popular, produciendo una masa fácil de estirar que se hornea en una corteza crujiente pero tierna. Una hidratación más alta del 70 por ciento o más da una miga más ligera, abierta y aireada favorecida para la pizza napolitana en hornos muy calientes, pero la masa más húmeda es más difícil de manejar. Empieza cerca del 62 por ciento y ajusta una vez que te sientas cómodo manejando la masa.",
      },
      {
        question: "¿Por qué son tan pequeñas las cantidades de sal y levadura?",
        answer: "En los porcentajes del panadero, la sal y la levadura se miden frente a la harina, y la masa de pizza usa solo un 2,5 por ciento de sal y un 0,5 por ciento de levadura. La sal controla el sabor y tensa el gluten, así que demasiada endurece la masa mientras que muy poca la deja sosa y floja. La levadura se mantiene baja porque la masa de pizza suele recibir una fermentación larga y lenta, que desarrolla sabor y solo necesita un poco de levadura para un buen resultado bien fermentado.",
      },
      {
        question: "¿Puedo usar esto para una fermentación fría larga?",
        answer: "Sí. Los pesos de ingredientes que da la calculadora funcionan tanto para masas del mismo día como para masas fermentadas en frío durante mucho tiempo, ya que las proporciones de la receta son las mismas. Para una fermentación lenta en la nevera de uno a tres días, el modesto 0,5 por ciento de levadura es ideal porque la masa fermenta gradualmente, profundizando el sabor y mejorando la digestibilidad. Mezcla a estos pesos y luego elige tu horario de fermentación — una fermentación fría más larga suele recompensar con una corteza más sabrosa.",
      },
      {
        question: "¿Cómo escalo la receta para más pizzas?",
        answer: "Simplemente cambia el número de bolas de masa, y la calculadora recalcula la harina, el agua, la sal y la levadura para coincidir manteniendo cada proporción idéntica. Como la receta se construye sobre porcentajes del panadero, doblar las bolas dobla todos los ingredientes, así que una tanda para ocho sabe y se maneja igual que una para cuatro. Esto facilita planificar para una multitud — decide cuántas pizzas necesitas y pesa exactamente lo que especifica la herramienta.",
      },
    ],
  },
];
