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
    relatedCalculators: ["grade-calculator", "gpa-calculator", "study-time-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
