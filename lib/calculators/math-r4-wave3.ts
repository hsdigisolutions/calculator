import type { CalculatorDefinition } from "../types";

export const mathR4Calculators: CalculatorDefinition[] = [
  {
    id: "quadratic-formula",
    slug: "quadratic-formula-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Quadratic Formula Calculator",
    shortDescription: "Solve ax² + bx + c = 0 for both roots.",
    seoTitle: "Quadratic Formula Calculator — Solve ax² + bx + c = 0",
    metaDescription:
      "Free quadratic formula calculator. Enter the coefficients a, b, and c to find both roots of a quadratic equation, the discriminant, and the nature of the solutions.",
    primaryKeyword: "quadratic formula calculator",
    secondaryKeywords: ["quadratic equation solver", "discriminant calculator", "solve for x calculator"],
    fields: [
      { id: "a", label: "Coefficient a", type: "number", placeholder: "1", required: true, span: 1, step: 0.0001 },
      { id: "b", label: "Coefficient b", type: "number", placeholder: "-5", required: true, span: 1, step: 0.0001 },
      { id: "c", label: "Coefficient c", type: "number", placeholder: "6", required: true, span: 2, step: 0.0001 },
    ],
    results: [
      { id: "root1", label: "First root (x₁)", format: "number", decimals: 4, isPrimary: true },
      { id: "root2", label: "Second root (x₂)", format: "number", decimals: 4, isPrimary: false },
      { id: "discriminant", label: "Discriminant", format: "number", decimals: 4, isPrimary: false },
      { id: "nature", label: "Nature of roots", format: "text", isPrimary: false },
    ],
    formula: "x = (−b ± √(b² − 4ac)) ÷ 2a",
    formulaExplanation:
      "The quadratic formula solves any equation of the form ax² + bx + c = 0 by completing the square on the general case, which isolates x in terms of the three coefficients. The quantity under the square root, b² − 4ac, is called the discriminant, and its sign decides everything: a positive discriminant gives two distinct real roots, a discriminant of zero gives one repeated root, and a negative discriminant means the roots are complex, with no real solution. The plus-or-minus sign generates both roots at once.",
    explanation:
      "The quadratic formula is the universal method for solving any quadratic equation, an equation of the form ax² + bx + c = 0 where a is not zero. While some quadratics factor neatly by hand, many do not, and the quadratic formula works every time regardless of how messy the coefficients are. This quadratic formula calculator takes the three coefficients a, b, and c and returns both roots, the discriminant, and a description of what kind of solutions the equation has. The heart of the method is the discriminant, the value b² − 4ac sitting under the square root. When it is positive the parabola crosses the x-axis at two points, giving two real roots; when it is exactly zero the parabola just touches the axis, giving one repeated root; and when it is negative the parabola never reaches the axis, so the solutions are complex numbers rather than real ones. For the equation x² − 5x + 6 = 0, the coefficients are 1, −5, and 6, the discriminant is 1, and the two roots are 3 and 2, which you can verify by factoring into (x − 3)(x − 2). Students solving algebra problems, engineers finding where a curve meets a line, and physicists computing projectile times all reach for the quadratic formula when factoring is not obvious. Requiring a to be non-zero matters, because if a were zero the equation would be linear rather than quadratic and the formula would divide by zero.",
    example: {
      inputs: { a: 1, b: -5, c: 6 },
      explanation: "Discriminant = (−5)² − 4×1×6 = 1; x = (5 ± 1) ÷ 2 = 3 or 2.",
    },
    faqs: [
      {
        question: "What is the discriminant?",
        answer: "The discriminant is the expression b² − 4ac found under the square root in the quadratic formula. Its value reveals the nature of the roots before you finish solving. A positive discriminant means two distinct real roots, a discriminant of zero means one repeated real root, and a negative discriminant means the two roots are complex conjugates with no real value. Checking the discriminant first tells you what kind of answer to expect.",
      },
      {
        question: "Why must the coefficient a not be zero?",
        answer: "If a equals zero, the x² term disappears and the equation becomes bx + c = 0, which is linear rather than quadratic. The quadratic formula would then divide by 2a, which is division by zero and undefined. A genuine quadratic always has a non-zero leading coefficient. This calculator returns no result when a is zero, since a linear equation is solved simply by x equals negative c divided by b instead.",
      },
      {
        question: "What does it mean when there are no real roots?",
        answer: "When the discriminant is negative, the square root of a negative number is not a real value, so the equation has no real solutions. Graphically, the parabola never crosses the x-axis. The roots still exist as complex numbers involving the imaginary unit i, which appear in fields like electrical engineering and signal processing. For real-number problems, a negative discriminant simply signals that no real x satisfies the equation.",
      },
      {
        question: "Can I use the quadratic formula instead of factoring?",
        answer: "Yes, the quadratic formula solves every quadratic equation, whether or not it factors nicely. Factoring is faster when the roots are simple integers you can spot, but many equations have irrational or awkward roots that resist factoring entirely. The formula never fails and gives exact results, so it is the reliable fallback. Many people use the discriminant to check whether clean factoring is even possible before attempting it.",
      },
      {
        question: "How do I check my answers?",
        answer: "Substitute each root back into the original equation ax² + bx + c and confirm the result is zero. You can also use the fact that, for ax² + bx + c = 0, the two roots add up to negative b over a and multiply to c over a. For x² − 5x + 6, the roots 3 and 2 sum to 5 and multiply to 6, matching the coefficients, which confirms the solution is correct.",
      },
    ],
    relatedCalculators: ["square-root-calculator", "exponent-calculator", "percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard algebra",
  },
  {
    id: "pythagorean",
    slug: "pythagorean-theorem-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Pythagorean Theorem Calculator",
    shortDescription: "Find the hypotenuse of a right triangle.",
    seoTitle: "Pythagorean Theorem Calculator — Find the Hypotenuse",
    metaDescription:
      "Free Pythagorean theorem calculator. Enter the two legs of a right triangle to find the hypotenuse using a² + b² = c², the classic right-triangle relationship.",
    primaryKeyword: "pythagorean theorem calculator",
    secondaryKeywords: ["hypotenuse calculator", "right triangle calculator", "a2 + b2 = c2 calculator"],
    fields: [
      { id: "sideA", label: "Side a (leg)", type: "number", placeholder: "3", required: true, span: 1, min: 0, step: 0.0001 },
      { id: "sideB", label: "Side b (leg)", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.0001 },
    ],
    results: [
      { id: "hypotenuse", label: "Hypotenuse (c)", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "c = √(a² + b²)",
    formulaExplanation:
      "The Pythagorean theorem states that in any right triangle the square of the hypotenuse equals the sum of the squares of the two legs. Rearranging to solve for the hypotenuse, you square each leg, add those areas together, and take the square root of the total. The theorem holds only for right triangles because the ninety-degree angle is exactly what makes the squared side lengths relate this way, a fact proven geometrically by rearranging the areas of squares built on each side.",
    explanation:
      "The Pythagorean theorem is one of the most famous results in all of mathematics, describing the relationship between the three sides of a right triangle. It states that the square of the hypotenuse, the side opposite the right angle, equals the sum of the squares of the other two sides, the legs. This Pythagorean theorem calculator takes the lengths of the two legs and returns the length of the hypotenuse using the formula c equals the square root of a squared plus b squared. The theorem only applies to right triangles, those with one ninety-degree angle, but within that family it is exact and universal. The classic example is the 3-4-5 triangle: with legs of 3 and 4, the hypotenuse is the square root of 9 plus 16, which is the square root of 25, or exactly 5. Other well-known whole-number sets, called Pythagorean triples, include 5-12-13 and 8-15-17. This relationship is the foundation of the distance formula in coordinate geometry, and it appears constantly in construction, navigation, and design whenever a diagonal length must be found from horizontal and vertical measurements. Carpenters use it to check that corners are square, surveyors use it to measure across obstacles, and students meet it early in geometry. Because a length cannot be negative, this calculator requires both legs to be zero or positive.",
    example: {
      inputs: { sideA: 3, sideB: 4 },
      explanation: "c = √(3² + 4²) = √(9 + 16) = √25 = 5, the classic 3-4-5 triangle.",
    },
    faqs: [
      {
        question: "What is the Pythagorean theorem?",
        answer: "The Pythagorean theorem relates the three sides of a right triangle, stating that the square of the hypotenuse equals the sum of the squares of the two legs. Written as a symbol equation it is a squared plus b squared equals c squared, where c is the hypotenuse. It lets you find any one side when you know the other two, and it underpins much of geometry, trigonometry, and coordinate distance calculations.",
      },
      {
        question: "Which side is the hypotenuse?",
        answer: "The hypotenuse is the longest side of a right triangle, always the one directly opposite the right angle. The other two sides, which meet at the ninety-degree corner, are called the legs. Because the hypotenuse is opposite the largest angle, it is necessarily the longest side. This calculator computes the hypotenuse from the two legs, so the answer will always be greater than either leg you enter.",
      },
      {
        question: "Does it work for any triangle?",
        answer: "No, the Pythagorean theorem applies only to right triangles, those containing exactly one ninety-degree angle. For triangles without a right angle you need the law of cosines, a more general relationship that reduces to the Pythagorean theorem when the angle happens to be ninety degrees. If your triangle is not right-angled, this calculator will not give a meaningful result for a missing side.",
      },
      {
        question: "What is a Pythagorean triple?",
        answer: "A Pythagorean triple is a set of three whole numbers that satisfy the theorem exactly, so the two smaller ones squared and added equal the largest one squared. The best known is 3, 4, 5, followed by 5, 12, 13 and 8, 15, 17. Any multiple of a triple, such as 6, 8, 10, is also a triple. These integer solutions are prized because they give clean right triangles without decimals.",
      },
      {
        question: "How do I find a leg instead of the hypotenuse?",
        answer: "Rearrange the theorem to solve for the unknown leg: subtract the known leg squared from the hypotenuse squared, then take the square root. In symbols, a equals the square root of c squared minus b squared. This works whenever you know the hypotenuse and one leg. Just make sure the hypotenuse is the larger value, since subtracting a bigger square from a smaller one would leave a negative under the root.",
      },
    ],
    relatedCalculators: ["distance-two-points-calculator", "square-root-calculator", "triangle-area-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Pythagorean theorem",
  },
  {
    id: "circle",
    slug: "circle-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Circle Calculator",
    shortDescription: "Find area, circumference, and diameter from the radius.",
    seoTitle: "Circle Calculator — Area, Circumference & Diameter",
    metaDescription:
      "Free circle calculator. Enter the radius to find a circle's area, circumference, and diameter using πr², 2πr, and 2r, the standard circle formulas.",
    primaryKeyword: "circle calculator",
    secondaryKeywords: ["area of a circle calculator", "circumference calculator", "circle area and circumference"],
    fields: [
      { id: "radius", label: "Radius (r)", type: "number", placeholder: "2", required: true, span: 2, min: 0, step: 0.0001 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
      { id: "circumference", label: "Circumference", format: "number", decimals: 4, isPrimary: false },
      { id: "diameter", label: "Diameter", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "area = πr²;  circumference = 2πr;  diameter = 2r",
    formulaExplanation:
      "Every measurement of a circle flows from its radius, the distance from the centre to the edge. The area is pi times the radius squared, because pi is precisely the constant that links a circle's radius to the space it encloses. The circumference, the distance around the circle, is pi times the diameter, or equivalently two pi times the radius, which is the very definition of pi as the ratio of circumference to diameter. The diameter is simply twice the radius, spanning the full width through the centre.",
    explanation:
      "A circle is defined entirely by a single measurement, its radius, the distance from the centre to any point on the edge. From that one value every other property follows. This circle calculator takes the radius and returns the three most useful quantities: the area enclosed by the circle, the circumference around its edge, and the diameter across its widest point. The area is found with pi times the radius squared, which gives the amount of flat space inside the circle. The circumference, the perimeter of the circle, is two times pi times the radius, and it represents how far you would travel walking all the way around. The diameter is the simplest of all, just twice the radius, measuring straight across the circle through its centre. The constant pi, approximately 3.14159, is the unchanging ratio that ties these formulas together and appears in every circular calculation. For a circle with a radius of 2, the area is pi times 4, about 12.57 square units, the circumference is 4 pi, also about 12.57 units, and the diameter is exactly 4. Circles are everywhere in design, engineering, and everyday life, from wheels and pipes to plates and clock faces, so being able to convert a radius into area, circumference, and diameter quickly is genuinely useful. Because a radius is a length, this calculator requires it to be zero or positive.",
    example: {
      inputs: { radius: 2 },
      explanation: "area = π×2² ≈ 12.57; circumference = 2π×2 ≈ 12.57; diameter = 2×2 = 4.",
    },
    faqs: [
      {
        question: "What is the formula for the area of a circle?",
        answer: "The area of a circle is pi times the radius squared, written as A equals pi r squared. You square the radius first, then multiply by pi, which is approximately 3.14159. The result is the amount of flat space enclosed inside the circle, measured in square units. Because the radius is squared, doubling the radius quadruples the area, which is why larger circles enclose disproportionately more space than their radius suggests.",
      },
      {
        question: "How is circumference different from area?",
        answer: "Circumference measures the distance around the outside of a circle, a length in ordinary units, while area measures the flat space enclosed inside, in square units. They answer different questions: circumference tells you how much edge or fencing you need, area tells you how much surface you cover. Circumference uses two pi r, and area uses pi r squared, so the two grow at different rates as the radius increases.",
      },
      {
        question: "What is the value of pi?",
        answer: "Pi is a mathematical constant equal to the ratio of any circle's circumference to its diameter, approximately 3.14159. It is an irrational number, meaning its decimal expansion never ends or repeats, so it can only be approximated. Pi appears in every circle formula and in countless other areas of mathematics and physics. For most practical work, using 3.14159 or the pi button on a calculator gives more than enough precision.",
      },
      {
        question: "How do I find the radius from the diameter?",
        answer: "The radius is exactly half the diameter, so divide the diameter by two. Conversely, the diameter is twice the radius. If you are given a circle's diameter rather than its radius, simply halve it before using the area or circumference formulas, or enter the resulting radius directly into this calculator. This relationship is the simplest of all the circle measurements and never involves pi.",
      },
      {
        question: "Can I find the radius from the area?",
        answer: "Yes. Since area equals pi times the radius squared, you can reverse it: divide the area by pi, then take the square root of the result to recover the radius. For example, an area of about 12.57 divided by pi gives 4, and the square root of 4 is 2, the original radius. This inverse calculation is useful when you know how much space a circle covers but not its radius.",
      },
    ],
    relatedCalculators: ["square-root-calculator", "exponent-calculator", "percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "triangle-area",
    slug: "triangle-area-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Triangle Area Calculator",
    shortDescription: "Find a triangle's area from base and height.",
    seoTitle: "Triangle Area Calculator — Area from Base and Height",
    metaDescription:
      "Free triangle area calculator. Enter the base and height to find the area of any triangle using the formula one-half base times height.",
    primaryKeyword: "triangle area calculator",
    secondaryKeywords: ["area of a triangle calculator", "base times height calculator", "triangle area formula"],
    fields: [
      { id: "base", label: "Base", type: "number", placeholder: "10", required: true, span: 1, min: 0, step: 0.0001 },
      { id: "height", label: "Height", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.0001 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "area = ½ × base × height",
    formulaExplanation:
      "The area of a triangle is half the base times the height because any triangle is exactly half of a rectangle or parallelogram built on the same base and height. The base is any chosen side, and the height is the perpendicular distance from that base to the opposite vertex, measured at a right angle rather than along a slanted side. Multiplying base by height would give the area of the surrounding parallelogram, so halving it isolates the triangle's share.",
    explanation:
      "The area of a triangle is the amount of flat space enclosed by its three sides, and the simplest way to find it is with the base and the height. This triangle area calculator takes those two measurements and returns the area using the formula one-half times base times height. The base can be any of the three sides you choose, and the height is the perpendicular distance from that base straight up to the opposite corner, the vertex. It is important that the height is measured at a right angle to the base, not along a slanting edge, because the perpendicular height is what actually determines how much area the triangle covers. The reason for the one-half factor is elegant: any triangle is exactly half of a parallelogram with the same base and height, so taking half of base times height gives the triangle's area. For a triangle with a base of 10 and a height of 4, the area is one-half times 10 times 4, which is 20 square units. This method works for every triangle, whether it is right-angled, acute, or obtuse, as long as you use the perpendicular height. Students learning geometry, builders estimating material, and designers laying out triangular shapes all rely on this quick calculation. Because both the base and the height are lengths, this calculator requires them to be zero or positive.",
    example: {
      inputs: { base: 10, height: 4 },
      explanation: "area = ½ × 10 × 4 = 20 square units.",
    },
    faqs: [
      {
        question: "What is the base and height of a triangle?",
        answer: "The base is any one of the three sides you choose to measure from, and the height is the perpendicular distance from that base to the opposite vertex. The height must form a right angle with the base, so it is the straight-up distance, not the length of a slanted side. You can pick any side as the base, as long as you pair it with the matching perpendicular height to that side.",
      },
      {
        question: "Why is the area half of base times height?",
        answer: "Any triangle fits exactly inside a parallelogram that has the same base and the same height, and it takes up precisely half of that parallelogram's area. Since a parallelogram's area is base times height, the triangle's area is half of that. You can see this by duplicating the triangle, rotating the copy, and joining the two together to form the full parallelogram, confirming the one-half factor.",
      },
      {
        question: "Does this work for all types of triangles?",
        answer: "Yes, the one-half base times height formula works for every triangle, whether it is right-angled, acute, or obtuse. The only requirement is that you use the perpendicular height matching your chosen base. For obtuse triangles the height may fall outside the triangle, but the formula still holds. If you do not know the height, other methods like Heron's formula use the three side lengths instead.",
      },
      {
        question: "What if I only know the three side lengths?",
        answer: "If you know all three sides but not the height, you can use Heron's formula, which finds the area from the side lengths alone. It first computes the semi-perimeter, half the sum of the sides, then takes the square root of that value times its difference from each side. This calculator uses the base-and-height method instead, so you would need to determine the height first to use it.",
      },
      {
        question: "What units is the area in?",
        answer: "The area comes out in square units matching whatever units you used for the base and height. If you measured in centimetres, the area is in square centimetres; if in metres, it is in square metres. Always keep the base and height in the same unit before calculating, because mixing units, such as one in metres and one in centimetres, would give a meaningless result. Convert to a common unit first.",
      },
    ],
    relatedCalculators: ["pythagorean-theorem-calculator", "circle-calculator", "percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "permutations",
    slug: "permutations-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Permutations Calculator",
    shortDescription: "Count ordered arrangements with nPr.",
    seoTitle: "Permutations Calculator — nPr Ordered Arrangements",
    metaDescription:
      "Free permutations calculator. Enter n and r to find the number of ordered arrangements (nPr) using the formula n! ÷ (n − r)!, the count of ways to arrange r items from n.",
    primaryKeyword: "permutations calculator",
    secondaryKeywords: ["nPr calculator", "permutation formula calculator", "ordered arrangements calculator"],
    fields: [
      { id: "n", label: "Total items (n)", type: "number", placeholder: "5", required: true, span: 1, min: 0, step: 1 },
      { id: "r", label: "Items chosen (r)", type: "number", placeholder: "2", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "permutations", label: "Permutations (nPr)", format: "number", decimals: 0, isPrimary: true },
    ],
    formula: "nPr = n! ÷ (n − r)!",
    formulaExplanation:
      "A permutation counts how many ways you can arrange r items chosen from n distinct items when order matters. The formula n factorial divided by n minus r factorial works because there are n choices for the first position, n minus one for the second, and so on down to n minus r plus one for the last, and multiplying those together is exactly what the factorial ratio computes. Dividing by n minus r factorial cancels the arrangements of the items you did not select.",
    explanation:
      "A permutation is an ordered arrangement of items, and the permutations calculator tells you how many distinct ordered arrangements are possible when you select r items from a set of n distinct items. Order matters in permutations, which is what separates them from combinations: the arrangement AB is counted as different from BA. This calculator uses the formula nPr equals n factorial divided by the factorial of n minus r, and returns the total count. The intuition is straightforward. When filling the first position you have n choices, for the second position n minus one choices remain, for the third n minus two, and so on, until you have filled all r positions. Multiplying those shrinking counts together gives the number of ordered arrangements, which the factorial formula captures compactly. For example, choosing and arranging 2 items from 5 gives 5 times 4, which is 20 permutations. Permutations appear whenever sequence or ranking matters: the number of ways to award gold, silver, and bronze medals, the possible orderings of a passcode, or the seating arrangements around a table. This calculator requires n and r to be whole numbers that are zero or positive, and r cannot exceed n, since you cannot arrange more items than you have. When those conditions are not met the result is undefined. Students studying probability and combinatorics, along with anyone counting arrangements or orderings, use a permutations calculator to avoid tedious multiplication.",
    example: {
      inputs: { n: 5, r: 2 },
      explanation: "5P2 = 5! ÷ 3! = 120 ÷ 6 = 20, equivalently 5 × 4 = 20 ordered arrangements.",
    },
    faqs: [
      {
        question: "What is the difference between permutations and combinations?",
        answer: "Permutations count arrangements where order matters, so AB and BA are different outcomes. Combinations count selections where order does not matter, treating AB and BA as the same group. Because of this, there are always at least as many permutations as combinations for the same n and r. Use permutations for ordered situations like rankings or sequences, and combinations for unordered ones like choosing a committee.",
      },
      {
        question: "What does the exclamation mark mean?",
        answer: "The exclamation mark denotes a factorial, the product of all positive whole numbers up to and including that number. So 5 factorial, written 5!, equals 5 times 4 times 3 times 2 times 1, which is 120. Factorials count the number of ways to arrange a full set of distinct items in order. By convention zero factorial equals one, which keeps the permutation formula consistent even when n equals r.",
      },
      {
        question: "Why can't r be larger than n?",
        answer: "The value r is how many items you select and arrange from a set of n items, so it makes no sense to choose more items than actually exist. If r were greater than n, the term n minus r would be negative, and factorials of negative numbers are undefined. Physically there is no way to arrange, say, five items drawn from a set of only three. The calculator returns no result in that case.",
      },
      {
        question: "What is a real-world example of permutations?",
        answer: "Awarding medals in a race is a classic permutation. If eight runners compete for gold, silver, and bronze, the number of possible podium outcomes is eight times seven times six, because order determines who gets which medal. Other examples include the number of ways to set a combination lock, arrange books on a shelf, or order finishers in any ranked competition where position matters.",
      },
      {
        question: "What happens when r equals n?",
        answer: "When r equals n, you are arranging the entire set, and the formula reduces to n factorial divided by zero factorial. Since zero factorial equals one, the answer is simply n factorial, the total number of ways to order all the items. For example, arranging all 4 items from a set of 4 gives 4 factorial, which is 24. This is the largest permutation count possible for a given n.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "exponent-calculator", "standard-deviation-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Combinatorics",
  },
  {
    id: "prime-factorization",
    slug: "prime-factorization-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Prime Factorization Calculator",
    shortDescription: "Break a number into its prime factors.",
    seoTitle: "Prime Factorization Calculator — Factor Into Primes",
    metaDescription:
      "Free prime factorization calculator. Enter a whole number to break it into its prime factors, shown as a product, along with the total count of prime factors.",
    primaryKeyword: "prime factorization calculator",
    secondaryKeywords: ["prime factors calculator", "factor tree calculator", "factorize number calculator"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "60", required: true, span: 2, min: 2, step: 1 },
    ],
    results: [
      { id: "factorization", label: "Prime factorization", format: "text", isPrimary: true },
      { id: "factorCount", label: "Number of prime factors", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "n = p₁ × p₂ × … × pₖ, each pᵢ prime",
    formulaExplanation:
      "Prime factorization expresses a whole number as a product of prime numbers, those greater than one that have no divisors other than one and themselves. The calculator repeatedly divides the number by the smallest prime that goes in evenly, starting at two and working upward, recording each divisor until the number is reduced to one. The fundamental theorem of arithmetic guarantees that every integer above one has exactly one such prime factorization, apart from the order of the factors, so the result is always unique.",
    explanation:
      "Prime factorization breaks a whole number down into the prime numbers that multiply together to produce it. A prime number is a whole number greater than one whose only divisors are one and itself, such as 2, 3, 5, 7, and 11. This prime factorization calculator takes any whole number of two or more and returns its unique set of prime factors written as a product, along with a count of how many prime factors it has. The method is simple and systematic: divide the number by the smallest prime that fits, which is often 2, then keep dividing the result by the smallest possible prime until you are left with 1. Each divisor you use is a prime factor. For example, 60 divides by 2 to give 30, again by 2 to give 15, then by 3 to give 5, and 5 is itself prime, so 60 equals 2 times 2 times 3 times 5. The fundamental theorem of arithmetic guarantees that this breakdown is unique for every number: there is exactly one set of prime factors, no matter what order you find them in. Prime factorization is the backbone of many mathematical tasks, including finding the greatest common divisor, simplifying fractions, and identifying least common multiples. It also underlies modern cryptography, where the difficulty of factoring very large numbers keeps data secure. This calculator requires a whole number of at least 2, since 1 and 0 have no prime factorization.",
    example: {
      inputs: { number: 60 },
      explanation: "60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5, so it has four prime factors.",
    },
    faqs: [
      {
        question: "What is a prime number?",
        answer: "A prime number is a whole number greater than one that has exactly two divisors: one and itself. The first few primes are 2, 3, 5, 7, 11, and 13. Numbers with more than two divisors, like 4 or 9, are called composite. The number 1 is neither prime nor composite by definition. Primes are the building blocks of all whole numbers, since every integer above one is a product of primes.",
      },
      {
        question: "What is the fundamental theorem of arithmetic?",
        answer: "The fundamental theorem of arithmetic states that every whole number greater than one is either prime or can be written as a product of primes in exactly one way, apart from the order of the factors. This guarantees that prime factorization is unique. It is why the factorization the calculator returns is definitive: no other set of primes multiplies to the same number, making it a reliable fingerprint for that value.",
      },
      {
        question: "How do I do prime factorization by hand?",
        answer: "Start by dividing your number by the smallest prime that goes in evenly, usually 2, then repeat with the quotient, moving up to 3, 5, 7, and so on as needed. Keep dividing until you reach 1, recording each prime divisor. A factor tree is a visual version of the same process. The primes you used, multiplied together, reproduce the original number and form its prime factorization.",
      },
      {
        question: "What is prime factorization used for?",
        answer: "Prime factorization is used to simplify fractions, find the greatest common divisor and least common multiple of numbers, and reduce radicals. It is essential in number theory and appears in cryptography, where the security of methods like RSA rests on how hard it is to factor very large numbers. In everyday maths it helps with adding fractions and identifying whether two numbers share common factors.",
      },
      {
        question: "Why can't I factor 1 or 0?",
        answer: "The number 1 has no prime factors because it is not the product of any primes; it is simply the multiplicative identity. Zero cannot be factored into primes either, since no product of primes equals zero. Prime factorization is defined only for whole numbers of 2 or more, which is why this calculator requires an input of at least 2 and returns no factorization below that.",
      },
    ],
    relatedCalculators: ["fraction-calculator", "percentage-calculator", "exponent-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Number theory",
  },
  {
    id: "cube-root",
    slug: "cube-root-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Cube Root Calculator",
    shortDescription: "Find the cube root of any number.",
    seoTitle: "Cube Root Calculator — Find the Cube Root of a Number",
    metaDescription:
      "Free cube root calculator. Enter any number, positive or negative, to find its cube root, the value that when multiplied by itself three times gives the original.",
    primaryKeyword: "cube root calculator",
    secondaryKeywords: ["cubed root calculator", "third root calculator", "find cube root"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "27", required: true, span: 2, step: 0.0001 },
    ],
    results: [
      { id: "cubeRoot", label: "Cube root", format: "number", decimals: 6, isPrimary: true },
    ],
    formula: "cube root of n = n^(1/3), the value x where x³ = n",
    formulaExplanation:
      "The cube root of a number is the value that, when multiplied by itself three times, produces the original number. It is the inverse of cubing, so raising a number to the one-third power undoes raising it to the third power. Unlike square roots, cube roots are defined for negative numbers too, because multiplying three negative factors yields a negative result, so every real number, positive, negative, or zero, has exactly one real cube root.",
    explanation:
      "The cube root of a number is the value that, when cubed, meaning multiplied by itself three times, gives back the original number. This cube root calculator takes any number, positive or negative, and returns its real cube root. Cube roots are the inverse operation of cubing, just as square roots reverse squaring. If you cube 3 you get 27, so the cube root of 27 is 3. What makes cube roots distinct from square roots is that they work perfectly well for negative numbers. Because multiplying three negatives together gives a negative result, the cube root of a negative number is itself negative: the cube root of negative 8 is negative 2, since negative 2 times negative 2 times negative 2 equals negative 8. Every real number, whether positive, negative, or zero, has exactly one real cube root, unlike square roots where negatives have no real answer and positives have two. Cube roots come up whenever you work with volume, since the volume of a cube is the side length cubed, so recovering the side from a known volume means taking a cube root. They also appear in scaling problems, physics, and engineering. Perfect cubes like 8, 27, 64, and 125 give whole-number roots, while other inputs give irrational decimals that the calculator approximates. Enter any value and this cube root calculator returns the precise real cube root instantly.",
    example: {
      inputs: { number: 27 },
      explanation: "The cube root of 27 is 3, because 3 × 3 × 3 = 27.",
    },
    faqs: [
      {
        question: "What is a cube root?",
        answer: "A cube root of a number is the value that, when multiplied by itself three times, produces that number. It is the inverse of cubing. For example, the cube root of 64 is 4 because 4 times 4 times 4 equals 64. The symbol for a cube root is a radical sign with a small 3, and it can also be written as raising the number to the power of one-third.",
      },
      {
        question: "Can you take the cube root of a negative number?",
        answer: "Yes, unlike square roots, cube roots of negative numbers are real and well defined. Because a negative times a negative times a negative gives a negative, the cube root of a negative number is negative. For instance, the cube root of negative 27 is negative 3. This is a key difference from square roots, which have no real value for negative inputs, so cube roots always return one real answer.",
      },
      {
        question: "How is a cube root different from a square root?",
        answer: "A square root reverses squaring and finds a value multiplied by itself twice, while a cube root reverses cubing and finds a value multiplied by itself three times. Square roots of negatives are not real, and positive numbers have two square roots. Cube roots are simpler in one way: every real number has exactly one real cube root, positive, negative, or zero, with no ambiguity or restriction on sign.",
      },
      {
        question: "What are perfect cubes?",
        answer: "Perfect cubes are numbers that result from cubing a whole number, so their cube roots are whole numbers with no decimals. The first few are 1, 8, 27, 64, 125, and 216, coming from 1, 2, 3, 4, 5, and 6 cubed. Recognising perfect cubes helps you estimate and simplify cube roots by hand, since roots of nearby numbers will be close to those whole-number values.",
      },
      {
        question: "Where are cube roots used?",
        answer: "Cube roots appear whenever a quantity depends on the cube of a length, most commonly in volume calculations. If you know the volume of a cube, its side length is the cube root of that volume. They also arise in scaling laws, where doubling a linear dimension multiplies volume eightfold, and in physics and engineering formulas involving three-dimensional growth, density, or the behaviour of certain equations.",
      },
    ],
    relatedCalculators: ["square-root-calculator", "exponent-calculator", "percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard algebra",
  },
  {
    id: "proportion",
    slug: "proportion-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Proportion Calculator",
    shortDescription: "Solve a/b = c/x for the missing value.",
    seoTitle: "Proportion Calculator — Solve a/b = c/x",
    metaDescription:
      "Free proportion calculator. Enter three values of a proportion a/b = c/x to solve for the missing fourth value using cross multiplication.",
    primaryKeyword: "proportion calculator",
    secondaryKeywords: ["ratio proportion calculator", "cross multiplication calculator", "solve proportion calculator"],
    fields: [
      { id: "a", label: "a", type: "number", placeholder: "2", required: true, span: 1, step: 0.0001 },
      { id: "b", label: "b", type: "number", placeholder: "4", required: true, span: 1, step: 0.0001 },
      { id: "c", label: "c", type: "number", placeholder: "3", required: true, span: 2, step: 0.0001 },
    ],
    results: [
      { id: "x", label: "x (missing value)", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "a/b = c/x  ⟹  x = (b × c) ÷ a",
    formulaExplanation:
      "A proportion states that two ratios are equal, so a divided by b equals c divided by x. Cross multiplying both sides, meaning multiplying each numerator by the opposite denominator, gives a times x equals b times c. Solving that for the unknown x divides both sides by a, producing x equals b times c divided by a. Cross multiplication works because multiplying both sides of an equation by the same non-zero quantities preserves the equality while clearing the fractions.",
    explanation:
      "A proportion is a statement that two ratios are equal, and solving a proportion means finding a missing value that makes both ratios match. This proportion calculator works with the proportion a over b equals c over x, taking the three known values a, b, and c and solving for the unknown x. The technique behind it is cross multiplication: when two fractions are equal, the product of the numerator of one and the denominator of the other equals the product of the other pair. Applying that to a over b equals c over x gives a times x equals b times c, and dividing both sides by a isolates x as b times c divided by a. For example, in the proportion 2 over 4 equals 3 over x, cross multiplying gives 2x equals 12, so x equals 6. Proportions are everywhere in practical mathematics. They power unit conversions, recipe scaling, map reading, and any situation where quantities keep a constant ratio. If a recipe serving four needs two cups of flour and you want to serve six, a proportion tells you how much flour to use. Similar triangles in geometry, currency exchange, and mixing ratios all rely on the same idea. This calculator requires the value a to be non-zero, because dividing by zero is undefined, which happens when the first term of the proportion is zero. Students, cooks, tradespeople, and designers all use proportions to scale quantities up or down while keeping relationships intact.",
    example: {
      inputs: { a: 2, b: 4, c: 3 },
      explanation: "2/4 = 3/x, so cross multiplying gives 2x = 12, and x = 6.",
    },
    faqs: [
      {
        question: "What is a proportion?",
        answer: "A proportion is an equation stating that two ratios are equal, such as a over b equals c over d. It expresses that two pairs of quantities share the same relationship or scale. Proportions are used to compare quantities and to find an unknown value when three of the four terms are known. Solving them is one of the most useful everyday applications of algebra, from cooking to converting measurements.",
      },
      {
        question: "What is cross multiplication?",
        answer: "Cross multiplication is the method used to solve a proportion. When two fractions are set equal, you multiply the numerator of each by the denominator of the other, producing an equation without fractions. For a over b equals c over x, cross multiplying gives a times x equals b times c. This works because multiplying both sides of the equation by the denominators preserves equality while clearing the fractions, making the unknown easy to isolate.",
      },
      {
        question: "Where are proportions used in real life?",
        answer: "Proportions appear constantly in daily life. They scale recipes up or down, convert between units and currencies, read distances on maps, mix paint or chemicals in the right ratios, and calculate similar figures in geometry. Any time two quantities must stay in a fixed relationship as they grow or shrink, a proportion describes that link. They are among the most practical tools in everyday mathematics.",
      },
      {
        question: "Why must the value a not be zero?",
        answer: "Solving the proportion for x requires dividing by a, and division by zero is undefined in mathematics. If a were zero, the ratio a over b would be zero, and there would be no consistent value of x to balance a non-zero ratio on the other side. The calculator therefore returns no result when a is zero. Rearrange the proportion so the unknown is not paired with a zero term.",
      },
      {
        question: "How is a proportion different from a ratio?",
        answer: "A ratio compares two quantities, such as 2 to 4, showing their relative sizes. A proportion goes a step further by setting two ratios equal to each other, forming an equation like 2 over 4 equals 3 over 6. In short, a ratio is a single comparison, while a proportion states that two such comparisons are equivalent. Proportions let you solve for an unknown quantity that keeps the ratio constant.",
      },
    ],
    relatedCalculators: ["ratio-calculator", "fraction-calculator", "percentage-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard algebra",
  },
  {
    id: "rounding",
    slug: "rounding-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Rounding Calculator",
    shortDescription: "Round a number to any decimal place.",
    seoTitle: "Rounding Calculator — Round to Decimal Places",
    metaDescription:
      "Free rounding calculator. Enter a number and the number of decimal places to round it to the nearest value, and see it rounded up and rounded down too.",
    primaryKeyword: "rounding calculator",
    secondaryKeywords: ["round to decimal places calculator", "round numbers calculator", "round up or down calculator"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "3.14159", required: true, span: 1, step: 0.00001 },
      { id: "decimalPlaces", label: "Decimal places", type: "number", placeholder: "2", required: false, span: 1, min: 0, step: 1, defaultValue: 0 },
    ],
    results: [
      { id: "rounded", label: "Rounded (nearest)", format: "number", decimals: 6, isPrimary: true },
      { id: "roundedUp", label: "Rounded up", format: "number", decimals: 6, isPrimary: false },
      { id: "roundedDown", label: "Rounded down", format: "number", decimals: 6, isPrimary: false },
    ],
    formula: "rounded = round(number × 10ⁿ) ÷ 10ⁿ, where n = decimal places",
    formulaExplanation:
      "Rounding to a chosen number of decimal places works by shifting the decimal point, rounding to a whole number, then shifting back. Multiplying by ten raised to the number of places moves the digit you want to keep into the ones position, so ordinary whole-number rounding, ceiling, or floor applies. Dividing by the same power of ten afterward restores the original scale. Rounding to nearest jumps to the closest value, ceiling always goes up, and floor always goes down.",
    explanation:
      "Rounding replaces a number with a simpler nearby value that has fewer decimal places, making it easier to read, report, or work with. This rounding calculator takes a number and the number of decimal places you want, then returns three results: the number rounded to the nearest value, rounded up, and rounded down. Rounding to the nearest is the everyday default: you look at the digit just past the place you are keeping, and if it is 5 or more you round up, otherwise you round down. Rounding up, also called the ceiling, always moves to the higher value regardless of the following digit, while rounding down, the floor, always moves to the lower value. The number of decimal places controls the precision: rounding 3.14159 to two decimal places gives 3.14 to the nearest, 3.15 rounded up, and 3.14 rounded down. If you leave the decimal places blank it defaults to zero, rounding to a whole number. Rounding matters because raw calculations often produce more digits than are meaningful or useful, and reporting every digit can imply false precision. Money is rounded to two decimals, measurements to the precision of the instrument, and statistics to a sensible number of significant figures. Seeing the nearest, up, and down values together is helpful when you need to know the range a rounded figure could fall into, or when a context demands always rounding one direction, such as pricing or safety margins. This calculator requires the decimal places to be a whole number of zero or more.",
    example: {
      inputs: { number: 3.14159, decimalPlaces: 2 },
      explanation: "To 2 places: nearest = 3.14, up = 3.15, down = 3.14.",
    },
    faqs: [
      {
        question: "How does rounding to the nearest work?",
        answer: "Rounding to the nearest looks at the first digit beyond the place you are keeping. If that digit is 5 or greater, you round the kept digit up by one; if it is 4 or less, you leave the kept digit as it is and drop the rest. So 3.14159 to two places becomes 3.14, because the third decimal is 1, which is below 5. This is the standard everyday rounding rule.",
      },
      {
        question: "What is the difference between rounding up and rounding down?",
        answer: "Rounding up, called the ceiling, always moves to the next higher value at the chosen precision, no matter what the following digits are. Rounding down, called the floor, always moves to the next lower value. Unlike rounding to nearest, these ignore whether the next digit is above or below 5. Rounding up is used for things like pricing or capacity, while rounding down suits limits you must not exceed.",
      },
      {
        question: "What does decimal places mean?",
        answer: "Decimal places is the number of digits kept after the decimal point. Rounding to two decimal places keeps two digits after the point, as with money in dollars and cents. Rounding to zero decimal places gives a whole number. The more decimal places you keep, the more precise but less simplified the result. This calculator lets you choose any number of places, defaulting to zero for whole-number rounding.",
      },
      {
        question: "What is the 'round half up' rule?",
        answer: "The round half up rule says that when the digit being dropped is exactly 5, you round the kept digit upward. This is the most familiar convention taught in schools and used by this calculator's nearest result. An alternative, called banker's rounding or round half to even, rounds a trailing 5 to the nearest even digit to reduce cumulative bias in large datasets, but round half up is the common default.",
      },
      {
        question: "Why does rounding matter?",
        answer: "Rounding keeps numbers readable and avoids implying more precision than a measurement or calculation truly has. Reporting a length as 2.4 metres is clearer and more honest than 2.41732 metres if your ruler only measures to the nearest tenth. Rounding also matters for money, which is limited to two decimals, and for statistics, where sensible rounding prevents clutter. Choosing the right number of places balances accuracy against simplicity.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "fraction-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
  },
  {
    id: "linear-interpolation",
    slug: "linear-interpolation-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Linear Interpolation Calculator",
    shortDescription: "Estimate a value between two known points.",
    seoTitle: "Linear Interpolation Calculator — Estimate Between Points",
    metaDescription:
      "Free linear interpolation calculator. Enter two known points and a target x to estimate the corresponding y value along the straight line between them.",
    primaryKeyword: "linear interpolation calculator",
    secondaryKeywords: ["interpolation calculator", "lerp calculator", "estimate value between points"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1, step: 0.0001 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1, step: 0.0001 },
      { id: "x2", label: "x₂", type: "number", placeholder: "10", required: true, span: 1, step: 0.0001 },
      { id: "y2", label: "y₂", type: "number", placeholder: "100", required: true, span: 1, step: 0.0001 },
      { id: "x", label: "Target x", type: "number", placeholder: "5", required: true, span: 2, step: 0.0001 },
    ],
    results: [
      { id: "y", label: "Interpolated y", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "y = y₁ + (x − x₁) × (y₂ − y₁) ÷ (x₂ − x₁)",
    formulaExplanation:
      "Linear interpolation assumes the value changes at a constant rate between two known points, so it follows the straight line joining them. The slope of that line is the change in y divided by the change in x. Starting from the first point's y-value, you add the slope multiplied by how far the target x lies past x₁. This gives the y-value on the line at that x. It requires x₂ and x₁ to differ, otherwise the line is vertical and the slope is undefined.",
    explanation:
      "Linear interpolation estimates an unknown value that falls between two known data points by assuming the quantity changes at a steady, straight-line rate between them. This linear interpolation calculator takes two known points, given as x₁, y₁ and x₂, y₂, along with a target x value, and returns the interpolated y value on the straight line connecting the two points. The method is a workhorse of science, engineering, and data analysis because real measurements are often taken only at certain points, yet you frequently need a value in between. The calculation starts at the first known point and adds a fraction of the total rise, scaled by how far along the interval the target x sits. In formula terms, it computes the slope between the two points, the change in y over the change in x, and applies that slope over the distance from x₁ to the target x. For example, with points (0, 0) and (10, 100), interpolating at x equals 5 gives y equals 50, exactly halfway up because 5 is halfway along the interval. Linear interpolation reads values from tables, fills gaps in datasets, drives smooth animation between keyframes, and estimates readings between calibration points on an instrument. It assumes the relationship is roughly linear over the interval, which is a good approximation when the two points are close together. This calculator requires x₂ and x₁ to differ, because two points with the same x form a vertical line with no single y value to return.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 10, y2: 100, x: 5 },
      explanation: "y = 0 + (5 − 0) × (100 − 0) ÷ (10 − 0) = 50, halfway between the points.",
    },
    faqs: [
      {
        question: "What is linear interpolation?",
        answer: "Linear interpolation is a method for estimating an unknown value that lies between two known data points, assuming the value changes in a straight line between them. You draw an imaginary line connecting the two points and read off the value at your target position along it. It is the simplest form of interpolation and is widely used when you have measurements at some points but need an estimate for a point in between.",
      },
      {
        question: "When is linear interpolation accurate?",
        answer: "Linear interpolation is most accurate when the two known points are close together and the underlying relationship is nearly straight over that interval. If the true relationship curves sharply between the points, the straight-line estimate can drift from reality. For smoothly varying quantities sampled at fine intervals, it is usually very reliable. When higher accuracy is needed over curved data, methods like polynomial or spline interpolation are used instead.",
      },
      {
        question: "What is the difference between interpolation and extrapolation?",
        answer: "Interpolation estimates a value that falls between known data points, while extrapolation estimates a value beyond the range of the known points. Interpolation is generally safer because you are working inside the region your data covers. Extrapolation is riskier, since the trend may not continue past the measured range. This calculator is designed for interpolation, though the same formula will extend a line beyond the points if you enter an x outside the interval.",
      },
      {
        question: "Why must x₁ and x₂ be different?",
        answer: "The formula divides by the difference between x₂ and x₁ to find the slope of the connecting line. If those two x values were equal, that difference would be zero, making the slope undefined by division by zero. Two points with the same x also form a vertical line, which has no single y value for a given x. The calculator therefore requires the two x coordinates to differ.",
      },
      {
        question: "Where is linear interpolation used?",
        answer: "Linear interpolation is used to read values from tables, such as tax brackets or engineering charts, to fill missing entries in datasets, and to convert between calibration points on instruments. In computer graphics and animation it blends smoothly between keyframe positions, a technique often called lerp. Scientists use it to estimate readings between measurements, and finance uses it to approximate rates between quoted values. It is a fundamental everyday estimation tool.",
      },
    ],
    relatedCalculators: ["slope-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
  },
];
