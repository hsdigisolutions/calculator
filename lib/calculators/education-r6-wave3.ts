import type { CalculatorDefinition } from "../types";

export const educationR6Calculators: CalculatorDefinition[] = [
  {
    id: "final-grade",
    slug: "final-grade-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Final Grade Calculator",
    shortDescription: "Find the score you need on your final exam.",
    seoTitle: "Final Grade Calculator — What Do I Need on My Final?",
    metaDescription:
      "Free final grade calculator. Enter your current grade, the grade you want, and the final's weight to see exactly what score you need on the exam.",
    primaryKeyword: "final grade calculator",
    secondaryKeywords: ["what do i need on my final", "final exam calculator", "final grade needed calculator"],
    fields: [
      { id: "currentGrade", label: "Current grade", type: "number", unit: "%", placeholder: "e.g. 85", min: 0, required: true, helpText: "Your grade in the course so far, before the final." },
      { id: "desiredGrade", label: "Desired overall grade", type: "number", unit: "%", placeholder: "e.g. 90", min: 0, required: true, helpText: "The final course grade you are aiming for." },
      { id: "finalWeight", label: "Final exam weight", type: "number", unit: "%", placeholder: "e.g. 40", min: 0, max: 100, required: true, helpText: "How much the final counts toward your course grade." },
    ],
    results: [
      { id: "requiredFinalScore", label: "Score needed on final", format: "percentage", decimals: 1, isPrimary: true },
    ],
    formula: "required = (desired − current × (1 − w)) ÷ w,  where w = finalWeight ÷ 100",
    explanation:
      "A final grade calculator answers the question every student asks in the last week of a course: what do I actually need to score on the final exam to end up with the grade I want? You enter three numbers — the grade you hold in the class right now, the overall grade you are targeting, and the percentage of the course the final is worth — and the tool solves for the exam score that gets you there. Behind the scenes it treats your course grade as a weighted blend of everything done so far and the final still to come. The work already banked counts for the remaining share of the course, and the final counts for its stated weight. By fixing your target as the finished result and rearranging that relationship, the calculator isolates the one unknown: the score you must earn on the exam. The number it returns is honest about reality. If it comes back above 100, the target is out of reach no matter how well you do, and it is time to reset expectations or talk to your instructor. If it comes back very low or negative, you have already secured the grade and can walk in relaxed. Students use it to prioritise study time across several courses at once, focusing effort where the required score is highest and the goal is still achievable.",
    formulaExplanation:
      "Your final course grade is a weighted average: the work completed so far carries the leftover weight (1 − w) while the final exam carries weight w. Setting that weighted average equal to your desired grade gives desired = current × (1 − w) + finalScore × w. Solving for the only unknown, the final score, means subtracting the already-earned contribution and dividing by the final's weight. A required score above 100 signals the target is mathematically impossible with this exam alone.",
    formulaSource: "Standard weighted-average grading",
    example: {
      inputs: { currentGrade: "85", desiredGrade: "90", finalWeight: "40" },
      explanation: "(90 − 85 × 0.60) ÷ 0.40 = (90 − 51) ÷ 0.40 = 97.5%. You would need a 97.5 on the final.",
    },
    faqs: [
      { question: "What does it mean if the required score is over 100%?", answer: "It means your target grade is no longer reachable through the final exam alone, because even a perfect score would not lift your average high enough. This usually happens when the final is worth relatively little or your current grade sits well below the goal. Consider whether extra credit is available, adjust your target to a realistic level, or speak with your instructor about your options before the exam." },
      { question: "What if the result is negative or zero?", answer: "A negative or zero required score means you have already locked in your desired grade — even scoring nothing on the final would leave you at or above your target. You can walk into the exam with the pressure off. It still pays to attempt the final properly, since a strong score builds a cushion above your goal and protects against any grading surprises or rounding that works against you." },
      { question: "Where do I find my final exam's weight?", answer: "The weight is listed in your course syllabus, usually in a grading-breakdown section that assigns a percentage to each category such as homework, quizzes, midterms and the final. If the syllabus lists points instead of percentages, divide the final's points by the total points for the whole course and multiply by 100. When in doubt, ask your instructor directly rather than guessing, since the weight drives the whole calculation." },
      { question: "Does this account for extra credit or a curve?", answer: "No. The calculator works from the straightforward weighted-average grading described in your syllabus and does not model extra credit, a class curve, or dropped-lowest-score policies. If your course offers any of those, treat the result as a baseline and adjust. Extra credit effectively lowers the score you truly need, while a harsh curve could raise it. Confirm your instructor's exact policy before relying on the number." },
      { question: "Can I use this if my final is worth 100% of the grade?", answer: "Yes. If the final carries the entire course weight, enter 100 and the required score simply equals your desired grade, because nothing else contributes to the result. That situation is rare but does occur in some intensive or pass-fail formats. More commonly the final is one of several weighted components, and the calculator is most useful precisely because it untangles how your existing work and the exam combine." },
    ],
    slugEs: "calculadora-de-nota-final-necesaria",
    titleEs: "Calculadora de Nota Final",
    shortDescriptionEs: "Descubre qué puntuación necesitas en tu examen final.",
    seoTitleEs: "Calculadora de Nota Final — ¿Qué Necesito en el Final?",
    metaDescriptionEs:
      "Calculadora de nota final gratis. Introduce tu nota actual, la nota que quieres y el peso del examen final para ver exactamente qué puntuación necesitas en el examen.",
    primaryKeywordEs: "calculadora de nota final",
    secondaryKeywordsEs: ["qué necesito en el examen final", "calculadora de examen final", "nota necesaria en el final"],
    formulaExplanationEs:
      "Tu nota final del curso es un promedio ponderado: el trabajo ya completado lleva el peso restante (1 − w) mientras que el examen final lleva el peso w. Igualar ese promedio ponderado a la nota que deseas da: deseada = actual × (1 − w) + puntuación × w. Despejar la única incógnita, la puntuación del final, significa restar la contribución ya obtenida y dividir entre el peso del final. Una puntuación requerida superior a 100 indica que el objetivo es matemáticamente imposible solo con este examen.",
    explanationEs:
      "Una calculadora de nota final responde la pregunta que todo estudiante se hace en la última semana de un curso: ¿qué necesito sacar realmente en el examen final para terminar con la nota que quiero? Introduces tres números — la nota que tienes ahora en la clase, la nota general que persigues y el porcentaje del curso que vale el examen final — y la herramienta resuelve la puntuación de examen que te lleva hasta allí. Internamente trata tu nota del curso como una mezcla ponderada de todo lo hecho hasta ahora y del final pendiente. El trabajo ya realizado cuenta por la parte restante del curso y el examen final cuenta por su peso indicado. Al fijar tu objetivo como resultado terminado y reordenar esa relación, la calculadora aísla la única incógnita: la puntuación que debes obtener. El número que devuelve es honesto: si supera 100, el objetivo es inalcanzable y conviene ajustar expectativas o hablar con tu profesor; si es muy bajo o negativo, ya has asegurado la nota. Los estudiantes la usan para priorizar el tiempo de estudio entre varias asignaturas a la vez, centrando el esfuerzo donde la puntuación requerida es mayor y la meta sigue siendo alcanzable.",
    exampleEs: {
      inputs: { currentGrade: "85", desiredGrade: "90", finalWeight: "40" },
      explanation: "(90 − 85 × 0,60) ÷ 0,40 = (90 − 51) ÷ 0,40 = 97,5%. Necesitarías un 97,5 en el examen final.",
    },
    faqsEs: [
      { question: "¿Qué significa si la puntuación requerida supera el 100%?", answer: "Significa que tu nota objetivo ya no es alcanzable solo con el examen final, porque ni una puntuación perfecta elevaría tu promedio lo suficiente. Suele ocurrir cuando el final vale relativamente poco o tu nota actual está muy por debajo de la meta. Considera si hay crédito extra disponible, ajusta tu objetivo a un nivel realista o habla con tu profesor sobre tus opciones antes del examen." },
      { question: "¿Y si el resultado es negativo o cero?", answer: "Una puntuación requerida negativa o cero significa que ya has asegurado tu nota deseada: incluso sacando cero en el final quedarías en tu objetivo o por encima. Puedes entrar al examen sin presión. Aun así conviene hacerlo bien, ya que una buena puntuación crea un colchón por encima de tu meta y te protege ante sorpresas de corrección o redondeos que jueguen en tu contra." },
      { question: "¿Dónde encuentro el peso de mi examen final?", answer: "El peso aparece en el temario de tu curso, normalmente en una sección de desglose de calificaciones que asigna un porcentaje a cada categoría como tareas, cuestionarios, parciales y el final. Si el temario indica puntos en lugar de porcentajes, divide los puntos del final entre el total de puntos del curso y multiplica por 100. Ante la duda, pregunta directamente a tu profesor en vez de adivinar, ya que el peso mueve todo el cálculo." },
      { question: "¿Esto tiene en cuenta el crédito extra o una curva?", answer: "No. La calculadora funciona con la calificación de promedio ponderado sencilla descrita en tu temario y no modela crédito extra, una curva de clase ni políticas de descartar la nota más baja. Si tu curso ofrece alguna de esas cosas, trata el resultado como una base y ajústalo. El crédito extra reduce la puntuación que realmente necesitas, mientras que una curva dura podría elevarla. Confirma la política exacta de tu profesor." },
      { question: "¿Puedo usar esto si mi final vale el 100% de la nota?", answer: "Sí. Si el final lleva todo el peso del curso, introduce 100 y la puntuación requerida simplemente será igual a tu nota deseada, porque nada más contribuye al resultado. Esa situación es poco común pero ocurre en algunos formatos intensivos o de apto/no apto. Más habitualmente el final es uno de varios componentes ponderados, y la calculadora resulta útil precisamente porque desenreda cómo se combinan tu trabajo previo y el examen." },
    ],
    relatedCalculators: ["grade-calculator", "weighted-grade-calculator", "gpa-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "weighted-grade",
    slug: "weighted-grade-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Weighted Grade Calculator",
    shortDescription: "Average scores that carry different weights.",
    seoTitle: "Weighted Grade Calculator — Free Weighted Average Grade",
    metaDescription:
      "Free weighted grade calculator. Enter up to three scores and their weights to get your true weighted average grade as a percentage.",
    primaryKeyword: "weighted grade calculator",
    secondaryKeywords: ["weighted average grade calculator", "weighted grade average", "grade weight calculator"],
    fields: [
      { id: "score1", label: "Score 1", type: "number", unit: "%", placeholder: "e.g. 88", min: 0, required: true, span: 1 },
      { id: "weight1", label: "Weight 1", type: "number", unit: "%", placeholder: "e.g. 20", min: 0, required: true, span: 1 },
      { id: "score2", label: "Score 2", type: "number", unit: "%", placeholder: "e.g. 92", min: 0, required: false, span: 1 },
      { id: "weight2", label: "Weight 2", type: "number", unit: "%", placeholder: "e.g. 30", min: 0, required: false, span: 1 },
      { id: "score3", label: "Score 3", type: "number", unit: "%", placeholder: "e.g. 79", min: 0, required: false, span: 1 },
      { id: "weight3", label: "Weight 3", type: "number", unit: "%", placeholder: "e.g. 50", min: 0, required: false, span: 1 },
    ],
    results: [
      { id: "weightedAverage", label: "Weighted average", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "weighted average = Σ(score × weight) ÷ Σ(weight)",
    explanation:
      "A weighted grade calculator combines several scores into one average that respects how much each assessment matters. Not every grade in a course counts equally: a final project worth half the grade should move your average far more than a warm-up quiz worth a twentieth of it. Enter each score alongside the weight it carries, and the tool multiplies score by weight, adds those products together, and divides by the total of the weights to produce a single, honest percentage. This is the same weighted-average method that grade books, report cards and grading software use everywhere. Because the calculator divides by the total weight you enter, your weights do not need to add up to 100 — points, category percentages or simple ratios all work, since the division rescales them automatically. Any row you leave blank, or give a weight of zero, is simply ignored, so you can use two components or three without breaking the maths. Students reach for a weighted grade calculator to check exactly where they stand partway through a term, to see how a strong or weak result in one category shifts the whole, and to plan which assessment deserves the most effort. Teachers and parents use it to verify a mark quickly, and anyone tracking progress toward a target grade can update the numbers as new scores arrive and watch the average respond in real time.",
    formulaExplanation:
      "Each score is multiplied by its weight so that a heavier assessment contributes proportionally more to the final number. Summing those weighted products gives the total value earned across every component. Dividing by the sum of the weights normalises that total back onto a 0-to-100 percentage scale, which is exactly why the weights need not total 100 — any consistent scale produces the same answer because the division cancels out the scale. Components with zero or blank weight drop out because they add nothing to either sum.",
    formulaSource: "Standard weighted-average grading",
    example: {
      inputs: { score1: "88", weight1: "20", score2: "92", weight2: "30", score3: "79", weight3: "50" },
      explanation: "(88×20 + 92×30 + 79×50) ÷ (20+30+50) = (1760 + 2760 + 3950) ÷ 100 = 84.70%.",
    },
    faqs: [
      { question: "Do my weights have to add up to 100?", answer: "No. The calculator divides by the total of whatever weights you enter, so any consistent scale gives the correct result. Weights of 1, 1 and 2 produce the same average as 25, 25 and 50, because both describe identical relative importance. This is convenient when your syllabus lists weights as points or category fractions rather than tidy percentages. Enter the numbers exactly as your course states them and let the division do the normalising." },
      { question: "What if I only have two components to average?", answer: "That is fine — fill in the first two score-and-weight pairs and leave the third row blank. Any row without a weight is skipped entirely, so the average is computed only from the components you actually entered. The same applies if you want a quick two-item weighted blend, such as a midterm and a final. The tool never assumes a missing row is a zero score, which would otherwise drag your average down unfairly." },
      { question: "How is a weighted average different from a simple average?", answer: "A simple average treats every score as equally important, adding them and dividing by the count. A weighted average multiplies each score by how much it counts before averaging, so a component worth half the grade influences the result ten times more than one worth a twentieth. Courses almost always weight their assessments, which is why a plain average of your scores usually differs from — and misrepresents — your true standing in the class." },
      { question: "Can I mix categories like homework and exams?", answer: "Yes, as long as you first reduce each category to a single score. Average all your homework into one homework percentage, all your quizzes into one quiz percentage, and so on, then enter each category score with the weight your syllabus assigns to that category. Entering individual assignments with category-level weights would double count them. Collapsing each category to one number first keeps the weighting accurate and matches how your grade book totals the course." },
      { question: "Why did my average not change when I edited a zero-weight row?", answer: "A row with a weight of zero contributes nothing to either the weighted total or the sum of weights, so its score has no effect on the result — that is by design. Zero weight is the calculator's way of switching a component off. If you want a score to count, give it a positive weight reflecting its share of the grade. If you genuinely want equal weighting, assign every component the same non-zero weight." },
    ],
    slugEs: "calculadora-de-nota-ponderada",
    titleEs: "Calculadora de Nota Ponderada",
    shortDescriptionEs: "Promedia puntuaciones que llevan distintos pesos.",
    seoTitleEs: "Calculadora de Nota Ponderada — Promedio Ponderado Gratis",
    metaDescriptionEs:
      "Calculadora de nota ponderada gratis. Introduce hasta tres puntuaciones y sus pesos para obtener tu verdadero promedio ponderado en porcentaje.",
    primaryKeywordEs: "calculadora de nota ponderada",
    secondaryKeywordsEs: ["calculadora de promedio ponderado", "promedio de notas ponderado", "calculadora de peso de notas"],
    formulaExplanationEs:
      "Cada puntuación se multiplica por su peso para que una evaluación más pesada contribuya proporcionalmente más al número final. Sumar esos productos ponderados da el valor total obtenido en todos los componentes. Dividir entre la suma de los pesos normaliza ese total de nuevo a una escala porcentual de 0 a 100, y por eso los pesos no necesitan sumar 100: cualquier escala consistente produce la misma respuesta porque la división cancela la escala. Los componentes con peso cero o en blanco se descartan porque no aportan a ninguna suma.",
    explanationEs:
      "Una calculadora de nota ponderada combina varias puntuaciones en un promedio que respeta cuánto importa cada evaluación. No todas las notas de un curso cuentan igual: un proyecto final que vale la mitad de la nota debería mover tu promedio mucho más que un cuestionario inicial que vale una veinteava parte. Introduce cada puntuación junto al peso que lleva y la herramienta multiplica puntuación por peso, suma esos productos y divide entre el total de los pesos para producir un único porcentaje honesto. Es el mismo método de promedio ponderado que usan las libretas de notas y los programas de calificación en todo el mundo. Como la calculadora divide entre el total de peso que introduces, tus pesos no necesitan sumar 100: puntos, porcentajes de categoría o proporciones simples funcionan igual, ya que la división los reescala automáticamente. Cualquier fila que dejes en blanco, o con peso cero, simplemente se ignora, así que puedes usar dos o tres componentes sin romper las matemáticas. Los estudiantes recurren a ella para comprobar exactamente dónde están a mitad de curso, ver cómo un resultado fuerte o débil en una categoría mueve el conjunto, y planificar qué evaluación merece más esfuerzo.",
    exampleEs: {
      inputs: { score1: "88", weight1: "20", score2: "92", weight2: "30", score3: "79", weight3: "50" },
      explanation: "(88×20 + 92×30 + 79×50) ÷ (20+30+50) = (1760 + 2760 + 3950) ÷ 100 = 84,70%.",
    },
    faqsEs: [
      { question: "¿Mis pesos tienen que sumar 100?", answer: "No. La calculadora divide entre el total de los pesos que introduces, así que cualquier escala consistente da el resultado correcto. Pesos de 1, 1 y 2 producen el mismo promedio que 25, 25 y 50, porque ambos describen la misma importancia relativa. Esto resulta cómodo cuando tu temario indica los pesos como puntos o fracciones de categoría en lugar de porcentajes redondos. Introduce los números tal como los indica tu curso y deja que la división normalice." },
      { question: "¿Y si solo tengo dos componentes para promediar?", answer: "No hay problema: rellena los dos primeros pares de puntuación y peso y deja la tercera fila en blanco. Cualquier fila sin peso se omite por completo, así que el promedio se calcula solo con los componentes que realmente introdujiste. Lo mismo aplica si quieres una mezcla ponderada rápida de dos elementos, como un parcial y un final. La herramienta nunca supone que una fila vacía es una puntuación de cero, lo que arrastraría tu promedio injustamente." },
      { question: "¿En qué se diferencia un promedio ponderado de uno simple?", answer: "Un promedio simple trata cada puntuación como igual de importante, las suma y divide entre la cantidad. Un promedio ponderado multiplica cada puntuación por cuánto cuenta antes de promediar, así un componente que vale la mitad de la nota influye diez veces más que uno que vale una veinteava parte. Los cursos casi siempre ponderan sus evaluaciones, por lo que un promedio simple de tus puntuaciones suele diferir de tu verdadera situación en la clase y la tergiversa." },
      { question: "¿Puedo mezclar categorías como tareas y exámenes?", answer: "Sí, siempre que primero reduzcas cada categoría a una sola puntuación. Promedia todas tus tareas en un porcentaje de tareas, todos tus cuestionarios en un porcentaje de cuestionarios, y luego introduce cada puntuación de categoría con el peso que tu temario asigna a esa categoría. Introducir tareas individuales con pesos de categoría las contaría dos veces. Reducir cada categoría a un número primero mantiene la ponderación precisa y coincide con cómo tu libreta de notas totaliza el curso." },
      { question: "¿Por qué no cambió mi promedio al editar una fila con peso cero?", answer: "Una fila con peso cero no aporta nada ni al total ponderado ni a la suma de pesos, así que su puntuación no afecta al resultado: es intencionado. El peso cero es la forma que tiene la calculadora de apagar un componente. Si quieres que una puntuación cuente, dale un peso positivo que refleje su parte de la nota. Si de verdad quieres ponderación igual, asigna a cada componente el mismo peso distinto de cero." },
    ],
    relatedCalculators: ["grade-calculator", "final-grade-calculator", "test-score-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "test-score",
    slug: "test-score-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Test Score Calculator",
    shortDescription: "Turn points earned into a percentage and letter grade.",
    seoTitle: "Test Score Calculator — Points to Percentage & Grade",
    metaDescription:
      "Free test score calculator. Enter points earned and total points to get your percentage score and letter grade instantly.",
    primaryKeyword: "test score calculator",
    secondaryKeywords: ["test grade calculator", "points to percentage calculator", "exam score calculator"],
    fields: [
      { id: "pointsEarned", label: "Points earned", type: "number", placeholder: "e.g. 42", min: 0, required: true, span: 1 },
      { id: "pointsPossible", label: "Total points possible", type: "number", placeholder: "e.g. 50", min: 0, required: true, span: 1 },
    ],
    results: [
      { id: "percentage", label: "Score", format: "percentage", decimals: 2, isPrimary: true },
      { id: "letterGrade", label: "Letter grade", format: "text", isPrimary: false },
    ],
    formula: "percentage = (points earned ÷ points possible) × 100",
    explanation:
      "A test score calculator converts the raw points you earned on a quiz, test or exam into the percentage and letter grade that actually appear on your record. You enter how many points you got and how many were available, and it divides one by the other, multiplies by 100, and maps the result onto a common United States letter scale. It removes the mental arithmetic of working out, say, that 42 out of 50 is 84 percent and a solid B, and it does so instantly and without error. The percentage is the universal language of grades because it strips away the size of the test: a score out of 50, out of 80 or out of 200 all become comparable once expressed as a percentage of the total. That is what lets you line up performance across assessments of different lengths and see genuine progress. The letter grade layered on top follows the widely used bands where 90 and above is an A, the 80s a B, the 70s a C, the 60s a D and anything below a fail. Students use a test score calculator the moment a paper comes back to translate a point tally into something meaningful, to double check a teacher's marking, and to track results over a term. Teachers use it to grade stacks of papers consistently, and tutors use it to show learners exactly where a score sits.",
    formulaExplanation:
      "Dividing points earned by points possible expresses your result as a fraction of the maximum, and multiplying by 100 rescales that fraction into a percentage everyone recognises. The percentage is independent of the test's size, so a 42-out-of-50 and an 84-out-of-100 both read as 84 percent and are directly comparable. The letter grade then comes from fixed cutoffs — 90, 80, 70 and 60 percent — that sort the continuous percentage into the familiar A through F bands used across most US schools.",
    formulaSource: "Standard percentage grading (US letter scale)",
    example: {
      inputs: { pointsEarned: "42", pointsPossible: "50" },
      explanation: "(42 ÷ 50) × 100 = 84%, which falls in the 80–89 band and earns a letter grade of B.",
    },
    faqs: [
      { question: "What letter-grade scale does this use?", answer: "It applies the common United States scale: 90 percent and above is an A, 80 to 89 is a B, 70 to 79 is a C, 60 to 69 is a D, and anything below 60 is an F. Many schools add plus and minus bands or set slightly different cutoffs, and some use rounding rules of their own. Always check your school's official grading policy, because the letter here is a widely used default rather than a universal standard." },
      { question: "Can the percentage go above 100?", answer: "Yes, if you earned bonus or extra-credit points beyond the standard total. For example, scoring 55 on a test worth 50 gives 110 percent. The calculator reports whatever the division produces, so a figure above 100 simply reflects extra credit. If you did not attempt any bonus questions and still see a number over 100, double check that you entered points earned and points possible in the correct fields rather than reversing them." },
      { question: "What if my test used half points or decimals?", answer: "Enter them exactly as they are. The calculator accepts decimal values in both fields, so a score of 42.5 out of 50 works perfectly and returns 85 percent. Partial-credit marking is common in maths, science and essay questions, and the percentage handles it without any special steps. Just type the precise points earned, including any half or quarter marks, and the total possible, and the result reflects your marking to the decimal." },
      { question: "How do I combine several test scores into one grade?", answer: "If the tests carry different weights, use a weighted grade calculator and enter each test's percentage with its weight. If every test counts equally, you can average the percentages directly, or add up all points earned across the tests and divide by all points possible for a points-based average. The two approaches can differ slightly when tests have different totals, so pick the method your course actually uses." },
      { question: "Is a percentage the same as a percentile?", answer: "No, and the distinction matters. A percentage is the share of available points you earned on the test itself — 84 percent means 84 of every 100 points. A percentile compares you against other test takers, so the 84th percentile means you scored higher than 84 percent of them. This calculator produces a percentage of points, not a percentile ranking, which would require the full distribution of everyone's scores to compute." },
    ],
    slugEs: "calculadora-de-puntuacion-de-examen",
    titleEs: "Calculadora de Puntuación de Examen",
    shortDescriptionEs: "Convierte los puntos obtenidos en porcentaje y nota con letra.",
    seoTitleEs: "Calculadora de Puntuación de Examen — Puntos a Porcentaje",
    metaDescriptionEs:
      "Calculadora de puntuación de examen gratis. Introduce los puntos obtenidos y el total de puntos para obtener tu porcentaje y nota con letra al instante.",
    primaryKeywordEs: "calculadora de puntuación de examen",
    secondaryKeywordsEs: ["calculadora de nota de examen", "calculadora de puntos a porcentaje", "calculadora de puntuación de prueba"],
    formulaExplanationEs:
      "Dividir los puntos obtenidos entre los puntos posibles expresa tu resultado como una fracción del máximo, y multiplicar por 100 reescala esa fracción a un porcentaje que todos reconocen. El porcentaje es independiente del tamaño del examen, así que un 42 sobre 50 y un 84 sobre 100 se leen como 84 por ciento y son directamente comparables. La nota con letra proviene entonces de umbrales fijos — 90, 80, 70 y 60 por ciento — que ordenan el porcentaje continuo en las bandas familiares de la A a la F usadas en la mayoría de escuelas de EE. UU.",
    explanationEs:
      "Una calculadora de puntuación de examen convierte los puntos brutos que obtuviste en un cuestionario, prueba o examen en el porcentaje y la nota con letra que aparecen realmente en tu expediente. Introduces cuántos puntos sacaste y cuántos había disponibles, y divide uno entre otro, multiplica por 100 y asigna el resultado a una escala de letras común de Estados Unidos. Elimina la aritmética mental de calcular, por ejemplo, que 42 de 50 es 84 por ciento y una B sólida, y lo hace al instante y sin error. El porcentaje es el lenguaje universal de las notas porque elimina el tamaño del examen: una puntuación sobre 50, sobre 80 o sobre 200 se vuelve comparable una vez expresada como porcentaje del total. Eso es lo que te permite alinear el rendimiento entre evaluaciones de distinta longitud y ver un progreso real. La nota con letra encima sigue las bandas ampliamente usadas donde 90 o más es una A, los 80 una B, los 70 una C, los 60 una D y por debajo un suspenso. Los estudiantes la usan en cuanto reciben un examen para traducir el recuento de puntos en algo significativo, verificar la corrección del profesor y seguir sus resultados durante el periodo.",
    exampleEs: {
      inputs: { pointsEarned: "42", pointsPossible: "50" },
      explanation: "(42 ÷ 50) × 100 = 84%, que cae en la banda 80–89 y obtiene una nota con letra de B.",
    },
    faqsEs: [
      { question: "¿Qué escala de notas con letra usa esto?", answer: "Aplica la escala común de Estados Unidos: 90 por ciento o más es una A, de 80 a 89 una B, de 70 a 79 una C, de 60 a 69 una D, y por debajo de 60 una F. Muchas escuelas añaden bandas de más y menos o fijan umbrales ligeramente distintos, y algunas usan sus propias reglas de redondeo. Consulta siempre la política oficial de calificación de tu escuela, porque la letra aquí es un valor por defecto habitual y no un estándar universal." },
      { question: "¿El porcentaje puede superar el 100?", answer: "Sí, si obtuviste puntos de bonificación o crédito extra más allá del total estándar. Por ejemplo, sacar 55 en un examen que vale 50 da 110 por ciento. La calculadora informa lo que produce la división, así que una cifra superior a 100 simplemente refleja crédito extra. Si no intentaste ninguna pregunta de bonificación y aun así ves un número por encima de 100, comprueba que introdujiste los puntos obtenidos y los posibles en los campos correctos y no al revés." },
      { question: "¿Y si mi examen usó medios puntos o decimales?", answer: "Introdúcelos tal cual son. La calculadora acepta valores decimales en ambos campos, así que una puntuación de 42,5 sobre 50 funciona perfectamente y devuelve 85 por ciento. La corrección con crédito parcial es común en matemáticas, ciencias y preguntas de ensayo, y el porcentaje lo maneja sin pasos especiales. Solo escribe los puntos obtenidos precisos, incluidas medias o cuartas partes, y el total posible, y el resultado reflejará tu corrección al decimal." },
      { question: "¿Cómo combino varias puntuaciones de examen en una nota?", answer: "Si los exámenes llevan pesos distintos, usa una calculadora de nota ponderada e introduce el porcentaje de cada examen con su peso. Si todos cuentan por igual, puedes promediar los porcentajes directamente, o sumar todos los puntos obtenidos entre todos los exámenes y dividir entre todos los puntos posibles para un promedio basado en puntos. Ambos enfoques pueden diferir un poco cuando los exámenes tienen totales distintos, así que elige el método que tu curso realmente usa." },
      { question: "¿Es lo mismo un porcentaje que un percentil?", answer: "No, y la distinción importa. Un porcentaje es la parte de los puntos disponibles que obtuviste en el examen: 84 por ciento significa 84 de cada 100 puntos. Un percentil te compara con otros examinados, así que el percentil 84 significa que puntuaste más que el 84 por ciento de ellos. Esta calculadora produce un porcentaje de puntos, no un ranking percentil, que requeriría la distribución completa de las puntuaciones de todos para calcularse." },
    ],
    relatedCalculators: ["grade-calculator", "weighted-grade-calculator", "gpa-to-percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "gpa-to-percentage",
    slug: "gpa-to-percentage-calculator",
    category: "Education",
    categorySlug: "education",
    title: "GPA to Percentage Calculator",
    shortDescription: "Convert a 4.0-scale GPA into a percentage.",
    seoTitle: "GPA to Percentage Calculator — 4.0 Scale to Percent",
    metaDescription:
      "Free GPA to percentage calculator. Convert a grade point average on the 4.0 scale into an equivalent percentage and letter grade.",
    primaryKeyword: "gpa to percentage calculator",
    secondaryKeywords: ["convert gpa to percentage", "gpa to percent", "4.0 gpa to percentage"],
    fields: [
      { id: "gpa", label: "GPA", type: "number", placeholder: "e.g. 3.6", min: 0, max: 4, step: 0.01, required: true, helpText: "Your grade point average on the 4.0 scale." },
    ],
    results: [
      { id: "percentage", label: "Percentage", format: "number", decimals: 1, unit: "%", isPrimary: true },
      { id: "letterGrade", label: "Letter grade", format: "text", isPrimary: false },
    ],
    formula: "percentage = (GPA ÷ 4) × 100",
    explanation:
      "A GPA to percentage calculator converts a grade point average on the familiar 4.0 scale into an approximate percentage, which is the format many universities, scholarships and employers outside the United States expect. You enter your GPA — anywhere from 0 to 4.0 — and the tool divides it by the top of the scale and multiplies by 100, returning both a percentage and the letter grade that percentage falls into. It is the quick translation students need when an application form asks for a percentage but their transcript only reports a GPA. The conversion treats the 4.0 scale as a simple proportion of a full 100 percent: a 4.0 becomes 100, a 3.0 becomes 75, a 2.0 becomes 50, and everything in between scales linearly. This proportional method is the most common and transparent way to move between the two systems, and it is easy to check by hand. It is important to understand, though, that no single conversion is universally official. Different institutions publish their own tables, and some map a 4.0 to 90 or use non-linear bands, so a receiving school's own chart always takes precedence when one exists. Students use this calculator to fill in international applications, compare their standing against percentage-based requirements, and get a fast, reasonable estimate of where a GPA lands on a percentage scale before checking any institution-specific rules.",
    formulaExplanation:
      "The 4.0 scale is treated as a linear proportion of a complete 100 percent, so dividing your GPA by the maximum of 4 gives the fraction of the top grade you have achieved, and multiplying by 100 expresses that fraction as a percentage. A 3.6 GPA is 90 percent of the way to 4.0, so it converts to 90 percent. Because the relationship is a straight line through zero, every point on the scale maps consistently, though individual institutions may publish their own non-linear tables that override this estimate.",
    formulaSource: "Proportional 4.0-scale conversion",
    example: {
      inputs: { gpa: "3.6" },
      explanation: "(3.6 ÷ 4) × 100 = 90%, which lands in the 90-and-above band for a letter grade of A.",
    },
    faqs: [
      { question: "Is there one official GPA-to-percentage formula?", answer: "No. There is no single universally accepted conversion, and different universities and countries use different tables. The proportional method here — GPA divided by 4, times 100 — is the most common and transparent estimate, but some institutions map a 4.0 to 90 percent, use letter-grade midpoints, or apply non-linear bands. Whenever a school or scholarship you are applying to publishes its own conversion chart, use that chart instead, because their rule is the one that will be applied." },
      { question: "Does this work for a weighted GPA above 4.0?", answer: "Not directly. This calculator assumes a standard unweighted 4.0 scale where 4.0 is the maximum. Weighted GPAs from honors, Advanced Placement or International Baccalaureate courses can exceed 4.0 — sometimes reaching 5.0 — and dividing those by 4 would produce a percentage above 100. If your GPA is weighted, first convert it back to an unweighted 4.0 figure, or use the specific conversion table provided by the institution requesting the percentage." },
      { question: "Why might a school disagree with this percentage?", answer: "Because the mapping between GPA and percentage is a convention, not a law of mathematics. Your original percentage grades were compressed into GPA points using cutoffs — an A covering 90 to 100, for instance — and that compression loses information. Converting back can only estimate a representative value, so it may differ from your true average by several points. Institutions that need precision ask for your actual transcript percentages rather than a reverse-engineered figure." },
      { question: "How do I convert a percentage back into a GPA?", answer: "Reverse the arithmetic: divide the percentage by 100 and multiply by 4. A 90 percent becomes 3.6 on this proportional scale. Bear in mind this is the inverse of an estimate, so it will not always match the GPA your school actually recorded, since real GPAs come from letter-grade cutoffs rather than a straight line. For an official figure, use a dedicated GPA calculator with your letter grades and credit hours." },
      { question: "What letter grade does a given GPA correspond to?", answer: "After converting to a percentage, the calculator applies standard bands: 90 and above is an A, the 80s a B, the 70s a C, the 60s a D, and below 60 an F. So a 3.6 GPA converts to 90 percent and shows as an A, while a 2.5 converts to about 62.5 percent and shows as a D. As with the percentage itself, treat the letter as a reasonable estimate rather than an official regrade of your coursework." },
    ],
    slugEs: "calculadora-de-gpa-a-porcentaje",
    titleEs: "Calculadora de GPA a Porcentaje",
    shortDescriptionEs: "Convierte un GPA en escala 4.0 a un porcentaje.",
    seoTitleEs: "Calculadora de GPA a Porcentaje — Escala 4.0 a Porciento",
    metaDescriptionEs:
      "Calculadora de GPA a porcentaje gratis. Convierte un promedio de calificaciones en escala 4.0 a un porcentaje equivalente y nota con letra.",
    primaryKeywordEs: "calculadora de gpa a porcentaje",
    secondaryKeywordsEs: ["convertir gpa a porcentaje", "gpa a porciento", "gpa 4.0 a porcentaje"],
    formulaExplanationEs:
      "La escala 4.0 se trata como una proporción lineal de un 100 por ciento completo, así que dividir tu GPA entre el máximo de 4 da la fracción de la nota más alta que has alcanzado, y multiplicar por 100 expresa esa fracción como porcentaje. Un GPA de 3,6 está al 90 por ciento del camino hacia 4,0, así que se convierte en 90 por ciento. Como la relación es una línea recta que pasa por cero, cada punto de la escala se corresponde de forma consistente, aunque instituciones concretas pueden publicar sus propias tablas no lineales que anulan esta estimación.",
    explanationEs:
      "Una calculadora de GPA a porcentaje convierte un promedio de calificaciones en la conocida escala 4.0 en un porcentaje aproximado, que es el formato que muchas universidades, becas y empleadores fuera de Estados Unidos esperan. Introduces tu GPA — de 0 a 4,0 — y la herramienta lo divide entre el tope de la escala y multiplica por 100, devolviendo tanto un porcentaje como la nota con letra en la que cae ese porcentaje. Es la traducción rápida que los estudiantes necesitan cuando un formulario de solicitud pide un porcentaje pero su expediente solo informa un GPA. La conversión trata la escala 4.0 como una simple proporción de un 100 por ciento completo: un 4,0 se convierte en 100, un 3,0 en 75, un 2,0 en 50, y todo lo intermedio escala linealmente. Este método proporcional es la forma más común y transparente de pasar entre los dos sistemas y es fácil de comprobar a mano. Sin embargo, es importante entender que ninguna conversión es universalmente oficial. Distintas instituciones publican sus propias tablas, y algunas asignan un 4,0 a 90 o usan bandas no lineales, así que la tabla propia de la escuela receptora siempre tiene prioridad cuando existe.",
    exampleEs: {
      inputs: { gpa: "3.6" },
      explanation: "(3,6 ÷ 4) × 100 = 90%, que cae en la banda de 90 o más para una nota con letra de A.",
    },
    faqsEs: [
      { question: "¿Existe una única fórmula oficial de GPA a porcentaje?", answer: "No. No hay una conversión aceptada universalmente, y distintas universidades y países usan tablas diferentes. El método proporcional de aquí — GPA dividido entre 4, por 100 — es la estimación más común y transparente, pero algunas instituciones asignan un 4,0 al 90 por ciento, usan puntos medios de letras o aplican bandas no lineales. Siempre que una escuela o beca a la que solicitas publique su propia tabla de conversión, usa esa tabla, porque su regla es la que se aplicará." },
      { question: "¿Funciona para un GPA ponderado por encima de 4,0?", answer: "No directamente. Esta calculadora asume una escala estándar 4.0 sin ponderar donde 4,0 es el máximo. Los GPA ponderados de cursos de honor, Colocación Avanzada o Bachillerato Internacional pueden superar 4,0 — a veces llegando a 5,0 — y dividir esos entre 4 produciría un porcentaje mayor de 100. Si tu GPA está ponderado, primero conviértelo de nuevo a una cifra 4.0 sin ponderar, o usa la tabla de conversión específica de la institución que pide el porcentaje." },
      { question: "¿Por qué una escuela podría discrepar con este porcentaje?", answer: "Porque la correspondencia entre GPA y porcentaje es una convención, no una ley matemática. Tus notas porcentuales originales se comprimieron en puntos de GPA usando umbrales — una A cubriendo de 90 a 100, por ejemplo — y esa compresión pierde información. Convertir de vuelta solo puede estimar un valor representativo, así que puede diferir de tu verdadero promedio en varios puntos. Las instituciones que necesitan precisión piden tus porcentajes reales del expediente en lugar de una cifra reconstruida." },
      { question: "¿Cómo convierto un porcentaje de nuevo en GPA?", answer: "Invierte la aritmética: divide el porcentaje entre 100 y multiplica por 4. Un 90 por ciento se convierte en 3,6 en esta escala proporcional. Ten en cuenta que es la inversa de una estimación, así que no siempre coincidirá con el GPA que tu escuela registró realmente, ya que los GPA reales provienen de umbrales de letras y no de una línea recta. Para una cifra oficial, usa una calculadora de GPA dedicada con tus notas con letra y horas de crédito." },
      { question: "¿A qué nota con letra corresponde un GPA dado?", answer: "Tras convertir a porcentaje, la calculadora aplica bandas estándar: 90 o más es una A, los 80 una B, los 70 una C, los 60 una D, y por debajo de 60 una F. Así, un GPA de 3,6 se convierte en 90 por ciento y aparece como A, mientras que un 2,5 se convierte en unos 62,5 por ciento y aparece como D. Como con el porcentaje, trata la letra como una estimación razonable y no como una recalificación oficial de tu trabajo." },
    ],
    relatedCalculators: ["gpa-calculator", "test-score-calculator", "cumulative-gpa-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cumulative-gpa",
    slug: "cumulative-gpa-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Cumulative GPA Calculator",
    shortDescription: "Combine your prior GPA with a new semester.",
    seoTitle: "Cumulative GPA Calculator — Update Your Overall GPA",
    metaDescription:
      "Free cumulative GPA calculator. Blend your existing GPA and credits with a new semester's GPA and credits to find your updated overall GPA.",
    primaryKeyword: "cumulative gpa calculator",
    secondaryKeywords: ["overall gpa calculator", "combine gpa calculator", "semester gpa to cumulative"],
    fields: [
      { id: "currentGpa", label: "Current cumulative GPA", type: "number", placeholder: "e.g. 3.4", min: 0, max: 4, step: 0.01, required: true, span: 1 },
      { id: "currentCredits", label: "Credits earned so far", type: "number", placeholder: "e.g. 60", min: 0, required: true, span: 1 },
      { id: "semesterGpa", label: "New semester GPA", type: "number", placeholder: "e.g. 3.8", min: 0, max: 4, step: 0.01, required: true, span: 1 },
      { id: "semesterCredits", label: "New semester credits", type: "number", placeholder: "e.g. 15", min: 0, required: true, span: 1 },
    ],
    results: [
      { id: "cumulativeGpa", label: "New cumulative GPA", format: "number", decimals: 2, isPrimary: true },
    ],
    formula: "cumulative = (GPA₁ × credits₁ + GPA₂ × credits₂) ÷ (credits₁ + credits₂)",
    explanation:
      "A cumulative GPA calculator updates your overall grade point average once a new semester's marks are in, without making you re-enter every course you have ever taken. You provide your existing cumulative GPA and the total credits it was built on, then the GPA you just earned this term and the credits that term carried, and the tool blends the two into a single updated figure. The key is that it weights each part by its credits, so a heavy 15-credit semester shifts your average more than a light one, exactly as your registrar computes it. This is the correct way to roll a semester forward, and it is far more accurate than the common mistake of simply averaging your old GPA and your new GPA together. That shortcut ignores how many credits each represents: if your cumulative rests on 90 credits and the new term is only 12, the new term should barely nudge the total, not pull it halfway. By reconstructing the quality points behind each GPA — multiplying GPA by credits — and pooling them over the combined credit total, the calculator honours that difference. Students use it to see the real impact of a term before grades are even finalised, to work out how much a strong semester can raise a struggling average, and to plan the credits and grades still needed to reach a target. It gives an accurate, transcript-matching cumulative GPA in a single step.",
    formulaExplanation:
      "A GPA is total quality points divided by total credits, so multiplying each GPA by its credit count reconstructs the quality points behind it. Adding the quality points from your prior record and the new semester, then dividing by the combined credits, produces a properly credit-weighted overall average. This is why you cannot simply average two GPAs: doing so would treat a 12-credit term as equal to a 90-credit history. Weighting by credits ensures each term influences the cumulative figure in exact proportion to its size.",
    formulaSource: "Standard 4.0 GPA scale",
    example: {
      inputs: { currentGpa: "3.4", currentCredits: "60", semesterGpa: "3.8", semesterCredits: "15" },
      explanation: "(3.4×60 + 3.8×15) ÷ (60+15) = (204 + 57) ÷ 75 = 3.48 cumulative GPA.",
    },
    faqs: [
      { question: "Why can't I just average my old and new GPA?", answer: "Because a simple average ignores how many credits each GPA represents. If your cumulative GPA is built on 90 credits and your new semester is only 12, the new term should move your overall average only slightly. Averaging the two numbers directly would give the small term the same influence as your entire history, overstating its effect. Weighting by credits, as this calculator does, is the only way to match the figure your transcript will show." },
      { question: "Where do I find my current cumulative GPA and credits?", answer: "Both appear on your official transcript or in your school's student portal, usually on the same summary line. The cumulative GPA is your overall grade point average to date, and the credits earned or attempted figure is the total the GPA is based on. Use attempted credits that carry a grade, since pass or fail and audited courses may not factor into the GPA the same way. When unsure, your registrar's office can confirm the exact numbers." },
      { question: "How can I project my GPA before grades post?", answer: "Estimate the GPA you expect this semester based on your current standing in each course, enter it with the term's credits, and the calculator shows the cumulative figure that outcome would produce. Try a few scenarios — a strong term, an average one, a weak one — to see the realistic range. This is a powerful planning tool for deciding how hard to push in the final weeks and understanding how much a single semester can actually move your overall average." },
      { question: "Can I chain several semesters together?", answer: "Yes. Calculate the cumulative GPA after the first new semester, then treat that result and the updated total credits as your current figures and feed in the next semester. Repeating this rolls your GPA forward term by term. Alternatively, a full GPA calculator lets you enter every course from every semester at once. Both approaches give the same answer as long as you keep the credit totals accurate at each step." },
      { question: "Does this handle retaken courses or grade replacement?", answer: "Not automatically. Policies for retakes vary — some schools replace the original grade, others average both attempts, and the effect on your credits differs accordingly. This calculator blends two GPA-and-credit pairs as entered, so if you have retakes, first work out your correct current cumulative GPA and credit total under your school's specific policy, then use those adjusted figures here. Your registrar can clarify how a repeated course affects your official record." },
    ],
    slugEs: "calculadora-de-gpa-acumulado",
    titleEs: "Calculadora de GPA Acumulado",
    shortDescriptionEs: "Combina tu GPA previo con un nuevo semestre.",
    seoTitleEs: "Calculadora de GPA Acumulado — Actualiza tu GPA General",
    metaDescriptionEs:
      "Calculadora de GPA acumulado gratis. Combina tu GPA y créditos existentes con el GPA y créditos de un nuevo semestre para hallar tu GPA general actualizado.",
    primaryKeywordEs: "calculadora de gpa acumulado",
    secondaryKeywordsEs: ["calculadora de gpa general", "combinar gpa", "gpa de semestre a acumulado"],
    formulaExplanationEs:
      "Un GPA son los puntos de calidad totales divididos entre los créditos totales, así que multiplicar cada GPA por su número de créditos reconstruye los puntos de calidad que hay detrás. Sumar los puntos de calidad de tu expediente previo y del nuevo semestre, y luego dividir entre los créditos combinados, produce un promedio general correctamente ponderado por créditos. Por eso no puedes simplemente promediar dos GPA: hacerlo trataría un semestre de 12 créditos como igual a un historial de 90. Ponderar por créditos asegura que cada periodo influya en la cifra acumulada en proporción exacta a su tamaño.",
    explanationEs:
      "Una calculadora de GPA acumulado actualiza tu promedio general de calificaciones una vez que llegan las notas de un nuevo semestre, sin obligarte a reintroducir cada curso que has hecho. Proporcionas tu GPA acumulado existente y el total de créditos sobre los que se construyó, luego el GPA que acabas de obtener este periodo y los créditos que llevaba, y la herramienta combina ambos en una única cifra actualizada. La clave es que pondera cada parte por sus créditos, así que un semestre pesado de 15 créditos mueve tu promedio más que uno ligero, exactamente como lo calcula tu registro académico. Esta es la forma correcta de avanzar un semestre, y es mucho más precisa que el error común de simplemente promediar tu GPA antiguo y tu GPA nuevo. Ese atajo ignora cuántos créditos representa cada uno: si tu acumulado se apoya en 90 créditos y el nuevo periodo es solo de 12, el nuevo periodo apenas debería mover el total, no arrastrarlo a la mitad. Al reconstruir los puntos de calidad detrás de cada GPA — multiplicando GPA por créditos — y agruparlos sobre el total de créditos combinado, la calculadora respeta esa diferencia y da un GPA acumulado que coincide con tu expediente en un solo paso.",
    exampleEs: {
      inputs: { currentGpa: "3.4", currentCredits: "60", semesterGpa: "3.8", semesterCredits: "15" },
      explanation: "(3,4×60 + 3,8×15) ÷ (60+15) = (204 + 57) ÷ 75 = 3,48 de GPA acumulado.",
    },
    faqsEs: [
      { question: "¿Por qué no puedo simplemente promediar mi GPA antiguo y el nuevo?", answer: "Porque un promedio simple ignora cuántos créditos representa cada GPA. Si tu GPA acumulado se construye sobre 90 créditos y tu nuevo semestre es solo de 12, el nuevo periodo debería mover tu promedio general solo ligeramente. Promediar los dos números directamente daría al periodo pequeño la misma influencia que todo tu historial, exagerando su efecto. Ponderar por créditos, como hace esta calculadora, es la única forma de coincidir con la cifra que mostrará tu expediente." },
      { question: "¿Dónde encuentro mi GPA acumulado y créditos actuales?", answer: "Ambos aparecen en tu expediente oficial o en el portal estudiantil de tu escuela, normalmente en la misma línea de resumen. El GPA acumulado es tu promedio general de calificaciones hasta la fecha, y los créditos obtenidos o intentados son el total sobre el que se basa el GPA. Usa los créditos intentados que llevan nota, ya que los cursos de apto/no apto y los auditados pueden no contar del mismo modo. Ante la duda, el registro académico puede confirmar las cifras exactas." },
      { question: "¿Cómo puedo proyectar mi GPA antes de que salgan las notas?", answer: "Estima el GPA que esperas este semestre según tu situación actual en cada curso, introdúcelo con los créditos del periodo, y la calculadora muestra la cifra acumulada que ese resultado produciría. Prueba varios escenarios — un periodo fuerte, uno promedio, uno flojo — para ver el rango realista. Es una potente herramienta de planificación para decidir cuánto esforzarte en las últimas semanas y entender cuánto puede mover realmente un solo semestre tu promedio general." },
      { question: "¿Puedo encadenar varios semestres?", answer: "Sí. Calcula el GPA acumulado tras el primer semestre nuevo, luego trata ese resultado y el total de créditos actualizado como tus cifras actuales e introduce el siguiente semestre. Repetir esto avanza tu GPA periodo a periodo. Como alternativa, una calculadora de GPA completa te permite introducir cada curso de cada semestre a la vez. Ambos enfoques dan la misma respuesta siempre que mantengas los totales de créditos precisos en cada paso." },
      { question: "¿Esto maneja cursos repetidos o reemplazo de notas?", answer: "No automáticamente. Las políticas de repetición varían — algunas escuelas reemplazan la nota original, otras promedian ambos intentos, y el efecto sobre tus créditos difiere en consecuencia. Esta calculadora combina dos pares de GPA y créditos tal como se introducen, así que si tienes repeticiones, primero calcula tu GPA acumulado y total de créditos correctos según la política específica de tu escuela, y luego usa esas cifras ajustadas aquí. Tu registro académico puede aclarar cómo afecta un curso repetido a tu expediente oficial." },
    ],
    relatedCalculators: ["gpa-calculator", "gpa-to-percentage-calculator", "grade-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "reading-time",
    slug: "reading-time-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Reading Time Calculator",
    shortDescription: "Estimate how long a text takes to read.",
    seoTitle: "Reading Time Calculator — How Long to Read a Text",
    metaDescription:
      "Free reading time calculator. Enter a word count and reading speed to estimate how many minutes a text will take to read.",
    primaryKeyword: "reading time calculator",
    secondaryKeywords: ["reading speed calculator", "how long to read calculator", "words to minutes calculator"],
    fields: [
      { id: "wordCount", label: "Word count", type: "number", placeholder: "e.g. 1000", min: 0, required: true, span: 1 },
      { id: "wordsPerMinute", label: "Reading speed", type: "number", unit: "wpm", placeholder: "200", defaultValue: 200, min: 1, required: false, span: 1, helpText: "Average adult reading speed is around 200–250 wpm." },
    ],
    results: [
      { id: "minutes", label: "Reading time", format: "number", decimals: 1, unit: "min", isPrimary: true },
    ],
    formula: "minutes = word count ÷ reading speed (words per minute)",
    explanation:
      "A reading time calculator estimates how many minutes a piece of text will take to read by dividing its total word count by a reading speed in words per minute. Enter the number of words and, optionally, your own pace — the tool defaults to 200 words per minute, a typical average for an adult reading general prose silently. The result is the kind of estimate you see at the top of articles and blog posts, and it is genuinely useful for planning. Writers and editors use it to label content, teachers use it to gauge how long an assigned passage will occupy a class, and students and professionals use it to budget time across a stack of reading. The maths is deliberately simple, but the reading-speed input is where the estimate gains accuracy. Two hundred words per minute suits everyday material; dense academic or technical writing that demands re-reading might run closer to 100 to 150, while light, familiar content can be skimmed far faster. Adjusting the speed to match both the reader and the difficulty of the text produces a far more realistic figure than a one-size-fits-all number. Because the relationship is a straight division, doubling the word count doubles the time and doubling the speed halves it, which makes the tool easy to reason about. Use it to decide whether a report fits into a lunch break, to set expectations on a reading list, or simply to satisfy the curiosity of how long something will take.",
    formulaExplanation:
      "Reading is modelled as a steady rate: if you process a fixed number of words each minute, the time a text takes is just its length divided by that rate. Dividing the total word count by the words-per-minute speed therefore yields the minutes required. The relationship is perfectly linear, so a longer text scales the time up proportionally and a faster reader scales it down. The default of 200 words per minute reflects a widely cited average for adults reading ordinary prose, though the true figure varies with the reader and how demanding the material is.",
    formulaSource: "Average adult silent reading rate (~200–250 wpm)",
    example: {
      inputs: { wordCount: "1000", wordsPerMinute: "200" },
      explanation: "1000 ÷ 200 = 5 minutes to read a 1,000-word text at 200 words per minute.",
    },
    faqs: [
      { question: "What is a typical reading speed?", answer: "Most adults read silently at roughly 200 to 250 words per minute for ordinary prose, which is why this calculator defaults to 200. Reading aloud is slower, around 130 to 150, because speech takes time. Dense academic, legal or technical text that requires re-reading can drop to 100 to 150, while familiar, light material may be skimmed at 400 or more. Adjust the speed to match your own pace and the difficulty of the text for a realistic estimate." },
      { question: "How do I find the word count of my text?", answer: "Most word processors and text editors display a word count, often in the status bar or under a review or tools menu. In Microsoft Word and Google Docs it updates live as you type. For web pages you can paste the text into a document to count it, or use a dedicated word-count tool. Once you have the number, enter it here along with a reading speed to get the estimated time." },
      { question: "Should I use a different speed for reading aloud?", answer: "Yes. Reading aloud is considerably slower than silent reading because you are physically speaking each word, so a rate of about 130 to 150 words per minute is realistic for presentations, speeches or audiobook narration. If you are timing a talk or a read-aloud session, lower the speed accordingly rather than using the 200 default, which reflects silent reading. Slowing further to around 120 gives a comfortable, unhurried delivery pace for a live audience." },
      { question: "Does this account for skimming or careful study?", answer: "Only through the speed you enter. The calculator assumes a constant rate, so it does not automatically distinguish a quick skim from close study. To model skimming, raise the words-per-minute figure; to model careful reading, note-taking or re-reading difficult passages, lower it. For study that involves pausing to think, take notes, or look things up, the real time can far exceed a pure reading estimate, so pad the figure accordingly." },
      { question: "Can I estimate reading time for a whole book?", answer: "Yes. Find or estimate the book's total word count — a typical novel runs roughly 80,000 to 100,000 words — enter it with your reading speed, and the result is the total minutes, which you can divide by 60 for hours. For a 90,000-word novel at 200 words per minute, that is about 450 minutes, or seven and a half hours of reading. Splitting that across sessions helps you plan a realistic finishing date." },
    ],
    slugEs: "calculadora-de-tiempo-de-lectura",
    titleEs: "Calculadora de Tiempo de Lectura",
    shortDescriptionEs: "Estima cuánto se tarda en leer un texto.",
    seoTitleEs: "Calculadora de Tiempo de Lectura — Cuánto se Tarda en Leer",
    metaDescriptionEs:
      "Calculadora de tiempo de lectura gratis. Introduce un número de palabras y una velocidad de lectura para estimar cuántos minutos tardarás en leer un texto.",
    primaryKeywordEs: "calculadora de tiempo de lectura",
    secondaryKeywordsEs: ["calculadora de velocidad de lectura", "cuánto tardo en leer", "calculadora de palabras a minutos"],
    formulaExplanationEs:
      "La lectura se modela como un ritmo constante: si procesas un número fijo de palabras cada minuto, el tiempo que lleva un texto es simplemente su longitud dividida entre ese ritmo. Dividir el total de palabras entre la velocidad en palabras por minuto da los minutos necesarios. La relación es perfectamente lineal, así que un texto más largo escala el tiempo hacia arriba proporcionalmente y un lector más rápido lo escala hacia abajo. El valor por defecto de 200 palabras por minuto refleja un promedio muy citado para adultos que leen prosa ordinaria, aunque la cifra real varía con el lector y lo exigente que sea el material.",
    explanationEs:
      "Una calculadora de tiempo de lectura estima cuántos minutos tardará en leerse un texto dividiendo su total de palabras entre una velocidad de lectura en palabras por minuto. Introduce el número de palabras y, opcionalmente, tu propio ritmo — la herramienta usa por defecto 200 palabras por minuto, un promedio típico de un adulto leyendo prosa general en silencio. El resultado es el tipo de estimación que ves al inicio de artículos y entradas de blog, y es genuinamente útil para planificar. Escritores y editores lo usan para etiquetar contenido, los profesores para calcular cuánto ocupará un pasaje asignado, y estudiantes y profesionales para repartir el tiempo entre una pila de lecturas. Las matemáticas son deliberadamente sencillas, pero la velocidad de lectura es donde la estimación gana precisión. Doscientas palabras por minuto sirven para material cotidiano; una escritura académica o técnica densa que exige releer podría acercarse a 100 o 150, mientras que el contenido ligero y familiar se puede ojear mucho más rápido. Ajustar la velocidad para que coincida con el lector y la dificultad del texto produce una cifra mucho más realista que un número único para todo. Como la relación es una simple división, doblar las palabras dobla el tiempo y doblar la velocidad lo reduce a la mitad, lo que la hace fácil de razonar.",
    exampleEs: {
      inputs: { wordCount: "1000", wordsPerMinute: "200" },
      explanation: "1000 ÷ 200 = 5 minutos para leer un texto de 1000 palabras a 200 palabras por minuto.",
    },
    faqsEs: [
      { question: "¿Cuál es una velocidad de lectura típica?", answer: "La mayoría de los adultos leen en silencio a unas 200 a 250 palabras por minuto para prosa ordinaria, por eso esta calculadora usa 200 por defecto. Leer en voz alta es más lento, alrededor de 130 a 150, porque hablar lleva tiempo. Un texto académico, legal o técnico denso que requiere releer puede bajar a 100 o 150, mientras que el material ligero y familiar puede ojearse a 400 o más. Ajusta la velocidad a tu propio ritmo y a la dificultad del texto para una estimación realista." },
      { question: "¿Cómo encuentro el número de palabras de mi texto?", answer: "La mayoría de los procesadores de texto y editores muestran un recuento de palabras, a menudo en la barra de estado o bajo un menú de revisión o herramientas. En Microsoft Word y Google Docs se actualiza en vivo mientras escribes. Para páginas web puedes pegar el texto en un documento para contarlo, o usar una herramienta dedicada de recuento de palabras. Una vez tengas el número, introdúcelo aquí junto con una velocidad de lectura para obtener el tiempo estimado." },
      { question: "¿Debo usar una velocidad distinta para leer en voz alta?", answer: "Sí. Leer en voz alta es bastante más lento que leer en silencio porque pronuncias físicamente cada palabra, así que un ritmo de unas 130 a 150 palabras por minuto es realista para presentaciones, discursos o narración de audiolibros. Si cronometras una charla o una sesión de lectura en voz alta, baja la velocidad en consecuencia en lugar de usar el valor por defecto de 200, que refleja la lectura silenciosa. Bajar aún más, a unas 120, da un ritmo cómodo y pausado." },
      { question: "¿Esto tiene en cuenta el ojeo o el estudio cuidadoso?", answer: "Solo a través de la velocidad que introduces. La calculadora asume un ritmo constante, así que no distingue automáticamente un ojeo rápido de un estudio detenido. Para modelar el ojeo, sube las palabras por minuto; para modelar la lectura cuidadosa, la toma de notas o releer pasajes difíciles, bájala. Para un estudio que implica pararse a pensar, tomar notas o consultar cosas, el tiempo real puede superar con creces una estimación de lectura pura, así que amplía la cifra en consecuencia." },
      { question: "¿Puedo estimar el tiempo de lectura de un libro entero?", answer: "Sí. Halla o estima el total de palabras del libro — una novela típica ronda las 80 000 a 100 000 palabras — introdúcelo con tu velocidad de lectura, y el resultado es el total de minutos, que puedes dividir entre 60 para obtener horas. Para una novela de 90 000 palabras a 200 palabras por minuto, eso son unos 450 minutos, o siete horas y media de lectura. Repartir eso entre sesiones te ayuda a planear una fecha de finalización realista." },
    ],
    relatedCalculators: ["words-per-page-calculator", "study-time-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "study-time",
    slug: "study-time-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Study Time Calculator",
    shortDescription: "Plan weekly study hours from your course load.",
    seoTitle: "Study Time Calculator — Weekly Study Hours by Credits",
    metaDescription:
      "Free study time calculator. Enter your credit hours and hours of study per credit to plan how many hours a week you should study.",
    primaryKeyword: "study time calculator",
    secondaryKeywords: ["study hours calculator", "college study time calculator", "credit hours study calculator"],
    fields: [
      { id: "creditHours", label: "Credit hours", type: "number", placeholder: "e.g. 15", min: 0, required: true, span: 1, helpText: "Total credits you are enrolled in this term." },
      { id: "hoursPerCreditPerWeek", label: "Study hours per credit", type: "number", placeholder: "2", defaultValue: 2, min: 0, required: false, span: 1, helpText: "A common guideline is 2–3 hours per credit per week." },
    ],
    results: [
      { id: "weeklyStudyHours", label: "Weekly study hours", format: "number", decimals: 1, unit: "hrs", isPrimary: true },
    ],
    formula: "weekly study hours = credit hours × study hours per credit per week",
    explanation:
      "A study time calculator turns your course load into a concrete weekly study target using the well-known college guideline that each credit hour deserves a set number of hours of independent study every week. You enter how many credits you are taking this term and how many hours per credit you plan to study — the tool defaults to 2, and the traditional rule of thumb ranges from 2 to 3 — and it multiplies the two to give the total hours you should reserve for reading, homework, review and revision each week. That single number is the foundation of a realistic weekly schedule. Time spent in lectures is only part of learning; the deeper work of understanding, practising and preparing happens outside class, and it is easy to underestimate. Seeing that a 15-credit semester implies around 30 hours of study a week — on top of roughly 15 hours in class — makes the true scale of a full-time course load obvious and helps prevent the overcommitment that leads to falling behind. Students use this calculator when planning a term to check that their credits, job, and other obligations actually fit into a week, and to decide whether to add or drop a course. Advisors use it to set expectations for new students. The guideline is a starting point rather than a law: demanding subjects may need more per credit and easier ones less, so adjust the hours-per-credit input to reflect the difficulty of your particular schedule.",
    formulaExplanation:
      "The calculation rests on a standard academic guideline that each credit hour represents a fixed amount of independent study each week, commonly two to three hours per credit. Multiplying your total credit hours by that per-credit study rate gives the weekly study hours the guideline recommends. Because it is a straight multiplication, adding credits raises the target proportionally, and choosing a higher per-credit figure for a demanding term scales the whole estimate up. The result covers out-of-class work only and sits on top of the time you already spend in lectures and labs.",
    formulaSource: "Standard credit-hour study guideline (2–3 hours per credit)",
    example: {
      inputs: { creditHours: "15", hoursPerCreditPerWeek: "2" },
      explanation: "15 × 2 = 30 hours of study per week, in addition to time spent in class.",
    },
    faqs: [
      { question: "Where does the 2-to-3-hours-per-credit rule come from?", answer: "It is a long-standing academic guideline used by many colleges to set expectations for full-time study. The idea is that a course's credit value reflects not just class time but the independent work — reading, assignments, practice and review — needed to master the material. Two hours per credit is a common baseline and three is typical for more demanding courses. It is a planning heuristic rather than a strict requirement, so treat it as a sensible starting point and adjust to your own experience." },
      { question: "Does this include time spent in class?", answer: "No. The result covers only independent study outside of lectures, labs and seminars. Your total weekly time commitment is this study figure plus the hours you physically spend in class, which for many courses roughly equals the credit hours themselves. So a 15-credit term might mean about 15 hours in class and, at two hours per credit, another 30 studying — around 45 hours a week in total, comparable to a full-time job." },
      { question: "How should I adjust for hard or easy courses?", answer: "Raise or lower the hours-per-credit input to match the difficulty. A challenging course in a quantitative or writing-intensive subject might warrant three or even four hours per credit, while a familiar or introductory course could need only one to two. If your courses vary widely, calculate demanding and easy ones separately with different per-credit rates and add the results, rather than applying a single average that overstates the easy load and understates the hard." },
      { question: "How do I fit this into a weekly schedule?", answer: "Take the total weekly study hours and spread them across the days you have available, ideally in focused blocks rather than one long stretch. Distributing study over several days aids retention far more than cramming. Reserve specific time slots as you would for classes or work shifts, and protect them. If the total plus your class time and other commitments exceeds a reasonable week, that is a strong signal to reconsider your course load before the term overwhelms you." },
      { question: "Is this realistic if I also work a job?", answer: "It is exactly the reason to run the numbers first. Add your study hours, class hours and work hours together and check the weekly total against the roughly 40 to 60 hours most people can sustain without burning out. If a full course load plus a job pushes well beyond that, consider reducing credits, cutting work hours, or spreading your degree over more terms. Seeing the real total up front helps you build a schedule you can actually keep." },
    ],
    slugEs: "calculadora-de-tiempo-de-estudio",
    titleEs: "Calculadora de Tiempo de Estudio",
    shortDescriptionEs: "Planifica horas de estudio semanales según tu carga de cursos.",
    seoTitleEs: "Calculadora de Tiempo de Estudio — Horas Semanales por Créditos",
    metaDescriptionEs:
      "Calculadora de tiempo de estudio gratis. Introduce tus horas de crédito y las horas de estudio por crédito para planificar cuántas horas a la semana deberías estudiar.",
    primaryKeywordEs: "calculadora de tiempo de estudio",
    secondaryKeywordsEs: ["calculadora de horas de estudio", "tiempo de estudio universitario", "horas de estudio por crédito"],
    formulaExplanationEs:
      "El cálculo se basa en una pauta académica estándar según la cual cada hora de crédito representa una cantidad fija de estudio independiente cada semana, comúnmente de dos a tres horas por crédito. Multiplicar tu total de horas de crédito por ese ritmo de estudio por crédito da las horas semanales de estudio que la pauta recomienda. Como es una multiplicación directa, añadir créditos eleva el objetivo proporcionalmente, y elegir una cifra mayor por crédito para un periodo exigente escala toda la estimación hacia arriba. El resultado cubre solo el trabajo fuera de clase y se suma al tiempo que ya pasas en clases y laboratorios.",
    explanationEs:
      "Una calculadora de tiempo de estudio convierte tu carga de cursos en un objetivo semanal de estudio concreto usando la conocida pauta universitaria de que cada hora de crédito merece un número fijo de horas de estudio independiente cada semana. Introduces cuántos créditos cursas este periodo y cuántas horas por crédito planeas estudiar — la herramienta usa 2 por defecto, y la regla tradicional va de 2 a 3 — y multiplica ambos para dar el total de horas que deberías reservar para lectura, tareas, repaso y revisión cada semana. Ese único número es la base de un horario semanal realista. El tiempo en clase es solo parte del aprendizaje; el trabajo más profundo de comprender, practicar y prepararse ocurre fuera de clase, y es fácil subestimarlo. Ver que un semestre de 15 créditos implica unas 30 horas de estudio a la semana — además de unas 15 horas en clase — deja clara la escala real de una carga a tiempo completo y ayuda a evitar el exceso de compromisos que lleva a atrasarse. Los estudiantes usan esta calculadora al planificar un periodo para comprobar que sus créditos, su trabajo y otras obligaciones caben en una semana, y para decidir si añadir o abandonar un curso. Los asesores la usan para fijar expectativas a nuevos estudiantes. La pauta es un punto de partida, no una ley: las materias exigentes pueden necesitar más por crédito y las fáciles menos.",
    exampleEs: {
      inputs: { creditHours: "15", hoursPerCreditPerWeek: "2" },
      explanation: "15 × 2 = 30 horas de estudio por semana, además del tiempo pasado en clase.",
    },
    faqsEs: [
      { question: "¿De dónde viene la regla de 2 a 3 horas por crédito?", answer: "Es una pauta académica de larga tradición usada por muchas universidades para fijar expectativas del estudio a tiempo completo. La idea es que el valor en créditos de un curso refleja no solo el tiempo de clase sino el trabajo independiente — lectura, tareas, práctica y repaso — necesario para dominar la materia. Dos horas por crédito es una base común y tres es típico para cursos más exigentes. Es una heurística de planificación y no un requisito estricto, así que trátala como un punto de partida sensato." },
      { question: "¿Esto incluye el tiempo en clase?", answer: "No. El resultado cubre solo el estudio independiente fuera de las clases, laboratorios y seminarios. Tu compromiso de tiempo semanal total es esta cifra de estudio más las horas que pasas físicamente en clase, que para muchos cursos equivale aproximadamente a las propias horas de crédito. Así, un periodo de 15 créditos podría implicar unas 15 horas en clase y, a dos horas por crédito, otras 30 estudiando — alrededor de 45 horas a la semana en total, comparable a un empleo a tiempo completo." },
      { question: "¿Cómo debo ajustar para cursos difíciles o fáciles?", answer: "Sube o baja las horas por crédito para que coincidan con la dificultad. Un curso desafiante en una materia cuantitativa o con mucha escritura podría justificar tres o incluso cuatro horas por crédito, mientras que un curso familiar o introductorio podría necesitar solo una o dos. Si tus cursos varían mucho, calcula los exigentes y los fáciles por separado con distintos ritmos por crédito y suma los resultados, en lugar de aplicar un único promedio que exagera la carga fácil y subestima la difícil." },
      { question: "¿Cómo encajo esto en un horario semanal?", answer: "Toma el total de horas de estudio semanales y repártelas entre los días que tengas disponibles, idealmente en bloques concentrados en lugar de un único tramo largo. Distribuir el estudio en varios días ayuda a la retención mucho más que estudiar todo de golpe. Reserva franjas horarias específicas como harías con clases o turnos de trabajo, y protégelas. Si el total más tu tiempo de clase y otros compromisos supera una semana razonable, es una señal fuerte para reconsiderar tu carga." },
      { question: "¿Es realista si además tengo un trabajo?", answer: "Es exactamente la razón para hacer los cálculos primero. Suma tus horas de estudio, horas de clase y horas de trabajo y compara el total semanal con las aproximadamente 40 a 60 horas que la mayoría puede sostener sin agotarse. Si una carga completa de cursos más un trabajo empuja mucho más allá de eso, considera reducir créditos, recortar horas de trabajo o repartir tu carrera en más periodos. Ver el total real por adelantado te ayuda a construir un horario que puedas cumplir." },
    ],
    relatedCalculators: ["reading-time-calculator", "gpa-calculator", "college-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "words-per-page",
    slug: "words-per-page-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Words Per Page Calculator",
    shortDescription: "Estimate total words from a page count.",
    seoTitle: "Words Per Page Calculator — Pages to Word Count",
    metaDescription:
      "Free words per page calculator. Enter a page count and words per page to estimate the total word count of an essay or document.",
    primaryKeyword: "words per page calculator",
    secondaryKeywords: ["pages to words calculator", "word count per page", "how many words per page"],
    fields: [
      { id: "pages", label: "Number of pages", type: "number", placeholder: "e.g. 10", min: 0, required: true, span: 1 },
      { id: "wordsPerPage", label: "Words per page", type: "number", placeholder: "500", defaultValue: 500, min: 1, required: false, span: 1, helpText: "≈500 words single-spaced, ≈250 double-spaced (12pt)." },
    ],
    results: [
      { id: "totalWords", label: "Total words", format: "number", decimals: 0, isPrimary: true },
    ],
    formula: "total words = pages × words per page",
    explanation:
      "A words per page calculator estimates the total word count of a document from the number of pages it fills, using a chosen words-per-page density. Enter how many pages you need to produce and the words each page holds — the tool defaults to 500, typical of single-spaced 12-point text — and it multiplies the two to reveal the word target hiding behind a page requirement. This is the translation students need constantly, because assignments are often set in pages while writing and word-count tools work in words. Turning a five-page essay into a roughly 2,500-word goal makes the task concrete: you can track progress against a number, plan how many words each section should run, and know when you are genuinely finished rather than padding to fill space. The words-per-page figure is the crucial variable, since it depends heavily on formatting. Single-spaced 12-point text runs around 500 words a page, double-spaced roughly 250, and larger fonts, wider margins or generous line spacing lower the count further. Adjusting the density to match the exact formatting your instructor requires makes the estimate trustworthy. Because the calculation is a simple multiplication, it also works in reverse for planning: if you know your typical page density, you can see how many pages a word target will occupy. Writers use it to size chapters, students to plan essays and dissertations, and anyone facing a page-based brief to convert it into the word count their tools actually measure.",
    formulaExplanation:
      "The estimate assumes each page holds a consistent number of words determined by the formatting, so the total length is simply the number of pages multiplied by that per-page density. Doubling the pages doubles the words, and choosing a denser formatting — single spacing rather than double, or a smaller font — raises the words-per-page figure and therefore the total. The default of 500 words per page reflects single-spaced 12-point text with standard margins; double-spaced work halves that to about 250, which is why matching the density to your actual formatting matters for an accurate count.",
    formulaSource: "Standard manuscript formatting estimates",
    example: {
      inputs: { pages: "10", wordsPerPage: "500" },
      explanation: "10 × 500 = 5,000 words for a ten-page single-spaced document at 500 words per page.",
    },
    faqs: [
      { question: "How many words are on a typical page?", answer: "It depends on formatting, but common reference points are about 500 words per page for single-spaced 12-point text and roughly 250 for double-spaced, both with standard one-inch margins. Larger fonts, wider margins, or extra line spacing reduce the count further. If your assignment specifies formatting, use the matching density; if it does not, 500 single-spaced or 250 double-spaced are reliable defaults that reflect most academic and professional documents." },
      { question: "Should I use 250 or 500 words per page?", answer: "Use 250 if your document is double-spaced, which is standard for most academic essays, and 500 if it is single-spaced, common for professional reports and articles. Both assume a 12-point serif font like Times New Roman and one-inch margins. If your instructor requires a different font size, spacing or margin, adjust the words-per-page figure accordingly, since these formatting choices can swing the real count substantially in either direction." },
      { question: "Why do assignments use pages instead of words?", answer: "Page counts are a quick, visual way to signal the scope of a task, and they predate the digital word counters we rely on today. The drawback is that pages depend entirely on formatting, so two essays of the same page length can differ by hundreds of words. Converting the page requirement into a word target with this calculator gives you a precise, format-independent goal to write toward, which most writing tools measure directly." },
      { question: "Does font and spacing really change the count that much?", answer: "Yes, dramatically. Switching from single to double spacing alone roughly halves the words per page. Moving from a 12-point to a 14-point font, widening margins, or adding space between paragraphs all reduce how many words fit on a page. This is why a page-based requirement is only meaningful alongside its formatting rules, and why you should set the words-per-page input to reflect the exact style your document uses for a dependable estimate." },
      { question: "Can I work out pages from a word count instead?", answer: "Yes. Divide your target word count by the words-per-page density to estimate the number of pages. For example, a 3,000-word essay at 250 words per page double-spaced fills about 12 pages. This reverse calculation is handy when an assignment sets a word limit but you want to gauge how long the finished piece will look, or when formatting a manuscript to hit a particular page range for a submission." },
    ],
    slugEs: "calculadora-de-palabras-por-pagina",
    titleEs: "Calculadora de Palabras por Página",
    shortDescriptionEs: "Estima el total de palabras a partir de un número de páginas.",
    seoTitleEs: "Calculadora de Palabras por Página — Páginas a Palabras",
    metaDescriptionEs:
      "Calculadora de palabras por página gratis. Introduce un número de páginas y palabras por página para estimar el total de palabras de un ensayo o documento.",
    primaryKeywordEs: "calculadora de palabras por página",
    secondaryKeywordsEs: ["calculadora de páginas a palabras", "recuento de palabras por página", "cuántas palabras por página"],
    formulaExplanationEs:
      "La estimación asume que cada página contiene un número consistente de palabras determinado por el formato, así que la longitud total es simplemente el número de páginas multiplicado por esa densidad por página. Duplicar las páginas duplica las palabras, y elegir un formato más denso — interlineado sencillo en vez de doble, o una fuente más pequeña — eleva la cifra de palabras por página y por tanto el total. El valor por defecto de 500 palabras por página refleja texto de 12 puntos a interlineado sencillo con márgenes estándar; el interlineado doble lo reduce a la mitad, unas 250, por eso ajustar la densidad importa.",
    explanationEs:
      "Una calculadora de palabras por página estima el total de palabras de un documento a partir del número de páginas que ocupa, usando una densidad de palabras por página elegida. Introduce cuántas páginas necesitas producir y las palabras que contiene cada página — la herramienta usa 500 por defecto, típico de texto de 12 puntos a interlineado sencillo — y multiplica ambos para revelar el objetivo de palabras que se esconde detrás de un requisito de páginas. Es la traducción que los estudiantes necesitan constantemente, porque los trabajos suelen fijarse en páginas mientras que las herramientas de escritura y recuento trabajan en palabras. Convertir un ensayo de cinco páginas en una meta de unas 2500 palabras hace la tarea concreta: puedes seguir el progreso contra un número, planear cuántas palabras debe llevar cada sección, y saber cuándo has terminado de verdad en lugar de rellenar para ocupar espacio. La cifra de palabras por página es la variable crucial, ya que depende mucho del formato. El texto de 12 puntos a interlineado sencillo ronda las 500 palabras por página, el doble unas 250, y fuentes más grandes, márgenes más anchos o interlineados generosos reducen aún más el recuento. Ajustar la densidad al formato exacto que exige tu profesor hace la estimación fiable, y el cálculo también funciona a la inversa para planificar cuántas páginas ocupará un objetivo de palabras.",
    exampleEs: {
      inputs: { pages: "10", wordsPerPage: "500" },
      explanation: "10 × 500 = 5000 palabras para un documento de diez páginas a interlineado sencillo con 500 palabras por página.",
    },
    faqsEs: [
      { question: "¿Cuántas palabras hay en una página típica?", answer: "Depende del formato, pero los puntos de referencia comunes son unas 500 palabras por página para texto de 12 puntos a interlineado sencillo y unas 250 para interlineado doble, ambos con márgenes estándar de una pulgada. Fuentes más grandes, márgenes más anchos o interlineado extra reducen aún más el recuento. Si tu trabajo especifica el formato, usa la densidad correspondiente; si no lo hace, 500 a interlineado sencillo o 250 a doble son valores por defecto fiables que reflejan la mayoría de documentos." },
      { question: "¿Debo usar 250 o 500 palabras por página?", answer: "Usa 250 si tu documento está a interlineado doble, que es lo estándar para la mayoría de ensayos académicos, y 500 si está a interlineado sencillo, común en informes y artículos profesionales. Ambos asumen una fuente serif de 12 puntos como Times New Roman y márgenes de una pulgada. Si tu profesor exige un tamaño de fuente, interlineado o margen distinto, ajusta la cifra de palabras por página en consecuencia, ya que estas decisiones de formato pueden variar mucho el recuento real." },
      { question: "¿Por qué los trabajos usan páginas en lugar de palabras?", answer: "Los recuentos de páginas son una forma rápida y visual de señalar el alcance de una tarea, y son anteriores a los contadores de palabras digitales que usamos hoy. El inconveniente es que las páginas dependen por completo del formato, así que dos ensayos de la misma cantidad de páginas pueden diferir en cientos de palabras. Convertir el requisito de páginas en un objetivo de palabras con esta calculadora te da una meta precisa e independiente del formato hacia la que escribir, que la mayoría de herramientas miden directamente." },
      { question: "¿La fuente y el interlineado cambian tanto el recuento?", answer: "Sí, de forma drástica. Cambiar de interlineado sencillo a doble por sí solo reduce a la mitad las palabras por página. Pasar de una fuente de 12 a una de 14 puntos, ensanchar los márgenes o añadir espacio entre párrafos reducen cuántas palabras caben en una página. Por eso un requisito basado en páginas solo es significativo junto a sus reglas de formato, y por eso debes fijar la entrada de palabras por página al estilo exacto que usa tu documento para una estimación fiable." },
      { question: "¿Puedo calcular páginas a partir de un recuento de palabras?", answer: "Sí. Divide tu objetivo de palabras entre la densidad de palabras por página para estimar el número de páginas. Por ejemplo, un ensayo de 3000 palabras a 250 palabras por página a interlineado doble ocupa unas 12 páginas. Este cálculo inverso es útil cuando un trabajo fija un límite de palabras pero quieres calcular cuánto ocupará la pieza terminada, o al formatear un manuscrito para alcanzar un rango de páginas concreto para una entrega." },
    ],
    relatedCalculators: ["reading-time-calculator", "study-time-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "grade-curve",
    slug: "grade-curve-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Grade Curve Calculator",
    shortDescription: "Apply a linear curve to a test score.",
    seoTitle: "Grade Curve Calculator — Curve a Test Score",
    metaDescription:
      "Free grade curve calculator. Apply a linear curve that lifts the highest class score to the target maximum and adjusts your score by the same amount.",
    primaryKeyword: "grade curve calculator",
    secondaryKeywords: ["curved grade calculator", "test curve calculator", "grade curving calculator"],
    fields: [
      { id: "studentScore", label: "Your score", type: "number", unit: "%", placeholder: "e.g. 70", min: 0, required: true, span: 1 },
      { id: "highestClassScore", label: "Highest score in class", type: "number", unit: "%", placeholder: "e.g. 88", min: 0, required: true, span: 1 },
      { id: "targetMax", label: "Target maximum", type: "number", unit: "%", placeholder: "100", defaultValue: 100, min: 0, required: false, span: 1, helpText: "The score the class top is lifted to (usually 100)." },
    ],
    results: [
      { id: "curvedScore", label: "Curved score", format: "number", decimals: 1, unit: "%", isPrimary: true },
    ],
    formula: "curved = your score + (target maximum − highest class score)",
    explanation:
      "A grade curve calculator applies one of the most common curving methods a teacher can use: a flat linear shift that raises the top score in the class up to a target maximum and adds that same boost to every other student's score. You enter your own raw score, the highest score anyone in the class achieved, and the maximum you want that top score lifted to — usually 100 — and the tool works out the bonus and applies it to you. This method is popular because it is transparent and fair in a specific way: everyone receives the identical number of points, so the ranking of the class never changes, but a test that turned out harder than intended is corrected so the best performance anchors the top of the scale. If the highest score was an 88 and the target is 100, every student gains 12 points, turning your 70 into an 82. The calculator makes it trivial to see where a curve leaves you before official grades are posted, and to understand how much a curve is actually worth given the class's top mark. Students use it to gauge the effect of a rumoured curve, and teachers use it to preview how a flat adjustment would reshape a set of results. Because it is a straight addition, the curve preserves the gaps between students exactly; it lifts the whole distribution without stretching or compressing it, which is why it is often the least controversial way to soften a difficult exam.",
    formulaExplanation:
      "The curve finds the gap between the target maximum and the highest score anyone actually earned, then adds that fixed gap to every student's score. Because the same number of points is added across the board, the difference between any two students stays identical and the class ranking is untouched — the entire distribution simply slides upward until the top score reaches the target. Your curved score is therefore your raw score plus that constant bonus, which is why a larger gap between the class high and the target produces a bigger lift for everyone.",
    formulaSource: "Linear (flat-shift) curving method",
    example: {
      inputs: { studentScore: "70", highestClassScore: "88", targetMax: "100" },
      explanation: "Bonus = 100 − 88 = 12, so a raw 70 becomes 70 + 12 = 82 after the curve.",
    },
    faqs: [
      { question: "How does this curving method work?", answer: "It is a flat linear shift. The calculator finds how far the highest score in the class falls short of the target maximum, then adds that same number of points to every student, including you. If the top score was 88 and the target is 100, everyone gains 12 points. Because the bonus is identical for all, the order of the class is preserved and only the overall level rises, anchoring the best performance at the top of the scale." },
      { question: "Does everyone get the same number of points?", answer: "Yes, that is the defining feature of this method. Every student receives an equal boost equal to the gap between the class's highest score and the target maximum. This keeps the relative standing of everyone unchanged — the gaps between scores stay exactly the same — while lifting the whole class so the top mark reaches the target. It is often seen as the fairest simple curve precisely because it advantages no one over anyone else." },
      { question: "Are there other ways to curve grades?", answer: "Yes, several. Some instructors scale scores as a percentage of the top mark rather than adding a flat amount, which stretches the distribution. Others fit grades to a bell curve, assigning fixed proportions of each letter grade, or add a flat bonus unrelated to the class high, or drop the hardest question. Each method reshapes results differently. This calculator models the flat linear shift to the top score, so confirm which method your instructor actually intends to use." },
      { question: "Can a curved score go above 100?", answer: "With this method the top student lands exactly at the target maximum, usually 100, and everyone else finishes below them, so scores should not exceed the target. However, if you enter a target higher than 100, or a student somehow scored above the value you listed as the class high, the arithmetic could produce a figure over 100. Check your inputs, and remember many schools cap final scores at 100 regardless of the raw curved result." },
      { question: "Why would a teacher curve a test at all?", answer: "Curving usually corrects a test that proved harder than intended, where even well-prepared students scored lower than the material warranted. Rather than penalise the whole class for an overly difficult exam, an instructor lifts the scores so the strongest performance anchors the top. Curves can also standardise results across sections or align a class to a target average. A flat shift like this one is common because it is simple, transparent and does not change who ranks ahead of whom." },
    ],
    slugEs: "calculadora-de-curva-de-notas",
    titleEs: "Calculadora de Curva de Notas",
    shortDescriptionEs: "Aplica una curva lineal a una puntuación de examen.",
    seoTitleEs: "Calculadora de Curva de Notas — Curva una Puntuación de Examen",
    metaDescriptionEs:
      "Calculadora de curva de notas gratis. Aplica una curva lineal que eleva la puntuación más alta de la clase al máximo objetivo y ajusta tu puntuación en la misma cantidad.",
    primaryKeywordEs: "calculadora de curva de notas",
    secondaryKeywordsEs: ["calculadora de nota con curva", "curva de examen", "calculadora de curvado de notas"],
    formulaExplanationEs:
      "La curva halla la diferencia entre el máximo objetivo y la puntuación más alta que alguien obtuvo realmente, y luego suma esa diferencia fija a la puntuación de cada estudiante. Como se añade el mismo número de puntos a todos, la diferencia entre dos estudiantes cualesquiera se mantiene idéntica y el ranking de la clase no cambia — toda la distribución simplemente se desplaza hacia arriba hasta que la puntuación más alta alcanza el objetivo. Tu puntuación con curva es por tanto tu puntuación bruta más ese bono constante, y por eso una diferencia mayor entre el máximo de clase y el objetivo produce un impulso mayor para todos.",
    explanationEs:
      "Una calculadora de curva de notas aplica uno de los métodos de curvado más comunes que un profesor puede usar: un desplazamiento lineal plano que eleva la puntuación más alta de la clase hasta un máximo objetivo y suma ese mismo impulso a la puntuación de todos los demás estudiantes. Introduces tu propia puntuación bruta, la puntuación más alta que alguien de la clase logró, y el máximo al que quieres elevar esa puntuación superior — normalmente 100 — y la herramienta calcula el bono y te lo aplica. Este método es popular porque es transparente y justo de una forma concreta: todos reciben el mismo número de puntos, así que el ranking de la clase nunca cambia, pero un examen que resultó más difícil de lo previsto se corrige para que el mejor rendimiento ancle la cima de la escala. Si la puntuación más alta fue un 88 y el objetivo es 100, cada estudiante gana 12 puntos, convirtiendo tu 70 en un 82. La calculadora hace trivial ver dónde te deja una curva antes de que se publiquen las notas oficiales y entender cuánto vale realmente una curva dado el máximo de la clase. Como es una suma directa, la curva preserva exactamente las diferencias entre estudiantes: eleva toda la distribución sin estirarla ni comprimirla, y por eso suele ser la forma menos polémica de suavizar un examen difícil.",
    exampleEs: {
      inputs: { studentScore: "70", highestClassScore: "88", targetMax: "100" },
      explanation: "Bono = 100 − 88 = 12, así que un 70 bruto se convierte en 70 + 12 = 82 tras la curva.",
    },
    faqsEs: [
      { question: "¿Cómo funciona este método de curvado?", answer: "Es un desplazamiento lineal plano. La calculadora halla cuánto le falta a la puntuación más alta de la clase para alcanzar el máximo objetivo, y luego suma ese mismo número de puntos a cada estudiante, incluido tú. Si la puntuación superior fue 88 y el objetivo es 100, todos ganan 12 puntos. Como el bono es idéntico para todos, se preserva el orden de la clase y solo sube el nivel general, anclando el mejor rendimiento en la cima de la escala." },
      { question: "¿Todos reciben el mismo número de puntos?", answer: "Sí, esa es la característica que define este método. Cada estudiante recibe un impulso igual a la diferencia entre la puntuación más alta de la clase y el máximo objetivo. Esto mantiene sin cambios la posición relativa de todos — las diferencias entre puntuaciones permanecen exactamente iguales — mientras eleva toda la clase para que la nota superior alcance el objetivo. A menudo se considera la curva simple más justa precisamente porque no favorece a nadie sobre los demás." },
      { question: "¿Hay otras formas de curvar notas?", answer: "Sí, varias. Algunos profesores escalan las puntuaciones como porcentaje de la nota más alta en lugar de sumar una cantidad fija, lo que estira la distribución. Otros ajustan las notas a una curva de campana, asignando proporciones fijas de cada letra, o añaden un bono plano no relacionado con el máximo de la clase, o descartan la pregunta más difícil. Cada método reconfigura los resultados de forma distinta. Esta calculadora modela el desplazamiento lineal plano a la nota superior, así que confirma qué método pretende usar tu profesor." },
      { question: "¿Puede una puntuación con curva superar 100?", answer: "Con este método el mejor estudiante aterriza exactamente en el máximo objetivo, normalmente 100, y todos los demás terminan por debajo, así que las puntuaciones no deberían superar el objetivo. Sin embargo, si introduces un objetivo mayor de 100, o un estudiante de algún modo puntuó por encima del valor que listaste como máximo de la clase, la aritmética podría producir una cifra por encima de 100. Comprueba tus entradas, y recuerda que muchas escuelas limitan las notas finales a 100." },
      { question: "¿Por qué curvaría un profesor un examen?", answer: "El curvado suele corregir un examen que resultó más difícil de lo previsto, donde incluso estudiantes bien preparados puntuaron más bajo de lo que la materia justificaba. En lugar de penalizar a toda la clase por un examen demasiado difícil, el profesor eleva las puntuaciones para que el rendimiento más fuerte ancle la cima. Las curvas también pueden estandarizar resultados entre secciones o alinear una clase a un promedio objetivo. Un desplazamiento plano como este es común porque es simple, transparente y no cambia quién va por delante de quién." },
    ],
    relatedCalculators: ["test-score-calculator", "grade-calculator", "weighted-grade-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "attendance",
    slug: "attendance-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Attendance Calculator",
    shortDescription: "Work out your attendance percentage.",
    seoTitle: "Attendance Calculator — Attendance Percentage & Misses",
    metaDescription:
      "Free attendance calculator. Enter classes attended and total classes to get your attendance rate as a percentage and the number missed.",
    primaryKeyword: "attendance calculator",
    secondaryKeywords: ["attendance percentage calculator", "class attendance calculator", "attendance rate calculator"],
    fields: [
      { id: "classesAttended", label: "Classes attended", type: "number", placeholder: "e.g. 27", min: 0, required: true, span: 1 },
      { id: "totalClasses", label: "Total classes held", type: "number", placeholder: "e.g. 30", min: 0, required: true, span: 1 },
    ],
    results: [
      { id: "attendanceRate", label: "Attendance rate", format: "percentage", decimals: 1, isPrimary: true },
      { id: "classesMissed", label: "Classes missed", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "attendance rate = (classes attended ÷ total classes) × 100",
    explanation:
      "An attendance calculator tells you what share of your classes you have actually shown up to, expressed as a clean percentage, and how many sessions you have missed. Enter the number of classes you attended and the total number held, and the tool divides one by the other, multiplies by 100, and also reports the gap as missed classes. It is the fast way to check where you stand against an attendance requirement without counting on your fingers through a term's worth of sessions. Attendance percentages matter far more than students sometimes realise. Many courses, scholarships, visa conditions and professional programmes set a minimum — often 75, 80 or 90 percent — below which you risk penalties, loss of eligibility, or being barred from an exam. Seeing that you have attended 27 of 30 classes, a 90 percent rate with 3 missed, tells you immediately whether you have room to spare or need to attend everything remaining. The calculator is equally useful looking forward: knowing your current rate and requirement, you can work out how many more sessions you can afford to miss, or how many you must attend to climb back above a threshold. Teachers and administrators use it to monitor class participation and flag students at risk, while parents use it to keep track of a child's schooling. Because it is a simple ratio, it works for any period — a single module, a semester, or a whole year — as long as the two numbers cover the same span.",
    formulaExplanation:
      "Attendance is a ratio: the classes you attended divided by the total classes held expresses the fraction of sessions you were present for, and multiplying by 100 turns that fraction into a percentage. The missed count is simply the total minus those attended. Because it is a straightforward proportion, the result is only meaningful when both numbers cover the same period and count sessions the same way — mixing a term's attendance with a year's total, or counting cancelled classes inconsistently, distorts the rate. A total of zero classes leaves the rate undefined, since you cannot take a fraction of nothing.",
    formulaSource: "Standard attendance-rate definition",
    example: {
      inputs: { classesAttended: "27", totalClasses: "30" },
      explanation: "(27 ÷ 30) × 100 = 90% attendance, with 30 − 27 = 3 classes missed.",
    },
    faqs: [
      { question: "How many classes can I miss and stay above my requirement?", answer: "First find your requirement — commonly 75, 80 or 90 percent — then work out the maximum misses it allows across the full number of sessions. For a 75 percent rule over 40 classes, you must attend at least 30, so you can miss up to 10. Enter your current attended and total figures to see where you stand now, then subtract to find how many of the remaining classes you can still afford to skip." },
      { question: "What counts as a class for this calculation?", answer: "Count each scheduled session your institution treats as gradeable attendance — typically every lecture, seminar, lab or tutorial on the register. Be consistent: if a class was officially cancelled and does not count against anyone, exclude it from both your attended figure and the total. Excused absences are trickier, since some schools count them as present and others as missed. Check your institution's policy so the numbers you enter match how your official attendance record is calculated." },
      { question: "Do excused absences lower my attendance?", answer: "It depends entirely on your institution's policy. Some schools count an excused absence — for illness with a note, say, or an approved commitment — as present, so it does not reduce your rate. Others record it as an absence that still counts against the total, meaning it lowers your percentage even though it will not incur a penalty. Because practice varies widely, confirm how your school treats excused absences before deciding whether to include them as attended in this calculator." },
      { question: "How do I raise my attendance percentage?", answer: "The only way to raise a lagging rate is to attend more of the remaining sessions, since each class you make lifts the ratio. The effect is larger when fewer classes have been held, because each session carries more weight in a smaller total. Use the calculator to test scenarios: enter the attendance you would have after attending the next several classes to see how quickly your percentage recovers and whether it can reach your required threshold in time." },
      { question: "Why does my total classes need to be more than zero?", answer: "Attendance is your attended classes as a fraction of the total held, and dividing by zero is undefined — if no classes have been held, there is no meaningful percentage to report, so the calculator returns no result until you enter a positive total. This simply reflects that a rate cannot exist before any sessions have taken place. Once at least one class has been held, the calculation works normally and updates as you add attended and total figures." },
    ],
    slugEs: "calculadora-de-asistencia",
    titleEs: "Calculadora de Asistencia",
    shortDescriptionEs: "Calcula tu porcentaje de asistencia.",
    seoTitleEs: "Calculadora de Asistencia — Porcentaje y Faltas",
    metaDescriptionEs:
      "Calculadora de asistencia gratis. Introduce las clases asistidas y el total de clases para obtener tu tasa de asistencia en porcentaje y el número de faltas.",
    primaryKeywordEs: "calculadora de asistencia",
    secondaryKeywordsEs: ["calculadora de porcentaje de asistencia", "calculadora de asistencia a clase", "calculadora de tasa de asistencia"],
    formulaExplanationEs:
      "La asistencia es una razón: las clases a las que asististe divididas entre el total de clases impartidas expresa la fracción de sesiones en las que estuviste presente, y multiplicar por 100 convierte esa fracción en un porcentaje. El recuento de faltas es simplemente el total menos las asistidas. Como es una proporción directa, el resultado solo es significativo cuando ambos números cubren el mismo periodo y cuentan las sesiones de la misma forma — mezclar la asistencia de un cuatrimestre con el total de un año distorsiona la tasa. Un total de cero clases deja la tasa indefinida, ya que no puedes tomar una fracción de nada.",
    explanationEs:
      "Una calculadora de asistencia te dice a qué parte de tus clases has acudido realmente, expresada como un porcentaje limpio, y cuántas sesiones has faltado. Introduce el número de clases a las que asististe y el total impartidas, y la herramienta divide una entre otra, multiplica por 100, y también informa la diferencia como clases perdidas. Es la forma rápida de comprobar dónde estás frente a un requisito de asistencia sin contar con los dedos todo un periodo de sesiones. Los porcentajes de asistencia importan más de lo que a veces creen los estudiantes. Muchos cursos, becas, condiciones de visado y programas profesionales fijan un mínimo — a menudo 75, 80 o 90 por ciento — por debajo del cual arriesgas sanciones, pérdida de elegibilidad, o quedar excluido de un examen. Ver que has asistido a 27 de 30 clases, una tasa del 90 por ciento con 3 faltas, te dice de inmediato si tienes margen o necesitas asistir a todo lo restante. La calculadora es igual de útil mirando hacia adelante: conociendo tu tasa actual y tu requisito, puedes calcular cuántas sesiones más puedes permitirte faltar, o cuántas debes asistir para volver por encima de un umbral. Profesores y administradores la usan para monitorizar la participación y señalar a estudiantes en riesgo.",
    exampleEs: {
      inputs: { classesAttended: "27", totalClasses: "30" },
      explanation: "(27 ÷ 30) × 100 = 90% de asistencia, con 30 − 27 = 3 clases perdidas.",
    },
    faqsEs: [
      { question: "¿Cuántas clases puedo faltar y seguir por encima de mi requisito?", answer: "Primero halla tu requisito — comúnmente 75, 80 o 90 por ciento — y luego calcula el máximo de faltas que permite sobre el número total de sesiones. Para una regla del 75 por ciento sobre 40 clases, debes asistir al menos a 30, así que puedes faltar hasta 10. Introduce tus cifras actuales de asistidas y total para ver dónde estás ahora, y luego resta para hallar cuántas de las clases restantes puedes permitirte saltarte." },
      { question: "¿Qué cuenta como una clase para este cálculo?", answer: "Cuenta cada sesión programada que tu institución trate como asistencia evaluable — normalmente cada lección, seminario, laboratorio o tutoría en el registro. Sé consistente: si una clase se canceló oficialmente y no cuenta contra nadie, exclúyela tanto de tu cifra de asistidas como del total. Las ausencias justificadas son más complicadas, ya que algunas escuelas las cuentan como presente y otras como falta. Consulta la política de tu institución para que los números que introduzcas coincidan con tu registro oficial." },
      { question: "¿Las ausencias justificadas reducen mi asistencia?", answer: "Depende por completo de la política de tu institución. Algunas escuelas cuentan una ausencia justificada — por enfermedad con justificante, digamos, o un compromiso aprobado — como presente, así que no reduce tu tasa. Otras la registran como una ausencia que aun así cuenta contra el total, lo que baja tu porcentaje aunque no acarree sanción. Como la práctica varía mucho, confirma cómo trata tu escuela las ausencias justificadas antes de decidir si incluirlas como asistidas en esta calculadora." },
      { question: "¿Cómo subo mi porcentaje de asistencia?", answer: "La única forma de subir una tasa rezagada es asistir a más de las sesiones restantes, ya que cada clase a la que acudes eleva la razón. El efecto es mayor cuando se han impartido menos clases, porque cada sesión pesa más en un total pequeño. Usa la calculadora para probar escenarios: introduce la asistencia que tendrías tras acudir a las próximas varias clases para ver con qué rapidez se recupera tu porcentaje y si puede alcanzar tu umbral requerido a tiempo." },
      { question: "¿Por qué mi total de clases debe ser mayor que cero?", answer: "La asistencia es tus clases asistidas como fracción del total impartido, y dividir entre cero es indefinido — si no se han impartido clases, no hay porcentaje significativo que informar, así que la calculadora no devuelve resultado hasta que introduces un total positivo. Esto simplemente refleja que una tasa no puede existir antes de que ocurra cualquier sesión. Una vez impartida al menos una clase, el cálculo funciona con normalidad y se actualiza al añadir cifras." },
    ],
    relatedCalculators: ["grade-calculator", "gpa-calculator", "study-time-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
