import type { CalculatorDefinition } from "../types";

export const mathR7Calculators: CalculatorDefinition[] = [
  {
    id: "rectangle-area",
    slug: "rectangle-area-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Rectangle Area Calculator",
    shortDescription: "Find the area and perimeter of a rectangle.",
    seoTitle: "Rectangle Area Calculator — Area & Perimeter",
    metaDescription:
      "Free rectangle area calculator. Enter the length and width to find the area and perimeter of a rectangle instantly, with the formulas explained.",
    primaryKeyword: "rectangle area calculator",
    secondaryKeywords: ["area of a rectangle", "rectangle perimeter calculator", "length times width"],
    fields: [
      { id: "length", label: "Length", type: "number", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "width", label: "Width", type: "number", placeholder: "3", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
      { id: "perimeter", label: "Perimeter", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "area = length × width;  perimeter = 2 × (length + width)",
    formulaExplanation:
      "The area of a rectangle is the length multiplied by the width because a rectangle can be tiled by rows and columns of unit squares, and the count of those squares is exactly the product of the two side lengths. The perimeter is the total distance around the outside, so you add the two lengths and the two widths, which simplifies to twice the sum of one length and one width because opposite sides are equal.",
    explanation:
      "A rectangle is a four-sided shape with four right angles, where opposite sides are equal in length. It is one of the most common shapes in everyday life, from rooms and screens to sheets of paper and plots of land, which makes calculating its area and perimeter a frequent, practical task. This rectangle area calculator takes the length and the width and returns both the area, the amount of surface the rectangle covers, and the perimeter, the distance around its edge. The area is found by multiplying the length by the width, and it is measured in square units such as square metres or square feet. The perimeter is found by adding up all four sides, which because opposite sides match is simply twice the sum of the length and the width, measured in ordinary linear units. For a rectangle 5 units long and 3 units wide, the area is 15 square units and the perimeter is 16 units. Homeowners estimating flooring or paint, gardeners planning beds, designers sizing layouts, and students learning geometry all use a rectangle area calculator to get both measurements at once without the risk of mixing up the two formulas.",
    example: {
      inputs: { length: 5, width: 3 },
      explanation: "Area = 5 × 3 = 15 square units; perimeter = 2 × (5 + 3) = 16 units.",
    },
    faqs: [
      {
        question: "How do I find the area of a rectangle?",
        answer: "Multiply the length by the width. Both measurements must be in the same unit, and the result is in square units of that measure, such as square metres or square feet. For a rectangle that is 5 metres long and 3 metres wide, the area is 5 times 3, which equals 15 square metres. The calculator does this multiplication for you and also returns the perimeter alongside it.",
      },
      {
        question: "What is the difference between area and perimeter?",
        answer: "Area measures the flat space a rectangle covers and is given in square units, while perimeter measures the total length of its boundary and is given in ordinary linear units. Area answers how much surface there is to paint or carpet, whereas perimeter answers how much fencing or trim you need around the edge. They are calculated differently and describe two genuinely different properties of the same shape.",
      },
      {
        question: "Do length and width need the same units?",
        answer: "Yes. Both sides must be expressed in the same unit before you multiply or add them, or the result will be meaningless. If one side is in metres and the other in centimetres, convert one first so they match. Once the units agree, the area comes out in that unit squared and the perimeter in that unit, and the calculator assumes consistent units throughout.",
      },
      {
        question: "How is the area of a square related?",
        answer: "A square is a special rectangle whose length and width are equal, so its area is simply one side multiplied by itself, or the side squared. You can use this rectangle calculator for a square by entering the same value for both the length and the width. The perimeter of a square then works out to four times the side length, since all four sides are identical.",
      },
      {
        question: "Can I use decimals for length and width?",
        answer: "Absolutely. Real measurements rarely land on whole numbers, so the calculator accepts decimal values for both the length and the width. Entering 5.5 by 3.25, for example, returns a precise area and perimeter without rounding your inputs. This is useful for room dimensions, fabric, and any measurement taken with a tape or ruler where fractional units are the norm rather than the exception.",
      },
    ],
    relatedCalculators: ["circle-calculator", "triangle-area-calculator", "trapezoid-area-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "sphere-volume",
    slug: "sphere-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Sphere Volume Calculator",
    shortDescription: "Find the volume and surface area of a sphere.",
    seoTitle: "Sphere Volume Calculator — Volume & Surface Area",
    metaDescription:
      "Free sphere volume calculator. Enter the radius to find the volume and surface area of a sphere using the standard geometry formulas.",
    primaryKeyword: "sphere volume calculator",
    secondaryKeywords: ["volume of a sphere", "sphere surface area calculator", "ball volume"],
    fields: [
      { id: "radius", label: "Radius", type: "number", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
      { id: "surfaceArea", label: "Surface area", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "volume = 4⁄3 × π × r³;  surface area = 4 × π × r²",
    formulaExplanation:
      "The volume of a sphere is four-thirds of pi times the radius cubed, a result derived through integral calculus by summing infinitely many thin circular slices stacked from pole to pole. The surface area is four times pi times the radius squared, which is exactly the area of four great circles of the sphere. Both formulas depend only on the radius, so cubing it drives the volume and squaring it drives the surface area as the ball grows.",
    explanation:
      "A sphere is a perfectly round three-dimensional object where every point on its surface lies the same distance, the radius, from its centre. Balls, planets, bubbles, and droplets are all approximately spherical, so finding a sphere's volume and surface area comes up in physics, engineering, manufacturing, and everyday estimation. This sphere volume calculator takes a single input, the radius, and returns both the volume, the amount of space the sphere encloses, and the surface area, the total area of its curved outer skin. The volume follows the formula four-thirds times pi times the radius cubed, which grows very quickly as the radius increases because the radius is raised to the third power. The surface area is four times pi times the radius squared, equal to the combined area of four flat circles the size of the sphere's widest cross-section. For a sphere with a radius of 3 units, the volume is about 113.1 cubic units and, in this particular case, the surface area is also about 113.1 square units. Engineers sizing tanks, scientists modelling cells or planets, and students studying solid geometry all rely on a sphere volume calculator to apply these two formulas accurately from just the radius.",
    example: {
      inputs: { radius: 3 },
      explanation: "Volume = 4⁄3 × π × 3³ ≈ 113.10 cubic units; surface area = 4 × π × 3² ≈ 113.10 square units.",
    },
    faqs: [
      {
        question: "What is the formula for the volume of a sphere?",
        answer: "The volume of a sphere equals four-thirds multiplied by pi multiplied by the radius cubed. In symbols that is four over three times pi times r to the third power. Because the radius is cubed, the volume increases dramatically as the sphere grows: doubling the radius makes the volume eight times larger. The calculator applies this formula directly using the precise value of pi built into the computation.",
      },
      {
        question: "How do I find a sphere's surface area?",
        answer: "The surface area of a sphere is four times pi times the radius squared. This equals the area of four great circles, the largest circles you can draw on the sphere. Because the radius is squared rather than cubed, surface area grows more slowly than volume as the sphere enlarges. Enter the radius and the calculator returns the surface area alongside the volume in a single step.",
      },
      {
        question: "What if I only know the diameter?",
        answer: "The diameter is twice the radius, so simply halve the diameter to get the radius before entering it. If a ball measures 6 units across, its radius is 3 units, which is the value to type into the calculator. Both the volume and surface area formulas are written in terms of the radius, so converting the diameter first ensures the results come out correctly.",
      },
      {
        question: "Why does volume grow so much faster than surface area?",
        answer: "Volume depends on the radius cubed while surface area depends on the radius squared, so as the radius increases the volume rises with the third power and the surface area only with the second. This is why large spheres enclose far more space relative to their skin than small ones, a fact that matters in biology for cell size and in engineering for storage tanks and pressure vessels.",
      },
      {
        question: "What units does the answer use?",
        answer: "The volume is expressed in cubic units of whatever unit you used for the radius, such as cubic centimetres or cubic metres, while the surface area is in square units of the same measure. If you enter the radius in centimetres, the volume is in cubic centimetres and the surface area in square centimetres. Keeping the radius in a single consistent unit ensures both results are meaningful.",
      },
    ],
    relatedCalculators: ["cylinder-volume-calculator", "cone-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "cylinder-volume",
    slug: "cylinder-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Cylinder Volume Calculator",
    shortDescription: "Find the volume and surface area of a cylinder.",
    seoTitle: "Cylinder Volume Calculator — Volume & Surface Area",
    metaDescription:
      "Free cylinder volume calculator. Enter the radius and height to find the volume and total surface area of a cylinder using standard geometry formulas.",
    primaryKeyword: "cylinder volume calculator",
    secondaryKeywords: ["volume of a cylinder", "cylinder surface area calculator", "tank volume"],
    fields: [
      { id: "radius", label: "Radius", type: "number", placeholder: "2", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height", type: "number", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
      { id: "surfaceArea", label: "Surface area", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "volume = π × r² × h;  surface area = 2 × π × r × (r + h)",
    formulaExplanation:
      "A cylinder's volume is the area of its circular base, pi times the radius squared, multiplied by the height, because the shape is a stack of identical circular cross-sections. The total surface area combines the two circular ends, each pi times the radius squared, with the curved side, which unrolls into a rectangle whose width is the base circumference and whose height is the cylinder's height. Factoring gives two pi r times the quantity r plus h.",
    explanation:
      "A cylinder is a three-dimensional shape with two parallel circular ends joined by a curved surface, like a can, a pipe, or a storage tank. Calculating its volume and surface area is a routine task in engineering, manufacturing, cooking, and construction, wherever round containers appear. This cylinder volume calculator takes two inputs, the radius of the circular base and the height, and returns the volume, the space the cylinder holds, and the total surface area, the combined area of both ends plus the curved side. The volume is the area of the circular base, pi times the radius squared, multiplied by the height, because a cylinder is effectively a stack of identical circles. The total surface area adds the two circular caps to the curved lateral surface, which when unrolled is a rectangle. For a cylinder with a radius of 2 units and a height of 5 units, the volume is about 62.83 cubic units and the total surface area is about 87.96 square units. Engineers sizing tanks and pipes, cooks scaling tins, and students tackling solid geometry all use a cylinder volume calculator to get both figures reliably from just the radius and the height.",
    example: {
      inputs: { radius: 2, height: 5 },
      explanation: "Volume = π × 2² × 5 ≈ 62.83 cubic units; surface area = 2 × π × 2 × (2 + 5) ≈ 87.96 square units.",
    },
    faqs: [
      {
        question: "How do I calculate the volume of a cylinder?",
        answer: "Multiply the area of the circular base by the height. The base area is pi times the radius squared, so the full volume is pi times the radius squared times the height. For a cylinder with a radius of 2 and a height of 5, that is pi times 4 times 5, roughly 62.83 cubic units. The calculator performs this using the precise value of pi automatically.",
      },
      {
        question: "What does the surface area include?",
        answer: "The total surface area of a closed cylinder includes three parts: the top circle, the bottom circle, and the curved side that wraps between them. The two circles together contribute twice pi times the radius squared, and the curved side contributes two pi times the radius times the height. The formula two pi r times r plus h combines all three into one expression, which the calculator evaluates for you.",
      },
      {
        question: "How is a cylinder's volume related to a prism?",
        answer: "A cylinder is essentially a prism with a circular base rather than a polygonal one. For any prism, the volume is the base area times the height, and a cylinder follows the same rule with the base being a circle. This is why the volume formula is simply the circle's area, pi times the radius squared, multiplied by how tall the cylinder stands, exactly as with a rectangular box.",
      },
      {
        question: "What if I only have the diameter?",
        answer: "Halve the diameter to obtain the radius before entering it, since both formulas are written in terms of the radius. A pipe measuring 4 units across the opening has a radius of 2 units. Using the diameter directly in place of the radius would overstate the volume fourfold, so always convert first. Once you have the radius and the height, the calculator returns both results correctly.",
      },
      {
        question: "Can this find the capacity of a tank?",
        answer: "Yes. The volume of a cylinder is its capacity, so entering the internal radius and internal height of a cylindrical tank gives how much it can hold in cubic units. To convert to litres, remember that one cubic decimetre equals one litre, or use the relationship that one cubic metre equals a thousand litres. Keep your radius and height in consistent units for an accurate capacity figure.",
      },
    ],
    relatedCalculators: ["sphere-volume-calculator", "cone-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "cone-volume",
    slug: "cone-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Cone Volume Calculator",
    shortDescription: "Find the volume of a cone from its radius and height.",
    seoTitle: "Cone Volume Calculator — Volume of a Cone",
    metaDescription:
      "Free cone volume calculator. Enter the base radius and height to find the volume of a cone using the standard one-third base times height formula.",
    primaryKeyword: "cone volume calculator",
    secondaryKeywords: ["volume of a cone", "cone volume formula", "ice cream cone volume"],
    fields: [
      { id: "radius", label: "Base radius", type: "number", placeholder: "3", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "volume = 1⁄3 × π × r² × h",
    formulaExplanation:
      "A cone's volume is one-third of pi times the radius squared times the height. The factor of one-third appears because a cone occupies exactly a third of the cylinder that shares its base radius and height, a fact proved by integration or by the classic experiment of pouring water from a cone into a matching cylinder three times to fill it. The base area, pi times the radius squared, is multiplied by the height and then divided by three.",
    explanation:
      "A cone is a three-dimensional shape with a circular base that narrows smoothly to a single point called the apex. Ice cream cones, funnels, party hats, and piles of sand or gravel all take this form, so finding a cone's volume is useful in cooking, manufacturing, and construction as well as in the classroom. This cone volume calculator takes two inputs, the radius of the circular base and the perpendicular height from the base to the apex, and returns the volume, the amount of space the cone encloses. The formula is one-third of pi times the radius squared times the height, and the crucial detail is that factor of one-third: a cone holds exactly a third as much as a cylinder with the same base and height. This is a result you can demonstrate by filling a cone with water and pouring it into a matching cylinder, which takes three cones to fill. For a cone with a base radius of 3 units and a height of 4 units, the volume is about 37.70 cubic units. Students studying solid geometry, engineers designing hoppers, and anyone estimating the contents of a conical pile use a cone volume calculator to apply the formula quickly and correctly.",
    example: {
      inputs: { radius: 3, height: 4 },
      explanation: "Volume = 1⁄3 × π × 3² × 4 ≈ 37.70 cubic units.",
    },
    faqs: [
      {
        question: "What is the formula for the volume of a cone?",
        answer: "The volume of a cone is one-third times pi times the radius of the base squared times the height. In symbols that is one over three times pi times r squared times h. The height must be the perpendicular distance from the base to the apex, not the slanted side. The calculator uses this formula with the built-in precise value of pi to return an accurate volume from your two inputs.",
      },
      {
        question: "Why is there a one-third in the formula?",
        answer: "The one-third reflects that a cone holds exactly a third of the volume of a cylinder sharing the same base radius and height. You can see this by pouring water: it takes three full cones to fill the matching cylinder. Mathematically the factor comes from integrating the shrinking circular cross-sections from the wide base up to the single point at the apex, which averages out to a third of the full cylinder.",
      },
      {
        question: "What is the difference between height and slant height?",
        answer: "The height in this formula is the vertical distance straight up from the centre of the base to the apex. The slant height is the distance measured along the sloping outer surface from the edge of the base to the apex, which is always longer. Use the perpendicular height here. If you only know the slant height and radius, find the height with the Pythagorean theorem first.",
      },
      {
        question: "How does a cone compare to a cylinder and sphere?",
        answer: "For the same radius and height, a cone holds one-third of the matching cylinder's volume. A hemisphere, a cylinder, and a cone with equal radii and heights relate in a neat ratio that students often learn together. The shared factor of pi times the radius squared appears in each, with the cone scaled by one-third, making the trio a memorable set of solid-geometry results.",
      },
      {
        question: "Can I use this for a conical pile of material?",
        answer: "Yes. A heap of sand, gravel, or grain settles into an approximate cone, so measuring the radius of its circular base and its peak height lets you estimate the volume with this calculator. The estimate assumes a reasonably regular cone shape. For rough stockpiles the result is an approximation, but it is often close enough for ordering materials or estimating quantities on site.",
      },
    ],
    relatedCalculators: ["cylinder-volume-calculator", "sphere-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "trapezoid-area",
    slug: "trapezoid-area-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Trapezoid Area Calculator",
    shortDescription: "Find the area of a trapezoid from its bases and height.",
    seoTitle: "Trapezoid Area Calculator — Area of a Trapezoid",
    metaDescription:
      "Free trapezoid area calculator. Enter the two parallel bases and the height to find the area of a trapezoid using the average-of-bases formula.",
    primaryKeyword: "trapezoid area calculator",
    secondaryKeywords: ["area of a trapezoid", "trapezium area calculator", "trapezoid formula"],
    fields: [
      { id: "base1", label: "Base 1 (a)", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.01 },
      { id: "base2", label: "Base 2 (b)", type: "number", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height (h)", type: "number", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "area = (base₁ + base₂) ÷ 2 × height",
    formulaExplanation:
      "The area of a trapezoid is the average of the two parallel sides multiplied by the distance between them. Averaging the bases works because the shape widens or narrows evenly from one parallel side to the other, so the mean of the two lengths represents its typical width. Multiplying that average width by the perpendicular height gives the enclosed area, exactly as multiplying width by height gives the area of the equivalent rectangle.",
    explanation:
      "A trapezoid, called a trapezium in British English, is a four-sided shape with exactly one pair of parallel sides, known as the bases. Roof cross-sections, table tops, bridge supports, and many plots of land take this form, so calculating a trapezoid's area is a common practical need. This trapezoid area calculator takes three inputs, the lengths of the two parallel bases and the perpendicular height between them, and returns the area, the flat space the shape covers. The formula averages the two bases and multiplies by the height: you add the two parallel sides, divide by two to get their average width, then multiply by the distance separating them. This is the same as finding the area of a rectangle whose width equals the average of the two bases. For a trapezoid with bases of 4 and 6 units and a height of 3 units, the average base is 5 units, so the area is 5 times 3, which is 15 square units. Students learning geometry, builders estimating roofing or decking, and surveyors measuring irregular plots all rely on a trapezoid area calculator to handle the averaging step cleanly and avoid using the slanted sides by mistake.",
    example: {
      inputs: { base1: 4, base2: 6, height: 3 },
      explanation: "Area = (4 + 6) ÷ 2 × 3 = 5 × 3 = 15 square units.",
    },
    faqs: [
      {
        question: "What is the formula for the area of a trapezoid?",
        answer: "The area of a trapezoid is the sum of the two parallel bases divided by two, multiplied by the height. Written out, it is one half times base one plus base two, times the height. The height must be the perpendicular distance between the parallel sides. For bases of 4 and 6 with a height of 3, the area is one half times 10 times 3, which equals 15 square units.",
      },
      {
        question: "Which sides are the bases?",
        answer: "The bases are the two sides that are parallel to each other. A trapezoid has exactly one pair of parallel sides, and those two are the bases used in the formula. The other two sides, called the legs, can be slanted and of any length, and they are not used to calculate the area. Identifying the parallel pair correctly is the key step before applying the formula.",
      },
      {
        question: "What height should I use?",
        answer: "Use the perpendicular height, the shortest straight-line distance between the two parallel bases, measured at a right angle to them. Do not use the length of the slanted legs, which is longer and would overstate the area. If a trapezoid is drawn tilted, the height is still measured straight across between the parallel sides, not along the sloping edge. The calculator assumes you enter this perpendicular height.",
      },
      {
        question: "Why does averaging the bases work?",
        answer: "Because a trapezoid changes width evenly from one base to the other, the average of the two base lengths represents its effective width across the middle. Multiplying that average width by the height gives the same area as an equal-height rectangle of that average width. You can also picture two copies of the trapezoid joined to form a parallelogram, whose area is the base sum times height, then halved.",
      },
      {
        question: "Does the order of the two bases matter?",
        answer: "No. Because the formula adds the two bases together before dividing, it does not matter which one you label as base one and which as base two. Addition gives the same total either way, so the area comes out identical regardless of the order you enter them. Just make sure both values are the parallel sides and that the height is the perpendicular distance between them.",
      },
    ],
    relatedCalculators: ["rectangle-area-calculator", "triangle-area-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
  {
    id: "harmonic-mean",
    slug: "harmonic-mean-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Harmonic Mean Calculator",
    shortDescription: "Find the harmonic mean of three numbers.",
    seoTitle: "Harmonic Mean Calculator — Average of Rates",
    metaDescription:
      "Free harmonic mean calculator. Enter three numbers to find their harmonic mean, the average best suited to rates, speeds, and ratios.",
    primaryKeyword: "harmonic mean calculator",
    secondaryKeywords: ["harmonic average calculator", "average of rates", "harmonic mean formula"],
    fields: [
      { id: "number1", label: "Number 1", type: "number", placeholder: "1", required: true, span: 1, step: 0.01 },
      { id: "number2", label: "Number 2", type: "number", placeholder: "2", required: true, span: 1, step: 0.01 },
      { id: "number3", label: "Number 3", type: "number", placeholder: "4", required: true, span: 2, step: 0.01 },
    ],
    results: [
      { id: "harmonicMean", label: "Harmonic mean", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "harmonic mean = 3 ÷ (1⁄n₁ + 1⁄n₂ + 1⁄n₃)",
    formulaExplanation:
      "The harmonic mean is the number of values divided by the sum of their reciprocals. It is the reciprocal of the arithmetic mean of the reciprocals, which is why it gives more weight to smaller values and less to larger ones. This makes it the correct average for quantities defined as rates, such as speed or price per unit, because averaging the reciprocals correctly accounts for how those rates combine over a fixed distance or amount.",
    explanation:
      "The harmonic mean is a type of average that is especially suited to rates, speeds, and ratios, where the ordinary arithmetic mean would give a misleading answer. It is defined as the number of values divided by the sum of their reciprocals, which makes it always less than or equal to the arithmetic mean of the same numbers. This harmonic mean calculator takes three positive or negative non-zero numbers and returns their harmonic mean. The classic use is averaging speeds over equal distances: if you drive one leg at 30 and another at 60, your average speed for the round trip is the harmonic mean, not the simple average, because you spend more time at the slower speed. The harmonic mean also appears in finance for averaging price-to-earnings ratios, in physics for parallel resistances, and in statistics as part of the F-score. For the numbers 1, 2, and 4, the harmonic mean is 3 divided by the sum of 1, one-half, and one-quarter, which comes to about 1.714. Because dividing by zero is undefined, none of the values may be zero. Analysts, scientists, and students use a harmonic mean calculator whenever they need the right kind of average for rate-based data.",
    example: {
      inputs: { number1: 1, number2: 2, number3: 4 },
      explanation: "3 ÷ (1⁄1 + 1⁄2 + 1⁄4) = 3 ÷ 1.75 ≈ 1.714.",
    },
    faqs: [
      {
        question: "What is the harmonic mean used for?",
        answer: "The harmonic mean is the correct average for rates and ratios measured over a fixed quantity, such as average speed across equal distances, average price-to-earnings ratios, or combined rates of work. It gives more weight to smaller values, which reflects how rates actually combine. Using an arithmetic mean in these situations overstates the true average, so the harmonic mean provides the mathematically appropriate result in rate-based problems.",
      },
      {
        question: "How does it differ from the arithmetic mean?",
        answer: "The arithmetic mean adds the values and divides by how many there are, treating each equally. The harmonic mean instead averages the reciprocals and inverts the result, which gives smaller numbers more influence. For any set of positive numbers that are not all identical, the harmonic mean is always smaller than the arithmetic mean. The two agree only when every value in the set is exactly the same.",
      },
      {
        question: "Why can't any value be zero?",
        answer: "The formula relies on taking the reciprocal of each number, and the reciprocal of zero is undefined because you cannot divide one by zero. If any input were zero, its reciprocal would be infinite and the harmonic mean would collapse. For this reason the calculator returns no result when any of the three values is zero. All inputs must be non-zero for the harmonic mean to be defined.",
      },
      {
        question: "Can I use it for average speed?",
        answer: "Yes, and this is its most famous application. When you travel equal distances at different speeds, your overall average speed is the harmonic mean of those speeds, not the arithmetic mean. This is because you spend more time covering the distance at the slower speed, so it should count more heavily. Enter the individual speeds and the calculator returns the true average speed for equal-distance legs.",
      },
      {
        question: "Is the harmonic mean always smaller than the average?",
        answer: "For a set of positive numbers, the harmonic mean is always less than or equal to the geometric mean, which in turn is less than or equal to the arithmetic mean. Equality occurs only when all the numbers are identical. This ordering, known as the mean inequality, means the harmonic mean sits at the low end and is pulled strongly toward the smallest values in the set.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "square-root-calculator", "arithmetic-sequence-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard statistics",
  },
  {
    id: "exponential-growth",
    slug: "exponential-growth-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Exponential Growth Calculator",
    shortDescription: "Project a value growing at a fixed percentage rate.",
    seoTitle: "Exponential Growth Calculator — Compound Growth",
    metaDescription:
      "Free exponential growth calculator. Enter a starting value, growth rate, and number of periods to project the final value and total growth.",
    primaryKeyword: "exponential growth calculator",
    secondaryKeywords: ["compound growth calculator", "growth rate calculator", "exponential increase"],
    fields: [
      { id: "initialValue", label: "Initial value", type: "number", placeholder: "1000", required: true, span: 1, step: 0.01 },
      { id: "growthRatePercent", label: "Growth rate (% per period)", type: "number", placeholder: "5", required: true, span: 1, step: 0.01 },
      { id: "periods", label: "Number of periods", type: "number", placeholder: "3", required: true, span: 2, step: 1 },
    ],
    results: [
      { id: "finalValue", label: "Final value", format: "number", decimals: 4, isPrimary: true },
      { id: "totalGrowth", label: "Total growth", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "final = initial × (1 + rate ÷ 100)^periods;  growth = final − initial",
    formulaExplanation:
      "Exponential growth multiplies the current value by the same growth factor each period, so after many periods the starting value is multiplied by that factor raised to the number of periods. Converting the percentage rate to a decimal and adding one gives the per-period factor, and raising it to the power of the number of periods compounds the growth. Subtracting the original value from the final value isolates the total amount gained across all periods combined.",
    explanation:
      "Exponential growth describes any quantity that increases by the same percentage in each period, so that the amount added grows larger over time as it is applied to an ever-bigger base. It models compound interest, population growth, viral spread, and many natural and financial processes. This exponential growth calculator takes a starting value, a growth rate expressed as a percentage per period, and the number of periods, then returns the final value and the total growth accumulated. The core mechanism is compounding: each period the value is multiplied by one plus the rate, so over several periods the starting figure is multiplied by that factor raised to the number of periods. This produces the characteristic accelerating curve, where growth is slow at first and then rapid, because each increase is calculated on a larger amount than the last. For a starting value of 1000 growing at 5 percent for 3 periods, the final value is about 1157.63 and the total growth is about 157.63. Investors projecting returns, biologists modelling populations, and analysts forecasting trends all use an exponential growth calculator to see where a steadily compounding quantity ends up after a given number of periods.",
    example: {
      inputs: { initialValue: 1000, growthRatePercent: 5, periods: 3 },
      explanation: "1000 × (1 + 0.05)³ ≈ 1157.63, a total growth of about 157.63.",
    },
    faqs: [
      {
        question: "What is exponential growth?",
        answer: "Exponential growth is increase by a constant percentage each period, rather than a fixed amount. Because the percentage is applied to a base that keeps getting bigger, the actual increase grows every period, producing an accelerating curve. Compound interest, unchecked population growth, and viral spread all follow this pattern. It contrasts with linear growth, where the same fixed quantity is added each period regardless of the current size.",
      },
      {
        question: "How is this different from simple linear growth?",
        answer: "Linear growth adds the same fixed amount every period, so its graph is a straight line. Exponential growth adds a fixed percentage, which translates to a larger and larger absolute amount as the base grows, curving upward ever more steeply. Over a few periods the two can look similar, but over many periods exponential growth vastly outpaces linear growth, which is the power of compounding at work.",
      },
      {
        question: "What counts as a period?",
        answer: "A period is whatever time unit your growth rate refers to: a year, a month, a day, or any interval. The rate and the number of periods must use the same unit. If your rate is 5 percent per year, then the number of periods is a count of years. Matching the rate's time frame to the period count is essential for the projection to be accurate.",
      },
      {
        question: "Can the growth rate be negative?",
        answer: "Yes. A negative growth rate represents exponential decay, where the value shrinks by a fixed percentage each period rather than growing. Entering a rate of negative ten percent, for example, models something losing a tenth of its value each period, such as depreciation or radioactive decay. The same formula applies, and the calculator returns a final value below the starting amount with a negative total growth.",
      },
      {
        question: "Is this the same as compound interest?",
        answer: "The underlying mathematics is identical. Compound interest is a specific application of exponential growth where money grows by a fixed interest rate each period. This calculator uses the same compounding formula, so you can apply it to savings or investments by entering the principal as the initial value, the interest rate as the growth rate, and the number of compounding periods. For detailed finance work, a dedicated compound interest tool may add extra options.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "arithmetic-sequence-calculator", "percentage-of-total-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
  },
  {
    id: "percentage-of-total",
    slug: "percentage-of-total-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage of Total Calculator",
    shortDescription: "Find what percentage one number is of another.",
    seoTitle: "Percentage of Total Calculator — Part of Whole",
    metaDescription:
      "Free percentage of total calculator. Enter a part and a whole to find what percentage the part is of the total, shown instantly.",
    primaryKeyword: "percentage of total calculator",
    secondaryKeywords: ["part of whole percentage", "what percentage is", "percent of total calculator"],
    fields: [
      { id: "part", label: "Part", type: "number", placeholder: "25", required: true, span: 1, step: 0.01 },
      { id: "whole", label: "Whole (total)", type: "number", placeholder: "200", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "percentage", label: "Percentage of total", format: "percentage", decimals: 4, isPrimary: true },
    ],
    formula: "percentage = part ÷ whole × 100",
    formulaExplanation:
      "To express a part as a percentage of a whole, you divide the part by the whole to get its fraction of the total, then multiply by one hundred to convert that fraction into a percentage. Dividing establishes what share the part represents as a decimal between zero and one, and multiplying by one hundred rescales it onto the familiar zero-to-one-hundred percentage scale, where the whole itself always corresponds to exactly one hundred percent.",
    explanation:
      "Finding what percentage one number is of another is one of the most common everyday calculations, used for test scores, discounts, budgets, survey results, and progress tracking. A percentage expresses a part as a share of a whole on a scale where the whole equals one hundred. This percentage of total calculator takes two numbers, the part and the whole, and returns what percentage the part represents of that total. The method is simple: divide the part by the whole to find its fraction of the total, then multiply by one hundred to turn that fraction into a percentage. For example, if 25 students out of a class of 200 chose a particular option, then 25 divided by 200 is 0.125, and multiplying by one hundred gives 12.5 percent. The same approach tells you what percentage of a budget an expense consumes, what portion of a goal you have reached, or what share of a total a category holds. Because dividing by zero is undefined, the whole must not be zero. Students, shoppers, analysts, and anyone comparing a piece to a total use a percentage of total calculator to convert raw part-and-whole figures into an easy-to-grasp percentage without manual arithmetic.",
    example: {
      inputs: { part: 25, whole: 200 },
      explanation: "25 ÷ 200 × 100 = 12.5%.",
    },
    faqs: [
      {
        question: "How do I find what percentage one number is of another?",
        answer: "Divide the part by the whole, then multiply the result by one hundred. The part is the smaller quantity you are examining and the whole is the total it belongs to. For instance, 25 out of 200 is 25 divided by 200, which is 0.125, and multiplying by a hundred gives 12.5 percent. The calculator performs both steps for you from the two numbers you enter.",
      },
      {
        question: "What is the difference between the part and the whole?",
        answer: "The whole is the complete total or reference amount, representing one hundred percent, while the part is the portion of that total you want to express as a percentage. In a class of 200 students, the class is the whole and any subgroup, such as 25 students, is the part. Identifying which figure is the total correctly is essential, because swapping them gives a very different answer.",
      },
      {
        question: "Can the percentage be more than 100?",
        answer: "Yes. If the part is larger than the whole, the percentage exceeds one hundred, which is perfectly valid. This happens when comparing a current figure to a smaller baseline, such as sales this year against a lower total last year. A value of 150 percent means the part is one and a half times the whole. The calculator handles parts larger than the whole without any problem.",
      },
      {
        question: "Why can't the whole be zero?",
        answer: "The calculation divides the part by the whole, and division by zero is mathematically undefined, so a total of zero has no meaningful percentage. Conceptually, if the whole is zero there is nothing for the part to be a share of. For this reason the calculator returns no result when the whole is zero. Make sure your total is a non-zero number before calculating.",
      },
      {
        question: "How is this used in real life?",
        answer: "This calculation appears everywhere: working out a test score as a percentage of the maximum marks, seeing what share of a budget a bill takes, tracking progress toward a savings goal, or reading survey results. Any time you have a piece and a total and want to know the piece's share, this is the calculation to use. It turns raw counts into comparable percentages that are easy to interpret.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "exponential-growth-calculator", "arithmetic-sequence-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
  },
  {
    id: "consecutive-integer-sum",
    slug: "consecutive-integer-sum-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Consecutive Integer Sum Calculator",
    shortDescription: "Sum all whole numbers from a start to an end.",
    seoTitle: "Consecutive Integer Sum Calculator — Sum of a Range",
    metaDescription:
      "Free consecutive integer sum calculator. Enter a start and end number to add every integer in the range and count how many there are.",
    primaryKeyword: "consecutive integer sum calculator",
    secondaryKeywords: ["sum of integers calculator", "sum of a range", "add consecutive numbers"],
    fields: [
      { id: "startNumber", label: "Start number", type: "number", placeholder: "1", required: true, span: 1, step: 1 },
      { id: "endNumber", label: "End number", type: "number", placeholder: "10", required: true, span: 1, step: 1 },
    ],
    results: [
      { id: "sum", label: "Sum", format: "number", decimals: 0, isPrimary: true },
      { id: "count", label: "Count of integers", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "sum = [end × (end + 1) ÷ 2] − [(start − 1) × start ÷ 2];  count = end − start + 1",
    formulaExplanation:
      "The sum of all integers from one up to any number n equals n times n plus one divided by two, a formula credited to Gauss. To sum a range that starts higher than one, you take the running total up to the end value and subtract the running total up to just before the start value. The difference leaves exactly the integers inside the range, and the count is simply the end minus the start plus one.",
    explanation:
      "Adding up a run of consecutive whole numbers, such as every integer from 1 to 100, is a classic arithmetic task with a famously elegant shortcut. Rather than adding each number one by one, you can use a closed-form formula that gives the total instantly. This consecutive integer sum calculator takes a start number and an end number, both integers, and returns the sum of every integer in that inclusive range along with how many numbers there are. It works by using the well-known result that the sum of all integers from 1 to any value n is n times n plus one, divided by two. To sum a range that does not begin at 1, the calculator computes the total up to the end value and subtracts the total up to just before the start, leaving exactly the numbers in between. For the range 1 to 10, the sum is 55 and the count is 10. The famous story attributes this trick to the young mathematician Gauss, who summed 1 to 100 in seconds by pairing numbers from both ends. Students, programmers, and puzzle-solvers use a consecutive integer sum calculator to total any range of whole numbers without tedious addition, provided the start is not greater than the end.",
    example: {
      inputs: { startNumber: 1, endNumber: 10 },
      explanation: "Sum = [10 × 11 ÷ 2] − [0 × 1 ÷ 2] = 55 − 0 = 55, across 10 integers.",
    },
    faqs: [
      {
        question: "How do you sum consecutive integers quickly?",
        answer: "Use the pairing shortcut: the sum of integers from 1 to n is n times n plus one, all divided by two. For a range that starts above 1, find the total up to the end and subtract the total up to just before the start. This avoids adding every number individually. For 1 to 10, the sum is 10 times 11 divided by 2, which is 55, computed instantly.",
      },
      {
        question: "Why must the start and end be integers?",
        answer: "This calculator sums whole numbers, so both the start and the end must be integers for the range to be well defined. The formula counts and adds each whole number from the start to the end inclusive, which only makes sense for integers. If you enter a decimal, the calculator returns no result. To add a sequence of decimals with a fixed step, an arithmetic series calculator is the right tool.",
      },
      {
        question: "What does the count tell me?",
        answer: "The count is how many integers lie in the range from the start to the end, inclusive of both endpoints. It equals the end minus the start plus one. For the range 1 to 10 the count is 10, and for 5 to 8 it is four. The plus one matters because both the first and last numbers are included, so a simple subtraction would undercount by one.",
      },
      {
        question: "Can the numbers be negative?",
        answer: "Yes. The formula works for negative integers too, as long as the start is not greater than the end. For example, the sum from negative 3 to 3 is zero, because the negative and positive terms cancel, and the count is seven. The calculator handles ranges that cross zero or sit entirely below it, using the same subtraction of running totals to get the correct sum.",
      },
      {
        question: "What happens if the start is greater than the end?",
        answer: "The range would be empty or run backwards, which the formula does not define here, so the calculator returns no result when the start exceeds the end. To sum a descending list, simply enter the smaller number as the start and the larger as the end, since addition gives the same total regardless of direction. Keeping the start less than or equal to the end ensures a valid answer.",
      },
    ],
    relatedCalculators: ["arithmetic-sequence-calculator", "percentage-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
  },
  {
    id: "golden-ratio",
    slug: "golden-ratio-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Golden Ratio Calculator",
    shortDescription: "Split a length into the golden ratio proportions.",
    seoTitle: "Golden Ratio Calculator — Divide by Phi",
    metaDescription:
      "Free golden ratio calculator. Enter a total length to split it into the longer and shorter golden ratio segments using phi, about 1.618.",
    primaryKeyword: "golden ratio calculator",
    secondaryKeywords: ["phi calculator", "golden section calculator", "divine proportion calculator"],
    fields: [
      { id: "totalLength", label: "Total length", type: "number", placeholder: "100", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "longerSegment", label: "Longer segment", format: "number", decimals: 4, isPrimary: true },
      { id: "shorterSegment", label: "Shorter segment", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "longer = total ÷ φ (φ ≈ 1.6180339887);  shorter = total − longer",
    formulaExplanation:
      "The golden ratio, phi, is approximately 1.618, defined so that the whole length divided by the longer part equals the longer part divided by the shorter part. To split a total in this proportion, you divide the total by phi to find the longer segment, and the remainder is the shorter segment. This unique ratio is the only division where the relationship between the whole and its larger piece mirrors that between the larger and smaller pieces exactly.",
    explanation:
      "The golden ratio, denoted by the Greek letter phi and roughly equal to 1.618, is a special proportion that has fascinated mathematicians, artists, and architects for over two thousand years. A line is divided in the golden ratio when the whole length relates to the longer part exactly as the longer part relates to the shorter part. This golden ratio calculator takes a total length and splits it into the longer and shorter segments that satisfy this proportion. To do so it divides the total by phi to find the longer segment, and the remainder becomes the shorter segment. The ratio appears throughout nature, in the spiral of shells, the arrangement of leaves and seeds, and the proportions of the human body, and it has been used deliberately in art, design, and architecture from the Parthenon to modern logos because many people find its proportions pleasing. For a total length of 100 units, the longer segment is about 61.80 units and the shorter is about 38.20 units. Designers laying out pages, photographers framing shots, and students exploring mathematics use a golden ratio calculator to divide a length into these celebrated proportions instantly, without needing to remember the exact value of phi.",
    example: {
      inputs: { totalLength: 100 },
      explanation: "Longer = 100 ÷ 1.618 ≈ 61.80; shorter = 100 − 61.80 ≈ 38.20.",
    },
    faqs: [
      {
        question: "What is the golden ratio?",
        answer: "The golden ratio, written as the Greek letter phi, is approximately 1.618. It is the unique proportion in which the ratio of the whole to the larger part equals the ratio of the larger part to the smaller part. This self-similar relationship makes it mathematically special, and it appears repeatedly in geometry, the Fibonacci sequence, and patterns found throughout the natural world, which is why it has been studied since antiquity.",
      },
      {
        question: "How do I split a length in the golden ratio?",
        answer: "Divide the total length by phi, about 1.618, to find the longer of the two segments. Subtract that from the total to get the shorter segment. The two pieces then stand in the golden proportion to each other and to the whole. For a length of 100, the longer part is about 61.8 and the shorter about 38.2. The calculator performs this division and subtraction for you.",
      },
      {
        question: "Where does the golden ratio appear in nature?",
        answer: "The golden ratio and the closely related Fibonacci sequence show up in the spiral arrangement of sunflower seeds, pine cones, and nautilus shells, and in the branching of plants and leaves. These patterns often arise because they pack elements efficiently or allow steady growth. While some claims about its prevalence are exaggerated, genuine examples in phyllotaxis and spiral growth make it one of the most recognisable proportions in the natural world.",
      },
      {
        question: "Why is it used in design and art?",
        answer: "Many artists and designers use the golden ratio to divide space, size elements, and lay out compositions because its proportions are widely regarded as balanced and pleasing. It guides the placement of focal points, the sizing of columns, and the framing of images. From classical architecture to modern branding, dividing a canvas or page according to phi is a popular technique for achieving a composition that feels harmonious.",
      },
      {
        question: "Is the golden ratio the same as the rule of thirds?",
        answer: "They are related ideas but not identical. The rule of thirds divides a frame into equal thirds, placing subjects along those lines, and is a simpler approximation used in photography. The golden ratio divides a length at about 61.8 percent rather than exactly two-thirds, giving a slightly different, more precise proportion. Both aim to create balanced compositions, and the rule of thirds is often taught as an easy stand-in for the golden section.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "rectangle-area-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
  },
];
