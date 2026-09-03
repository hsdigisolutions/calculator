import type { CalculatorDefinition, CalculatorField } from "../types";

const systemField: CalculatorField = {
  id: "system", label: "Units", type: "select", required: false, span: 2, defaultValue: "metric",
  options: [
    { value: "metric", label: "Metric (kg, cm)" },
    { value: "imperial", label: "Imperial (lb, in)" },
  ],
};
const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};
const activityField: CalculatorField = {
  id: "activity", label: "Activity level", type: "select", required: true, span: 2, defaultValue: "moderate",
  options: [
    { value: "sedentary", label: "Sedentary (little exercise)" },
    { value: "light", label: "Light (1–3 days/week)" },
    { value: "moderate", label: "Moderate (3–5 days/week)" },
    { value: "active", label: "Active (6–7 days/week)" },
    { value: "athlete", label: "Very active (hard daily training)" },
  ],
};

export const healthExtraCalculators: CalculatorDefinition[] = [
  {
    id: "tdee",
    slug: "tdee-calculator",
    category: "Health",
    categorySlug: "health",
    title: "TDEE Calculator",
    shortDescription: "Estimate your total daily energy expenditure.",
    seoTitle: "TDEE Calculator — Total Daily Energy Expenditure",
    metaDescription:
      "Free TDEE calculator. Estimate the total calories you burn per day from BMR and activity level, using the Mifflin-St Jeor equation.",
    primaryKeyword: "tdee calculator",
    secondaryKeywords: ["total daily energy expenditure", "maintenance calories", "calories burned per day"],
    fields: [
      systemField, sexField,
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm or in" },
      activityField,
    ],
    results: [
      { id: "tdee", label: "TDEE", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "bmr", label: "BMR (at rest)", format: "number", decimals: 0, unit: "kcal/day", isPrimary: false },
    ],
    formula: "TDEE = BMR × activity factor (1.2 sedentary … 1.9 very active)",
    explanation:
      "Total Daily Energy Expenditure is the full count of calories your body burns over a day, from resting metabolism through everyday movement to formal exercise and the energy used digesting food. It is the single most important number in weight management, because your weight holds steady when intake matches it, falls when intake is lower, and rises when intake is higher. This tdee calculator builds the figure in two steps: first it finds your basal metabolic rate with the Mifflin-St Jeor equation, a regression validated by indirect calorimetry against measured resting metabolism, then it multiplies that rate by an activity factor between roughly 1.2 and 1.9. Those multipliers come from decades of research on physical-activity levels, expressing total burn as a ratio of resting burn for lifestyles ranging from desk-bound to hard daily training. Coaches, dietitians and anyone tracking calories rely on a tdee calculator as their maintenance benchmark, then set a deficit for fat loss or a surplus for muscle gain relative to it. Because it captures activity rather than just rest, a tdee calculator gives a far more usable daily target than BMR alone. Treat the output as a well-reasoned starting estimate; real-world metabolism varies between individuals, so adjust after a couple of weeks of tracking your actual weight trend.",
    formulaExplanation:
      "The activity factor works as a multiplier because total energy expenditure scales in proportion to resting metabolism: someone with a higher BMR burns more during the same activity. Multiplying BMR by a value from 1.2 (sedentary) to 1.9 (very active) expresses this ratio, known as the physical-activity level, which research uses to convert resting burn into whole-day burn across a range of everyday lifestyles.",
    example: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175, activity: "moderate" },
      explanation: "BMR ≈ 1,649 kcal. At a moderate factor of 1.55, TDEE ≈ 2,556 kcal/day.",
    },
    faqs: [
      { question: "How accurate is a TDEE calculation?", answer: "The BMR portion is well validated, but the activity multiplier is the weak link, because self-reported activity is easy to misjudge. Expect the result to land within about 10 to 15 percent of your true expenditure. The practical fix is to use it as a starting target, track your weight for two to three weeks, and nudge calories up or down based on the real trend." },
      { question: "Which activity level should I pick?", answer: "Choose based on honest exercise frequency and intensity across a normal week, not your best week. Most people overestimate, so if in doubt, pick the level below your instinct. Moderate suits three to five genuine workouts a week; sedentary fits a desk job with little structured exercise. Remember that a daily gym session on top of an otherwise still day is closer to moderate than very active." },
      { question: "Is TDEE the same as maintenance calories?", answer: "Yes. TDEE is precisely the number of calories that keeps your body weight stable, which is what maintenance means. Eat consistently at your TDEE and, all else equal, your weight holds. The terms are used interchangeably in nutrition. Deficits and surpluses are then defined relative to this figure, so knowing your TDEE is the prerequisite for setting any loss or gain target." },
      { question: "How often should I recalculate my TDEE?", answer: "Recalculate after any meaningful change in body weight, because a lighter body burns fewer calories and a heavier one burns more, shifting maintenance. Also revisit it when your training load or job changes your activity level. During active dieting, checking every four to six weeks keeps your target honest, since a plateau often just means your TDEE has dropped as you have lost weight." },
      { question: "Does TDEE include exercise or should I add it?", answer: "It already includes exercise through the activity multiplier you select, so you should not add workout calories again on top. Adding them separately double-counts and inflates your target. The one nuance is if your training volume swings a lot week to week; in that case, pick an activity level that reflects your average, rather than adjusting for every single session." },
    ],
    relatedCalculators: ["bmr-calculator", "calorie-calculator", "macro-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Mifflin-St Jeor equation, Am J Clin Nutr. 1990",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
    slugEs: "calculadora-de-gasto-energetico-diario",
    titleEs: "Calculadora de TDEE",
    shortDescriptionEs: "Estima tu gasto energético diario total.",
    seoTitleEs: "Calculadora de TDEE — Gasto Energético Diario Total",
    metaDescriptionEs:
      "Calculadora de TDEE gratuita. Estima las calorías totales que quemas al día a partir del TMB y tu nivel de actividad, con la ecuación de Mifflin-St Jeor.",
    primaryKeywordEs: "calculadora de tdee",
    secondaryKeywordsEs: ["gasto energético diario total", "calorías de mantenimiento", "calorías quemadas por día"],
    formulaExplanationEs:
      "El factor de actividad funciona como multiplicador porque el gasto energético total escala en proporción al metabolismo en reposo: alguien con un TMB más alto quema más durante la misma actividad. Multiplicar el TMB por un valor de 1,2 (sedentario) a 1,9 (muy activo) expresa esta razón, conocida como nivel de actividad física, que la investigación usa para convertir el gasto en reposo en gasto de todo el día en distintos estilos de vida cotidianos.",
    explanationEs:
      "El Gasto Energético Diario Total es la cuenta completa de calorías que tu cuerpo quema a lo largo de un día, desde el metabolismo en reposo hasta el movimiento cotidiano, el ejercicio formal y la energía usada al digerir los alimentos. Es el número más importante en el control del peso, porque tu peso se mantiene estable cuando la ingesta lo iguala, baja cuando la ingesta es menor y sube cuando es mayor. Esta calculadora de TDEE construye la cifra en dos pasos: primero halla tu tasa metabólica basal con la ecuación de Mifflin-St Jeor, una regresión validada por calorimetría indirecta frente al metabolismo en reposo medido, y luego multiplica esa tasa por un factor de actividad de entre 1,2 y 1,9. Esos multiplicadores provienen de décadas de investigación sobre los niveles de actividad física. Entrenadores, dietistas y cualquier persona que cuente calorías usan una calculadora de TDEE como referencia de mantenimiento, y después fijan un déficit para perder grasa o un superávit para ganar músculo respecto a ella. Trata el resultado como una estimación de partida bien fundamentada; el metabolismo real varía entre individuos, así que ajústalo tras un par de semanas siguiendo la tendencia real de tu peso.",
    exampleEs: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175, activity: "moderate" },
      explanation: "El TMB ≈ 1.649 kcal. Con un factor moderado de 1,55, el TDEE ≈ 2.556 kcal/día.",
    },
    faqsEs: [
      { question: "¿Qué tan precisa es una estimación de TDEE?", answer: "La parte del TMB está bien validada, pero el multiplicador de actividad es el eslabón débil, porque la actividad autodeclarada es fácil de sobrestimar. Espera que el resultado quede dentro de un 10 a 15 por ciento de tu gasto real. La solución práctica es usarlo como objetivo inicial, seguir tu peso durante dos o tres semanas y ajustar las calorías según la tendencia real." },
      { question: "¿Qué nivel de actividad debo elegir?", answer: "Elige según la frecuencia e intensidad honesta del ejercicio en una semana normal, no en tu mejor semana. La mayoría se sobrestima, así que ante la duda elige el nivel por debajo de tu instinto. Moderado encaja con tres a cinco entrenamientos reales por semana; sedentario corresponde a un trabajo de oficina con poco ejercicio estructurado y poca actividad adicional durante el día." },
      { question: "¿El TDEE es lo mismo que las calorías de mantenimiento?", answer: "Sí. El TDEE es exactamente el número de calorías que mantiene tu peso corporal estable, que es lo que significa mantenimiento. Come de forma constante en tu TDEE y, en igualdad de condiciones, tu peso se mantiene. Los términos se usan de forma intercambiable en nutrición. Los déficits y superávits se definen respecto a esta cifra, así que conocer tu TDEE es el requisito previo." },
      { question: "¿Con qué frecuencia debo recalcular mi TDEE?", answer: "Recalcúlalo tras cualquier cambio notable de peso corporal, porque un cuerpo más ligero quema menos calorías y uno más pesado quema más, desplazando el mantenimiento. También revísalo cuando tu carga de entrenamiento o tu trabajo cambien tu nivel de actividad. Durante una dieta activa, comprobarlo cada cuatro a seis semanas mantiene tu objetivo honesto, ya que un estancamiento suele significar que tu TDEE ha bajado." },
      { question: "¿El TDEE incluye el ejercicio o debo sumarlo?", answer: "Ya incluye el ejercicio a través del multiplicador de actividad que seleccionas, así que no debes sumar de nuevo las calorías del entrenamiento por encima. Sumarlas por separado las cuenta dos veces e infla tu objetivo. El único matiz es si tu volumen de entrenamiento varía mucho de una semana a otra; en ese caso, elige un nivel de actividad que refleje tu promedio." },
    ],
  },
  {
    id: "calorie",
    slug: "calorie-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Calorie Calculator",
    shortDescription: "Find daily calories for your goal.",
    seoTitle: "Calorie Calculator — Daily Calorie Needs",
    metaDescription:
      "Free calorie calculator. Find how many calories to eat per day to lose, maintain or gain weight, based on your body and activity.",
    primaryKeyword: "calorie calculator",
    secondaryKeywords: ["daily calorie needs", "calorie intake calculator", "weight loss calories"],
    fields: [
      systemField, sexField,
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm or in" },
      activityField,
      {
        id: "goal", label: "Goal", type: "select", required: true, span: 2, defaultValue: "maintain",
        options: [
          { value: "lose-1", label: "Lose 1 kg/week (−500 kcal)" },
          { value: "lose-0.5", label: "Lose 0.5 kg/week (−250 kcal)" },
          { value: "maintain", label: "Maintain weight" },
          { value: "gain-0.5", label: "Gain 0.5 kg/week (+250 kcal)" },
          { value: "gain-1", label: "Gain 1 kg/week (+500 kcal)" },
        ],
      },
    ],
    results: [
      { id: "target", label: "Target calories", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "maintenance", label: "Maintenance", format: "number", decimals: 0, unit: "kcal/day", isPrimary: false },
    ],
    formula: "Target = TDEE + goal adjustment (±250 or ±500 kcal/day)",
    explanation:
      "A daily calorie target is the amount of energy you aim to eat to reach a specific goal, whether that is losing fat, holding your weight steady or gaining mass. It rests on the principle of energy balance: eat fewer calories than you burn and stored fat is used for fuel, eat more and the surplus is banked as new tissue. This calorie calculator first works out your Total Daily Energy Expenditure, deriving basal metabolism from the Mifflin-St Jeor equation, a formula validated against measured resting metabolism by indirect calorimetry, and scaling it by your activity level. It then applies your goal as an adjustment. A shortfall of roughly 500 kcal per day tends to yield about 0.5 kg of fat loss per week, because a kilogram of body fat stores close to 7,700 kcal, while a matching surplus supports steady gain. Dietitians, personal trainers and people managing their weight use a calorie calculator to turn a vague intention into a concrete daily number they can plan meals around. The Mifflin-St Jeor basis is why this calorie calculator is more reliable for modern adults than older methods. Very low intakes are deliberately avoided here, because aggressive deficits risk muscle loss and nutrient gaps and should only be pursued under professional supervision.",
    formulaExplanation:
      "The goal adjustment works because body fat stores a known amount of energy: roughly 7,700 kcal per kilogram. A sustained daily deficit of 500 kcal accumulates to about 3,500 kcal over a week, close to half a kilogram of fat, so subtracting 500 from maintenance targets that rate of loss. Adding calories reverses the arithmetic to support gradual weight gain.",
    example: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175, activity: "moderate", goal: "lose-0.5" },
      explanation: "Maintenance ≈ 2,556 kcal. For 0.5 kg/week loss, target ≈ 2,306 kcal/day.",
    },
    faqs: [
      { question: "Is a 500-calorie deficit safe?", answer: "For most healthy adults a 500 kcal daily deficit is a sustainable pace that yields around half a kilogram of loss per week without excessive hunger or muscle loss. It becomes risky if it pushes intake very low, for example under 1,200 kcal for women or 1,500 for men. Smaller bodies may need a gentler deficit. If in doubt, aim for the slower rate and prioritise protein." },
      { question: "How many calories should I eat to lose weight?", answer: "Start from your maintenance calories, then subtract 250 to 500 per day for a loss of roughly a quarter to half a kilogram weekly. The exact number depends on your size, sex, age and activity, which is why this tool personalises it rather than quoting a flat figure. Avoid deficits so large that intake drops below the safe floors noted above." },
      { question: "Why has my weight loss stalled?", answer: "The most common reason is that maintenance calories fall as you lose weight, so a deficit that once worked becomes your new maintenance. Recalculate at your current weight and the target will drop. Water retention, inconsistent tracking and undercounting portions also mask real fat loss. Give any change three to four weeks before judging it, since weight fluctuates day to day." },
      { question: "Can I use this if I have a medical condition?", answer: "This is a general estimate, not medical advice, and conditions such as thyroid disorders, diabetes or pregnancy change calorie needs in ways the formula cannot see. If you have a diagnosed condition, take medication that affects appetite or metabolism, or are pregnant or breastfeeding, use the number only as a rough reference and set your actual targets with a doctor or registered dietitian." },
      { question: "How accurate is a calorie calculator?", answer: "The estimate is solid but not exact, typically within 10 to 15 percent of your true needs, because the activity multiplier and individual metabolism both introduce uncertainty. The reliable approach is to follow the target for two to three weeks, track your weight trend, and adjust by 100 to 200 calories if the scale is not moving as intended. Treat the output as a starting point, not a fixed rule." },
    ],
    relatedCalculators: ["tdee-calculator", "macro-calculator", "protein-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Mifflin-St Jeor equation, Am J Clin Nutr. 1990",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
    slugEs: "calculadora-de-calorias",
    titleEs: "Calculadora de Calorías",
    shortDescriptionEs: "Encuentra las calorías diarias para tu objetivo.",
    seoTitleEs: "Calculadora de Calorías — Necesidades Calóricas Diarias",
    metaDescriptionEs:
      "Calculadora de calorías gratuita. Descubre cuántas calorías comer al día para perder, mantener o ganar peso, según tu cuerpo y tu actividad.",
    primaryKeywordEs: "calculadora de calorías",
    secondaryKeywordsEs: ["necesidades calóricas diarias", "calculadora de ingesta de calorías", "calorías para perder peso"],
    formulaExplanationEs:
      "El ajuste por objetivo funciona porque la grasa corporal almacena una cantidad conocida de energía: aproximadamente 7.700 kcal por kilogramo. Un déficit diario sostenido de 500 kcal se acumula hasta unas 3.500 kcal en una semana, cerca de medio kilogramo de grasa, por lo que restar 500 al mantenimiento apunta a ese ritmo de pérdida. Sumar calorías invierte la aritmética para favorecer un aumento de peso gradual y constante en el tiempo.",
    explanationEs:
      "Un objetivo calórico diario es la cantidad de energía que buscas comer para alcanzar una meta concreta, ya sea perder grasa, mantener tu peso estable o ganar masa. Se basa en el principio del balance energético: come menos calorías de las que quemas y la grasa almacenada se usa como combustible; come más y el excedente se guarda como tejido nuevo. Esta calculadora de calorías primero calcula tu Gasto Energético Diario Total, derivando el metabolismo basal de la ecuación de Mifflin-St Jeor, una fórmula validada frente al metabolismo en reposo medido por calorimetría indirecta, y escalándolo por tu nivel de actividad. Luego aplica tu objetivo como ajuste. Un déficit de unas 500 kcal al día tiende a producir alrededor de 0,5 kg de pérdida de grasa por semana, porque un kilogramo de grasa corporal almacena cerca de 7.700 kcal, mientras que un superávit equivalente favorece un aumento constante. Dietistas, entrenadores personales y quienes gestionan su peso usan una calculadora de calorías para convertir una intención vaga en un número diario concreto sobre el que planificar comidas. Las ingestas muy bajas se evitan aquí deliberadamente, porque los déficits agresivos arriesgan pérdida muscular y carencias de nutrientes y solo deben abordarse bajo supervisión profesional.",
    exampleEs: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175, activity: "moderate", goal: "lose-0.5" },
      explanation: "Mantenimiento ≈ 2.556 kcal. Para perder 0,5 kg/semana, el objetivo ≈ 2.306 kcal/día.",
    },
    faqsEs: [
      { question: "¿Es seguro un déficit de 500 calorías?", answer: "Para la mayoría de adultos sanos, un déficit diario de 500 kcal es un ritmo sostenible que produce alrededor de medio kilogramo de pérdida por semana sin hambre excesiva ni pérdida muscular. Se vuelve arriesgado si empuja la ingesta muy abajo, por ejemplo menos de 1.200 kcal en mujeres o 1.500 en hombres. Los cuerpos más pequeños pueden necesitar un déficit más suave y priorizar la proteína." },
      { question: "¿Cuántas calorías debo comer para perder peso?", answer: "Parte de tus calorías de mantenimiento y luego resta 250 a 500 al día para una pérdida de aproximadamente un cuarto a medio kilogramo semanal. El número exacto depende de tu tamaño, sexo, edad y actividad, por eso esta herramienta lo personaliza en lugar de dar una cifra fija. Evita déficits tan grandes que la ingesta caiga por debajo de los mínimos seguros indicados arriba." },
      { question: "¿Por qué se ha estancado mi pérdida de peso?", answer: "La razón más común es que las calorías de mantenimiento bajan a medida que pierdes peso, así que un déficit que antes funcionaba se convierte en tu nuevo mantenimiento. Recalcula con tu peso actual y el objetivo bajará. La retención de agua, un registro inconsistente y subestimar las porciones también enmascaran la pérdida real. Da tres o cuatro semanas a cualquier cambio antes de juzgarlo." },
      { question: "¿Puedo usar esto si tengo una condición médica?", answer: "Esto es una estimación general, no consejo médico, y condiciones como trastornos de tiroides, diabetes o embarazo cambian las necesidades calóricas de formas que la fórmula no puede ver. Si tienes una condición diagnosticada, tomas medicación que afecta el apetito o el metabolismo, o estás embarazada o amamantando, usa el número solo como referencia y fija tus objetivos con un médico o dietista." },
      { question: "¿Qué tan precisa es una calculadora de calorías?", answer: "La estimación es sólida pero no exacta, típicamente dentro de un 10 a 15 por ciento de tus necesidades reales, porque el multiplicador de actividad y el metabolismo individual introducen incertidumbre. El enfoque fiable es seguir el objetivo durante dos o tres semanas, registrar la tendencia de tu peso y ajustar en 100 a 200 calorías si la báscula no se mueve como esperabas. Trátalo como punto de partida." },
    ],
  },
  {
    id: "body-fat",
    slug: "body-fat-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Body Fat Calculator",
    shortDescription: "Estimate body fat with the U.S. Navy method.",
    seoTitle: "Body Fat Calculator — U.S. Navy Method",
    metaDescription:
      "Free body fat calculator using the U.S. Navy circumference method. Estimate your body fat percentage from a few tape measurements.",
    primaryKeyword: "body fat calculator",
    secondaryKeywords: ["body fat percentage", "navy body fat", "bodyfat calculator"],
    fields: [
      systemField, sexField,
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm or in" },
      { id: "neck", label: "Neck", type: "number", placeholder: "38", required: true, span: 1, min: 0, helpText: "cm or in" },
      { id: "waist", label: "Waist", type: "number", placeholder: "85", required: true, span: 1, min: 0, helpText: "cm or in" },
      { id: "hip", label: "Hip (female only)", type: "number", placeholder: "95", required: false, span: 1, min: 0, helpText: "cm or in — required for females" },
    ],
    results: [
      { id: "bodyFat", label: "Body fat", format: "percentage", decimals: 1, isPrimary: true },
      { id: "category", label: "Category", format: "text", isPrimary: false },
    ],
    formula: "U.S. Navy circumference method using log10 of neck, waist (and hip for women)",
    explanation:
      "Body fat percentage is the share of your total body weight that is fat tissue, as opposed to muscle, bone, organs and water. It is a more meaningful gauge of composition than weight or BMI alone, because two people at the same weight can carry very different amounts of fat and lean mass. This body fat calculator uses the U.S. Navy circumference method, developed by Hodgdon and Beckett in 1984, which the Navy adopted to screen personnel without expensive equipment. It estimates fat from tape measurements: neck and waist for men, plus hip for women, all read against height. Researchers derived the equations by regressing these girths against body density measured by underwater weighing, so the tape figures stand in for the harder laboratory test. That is the appeal of a body fat calculator built on this method: it needs only a tape measure yet lands within a few percentage points of a gold-standard scan for average builds. Athletes, military recruits, coaches and anyone tracking a fat-loss or recomposition programme use a body fat calculator to monitor progress that the bathroom scale hides. Laboratory methods such as DEXA and hydrostatic weighing remain more precise, so treat this estimate as a tool for tracking change over time rather than a clinical diagnosis. Measure snugly without compressing the skin.",
    formulaExplanation:
      "The method exploits the fact that fat accumulates at the waist and hips while the neck stays comparatively lean. The gap between waist (and hip) girth and neck girth therefore tracks how much fat a person carries, and dividing by height normalises for body size. Logarithms linearise the relationship that the researchers found between these circumferences and body density measured underwater.",
    example: {
      inputs: { system: "metric", sex: "male", height: 175, neck: 38, waist: 85 },
      explanation: "A 175 cm male with a 38 cm neck and 85 cm waist estimates at roughly 18% body fat.",
    },
    faqs: [
      { question: "How accurate is the Navy body fat method?", answer: "For average body types it typically lands within three to four percentage points of a DEXA or hydrostatic scan, which is impressive for a tape measure. Accuracy slips for very lean athletes and for people carrying fat in unusual patterns, because the formula assumes a standard distribution. Its real strength is consistency: measured the same way each time, it tracks change reliably even when the absolute number is slightly off." },
      { question: "What is a healthy body fat percentage for men and women?", answer: "Women naturally carry more essential fat, so healthy ranges differ by sex. A common guide puts men's fitness range near 14 to 24 percent and women's near 21 to 31 percent, with athletes lower. Essential fat sits around 3 percent for men and 12 percent for women, below which health suffers. These are general bands, not targets everyone should chase." },
      { question: "Where exactly do I measure the waist and neck?", answer: "Measure the neck just below the larynx with the tape sloping slightly downward at the front. For the waist, men measure at the navel and women at the narrowest point of the torso. Keep the tape level all the way around and snug against the skin without squeezing. Measure on bare skin, after exhaling normally, for the most repeatable readings." },
      { question: "Why do women need to measure their hips?", answer: "Women typically store more fat around the hips and thighs than men do, so waist and neck alone would understate their body fat. Adding hip circumference gives the female equation a second site that reflects this distribution, which is what keeps the estimate accurate. The male formula omits it because men store proportionally more fat around the abdomen, already captured by the waist measurement." },
      { question: "How often should I recheck my body fat?", answer: "Every two to four weeks is enough to see a real trend, since body composition changes slowly. Measuring more often mostly captures day-to-day noise from hydration, food and salt. For the cleanest comparison, measure at the same time of day, ideally in the morning before eating, and use the same tape and technique each time so the numbers stay directly comparable." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "U.S. Navy body composition method (Hodgdon & Beckett, 1984)",
    slugEs: "calculadora-de-grasa-corporal",
    titleEs: "Calculadora de Grasa Corporal",
    shortDescriptionEs: "Estima la grasa corporal con el método de la Marina de EE. UU.",
    seoTitleEs: "Calculadora de Grasa Corporal — Método de la Marina de EE. UU.",
    metaDescriptionEs:
      "Calculadora de grasa corporal gratuita con el método de circunferencias de la Marina de EE. UU. Estima tu porcentaje de grasa con unas pocas medidas de cinta.",
    primaryKeywordEs: "calculadora de grasa corporal",
    secondaryKeywordsEs: ["porcentaje de grasa corporal", "grasa corporal método marina", "calculadora de grasa"],
    formulaExplanationEs:
      "El método aprovecha que la grasa se acumula en la cintura y las caderas mientras el cuello se mantiene comparativamente magro. La diferencia entre el contorno de la cintura (y la cadera) y el del cuello refleja por tanto cuánta grasa carga una persona, y dividir por la altura normaliza según el tamaño corporal. Los logaritmos linealizan la relación que los investigadores hallaron entre estas circunferencias y la densidad corporal medida por pesaje bajo el agua.",
    explanationEs:
      "El porcentaje de grasa corporal es la proporción de tu peso total que corresponde a tejido graso, frente al músculo, el hueso, los órganos y el agua. Es una medida más significativa de la composición que el peso o el IMC por sí solos, porque dos personas del mismo peso pueden cargar cantidades muy distintas de grasa y masa magra. Esta calculadora de grasa corporal usa el método de circunferencias de la Marina de EE. UU., desarrollado por Hodgdon y Beckett en 1984, que la Marina adoptó para evaluar al personal sin equipos costosos. Estima la grasa a partir de medidas de cinta: cuello y cintura en hombres, más la cadera en mujeres, todo en relación con la altura. Los investigadores derivaron las ecuaciones regresando estos contornos contra la densidad corporal medida por pesaje hidrostático, de modo que las cifras de cinta sustituyen a la prueba de laboratorio más difícil. Ese es el atractivo de una calculadora de grasa corporal basada en este método: solo necesita una cinta métrica y aun así queda a pocos puntos porcentuales de un escáner de referencia para constituciones promedio. Atletas, reclutas, entrenadores y cualquiera que siga un programa de pérdida de grasa la usan para vigilar un progreso que la báscula oculta. Métodos como DEXA siguen siendo más precisos, así que trata esta estimación como una herramienta para seguir el cambio en el tiempo. Mide ajustado sin comprimir la piel.",
    exampleEs: {
      inputs: { system: "metric", sex: "male", height: 175, neck: 38, waist: 85 },
      explanation: "Un hombre de 175 cm con cuello de 38 cm y cintura de 85 cm se estima en torno al 18 % de grasa corporal.",
    },
    faqsEs: [
      { question: "¿Qué tan preciso es el método de grasa de la Marina?", answer: "Para tipos de cuerpo promedio suele quedar dentro de tres a cuatro puntos porcentuales de un escáner DEXA o hidrostático, algo impresionante para una cinta métrica. La precisión baja en atletas muy delgados y en personas con distribución de grasa inusual, porque la fórmula asume un patrón estándar. Su verdadera fortaleza es la consistencia: medida igual cada vez, sigue el cambio de forma fiable aunque el número absoluto varíe algo." },
      { question: "¿Cuál es un porcentaje de grasa saludable para hombres y mujeres?", answer: "Las mujeres cargan naturalmente más grasa esencial, así que los rangos saludables difieren por sexo. Una guía común sitúa el rango de fitness de los hombres cerca del 14 al 24 por ciento y el de las mujeres cerca del 21 al 31 por ciento, con atletas por debajo. La grasa esencial ronda el 3 por ciento en hombres y el 12 por ciento en mujeres, umbrales bajo los cuales la salud sufre." },
      { question: "¿Dónde mido exactamente la cintura y el cuello?", answer: "Mide el cuello justo debajo de la laringe con la cinta inclinada ligeramente hacia abajo por delante. Para la cintura, los hombres miden a la altura del ombligo y las mujeres en el punto más estrecho del torso. Mantén la cinta nivelada en todo el contorno y ajustada a la piel sin apretar. Mide sobre piel desnuda, tras exhalar con normalidad, para lecturas más repetibles y comparables." },
      { question: "¿Por qué las mujeres deben medir la cadera?", answer: "Las mujeres suelen almacenar más grasa alrededor de las caderas y los muslos que los hombres, así que la cintura y el cuello por sí solos subestimarían su grasa corporal. Añadir el contorno de la cadera da a la ecuación femenina un segundo punto que refleja esta distribución, y eso mantiene la estimación precisa. La fórmula masculina lo omite porque los hombres almacenan proporcionalmente más grasa en el abdomen, ya captada por la cintura." },
      { question: "¿Con qué frecuencia debo medir mi grasa corporal?", answer: "Cada dos a cuatro semanas basta para ver una tendencia real, ya que la composición corporal cambia despacio. Medir más a menudo capta sobre todo el ruido diario de la hidratación, la comida y la sal. Para la comparación más limpia, mide a la misma hora del día, idealmente por la mañana antes de comer, y usa la misma cinta y técnica cada vez para que los números sean directamente comparables." },
    ],
  },
  {
    id: "ideal-weight",
    slug: "ideal-weight-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Ideal Weight Calculator",
    shortDescription: "Estimate a healthy target weight for your height.",
    seoTitle: "Ideal Weight Calculator — Healthy Weight for Height",
    metaDescription:
      "Free ideal weight calculator. Estimate a healthy target weight for your height using the Devine formula and the healthy BMI range.",
    primaryKeyword: "ideal weight calculator",
    secondaryKeywords: ["ideal body weight", "healthy weight for height", "devine formula"],
    fields: [
      systemField, sexField,
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 2, min: 0, helpText: "cm or in" },
    ],
    results: [
      { id: "ideal", label: "Ideal weight (Devine)", format: "number", decimals: 1, unit: "kg", isPrimary: true },
      { id: "rangeLow", label: "Healthy range — low", format: "number", decimals: 1, unit: "kg", isPrimary: false },
      { id: "rangeHigh", label: "Healthy range — high", format: "number", decimals: 1, unit: "kg", isPrimary: false },
    ],
    formula: "Devine: 50 kg (male) / 45.5 kg (female) + 2.3 kg per inch over 5 ft",
    explanation:
      "Ideal body weight is a reference figure for roughly where a person's weight might sit given their height and sex. This ideal weight calculator reports the Devine value, a formula Dr. B. J. Devine introduced in 1974. He originally created it not for aesthetics but to standardise medication dosing, since many drugs are dosed by body size and using actual weight can over- or under-dose people at the extremes. The equation starts from a base weight at five feet of height and adds a fixed increment for each inch above that, which is why it remains embedded in clinical pharmacy and anaesthesia today. Alongside the Devine number, this ideal weight calculator shows a healthy-weight range built from the World Health Organization BMI band of 18.5 to 24.9 applied to your height, giving a span rather than a single point. Doctors, pharmacists and dietitians reach for an ideal weight calculator to set dosing weights, plan nutrition support and give patients a sensible target zone. Treat the output as a general reference, not a personal verdict: it says nothing about muscle mass, frame size or body composition, so a lean, muscular person can healthily sit above these figures. For most people the healthy BMI range is the more useful of the two outputs shown here.",
    formulaExplanation:
      "Devine's formula assumes a fixed base weight at five feet of height, then adds a set amount, 2.3 kg, for every inch taller. This linear step reflects the observation that, above a reference height, additional stature carries a fairly constant increment of lean tissue. The different base weights for men and women, 50 versus 45.5 kg, account for men's typically greater lean mass.",
    example: {
      inputs: { system: "metric", sex: "male", height: 175 },
      explanation: "175 cm ≈ 68.9 in, about 8.9 in over 5 ft: 50 + 2.3 × 8.9 ≈ 70.5 kg, within a healthy range of ~56.7–76.3 kg.",
    },
    faqs: [
      { question: "Is there one true ideal weight?", answer: "No. The very idea of a single perfect weight is a myth. Different formulas, Devine, Robinson, Hamwi and others, all return slightly different numbers, and a healthy weight is genuinely a range rather than a point. Your best weight depends on muscle mass, frame, age and health markers, none of which a height-based formula can see. Use these figures as a ballpark, not a goal to hit exactly." },
      { question: "What is the ideal weight for my height?", answer: "This tool answers that two ways: the Devine value gives a single reference point, and the healthy range shows every weight that keeps your BMI between 18.5 and 24.9 for your height. The range is usually the more practical answer, because it accommodates different builds. Anywhere within that band is generally considered healthy, so there is no need to aim for one specific figure." },
      { question: "Does the ideal weight formula account for muscle?", answer: "No, and this is its main limitation. The Devine formula and the BMI range both work purely from height and sex, so they cannot tell muscle from fat. A very muscular or athletic person may weigh more than the formula suggests while being perfectly healthy. If you carry a lot of lean mass, a body-fat estimate gives a far more meaningful target than any weight formula." },
      { question: "Why is the ideal weight formula still used in medicine?", answer: "Because Devine designed it for drug dosing, not appearance. Many medications, particularly in anaesthesia and critical care, are dosed by body size, and using a standardised ideal weight avoids overdosing people with high body fat. Kidney function estimates and ventilator settings also lean on it. That clinical role, more than any fitness use, is why the 1974 formula endures in hospitals worldwide today." },
      { question: "Can I use this if I am very tall or very short?", answer: "You can, but read it with caution at the extremes. The Devine formula is linear, so it can drift for people well outside average height, and it was validated mainly on adults of typical stature. If you are notably tall or short, lean on the healthy BMI range instead, and consider frame size and body composition rather than treating any single number as a firm target." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Ideal Body Weight (Devine, 1974) — StatPearls",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK555915/",
    slugEs: "calculadora-de-peso-ideal",
    titleEs: "Calculadora de Peso Ideal",
    shortDescriptionEs: "Estima un peso objetivo saludable para tu altura.",
    seoTitleEs: "Calculadora de Peso Ideal — Peso Saludable para tu Altura",
    metaDescriptionEs:
      "Calculadora de peso ideal gratuita. Estima un peso objetivo saludable para tu altura con la fórmula de Devine y el rango de IMC saludable.",
    primaryKeywordEs: "calculadora de peso ideal",
    secondaryKeywordsEs: ["peso corporal ideal", "peso saludable para la altura", "fórmula de Devine"],
    formulaExplanationEs:
      "La fórmula de Devine asume un peso base fijo a los cinco pies de altura y luego añade una cantidad determinada, 2,3 kg, por cada pulgada de más. Este paso lineal refleja la observación de que, por encima de una altura de referencia, la estatura adicional aporta un incremento bastante constante de tejido magro. Los distintos pesos base para hombres y mujeres, 50 frente a 45,5 kg, dan cuenta de la mayor masa magra típica de los hombres.",
    explanationEs:
      "El peso corporal ideal es una cifra de referencia sobre aproximadamente dónde podría situarse el peso de una persona según su altura y sexo. Esta calculadora de peso ideal reporta el valor de Devine, una fórmula que el Dr. B. J. Devine introdujo en 1974. La creó originalmente no por estética, sino para estandarizar la dosificación de medicamentos, ya que muchos fármacos se dosifican por tamaño corporal y usar el peso real puede sobredosificar o infradosificar a las personas en los extremos. La ecuación parte de un peso base a los cinco pies de altura y añade un incremento fijo por cada pulgada por encima, razón por la que sigue integrada hoy en la farmacia clínica y la anestesia. Junto al número de Devine, esta calculadora de peso ideal muestra un rango de peso saludable construido a partir de la banda de IMC de la Organización Mundial de la Salud de 18,5 a 24,9 aplicada a tu altura, ofreciendo un intervalo en lugar de un único punto. Médicos, farmacéuticos y dietistas recurren a una calculadora de peso ideal para fijar pesos de dosificación, planificar soporte nutricional y dar a los pacientes una zona objetivo sensata. Trata el resultado como una referencia general, no como un veredicto personal: no dice nada sobre la masa muscular, el tamaño de la estructura ósea ni la composición corporal, así que una persona magra y musculosa puede situarse sanamente por encima de estas cifras. Para la mayoría, el rango de IMC saludable es el más útil de los dos resultados.",
    exampleEs: {
      inputs: { system: "metric", sex: "male", height: 175 },
      explanation: "175 cm ≈ 68,9 pulgadas, unas 8,9 pulgadas sobre 5 pies: 50 + 2,3 × 8,9 ≈ 70,5 kg, dentro de un rango saludable de ~56,7–76,3 kg.",
    },
    faqsEs: [
      { question: "¿Existe un único peso ideal verdadero?", answer: "No. La idea misma de un único peso perfecto es un mito. Distintas fórmulas, Devine, Robinson, Hamwi y otras, devuelven números algo diferentes, y un peso saludable es realmente un rango más que un punto. Tu mejor peso depende de la masa muscular, la estructura, la edad y marcadores de salud, nada de lo cual una fórmula basada en la altura puede ver. Úsalas como aproximación, no como meta exacta." },
      { question: "¿Cuál es el peso ideal para mi altura?", answer: "Esta herramienta lo responde de dos maneras: el valor de Devine da un único punto de referencia, y el rango saludable muestra todos los pesos que mantienen tu IMC entre 18,5 y 24,9 para tu altura. El rango suele ser la respuesta más práctica, porque acomoda distintas constituciones. Cualquier punto dentro de esa banda se considera generalmente saludable, así que no hace falta apuntar a una cifra concreta." },
      { question: "¿La fórmula del peso ideal tiene en cuenta el músculo?", answer: "No, y esa es su principal limitación. La fórmula de Devine y el rango de IMC trabajan solo a partir de la altura y el sexo, así que no distinguen el músculo de la grasa. Una persona muy musculosa o atlética puede pesar más de lo que sugiere la fórmula estando perfectamente sana. Si cargas mucha masa magra, una estimación de grasa corporal da un objetivo mucho más significativo." },
      { question: "¿Por qué se sigue usando la fórmula del peso ideal en medicina?", answer: "Porque Devine la diseñó para la dosificación de fármacos, no para la apariencia. Muchos medicamentos, sobre todo en anestesia y cuidados críticos, se dosifican por tamaño corporal, y usar un peso ideal estandarizado evita sobredosificar a personas con alta grasa corporal. Las estimaciones de función renal y los ajustes de ventilador también se apoyan en ella. Ese papel clínico, más que cualquier uso fitness, es lo que mantiene vigente la fórmula de 1974." },
      { question: "¿Puedo usar esto si soy muy alto o muy bajo?", answer: "Puedes, pero léelo con cautela en los extremos. La fórmula de Devine es lineal, así que puede desviarse en personas muy por fuera de la altura promedio, y se validó sobre todo en adultos de estatura típica. Si eres notablemente alto o bajo, apóyate en el rango de IMC saludable, y considera el tamaño de la estructura y la composición corporal en lugar de tratar un solo número como meta firme." },
    ],
  },
  {
    id: "protein",
    slug: "protein-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Protein Calculator",
    shortDescription: "Find your daily protein target.",
    seoTitle: "Protein Calculator — Daily Protein Intake",
    metaDescription:
      "Free protein calculator. Estimate your daily protein needs in grams based on body weight and your goal, with a recommended range.",
    primaryKeyword: "protein calculator",
    secondaryKeywords: ["protein intake calculator", "grams of protein per day", "daily protein"],
    fields: [
      systemField,
      { id: "weight", label: "Body weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      {
        id: "goal", label: "Goal", type: "select", required: true, span: 1, defaultValue: "active",
        options: [
          { value: "sedentary", label: "General health" },
          { value: "active", label: "Active / general fitness" },
          { value: "build-muscle", label: "Build muscle" },
          { value: "lose-fat", label: "Lose fat, keep muscle" },
        ],
      },
    ],
    results: [
      { id: "grams", label: "Daily protein", format: "number", decimals: 0, unit: "g/day", isPrimary: true },
      { id: "low", label: "Range — low", format: "number", decimals: 0, unit: "g", isPrimary: false },
      { id: "high", label: "Range — high", format: "number", decimals: 0, unit: "g", isPrimary: false },
    ],
    formula: "grams = body weight (kg) × factor (0.8 general … 2.4 fat loss)",
    explanation:
      "Protein is the macronutrient your body uses to build and repair muscle, produce enzymes and hormones, and support immune function, and its daily requirement scales with body weight and how active you are. This protein calculator translates that principle into a gram target. The floor for a sedentary adult is the Recommended Dietary Allowance of about 0.8 g per kilogram, set to prevent deficiency, but that figure was never meant to optimise training or body composition. Once you exercise regularly, aim to build muscle, or diet while trying to keep muscle, the evidence points much higher, into the 1.2 to 2.2 g per kilogram range, with the upper end useful during aggressive fat loss. Those figures come from the International Society of Sports Nutrition position stand, which pooled controlled feeding and resistance-training studies to establish intakes that maximise muscle protein synthesis. A protein calculator built on that research gives athletes, lifters and dieters a target grounded in evidence rather than guesswork. Higher protein also aids fat loss by preserving lean mass in a calorie deficit and by keeping you fuller between meals. This protein calculator shows a recommended amount for your chosen goal plus a sensible range around it, so you can distribute the total across your meals in whatever way fits your routine and appetite.",
    formulaExplanation:
      "The gram target multiplies body weight in kilograms by a factor tied to your goal, because protein needs scale with the amount of lean tissue to maintain or build, which itself scales with body size. Sedentary maintenance sits near 0.8 g/kg, while training, muscle gain and dieting push the factor toward 1.6 to 2.4 g/kg to support repair and preserve muscle.",
    example: {
      inputs: { system: "metric", weight: 70, goal: "build-muscle" },
      explanation: "For muscle building at 1.6–2.2 g/kg, a 70 kg person targets roughly 112–154 g/day (about 133 g).",
    },
    faqs: [
      { question: "How much protein do I need per day?", answer: "It depends on your goal. A sedentary adult needs about 0.8 g per kilogram of body weight to avoid deficiency, but active people benefit from 1.2 to 2.0, and those building muscle or dieting hard do best at 1.6 to 2.4. For a 70 kg person that spans roughly 84 to 168 grams a day. This tool sets the target from the goal you pick rather than a single blanket figure." },
      { question: "Can eating too much protein harm you?", answer: "For healthy adults, no. Intakes well above the RDA are safe and well tolerated, and the old worry that high protein damages healthy kidneys is not supported by evidence. The real ceiling is practical: beyond roughly 2.2 g per kilogram there is little extra benefit for muscle, and those calories are better spent elsewhere. People with existing kidney disease are the exception and should follow medical guidance." },
      { question: "Should protein be based on body weight or lean mass?", answer: "This tool uses total body weight for simplicity, which works well for most people. If you carry a lot of body fat, however, a target based on lean mass or goal weight is more accurate, because fat tissue has little protein requirement. In that case, calculating against your estimated lean body mass avoids setting a needlessly high figure. For lean and average builds, total weight is fine." },
      { question: "Does timing my protein across the day matter?", answer: "Total daily intake matters most, but spreading protein across three to five meals of 20 to 40 grams each does modestly improve muscle protein synthesis compared with one large serving. Aim for a protein source at each main meal rather than obsessing over exact windows. The post-workout anabolic window is far wider than once believed, so hitting your daily total is the real priority." },
      { question: "Can I hit these targets on a plant-based diet?", answer: "Yes, though it takes more planning. Plant proteins are often lower in the amino acid leucine and less complete individually, so combine varied sources such as legumes, soy, grains, nuts and seeds across the day. Aiming toward the higher end of the range compensates for slightly lower digestibility. Soy, lentils, tofu, tempeh and seitan make reaching a high gram target on a vegan diet very achievable." },
    ],
    relatedCalculators: ["macro-calculator", "calorie-calculator", "tdee-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "International Society of Sports Nutrition position stand (2017)",
    sourceUrl: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8",
    slugEs: "calculadora-de-proteinas",
    titleEs: "Calculadora de Proteínas",
    shortDescriptionEs: "Encuentra tu objetivo diario de proteína.",
    seoTitleEs: "Calculadora de Proteínas — Ingesta Diaria de Proteína",
    metaDescriptionEs:
      "Calculadora de proteínas gratuita. Estima tus necesidades diarias de proteína en gramos según tu peso corporal y tu objetivo, con un rango recomendado.",
    primaryKeywordEs: "calculadora de proteínas",
    secondaryKeywordsEs: ["calculadora de ingesta de proteína", "gramos de proteína por día", "proteína diaria"],
    formulaExplanationEs:
      "El objetivo en gramos multiplica el peso corporal en kilogramos por un factor ligado a tu objetivo, porque las necesidades de proteína escalan con la cantidad de tejido magro a mantener o construir, que a su vez escala con el tamaño corporal. El mantenimiento sedentario ronda 0,8 g/kg, mientras que el entrenamiento, la ganancia muscular y la dieta empujan el factor hacia 1,6 a 2,4 g/kg para apoyar la reparación y preservar el músculo.",
    explanationEs:
      "La proteína es el macronutriente que tu cuerpo usa para construir y reparar músculo, producir enzimas y hormonas y sostener la función inmunitaria, y su requerimiento diario escala con el peso corporal y con lo activo que seas. Esta calculadora de proteínas traduce ese principio en un objetivo en gramos. El mínimo para un adulto sedentario es la Cantidad Diaria Recomendada de unos 0,8 g por kilogramo, fijada para prevenir la deficiencia, pero esa cifra nunca pretendió optimizar el entrenamiento ni la composición corporal. Una vez que haces ejercicio con regularidad, buscas ganar músculo o haces dieta intentando conservar músculo, la evidencia apunta mucho más alto, al rango de 1,2 a 2,2 g por kilogramo, con el extremo superior útil durante una pérdida de grasa agresiva. Esas cifras provienen del posicionamiento de la International Society of Sports Nutrition, que reunió estudios controlados de alimentación y entrenamiento de fuerza para establecer ingestas que maximizan la síntesis de proteína muscular. Una calculadora de proteínas basada en esa investigación da a atletas, levantadores y personas a dieta un objetivo fundamentado en evidencia y no en conjeturas. Una proteína más alta también ayuda a la pérdida de grasa al preservar la masa magra en un déficit calórico y al mantenerte más saciado entre comidas. Esta calculadora de proteínas muestra una cantidad recomendada para el objetivo elegido más un rango sensato alrededor, para que distribuyas el total entre tus comidas como mejor encaje con tu rutina y apetito.",
    exampleEs: {
      inputs: { system: "metric", weight: 70, goal: "build-muscle" },
      explanation: "Para construir músculo a 1,6–2,2 g/kg, una persona de 70 kg apunta a unos 112–154 g/día (alrededor de 133 g).",
    },
    faqsEs: [
      { question: "¿Cuánta proteína necesito al día?", answer: "Depende de tu objetivo. Un adulto sedentario necesita unos 0,8 g por kilogramo de peso corporal para evitar la deficiencia, pero las personas activas se benefician de 1,2 a 2,0, y quienes construyen músculo o hacen dieta intensa rinden mejor con 1,6 a 2,4. Para una persona de 70 kg eso abarca de 84 a 168 gramos al día. Esta herramienta fija el objetivo según el objetivo que elijas." },
      { question: "¿Comer demasiada proteína puede dañarte?", answer: "Para adultos sanos, no. Ingestas muy por encima de la CDR son seguras y bien toleradas, y la vieja preocupación de que la proteína alta daña riñones sanos no está respaldada por la evidencia. El verdadero techo es práctico: más allá de unos 2,2 g por kilogramo hay poco beneficio extra para el músculo. Las personas con enfermedad renal existente son la excepción y deben seguir orientación médica." },
      { question: "¿La proteína debe basarse en el peso corporal o en la masa magra?", answer: "Esta herramienta usa el peso corporal total por simplicidad, lo que funciona bien para la mayoría. Sin embargo, si cargas mucha grasa corporal, un objetivo basado en la masa magra o el peso objetivo es más preciso, porque el tejido graso tiene poco requerimiento de proteína. En ese caso, calcular contra tu masa magra estimada evita fijar una cifra innecesariamente alta. Para constituciones magras y promedio, el peso total sirve." },
      { question: "¿Importa el momento de la proteína a lo largo del día?", answer: "La ingesta diaria total importa más, pero repartir la proteína en tres a cinco comidas de 20 a 40 gramos cada una mejora modestamente la síntesis de proteína muscular frente a una sola ración grande. Apunta a una fuente de proteína en cada comida principal en lugar de obsesionarte con ventanas exactas. La ventana anabólica tras el ejercicio es mucho más amplia de lo que se creía, así que alcanzar tu total diario es la verdadera prioridad." },
      { question: "¿Puedo alcanzar estos objetivos con una dieta basada en plantas?", answer: "Sí, aunque requiere más planificación. Las proteínas vegetales suelen ser más bajas en el aminoácido leucina y menos completas individualmente, así que combina fuentes variadas como legumbres, soja, cereales, frutos secos y semillas a lo largo del día. Apuntar al extremo alto del rango compensa la digestibilidad algo menor. La soja, las lentejas, el tofu, el tempeh y el seitán hacen muy alcanzable un objetivo alto en gramos con dieta vegana." },
    ],
  },
  {
    id: "macro",
    slug: "macro-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Macro Calculator",
    shortDescription: "Split daily calories into protein, carbs and fat.",
    seoTitle: "Macro Calculator — Protein, Carbs & Fat Split",
    metaDescription:
      "Free macro calculator. Split your daily calories into grams of protein, carbohydrates and fat using popular macronutrient ratios.",
    primaryKeyword: "macro calculator",
    secondaryKeywords: ["macronutrient calculator", "iifym calculator", "carbs protein fat"],
    fields: [
      { id: "calories", label: "Daily calories", type: "number", unit: "kcal", placeholder: "2200", required: true, span: 1, min: 0 },
      {
        id: "split", label: "Macro split", type: "select", required: true, span: 1, defaultValue: "balanced",
        options: [
          { value: "balanced", label: "Balanced (40C / 30P / 30F)" },
          { value: "high-protein", label: "High protein (30C / 40P / 30F)" },
          { value: "low-carb", label: "Low carb (20C / 40P / 40F)" },
          { value: "keto", label: "Keto (5C / 30P / 65F)" },
        ],
      },
    ],
    results: [
      { id: "protein", label: "Protein", format: "number", decimals: 0, unit: "g", isPrimary: true },
      { id: "carbs", label: "Carbohydrates", format: "number", decimals: 0, unit: "g", isPrimary: false },
      { id: "fat", label: "Fat", format: "number", decimals: 0, unit: "g", isPrimary: false },
    ],
    formula: "Protein & carbs = 4 kcal/g, fat = 9 kcal/g; grams = calories × ratio ÷ kcal-per-gram",
    explanation:
      "Macronutrients, the protein, carbohydrate and fat in your diet, are what actually supply your calories, and a macro calculator splits a daily calorie figure into gram targets for each of the three. This matters because the same calorie total can be assembled in very different ways, and the balance influences muscle retention, energy levels, satiety and how well a diet fits your life. The conversion rests on the Atwater energy factors, the values chemist Wilbur Atwater established over a century ago by burning foods in a calorimeter and measuring digestibility: protein and carbohydrate each yield about 4 kilocalories per gram, fat about 9. Those same factors underpin the U.S. Dietary Guidelines and every nutrition label. This macro calculator takes your calories, applies the percentage split you choose, and divides each share by the right energy factor to return grams. People use a macro calculator to structure a diet around a goal: a higher-protein split to hold muscle while cutting, a lower-carb or keto split by preference, or a balanced split for general eating. Because protein and carbs share the same energy density while fat carries more than double, shifting the ratio changes the gram amounts substantially. Treat these gram figures as flexible daily targets to aim near, not rigid quotas you must hit to the gram.",
    formulaExplanation:
      "Each macro is converted using its Atwater factor, the energy it releases when metabolised. Protein and carbohydrate yield about 4 kcal per gram and fat about 9, because fat's chemical bonds store more than twice the energy. To find grams, the calculator takes each macro's share of calories and divides by its factor, so a 300 kcal fat allotment becomes about 33 g while 300 kcal of carbs becomes 75 g.",
    example: {
      inputs: { calories: 2200, split: "balanced" },
      explanation: "At 40/30/30: carbs = 2200×0.40÷4 = 220 g, protein = 2200×0.30÷4 = 165 g, fat = 2200×0.30÷9 ≈ 73 g.",
    },
    faqs: [
      { question: "Which macro split is best for weight loss?", answer: "No single ratio is magic; total calories drive fat loss, and the best split is the one you can sustain. That said, a higher-protein split helps most when dieting, because protein preserves muscle in a deficit and keeps you full. Beyond hitting adequate protein, whether you favour carbs or fat is mostly personal preference and performance. Pick the balance that leaves you satisfied and energetic enough to stay consistent." },
      { question: "Why does fat have 9 calories per gram?", answer: "Fat is more energy-dense because its molecular structure, long chains of carbon and hydrogen with little oxygen, stores more chemical energy per gram than protein or carbohydrate, which each release about 4 calories. This is why the body uses fat as its main long-term energy reserve. It also means fatty foods pack more calories into a smaller volume, worth remembering when portioning oils, nuts and butter." },
      { question: "Do I need to hit my macros exactly?", answer: "No. Getting within about five to ten grams of each target is more than enough for any practical goal. Chasing perfect precision daily adds stress without real benefit, since your needs vary a little day to day anyway. Protein is the macro worth prioritising; carbs and fat can flex around it based on the day's meals. Treat the numbers as a helpful guide, not a strict rulebook." },
      { question: "What is a good macro split for building muscle?", answer: "Prioritise protein first, around 1.6 to 2.2 g per kilogram, then fill remaining calories with enough carbohydrate to fuel training. A balanced split of roughly 40 percent carbs, 30 percent protein and 30 percent fat works well for many, though carbs often go higher for those training hard. The key is a modest calorie surplus with ample protein; the exact carb-to-fat balance is largely preference." },
      { question: "How do I count macros for mixed or packaged foods?", answer: "Read the nutrition label, which lists protein, carbohydrate and fat per serving, and log the amount you actually eat. For whole foods without labels, a food-tracking app with a database handles the lookup. Weighing portions with a kitchen scale is far more accurate than eyeballing, especially for calorie-dense foods. Over time you will learn common values and can estimate familiar meals quickly and reliably." },
    ],
    relatedCalculators: ["calorie-calculator", "protein-calculator", "tdee-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "U.S. Dietary Guidelines / Atwater energy factors",
    sourceUrl: "https://www.dietaryguidelines.gov/",
    slugEs: "calculadora-de-macros",
    titleEs: "Calculadora de Macros",
    shortDescriptionEs: "Divide las calorías diarias en proteína, carbohidratos y grasa.",
    seoTitleEs: "Calculadora de Macros — Reparto de Proteína, Carbohidratos y Grasa",
    metaDescriptionEs:
      "Calculadora de macros gratuita. Divide tus calorías diarias en gramos de proteína, carbohidratos y grasa usando ratios de macronutrientes populares.",
    primaryKeywordEs: "calculadora de macros",
    secondaryKeywordsEs: ["calculadora de macronutrientes", "calculadora iifym", "carbohidratos proteína grasa"],
    formulaExplanationEs:
      "Cada macro se convierte usando su factor de Atwater, la energía que libera al metabolizarse. La proteína y los carbohidratos aportan unas 4 kcal por gramo y la grasa unas 9, porque los enlaces químicos de la grasa almacenan más del doble de energía. Para hallar los gramos, la calculadora toma la porción de calorías de cada macro y la divide por su factor, así 300 kcal de grasa son unos 33 g mientras que 300 kcal de carbohidratos son 75 g.",
    explanationEs:
      "Los macronutrientes, la proteína, los carbohidratos y la grasa de tu dieta, son lo que en realidad aporta tus calorías, y una calculadora de macros divide una cifra calórica diaria en objetivos en gramos para cada uno de los tres. Esto importa porque el mismo total de calorías puede armarse de maneras muy distintas, y el equilibrio influye en la retención muscular, los niveles de energía, la saciedad y en qué tan bien encaja una dieta en tu vida. La conversión se apoya en los factores energéticos de Atwater, los valores que el químico Wilbur Atwater estableció hace más de un siglo quemando alimentos en un calorímetro y midiendo la digestibilidad: la proteína y los carbohidratos aportan cada uno unas 4 kilocalorías por gramo, la grasa unas 9. Esos mismos factores sustentan las Guías Alimentarias de EE. UU. y toda etiqueta nutricional. Esta calculadora de macros toma tus calorías, aplica el reparto porcentual que elijas y divide cada porción por el factor energético correcto para devolver gramos. La gente usa una calculadora de macros para estructurar una dieta en torno a un objetivo: un reparto más alto en proteína para conservar músculo en un déficit, un reparto bajo en carbohidratos o keto por preferencia, o un reparto equilibrado para comer en general. Como la proteína y los carbohidratos comparten densidad energética mientras la grasa carga más del doble, cambiar el ratio altera los gramos de forma notable. Trata estas cifras en gramos como objetivos diarios flexibles a los que acercarte, no como cuotas rígidas.",
    exampleEs: {
      inputs: { calories: 2200, split: "balanced" },
      explanation: "A 40/30/30: carbohidratos = 2200×0,40÷4 = 220 g, proteína = 2200×0,30÷4 = 165 g, grasa = 2200×0,30÷9 ≈ 73 g.",
    },
    faqsEs: [
      { question: "¿Qué reparto de macros es mejor para perder peso?", answer: "Ningún ratio es mágico; las calorías totales impulsan la pérdida de grasa, y el mejor reparto es el que puedas mantener. Dicho esto, un reparto más alto en proteína ayuda más al hacer dieta, porque la proteína preserva el músculo en un déficit y te mantiene saciado. Más allá de alcanzar suficiente proteína, favorecer carbohidratos o grasa es sobre todo preferencia personal. Elige el equilibrio que te deje satisfecho y con energía para ser constante." },
      { question: "¿Por qué la grasa tiene 9 calorías por gramo?", answer: "La grasa es más densa en energía porque su estructura molecular, largas cadenas de carbono e hidrógeno con poco oxígeno, almacena más energía química por gramo que la proteína o los carbohidratos, que liberan unas 4 calorías cada uno. Por eso el cuerpo usa la grasa como su principal reserva de energía a largo plazo. También significa que los alimentos grasos concentran más calorías en menos volumen, útil al porcionar aceites, frutos secos y mantequilla." },
      { question: "¿Necesito alcanzar mis macros con exactitud?", answer: "No. Quedar dentro de unos cinco a diez gramos de cada objetivo es más que suficiente para cualquier meta práctica. Perseguir precisión perfecta a diario añade estrés sin beneficio real, ya que tus necesidades varían un poco de un día a otro de todos modos. La proteína es el macro que conviene priorizar; los carbohidratos y la grasa pueden flexibilizarse a su alrededor. Trata los números como una guía útil, no como un reglamento estricto." },
      { question: "¿Cuál es un buen reparto de macros para ganar músculo?", answer: "Prioriza la proteína primero, en torno a 1,6 a 2,2 g por kilogramo, y luego llena las calorías restantes con suficiente carbohidrato para alimentar el entrenamiento. Un reparto equilibrado de aproximadamente 40 por ciento de carbohidratos, 30 por ciento de proteína y 30 por ciento de grasa funciona bien para muchos, aunque los carbohidratos suelen subir para quienes entrenan duro. La clave es un superávit calórico modesto con amplia proteína." },
      { question: "¿Cómo cuento macros de alimentos mixtos o envasados?", answer: "Lee la etiqueta nutricional, que indica proteína, carbohidratos y grasa por porción, y registra la cantidad que realmente comes. Para alimentos integrales sin etiqueta, una app de registro de comidas con base de datos resuelve la búsqueda. Pesar las porciones con una báscula de cocina es mucho más preciso que calcular a ojo, sobre todo con alimentos densos en calorías. Con el tiempo aprenderás valores comunes y estimarás comidas familiares con rapidez." },
    ],
  },
  {
    id: "water-intake",
    slug: "water-intake-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Water Intake Calculator",
    shortDescription: "Estimate how much water to drink daily.",
    seoTitle: "Water Intake Calculator — Daily Hydration Needs",
    metaDescription:
      "Free water intake calculator. Estimate your daily water needs from body weight and exercise, in litres, millilitres and cups.",
    primaryKeyword: "water intake calculator",
    secondaryKeywords: ["daily water intake", "how much water should i drink", "hydration calculator"],
    fields: [
      systemField,
      { id: "weight", label: "Body weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      { id: "activity", label: "Exercise", type: "number", unit: "min", placeholder: "45", required: false, span: 1, min: 0, helpText: "Minutes of exercise per day." },
    ],
    results: [
      { id: "litres", label: "Daily water", format: "number", decimals: 2, unit: "L", isPrimary: true },
      { id: "ml", label: "In millilitres", format: "number", decimals: 0, unit: "ml", isPrimary: false },
      { id: "cups", label: "In cups (240 ml)", format: "number", decimals: 1, unit: "cups", isPrimary: false },
    ],
    formula: "≈ 33 ml per kg of body weight, plus ~350 ml per 30 min of exercise",
    explanation:
      "Water makes up roughly 60 percent of the adult body and drives nearly every physiological process, from regulating temperature and transporting nutrients to cushioning joints and clearing waste through the kidneys. A water intake calculator estimates how much fluid you should take in across a day to replace what you continually lose through urine, breathing, sweat and skin. This tool scales the estimate to body size, using a common guideline of around 33 ml per kilogram of body weight, then adds an allowance for the extra sweat losses that exercise brings. Larger bodies and more active days simply need more fluid, which is why a personalised water intake calculator beats blanket advice like a fixed number of glasses. The U.S. National Academies, which set the Dietary Reference Intakes for water, note that total needs vary widely and that most healthy people meet them by drinking to thirst and eating normally. It is worth remembering that around a fifth of daily water comes from food, and that other beverages count too, so the figure shown here is total fluid, not water you must drink on its own. Athletes, people in hot climates and anyone prone to forgetting to drink use a water intake calculator as a practical daily reminder, adjusting for climate, health and diet.",
    formulaExplanation:
      "The estimate scales with body weight because larger bodies hold more water and lose more through metabolism, skin and breathing, so fluid needs rise roughly in proportion to mass, hence about 33 ml per kilogram. Exercise adds a further allowance, roughly 350 ml per half hour, to replace the water lost as sweat while the body cools itself during sustained activity.",
    example: {
      inputs: { system: "metric", weight: 70, activity: 45 },
      explanation: "70 × 33 = 2,310 ml, plus ~525 ml for 45 min of exercise ≈ 2.84 L/day.",
    },
    faqs: [
      { question: "How much water should I drink a day?", answer: "It depends on your size, activity and climate rather than a fixed number. The U.S. National Academies suggest total daily fluid around 3.7 litres for men and 2.7 for women, but that includes water from food and all beverages. This tool personalises the estimate to your weight and exercise. The simplest real-world guide is to drink enough that you rarely feel thirsty and your urine stays pale yellow." },
      { question: "Does coffee, tea or juice count toward hydration?", answer: "Yes. Despite the persistent myth, moderate caffeine does not dehydrate you; coffee and tea are still net hydrating, and juice, milk and soft drinks all contribute fluid. Water-rich foods such as fruit, vegetables and soup add a meaningful share too. Plain water remains the best default because it has no calories or sugar, but nearly everything you drink helps you reach your total." },
      { question: "Can you drink too much water?", answer: "Rarely, but yes. Drinking a very large volume in a short time can dilute blood sodium, a dangerous condition called hyponatraemia that mainly affects endurance athletes overdrinking during events. For everyday life the risk is minimal if you simply drink to thirst and spread intake through the day rather than forcing large amounts at once. Healthy kidneys comfortably handle normal, steady fluid intake." },
      { question: "How do I know if I am dehydrated?", answer: "The clearest everyday signs are thirst, dark yellow urine, infrequent urination, dry mouth, headache and fatigue. Urine colour is the most practical check: pale straw means well hydrated, deep amber means drink more. Thirst is a reliable prompt for most people, though older adults feel it less keenly and should drink proactively. Dizziness or a rapid heartbeat signals more serious dehydration that needs prompt fluids." },
      { question: "Do I need more water when exercising or in hot weather?", answer: "Definitely. Sweating during exercise or in heat can cost half a litre to over a litre of fluid per hour, which must be replaced to maintain performance and safe body temperature. This tool adds roughly 350 ml per half hour of exercise for that reason. In hot or humid conditions, or at altitude, raise your intake further and drink before you feel thirsty, since thirst lags behind actual loss." },
    ],
    relatedCalculators: ["calorie-calculator", "bmr-calculator", "running-pace-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "U.S. National Academies (2005), Dietary Reference Intakes for Water",
    sourceUrl: "https://nap.nationalacademies.org/catalog/10925",
    slugEs: "calculadora-de-consumo-de-agua",
    titleEs: "Calculadora de Consumo de Agua",
    shortDescriptionEs: "Estima cuánta agua beber al día.",
    seoTitleEs: "Calculadora de Consumo de Agua — Necesidades Diarias de Hidratación",
    metaDescriptionEs:
      "Calculadora de consumo de agua gratuita. Estima tus necesidades diarias de agua a partir del peso corporal y el ejercicio, en litros, mililitros y vasos.",
    primaryKeywordEs: "calculadora de consumo de agua",
    secondaryKeywordsEs: ["consumo diario de agua", "cuánta agua debo beber", "calculadora de hidratación"],
    formulaExplanationEs:
      "La estimación escala con el peso corporal porque los cuerpos más grandes retienen más agua y pierden más por el metabolismo, la piel y la respiración, así que las necesidades de líquido suben aproximadamente en proporción a la masa, de ahí unos 33 ml por kilogramo. El ejercicio añade una cantidad extra, unos 350 ml por media hora, para reponer el agua perdida como sudor mientras el cuerpo se enfría durante la actividad sostenida.",
    explanationEs:
      "El agua constituye alrededor del 60 por ciento del cuerpo adulto e impulsa casi todos los procesos fisiológicos, desde regular la temperatura y transportar nutrientes hasta amortiguar las articulaciones y eliminar desechos a través de los riñones. Una calculadora de consumo de agua estima cuánto líquido deberías ingerir a lo largo del día para reponer lo que pierdes continuamente por la orina, la respiración, el sudor y la piel. Esta herramienta escala la estimación al tamaño corporal, usando una guía común de unos 33 ml por kilogramo de peso corporal, y luego añade una cantidad por las pérdidas extra de sudor que trae el ejercicio. Los cuerpos más grandes y los días más activos simplemente necesitan más líquido, por eso una calculadora de consumo de agua personalizada supera a consejos genéricos como un número fijo de vasos. Las Academias Nacionales de EE. UU., que fijan las Ingestas Dietéticas de Referencia de agua, señalan que las necesidades totales varían mucho y que la mayoría de las personas sanas las cubren bebiendo según la sed y comiendo con normalidad. Conviene recordar que alrededor de una quinta parte del agua diaria proviene de la comida, y que otras bebidas también cuentan, así que la cifra mostrada aquí es líquido total, no agua que debas beber por sí sola. Atletas, personas en climas cálidos y quienes tienden a olvidar beber usan una calculadora de consumo de agua como recordatorio práctico, ajustando por clima, salud y dieta.",
    exampleEs: {
      inputs: { system: "metric", weight: 70, activity: 45 },
      explanation: "70 × 33 = 2.310 ml, más ~525 ml por 45 min de ejercicio ≈ 2,84 L/día.",
    },
    faqsEs: [
      { question: "¿Cuánta agua debo beber al día?", answer: "Depende de tu tamaño, actividad y clima más que de un número fijo. Las Academias Nacionales de EE. UU. sugieren un líquido diario total de unos 3,7 litros para hombres y 2,7 para mujeres, pero eso incluye el agua de la comida y de todas las bebidas. Esta herramienta personaliza la estimación a tu peso y ejercicio. La guía más sencilla es beber lo suficiente para rara vez sentir sed y que tu orina quede amarillo pálido." },
      { question: "¿El café, el té o el zumo cuentan para la hidratación?", answer: "Sí. Pese al mito persistente, la cafeína moderada no te deshidrata; el café y el té siguen siendo netamente hidratantes, y el zumo, la leche y los refrescos aportan líquido. Los alimentos ricos en agua como la fruta, la verdura y la sopa suman una parte significativa también. El agua sigue siendo la mejor opción por defecto porque no tiene calorías ni azúcar, pero casi todo lo que bebes ayuda a alcanzar tu total." },
      { question: "¿Se puede beber demasiada agua?", answer: "Rara vez, pero sí. Beber un volumen muy grande en poco tiempo puede diluir el sodio de la sangre, una condición peligrosa llamada hiponatremia que afecta sobre todo a atletas de resistencia que beben en exceso durante los eventos. Para la vida diaria el riesgo es mínimo si simplemente bebes según la sed y repartes la ingesta a lo largo del día en lugar de forzar grandes cantidades de golpe. Los riñones sanos manejan bien una ingesta normal." },
      { question: "¿Cómo sé si estoy deshidratado?", answer: "Los signos cotidianos más claros son la sed, la orina amarillo oscuro, orinar poco, la boca seca, el dolor de cabeza y la fatiga. El color de la orina es la comprobación más práctica: amarillo pajizo pálido significa bien hidratado, ámbar profundo significa beber más. La sed es un buen aviso para la mayoría, aunque los adultos mayores la sienten menos y deben beber proactivamente. El mareo o el pulso rápido indican deshidratación más seria." },
      { question: "¿Necesito más agua al hacer ejercicio o con calor?", answer: "Sin duda. Sudar durante el ejercicio o con calor puede costar de medio litro a más de un litro de líquido por hora, que debe reponerse para mantener el rendimiento y una temperatura corporal segura. Esta herramienta añade unos 350 ml por media hora de ejercicio por esa razón. En condiciones cálidas o húmedas, o en altitud, sube tu ingesta más y bebe antes de sentir sed, ya que la sed llega tarde." },
    ],
  },
  {
    id: "running-pace",
    slug: "running-pace-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Running Pace Calculator",
    shortDescription: "Find your pace per km and per mile.",
    seoTitle: "Running Pace Calculator — Pace per KM & Mile",
    metaDescription:
      "Free running pace calculator. Enter distance and time to get your pace per kilometre and per mile, plus average speed.",
    primaryKeyword: "running pace calculator",
    secondaryKeywords: ["pace calculator", "race pace calculator", "minutes per mile"],
    fields: [
      { id: "distance", label: "Distance", type: "number", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      {
        id: "unit", label: "Distance unit", type: "select", required: true, span: 1, defaultValue: "km",
        options: [
          { value: "km", label: "Kilometres" },
          { value: "mi", label: "Miles" },
        ],
      },
      { id: "hours", label: "Hours", type: "number", placeholder: "0", required: false, span: 1, min: 0 },
      { id: "minutes", label: "Minutes", type: "number", placeholder: "50", required: true, span: 1, min: 0 },
      { id: "seconds", label: "Seconds", type: "number", placeholder: "0", required: false, span: 2, min: 0 },
    ],
    results: [
      { id: "pacePerKm", label: "Pace per km", format: "text", isPrimary: true },
      { id: "pacePerMile", label: "Pace per mile", format: "text", isPrimary: false },
      { id: "speedKmh", label: "Average speed", format: "number", decimals: 2, unit: "km/h", isPrimary: false },
    ],
    formula: "Pace = total time ÷ distance; converted between km and miles (1 mi = 1.609 km)",
    explanation:
      "Pace is the time it takes to cover one unit of distance, usually expressed as minutes and seconds per kilometre or per mile, and it is the language runners use to describe and control their effort. A running pace calculator takes the distance you covered and the total time it took, then divides one by the other to return that per-unit figure, along with your average speed. Pace is more useful than raw finish time for runners because it lets you compare efforts across different distances and plan how fast to go on race day. This running pace calculator reports both minutes per kilometre and minutes per mile, converting between the two using the fixed relationship that one mile equals 1.609 kilometres, and also gives average speed in kilometres per hour. Runners lean on a running pace calculator to set even splits for a target finish time, to check whether a training run hit the intended zone, and to convert paces when following a plan written in different units. Coaches use it to prescribe easy, tempo and interval paces. Because the arithmetic is exact, the output is only as accurate as the distance and time you feed it, so measure your route carefully. Use it to plan race splits, pace long runs, and track improvement.",
    formulaExplanation:
      "Pace is total time divided by distance, the inverse of speed, which is why a smaller pace number means a faster runner. Converting between units uses the fixed ratio that one mile equals 1.609 kilometres, so pace per mile is pace per kilometre multiplied by 1.609. Average speed is simply distance divided by time, the reciprocal relationship expressed as distance per hour.",
    example: {
      inputs: { distance: 10, unit: "km", hours: 0, minutes: 50, seconds: 0 },
      explanation: "10 km in 50:00 is 5:00 per km, about 8:03 per mile, and 12.0 km/h.",
    },
    faqs: [
      { question: "How do I convert running pace between km and miles?", answer: "Multiply your pace per kilometre by 1.609 to get pace per mile, since a mile is 1.609 km longer than a kilometre and therefore takes proportionally more time. For example, 5:00 per km becomes about 8:03 per mile. To go the other way, divide pace per mile by 1.609. This tool does both conversions automatically whenever you enter a distance and time." },
      { question: "What is a good running pace for a beginner?", answer: "There is no universal figure, because pace depends on fitness, age, terrain and goals. Many new runners settle somewhere around 7 to 8 minutes per kilometre for easy runs, but the more useful benchmark is your own trend. A common guide is that easy runs should feel conversational, where you can speak in full sentences. Focus on improving your personal pace rather than matching anyone else." },
      { question: "What is the difference between pace and speed?", answer: "They describe the same thing inverted. Pace is time per unit of distance, such as 5 minutes per kilometre, while speed is distance per unit of time, such as 12 kilometres per hour. Runners usually think in pace because it maps directly onto splits and race planning, whereas cyclists and treadmills favour speed. A faster runner has a lower pace number but a higher speed number." },
      { question: "Can I use pace to predict a race time?", answer: "You can estimate a finish by multiplying your target pace by the race distance, which is ideal for planning even splits. Predicting across distances is trickier, because pace naturally slows as distance grows, so your 5K pace will not hold for a marathon. Dedicated race predictors apply a fatigue factor for that. This tool gives your exact average pace, a solid foundation for either use." },
      { question: "How do I run even splits using pace?", answer: "Decide your goal finish time, divide it by the race distance to get your target pace, then aim to hit that same pace each kilometre or mile rather than starting fast and fading. Even or slightly negative splits, where the second half is a touch quicker, tend to produce the best results. Enter your goal time and distance here to see the exact pace you need to hold." },
    ],
    relatedCalculators: ["calorie-calculator", "water-intake-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard athletics pace definition",
    slugEs: "calculadora-de-ritmo-de-carrera",
    titleEs: "Calculadora de Ritmo de Carrera",
    shortDescriptionEs: "Encuentra tu ritmo por km y por milla.",
    seoTitleEs: "Calculadora de Ritmo de Carrera — Ritmo por KM y Milla",
    metaDescriptionEs:
      "Calculadora de ritmo de carrera gratuita. Introduce distancia y tiempo para obtener tu ritmo por kilómetro y por milla, más la velocidad media.",
    primaryKeywordEs: "calculadora de ritmo de carrera",
    secondaryKeywordsEs: ["calculadora de ritmo", "calculadora de ritmo de competición", "minutos por milla"],
    formulaExplanationEs:
      "El ritmo es el tiempo total dividido por la distancia, el inverso de la velocidad, por lo que un número de ritmo más pequeño significa un corredor más rápido. Convertir entre unidades usa la razón fija de que una milla equivale a 1,609 kilómetros, así que el ritmo por milla es el ritmo por kilómetro multiplicado por 1,609. La velocidad media es simplemente la distancia dividida por el tiempo, la relación recíproca expresada como distancia por hora.",
    explanationEs:
      "El ritmo es el tiempo que se tarda en cubrir una unidad de distancia, normalmente expresado en minutos y segundos por kilómetro o por milla, y es el lenguaje que los corredores usan para describir y controlar su esfuerzo. Una calculadora de ritmo de carrera toma la distancia que recorriste y el tiempo total que te llevó, y luego divide una entre el otro para devolver esa cifra por unidad, junto con tu velocidad media. El ritmo es más útil que el tiempo bruto de meta para los corredores porque permite comparar esfuerzos entre distintas distancias y planificar a qué velocidad ir el día de la carrera. Esta calculadora de ritmo de carrera reporta tanto minutos por kilómetro como minutos por milla, convirtiendo entre ambos con la relación fija de que una milla equivale a 1,609 kilómetros, y también da la velocidad media en kilómetros por hora. Los corredores se apoyan en una calculadora de ritmo de carrera para fijar parciales uniformes hacia un tiempo objetivo, para comprobar si un entrenamiento cayó en la zona buscada y para convertir ritmos al seguir un plan escrito en otras unidades. Los entrenadores la usan para prescribir ritmos fáciles, de tempo y de intervalos. Como la aritmética es exacta, el resultado es solo tan preciso como la distancia y el tiempo que introduzcas, así que mide tu ruta con cuidado. Úsala para planificar parciales de carrera, marcar el ritmo de tiradas largas y seguir tu mejora.",
    exampleEs: {
      inputs: { distance: 10, unit: "km", hours: 0, minutes: 50, seconds: 0 },
      explanation: "10 km en 50:00 son 5:00 por km, unos 8:03 por milla, y 12,0 km/h.",
    },
    faqsEs: [
      { question: "¿Cómo convierto el ritmo de carrera entre km y millas?", answer: "Multiplica tu ritmo por kilómetro por 1,609 para obtener el ritmo por milla, ya que una milla es 1,609 km más larga que un kilómetro y por tanto lleva proporcionalmente más tiempo. Por ejemplo, 5:00 por km se convierte en unos 8:03 por milla. Para hacer lo contrario, divide el ritmo por milla entre 1,609. Esta herramienta hace ambas conversiones automáticamente en cuanto introduces una distancia y un tiempo." },
      { question: "¿Cuál es un buen ritmo de carrera para un principiante?", answer: "No hay una cifra universal, porque el ritmo depende de la forma física, la edad, el terreno y los objetivos. Muchos corredores nuevos se sitúan alrededor de 7 a 8 minutos por kilómetro en tiradas fáciles, pero la referencia más útil es tu propia tendencia. Una guía común es que las tiradas fáciles deben sentirse conversacionales, donde puedes hablar en frases completas. Céntrate en mejorar tu ritmo personal más que en igualar a otros." },
      { question: "¿Cuál es la diferencia entre ritmo y velocidad?", answer: "Describen lo mismo invertido. El ritmo es tiempo por unidad de distancia, como 5 minutos por kilómetro, mientras que la velocidad es distancia por unidad de tiempo, como 12 kilómetros por hora. Los corredores suelen pensar en ritmo porque se traduce directamente en parciales y planificación de carrera, mientras que ciclistas y cintas prefieren la velocidad. Un corredor más rápido tiene un número de ritmo menor pero un número de velocidad mayor." },
      { question: "¿Puedo usar el ritmo para predecir un tiempo de carrera?", answer: "Puedes estimar una meta multiplicando tu ritmo objetivo por la distancia de la carrera, lo que es ideal para planificar parciales uniformes. Predecir entre distancias es más complicado, porque el ritmo se ralentiza de forma natural al crecer la distancia, así que tu ritmo de 5K no se sostendrá en un maratón. Los predictores dedicados aplican un factor de fatiga para eso. Esta herramienta da tu ritmo medio exacto, una base sólida." },
      { question: "¿Cómo corro parciales uniformes usando el ritmo?", answer: "Decide tu tiempo de meta objetivo, divídelo por la distancia de la carrera para obtener tu ritmo objetivo, y luego apunta a mantener ese mismo ritmo en cada kilómetro o milla en lugar de empezar rápido y desfallecer. Parciales uniformes o ligeramente negativos, donde la segunda mitad es algo más rápida, tienden a producir los mejores resultados. Introduce tu tiempo objetivo y distancia aquí para ver el ritmo exacto que necesitas mantener." },
    ],
  },
];
