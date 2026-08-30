import type { CalculatorDefinition } from "../types";

export const mathMoreCalculators: CalculatorDefinition[] = [
  {
    id: "percent-error",
    slug: "percent-error-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percent Error Calculator",
    shortDescription: "Compare a measured value to the true value.",
    seoTitle: "Percent Error Calculator — Measured vs Theoretical",
    metaDescription:
      "Free percent error calculator. Enter your experimental and theoretical values to find the percent error and absolute error, the standard measure of measurement accuracy.",
    primaryKeyword: "percent error calculator",
    secondaryKeywords: ["percentage error calculator", "experimental error", "accuracy calculator"],
    fields: [
      { id: "experimental", label: "Experimental value", type: "number", placeholder: "9.8", required: true, span: 1, step: 0.0001 },
      { id: "theoretical", label: "Theoretical value", type: "number", placeholder: "9.81", required: true, span: 1, step: 0.0001 },
    ],
    results: [
      { id: "percentError", label: "Percent error", format: "percentage", decimals: 4, isPrimary: true },
      { id: "absoluteError", label: "Absolute error", format: "number", decimals: 6, isPrimary: false },
    ],
    formula: "percent error = |experimental − theoretical| ÷ |theoretical| × 100",
    formulaExplanation:
      "Percent error divides the absolute error by the magnitude of the accepted value, then multiplies by one hundred to express it on a familiar percentage scale. Taking the absolute value of the difference ensures the result stays positive whether the measurement overshoots or undershoots. Dividing by the theoretical value rather than the measured one keeps the reference fixed, so identical gaps against different true values report different, correctly weighted percentages.",
    explanation:
      "Percent error measures how far an experimental or measured value strays from the true, accepted, or theoretical value, expressed as a percentage of that reference. It is the standard way scientists, students, and engineers report the accuracy of a measurement, because a raw gap of one gram means something very different when you expected a kilogram than when you expected two grams. This percent error calculator takes your experimental result and the theoretical value, then returns both the absolute error and the percent error so you can judge a reading at a glance. The absolute error is simply the size of the gap between the two numbers, ignoring sign, while the percent error scales that gap against the magnitude of the accepted value. A small percent error signals a precise, trustworthy measurement, whereas a large one points to flawed technique, faulty equipment, or a wrong assumption. In a physics lab measuring gravity, comparing a reading of 9.8 against the accepted 9.81 gives a percent error near 0.1 percent, which is excellent. Chemists checking reaction yields, engineers validating instruments, and teachers grading experiments all rely on this percent error calculator to quantify accuracy consistently rather than eyeballing whether a result is close enough.",
    example: {
      inputs: { experimental: 9.8, theoretical: 9.81 },
      explanation: "|9.8 − 9.81| ÷ |9.81| × 100 ≈ 0.102%, with an absolute error of 0.01.",
    },
    faqs: [
      {
        question: "What is a good percent error?",
        answer: "There is no single threshold, because acceptability depends on the field and the equipment involved. In a school physics lab, anything under about five percent is usually considered good, and under one percent is excellent. Precision engineering and analytical chemistry often demand errors well below a tenth of a percent. Always compare your result against the tolerance expected for that specific experiment rather than a universal number.",
      },
      {
        question: "Why divide by the theoretical value?",
        answer: "The theoretical or accepted value is treated as the correct reference, so measuring your error against it tells you how wrong the experiment was relative to the truth. Dividing by the experimental value instead would scale the gap against a number you already suspect is inaccurate. Using the accepted value keeps the comparison consistent, so two labs testing the same quantity report percentages that can be fairly compared side by side.",
      },
      {
        question: "Can percent error be negative?",
        answer: "By the standard definition it cannot, because the formula takes the absolute value of the difference before dividing. That keeps the result positive whether your measurement came out higher or lower than the accepted value. Some instructors do ask for a signed version to show the direction of the deviation, in which case you drop the absolute value bars, but the conventional percent error reported here is always zero or positive.",
      },
      {
        question: "What is the difference between percent error and percent difference?",
        answer: "Percent error compares a measurement against a known correct value, so one number is trusted as the reference. Percent difference compares two experimental values when neither is considered the true answer, dividing by their average instead. Use percent error when checking a result against a textbook or accepted constant, and percent difference when comparing two independent measurements of the same quantity to each other.",
      },
      {
        question: "What causes a large percent error?",
        answer: "A high percent error usually points to systematic or random problems in the experiment. Common culprits include miscalibrated instruments, misread scales, environmental factors like temperature or air resistance, and simple arithmetic mistakes. It can also reveal a flawed method or an incorrect assumption in the underlying theory. Identifying whether the error is consistent or scattered helps you decide whether to recalibrate equipment or repeat the measurement more carefully.",
      },
    ],
    relatedCalculators: ["percentage-difference-calculator", "percentage-calculator", "standard-deviation-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
  {
    id: "scientific-notation",
    slug: "scientific-notation-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Scientific Notation Calculator",
    shortDescription: "Convert any number to scientific notation.",
    seoTitle: "Scientific Notation Calculator — Standard Form Converter",
    metaDescription:
      "Free scientific notation calculator. Convert any number to scientific notation (standard form), showing its mantissa, exponent, and a × 10ⁿ expression.",
    primaryKeyword: "scientific notation calculator",
    secondaryKeywords: ["standard form calculator", "convert to scientific notation", "exponent notation"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "0.00042", required: true, span: 2, step: 0.0000001 },
    ],
    results: [
      { id: "notation", label: "Scientific notation", format: "text", isPrimary: true },
      { id: "mantissa", label: "Mantissa (coefficient)", format: "number", decimals: 6, isPrimary: false },
      { id: "exponent", label: "Exponent", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "number = mantissa × 10^exponent, with exponent = ⌊log₁₀|number|⌋",
    formulaExplanation:
      "Scientific notation rewrites a number as a coefficient between one and ten multiplied by a power of ten. The exponent is the floor of the base-ten logarithm of the number's absolute value, which counts how many places the decimal point must shift. Dividing the original number by ten raised to that exponent yields the mantissa, so the two parts multiply back exactly to the value you started with, only expressed compactly.",
    explanation:
      "Scientific notation, also called standard form, writes very large or very small numbers as a coefficient multiplied by a power of ten. It keeps otherwise unwieldy figures readable and makes their scale obvious at a glance, which is why it is the default in science and engineering. This scientific notation calculator converts any number you enter into the form mantissa times ten to an exponent, and it also breaks out the mantissa and exponent separately so you can use them in further work. The mantissa is a number whose magnitude sits between one and ten, and the exponent records how many places the decimal point moved to get there. A positive exponent means the original number was large, while a negative exponent means it was a small fraction. For example, 0.00042 becomes 4.2 times ten to the power of negative four, instantly revealing that the value has four leading zeros after the decimal point. Astronomers writing distances in kilometres, chemists counting molecules, and physicists handling atomic scales all lean on scientific notation to avoid long strings of zeros that are easy to miscount. This scientific notation calculator removes the manual place-counting and gives you a clean, unambiguous expression every time.",
    example: {
      inputs: { number: 0.00042 },
      explanation: "0.00042 = 4.2 × 10^-4, so the mantissa is 4.2 and the exponent is -4.",
    },
    faqs: [
      {
        question: "What is scientific notation used for?",
        answer: "Scientific notation compresses numbers that would otherwise carry long runs of zeros, making them easier to read, write, and compare. It is standard in physics, chemistry, astronomy, and engineering, where quantities range from atomic sizes to galactic distances. It also makes the order of magnitude explicit, so you can quickly see that one value is a thousand times larger than another simply by comparing their exponents rather than counting digits.",
      },
      {
        question: "What is the mantissa?",
        answer: "The mantissa, also called the coefficient or significand, is the leading part of a number in scientific notation. Its magnitude always sits between one and ten, so there is exactly one non-zero digit before the decimal point. In 4.2 times ten to the negative four, the mantissa is 4.2. The mantissa carries the significant figures of the value, while the exponent records only the scale.",
      },
      {
        question: "How does the exponent work?",
        answer: "The exponent is the power of ten that scales the mantissa back to the original number, and it equals the number of places the decimal point shifts. A positive exponent means you move the point to the right, producing a large number, while a negative exponent moves it left, producing a small fraction. So ten to the sixth means a million, and ten to the negative three means one thousandth.",
      },
      {
        question: "How do I convert a small decimal?",
        answer: "Move the decimal point to the right until exactly one non-zero digit sits in front of it, counting the moves as you go. That count becomes a negative exponent because the original value was smaller than one. For 0.00042 you shift four places to reach 4.2, so the result is 4.2 times ten to the negative four. The calculator performs this shift automatically for any input.",
      },
      {
        question: "What is scientific notation for zero?",
        answer: "Zero is a special case because it has no non-zero digits and no meaningful order of magnitude, so it cannot be written as a mantissa times a power of ten in the usual way. By convention the calculator simply reports zero as itself, with a mantissa and exponent of zero. Every other number, positive or negative, large or small, converts to a proper mantissa between one and ten.",
      },
    ],
    relatedCalculators: ["exponent-calculator", "logarithm-calculator", "scientific-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
  {
    id: "slope",
    slug: "slope-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Slope Calculator",
    shortDescription: "Find the slope of a line through two points.",
    seoTitle: "Slope Calculator — Find Slope & Line Equation",
    metaDescription:
      "Free slope calculator. Enter two points to find the slope of the line, its y-intercept, and the equation in slope-intercept form y = mx + b.",
    primaryKeyword: "slope calculator",
    secondaryKeywords: ["gradient calculator", "slope intercept calculator", "line equation calculator"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "2", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "4", required: true, span: 1 },
    ],
    results: [
      { id: "slope", label: "Slope (m)", format: "number", decimals: 4, isPrimary: true },
      { id: "yIntercept", label: "y-intercept (b)", format: "number", decimals: 4, isPrimary: false },
      { id: "equation", label: "Line equation", format: "text", isPrimary: false },
    ],
    formula: "m = (y₂ − y₁) ÷ (x₂ − x₁);  b = y₁ − m·x₁",
    formulaExplanation:
      "Slope is the ratio of vertical change to horizontal change, the rise over the run, so subtracting the y-coordinates gives the rise and subtracting the x-coordinates gives the run. Dividing one by the other yields a single number describing the line's steepness and direction. Substituting the slope and one point back into y equals mx plus b solves for the y-intercept, which fixes where the line crosses the vertical axis.",
    explanation:
      "The slope of a line measures how steeply it rises or falls, defined as the change in y divided by the change in x between any two points on the line. It is one of the most fundamental ideas in coordinate geometry and algebra, because it captures both the direction of a line and how fast it climbs. This slope calculator takes two points and returns the slope, the y-intercept, and the full equation of the line in slope-intercept form, y equals mx plus b. A positive slope means the line goes up from left to right, a negative slope means it goes down, a slope of zero is a flat horizontal line, and a vertical line has an undefined slope because its run is zero. For the points (0, 0) and (2, 4), the slope is 4 divided by 2, which is 2, and the line passes through the origin so its equation is y equals 2x. Students learning linear equations, analysts reading trends, and anyone working with rates of change use a slope calculator to turn two coordinates into a clear description of the line joining them without redrawing a graph.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 2, y2: 4 },
      explanation: "m = (4 − 0) ÷ (2 − 0) = 2, and b = 0, so the line is y = 2x.",
    },
    faqs: [
      {
        question: "What does the slope tell me?",
        answer: "The slope describes both the steepness and the direction of a line. Its size shows how much y changes for each one-unit increase in x, so a slope of two means y climbs two units for every step right. The sign shows direction: positive slopes rise from left to right, negative slopes fall. A slope of zero is perfectly flat, describing a horizontal line whose y-value never changes.",
      },
      {
        question: "What is the y-intercept?",
        answer: "The y-intercept is the point where the line crosses the vertical y-axis, which happens when x equals zero. In the equation y equals mx plus b, the letter b is that intercept value. The calculator finds it by taking your slope and plugging one of your points back into the equation. Knowing the intercept lets you draw the line immediately, since you have a fixed starting point and its slope.",
      },
      {
        question: "Why is a vertical line's slope undefined?",
        answer: "A vertical line has two points with the same x-coordinate, so the run, the change in x, is zero. Because slope divides the rise by the run, and dividing by zero has no defined result, the slope of a vertical line simply does not exist. The calculator returns no value in that case. Vertical lines are instead written as x equals a constant rather than in slope-intercept form.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, as long as you stay consistent. Whether you subtract the first point from the second or the second from the first, the slope comes out the same because both the numerator and the denominator flip sign together, cancelling out. What you must not do is mix the order, subtracting y-values one way and x-values the other, since that reverses the sign and gives the wrong slope.",
      },
      {
        question: "How do I find a line's full equation?",
        answer: "Once you have the slope, substitute it and either point into y equals mx plus b and solve for b, the y-intercept. With the slope and intercept in hand, you can write the complete equation. The calculator does this automatically, reporting the finished slope-intercept form for you. From there you can plot the line, find other points on it, or check whether a given point lies on the line.",
      },
    ],
    relatedCalculators: ["distance-two-points-calculator", "midpoint-calculator", "percentage-increase-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
  {
    id: "distance-two-points",
    slug: "distance-two-points-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Distance Between Two Points Calculator",
    shortDescription: "Find the straight-line distance between two points.",
    seoTitle: "Distance Between Two Points Calculator — Distance Formula",
    metaDescription:
      "Free distance calculator. Enter two coordinate points to find the straight-line distance between them using the distance formula, plus the horizontal and vertical change.",
    primaryKeyword: "distance between two points calculator",
    secondaryKeywords: ["distance formula calculator", "coordinate distance", "euclidean distance calculator"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "3", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "4", required: true, span: 1 },
    ],
    results: [
      { id: "distance", label: "Distance", format: "number", decimals: 4, isPrimary: true },
      { id: "deltaX", label: "Horizontal change (Δx)", format: "number", decimals: 4, isPrimary: false },
      { id: "deltaY", label: "Vertical change (Δy)", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "d = √[(x₂ − x₁)² + (y₂ − y₁)²]",
    formulaExplanation:
      "The distance formula is the Pythagorean theorem applied to coordinates. The horizontal gap between the points forms one leg of a right triangle and the vertical gap forms the other, so squaring each, adding them, and taking the square root gives the length of the hypotenuse. That hypotenuse is the straight-line distance between the points, which is why squaring removes any negative signs from the direction of travel.",
    explanation:
      "The distance between two points is the length of the straight line segment joining them on a coordinate plane, and it is found with the distance formula, a direct application of the Pythagorean theorem. This distance calculator takes the coordinates of two points and returns the exact distance between them, along with the horizontal and vertical change that make up the underlying right triangle. The idea is simple: the difference in the x-coordinates gives the horizontal leg, the difference in the y-coordinates gives the vertical leg, and the distance is the hypotenuse connecting the two points. Squaring each leg, adding them, and taking the square root produces a length that is always positive, regardless of which direction the points sit relative to each other. For the points (0, 0) and (3, 4), the horizontal change is 3 and the vertical change is 4, so the distance is the square root of 9 plus 16, which is the square root of 25, or exactly 5, the classic 3-4-5 triangle. Students studying geometry, game developers measuring on-screen gaps, and surveyors mapping locations all rely on a distance calculator to turn two sets of coordinates into a precise separation quickly.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 3, y2: 4 },
      explanation: "d = √[(3 − 0)² + (4 − 0)²] = √(9 + 16) = √25 = 5.",
    },
    faqs: [
      {
        question: "What is the distance formula?",
        answer: "The distance formula finds the straight-line length between two points by taking the square root of the sum of the squared differences in their coordinates. Written out, it is the square root of the quantity x-two minus x-one squared plus y-two minus y-one squared. It comes directly from the Pythagorean theorem, treating the horizontal and vertical gaps between the points as the two legs of a right triangle whose hypotenuse is the distance.",
      },
      {
        question: "Why does squaring remove the sign?",
        answer: "Squaring any real number, positive or negative, produces a positive result, so it does not matter which point you label first. The horizontal and vertical changes might come out negative depending on direction, but once squared they contribute the same positive amount to the total. This is why distance is always positive: it measures a length, and a length has no direction. The final square root then returns that length.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, the distance is identical whichever point you enter first. Because the formula squares the differences in the coordinates, any sign change from swapping the points disappears, leaving the same positive result. This makes sense physically, since the gap between two locations is the same whether you measure from the first to the second or the second to the first. The calculator gives the correct distance regardless of order.",
      },
      {
        question: "Can it measure distance in three dimensions?",
        answer: "This calculator works in two dimensions, using x and y coordinates on a flat plane. The same idea extends to three dimensions by adding a z-coordinate term inside the square root, so the formula becomes the square root of the squared differences in x, y, and z. For most geometry homework, mapping, and screen-based work, the two-dimensional version handled here is exactly what you need.",
      },
      {
        question: "What are Δx and Δy?",
        answer: "Delta x and delta y are the horizontal and vertical changes between the two points, the differences in their x-coordinates and y-coordinates respectively. They are the two legs of the right triangle whose hypotenuse is the distance. Seeing them separately is useful because they also give the slope of the line, delta y divided by delta x, and they show at a glance how far apart the points are along each axis.",
      },
    ],
    relatedCalculators: ["slope-calculator", "midpoint-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
  {
    id: "midpoint",
    slug: "midpoint-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Midpoint Calculator",
    shortDescription: "Find the midpoint between two coordinate points.",
    seoTitle: "Midpoint Calculator — Midpoint of Two Points",
    metaDescription:
      "Free midpoint calculator. Enter two coordinate points to find the midpoint of the segment joining them using the midpoint formula, with x and y coordinates shown.",
    primaryKeyword: "midpoint calculator",
    secondaryKeywords: ["midpoint formula calculator", "midpoint of two points", "segment midpoint"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "4", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "6", required: true, span: 1 },
    ],
    results: [
      { id: "midpoint", label: "Midpoint", format: "text", isPrimary: true },
      { id: "midX", label: "Midpoint x", format: "number", decimals: 4, isPrimary: false },
      { id: "midY", label: "Midpoint y", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "midpoint = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2)",
    formulaExplanation:
      "The midpoint is the point exactly halfway between two others, so its coordinates are simply the averages of the endpoints' coordinates. Adding the two x-values and dividing by two lands halfway along the horizontal direction, and doing the same with the y-values lands halfway vertically. Averaging each axis independently works because the midpoint splits the segment evenly, sitting the same distance from both ends in every direction at once.",
    explanation:
      "The midpoint of a line segment is the point that sits exactly halfway between its two endpoints, splitting the segment into two equal halves. It is found with the midpoint formula, which averages the x-coordinates and averages the y-coordinates of the two ends. This midpoint calculator takes two points and returns the midpoint as a coordinate pair, along with its x and y values separately so you can use them elsewhere. The logic is intuitive: to land halfway between two positions along a single axis, you take their average, and doing that independently for the horizontal and vertical directions gives the point centred between them in the plane. For the points (0, 0) and (4, 6), the midpoint is the average of the x-values, which is 2, and the average of the y-values, which is 3, giving the point (2, 3). Midpoints matter in geometry for bisecting segments, finding the centre of a shape, or locating the middle of a path. Students, designers aligning elements, and mapmakers finding a central location all use a midpoint calculator to pinpoint the exact centre between two coordinates without arithmetic slips.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 4, y2: 6 },
      explanation: "((0 + 4) ÷ 2, (0 + 6) ÷ 2) = (2, 3).",
    },
    faqs: [
      {
        question: "What is the midpoint formula?",
        answer: "The midpoint formula finds the centre point of a segment by averaging the coordinates of its two endpoints. You add the two x-values and divide by two to get the midpoint's x-coordinate, then add the two y-values and divide by two for its y-coordinate. The result is the single point that lies exactly halfway between the ends, the same distance from each along the line joining them.",
      },
      {
        question: "Why do you average the coordinates?",
        answer: "The average of two numbers is the value exactly halfway between them, which is precisely what a midpoint needs along each axis. By averaging the x-coordinates you find the horizontal centre, and by averaging the y-coordinates you find the vertical centre. Combining those two halfway positions gives a point equidistant from both endpoints in every direction, which is the definition of the midpoint of the segment.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, the midpoint is the same regardless of which point you enter first. Addition is commutative, so adding the two x-values or the two y-values gives the same total no matter the order, and dividing by two produces the identical result. This matches intuition, because the centre of a segment does not depend on which end you start measuring from. The calculator returns the same midpoint either way.",
      },
      {
        question: "Can the midpoint have decimal coordinates?",
        answer: "Yes, and it often does. Whenever the sum of two coordinates is odd, dividing by two produces a value ending in a half, so the midpoint sits between whole-number grid lines. For example, the midpoint of points with x-values 1 and 4 has an x-coordinate of 2.5. This is perfectly normal; the midpoint is a precise geometric location and does not have to fall on integer coordinates.",
      },
      {
        question: "What is the midpoint used for?",
        answer: "Midpoints are used to bisect line segments, locate the centre of a shape, and find a point equidistant from two locations. In geometry they help construct perpendicular bisectors and identify centres of circles from endpoints of a diameter. In practical work they place a label or object halfway between two others, or find a fair meeting point between two map positions. The midpoint is a building block for many further constructions.",
      },
    ],
    relatedCalculators: ["distance-two-points-calculator", "slope-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
  {
    id: "arithmetic-sequence",
    slug: "arithmetic-sequence-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Arithmetic Sequence Calculator",
    shortDescription: "Find the nth term and sum of a sequence.",
    seoTitle: "Arithmetic Sequence Calculator — nth Term & Sum",
    metaDescription:
      "Free arithmetic sequence calculator. Enter the first term, common difference, and term count to find the nth term and the sum of the first n terms.",
    primaryKeyword: "arithmetic sequence calculator",
    secondaryKeywords: ["nth term calculator", "arithmetic series calculator", "sequence sum calculator"],
    fields: [
      { id: "firstTerm", label: "First term (a₁)", type: "number", placeholder: "2", required: true, span: 1 },
      { id: "commonDifference", label: "Common difference (d)", type: "number", placeholder: "3", required: true, span: 1 },
      { id: "n", label: "Number of terms (n)", type: "number", placeholder: "5", required: true, span: 2, min: 1 },
    ],
    results: [
      { id: "nthTerm", label: "nth term", format: "number", decimals: 4, isPrimary: true },
      { id: "sum", label: "Sum of n terms", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "aₙ = a₁ + (n − 1)·d;  Sₙ = n/2 · [2a₁ + (n − 1)·d]",
    formulaExplanation:
      "An arithmetic sequence adds the same common difference to reach each next term, so the nth term equals the first term plus that difference repeated n minus one times. The sum formula works because pairing the first and last terms, the second and second-to-last, and so on always gives the same total, and there are n halves of such pairs. Multiplying that constant pair sum by n over two totals the whole series.",
    explanation:
      "An arithmetic sequence is a list of numbers in which each term differs from the previous one by a fixed amount called the common difference. It is one of the most common patterns in mathematics, underlying everything from simple counting to linear growth. This arithmetic sequence calculator takes the first term, the common difference, and the number of terms, then returns two key values: the nth term, meaning the value of the last term in the range, and the sum of all the terms up to that point. The nth term is found by starting at the first term and adding the common difference once for each step taken, which is n minus one additions to reach the nth position. The sum, known as an arithmetic series, has a neat closed form that avoids adding every term one by one. For a sequence starting at 2 with a common difference of 3, the fifth term is 2 plus four steps of 3, which is 14, and the sum of the first five terms is 40. Students studying sequences and series, and anyone modelling steady, evenly spaced growth, use an arithmetic sequence calculator to find distant terms and totals instantly.",
    example: {
      inputs: { firstTerm: 2, commonDifference: 3, n: 5 },
      explanation: "5th term = 2 + (5 − 1)×3 = 14; sum = 5/2 × [2×2 + 4×3] = 40.",
    },
    faqs: [
      {
        question: "What is a common difference?",
        answer: "The common difference is the fixed amount added to each term of an arithmetic sequence to get the next one. It is what makes the sequence arithmetic rather than some other pattern. If it is positive the terms increase, if negative they decrease, and if zero every term is the same. You find it by subtracting any term from the one that follows it, and that value stays constant throughout the whole sequence.",
      },
      {
        question: "How do I find the nth term?",
        answer: "Start with the first term and add the common difference once for every step you take to reach the position you want. Because reaching the nth term takes n minus one steps, the formula is the first term plus n minus one times the common difference. For a sequence beginning at 2 with a difference of 3, the fifth term is 2 plus four threes, which equals 14. The calculator does this directly.",
      },
      {
        question: "How is the sum of the series calculated?",
        answer: "The sum uses a shortcut discovered by pairing terms from the two ends inward. Each such pair adds to the same total, the first term plus the last, and there are n over two pairs, giving the formula n over two times the sum of the first and last terms. This avoids adding every term individually, so even long sequences are totalled instantly with a single calculation.",
      },
      {
        question: "What is the difference between a sequence and a series?",
        answer: "A sequence is the ordered list of terms itself, such as 2, 5, 8, 11, and so on. A series is what you get when you add those terms together to form a running total. So the arithmetic sequence lists the values, while the arithmetic series sums them. This calculator reports both: the nth term comes from the sequence, and the sum comes from the corresponding series.",
      },
      {
        question: "Can the common difference be negative?",
        answer: "Yes. A negative common difference simply means the sequence decreases, with each term smaller than the one before by a fixed amount. For instance, starting at 20 with a common difference of negative four gives 20, 16, 12, 8, and so on. The same formulas apply without change, and the nth term and sum are calculated exactly as with a positive difference. The sum can even turn negative once the terms drop below zero.",
      },
    ],
    relatedCalculators: ["average-calculator", "percentage-calculator", "exponent-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
  },
];
