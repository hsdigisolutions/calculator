import type { CalculatorDefinition, CalculatorField } from "../types";

const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};

export const healthR7Calculators: CalculatorDefinition[] = [
  {
    id: "calories-burned-activity",
    slug: "calories-burned-by-activity-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Calories Burned by Activity Calculator",
    shortDescription: "Estimate calories burned from an activity's MET value, your weight and time.",
    seoTitle: "Calories Burned by Activity Calculator — MET Formula",
    metaDescription:
      "Free calories burned calculator. Estimate energy used during any exercise from its MET value, your body weight and how many minutes you were active.",
    primaryKeyword: "calories burned by activity calculator",
    secondaryKeywords: ["met calorie calculator", "exercise calories burned", "calories burned calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "metValue", label: "Activity MET value", type: "number", unit: "MET", placeholder: "8", required: true, span: 1, min: 0, step: 0.1, helpText: "e.g. walking ≈ 3.5, running ≈ 9.8, cycling ≈ 8." },
      { id: "minutes", label: "Duration", type: "number", unit: "minutes", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "caloriesBurned", label: "Calories burned", format: "number", decimals: 0, unit: "kcal", isPrimary: true },
    ],
    formula: "Calories = MET × 3.5 × weight(kg) ÷ 200 × minutes",
    explanation:
      "The calories burned by activity calculator turns any exercise into an energy figure using its MET value, the metabolic equivalent of task. One MET is the energy your body uses sitting quietly at rest, roughly 3.5 millilitres of oxygen per kilogram of body weight each minute, and every activity is rated as a multiple of that baseline. Walking briskly might be 3.5 METs, jogging around 7, and vigorous cycling or running 8 to 12, meaning they burn that many times more energy than resting. Because oxygen consumption relates directly to calories burned, multiplying an activity's MET value by your body weight and duration gives a solid estimate of the calories you have spent. A calories burned by activity calculator is useful whether you are managing weight, planning a training programme, or simply curious how a workout compares. Heavier people burn more calories doing the same activity because moving more mass costs more energy, which is why the formula scales with weight. Keep in mind the result is an estimate: real energy expenditure varies with fitness, efficiency, terrain, temperature and individual metabolism, and published MET values are population averages. Fitness trackers use similar logic but add heart-rate data. Use this figure to compare activities and guide planning rather than as a precise measurement, and remember that consistency across days matters far more than the exact number burned in any single session.",
    formulaExplanation:
      "The formula rests on the fact that one MET equals about 3.5 millilitres of oxygen consumed per kilogram of body weight per minute, and burning one litre of oxygen releases roughly five kilocalories. Multiplying MET by 3.5 and by your weight gives oxygen use per minute; dividing by 200 converts that oxygen volume into kilocalories, and multiplying by the minutes exercised totals the energy spent. Heavier bodies and longer or more intense sessions all raise the result proportionally.",
    example: {
      inputs: { weightKg: 70, metValue: 8, minutes: 30 },
      explanation: "For a 70 kg person doing an 8-MET activity for 30 minutes: 8 × 3.5 × 70 ÷ 200 × 30 = 294 kcal.",
    },
    faqs: [
      { question: "What is a MET value and where do I find one?", answer: "A MET, or metabolic equivalent of task, expresses how much energy an activity uses compared with sitting at rest, which is defined as one MET. Brisk walking is about 3.5 METs, general cycling around 8, and running roughly 9 to 12. Published compendiums of physical activities list MET values for hundreds of exercises, and many fitness apps display them. Choose the value that best matches your effort level for the closest estimate." },
      { question: "How accurate is a MET-based calorie estimate?", answer: "It is a reasonable approximation but not exact. The formula uses population-average MET values and assumes typical efficiency, so it cannot capture your individual fitness, movement economy, terrain, weather or body composition. Two people of the same weight doing the same workout can burn noticeably different amounts. Treat the number as a useful guide for comparing activities and planning, not as a precise measurement of your personal energy expenditure on that specific day." },
      { question: "Why does body weight affect calories burned?", answer: "Moving a heavier body requires more energy because there is more mass to accelerate, support and transport against gravity. That is why the formula multiplies by your weight in kilograms: a larger person burns more calories doing the identical activity than a lighter person over the same time. As you lose weight, the calories burned for a given activity fall slightly, which is one reason weight loss can gradually slow if intake is not adjusted." },
      { question: "Does this include the calories I would burn anyway at rest?", answer: "The MET formula estimates total energy used during the activity, which technically includes the one MET you would spend resting for that time. For most everyday planning this gross figure is fine. If you want the net calories attributable purely to the exercise, subtract your resting expenditure for the same minutes, roughly one MET. The difference is usually small for vigorous activity but more noticeable for light movement." },
      { question: "How can I use this to lose weight?", answer: "Weight change depends on the balance between calories eaten and calories burned. Knowing roughly how many calories an activity burns helps you plan a sustainable deficit alongside diet. Because about 7,700 kilocalories equal one kilogram of body fat, regular activity adds up meaningfully over weeks. However, exercise alone rarely creates a large deficit, and appetite often rises to compensate, so pair activity with mindful eating rather than relying on burning calories back through workouts." },
    ],
    relatedCalculators: ["tdee-calculator", "bmr-calculator", "steps-to-calories-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Compendium of Physical Activities (MET values)",
    sourceUrl: "https://pacompendium.com/",
    slugEs: "calculadora-de-calorias-quemadas-por-actividad",
    titleEs: "Calculadora de Calorías Quemadas por Actividad",
    shortDescriptionEs: "Estima las calorías quemadas a partir del valor MET de una actividad, tu peso y el tiempo.",
    seoTitleEs: "Calculadora de Calorías Quemadas por Actividad — Fórmula MET",
    metaDescriptionEs:
      "Calculadora gratuita de calorías quemadas. Estima la energía usada durante cualquier ejercicio a partir de su valor MET, tu peso corporal y los minutos que estuviste activo.",
    primaryKeywordEs: "calculadora de calorías quemadas por actividad",
    secondaryKeywordsEs: ["calculadora de calorías met", "calorías quemadas en ejercicio", "calculadora de calorías quemadas"],
    formulaExplanationEs:
      "La fórmula se basa en que un MET equivale a unos 3,5 mililitros de oxígeno consumidos por kilogramo de peso corporal por minuto, y quemar un litro de oxígeno libera aproximadamente cinco kilocalorías. Multiplicar el MET por 3,5 y por tu peso da el uso de oxígeno por minuto; dividir entre 200 convierte ese volumen de oxígeno en kilocalorías, y multiplicar por los minutos de ejercicio suma la energía total gastada. Los cuerpos más pesados y las sesiones más largas o intensas elevan el resultado de forma proporcional.",
    explanationEs:
      "La calculadora de calorías quemadas por actividad convierte cualquier ejercicio en una cifra de energía usando su valor MET, el equivalente metabólico de la tarea. Un MET es la energía que tu cuerpo usa sentado en reposo, aproximadamente 3,5 mililitros de oxígeno por kilogramo de peso corporal cada minuto, y cada actividad se califica como un múltiplo de esa base. Caminar rápido puede ser 3,5 METs, trotar alrededor de 7, y el ciclismo o la carrera vigorosa de 8 a 12, lo que significa que queman esa cantidad de veces más energía que el reposo. Como el consumo de oxígeno se relaciona directamente con las calorías quemadas, multiplicar el valor MET de una actividad por tu peso y duración da una buena estimación de las calorías gastadas. Una calculadora de calorías quemadas por actividad es útil tanto si controlas tu peso, planificas un entrenamiento o simplemente sientes curiosidad por comparar ejercicios. Las personas más pesadas queman más calorías haciendo la misma actividad porque mover más masa cuesta más energía, por eso la fórmula escala con el peso. Ten en cuenta que el resultado es una estimación: el gasto real varía con la condición física, la eficiencia, el terreno, la temperatura y el metabolismo individual, y los valores MET publicados son promedios de población. Usa esta cifra para comparar actividades y guiar la planificación más que como una medición precisa, y recuerda que la constancia entre días importa mucho más que el número exacto de una sola sesión.",
    exampleEs: {
      inputs: { weightKg: 70, metValue: 8, minutes: 30 },
      explanation: "Para una persona de 70 kg haciendo una actividad de 8 MET durante 30 minutos: 8 × 3,5 × 70 ÷ 200 × 30 = 294 kcal.",
    },
    faqsEs: [
      { question: "¿Qué es un valor MET y dónde lo encuentro?", answer: "Un MET, o equivalente metabólico de la tarea, expresa cuánta energía usa una actividad en comparación con estar sentado en reposo, definido como un MET. Caminar rápido es unos 3,5 METs, el ciclismo general alrededor de 8, y correr aproximadamente de 9 a 12. Los compendios publicados de actividades físicas listan valores MET para cientos de ejercicios, y muchas aplicaciones los muestran. Elige el valor que mejor se ajuste a tu nivel de esfuerzo para la estimación más cercana." },
      { question: "¿Qué precisión tiene una estimación de calorías basada en MET?", answer: "Es una aproximación razonable pero no exacta. La fórmula usa valores MET promedio de población y supone una eficiencia típica, por lo que no puede captar tu condición física individual, economía de movimiento, terreno, clima o composición corporal. Dos personas del mismo peso haciendo el mismo entrenamiento pueden quemar cantidades notablemente distintas. Trata el número como una guía útil para comparar actividades y planificar, no como una medición precisa de tu gasto personal ese día concreto." },
      { question: "¿Por qué el peso corporal afecta las calorías quemadas?", answer: "Mover un cuerpo más pesado requiere más energía porque hay más masa que acelerar, sostener y transportar contra la gravedad. Por eso la fórmula multiplica por tu peso en kilogramos: una persona más grande quema más calorías haciendo la misma actividad que una más ligera en el mismo tiempo. A medida que pierdes peso, las calorías quemadas en una actividad dada bajan ligeramente, una razón por la que la pérdida de peso puede frenarse si no se ajusta la ingesta." },
      { question: "¿Incluye esto las calorías que quemaría igualmente en reposo?", answer: "La fórmula MET estima la energía total usada durante la actividad, que técnicamente incluye el MET que gastarías en reposo ese tiempo. Para la mayoría de la planificación diaria esta cifra bruta está bien. Si quieres las calorías netas atribuibles solo al ejercicio, resta tu gasto en reposo por esos mismos minutos, aproximadamente un MET. La diferencia suele ser pequeña en actividad vigorosa pero más notable en movimiento ligero." },
      { question: "¿Cómo puedo usar esto para perder peso?", answer: "El cambio de peso depende del balance entre las calorías ingeridas y las quemadas. Saber aproximadamente cuántas calorías quema una actividad ayuda a planificar un déficit sostenible junto con la dieta. Como unas 7.700 kilocalorías equivalen a un kilogramo de grasa corporal, la actividad regular suma de forma significativa a lo largo de las semanas. Sin embargo, el ejercicio solo rara vez crea un gran déficit, y el apetito suele aumentar para compensar, así que combina la actividad con una alimentación consciente." },
    ],
  },
  {
    id: "body-frame-size",
    slug: "body-frame-size-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Body Frame Size Calculator",
    shortDescription: "Determine small, medium or large frame from height and wrist size.",
    seoTitle: "Body Frame Size Calculator — Small, Medium or Large",
    metaDescription:
      "Free body frame size calculator. Divide your height by your wrist circumference to classify your skeletal frame as small, medium or large.",
    primaryKeyword: "body frame size calculator",
    secondaryKeywords: ["frame size calculator", "wrist frame size", "small medium large frame"],
    fields: [
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
      { id: "wristCm", label: "Wrist circumference", type: "number", unit: "cm", placeholder: "17", required: true, span: 1, min: 0, step: 0.1 },
    ],
    results: [
      { id: "ratio", label: "Height-to-wrist ratio", format: "number", decimals: 1, isPrimary: false },
      { id: "frame", label: "Frame size", format: "text", isPrimary: true },
    ],
    formula: "Ratio = height ÷ wrist; small if r > 10.4, medium 9.6–10.4, large if r < 9.6",
    explanation:
      "Body frame size describes the underlying skeletal build you inherited, and it helps put weight and body-composition figures into fairer context. Two people of the same height can have very different bone structures, so a body frame size calculator classifies your frame as small, medium or large by comparing your height with the circumference of your wrist. The wrist is chosen because it carries very little fat or muscle, so its measurement mostly reflects bone size, making it a convenient proxy for overall skeletal build. This tool divides height by wrist circumference: a higher ratio means a slender skeleton relative to height, classed as a small frame, while a lower ratio indicates a heavier bone structure and a large frame, with medium in between. Knowing your frame size matters because ideal-weight tables and body mass index do not account for skeletal differences. A large-framed person naturally carries more weight in bone and supporting tissue and may sit at the higher end of a healthy weight range, whereas a small-framed person of the same height belongs lower. A body frame size calculator therefore refines how you interpret targets rather than serving as a health diagnosis itself. Measure your wrist just below the bony bump, on the hand side, snug against the skin, using the same units as your height. Treat frame size as a helpful adjustment to weight guidance, not a fixed rule, and combine it with other measures for a fuller picture of your body.",
    formulaExplanation:
      "The method works because wrist circumference tracks skeletal size closely while being almost free of fat and muscle, so dividing height by wrist gives a dimensionless ratio that expresses how slender or robust your frame is relative to your stature. A tall person with a thin wrist produces a high ratio and a small-frame classification, whereas a shorter person with a thick wrist yields a low ratio and a large frame. The 9.6 and 10.4 cut-points come from standard reference bands used to sort people into three frame categories.",
    example: {
      inputs: { heightCm: 180, wristCm: 16 },
      explanation: "180 ÷ 16 = 11.25, which is above 10.4, so this indicates a small frame.",
    },
    faqs: [
      { question: "Why use the wrist to judge frame size?", answer: "The wrist is mostly bone, tendon and skin with almost no fat or muscle to distort the measurement, so its circumference is a stable indicator of skeletal size that changes little with weight gain or loss. That reliability makes it a practical proxy for your overall bone structure. Other methods use elbow breadth, but the wrist is easier to measure accurately at home with just a flexible tape, which is why it is widely used." },
      { question: "How does frame size affect my ideal weight?", answer: "Standard ideal-weight tables assume an average build, but skeletal size shifts the healthy range. A large-framed person carries more bone and connective tissue, so their healthy weight sits toward the upper end of a range for their height, while a small-framed person belongs lower. Accounting for frame size prevents a naturally robust person from being labelled overweight, or a slight person from thinking a high-end weight is fine for them." },
      { question: "Can I change my body frame size?", answer: "Not meaningfully in adulthood. Frame size reflects your skeleton, which is largely set by genetics and finished growing after adolescence. You can change muscle, fat and overall weight through diet and training, but the length and thickness of your bones stay essentially fixed. That permanence is actually useful: because frame does not shift with weight, it provides a stable reference point for interpreting your weight and body-composition goals over time." },
      { question: "Where exactly should I measure my wrist?", answer: "Wrap a flexible tape around the smallest part of your wrist, just below the wrist bone toward the hand, on your dominant arm. Keep the tape snug against the skin but not tight enough to compress it, and read the measurement in the same units you used for your height. Measuring at the same spot each time gives consistent results. Avoid measuring over a watch or jewellery, which would inflate the figure." },
      { question: "Is frame size the same as body type?", answer: "No, though the ideas overlap. Frame size refers specifically to skeletal build, small, medium or large, based on bone dimensions. Body type, or somatotype, describes a broader pattern of build and metabolism, often labelled ectomorph, mesomorph or endomorph, which blends bone structure with muscularity and fat distribution. Frame size is one component of body type but measures only the skeleton, whereas somatotype attempts to capture your whole physique and how readily you gain muscle or fat." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "waist-to-hip-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "MedlinePlus / NIH body frame size guidance",
    sourceUrl: "https://medlineplus.gov/ency/imagepages/17182.htm",
    slugEs: "calculadora-de-tamano-de-complexion-corporal",
    titleEs: "Calculadora de Tamaño de Complexión Corporal",
    shortDescriptionEs: "Determina una complexión pequeña, mediana o grande a partir de la altura y el tamaño de la muñeca.",
    seoTitleEs: "Calculadora de Tamaño de Complexión Corporal — Pequeña, Mediana o Grande",
    metaDescriptionEs:
      "Calculadora gratuita de tamaño de complexión corporal. Divide tu altura entre la circunferencia de tu muñeca para clasificar tu estructura ósea como pequeña, mediana o grande.",
    primaryKeywordEs: "calculadora de tamaño de complexión corporal",
    secondaryKeywordsEs: ["calculadora de complexión", "tamaño de muñeca complexión", "complexión pequeña mediana grande"],
    formulaExplanationEs:
      "El método funciona porque la circunferencia de la muñeca sigue de cerca el tamaño esquelético siendo casi libre de grasa y músculo, así que dividir la altura entre la muñeca da una razón adimensional que expresa cuán esbelta o robusta es tu estructura respecto a tu estatura. Una persona alta con muñeca delgada produce una razón alta y una complexión pequeña, mientras que una persona más baja con muñeca gruesa da una razón baja y una complexión grande. Los puntos de corte 9,6 y 10,4 provienen de bandas de referencia estándar usadas para clasificar en tres categorías.",
    explanationEs:
      "El tamaño de la complexión corporal describe la estructura esquelética que heredaste, y ayuda a poner en contexto más justo las cifras de peso y composición corporal. Dos personas de la misma altura pueden tener estructuras óseas muy distintas, por lo que una calculadora de tamaño de complexión corporal clasifica tu complexión como pequeña, mediana o grande comparando tu altura con la circunferencia de tu muñeca. Se elige la muñeca porque tiene muy poca grasa o músculo, así que su medida refleja sobre todo el tamaño óseo, siendo un indicador cómodo de la estructura esquelética general. Esta herramienta divide la altura entre la circunferencia de la muñeca: una razón más alta indica un esqueleto esbelto respecto a la altura, clasificado como complexión pequeña, mientras que una razón más baja indica una estructura ósea más pesada y una complexión grande, con la mediana en medio. Conocer tu complexión importa porque las tablas de peso ideal y el índice de masa corporal no tienen en cuenta las diferencias esqueléticas. Una persona de complexión grande carga naturalmente más peso en hueso y tejido de soporte y puede situarse en el extremo alto de un rango saludable, mientras que una persona de complexión pequeña de la misma altura pertenece al extremo bajo. Una calculadora de tamaño de complexión corporal, por tanto, refina cómo interpretas los objetivos más que servir como diagnóstico de salud. Mide tu muñeca justo debajo del hueso saliente, del lado de la mano, ajustada a la piel, usando las mismas unidades que tu altura. Trata la complexión como un ajuste útil a la orientación de peso, no como una regla fija, y combínala con otras medidas para una imagen más completa.",
    exampleEs: {
      inputs: { heightCm: 180, wristCm: 16 },
      explanation: "180 ÷ 16 = 11,25, que está por encima de 10,4, así que indica una complexión pequeña.",
    },
    faqsEs: [
      { question: "¿Por qué usar la muñeca para juzgar la complexión?", answer: "La muñeca es sobre todo hueso, tendón y piel con casi nada de grasa o músculo que distorsione la medida, por lo que su circunferencia es un indicador estable del tamaño esquelético que cambia poco con el aumento o pérdida de peso. Esa fiabilidad la hace un indicador práctico de tu estructura ósea general. Otros métodos usan el ancho del codo, pero la muñeca es más fácil de medir con precisión en casa con solo una cinta flexible, por eso se usa ampliamente." },
      { question: "¿Cómo afecta la complexión a mi peso ideal?", answer: "Las tablas estándar de peso ideal suponen una constitución media, pero el tamaño esquelético desplaza el rango saludable. Una persona de complexión grande carga más hueso y tejido conectivo, por lo que su peso saludable se sitúa hacia el extremo alto del rango para su altura, mientras que una de complexión pequeña pertenece al extremo bajo. Tener en cuenta la complexión evita que una persona naturalmente robusta sea etiquetada con sobrepeso, o que una persona menuda crea que un peso alto le conviene." },
      { question: "¿Puedo cambiar el tamaño de mi complexión corporal?", answer: "No de forma significativa en la edad adulta. La complexión refleja tu esqueleto, que está determinado en gran parte por la genética y terminó de crecer tras la adolescencia. Puedes cambiar músculo, grasa y peso total mediante dieta y entrenamiento, pero la longitud y grosor de tus huesos permanecen esencialmente fijos. Esa permanencia es útil: como la complexión no cambia con el peso, ofrece un punto de referencia estable para interpretar tus objetivos de peso y composición corporal con el tiempo." },
      { question: "¿Dónde exactamente debo medir mi muñeca?", answer: "Envuelve una cinta flexible alrededor de la parte más estrecha de tu muñeca, justo debajo del hueso de la muñeca hacia la mano, en tu brazo dominante. Mantén la cinta ajustada a la piel pero sin apretar lo suficiente para comprimirla, y lee la medida en las mismas unidades que usaste para tu altura. Medir en el mismo punto cada vez da resultados consistentes. Evita medir sobre un reloj o joyería, que inflaría la cifra." },
      { question: "¿Es la complexión lo mismo que el tipo de cuerpo?", answer: "No, aunque las ideas se solapan. La complexión se refiere específicamente a la estructura esquelética, pequeña, mediana o grande, según las dimensiones óseas. El tipo de cuerpo, o somatotipo, describe un patrón más amplio de constitución y metabolismo, a menudo etiquetado como ectomorfo, mesomorfo o endomorfo, que combina estructura ósea con musculatura y distribución de grasa. La complexión es un componente del tipo de cuerpo pero mide solo el esqueleto, mientras el somatotipo intenta captar todo tu físico." },
    ],
  },
  {
    id: "pregnancy-weight-gain",
    slug: "pregnancy-weight-gain-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Pregnancy Weight Gain Calculator",
    shortDescription: "Find the recommended weight-gain range for pregnancy from pre-pregnancy BMI.",
    seoTitle: "Pregnancy Weight Gain Calculator — IOM Guidelines",
    metaDescription:
      "Free pregnancy weight gain calculator. Use your pre-pregnancy weight and height to find the recommended total weight-gain range from official IOM guidelines.",
    primaryKeyword: "pregnancy weight gain calculator",
    secondaryKeywords: ["recommended pregnancy weight gain", "iom weight gain", "healthy pregnancy weight"],
    fields: [
      { id: "prePregnancyWeightKg", label: "Pre-pregnancy weight", type: "number", unit: "kg", placeholder: "62", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "165", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "bmi", label: "Pre-pregnancy BMI", format: "number", decimals: 1, unit: "kg/m²", isPrimary: false },
      { id: "recommendedGainLowKg", label: "Recommended gain (low)", format: "number", decimals: 1, unit: "kg", isPrimary: true },
      { id: "recommendedGainHighKg", label: "Recommended gain (high)", format: "number", decimals: 1, unit: "kg", isPrimary: false },
    ],
    formula: "BMI = kg ÷ m²; IOM ranges: <18.5 → 12.5–18, 18.5–24.9 → 11.5–16, 25–29.9 → 7–11.5, ≥30 → 5–9 kg",
    explanation:
      "How much weight to gain during pregnancy is one of the most common questions expectant mothers ask, and a pregnancy weight gain calculator answers it using your body mass index before you conceived. The amount your body should gain over a full-term single pregnancy depends heavily on where you started: someone who began underweight needs to gain more to support a healthy baby, while someone who began with obesity is advised to gain less to reduce complications. This tool applies the widely used guidelines from the Institute of Medicine, now the National Academy of Medicine, which set recommended total gain ranges for each pre-pregnancy BMI category. It first computes your pre-pregnancy BMI from the weight and height you enter, then returns the recommended gain window in kilograms. Gaining within the recommended range supports the baby's growth and the mother's changing body, including the placenta, amniotic fluid, expanded blood volume, larger breasts and fat stores for breastfeeding, while lowering risks such as gestational diabetes, high blood pressure, a very large or very small baby, and difficult delivery. A pregnancy weight gain calculator gives a clear target range, but pregnancy is highly individual and gain is rarely steady week to week, tending to accelerate in later trimesters. These figures apply to a single baby; twins require more. Always use the result as general guidance and let your midwife or obstetrician tailor advice to your specific health, because they monitor the full picture that no calculator can see.",
    formulaExplanation:
      "The calculator first finds body mass index by dividing your pre-pregnancy weight in kilograms by the square of your height in metres, which sorts you into an underweight, normal, overweight or obese band. Each band maps to an evidence-based total weight-gain range established by the Institute of Medicine, because women who begin lighter can safely gain more to nourish the pregnancy, while those who begin heavier are advised to gain less to limit the risk of complications for both mother and baby.",
    example: {
      inputs: { prePregnancyWeightKg: 62, heightCm: 165 },
      explanation: "62 ÷ 1.65² ≈ 22.8 BMI, in the normal range, so the recommended total gain is 11.5–16 kg.",
    },
    faqs: [
      { question: "Are these weight-gain ranges for a single baby or twins?", answer: "The ranges this calculator uses are for a single, full-term pregnancy. Carrying twins requires substantially more weight gain to support two babies, and the Institute of Medicine publishes separate, higher ranges for twin pregnancies, roughly 17 to 25 kilograms for a normal-weight mother. If you are expecting multiples, do not rely on the single-baby figures here; ask your obstetrician for the appropriate twin guidance tailored to your pre-pregnancy BMI." },
      { question: "What happens if I gain more than the recommended amount?", answer: "Gaining well above the recommended range raises the chance of gestational diabetes, high blood pressure, a larger baby that can complicate delivery, more caesarean sections, and greater difficulty losing the weight afterward. It can also increase the child's later risk of obesity. That said, one week of higher gain is not a crisis. Focus on the overall trend, eat nutrient-dense foods, stay active as advised, and let your care provider guide any adjustments rather than restricting sharply." },
      { question: "Is it dangerous to gain too little during pregnancy?", answer: "Yes, gaining too little can be harmful. Insufficient weight gain is linked to a higher risk of a low-birth-weight baby, preterm birth and problems with the baby's growth and development. Underweight mothers especially need adequate gain to support the pregnancy. If you are struggling to gain enough because of nausea, appetite loss or food access, tell your midwife or doctor, who can help with nutrition strategies and monitor the baby's growth closely to keep things on track." },
      { question: "When during pregnancy does most weight gain happen?", answer: "Weight gain is usually slow in the first trimester, often just half a kilogram to two kilograms total, then picks up in the second and third trimesters as the baby, placenta and fluids grow rapidly. A common pattern is around 0.4 to 0.5 kilograms per week in the later months for a normal-weight woman. Because the pace is uneven, judging progress against the total range and your provider's checks matters more than any single week's change." },
      { question: "Does the recommended gain include the baby's weight?", answer: "Yes. The recommended total is your whole-body gain, which includes the baby, the placenta, amniotic fluid, extra blood and fluid, the enlarged uterus and breasts, and maternal fat stores laid down for breastfeeding. The baby itself is only about three to four kilograms of the total. This is why the recommended figures are considerably larger than the baby's birth weight, and why most of the gain is normal, healthy and necessary rather than fat alone." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Institute of Medicine (IOM) pregnancy weight-gain guidelines",
    sourceUrl: "https://www.cdc.gov/reproductive-health/maternal-infant-health/pregnancy-weight-gain.html",
    slugEs: "calculadora-de-aumento-de-peso-en-el-embarazo",
    titleEs: "Calculadora de Aumento de Peso en el Embarazo",
    shortDescriptionEs: "Encuentra el rango de aumento de peso recomendado en el embarazo según el IMC previo al embarazo.",
    seoTitleEs: "Calculadora de Aumento de Peso en el Embarazo — Guías IOM",
    metaDescriptionEs:
      "Calculadora gratuita de aumento de peso en el embarazo. Usa tu peso y altura previos al embarazo para encontrar el rango total recomendado de las guías oficiales del IOM.",
    primaryKeywordEs: "calculadora de aumento de peso en el embarazo",
    secondaryKeywordsEs: ["aumento de peso recomendado en el embarazo", "aumento de peso iom", "peso saludable en el embarazo"],
    formulaExplanationEs:
      "La calculadora primero halla el índice de masa corporal dividiendo tu peso previo al embarazo en kilogramos entre el cuadrado de tu altura en metros, lo que te clasifica en una banda de bajo peso, normal, sobrepeso u obesidad. Cada banda se asigna a un rango total de aumento de peso basado en evidencia establecido por el Institute of Medicine, porque las mujeres que empiezan más ligeras pueden ganar con seguridad más para nutrir el embarazo, mientras que las que empiezan más pesadas deben ganar menos para limitar el riesgo de complicaciones para madre y bebé.",
    explanationEs:
      "Cuánto peso ganar durante el embarazo es una de las preguntas más comunes de las futuras madres, y una calculadora de aumento de peso en el embarazo la responde usando tu índice de masa corporal antes de concebir. La cantidad que tu cuerpo debería ganar en un embarazo único a término depende mucho de dónde empezaste: quien comenzó con bajo peso necesita ganar más para sostener un bebé sano, mientras que quien comenzó con obesidad debe ganar menos para reducir complicaciones. Esta herramienta aplica las guías ampliamente usadas del Institute of Medicine, ahora la National Academy of Medicine, que fijan rangos recomendados de aumento total para cada categoría de IMC previo al embarazo. Primero calcula tu IMC previo al embarazo a partir del peso y la altura que introduces, y luego devuelve la ventana de aumento recomendada en kilogramos. Ganar dentro del rango recomendado apoya el crecimiento del bebé y el cuerpo cambiante de la madre, incluida la placenta, el líquido amniótico, el volumen sanguíneo aumentado, los senos más grandes y las reservas de grasa para la lactancia, a la vez que reduce riesgos como diabetes gestacional, presión alta, un bebé muy grande o muy pequeño, y un parto difícil. Una calculadora de aumento de peso en el embarazo da un rango objetivo claro, pero el embarazo es muy individual y el aumento rara vez es constante semana a semana, tendiendo a acelerarse en los últimos trimestres. Estas cifras aplican a un solo bebé; los gemelos requieren más. Usa siempre el resultado como orientación general y deja que tu matrona u obstetra adapte los consejos a tu salud específica, porque vigilan el cuadro completo que ninguna calculadora puede ver.",
    exampleEs: {
      inputs: { prePregnancyWeightKg: 62, heightCm: 165 },
      explanation: "62 ÷ 1,65² ≈ 22,8 de IMC, en el rango normal, así que el aumento total recomendado es de 11,5–16 kg.",
    },
    faqsEs: [
      { question: "¿Estos rangos de aumento son para un solo bebé o para gemelos?", answer: "Los rangos que usa esta calculadora son para un embarazo único a término. Llevar gemelos requiere un aumento de peso considerablemente mayor para sostener a dos bebés, y el Institute of Medicine publica rangos separados y más altos para embarazos gemelares, aproximadamente de 17 a 25 kilogramos para una madre de peso normal. Si esperas múltiples, no te bases en las cifras de un solo bebé; pide a tu obstetra la orientación adecuada para gemelos según tu IMC previo." },
      { question: "¿Qué pasa si gano más de la cantidad recomendada?", answer: "Ganar muy por encima del rango recomendado aumenta la probabilidad de diabetes gestacional, presión alta, un bebé más grande que puede complicar el parto, más cesáreas y mayor dificultad para perder el peso después. También puede elevar el riesgo posterior de obesidad del niño. Dicho esto, una semana de mayor aumento no es una crisis. Céntrate en la tendencia general, come alimentos densos en nutrientes, mantente activa según indiquen y deja que tu proveedor guíe cualquier ajuste." },
      { question: "¿Es peligroso ganar muy poco durante el embarazo?", answer: "Sí, ganar muy poco puede ser dañino. El aumento insuficiente se asocia a mayor riesgo de un bebé de bajo peso al nacer, parto prematuro y problemas en el crecimiento y desarrollo del bebé. Las madres con bajo peso especialmente necesitan un aumento adecuado para sostener el embarazo. Si te cuesta ganar lo suficiente por náuseas, pérdida de apetito o acceso a alimentos, díselo a tu matrona o médico, que puede ayudar con estrategias de nutrición y vigilar de cerca el crecimiento del bebé." },
      { question: "¿Cuándo ocurre la mayor parte del aumento de peso durante el embarazo?", answer: "El aumento suele ser lento en el primer trimestre, a menudo solo de medio a dos kilogramos en total, y luego se acelera en el segundo y tercer trimestre a medida que el bebé, la placenta y los líquidos crecen rápidamente. Un patrón común es de unos 0,4 a 0,5 kilogramos por semana en los últimos meses para una mujer de peso normal. Como el ritmo es desigual, juzgar el progreso frente al rango total y los controles importa más que el cambio de una sola semana." },
      { question: "¿El aumento recomendado incluye el peso del bebé?", answer: "Sí. El total recomendado es el aumento de todo tu cuerpo, que incluye al bebé, la placenta, el líquido amniótico, sangre y fluidos extra, el útero y los senos agrandados, y las reservas de grasa materna depositadas para la lactancia. El bebé en sí es solo unos tres a cuatro kilogramos del total. Por eso las cifras recomendadas son bastante mayores que el peso al nacer del bebé, y la mayor parte del aumento es normal, saludable y necesario más que solo grasa." },
    ],
  },
  {
    id: "weight-loss-calorie-goal",
    slug: "weight-loss-calorie-goal-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Weight Loss Calorie Goal Calculator",
    shortDescription: "Find the daily calorie target for a chosen weekly weight-loss rate.",
    seoTitle: "Weight Loss Calorie Goal Calculator — Daily Target",
    metaDescription:
      "Free weight loss calorie calculator. Enter your maintenance calories and a weekly loss target to get the daily calorie goal and weekly deficit you need.",
    primaryKeyword: "weight loss calorie goal calculator",
    secondaryKeywords: ["calorie deficit calculator", "daily calorie goal", "weight loss calorie target"],
    fields: [
      { id: "tdee", label: "Maintenance calories (TDEE)", type: "number", unit: "kcal/day", placeholder: "2500", required: true, span: 2, min: 0, helpText: "Your total daily energy expenditure." },
      {
        id: "weeklyLossKg", label: "Target weekly loss", type: "select", required: true, span: 2, defaultValue: "0.5",
        options: [
          { value: "0.25", label: "0.25 kg / week (gentle)" },
          { value: "0.5", label: "0.5 kg / week (moderate)" },
          { value: "0.75", label: "0.75 kg / week (fast)" },
          { value: "1", label: "1 kg / week (aggressive)" },
        ],
      },
    ],
    results: [
      { id: "dailyCalories", label: "Daily calorie goal", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "weeklyDeficit", label: "Weekly calorie deficit", format: "number", decimals: 0, unit: "kcal/week", isPrimary: false },
    ],
    formula: "Daily calories = TDEE − (weekly loss × 7700 ÷ 7); weekly deficit = weekly loss × 7700",
    explanation:
      "Losing weight comes down to a sustained calorie deficit, eating fewer calories than your body burns, and a weight loss calorie goal calculator tells you exactly how many calories to aim for each day to hit a target rate of loss. It starts from your total daily energy expenditure, or TDEE, the maintenance level at which your weight stays stable, then subtracts the deficit needed to shed a chosen amount of weight per week. The tool uses the widely cited estimate that one kilogram of body fat stores roughly 7,700 kilocalories, so to lose half a kilogram a week you need a weekly deficit of about 3,850 calories, or 550 fewer per day. A weight loss calorie goal calculator lets you pick a pace that fits your life, from a gentle quarter kilogram a week to a more aggressive kilogram, and shows both the daily target and the total weekly deficit behind it. Slower rates are generally easier to sustain and better preserve muscle, while very aggressive deficits can leave you hungry, tired and prone to rebound. Most guidance suggests not dropping below roughly 1,200 calories a day for women or 1,500 for men without supervision, and this calculator does not enforce that floor, so sanity-check the result. Real-world loss is rarely perfectly linear because water weight, adaptation and adherence all fluctuate. Use the figure as a practical starting target, adjust based on how your weight actually trends over a few weeks, and prioritise nutrient-dense food and protein to stay healthy while losing.",
    formulaExplanation:
      "The calculation relies on the well-known approximation that about 7,700 kilocalories are stored in one kilogram of body fat. Multiplying your chosen weekly loss in kilograms by 7,700 gives the total calorie deficit you must create across the week; dividing that by seven spreads it into a daily shortfall. Subtracting that daily shortfall from your maintenance calories, your TDEE, yields the daily calorie goal that should, on average, produce the target rate of loss over time.",
    example: {
      inputs: { tdee: 2500, weeklyLossKg: 0.5 },
      explanation: "For a 2,500 kcal TDEE losing 0.5 kg/week: deficit 0.5 × 7700 = 3850/week, so 2500 − 550 = 1,950 kcal/day.",
    },
    faqs: [
      { question: "Is 7,700 calories per kilogram an exact number?", answer: "It is a widely used approximation, not a precise constant. The figure assumes weight lost is pure body fat, but real weight change also includes water, glycogen and some lean tissue, especially early on. Metabolism also adapts as you lose, slightly reducing your burn. So actual loss can run a little faster at first and slower later than the formula predicts. Treat the target as a solid starting estimate and adjust based on your real weekly trend." },
      { question: "How low can I safely set my calorie goal?", answer: "Most health authorities advise against dropping below roughly 1,200 calories a day for women or 1,500 for men without medical supervision, because very low intakes make it hard to get enough nutrients and can cost you muscle. If this calculator returns a target below those floors, choose a gentler weekly loss rate or increase your activity to widen the deficit instead. Slower, sustainable loss almost always beats an extreme diet you cannot maintain." },
      { question: "Why is my real weight loss not matching the prediction?", answer: "Short-term weight swings from water, sodium, carbohydrate intake, hormones and digestion easily mask fat loss on the scale, so a week can show no change even with a genuine deficit. Metabolic adaptation and small inaccuracies in estimating your maintenance calories or food intake also add up. Judge progress over three to four weeks rather than day to day, and if the trend stalls, tighten your tracking or slightly increase the deficit." },
      { question: "Should I lose weight through diet or exercise?", answer: "Both help, but diet usually drives most of the deficit because it is far easier to eat 500 fewer calories than to burn 500 through exercise, and appetite often rises after hard workouts. Exercise remains valuable for preserving muscle, protecting metabolic and heart health, and improving mood. The best approach combines a moderate dietary deficit with regular activity, especially resistance training, so you lose fat while keeping the muscle that keeps your metabolism higher." },
      { question: "How much protein should I eat while losing weight?", answer: "Eating adequate protein while in a deficit helps preserve muscle mass and keeps you fuller, which supports adherence. Common guidance is around 1.6 to 2.2 grams of protein per kilogram of body weight for people actively losing weight and training. Spreading protein across meals and pairing it with resistance exercise gives the best muscle-sparing effect. Prioritising protein within your reduced calorie budget makes weight loss healthier and helps ensure most of what you lose is fat." },
    ],
    relatedCalculators: ["tdee-calculator", "bmr-calculator", "macro-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "NIH / CDC energy balance guidance (≈7700 kcal per kg)",
    sourceUrl: "https://www.niddk.nih.gov/health-information/weight-management",
    slugEs: "calculadora-de-objetivo-de-calorias-para-perder-peso",
    titleEs: "Calculadora de Objetivo de Calorías para Perder Peso",
    shortDescriptionEs: "Encuentra el objetivo diario de calorías para un ritmo de pérdida de peso semanal elegido.",
    seoTitleEs: "Calculadora de Objetivo de Calorías para Perder Peso — Meta Diaria",
    metaDescriptionEs:
      "Calculadora gratuita de calorías para perder peso. Introduce tus calorías de mantenimiento y un objetivo de pérdida semanal para obtener la meta diaria de calorías y el déficit semanal que necesitas.",
    primaryKeywordEs: "calculadora de objetivo de calorías para perder peso",
    secondaryKeywordsEs: ["calculadora de déficit calórico", "objetivo diario de calorías", "meta de calorías para adelgazar"],
    formulaExplanationEs:
      "El cálculo se apoya en la aproximación conocida de que unas 7.700 kilocalorías se almacenan en un kilogramo de grasa corporal. Multiplicar tu pérdida semanal elegida en kilogramos por 7.700 da el déficit calórico total que debes crear a lo largo de la semana; dividir eso entre siete lo reparte en un déficit diario. Restar ese déficit diario de tus calorías de mantenimiento, tu TDEE, da el objetivo diario de calorías que debería, en promedio, producir el ritmo de pérdida deseado con el tiempo.",
    explanationEs:
      "Perder peso se reduce a un déficit calórico sostenido, comer menos calorías de las que tu cuerpo quema, y una calculadora de objetivo de calorías para perder peso te dice exactamente cuántas calorías apuntar cada día para alcanzar un ritmo de pérdida deseado. Parte de tu gasto energético diario total, o TDEE, el nivel de mantenimiento en el que tu peso permanece estable, y luego resta el déficit necesario para perder una cantidad de peso elegida por semana. La herramienta usa la estimación ampliamente citada de que un kilogramo de grasa corporal almacena unas 7.700 kilocalorías, así que para perder medio kilo a la semana necesitas un déficit semanal de unas 3.850 calorías, o 550 menos al día. Una calculadora de objetivo de calorías para perder peso te permite elegir un ritmo que encaje en tu vida, desde un suave cuarto de kilo por semana hasta un kilo más agresivo, y muestra tanto la meta diaria como el déficit semanal total detrás de ella. Los ritmos más lentos suelen ser más fáciles de sostener y conservan mejor el músculo, mientras que los déficits muy agresivos pueden dejarte con hambre, cansancio y propenso al rebote. La mayoría de las guías sugieren no bajar de unas 1.200 calorías al día para mujeres o 1.500 para hombres sin supervisión, y esta calculadora no impone ese mínimo, así que revisa el resultado con sensatez. La pérdida real rara vez es perfectamente lineal porque el peso de agua, la adaptación y la adherencia fluctúan. Usa la cifra como una meta práctica de partida, ajústala según cómo evolucione tu peso durante unas semanas, y prioriza alimentos densos en nutrientes y proteína para mantenerte sano mientras pierdes.",
    exampleEs: {
      inputs: { tdee: 2500, weeklyLossKg: 0.5 },
      explanation: "Para un TDEE de 2.500 kcal perdiendo 0,5 kg/semana: déficit 0,5 × 7700 = 3850/semana, así que 2500 − 550 = 1.950 kcal/día.",
    },
    faqsEs: [
      { question: "¿Es 7.700 calorías por kilogramo un número exacto?", answer: "Es una aproximación ampliamente usada, no una constante precisa. La cifra supone que el peso perdido es pura grasa corporal, pero el cambio real también incluye agua, glucógeno y algo de tejido magro, sobre todo al principio. El metabolismo también se adapta al perder, reduciendo un poco tu gasto. Así que la pérdida real puede ir algo más rápida al inicio y más lenta después de lo que predice la fórmula. Trátalo como una estimación de partida sólida y ajusta según tu tendencia semanal real." },
      { question: "¿Qué tan bajo puedo fijar mi meta de calorías con seguridad?", answer: "La mayoría de las autoridades sanitarias desaconsejan bajar de unas 1.200 calorías al día para mujeres o 1.500 para hombres sin supervisión médica, porque las ingestas muy bajas dificultan obtener suficientes nutrientes y pueden costarte músculo. Si esta calculadora devuelve una meta por debajo de esos mínimos, elige un ritmo de pérdida semanal más suave o aumenta tu actividad para ampliar el déficit. Una pérdida lenta y sostenible casi siempre supera a una dieta extrema que no puedes mantener." },
      { question: "¿Por qué mi pérdida de peso real no coincide con la predicción?", answer: "Las oscilaciones de peso a corto plazo por agua, sodio, ingesta de carbohidratos, hormonas y digestión enmascaran fácilmente la pérdida de grasa en la báscula, así que una semana puede no mostrar cambios aun con un déficit genuino. La adaptación metabólica y pequeñas imprecisiones al estimar tus calorías de mantenimiento o ingesta también suman. Juzga el progreso durante tres o cuatro semanas más que día a día, y si la tendencia se estanca, ajusta el registro o aumenta ligeramente el déficit." },
      { question: "¿Debo perder peso con dieta o con ejercicio?", answer: "Ambos ayudan, pero la dieta suele impulsar la mayor parte del déficit porque es mucho más fácil comer 500 calorías menos que quemar 500 con ejercicio, y el apetito a menudo sube tras entrenamientos duros. El ejercicio sigue siendo valioso para preservar músculo, proteger la salud metabólica y cardíaca, y mejorar el ánimo. El mejor enfoque combina un déficit dietético moderado con actividad regular, en especial entrenamiento de fuerza, para perder grasa manteniendo el músculo que mantiene tu metabolismo más alto." },
      { question: "¿Cuánta proteína debo comer mientras pierdo peso?", answer: "Comer suficiente proteína en déficit ayuda a preservar la masa muscular y te mantiene más saciado, lo que favorece la adherencia. Una guía común es de unos 1,6 a 2,2 gramos de proteína por kilogramo de peso corporal para quienes pierden peso activamente y entrenan. Repartir la proteína entre las comidas y combinarla con ejercicio de fuerza da el mejor efecto de preservación muscular. Priorizar la proteína dentro de tu presupuesto calórico reducido hace la pérdida de peso más saludable y ayuda a que la mayor parte de lo que pierdes sea grasa." },
    ],
  },
  {
    id: "heart-rate-zones",
    slug: "heart-rate-zones-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Heart Rate Zones Calculator",
    shortDescription: "Calculate your max heart rate and training zone boundaries from age.",
    seoTitle: "Heart Rate Zones Calculator — Training Zones by Age",
    metaDescription:
      "Free heart rate zones calculator. Enter your age to find your maximum heart rate and the beats-per-minute boundaries for zones 2, 3 and 4.",
    primaryKeyword: "heart rate zones calculator",
    secondaryKeywords: ["training heart rate zones", "cardio zones calculator", "hr zones by age"],
    fields: [
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "maxHeartRate", label: "Maximum heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: true },
      { id: "zone2Bpm", label: "Zone 2 start (60%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "zone3Bpm", label: "Zone 3 start (70%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "zone4Bpm", label: "Zone 4 start (85%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
    ],
    formula: "Max HR = 220 − age; zone starts at 60%, 70% and 85% of max HR",
    explanation:
      "Heart rate zones are the backbone of structured cardio training, dividing effort into bands so you can train each energy system on purpose rather than by guesswork. A heart rate zones calculator estimates your maximum heart rate from your age using the classic 220-minus-age formula, then marks the beats-per-minute boundaries that separate the main training zones. Zone 2, starting near 60 percent of maximum, is the easy aerobic range where you build endurance and burn fat efficiently and can hold a conversation. Zone 3, around 70 percent, is a moderate tempo that improves aerobic capacity. Zone 4, from about 85 percent upward, is the hard threshold and high-intensity range that lifts your ceiling and sharpens speed but can only be held briefly. Training across the right mix of zones, plenty of easy work and smaller doses of hard, is how endurance athletes and everyday exercisers alike make steady progress while managing fatigue. A heart rate zones calculator gives you concrete pulse targets to aim for with a chest strap or wrist monitor, turning vague intensity into numbers. Remember the 220-minus-age formula is a population average and your true maximum can differ by ten to fifteen beats, so the zones are a starting framework rather than exact personal limits. For precise zones, a lab test or field test of your actual maximum or lactate threshold is more accurate. Anyone with a heart condition should get medical clearance before training hard near their upper zones.",
    formulaExplanation:
      "Maximum heart rate falls gradually with age because the heart's pacemaker cells slow and become less responsive over time, dropping roughly one beat per year, which the 220-minus-age formula approximates for the average adult. Each training zone is then defined as a percentage of that estimated maximum: multiplying by 0.6, 0.7 and 0.85 marks where the easy aerobic, moderate tempo and hard threshold zones begin, giving you concrete beats-per-minute targets to pace your workouts by intensity.",
    example: {
      inputs: { age: 30 },
      explanation: "At age 30, max HR = 220 − 30 = 190 bpm; zone 2 starts near 114, zone 3 near 133, zone 4 near 162 bpm.",
    },
    faqs: [
      { question: "How accurate is the 220-minus-age formula?", answer: "It is a convenient average but imprecise for individuals, with real maximum heart rates commonly differing by ten to fifteen beats per minute in either direction. Maximum heart rate depends more on genetics and physiology than age alone. Alternative equations such as 208 minus 0.7 times age fit large groups slightly better. For general training the simple formula is adequate, but for serious performance work a measured maximum from a supervised test gives far more reliable zones." },
      { question: "Why is zone 2 training so popular?", answer: "Zone 2, the easy aerobic range around 60 to 70 percent of maximum, builds the aerobic base that underpins all endurance. Training here improves your body's ability to use fat for fuel, increases capillary and mitochondrial density, and can be sustained for long durations with low fatigue, so you can accumulate lots of it. Many coaches advise spending the bulk of weekly training in zone 2, reserving harder zones for shorter, targeted sessions." },
      { question: "How do I measure my heart rate during exercise?", answer: "A chest-strap monitor is the most accurate for exercise, reading the heart's electrical signal much like an ECG, while wrist-based optical sensors are convenient but can lag or misread during rapid changes and high intensity. You can also check manually by counting your pulse for fifteen seconds and multiplying by four, though this is impractical mid-effort. For zone training, a strap or a good wrist device gives real-time feedback so you can hold the target range." },
      { question: "Should I train in all the zones?", answer: "A balanced programme touches several zones for different purposes: easy zones build endurance and aid recovery, moderate zones raise aerobic capacity, and hard zones lift threshold and speed. A common effective pattern is mostly easy training with a smaller share of hard work, sometimes called polarised training. Spending too much time in the moderate middle can leave you tired without the gains of either extreme. Match your zone mix to your goals and recovery." },
      { question: "Is a higher maximum heart rate better?", answer: "No. Maximum heart rate is largely determined by age and genetics and is not a measure of fitness, so a higher or lower maximum does not make one person fitter than another. What matters is performance and efficiency at a given effort, such as running faster at the same heart rate as you get fitter. Do not compare your maximum with others; use your own value to set personal training zones." },
    ],
    relatedCalculators: ["max-heart-rate-calculator", "target-heart-rate-calculator", "tdee-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American Heart Association target heart-rate guidance",
    sourceUrl: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates",
    slugEs: "calculadora-de-zonas-de-frecuencia-cardiaca",
    titleEs: "Calculadora de Zonas de Frecuencia Cardíaca",
    shortDescriptionEs: "Calcula tu frecuencia cardíaca máxima y los límites de las zonas de entrenamiento según la edad.",
    seoTitleEs: "Calculadora de Zonas de Frecuencia Cardíaca — Zonas por Edad",
    metaDescriptionEs:
      "Calculadora gratuita de zonas de frecuencia cardíaca. Introduce tu edad para hallar tu frecuencia cardíaca máxima y los límites en pulsaciones por minuto de las zonas 2, 3 y 4.",
    primaryKeywordEs: "calculadora de zonas de frecuencia cardíaca",
    secondaryKeywordsEs: ["zonas de entrenamiento cardíaco", "calculadora de zonas de cardio", "zonas fc por edad"],
    formulaExplanationEs:
      "La frecuencia cardíaca máxima disminuye gradualmente con la edad porque las células marcapasos del corazón se ralentizan y responden menos con el tiempo, bajando cerca de una pulsación por año, lo que la fórmula 220 menos la edad aproxima para el adulto medio. Cada zona de entrenamiento se define luego como un porcentaje de esa máxima estimada: multiplicar por 0,6, 0,7 y 0,85 marca dónde comienzan las zonas aeróbica ligera, de tempo moderado y de umbral dura, dando objetivos concretos en pulsaciones por minuto para dosificar tus entrenamientos por intensidad.",
    explanationEs:
      "Las zonas de frecuencia cardíaca son la columna vertebral del entrenamiento cardiovascular estructurado, dividiendo el esfuerzo en bandas para entrenar cada sistema energético a propósito en lugar de a ciegas. Una calculadora de zonas de frecuencia cardíaca estima tu frecuencia cardíaca máxima a partir de tu edad con la clásica fórmula 220 menos la edad, y luego marca los límites en pulsaciones por minuto que separan las principales zonas de entrenamiento. La zona 2, que empieza cerca del 60 por ciento de la máxima, es el rango aeróbico ligero donde construyes resistencia y quemas grasa eficientemente y puedes mantener una conversación. La zona 3, alrededor del 70 por ciento, es un tempo moderado que mejora la capacidad aeróbica. La zona 4, desde alrededor del 85 por ciento hacia arriba, es el rango de umbral y alta intensidad que eleva tu techo y afina la velocidad pero solo puede mantenerse brevemente. Entrenar con la mezcla correcta de zonas, mucho trabajo ligero y dosis menores de trabajo duro, es como los atletas de resistencia y quienes hacen ejercicio a diario progresan de forma constante gestionando la fatiga. Una calculadora de zonas de frecuencia cardíaca te da objetivos concretos de pulso para apuntar con una banda pectoral o un monitor de muñeca, convirtiendo la intensidad vaga en números. Recuerda que la fórmula 220 menos la edad es un promedio de población y tu máxima real puede diferir en diez a quince pulsaciones, así que las zonas son un marco de partida más que límites personales exactos. Para zonas precisas, una prueba de laboratorio o de campo de tu máxima real o umbral de lactato es más exacta. Quien tenga una afección cardíaca debe obtener autorización médica antes de entrenar duro cerca de sus zonas altas.",
    exampleEs: {
      inputs: { age: 30 },
      explanation: "A los 30 años, la FC máxima = 220 − 30 = 190 ppm; la zona 2 empieza cerca de 114, la zona 3 cerca de 133 y la zona 4 cerca de 162 ppm.",
    },
    faqsEs: [
      { question: "¿Qué precisión tiene la fórmula 220 menos la edad?", answer: "Es un promedio cómodo pero impreciso para individuos, ya que las frecuencias cardíacas máximas reales difieren comúnmente en diez a quince pulsaciones por minuto en cualquier dirección. La frecuencia máxima depende más de la genética y la fisiología que de la edad sola. Ecuaciones alternativas como 208 menos 0,7 por la edad se ajustan algo mejor a grupos grandes. Para el entrenamiento general la fórmula simple es adecuada, pero para trabajo de rendimiento serio una máxima medida en una prueba supervisada da zonas mucho más fiables." },
      { question: "¿Por qué es tan popular el entrenamiento en zona 2?", answer: "La zona 2, el rango aeróbico ligero en torno al 60 a 70 por ciento de la máxima, construye la base aeróbica que sustenta toda la resistencia. Entrenar aquí mejora la capacidad del cuerpo de usar grasa como combustible, aumenta la densidad capilar y mitocondrial, y puede sostenerse durante largo tiempo con poca fatiga, así que puedes acumular mucho. Muchos entrenadores aconsejan pasar la mayor parte del entrenamiento semanal en zona 2, reservando las zonas duras para sesiones más cortas y específicas." },
      { question: "¿Cómo mido mi frecuencia cardíaca durante el ejercicio?", answer: "Un monitor de banda pectoral es el más preciso para el ejercicio, leyendo la señal eléctrica del corazón como un ECG, mientras que los sensores ópticos de muñeca son cómodos pero pueden retrasarse o leer mal en cambios rápidos y alta intensidad. También puedes comprobar manualmente contando tu pulso durante quince segundos y multiplicando por cuatro, aunque es poco práctico en pleno esfuerzo. Para el entrenamiento por zonas, una banda o un buen dispositivo de muñeca dan retroalimentación en tiempo real para mantener el rango objetivo." },
      { question: "¿Debo entrenar en todas las zonas?", answer: "Un programa equilibrado toca varias zonas con distintos fines: las zonas ligeras construyen resistencia y ayudan a la recuperación, las moderadas elevan la capacidad aeróbica, y las duras aumentan el umbral y la velocidad. Un patrón común y eficaz es sobre todo entrenamiento ligero con una menor proporción de trabajo duro, a veces llamado entrenamiento polarizado. Pasar demasiado tiempo en el medio moderado puede dejarte cansado sin los beneficios de ninguno de los extremos. Ajusta tu mezcla de zonas a tus objetivos y recuperación." },
      { question: "¿Es mejor una frecuencia cardíaca máxima más alta?", answer: "No. La frecuencia cardíaca máxima está determinada en gran parte por la edad y la genética y no es una medida de condición física, así que una máxima más alta o más baja no hace a una persona más en forma que a otra. Lo que importa es el rendimiento y la eficiencia a un esfuerzo dado, como correr más rápido a la misma frecuencia cardíaca a medida que mejoras. No compares tu máxima con la de otros; usa tu propio valor para fijar zonas de entrenamiento personales." },
    ],
  },
  {
    id: "daily-protein-intake",
    slug: "daily-protein-intake-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Daily Protein Intake Calculator",
    shortDescription: "Estimate daily protein needs from body weight and activity level.",
    seoTitle: "Daily Protein Intake Calculator — Grams per Day",
    metaDescription:
      "Free daily protein intake calculator. Multiply your body weight by an activity-based factor to estimate how many grams of protein you need each day.",
    primaryKeyword: "daily protein intake calculator",
    secondaryKeywords: ["protein calculator", "how much protein per day", "protein grams calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      {
        id: "activityFactor", label: "Goal / activity level", type: "select", required: true, span: 1, defaultValue: "1.2",
        options: [
          { value: "0.8", label: "Sedentary / RDA (0.8 g/kg)" },
          { value: "1.2", label: "Active adult (1.2 g/kg)" },
          { value: "1.6", label: "Building muscle (1.6 g/kg)" },
          { value: "2.0", label: "Athlete / cutting (2.0 g/kg)" },
        ],
      },
    ],
    results: [
      { id: "proteinGrams", label: "Daily protein target", format: "number", decimals: 0, unit: "g/day", isPrimary: true },
    ],
    formula: "Protein (g/day) = body weight (kg) × activity factor (g/kg)",
    explanation:
      "Protein is the macronutrient your body uses to build and repair muscle, skin, enzymes, hormones and immune cells, and getting enough each day is essential for health, recovery and body composition. A daily protein intake calculator estimates your target in grams by multiplying your body weight by a factor tied to your activity level and goals. The baseline recommended dietary allowance is about 0.8 grams per kilogram of body weight, enough to prevent deficiency in a sedentary adult, but that figure is a minimum rather than an optimum. People who exercise regularly benefit from more, commonly 1.2 to 1.6 grams per kilogram, while those actively building muscle or dieting to preserve lean mass often aim for up to about 2.0 grams per kilogram. A daily protein intake calculator lets you match the factor to where you sit on that spectrum, from sedentary to serious athlete. Adequate protein supports muscle protein synthesis, helps you feel full so it aids weight management, and becomes especially important with age as the body resists muscle building and older adults need more to counter natural muscle loss. Spreading intake across meals, roughly 20 to 40 grams each, uses protein more effectively than loading it all at once. This calculator gives a practical daily gram target to plan meals around, whether your aim is general health, athletic performance or fat loss with muscle retention. Very high intakes are generally safe for healthy people, but those with kidney disease should follow medical advice on protein.",
    formulaExplanation:
      "The calculation scales protein need to body size because larger bodies contain more lean tissue to maintain and repair, so grams are set per kilogram of body weight. The activity factor adjusts that per-kilogram amount to your demands: sedentary adults need only the baseline near 0.8 grams, whereas training breaks down and rebuilds muscle, raising requirements toward 1.6 to 2.0 grams. Multiplying your weight in kilograms by the chosen factor yields a daily protein target in grams that reflects both your size and your goals.",
    example: {
      inputs: { weightKg: 80, activityFactor: 1.6 },
      explanation: "An 80 kg person building muscle at 1.6 g/kg needs 80 × 1.6 = 128 g of protein per day.",
    },
    faqs: [
      { question: "Is more protein always better?", answer: "Up to a point, more protein helps active people build and preserve muscle and stay full, but benefits plateau. For most goals, intakes beyond roughly 2.0 to 2.2 grams per kilogram give little extra muscle benefit while displacing other nutrients. Very high intakes are generally safe for healthy kidneys but are usually unnecessary. Rather than maximising protein, aim for an adequate, consistent amount spread across the day and paired with resistance training for the best results." },
      { question: "Can eating too much protein harm my kidneys?", answer: "In people with healthy kidneys, higher protein intakes have not been shown to cause kidney damage, and research supports their safety for active individuals. However, those with existing chronic kidney disease are often advised to limit protein, because their kidneys struggle to process the byproducts. If you have kidney problems, diabetes affecting your kidneys, or another relevant condition, follow your doctor's or dietitian's guidance rather than a general calculator when setting your protein target." },
      { question: "Does it matter when I eat protein?", answer: "Total daily protein matters most, but distribution helps. Muscle protein synthesis responds to meals, and spreading intake across three or four meals of roughly 20 to 40 grams each stimulates it more consistently than eating most protein in one sitting. Including protein after training and before longer overnight fasts can be beneficial. For general health the exact timing is minor, but for building or preserving muscle, even spacing across the day gives a modest edge." },
      { question: "Do older adults need more protein?", answer: "Yes. With age, muscles become less responsive to protein, a phenomenon called anabolic resistance, and older adults tend to lose muscle mass, which threatens strength and independence. Many experts recommend older adults aim higher than the standard allowance, often around 1.0 to 1.2 grams per kilogram or more, alongside resistance exercise. Getting enough high-quality protein at each meal helps counter age-related muscle loss and supports mobility, bone health and recovery from illness." },
      { question: "Can I get enough protein on a plant-based diet?", answer: "Yes, with a little planning. Plant foods such as legumes, tofu, tempeh, seitan, lentils, beans, nuts, seeds and whole grains provide plenty of protein, and eating a variety across the day supplies all essential amino acids. Plant proteins are sometimes lower in certain amino acids like leucine, so vegans may aim slightly higher in total intake and include concentrated sources or a supplement. Meeting the same per-kilogram targets is entirely achievable without animal products." },
    ],
    relatedCalculators: ["macro-calculator", "tdee-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "NIH / Dietary Reference Intakes for protein",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK56068/",
    slugEs: "calculadora-de-ingesta-diaria-de-proteina",
    titleEs: "Calculadora de Ingesta Diaria de Proteína",
    shortDescriptionEs: "Estima las necesidades diarias de proteína según el peso corporal y el nivel de actividad.",
    seoTitleEs: "Calculadora de Ingesta Diaria de Proteína — Gramos por Día",
    metaDescriptionEs:
      "Calculadora gratuita de ingesta diaria de proteína. Multiplica tu peso corporal por un factor según la actividad para estimar cuántos gramos de proteína necesitas cada día.",
    primaryKeywordEs: "calculadora de ingesta diaria de proteína",
    secondaryKeywordsEs: ["calculadora de proteína", "cuánta proteína al día", "calculadora de gramos de proteína"],
    formulaExplanationEs:
      "El cálculo escala la necesidad de proteína al tamaño corporal porque los cuerpos más grandes contienen más tejido magro que mantener y reparar, por lo que los gramos se fijan por kilogramo de peso. El factor de actividad ajusta esa cantidad por kilogramo a tus demandas: los adultos sedentarios solo necesitan la base cercana a 0,8 gramos, mientras que entrenar rompe y reconstruye músculo, elevando los requerimientos hacia 1,6 a 2,0 gramos. Multiplicar tu peso en kilogramos por el factor elegido da un objetivo diario de proteína en gramos que refleja tu tamaño y tus metas.",
    explanationEs:
      "La proteína es el macronutriente que tu cuerpo usa para construir y reparar músculo, piel, enzimas, hormonas y células inmunitarias, y obtener suficiente cada día es esencial para la salud, la recuperación y la composición corporal. Una calculadora de ingesta diaria de proteína estima tu objetivo en gramos multiplicando tu peso corporal por un factor ligado a tu nivel de actividad y metas. La cantidad diaria recomendada de base es de unos 0,8 gramos por kilogramo de peso, suficiente para prevenir la deficiencia en un adulto sedentario, pero esa cifra es un mínimo más que un óptimo. Quienes se ejercitan con regularidad se benefician de más, comúnmente de 1,2 a 1,6 gramos por kilogramo, mientras que quienes construyen músculo activamente o hacen dieta para preservar masa magra suelen apuntar hasta unos 2,0 gramos por kilogramo. Una calculadora de ingesta diaria de proteína te permite ajustar el factor a dónde te sitúas en ese espectro, de sedentario a atleta serio. La proteína adecuada favorece la síntesis de proteína muscular, ayuda a sentirte saciado por lo que apoya el control del peso, y se vuelve especialmente importante con la edad, ya que el cuerpo resiste la construcción muscular y los adultos mayores necesitan más para contrarrestar la pérdida natural de músculo. Repartir la ingesta entre comidas, unos 20 a 40 gramos cada una, aprovecha la proteína más eficazmente que concentrarla toda de una vez. Esta calculadora da un objetivo diario práctico en gramos para planificar comidas, ya sea que tu meta sea la salud general, el rendimiento deportivo o la pérdida de grasa con retención muscular. Las ingestas muy altas suelen ser seguras para personas sanas, pero quienes tienen enfermedad renal deben seguir el consejo médico sobre la proteína.",
    exampleEs: {
      inputs: { weightKg: 80, activityFactor: 1.6 },
      explanation: "Una persona de 80 kg construyendo músculo a 1,6 g/kg necesita 80 × 1,6 = 128 g de proteína al día.",
    },
    faqsEs: [
      { question: "¿Más proteína siempre es mejor?", answer: "Hasta cierto punto, más proteína ayuda a las personas activas a construir y preservar músculo y a mantenerse saciadas, pero los beneficios se estabilizan. Para la mayoría de metas, las ingestas más allá de unos 2,0 a 2,2 gramos por kilogramo dan poco beneficio muscular extra mientras desplazan otros nutrientes. Las ingestas muy altas suelen ser seguras para riñones sanos pero normalmente innecesarias. En vez de maximizar la proteína, apunta a una cantidad adecuada y constante repartida en el día y combinada con entrenamiento de fuerza." },
      { question: "¿Comer demasiada proteína puede dañar mis riñones?", answer: "En personas con riñones sanos, las ingestas más altas de proteína no han demostrado causar daño renal, y la investigación respalda su seguridad para individuos activos. Sin embargo, quienes tienen enfermedad renal crónica existente suelen recibir el consejo de limitar la proteína, porque sus riñones tienen dificultad para procesar los subproductos. Si tienes problemas renales, diabetes que afecte tus riñones u otra afección relevante, sigue la orientación de tu médico o dietista en lugar de una calculadora general al fijar tu objetivo." },
      { question: "¿Importa cuándo como proteína?", answer: "La proteína diaria total es lo que más importa, pero la distribución ayuda. La síntesis de proteína muscular responde a las comidas, y repartir la ingesta en tres o cuatro comidas de unos 20 a 40 gramos cada una la estimula de forma más consistente que comer la mayor parte de una vez. Incluir proteína tras el entrenamiento y antes de ayunos nocturnos largos puede ser beneficioso. Para la salud general el momento exacto es menor, pero para construir o preservar músculo, una distribución uniforme da una ligera ventaja." },
      { question: "¿Los adultos mayores necesitan más proteína?", answer: "Sí. Con la edad, los músculos responden menos a la proteína, un fenómeno llamado resistencia anabólica, y los adultos mayores tienden a perder masa muscular, lo que amenaza la fuerza y la independencia. Muchos expertos recomiendan que los adultos mayores apunten por encima de la cantidad estándar, a menudo alrededor de 1,0 a 1,2 gramos por kilogramo o más, junto con ejercicio de fuerza. Obtener suficiente proteína de calidad en cada comida ayuda a contrarrestar la pérdida muscular relacionada con la edad y apoya la movilidad." },
      { question: "¿Puedo obtener suficiente proteína con una dieta basada en plantas?", answer: "Sí, con algo de planificación. Alimentos vegetales como legumbres, tofu, tempeh, seitán, lentejas, frijoles, frutos secos, semillas y granos integrales aportan mucha proteína, y comer variedad a lo largo del día suministra todos los aminoácidos esenciales. Las proteínas vegetales a veces son más bajas en ciertos aminoácidos como la leucina, así que los veganos pueden apuntar algo más alto en total e incluir fuentes concentradas o un suplemento. Alcanzar los mismos objetivos por kilogramo es totalmente posible sin productos animales." },
    ],
  },
  {
    id: "exercise-hydration",
    slug: "exercise-hydration-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Exercise Hydration Calculator",
    shortDescription: "Estimate the fluid to replace during exercise from duration and sweat rate.",
    seoTitle: "Exercise Hydration Calculator — Fluid Replacement",
    metaDescription:
      "Free exercise hydration calculator. Estimate how much fluid to drink during a workout from its duration and your sweat rate, in litres and ounces.",
    primaryKeyword: "exercise hydration calculator",
    secondaryKeywords: ["sweat rate calculator", "workout fluid replacement", "hydration during exercise"],
    fields: [
      { id: "exerciseMinutes", label: "Exercise duration", type: "number", unit: "minutes", placeholder: "90", required: true, span: 1, min: 0 },
      { id: "sweatRateLitersPerHour", label: "Sweat rate", type: "number", unit: "L/hour", placeholder: "1", defaultValue: "1", required: true, span: 1, min: 0, step: 0.1, helpText: "Typical range 0.5–2 L/hour; more in heat." },
    ],
    results: [
      { id: "fluidNeededLiters", label: "Fluid to replace", format: "number", decimals: 2, unit: "L", isPrimary: true },
      { id: "fluidNeededOz", label: "Fluid to replace", format: "number", decimals: 0, unit: "fl oz", isPrimary: false },
    ],
    formula: "Fluid (L) = duration(min) ÷ 60 × sweat rate (L/hour); ounces = litres × 33.814",
    explanation:
      "Staying properly hydrated during exercise protects both performance and safety, because losing even a small percentage of body weight in sweat can impair endurance, concentration and temperature control. An exercise hydration calculator estimates how much fluid you should aim to replace during a session based on how long you work out and how fast you sweat. Sweat rate varies enormously between people and conditions: a typical range is about half a litre to two litres per hour, but it climbs in heat and humidity, at high intensity, and for larger or heavily kitted athletes. This tool multiplies your session duration by your hourly sweat rate to give a target fluid volume in both litres and fluid ounces. Replacing fluids during longer or hotter sessions helps you avoid the fatigue, cramping, elevated heart rate and heat stress that dehydration brings. An exercise hydration calculator is especially useful for runners, cyclists, team-sport players and anyone training in warm weather who wants a concrete drinking target rather than guessing. The most accurate way to know your personal sweat rate is to weigh yourself before and after a workout, since each kilogram of weight lost equals roughly one litre of sweat, then adjust the figure you enter here. Remember that drinking to thirst works well for most people in most situations, and over-drinking plain water can dilute blood sodium dangerously in a condition called hyponatraemia. For sessions beyond an hour, especially in heat, include electrolytes as well as fluid, and treat this estimate as a planning guide.",
    formulaExplanation:
      "The calculation converts your workout length into hours by dividing minutes by sixty, then multiplies by your sweat rate in litres per hour to estimate total sweat lost, which is the fluid you aim to replace. Because one litre equals about 33.814 US fluid ounces, the result is also shown in ounces for convenience. The logic assumes you want to roughly match fluid intake to sweat output so body-water loss stays small enough to protect performance and safety.",
    example: {
      inputs: { exerciseMinutes: 90, sweatRateLitersPerHour: 1 },
      explanation: "A 90-minute session at 1 L/hour: 90 ÷ 60 × 1 = 1.5 L, which is about 51 fluid ounces.",
    },
    faqs: [
      { question: "How do I measure my personal sweat rate?", answer: "Weigh yourself unclothed just before a workout and again immediately after, drying off first, and note any fluid you drank during the session. Each kilogram of body weight lost equals about one litre of sweat; add back the volume you drank to get total sweat. Divide by the hours exercised for your hourly rate. Doing this in conditions similar to your usual training gives a personalised figure far more accurate than a generic estimate." },
      { question: "Can I drink too much water during exercise?", answer: "Yes. Drinking far more than you sweat can dilute the sodium in your blood, causing exercise-associated hyponatraemia, a potentially dangerous condition with symptoms like nausea, headache, confusion and, in severe cases, seizures. It is most often seen in slower endurance athletes who over-drink plain water. Aim to roughly match intake to sweat losses rather than drinking as much as possible, and use electrolyte drinks for long sessions. Drinking to thirst is a safe guide for most people." },
      { question: "Do I need sports drinks or is water enough?", answer: "For sessions under about an hour, plain water is usually sufficient. For longer or very intense exercise, especially in heat, drinks containing sodium and other electrolytes help replace what you lose in sweat, maintain fluid balance and, with some carbohydrate, sustain energy. Electrolytes also reduce the risk of hyponatraemia during prolonged efforts. Choose based on duration, intensity and sweat saltiness; if you notice white salt stains on clothing, you likely lose more sodium and benefit from electrolytes." },
      { question: "What are the warning signs of dehydration during exercise?", answer: "Early signs include thirst, a dry mouth, dark urine, fatigue setting in sooner than usual, a higher heart rate at your normal effort, and reduced performance. As it worsens you may feel dizzy, get a headache, cramp, or feel nauseated, and stop sweating in severe heat illness, which is a medical emergency. If you notice these signs, slow down, move to shade, and drink fluids with electrolytes. Preventing dehydration by drinking steadily is far better than treating it." },
      { question: "Should I hydrate before and after exercise too?", answer: "Absolutely. Arriving well hydrated matters as much as drinking during exercise, so aim to drink fluids in the hours beforehand until your urine is pale. During the session, sip to replace losses as this calculator estimates. Afterward, rehydrate by drinking roughly 1.2 to 1.5 litres for every kilogram of body weight lost, including sodium to help retain the fluid. Spreading intake before, during and after keeps you in better balance than trying to catch up all at once." },
    ],
    relatedCalculators: ["water-intake-calculator", "tdee-calculator", "calories-burned-by-activity-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American College of Sports Medicine (ACSM) hydration position stand",
    sourceUrl: "https://journals.lww.com/acsm-msse/fulltext/2007/02000/exercise_and_fluid_replacement.22.aspx",
    slugEs: "calculadora-de-hidratacion-para-el-ejercicio",
    titleEs: "Calculadora de Hidratación para el Ejercicio",
    shortDescriptionEs: "Estima el líquido a reponer durante el ejercicio según la duración y la tasa de sudoración.",
    seoTitleEs: "Calculadora de Hidratación para el Ejercicio — Reposición de Líquidos",
    metaDescriptionEs:
      "Calculadora gratuita de hidratación para el ejercicio. Estima cuánto líquido beber durante un entrenamiento según su duración y tu tasa de sudoración, en litros y onzas.",
    primaryKeywordEs: "calculadora de hidratación para el ejercicio",
    secondaryKeywordsEs: ["calculadora de tasa de sudoración", "reposición de líquidos en el ejercicio", "hidratación durante el ejercicio"],
    formulaExplanationEs:
      "El cálculo convierte la duración de tu entrenamiento en horas dividiendo los minutos entre sesenta, y luego multiplica por tu tasa de sudoración en litros por hora para estimar el sudor total perdido, que es el líquido que buscas reponer. Como un litro equivale a unos 33,814 onzas líquidas estadounidenses, el resultado también se muestra en onzas por comodidad. La lógica supone que quieres igualar aproximadamente la ingesta de líquido a la pérdida de sudor para que la pérdida de agua corporal se mantenga lo bastante pequeña.",
    explanationEs:
      "Mantenerse bien hidratado durante el ejercicio protege tanto el rendimiento como la seguridad, porque perder incluso un pequeño porcentaje del peso corporal en sudor puede afectar la resistencia, la concentración y el control de la temperatura. Una calculadora de hidratación para el ejercicio estima cuánto líquido deberías reponer durante una sesión según cuánto tiempo entrenas y qué tan rápido sudas. La tasa de sudoración varía enormemente entre personas y condiciones: un rango típico es de medio litro a dos litros por hora, pero sube con el calor y la humedad, a alta intensidad, y en atletas más grandes o muy equipados. Esta herramienta multiplica la duración de tu sesión por tu tasa de sudoración por hora para dar un volumen objetivo de líquido en litros y en onzas líquidas. Reponer líquidos en sesiones más largas o calurosas ayuda a evitar la fatiga, los calambres, la frecuencia cardíaca elevada y el estrés por calor que trae la deshidratación. Una calculadora de hidratación para el ejercicio es especialmente útil para corredores, ciclistas, jugadores de deportes de equipo y cualquiera que entrene en clima cálido y quiera un objetivo de bebida concreto en vez de adivinar. La forma más precisa de conocer tu tasa personal de sudoración es pesarte antes y después de un entrenamiento, ya que cada kilogramo de peso perdido equivale a alrededor de un litro de sudor, y luego ajustar la cifra que introduces aquí. Recuerda que beber según la sed funciona bien para la mayoría de las personas en la mayoría de las situaciones, y beber demasiada agua pura puede diluir peligrosamente el sodio en sangre en una condición llamada hiponatremia. Para sesiones de más de una hora, sobre todo con calor, incluye electrolitos además de líquido, y trata esta estimación como una guía de planificación.",
    exampleEs: {
      inputs: { exerciseMinutes: 90, sweatRateLitersPerHour: 1 },
      explanation: "Una sesión de 90 minutos a 1 L/hora: 90 ÷ 60 × 1 = 1,5 L, que es unas 51 onzas líquidas.",
    },
    faqsEs: [
      { question: "¿Cómo mido mi tasa personal de sudoración?", answer: "Pésate sin ropa justo antes de un entrenamiento y de nuevo inmediatamente después, secándote primero, y anota cualquier líquido que bebiste durante la sesión. Cada kilogramo de peso corporal perdido equivale a alrededor de un litro de sudor; suma el volumen que bebiste para obtener el sudor total. Divide entre las horas de ejercicio para tu tasa por hora. Hacer esto en condiciones similares a tu entrenamiento habitual da una cifra personalizada mucho más precisa que una estimación genérica." },
      { question: "¿Puedo beber demasiada agua durante el ejercicio?", answer: "Sí. Beber mucho más de lo que sudas puede diluir el sodio en tu sangre, causando hiponatremia asociada al ejercicio, una condición potencialmente peligrosa con síntomas como náuseas, dolor de cabeza, confusión y, en casos graves, convulsiones. Se ve con más frecuencia en atletas de resistencia lentos que beben demasiada agua pura. Busca igualar aproximadamente la ingesta a las pérdidas por sudor en vez de beber lo máximo posible, y usa bebidas con electrolitos en sesiones largas. Beber según la sed es una guía segura para la mayoría." },
      { question: "¿Necesito bebidas deportivas o basta el agua?", answer: "Para sesiones de menos de una hora, el agua pura suele ser suficiente. Para ejercicio más largo o muy intenso, sobre todo con calor, las bebidas con sodio y otros electrolitos ayudan a reponer lo que pierdes en el sudor, mantener el equilibrio de líquidos y, con algo de carbohidrato, sostener la energía. Los electrolitos también reducen el riesgo de hiponatremia en esfuerzos prolongados. Elige según la duración, intensidad y salinidad del sudor; si notas manchas blancas de sal en la ropa, probablemente pierdes más sodio y te benefician los electrolitos." },
      { question: "¿Cuáles son las señales de alarma de deshidratación durante el ejercicio?", answer: "Las señales tempranas incluyen sed, boca seca, orina oscura, fatiga que aparece antes de lo habitual, una frecuencia cardíaca más alta a tu esfuerzo normal y un rendimiento reducido. Al empeorar puedes sentir mareo, dolor de cabeza, calambres o náuseas, y dejar de sudar en una enfermedad grave por calor, que es una emergencia médica. Si notas estas señales, baja el ritmo, ve a la sombra y bebe líquidos con electrolitos. Prevenir la deshidratación bebiendo de forma constante es mucho mejor que tratarla." },
      { question: "¿Debo hidratarme también antes y después del ejercicio?", answer: "Por supuesto. Llegar bien hidratado importa tanto como beber durante el ejercicio, así que busca beber líquidos en las horas previas hasta que tu orina esté pálida. Durante la sesión, bebe a sorbos para reponer las pérdidas como estima esta calculadora. Después, rehidrata bebiendo aproximadamente 1,2 a 1,5 litros por cada kilogramo de peso corporal perdido, incluyendo sodio para ayudar a retener el líquido. Repartir la ingesta antes, durante y después te mantiene en mejor equilibrio que intentar recuperar todo de una vez." },
    ],
  },
  {
    id: "steps-to-calories",
    slug: "steps-to-calories-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Steps to Calories Calculator",
    shortDescription: "Convert a daily step count into an estimate of calories burned.",
    seoTitle: "Steps to Calories Calculator — Convert Steps Burned",
    metaDescription:
      "Free steps to calories calculator. Convert your daily step count and body weight into an estimate of how many calories those steps burned.",
    primaryKeyword: "steps to calories calculator",
    secondaryKeywords: ["steps calorie calculator", "calories burned walking", "convert steps to calories"],
    fields: [
      { id: "steps", label: "Number of steps", type: "number", unit: "steps", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "caloriesBurned", label: "Calories burned", format: "number", decimals: 0, unit: "kcal", isPrimary: true },
    ],
    formula: "Calories = steps × weight(kg) × 0.00057",
    explanation:
      "Walking is one of the most accessible forms of exercise, and tracking steps is a simple way to gauge daily activity, but a raw step count says little about energy used unless you convert it. A steps to calories calculator translates the number of steps you take into an estimate of calories burned, scaled by your body weight because moving a heavier body costs more energy per step. This tool multiplies your steps by your weight in kilograms and a small conversion constant that reflects the average energy cost of a single step. The result gives a practical sense of how much a walk, a busy day of errands, or a deliberate ten-thousand-step target actually contributes to your energy expenditure. A steps to calories calculator is handy for anyone using a pedometer, phone or smartwatch who wants to connect their step goal to weight management or general fitness. It also helps put popular targets in perspective: the widely cited ten thousand steps a day is a helpful motivational round number rather than a strict scientific threshold, and research shows meaningful health benefits accrue well below it, with gains continuing as steps rise. Keep in mind that this is an estimate: actual calories depend on your stride length, walking speed, incline, fitness and terrain, none of which a simple step count captures. Faster or uphill walking burns more per step than the average built into the constant. Use the figure as an easy, motivating approximation to track trends and support activity goals rather than a precise measurement.",
    formulaExplanation:
      "The formula multiplies your step count by your body weight because each step must lift and move your mass, so heavier people spend more energy per step. The constant 0.00057 represents the approximate kilocalories burned per step per kilogram of body weight, derived from average walking data across stride length and pace. Multiplying the three together, steps, weight and the constant, gives a quick estimate of total calories burned, though real values shift with speed, incline and individual gait.",
    example: {
      inputs: { steps: 10000, weightKg: 70 },
      explanation: "For 10,000 steps at 70 kg: 10,000 × 70 × 0.00057 = 399 kcal burned.",
    },
    faqs: [
      { question: "How many calories does 10,000 steps burn?", answer: "It depends mainly on your body weight, but for a person of around 70 kilograms, ten thousand steps burn roughly 400 calories using this estimate. A heavier person burns more and a lighter person less, since energy scales with the mass being moved. Speed and terrain also matter, so brisk or uphill walking burns more than the average. Treat 400 as a ballpark for a typical adult rather than a fixed figure for everyone." },
      { question: "Is 10,000 steps a day a scientific target?", answer: "Not originally. The ten-thousand-step goal began as a marketing slogan for a Japanese pedometer in the 1960s, not a research finding. Studies since show substantial health benefits at lower counts, with mortality risk dropping notably from around four to seven thousand steps a day and continuing to improve as steps increase, plateauing higher up. Ten thousand remains a fine motivational target, but do not feel it is a strict minimum; more movement of any amount helps." },
      { question: "Why does body weight change the calorie estimate?", answer: "Every step requires energy to lift, support and propel your body mass, so a heavier person expends more calories covering the same number of steps than a lighter person. That is why the formula multiplies steps by weight rather than using a flat per-step figure. It also means that as you lose weight, the calories burned per step gradually fall, which is one reason a step goal that once created a deficit may burn slightly less over time." },
      { question: "How accurate are step-based calorie estimates?", answer: "They are rough approximations. A simple steps-to-calories formula uses an average energy cost per step and cannot account for your individual stride length, walking speed, incline, fitness or efficiency, all of which affect real energy use. Fitness trackers refine estimates by adding heart rate and motion data but still carry error. Use the number to track your own trends and stay motivated rather than treating it as a precise measurement of exactly how many calories you burned." },
      { question: "Are steps enough exercise on their own?", answer: "Walking and accumulating steps deliver real benefits for heart health, mood, blood sugar and weight management, and a high daily step count is genuinely valuable. However, steps mostly provide low-to-moderate aerobic activity and do little for muscular strength. For well-rounded fitness, combine regular walking with resistance training a couple of times a week and some higher-intensity cardio. Steps are an excellent foundation of daily movement, but they work best as part of a broader routine." },
    ],
    relatedCalculators: ["calories-burned-by-activity-calculator", "tdee-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "CDC physical activity guidance",
    sourceUrl: "https://www.cdc.gov/physical-activity-basics/benefits/index.html",
    slugEs: "calculadora-de-pasos-a-calorias",
    titleEs: "Calculadora de Pasos a Calorías",
    shortDescriptionEs: "Convierte un recuento diario de pasos en una estimación de calorías quemadas.",
    seoTitleEs: "Calculadora de Pasos a Calorías — Convierte Pasos Quemados",
    metaDescriptionEs:
      "Calculadora gratuita de pasos a calorías. Convierte tu recuento diario de pasos y tu peso corporal en una estimación de cuántas calorías quemaron esos pasos.",
    primaryKeywordEs: "calculadora de pasos a calorías",
    secondaryKeywordsEs: ["calculadora de calorías por pasos", "calorías quemadas caminando", "convertir pasos a calorías"],
    formulaExplanationEs:
      "La fórmula multiplica tu recuento de pasos por tu peso corporal porque cada paso debe levantar y mover tu masa, así que las personas más pesadas gastan más energía por paso. La constante 0,00057 representa las kilocalorías aproximadas quemadas por paso por kilogramo de peso corporal, derivada de datos promedio de caminata a través de la longitud de zancada y el ritmo. Multiplicar los tres, pasos, peso y la constante, da una estimación rápida de las calorías totales quemadas, aunque los valores reales cambian con la velocidad, la pendiente y la marcha individual.",
    explanationEs:
      "Caminar es una de las formas de ejercicio más accesibles, y contar pasos es una manera simple de medir la actividad diaria, pero un recuento de pasos dice poco sobre la energía usada a menos que lo conviertas. Una calculadora de pasos a calorías traduce el número de pasos que das en una estimación de calorías quemadas, escalada por tu peso corporal porque mover un cuerpo más pesado cuesta más energía por paso. Esta herramienta multiplica tus pasos por tu peso en kilogramos y una pequeña constante de conversión que refleja el costo energético medio de un solo paso. El resultado da una idea práctica de cuánto aportan a tu gasto energético una caminata, un día ajetreado de recados o una meta deliberada de diez mil pasos. Una calculadora de pasos a calorías es útil para quien use un podómetro, teléfono o reloj inteligente y quiera conectar su meta de pasos con el control del peso o la condición física general. También ayuda a poner en perspectiva metas populares: los muy citados diez mil pasos al día son un número redondo motivador más que un umbral científico estricto, y la investigación muestra beneficios de salud significativos bastante por debajo de esa cifra, con ganancias que continúan al aumentar los pasos. Ten en cuenta que esto es una estimación: las calorías reales dependen de la longitud de tu zancada, la velocidad, la pendiente, la condición física y el terreno, nada de lo cual capta un simple recuento de pasos. Caminar más rápido o cuesta arriba quema más por paso que el promedio incorporado en la constante. Usa la cifra como una aproximación fácil y motivadora para seguir tendencias y apoyar tus metas de actividad más que como una medición precisa.",
    exampleEs: {
      inputs: { steps: 10000, weightKg: 70 },
      explanation: "Para 10.000 pasos a 70 kg: 10.000 × 70 × 0,00057 = 399 kcal quemadas.",
    },
    faqsEs: [
      { question: "¿Cuántas calorías quema 10.000 pasos?", answer: "Depende sobre todo de tu peso corporal, pero para una persona de alrededor de 70 kilogramos, diez mil pasos queman aproximadamente 400 calorías con esta estimación. Una persona más pesada quema más y una más ligera menos, ya que la energía escala con la masa movida. La velocidad y el terreno también importan, así que caminar rápido o cuesta arriba quema más que el promedio. Trata 400 como una cifra aproximada para un adulto típico más que un valor fijo para todos." },
      { question: "¿Es 10.000 pasos al día una meta científica?", answer: "No originalmente. La meta de diez mil pasos empezó como un eslogan de marketing para un podómetro japonés en la década de 1960, no como un hallazgo de investigación. Los estudios desde entonces muestran beneficios de salud sustanciales con recuentos menores, con el riesgo de mortalidad bajando notablemente desde unos cuatro a siete mil pasos al día y mejorando al aumentar los pasos, estabilizándose más arriba. Diez mil sigue siendo una buena meta motivadora, pero no la sientas como un mínimo estricto; más movimiento de cualquier cantidad ayuda." },
      { question: "¿Por qué el peso corporal cambia la estimación de calorías?", answer: "Cada paso requiere energía para levantar, sostener e impulsar tu masa corporal, así que una persona más pesada gasta más calorías cubriendo el mismo número de pasos que una más ligera. Por eso la fórmula multiplica los pasos por el peso en lugar de usar una cifra plana por paso. También significa que al perder peso, las calorías quemadas por paso bajan gradualmente, una razón por la que una meta de pasos que antes creaba un déficit puede quemar algo menos con el tiempo." },
      { question: "¿Qué precisión tienen las estimaciones de calorías por pasos?", answer: "Son aproximaciones burdas. Una fórmula simple de pasos a calorías usa un costo energético medio por paso y no puede tener en cuenta tu longitud de zancada individual, velocidad al caminar, pendiente, condición física o eficiencia, todo lo cual afecta el uso real de energía. Los monitores de actividad refinan las estimaciones añadiendo frecuencia cardíaca y datos de movimiento pero aún tienen error. Usa el número para seguir tus propias tendencias y mantenerte motivado más que como una medición precisa de cuántas calorías quemaste exactamente." },
      { question: "¿Los pasos son suficiente ejercicio por sí solos?", answer: "Caminar y acumular pasos aporta beneficios reales para la salud cardíaca, el ánimo, el azúcar en sangre y el control del peso, y un recuento diario alto de pasos es genuinamente valioso. Sin embargo, los pasos aportan sobre todo actividad aeróbica de baja a moderada intensidad y hacen poco por la fuerza muscular. Para una condición física completa, combina caminar regularmente con entrenamiento de fuerza un par de veces por semana y algo de cardio de mayor intensidad. Los pasos son una excelente base de movimiento diario, pero funcionan mejor como parte de una rutina más amplia." },
    ],
  },
  {
    id: "blood-pressure-category",
    slug: "blood-pressure-category-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Blood Pressure Category Calculator",
    shortDescription: "Classify a blood pressure reading using AHA categories.",
    seoTitle: "Blood Pressure Category Calculator — AHA Chart",
    metaDescription:
      "Free blood pressure category calculator. Enter your systolic and diastolic numbers to see where your reading falls on the American Heart Association chart.",
    primaryKeyword: "blood pressure category calculator",
    secondaryKeywords: ["blood pressure chart", "bp category calculator", "hypertension stage calculator"],
    fields: [
      { id: "systolic", label: "Systolic (top number)", type: "number", unit: "mmHg", placeholder: "120", required: true, span: 1, min: 0 },
      { id: "diastolic", label: "Diastolic (bottom number)", type: "number", unit: "mmHg", placeholder: "80", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "category", label: "Blood pressure category", format: "text", isPrimary: true },
    ],
    formula: "AHA: Normal <120/<80; Elevated 120–129/<80; Stage 1 130–139 or 80–89; Stage 2 ≥140 or ≥90; Crisis ≥180 or ≥120",
    explanation:
      "Blood pressure is the force your circulating blood exerts against artery walls, written as two numbers: systolic, the higher figure during a heartbeat, over diastolic, the lower figure between beats. A blood pressure category calculator takes those two numbers and tells you which band your reading falls into under the American Heart Association classification, from normal through elevated and the stages of hypertension to a hypertensive crisis. Knowing your category matters because high blood pressure is a leading, largely silent risk factor for heart attack, stroke, heart failure and kidney disease, often causing no symptoms until damage is advanced. Under the AHA scheme, a reading below 120 over 80 is normal; a systolic of 120 to 129 with a diastolic under 80 is elevated; stage 1 hypertension is 130 to 139 systolic or 80 to 89 diastolic; stage 2 is 140 or above systolic or 90 or above diastolic; and a reading at or above 180 over 120 is a hypertensive crisis needing urgent attention. Note the classification uses whichever number, systolic or diastolic, lands in the higher category. A blood pressure category calculator helps you interpret a home or clinic reading quickly, but a single measurement is only a snapshot; blood pressure fluctuates with stress, activity, caffeine, time of day and measurement technique. Diagnosis relies on multiple readings over time under proper conditions. Use this tool for awareness and to prompt conversations with your doctor, not to diagnose or change treatment yourself, and seek immediate care for crisis-level readings, especially with symptoms.",
    formulaExplanation:
      "The calculator sorts a reading by comparing the systolic and diastolic values against the American Heart Association's thresholds, and it deliberately assigns the higher of the two categories the numbers fall into, because risk follows the worse figure. For example, a normal systolic paired with a raised diastolic still counts as hypertension. The bands escalate from normal to elevated to stage 1 and stage 2 hypertension, with a separate crisis level for very high readings that demand prompt medical evaluation.",
    example: {
      inputs: { systolic: 135, diastolic: 85 },
      explanation: "135 systolic falls in the 130–139 band and 85 diastolic in 80–89, so this is Hypertension stage 1.",
    },
    faqs: [
      { question: "Which number matters more, systolic or diastolic?", answer: "Both matter, and this classification uses whichever falls into the higher category. Historically diastolic drew attention, but systolic pressure is now considered the stronger predictor of cardiovascular risk in most adults over about fifty, as arteries stiffen with age. In younger people diastolic can be more informative. Because either elevated number raises risk, treatment targets both. If one of your numbers is high while the other is normal, you are still classified by the higher, more concerning value." },
      { question: "Why can a single reading be misleading?", answer: "Blood pressure naturally varies throughout the day and rises with stress, caffeine, exercise, a full bladder, talking, or the anxiety of a clinic visit, known as white-coat effect. A single high reading does not confirm hypertension, and one normal reading does not rule it out. Doctors diagnose based on several measurements taken correctly on different days, often supported by home or 24-hour monitoring. Use this calculator to interpret a reading, but base any diagnosis on a proper series." },
      { question: "What should I do about a hypertensive crisis reading?", answer: "A reading at or above 180 over 120 is a hypertensive crisis. If you get this figure, rest a few minutes and measure again; if it remains that high, contact your doctor promptly. If it is accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness or weakness, vision changes, or difficulty speaking, treat it as a medical emergency and call emergency services immediately, as it may signal organ damage in progress that needs urgent treatment." },
      { question: "How can I lower high blood pressure?", answer: "Lifestyle changes are the foundation and can be very effective: reducing sodium, eating more fruits, vegetables and whole grains as in the DASH diet, staying physically active, losing excess weight, limiting alcohol, not smoking, managing stress and sleeping well. For many people with stage 1 or higher hypertension, doctors also prescribe medication. The right approach depends on your category, overall cardiovascular risk and other conditions, so work with your healthcare provider to set a plan and monitor progress." },
      { question: "How should I measure blood pressure accurately at home?", answer: "Sit quietly for five minutes with your back supported and feet flat, avoid caffeine, exercise and smoking for thirty minutes beforehand, and empty your bladder. Rest your arm on a table at heart level, use a properly sized cuff on bare skin, and do not talk during the reading. Take two or three measurements a minute apart and record the average, at the same times each day. Good technique makes home readings far more reliable and useful." },
    ],
    relatedCalculators: ["bmi-calculator", "max-heart-rate-calculator", "waist-to-hip-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American Heart Association blood pressure categories",
    sourceUrl: "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
    slugEs: "calculadora-de-categoria-de-presion-arterial",
    titleEs: "Calculadora de Categoría de Presión Arterial",
    shortDescriptionEs: "Clasifica una lectura de presión arterial usando las categorías de la AHA.",
    seoTitleEs: "Calculadora de Categoría de Presión Arterial — Tabla de la AHA",
    metaDescriptionEs:
      "Calculadora gratuita de categoría de presión arterial. Introduce tus números sistólico y diastólico para ver dónde cae tu lectura en la tabla de la American Heart Association.",
    primaryKeywordEs: "calculadora de categoría de presión arterial",
    secondaryKeywordsEs: ["tabla de presión arterial", "calculadora de categoría de presión", "calculadora de etapa de hipertensión"],
    formulaExplanationEs:
      "La calculadora clasifica una lectura comparando los valores sistólico y diastólico con los umbrales de la American Heart Association, y asigna deliberadamente la más alta de las dos categorías en que caen los números, porque el riesgo sigue a la cifra peor. Por ejemplo, un sistólico normal junto a un diastólico elevado sigue contando como hipertensión. Las bandas escalan de normal a elevada a hipertensión etapa 1 y etapa 2, con un nivel de crisis aparte para lecturas muy altas que exigen evaluación médica pronta.",
    explanationEs:
      "La presión arterial es la fuerza que tu sangre circulante ejerce contra las paredes de las arterias, escrita como dos números: la sistólica, la cifra más alta durante un latido, sobre la diastólica, la cifra más baja entre latidos. Una calculadora de categoría de presión arterial toma esos dos números y te dice en qué banda cae tu lectura según la clasificación de la American Heart Association, desde normal pasando por elevada y las etapas de hipertensión hasta una crisis hipertensiva. Conocer tu categoría importa porque la presión alta es un factor de riesgo importante y en gran parte silencioso de infarto, ictus, insuficiencia cardíaca y enfermedad renal, que a menudo no causa síntomas hasta que el daño está avanzado. Bajo el esquema de la AHA, una lectura por debajo de 120 sobre 80 es normal; un sistólico de 120 a 129 con un diastólico bajo 80 es elevada; la hipertensión etapa 1 es de 130 a 139 sistólica o de 80 a 89 diastólica; la etapa 2 es de 140 o más sistólica o de 90 o más diastólica; y una lectura de 180 sobre 120 o más es una crisis hipertensiva que necesita atención urgente. Ten en cuenta que la clasificación usa el número, sistólico o diastólico, que caiga en la categoría más alta. Una calculadora de categoría de presión arterial ayuda a interpretar rápidamente una lectura de casa o clínica, pero una sola medición es solo una instantánea; la presión fluctúa con el estrés, la actividad, la cafeína, la hora del día y la técnica de medición. El diagnóstico se basa en varias lecturas a lo largo del tiempo en condiciones adecuadas. Usa esta herramienta para tomar conciencia y para motivar conversaciones con tu médico, no para diagnosticar o cambiar el tratamiento por tu cuenta, y busca atención inmediata ante lecturas de nivel de crisis, especialmente con síntomas.",
    exampleEs: {
      inputs: { systolic: 135, diastolic: 85 },
      explanation: "135 sistólica cae en la banda 130–139 y 85 diastólica en 80–89, así que esto es hipertensión etapa 1.",
    },
    faqsEs: [
      { question: "¿Qué número importa más, el sistólico o el diastólico?", answer: "Ambos importan, y esta clasificación usa el que caiga en la categoría más alta. Históricamente el diastólico atrajo atención, pero la presión sistólica se considera ahora el predictor más fuerte de riesgo cardiovascular en la mayoría de los adultos mayores de unos cincuenta años, a medida que las arterias se endurecen con la edad. En personas más jóvenes el diastólico puede ser más informativo. Como cualquier número elevado eleva el riesgo, el tratamiento apunta a ambos. Si uno está alto y el otro normal, se te clasifica por el valor más alto y preocupante." },
      { question: "¿Por qué una sola lectura puede ser engañosa?", answer: "La presión arterial varía naturalmente a lo largo del día y sube con el estrés, la cafeína, el ejercicio, una vejiga llena, hablar, o la ansiedad de una visita clínica, conocida como efecto de bata blanca. Una sola lectura alta no confirma hipertensión, y una lectura normal no la descarta. Los médicos diagnostican con varias mediciones tomadas correctamente en días distintos, a menudo con apoyo de monitoreo en casa o de 24 horas. Usa esta calculadora para interpretar una lectura, pero basa cualquier diagnóstico en una serie adecuada." },
      { question: "¿Qué debo hacer ante una lectura de crisis hipertensiva?", answer: "Una lectura de 180 sobre 120 o más es una crisis hipertensiva. Si obtienes esta cifra, descansa unos minutos y mide de nuevo; si sigue tan alta, contacta a tu médico pronto. Si va acompañada de síntomas como dolor de pecho, falta de aire, dolor de espalda, entumecimiento o debilidad, cambios de visión o dificultad para hablar, trátala como una emergencia médica y llama a los servicios de emergencia de inmediato, ya que puede indicar daño de órganos en curso que necesita tratamiento urgente." },
      { question: "¿Cómo puedo bajar la presión arterial alta?", answer: "Los cambios de estilo de vida son la base y pueden ser muy eficaces: reducir el sodio, comer más frutas, verduras y granos integrales como en la dieta DASH, mantenerse activo, perder el exceso de peso, limitar el alcohol, no fumar, manejar el estrés y dormir bien. Para muchas personas con hipertensión etapa 1 o superior, los médicos también recetan medicación. El enfoque correcto depende de tu categoría, riesgo cardiovascular general y otras afecciones, así que trabaja con tu proveedor de salud para fijar un plan y vigilar el progreso." },
      { question: "¿Cómo debo medir la presión arterial con precisión en casa?", answer: "Siéntate en silencio cinco minutos con la espalda apoyada y los pies planos, evita cafeína, ejercicio y tabaco los treinta minutos previos, y vacía la vejiga. Apoya el brazo en una mesa a la altura del corazón, usa un manguito del tamaño adecuado sobre la piel desnuda, y no hables durante la lectura. Toma dos o tres mediciones con un minuto de diferencia y registra el promedio, a las mismas horas cada día. Una buena técnica hace las lecturas de casa mucho más fiables y útiles." },
    ],
  },
  {
    id: "waist-to-hip-ratio",
    slug: "waist-to-hip-ratio-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Waist-to-Hip Ratio Calculator",
    shortDescription: "Assess fat-distribution health risk from waist and hip measurements.",
    seoTitle: "Waist-to-Hip Ratio Calculator — WHR & Risk",
    metaDescription:
      "Free waist-to-hip ratio calculator. Divide your waist by your hip measurement to assess body-fat distribution and health risk using WHO thresholds.",
    primaryKeyword: "waist to hip ratio calculator",
    secondaryKeywords: ["whr calculator", "waist hip ratio", "body shape risk calculator"],
    fields: [
      { id: "waistCm", label: "Waist circumference", type: "number", unit: "cm", placeholder: "85", required: true, span: 1, min: 0 },
      { id: "hipCm", label: "Hip circumference", type: "number", unit: "cm", placeholder: "100", required: true, span: 1, min: 0 },
      sexField,
    ],
    results: [
      { id: "whr", label: "Waist-to-hip ratio", format: "number", decimals: 2, isPrimary: true },
      { id: "riskCategory", label: "Risk category", format: "text", isPrimary: false },
    ],
    formula: "WHR = waist ÷ hip; elevated risk when >0.90 (men) or >0.85 (women) per WHO",
    explanation:
      "The waist-to-hip ratio compares the circumference of your waist with that of your hips, and it is a long-established measure of how body fat is distributed, which turns out to matter as much as how much fat you carry. A waist-to-hip ratio calculator divides your waist measurement by your hip measurement to produce a single number that reflects your body shape. A higher ratio means proportionally more fat around the abdomen, the so-called apple shape, while a lower ratio reflects fat carried around the hips and thighs, the pear shape. This distinction is important because abdominal, or visceral, fat sits around internal organs and is strongly linked to heart disease, type 2 diabetes and other metabolic problems, whereas fat on the hips and thighs carries less risk. The World Health Organization considers the risk elevated when the ratio exceeds about 0.90 in men or 0.85 in women, reflecting the different body-fat patterns between sexes. A waist-to-hip ratio calculator therefore adds context that weight or body mass index alone cannot, flagging central fat even in people whose overall weight looks normal. Measure your waist at its narrowest point or midway between the lowest rib and the hip bone, and your hips at their widest, keeping the tape snug and level and breathing normally. Because the ratio depends on measurement technique, take care to be consistent. Treat the result as a screening indicator that prompts attention to central fat and metabolic health, not a diagnosis, and combine it with other measures and professional advice.",
    formulaExplanation:
      "The ratio divides waist circumference by hip circumference, producing a dimensionless number that captures where your body stores fat rather than how much you weigh. A value near or above the WHO thresholds means fat is concentrated around the abdomen, which surrounds organs and drives metabolic risk, whereas a lower value reflects hip and thigh storage that is metabolically safer. The thresholds differ by sex, higher for men, because typical healthy fat distribution and hormonal patterns place women's fat more around the hips.",
    example: {
      inputs: { waistCm: 85, hipCm: 100, sex: "male" },
      explanation: "85 ÷ 100 = 0.85, which is below the male threshold of 0.90, so this falls in the low-risk band.",
    },
    faqs: [
      { question: "How is waist-to-hip ratio different from BMI?", answer: "Body mass index compares weight to height and estimates whether you carry excess weight overall, but it cannot tell where fat sits or distinguish fat from muscle. Waist-to-hip ratio instead reveals fat distribution, highlighting abdominal fat that is especially harmful to metabolic and heart health. Someone can have a normal BMI yet a high ratio, signalling hidden central fat and raised risk. Using both measures together gives a fuller picture than either alone." },
      { question: "Why do men and women have different thresholds?", answer: "Men and women naturally store fat in different patterns because of hormonal differences. Women tend to carry more fat around the hips, thighs and buttocks, giving them lower waist-to-hip ratios on average, while men more readily accumulate fat around the abdomen. The World Health Organization sets a higher cut-off for men, about 0.90 versus 0.85 for women, so that each sex is judged against its own typical distribution and the thresholds reflect comparable levels of health risk." },
      { question: "Where exactly should I measure my waist and hips?", answer: "Measure your waist at the narrowest point of your torso, roughly midway between the lowest rib and the top of the hip bone, and your hips at the widest part of your buttocks. Keep the tape snug against the skin without compressing it, level all the way around, and take readings after breathing out normally while standing relaxed. Consistency is key, because small differences in placement noticeably change the ratio, so measure the same way each time." },
      { question: "Is waist-to-hip ratio a reliable health measure?", answer: "It is a useful and well-studied indicator of fat distribution, and a high ratio is associated with greater risk of cardiovascular disease and type 2 diabetes, sometimes predicting risk better than BMI. However, it has limits: it can be affected by measurement error, is less meaningful during pregnancy, and does not directly measure visceral fat. It works best as one screening tool among several, alongside waist circumference, BMI and clinical assessment, rather than a standalone diagnosis." },
      { question: "Can I improve my waist-to-hip ratio?", answer: "Yes, primarily by reducing abdominal fat, which shrinks the waist and lowers the ratio, since hip circumference changes less. A combination of a modest calorie deficit, regular aerobic exercise, resistance training, adequate sleep and limiting alcohol and refined sugar helps reduce visceral fat over time. Spot reduction does not work, so overall fat loss is the route. Even modest reductions in waist size meaningfully improve the ratio and, more importantly, the metabolic risk it reflects." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "waist-to-height-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "World Health Organization waist-hip ratio report (2008)",
    sourceUrl: "https://www.who.int/publications/i/item/9789241501491",
    slugEs: "calculadora-de-relacion-cintura-cadera",
    titleEs: "Calculadora de Relación Cintura-Cadera",
    shortDescriptionEs: "Evalúa el riesgo de salud por distribución de grasa a partir de las medidas de cintura y cadera.",
    seoTitleEs: "Calculadora de Relación Cintura-Cadera — ICC y Riesgo",
    metaDescriptionEs:
      "Calculadora gratuita de relación cintura-cadera. Divide tu cintura entre tu cadera para evaluar la distribución de grasa corporal y el riesgo de salud usando los umbrales de la OMS.",
    primaryKeywordEs: "calculadora de relación cintura-cadera",
    secondaryKeywordsEs: ["calculadora de icc", "relación cintura cadera", "calculadora de riesgo por forma corporal"],
    formulaExplanationEs:
      "La relación divide la circunferencia de la cintura entre la circunferencia de la cadera, produciendo un número adimensional que capta dónde almacena grasa tu cuerpo más que cuánto pesas. Un valor cercano o por encima de los umbrales de la OMS significa que la grasa se concentra alrededor del abdomen, que rodea los órganos e impulsa el riesgo metabólico, mientras que un valor más bajo refleja almacenamiento en cadera y muslos, metabólicamente más seguro. Los umbrales difieren por sexo, más altos para hombres, porque la distribución saludable típica y los patrones hormonales sitúan la grasa de la mujer más en las caderas.",
    explanationEs:
      "La relación cintura-cadera compara la circunferencia de tu cintura con la de tus caderas, y es una medida establecida desde hace tiempo de cómo se distribuye la grasa corporal, algo que resulta importar tanto como cuánta grasa cargas. Una calculadora de relación cintura-cadera divide tu medida de cintura entre tu medida de cadera para producir un solo número que refleja tu forma corporal. Una relación más alta significa proporcionalmente más grasa alrededor del abdomen, la llamada forma de manzana, mientras que una relación más baja refleja grasa cargada alrededor de caderas y muslos, la forma de pera. Esta distinción es importante porque la grasa abdominal, o visceral, se sitúa alrededor de los órganos internos y está fuertemente ligada a la enfermedad cardíaca, la diabetes tipo 2 y otros problemas metabólicos, mientras que la grasa en caderas y muslos conlleva menos riesgo. La Organización Mundial de la Salud considera el riesgo elevado cuando la relación supera unos 0,90 en hombres o 0,85 en mujeres, reflejando los distintos patrones de grasa corporal entre sexos. Una calculadora de relación cintura-cadera, por tanto, añade contexto que el peso o el índice de masa corporal por sí solos no pueden, señalando la grasa central incluso en personas cuyo peso general parece normal. Mide tu cintura en su punto más estrecho o a medio camino entre la costilla más baja y el hueso de la cadera, y tus caderas en su punto más ancho, manteniendo la cinta ajustada y nivelada y respirando con normalidad. Como la relación depende de la técnica de medición, cuida ser consistente. Trata el resultado como un indicador de cribado que motiva atención a la grasa central y la salud metabólica, no un diagnóstico, y combínalo con otras medidas y consejo profesional.",
    exampleEs: {
      inputs: { waistCm: 85, hipCm: 100, sex: "male" },
      explanation: "85 ÷ 100 = 0,85, que está por debajo del umbral masculino de 0,90, así que cae en la banda de bajo riesgo.",
    },
    faqsEs: [
      { question: "¿En qué se diferencia la relación cintura-cadera del IMC?", answer: "El índice de masa corporal compara el peso con la altura y estima si cargas exceso de peso en general, pero no puede decir dónde se sitúa la grasa ni distinguir grasa de músculo. La relación cintura-cadera en cambio revela la distribución de grasa, destacando la grasa abdominal especialmente dañina para la salud metabólica y cardíaca. Alguien puede tener un IMC normal pero una relación alta, señalando grasa central oculta y riesgo elevado. Usar ambas medidas juntas da una imagen más completa que cualquiera por sí sola." },
      { question: "¿Por qué hombres y mujeres tienen umbrales distintos?", answer: "Hombres y mujeres almacenan grasa en patrones distintos por diferencias hormonales. Las mujeres tienden a cargar más grasa alrededor de caderas, muslos y glúteos, dándoles relaciones cintura-cadera más bajas en promedio, mientras que los hombres acumulan grasa más fácilmente alrededor del abdomen. La Organización Mundial de la Salud fija un corte más alto para hombres, unos 0,90 frente a 0,85 en mujeres, para que cada sexo se juzgue frente a su distribución típica y los umbrales reflejen niveles comparables de riesgo de salud." },
      { question: "¿Dónde exactamente debo medir mi cintura y caderas?", answer: "Mide tu cintura en el punto más estrecho del torso, aproximadamente a medio camino entre la costilla más baja y la parte alta del hueso de la cadera, y tus caderas en la parte más ancha de los glúteos. Mantén la cinta ajustada a la piel sin comprimirla, nivelada en todo el contorno, y toma las lecturas tras exhalar con normalidad de pie y relajado. La consistencia es clave, porque pequeñas diferencias de colocación cambian notablemente la relación, así que mide del mismo modo cada vez." },
      { question: "¿Es la relación cintura-cadera una medida fiable de salud?", answer: "Es un indicador útil y bien estudiado de la distribución de grasa, y una relación alta se asocia a mayor riesgo de enfermedad cardiovascular y diabetes tipo 2, a veces prediciendo el riesgo mejor que el IMC. Sin embargo, tiene límites: puede verse afectada por error de medición, es menos significativa durante el embarazo, y no mide directamente la grasa visceral. Funciona mejor como una herramienta de cribado entre varias, junto con la circunferencia de cintura, el IMC y la evaluación clínica, más que como un diagnóstico por sí sola." },
      { question: "¿Puedo mejorar mi relación cintura-cadera?", answer: "Sí, principalmente reduciendo la grasa abdominal, que encoge la cintura y baja la relación, ya que la circunferencia de la cadera cambia menos. Una combinación de un déficit calórico moderado, ejercicio aeróbico regular, entrenamiento de fuerza, sueño adecuado y limitar el alcohol y el azúcar refinado ayuda a reducir la grasa visceral con el tiempo. La reducción localizada no funciona, así que la vía es la pérdida general de grasa. Incluso reducciones modestas del tamaño de cintura mejoran de forma significativa la relación y, más importante, el riesgo metabólico que refleja." },
    ],
  },
];
