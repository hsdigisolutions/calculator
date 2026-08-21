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
    relatedCalculators: ["grade-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
