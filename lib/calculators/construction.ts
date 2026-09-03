import type { CalculatorDefinition } from "../types";

export const constructionCalculators: CalculatorDefinition[] = [
  {
    id: "paint",
    slug: "paint-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Paint Calculator",
    shortDescription: "Estimate how much paint your project needs.",
    seoTitle: "Paint Calculator — Free Paint Coverage Estimator",
    metaDescription:
      "Free paint calculator. Estimate the gallons and litres of paint you need from wall area, number of coats and coverage — plus cans to buy.",
    primaryKeyword: "paint calculator",
    secondaryKeywords: ["paint coverage calculator", "how much paint do i need", "paint estimator"],
    fields: [
      { id: "wallArea", label: "Wall area", type: "number", unit: "sq ft", placeholder: "800", required: true, span: 1, min: 0, helpText: "Total surface area to paint." },
      { id: "deductions", label: "Doors & windows", type: "number", unit: "sq ft", placeholder: "60", required: false, span: 1, min: 0, helpText: "Area to subtract." },
      { id: "coats", label: "Number of coats", type: "number", placeholder: "2", required: true, span: 1, min: 1, defaultValue: 2 },
      { id: "coverage", label: "Coverage per gallon", type: "number", unit: "sq ft", placeholder: "350", required: false, span: 1, min: 1, defaultValue: 350 },
    ],
    results: [
      { id: "gallons", label: "Paint needed", format: "number", decimals: 2, unit: "gal", isPrimary: true },
      { id: "cans", label: "Cans to buy", format: "number", decimals: 0, unit: "gal cans", isPrimary: false, description: "Rounded up" },
      { id: "litres", label: "Equivalent", format: "number", decimals: 2, unit: "L", isPrimary: false },
    ],
    formula: "gallons = ((wall area − deductions) × coats) ÷ coverage per gallon",
    explanation:
      "A paint calculator estimates how much paint a job needs before you set foot in the store, turning wall measurements into gallons, litres and the number of cans to buy. It takes the total surface area, subtracts the openings you will not paint such as doors and windows, multiplies by the number of coats, then divides by the coverage rate printed on the tin — usually 350 to 400 square feet per gallon on smooth interior walls. Getting the quantity right matters in both directions. Buy too little and you interrupt the work with a second trip, risking a visible seam where a fresh can meets dried paint or a slightly different batch. Buy far too much and money sits unused on the shelf. A paint calculator removes that guesswork and gives a defensible figure for budgeting. The area-times-coats-over-coverage method is used because paint is sold and rated by area coverage, so the arithmetic mirrors exactly how manufacturers specify their product. Homeowners, decorators, landlords and professional painters lean on a paint calculator when planning a room refresh, quoting a client, or ordering for a whole property, then round up to whole cans to keep a small reserve for touch-ups.",
    formulaExplanation:
      "Wall area minus deductions is the surface you will actually cover, since doors and windows take no paint. Multiplying by the number of coats accounts for each pass adding another full layer of area to cover. Dividing that total by the coverage rate per gallon converts square feet into gallons, because the coverage figure states how far one gallon stretches. Rounding up to whole cans reflects how paint is sold.",
    formulaSource: "Standard paint coverage estimation",
    example: {
      inputs: { wallArea: 800, deductions: 60, coats: 2, coverage: 350 },
      explanation: "(800 − 60) × 2 = 1,480 sq ft of coverage needed. 1,480 ÷ 350 ≈ 4.23 gallons, so buy 5 one-gallon cans.",
    },
    faqs: [
      { question: "How much paint do I need for one room?", answer: "Measure the perimeter of the room and multiply by the wall height to get the total wall area, then subtract roughly 20 square feet for each door and 15 for each window. A typical 12 by 12 foot room with 8 foot ceilings has around 384 square feet of wall, which needs a little over one gallon per coat. Enter your own figures above for an exact result including the ceiling if you are painting it." },
      { question: "How much does a gallon of paint cover?", answer: "Most interior wall paints cover about 350 to 400 square feet per gallon in a single coat on smooth, previously painted surfaces. Rough, textured, porous or bare surfaces drink more and can drop coverage to 250 square feet or less. Dark colours going over light ones, or vivid reds and yellows, often need extra paint because they hide poorly. Always check the coverage figure on your specific product." },
      { question: "How many coats of paint do I need?", answer: "Two coats is the standard for even colour, full coverage and lasting durability, and it is what manufacturers assume in their coverage ratings. One coat may suffice when you are repainting the same colour or refreshing a wall in good condition. Expect three coats when moving from a dark shade to a much lighter one, painting bare drywall, or using a strong colour that struggles to hide the surface beneath." },
      { question: "Should I buy extra paint?", answer: "Yes. Rounding up to whole cans, as this tool does, usually leaves a useful reserve, and keeping that leftover from the same batch is worth it. Touch-ups over the following years blend invisibly when they come from the original can, whereas a freshly mixed batch can differ subtly in shade. Store the sealed can somewhere cool and label it with the room and colour name for easy identification later." },
      { question: "Does primer count as a coat?", answer: "Treat primer as its own separate layer, not one of your colour coats. Primer seals the surface, blocks stains and helps the topcoat adhere and cover evenly, but it is not the finish. If your surface is bare, patched, glossy or changing colour dramatically, add one primer coat and calculate it separately using the primer's own coverage rate, then apply your two colour coats on top for the best result." },
    ],
    slugEs: "calculadora-de-pintura",
    titleEs: "Calculadora de Pintura",
    shortDescriptionEs: "Estima cuánta pintura necesita tu proyecto.",
    seoTitleEs: "Calculadora de Pintura — Estimador de Cobertura Gratis",
    metaDescriptionEs:
      "Calculadora de pintura gratuita. Estima los galones y litros de pintura que necesitas a partir del área de pared, el número de manos y la cobertura, además de las latas a comprar.",
    primaryKeywordEs: "calculadora de pintura",
    secondaryKeywordsEs: ["calculadora de cobertura de pintura", "cuanta pintura necesito", "estimador de pintura"],
    formulaExplanationEs:
      "El área de pared menos las deducciones es la superficie que realmente cubrirás, ya que las puertas y ventanas no llevan pintura. Multiplicar por el número de manos tiene en cuenta que cada pasada añade otra capa completa de área a cubrir. Dividir ese total por la tasa de cobertura por galón convierte los pies cuadrados en galones, porque la cifra de cobertura indica hasta dónde llega un galón. Redondear a latas enteras refleja cómo se vende la pintura.",
    explanationEs:
      "Una calculadora de pintura estima cuánta pintura necesita un trabajo antes de que pongas un pie en la tienda, convirtiendo las medidas de las paredes en galones, litros y el número de latas a comprar. Toma el área total de la superficie, resta los huecos que no vas a pintar como puertas y ventanas, multiplica por el número de manos y luego divide por la tasa de cobertura impresa en el bote, normalmente de 350 a 400 pies cuadrados por galón en paredes interiores lisas. Acertar con la cantidad importa en ambos sentidos. Compra muy poca e interrumpes el trabajo con un segundo viaje, arriesgando una junta visible donde una lata nueva se encuentra con la pintura seca o un lote ligeramente distinto. Compra demasiada y el dinero queda inmovilizado en el estante. Una calculadora de pintura elimina esa incertidumbre y da una cifra defendible para el presupuesto. El método de área por manos dividido por cobertura se usa porque la pintura se vende y se clasifica por cobertura de área, así que la aritmética refleja exactamente cómo especifican los fabricantes su producto. Propietarios, decoradores, arrendadores y pintores profesionales confían en una calculadora de pintura al planificar la renovación de una habitación, cotizar a un cliente u ordenar para toda una propiedad, y luego redondean a latas enteras para conservar una pequeña reserva para retoques.",
    exampleEs: {
      inputs: { wallArea: 800, deductions: 60, coats: 2, coverage: 350 },
      explanation: "(800 − 60) × 2 = 1,480 pies² de cobertura necesaria. 1,480 ÷ 350 ≈ 4.23 galones, así que compra 5 latas de un galón.",
    },
    faqsEs: [
      { question: "¿Cuánta pintura necesito para una habitación?", answer: "Mide el perímetro de la habitación y multiplícalo por la altura de la pared para obtener el área total, luego resta unos 20 pies cuadrados por cada puerta y 15 por cada ventana. Una habitación típica de 12 por 12 pies con techos de 8 pies tiene alrededor de 384 pies cuadrados de pared, que necesitan algo más de un galón por mano. Introduce tus propias cifras arriba para un resultado exacto, incluyendo el techo si lo vas a pintar." },
      { question: "¿Cuánto cubre un galón de pintura?", answer: "La mayoría de las pinturas de pared interior cubren unos 350 a 400 pies cuadrados por galón en una sola mano sobre superficies lisas y previamente pintadas. Las superficies rugosas, texturizadas, porosas o desnudas absorben más y pueden reducir la cobertura a 250 pies cuadrados o menos. Los colores oscuros sobre claros, o los rojos y amarillos vivos, suelen necesitar pintura extra porque cubren mal. Comprueba siempre la cifra de cobertura de tu producto concreto." },
      { question: "¿Cuántas manos de pintura necesito?", answer: "Dos manos es lo estándar para un color uniforme, cobertura total y durabilidad duradera, y es lo que los fabricantes asumen en sus índices de cobertura. Una mano puede bastar cuando repintas el mismo color o refrescas una pared en buen estado. Espera tres manos al pasar de un tono oscuro a uno mucho más claro, al pintar placa de yeso desnuda, o al usar un color fuerte que cubre con dificultad la superficie de debajo." },
      { question: "¿Debo comprar pintura extra?", answer: "Sí. Redondear a latas enteras, como hace esta herramienta, suele dejar una reserva útil, y conservar ese sobrante del mismo lote vale la pena. Los retoques en los años siguientes se mezclan de forma invisible cuando vienen de la lata original, mientras que un lote recién mezclado puede diferir sutilmente en el tono. Guarda la lata sellada en un lugar fresco y etiquétala con la habitación y el nombre del color para identificarla fácilmente después." },
      { question: "¿La imprimación cuenta como una mano?", answer: "Trata la imprimación como su propia capa separada, no como una de tus manos de color. La imprimación sella la superficie, bloquea manchas y ayuda a que el acabado se adhiera y cubra de forma uniforme, pero no es el acabado. Si tu superficie está desnuda, remendada, brillante o cambia de color drásticamente, añade una mano de imprimación y calcúlala por separado con su propia tasa de cobertura, y luego aplica tus dos manos de color encima." },
    ],
    relatedCalculators: ["concrete-calculator", "tile-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
