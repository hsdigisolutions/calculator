import type { CalculatorDefinition } from "../types";

const systemField = {
  id: "system",
  label: "Units",
  type: "select" as const,
  required: false,
  span: 2 as const,
  defaultValue: "metric",
  options: [
    { value: "metric", label: "Metric (kg, cm)" },
    { value: "imperial", label: "Imperial (lb, in)" },
  ],
};

export const healthCalculators: CalculatorDefinition[] = [
  {
    id: "bmi",
    slug: "bmi-calculator",
    category: "Health",
    categorySlug: "health",
    title: "BMI Calculator",
    shortDescription: "Calculate your Body Mass Index and category.",
    seoTitle: "BMI Calculator — Free Body Mass Index Calculator",
    metaDescription:
      "Free BMI calculator. Find your Body Mass Index from height and weight in metric or imperial units, and see your WHO weight category.",
    primaryKeyword: "bmi calculator",
    secondaryKeywords: ["body mass index calculator", "bmi chart", "healthy weight calculator"],
    fields: [
      systemField,
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg (metric) or lb (imperial)" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm (metric) or inches (imperial)" },
    ],
    results: [
      { id: "bmi", label: "BMI", format: "number", decimals: 1, isPrimary: true },
      { id: "category", label: "Category", format: "text", isPrimary: false },
    ],
    formula: "BMI = weight (kg) ÷ height (m)²  ·  Imperial: BMI = 703 × lb ÷ in²",
    explanation:
      "Body Mass Index is a screening figure that relates a person's weight to their height, expressed as a single number in kilograms per square metre. Adolphe Quetelet devised it in the 1830s as a way to describe populations, and it later became the standard first-pass measure of weight status because it needs only two easily taken measurements and no equipment beyond scales and a stadiometer. This bmi calculator applies the World Health Organization thresholds: underweight below 18.5, normal from 18.5 to 24.9, overweight from 25 to 29.9, and obese at 30 and above. Those cut points matter because BMI tracks, at the group level, with the risk of conditions such as type 2 diabetes, hypertension and cardiovascular disease, which is why clinics use it to flag people for closer assessment. The WHO adopted these ranges after reviewing large cohort data linking body mass to mortality and morbidity. Doctors, dietitians, insurers and public-health researchers all reach for a bmi calculator as a fast, standardised starting point. It has a real limitation: because it measures total mass, not composition, this bmi calculator can misclassify very muscular athletes as overweight and can understate fat in older adults who have lost lean tissue.",
    formulaExplanation:
      "Weight is divided by height squared because, across adults of similar build, body mass scales roughly with the square of height rather than height itself. Squaring the height therefore normalises weight so that tall and short people can be compared on one scale. The imperial version multiplies pounds over inches squared by 703 to convert the result into the same metric kg/m² units.",
    example: {
      inputs: { system: "metric", weight: 70, height: 175 },
      explanation: "70 kg at 1.75 m: 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which is in the normal range.",
    },
    faqs: [
      { question: "What is a normal BMI for men and women?", answer: "The healthy band is 18.5 to 24.9 for both sexes, since the WHO applies the same adult cut points to men and women. Sex differences in muscle and fat distribution are not built into the number itself. Use it only as a broad screen, and pair it with a waist measurement or body-fat testing for a fuller picture of an individual's overall health." },
      { question: "How accurate is BMI?", answer: "As a population screen it correlates well with body fat and health risk, but for one person it can mislead. It reads only total mass, so a muscular athlete may land in the overweight range while carrying little fat, and a sedentary older adult may sit in the normal range despite high fat. Treat it as a flag, not a verdict." },
      { question: "Does BMI apply to children?", answer: "Not with these adult categories. Children and teenagers grow at different rates, so they use age- and sex-specific BMI-for-age percentiles from growth charts instead. A child in the 85th to 95th percentile is considered overweight. This tool is built for adults aged 20 and over; use a paediatric percentile chart for anyone younger. A doctor or paediatrician can plot the correct percentile and interpret it against the child's growth history." },
      { question: "How often should I recalculate my BMI?", answer: "For most adults, checking every few months is plenty, since height is stable and weight moves slowly. Recalculate after a deliberate change in weight, a new training programme, or a shift in health goals. Frequent daily checks add little, because normal fluctuations in food and water can move the scale by a kilogram or two without changing your real status." },
      { question: "Can I use BMI if I am very athletic?", answer: "You can calculate it, but interpret it carefully. Muscle is denser than fat, so athletes and heavy lifters often score as overweight or obese while being lean and healthy. If that describes you, a body-fat percentage estimate or a waist-to-height ratio gives a more meaningful reading than BMI alone. The number is still worth tracking for trends over time, even when the category label itself misjudges your build." },
    ],
    slugEs: "calculadora-de-imc",
    titleEs: "Calculadora de IMC",
    shortDescriptionEs: "Calcula tu Índice de Masa Corporal y su categoría.",
    seoTitleEs: "Calculadora de IMC — Índice de Masa Corporal Gratis",
    metaDescriptionEs:
      "Calculadora de IMC gratuita. Halla tu Índice de Masa Corporal a partir de la altura y el peso en unidades métricas o imperiales, y consulta tu categoría de peso según la OMS.",
    primaryKeywordEs: "calculadora de imc",
    secondaryKeywordsEs: ["calculadora de indice de masa corporal", "tabla de imc", "calculadora de peso saludable"],
    formulaExplanationEs:
      "El peso se divide por la altura al cuadrado porque, entre adultos de complexión similar, la masa corporal escala aproximadamente con el cuadrado de la altura en lugar de con la altura misma. Elevar la altura al cuadrado normaliza así el peso para que personas altas y bajas puedan compararse en una sola escala. La versión imperial multiplica las libras entre las pulgadas al cuadrado por 703 para convertir el resultado en las mismas unidades métricas de kg/m².",
    explanationEs:
      "El Índice de Masa Corporal es una cifra de cribado que relaciona el peso de una persona con su altura, expresada como un único número en kilogramos por metro cuadrado. Adolphe Quetelet lo ideó en la década de 1830 para describir poblaciones, y más tarde se convirtió en la medida estándar de primer nivel del estado de peso porque solo necesita dos mediciones fáciles de tomar y ningún equipo más allá de una báscula y un tallímetro. Esta calculadora de IMC aplica los umbrales de la Organización Mundial de la Salud (OMS): bajo peso por debajo de 18.5, normal de 18.5 a 24.9, sobrepeso de 25 a 29.9, y obesidad a partir de 30. Esos puntos de corte importan porque el IMC se asocia, a nivel de grupo, con el riesgo de enfermedades como la diabetes tipo 2, la hipertensión y las enfermedades cardiovasculares, razón por la cual las clínicas lo usan para señalar a las personas que necesitan una evaluación más detallada. Médicos, dietistas, aseguradoras e investigadores de salud pública recurren a una calculadora de IMC como punto de partida rápido y estandarizado. Tiene una limitación real: al medir la masa total y no la composición, puede clasificar erróneamente a atletas muy musculosos como personas con sobrepeso y subestimar la grasa en adultos mayores que han perdido tejido magro.",
    exampleEs: {
      inputs: { system: "metric", weight: 70, height: 175 },
      explanation: "70 kg a 1.75 m: 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, que está en el rango normal.",
    },
    faqsEs: [
      { question: "¿Cuál es un IMC normal para hombres y mujeres?", answer: "La franja saludable es de 18.5 a 24.9 para ambos sexos, ya que la OMS aplica los mismos puntos de corte a hombres y mujeres. Las diferencias de músculo y distribución de grasa entre sexos no están incorporadas en el número en sí. Úsalo solo como un cribado amplio y combínalo con una medición de cintura o una prueba de grasa corporal para obtener una imagen más completa de la salud de cada persona." },
      { question: "¿Qué tan preciso es el IMC?", answer: "Como cribado poblacional se correlaciona bien con la grasa corporal y el riesgo para la salud, pero para una sola persona puede inducir a error. Solo lee la masa total, por lo que un atleta musculoso puede caer en el rango de sobrepeso pese a tener poca grasa, y un adulto mayor sedentario puede situarse en el rango normal a pesar de una grasa elevada. Trátalo como una señal, no como un veredicto." },
      { question: "¿El IMC se aplica a los niños?", answer: "No con estas categorías de adultos. Los niños y adolescentes crecen a ritmos distintos, así que en su lugar utilizan percentiles de IMC para la edad, específicos por edad y sexo, tomados de tablas de crecimiento. Un niño entre los percentiles 85 y 95 se considera con sobrepeso. Esta herramienta está pensada para adultos de 20 años o más; usa una tabla de percentiles pediátrica para cualquier persona más joven y consulta a un pediatra." },
      { question: "¿Con qué frecuencia debo recalcular mi IMC?", answer: "Para la mayoría de los adultos, comprobarlo cada pocos meses es suficiente, ya que la altura es estable y el peso cambia despacio. Recalcúlalo tras un cambio deliberado de peso, un nuevo programa de entrenamiento o un giro en tus objetivos de salud. Las comprobaciones diarias frecuentes aportan poco, porque las fluctuaciones normales de comida y agua pueden mover la báscula uno o dos kilos sin cambiar tu estado real." },
      { question: "¿Puedo usar el IMC si soy muy atlético?", answer: "Puedes calcularlo, pero interprétalo con cuidado. El músculo es más denso que la grasa, así que los atletas y quienes levantan mucho peso a menudo puntúan como sobrepeso u obesidad siendo delgados y sanos. Si ese es tu caso, una estimación del porcentaje de grasa corporal o una relación cintura-altura ofrece una lectura más significativa que el IMC solo. Aun así, vale la pena seguir el número para ver tendencias con el tiempo." },
    ],
    relatedCalculators: ["bmr-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "World Health Organization (WHO), Technical Report Series 854 (1995)",
    sourceUrl: "https://www.who.int/publications/i/item/physical-status",
  },
  {
    id: "bmr",
    slug: "bmr-calculator",
    category: "Health",
    categorySlug: "health",
    title: "BMR Calculator",
    shortDescription: "Estimate your daily calories burned at rest.",
    seoTitle: "BMR Calculator — Free Basal Metabolic Rate Calculator",
    metaDescription:
      "Free BMR calculator using the Mifflin-St Jeor equation. Estimate the calories your body burns at rest each day from age, sex, height and weight.",
    primaryKeyword: "bmr calculator",
    secondaryKeywords: ["basal metabolic rate calculator", "calories burned at rest", "mifflin st jeor calculator"],
    fields: [
      systemField,
      {
        id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm or in" },
    ],
    results: [
      { id: "bmr", label: "BMR", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "maintenance", label: "Sedentary maintenance", format: "number", decimals: 0, unit: "kcal/day", isPrimary: false, description: "BMR × 1.2" },
    ],
    formula: "Mifflin-St Jeor: BMR = 10×kg + 6.25×cm − 5×age + s  (s = +5 male, −161 female)",
    explanation:
      "Basal Metabolic Rate is the energy your body spends at complete rest just to keep essential systems running: circulation, breathing, cell repair, brain activity and temperature regulation. It represents the largest slice of most people's daily calorie burn, typically 60 to 70 percent, which is why any bmr calculator sits at the foundation of nutrition planning. This bmr calculator uses the Mifflin-St Jeor equation, published in 1990 after the authors measured resting energy expenditure by indirect calorimetry in hundreds of adults and fitted a regression to weight, height, age and sex. Validation studies have since shown it predicts resting metabolism more accurately for today's populations than the older 1919 Harris-Benedict equation, which tended to overestimate. That accuracy is why registered dietitians, sports scientists and weight-management clinics adopted it as their default. Age enters the equation because metabolism slows as lean tissue declines over the years, and sex is included because men generally carry more muscle, which is metabolically active. The sedentary maintenance figure shown here multiplies your result by 1.2 to approximate daily needs with little exercise. Anyone setting calorie targets for fat loss, maintenance or muscle gain starts from a bmr calculator, then layers activity on top to reach total daily needs.",
    formulaExplanation:
      "The coefficients come from regression on indirect-calorimetry data. Each kilogram of body mass adds about 10 kcal and each centimetre of height 6.25 kcal, since larger bodies have more metabolising tissue. Age subtracts 5 kcal per year to reflect declining lean mass over time, and the sex constant (+5 for men, −161 for women) captures men's typically higher proportion of metabolically active muscle.",
    example: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175 },
      explanation: "10×70 + 6.25×175 − 5×30 + 5 = 700 + 1093.75 − 150 + 5 ≈ 1,649 kcal/day.",
    },
    faqs: [
      { question: "What is the difference between BMR and TDEE?", answer: "BMR is the energy you burn at complete rest for vital functions only. TDEE, or Total Daily Energy Expenditure, takes that BMR and multiplies it by an activity factor to fold in walking, exercise and the effort of digesting food. BMR is the floor; TDEE is what you actually spend across a full day. You eat around TDEE to maintain weight, not around BMR." },
      { question: "How accurate is the Mifflin-St Jeor equation?", answer: "It predicts resting metabolism within about 10 percent for roughly 80 percent of healthy adults, and outperforms the older Harris-Benedict formula for modern populations. Accuracy drops for people at the extremes of body composition, such as elite athletes or those with obesity, because the equation cannot see how much of your mass is muscle versus fat. For most people it is the best estimate without lab testing." },
      { question: "Should I eat exactly my BMR calories?", answer: "No. BMR covers only resting functions, so eating at that level while living an active life creates a large, unintended deficit. Your realistic intake for maintenance is BMR multiplied by an activity factor. Even for weight loss, dropping to bare BMR is rarely advised. Use your TDEE as the reference point and apply a moderate deficit from there instead, rather than eating down at your resting rate." },
      { question: "What is a normal BMR for men and women?", answer: "It depends on size and age, but a typical adult man falls near 1,600 to 1,900 kcal per day and a typical woman near 1,300 to 1,500, because men usually carry more lean mass. There is no single correct value: taller, heavier and younger people burn more at rest. Your own figure from this equation matters more than any average." },
      { question: "How often should I recalculate my BMR?", answer: "Recalculate whenever your weight changes by a few kilograms, since body mass is the biggest driver of the result. A significant shift in muscle from training, or simply getting older by a year or two, also nudges it. Checking every one to two months during an active weight-change phase keeps your calorie targets aligned; there is little value in daily recalculation." },
    ],
    slugEs: "calculadora-de-tmb",
    titleEs: "Calculadora de TMB",
    shortDescriptionEs: "Estima las calorías diarias que quemas en reposo.",
    seoTitleEs: "Calculadora de TMB — Tasa Metabólica Basal Gratis",
    metaDescriptionEs:
      "Calculadora de TMB gratuita con la ecuación de Mifflin-St Jeor. Estima las calorías que tu cuerpo quema en reposo cada día a partir de la edad, el sexo, la altura y el peso.",
    primaryKeywordEs: "calculadora de tmb",
    secondaryKeywordsEs: ["calculadora de tasa metabolica basal", "calorias quemadas en reposo", "calculadora mifflin st jeor"],
    formulaExplanationEs:
      "Los coeficientes provienen de una regresión sobre datos de calorimetría indirecta. Cada kilogramo de masa corporal añade unas 10 kcal y cada centímetro de altura 6.25 kcal, ya que los cuerpos más grandes tienen más tejido que metaboliza. La edad resta 5 kcal por año para reflejar la disminución de la masa magra con el tiempo, y la constante de sexo (+5 para hombres, −161 para mujeres) recoge la proporción típicamente mayor de músculo metabólicamente activo en los hombres.",
    explanationEs:
      "La Tasa Metabólica Basal es la energía que tu cuerpo gasta en reposo total solo para mantener los sistemas esenciales en marcha: circulación, respiración, reparación celular, actividad cerebral y regulación de la temperatura. Representa la mayor porción del gasto calórico diario de la mayoría de las personas, normalmente entre el 60 y el 70 por ciento, razón por la cual cualquier calculadora de TMB es la base de la planificación nutricional. Esta calculadora de TMB usa la ecuación de Mifflin-St Jeor, publicada en 1990 tras medir el gasto energético en reposo por calorimetría indirecta en cientos de adultos y ajustar una regresión al peso, la altura, la edad y el sexo. Estudios de validación han demostrado desde entonces que predice el metabolismo en reposo con más exactitud para las poblaciones actuales que la antigua ecuación de Harris-Benedict de 1919, que tendía a sobreestimar. Esa precisión es la razón por la que dietistas titulados, científicos del deporte y clínicas de control de peso la adoptaron como opción por defecto. La edad entra en la ecuación porque el metabolismo se ralentiza a medida que el tejido magro disminuye con los años, y el sexo se incluye porque los hombres suelen tener más músculo, que es metabólicamente activo. La cifra de mantenimiento sedentario multiplica tu resultado por 1.2 para aproximar las necesidades diarias con poco ejercicio.",
    exampleEs: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175 },
      explanation: "10×70 + 6.25×175 − 5×30 + 5 = 700 + 1093.75 − 150 + 5 ≈ 1,649 kcal/día.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre TMB y GEDT?", answer: "La TMB es la energía que quemas en reposo total solo para las funciones vitales. El GEDT, o Gasto Energético Diario Total, toma esa TMB y la multiplica por un factor de actividad para incluir caminar, el ejercicio y el esfuerzo de la digestión. La TMB es el suelo; el GEDT es lo que realmente gastas a lo largo del día. Comes en torno al GEDT para mantener el peso, no en torno a la TMB." },
      { question: "¿Qué tan precisa es la ecuación de Mifflin-St Jeor?", answer: "Predice el metabolismo en reposo con un margen de alrededor del 10 por ciento para cerca del 80 por ciento de los adultos sanos, y supera a la antigua fórmula de Harris-Benedict en poblaciones modernas. La precisión baja en personas con composición corporal extrema, como atletas de élite o quienes tienen obesidad, porque la ecuación no ve cuánta masa es músculo frente a grasa. Para la mayoría es la mejor estimación sin pruebas de laboratorio." },
      { question: "¿Debo comer exactamente mis calorías de TMB?", answer: "No. La TMB cubre solo las funciones en reposo, así que comer a ese nivel llevando una vida activa crea un déficit grande e involuntario. Tu ingesta realista para mantenerte es la TMB multiplicada por un factor de actividad. Incluso para perder peso, bajar hasta la TMB pura rara vez se recomienda. Usa tu GEDT como referencia y aplica un déficit moderado a partir de ahí, en lugar de comer al nivel de tu tasa en reposo." },
      { question: "¿Cuál es una TMB normal para hombres y mujeres?", answer: "Depende del tamaño y la edad, pero un hombre adulto típico ronda las 1,600 a 1,900 kcal por día y una mujer típica las 1,300 a 1,500, porque los hombres suelen tener más masa magra. No hay un único valor correcto: las personas más altas, más pesadas y más jóvenes queman más en reposo. Tu propia cifra según esta ecuación importa más que cualquier promedio." },
      { question: "¿Con qué frecuencia debo recalcular mi TMB?", answer: "Recalcúlala siempre que tu peso cambie unos kilos, ya que la masa corporal es el mayor factor del resultado. Un cambio significativo de músculo por el entrenamiento, o simplemente envejecer uno o dos años, también lo ajusta. Comprobarla cada uno o dos meses durante una fase activa de cambio de peso mantiene tus objetivos calóricos alineados; recalcularla a diario tiene poco valor." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Mifflin MD et al., Am J Clin Nutr. 1990;51(2):241-247",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
  },
];
