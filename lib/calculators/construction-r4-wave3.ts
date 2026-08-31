import type { CalculatorDefinition } from "../types";

export const constructionR4Calculators: CalculatorDefinition[] = [
  {
    id: "gravel",
    slug: "gravel-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Gravel Calculator",
    shortDescription: "Estimate cubic yards and tons of gravel needed.",
    seoTitle: "Gravel Calculator — Cubic Yards & Tons",
    metaDescription:
      "Free gravel calculator. Estimate the cubic yards and tons of gravel needed for a driveway, path or base from length, width, depth and a waste margin.",
    primaryKeyword: "gravel calculator",
    secondaryKeywords: ["gravel yardage calculator", "how much gravel do i need", "gravel tons calculator"],
    fields: [
      { id: "length", label: "Length", type: "number", unit: "ft", placeholder: "40", required: true, span: 1, min: 0, step: 0.01 },
      { id: "width", label: "Width", type: "number", unit: "ft", placeholder: "12", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depth", label: "Depth", type: "number", unit: "in", placeholder: "4", required: true, span: 1, min: 0, step: 0.1 },
      { id: "wastePercent", label: "Waste allowance", type: "number", unit: "%", placeholder: "0", required: false, span: 1, min: 0, max: 50, defaultValue: 0, helpText: "Optional extra for compaction and spillage." },
    ],
    results: [
      { id: "cubicYards", label: "Gravel needed", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "tons", label: "Approximate weight", format: "number", decimals: 2, unit: "tons", isPrimary: false, description: "At ~1.4 tons per cubic yard" },
    ],
    formula: "Volume (ft³) = length × width × (depth ÷ 12); yd³ = ft³ ÷ 27 × (1 + waste%); tons = yd³ × 1.4",
    formulaExplanation:
      "Length times width gives the ground area the gravel will cover in square feet, and multiplying by depth turns that flat area into a three-dimensional volume. Depth is divided by 12 first because it is entered in inches while length and width are in feet, so every dimension shares one unit before they are multiplied. Dividing the resulting cubic feet by 27 converts to cubic yards, since one cubic yard holds 27 cubic feet, and multiplying by one plus the waste fraction adds a margin. Multiplying yardage by 1.4 estimates weight in US tons, the rough density of common crushed gravel delivered dry.",
    formulaSource: "Standard construction estimation (area/volume method)",
    explanation:
      "A gravel calculator works out how much stone you need for a driveway, path, patio base or drainage layer, and reports it in both the cubic yards suppliers quote and the tons trucks are weighed by. You enter the length and width of the area and the depth of gravel you want, and the tool multiplies them into a volume, converting the depth from inches to feet so all three dimensions share one scale before dividing by 27 to reach cubic yards. Volume is the natural language of aggregate because bulk gravel is sold loose by the cubic yard or ton rather than in tidy packages. Ordering short means a second delivery fee and a seam where old and new stone meet at different compaction, while ordering long leaves a pile you must spread or haul away. Because gravel settles as it is compacted and some always scatters off the edges during spreading, the calculator lets you add a waste margin on purpose — many crews add 5 to 10 percent for compaction and spillage rather than discovering the shortfall on site. The length-times-width-times-depth method is standard estimation practice because a spread of gravel is simply a shallow rectangular volume. Contractors, landscapers and homeowners rely on it to price jobs and load trucks with confidence.",
    example: {
      inputs: { length: 40, width: 12, depth: 4, wastePercent: 0 },
      explanation: "40 × 12 × (4÷12) = 160 ft³ ≈ 5.93 yd³, about 8.3 tons of gravel before any waste margin.",
    },
    faqs: [
      { question: "How many tons of gravel are in a cubic yard?", answer: "Common crushed gravel weighs roughly 1.4 US tons per cubic yard when delivered dry, and this calculator uses that figure to convert yardage into an approximate tonnage. The exact number varies with stone type, size and moisture — wet gravel and dense crushed rock run heavier, while lighter decorative stone runs less. Ask your supplier for the density of the specific product to fine-tune the weight." },
      { question: "How deep should a gravel driveway be?", answer: "A residential gravel driveway usually needs about 4 inches of surface stone, and often more total depth once you include a coarser base layer beneath it, bringing the excavation to 6 to 8 inches. Depth drives volume directly in the formula, so every extra inch adds noticeable material. Softer or frequently used ground benefits from a deeper, layered build that resists rutting and drains well." },
      { question: "Should I add extra gravel for compaction?", answer: "Yes. Loose gravel settles as it is rolled or driven on, so the compacted depth ends up less than the loose depth you spread. Adding a 5 to 10 percent waste margin covers that settlement plus the stone that scatters off the edges and works into the subgrade. Use the waste field to build that cushion in rather than measuring the exact volume and coming up short on site." },
      { question: "Does this calculator include a margin for waste?", answer: "Only if you enter one. The waste field defaults to zero so the base result is the exact geometric volume of the area you describe, which keeps the figure transparent and easy to check. Type a percentage — commonly 5 to 10 percent — to add an allowance for compaction, spillage and uneven subgrade. Keeping the raw volume separate lets you scale the margin to the job and the ground conditions." },
      { question: "How do I measure gravel for an irregular area?", answer: "Split the space into simple rectangles, calculate the volume of each with its own length, width and depth, then add the results together. For a rough curve, approximate it as the rectangle that best contains it and let the waste margin absorb the small overage. Measuring carefully and rounding area up slightly is safer than rounding down, since a short load costs a second delivery." },
    ],
    slugEs: "calculadora-de-grava",
    titleEs: "Calculadora de Grava",
    shortDescriptionEs: "Estima las yardas cúbicas y toneladas de grava necesarias.",
    seoTitleEs: "Calculadora de Grava — Yardas Cúbicas y Toneladas",
    metaDescriptionEs:
      "Calculadora de grava gratuita. Estima las yardas cúbicas y toneladas de grava necesarias para una entrada, sendero o base a partir del largo, ancho, profundidad y un margen de desperdicio.",
    primaryKeywordEs: "calculadora de grava",
    secondaryKeywordsEs: ["calculadora de yardas de grava", "cuánta grava necesito", "calculadora de toneladas de grava"],
    formulaExplanationEs:
      "El largo por el ancho da el área del suelo que la grava cubrirá en pies cuadrados, y multiplicar por la profundidad convierte esa área plana en un volumen tridimensional. La profundidad se divide primero entre 12 porque se introduce en pulgadas mientras que el largo y el ancho están en pies, de modo que todas las dimensiones comparten una unidad antes de multiplicarse. Dividir los pies cúbicos resultantes entre 27 los convierte en yardas cúbicas, ya que una yarda cúbica contiene 27 pies cúbicos, y multiplicar por uno más la fracción de desperdicio añade un margen. Multiplicar las yardas por 1.4 estima el peso en toneladas estadounidenses, la densidad aproximada de la grava triturada común entregada seca.",
    explanationEs:
      "Una calculadora de grava determina cuánta piedra necesitas para una entrada de coche, un sendero, una base de patio o una capa de drenaje, y lo informa tanto en las yardas cúbicas que cotizan los proveedores como en las toneladas por las que se pesan los camiones. Introduces el largo y el ancho del área y la profundidad de grava que deseas, y la herramienta los multiplica en un volumen, convirtiendo la profundidad de pulgadas a pies para que las tres dimensiones compartan una escala antes de dividir entre 27 para llegar a yardas cúbicas. El volumen es el lenguaje natural del árido porque la grava a granel se vende suelta por yarda cúbica o tonelada en lugar de en paquetes ordenados. Pedir de menos significa una segunda tarifa de entrega y una junta donde la piedra vieja y la nueva se encuentran con distinta compactación, mientras que pedir de más deja un montón que debes esparcir o retirar. Como la grava se asienta al compactarse y siempre se dispersa algo por los bordes al esparcirla, la calculadora te permite añadir un margen de desperdicio a propósito: muchos equipos añaden entre un 5 y un 10 por ciento por compactación y derrame en lugar de descubrir la escasez en obra. El método de largo por ancho por profundidad es la práctica estándar de estimación porque una capa de grava es simplemente un volumen rectangular poco profundo. Contratistas, paisajistas y propietarios confían en él para presupuestar trabajos y cargar camiones con confianza.",
    exampleEs: {
      inputs: { length: 40, width: 12, depth: 4, wastePercent: 0 },
      explanation: "40 × 12 × (4÷12) = 160 ft³ ≈ 5.93 yd³, unas 8.3 toneladas de grava antes de cualquier margen de desperdicio.",
    },
    faqsEs: [
      { question: "¿Cuántas toneladas de grava hay en una yarda cúbica?", answer: "La grava triturada común pesa aproximadamente 1.4 toneladas estadounidenses por yarda cúbica cuando se entrega seca, y esta calculadora usa esa cifra para convertir el volumen en un tonelaje aproximado. El número exacto varía con el tipo de piedra, el tamaño y la humedad: la grava mojada y la roca triturada densa pesan más, mientras que la piedra decorativa ligera pesa menos. Pide a tu proveedor la densidad del producto específico para afinar el peso." },
      { question: "¿Qué profundidad debe tener una entrada de grava?", answer: "Una entrada de grava residencial suele necesitar unas 4 pulgadas de piedra de superficie, y a menudo más profundidad total una vez que incluyes una capa de base más gruesa debajo, llevando la excavación de 6 a 8 pulgadas. La profundidad determina el volumen directamente en la fórmula, así que cada pulgada extra añade material notable. El suelo blando o muy transitado se beneficia de una construcción más profunda y en capas que resiste el surcado y drena bien." },
      { question: "¿Debo añadir grava extra por la compactación?", answer: "Sí. La grava suelta se asienta a medida que se compacta con rodillo o al pasar sobre ella, por lo que la profundidad compactada acaba siendo menor que la profundidad suelta que esparces. Añadir un margen de desperdicio del 5 al 10 por ciento cubre ese asentamiento más la piedra que se dispersa por los bordes y se incrusta en la subrasante. Usa el campo de desperdicio para incorporar ese colchón en lugar de medir el volumen exacto y quedarte corto en obra." },
      { question: "¿Incluye esta calculadora un margen de desperdicio?", answer: "Solo si introduces uno. El campo de desperdicio está en cero por defecto, por lo que el resultado base es el volumen geométrico exacto del área que describes, lo que mantiene la cifra transparente y fácil de comprobar. Escribe un porcentaje, comúnmente del 5 al 10 por ciento, para añadir una tolerancia por compactación, derrame y subrasante irregular. Mantener el volumen bruto separado te permite ajustar el margen al trabajo y las condiciones del terreno." },
      { question: "¿Cómo mido grava para un área irregular?", answer: "Divide el espacio en rectángulos simples, calcula el volumen de cada uno con su propio largo, ancho y profundidad, y luego suma los resultados. Para una curva aproximada, considérala como el rectángulo que mejor la contiene y deja que el margen de desperdicio absorba el pequeño exceso. Medir con cuidado y redondear el área ligeramente hacia arriba es más seguro que redondear hacia abajo, ya que una carga corta cuesta una segunda entrega." },
    ],
    relatedCalculators: ["concrete-calculator", "paint-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "mulch",
    slug: "mulch-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Mulch Calculator",
    shortDescription: "Estimate cubic yards and bags of mulch needed.",
    seoTitle: "Mulch Calculator — Cubic Yards & Bags",
    metaDescription:
      "Free mulch calculator. Estimate the cubic yards and number of 2-cubic-foot bags of mulch needed to cover a bed from length, width and depth.",
    primaryKeyword: "mulch calculator",
    secondaryKeywords: ["how much mulch do i need", "mulch bags calculator", "mulch yardage calculator"],
    fields: [
      { id: "length", label: "Bed length", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "width", label: "Bed width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depth", label: "Mulch depth", type: "number", unit: "in", placeholder: "3", required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "cubicYards", label: "Mulch needed", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "bags2cuft", label: "2-cu-ft bags", format: "number", decimals: 0, unit: "bags", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (depth ÷ 12); yd³ = ft³ ÷ 27; bags = ⌈ft³ ÷ 2⌉",
    formulaExplanation:
      "Bed length times width gives the surface area in square feet, and multiplying by depth converts that flat area into a volume. Depth is divided by 12 first to change inches into feet so all three dimensions share one unit before being multiplied together. Dividing the resulting cubic feet by 27 gives cubic yards, because a cubic yard contains 27 cubic feet, which is how bulk mulch is delivered. Dividing the cubic feet by 2 and rounding up gives the number of standard 2-cubic-foot bags, since you can only buy whole bags and a partial bag still counts as one purchase.",
    formulaSource: "Standard construction estimation (area/volume method)",
    explanation:
      "A mulch calculator tells you how much mulch to buy to cover a garden bed at the depth you want, giving the answer both in the cubic yards used for bulk delivery and in the 2-cubic-foot bags sold at garden centers. You enter the bed length, width and the depth of mulch you plan to spread, and the tool multiplies them into a volume, converting depth from inches to feet so the dimensions match, then divides by 27 for cubic yards and by 2 for bag count. Mulch is bought by volume because it is a loose, bulky material, and getting the depth right matters horticulturally as well as financially. Too thin a layer fails to suppress weeds or hold moisture, while too thick a layer can smother roots and starve the soil of oxygen — two to four inches is the usual target. Buying loose by the yard is far cheaper for large beds, while bags suit small jobs and easy handling. Because beds are rarely perfect rectangles and mulch settles and scatters as it is spread, it is wise to round measurements up and add a small margin. The length-times-width-times-depth method is standard estimation practice: a mulch layer is simply a shallow rectangular volume of material sitting on the soil.",
    example: {
      inputs: { length: 20, width: 10, depth: 3 },
      explanation: "20 × 10 × (3÷12) = 50 ft³ ≈ 1.85 yd³, which is 25 of the standard 2-cubic-foot bags.",
    },
    faqs: [
      { question: "How many bags of mulch are in a cubic yard?", answer: "A cubic yard holds 27 cubic feet, so it equals about 13.5 of the standard 2-cubic-foot bags most garden centers sell. That is why buying loose by the yard is usually far cheaper for large beds — you avoid paying for the packaging and the labor of filling many small bags. For a small bed, though, a handful of bags is easier to transport and handle than a bulk delivery pile." },
      { question: "How deep should I spread mulch?", answer: "Two to four inches is the usual range for most garden beds. A depth around three inches suppresses weeds and holds soil moisture well without smothering plant roots or blocking oxygen from the soil. Go thinner near plant stems and tree trunks, keeping mulch from piling against the bark. Depth drives the volume directly in the formula, so doubling the depth doubles the mulch you need to buy." },
      { question: "Should I buy extra mulch?", answer: "A small margin is sensible. Beds are rarely perfect rectangles, mulch settles and compacts after spreading, and some scatters onto paths or lawn during the work. Rounding your measurements up and adding roughly 5 to 10 percent covers these losses so you are not left with a thin patch or an extra trip to the store. Leftover mulch stores easily and tops up beds later in the season." },
      { question: "Is bagged or bulk mulch cheaper?", answer: "Bulk mulch delivered by the cubic yard is almost always cheaper per unit volume than bagged mulch, because you are not paying for packaging or bagging labor. The trade-off is that bulk arrives as a pile you must shovel and barrow, and often has a delivery fee. For small jobs the convenience of a few bags outweighs the saving, while large beds favor a bulk order." },
      { question: "Does this calculator account for settling?", answer: "The result is the exact volume of the bed at the depth you enter, with no settling allowance added, which keeps the number transparent. Mulch does compress a little after spreading and watering, so if you want the settled depth to match your target, add a small margin of around 5 to 10 percent yourself. Measuring the bed generously and rounding up achieves the same cushion in practice." },
    ],
    slugEs: "calculadora-de-mantillo",
    titleEs: "Calculadora de Mantillo",
    shortDescriptionEs: "Estima las yardas cúbicas y bolsas de mantillo necesarias.",
    seoTitleEs: "Calculadora de Mantillo — Yardas Cúbicas y Bolsas",
    metaDescriptionEs:
      "Calculadora de mantillo gratuita. Estima las yardas cúbicas y el número de bolsas de 2 pies cúbicos de mantillo necesarias para cubrir un cantero a partir del largo, ancho y profundidad.",
    primaryKeywordEs: "calculadora de mantillo",
    secondaryKeywordsEs: ["cuánto mantillo necesito", "calculadora de bolsas de mantillo", "calculadora de yardas de mantillo"],
    formulaExplanationEs:
      "El largo por el ancho del cantero da el área de superficie en pies cuadrados, y multiplicar por la profundidad convierte esa área plana en un volumen. La profundidad se divide primero entre 12 para cambiar pulgadas a pies, de modo que las tres dimensiones compartan una unidad antes de multiplicarse. Dividir los pies cúbicos resultantes entre 27 da yardas cúbicas, porque una yarda cúbica contiene 27 pies cúbicos, que es como se entrega el mantillo a granel. Dividir los pies cúbicos entre 2 y redondear hacia arriba da el número de bolsas estándar de 2 pies cúbicos, ya que solo puedes comprar bolsas enteras y una bolsa parcial cuenta como una compra.",
    explanationEs:
      "Una calculadora de mantillo te dice cuánto mantillo comprar para cubrir un cantero de jardín a la profundidad que deseas, dando la respuesta tanto en las yardas cúbicas usadas para la entrega a granel como en las bolsas de 2 pies cúbicos que se venden en los centros de jardinería. Introduces el largo y el ancho del cantero y la profundidad de mantillo que planeas esparcir, y la herramienta los multiplica en un volumen, convirtiendo la profundidad de pulgadas a pies para que las dimensiones coincidan, luego divide entre 27 para las yardas cúbicas y entre 2 para el conteo de bolsas. El mantillo se compra por volumen porque es un material suelto y voluminoso, y acertar con la profundidad importa tanto en lo hortícola como en lo económico. Una capa demasiado fina no suprime las malas hierbas ni retiene la humedad, mientras que una capa demasiado gruesa puede asfixiar las raíces y privar al suelo de oxígeno; de dos a cuatro pulgadas es el objetivo habitual. Comprar suelto por yarda es mucho más barato para canteros grandes, mientras que las bolsas convienen para trabajos pequeños y un manejo fácil. Como los canteros rara vez son rectángulos perfectos y el mantillo se asienta y se dispersa al esparcirse, es prudente redondear las medidas hacia arriba y añadir un pequeño margen. El método de largo por ancho por profundidad es la práctica estándar de estimación: una capa de mantillo es simplemente un volumen rectangular poco profundo sobre el suelo.",
    exampleEs: {
      inputs: { length: 20, width: 10, depth: 3 },
      explanation: "20 × 10 × (3÷12) = 50 ft³ ≈ 1.85 yd³, que son 25 de las bolsas estándar de 2 pies cúbicos.",
    },
    faqsEs: [
      { question: "¿Cuántas bolsas de mantillo hay en una yarda cúbica?", answer: "Una yarda cúbica contiene 27 pies cúbicos, así que equivale a unas 13.5 de las bolsas estándar de 2 pies cúbicos que venden la mayoría de los centros de jardinería. Por eso comprar suelto por yarda suele ser mucho más barato para canteros grandes: evitas pagar el empaque y la mano de obra de llenar muchas bolsas pequeñas. Para un cantero pequeño, sin embargo, unas cuantas bolsas son más fáciles de transportar que un montón a granel." },
      { question: "¿Qué profundidad de mantillo debo esparcir?", answer: "De dos a cuatro pulgadas es el rango habitual para la mayoría de los canteros. Una profundidad de alrededor de tres pulgadas suprime las malas hierbas y retiene la humedad del suelo sin asfixiar las raíces ni bloquear el oxígeno. Ve más fino cerca de los tallos y troncos, evitando amontonar mantillo contra la corteza. La profundidad determina el volumen directamente en la fórmula, así que duplicar la profundidad duplica el mantillo que necesitas comprar." },
      { question: "¿Debo comprar mantillo extra?", answer: "Un pequeño margen es sensato. Los canteros rara vez son rectángulos perfectos, el mantillo se asienta y se compacta tras esparcirse, y algo se dispersa a los senderos o al césped durante el trabajo. Redondear las medidas hacia arriba y añadir aproximadamente un 5 a 10 por ciento cubre estas pérdidas para que no te quede una zona fina ni un viaje extra a la tienda. El mantillo sobrante se guarda fácilmente y rellena canteros más adelante en la temporada." },
      { question: "¿Es más barato el mantillo en bolsa o a granel?", answer: "El mantillo a granel entregado por yarda cúbica casi siempre es más barato por unidad de volumen que el mantillo en bolsa, porque no pagas empaque ni mano de obra de embolsado. La contrapartida es que a granel llega como un montón que debes palear y transportar, y a menudo tiene una tarifa de entrega. Para trabajos pequeños la comodidad de unas bolsas supera el ahorro, mientras que los canteros grandes favorecen un pedido a granel." },
      { question: "¿Tiene en cuenta esta calculadora el asentamiento?", answer: "El resultado es el volumen exacto del cantero a la profundidad que introduces, sin tolerancia de asentamiento añadida, lo que mantiene el número transparente. El mantillo se comprime un poco tras esparcirse y regarse, así que si quieres que la profundidad asentada coincida con tu objetivo, añade tú mismo un pequeño margen de alrededor del 5 al 10 por ciento. Medir el cantero con generosidad y redondear hacia arriba logra el mismo colchón en la práctica." },
    ],
    relatedCalculators: ["concrete-calculator", "paint-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "rebar",
    slug: "rebar-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Rebar Calculator",
    shortDescription: "Estimate rebar bars and total length for a slab grid.",
    seoTitle: "Rebar Calculator — Bars & Total Length",
    metaDescription:
      "Free rebar calculator. Estimate the number of rebar bars and total lineal feet needed for a slab grid from slab dimensions and bar spacing.",
    primaryKeyword: "rebar calculator",
    secondaryKeywords: ["rebar spacing calculator", "how much rebar do i need", "rebar grid calculator"],
    fields: [
      { id: "slabLength", label: "Slab length", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "slabWidth", label: "Slab width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "spacing", label: "Bar spacing", type: "number", unit: "in", placeholder: "12", required: true, span: 2, min: 1, step: 0.5, helpText: "Center-to-center spacing of the grid." },
    ],
    results: [
      { id: "totalBars", label: "Total bars", format: "number", decimals: 0, unit: "bars", isPrimary: true },
      { id: "totalLengthFt", label: "Total rebar length", format: "number", decimals: 1, unit: "ft", isPrimary: false },
    ],
    formula: "Bars each way = ⌊(span in inches) ÷ spacing⌋ + 1; total length = (bars widthwise × slab width) + (bars lengthwise × slab length)",
    formulaExplanation:
      "A reinforcing grid runs bars in both directions across the slab. The number of bars laid across the width is found by dividing the slab length in inches by the spacing, taking the whole number, and adding one so both edges carry a bar. The same logic applied the other way gives the bars laid along the length. Each set of bars spans the opposite dimension, so the widthwise bars are as long as the slab width and the lengthwise bars are as long as the slab length. Multiplying each count by its bar length and summing the two gives the total lineal feet of rebar to order.",
    formulaSource: "Standard construction estimation (grid layout method)",
    explanation:
      "A rebar calculator estimates how many reinforcing bars and how much total bar length a concrete slab needs, based on the slab's dimensions and the spacing of the reinforcing grid. Reinforcement is laid as a grid — one set of bars running one way and another set running across it — so the tool counts the bars needed in each direction and adds up their combined length in feet. For each direction it divides the slab dimension by the bar spacing, takes the whole number of gaps, and adds one so that a bar sits at both edges of the grid rather than leaving the perimeter unreinforced. Getting reinforcement right matters because steel gives concrete its tensile strength: concrete is strong in compression but cracks easily under bending and tension, and a correctly spaced grid holds those cracks tight and keeps the slab acting as one piece. This calculator is a clear planning estimate that assumes a simple rectangular slab and a uniform grid; it does not add lap-splice overlaps where bars join, edge cover setbacks, or bends, so treat the total length as a baseline and add a margin. Builders, DIYers and estimators use it to price steel and plan a layout before ordering. Always follow your local building code and any engineer's drawing for the required bar size, grade and spacing.",
    example: {
      inputs: { slabLength: 20, slabWidth: 10, spacing: 12 },
      explanation: "Bars widthwise = ⌊240÷12⌋+1 = 21; bars lengthwise = ⌊120÷12⌋+1 = 11; total 32 bars, 21×10 + 11×20 = 430 ft.",
    },
    faqs: [
      { question: "What rebar spacing should I use for a slab?", answer: "Residential slabs commonly use a grid spaced 12 to 18 inches on center, but the right spacing depends on the slab's thickness, the loads it carries and the bar size, and is set by local code or an engineer. Closer spacing means more steel and a stronger, crack-resistant slab. Always follow the structural drawing or building department requirement for your project rather than guessing at a spacing." },
      { question: "Does this include overlap for splicing bars?", answer: "No. The total length is a clean grid estimate that does not add lap splices — the overlap where two bars are tied together end to end, typically around 40 bar diameters. On any slab larger than a single bar length you will need these overlaps, so add a margin of roughly 10 to 15 percent to the calculated total to cover splices, plus a little for waste and offcuts when you order." },
      { question: "How much extra rebar should I order?", answer: "Add around 10 to 15 percent to the calculated length to cover lap splices where bars join, offcuts, and the occasional damaged bar. Steel is ordered in fixed stock lengths, so you will also round up to whole bars. Ordering a small surplus is cheaper than pausing a pour to fetch more steel, and leftover bar is easy to store and reuse on future jobs." },
      { question: "Why add one bar to each direction?", answer: "Dividing the slab dimension by the spacing counts the gaps between bars, not the bars themselves. A row with four gaps has five bars, so the formula adds one to place a bar at both edges of the grid. Skipping that plus-one would leave the slab perimeter without reinforcement and undercount the steel. This fencepost logic is standard whenever you count evenly spaced items across a length." },
      { question: "Does bar spacing affect slab strength?", answer: "Yes, strongly. Closer bar spacing puts more steel into the slab, which resists tension and bending better and holds any cracks that form tighter and finer. Wider spacing uses less steel but gives less crack control and load capacity. The correct spacing balances strength against cost for the expected loads, and should come from your building code or a structural engineer rather than being chosen for material savings alone." },
    ],
    slugEs: "calculadora-de-varilla-corrugada",
    titleEs: "Calculadora de Varilla Corrugada",
    shortDescriptionEs: "Estima las varillas y la longitud total para una cuadrícula de losa.",
    seoTitleEs: "Calculadora de Varilla Corrugada — Varillas y Longitud Total",
    metaDescriptionEs:
      "Calculadora de varilla corrugada gratuita. Estima el número de varillas y los pies lineales totales necesarios para una cuadrícula de losa a partir de las dimensiones de la losa y el espaciado.",
    primaryKeywordEs: "calculadora de varilla corrugada",
    secondaryKeywordsEs: ["calculadora de espaciado de varilla", "cuánta varilla necesito", "calculadora de cuadrícula de acero"],
    formulaExplanationEs:
      "Una cuadrícula de refuerzo lleva varillas en ambas direcciones a través de la losa. El número de varillas colocadas a lo ancho se halla dividiendo el largo de la losa en pulgadas entre el espaciado, tomando el número entero, y sumando uno para que ambos bordes lleven una varilla. La misma lógica aplicada al revés da las varillas colocadas a lo largo. Cada conjunto de varillas abarca la dimensión opuesta, así que las varillas a lo ancho son tan largas como el ancho de la losa y las varillas a lo largo son tan largas como el largo de la losa. Multiplicar cada conteo por su longitud de varilla y sumar los dos da los pies lineales totales de varilla a pedir.",
    explanationEs:
      "Una calculadora de varilla corrugada estima cuántas barras de refuerzo y cuánta longitud total de barra necesita una losa de concreto, según las dimensiones de la losa y el espaciado de la cuadrícula de refuerzo. El refuerzo se coloca como una cuadrícula —un conjunto de barras que corre en un sentido y otro conjunto que cruza— así que la herramienta cuenta las barras necesarias en cada dirección y suma su longitud combinada en pies. Para cada dirección divide la dimensión de la losa entre el espaciado de la barra, toma el número entero de espacios y suma uno para que haya una barra en ambos bordes de la cuadrícula en lugar de dejar el perímetro sin reforzar. Acertar con el refuerzo importa porque el acero da al concreto su resistencia a la tracción: el concreto es fuerte en compresión pero se agrieta fácilmente bajo flexión y tensión, y una cuadrícula correctamente espaciada mantiene esas grietas cerradas y hace que la losa actúe como una sola pieza. Esta calculadora es una estimación de planificación clara que asume una losa rectangular simple y una cuadrícula uniforme; no añade los traslapes donde se unen las barras, los retiros de recubrimiento del borde ni los dobleces, así que trata la longitud total como una base y añade un margen. Constructores, aficionados al bricolaje y estimadores la usan para presupuestar acero y planear una disposición antes de pedir. Sigue siempre tu código de construcción local y cualquier plano del ingeniero para el tamaño, grado y espaciado de barra requeridos.",
    exampleEs: {
      inputs: { slabLength: 20, slabWidth: 10, spacing: 12 },
      explanation: "Varillas a lo ancho = ⌊240÷12⌋+1 = 21; varillas a lo largo = ⌊120÷12⌋+1 = 11; total 32 varillas, 21×10 + 11×20 = 430 ft.",
    },
    faqsEs: [
      { question: "¿Qué espaciado de varilla debo usar para una losa?", answer: "Las losas residenciales suelen usar una cuadrícula espaciada de 12 a 18 pulgadas de centro a centro, pero el espaciado correcto depende del grosor de la losa, las cargas que soporta y el tamaño de la barra, y lo fija el código local o un ingeniero. Un espaciado más cerrado significa más acero y una losa más fuerte y resistente a grietas. Sigue siempre el plano estructural o el requisito del departamento de construcción en lugar de adivinar." },
      { question: "¿Incluye esto el traslape para empalmar barras?", answer: "No. La longitud total es una estimación limpia de cuadrícula que no añade traslapes de empalme, la superposición donde dos barras se atan de extremo a extremo, típicamente unos 40 diámetros de barra. En cualquier losa mayor que una sola longitud de barra necesitarás estos traslapes, así que añade un margen de aproximadamente el 10 al 15 por ciento al total calculado para cubrir empalmes, más un poco por desperdicio y retazos al pedir." },
      { question: "¿Cuánta varilla extra debo pedir?", answer: "Añade alrededor del 10 al 15 por ciento a la longitud calculada para cubrir los traslapes de empalme donde se unen las barras, los retazos y la barra dañada ocasional. El acero se pide en longitudes de existencia fijas, así que también redondearás a barras enteras. Pedir un pequeño excedente es más barato que pausar un vaciado para ir a buscar más acero, y la barra sobrante es fácil de guardar y reutilizar en trabajos futuros." },
      { question: "¿Por qué se añade una varilla a cada dirección?", answer: "Dividir la dimensión de la losa entre el espaciado cuenta los espacios entre barras, no las barras en sí. Una fila con cuatro espacios tiene cinco barras, así que la fórmula suma uno para colocar una barra en ambos bordes de la cuadrícula. Omitir ese más uno dejaría el perímetro de la losa sin refuerzo y contaría de menos el acero. Esta lógica de poste de cerca es estándar siempre que cuentas elementos espaciados uniformemente a lo largo de una longitud." },
      { question: "¿Afecta el espaciado de las barras a la resistencia de la losa?", answer: "Sí, mucho. Un espaciado más cerrado de las barras pone más acero en la losa, lo que resiste mejor la tensión y la flexión y mantiene más apretadas y finas las grietas que se formen. Un espaciado más amplio usa menos acero pero da menos control de grietas y capacidad de carga. El espaciado correcto equilibra resistencia y costo para las cargas esperadas, y debe provenir de tu código de construcción o un ingeniero estructural en lugar de elegirse solo por ahorro de material." },
    ],
    relatedCalculators: ["concrete-calculator", "tile-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "drywall",
    slug: "drywall-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Drywall Calculator",
    shortDescription: "Estimate drywall sheets and screws for a wall area.",
    seoTitle: "Drywall Calculator — Sheets & Screws",
    metaDescription:
      "Free drywall calculator. Estimate the number of drywall sheets and screws needed for a wall or ceiling area, with a built-in waste allowance.",
    primaryKeyword: "drywall calculator",
    secondaryKeywords: ["how many drywall sheets do i need", "sheetrock calculator", "drywall sheets calculator"],
    fields: [
      { id: "wallArea", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "1000", required: true, span: 2, min: 0, step: 0.01 },
      { id: "sheetWidth", label: "Sheet width", type: "number", unit: "ft", placeholder: "4", required: false, span: 1, min: 0, step: 0.1, defaultValue: 4 },
      { id: "sheetHeight", label: "Sheet length", type: "number", unit: "ft", placeholder: "8", required: false, span: 1, min: 0, step: 0.1, defaultValue: 8 },
    ],
    results: [
      { id: "sheets", label: "Sheets to buy", format: "number", decimals: 0, unit: "sheets", isPrimary: true, description: "Includes 10% waste" },
      { id: "screwsApprox", label: "Screws (approx.)", format: "number", decimals: 0, unit: "screws", isPrimary: false },
    ],
    formula: "Sheet area = width × height; sheets = ⌈area ÷ sheet area × 1.10⌉; screws ≈ sheets × 32",
    formulaExplanation:
      "Sheet width times height gives the area a single panel covers, defaulting to the common 4-by-8-foot sheet at 32 square feet. Dividing the total wall area by that per-sheet area gives how many panels cover the surface exactly. Multiplying by 1.10 adds a ten percent allowance for cuts around openings, breakage and offcuts, and rounding up ensures you buy whole sheets rather than fractions. The screw estimate multiplies the sheet count by 32, a typical fastener count per sheet when screwing into framing spaced 16 inches apart along the edges and through the field of each panel.",
    formulaSource: "Standard construction estimation (area method)",
    explanation:
      "A drywall calculator tells you how many sheets of drywall and roughly how many screws you need to cover a wall or ceiling, starting from the total area and the size of the sheets you will use. It works out the area one sheet covers by multiplying its width and height — the standard panel is 4 by 8 feet, or 32 square feet — then divides the total area by that figure and adds a waste allowance before rounding up to whole sheets. The built-in ten percent margin matters because real rooms are full of doors, windows, outlets and corners, and every cut around them leaves an offcut that often cannot be reused, while handling and lifting large panels inevitably cracks a few. Ordering the bare minimum almost guarantees a mid-job shortfall. The screw figure, about 32 fasteners per sheet, reflects the usual pattern of screwing along the edges and through the field into framing spaced 16 inches on center. This is a planning estimate for a rectangular area; on complex layouts, subtract only large openings and let the waste margin absorb the small ones. Homeowners, remodelers and drywall crews use it to price a job and load the truck. The area-divided-by-sheet-area method is standard practice because covering a wall is fundamentally about fitting flat panels across a flat surface.",
    example: {
      inputs: { wallArea: 1000, sheetWidth: 4, sheetHeight: 8 },
      explanation: "A 4×8 sheet covers 32 ft². 1000 ÷ 32 × 1.10 = 34.4 → 35 sheets, and about 35 × 32 = 1,120 screws.",
    },
    faqs: [
      { question: "How many drywall sheets do I need per square foot?", answer: "Divide the area you are covering by the area of one sheet. A standard 4-by-8-foot sheet covers 32 square feet, so 1,000 square feet of wall needs about 31 sheets before waste and 35 once a ten percent allowance is added. Larger 4-by-12 sheets cover 48 square feet and mean fewer joints to tape, though they are heavier and harder to maneuver in tight spaces." },
      { question: "How much waste should I allow for drywall?", answer: "Around ten percent is a sensible default, and this calculator builds that in automatically. The margin covers cuts around doors, windows, outlets and corners, the offcuts those cuts leave behind, and panels cracked during lifting and handling. Rooms with many openings, angled ceilings or small closets waste more, so lean higher for complex layouts. Buying a spare sheet or two is far cheaper than halting the job for a store run." },
      { question: "How many screws does drywall need?", answer: "This tool estimates about 32 screws per sheet, which reflects the common pattern of fastening along panel edges and through the field into studs or joists spaced 16 inches on center. Ceilings and fire-rated assemblies often call for closer screw spacing and therefore more fasteners, so treat 32 as a baseline. Always follow the fastener schedule in your local building code for the specific assembly you are building." },
      { question: "Should I subtract doors and windows?", answer: "For a quick estimate you can enter the gross wall area and let the ten percent waste margin absorb small openings, since the offcuts around them are rarely reusable. If a room has very large openings — a wide garage door, a picture window or an open stairwell — subtract those areas from the total so you do not badly over-order. For ordinary doors and windows, leaving them in is the safer, simpler choice." },
      { question: "What size drywall sheet should I use?", answer: "The 4-by-8-foot sheet is the most common and the easiest for one or two people to handle. Longer 4-by-12 sheets cover more area with fewer seams, which speeds taping and gives a cleaner finish on long walls and ceilings, but they weigh more and are awkward in tight rooms. Enter whatever sheet size you plan to buy and the calculator adjusts the count to match its coverage." },
    ],
    slugEs: "calculadora-de-panel-de-yeso",
    titleEs: "Calculadora de Panel de Yeso",
    shortDescriptionEs: "Estima las láminas de panel de yeso y tornillos para un área de pared.",
    seoTitleEs: "Calculadora de Panel de Yeso — Láminas y Tornillos",
    metaDescriptionEs:
      "Calculadora de panel de yeso gratuita. Estima el número de láminas de panel de yeso y tornillos necesarios para un área de pared o techo, con una tolerancia de desperdicio incorporada.",
    primaryKeywordEs: "calculadora de panel de yeso",
    secondaryKeywordsEs: ["cuántas láminas de panel de yeso necesito", "calculadora de tablaroca", "calculadora de láminas de drywall"],
    formulaExplanationEs:
      "El ancho por el alto de la lámina da el área que cubre un solo panel, tomando por defecto la lámina común de 4 por 8 pies con 32 pies cuadrados. Dividir el área total de la pared entre esa área por lámina da cuántos paneles cubren la superficie exactamente. Multiplicar por 1.10 añade una tolerancia del diez por ciento por los cortes alrededor de aberturas, roturas y retazos, y redondear hacia arriba asegura que compres láminas enteras en lugar de fracciones. La estimación de tornillos multiplica el conteo de láminas por 32, un número típico de fijaciones por lámina al atornillar en estructura espaciada a 16 pulgadas por los bordes y por el campo de cada panel.",
    explanationEs:
      "Una calculadora de panel de yeso te dice cuántas láminas de panel de yeso y aproximadamente cuántos tornillos necesitas para cubrir una pared o un techo, partiendo del área total y del tamaño de las láminas que usarás. Calcula el área que cubre una lámina multiplicando su ancho y su alto —el panel estándar es de 4 por 8 pies, o 32 pies cuadrados— luego divide el área total entre esa cifra y añade una tolerancia de desperdicio antes de redondear a láminas enteras. El margen incorporado del diez por ciento importa porque las habitaciones reales están llenas de puertas, ventanas, tomas y esquinas, y cada corte alrededor de ellas deja un retazo que a menudo no se puede reutilizar, mientras que manipular y levantar paneles grandes inevitablemente rompe algunos. Pedir el mínimo estricto casi garantiza una escasez a mitad del trabajo. La cifra de tornillos, unas 32 fijaciones por lámina, refleja el patrón habitual de atornillar por los bordes y por el campo en estructura espaciada a 16 pulgadas de centro. Esta es una estimación de planificación para un área rectangular; en disposiciones complejas, resta solo las aberturas grandes y deja que el margen de desperdicio absorba las pequeñas. Propietarios, remodeladores y equipos de instalación la usan para presupuestar un trabajo y cargar el camión. El método de área dividida entre área de lámina es la práctica estándar porque cubrir una pared consiste en ajustar paneles planos sobre una superficie plana.",
    exampleEs: {
      inputs: { wallArea: 1000, sheetWidth: 4, sheetHeight: 8 },
      explanation: "Una lámina de 4×8 cubre 32 ft². 1000 ÷ 32 × 1.10 = 34.4 → 35 láminas, y unos 35 × 32 = 1,120 tornillos.",
    },
    faqsEs: [
      { question: "¿Cuántas láminas de panel de yeso necesito por pie cuadrado?", answer: "Divide el área que cubres entre el área de una lámina. Una lámina estándar de 4 por 8 pies cubre 32 pies cuadrados, así que 1,000 pies cuadrados de pared necesitan unas 31 láminas antes del desperdicio y 35 una vez añadida una tolerancia del diez por ciento. Las láminas más grandes de 4 por 12 cubren 48 pies cuadrados y significan menos juntas que encintar, aunque son más pesadas y difíciles de maniobrar en espacios estrechos." },
      { question: "¿Cuánto desperdicio debo permitir para el panel de yeso?", answer: "Alrededor del diez por ciento es un valor por defecto sensato, y esta calculadora lo incorpora automáticamente. El margen cubre los cortes alrededor de puertas, ventanas, tomas y esquinas, los retazos que dejan esos cortes, y los paneles agrietados durante el levantamiento y la manipulación. Las habitaciones con muchas aberturas, techos inclinados o clósets pequeños desperdician más, así que inclínate hacia arriba en disposiciones complejas. Comprar una lámina o dos de repuesto es mucho más barato que detener el trabajo." },
      { question: "¿Cuántos tornillos necesita el panel de yeso?", answer: "Esta herramienta estima unos 32 tornillos por lámina, lo que refleja el patrón común de fijar por los bordes del panel y por el campo en montantes o viguetas espaciados a 16 pulgadas de centro. Los techos y los ensamblajes con clasificación de fuego a menudo requieren un espaciado de tornillos más cerrado y por tanto más fijaciones, así que trata 32 como una base. Sigue siempre el programa de fijaciones de tu código de construcción local para el ensamblaje específico." },
      { question: "¿Debo restar puertas y ventanas?", answer: "Para una estimación rápida puedes introducir el área bruta de la pared y dejar que el margen de desperdicio del diez por ciento absorba las aberturas pequeñas, ya que los retazos a su alrededor rara vez son reutilizables. Si una habitación tiene aberturas muy grandes —una puerta de garaje ancha, un ventanal o un hueco de escalera abierto— resta esas áreas del total para no pedir de más en exceso. Para puertas y ventanas normales, dejarlas es la opción más segura y sencilla." },
      { question: "¿Qué tamaño de lámina de panel de yeso debo usar?", answer: "La lámina de 4 por 8 pies es la más común y la más fácil de manejar para una o dos personas. Las láminas más largas de 4 por 12 cubren más área con menos juntas, lo que acelera el encintado y da un acabado más limpio en paredes y techos largos, pero pesan más y son incómodas en habitaciones estrechas. Introduce el tamaño de lámina que planeas comprar y la calculadora ajusta el conteo a su cobertura." },
    ],
    relatedCalculators: ["paint-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "roofing",
    slug: "roofing-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Roofing Calculator",
    shortDescription: "Estimate roofing squares and shingle bundles needed.",
    seoTitle: "Roofing Calculator — Squares & Shingle Bundles",
    metaDescription:
      "Free roofing calculator. Estimate roofing squares and shingle bundles needed from roof area, pitch factor and a waste allowance.",
    primaryKeyword: "roofing calculator",
    secondaryKeywords: ["shingle calculator", "roofing squares calculator", "how many bundles of shingles"],
    fields: [
      { id: "roofArea", label: "Roof area (plan)", type: "number", unit: "sq ft", placeholder: "2000", required: true, span: 2, min: 0, step: 0.01, helpText: "Footprint area before pitch adjustment." },
      { id: "pitchFactor", label: "Pitch factor", type: "number", placeholder: "1.05", required: false, span: 1, min: 1, step: 0.01, defaultValue: 1.05, helpText: "Multiplier for roof slope (~1.05 low, ~1.25 steep)." },
      { id: "wastePercent", label: "Waste allowance", type: "number", unit: "%", placeholder: "10", required: false, span: 1, min: 0, max: 50, defaultValue: 10 },
    ],
    results: [
      { id: "squares", label: "Roofing squares", format: "number", decimals: 2, unit: "squares", isPrimary: true, description: "1 square = 100 sq ft" },
      { id: "bundles", label: "Shingle bundles", format: "number", decimals: 0, unit: "bundles", isPrimary: false, description: "At 3 bundles per square" },
    ],
    formula: "Adjusted area = roof area × pitch factor × (1 + waste%); squares = adjusted area ÷ 100; bundles = ⌈squares × 3⌉",
    formulaExplanation:
      "The plan or footprint area is multiplied by a pitch factor because a sloped roof has more surface than the flat outline it casts on the ground — the steeper the slope, the larger the multiplier. Multiplying by one plus the waste fraction adds an allowance for the extra shingles lost to starter courses, ridge caps, hip and valley cuts, and breakage. Dividing the adjusted area by 100 converts square feet into roofing squares, the industry unit where one square equals 100 square feet. Multiplying squares by three gives bundles, since three bundles of standard architectural shingles typically cover one square, and rounding up buys whole bundles.",
    formulaSource: "Standard construction estimation (area method)",
    explanation:
      "A roofing calculator estimates how much shingle material a roof needs, expressed in the two units the trade uses: roofing squares, where one square equals 100 square feet, and bundles of shingles, with three bundles covering a square. You start from the roof's plan area — the flat footprint — then apply a pitch factor because a sloped roof always has more surface than the outline it casts on the ground. A gentle slope adds only a few percent, while a steep roof can add a quarter or more, and using the flat footprint alone would badly under-order. The tool then adds a waste allowance for the material lost to starter courses, ridge caps, and the many angled cuts at hips and valleys, before converting to squares and bundles and rounding up to whole bundles. Getting this right matters because a roof must be watertight in one continuous job; running short mid-installation risks a delay that leaves the deck exposed to weather. The area-times-pitch method is standard estimation practice, and the ten percent default waste suits a simple gable roof — complex roofs with many hips, valleys and dormers waste more and deserve a higher margin. Roofers, estimators and homeowners use it to price a reroof and order the right number of bundles the first time.",
    example: {
      inputs: { roofArea: 2000, pitchFactor: 1.05, wastePercent: 10 },
      explanation: "2000 × 1.05 × 1.10 = 2,310 ft² = 23.1 squares, and 23.1 × 3 = 69.3 → 70 bundles of shingles.",
    },
    faqs: [
      { question: "What is a roofing square?", answer: "A roofing square is the trade's standard unit of roof area, equal to 100 square feet. Roofers quote materials and labor by the square rather than the square foot because it keeps the numbers manageable — a typical house roof might be 20 to 30 squares. Shingles, underlayment and estimates are all sized this way, which is why the calculator converts your area into squares before working out bundles." },
      { question: "How many bundles of shingles are in a square?", answer: "For most standard three-tab and architectural shingles, three bundles cover one roofing square, or 100 square feet, and this calculator uses that ratio. Some heavier or premium shingles come four or even five bundles to the square, so check the coverage printed on the wrapper for your specific product. Bundles are also the practical carrying unit — each weighs enough that one is a comfortable load up a ladder." },
      { question: "What pitch factor should I use?", answer: "The pitch factor converts flat footprint area into actual sloped roof area. A low-slope roof uses a small multiplier near 1.05, a common medium slope around 1.12 to 1.15, and a steep roof 1.25 or more. If you know the pitch in rise-over-run, you can look up the exact factor, but entering an approximate value for your roof's steepness gets you close. Steeper roofs genuinely have more surface, so the multiplier is essential." },
      { question: "How much waste should I add for roofing?", answer: "Ten percent is a reasonable default for a simple gable roof and is built in here. Roofs with many hips, valleys, dormers or penetrations waste more shingles to angled cuts and should use 12 to 15 percent or higher. The waste also covers starter strips, ridge caps and breakage. Because a roof must be finished watertight in one go, a generous margin is cheaper than risking a shortfall partway through." },
      { question: "Does this replace a professional roof measurement?", answer: "No. This is a planning estimate to help you budget and order, based on a plan area and a slope multiplier rather than a measured survey of every plane. For a firm quote, a roofer will measure each roof section, account for the exact pitch, and add flashing, underlayment and ridge materials the calculator does not size. Use the result to sanity-check a quote and understand the scale of the job." },
    ],
    slugEs: "calculadora-de-techado",
    titleEs: "Calculadora de Techado",
    shortDescriptionEs: "Estima los cuadros de techado y los paquetes de tejas necesarios.",
    seoTitleEs: "Calculadora de Techado — Cuadros y Paquetes de Tejas",
    metaDescriptionEs:
      "Calculadora de techado gratuita. Estima los cuadros de techado y los paquetes de tejas necesarios a partir del área del techo, el factor de pendiente y una tolerancia de desperdicio.",
    primaryKeywordEs: "calculadora de techado",
    secondaryKeywordsEs: ["calculadora de tejas", "calculadora de cuadros de techo", "cuántos paquetes de tejas"],
    formulaExplanationEs:
      "El área en planta o huella se multiplica por un factor de pendiente porque un techo inclinado tiene más superficie que el contorno plano que proyecta sobre el suelo: cuanto más empinada la pendiente, mayor el multiplicador. Multiplicar por uno más la fracción de desperdicio añade una tolerancia por las tejas adicionales perdidas en hiladas de inicio, cumbreras, cortes de limatesa y limahoya, y roturas. Dividir el área ajustada entre 100 convierte los pies cuadrados en cuadros de techado, la unidad del sector donde un cuadro equivale a 100 pies cuadrados. Multiplicar los cuadros por tres da los paquetes, ya que tres paquetes de tejas arquitectónicas estándar suelen cubrir un cuadro, y redondear hacia arriba compra paquetes enteros.",
    explanationEs:
      "Una calculadora de techado estima cuánto material de tejas necesita un techo, expresado en las dos unidades que usa el oficio: cuadros de techado, donde un cuadro equivale a 100 pies cuadrados, y paquetes de tejas, con tres paquetes cubriendo un cuadro. Partes del área en planta del techo —la huella plana— y luego aplicas un factor de pendiente porque un techo inclinado siempre tiene más superficie que el contorno que proyecta sobre el suelo. Una pendiente suave añade solo un pequeño porcentaje, mientras que un techo empinado puede añadir un cuarto o más, y usar solo la huella plana llevaría a pedir gravemente de menos. La herramienta añade luego una tolerancia de desperdicio por el material perdido en hiladas de inicio, cumbreras y los muchos cortes en ángulo en limatesas y limahoyas, antes de convertir a cuadros y paquetes y redondear a paquetes enteros. Acertar con esto importa porque un techo debe quedar impermeable en un trabajo continuo; quedarse corto a mitad de la instalación arriesga un retraso que deja el entablado expuesto al clima. El método de área por pendiente es la práctica estándar de estimación, y el desperdicio por defecto del diez por ciento conviene a un techo a dos aguas simple; los techos complejos con muchas limatesas, limahoyas y buhardillas desperdician más y merecen un margen mayor. Techadores, estimadores y propietarios lo usan para presupuestar un retejado y pedir el número correcto de paquetes a la primera.",
    exampleEs: {
      inputs: { roofArea: 2000, pitchFactor: 1.05, wastePercent: 10 },
      explanation: "2000 × 1.05 × 1.10 = 2,310 ft² = 23.1 cuadros, y 23.1 × 3 = 69.3 → 70 paquetes de tejas.",
    },
    faqsEs: [
      { question: "¿Qué es un cuadro de techado?", answer: "Un cuadro de techado es la unidad estándar de área de techo del oficio, igual a 100 pies cuadrados. Los techadores cotizan materiales y mano de obra por cuadro en lugar de por pie cuadrado porque mantiene los números manejables: el techo de una casa típica puede tener de 20 a 30 cuadros. Las tejas, el fieltro y los presupuestos se dimensionan todos así, por lo que la calculadora convierte tu área en cuadros antes de calcular los paquetes." },
      { question: "¿Cuántos paquetes de tejas hay en un cuadro?", answer: "Para la mayoría de las tejas estándar de tres pestañas y arquitectónicas, tres paquetes cubren un cuadro de techado, o 100 pies cuadrados, y esta calculadora usa esa proporción. Algunas tejas más pesadas o premium vienen a cuatro o incluso cinco paquetes por cuadro, así que revisa la cobertura impresa en el envoltorio de tu producto específico. Los paquetes son también la unidad práctica de carga: cada uno pesa lo suficiente para ser una carga cómoda por una escalera." },
      { question: "¿Qué factor de pendiente debo usar?", answer: "El factor de pendiente convierte el área de huella plana en área real de techo inclinado. Un techo de pendiente baja usa un multiplicador pequeño cercano a 1.05, una pendiente media común alrededor de 1.12 a 1.15, y un techo empinado 1.25 o más. Si conoces la pendiente en subida sobre recorrido, puedes buscar el factor exacto, pero introducir un valor aproximado para la inclinación de tu techo te acerca. Los techos más empinados tienen genuinamente más superficie, así que el multiplicador es esencial." },
      { question: "¿Cuánto desperdicio debo añadir para el techado?", answer: "El diez por ciento es un valor por defecto razonable para un techo a dos aguas simple y está incorporado aquí. Los techos con muchas limatesas, limahoyas, buhardillas o penetraciones desperdician más tejas en cortes en ángulo y deben usar del 12 al 15 por ciento o más. El desperdicio también cubre las tiras de inicio, las cumbreras y las roturas. Como un techo debe terminarse impermeable de una vez, un margen generoso es más barato que arriesgar una escasez a medio camino." },
      { question: "¿Reemplaza esto a una medición profesional del techo?", answer: "No. Esta es una estimación de planificación para presupuestar y pedir, basada en un área en planta y un multiplicador de pendiente en lugar de un levantamiento medido de cada plano. Para una cotización firme, un techador medirá cada sección del techo, tendrá en cuenta la pendiente exacta y añadirá tapajuntas, fieltro y materiales de cumbrera que la calculadora no dimensiona. Usa el resultado para verificar una cotización y entender la escala del trabajo." },
    ],
    relatedCalculators: ["concrete-calculator", "paint-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "insulation",
    slug: "insulation-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Insulation Calculator",
    shortDescription: "Estimate how many bags or batts of insulation you need.",
    seoTitle: "Insulation Calculator — Bags & Batts Needed",
    metaDescription:
      "Free insulation calculator. Estimate how many bags or batts of insulation you need to cover a wall, ceiling or attic area by coverage per bag.",
    primaryKeyword: "insulation calculator",
    secondaryKeywords: ["how much insulation do i need", "insulation batts calculator", "attic insulation calculator"],
    fields: [
      { id: "area", label: "Area to insulate", type: "number", unit: "sq ft", placeholder: "800", required: true, span: 2, min: 0, step: 0.01 },
      { id: "batCoverage", label: "Coverage per bag", type: "number", unit: "sq ft", placeholder: "40", required: false, span: 2, min: 0, step: 0.1, defaultValue: 40, helpText: "Square feet covered per bag or bundle." },
    ],
    results: [
      { id: "bags", label: "Bags needed", format: "number", decimals: 0, unit: "bags", isPrimary: true },
    ],
    formula: "Bags = ⌈area ÷ coverage per bag⌉",
    formulaExplanation:
      "The area you need to insulate is divided by the number of square feet a single bag or bundle covers, which is printed on the packaging and varies with the insulation's R-value and thickness. The result is how many bags of material the surface requires. Because insulation is sold only in whole bags and a partial bag still counts as a full purchase, the figure is rounded up. Higher R-value and thicker batts cover fewer square feet per bag, so entering the coverage from the exact product you plan to buy keeps the estimate accurate for your job.",
    formulaSource: "Standard construction estimation (area method)",
    explanation:
      "An insulation calculator works out how many bags or bundles of insulation you need to cover a wall, ceiling or attic, by dividing the area to be insulated by the coverage each bag provides. Coverage is printed on every package and depends on the product's R-value and thickness: a thicker, higher-R batt fills more of each cavity and so covers fewer square feet per bag, while a thinner product stretches further. Because you can only buy whole bags, the tool rounds up. Insulation is worth estimating carefully because it directly controls a building's comfort and energy bills — gaps, thin spots and compressed batts all leak heat and undercut the rated R-value, so it pays to cover the whole area properly rather than skimp. At the same time, buying far too much wastes money and clutters the site. Entering the coverage figure from the specific product you intend to use, rather than a generic number, is what makes the estimate reliable, since coverage varies widely between materials and R-values. This calculator handles the area-based bag count; it does not adjust for framing that displaces some cavity space or for the extra material tucked around obstructions, so adding a small margin is wise. Homeowners, remodelers and insulation installers use it to plan an attic top-up or a wall job and buy close to the right amount the first time.",
    example: {
      inputs: { area: 800, batCoverage: 40 },
      explanation: "800 ÷ 40 = 20, so you need 20 bags to cover an 800-square-foot area at 40 sq ft per bag.",
    },
    faqs: [
      { question: "How do I find the coverage per bag?", answer: "The coverage is printed on the insulation packaging, usually stated as square feet at a given R-value and installed thickness. It varies widely: a high-R attic batt covers far fewer square feet per bag than a thin wall batt. Read the figure for the exact product you plan to buy and enter it here, rather than relying on a generic number, because using the wrong coverage throws the whole bag count off." },
      { question: "Does R-value change how much I need?", answer: "Yes, indirectly. A higher R-value means a thicker or denser product, so each bag covers fewer square feet, and you will need more bags for the same area. The R-value itself is chosen to meet the thermal performance your climate and building code require. Pick the R-value first, then read that product's coverage and enter it, so the calculator counts bags for the material you are actually installing." },
      { question: "Should I buy extra insulation?", answer: "A small margin is sensible. Framing members displace some cavity space, obstructions like wiring and pipes need material tucked around them, and attics have irregular edges and access points that are easy to underestimate. Adding roughly 5 to 10 percent, or simply rounding your area up, avoids a shortfall that leaves a cold gap. Insulation stores easily, so a leftover bag or two is more useful than an uninsulated patch." },
      { question: "Why does compressing insulation reduce its value?", answer: "Insulation works by trapping still air in its fibers, and that trapped air is what resists heat flow. Compressing a batt into a space thinner than its rating squeezes out the air pockets, lowering the effective R-value even though the material is present. That is why you should fill cavities to the intended thickness and avoid over-stuffing. Cover the full area properly rather than cramming too much material into too little space." },
      { question: "Does this calculator work for blown-in insulation?", answer: "It works if the product states coverage per bag at your target depth, which blown-in cellulose and fiberglass packaging does — usually as a coverage chart tied to the finished depth and R-value. Read the square feet per bag for the depth you want, enter it as the coverage, and the tool returns the bag count. For loose fill, remember that settling over time means installing slightly deeper than the final target depth." },
    ],
    slugEs: "calculadora-de-aislamiento",
    titleEs: "Calculadora de Aislamiento",
    shortDescriptionEs: "Estima cuántas bolsas o paneles de aislamiento necesitas.",
    seoTitleEs: "Calculadora de Aislamiento — Bolsas y Paneles Necesarios",
    metaDescriptionEs:
      "Calculadora de aislamiento gratuita. Estima cuántas bolsas o paneles de aislamiento necesitas para cubrir un área de pared, techo o ático según la cobertura por bolsa.",
    primaryKeywordEs: "calculadora de aislamiento",
    secondaryKeywordsEs: ["cuánto aislamiento necesito", "calculadora de paneles de aislamiento", "calculadora de aislamiento de ático"],
    formulaExplanationEs:
      "El área que necesitas aislar se divide entre el número de pies cuadrados que cubre una sola bolsa o fardo, cifra impresa en el empaque que varía con el valor R y el grosor del aislamiento. El resultado es cuántas bolsas de material requiere la superficie. Como el aislamiento se vende solo en bolsas enteras y una bolsa parcial cuenta como una compra completa, la cifra se redondea hacia arriba. Los paneles de mayor valor R y más gruesos cubren menos pies cuadrados por bolsa, así que introducir la cobertura del producto exacto que planeas comprar mantiene la estimación precisa para tu trabajo.",
    explanationEs:
      "Una calculadora de aislamiento determina cuántas bolsas o fardos de aislamiento necesitas para cubrir una pared, un techo o un ático, dividiendo el área a aislar entre la cobertura que proporciona cada bolsa. La cobertura está impresa en cada paquete y depende del valor R y el grosor del producto: un panel más grueso y de mayor R llena más de cada cavidad y por tanto cubre menos pies cuadrados por bolsa, mientras que un producto más fino rinde más. Como solo puedes comprar bolsas enteras, la herramienta redondea hacia arriba. Vale la pena estimar el aislamiento con cuidado porque controla directamente el confort y las facturas de energía de un edificio: los huecos, las zonas finas y los paneles comprimidos dejan escapar calor y socavan el valor R nominal, así que conviene cubrir toda el área correctamente en lugar de escatimar. Al mismo tiempo, comprar demasiado desperdicia dinero y satura la obra. Introducir la cifra de cobertura del producto específico que piensas usar, en lugar de un número genérico, es lo que hace fiable la estimación, ya que la cobertura varía mucho entre materiales y valores R. Esta calculadora maneja el conteo de bolsas basado en el área; no ajusta por la estructura que desplaza espacio de cavidad ni por el material extra colocado alrededor de obstáculos, así que añadir un pequeño margen es prudente. Propietarios, remodeladores e instaladores la usan para planear un refuerzo de ático o un trabajo de pared y comprar casi la cantidad correcta a la primera.",
    exampleEs: {
      inputs: { area: 800, batCoverage: 40 },
      explanation: "800 ÷ 40 = 20, así que necesitas 20 bolsas para cubrir un área de 800 pies cuadrados a 40 pies cuadrados por bolsa.",
    },
    faqsEs: [
      { question: "¿Cómo encuentro la cobertura por bolsa?", answer: "La cobertura está impresa en el empaque del aislamiento, normalmente indicada como pies cuadrados a un valor R y un grosor instalado dados. Varía mucho: un panel de ático de alto R cubre muchos menos pies cuadrados por bolsa que un panel de pared fino. Lee la cifra del producto exacto que planeas comprar e introdúcela aquí, en lugar de confiar en un número genérico, porque usar la cobertura equivocada desajusta todo el conteo de bolsas." },
      { question: "¿Cambia el valor R cuánto necesito?", answer: "Sí, indirectamente. Un valor R más alto significa un producto más grueso o denso, así que cada bolsa cubre menos pies cuadrados, y necesitarás más bolsas para la misma área. El valor R en sí se elige para cumplir el rendimiento térmico que tu clima y código de construcción requieren. Elige primero el valor R, luego lee la cobertura de ese producto e introdúcela, para que la calculadora cuente bolsas del material que realmente instalas." },
      { question: "¿Debo comprar aislamiento extra?", answer: "Un pequeño margen es sensato. Los miembros de la estructura desplazan algo de espacio de cavidad, los obstáculos como el cableado y las tuberías necesitan material colocado a su alrededor, y los áticos tienen bordes irregulares y puntos de acceso fáciles de subestimar. Añadir aproximadamente un 5 a 10 por ciento, o simplemente redondear tu área hacia arriba, evita una escasez que deje un hueco frío. El aislamiento se guarda fácilmente, así que una bolsa o dos sobrantes son más útiles que una zona sin aislar." },
      { question: "¿Por qué comprimir el aislamiento reduce su valor?", answer: "El aislamiento funciona atrapando aire quieto en sus fibras, y ese aire atrapado es lo que resiste el flujo de calor. Comprimir un panel en un espacio más delgado que su clasificación expulsa las bolsas de aire, reduciendo el valor R efectivo aunque el material esté presente. Por eso debes llenar las cavidades al grosor previsto y evitar sobrellenar. Cubre toda el área correctamente en lugar de embutir demasiado material en muy poco espacio." },
      { question: "¿Funciona esta calculadora para aislamiento soplado?", answer: "Funciona si el producto indica la cobertura por bolsa a tu profundidad objetivo, como hace el empaque de celulosa y fibra de vidrio soplada, normalmente como una tabla de cobertura ligada a la profundidad final y al valor R. Lee los pies cuadrados por bolsa para la profundidad que deseas, introdúcela como la cobertura, y la herramienta devuelve el conteo de bolsas. Para relleno suelto, recuerda que el asentamiento con el tiempo significa instalar algo más profundo que la profundidad final objetivo." },
    ],
    relatedCalculators: ["paint-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "deck-board",
    slug: "deck-board-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Deck Board Calculator",
    shortDescription: "Estimate deck boards and lineal feet for a deck.",
    seoTitle: "Deck Board Calculator — Boards & Lineal Feet",
    metaDescription:
      "Free deck board calculator. Estimate how many deck boards and how much lineal footage you need from deck size, board width, length and gap.",
    primaryKeyword: "deck board calculator",
    secondaryKeywords: ["decking calculator", "how many deck boards do i need", "deck boards lineal feet"],
    fields: [
      { id: "deckLength", label: "Deck length", type: "number", unit: "ft", placeholder: "16", required: true, span: 1, min: 0, step: 0.01, helpText: "Length the boards run along." },
      { id: "deckWidth", label: "Deck width", type: "number", unit: "ft", placeholder: "12", required: true, span: 1, min: 0, step: 0.01, helpText: "Width the rows span across." },
      { id: "boardWidth", label: "Board width", type: "number", unit: "in", placeholder: "5.5", required: false, span: 1, min: 0, step: 0.1, defaultValue: 5.5 },
      { id: "boardLength", label: "Board length", type: "number", unit: "ft", placeholder: "8", required: false, span: 1, min: 0, step: 0.1, defaultValue: 8 },
      { id: "gap", label: "Gap between boards", type: "number", unit: "in", placeholder: "0.125", required: false, span: 2, min: 0, step: 0.03125, defaultValue: 0.125, helpText: "Spacing for drainage and expansion." },
    ],
    results: [
      { id: "boards", label: "Boards to buy", format: "number", decimals: 0, unit: "boards", isPrimary: true },
      { id: "linealFeet", label: "Total lineal feet", format: "number", decimals: 1, unit: "ft", isPrimary: false },
    ],
    formula: "Row width = (board width + gap) ÷ 12; rows = ⌈deck width ÷ row width⌉; boards per row = ⌈deck length ÷ board length⌉; boards = rows × boards per row",
    formulaExplanation:
      "Each board plus its drainage gap occupies an effective width, converted from inches to feet by dividing by 12. Dividing the deck width by that effective width and rounding up gives the number of rows needed to span the deck, since a partial row still requires a full board. Boards run the length of the deck, so dividing the deck length by the stock board length and rounding up gives how many boards make up one row end to end. Multiplying rows by boards per row gives the total boards, and multiplying rows by the deck length gives the total lineal feet of decking to order.",
    formulaSource: "Standard construction estimation (area/coverage method)",
    explanation:
      "A deck board calculator estimates how many boards and how much total lineal footage you need to surface a deck, accounting for the small gap left between boards for drainage and expansion. You enter the deck's length and width, the width and length of the boards you will use, and the gap between them. The tool adds the gap to each board's width to find the effective space one board occupies, divides the deck width by that figure to count the rows needed across the deck, then works out how many boards make up each row along the length, and multiplies the two. That gap matters more than it seems: decking must be spaced so water drains through and the boards can swell and shrink with weather without buckling, and even an eighth of an inch across many rows changes the board count. Rounding up at each step reflects that you buy whole boards and a partial row still needs a full board. This is a planning estimate for a simple rectangular deck laid in straight rows; picture-frame borders, diagonal patterns and stairs use more, so add a waste margin of around 10 percent on top. Deck builders, carpenters and homeowners use it to price decking and order lumber. The row-and-length method is standard practice because a deck surface is simply parallel rows of boards covering a rectangle.",
    example: {
      inputs: { deckLength: 16, deckWidth: 12, boardWidth: 5.5, boardLength: 8, gap: 0.125 },
      explanation: "Row = (5.5+0.125)/12 = 0.469 ft; rows = ⌈12÷0.469⌉ = 26; boards/row = ⌈16÷8⌉ = 2; 52 boards, 416 lineal feet.",
    },
    faqs: [
      { question: "How much gap should I leave between deck boards?", answer: "An eighth of an inch, or about 3 to 6 millimeters, is typical for most decking, allowing rainwater to drain through and the boards to expand and contract with temperature and moisture. Some composite products and installation systems specify their own gap, so check the manufacturer's guidance. Wet or freshly treated wood shrinks as it dries, so it can be laid tighter, while dry boards need the full gap to avoid buckling later." },
      { question: "How many deck boards do I need?", answer: "It depends on the deck size, the board width and the gap between boards. The calculator counts the rows needed to span the deck width, works out how many boards make up each row along the length, and multiplies them. As a rough check, a wider board covers more per row so you need fewer, while a larger gap slightly increases the row count. Always add a waste margin for cuts and pattern work on top." },
      { question: "Should I add extra for waste?", answer: "Yes. This estimate assumes simple straight rows, but real decks lose material to end cuts, a picture-frame border, stairs, and the occasional warped or split board rejected on site. Adding around 10 percent, and more for diagonal or herringbone layouts, covers those losses. Ordering a few spare boards also lets you replace a damaged plank years later with lumber that has weathered alongside the rest of the deck." },
      { question: "What is lineal feet in decking?", answer: "Lineal feet, or linear feet, is the total end-to-end length of board you need, measured along the boards regardless of their width. Lumber yards often price and sell decking by the lineal foot, so this figure lets you order and budget directly. It is the number of rows multiplied by the deck length. Note that lineal feet differs from square feet, which measures the surface area the boards cover." },
      { question: "Does board direction change the count?", answer: "It can. This calculator assumes boards run along the deck length with rows stacked across the width. Running the boards the other way, or on a diagonal, changes how many rows there are and how much each row must be pieced together, which affects both the board count and the waste. Diagonal layouts in particular use noticeably more material because of the angled cuts, so add extra margin when planning one." },
    ],
    slugEs: "calculadora-de-tablas-de-terraza",
    titleEs: "Calculadora de Tablas de Terraza",
    shortDescriptionEs: "Estima las tablas de terraza y los pies lineales para una terraza.",
    seoTitleEs: "Calculadora de Tablas de Terraza — Tablas y Pies Lineales",
    metaDescriptionEs:
      "Calculadora de tablas de terraza gratuita. Estima cuántas tablas de terraza y cuántos pies lineales necesitas según el tamaño de la terraza, el ancho, el largo y la separación de las tablas.",
    primaryKeywordEs: "calculadora de tablas de terraza",
    secondaryKeywordsEs: ["calculadora de entablado", "cuántas tablas de terraza necesito", "pies lineales de tablas de terraza"],
    formulaExplanationEs:
      "Cada tabla más su separación de drenaje ocupa un ancho efectivo, convertido de pulgadas a pies dividiendo entre 12. Dividir el ancho de la terraza entre ese ancho efectivo y redondear hacia arriba da el número de filas necesarias para abarcar la terraza, ya que una fila parcial aún requiere una tabla completa. Las tablas corren a lo largo de la terraza, así que dividir el largo de la terraza entre el largo de la tabla de existencia y redondear hacia arriba da cuántas tablas forman una fila de extremo a extremo. Multiplicar filas por tablas por fila da el total de tablas, y multiplicar filas por el largo de la terraza da los pies lineales totales de entablado a pedir.",
    explanationEs:
      "Una calculadora de tablas de terraza estima cuántas tablas y cuánta longitud lineal total necesitas para revestir una terraza, teniendo en cuenta la pequeña separación que se deja entre tablas para el drenaje y la expansión. Introduces el largo y el ancho de la terraza, el ancho y el largo de las tablas que usarás, y la separación entre ellas. La herramienta suma la separación al ancho de cada tabla para hallar el espacio efectivo que ocupa una tabla, divide el ancho de la terraza entre esa cifra para contar las filas necesarias, luego calcula cuántas tablas forman cada fila a lo largo, y multiplica las dos. Esa separación importa más de lo que parece: el entablado debe espaciarse para que el agua drene y las tablas puedan hincharse y encogerse con el clima sin pandearse, e incluso un octavo de pulgada a lo largo de muchas filas cambia el conteo de tablas. Redondear hacia arriba en cada paso refleja que compras tablas enteras y una fila parcial aún necesita una tabla completa. Esta es una estimación de planificación para una terraza rectangular simple colocada en filas rectas; los bordes tipo marco, los patrones diagonales y las escaleras usan más, así que añade un margen de desperdicio de alrededor del 10 por ciento encima. Constructores de terrazas, carpinteros y propietarios la usan para presupuestar entablado y pedir madera. El método de fila y longitud es la práctica estándar porque una superficie de terraza es simplemente filas paralelas de tablas cubriendo un rectángulo.",
    exampleEs: {
      inputs: { deckLength: 16, deckWidth: 12, boardWidth: 5.5, boardLength: 8, gap: 0.125 },
      explanation: "Fila = (5.5+0.125)/12 = 0.469 ft; filas = ⌈12÷0.469⌉ = 26; tablas/fila = ⌈16÷8⌉ = 2; 52 tablas, 416 pies lineales.",
    },
    faqsEs: [
      { question: "¿Cuánta separación debo dejar entre las tablas de terraza?", answer: "Un octavo de pulgada, o unos 3 a 6 milímetros, es típico para la mayoría del entablado, permitiendo que el agua de lluvia drene y que las tablas se expandan y contraigan con la temperatura y la humedad. Algunos productos compuestos y sistemas de instalación especifican su propia separación, así que revisa la guía del fabricante. La madera mojada o recién tratada se encoge al secarse, por lo que puede colocarse más apretada, mientras que las tablas secas necesitan la separación completa para evitar el pandeo." },
      { question: "¿Cuántas tablas de terraza necesito?", answer: "Depende del tamaño de la terraza, el ancho de la tabla y la separación entre tablas. La calculadora cuenta las filas necesarias para abarcar el ancho de la terraza, calcula cuántas tablas forman cada fila a lo largo, y las multiplica. Como comprobación aproximada, una tabla más ancha cubre más por fila así que necesitas menos, mientras que una separación mayor aumenta ligeramente el conteo de filas. Añade siempre un margen de desperdicio para cortes y trabajo de patrón." },
      { question: "¿Debo añadir extra por desperdicio?", answer: "Sí. Esta estimación asume filas rectas simples, pero las terrazas reales pierden material en cortes de extremo, un borde tipo marco, escaleras y la tabla ocasional alabeada o partida rechazada en obra. Añadir alrededor del 10 por ciento, y más para disposiciones diagonales o en espiga, cubre esas pérdidas. Pedir unas tablas de repuesto también te permite reemplazar una tabla dañada años después con madera que se ha desgastado junto al resto de la terraza." },
      { question: "¿Qué son los pies lineales en el entablado?", answer: "Los pies lineales, o pies lineares, son la longitud total de extremo a extremo de tabla que necesitas, medida a lo largo de las tablas sin importar su ancho. Los aserraderos suelen cotizar y vender entablado por pie lineal, así que esta cifra te permite pedir y presupuestar directamente. Es el número de filas multiplicado por el largo de la terraza. Ten en cuenta que los pies lineales difieren de los pies cuadrados, que miden el área de superficie que cubren las tablas." },
      { question: "¿Cambia la dirección de las tablas el conteo?", answer: "Puede hacerlo. Esta calculadora asume que las tablas corren a lo largo de la terraza con filas apiladas a lo ancho. Correr las tablas en el otro sentido, o en diagonal, cambia cuántas filas hay y cuánto debe empalmarse cada fila, lo que afecta tanto el conteo de tablas como el desperdicio. Las disposiciones diagonales en particular usan notablemente más material por los cortes en ángulo, así que añade margen extra al planear una." },
    ],
    relatedCalculators: ["concrete-calculator", "paint-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "fence",
    slug: "fence-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Fence Calculator",
    shortDescription: "Estimate fence posts, sections and pickets needed.",
    seoTitle: "Fence Calculator — Posts, Sections & Pickets",
    metaDescription:
      "Free fence calculator. Estimate the posts, sections and pickets needed for a fence from the total length and post spacing.",
    primaryKeyword: "fence calculator",
    secondaryKeywords: ["fence post calculator", "how many fence pickets do i need", "fence materials calculator"],
    fields: [
      { id: "fenceLength", label: "Fence length", type: "number", unit: "ft", placeholder: "100", required: true, span: 1, min: 0, step: 0.01 },
      { id: "postSpacing", label: "Post spacing", type: "number", unit: "ft", placeholder: "8", required: false, span: 1, min: 1, step: 0.1, defaultValue: 8, helpText: "Center-to-center distance between posts." },
    ],
    results: [
      { id: "posts", label: "Posts needed", format: "number", decimals: 0, unit: "posts", isPrimary: true },
      { id: "sections", label: "Sections", format: "number", decimals: 0, unit: "sections", isPrimary: false },
      { id: "pickets", label: "Pickets (6 in)", format: "number", decimals: 0, unit: "pickets", isPrimary: false, description: "At 6-inch picket width" },
    ],
    formula: "Sections = ⌈fence length ÷ post spacing⌉; posts = sections + 1; pickets = ⌈fence length ÷ 0.5⌉",
    formulaExplanation:
      "Dividing the fence length by the post spacing and rounding up gives the number of sections, or panels, between posts, since a partial run still needs its own section. The post count is the section count plus one, because a fence with several sections needs a post at both ends as well as between every pair of sections — the fencepost principle. Pickets are counted by dividing the fence length in feet by 0.5, treating each picket as roughly six inches wide, and rounding up. This picket figure assumes boards butted edge to edge; a spaced or shadowbox layout would change the count.",
    formulaSource: "Standard construction estimation (linear layout method)",
    explanation:
      "A fence calculator estimates the main materials a straight fence run needs — posts, sections and pickets — from just the total length and the spacing you want between posts. It divides the length by the post spacing to count the sections, or panels, then adds one post because a fence always needs a post at both ends in addition to the ones between panels. This plus-one is the classic fencepost problem: five sections in a row are held up by six posts, not five. Pickets are estimated from the length assuming each board is about six inches wide and butted against its neighbors, so the tool divides the length by half a foot. Getting these counts right matters because posts are the costly, labor-heavy part of a fence — each one means digging, setting and often concreting — so knowing the number up front drives both the budget and the day's work. This is a planning estimate for a straight run with evenly spaced posts; corners, gates and changes in direction each add a post, and sloped ground needs extra allowance, so add a small margin. It also assumes solid, butted pickets — a spaced picket or shadowbox style changes the board count. Homeowners, fencers and landscapers use it to price a project and order posts, rails and boards before breaking ground. The divide-and-add-one method is standard practice for anything spaced evenly along a line.",
    example: {
      inputs: { fenceLength: 100, postSpacing: 8 },
      explanation: "Sections = ⌈100÷8⌉ = 13; posts = 13 + 1 = 14; pickets = ⌈100÷0.5⌉ = 200 six-inch pickets.",
    },
    faqs: [
      { question: "How far apart should fence posts be?", answer: "Six to eight feet on center is the usual range for most wood and vinyl fences, with eight feet common because it suits standard rail lengths. Closer spacing makes a stronger, stiffer fence and suits tall or windy sites, while wider spacing uses fewer posts but flexes more. Heavier fences and gate openings need posts closer together or beefier posts. Enter your intended spacing and the calculator counts the posts and sections to match." },
      { question: "Why is there one more post than sections?", answer: "Because posts sit at the ends of sections, not in the middle. A single section needs a post at each end — two posts for one panel. Add another section and you add one post, not two, since the middle post is shared. So the post count is always the number of sections plus one. This fencepost principle is easy to forget and is exactly why counting sections alone leaves you one post short." },
      { question: "How many pickets do I need?", answer: "It depends on picket width and whether they are butted tight or spaced apart. This calculator assumes six-inch pickets set edge to edge, so it divides the fence length by half a foot. Narrower pickets or a gap between them changes the count — a spaced or shadowbox layout uses fewer or more boards respectively. Enter your real picket width by adjusting for it, and always add a few spares for splits and culls." },
      { question: "Does this account for corners and gates?", answer: "No. This is a straight-run estimate, and every corner or change in direction adds a post, while each gate needs a sturdier post on each side and reduces the picket run. Add one post per corner and plan gate posts separately, since they carry the swinging weight and often need to be larger and set deeper. Treat the result as a baseline and add these fittings for your specific layout." },
      { question: "How much extra fencing material should I buy?", answer: "Add a small margin, around 5 to 10 percent on pickets and rails, to cover splits, warped boards and cutting waste, plus spare posts for corners and gates the straight-run formula does not count. Sloped or uneven ground also consumes a little more material as panels are stepped or raked. Buying a few spares up front avoids a mid-project trip and lets you match lumber from the same batch later." },
    ],
    slugEs: "calculadora-de-cerca",
    titleEs: "Calculadora de Cerca",
    shortDescriptionEs: "Estima los postes, secciones y tablas de cerca necesarios.",
    seoTitleEs: "Calculadora de Cerca — Postes, Secciones y Tablas",
    metaDescriptionEs:
      "Calculadora de cerca gratuita. Estima los postes, secciones y tablas necesarios para una cerca a partir de la longitud total y el espaciado de los postes.",
    primaryKeywordEs: "calculadora de cerca",
    secondaryKeywordsEs: ["calculadora de postes de cerca", "cuántas tablas de cerca necesito", "calculadora de materiales de cerca"],
    formulaExplanationEs:
      "Dividir la longitud de la cerca entre el espaciado de los postes y redondear hacia arriba da el número de secciones, o paneles, entre postes, ya que un tramo parcial aún necesita su propia sección. El conteo de postes es el de secciones más uno, porque una cerca con varias secciones necesita un poste en ambos extremos además de entre cada par de secciones: el principio del poste de cerca. Las tablas se cuentan dividiendo la longitud de la cerca en pies entre 0.5, tratando cada tabla como de unas seis pulgadas de ancho, y redondeando hacia arriba. Esta cifra de tablas asume tablas a tope; una disposición espaciada o de tablero solapado cambiaría el conteo.",
    explanationEs:
      "Una calculadora de cerca estima los materiales principales que necesita un tramo recto de cerca —postes, secciones y tablas— a partir solo de la longitud total y el espaciado que deseas entre postes. Divide la longitud entre el espaciado de los postes para contar las secciones, o paneles, luego añade un poste porque una cerca siempre necesita un poste en ambos extremos además de los que van entre paneles. Este más uno es el clásico problema del poste de cerca: cinco secciones en fila se sostienen con seis postes, no con cinco. Las tablas se estiman a partir de la longitud asumiendo que cada tabla mide unas seis pulgadas de ancho y va a tope contra su vecina, así que la herramienta divide la longitud entre medio pie. Acertar con estos conteos importa porque los postes son la parte costosa y laboriosa de una cerca —cada uno implica excavar, colocar y a menudo concretar— así que conocer el número de antemano determina tanto el presupuesto como la jornada de trabajo. Esta es una estimación de planificación para un tramo recto con postes espaciados uniformemente; las esquinas, las puertas y los cambios de dirección añaden cada uno un poste, y el terreno inclinado necesita una tolerancia extra, así que añade un pequeño margen. También asume tablas sólidas a tope; un estilo de tabla espaciada o de tablero solapado cambia el conteo de tablas. Propietarios, cercadores y paisajistas la usan para presupuestar un proyecto y pedir postes, travesaños y tablas antes de empezar. El método de dividir y sumar uno es la práctica estándar para cualquier cosa espaciada uniformemente a lo largo de una línea.",
    exampleEs: {
      inputs: { fenceLength: 100, postSpacing: 8 },
      explanation: "Secciones = ⌈100÷8⌉ = 13; postes = 13 + 1 = 14; tablas = ⌈100÷0.5⌉ = 200 tablas de seis pulgadas.",
    },
    faqsEs: [
      { question: "¿A qué distancia deben estar los postes de la cerca?", answer: "De seis a ocho pies de centro a centro es el rango habitual para la mayoría de las cercas de madera y vinilo, con ocho pies común porque se ajusta a las longitudes de travesaño estándar. Un espaciado más cerrado hace una cerca más fuerte y rígida y conviene a sitios altos o ventosos, mientras que un espaciado más amplio usa menos postes pero flexiona más. Las cercas más pesadas y las aberturas de puerta necesitan postes más juntos. Introduce tu espaciado previsto y la calculadora cuenta los postes y secciones." },
      { question: "¿Por qué hay un poste más que secciones?", answer: "Porque los postes se sitúan en los extremos de las secciones, no en el medio. Una sola sección necesita un poste en cada extremo: dos postes para un panel. Añade otra sección y añades un poste, no dos, ya que el poste del medio se comparte. Así que el conteo de postes es siempre el número de secciones más uno. Este principio del poste de cerca es fácil de olvidar y es exactamente por lo que contar solo secciones te deja un poste corto." },
      { question: "¿Cuántas tablas necesito?", answer: "Depende del ancho de la tabla y de si van a tope o espaciadas. Esta calculadora asume tablas de seis pulgadas colocadas a tope, así que divide la longitud de la cerca entre medio pie. Las tablas más estrechas o una separación entre ellas cambian el conteo: una disposición espaciada o de tablero solapado usa menos o más tablas respectivamente. Introduce tu ancho real de tabla ajustándolo, y añade siempre unas cuantas de repuesto por partiduras y descartes." },
      { question: "¿Tiene esto en cuenta esquinas y puertas?", answer: "No. Esta es una estimación de tramo recto, y cada esquina o cambio de dirección añade un poste, mientras que cada puerta necesita un poste más robusto a cada lado y reduce el tramo de tablas. Añade un poste por esquina y planea los postes de puerta por separado, ya que soportan el peso oscilante y a menudo necesitan ser más grandes y colocarse más profundos. Trata el resultado como una base y añade estos accesorios para tu disposición específica." },
      { question: "¿Cuánto material extra de cerca debo comprar?", answer: "Añade un pequeño margen, alrededor del 5 al 10 por ciento en tablas y travesaños, para cubrir partiduras, tablas alabeadas y desperdicio de corte, más postes de repuesto para esquinas y puertas que la fórmula de tramo recto no cuenta. El terreno inclinado o irregular también consume algo más de material a medida que los paneles se escalonan. Comprar unos repuestos por adelantado evita un viaje a mitad del proyecto y te permite igualar madera del mismo lote más tarde." },
    ],
    relatedCalculators: ["concrete-calculator", "paint-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "flooring",
    slug: "flooring-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Flooring Calculator",
    shortDescription: "Estimate flooring boxes and square footage needed.",
    seoTitle: "Flooring Calculator — Boxes & Square Footage",
    metaDescription:
      "Free flooring calculator. Estimate how many boxes of flooring and total square footage you need for a room, with a built-in waste allowance.",
    primaryKeyword: "flooring calculator",
    secondaryKeywords: ["how much flooring do i need", "laminate flooring calculator", "flooring boxes calculator"],
    fields: [
      { id: "roomLength", label: "Room length", type: "number", unit: "ft", placeholder: "12", required: true, span: 1, min: 0, step: 0.01 },
      { id: "roomWidth", label: "Room width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "boxCoverage", label: "Coverage per box", type: "number", unit: "sq ft", placeholder: "20", required: false, span: 1, min: 0, step: 0.1, defaultValue: 20 },
      { id: "wastePercent", label: "Waste allowance", type: "number", unit: "%", placeholder: "10", required: false, span: 1, min: 0, max: 50, defaultValue: 10 },
    ],
    results: [
      { id: "boxes", label: "Boxes to buy", format: "number", decimals: 0, unit: "boxes", isPrimary: true, description: "Includes waste allowance" },
      { id: "totalSqFt", label: "Total area needed", format: "number", decimals: 1, unit: "sq ft", isPrimary: false },
    ],
    formula: "Area = length × width; total = area × (1 + waste%); boxes = ⌈total ÷ coverage per box⌉",
    formulaExplanation:
      "Room length times width gives the floor area in square feet. Multiplying by one plus the waste fraction adds an allowance for the planks lost to end cuts, the offcut at the end of each row that often cannot start the next, and boards culled for defects. Dividing that adjusted area by the square footage one box covers — printed on the carton — gives how many boxes are required, and rounding up buys whole boxes since flooring is not sold loose. Entering the coverage from the exact product matters because box coverage varies widely between plank sizes and flooring types.",
    formulaSource: "Standard construction estimation (area method)",
    explanation:
      "A flooring calculator tells you how many boxes of flooring to buy for a room and the total square footage to order, starting from the room's dimensions and the coverage printed on each box. It multiplies length by width for the floor area, adds a waste allowance, then divides by the per-box coverage and rounds up to whole boxes. The waste step is the part people skip and regret: laying planks or tiles wastes material at the end of every row, where the offcut is often too short to begin the next row, and more is lost to cuts around doorways, hearths and irregular walls, plus the odd damaged or off-color board pulled from the run. Ordering only the exact area almost always leaves you short, and a later top-up may come from a different dye lot or batch that does not match. The built-in ten percent allowance suits a simple rectangular room laid straight; diagonal or herringbone patterns and rooms with many jogs and alcoves waste more and deserve a higher margin. Because coverage varies enormously between products — wide planks, narrow strips, large tiles — entering the figure from the box you are actually buying is what keeps the count right. Homeowners, installers and renovators use it to price a floor and buy enough the first time, ideally with a spare box set aside for future repairs from the same batch.",
    example: {
      inputs: { roomLength: 12, roomWidth: 10, boxCoverage: 20, wastePercent: 10 },
      explanation: "12 × 10 = 120 ft²; ×1.10 = 132 ft²; 132 ÷ 20 = 6.6 → 7 boxes of flooring.",
    },
    faqs: [
      { question: "How much flooring waste should I allow?", answer: "Ten percent is the usual starting point for a simple rectangular room laid in straight rows, and it is built into this calculator. Diagonal and herringbone layouts, rooms with many corners, alcoves or angled walls, and long narrow planks all waste more, so step up to 15 percent or higher for those. The margin covers end-of-row offcuts, cuts around obstacles, and boards culled for damage or color. It is cheaper to buy a spare box than to reorder mismatched stock." },
      { question: "Why does box coverage vary so much?", answer: "Because flooring comes in many plank and tile sizes and materials, each box holds a different total area. A carton of wide, long planks may cover 25 square feet, while narrow strips or small tiles cover less per box. The coverage is printed on every carton. Always enter that exact figure rather than a generic number, since using the wrong coverage is the biggest source of error in a flooring estimate." },
      { question: "Should I keep spare flooring after installing?", answer: "Yes. Set aside at least a spare box, or a few extra planks, from the same purchase and batch. Flooring color and finish shift subtly between production runs and dye lots, so a future repair using freshly bought stock can stand out against the original floor. Labeled spares stored flat and dry let you swap a damaged plank years later with a piece that matches the rest of the room exactly." },
      { question: "How do I measure a room for flooring?", answer: "For a rectangular room, multiply the length by the width to get the floor area in square feet. For an L-shaped or irregular room, divide it into rectangles, calculate each, and add them together. Measure into doorways and closets you intend to floor, and round dimensions up rather than down. Then let the waste allowance handle the cuts, so a slightly generous measurement is safer than a tight one." },
      { question: "Does this calculator include underlayment?", answer: "No. It estimates only the flooring boxes and area; underlayment, transition strips, trim and adhesive are separate items you buy to suit the product and subfloor. Underlayment is usually sold by the roll with its own coverage, so calculate it from the same room area. Check whether your flooring has an attached pad, since that can eliminate the need for a separate underlayment layer beneath it." },
    ],
    slugEs: "calculadora-de-piso",
    titleEs: "Calculadora de Piso",
    shortDescriptionEs: "Estima las cajas de piso y los pies cuadrados necesarios.",
    seoTitleEs: "Calculadora de Piso — Cajas y Pies Cuadrados",
    metaDescriptionEs:
      "Calculadora de piso gratuita. Estima cuántas cajas de piso y cuántos pies cuadrados totales necesitas para una habitación, con una tolerancia de desperdicio incorporada.",
    primaryKeywordEs: "calculadora de piso",
    secondaryKeywordsEs: ["cuánto piso necesito", "calculadora de piso laminado", "calculadora de cajas de piso"],
    formulaExplanationEs:
      "El largo por el ancho de la habitación da el área del piso en pies cuadrados. Multiplicar por uno más la fracción de desperdicio añade una tolerancia por las tablas perdidas en cortes de extremo, el retazo al final de cada fila que a menudo no puede empezar la siguiente, y las tablas descartadas por defectos. Dividir esa área ajustada entre los pies cuadrados que cubre una caja —impreso en el cartón— da cuántas cajas se requieren, y redondear hacia arriba compra cajas enteras ya que el piso no se vende suelto. Introducir la cobertura del producto exacto importa porque la cobertura por caja varía mucho entre tamaños de tabla y tipos de piso.",
    explanationEs:
      "Una calculadora de piso te dice cuántas cajas de piso comprar para una habitación y los pies cuadrados totales a pedir, partiendo de las dimensiones de la habitación y de la cobertura impresa en cada caja. Multiplica el largo por el ancho para el área del piso, añade una tolerancia de desperdicio, luego divide entre la cobertura por caja y redondea a cajas enteras. El paso del desperdicio es la parte que la gente omite y lamenta: colocar tablas o baldosas desperdicia material al final de cada fila, donde el retazo suele ser demasiado corto para comenzar la siguiente, y se pierde más en cortes alrededor de puertas, hogares y paredes irregulares, además de la tabla dañada o de color desigual retirada del lote. Pedir solo el área exacta casi siempre te deja corto, y un reabastecimiento posterior puede venir de un lote de tinte o partida distinta que no coincide. La tolerancia incorporada del diez por ciento conviene a una habitación rectangular simple colocada recta; los patrones diagonales o en espiga y las habitaciones con muchos recovecos y nichos desperdician más y merecen un margen mayor. Como la cobertura varía enormemente entre productos —tablas anchas, tiras estrechas, baldosas grandes— introducir la cifra de la caja que realmente compras es lo que mantiene el conteo correcto. Propietarios, instaladores y renovadores la usan para presupuestar un piso y comprar suficiente a la primera, idealmente con una caja de repuesto apartada para futuras reparaciones del mismo lote.",
    exampleEs: {
      inputs: { roomLength: 12, roomWidth: 10, boxCoverage: 20, wastePercent: 10 },
      explanation: "12 × 10 = 120 ft²; ×1.10 = 132 ft²; 132 ÷ 20 = 6.6 → 7 cajas de piso.",
    },
    faqsEs: [
      { question: "¿Cuánto desperdicio de piso debo permitir?", answer: "El diez por ciento es el punto de partida habitual para una habitación rectangular simple colocada en filas rectas, y está incorporado en esta calculadora. Las disposiciones diagonales y en espiga, las habitaciones con muchas esquinas, nichos o paredes en ángulo, y las tablas largas y estrechas desperdician más, así que sube al 15 por ciento o más para esas. El margen cubre los retazos de fin de fila, los cortes alrededor de obstáculos y las tablas descartadas por daño o color. Es más barato comprar una caja de repuesto que reordenar existencias desiguales." },
      { question: "¿Por qué varía tanto la cobertura por caja?", answer: "Porque el piso viene en muchos tamaños de tabla y baldosa y materiales, cada caja contiene un área total diferente. Un cartón de tablas anchas y largas puede cubrir 25 pies cuadrados, mientras que las tiras estrechas o las baldosas pequeñas cubren menos por caja. La cobertura está impresa en cada cartón. Introduce siempre esa cifra exacta en lugar de un número genérico, ya que usar la cobertura equivocada es la mayor fuente de error en una estimación de piso." },
      { question: "¿Debo guardar piso de repuesto tras instalarlo?", answer: "Sí. Aparta al menos una caja de repuesto, o unas tablas extra, de la misma compra y lote. El color y el acabado del piso cambian sutilmente entre corridas de producción y lotes de tinte, así que una reparación futura con existencias recién compradas puede destacar frente al piso original. Los repuestos etiquetados y guardados planos y secos te permiten cambiar una tabla dañada años después con una pieza que iguala el resto de la habitación exactamente." },
      { question: "¿Cómo mido una habitación para el piso?", answer: "Para una habitación rectangular, multiplica el largo por el ancho para obtener el área del piso en pies cuadrados. Para una habitación en L o irregular, divídela en rectángulos, calcula cada uno y súmalos. Mide dentro de las puertas y clósets que piensas pisar, y redondea las dimensiones hacia arriba en lugar de hacia abajo. Luego deja que la tolerancia de desperdicio maneje los cortes, así una medida ligeramente generosa es más segura que una ajustada." },
      { question: "¿Incluye esta calculadora la base?", answer: "No. Estima solo las cajas de piso y el área; la base, las tiras de transición, las molduras y el adhesivo son artículos separados que compras según el producto y el subsuelo. La base suele venderse por rollo con su propia cobertura, así que calcúlala a partir de la misma área de la habitación. Revisa si tu piso tiene una almohadilla adjunta, ya que eso puede eliminar la necesidad de una capa de base separada debajo." },
    ],
    relatedCalculators: ["tile-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "brick",
    slug: "brick-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Brick Calculator",
    shortDescription: "Estimate how many bricks you need for a wall.",
    seoTitle: "Brick Calculator — How Many Bricks Do I Need?",
    metaDescription:
      "Free brick calculator. Estimate how many bricks you need for a wall from the area and brick type, with a built-in waste allowance.",
    primaryKeyword: "brick calculator",
    secondaryKeywords: ["how many bricks do i need", "bricks per square foot", "brick wall calculator"],
    fields: [
      { id: "wallArea", label: "Wall area", type: "number", unit: "sq ft", placeholder: "200", required: true, span: 2, min: 0, step: 0.01 },
      {
        id: "brickType",
        label: "Brick type",
        type: "select",
        required: true,
        span: 2,
        defaultValue: "modular",
        options: [
          { value: "modular", label: "Modular (6.86 / sq ft)" },
          { value: "standard", label: "Standard (6.55 / sq ft)" },
          { value: "queen", label: "Queen (5.76 / sq ft)" },
        ],
        helpText: "Bricks per square foot depends on brick size.",
      },
    ],
    results: [
      { id: "bricks", label: "Bricks (exact)", format: "number", decimals: 0, unit: "bricks", isPrimary: false },
      { id: "bricksWithWaste", label: "Bricks to buy", format: "number", decimals: 0, unit: "bricks", isPrimary: true, description: "Includes 5% waste" },
    ],
    formula: "Bricks = ⌈wall area × bricks per sq ft⌉; bricks to buy = ⌈bricks × 1.05⌉",
    formulaExplanation:
      "Each brick type covers a known number of bricks per square foot of wall face, including the mortar joints around it — modular runs about 6.86, standard 6.55, and queen 5.76, with larger bricks covering more area and so needing fewer per square foot. Multiplying the wall area by that rate gives the exact brick count to face the wall, rounded up to a whole brick. Multiplying by 1.05 adds a five percent waste allowance for the bricks lost to cuts at corners and openings and to breakage in handling, and rounding up again ensures you buy whole bricks rather than fractions.",
    formulaSource: "Standard construction estimation (area method)",
    explanation:
      "A brick calculator estimates how many bricks you need to build or face a wall, from the wall's area and the size of brick you are using. Different brick sizes cover different amounts of wall, so the tool uses a bricks-per-square-foot rate for each common type — modular, standard and queen — that already includes the mortar joints between bricks. It multiplies the wall area by that rate for the exact count, then adds a five percent waste allowance and rounds up, because bricks are cut at corners and openings, snapped to fit, and cracked in handling, and you cannot buy a fraction of one. That waste margin is the difference between finishing the wall and stopping one course short. The per-square-foot rates assume a standard single-brick face with typical mortar joints; a double-thickness wall, or unusually thick or thin joints, changes the count, so treat the figure as a solid planning estimate rather than an exact bill of materials. Getting the number right up front matters because bricks are heavy and often delivered on pallets with a lead time, so a shortfall means both a delay and a delivery charge, while a large surplus ties up money and storage. Bricklayers, builders and homeowners use it to price a wall, a pier or a veneer and order close to the right quantity, keeping a few spares for later repairs.",
    example: {
      inputs: { wallArea: 200, brickType: "modular" },
      explanation: "200 × 6.86 = 1,372 bricks exactly; ×1.05 for waste = 1,441 bricks to buy.",
    },
    faqs: [
      { question: "How many bricks are in a square foot?", answer: "It depends on the brick size, because a larger brick covers more wall. This calculator uses about 6.86 bricks per square foot for modular, 6.55 for standard, and 5.76 for queen bricks, with each rate including the mortar joints between them. Larger bricks like queen size cover more face area, so you need fewer per square foot. Pick the type that matches the brick you are buying for an accurate count." },
      { question: "What is the difference between the brick types?", answer: "The types differ in size, which changes how many fit in a square foot of wall. Modular is a common standardized size, standard is slightly different in its dimensions, and queen bricks are larger and cover more area, so fewer are needed. The size also affects the wall's appearance and the coursing. Choose the type that matches your actual brick, since using the wrong rate throws the count off noticeably over a large wall." },
      { question: "How much waste should I allow for bricks?", answer: "Around five percent is the usual allowance and is built into this calculator's buy figure. It covers the bricks cut and snapped to fit at corners, ends and around window and door openings, plus the ones chipped or cracked during delivery and handling. Walls with many openings or intricate detailing waste more, so consider raising the margin. A modest surplus is far cheaper than a second pallet delivery to finish the last course." },
      { question: "Does this include the mortar?", answer: "The per-square-foot rates already account for the space mortar joints take between bricks, which is why fewer bricks fit than the bare brick size alone would suggest. However, the calculator counts only bricks — it does not estimate the volume of mortar or the number of mortar bags you need. Estimate mortar separately from the wall area and joint size, typically budgeting several bags of mix per hundreds of bricks laid." },
      { question: "Does wall thickness change the brick count?", answer: "Yes. These rates assume a single-brick-thick wall or veneer face. A double-thickness or solid load-bearing wall built two bricks deep uses roughly twice as many bricks for the same face area, and header courses that tie the layers together add more. If you are building a thicker wall, multiply the result accordingly, or calculate each wythe separately, and confirm the bonding pattern with your plans or a mason." },
    ],
    slugEs: "calculadora-de-ladrillos",
    titleEs: "Calculadora de Ladrillos",
    shortDescriptionEs: "Estima cuántos ladrillos necesitas para una pared.",
    seoTitleEs: "Calculadora de Ladrillos — ¿Cuántos Ladrillos Necesito?",
    metaDescriptionEs:
      "Calculadora de ladrillos gratuita. Estima cuántos ladrillos necesitas para una pared a partir del área y el tipo de ladrillo, con una tolerancia de desperdicio incorporada.",
    primaryKeywordEs: "calculadora de ladrillos",
    secondaryKeywordsEs: ["cuántos ladrillos necesito", "ladrillos por pie cuadrado", "calculadora de pared de ladrillos"],
    formulaExplanationEs:
      "Cada tipo de ladrillo cubre un número conocido de ladrillos por pie cuadrado de cara de pared, incluidas las juntas de mortero a su alrededor: el modular ronda 6.86, el estándar 6.55 y el queen 5.76, con los ladrillos más grandes cubriendo más área y necesitando por tanto menos por pie cuadrado. Multiplicar el área de la pared por esa tasa da el conteo exacto de ladrillos para revestir la pared, redondeado a un ladrillo entero. Multiplicar por 1.05 añade una tolerancia de desperdicio del cinco por ciento por los ladrillos perdidos en cortes en esquinas y aberturas y en roturas de manipulación, y redondear de nuevo hacia arriba asegura que compres ladrillos enteros en lugar de fracciones.",
    explanationEs:
      "Una calculadora de ladrillos estima cuántos ladrillos necesitas para construir o revestir una pared, a partir del área de la pared y el tamaño de ladrillo que usas. Los distintos tamaños de ladrillo cubren cantidades diferentes de pared, así que la herramienta usa una tasa de ladrillos por pie cuadrado para cada tipo común —modular, estándar y queen— que ya incluye las juntas de mortero entre ladrillos. Multiplica el área de la pared por esa tasa para el conteo exacto, luego añade una tolerancia de desperdicio del cinco por ciento y redondea hacia arriba, porque los ladrillos se cortan en esquinas y aberturas, se parten para ajustar y se agrietan al manipularlos, y no puedes comprar una fracción de uno. Ese margen de desperdicio es la diferencia entre terminar la pared y detenerse una hilada corta. Las tasas por pie cuadrado asumen una cara de un solo ladrillo con juntas de mortero típicas; una pared de doble grosor, o juntas inusualmente gruesas o finas, cambia el conteo, así que trata la cifra como una estimación de planificación sólida en lugar de una lista de materiales exacta. Acertar con el número de antemano importa porque los ladrillos son pesados y suelen entregarse en tarimas con un plazo de entrega, así que una escasez significa tanto un retraso como un cargo de entrega, mientras que un gran excedente inmoviliza dinero y almacenamiento. Albañiles, constructores y propietarios la usan para presupuestar una pared, un pilar o un revestimiento y pedir cerca de la cantidad correcta, guardando unos repuestos para reparaciones posteriores.",
    exampleEs: {
      inputs: { wallArea: 200, brickType: "modular" },
      explanation: "200 × 6.86 = 1,372 ladrillos exactos; ×1.05 por desperdicio = 1,441 ladrillos a comprar.",
    },
    faqsEs: [
      { question: "¿Cuántos ladrillos hay en un pie cuadrado?", answer: "Depende del tamaño del ladrillo, porque un ladrillo más grande cubre más pared. Esta calculadora usa unos 6.86 ladrillos por pie cuadrado para el modular, 6.55 para el estándar y 5.76 para el queen, con cada tasa incluyendo las juntas de mortero entre ellos. Los ladrillos más grandes como el tamaño queen cubren más área de cara, así que necesitas menos por pie cuadrado. Elige el tipo que coincide con el ladrillo que compras para un conteo preciso." },
      { question: "¿Cuál es la diferencia entre los tipos de ladrillo?", answer: "Los tipos difieren en tamaño, lo que cambia cuántos caben en un pie cuadrado de pared. El modular es un tamaño estandarizado común, el estándar difiere ligeramente en sus dimensiones, y los ladrillos queen son más grandes y cubren más área, así que se necesitan menos. El tamaño también afecta la apariencia de la pared y las hiladas. Elige el tipo que coincide con tu ladrillo real, ya que usar la tasa equivocada desajusta el conteo notablemente en una pared grande." },
      { question: "¿Cuánto desperdicio debo permitir para los ladrillos?", answer: "Alrededor del cinco por ciento es la tolerancia habitual y está incorporada en la cifra de compra de esta calculadora. Cubre los ladrillos cortados y partidos para ajustar en esquinas, extremos y alrededor de aberturas de ventanas y puertas, más los astillados o agrietados durante la entrega y la manipulación. Las paredes con muchas aberturas o detalles intrincados desperdician más, así que considera subir el margen. Un excedente modesto es mucho más barato que una segunda entrega de tarima para terminar la última hilada." },
      { question: "¿Incluye esto el mortero?", answer: "Las tasas por pie cuadrado ya tienen en cuenta el espacio que ocupan las juntas de mortero entre ladrillos, por lo que caben menos ladrillos de lo que sugeriría el tamaño desnudo del ladrillo solo. Sin embargo, la calculadora cuenta solo ladrillos: no estima el volumen de mortero ni el número de bolsas de mortero que necesitas. Estima el mortero por separado a partir del área de la pared y el tamaño de la junta, presupuestando típicamente varias bolsas de mezcla por cada cientos de ladrillos colocados." },
      { question: "¿Cambia el grosor de la pared el conteo de ladrillos?", answer: "Sí. Estas tasas asumen una pared o cara de revestimiento de un solo ladrillo de grosor. Una pared de doble grosor o sólida portante construida con dos ladrillos de profundidad usa aproximadamente el doble de ladrillos para la misma área de cara, y las hiladas de cabeza que unen las capas añaden más. Si construyes una pared más gruesa, multiplica el resultado en consecuencia, o calcula cada hoja por separado, y confirma el patrón de aparejo con tus planos o un albañil." },
    ],
    relatedCalculators: ["concrete-calculator", "tile-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
