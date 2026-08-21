import type { CalculatorDefinition } from "../types";

export const mathExtraCalculators: CalculatorDefinition[] = [
  {
    id: "fraction",
    slug: "fraction-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Fraction Calculator",
    shortDescription: "Add, subtract, multiply or divide two fractions.",
    seoTitle: "Fraction Calculator — Add, Subtract, Multiply, Divide",
    metaDescription:
      "Free fraction calculator. Add, subtract, multiply or divide two fractions and get the simplified result plus its decimal value.",
    primaryKeyword: "fraction calculator",
    secondaryKeywords: ["adding fractions calculator", "simplify fractions", "fraction math"],
    fields: [
      { id: "n1", label: "Numerator 1", type: "number", placeholder: "1", required: true, span: 1 },
      { id: "d1", label: "Denominator 1", type: "number", placeholder: "2", required: true, span: 1 },
      {
        id: "op", label: "Operation", type: "select", required: true, span: 2, defaultValue: "+",
        options: [
          { value: "+", label: "Add (+)" },
          { value: "-", label: "Subtract (−)" },
          { value: "*", label: "Multiply (×)" },
          { value: "/", label: "Divide (÷)" },
        ],
      },
      { id: "n2", label: "Numerator 2", type: "number", placeholder: "1", required: true, span: 1 },
      { id: "d2", label: "Denominator 2", type: "number", placeholder: "3", required: true, span: 1 },
    ],
    results: [
      { id: "result", label: "Result", format: "text", isPrimary: true },
      { id: "decimal", label: "As a decimal", format: "number", decimals: 6, isPrimary: false },
    ],
    formula: "a/b + c/d = (a·d + c·b) / (b·d), then simplify by the GCD",
    explanation:
      "A fraction represents a part of a whole as one number divided by another, a numerator over a denominator, and combining two fractions means finding the single fraction equal to their sum, difference, product or quotient. The challenge is that fractions can only be added or subtracted once they share a denominator, while multiplication and division follow different rules again. The fraction calculator handles all four operations and then reduces the outcome, so the answer arrives in its simplest form rather than an awkward, oversized ratio. To add or subtract, the tool rewrites both fractions over a common denominator, most simply the product of the two denominators, then works on the numerators; adding 1/2 and 1/3 becomes the numerator 1 times 3 plus 1 times 2 over 2 times 3, which is 5/6. To divide, it multiplies by the reciprocal of the second fraction. Every result is then divided top and bottom by the greatest common divisor, because a fraction calculator should present a value like 5/6 in lowest terms and its decimal, roughly 0.833333, alongside it. Students learning arithmetic, cooks scaling recipes, carpenters working in inches and anyone splitting quantities rely on this fraction calculator to combine fractions accurately without slips in the cross-multiplication.",
    formulaExplanation:
      "Adding fractions requires a shared denominator, so multiplying each numerator by the other fraction's denominator, a times d and c times b, rewrites both over the common base b times d without changing their values. The rewritten numerators can then be added directly. Dividing the final numerator and denominator by their greatest common divisor removes the shared factor, so 1/2 plus 1/3 lands as 5/6 in lowest terms.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { n1: 1, d1: 2, op: "+", n2: 1, d2: 3 },
      explanation: "1/2 + 1/3 = (1·3 + 1·2) / (2·3) = 5/6 ≈ 0.833333.",
    },
    faqs: [
      { question: "How do I add fractions with different denominators?", answer: "Give them a common denominator first. The simplest shared denominator is the product of the two, so for 1/2 and 1/3 you use sixths: 1/2 becomes 3/6 and 1/3 becomes 2/6. Add the numerators to get 5/6, then reduce if the result shares a common factor. Multiplication and division do not need a common denominator, but addition and subtraction always do." },
      { question: "Does the calculator simplify the answer?", answer: "Yes, every result is reduced to lowest terms. After performing your chosen operation, the tool finds the greatest common divisor of the numerator and denominator and divides both by it, so nothing is left with a shared factor. That is why 1/2 plus 1/3 is reported as 5/6 rather than an unreduced equivalent. The decimal form, about 0.833333, is shown too for quick reference." },
      { question: "How do I divide by a fraction?", answer: "Multiply by its reciprocal, flipping the second fraction upside down and multiplying. Dividing by 1/3 is the same as multiplying by 3/1, because division asks how many of the divisor fit into the dividend. The calculator applies this automatically when you choose the divide operation, then simplifies the product, so you never have to invert the fraction or reduce the result yourself." },
      { question: "How do I multiply fractions?", answer: "Multiply the numerators together and the denominators together, with no common denominator needed. For 1/2 times 1/3 the numerators give 1 and the denominators give 6, so the product is 1/6. Multiplication is the most direct fraction operation because it works straight across. The calculator then reduces the result to lowest terms, cancelling any factor the top and bottom share." },
      { question: "What is a fraction as a decimal?", answer: "It is the value you get by dividing the numerator by the denominator. Splitting 5 by 6 gives about 0.833333, which is why the calculator shows that alongside the fraction 5/6. Some fractions produce terminating decimals, like 1/2 equalling 0.5, while others repeat forever. The decimal form is handy for comparing fractions or plugging a result into further calculations that expect a plain number." },
    ],
    relatedCalculators: ["ratio-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "ratio",
    slug: "ratio-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Ratio Calculator",
    shortDescription: "Simplify a ratio and scale it proportionally.",
    seoTitle: "Ratio Calculator — Simplify & Scale Ratios",
    metaDescription:
      "Free ratio calculator. Simplify any ratio to its lowest terms, see it as a decimal, and scale it proportionally to find a missing value.",
    primaryKeyword: "ratio calculator",
    secondaryKeywords: ["simplify ratio", "proportion calculator", "ratio to decimal"],
    fields: [
      { id: "a", label: "Value A", type: "number", placeholder: "16", required: true, span: 1 },
      { id: "b", label: "Value B", type: "number", placeholder: "9", required: true, span: 1 },
      { id: "scaleA", label: "Scale A to", type: "number", placeholder: "1920", required: false, span: 2, helpText: "Optional — finds the matching B at this scale." },
    ],
    results: [
      { id: "simplified", label: "Simplified ratio", format: "text", isPrimary: true },
      { id: "decimal", label: "As a decimal (A ÷ B)", format: "number", decimals: 4, isPrimary: false },
      { id: "scaledValue", label: "Matching B", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "Divide both terms by their GCD; scale via A : B = newA : newB",
    explanation:
      "A ratio compares two quantities by showing how many units of one correspond to units of the other, written with a colon as A to B. Two jobs come up constantly with ratios: reducing them to their simplest whole-number form and scaling them up while holding the proportion fixed. The ratio calculator does both, and also expresses the relationship as a single decimal for quick comparison. Simplifying divides both terms by their greatest common divisor, which leaves 16 : 9 unchanged but collapses 1920 : 1080 to the same 16 : 9. Scaling answers the practical question of what B must be if A becomes a given value. The tool keeps A to B constant, so setting A to 1920 against an original 16 : 9 returns B equal to 1920 times 9 divided by 16, which is 1080. Because the proportion never shifts, a ratio calculator lets you resize recipes, mixes, screen dimensions or map distances without recomputing the relationship from scratch. Designers matching aspect ratios, cooks and chemists holding a mixture's proportions, and model builders scaling plans all lean on this ratio calculator to simplify and rescale two-part relationships reliably.",
    formulaExplanation:
      "Dividing both terms of a ratio by their greatest common divisor removes the factor they share without disturbing their relationship, so 1920 : 1080 shrinks to 16 : 9. Scaling relies on the proportion A to B staying equal to newA to newB; solving that equality for the missing term gives newB as newA times B divided by A. Setting A to 1920 therefore returns B as 1920 times 9 divided by 16, or 1080.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { a: 16, b: 9, scaleA: 1920 },
      explanation: "16 : 9 is already simplified. Scaling A to 1920 gives B = 1920 × 9 ÷ 16 = 1080.",
    },
    faqs: [
      { question: "How do I simplify a ratio?", answer: "Divide both numbers by their greatest common divisor, the largest value that goes into each with no remainder. For 1920 : 1080 that divisor is 120, and dividing both terms by it leaves 16 : 9. The ratio still describes the same relationship, only with smaller numbers. If the two terms already share no common factor, the ratio is fully simplified as it stands." },
      { question: "What is a ratio as a decimal?", answer: "It is the first term divided by the second, which turns the comparison into one plain number. A 16 : 9 ratio equals 16 divided by 9, about 1.78, meaning the first quantity is roughly 1.78 times the second. Decimals make ratios easy to rank and compare at a glance, and they slot directly into further calculations that expect a single value rather than a two-part expression." },
      { question: "How does scaling a ratio work?", answer: "Scaling holds the proportion fixed while you change one term. Set a new value for A, and the calculator finds the B that keeps A to B equal to the original ratio. With a 16 : 9 ratio and A set to 1920, it returns 1080, because 1920 times 9 divided by 16 is 1080. This is how a single aspect ratio expands to any resolution without distorting the shape." },
      { question: "What is the difference between a ratio and a fraction?", answer: "A fraction expresses a part of a single whole, while a ratio compares two separate quantities that may or may not belong to the same whole. A 16 : 9 ratio can be written as the fraction 16/9, and the arithmetic of simplifying is the same, but ratios often describe relationships like width to height or one ingredient to another, where thinking of a single whole would be misleading." },
      { question: "Can I use a ratio to find a missing value?", answer: "Yes, that is exactly what the scaling field does. Given a known ratio and one new term, the calculator solves for the other so the proportion stays intact. Enter A as 1920 with an original 16 : 9 ratio and it returns B as 1080. The same cross-multiplication finds a missing first term if you know the second, which is how proportion problems in recipes and maps are solved." },
    ],
    relatedCalculators: ["fraction-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "gcf",
    slug: "gcf-calculator",
    category: "Math",
    categorySlug: "math",
    title: "GCF Calculator",
    shortDescription: "Find the greatest common factor of numbers.",
    seoTitle: "GCF Calculator — Greatest Common Factor",
    metaDescription:
      "Free GCF calculator. Find the greatest common factor (GCD) of two or more numbers, plus their least common multiple.",
    primaryKeyword: "gcf calculator",
    secondaryKeywords: ["greatest common factor", "gcd calculator", "hcf calculator"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 24, 36, 60", required: true, span: 2, helpText: "Two or more whole numbers, separated by commas." },
    ],
    results: [
      { id: "gcf", label: "Greatest common factor", format: "number", decimals: 0, isPrimary: true },
      { id: "lcm", label: "Least common multiple", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "GCF via the Euclidean algorithm: gcd(a, b) = gcd(b, a mod b)",
    explanation:
      "The greatest common factor of a set of numbers is the largest whole number that divides every one of them exactly, leaving no remainder. It captures the biggest chunk the numbers share, which is why it underpins reducing fractions, factoring expressions and splitting quantities into equal groups. The gcf calculator finds it for any list of whole numbers and, because the two ideas travel together, also returns the least common multiple. For 24, 36 and 60, the largest factor common to all three is 12, so the GCF is 12 while the LCM is 360. Rather than listing every factor of each number and hunting for the biggest match, the tool uses the Euclidean algorithm, which repeatedly replaces the larger number with the remainder of dividing it by the smaller until one becomes zero. That last non-zero value is the GCF, and the method stays fast even for large numbers, which is why a gcf calculator built on it handles long lists instantly by folding the result across the numbers pairwise. Students simplifying fractions, teachers setting factoring problems, and anyone dividing items into even portions turn to this gcf calculator for the largest shared divisor without trial and error.",
    formulaExplanation:
      "The Euclidean algorithm rests on a simple fact: any number dividing both a and b also divides their remainder, so gcd(a, b) equals gcd(b, a mod b). Replacing the larger value with that remainder shrinks the problem without losing the common factor, and repeating until the remainder hits zero leaves the last divisor as the answer. Folding this across a list pairwise extends it to 24, 36 and 60, giving 12.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "24, 36, 60" },
      explanation: "The factors shared by 24, 36 and 60 peak at 12, so the GCF is 12 (and the LCM is 360).",
    },
    faqs: [
      { question: "What is the greatest common factor used for?", answer: "Its most common job is simplifying fractions: dividing the numerator and denominator by their greatest common factor reduces the fraction to lowest terms in one step. It also helps factor algebraic expressions, split items into the largest possible equal groups, and find common measurements. Anywhere you need the biggest amount two or more quantities share, the GCF is the number that answers it directly." },
      { question: "Is GCF the same as HCF and GCD?", answer: "Yes, all three name the same value. Greatest Common Factor (GCF), Highest Common Factor (HCF) and Greatest Common Divisor (GCD) are interchangeable terms for the largest whole number that divides a set of numbers evenly. Textbooks in different countries favour different labels, but the calculation is identical, so a result of 12 for 24, 36 and 60 is correct whichever term your course uses." },
      { question: "How do I find the GCF of more than two numbers?", answer: "Find the GCF of the first two, then take the GCF of that result with the next number, and continue through the list. Because a factor common to all must be common to each pair, this pairwise approach gives the right answer. For 24, 36 and 60 the shared factor works out to 12. The calculator performs these steps automatically for any list you enter." },
      { question: "What is the difference between GCF and LCM?", answer: "The GCF is the largest number that divides all your values, while the least common multiple is the smallest number all your values divide into. One looks downward at shared factors, the other upward at shared multiples. For 24, 36 and 60 the GCF is 12 and the LCM is 360. They are linked: for two numbers, their product equals the GCF times the LCM." },
      { question: "Can I enter more than two numbers?", answer: "Yes. Enter any list of whole numbers separated by commas, and the calculator finds the factor common to all of them at once. There is no practical limit on how many you include. It works through the list pairwise, so adding more numbers can only keep the GCF the same or lower it, never raise it, since the more values that must share a factor, the smaller that factor tends to be." },
    ],
    relatedCalculators: ["lcm-calculator", "fraction-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "lcm",
    slug: "lcm-calculator",
    category: "Math",
    categorySlug: "math",
    title: "LCM Calculator",
    shortDescription: "Find the least common multiple of numbers.",
    seoTitle: "LCM Calculator — Least Common Multiple",
    metaDescription:
      "Free LCM calculator. Find the least common multiple of two or more numbers, plus their greatest common factor.",
    primaryKeyword: "lcm calculator",
    secondaryKeywords: ["least common multiple", "lcm of fractions", "lowest common multiple"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 4, 6, 8", required: true, span: 2, helpText: "Two or more whole numbers, separated by commas." },
    ],
    results: [
      { id: "lcm", label: "Least common multiple", format: "number", decimals: 0, isPrimary: true },
      { id: "gcf", label: "Greatest common factor", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "lcm(a, b) = |a × b| ÷ gcd(a, b), applied across all numbers",
    explanation:
      "The least common multiple of a set of numbers is the smallest value that each of them divides into without a remainder, the first point at which their separate multiples all line up. It is the natural counterpart to the greatest common factor, and it is what you need whenever quantities repeating at different intervals have to synchronise. The lcm calculator returns it for any list of whole numbers and shows the greatest common factor beside it. For 4, 6 and 8, the smallest number every value divides into is 24, so the LCM is 24 while the GCF is 2. Rather than listing multiples of each number until a common one appears, the tool computes the LCM from the greatest common divisor: for two numbers it multiplies them and divides by their GCD, then applies the same step pairwise across the whole list. That shortcut is exact and fast, so an lcm calculator can handle large numbers that would be impractical to list out by hand. The most common use is adding or comparing fractions, where the LCM of the denominators gives the smallest common denominator; scheduling repeating events and aligning gear or cycle counts are others. Students, engineers and planners rely on this lcm calculator for the smallest shared multiple.",
    formulaExplanation:
      "For two numbers, every common multiple is a multiple of the smallest one, and multiplying the pair double-counts exactly the factor they share. Dividing the product by their greatest common divisor removes that duplicated factor, leaving the least common multiple. Applying this pairwise across a list, combining the running LCM with each next number, extends it to any set, so 4, 6 and 8 yield 24.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "4, 6, 8" },
      explanation: "The smallest number divisible by 4, 6 and 8 is 24, so the LCM is 24 (their GCF is 2).",
    },
    faqs: [
      { question: "When do I need the least common multiple?", answer: "Most often when adding or comparing fractions with unlike denominators: the LCM of the denominators is the smallest common denominator, which keeps the numbers as small as possible. It also solves timing problems, since when two events repeat at different intervals the LCM tells you when they next coincide. Aligning gear teeth, packaging counts and recurring schedules are other everyday uses for the least common multiple." },
      { question: "What is the difference between LCM and GCF?", answer: "The least common multiple is the smallest number that all your values divide into, while the greatest common factor is the largest number that divides all of them. LCM looks upward to shared multiples; GCF looks downward to shared factors. For 4, 6 and 8 the LCM is 24 and the GCF is 2. The two are connected, since for any pair of numbers their product equals their LCM times their GCF." },
      { question: "How do I find the LCM of three or more numbers?", answer: "Take the LCM of the first two numbers, then find the LCM of that result with the next number, and repeat through the list. Working pairwise like this reaches the smallest multiple shared by them all. For 4, 6 and 8 the process gives 24. The calculator does every step for you, so you can enter a long list of whole numbers and read the answer at once." },
      { question: "Can the LCM be one of the numbers?", answer: "Yes. When one number is a multiple of all the others, that number is itself the least common multiple. For 4 and 8, since 8 is already divisible by 4, the LCM is 8 rather than something larger. In general the LCM is at least as big as the largest number in the set and never smaller, because it has to be divisible by every value present." },
      { question: "How is the LCM used to add fractions?", answer: "Find the LCM of the denominators and rewrite each fraction over that common denominator, then add the numerators. Using the least common multiple rather than just multiplying the denominators keeps the numbers smaller and often avoids simplifying later. For denominators of 4, 6 and 8, the LCM is 24, so each fraction is converted to twenty-fourths before the numerators are combined." },
    ],
    relatedCalculators: ["gcf-calculator", "fraction-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "scientific",
    slug: "scientific-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Scientific Calculator",
    shortDescription: "Apply scientific functions to any number.",
    seoTitle: "Scientific Calculator — Trig, Logs, Roots & More",
    metaDescription:
      "Free scientific calculator. Apply trigonometric, logarithmic, exponential, root and factorial functions to any value, in degrees or radians.",
    primaryKeyword: "scientific calculator",
    secondaryKeywords: ["trig calculator", "log calculator", "sin cos tan calculator"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "45", required: true, span: 2, step: 0.0001 },
      {
        id: "operation", label: "Function", type: "select", required: true, span: 1, defaultValue: "sqrt",
        options: [
          { value: "sqrt", label: "Square root (√)" },
          { value: "cbrt", label: "Cube root (∛)" },
          { value: "square", label: "Square (x²)" },
          { value: "cube", label: "Cube (x³)" },
          { value: "sin", label: "sin" },
          { value: "cos", label: "cos" },
          { value: "tan", label: "tan" },
          { value: "asin", label: "arcsin" },
          { value: "acos", label: "arccos" },
          { value: "atan", label: "arctan" },
          { value: "ln", label: "ln (natural log)" },
          { value: "log10", label: "log₁₀" },
          { value: "exp", label: "eˣ" },
          { value: "factorial", label: "Factorial (x!)" },
          { value: "reciprocal", label: "Reciprocal (1/x)" },
          { value: "abs", label: "Absolute value" },
        ],
      },
      {
        id: "angleUnit", label: "Angle unit", type: "select", required: false, span: 1, defaultValue: "deg",
        options: [
          { value: "deg", label: "Degrees" },
          { value: "rad", label: "Radians" },
        ],
      },
    ],
    results: [{ id: "result", label: "Result", format: "number", decimals: 6, isPrimary: true }],
    formula: "Applies the chosen function; trig uses the selected angle unit",
    explanation:
      "A scientific calculator extends basic arithmetic with the functions that appear throughout algebra, trigonometry, statistics and the sciences: roots and powers, sines and cosines and their inverses, natural and base-ten logarithms, exponentials, factorials, reciprocals and absolute values. Rather than crowding every operation onto one screen, this scientific calculator applies a single chosen function to your input, which keeps each result unambiguous and easy to check. Trigonometric functions read the angle in whichever unit you select, degrees or radians, so sin of 45 degrees returns approximately 0.707107 when degrees are chosen. Several of these functions are only defined over part of the number line, and getting that wrong produces nonsense. Logarithms need a positive argument, arcsine and arccosine accept only values from minus 1 to 1, and factorials are defined for non-negative whole numbers. When an input falls outside a function's domain, the tool should return no result rather than a misleading one, which is exactly what it does by showing a dash instead. Students and teachers working through trigonometry and precalculus, engineers and physicists evaluating formulas, and analysts handling logarithmic or exponential data all depend on a scientific calculator for accurate function values that mental math and a basic four-function device cannot provide.",
    formulaExplanation:
      "Each function reverses or extends a basic operation: a root undoes a power, a logarithm undoes exponentiation, and the inverse trig functions undo sine, cosine and tangent. Trigonometric values depend on how the angle is measured, so the calculator converts degrees to radians internally before evaluating, since the underlying math is defined in radians. That conversion is why sin of 45 degrees resolves to about 0.707107 only once the unit is known.",
    formulaSource: "Standard mathematics",
    example: {
      inputs: { value: 45, operation: "sin", angleUnit: "deg" },
      explanation: "sin(45°) ≈ 0.707107.",
    },
    faqs: [
      { question: "Does the calculator use degrees or radians?", answer: "Both, and you choose the angle unit for trigonometric functions. Selecting degrees interprets an entry of 45 as 45 degrees, so sin of 45 degrees returns about 0.707107; selecting radians treats the same number as radians instead and gives a different result. Non-trigonometric functions such as logarithms, roots and factorials ignore the angle unit entirely, since they operate on plain numbers rather than angles." },
      { question: "Why do some inputs return no result?", answer: "Certain functions are undefined for certain inputs, and the calculator shows a dash rather than invent a value. Logarithms require a positive argument, so the log of zero or a negative number has no real answer. Arcsine and arccosine accept only values between minus 1 and 1, and factorials need a non-negative whole number. When your entry falls outside the valid range, the blank result is the mathematically correct response." },
      { question: "What is the difference between ln and log?", answer: "Both are logarithms but use different bases. Natural log, written ln, uses the base e, roughly 2.71828, and appears throughout calculus and growth models. The log button here uses base 10, which counts powers of ten and suits scientific notation and decibels. They answer the same kind of question, namely what exponent produces this number, but against different bases, so their outputs for the same input differ." },
      { question: "How large a factorial can it calculate?", answer: "Factorials grow extremely fast, and above 170 the result exceeds the largest value standard floating-point numbers can hold. Beyond that point the calculator reports infinity rather than a finite figure, because the true answer is larger than the format can represent. For inputs up to 170, it returns the exact factorial, and it declines negative or fractional inputs since the ordinary factorial is defined only for non-negative whole numbers." },
      { question: "Can I use it for trigonometry homework?", answer: "Yes. It evaluates sine, cosine and tangent along with their inverses arcsine, arccosine and arctangent, in either degrees or radians to match your assignment. Choosing degrees, sin of 45 degrees gives about 0.707107, the value you would expect on a standard unit circle. Set the angle unit before you compute, since the same number produces a different result in radians, and the inverse functions return the angle in your chosen unit." },
    ],
    relatedCalculators: ["square-root-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
