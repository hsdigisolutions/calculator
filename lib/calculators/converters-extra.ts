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
    slugEs: "conversor-de-longitud",
    titleEs: "Conversor de Longitud",
    shortDescriptionEs: "Convierte entre unidades de longitud métricas e imperiales.",
    seoTitleEs: "Conversor de Longitud — cm, m, pulgadas, pies, millas",
    metaDescriptionEs:
      "Conversor de longitud gratuito. Convierte entre milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas y millas al instante.",
    primaryKeywordEs: "conversor de longitud",
    secondaryKeywordsEs: ["cm a pulgadas", "pies a metros", "millas a km"],
    formulaExplanationEs:
      "El valor de entrada se multiplica por la proporción fija de su unidad respecto al metro para obtener un valor en metros, y luego se divide por la proporción de la unidad de destino para llegar a la respuesta. Este pivote en dos pasos funciona porque cada unidad de longitud se define como un número constante de metros, así que encadenar a través de la base compartida es algebraicamente exacto y evita almacenar un factor separado para cada uno de los muchos pares de unidades.",
    explanationEs:
      "Un conversor de longitud transforma una distancia expresada en una unidad en su equivalente en otra, abarcando unidades métricas como milímetros, centímetros, metros y kilómetros, y unidades imperiales como pulgadas, pies, yardas y millas. Funciona reduciendo tu valor a metros, la unidad base, y luego escalándolo a la unidad que selecciones, de modo que un único mecanismo cubre todos los emparejamientos de ambos sistemas.\n\nEsto importa porque el sistema métrico y el imperial conviven en la vida cotidiana, y mezclarlos causa errores reales. Un mueble medido en centímetros tiene que caber en una habitación indicada en pies; una receta extranjera, una ruta para correr o una especificación de construcción pueden llegar en el sistema que no usas a diario. Un conversor de longitud elimina las conjeturas y el riesgo de un decimal desplazado que convierte un número sensato en un disparate.\n\nEl enfoque de normalizar a metros se usa porque cada unidad de longitud tiene una proporción fija y definida internacionalmente respecto al metro: una pulgada es exactamente 0.0254 m, una milla son 1,609.344 m, así que pivotar a través de esa base mantiene resultados exactos en lugar de aproximados. Estudiantes, profesionales de oficios, viajeros, ingenieros y compradores en línea recurren a un conversor de longitud siempre que una medida aparece en la unidad equivocada.",
    exampleEs: {
      inputs: { value: 100, from: "cm", to: "in" },
      explanation: "100 cm = 1 m, y 1 m ÷ 0.0254 ≈ 39.3701 pulgadas.",
    },
    faqsEs: [
      { question: "¿Cuántos centímetros hay en una pulgada?", answer: "Exactamente 2.54 centímetros, por definición internacional desde 1959. No es una cifra redondeada, sino exacta, por lo que las conversiones de pulgadas a centímetros son precisas. De ello se deduce que un pie son 30.48 cm y un metro son unas 39.37 pulgadas. Como la definición es exacta, cualquier redondeo que veas proviene solo del número de decimales mostrados, no del factor subyacente." },
      { question: "¿Cómo convierto millas a kilómetros?", answer: "Multiplica el número de millas por 1.609344 para obtener kilómetros. Así, 5 millas son unos 8.05 km, y un maratón de 26.2 millas equivale aproximadamente a 42.2 km. Para hacerlo al revés, divide los kilómetros entre 1.609344, o multiplica por unos 0.6214. El factor es exacto porque una milla se define como exactamente 1,609.344 metros, o 1,760 yardas." },
      { question: "¿Cuántos pies hay en un metro?", answer: "Un metro son unos 3.2808 pies, ya que un pie se define como exactamente 0.3048 metros. Eso significa que 10 metros son aproximadamente 32.81 pies. Para una estimación mental rápida, un metro es algo más de tres pies y tres pulgadas. La vía exacta es dividir el valor en metros entre 0.3048, que el conversor hace automáticamente con la precisión mostrada." },
      { question: "¿Son exactas las conversiones?", answer: "Sí. El conversor usa los factores definidos internacionalmente, todos los cuales se remontan al metro, por lo que los resultados son precisos hasta los decimales mostrados. Donde ves una cifra redondeada como 39.3701 pulgadas, el redondeo es puramente para la visualización; el cálculo en sí conserva la precisión completa. Los factores métrico-imperiales como la pulgada y la milla son definiciones exactas, no aproximaciones medidas." },
      { question: "¿Cuál es la diferencia entre las unidades de longitud métricas e imperiales?", answer: "Las unidades métricas (milímetro, centímetro, metro, kilómetro) escalan en potencias de diez, lo que hace que las conversiones dentro del sistema sean simples desplazamientos del punto decimal. Las unidades imperiales (pulgada, pie, yarda, milla) usan factores variados de 12, 3 y 1,760. La mayor parte del mundo usa el sistema métrico, mientras que EE. UU. y, de manera informal, el Reino Unido conservan el imperial para algunos usos, lo que hace tan útil un conversor entre ambos." },
    ],
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
      "Free weight converter. Convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stone instantly, across metric and imperial units.",
    primaryKeyword: "weight converter",
    secondaryKeywords: ["kg to lbs", "grams to ounces", "pounds to kg"],
    slugEs: "conversor-de-peso",
    titleEs: "Conversor de Peso",
    shortDescriptionEs: "Convierte entre kg, lb, oz y más.",
    seoTitleEs: "Conversor de Peso — kg, lb, oz, gramos, stone",
    metaDescriptionEs:
      "Conversor de peso gratuito. Convierte entre miligramos, gramos, kilogramos, toneladas, onzas, libras y stone al instante.",
    primaryKeywordEs: "conversor de peso",
    secondaryKeywordsEs: ["kg a lbs", "gramos a onzas", "libras a kg"],
    formulaExplanationEs:
      "El valor de entrada se multiplica por la proporción fija de su unidad respecto al kilogramo para expresarlo en kilogramos, y luego se divide por la proporción de la unidad de destino para completar la conversión. Como cada unidad de masa se define como un número constante de kilogramos, encadenar a través de esta única base es exacto y hace que el conversor almacene solo un factor por unidad en lugar de un factor para cada emparejamiento posible.",
    explanationEs:
      "Un conversor de peso cambia una masa de una unidad a otra, abarcando unidades métricas como miligramos, gramos, kilogramos y toneladas junto con unidades imperiales y usuales como onzas, libras y stone. Reduce lo que introduces a kilogramos, la unidad base, y luego lo escala a la unidad elegida, de modo que una ruta consistente maneja todas las combinaciones de ambos sistemas de medición.\n\nEsto importa porque la masa se expresa de forma distinta según dónde estés y qué hagas. El peso corporal aparece en kilogramos, libras o stone según el país; las recetas mezclan gramos y onzas; el envío y la carga combinan kilogramos, libras y toneladas. Un conversor de peso resuelve esas diferencias de una vez y evita el tipo de error que convierte el coste de un paquete o el cálculo de una dosis en una equivocación costosa.\n\nEl método de normalizar a kilogramos se usa porque cada unidad de masa tiene una proporción fija respecto al kilogramo: una libra son exactamente 0.45359237 kg, una onza es una dieciseisava parte de una libra, así que pivotar a través de esa base mantiene cada resultado exacto. Cocineros, viajeros, personas que siguen su progreso en el gimnasio, personal de almacén y logística, y trabajadores sanitarios recurren a un conversor de peso siempre que una cifra aparece en una unidad desconocida.",
    exampleEs: {
      inputs: { value: 70, from: "kg", to: "lb" },
      explanation: "70 kg ÷ 0.45359237 ≈ 154.3236 lb.",
    },
    faqsEs: [
      { question: "¿Cuántas libras hay en un kilogramo?", answer: "Unas 2.20462 libras por kilogramo. Así, 70 kg son aproximadamente 154.32 lb, y 100 kg son unas 220.46 lb. Para invertirlo, multiplica las libras por 0.453592 para obtener kilogramos. El factor proviene de la definición exacta de que una libra equivale a 0.45359237 kilogramos, por lo que la cifra de libras por kilogramo es simplemente el recíproco de ese valor." },
      { question: "¿Cómo convierto kilogramos a libras?", answer: "Multiplica la cifra en kilogramos por 2.20462, o de forma equivalente divide entre 0.453592. Por ejemplo, 5 kg son unas 11.02 lb. Para una estimación mental aproximada, duplica los kilogramos y suma alrededor del diez por ciento. La ruta precisa que usa el conversor pivota a través de la definición exacta de la libra, por lo que la respuesta mostrada es precisa hasta los decimales indicados en lugar de una aproximación." },
      { question: "¿Qué es un stone en peso?", answer: "Un stone equivale a 14 libras, o unos 6.35 kilogramos, y todavía se usa mucho para el peso corporal en el Reino Unido e Irlanda. Así, 70 kg son aproximadamente 11 stone. El stone normalmente se expresa con un resto en libras, como 11 stone 0 libras, en lugar de como decimal. El conversor informa el valor decimal en stone, que puedes dividir en stone enteros y libras." },
      { question: "¿Es el peso lo mismo que la masa?", answer: "En sentido estricto, la masa mide la cantidad de materia mientras que el peso es la fuerza que la gravedad ejerce sobre ella, pero en el uso cotidiano los términos son intercambiables. Las unidades aquí (gramos, kilogramos, libras, etc.) miden todas la masa. Como las conversiones entre ellas son proporciones, y la gravedad es prácticamente constante en la superficie de la Tierra, la distinción no afecta a los números que produce este conversor." },
      { question: "¿Cuántos gramos hay en una onza?", answer: "Una onza son unos 28.3495 gramos, ya que una onza se define como una dieciseisava parte de una libra. Así, cuatro onzas son aproximadamente 113.4 gramos, una cifra común en cocina. Esta es la onza avoirdupois usada para el peso cotidiano; la onza troy usada para metales preciosos es más pesada, unos 31.10 gramos, así que no uses este conversor para el precio del oro o la plata." },
    ],
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
    slugEs: "conversor-de-velocidad",
    titleEs: "Conversor de Velocidad",
    shortDescriptionEs: "Convierte entre mph, km/h, m/s y nudos.",
    seoTitleEs: "Conversor de Velocidad — mph, km/h, m/s, nudos",
    metaDescriptionEs:
      "Conversor de velocidad gratuito. Convierte entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo.",
    primaryKeywordEs: "conversor de velocidad",
    secondaryKeywordsEs: ["mph a kmh", "km/h a mph", "nudos a mph"],
    formulaExplanationEs:
      "El valor de entrada se multiplica por la proporción fija de su unidad respecto a los metros por segundo, y luego se divide por la proporción de la unidad de destino para llegar a la respuesta. Esto funciona porque cada unidad de velocidad es una unidad de distancia sobre una unidad de tiempo, y ambas se reducen a constantes frente al metro y el segundo, de modo que su proporción combinada respecto a m/s es fija y pivotar a través de esa única base sigue siendo exacto.",
    explanationEs:
      "Un conversor de velocidad reformula un ritmo de desplazamiento en una unidad diferente, moviéndose entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo. Reduce tu cifra a metros por segundo, la base del SI para la velocidad, y luego la escala a la unidad que quieras, de modo que un único pivote maneja velocidades de carretera, velocidades del viento, ritmos de carrera y velocidades de embarcaciones por igual.\n\nEsto importa porque la velocidad se expresa en distintas unidades según el contexto, y el mismo trayecto puede parecer más rápido o más lento solo por la unidad. El velocímetro de un auto puede marcar km/h donde el límite está señalado en mph; un pronóstico del tiempo da el viento en nudos o metros por segundo; la aviación y la navegación funcionan enteramente con nudos. Un conversor de velocidad los reconcilia al instante para que las comparaciones sean equivalentes.\n\nEl método de convertir a través de metros por segundo se usa porque cada unidad tiene una proporción fija respecto a esa base: 1 km/h es exactamente 1000/3600 m/s, un nudo es una milla náutica por hora a 0.514444 m/s, así que pivotar a través de ella mantiene resultados exactos. Conductores que cruzan fronteras, pilotos y marineros, meteorólogos, atletas que comprueban su ritmo y estudiantes de física usan un conversor de velocidad siempre que un ritmo llega en una unidad desconocida.",
    exampleEs: {
      inputs: { value: 100, from: "km/h", to: "mph" },
      explanation: "100 km/h ≈ 27.78 m/s ≈ 62.14 mph.",
    },
    faqsEs: [
      { question: "¿Cómo convierto km/h a mph?", answer: "Multiplica la cifra en km/h por unos 0.6214 para obtener mph. Así, 100 km/h son aproximadamente 62.1 mph, y un límite urbano de 50 km/h son unas 31 mph. Para invertirlo, multiplica las mph por 1.60934. El factor es la proporción de un kilómetro respecto a una milla, ya que ambas velocidades comparten la unidad de tiempo por hora, por lo que solo hay que convertir la parte de distancia." },
      { question: "¿Qué es un nudo?", answer: "Un nudo es una milla náutica por hora, usado en aviación y navegación marítima porque una milla náutica corresponde a un minuto de latitud, lo que simplifica el trabajo con cartas. Un nudo son unas 1.151 mph o 1.852 km/h. Así, un barco a 20 nudos va a unas 23 mph. El nombre de la unidad proviene de la línea con nudos que los marineros usaban antaño para medir la velocidad de una embarcación." },
      { question: "¿Qué tan rápido es 100 km/h en mph?", answer: "Unas 62.14 mph, lo que pasa por aproximadamente 27.78 metros por segundo. Es una velocidad común de autopista. Un atajo mental rápido es multiplicar los km/h por 0.6, dando 60 como ligera subestimación, y luego ajustar hacia arriba. El conversor lleva el factor completo de 0.62137, por lo que su respuesta es precisa hasta los decimales mostrados en lugar de la estimación aproximada." },
      { question: "¿Por qué convertir a través de metros por segundo?", answer: "Los metros por segundo son la unidad base del SI para la velocidad, así que cada otra unidad tiene una proporción fija y definida con exactitud respecto a ella. Usarla como pivote significa que el conversor solo necesita un factor por unidad en lugar de una regla separada para cada par, y mantiene resultados exactos. También es la unidad que esperan las ecuaciones de física, por lo que el trabajo científico expresa la velocidad en m/s." },
      { question: "¿Cuál es un buen ritmo de carrera en estas unidades?", answer: "La carrera suele registrarse como ritmo, el tiempo por kilómetro o milla, pero se convierte directamente a velocidad. Un enérgico 10 km/h equivale a unas 6.2 mph, o un kilómetro en seis minutos. La velocidad de un maratón de élite ronda los 20 km/h, unas 12.4 mph. Para convertir una velocidad en ritmo, divide 60 entre la cifra en km/h para obtener minutos por kilómetro, que muchos corredores encuentran más fácil de juzgar." },
    ],
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
      "Free data storage converter. Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and petabytes using decimal or binary units.",
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
    slugEs: "conversor-de-almacenamiento-de-datos",
    titleEs: "Conversor de Almacenamiento de Datos",
    shortDescriptionEs: "Convierte entre bytes, KB, MB, GB y TB.",
    seoTitleEs: "Conversor de Almacenamiento de Datos — Bytes, KB, MB, GB, TB",
    metaDescriptionEs:
      "Conversor de almacenamiento de datos gratuito. Convierte entre bits, bytes, kilobytes, megabytes, gigabytes, terabytes y petabytes.",
    primaryKeywordEs: "conversor de almacenamiento de datos",
    secondaryKeywordsEs: ["mb a gb", "bytes a megabytes", "gb a tb"],
    formulaEs: "Unidades binarias: 1 KB = 1024 B, 1 MB = 1024 KB, y así sucesivamente (1 byte = 8 bits)",
    formulaExplanationEs:
      "Cada unidad se define como un número fijo de bytes —una potencia de 1.024 en la convención binaria, con un byte igual a 8 bits—. La entrada se reduce a bytes multiplicándola por el valor en bytes de su unidad y luego se divide por el valor en bytes de la unidad de destino. Esto funciona porque la memoria del ordenador se direcciona en potencias de dos, por lo que 1.024 es el multiplicador natural y cada unidad es una constante exacta de bytes.",
    explanationEs:
      "Un conversor de almacenamiento de datos reexpresa una cantidad de información digital en una unidad distinta, moviéndose entre bits, bytes, kilobytes, megabytes, gigabytes, terabytes y petabytes. Reduce tu cifra a una base común y la escala hasta la unidad que elijas, usando pasos binarios (basados en 1024) donde cada peldaño de la escalera es 1.024 veces el de abajo y un byte son ocho bits.\n\nEsto importa porque las cifras de almacenamiento guían decisiones reales y las unidades se confunden con facilidad. Si una biblioteca de vídeo cabe en un disco, cuánto tarda un archivo en descargarse o si una copia de seguridad se completará dependen de comparar tamaños en una unidad consistente. Un conversor hace esas comparaciones fiables, y la base binaria refleja cómo los sistemas operativos informan realmente los tamaños de archivos y discos.\n\nSe usa el método binario porque la memoria del ordenador se organiza en potencias de dos, así que 1.024 en lugar de 1.000 es el paso natural entre unidades. Los fabricantes de discos, en cambio, suelen usar unidades decimales (basadas en 1000), por lo que un disco vendido como 1 TB muestra menos espacio utilizable en tu sistema operativo. Personal de TI, desarrolladores, estudiantes y cualquiera que gestione archivos o ancho de banda recurren a un conversor cuando los tamaños aparecen en unidades que no coinciden.",
    exampleEs: {
      inputs: { value: 1024, from: "MB", to: "GB" },
      explanation: "1024 MB ÷ 1024 = 1 GB (binario).",
    },
    faqsEs: [
      { question: "¿Por qué mi disco duro muestra menos espacio del anunciado?", answer: "Los fabricantes miden la capacidad en unidades decimales, donde 1 TB equivale a 1.000.000.000.000 bytes, mientras que los sistemas operativos suelen informar en unidades binarias, donde 1 TB son 1.099.511.627.776 bytes. Dividir la capacidad decimal entre la unidad binaria mayor hace que la cifra informada parezca menor —alrededor de un siete por ciento menos a escala de terabyte— aunque no falte espacio en realidad. La sobrecarga de formateo puede reducir un poco más el espacio utilizable." },
      { question: "¿Cuántos megabytes hay en un gigabyte?", answer: "En la convención binaria que usa este conversor, hay 1.024 megabytes en un gigabyte, igual que cuentan los sistemas operativos. En la convención decimal que prefiere el marketing de almacenamiento, son 1.000. La brecha se acumula en cada nivel, así que la diferencia entre binario y decimal crece más para terabytes y petabytes. Esta calculadora usa el paso de 1.024 en todo para ser coherente con los tamaños de archivo informados." },
      { question: "¿Cuántos bits hay en un byte?", answer: "Ocho bits forman un byte, por eso los tamaños de archivo en bytes y las velocidades de conexión en bits difieren en un factor de ocho. Un byte es la unidad más pequeña que suele almacenar un solo carácter, mientras que un bit es un único dígito binario. Las velocidades de red se citan normalmente en bits por segundo, así que una línea de 80 Mbps transfiere unos 10 megabytes por segundo antes de la sobrecarga." },
      { question: "¿Cuál es la diferencia entre unidades de almacenamiento binarias y decimales?", answer: "Las unidades binarias avanzan de 1.024 en 1.024 (2 elevado a la décima potencia) y reflejan cómo se direcciona físicamente la memoria; las decimales avanzan de 1.000 en 1.000 y siguen los prefijos métricos estándar. En rigor, las unidades binarias deberían llamarse kibibyte, mebibyte, etc., pero el uso común mantiene KB, MB y GB para ambas. Este conversor aplica el paso binario de 1.024, que coincide con lo que muestran la mayoría de los sistemas operativos." },
      { question: "¿Cómo convierto MB a GB?", answer: "Divide la cifra de megabytes entre 1.024 para obtener gigabytes en unidades binarias. Así, 1.024 MB son exactamente 1 GB, y 512 MB son 0,5 GB. Para ir al revés, multiplica los gigabytes por 1.024. Si una fuente usa unidades decimales, el divisor sería 1.000, pero para los tamaños de archivo y disco que muestra tu sistema operativo, 1.024 es el paso correcto." },
    ],
    relatedCalculators: ["length-converter", "weight-converter", "speed-converter"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
