import type { CalculatorDefinition } from "../types";

export const educationCalculators: CalculatorDefinition[] = [
  {
    id: "grade",
    slug: "grade-calculator",
    category: "Education",
    categorySlug: "education",
    title: "Grade Calculator",
    shortDescription: "Work out your final weighted grade.",
    seoTitle: "Grade Calculator — Free Weighted Grade Calculator",
    metaDescription:
      "Free grade calculator. Enter your scores and their weights to find your final weighted grade as a percentage and letter grade.",
    primaryKeyword: "grade calculator",
    secondaryKeywords: ["weighted grade calculator", "final grade calculator", "test grade calculator"],
    fields: [
      { id: "scores", label: "Scores (%)", type: "text", placeholder: "e.g. 88, 92, 79", required: true, span: 2, helpText: "Your score on each component, separated by commas." },
      { id: "weights", label: "Weights (%)", type: "text", placeholder: "e.g. 20, 30, 50", required: false, span: 2, helpText: "Weight of each component. Leave blank for a simple average." },
    ],
    results: [
      { id: "finalGrade", label: "Final grade", format: "percentage", decimals: 2, isPrimary: true },
      { id: "letter", label: "Letter grade", format: "text", isPrimary: false },
    ],
    formula: "final = Σ(score × weight) ÷ Σ(weight)",
    explanation:
      "A grade calculator combines the scores from your assignments, tests and exams into a single final result, honouring the fact that not every assessment counts equally. You enter each score and, optionally, the weight it carries in the course. The tool multiplies each score by its weight, sums those products, and divides by the total weight to produce your weighted percentage, then maps that onto a letter grade. Weighting is what makes the number trustworthy. A final exam worth 50 percent of the course should move your grade far more than a quiz worth 5 percent, and a plain average of the two would badly misrepresent where you stand. A grade calculator applies each weight correctly so the result matches how your instructor actually tallies the course. The multiply-by-weight-then-divide method is the same weighted-average formula used on report cards and in grading software everywhere. Students use a grade calculator to check their current standing before an exam, work out the score they still need to hit a target, and remove the anxiety of guessing. Teachers, tutors and parents use it to verify marks quickly. Leave the weights blank and it falls back to a simple, unweighted average of every score you enter.",
    formulaExplanation:
      "Each score is multiplied by its weight so that heavier assessments contribute proportionally more to the result. Summing those weighted products gives the total earned across the course. Dividing by the sum of all weights rescales that total back onto a 0 to 100 percentage, which is why the weights need not add up to 100 — any consistent scale works because the division normalises them automatically.",
    formulaSource: "Standard weighted-average grading",
    example: {
      inputs: { scores: "88, 92, 79", weights: "20, 30, 50" },
      explanation: "(88×20 + 92×30 + 79×50) ÷ 100 = (1760 + 2760 + 3950) ÷ 100 = 84.7%, a B.",
    },
    faqs: [
      { question: "Do the weights need to add up to 100?", answer: "No. The calculator divides by the total of your weights, so any consistent scale produces the correct result. Weights of 1, 1 and 2 give exactly the same grade as 25, 25 and 50, because both describe the same relative importance. This is handy when a syllabus lists weights as points, categories or fractions rather than neat percentages. Just enter the numbers as your course states them and let the division normalise them for you." },
      { question: "What grade do I need on the final exam?", answer: "Work backwards from your target. Enter your current scores and their weights to see where you stand, then treat the final as the remaining weight. If everything so far totals 60 percent of the course at an 85 average and the final is worth 40 percent, the score you need on it to reach a target grade follows directly. Set the required final grade aside first, then solve for the missing score." },
      { question: "What happens if I leave the weights blank?", answer: "The calculator returns a simple, unweighted average — it adds your scores and divides by how many there are. The same fallback applies if the number of weights does not match the number of scores, which prevents a mismatched entry from producing a misleading result. Use the unweighted mode for quick checks where every assessment counts equally, and fill in weights whenever your course treats some items as more important." },
      { question: "How is the letter grade determined?", answer: "The tool applies a common United States scale in which 90 to 100 percent is an A range, 80 to 89 a B, 70 to 79 a C, 60 to 69 a D, and below 60 an F. Your own school may set different cutoffs, use plus and minus bands, or round differently, so always confirm against the official grading policy in your syllabus before relying on the letter for anything important." },
      { question: "Can I use this for my whole semester grade?", answer: "Yes. Enter every graded component of the course — homework, quizzes, projects, midterms and the final — with each one's weight, and the result is your projected semester grade. For categories that hold several items, average that category first, then enter it as one weighted score. Update the figures as new marks come in to keep a running, accurate picture of your standing throughout the term." },
    ],
    slugEs: "calculadora-de-calificaciones",
    titleEs: "Calculadora de Calificaciones",
    shortDescriptionEs: "Calcula tu calificación final ponderada.",
    seoTitleEs: "Calculadora de Calificaciones — Nota Final Ponderada Gratis",
    metaDescriptionEs:
      "Calculadora de calificaciones gratuita. Introduce tus puntuaciones y sus pesos para hallar tu calificación final ponderada como porcentaje y como nota en letra.",
    primaryKeywordEs: "calculadora de calificaciones",
    secondaryKeywordsEs: ["calculadora de nota ponderada", "calculadora de nota final", "calculadora de calificacion de examen"],
    formulaExplanationEs:
      "Cada puntuación se multiplica por su peso para que las evaluaciones más importantes contribuyan proporcionalmente más al resultado. Sumar esos productos ponderados da el total obtenido en el curso. Dividir por la suma de todos los pesos reescala ese total de nuevo a un porcentaje de 0 a 100, y por eso los pesos no necesitan sumar 100: cualquier escala consistente funciona porque la división los normaliza automáticamente.",
    explanationEs:
      "Una calculadora de calificaciones combina las puntuaciones de tus tareas, exámenes y pruebas en un único resultado final, respetando el hecho de que no todas las evaluaciones cuentan por igual. Introduces cada puntuación y, opcionalmente, el peso que tiene en el curso. La herramienta multiplica cada puntuación por su peso, suma esos productos y divide por el peso total para producir tu porcentaje ponderado, y luego lo traduce a una nota en letra. La ponderación es lo que hace que el número sea fiable. Un examen final que vale el 50 por ciento del curso debería mover tu nota mucho más que un cuestionario que vale el 5 por ciento, y un simple promedio de ambos representaría muy mal tu situación. Una calculadora de calificaciones aplica cada peso correctamente para que el resultado coincida con la forma en que tu profesor realmente suma el curso. El método de multiplicar por el peso y luego dividir es la misma fórmula de promedio ponderado que se usa en los boletines de notas y en el software de calificación de todo el mundo. Los estudiantes usan una calculadora de calificaciones para comprobar su situación antes de un examen, calcular la puntuación que aún necesitan para alcanzar un objetivo y eliminar la ansiedad de adivinar. Deja los pesos en blanco y vuelve a un promedio simple y no ponderado de todas las puntuaciones que introduzcas.",
    exampleEs: {
      inputs: { scores: "88, 92, 79", weights: "20, 30, 50" },
      explanation: "(88×20 + 92×30 + 79×50) ÷ 100 = (1760 + 2760 + 3950) ÷ 100 = 84.7%, una B.",
    },
    faqsEs: [
      { question: "¿Los pesos deben sumar 100?", answer: "No. La calculadora divide por el total de tus pesos, así que cualquier escala consistente produce el resultado correcto. Pesos de 1, 1 y 2 dan exactamente la misma nota que 25, 25 y 50, porque ambos describen la misma importancia relativa. Esto es útil cuando un temario lista los pesos como puntos, categorías o fracciones en lugar de porcentajes redondos. Introduce los números tal como los indica tu curso y deja que la división los normalice." },
      { question: "¿Qué nota necesito en el examen final?", answer: "Trabaja hacia atrás desde tu objetivo. Introduce tus puntuaciones actuales y sus pesos para ver dónde estás, y luego trata el final como el peso restante. Si todo lo anterior suma el 60 por ciento del curso con una media de 85 y el final vale el 40 por ciento, la puntuación que necesitas en él para alcanzar una nota objetivo se deduce directamente. Fija primero la nota final requerida y luego despeja la puntuación que falta." },
      { question: "¿Qué pasa si dejo los pesos en blanco?", answer: "La calculadora devuelve un promedio simple y no ponderado: suma tus puntuaciones y las divide entre su cantidad. La misma alternativa se aplica si el número de pesos no coincide con el número de puntuaciones, lo que evita que una entrada desajustada produzca un resultado engañoso. Usa el modo no ponderado para comprobaciones rápidas donde cada evaluación cuenta igual, y rellena los pesos cuando tu curso trate algunos elementos como más importantes." },
      { question: "¿Cómo se determina la nota en letra?", answer: "La herramienta aplica una escala común de Estados Unidos en la que del 90 al 100 por ciento es un rango A, del 80 al 89 una B, del 70 al 79 una C, del 60 al 69 una D y por debajo de 60 una F. Tu propia escuela puede fijar cortes diferentes, usar bandas de más y menos, o redondear de otra forma, así que confirma siempre con la política oficial de calificación de tu temario antes de confiar en la letra." },
      { question: "¿Puedo usar esto para la nota de todo el semestre?", answer: "Sí. Introduce cada componente calificado del curso —tareas, cuestionarios, proyectos, parciales y el final— con el peso de cada uno, y el resultado es tu nota proyectada del semestre. Para las categorías que agrupan varios elementos, promedia primero esa categoría y luego introdúcela como una única puntuación ponderada. Actualiza las cifras a medida que lleguen nuevas notas para mantener una imagen precisa y actualizada de tu situación durante todo el periodo." },
    ],
    relatedCalculators: ["gpa-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "gpa",
    slug: "gpa-calculator",
    category: "Education",
    categorySlug: "education",
    title: "GPA Calculator",
    shortDescription: "Calculate your grade point average.",
    seoTitle: "GPA Calculator — Free Grade Point Average Calculator",
    metaDescription:
      "Free GPA calculator. Enter your letter grades and credit hours to compute your grade point average on the 4.0 scale.",
    primaryKeyword: "gpa calculator",
    secondaryKeywords: ["grade point average calculator", "college gpa calculator", "4.0 scale gpa"],
    fields: [
      { id: "grades", label: "Letter grades", type: "text", placeholder: "e.g. A, B+, A-, C", required: true, span: 2, helpText: "One grade per course, separated by commas." },
      { id: "credits", label: "Credit hours", type: "text", placeholder: "e.g. 3, 4, 3, 3", required: false, span: 2, helpText: "Credits for each course, in the same order. Defaults to 1 each." },
    ],
    results: [
      { id: "gpa", label: "GPA", format: "number", decimals: 2, isPrimary: true },
      { id: "totalCredits", label: "Total credits", format: "number", decimals: 0, isPrimary: false },
      { id: "courses", label: "Courses", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "GPA = Σ(grade points × credits) ÷ Σ(credits)",
    explanation:
      "A GPA calculator converts the letter grades from your courses into a single grade point average on the familiar 4.0 scale. Each letter maps to a point value — A is 4.0, B is 3.0, C is 2.0, with plus and minus modifiers in between — and every course is weighted by its credit hours before being averaged. The result is the number that appears on transcripts and that schools, scholarships and employers read at a glance. Weighting by credit hours is the crucial step. A four-credit course shapes your standing more than a one-credit elective, and a plain average of letters would ignore that. A GPA calculator multiplies each grade's points by its credits so a heavier course pulls proportionally harder, exactly as a registrar computes it. The multiply-by-credits-then-divide method is the standard 4.0 scale used across United States high schools and colleges. Students use a GPA calculator to track their average across a term or a whole degree, project how a coming semester will move it, and see what grades they need to reach a target for graduate school or a scholarship. Enter your grades and credit hours and it returns the GPA, total credits and course count in one pass; leave credits blank and each course counts equally.",
    formulaExplanation:
      "Each letter grade becomes a point value on the 4.0 scale, then is multiplied by the course's credit hours so weightier courses carry more influence. Summing those grade-point-times-credit products gives the total quality points earned. Dividing by the total credits attempted rescales that back onto the 0 to 4.0 range, which is why a high grade in a large course lifts the average more than the same grade in a small one.",
    formulaSource: "Standard 4.0 GPA scale",
    example: {
      inputs: { grades: "A, B+, A-, C", credits: "3, 4, 3, 3" },
      explanation: "(4.0×3 + 3.3×4 + 3.7×3 + 2.0×3) ÷ 13 = (12 + 13.2 + 11.1 + 6) ÷ 13 ≈ 3.25.",
    },
    faqs: [
      { question: "What grade scale does this GPA calculator use?", answer: "It applies the standard United States 4.0 scale with plus and minus modifiers: A is 4.0, A minus 3.7, B plus 3.3, B 3.0, and so on down to F at 0.0. This is the most widely recognised system across American colleges and high schools. Some institutions treat an A plus as 4.0 rather than 4.3, or cap the scale differently, so check your school's official conversion chart if your transcript looks slightly different." },
      { question: "What is a good GPA?", answer: "A 3.0 sits at a solid B average and is a common baseline for many programmes and employers. A 3.5 and above is generally considered strong and opens doors to competitive scholarships and graduate schools, while 3.7 or higher is excellent. Standards vary by context — some selective programmes expect close to 4.0, whereas passing a demanding degree may only require 2.0. Judge your number against the specific goal you are aiming for." },
      { question: "How do credit hours affect my GPA?", answer: "Credit hours weight each course's influence on the average. A four-credit course counts four times as heavily as a one-credit course, so a strong grade in a large class lifts your GPA more, and a weak one drags it down further. Enter credits in the same order as your grades for an accurate result. Leave them blank and the tool assumes one credit each, giving every course equal weight." },
      { question: "How do I calculate a cumulative GPA across semesters?", answer: "Enter every course from all the semesters you want to include, each with its own grade and credit hours, and the tool returns your cumulative GPA in one calculation. Alternatively, combine the total quality points and total credits from each term and divide. Do not simply average your semester GPAs together — that ignores how many credits each term carried and produces a subtly wrong cumulative figure that will not match your transcript." },
      { question: "Does this calculate a weighted honors GPA?", answer: "No. This tool uses the unweighted 4.0 scale, where an A is 4.0 regardless of course difficulty. Weighted systems add extra points for honors, Advanced Placement or International Baccalaureate classes — often putting an A at 4.5 or 5.0 — but the bonus and the cap vary widely between schools. Because there is no single standard, calculate a weighted GPA using your own school's specific point additions rather than assuming a universal rule." },
    ],
    slugEs: "calculadora-de-gpa",
    titleEs: "Calculadora de GPA",
    shortDescriptionEs: "Calcula tu promedio de calificaciones (GPA).",
    seoTitleEs: "Calculadora de GPA — Promedio de Calificaciones Gratis",
    metaDescriptionEs:
      "Calculadora de GPA gratuita. Introduce tus notas en letra y las horas de crédito para calcular tu promedio de calificaciones en la escala de 4.0.",
    primaryKeywordEs: "calculadora de gpa",
    secondaryKeywordsEs: ["calculadora de promedio de calificaciones", "calculadora de gpa universitario", "gpa escala 4.0"],
    formulaExplanationEs:
      "Cada nota en letra se convierte en un valor de puntos en la escala de 4.0 y luego se multiplica por las horas de crédito del curso para que las asignaturas de más peso tengan más influencia. Sumar esos productos de puntos por crédito da el total de puntos de calidad obtenidos. Dividir por el total de créditos cursados reescala eso de nuevo al rango de 0 a 4.0, y por eso una nota alta en un curso grande eleva el promedio más que la misma nota en uno pequeño.",
    explanationEs:
      "Una calculadora de GPA convierte las notas en letra de tus cursos en un único promedio de calificaciones en la conocida escala de 4.0. Cada letra se asigna a un valor de puntos —A es 4.0, B es 3.0, C es 2.0, con modificadores de más y menos entre medias— y cada curso se pondera por sus horas de crédito antes de promediarse. El resultado es el número que aparece en los expedientes y que escuelas, becas y empleadores leen de un vistazo. Ponderar por horas de crédito es el paso crucial. Un curso de cuatro créditos moldea tu situación más que una asignatura optativa de un crédito, y un simple promedio de letras ignoraría eso. Una calculadora de GPA multiplica los puntos de cada nota por sus créditos para que un curso más pesado tire proporcionalmente más fuerte, exactamente como lo calcula un registrador. El método de multiplicar por créditos y luego dividir es la escala estándar de 4.0 usada en las escuelas secundarias y universidades de Estados Unidos. Los estudiantes usan una calculadora de GPA para seguir su promedio a lo largo de un periodo o de toda una carrera, proyectar cómo lo moverá un semestre próximo, y ver qué notas necesitan para alcanzar un objetivo de posgrado o beca. Introduce tus notas y horas de crédito y devuelve el GPA, los créditos totales y el número de cursos en una sola pasada.",
    exampleEs: {
      inputs: { grades: "A, B+, A-, C", credits: "3, 4, 3, 3" },
      explanation: "(4.0×3 + 3.3×4 + 3.7×3 + 2.0×3) ÷ 13 = (12 + 13.2 + 11.1 + 6) ÷ 13 ≈ 3.25.",
    },
    faqsEs: [
      { question: "¿Qué escala de notas usa esta calculadora de GPA?", answer: "Aplica la escala estándar de 4.0 de Estados Unidos con modificadores de más y menos: A es 4.0, A menos 3.7, B más 3.3, B 3.0, y así hasta la F en 0.0. Es el sistema más reconocido en las universidades y escuelas secundarias estadounidenses. Algunas instituciones tratan una A más como 4.0 en lugar de 4.3, o limitan la escala de otra forma, así que consulta la tabla de conversión oficial de tu escuela si tu expediente se ve algo distinto." },
      { question: "¿Qué es un buen GPA?", answer: "Un 3.0 equivale a una media sólida de B y es una base común para muchos programas y empleadores. Un 3.5 o más se considera generalmente fuerte y abre puertas a becas competitivas y a posgrados, mientras que 3.7 o superior es excelente. Los estándares varían según el contexto: algunos programas selectivos esperan cerca de 4.0, mientras que aprobar una carrera exigente puede requerir solo 2.0. Juzga tu número frente al objetivo concreto al que aspiras." },
      { question: "¿Cómo afectan las horas de crédito a mi GPA?", answer: "Las horas de crédito ponderan la influencia de cada curso en el promedio. Un curso de cuatro créditos cuenta cuatro veces más que uno de un crédito, así que una buena nota en una clase grande eleva tu GPA más, y una mala lo hunde más. Introduce los créditos en el mismo orden que tus notas para un resultado preciso. Déjalos en blanco y la herramienta asume un crédito por curso, dando a cada uno el mismo peso." },
      { question: "¿Cómo calculo un GPA acumulado entre semestres?", answer: "Introduce cada curso de todos los semestres que quieras incluir, cada uno con su propia nota y horas de crédito, y la herramienta devuelve tu GPA acumulado en un solo cálculo. Como alternativa, combina el total de puntos de calidad y el total de créditos de cada periodo y divide. No promedies simplemente los GPA de cada semestre entre sí: eso ignora cuántos créditos llevaba cada periodo y produce una cifra acumulada sutilmente errónea que no coincidirá con tu expediente." },
      { question: "¿Esto calcula un GPA ponderado de honores?", answer: "No. Esta herramienta usa la escala no ponderada de 4.0, donde una A es 4.0 sin importar la dificultad del curso. Los sistemas ponderados añaden puntos extra por clases de honores, Colocación Avanzada o Bachillerato Internacional —a menudo situando una A en 4.5 o 5.0— pero el bono y el tope varían mucho entre escuelas. Como no hay un estándar único, calcula un GPA ponderado usando las adiciones de puntos específicas de tu escuela en lugar de asumir una regla universal." },
    ],
    relatedCalculators: ["grade-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
