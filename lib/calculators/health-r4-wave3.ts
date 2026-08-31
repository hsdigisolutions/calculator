import type { CalculatorDefinition, CalculatorField } from "../types";

const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};

export const healthR4Calculators: CalculatorDefinition[] = [
  {
    id: "lean-body-mass",
    slug: "lean-body-mass-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Lean Body Mass Calculator",
    shortDescription: "Estimate lean mass and fat mass from height and weight.",
    seoTitle: "Lean Body Mass Calculator — Boer Formula (LBM)",
    metaDescription:
      "Free lean body mass calculator. Estimate your lean body mass and fat mass in kilograms from height, weight and sex using the Boer formula.",
    primaryKeyword: "lean body mass calculator",
    secondaryKeywords: ["lbm calculator", "boer formula", "fat free mass calculator"],
    fields: [
      { id: "weightKg", label: "Weight", type: "number", unit: "kg", placeholder: "80", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "180", required: true, span: 1, min: 0 },
      sexField,
    ],
    results: [
      { id: "leanBodyMass", label: "Lean body mass", format: "number", decimals: 1, unit: "kg", isPrimary: true },
      { id: "bodyFatMass", label: "Body fat mass", format: "number", decimals: 1, unit: "kg", isPrimary: false },
    ],
    formula: "Male LBM = 0.407×kg + 0.267×cm − 19.2; Female LBM = 0.252×kg + 0.473×cm − 48.3",
    explanation:
      "Lean body mass is everything in your body that is not fat: muscle, bone, organs, connective tissue and the water they hold. A lean body mass calculator estimates that fat-free portion, which matters far more than total weight for judging fitness, strength potential and even certain drug doses that are targeted to lean tissue rather than overall size. This tool uses the Boer formula, one of the most widely cited equations for predicting lean mass from height, weight and sex, and it separates the scale reading into the part that is metabolically active and the part that is stored energy. Knowing your lean body mass helps you set smarter goals: during a fat-loss phase the aim is to shed fat mass while preserving lean mass, and a rising lean figure alongside steady weight often signals successful muscle gain that the scale alone would hide. Athletes and clinicians use a lean body mass calculator to scale protein needs, gauge body composition changes over time, and interpret strength relative to the tissue that produces it. Because the Boer equation is derived from population averages, it is an estimate rather than a lab measurement; methods like DEXA, hydrostatic weighing or bioelectrical impedance measure body composition more directly. Still, tracking the same formula over weeks gives a consistent, useful picture of how your body is changing, and it is a valuable complement to body-fat percentage and simple weight tracking.",
    formulaExplanation:
      "The Boer formula predicts lean body mass as a weighted sum of body weight and height, with different coefficients for men and women that reflect their typical differences in muscle and fat distribution. Weight contributes because heavier bodies generally carry more of every tissue, while height contributes because taller frames hold more lean structure. Subtracting a constant calibrates the equation to real measured lean-mass data. Fat mass is then simply total weight minus the estimated lean mass.",
    example: {
      inputs: { weightKg: 80, heightCm: 180, sex: "male" },
      explanation: "For an 80 kg, 180 cm man: 0.407×80 + 0.267×180 − 19.2 ≈ 61.4 kg lean, leaving about 18.6 kg fat.",
    },
    faqs: [
      { question: "What is a healthy lean body mass?", answer: "There is no single ideal figure because lean mass scales with height, frame and sex. Instead of a target number, watch the direction of change: preserving or increasing lean mass while losing fat is the goal for most people. Men typically carry proportionally more lean mass than women. Comparing your lean mass over time on the same formula is far more useful than chasing an absolute value someone else quotes." },
      { question: "How is lean body mass different from muscle mass?", answer: "Lean body mass includes all fat-free tissue: skeletal muscle plus bone, organs, skin, blood and body water. Muscle mass is only one component of it, usually a bit under half of lean mass in an average adult. So your muscle mass is always smaller than your lean body mass. Most formulas, including Boer, estimate total lean mass rather than muscle alone, because muscle is hard to isolate without imaging." },
      { question: "Which lean body mass formula is most accurate?", answer: "The Boer, James and Hume equations are the most commonly used, and Boer tends to perform well across a broad range of adults. All are population estimates, so none matches a direct measurement for a specific individual. For accuracy within a few percent, a DEXA scan, hydrostatic weighing or a Bod Pod is the reference standard. For everyday tracking, pick one formula and use it consistently rather than switching between them." },
      { question: "Why does lean body mass matter for drug dosing?", answer: "Some medications, particularly certain anaesthetics and chemotherapy agents, distribute mainly into lean tissue rather than fat. Dosing by total weight can then overdose people who carry more fat, so clinicians sometimes calculate doses from lean body mass or adjusted body weight instead. This is one reason a lean body mass calculator appears in clinical references, though any real dosing decision must be made by a qualified prescriber, not a general tool." },
      { question: "Can I increase my lean body mass?", answer: "Yes. Progressive resistance training combined with adequate protein, usually around 1.6 to 2.2 grams per kilogram of body weight for those building muscle, and sufficient overall calories and sleep, drives gains in lean mass over months. Older adults especially benefit, since strength training counters the natural age-related loss of muscle. Gains are gradual, so tracking lean mass every few weeks with the same formula shows progress the bathroom scale can mask." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "ideal-weight-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Boer P. (1984), American Journal of Physiology",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/6496691/",
    slugEs: "calculadora-de-masa-corporal-magra",
    titleEs: "Calculadora de Masa Corporal Magra",
    shortDescriptionEs: "Estima la masa magra y la masa grasa a partir de la altura y el peso.",
    seoTitleEs: "Calculadora de Masa Corporal Magra — Fórmula de Boer (MCM)",
    metaDescriptionEs:
      "Calculadora gratuita de masa corporal magra. Estima tu masa magra y tu masa grasa en kilogramos a partir de la altura, el peso y el sexo usando la fórmula de Boer.",
    primaryKeywordEs: "calculadora de masa corporal magra",
    secondaryKeywordsEs: ["calculadora de masa magra", "formula de boer", "calculadora de masa libre de grasa"],
    formulaExplanationEs:
      "La fórmula de Boer predice la masa corporal magra como una suma ponderada del peso corporal y la altura, con coeficientes distintos para hombres y mujeres que reflejan sus diferencias típicas en la distribución de músculo y grasa. El peso contribuye porque los cuerpos más pesados suelen tener más de cada tejido, mientras que la altura contribuye porque las estructuras más altas albergan más tejido magro. Restar una constante calibra la ecuación con datos reales medidos de masa magra. La masa grasa es entonces simplemente el peso total menos la masa magra estimada.",
    explanationEs:
      "La masa corporal magra es todo lo que hay en tu cuerpo que no es grasa: músculo, hueso, órganos, tejido conectivo y el agua que contienen. Una calculadora de masa corporal magra estima esa porción libre de grasa, que importa mucho más que el peso total para juzgar la forma física, el potencial de fuerza e incluso ciertas dosis de fármacos dirigidas al tejido magro en lugar del tamaño global. Esta herramienta utiliza la fórmula de Boer, una de las ecuaciones más citadas para predecir la masa magra a partir de la altura, el peso y el sexo, y separa la lectura de la báscula en la parte metabólicamente activa y la parte que almacena energía. Conocer tu masa corporal magra ayuda a fijar metas más inteligentes: durante una fase de pérdida de grasa el objetivo es perder masa grasa mientras se conserva la masa magra, y una cifra magra en aumento junto a un peso estable suele indicar ganancia muscular que la báscula por sí sola ocultaría. Atletas y clínicos usan una calculadora de masa corporal magra para escalar las necesidades de proteína, evaluar cambios de composición corporal a lo largo del tiempo e interpretar la fuerza en relación con el tejido que la produce. Como la ecuación de Boer deriva de promedios poblacionales, es una estimación y no una medición de laboratorio; métodos como DEXA, la pesada hidrostática o la impedancia bioeléctrica miden la composición corporal de forma más directa. Aun así, seguir la misma fórmula durante semanas ofrece una imagen consistente y útil de cómo cambia tu cuerpo.",
    exampleEs: {
      inputs: { weightKg: 80, heightCm: 180, sex: "male" },
      explanation: "Para un hombre de 80 kg y 180 cm: 0.407×80 + 0.267×180 − 19.2 ≈ 61.4 kg de masa magra, dejando unos 18.6 kg de grasa.",
    },
    faqsEs: [
      { question: "¿Cuál es una masa corporal magra saludable?", answer: "No existe una única cifra ideal porque la masa magra varía con la altura, la complexión y el sexo. En lugar de un número objetivo, observa la dirección del cambio: conservar o aumentar la masa magra mientras se pierde grasa es la meta para la mayoría de las personas. Los hombres suelen tener proporcionalmente más masa magra que las mujeres. Comparar tu masa magra a lo largo del tiempo con la misma fórmula es mucho más útil que perseguir un valor absoluto que otro cite." },
      { question: "¿En qué se diferencia la masa magra de la masa muscular?", answer: "La masa corporal magra incluye todo el tejido libre de grasa: músculo esquelético más hueso, órganos, piel, sangre y agua corporal. La masa muscular es solo un componente, normalmente algo menos de la mitad de la masa magra en un adulto medio. Por eso tu masa muscular siempre es menor que tu masa corporal magra. La mayoría de las fórmulas, incluida Boer, estiman la masa magra total en lugar del músculo solo, porque el músculo es difícil de aislar sin imágenes." },
      { question: "¿Qué fórmula de masa magra es más precisa?", answer: "Las ecuaciones de Boer, James y Hume son las más usadas, y Boer suele funcionar bien en un amplio rango de adultos. Todas son estimaciones poblacionales, así que ninguna iguala una medición directa para un individuo concreto. Para una precisión de pocos puntos porcentuales, una exploración DEXA, la pesada hidrostática o un Bod Pod son el estándar de referencia. Para el seguimiento diario, elige una fórmula y úsala de forma consistente en vez de cambiar entre ellas." },
      { question: "¿Por qué importa la masa magra para dosificar fármacos?", answer: "Algunos medicamentos, en particular ciertos anestésicos y agentes de quimioterapia, se distribuyen principalmente en el tejido magro y no en la grasa. Dosificar por peso total puede sobredosificar a personas con más grasa, por lo que los clínicos a veces calculan dosis a partir de la masa corporal magra o del peso corporal ajustado. Por eso una calculadora de masa corporal magra aparece en referencias clínicas, aunque cualquier decisión real de dosificación debe tomarla un prescriptor cualificado." },
      { question: "¿Puedo aumentar mi masa corporal magra?", answer: "Sí. El entrenamiento de fuerza progresivo combinado con proteína adecuada, normalmente entre 1.6 y 2.2 gramos por kilogramo de peso corporal para quienes desarrollan músculo, junto con suficientes calorías y sueño, impulsa ganancias de masa magra a lo largo de meses. Los adultos mayores se benefician especialmente, ya que el entrenamiento de fuerza contrarresta la pérdida muscular ligada a la edad. Las ganancias son graduales, así que seguir la masa magra cada pocas semanas con la misma fórmula muestra el progreso." },
    ],
  },
  {
    id: "army-body-fat",
    slug: "army-body-fat-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Army Body Fat Calculator",
    shortDescription: "Estimate body fat using the tape measurement method.",
    seoTitle: "Army Body Fat Calculator — Tape Method Body Fat %",
    metaDescription:
      "Free army body fat calculator using the circumference tape method. Estimate your body fat percentage from neck, waist, hip and height measurements.",
    primaryKeyword: "army body fat calculator",
    secondaryKeywords: ["tape measure body fat", "navy body fat calculator", "circumference body fat"],
    fields: [
      sexField,
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "180", required: true, span: 1, min: 0 },
      { id: "neckCm", label: "Neck circumference", type: "number", unit: "cm", placeholder: "38", required: true, span: 1, min: 0 },
      { id: "waistCm", label: "Waist circumference", type: "number", unit: "cm", placeholder: "85", required: true, span: 1, min: 0 },
      { id: "hipCm", label: "Hip circumference", type: "number", unit: "cm", placeholder: "95", required: false, span: 1, min: 0, helpText: "Women only — measure at the widest point." },
    ],
    results: [
      { id: "bodyFatPercent", label: "Body fat percentage", format: "percentage", decimals: 1, isPrimary: true },
    ],
    formula: "Circumference (US Navy) method using log10 of neck, waist, hip and height",
    explanation:
      "The army body fat calculator estimates your body fat percentage from a handful of tape measurements rather than expensive equipment, which is exactly why the method is used for fitness screening in military and tactical settings. It applies the US Navy circumference formula, the same approach adopted by the armed forces to assess whether members meet body-composition standards. Instead of pinching skinfolds or standing in a scanner, you measure your neck and waist, plus hips for women, along with your height, and the equation converts those circumferences into an estimated fat percentage. The logic is that fat accumulates in predictable places, so the girth of the waist relative to the neck and frame reveals roughly how much of your body is fat. Because it needs only a flexible tape, an army body fat calculator is cheap, quick and repeatable at home, making it popular well beyond the military with anyone tracking a cut or a recomposition. Accuracy is reasonable for average builds but can drift for very muscular or unusually shaped individuals, since the tape cannot see internal composition. Measure on bare skin, keep the tape snug and level, take the waist at the navel for men and the narrowest point for women, and measure the neck just below the larynx. Use the same technique each time so your trend is reliable, and treat the figure as a practical screening estimate rather than a laboratory value.",
    formulaExplanation:
      "The US Navy method models body fat as a function of the logarithm of circumference differences scaled by height. For men it uses waist minus neck, capturing abdominal fat above the frame's baseline girth; for women it adds hip circumference because women store more fat around the hips. Taking the base-10 logarithm reflects the non-linear way girth relates to fat, and the constants were fitted against hydrostatic-weighing reference data to return a percentage.",
    example: {
      inputs: { sex: "male", heightCm: 180, neckCm: 38, waistCm: 85 },
      explanation: "For a 180 cm man with a 38 cm neck and 85 cm waist, the formula returns roughly 15% body fat.",
    },
    faqs: [
      { question: "How accurate is the army tape method?", answer: "For people of average build it typically lands within about three to four percent of a hydrostatic or DEXA measurement, which is good for a tool needing only a tape. Accuracy falls for very lean, very muscular or unusually proportioned bodies, because circumferences cannot distinguish muscle from fat. It is best used to track changes over time with consistent technique rather than to pin down one exact number, and it should not replace clinical body-composition testing." },
      { question: "Where exactly do I measure my waist and neck?", answer: "Measure the neck just below the larynx, or Adam's apple, with the tape sloping slightly down at the front. For men, measure the waist horizontally at the navel; for women, at the narrowest point of the torso. Hips, for women, are measured at the widest point of the buttocks. Keep the tape snug but not compressing the skin, breathe normally, and take each reading two or three times to average out error." },
      { question: "Why do women need a hip measurement but men do not?", answer: "Women naturally store a larger share of body fat around the hips and thighs, so the female version of the Navy formula includes hip circumference to capture that fat and return an accurate estimate. Men store proportionally more fat abdominally, which the waist-minus-neck term already reflects, so a hip measurement adds little. Using the correct sex-specific formula matters, because applying the male equation to a woman would understate her body fat." },
      { question: "What is a healthy body fat percentage?", answer: "General fitness ranges are roughly 10 to 20 percent for men and 18 to 28 percent for women, with athletes often lower and essential-fat minimums near 3 percent for men and 12 percent for women. Body fat naturally rises with age. These bands are guides, not strict cutoffs, and health depends on more than fat alone. Very low body fat carries its own risks, so extremely lean targets are not advisable for most people." },
      { question: "Is the tape method the same as the Navy calculator?", answer: "Yes. The army or military tape method and the US Navy body fat calculator use the same circumference-based equations, developed by the Naval Health Research Center. Different branches set their own pass or fail thresholds and occasionally tweak measuring sites, but the underlying formula converting neck, waist, hip and height into a body fat percentage is identical. This calculator uses that standard equation, so results match typical Navy and army screening tools closely." },
    ],
    relatedCalculators: ["body-fat-calculator", "bmi-calculator", "ideal-weight-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "US Navy / Naval Health Research Center circumference method",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1424733/",
    slugEs: "calculadora-de-grasa-corporal-militar",
    titleEs: "Calculadora de Grasa Corporal Militar",
    shortDescriptionEs: "Estima la grasa corporal con el método de la cinta métrica.",
    seoTitleEs: "Calculadora de Grasa Corporal Militar — Método de la Cinta",
    metaDescriptionEs:
      "Calculadora gratuita de grasa corporal militar con el método de circunferencias con cinta. Estima tu porcentaje de grasa corporal a partir del cuello, la cintura, la cadera y la altura.",
    primaryKeywordEs: "calculadora de grasa corporal militar",
    secondaryKeywordsEs: ["medir grasa corporal con cinta", "calculadora de grasa corporal de la marina", "grasa corporal por circunferencias"],
    formulaExplanationEs:
      "El método de la Marina de EE. UU. modela la grasa corporal como una función del logaritmo de las diferencias de circunferencia escaladas por la altura. Para hombres usa cintura menos cuello, capturando la grasa abdominal por encima de la circunferencia base de la complexión; para mujeres añade la circunferencia de la cadera porque las mujeres almacenan más grasa alrededor de las caderas. Tomar el logaritmo en base 10 refleja la forma no lineal en que la circunferencia se relaciona con la grasa, y las constantes se ajustaron con datos de referencia de pesada hidrostática para devolver un porcentaje.",
    explanationEs:
      "La calculadora de grasa corporal militar estima tu porcentaje de grasa corporal a partir de unas pocas medidas con cinta métrica en lugar de equipos costosos, que es exactamente la razón por la que este método se usa para el cribado físico en entornos militares y tácticos. Aplica la fórmula de circunferencias de la Marina de EE. UU., el mismo enfoque adoptado por las fuerzas armadas para evaluar si sus miembros cumplen los estándares de composición corporal. En lugar de pellizcar pliegues cutáneos o pararse en un escáner, mides el cuello y la cintura, más las caderas en el caso de las mujeres, junto con tu altura, y la ecuación convierte esas circunferencias en un porcentaje de grasa estimado. La lógica es que la grasa se acumula en lugares predecibles, por lo que el contorno de la cintura en relación con el cuello y la complexión revela aproximadamente cuánta grasa tiene tu cuerpo. Como solo necesita una cinta flexible, una calculadora de grasa corporal militar es barata, rápida y repetible en casa, lo que la hace popular mucho más allá del ámbito militar entre cualquiera que siga una fase de definición o una recomposición. La precisión es razonable para complexiones medias, pero puede desviarse en personas muy musculosas o con formas inusuales, ya que la cinta no puede ver la composición interna. Mide sobre la piel desnuda, mantén la cinta ajustada y nivelada, toma la cintura a la altura del ombligo en hombres y en el punto más estrecho en mujeres, y mide el cuello justo debajo de la laringe. Usa la misma técnica cada vez para que tu tendencia sea fiable, y trata la cifra como una estimación práctica de cribado más que como un valor de laboratorio.",
    exampleEs: {
      inputs: { sex: "male", heightCm: 180, neckCm: 38, waistCm: 85 },
      explanation: "Para un hombre de 180 cm con un cuello de 38 cm y una cintura de 85 cm, la fórmula devuelve aproximadamente un 15% de grasa corporal.",
    },
    faqsEs: [
      { question: "¿Qué precisión tiene el método de la cinta militar?", answer: "En personas de complexión media suele situarse dentro de un tres a cuatro por ciento de una medición hidrostática o DEXA, lo cual es bueno para una herramienta que solo necesita una cinta. La precisión cae en cuerpos muy delgados, muy musculosos o con proporciones inusuales, porque las circunferencias no distinguen músculo de grasa. Es mejor usarlo para seguir los cambios en el tiempo con una técnica consistente que para fijar un número exacto, y no debe sustituir las pruebas clínicas de composición corporal." },
      { question: "¿Dónde mido exactamente la cintura y el cuello?", answer: "Mide el cuello justo debajo de la laringe, o nuez de Adán, con la cinta inclinada ligeramente hacia abajo por delante. En hombres, mide la cintura horizontalmente a la altura del ombligo; en mujeres, en el punto más estrecho del torso. Las caderas, en mujeres, se miden en el punto más ancho de los glúteos. Mantén la cinta ajustada pero sin comprimir la piel, respira con normalidad y toma cada lectura dos o tres veces para promediar el error." },
      { question: "¿Por qué las mujeres necesitan una medida de cadera y los hombres no?", answer: "Las mujeres almacenan de forma natural una mayor proporción de grasa corporal alrededor de las caderas y los muslos, por lo que la versión femenina de la fórmula de la Marina incluye la circunferencia de la cadera para capturar esa grasa y devolver una estimación precisa. Los hombres almacenan proporcionalmente más grasa en el abdomen, lo que el término cintura menos cuello ya refleja, así que una medida de cadera aporta poco. Usar la fórmula correcta según el sexo importa, porque aplicar la ecuación masculina a una mujer subestimaría su grasa corporal." },
      { question: "¿Qué es un porcentaje de grasa corporal saludable?", answer: "Los rangos generales de forma física son aproximadamente del 10 al 20 por ciento en hombres y del 18 al 28 por ciento en mujeres, con atletas a menudo por debajo y mínimos de grasa esencial cercanos al 3 por ciento en hombres y al 12 por ciento en mujeres. La grasa corporal aumenta de forma natural con la edad. Estas bandas son guías, no límites estrictos, y la salud depende de más que solo la grasa. Una grasa corporal muy baja conlleva sus propios riesgos, así que los objetivos extremadamente delgados no son aconsejables para la mayoría." },
      { question: "¿El método de la cinta es lo mismo que la calculadora de la Marina?", answer: "Sí. El método de la cinta militar y la calculadora de grasa corporal de la Marina de EE. UU. usan las mismas ecuaciones basadas en circunferencias, desarrolladas por el Centro de Investigación de Salud Naval. Distintas ramas fijan sus propios umbrales de aprobado o suspenso y ocasionalmente ajustan los puntos de medición, pero la fórmula subyacente que convierte cuello, cintura, cadera y altura en un porcentaje de grasa es idéntica. Esta calculadora usa esa ecuación estándar, por lo que los resultados coinciden estrechamente con las herramientas típicas de cribado." },
    ],
  },
  {
    id: "target-heart-rate",
    slug: "target-heart-rate-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Target Heart Rate Calculator",
    shortDescription: "Find your training heart rate from age and intensity.",
    seoTitle: "Target Heart Rate Calculator — Karvonen & % Max HR",
    metaDescription:
      "Free target heart rate calculator. Find your ideal training heart rate in beats per minute from age, intensity and resting heart rate using the Karvonen method.",
    primaryKeyword: "target heart rate calculator",
    secondaryKeywords: ["karvonen formula", "training heart rate", "heart rate zone calculator"],
    fields: [
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "restingHeartRate", label: "Resting heart rate", type: "number", unit: "bpm", placeholder: "60", required: false, span: 1, min: 0, helpText: "Optional — enables the Karvonen method." },
      { id: "intensityPercent", label: "Intensity", type: "number", unit: "%", placeholder: "70", required: true, span: 2, min: 0, max: 100, defaultValue: "70" },
    ],
    results: [
      { id: "targetBpm", label: "Target heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: true },
      { id: "maxHeartRate", label: "Maximum heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
    ],
    formula: "With resting HR: ((maxHR − rest) × intensity) + rest; otherwise maxHR × intensity. maxHR = 220 − age",
    explanation:
      "Your target heart rate is the beats-per-minute range you aim for during exercise to train at the right intensity for your goal, and a target heart rate calculator turns your age and desired effort into a concrete number to chase on a monitor. The tool first estimates your maximum heart rate as 220 minus your age, then scales that ceiling to the intensity you choose. If you also enter a resting heart rate, it switches to the more personalised Karvonen method, which works from your heart rate reserve, the gap between resting and maximum, and adds your resting rate back in. That reserve-based approach tailors the target to your fitness, because a well-conditioned heart with a low resting rate produces a different training zone than an untrained one at the same percentage. People use a target heart rate calculator to make workouts purposeful: easy zones near 50 to 60 percent build an aerobic base and aid recovery, moderate zones around 70 percent improve endurance and burn a healthy mix of fuel, and hard zones above 80 percent sharpen speed and threshold. Training by heart rate keeps you honest, preventing easy days from creeping too hard and hard days from being too soft. Remember that 220-minus-age is an average with real individual scatter, so treat the target as a well-informed guide, adjust to how you feel, and consult a doctor before high-intensity training if you have any cardiac risk factors.",
    formulaExplanation:
      "The simple method multiplies your estimated maximum heart rate by the chosen intensity percentage, giving a target as a flat fraction of the ceiling. The Karvonen method is more individual: it takes your heart rate reserve, maximum minus resting, multiplies that by the intensity, then adds resting back. This anchors the zone to your own baseline, so fitter people with lower resting rates get targets matched to their conditioning rather than to age alone.",
    example: {
      inputs: { age: 30, restingHeartRate: 60, intensityPercent: 70 },
      explanation: "Max HR 190; Karvonen: ((190 − 60) × 0.70) + 60 = 151 bpm target.",
    },
    faqs: [
      { question: "What is the difference between the two methods?", answer: "The percentage-of-maximum method simply takes a fraction of your estimated max heart rate, which is quick but ignores individual fitness. The Karvonen method works from heart rate reserve, the difference between your resting and maximum rates, so it accounts for how conditioned your heart is. Karvonen generally gives a slightly higher, more personalised target and is preferred when you know your true resting heart rate, measured first thing in the morning before rising." },
      { question: "How do I measure my resting heart rate accurately?", answer: "Measure it in the morning before getting out of bed, when you are fully rested and calm. Count your pulse at the wrist or neck for a full 60 seconds, or use a heart-rate monitor or fitness tracker. Take it on several consecutive days and average the readings, since caffeine, stress, poor sleep and illness all raise it. A typical adult resting rate is 60 to 100 beats per minute, and lower often reflects better fitness." },
      { question: "What intensity should I train at?", answer: "It depends on your goal. Around 50 to 60 percent suits warm-ups, recovery and beginners; 60 to 70 percent builds an aerobic base and endurance; 70 to 80 percent improves cardiovascular fitness and is the classic moderate training zone; and 80 to 90 percent develops speed and lactate threshold for experienced athletes. Most balanced programmes spend the majority of time in easy-to-moderate zones with occasional harder efforts, rather than training hard every session." },
      { question: "Is 220 minus age reliable for everyone?", answer: "It is a population average and can be off by ten to fifteen beats per minute for any individual, because true maximum heart rate depends on genetics and physiology, not age alone. Formulas like 208 minus 0.7 times age fit large groups slightly better. For precise personal figures a supervised maximal exercise test is the gold standard. For general training the estimate is fine, provided you treat the resulting zones as flexible guides." },
      { question: "Should I see a doctor before training in high zones?", answer: "If you have heart disease, high blood pressure, diabetes, are over 40 and previously sedentary, or experience chest pain, dizziness or unusual breathlessness, consult a doctor before training near your maximum heart rate. For most healthy people, exercising within target zones is safe and highly beneficial. A medical check and, ideally, a supervised stress test give both peace of mind and a far more accurate personal maximum than any age-based estimate." },
    ],
    relatedCalculators: ["bmr-calculator", "tdee-calculator", "calorie-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American Heart Association; Karvonen et al. (1957)",
    sourceUrl: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates",
    slugEs: "calculadora-de-frecuencia-cardiaca-objetivo",
    titleEs: "Calculadora de Frecuencia Cardíaca Objetivo",
    shortDescriptionEs: "Encuentra tu frecuencia cardíaca de entrenamiento según la edad y la intensidad.",
    seoTitleEs: "Calculadora de Frecuencia Cardíaca Objetivo — Karvonen y % FC Máx",
    metaDescriptionEs:
      "Calculadora gratuita de frecuencia cardíaca objetivo. Encuentra tu frecuencia cardíaca ideal de entrenamiento en pulsaciones por minuto según la edad, la intensidad y la frecuencia cardíaca en reposo con el método de Karvonen.",
    primaryKeywordEs: "calculadora de frecuencia cardiaca objetivo",
    secondaryKeywordsEs: ["formula de karvonen", "frecuencia cardiaca de entrenamiento", "calculadora de zonas de frecuencia cardiaca"],
    formulaExplanationEs:
      "El método simple multiplica tu frecuencia cardíaca máxima estimada por el porcentaje de intensidad elegido, dando un objetivo como una fracción fija del techo. El método de Karvonen es más individual: toma tu reserva de frecuencia cardíaca, máxima menos reposo, la multiplica por la intensidad y luego suma de nuevo la frecuencia en reposo. Esto ancla la zona a tu propia línea base, de modo que las personas más en forma con frecuencias en reposo más bajas obtienen objetivos ajustados a su condición física en lugar de solo a la edad.",
    explanationEs:
      "Tu frecuencia cardíaca objetivo es el rango de pulsaciones por minuto al que apuntas durante el ejercicio para entrenar a la intensidad adecuada para tu meta, y una calculadora de frecuencia cardíaca objetivo convierte tu edad y el esfuerzo deseado en un número concreto que perseguir en un monitor. La herramienta primero estima tu frecuencia cardíaca máxima como 220 menos tu edad, luego escala ese techo a la intensidad que elijas. Si además introduces una frecuencia cardíaca en reposo, cambia al método de Karvonen, más personalizado, que trabaja a partir de tu reserva de frecuencia cardíaca, la diferencia entre reposo y máxima, y vuelve a sumar tu frecuencia en reposo. Ese enfoque basado en la reserva adapta el objetivo a tu forma física, porque un corazón bien acondicionado con una frecuencia en reposo baja produce una zona de entrenamiento distinta a la de uno no entrenado a la misma intensidad. Las personas usan una calculadora de frecuencia cardíaca objetivo para dar propósito a sus entrenamientos: las zonas fáciles cercanas al 50 a 60 por ciento construyen una base aeróbica y ayudan a la recuperación, las zonas moderadas en torno al 70 por ciento mejoran la resistencia y queman una mezcla saludable de combustible, y las zonas duras por encima del 80 por ciento afinan la velocidad y el umbral. Entrenar por frecuencia cardíaca te mantiene honesto, evitando que los días fáciles se vuelvan demasiado duros y que los días duros sean demasiado suaves. Recuerda que 220 menos la edad es un promedio con una dispersión individual real, así que trata el objetivo como una guía bien fundamentada, ajústalo según cómo te sientas y consulta a un médico antes del entrenamiento de alta intensidad si tienes factores de riesgo cardíaco.",
    exampleEs: {
      inputs: { age: 30, restingHeartRate: 60, intensityPercent: 70 },
      explanation: "FC máxima 190; Karvonen: ((190 − 60) × 0.70) + 60 = 151 ppm objetivo.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre los dos métodos?", answer: "El método del porcentaje del máximo simplemente toma una fracción de tu frecuencia cardíaca máxima estimada, lo cual es rápido pero ignora la forma física individual. El método de Karvonen trabaja a partir de la reserva de frecuencia cardíaca, la diferencia entre tu frecuencia en reposo y la máxima, por lo que tiene en cuenta cuán acondicionado está tu corazón. Karvonen suele dar un objetivo algo más alto y más personalizado, y se prefiere cuando conoces tu verdadera frecuencia en reposo, medida a primera hora de la mañana antes de levantarte." },
      { question: "¿Cómo mido con precisión mi frecuencia cardíaca en reposo?", answer: "Mídela por la mañana antes de levantarte de la cama, cuando estás completamente descansado y tranquilo. Cuenta tu pulso en la muñeca o el cuello durante 60 segundos completos, o usa un monitor de frecuencia cardíaca o un reloj de actividad. Tómala varios días consecutivos y promedia las lecturas, ya que la cafeína, el estrés, el mal sueño y la enfermedad la elevan. Una frecuencia en reposo típica de un adulto es de 60 a 100 pulsaciones por minuto, y más baja suele reflejar mejor forma física." },
      { question: "¿A qué intensidad debo entrenar?", answer: "Depende de tu meta. Alrededor del 50 al 60 por ciento sirve para calentamientos, recuperación y principiantes; del 60 al 70 por ciento construye una base aeróbica y resistencia; del 70 al 80 por ciento mejora la forma cardiovascular y es la clásica zona de entrenamiento moderado; y del 80 al 90 por ciento desarrolla la velocidad y el umbral de lactato para atletas experimentados. La mayoría de los programas equilibrados pasan la mayor parte del tiempo en zonas fáciles a moderadas con esfuerzos duros ocasionales, en lugar de entrenar fuerte en cada sesión." },
      { question: "¿Es fiable 220 menos la edad para todos?", answer: "Es un promedio poblacional y puede desviarse en diez a quince pulsaciones por minuto en cualquier individuo, porque la verdadera frecuencia cardíaca máxima depende de la genética y la fisiología, no solo de la edad. Fórmulas como 208 menos 0.7 por la edad se ajustan algo mejor a grandes grupos. Para cifras personales precisas, una prueba de esfuerzo máxima supervisada es el estándar de oro. Para el entrenamiento general la estimación sirve, siempre que trates las zonas resultantes como guías flexibles." },
      { question: "¿Debo ver a un médico antes de entrenar en zonas altas?", answer: "Si tienes una enfermedad cardíaca, presión arterial alta, diabetes, tienes más de 40 años y has sido sedentario, o experimentas dolor en el pecho, mareos o falta de aire inusual, consulta a un médico antes de entrenar cerca de tu frecuencia cardíaca máxima. Para la mayoría de las personas sanas, ejercitarse dentro de las zonas objetivo es seguro y muy beneficioso. Una revisión médica y, de ser posible, una prueba de esfuerzo supervisada dan tranquilidad y un máximo personal mucho más preciso." },
    ],
  },
  {
    id: "calorie-deficit",
    slug: "calorie-deficit-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Calorie Deficit Calculator",
    shortDescription: "Find the daily deficit needed to reach a weight goal.",
    seoTitle: "Calorie Deficit Calculator — Daily Deficit for Weight Loss",
    metaDescription:
      "Free calorie deficit calculator. Work out the daily calorie deficit and target intake needed to lose a set amount of weight over a chosen number of weeks.",
    primaryKeyword: "calorie deficit calculator",
    secondaryKeywords: ["weight loss calorie calculator", "daily deficit calculator", "calorie deficit for weight loss"],
    fields: [
      { id: "maintenanceCalories", label: "Maintenance calories", type: "number", unit: "kcal", placeholder: "2500", required: true, span: 1, min: 0, helpText: "Your daily calories to maintain weight (TDEE)." },
      { id: "targetWeightLossKg", label: "Target weight loss", type: "number", unit: "kg", placeholder: "5", required: true, span: 1, min: 0 },
      { id: "weeks", label: "Timeframe", type: "number", unit: "weeks", placeholder: "10", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "dailyDeficit", label: "Daily calorie deficit", format: "number", decimals: 0, unit: "kcal", isPrimary: true },
      { id: "dailyCalories", label: "Target daily calories", format: "number", decimals: 0, unit: "kcal", isPrimary: false },
    ],
    formula: "Daily deficit = (target kg × 7700) ÷ (weeks × 7); target intake = maintenance − daily deficit",
    explanation:
      "A calorie deficit is the gap between the energy you burn and the energy you eat, and it is the fundamental driver of weight loss: eat less than you spend, and your body makes up the difference by drawing on stored fat. A calorie deficit calculator works backwards from a goal, taking the weight you want to lose and the time you have, and telling you how large a daily deficit that requires and what daily calorie intake to aim for. The engine rests on the well-known approximation that a kilogram of body fat stores roughly 7,700 calories, so losing five kilograms means creating a total deficit of about 38,500 calories, spread across your chosen timeframe. Dividing that total by the number of days yields the deficit you need each day, and subtracting it from your maintenance calories, your total daily energy expenditure, gives your target intake. People rely on a calorie deficit calculator to make weight loss concrete and paced rather than a vague intention, and to sanity-check whether a goal is realistic. A safe, sustainable rate is generally about 0.5 to 1 kilogram per week, which usually means a deficit of roughly 500 to 1,000 calories a day. Aggressive deficits risk muscle loss, fatigue and rebound. The 7,700-calorie rule is a useful average, not an exact law, since metabolism adapts as you lose weight, so review your target intake and adjust as progress and appetite change over time.",
    formulaExplanation:
      "The calculation converts a weight goal into an energy goal using the constant that one kilogram of fat holds about 7,700 calories. Multiplying your target loss by 7,700 gives the total energy deficit required. Dividing by the number of days in your timeframe, weeks times seven, spreads that deficit evenly per day. Subtracting the daily deficit from your maintenance calories reveals the intake that should produce the loss at the pace you chose.",
    example: {
      inputs: { maintenanceCalories: 2500, targetWeightLossKg: 5, weeks: 10 },
      explanation: "5 kg × 7700 = 38,500 kcal over 70 days = 550 kcal/day deficit, so eat about 1,950 kcal daily.",
    },
    faqs: [
      { question: "How big a calorie deficit is safe?", answer: "Most guidelines suggest a deficit of about 500 to 1,000 calories per day, producing roughly 0.5 to 1 kilogram of loss per week. Going much lower than around 1,200 calories a day for women or 1,500 for men risks nutrient shortfalls, muscle loss and rebound eating. A moderate deficit preserves more muscle and is easier to sustain. If this calculator suggests an extreme deficit, extend your timeframe to keep the daily figure reasonable and healthy." },
      { question: "Is the 7,700 calories per kilogram rule accurate?", answer: "It is a widely used approximation, not an exact constant. A kilogram of body fat stores close to 7,700 calories, but real weight change also involves water, glycogen and lean tissue, and metabolism adapts as you lose weight, slowing the rate over time. So actual results often lag the simple prediction, especially in later weeks. Treat the number as a solid starting estimate and adjust based on your measured progress every few weeks." },
      { question: "Why has my weight loss stalled despite a deficit?", answer: "Plateaus are common because the body adapts: as you lose weight your maintenance calories fall, shrinking your effective deficit, and metabolism can down-regulate slightly. Water retention, especially with stress, poor sleep or a high-salt day, can also mask fat loss on the scale. Recalculate your maintenance at your new weight, tighten portion tracking, ensure adequate protein and be patient, since the scale often catches up after a whoosh of water loss." },
      { question: "Will a calorie deficit cost me muscle?", answer: "It can, but you can limit muscle loss substantially. Keep the deficit moderate rather than extreme, eat plenty of protein, around 1.6 to 2.2 grams per kilogram of body weight, and do regular resistance training to signal your body to preserve muscle. Losing weight too fast, neglecting protein or skipping strength work all increase the share of weight lost as muscle. A slower, protein-rich, strength-supported approach protects lean mass best." },
      { question: "Do I still need to exercise to lose weight?", answer: "You can create a deficit through diet alone, but exercise makes it easier and healthier. Activity raises the calories you burn, so you can eat a little more for the same deficit, and resistance training protects muscle while cardio benefits your heart. Exercise also improves mood, sleep and appetite regulation. For lasting results, most people find combining a modest dietary deficit with regular movement more sustainable than relying on either alone." },
    ],
    relatedCalculators: ["tdee-calculator", "bmr-calculator", "calorie-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "NIH / standard energy-balance guidance (≈7,700 kcal per kg fat)",
    sourceUrl: "https://www.niddk.nih.gov/health-information/weight-management",
    slugEs: "calculadora-de-deficit-calorico",
    titleEs: "Calculadora de Déficit Calórico",
    shortDescriptionEs: "Calcula el déficit diario necesario para alcanzar una meta de peso.",
    seoTitleEs: "Calculadora de Déficit Calórico — Déficit Diario para Perder Peso",
    metaDescriptionEs:
      "Calculadora gratuita de déficit calórico. Calcula el déficit calórico diario y la ingesta objetivo necesarios para perder una cantidad concreta de peso en un número de semanas elegido.",
    primaryKeywordEs: "calculadora de deficit calorico",
    secondaryKeywordsEs: ["calculadora de calorias para perder peso", "calculadora de deficit diario", "deficit calorico para adelgazar"],
    formulaExplanationEs:
      "El cálculo convierte una meta de peso en una meta de energía usando la constante de que un kilogramo de grasa contiene unas 7.700 calorías. Multiplicar tu pérdida objetivo por 7.700 da el déficit energético total necesario. Dividir por el número de días de tu plazo, semanas por siete, reparte ese déficit de forma uniforme por día. Restar el déficit diario de tus calorías de mantenimiento revela la ingesta que debería producir la pérdida al ritmo que elegiste.",
    explanationEs:
      "Un déficit calórico es la diferencia entre la energía que gastas y la energía que comes, y es el motor fundamental de la pérdida de peso: come menos de lo que gastas y tu cuerpo compensa la diferencia recurriendo a la grasa almacenada. Una calculadora de déficit calórico trabaja hacia atrás desde una meta, tomando el peso que quieres perder y el tiempo del que dispones, y te dice cuán grande debe ser el déficit diario y qué ingesta calórica diaria buscar. El motor se apoya en la conocida aproximación de que un kilogramo de grasa corporal almacena aproximadamente 7.700 calorías, así que perder cinco kilogramos significa crear un déficit total de unas 38.500 calorías, repartido a lo largo del plazo elegido. Dividir ese total entre el número de días da el déficit que necesitas cada día, y restarlo de tus calorías de mantenimiento, tu gasto energético total diario, da tu ingesta objetivo. Las personas confían en una calculadora de déficit calórico para hacer la pérdida de peso concreta y pausada en lugar de una intención vaga, y para comprobar si una meta es realista. Un ritmo seguro y sostenible es en general de unos 0,5 a 1 kilogramo por semana, lo que suele suponer un déficit de aproximadamente 500 a 1.000 calorías al día. Los déficits agresivos arriesgan pérdida muscular, fatiga y efecto rebote. La regla de las 7.700 calorías es un promedio útil, no una ley exacta, ya que el metabolismo se adapta a medida que pierdes peso, así que revisa tu ingesta objetivo y ajústala conforme cambien el progreso y el apetito.",
    exampleEs: {
      inputs: { maintenanceCalories: 2500, targetWeightLossKg: 5, weeks: 10 },
      explanation: "5 kg × 7700 = 38.500 kcal en 70 días = 550 kcal/día de déficit, así que come unas 1.950 kcal al día.",
    },
    faqsEs: [
      { question: "¿Qué tamaño de déficit calórico es seguro?", answer: "La mayoría de las guías sugieren un déficit de unas 500 a 1.000 calorías al día, produciendo aproximadamente de 0,5 a 1 kilogramo de pérdida por semana. Bajar mucho de alrededor de 1.200 calorías al día en mujeres o 1.500 en hombres arriesga carencias de nutrientes, pérdida muscular y comer en exceso por rebote. Un déficit moderado conserva más músculo y es más fácil de mantener. Si esta calculadora sugiere un déficit extremo, amplía tu plazo para mantener la cifra diaria razonable." },
      { question: "¿Es precisa la regla de 7.700 calorías por kilogramo?", answer: "Es una aproximación muy usada, no una constante exacta. Un kilogramo de grasa corporal almacena cerca de 7.700 calorías, pero el cambio real de peso también involucra agua, glucógeno y tejido magro, y el metabolismo se adapta a medida que pierdes peso, ralentizando el ritmo con el tiempo. Así que los resultados reales a menudo quedan por detrás de la predicción simple, sobre todo en las últimas semanas. Trata el número como un punto de partida sólido y ajústalo según tu progreso medido cada pocas semanas." },
      { question: "¿Por qué se ha estancado mi pérdida de peso pese al déficit?", answer: "Los estancamientos son comunes porque el cuerpo se adapta: al perder peso tus calorías de mantenimiento bajan, reduciendo tu déficit efectivo, y el metabolismo puede regularse ligeramente a la baja. La retención de agua, sobre todo con estrés, mal sueño o un día alto en sal, también puede enmascarar la pérdida de grasa en la báscula. Recalcula tu mantenimiento en tu nuevo peso, ajusta el control de porciones, asegura suficiente proteína y ten paciencia, ya que la báscula a menudo se pone al día tras una liberación de agua." },
      { question: "¿Un déficit calórico me costará músculo?", answer: "Puede hacerlo, pero puedes limitar mucho la pérdida muscular. Mantén el déficit moderado en lugar de extremo, come abundante proteína, en torno a 1,6 a 2,2 gramos por kilogramo de peso corporal, y realiza entrenamiento de fuerza regular para señalar a tu cuerpo que conserve músculo. Perder peso demasiado rápido, descuidar la proteína o saltarse el trabajo de fuerza aumentan la proporción de peso perdido como músculo. Un enfoque más lento, rico en proteína y apoyado en la fuerza protege mejor la masa magra." },
      { question: "¿Todavía necesito hacer ejercicio para perder peso?", answer: "Puedes crear un déficit solo con la dieta, pero el ejercicio lo hace más fácil y más saludable. La actividad aumenta las calorías que quemas, así que puedes comer un poco más para el mismo déficit, y el entrenamiento de fuerza protege el músculo mientras el cardio beneficia a tu corazón. El ejercicio también mejora el ánimo, el sueño y la regulación del apetito. Para resultados duraderos, la mayoría encuentra más sostenible combinar un déficit dietético modesto con movimiento regular que depender de uno solo." },
    ],
  },
  {
    id: "water-intake-daily",
    slug: "water-intake-daily-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Daily Water Intake Calculator",
    shortDescription: "Estimate how much water to drink each day.",
    seoTitle: "Daily Water Intake Calculator — How Much Water to Drink",
    metaDescription:
      "Free daily water intake calculator. Estimate how many litres and ounces of water you should drink each day based on your body weight and exercise.",
    primaryKeyword: "daily water intake calculator",
    secondaryKeywords: ["how much water should i drink", "water intake by weight", "hydration calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "exerciseMinutes", label: "Exercise time", type: "number", unit: "min", placeholder: "60", required: false, span: 1, min: 0, helpText: "Optional — daily minutes of exercise." },
    ],
    results: [
      { id: "litersPerDay", label: "Water per day", format: "number", decimals: 2, unit: "L", isPrimary: true },
      { id: "ouncesPerDay", label: "Water per day", format: "number", decimals: 0, unit: "oz", isPrimary: false },
    ],
    formula: "Litres = (35 × kg + (exercise min ÷ 30) × 350) ÷ 1000; ounces = litres × 33.814",
    explanation:
      "Water is essential to nearly every process in the body, from regulating temperature and cushioning joints to transporting nutrients and flushing waste, and a daily water intake calculator gives you a personalised target rather than the one-size-fits-all eight glasses rule. This tool bases your baseline on body weight, using a common guideline of about 35 millilitres of water per kilogram, then adds roughly 350 millilitres for every 30 minutes of exercise to replace what you lose through sweat and faster breathing. The result is expressed in both litres and fluid ounces so it is easy to track against a bottle or app. Individual needs vary with climate, altitude, pregnancy, illness and diet, but weight-based targeting captures the biggest driver, since a larger body simply holds and cycles more water. People use a daily water intake calculator to fight the low-grade dehydration that quietly saps concentration, energy and mood, and to build a consistent hydration habit. Remember that around a fifth of your fluid typically comes from food, especially fruits and vegetables, and that other drinks count too, so you rarely need to hit the entire figure from plain water alone. The clearest real-time gauge is your urine: pale straw colour signals good hydration, while dark yellow means drink more. Do not force excessive amounts, as overhydration is possible; instead use the calculated figure as a sensible daily aim and let thirst and urine colour fine-tune it.",
    formulaExplanation:
      "The baseline multiplies body weight by 35 millilitres per kilogram, reflecting evidence that fluid needs scale with body size because larger bodies have more cells and greater metabolic turnover. Exercise adds demand because sweat and heavier breathing shed water, so the formula adds about 350 millilitres for each half hour of activity. Dividing by 1,000 converts millilitres to litres, and multiplying litres by 33.814 gives US fluid ounces for convenience.",
    example: {
      inputs: { weightKg: 70, exerciseMinutes: 60 },
      explanation: "(35 × 70 + (60 ÷ 30) × 350) ÷ 1000 = (2450 + 700) ÷ 1000 = 3.15 L, about 107 oz.",
    },
    faqs: [
      { question: "Does all my fluid have to come from plain water?", answer: "No. Around 20 percent of your daily fluid typically comes from food, particularly water-rich fruits, vegetables and soups. Other beverages such as milk, juice, tea and even moderate coffee also contribute, despite the myth that caffeine is strongly dehydrating. Plain water is the healthiest, calorie-free choice, but you do not need to reach the whole target from water alone. Aim for the total intake across all fluids and watery foods combined." },
      { question: "How do I know if I am drinking enough?", answer: "Urine colour is the simplest real-time indicator: pale straw or light yellow suggests good hydration, while dark yellow or amber signals you need more. Frequency matters too, most people urinate every few hours. Other signs of dehydration include thirst, dry mouth, headache, fatigue and reduced concentration. Since thirst can lag behind actual need, especially in older adults, using a calculated target plus urine colour together gives a reliable picture of your hydration." },
      { question: "Can I drink too much water?", answer: "Yes, though it is uncommon. Drinking excessive amounts in a short time can dilute blood sodium, a dangerous condition called hyponatraemia that mainly affects endurance athletes who overdrink during long events. For most people the kidneys easily handle normal intake and simply excrete the excess. Spread your intake through the day rather than gulping large volumes at once, and let thirst and this calculated target guide you rather than forcing litres beyond comfort." },
      { question: "Does exercise really change how much I need?", answer: "Yes, significantly. Physical activity increases fluid loss through sweat and faster breathing, and the hotter or more intense the session, the more you lose. This calculator adds roughly 350 millilitres per 30 minutes of exercise as a general allowance, but heavy sweaters and hot-climate athletes may need more. Drink before, during and after activity, and for long or intense efforts consider replacing electrolytes too, since sweat carries sodium and other minerals alongside water." },
      { question: "Do factors like weather and pregnancy matter?", answer: "They do. Hot or humid weather, high altitude, fever, vomiting, diarrhoea, breastfeeding and pregnancy all raise fluid needs, sometimes substantially. Dry indoor heating in winter can also increase losses. This calculator gives a solid baseline from weight and exercise, but treat it as a starting point and increase intake in these situations. If you have kidney disease, heart failure or take medication affecting fluid balance, follow your doctor's specific hydration advice instead." },
    ],
    relatedCalculators: ["bmr-calculator", "tdee-calculator", "calorie-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "U.S. National Academies of Sciences (Dietary Reference Intakes for water)",
    sourceUrl: "https://www.cdc.gov/nutrition/data-statistics/plain-water-the-healthier-choice.html",
    slugEs: "calculadora-de-consumo-diario-de-agua",
    titleEs: "Calculadora de Consumo Diario de Agua",
    shortDescriptionEs: "Estima cuánta agua beber cada día.",
    seoTitleEs: "Calculadora de Consumo Diario de Agua — Cuánta Agua Beber",
    metaDescriptionEs:
      "Calculadora gratuita de consumo diario de agua. Estima cuántos litros y onzas de agua deberías beber cada día según tu peso corporal y el ejercicio.",
    primaryKeywordEs: "calculadora de consumo diario de agua",
    secondaryKeywordsEs: ["cuanta agua debo beber", "consumo de agua por peso", "calculadora de hidratacion"],
    formulaExplanationEs:
      "La base multiplica el peso corporal por 35 mililitros por kilogramo, reflejando la evidencia de que las necesidades de líquido escalan con el tamaño corporal porque los cuerpos más grandes tienen más células y mayor recambio metabólico. El ejercicio añade demanda porque el sudor y la respiración más intensa pierden agua, así que la fórmula suma unos 350 mililitros por cada media hora de actividad. Dividir por 1.000 convierte mililitros en litros, y multiplicar los litros por 33,814 da onzas líquidas estadounidenses para mayor comodidad.",
    explanationEs:
      "El agua es esencial para casi todos los procesos del cuerpo, desde regular la temperatura y amortiguar las articulaciones hasta transportar nutrientes y eliminar desechos, y una calculadora de consumo diario de agua te da un objetivo personalizado en lugar de la regla única de ocho vasos. Esta herramienta basa tu línea base en el peso corporal, usando una pauta común de unos 35 mililitros de agua por kilogramo, y luego añade aproximadamente 350 mililitros por cada 30 minutos de ejercicio para reponer lo que pierdes por el sudor y la respiración más rápida. El resultado se expresa tanto en litros como en onzas líquidas para que sea fácil de seguir con una botella o una aplicación. Las necesidades individuales varían con el clima, la altitud, el embarazo, la enfermedad y la dieta, pero la orientación por peso captura el mayor factor, ya que un cuerpo más grande simplemente contiene y recicla más agua. Las personas usan una calculadora de consumo diario de agua para combatir la deshidratación leve que en silencio mina la concentración, la energía y el ánimo, y para construir un hábito de hidratación constante. Recuerda que alrededor de una quinta parte de tu líquido suele provenir de los alimentos, especialmente frutas y verduras, y que otras bebidas también cuentan, así que rara vez necesitas alcanzar toda la cifra solo con agua. El indicador en tiempo real más claro es tu orina: un color pajizo pálido señala buena hidratación, mientras que un amarillo oscuro significa beber más. No fuerces cantidades excesivas, ya que la sobrehidratación es posible; en su lugar usa la cifra calculada como una meta diaria sensata y deja que la sed y el color de la orina la ajusten.",
    exampleEs: {
      inputs: { weightKg: 70, exerciseMinutes: 60 },
      explanation: "(35 × 70 + (60 ÷ 30) × 350) ÷ 1000 = (2450 + 700) ÷ 1000 = 3,15 L, unas 107 oz.",
    },
    faqsEs: [
      { question: "¿Todo mi líquido tiene que provenir de agua pura?", answer: "No. Alrededor del 20 por ciento de tu líquido diario suele provenir de los alimentos, en particular frutas, verduras y sopas ricas en agua. Otras bebidas como leche, zumo, té e incluso café moderado también contribuyen, pese al mito de que la cafeína deshidrata mucho. El agua pura es la opción más saludable y sin calorías, pero no necesitas alcanzar todo el objetivo solo con agua. Apunta a la ingesta total entre todos los líquidos y alimentos acuosos combinados." },
      { question: "¿Cómo sé si estoy bebiendo suficiente?", answer: "El color de la orina es el indicador en tiempo real más simple: pajizo pálido o amarillo claro sugiere buena hidratación, mientras que amarillo oscuro o ámbar señala que necesitas más. La frecuencia también importa; la mayoría orina cada pocas horas. Otras señales de deshidratación incluyen sed, boca seca, dolor de cabeza, fatiga y menor concentración. Como la sed puede ir por detrás de la necesidad real, sobre todo en adultos mayores, usar un objetivo calculado junto al color de la orina da una imagen fiable." },
      { question: "¿Puedo beber demasiada agua?", answer: "Sí, aunque es poco común. Beber cantidades excesivas en poco tiempo puede diluir el sodio en sangre, una condición peligrosa llamada hiponatremia que afecta principalmente a atletas de resistencia que beben en exceso durante eventos largos. Para la mayoría, los riñones manejan con facilidad la ingesta normal y simplemente excretan el exceso. Reparte tu ingesta a lo largo del día en lugar de tragar grandes volúmenes de golpe, y deja que la sed y este objetivo calculado te guíen en lugar de forzar litros más allá de la comodidad." },
      { question: "¿El ejercicio realmente cambia cuánto necesito?", answer: "Sí, de forma significativa. La actividad física aumenta la pérdida de líquido por el sudor y la respiración más rápida, y cuanto más caluroso o intenso el esfuerzo, más pierdes. Esta calculadora añade unos 350 mililitros por cada 30 minutos de ejercicio como margen general, pero quienes sudan mucho y los atletas de clima cálido pueden necesitar más. Bebe antes, durante y después de la actividad, y para esfuerzos largos o intensos considera reponer también electrolitos, ya que el sudor arrastra sodio y otros minerales junto al agua." },
      { question: "¿Importan factores como el clima y el embarazo?", answer: "Sí. El clima caluroso o húmedo, la altitud, la fiebre, los vómitos, la diarrea, la lactancia y el embarazo elevan las necesidades de líquido, a veces de forma sustancial. La calefacción seca de interiores en invierno también puede aumentar las pérdidas. Esta calculadora da una base sólida a partir del peso y el ejercicio, pero trátala como un punto de partida y aumenta la ingesta en estas situaciones. Si tienes enfermedad renal, insuficiencia cardíaca o tomas medicación que afecte el balance de líquidos, sigue el consejo específico de tu médico." },
    ],
  },
  {
    id: "ponderal-index",
    slug: "ponderal-index-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Ponderal Index Calculator",
    shortDescription: "Assess body leanness using weight and height cubed.",
    seoTitle: "Ponderal Index Calculator — Corpulence Index",
    metaDescription:
      "Free ponderal index calculator. Compute your ponderal index (corpulence index) from weight and height cubed for a height-adjusted measure of leanness.",
    primaryKeyword: "ponderal index calculator",
    secondaryKeywords: ["corpulence index", "ponderal index formula", "body leanness index"],
    fields: [
      { id: "weightKg", label: "Weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ponderalIndex", label: "Ponderal index", format: "number", decimals: 1, unit: "kg/m³", isPrimary: true },
    ],
    formula: "Ponderal index = weight(kg) ÷ height(m)³",
    explanation:
      "The ponderal index, also called the corpulence index, is a measure of leanness that divides body weight by height cubed rather than height squared as body mass index does. A ponderal index calculator produces this figure, which many researchers consider more reliable than BMI across the extremes of stature, because cubing height better reflects how a three-dimensional body's mass should scale with its linear size. BMI's use of height squared systematically flags very tall people as heavier and very short people as lighter than they really are relative to build; the ponderal index reduces that distortion, which is why it is often preferred in studies of unusually tall or short populations and, especially, in neonatology. In newborns the ponderal index is a standard tool for assessing whether a baby's weight is appropriate for its length, helping identify growth restriction that a length or weight alone might miss. For adults, a typical ponderal index falls in a band around the low-to-mid teens in kilograms per metre cubed, with lower values indicating a leaner or more slender frame and higher values a stockier one. A ponderal index calculator is therefore useful whenever height-scaling matters, offering a complementary view alongside BMI, waist measures and body-fat estimates. Like all single-number indices it cannot distinguish muscle from fat or reveal where weight sits, so read it as one input among several rather than a standalone verdict on health, and interpret extreme values in context with a clinician.",
    formulaExplanation:
      "The ponderal index divides weight by height raised to the third power because mass is fundamentally a three-dimensional, volumetric quantity, and volume scales with the cube of a linear dimension like height. BMI's height-squared denominator under-corrects for stature, so tall and short people are misranked; cubing height aligns the scaling more closely with true geometry. Height is converted from centimetres to metres first, then cubed, giving units of kilograms per cubic metre.",
    example: {
      inputs: { weightKg: 70, heightCm: 175 },
      explanation: "70 ÷ (1.75)³ = 70 ÷ 5.359 ≈ 13.1 kg/m³, a typical adult ponderal index.",
    },
    faqs: [
      { question: "How is the ponderal index different from BMI?", answer: "Both relate weight to height, but BMI divides weight by height squared while the ponderal index divides by height cubed. Cubing height accounts better for the fact that body mass is three-dimensional, so the ponderal index stays more consistent across very tall and very short people, whom BMI tends to misclassify. For adults of average height the two give broadly similar impressions, but the ponderal index is favoured at the extremes of stature and in newborns." },
      { question: "What is a normal ponderal index?", answer: "For adults, values roughly in the range of 11 to 15 kilograms per cubic metre are common, with lower numbers indicating a leaner, more slender build and higher numbers a heavier one. There is no universally fixed cutoff as there is for BMI categories, partly because the index is used less in routine adult practice. It is most valuable for tracking change or comparing within a group rather than against a single strict threshold." },
      { question: "Why is the ponderal index used for newborns?", answer: "In neonatology the ponderal index helps assess whether a baby's weight is proportionate to its length, which is key to spotting intrauterine growth restriction. A baby can have a normal weight but be long and thin, or short and heavy, and the index captures this shape information that weight or length alone misses. A low neonatal ponderal index suggests asymmetric growth restriction and can flag babies needing closer monitoring after birth." },
      { question: "Can the ponderal index tell me my body fat?", answer: "No. Like BMI, the ponderal index is based only on weight and height, so it cannot distinguish fat from muscle or show where weight is stored. A muscular athlete may register a high value without excess fat, and the index says nothing about visceral fat specifically. For body composition you need methods such as skinfolds, bioelectrical impedance, the tape method or a DEXA scan. Use the ponderal index as a shape indicator, not a fat gauge." },
      { question: "Should I use the ponderal index instead of BMI?", answer: "Not necessarily instead, but as a complement. BMI remains the standard because clear health-risk categories are defined for it and it is widely understood. The ponderal index is worth calculating if you are very tall or very short, since BMI can misjudge you, or if you simply want a second height-adjusted perspective. For most decisions, viewing several measures together, BMI, waist-to-height ratio, body fat and the ponderal index, gives a fuller picture than any one alone." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "ideal-weight-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Rohrer's index (corpulence index), standard anthropometry",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2930234/",
    slugEs: "calculadora-de-indice-ponderal",
    titleEs: "Calculadora de Índice Ponderal",
    shortDescriptionEs: "Evalúa la delgadez corporal con el peso y la altura al cubo.",
    seoTitleEs: "Calculadora de Índice Ponderal — Índice de Corpulencia",
    metaDescriptionEs:
      "Calculadora gratuita de índice ponderal. Calcula tu índice ponderal (índice de corpulencia) a partir del peso y la altura al cubo para una medida de delgadez ajustada por la altura.",
    primaryKeywordEs: "calculadora de indice ponderal",
    secondaryKeywordsEs: ["indice de corpulencia", "formula del indice ponderal", "indice de delgadez corporal"],
    formulaExplanationEs:
      "El índice ponderal divide el peso por la altura elevada a la tercera potencia porque la masa es fundamentalmente una cantidad tridimensional y volumétrica, y el volumen escala con el cubo de una dimensión lineal como la altura. El denominador de altura al cuadrado del IMC corrige de menos la estatura, así que las personas altas y bajas quedan mal clasificadas; elevar la altura al cubo alinea el escalado más de cerca con la geometría real. La altura se convierte primero de centímetros a metros y luego se eleva al cubo, dando unidades de kilogramos por metro cúbico.",
    explanationEs:
      "El índice ponderal, también llamado índice de corpulencia, es una medida de delgadez que divide el peso corporal por la altura al cubo en lugar de la altura al cuadrado como hace el índice de masa corporal. Una calculadora de índice ponderal produce esta cifra, que muchos investigadores consideran más fiable que el IMC en los extremos de estatura, porque elevar la altura al cubo refleja mejor cómo debería escalar la masa de un cuerpo tridimensional con su tamaño lineal. El uso del IMC de la altura al cuadrado marca sistemáticamente a las personas muy altas como más pesadas y a las muy bajas como más ligeras de lo que realmente son en relación con su complexión; el índice ponderal reduce esa distorsión, razón por la que a menudo se prefiere en estudios de poblaciones inusualmente altas o bajas y, especialmente, en neonatología. En recién nacidos el índice ponderal es una herramienta estándar para evaluar si el peso de un bebé es adecuado para su longitud, ayudando a identificar restricciones del crecimiento que la longitud o el peso por sí solos podrían pasar por alto. Para adultos, un índice ponderal típico se sitúa en una banda en torno a los valores bajos y medios de la decena en kilogramos por metro cúbico, con valores más bajos que indican una complexión más delgada y valores más altos una más robusta. Una calculadora de índice ponderal es por tanto útil siempre que importe el ajuste por altura, ofreciendo una visión complementaria junto al IMC, las medidas de cintura y las estimaciones de grasa corporal. Como todos los índices de un solo número, no puede distinguir músculo de grasa ni revelar dónde se sitúa el peso, así que léelo como una entrada más entre varias en lugar de un veredicto por sí solo, e interpreta los valores extremos en contexto con un clínico.",
    exampleEs: {
      inputs: { weightKg: 70, heightCm: 175 },
      explanation: "70 ÷ (1,75)³ = 70 ÷ 5,359 ≈ 13,1 kg/m³, un índice ponderal adulto típico.",
    },
    faqsEs: [
      { question: "¿En qué se diferencia el índice ponderal del IMC?", answer: "Ambos relacionan el peso con la altura, pero el IMC divide el peso por la altura al cuadrado mientras que el índice ponderal divide por la altura al cubo. Elevar la altura al cubo tiene mejor en cuenta que la masa corporal es tridimensional, así que el índice ponderal se mantiene más consistente en personas muy altas y muy bajas, a quienes el IMC tiende a clasificar mal. Para adultos de altura media ambos dan impresiones parecidas, pero el índice ponderal se prefiere en los extremos de estatura y en recién nacidos." },
      { question: "¿Qué es un índice ponderal normal?", answer: "Para adultos, valores aproximadamente en el rango de 11 a 15 kilogramos por metro cúbico son comunes, con números más bajos que indican una complexión más delgada y números más altos una más pesada. No hay un límite universalmente fijo como lo hay para las categorías del IMC, en parte porque el índice se usa menos en la práctica adulta rutinaria. Es más valioso para seguir el cambio o comparar dentro de un grupo que frente a un único umbral estricto." },
      { question: "¿Por qué se usa el índice ponderal en recién nacidos?", answer: "En neonatología el índice ponderal ayuda a evaluar si el peso de un bebé es proporcionado a su longitud, lo cual es clave para detectar la restricción del crecimiento intrauterino. Un bebé puede tener un peso normal pero ser largo y delgado, o corto y pesado, y el índice captura esa información de forma que el peso o la longitud por sí solos pasan por alto. Un índice ponderal neonatal bajo sugiere una restricción del crecimiento asimétrica y puede señalar bebés que necesitan un seguimiento más estrecho tras el nacimiento." },
      { question: "¿Puede el índice ponderal decirme mi grasa corporal?", answer: "No. Como el IMC, el índice ponderal se basa solo en el peso y la altura, así que no puede distinguir grasa de músculo ni mostrar dónde se almacena el peso. Un atleta musculoso puede registrar un valor alto sin exceso de grasa, y el índice no dice nada sobre la grasa visceral en concreto. Para la composición corporal necesitas métodos como pliegues cutáneos, impedancia bioeléctrica, el método de la cinta o una exploración DEXA. Usa el índice ponderal como un indicador de complexión, no como un medidor de grasa." },
      { question: "¿Debo usar el índice ponderal en lugar del IMC?", answer: "No necesariamente en su lugar, sino como complemento. El IMC sigue siendo el estándar porque tiene definidas categorías claras de riesgo para la salud y es ampliamente comprendido. El índice ponderal vale la pena calcularlo si eres muy alto o muy bajo, ya que el IMC puede juzgarte mal, o si simplemente quieres una segunda perspectiva ajustada por altura. Para la mayoría de las decisiones, ver varias medidas juntas, IMC, relación cintura-altura, grasa corporal e índice ponderal, da una imagen más completa que cualquiera por sí sola." },
    ],
  },
  {
    id: "alcohol-units",
    slug: "alcohol-units-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Alcohol Units Calculator",
    shortDescription: "Count units and grams of alcohol in a drink.",
    seoTitle: "Alcohol Units Calculator — UK Units & Grams",
    metaDescription:
      "Free alcohol units calculator. Work out the number of UK alcohol units and grams of pure alcohol in any drink from its volume and ABV percentage.",
    primaryKeyword: "alcohol units calculator",
    secondaryKeywords: ["uk units of alcohol", "grams of alcohol calculator", "how many units in a drink"],
    fields: [
      { id: "volumeMl", label: "Drink volume", type: "number", unit: "ml", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "abvPercent", label: "ABV", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.1, helpText: "Alcohol by volume, shown on the label." },
    ],
    results: [
      { id: "units", label: "Alcohol units", format: "number", decimals: 1, isPrimary: true },
      { id: "gramsAlcohol", label: "Pure alcohol", format: "number", decimals: 1, unit: "g", isPrimary: false },
    ],
    formula: "UK units = volume(ml) × ABV(%) ÷ 1000; grams = volume × (ABV ÷ 100) × 0.789",
    explanation:
      "An alcohol units calculator translates any drink into a standard measure of how much pure alcohol it actually contains, cutting through the confusion of different glass sizes and strengths. In the UK, one unit is defined as 10 millilitres, or about 8 grams, of pure alcohol, the amount an average adult can process in roughly an hour. This tool computes units directly from a drink's volume and its alcohol by volume percentage, the ABV printed on every label, and also reports the grams of pure alcohol for those who prefer that measure or follow guidance from other countries. Understanding units matters because health guidance is written in them: the UK Chief Medical Officers advise drinking no more than 14 units per week for both men and women, spread across three or more days, with several alcohol-free days. It is remarkably easy to underestimate intake, since a large glass of strong wine or a craft beer in a big measure can contain three or more units on its own. An alcohol units calculator helps you keep an honest running tally, compare drinks fairly and stay within lower-risk limits. Regularly exceeding those limits raises the risk of liver disease, several cancers, high blood pressure and dependence. Use this tool to plan a night out, track a week's consumption, or simply understand a drink you are unfamiliar with, and remember that no level of drinking is completely risk-free.",
    formulaExplanation:
      "The UK unit formula multiplies the drink's volume in millilitres by its ABV percentage and divides by 1,000, which follows directly from the definition that one unit is 10 millilitres of pure alcohol. To find the mass of alcohol, the volume of pure alcohol, volume times ABV over 100, is multiplied by 0.789, the density of ethanol in grams per millilitre, converting that liquid volume into grams for nutrition-style labelling and international comparisons.",
    example: {
      inputs: { volumeMl: 500, abvPercent: 5 },
      explanation: "A 500 ml beer at 5% ABV = 500 × 5 ÷ 1000 = 2.5 units, containing about 19.7 g of pure alcohol.",
    },
    faqs: [
      { question: "What exactly is one unit of alcohol?", answer: "In the UK, one unit equals 10 millilitres or roughly 8 grams of pure alcohol, chosen because it is about the amount an average adult body clears in an hour. That translates to a single 25 ml measure of spirits at 40 percent, while a pint of strong beer or a large glass of wine can be three units or more. Units let you compare very different drinks on a common scale of actual alcohol content." },
      { question: "How many units are safe to drink?", answer: "UK Chief Medical Officers advise keeping to no more than 14 units per week for both men and women, spread evenly over three or more days rather than saved up, with some drink-free days. This level keeps health risks low but not zero. Regularly drinking above 14 units raises the risk of liver disease, several cancers and high blood pressure. Other countries set different limits, so check the guidance that applies to you." },
      { question: "Why does drink strength vary so much?", answer: "ABV, alcohol by volume, ranges widely: light beers sit near 3.5 percent, standard lagers around 5, strong craft beers 7 to 9, wines 11 to 14, fortified wines around 20, and spirits typically 40 percent. Because units depend on both volume and ABV, a small glass of a strong drink can carry more alcohol than a large glass of a weak one. Always check the label's ABV, as a stronger drink means more units in the same measure." },
      { question: "How long does it take to process the alcohol?", answer: "The body clears roughly one unit per hour on average, though this varies with sex, weight, food, liver health and genetics. So a drink containing three units takes about three hours to leave your system, and nothing reliably speeds this up, not coffee, water or a cold shower. This is why alcohol can linger the morning after heavy drinking, potentially leaving you over a driving limit long after your last drink." },
      { question: "Are grams or units the better measure?", answer: "They measure the same thing in different scales. The UK and Ireland use units, where one unit is 8 grams of alcohol, while many other countries and scientific studies use grams directly, and some define a standard drink as 10 or 14 grams. This calculator shows both so you can follow whichever guidance applies to you. Grams are more precise and internationally comparable; units are the everyday shorthand in British health advice." },
    ],
    relatedCalculators: ["bmi-calculator", "bmr-calculator", "calorie-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "UK NHS / Chief Medical Officers' alcohol unit guidance",
    sourceUrl: "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
    slugEs: "calculadora-de-unidades-de-alcohol",
    titleEs: "Calculadora de Unidades de Alcohol",
    shortDescriptionEs: "Cuenta las unidades y los gramos de alcohol en una bebida.",
    seoTitleEs: "Calculadora de Unidades de Alcohol — Unidades y Gramos",
    metaDescriptionEs:
      "Calculadora gratuita de unidades de alcohol. Calcula el número de unidades de alcohol y los gramos de alcohol puro en cualquier bebida a partir de su volumen y su porcentaje de ABV.",
    primaryKeywordEs: "calculadora de unidades de alcohol",
    secondaryKeywordsEs: ["unidades de alcohol", "calculadora de gramos de alcohol", "cuantas unidades tiene una bebida"],
    formulaExplanationEs:
      "La fórmula de unidades del Reino Unido multiplica el volumen de la bebida en mililitros por su porcentaje de ABV y divide por 1.000, lo que se deriva directamente de la definición de que una unidad son 10 mililitros de alcohol puro. Para hallar la masa de alcohol, el volumen de alcohol puro, volumen por ABV entre 100, se multiplica por 0,789, la densidad del etanol en gramos por mililitro, convirtiendo ese volumen líquido en gramos para el etiquetado tipo nutricional y las comparaciones internacionales.",
    explanationEs:
      "Una calculadora de unidades de alcohol traduce cualquier bebida a una medida estándar de cuánto alcohol puro contiene en realidad, aclarando la confusión de los distintos tamaños de vaso y graduaciones. En el Reino Unido, una unidad se define como 10 mililitros, o unos 8 gramos, de alcohol puro, la cantidad que un adulto medio puede procesar en aproximadamente una hora. Esta herramienta calcula las unidades directamente a partir del volumen de una bebida y su porcentaje de alcohol por volumen, el ABV impreso en cada etiqueta, y también informa de los gramos de alcohol puro para quienes prefieren esa medida o siguen las pautas de otros países. Entender las unidades importa porque las guías de salud están escritas en ellas: los Directores Médicos del Reino Unido aconsejan no beber más de 14 unidades por semana tanto para hombres como para mujeres, repartidas en tres o más días, con varios días sin alcohol. Es muy fácil subestimar la ingesta, ya que una copa grande de vino fuerte o una cerveza artesanal en una medida grande pueden contener tres o más unidades por sí solas. Una calculadora de unidades de alcohol te ayuda a llevar un recuento honesto, comparar bebidas de forma justa y mantenerte dentro de los límites de menor riesgo. Superar de forma habitual esos límites aumenta el riesgo de enfermedad hepática, varios tipos de cáncer, presión arterial alta y dependencia. Usa esta herramienta para planificar una salida, seguir el consumo de una semana o simplemente entender una bebida que no conoces, y recuerda que ningún nivel de consumo está completamente libre de riesgo.",
    exampleEs: {
      inputs: { volumeMl: 500, abvPercent: 5 },
      explanation: "Una cerveza de 500 ml al 5% de ABV = 500 × 5 ÷ 1000 = 2,5 unidades, con unos 19,7 g de alcohol puro.",
    },
    faqsEs: [
      { question: "¿Qué es exactamente una unidad de alcohol?", answer: "En el Reino Unido, una unidad equivale a 10 mililitros o aproximadamente 8 gramos de alcohol puro, elegida porque es más o menos la cantidad que el cuerpo de un adulto medio elimina en una hora. Eso equivale a una sola medida de 25 ml de licor al 40 por ciento, mientras que una pinta de cerveza fuerte o una copa grande de vino pueden ser tres unidades o más. Las unidades permiten comparar bebidas muy distintas en una escala común de contenido real de alcohol." },
      { question: "¿Cuántas unidades es seguro beber?", answer: "Los Directores Médicos del Reino Unido aconsejan no superar las 14 unidades por semana tanto para hombres como para mujeres, repartidas de forma uniforme en tres o más días en lugar de acumuladas, con algunos días sin alcohol. Este nivel mantiene los riesgos para la salud bajos pero no nulos. Beber habitualmente por encima de 14 unidades aumenta el riesgo de enfermedad hepática, varios tipos de cáncer y presión arterial alta. Otros países fijan límites distintos, así que consulta la guía que se aplique a ti." },
      { question: "¿Por qué varía tanto la graduación de las bebidas?", answer: "El ABV, alcohol por volumen, varía ampliamente: las cervezas ligeras rondan el 3,5 por ciento, las lagers estándar en torno al 5, las cervezas artesanales fuertes del 7 al 9, los vinos del 11 al 14, los vinos fortificados alrededor del 20 y los licores normalmente el 40 por ciento. Como las unidades dependen tanto del volumen como del ABV, una copa pequeña de una bebida fuerte puede llevar más alcohol que una copa grande de una débil. Comprueba siempre el ABV de la etiqueta, ya que una bebida más fuerte significa más unidades en la misma medida." },
      { question: "¿Cuánto tarda en procesarse el alcohol?", answer: "El cuerpo elimina aproximadamente una unidad por hora de media, aunque esto varía con el sexo, el peso, la comida, la salud hepática y la genética. Así que una bebida que contiene tres unidades tarda unas tres horas en salir de tu sistema, y nada lo acelera de forma fiable, ni el café, ni el agua, ni una ducha fría. Por eso el alcohol puede persistir a la mañana siguiente tras beber en exceso, dejándote potencialmente por encima de un límite de conducción mucho después de tu última copa." },
      { question: "¿Son mejores los gramos o las unidades?", answer: "Miden lo mismo en escalas distintas. El Reino Unido e Irlanda usan unidades, donde una unidad son 8 gramos de alcohol, mientras que muchos otros países y estudios científicos usan gramos directamente, y algunos definen una bebida estándar como 10 o 14 gramos. Esta calculadora muestra ambos para que sigas la guía que se aplique a ti. Los gramos son más precisos y comparables internacionalmente; las unidades son la abreviatura cotidiana en el consejo de salud británico." },
    ],
  },
  {
    id: "sleep-cycle",
    slug: "sleep-cycle-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Sleep Cycle Calculator",
    shortDescription: "Find the best bedtime to wake between sleep cycles.",
    seoTitle: "Sleep Cycle Calculator — Best Bedtime by Wake Time",
    metaDescription:
      "Free sleep cycle calculator. Enter your wake-up time to find the best bedtimes that let you wake at the end of a 90-minute sleep cycle feeling refreshed.",
    primaryKeyword: "sleep cycle calculator",
    secondaryKeywords: ["bedtime calculator", "sleep calculator", "when should i go to bed"],
    fields: [
      { id: "wakeHour", label: "Wake-up hour", type: "number", unit: "0-23", placeholder: "7", required: true, span: 1, min: 0, max: 23, helpText: "24-hour clock, e.g. 7 for 7am." },
      { id: "wakeMinute", label: "Wake-up minute", type: "number", unit: "0-59", placeholder: "0", required: true, span: 1, min: 0, max: 59 },
    ],
    results: [
      { id: "bedtime6cycles", label: "Bedtime for 6 cycles (9h)", format: "text", isPrimary: true },
      { id: "bedtime5cycles", label: "Bedtime for 5 cycles (7.5h)", format: "text", isPrimary: false },
      { id: "bedtime4cycles", label: "Bedtime for 4 cycles (6h)", format: "text", isPrimary: false },
    ],
    formula: "Bedtime = wake time − (cycles × 90 min + 15 min to fall asleep), wrapped over 24 hours",
    explanation:
      "Sleep is not one uniform state but a repeating journey through light sleep, deep sleep and REM, and each full loop of these stages lasts roughly 90 minutes. A sleep cycle calculator uses that rhythm to suggest bedtimes that let you wake at the end of a cycle rather than in the middle of deep sleep, when grogginess, known as sleep inertia, is worst. You enter the time you need to get up, and the tool counts back in 90-minute blocks, adding a typical 15 minutes to fall asleep, to reveal the ideal moments to turn off the light. Waking naturally between cycles, in lighter sleep, tends to leave you feeling clearer and more refreshed than an alarm that jolts you out of deep slumber, even if the total sleep is similar. Most adults do best with five to six cycles a night, about seven and a half to nine hours, so the calculator highlights those options along with a shorter four-cycle fallback for tight nights. A sleep cycle calculator is handy for planning an early start, recovering a consistent schedule, or simply understanding why some mornings feel harder than others. Bear in mind that 90 minutes is an average; real cycles vary from person to person and even across the night, and the time to fall asleep differs too. Treat the suggested bedtimes as smart targets, keep a regular schedule, and let how you feel on waking fine-tune which option suits you best.",
    formulaExplanation:
      "The calculator counts backward from your wake time in blocks of 90 minutes, the average length of one full sleep cycle through light, deep and REM stages, and adds a fixed 15 minutes to account for the time most people take to drift off. Subtracting the total from the wake time gives each candidate bedtime, and the result is wrapped around a 24-hour clock so bedtimes falling on the previous evening display correctly in hours and minutes.",
    example: {
      inputs: { wakeHour: 7, wakeMinute: 0 },
      explanation: "To wake at 07:00, six cycles plus 15 minutes means a bedtime of 21:45; five cycles means 23:15.",
    },
    faqs: [
      { question: "How long is one sleep cycle really?", answer: "On average a full cycle through light sleep, deep sleep and REM lasts about 90 minutes, which is why this calculator uses that figure. In reality cycles range from roughly 70 to 120 minutes and change across the night, with deep sleep dominating early cycles and REM lengthening toward morning. Because 90 minutes is an average, the suggested bedtimes are close approximations rather than exact, so use how refreshed you feel on waking to fine-tune them." },
      { question: "Why do I feel groggy even after enough sleep?", answer: "That heavy, foggy feeling is sleep inertia, and it happens when an alarm wakes you out of deep, slow-wave sleep rather than from a lighter stage. Timing your wake-up near the end of a cycle, in lighter sleep, reduces it, which is the whole idea behind this calculator. Inconsistent bedtimes, alcohol, sleep disorders and simply not getting enough total sleep also worsen morning grogginess, so total sleep and regularity matter alongside cycle timing." },
      { question: "Is it better to sleep more cycles or a full night?", answer: "Total sleep still matters most; cycle timing is a refinement, not a replacement for adequate sleep. Most adults need seven to nine hours, roughly five to six cycles. If forced to choose, do not sacrifice a whole cycle just to hit a round number, because chronic short sleep harms health more than occasional mistimed waking. Aim first for enough sleep, then use cycle timing to pick which bedtime within that healthy range feels best." },
      { question: "Does the 15 minutes to fall asleep apply to me?", answer: "It is an average; healthy sleep onset typically takes 10 to 20 minutes. If you routinely drop off faster or slower, mentally adjust the suggested bedtimes accordingly. Falling asleep in under five minutes can actually signal significant sleep deprivation, while regularly taking longer than 30 minutes may point to insomnia or too much stimulation before bed. Consistent difficulty falling asleep is worth discussing with a healthcare professional rather than simply shifting bedtime." },
      { question: "How can I improve my sleep quality overall?", answer: "Keep a consistent sleep and wake schedule, even at weekends, to stabilise your body clock. Make the bedroom dark, quiet and cool, avoid screens, caffeine and heavy meals in the hours before bed, and get daylight exposure in the morning. Regular exercise helps, though not too close to bedtime. A wind-down routine signals your body to prepare for sleep. These habits improve both how quickly you fall asleep and how restorative each cycle is." },
    ],
    relatedCalculators: ["bmr-calculator", "tdee-calculator", "calorie-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Sleep Foundation (sleep cycle architecture, ~90 minutes)",
    sourceUrl: "https://www.sleepfoundation.org/stages-of-sleep",
    slugEs: "calculadora-de-ciclos-de-sueno",
    titleEs: "Calculadora de Ciclos de Sueño",
    shortDescriptionEs: "Encuentra la mejor hora de acostarte para despertar entre ciclos de sueño.",
    seoTitleEs: "Calculadora de Ciclos de Sueño — Mejor Hora de Acostarse",
    metaDescriptionEs:
      "Calculadora gratuita de ciclos de sueño. Introduce tu hora de despertar para encontrar las mejores horas de acostarte que te permitan despertar al final de un ciclo de sueño de 90 minutos sintiéndote descansado.",
    primaryKeywordEs: "calculadora de ciclos de sueno",
    secondaryKeywordsEs: ["calculadora de hora de acostarse", "calculadora de sueno", "a que hora debo acostarme"],
    formulaExplanationEs:
      "La calculadora cuenta hacia atrás desde tu hora de despertar en bloques de 90 minutos, la duración media de un ciclo de sueño completo a través de las fases de sueño ligero, profundo y REM, y añade 15 minutos fijos para tener en cuenta el tiempo que la mayoría tarda en dormirse. Restar el total de la hora de despertar da cada hora de acostarse candidata, y el resultado se ajusta a un reloj de 24 horas para que las horas que caen en la tarde anterior se muestren correctamente en horas y minutos.",
    explanationEs:
      "El sueño no es un estado uniforme sino un viaje repetido a través del sueño ligero, el sueño profundo y el REM, y cada vuelta completa de estas fases dura aproximadamente 90 minutos. Una calculadora de ciclos de sueño usa ese ritmo para sugerir horas de acostarse que te permitan despertar al final de un ciclo en lugar de en mitad del sueño profundo, cuando el aturdimiento, conocido como inercia del sueño, es peor. Introduces la hora a la que necesitas levantarte, y la herramienta cuenta hacia atrás en bloques de 90 minutos, añadiendo unos 15 minutos típicos para dormirte, y revela los momentos ideales para apagar la luz. Despertar de forma natural entre ciclos, en un sueño más ligero, suele dejarte sintiéndote más lúcido y descansado que una alarma que te saca del sueño profundo, incluso si el sueño total es similar. La mayoría de los adultos rinden mejor con cinco a seis ciclos por noche, unas siete horas y media a nueve horas, así que la calculadora resalta esas opciones junto con una alternativa más corta de cuatro ciclos para las noches ajustadas. Una calculadora de ciclos de sueño es útil para planificar un madrugón, recuperar un horario consistente o simplemente entender por qué algunas mañanas se sienten más difíciles que otras. Ten en cuenta que 90 minutos es un promedio; los ciclos reales varían de una persona a otra e incluso a lo largo de la noche, y el tiempo para dormirse también difiere. Trata las horas de acostarse sugeridas como metas inteligentes, mantén un horario regular y deja que cómo te sientas al despertar afine qué opción te conviene más.",
    exampleEs: {
      inputs: { wakeHour: 7, wakeMinute: 0 },
      explanation: "Para despertar a las 07:00, seis ciclos más 15 minutos suponen una hora de acostarse de las 21:45; cinco ciclos suponen las 23:15.",
    },
    faqsEs: [
      { question: "¿Cuánto dura realmente un ciclo de sueño?", answer: "De media, un ciclo completo a través del sueño ligero, profundo y REM dura unos 90 minutos, razón por la que esta calculadora usa esa cifra. En realidad los ciclos van de unos 70 a 120 minutos y cambian a lo largo de la noche, con el sueño profundo dominando los primeros ciclos y el REM alargándose hacia la mañana. Como 90 minutos es un promedio, las horas de acostarse sugeridas son aproximaciones cercanas más que exactas, así que usa cuán descansado te sientes al despertar para afinarlas." },
      { question: "¿Por qué me siento aturdido incluso tras dormir suficiente?", answer: "Esa sensación pesada y nebulosa es la inercia del sueño, y ocurre cuando una alarma te despierta del sueño profundo de ondas lentas en lugar de una fase más ligera. Cronometrar tu despertar cerca del final de un ciclo, en sueño más ligero, la reduce, que es toda la idea detrás de esta calculadora. Las horas de acostarse inconsistentes, el alcohol, los trastornos del sueño y simplemente no dormir lo suficiente también empeoran el aturdimiento matutino, así que el sueño total y la regularidad importan junto al momento del ciclo." },
      { question: "¿Es mejor dormir más ciclos o una noche completa?", answer: "El sueño total sigue importando más; el momento del ciclo es un refinamiento, no un sustituto de dormir lo suficiente. La mayoría de los adultos necesitan de siete a nueve horas, unos cinco a seis ciclos. Si te ves obligado a elegir, no sacrifiques un ciclo entero solo por alcanzar un número redondo, porque el sueño corto crónico daña la salud más que un despertar mal cronometrado ocasional. Apunta primero a dormir suficiente, luego usa el momento del ciclo para elegir qué hora de acostarse dentro de ese rango saludable te sienta mejor." },
      { question: "¿Se me aplican los 15 minutos para dormirme?", answer: "Es un promedio; el inicio del sueño saludable suele tardar de 10 a 20 minutos. Si habitualmente te duermes más rápido o más lento, ajusta mentalmente las horas de acostarse sugeridas. Dormirte en menos de cinco minutos puede indicar en realidad una privación de sueño significativa, mientras que tardar con regularidad más de 30 minutos puede apuntar a insomnio o demasiada estimulación antes de acostarte. La dificultad constante para dormirte vale la pena comentarla con un profesional de la salud en lugar de simplemente cambiar la hora de acostarse." },
      { question: "¿Cómo puedo mejorar la calidad de mi sueño en general?", answer: "Mantén un horario constante de sueño y despertar, incluso los fines de semana, para estabilizar tu reloj biológico. Haz que el dormitorio sea oscuro, silencioso y fresco, evita las pantallas, la cafeína y las comidas pesadas en las horas previas a acostarte, y recibe luz natural por la mañana. El ejercicio regular ayuda, aunque no demasiado cerca de la hora de acostarse. Una rutina de relajación le indica a tu cuerpo que se prepare para dormir. Estos hábitos mejoran tanto lo rápido que te duermes como lo reparador de cada ciclo." },
    ],
  },
  {
    id: "macros-by-goal",
    slug: "macros-by-goal-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Macros by Goal Calculator",
    shortDescription: "Split a calorie target into protein, carbs and fat.",
    seoTitle: "Macros by Goal Calculator — Protein, Carbs & Fat Split",
    metaDescription:
      "Free macros by goal calculator. Split any daily calorie target into grams of protein, carbs and fat for balanced, low-carb or high-protein goals.",
    primaryKeyword: "macros by goal calculator",
    secondaryKeywords: ["macro split calculator", "protein carb fat calculator", "macronutrient ratio calculator"],
    fields: [
      { id: "calories", label: "Daily calorie target", type: "number", unit: "kcal", placeholder: "2000", required: true, span: 1, min: 0 },
      {
        id: "goal", label: "Goal", type: "select", required: true, span: 1, defaultValue: "balanced",
        options: [
          { value: "balanced", label: "Balanced (30/40/30)" },
          { value: "lowcarb", label: "Low carb (40/20/40)" },
          { value: "highprotein", label: "High protein (40/35/25)" },
        ],
      },
    ],
    results: [
      { id: "proteinGrams", label: "Protein", format: "number", decimals: 0, unit: "g", isPrimary: true },
      { id: "carbsGrams", label: "Carbohydrates", format: "number", decimals: 0, unit: "g", isPrimary: false },
      { id: "fatGrams", label: "Fat", format: "number", decimals: 0, unit: "g", isPrimary: false },
    ],
    formula: "Grams = calories × ratio ÷ energy per gram (protein & carbs 4 kcal/g, fat 9 kcal/g)",
    explanation:
      "Once you know how many calories to eat each day, the next question is how to divide them between protein, carbohydrate and fat, the three macronutrients that supply energy. A macros by goal calculator answers that by splitting your chosen calorie target into grams of each macro according to a ratio suited to your objective. This tool offers three common templates: a balanced 30/40/30 split that works well for general health and maintenance, a low-carb 40/20/40 split favoured for fat loss and appetite control, and a high-protein 40/35/25 split geared toward building or preserving muscle. Because protein and carbohydrate each provide about 4 calories per gram while fat provides about 9, the calculator converts each macro's slice of your calories into grams you can actually track. Getting your macros right, not just your total calories, influences body composition, satiety, energy levels and training performance. Adequate protein preserves muscle during a calorie deficit and keeps you full; carbohydrates fuel intense exercise and brain function; and fats support hormones and the absorption of fat-soluble vitamins. A macros by goal calculator turns an abstract ratio into a concrete daily plan of grams, which is far easier to hit using a food-tracking app or nutrition labels. Ratios are starting points, not rigid rules, so adjust based on how you feel, perform and progress. Whatever the split, prioritising whole, minimally processed foods and enough protein tends to matter more than chasing perfect percentages.",
    formulaExplanation:
      "Each goal assigns a percentage of total calories to protein, carbohydrate and fat. The calculator multiplies your calorie target by each percentage to find the calories for that macro, then divides by the macro's energy density to convert to grams. Protein and carbohydrate yield about 4 calories per gram, so their calories are divided by 4, while fat yields about 9 calories per gram and is divided by 9, giving the grams to eat daily.",
    example: {
      inputs: { calories: 2000, goal: "balanced" },
      explanation: "At 2000 kcal balanced: protein 600 kcal ÷ 4 = 150 g, carbs 800 ÷ 4 = 200 g, fat 600 ÷ 9 ≈ 67 g.",
    },
    faqs: [
      { question: "Which macro split should I choose?", answer: "It depends on your goal and preferences. A balanced 30/40/30 split suits general health and is easy to sustain. Low carb, around 40/20/40, can help with fat loss and blood-sugar control and suits people who feel better on fewer carbs. High protein, roughly 40/35/25, favours muscle building and preservation, especially during a deficit or heavy training. There is no single best ratio, so pick the one matching your objective and adjust based on results and how you feel." },
      { question: "How much protein do I really need?", answer: "General health needs are around 0.8 grams per kilogram of body weight, but active people and those losing weight benefit from much more, commonly 1.6 to 2.2 grams per kilogram, to build or preserve muscle and stay full. The high-protein and low-carb templates here push protein higher for that reason. If a percentage-based split gives you far less protein than these body-weight targets, lean toward the higher-protein option or raise protein directly." },
      { question: "Why does fat have 9 calories per gram?", answer: "Fat is the most energy-dense macronutrient because of its chemical structure: its long chains of carbon and hydrogen store more energy per gram than the partially oxygenated structures of carbohydrate and protein, which each provide about 4 calories per gram. This is why small amounts of fat add up quickly in calorie terms, and why the calculator divides fat calories by 9 rather than 4 when converting to grams. Alcohol, for reference, sits between them at about 7." },
      { question: "Do macros matter more than total calories?", answer: "For weight change, total calories are the primary driver, but macros strongly affect the quality of that change and how you feel. The same calories with adequate protein preserve more muscle and control hunger better than a low-protein diet. Carb and fat balance influences energy, training and satiety. So think of it as a hierarchy: set calories first for weight direction, then tune macros, especially protein, for body composition, performance and adherence." },
      { question: "Should the grams be exact every day?", answer: "No, precision to the gram is unnecessary and unrealistic. Aim to land within roughly five to ten grams of your protein target and in the general vicinity for carbs and fat, averaged across the week rather than obsessing over a single day. Consistency and hitting protein reliably matter far more than perfection. Use these figures as flexible daily targets, and let real-world results over several weeks guide any adjustments to the ratio or totals." },
    ],
    relatedCalculators: ["macro-calculator", "protein-calculator", "tdee-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "USDA / Institute of Medicine Acceptable Macronutrient Distribution Ranges",
    sourceUrl: "https://www.nal.usda.gov/human-nutrition-and-food-safety/dietary-guidance",
    slugEs: "calculadora-de-macros-por-objetivo",
    titleEs: "Calculadora de Macros por Objetivo",
    shortDescriptionEs: "Divide un objetivo calórico en proteína, carbohidratos y grasa.",
    seoTitleEs: "Calculadora de Macros por Objetivo — Reparto de Proteína, Carbohidratos y Grasa",
    metaDescriptionEs:
      "Calculadora gratuita de macros por objetivo. Divide cualquier objetivo calórico diario en gramos de proteína, carbohidratos y grasa para metas equilibradas, bajas en carbohidratos o altas en proteína.",
    primaryKeywordEs: "calculadora de macros por objetivo",
    secondaryKeywordsEs: ["calculadora de reparto de macros", "calculadora de proteina carbohidratos y grasa", "calculadora de ratio de macronutrientes"],
    formulaExplanationEs:
      "Cada objetivo asigna un porcentaje de las calorías totales a la proteína, los carbohidratos y la grasa. La calculadora multiplica tu objetivo calórico por cada porcentaje para hallar las calorías de ese macronutriente, luego divide por la densidad energética del macronutriente para convertirlo en gramos. La proteína y los carbohidratos aportan unas 4 calorías por gramo, así que sus calorías se dividen entre 4, mientras que la grasa aporta unas 9 calorías por gramo y se divide entre 9, dando los gramos a comer al día.",
    explanationEs:
      "Una vez que sabes cuántas calorías comer cada día, la siguiente pregunta es cómo dividirlas entre proteína, carbohidrato y grasa, los tres macronutrientes que aportan energía. Una calculadora de macros por objetivo responde a eso dividiendo tu objetivo calórico elegido en gramos de cada macronutriente según una proporción adecuada a tu meta. Esta herramienta ofrece tres plantillas comunes: un reparto equilibrado 30/40/30 que funciona bien para la salud general y el mantenimiento, un reparto bajo en carbohidratos 40/20/40 preferido para la pérdida de grasa y el control del apetito, y un reparto alto en proteína 40/35/25 orientado a construir o conservar músculo. Como la proteína y el carbohidrato aportan cada uno unas 4 calorías por gramo mientras que la grasa aporta unas 9, la calculadora convierte la porción de calorías de cada macronutriente en gramos que realmente puedes seguir. Acertar con tus macros, no solo con tu total calórico, influye en la composición corporal, la saciedad, los niveles de energía y el rendimiento del entrenamiento. Una proteína adecuada conserva el músculo durante un déficit calórico y te mantiene saciado; los carbohidratos alimentan el ejercicio intenso y la función cerebral; y las grasas apoyan las hormonas y la absorción de vitaminas liposolubles. Una calculadora de macros por objetivo convierte una proporción abstracta en un plan diario concreto de gramos, mucho más fácil de cumplir usando una aplicación de seguimiento de alimentos o las etiquetas nutricionales. Las proporciones son puntos de partida, no reglas rígidas, así que ajústalas según cómo te sientas, rindas y progreses. Sea cual sea el reparto, priorizar alimentos integrales y mínimamente procesados y suficiente proteína suele importar más que perseguir porcentajes perfectos.",
    exampleEs: {
      inputs: { calories: 2000, goal: "balanced" },
      explanation: "A 2000 kcal equilibrado: proteína 600 kcal ÷ 4 = 150 g, carbohidratos 800 ÷ 4 = 200 g, grasa 600 ÷ 9 ≈ 67 g.",
    },
    faqsEs: [
      { question: "¿Qué reparto de macros debo elegir?", answer: "Depende de tu meta y tus preferencias. Un reparto equilibrado 30/40/30 sirve para la salud general y es fácil de mantener. Bajo en carbohidratos, en torno a 40/20/40, puede ayudar con la pérdida de grasa y el control del azúcar en sangre y conviene a quienes se sienten mejor con menos carbohidratos. Alto en proteína, alrededor de 40/35/25, favorece construir y conservar músculo, sobre todo durante un déficit o un entrenamiento intenso. No hay una única mejor proporción, así que elige la que coincida con tu objetivo y ajústala según los resultados." },
      { question: "¿Cuánta proteína necesito realmente?", answer: "Las necesidades de salud general rondan los 0,8 gramos por kilogramo de peso corporal, pero las personas activas y quienes pierden peso se benefician de mucho más, comúnmente de 1,6 a 2,2 gramos por kilogramo, para construir o conservar músculo y mantenerse saciados. Las plantillas alta en proteína y baja en carbohidratos aquí elevan la proteína por esa razón. Si un reparto basado en porcentajes te da mucha menos proteína que estos objetivos por peso corporal, inclínate hacia la opción más alta en proteína o súbela directamente." },
      { question: "¿Por qué la grasa tiene 9 calorías por gramo?", answer: "La grasa es el macronutriente más denso en energía por su estructura química: sus largas cadenas de carbono e hidrógeno almacenan más energía por gramo que las estructuras parcialmente oxigenadas del carbohidrato y la proteína, que aportan cada una unas 4 calorías por gramo. Por eso pequeñas cantidades de grasa suman rápido en términos calóricos, y por eso la calculadora divide las calorías de la grasa entre 9 en lugar de 4 al convertirlas en gramos. El alcohol, como referencia, se sitúa entre ellos, en unas 7." },
      { question: "¿Importan más los macros que el total de calorías?", answer: "Para el cambio de peso, las calorías totales son el principal motor, pero los macros afectan mucho a la calidad de ese cambio y a cómo te sientes. Las mismas calorías con proteína adecuada conservan más músculo y controlan mejor el hambre que una dieta baja en proteína. El equilibrio de carbohidratos y grasa influye en la energía, el entrenamiento y la saciedad. Así que piénsalo como una jerarquía: fija primero las calorías para la dirección del peso, luego ajusta los macros, sobre todo la proteína, para la composición corporal, el rendimiento y la adherencia." },
      { question: "¿Los gramos deben ser exactos cada día?", answer: "No, la precisión al gramo es innecesaria y poco realista. Apunta a situarte dentro de unos cinco a diez gramos de tu objetivo de proteína y en el rango general para carbohidratos y grasa, promediado a lo largo de la semana en lugar de obsesionarte con un solo día. La consistencia y alcanzar la proteína de forma fiable importan mucho más que la perfección. Usa estas cifras como objetivos diarios flexibles, y deja que los resultados reales a lo largo de varias semanas guíen cualquier ajuste a la proporción o a los totales." },
    ],
  },
  {
    id: "bmi-prime",
    slug: "bmi-prime-calculator",
    category: "Health",
    categorySlug: "health",
    title: "BMI Prime Calculator",
    shortDescription: "See your BMI as a ratio of the upper healthy limit.",
    seoTitle: "BMI Prime Calculator — BMI Relative to 25",
    metaDescription:
      "Free BMI Prime calculator. Express your body mass index as a ratio of the upper healthy limit of 25 to see at a glance how far above or below it you are.",
    primaryKeyword: "bmi prime calculator",
    secondaryKeywords: ["bmi prime", "bmi ratio calculator", "bmi relative to 25"],
    fields: [
      { id: "weightKg", label: "Weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "bmiPrime", label: "BMI Prime", format: "number", decimals: 2, isPrimary: true },
      { id: "bmi", label: "Body mass index", format: "number", decimals: 1, unit: "kg/m²", isPrimary: false },
    ],
    formula: "BMI = weight ÷ height²(m); BMI Prime = BMI ÷ 25",
    explanation:
      "BMI Prime is a simple refinement of the familiar body mass index that expresses your BMI as a ratio of the upper limit of the healthy range, which the World Health Organization sets at 25. A BMI Prime calculator first works out your ordinary BMI by dividing weight in kilograms by height in metres squared, then divides that by 25 to produce a dimensionless number centred on 1. The appeal is instant interpretability: a BMI Prime of exactly 1.0 means you sit right at the top of the healthy range, below 1.0 means you are within or under it, and above 1.0 tells you directly how far into overweight or obese territory you fall. A value of 1.2, for instance, means your BMI is 20 percent above the healthy ceiling. This makes BMI Prime especially handy for comparing individuals or populations at a glance and for communicating degree of overweight as a proportion rather than an abstract index. A BMI Prime calculator carries all the same conveniences and the same limitations as standard BMI: it uses only height and weight, so it cannot distinguish muscle from fat or show where fat is stored, and it can misclassify very muscular or older individuals. Read it alongside measures like waist-to-height ratio and body-fat percentage for a fuller picture. Still, as a quick, intuitive rescaling of BMI, it offers an easy way to see exactly where you stand relative to the healthy threshold.",
    formulaExplanation:
      "BMI Prime divides your body mass index by 25, the upper boundary of the WHO healthy-weight range, turning BMI into a ratio centred on 1. Because 25 is the reference, a BMI Prime of 1 marks the top of healthy, and any value directly states the proportional distance from that line: 0.9 is ten percent below, 1.3 is thirty percent above. The underlying BMI is weight in kilograms over height in metres squared.",
    example: {
      inputs: { weightKg: 70, heightCm: 175 },
      explanation: "BMI = 70 ÷ 1.75² = 22.9; BMI Prime = 22.9 ÷ 25 ≈ 0.91, meaning about 9% below the healthy ceiling.",
    },
    faqs: [
      { question: "What does my BMI Prime number mean?", answer: "BMI Prime is your BMI divided by 25, so 1.0 sits exactly at the top of the healthy range. Below 0.74 corresponds to underweight, 0.74 to 1.0 is healthy, 1.0 to 1.2 is overweight, and above 1.2 is obese. The value tells you your proportional distance from the healthy ceiling: 1.15 means your BMI is 15 percent above 25. It simply rescales BMI to make that relationship immediately clear." },
      { question: "How is BMI Prime better than plain BMI?", answer: "It is not more accurate; it presents the same information more intuitively. By centring on 1.0, BMI Prime lets you instantly see how far above or below the healthy limit you are as a percentage, which is easier to grasp and to compare across people than a raw BMI figure. It is particularly useful in research and public health for expressing degree of overweight proportionally. For an individual, though, it shares every limitation of ordinary BMI." },
      { question: "What are the BMI Prime categories?", answer: "Using the standard WHO cutoffs rescaled to 25: underweight is below 0.74, healthy weight is 0.74 up to 1.00, overweight is 1.00 to 1.20, and obese is 1.20 and above, with obesity subclasses continuing higher. These mirror the familiar BMI thresholds of 18.5, 25, 30 and beyond, just divided by 25. So a BMI of 30, the obesity threshold, equals a BMI Prime of 1.2 exactly." },
      { question: "Does BMI Prime work for athletes?", answer: "It has the same weakness as BMI: it cannot tell muscle from fat. A very muscular athlete may have a BMI Prime above 1.0 despite low body fat, because dense muscle is heavy. Likewise, older people who have lost muscle may appear healthy by BMI Prime while carrying excess fat. For muscular or older individuals, pair it with body-fat percentage, the tape method or waist measurements to avoid misclassification based on weight alone." },
      { question: "Should I use BMI Prime instead of BMI?", answer: "Use whichever you find clearer; they carry identical information. BMI is more widely recognised and its numbers are what most health guidance and clinicians reference. BMI Prime is a neat alternative when you want to see your position as a simple ratio of the healthy limit, or compare degrees of overweight proportionally. Many people calculate both. Whichever you choose, remember it is a screening indicator, not a diagnosis, and best read alongside other health measures." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "World Health Organization BMI classification (healthy upper limit 25)",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
    slugEs: "calculadora-de-imc-prime",
    titleEs: "Calculadora de IMC Prime",
    shortDescriptionEs: "Ve tu IMC como una proporción del límite superior saludable.",
    seoTitleEs: "Calculadora de IMC Prime — IMC Relativo a 25",
    metaDescriptionEs:
      "Calculadora gratuita de IMC Prime. Expresa tu índice de masa corporal como una proporción del límite superior saludable de 25 para ver de un vistazo cuánto estás por encima o por debajo.",
    primaryKeywordEs: "calculadora de imc prime",
    secondaryKeywordsEs: ["imc prime", "calculadora de proporcion de imc", "imc relativo a 25"],
    formulaExplanationEs:
      "El IMC Prime divide tu índice de masa corporal por 25, el límite superior del rango de peso saludable de la OMS, convirtiendo el IMC en una proporción centrada en 1. Como 25 es la referencia, un IMC Prime de 1 marca el tope de lo saludable, y cualquier valor indica directamente la distancia proporcional respecto a esa línea: 0,9 es un diez por ciento por debajo, 1,3 es un treinta por ciento por encima. El IMC subyacente es el peso en kilogramos entre la altura en metros al cuadrado.",
    explanationEs:
      "El IMC Prime es un refinamiento simple del familiar índice de masa corporal que expresa tu IMC como una proporción del límite superior del rango saludable, que la Organización Mundial de la Salud fija en 25. Una calculadora de IMC Prime primero calcula tu IMC ordinario dividiendo el peso en kilogramos por la altura en metros al cuadrado, luego lo divide por 25 para producir un número adimensional centrado en 1. El atractivo es su interpretabilidad instantánea: un IMC Prime de exactamente 1,0 significa que estás justo en el tope del rango saludable, por debajo de 1,0 significa que estás dentro o por debajo de él, y por encima de 1,0 te dice directamente cuánto entras en territorio de sobrepeso u obesidad. Un valor de 1,2, por ejemplo, significa que tu IMC está un 20 por ciento por encima del techo saludable. Esto hace que el IMC Prime sea especialmente práctico para comparar individuos o poblaciones de un vistazo y para comunicar el grado de sobrepeso como una proporción en lugar de un índice abstracto. Una calculadora de IMC Prime lleva todas las mismas comodidades y las mismas limitaciones que el IMC estándar: usa solo la altura y el peso, así que no puede distinguir músculo de grasa ni mostrar dónde se almacena la grasa, y puede clasificar mal a personas muy musculosas o mayores. Léelo junto a medidas como la relación cintura-altura y el porcentaje de grasa corporal para una imagen más completa. Aun así, como un reescalado rápido e intuitivo del IMC, ofrece una forma fácil de ver exactamente dónde estás respecto al umbral saludable.",
    exampleEs: {
      inputs: { weightKg: 70, heightCm: 175 },
      explanation: "IMC = 70 ÷ 1,75² = 22,9; IMC Prime = 22,9 ÷ 25 ≈ 0,91, lo que significa un 9% por debajo del techo saludable.",
    },
    faqsEs: [
      { question: "¿Qué significa mi número de IMC Prime?", answer: "El IMC Prime es tu IMC dividido por 25, así que 1,0 se sitúa exactamente en el tope del rango saludable. Por debajo de 0,74 corresponde a bajo peso, de 0,74 a 1,0 es saludable, de 1,0 a 1,2 es sobrepeso, y por encima de 1,2 es obesidad. El valor te dice tu distancia proporcional respecto al techo saludable: 1,15 significa que tu IMC está un 15 por ciento por encima de 25. Simplemente reescala el IMC para dejar clara esa relación de inmediato." },
      { question: "¿En qué es mejor el IMC Prime que el IMC normal?", answer: "No es más preciso; presenta la misma información de forma más intuitiva. Al centrarse en 1,0, el IMC Prime te permite ver al instante cuánto estás por encima o por debajo del límite saludable como porcentaje, lo cual es más fácil de captar y de comparar entre personas que una cifra de IMC en bruto. Es particularmente útil en investigación y salud pública para expresar el grado de sobrepeso de forma proporcional. Para un individuo, sin embargo, comparte todas las limitaciones del IMC ordinario." },
      { question: "¿Cuáles son las categorías del IMC Prime?", answer: "Usando los límites estándar de la OMS reescalados a 25: bajo peso es por debajo de 0,74, peso saludable es de 0,74 hasta 1,00, sobrepeso es de 1,00 a 1,20, y obesidad es 1,20 y más, con las subclases de obesidad continuando más arriba. Estos reflejan los umbrales familiares del IMC de 18,5, 25, 30 y más allá, solo que divididos por 25. Así que un IMC de 30, el umbral de obesidad, equivale a un IMC Prime de 1,2 exactamente." },
      { question: "¿Funciona el IMC Prime para atletas?", answer: "Tiene la misma debilidad que el IMC: no puede distinguir músculo de grasa. Un atleta muy musculoso puede tener un IMC Prime por encima de 1,0 pese a una grasa corporal baja, porque el músculo denso es pesado. Del mismo modo, las personas mayores que han perdido músculo pueden parecer saludables por IMC Prime mientras cargan con exceso de grasa. Para personas musculosas o mayores, combínalo con el porcentaje de grasa corporal, el método de la cinta o las medidas de cintura para evitar una clasificación errónea basada solo en el peso." },
      { question: "¿Debo usar el IMC Prime en lugar del IMC?", answer: "Usa el que te resulte más claro; llevan información idéntica. El IMC es más reconocido y sus números son los que la mayoría de las guías de salud y los clínicos referencian. El IMC Prime es una alternativa clara cuando quieres ver tu posición como una simple proporción del límite saludable, o comparar grados de sobrepeso de forma proporcional. Muchas personas calculan ambos. Sea cual sea el que elijas, recuerda que es un indicador de cribado, no un diagnóstico, y que se lee mejor junto a otras medidas de salud." },
    ],
  },
];
