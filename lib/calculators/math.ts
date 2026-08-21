import type { CalculatorDefinition } from "../types";

export const mathCalculators: CalculatorDefinition[] = [
  {
    id: "percentage",
    slug: "percentage-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Calculator",
    shortDescription: "Find what X% of a number is, instantly.",
    seoTitle: "Percentage Calculator — Free Online Percent Calculator",
    metaDescription:
      "Free percentage calculator. Quickly find what X% of any number is, with the formula and a worked example. Fast, accurate and mobile-friendly.",
    primaryKeyword: "percentage calculator",
    secondaryKeywords: ["percent calculator", "what is x percent of y", "calculate percentage"],
    fields: [
      { id: "percent", label: "Percentage", type: "number", placeholder: "20", unit: "%", required: true, span: 1, step: 0.01 },
      { id: "value", label: "Of value", type: "number", placeholder: "150", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "result", label: "Result", format: "number", decimals: 2, isPrimary: true, description: "X% of the value" },
    ],
    formula: "result = (percentage ÷ 100) × value",
    explanation:
      "A percentage expresses a quantity as a portion of one hundred, which is why the word literally means 'per hundred.' When you find a percentage of a number, you are scaling that number down or up to the share the percentage represents. The percentage calculator does this in two clean steps: it converts the stated percentage into its decimal equivalent by dividing by 100, then multiplies that decimal by the value you are measuring against. Working 20% of 150, for instance, turns 20 into 0.2 and returns 0.2 times 150, which is 30. Percentages matter because they let people compare quantities on a common scale regardless of the underlying totals, so a 20% share means the same relative amount whether the base is 150 or 15,000. This shared scale is what makes the decimal-and-multiply method the standard approach; it mirrors the definition of a percentage exactly and avoids the rounding drift that mental shortcuts introduce. The tool removes that friction entirely and keeps the result exact. Shoppers use a percentage calculator for discounts and sales tax, students apply it to test scores and lab results, and finance and retail professionals lean on it for margins, tips, commissions and interest. Anywhere a part-of-a-whole relationship appears, this percentage calculator turns it into a precise figure.",
    formulaExplanation:
      "Dividing the percentage by 100 restores its true meaning as a fraction of one hundred, converting 20% into the decimal 0.2. Multiplying that decimal by the value then takes exactly that fraction of the whole, so 0.2 times 150 yields 30. The two operations mirror the definition of a percent directly: express the part per hundred, then apply it to the actual base amount.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { percent: 20, value: 150 },
      explanation: "20% of 150 = (20 ÷ 100) × 150 = 0.2 × 150 = 30.",
    },
    faqs: [
      { question: "What is a percentage?", answer: "A percentage is a way of writing a number as a fraction of one hundred, marked by the percent sign. Saying 20% is identical to saying 20 out of 100, or the decimal 0.2. Because every percentage shares the same base of one hundred, percentages let you compare portions drawn from totals of any size on one consistent scale, which is what makes them so widely used." },
      { question: "How do I calculate a percentage of a number?", answer: "Turn the percentage into a decimal by dividing it by 100, then multiply that decimal by the number you are measuring. For 20% of 150, divide 20 by 100 to get 0.2, then multiply by 150 to reach 30. The order never changes the answer, and doing both steps keeps the figure exact rather than rounded from a mental estimate." },
      { question: "How do I convert a percentage to a decimal?", answer: "Divide the percentage by 100, which shifts the decimal point two places to the left. That converts 20% into 0.2 and 5% into 0.05. Reversing the process by multiplying a decimal by 100 turns it back into a percentage, so 0.2 becomes 20%. This conversion is the first step in almost every percentage calculation and keeps the arithmetic aligned with the definition of a percent." },
      { question: "Can I use this to work out a discount?", answer: "Yes. Find the percentage of the original price first, then subtract it. On a 150 item marked 20% off, take 20% of 150, which is 30, and subtract to reach a sale price of 120. To go the other way and add sales tax or a tip, calculate the percentage the same way and add it to the base amount instead of subtracting." },
      { question: "Why divide by 100 instead of using the percentage number directly?", answer: "The percent sign already means divided by one hundred, so 20% is not the number 20; it is 20/100, or 0.2. Multiplying a value by the raw 20 would scale it twenty times over instead of taking a fifth of it. Dividing by 100 first restores the intended proportion, which is why 20% of 150 correctly gives 30 rather than 3,000." },
    ],
    relatedCalculators: ["percentage-increase-calculator", "percentage-difference-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "percentage-increase",
    slug: "percentage-increase-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Increase Calculator",
    shortDescription: "Calculate the percent change between two values.",
    seoTitle: "Percentage Increase Calculator — Percent Change Calculator",
    metaDescription:
      "Free percentage increase & decrease calculator. Find the percent change between an original and new value, with the formula and a worked example.",
    primaryKeyword: "percentage increase calculator",
    secondaryKeywords: ["percent change calculator", "percentage decrease calculator", "increase percentage"],
    fields: [
      { id: "original", label: "Original value", type: "number", placeholder: "200", required: true, span: 1, step: 0.01 },
      { id: "updated", label: "New value", type: "number", placeholder: "250", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "change", label: "Percent change", format: "percentage", decimals: 2, isPrimary: true, description: "Positive = increase, negative = decrease" },
      { id: "difference", label: "Absolute difference", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "change (%) = ((new − original) ÷ |original|) × 100",
    explanation:
      "Percent change captures how much a value has grown or shrunk compared with where it started, expressed as a proportion of that original amount. Because it is relative rather than absolute, a rise of 50 means very different things against a base of 200 than against a base of 5,000, and the percentage tells you which. The percentage increase calculator measures this by subtracting the original value from the new value, dividing that gap by the original, and multiplying by 100. Moving from 200 to 250 produces a 50 difference over a base of 200, which is a 25% increase; a negative result signals a decrease instead. Anchoring the change to the starting value is what makes the method meaningful, because growth is almost always judged against the point it grew from. That framing is why the same tool doubles as a percentage decrease calculator: the arithmetic is identical and only the sign flips. A percentage increase calculator keeps the direction and the magnitude in one figure. Analysts use it for revenue and price growth, scientists for measured change between readings, and everyday users for pay rises, rent hikes and portfolio swings. Whenever a before-and-after pair needs a single comparable number, this percentage increase calculator supplies it cleanly.",
    formulaExplanation:
      "Subtracting the original from the new value isolates the raw amount of change, here 250 minus 200, a gap of 50. Dividing that gap by the original expresses it as a fraction of the starting point, and multiplying by 100 states it as a percent. Using the original as the denominator is deliberate: growth is measured against where it began, so 50 over 200 becomes a 25% increase.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { original: 200, updated: 250 },
      explanation: "From 200 to 250: ((250 − 200) ÷ 200) × 100 = (50 ÷ 200) × 100 = 25% increase.",
    },
    faqs: [
      { question: "What is percent change?", answer: "Percent change is the size of an increase or decrease written as a percentage of the original value. It answers how much something grew or fell relative to its starting point rather than in raw units. Reporting a move from 200 to 250 as a 25% increase is more informative than saying it rose by 50, because the percentage already accounts for the base the change is measured against." },
      { question: "How do I calculate percentage increase?", answer: "Subtract the original value from the new value, divide the result by the original, then multiply by 100. Going from 200 to 250 gives a difference of 50; dividing 50 by 200 gives 0.25, and multiplying by 100 gives a 25% increase. The same three steps handle a decrease automatically, since a smaller new value makes the difference negative and the percentage falls below zero." },
      { question: "What does a negative result mean?", answer: "A negative percentage means the value dropped rather than rose, so the calculator is reporting a decrease. The magnitude still works the same way, measured against the original amount. Because the formula subtracts the original from the new value, any new value lower than the original produces a negative numerator and therefore a negative percent, which is the signal that the quantity shrank." },
      { question: "Is percentage increase the same as percentage difference?", answer: "No. Percentage increase is measured against the original value and carries a direction, so reversing the two numbers changes the answer. Percentage difference divides by the average of the two values and ignores direction, giving the same result whichever way you enter them. Use percentage increase when one number is clearly a starting point and the other an outcome; use percentage difference when neither comes first." },
      { question: "Can I use it to calculate a percentage decrease?", answer: "Yes. The formula is identical for decreases: enter the original value first and the smaller new value second, and the result comes out negative to show the drop. Falling from 250 back to 200 gives a difference of minus 50 over a base of 250, which is a 20% decrease. Note that a rise and the matching fall are not equal percentages, because each is measured against a different starting value." },
    ],
    relatedCalculators: ["percentage-calculator", "percentage-difference-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "percentage-difference",
    slug: "percentage-difference-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Difference Calculator",
    shortDescription: "Compare two values as a percentage difference.",
    seoTitle: "Percentage Difference Calculator — Free Online Tool",
    metaDescription:
      "Free percentage difference calculator. Compare two numbers as a percentage of their average, with the formula and a clear worked example.",
    primaryKeyword: "percentage difference calculator",
    secondaryKeywords: ["percent difference", "difference between two numbers percentage"],
    fields: [
      { id: "a", label: "First value", type: "number", placeholder: "40", required: true, span: 1, step: 0.01 },
      { id: "b", label: "Second value", type: "number", placeholder: "60", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "difference", label: "Percentage difference", format: "percentage", decimals: 2, isPrimary: true },
      { id: "absolute", label: "Absolute difference", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "difference (%) = (|a − b| ÷ ((a + b) ÷ 2)) × 100",
    explanation:
      "Percentage difference measures how far apart two values are relative to their typical size, without labelling either one as the reference point. Instead of asking how much A grew into B, it treats the two numbers even-handedly: it takes the absolute gap between them and compares it against their average. That symmetry is the defining trait, so the percentage difference calculator returns the same answer whether you enter 40 then 60 or 60 then 40, because swapping them changes neither the gap nor the average. The method matters when there is no natural before or after. Comparing two lab measurements, two suppliers' prices or two sensor readings, you rarely want one to count as the baseline; dividing by the average rather than by either value keeps the comparison neutral. For 40 and 60 the gap is 20, the average is 50, and 20 over 50 is a 40% difference. A percentage difference calculator applies that consistently and always reports a non-negative figure. Engineers, scientists, accountants and quality analysts reach for this percentage difference calculator when they need an unbiased comparison of two equal-standing quantities rather than a directional change from a fixed origin.",
    formulaExplanation:
      "Taking the absolute difference measures how far apart the two values are while discarding which one is larger, so the result stays positive. Dividing by their average, not by either value, is what keeps the comparison symmetric, because the average treats both numbers equally. Multiplying by 100 states the gap as a percent. For 40 and 60, a gap of 20 over an average of 50 gives 40%.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { a: 40, b: 60 },
      explanation: "|40 − 60| = 20, average = 50, so (20 ÷ 50) × 100 = 40%.",
    },
    faqs: [
      { question: "What is percentage difference?", answer: "Percentage difference is the gap between two values expressed as a percentage of their average. It compares two numbers that stand on equal footing, with neither treated as the original or the reference. Because it divides by the average of the pair, it is symmetric: the values 40 and 60 differ by 40% no matter which you list first, and the answer is always zero or positive." },
      { question: "How is percentage difference different from percentage change?", answer: "Percentage change divides by the original value and has a direction, so it tells you how much one number grew or shrank into another. Percentage difference divides by the average of the two values and has no direction, so it simply measures how far apart they are. Change suits before-and-after comparisons; difference suits two readings where neither is the starting point." },
      { question: "When should I use percentage difference?", answer: "Use it whenever the two values you are comparing have no natural order: two independent measurements, two competing quotes, two instruments reading the same thing. In those cases picking one as the baseline would bias the result, so dividing by the average keeps the comparison fair. If one number is clearly a before and the other an after, percentage change is the better fit instead." },
      { question: "Can percentage difference be negative?", answer: "No. The formula uses the absolute value of the gap between the two numbers, which strips away any sign, so the result is always zero or positive. A difference of zero means the values are identical. This is a deliberate consequence of the method being symmetric: since neither value is treated as the baseline, there is no direction for the figure to point, and therefore no negative outcome." },
      { question: "How do I find the percentage difference between two numbers?", answer: "Subtract the smaller value from the larger to get the absolute gap, add the two numbers and halve them to get the average, then divide the gap by the average and multiply by 100. For 40 and 60, the gap is 20 and the average is 50, so 20 divided by 50 times 100 is a 40% difference. The order you enter the two numbers never affects the outcome." },
    ],
    relatedCalculators: ["percentage-calculator", "percentage-increase-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "average",
    slug: "average-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Average Calculator",
    shortDescription: "Find the mean, median, min and max of a list.",
    seoTitle: "Average Calculator — Mean, Median, Min & Max",
    metaDescription:
      "Free average calculator. Enter a list of numbers to get the mean, median, sum, count, minimum and maximum instantly.",
    primaryKeyword: "average calculator",
    secondaryKeywords: ["mean calculator", "median calculator", "how to find the average"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 12, 18, 24, 30", required: true, span: 2, helpText: "Separate values with commas, spaces or new lines." },
    ],
    results: [
      { id: "mean", label: "Average (mean)", format: "number", decimals: 4, isPrimary: true },
      { id: "median", label: "Median", format: "number", decimals: 4, isPrimary: false },
      { id: "sum", label: "Sum", format: "number", decimals: 4, isPrimary: false },
      { id: "count", label: "Count", format: "number", decimals: 0, isPrimary: false },
      { id: "min", label: "Minimum", format: "number", decimals: 4, isPrimary: false },
      { id: "max", label: "Maximum", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "mean = (sum of all values) ÷ (count of values)",
    explanation:
      "An average, or arithmetic mean, condenses a whole list of numbers into a single representative value: add every entry together and divide by how many there are. It answers what each item would be if the total were shared out equally, which is why it is the most common summary of a data set. The average calculator computes this along with the companion statistics that give it context: the median, sum, count, minimum and maximum. For the list 12, 18, 24 and 30, the sum is 84 across four values, so the mean is 84 divided by 4, which is 21. The mean is used because it accounts for every value and pairs naturally with totals, but it can be pulled off-centre by extreme entries, so an average calculator reports the median alongside it. The median is the middle value once the numbers are sorted, also 21 for this list, and it resists the distortion that a single outlier would cause. Students average grades, teachers average class scores, and analysts, scientists and finance teams average prices, times and measurements. Whenever a spread of numbers needs one dependable central figure, this average calculator delivers the mean and the supporting statistics together.",
    formulaExplanation:
      "Adding every value produces the total the group represents, and dividing by the count spreads that total evenly across all the entries, giving the amount each would hold if they were equal. Every number therefore pulls the mean toward itself in proportion to its size. For 12, 18, 24 and 30, a sum of 84 shared among four values yields a mean of 21, the balance point of the list.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "12, 18, 24, 30" },
      explanation: "Sum = 84, count = 4, so mean = 84 ÷ 4 = 21. Median = (18 + 24) ÷ 2 = 21.",
    },
    faqs: [
      { question: "What is the difference between mean and median?", answer: "The mean is the sum of all values divided by how many there are, so every number influences it. The median is the middle value once the list is sorted, so only the central position matters. When data is evenly spread the two agree, since both are 21 for 12, 18, 24 and 30, but when a few extreme values are present, the median stays closer to the typical entry." },
      { question: "How do I calculate the average of a list of numbers?", answer: "Add all the numbers to get their sum, count how many there are, then divide the sum by the count. For 12, 18, 24 and 30 the sum is 84 and the count is 4, so the average is 84 divided by 4, which equals 21. The calculator does this instantly and also sorts the values to report the median, minimum and maximum at the same time." },
      { question: "When should I use the median instead of the mean?", answer: "Use the median when your data contains outliers or is heavily skewed, such as incomes, house prices or response times, where a few very large values would drag the mean upward and misrepresent the typical case. The median ignores how far the extremes lie and reports only the middle value, so it often describes a normal entry more faithfully than the mean does for lopsided data." },
      { question: "How many numbers can I enter?", answer: "There is no fixed limit; enter as many values as you need, separated by commas, spaces or new lines. The calculator reads them all, adds them for the sum, divides by the count for the mean, and sorts them to find the median, minimum and maximum. Mixing separators is fine, so pasting a column of figures or a comma-separated row both work without any reformatting." },
      { question: "Does the order of the numbers matter?", answer: "No. The sum and the mean do not depend on order, and the calculator sorts the list internally before finding the median, minimum and maximum, so any arrangement gives the same results. Whether you enter 12, 18, 24, 30 or the same values shuffled, the mean stays 21 and the median stays 21. You can paste numbers in whatever order they happen to appear." },
    ],
    relatedCalculators: ["percentage-calculator", "square-root-calculator", "grade-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "square-root",
    slug: "square-root-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Square Root Calculator",
    shortDescription: "Find the square root of any number.",
    seoTitle: "Square Root Calculator — Free Online √ Tool",
    metaDescription:
      "Free square root calculator. Find the square root of any positive number instantly, with the formula and a worked example.",
    primaryKeyword: "square root calculator",
    secondaryKeywords: ["sqrt calculator", "root calculator", "how to find square root"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "144", required: true, span: 2, min: 0, step: 0.0001 },
    ],
    results: [
      { id: "root", label: "Square root", format: "number", decimals: 6, isPrimary: true },
      { id: "squared", label: "Number squared", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "√n = the value x such that x × x = n",
    explanation:
      "The square root of a number is the value that, multiplied by itself, reproduces that number, so the square root of 144 is 12, because 12 times 12 is 144. It reverses squaring, unwinding an area back to the length of one side, which is exactly how the operation arises in geometry, physics and statistics. The square root calculator finds this value for any number from zero upward and returns it to several decimal places for precision. Every positive number has two roots that square to it, one positive and one negative, but the calculator reports the principal root, the non-negative one, because that is the value meant in almost all practical contexts. Zero has a single root of zero, and negative numbers have no real square root at all, since no real value squared is negative, which is why a square root calculator restricts its input to zero or greater. Roots appear constantly beyond the classroom: they scale distances through the Pythagorean theorem, define standard deviation in statistics, and set the sizing of squares and circles in design and engineering. Whenever squaring needs to be undone, this square root calculator returns the exact underlying value.",
    formulaExplanation:
      "The square root asks the inverse of squaring: rather than multiplying a number by itself, it searches for the value whose self-product equals your input. Naming it x, the definition that x times x equals n means x is the side length that produces an area of n. That is why the root of 144 is 12, since twelve is precisely the number that, squared, rebuilds 144.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { number: 144 },
      explanation: "√144 = 12, because 12 × 12 = 144.",
    },
    faqs: [
      { question: "What is a square root?", answer: "A square root of a number is a value that gives that number when multiplied by itself. Since 12 times 12 is 144, twelve is a square root of 144. The operation undoes squaring, so it turns an area back into the length of the side that produced it. This inverse relationship is why roots appear anywhere a squared quantity, such as a distance, a variance or an area, needs to be reversed." },
      { question: "Can I take the square root of a negative number?", answer: "Not within the real numbers. No real value multiplied by itself gives a negative result, because a positive times a positive and a negative times a negative are both positive. The square root of a negative number is therefore called imaginary and lies outside ordinary arithmetic, which is why this calculator accepts only inputs of zero or greater and leaves negative entries without a real answer." },
      { question: "What is a principal square root?", answer: "The principal square root is the non-negative one. Every positive number technically has two roots, one positive and one negative, that both square to it, since 12 and minus 12 each give 144. To keep results unambiguous, the calculator returns only the principal, positive value, which is the root intended in nearly every practical calculation involving lengths, distances and measured quantities." },
      { question: "Is a square root always a whole number?", answer: "No. Only perfect squares like 144 have whole-number roots; most numbers have irrational roots that run on forever without repeating. The square root of 2, for example, is about 1.414214 and can never be written exactly as a fraction or a terminating decimal. The calculator handles both cases, returning an exact integer where one exists and a rounded decimal otherwise." },
      { question: "How do I calculate a square root by hand?", answer: "For perfect squares, ask which number multiplied by itself gives your value: twelve works for 144 because 12 times 12 is 144. For other numbers, estimate between the two nearest perfect squares and refine, so a value between 121 and 144 has a root between 11 and 12. This guess-and-check narrowing is tedious, which is why a calculator is faster and far more precise for non-perfect squares." },
    ],
    relatedCalculators: ["percentage-calculator", "average-calculator", "percentage-difference-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
