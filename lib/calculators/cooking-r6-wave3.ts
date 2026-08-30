import type { CalculatorDefinition, FieldOption } from "../types";

const butterUnits: FieldOption[] = [
  { value: "stick", label: "Sticks (US)" },
  { value: "cup", label: "Cups" },
  { value: "tbsp", label: "Tablespoons" },
  { value: "tsp", label: "Teaspoons" },
  { value: "oz", label: "Ounces (oz)" },
  { value: "gram", label: "Grams (g)" },
];

const tempUnits: FieldOption[] = [
  { value: "C", label: "Celsius (°C)" },
  { value: "F", label: "Fahrenheit (°F)" },
  { value: "gas", label: "Gas mark" },
];

const yeastUnits: FieldOption[] = [
  { value: "fresh", label: "Fresh (cake) yeast" },
  { value: "active-dry", label: "Active dry yeast" },
  { value: "instant", label: "Instant yeast" },
];

export const cookingR6Calculators: CalculatorDefinition[] = [
  {
    id: "butter-converter",
    slug: "butter-converter-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Butter Converter Calculator",
    shortDescription: "Convert butter between sticks, cups, tablespoons, ounces and grams.",
    seoTitle: "Butter Converter Calculator — Sticks, Cups, Tablespoons, Grams",
    metaDescription:
      "Free butter converter calculator. Convert butter between US sticks, cups, tablespoons, teaspoons, ounces and grams using accurate standard weights.",
    primaryKeyword: "butter converter calculator",
    secondaryKeywords: ["butter sticks to grams", "butter cups to grams", "tablespoons of butter to grams"],
    fields: [
      { id: "amount", label: "Amount", type: "number", placeholder: "1", required: true, span: 2, min: 0, step: 0.01 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "stick", options: butterUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "gram", options: butterUnits },
    ],
    results: [{ id: "result", label: "Converted amount", format: "number", decimals: 2, isPrimary: true }],
    formula: "grams = amount × grams-per-unit; target = grams ÷ grams-per-target-unit",
    formulaExplanation:
      "Butter is sold and measured in a tangle of units — sticks, cups, tablespoons, ounces and grams — that all describe the same physical block. Each unit maps to a fixed weight: a US stick is 113 grams, a cup 227, a tablespoon 14.2, a teaspoon 4.73 and an ounce 28.35. The converter reduces your amount to grams by multiplying by its unit's weight, then divides by the target unit's weight. Pivoting through grams as the common base keeps every pairing exact and means only one factor per unit is needed rather than a rule for each combination.",
    explanation:
      "Butter is one of the most unit-confusing ingredients in the kitchen, and this butter converter calculator settles the confusion by translating any amount between US sticks, cups, tablespoons, teaspoons, ounces and grams. American recipes wrap butter in sticks, British and European recipes weigh it in grams, and older recipes scatter tablespoons and cups throughout, so cooks constantly need to move between them.\n\nGetting the conversion right matters because butter carries structure, moisture and richness in a recipe, and being off by half a stick can leave a cookie flat or a sauce split. A butter converter calculator removes the mental arithmetic and the risk of misremembering that a stick is not quite a quarter cup by volume but is a clean 113 grams by weight, which is the figure most professional bakers actually work from.\n\nThe conversion works because each unit corresponds to a fixed weight of butter: a US stick is 113 grams, a cup is 227 grams, a tablespoon is 14.2 grams, a teaspoon is 4.73 grams and an ounce is 28.35 grams. The tool reduces whatever you enter to grams and then scales out to the unit you want, so the answer stays exact in either direction. Home bakers following recipes from different countries, anyone weighing on a kitchen scale, and cooks halving or doubling a batch all rely on a butter converter calculator to keep quantities honest.",
    example: {
      inputs: { amount: 1, from: "stick", to: "gram" },
      explanation: "1 US stick of butter weighs exactly 113 g.",
    },
    faqs: [
      {
        question: "How many grams are in a stick of butter?",
        answer: "A standard US stick of butter weighs 113 grams, equal to a quarter pound or four ounces. It also equals half a cup or eight tablespoons. Most American recipes assume this size, so when a recipe calls for one stick you can weigh out 113 grams on a scale instead. Using the gram figure is the most reliable way to follow a US recipe with metric measuring tools.",
      },
      {
        question: "How much is a cup of butter?",
        answer: "One cup of butter weighs about 227 grams, which is two US sticks, half a pound, or sixteen tablespoons. Because butter is a solid packed into a volume measure, weighing it is far more accurate than pressing it into a measuring cup, where air gaps and soft spots skew the amount. Set the from-unit to cups and the to-unit to grams to get the exact weight for your recipe.",
      },
      {
        question: "Why convert butter by weight instead of volume?",
        answer: "Butter is a solid, so measuring it by volume in cups or tablespoons is imprecise — how firmly you pack it changes the amount, and softened butter measures differently from cold. Weighing in grams removes that variability entirely, which is why bakeries and precise recipes specify grams. This converter lets you turn any volume measure into grams so you can weigh the exact amount your recipe intends every time.",
      },
      {
        question: "Are US and European butter sticks the same?",
        answer: "Not always. The US stick is 113 grams and is long and thin, while butter in many European countries is sold in 250-gram blocks with no stick markings at all. Some regions also use shorter, fatter sticks. Because of this variation, converting by weight in grams is the safest approach — a gram is a gram everywhere, so weighing sidesteps any difference in how sticks are shaped or portioned.",
      },
      {
        question: "How many tablespoons are in a stick of butter?",
        answer: "A US stick holds eight tablespoons, and each tablespoon of butter weighs about 14.2 grams. Many stick wrappers are printed with tablespoon markings so you can slice off what you need. If your butter has no markings, weigh 14.2 grams per tablespoon instead, or use this converter to translate the tablespoons a recipe asks for into grams or into a fraction of a stick or cup.",
      },
    ],
    relatedCalculators: ["baking-conversion-calculator", "cooking-measurement-converter", "recipe-scaler-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "USDA standard butter weights",
  },
  {
    id: "oven-temperature",
    slug: "oven-temperature-converter",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Oven Temperature Converter",
    shortDescription: "Convert oven temperatures between Celsius, Fahrenheit and gas mark.",
    seoTitle: "Oven Temperature Converter — Celsius, Fahrenheit, Gas Mark",
    metaDescription:
      "Free oven temperature converter. Convert between Celsius, Fahrenheit and UK gas mark for any recipe, with the gas-mark conversion clearly flagged as approximate.",
    primaryKeyword: "oven temperature converter",
    secondaryKeywords: ["celsius to fahrenheit oven", "gas mark to celsius", "fahrenheit to gas mark"],
    fields: [
      { id: "value", label: "Temperature", type: "number", placeholder: "180", required: true, span: 2, step: 1 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "C", options: tempUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "F", options: tempUnits },
    ],
    results: [{ id: "result", label: "Converted temperature", format: "number", decimals: 0, isPrimary: true }],
    formula: "°F = °C × 9/5 + 32; °C = (°F − 32) × 5/9; gas ≈ round((°F − 250) / 25)",
    formulaExplanation:
      "Celsius and Fahrenheit are exact linear scales: multiplying Celsius by nine-fifths and adding thirty-two gives Fahrenheit, and reversing that recovers Celsius. Gas mark is different — it is a coarse dial where roughly every 25 Fahrenheit degrees is one mark, anchored so that gas mark 0 sits near 250°F. The converter first reduces any input to Fahrenheit, then applies the target formula, rounding for gas mark because the scale is stepped rather than continuous. That is why gas-mark results are approximate and pair best with a real oven thermometer.",
    explanation:
      "Recipes travel across borders, and their oven temperatures rarely arrive in the units your oven uses. This oven temperature converter moves any setting between Celsius, Fahrenheit and the UK gas mark scale so you can follow a recipe from anywhere without a mistranslation that burns or undercooks your food.\n\nThe stakes are real because oven temperature governs how food browns, rises and sets. A cake baked forty degrees Fahrenheit too hot can dome and crack; bread proved and baked too cool stays pale and dense. Celsius-to-Fahrenheit conversions are exact, but gas mark is a coarser scale, so this tool flags gas-mark results as approximate and encourages you to lean on an oven thermometer for anything sensitive. Knowing that gas mark 4 is roughly 180°C or 350°F — the classic all-purpose baking temperature — is the kind of anchor this converter makes instant.\n\nThe conversions work because Celsius and Fahrenheit are linear scales related by the formula °F = °C × 9/5 + 32, which the tool inverts to go the other way. Gas mark, by contrast, steps in intervals of about 25°F starting near 250°F for gas mark 1, so the converter approximates it by rounding to the nearest mark. Home cooks with a Fahrenheit oven following a metric recipe, bakers decoding a vintage gas-mark cookbook, and anyone cooking across measurement systems reach for an oven temperature converter to set the dial with confidence.",
    example: {
      inputs: { value: 180, from: "C", to: "F" },
      explanation: "180 × 9/5 + 32 = 356°F, commonly rounded to 350°F (about gas mark 4).",
    },
    faqs: [
      {
        question: "How do I convert Celsius to Fahrenheit for an oven?",
        answer: "Multiply the Celsius figure by nine-fifths, or 1.8, and then add thirty-two. So 180°C becomes 356°F, which recipes usually round to 350°F, and 200°C becomes 392°F, rounded to 400°F. This linear formula is exact, so the only approximation is the rounding cooks apply to reach a tidy oven-dial number. The converter does the arithmetic instantly in either direction so you never have to guess.",
      },
      {
        question: "Why is the gas mark conversion approximate?",
        answer: "Gas mark is a stepped scale rather than a continuous one, where each mark spans roughly 25 Fahrenheit degrees and gas mark 1 sits near 275°F. Because a single mark covers a small range of real temperatures, converting an exact Celsius or Fahrenheit value to a gas mark means rounding to the nearest step. That is why the tool labels gas-mark results as approximate and why an oven thermometer is worth using for precise baking.",
      },
      {
        question: "What is gas mark 4 in Celsius and Fahrenheit?",
        answer: "Gas mark 4 is about 180°C or 350°F, the classic moderate oven temperature used for a huge range of cakes, biscuits and roasts. It is the setting most general-purpose recipes assume when they simply say a moderate oven. Higher marks run hotter — gas mark 6 is roughly 200°C — and lower marks cooler, with each step changing the temperature by about 25°F or 15°C.",
      },
      {
        question: "Should I adjust the temperature for a fan oven?",
        answer: "Yes. Fan or convection ovens circulate hot air and cook more efficiently, so a common rule is to lower the temperature by about 20°C, or roughly 25 to 40°F, compared with a conventional recipe, or to shorten the time instead. This converter handles the unit change but not the fan adjustment, so make that reduction yourself after converting, then watch the food and use a thermometer to confirm.",
      },
      {
        question: "How accurate are home oven thermostats?",
        answer: "Many home ovens run 10 to 30 degrees Fahrenheit hotter or cooler than the dial claims, and they can have hot spots that bake unevenly. Because of this, treat any converted figure as a target rather than a guarantee, especially for delicate baking. An inexpensive oven thermometer placed inside lets you see the true temperature and calibrate your dial, which matters far more than the small rounding in a unit conversion.",
      },
    ],
    relatedCalculators: ["cooking-time-calculator", "meat-roasting-time-calculator", "baking-conversion-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard temperature scale definitions",
  },
  {
    id: "yeast-converter",
    slug: "yeast-converter-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Yeast Converter Calculator",
    shortDescription: "Convert between fresh, active dry and instant yeast by weight.",
    seoTitle: "Yeast Converter Calculator — Fresh, Active Dry, Instant Yeast",
    metaDescription:
      "Free yeast converter calculator. Convert between fresh, active dry and instant yeast by weight using standard baking equivalence factors for reliable rises.",
    primaryKeyword: "yeast converter calculator",
    secondaryKeywords: ["fresh to instant yeast", "active dry to instant yeast", "yeast substitution calculator"],
    fields: [
      { id: "amount", label: "Amount", type: "number", unit: "g", placeholder: "10", required: true, span: 2, min: 0, step: 0.1 },
      { id: "from", label: "From", type: "select", required: true, span: 1, defaultValue: "fresh", options: yeastUnits },
      { id: "to", label: "To", type: "select", required: true, span: 1, defaultValue: "instant", options: yeastUnits },
    ],
    results: [{ id: "result", label: "Equivalent amount", format: "number", decimals: 2, unit: "g", isPrimary: true }],
    formula: "fresh-equivalent = amount ÷ factor(from); result = fresh-equivalent × factor(to)",
    formulaExplanation:
      "The three common yeasts differ in how much live cell mass they pack per gram, so equal weights are not equally powerful. Relative to fresh yeast at a factor of 1, active dry sits near 0.4 and instant near 0.33, meaning you need far less of the dry forms. The converter first turns your amount into its fresh-yeast equivalent by dividing by the source factor, then multiplies by the target factor to reach the matching weight of the yeast you want to use. Pivoting through the fresh baseline keeps every pairing consistent.",
    explanation:
      "Bread recipes call for fresh, active dry or instant yeast almost interchangeably, but they are not interchangeable gram for gram, and this yeast converter calculator translates any amount from one type to another so your dough rises exactly as intended. Swap the types blindly and you can end up with a sluggish, dense loaf or an over-proofed one that collapses.\n\nThe reason a conversion is needed is that the three yeasts contain different amounts of active, living cells by weight. Fresh yeast, sold as a moist cake, is mostly water and the least concentrated. Active dry and instant yeasts are dehydrated and far more potent, so a recipe written for one needs proportionally less or more when you reach for another. A yeast converter calculator captures those ratios so you can use whatever is in your fridge or cupboard with confidence.\n\nThe tool works by pivoting through a fresh-yeast baseline. Taking fresh yeast as a factor of 1, active dry is about 0.4 and instant about 0.33 of the fresh weight for the same leavening power. To convert, the calculator divides your amount by the source type's factor to find the equivalent weight of fresh yeast, then multiplies by the target type's factor to land on the amount you actually need. Home bakers, sourdough and enriched-dough enthusiasts, and anyone substituting the yeast they have for the yeast a recipe names all rely on a yeast converter calculator to keep the rise predictable.",
    example: {
      inputs: { amount: 10, from: "fresh", to: "instant" },
      explanation: "10 g fresh yeast × 0.33 ≈ 3.3 g instant yeast for the same rise.",
    },
    faqs: [
      {
        question: "How do I convert fresh yeast to instant yeast?",
        answer: "Instant yeast is far more concentrated than fresh, so you use much less. Multiplying a fresh-yeast weight by about 0.33 gives the instant equivalent, meaning 10 grams of fresh yeast becomes roughly 3.3 grams of instant. The converter handles this automatically. As a rough rule of thumb, instant yeast is about one-third the weight of the fresh yeast it replaces, so always scale down when switching to a dry form.",
      },
      {
        question: "What is the difference between active dry and instant yeast?",
        answer: "Both are dehydrated, but instant yeast has smaller granules and a higher proportion of live cells, so it works faster and can be mixed straight into the flour. Active dry yeast is slightly less concentrated and is traditionally dissolved in warm liquid first to rehydrate. In weight terms, active dry sits near a factor of 0.4 against fresh yeast and instant near 0.33, which is why the converter treats them separately.",
      },
      {
        question: "Do I need to change the liquid when swapping fresh for dry yeast?",
        answer: "Fresh yeast contains a lot of water, while dry yeasts are almost moisture-free, so switching from fresh to a dry form removes a small amount of liquid from the dough. For most recipes the difference is minor and can be ignored, but in very precise or high-hydration doughs you may add a teaspoon or two of water to compensate. Focus first on getting the yeast weight right, which matters far more.",
      },
      {
        question: "Can I substitute instant yeast for active dry directly?",
        answer: "Yes, and this converter gives the exact amounts. Because instant is a little more potent than active dry, you use slightly less of it. You can usually skip the proofing step with instant yeast and add it straight to the dry ingredients, whereas active dry benefits from being dissolved in warm liquid first. Converting by weight keeps the leavening power matched even though the handling differs.",
      },
      {
        question: "Does converting yeast change the rising time?",
        answer: "Matching the weight with this converter keeps the leavening power roughly equal, so rise times stay similar, but the yeast type still influences speed. Instant yeast tends to start fastest, active dry a touch slower, and fresh yeast somewhere in between depending on freshness. Temperature, dough richness and salt affect timing far more than the yeast type, so judge the rise by how much the dough has grown rather than the clock alone.",
      },
    ],
    relatedCalculators: ["baking-conversion-calculator", "dough-hydration-calculator", "pizza-dough-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard baking yeast equivalence",
  },
  {
    id: "coffee-to-water-ratio",
    slug: "coffee-to-water-ratio-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Coffee-to-Water Ratio Calculator",
    shortDescription: "Find the coffee dose for your water from a brew ratio.",
    seoTitle: "Coffee-to-Water Ratio Calculator — Grams of Coffee per Brew",
    metaDescription:
      "Free coffee-to-water ratio calculator. Enter your water in grams and pick a brew ratio to get the exact grams of coffee for a balanced, repeatable cup.",
    primaryKeyword: "coffee to water ratio calculator",
    secondaryKeywords: ["coffee ratio calculator", "grams of coffee per cup", "brew ratio calculator"],
    fields: [
      { id: "waterGrams", label: "Water", type: "number", unit: "g", placeholder: "500", required: true, span: 2, min: 0, step: 1 },
      {
        id: "ratio",
        label: "Brew ratio (1 : N)",
        type: "select",
        required: true,
        span: 2,
        defaultValue: "16",
        options: [
          { value: "15", label: "1:15 — stronger" },
          { value: "16", label: "1:16 — balanced (recommended)" },
          { value: "17", label: "1:17 — lighter" },
          { value: "18", label: "1:18 — mild" },
        ],
      },
    ],
    results: [{ id: "coffeeGrams", label: "Coffee needed", format: "number", decimals: 1, unit: "g", isPrimary: true }],
    formula: "coffee (g) = water (g) ÷ N, for a 1:N brew ratio",
    formulaExplanation:
      "A brew ratio expresses how many grams of water each gram of coffee should meet, written as 1:N. Because water dominates the weight of a cup, the coffee dose is simply the water weight divided by N. A 1:16 ratio with 500 grams of water calls for 31.25 grams of coffee. Lower N values pack more coffee into the same water for a stronger, more intense cup, while higher N values dilute it toward a lighter brew. Dividing by N keeps the strength constant no matter how much you scale the batch up or down.",
    explanation:
      "Great coffee is mostly about proportion, and this coffee-to-water ratio calculator turns your chosen brew ratio and water amount into the exact grams of coffee to grind. Specialty coffee is dialed in by weight rather than scoops, because a level scoop varies wildly between beans, and getting the ratio right is the single biggest lever on how your cup tastes.\n\nThe ratio matters because it sets the strength and extraction balance of the brew. Too little coffee for the water and the cup turns thin, sour and watery; too much and it reads heavy and bitter. A widely recommended starting point is 1:16 — one gram of coffee for every sixteen grams of water — which lands in the sweet spot for pour-over and drip. A coffee-to-water ratio calculator lets you hold that proportion steady whether you are brewing a single cup or a full carafe, so results stay repeatable.\n\nThe math is simple: for a 1:N ratio, the coffee weight equals the water weight divided by N. Pouring 500 grams of water at a 1:16 ratio needs 500 ÷ 16, or about 31 grams of coffee. Dropping to 1:15 makes it stronger, while moving to 1:17 or 1:18 makes it lighter, and the calculator recomputes instantly. Home brewers, pour-over and French-press fans, and anyone chasing a consistent cup use a coffee-to-water ratio calculator to weigh their dose instead of guessing with a spoon.",
    example: {
      inputs: { waterGrams: 500, ratio: "16" },
      explanation: "500 g water ÷ 16 = 31.25 g of coffee for a balanced 1:16 brew.",
    },
    faqs: [
      {
        question: "What is the best coffee-to-water ratio?",
        answer: "A ratio of 1:16 — one gram of coffee for every sixteen grams of water — is a widely recommended starting point that produces a balanced, well-extracted cup for pour-over and drip brewing. From there you can adjust to taste: move toward 1:15 for a stronger, more intense cup, or toward 1:17 and 1:18 for a lighter, milder brew. Dialing in your preferred ratio and then keeping it constant is the key to repeatable results.",
      },
      {
        question: "How many grams of coffee for 500 ml of water?",
        answer: "Since 500 millilitres of water weighs about 500 grams, a 1:16 ratio calls for roughly 31 grams of coffee, which the calculator gives as 31.25 grams. At a stronger 1:15 ratio you would use about 33 grams, and at a lighter 1:18 ratio about 28 grams. Weighing your water is the most accurate approach, but because a millilitre of water weighs a gram, you can treat the two figures as equal.",
      },
      {
        question: "Why weigh coffee instead of using scoops?",
        answer: "A scoop measures volume, and the weight it holds changes with the bean's roast level, grind size and how the grounds settle, so two level scoops can differ by several grams. That variation shifts your ratio and makes the cup inconsistent from day to day. Weighing the coffee in grams on a scale fixes the dose precisely, which is why every specialty brewing guide and barista works by weight rather than by scoop.",
      },
      {
        question: "Does grind size change the ratio I should use?",
        answer: "No — the ratio sets how much coffee meets the water, while grind size controls how fast that coffee extracts. You keep the same ratio and adjust grind to fix the taste: grind finer if the cup is weak or sour, coarser if it is bitter or harsh. Ratio and grind are separate dials, so use this calculator to lock the dose, then tune grind and brew time around it.",
      },
      {
        question: "How do I scale the recipe for more cups?",
        answer: "Because the ratio is a proportion, scaling is straightforward: just enter the total water you want and the calculator returns the matching coffee dose at your chosen ratio. Doubling the water doubles the coffee, so a 1:16 brew that used 31 grams for 500 grams of water needs 62 grams for a litre. Keeping the ratio fixed means a big batch tastes the same as a single cup.",
      },
    ],
    relatedCalculators: ["unit-price-calculator", "recipe-scaler-calculator", "cooking-measurement-converter"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Specialty Coffee Association brew guidance",
  },
  {
    id: "recipe-servings",
    slug: "recipe-servings-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Recipe Servings Calculator",
    shortDescription: "Rescale an ingredient for a new number of servings.",
    seoTitle: "Recipe Servings Calculator — Adjust Ingredients by Servings",
    metaDescription:
      "Free recipe servings calculator. Enter original and desired servings plus an ingredient amount to get the scaled quantity and the exact serving multiplier.",
    primaryKeyword: "recipe servings calculator",
    secondaryKeywords: ["adjust recipe servings", "servings scaling calculator", "resize recipe by servings"],
    fields: [
      { id: "originalServings", label: "Original servings", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
      { id: "desiredServings", label: "Desired servings", type: "number", placeholder: "6", required: true, span: 1, min: 0, step: 1 },
      { id: "ingredientAmount", label: "Ingredient amount", type: "number", placeholder: "2", required: false, span: 2, min: 0, step: 0.01, helpText: "Optional — enter one quantity to see it rescaled." },
    ],
    results: [
      { id: "scaledAmount", label: "Scaled ingredient amount", format: "number", decimals: 2, isPrimary: true },
      { id: "scaleFactor", label: "Serving multiplier", format: "number", decimals: 3, unit: "×", isPrimary: false },
    ],
    formula: "multiplier = desired ÷ original; scaled amount = ingredient × multiplier",
    formulaExplanation:
      "A recipe is a fixed set of proportions tied to a serving count. Dividing the desired servings by the original servings gives a single multiplier that preserves every ratio when applied across the board. Multiplying any ingredient by that multiplier gives the amount needed for the new yield. Because all quantities share the same multiplier, the balance of the dish stays intact whether you scale up for a crowd or down for one, which is why the method reduces to one clean division and one multiplication.",
    explanation:
      "Cooking for a different number of people than a recipe was written for is a daily reality, and this recipe servings calculator resizes any ingredient to your target serving count while showing the exact multiplier at work. You enter the servings the recipe makes, the servings you want, and an ingredient amount, and the tool returns the rescaled quantity along with the factor it used.\n\nThis is worth doing precisely because guessing at a scaled recipe is where dishes go wrong, especially with awkward jumps like taking a recipe for four up to seven, or halving one that serves five. A recipe servings calculator removes the arithmetic and keeps every ingredient in the same proportion, so the dish tastes the way it should at any size. Seeing the multiplier also makes it easy to apply the same factor to the rest of the ingredient list yourself.\n\nThe method is simple and reliable: the multiplier is the desired servings divided by the original servings, and each ingredient is multiplied by it. A recipe for four scaled to six gives a multiplier of 1.5, so every quantity grows by half. A few things need judgment rather than straight multiplication — salt, spices and leavening are best scaled a little conservatively, and cooking time changes with pan depth, not servings. Home cooks, hosts planning dinners, and meal-preppers batching food for the week all rely on a recipe servings calculator to hit the right amount every time.",
    example: {
      inputs: { originalServings: 4, desiredServings: 6, ingredientAmount: 2 },
      explanation: "6 ÷ 4 = 1.5× multiplier, so a 2-cup ingredient becomes 3 cups.",
    },
    faqs: [
      {
        question: "How does the serving multiplier work?",
        answer: "The multiplier is simply the desired servings divided by the original servings. Taking a recipe for four up to six gives 6 ÷ 4, or 1.5, meaning every ingredient grows by half again. Scaling down works the same way: from eight servings to two gives a multiplier of 0.25. Multiplying any quantity by this single number keeps all the ingredient ratios in proportion, which is exactly what preserves the balance of the dish.",
      },
      {
        question: "Do I have to enter an ingredient amount?",
        answer: "No, the ingredient field is optional. Leave it blank and the calculator still shows the serving multiplier, which you can then apply to your whole ingredient list yourself. Filling it in is handy when you want to check one specific quantity, such as how much rice a scaled batch needs. You can re-enter different amounts one at a time to convert each line of a recipe in turn without recalculating the multiplier.",
      },
      {
        question: "Should seasoning be scaled by the same multiplier?",
        answer: "Not always exactly. Bulk ingredients like flour, liquid and vegetables scale cleanly, but salt, strong spices, garlic and chilli can taste too intense when multiplied straight up. A good habit is to scale them to around three-quarters of the multiplier, then taste and adjust at the end. Leavening agents such as baking powder can also behave differently in larger batches, so treat those as a starting point rather than a fixed rule.",
      },
      {
        question: "Why doesn't cooking time change with servings?",
        answer: "Cooking time depends on how heat travels through the food, which is set by thickness and surface area, not by how many servings you make. A doubled batch spread across two pans cooks in about the original time, while the same batch piled into one deep dish takes longer. Because of this, judge doneness by colour, internal temperature or a clean skewer rather than assuming the time scales with the serving count.",
      },
      {
        question: "Can I scale a recipe down to one serving?",
        answer: "Yes. Set the original servings to what the recipe makes and the desired servings to one, and the calculator produces a fractional multiplier to shrink each ingredient. Very small quantities can be hard to measure, so use a kitchen scale and measuring spoons for tiny amounts. Ingredients that do not divide neatly, like a single egg, may need sensible rounding, with the surrounding quantities nudged to keep the dish balanced.",
      },
    ],
    relatedCalculators: ["recipe-scaler-calculator", "baking-conversion-calculator", "calories-per-serving-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard recipe scaling",
  },
  {
    id: "calories-per-serving",
    slug: "calories-per-serving-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Calories per Serving Calculator",
    shortDescription: "Divide a recipe's total calories by its servings.",
    seoTitle: "Calories per Serving Calculator — Recipe Calories Made Simple",
    metaDescription:
      "Free calories per serving calculator. Enter a recipe's total calories and number of servings to find the calories in each portion for accurate tracking.",
    primaryKeyword: "calories per serving calculator",
    secondaryKeywords: ["recipe calories per portion", "calories per portion calculator", "divide calories by servings"],
    fields: [
      { id: "totalCalories", label: "Total recipe calories", type: "number", unit: "kcal", placeholder: "1200", required: true, span: 1, min: 0, step: 1 },
      { id: "servings", label: "Number of servings", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [{ id: "caloriesPerServing", label: "Calories per serving", format: "number", decimals: 0, unit: "kcal", isPrimary: true }],
    formula: "calories per serving = total recipe calories ÷ number of servings",
    formulaExplanation:
      "A recipe's total energy is fixed once the ingredients are set, so the calories in one portion depend only on how many portions you divide it into. Summing the calories of every ingredient gives the total, and dividing by the number of servings distributes that total evenly across the portions. The result assumes each serving is roughly equal in size, which is why consistent portioning matters. Cutting the same dish into more servings lowers the calories per portion proportionally, and into fewer servings raises it.",
    explanation:
      "Tracking what you actually eat means knowing the calories in a portion, not just the whole pot, and this calories per serving calculator does that division for you. You add up the calories of everything that went into the recipe, enter that total and the number of servings, and the tool returns the calories in each portion.\n\nThis matters for anyone counting calories, managing weight, or logging meals in a food diary, because recipes almost always list ingredients for the full dish rather than per plate. Dividing by servings turns a recipe total into the per-portion figure that food logs and nutrition goals are built around. A calories per serving calculator makes that step instant and removes the risk of mis-dividing in your head, which is easy to do with a large batch.\n\nThe calculation is a straightforward division: total recipe calories divided by the number of servings gives the calories per serving. A 1,200-calorie casserole cut into four portions is 300 calories each; split into six it drops to 200. The accuracy of the result depends on two things — summing the ingredient calories correctly and portioning the dish evenly — so consistent serving sizes matter. Home cooks planning meals, people following a calorie target, and anyone building a personal recipe database rely on a calories per serving calculator to know exactly what a plate delivers.",
    example: {
      inputs: { totalCalories: 1200, servings: 4 },
      explanation: "1,200 kcal ÷ 4 servings = 300 kcal per serving.",
    },
    faqs: [
      {
        question: "How do I find a recipe's total calories?",
        answer: "Add up the calories of every ingredient in the recipe using nutrition labels or a food database, being sure to use the actual amount you put in — for example the calories in the specific weight of oil, flour or cheese used, not a generic serving. Sum those figures to get the recipe total, then enter it here with the number of servings. Accurate ingredient totals are the foundation of a reliable per-serving number.",
      },
      {
        question: "What counts as one serving?",
        answer: "A serving is however you choose to divide the finished dish, so the calorie result is only as consistent as your portioning. If you say a recipe makes four servings, each plate should be about a quarter of the total for the number to hold true. Using the same bowl, weighing portions on a scale, or dividing evenly by eye all help keep servings equal so the per-serving calories match reality.",
      },
      {
        question: "Why divide calories per serving instead of tracking the whole recipe?",
        answer: "Because you rarely eat the entire recipe at once. Food diaries, calorie goals and nutrition labels all work on a per-portion basis, so converting a recipe total into calories per serving lets you log exactly what is on your plate. It also makes it easy to compare dishes fairly and to see how splitting a recipe into more or fewer servings changes the energy in each portion you actually consume.",
      },
      {
        question: "Does this account for protein, carbs and fat?",
        answer: "No, this calculator focuses on total calories per serving. To split macronutrients the same way, add up the grams of protein, carbohydrate and fat across the whole recipe and divide each by the number of servings using the same method. The per-serving calorie figure is the most common starting point for tracking, and you can layer macro breakdowns on top once you have the portioning right.",
      },
      {
        question: "How can I lower the calories per serving?",
        answer: "You have two levers: reduce the recipe's total calories, or increase the number of servings. Cutting back on high-calorie ingredients like oil, butter, sugar and cheese lowers the total, while bulking the dish with vegetables lets you cut larger, more filling portions at fewer calories each. Serving smaller portions raises the serving count and drops the per-portion figure directly, though genuine calorie reduction comes from the ingredients.",
      },
    ],
    relatedCalculators: ["recipe-servings-calculator", "recipe-scaler-calculator", "unit-price-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard nutrition arithmetic",
  },
  {
    id: "dough-hydration",
    slug: "dough-hydration-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Dough Hydration Calculator",
    shortDescription: "Calculate baker's hydration from flour and water weights.",
    seoTitle: "Dough Hydration Calculator — Baker's Percentage",
    metaDescription:
      "Free dough hydration calculator. Enter flour and water in grams to get the baker's hydration percentage for bread, pizza and sourdough doughs.",
    primaryKeyword: "dough hydration calculator",
    secondaryKeywords: ["bakers percentage calculator", "bread hydration calculator", "sourdough hydration calculator"],
    fields: [
      { id: "flourGrams", label: "Flour", type: "number", unit: "g", placeholder: "500", required: true, span: 1, min: 0, step: 1 },
      { id: "waterGrams", label: "Water", type: "number", unit: "g", placeholder: "350", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [{ id: "hydration", label: "Hydration", format: "number", decimals: 1, unit: "%", isPrimary: true }],
    formula: "hydration % = (water ÷ flour) × 100",
    formulaExplanation:
      "Baker's percentage always measures every ingredient against the flour, which is set at 100%. Hydration is the water weight expressed as a percentage of the flour weight, so dividing water by flour and multiplying by 100 gives it directly. Five hundred grams of flour with 350 grams of water is 70% hydration. Because the figure is a ratio to flour rather than to total dough weight, it stays comparable across recipes of any size, letting bakers describe and reproduce a dough's texture regardless of batch.",
    explanation:
      "Hydration is the single number bakers use to describe how wet a dough is, and this dough hydration calculator computes it from the flour and water weights you enter. Expressed as a baker's percentage — water as a percentage of flour — hydration predicts how a dough will feel, handle and bake, which is why bread, pizza and sourdough recipes are so often discussed in terms of it.\n\nKnowing the hydration matters because it drives the crumb and the workability of the dough. Lower-hydration doughs around 60 percent are firm and easy to shape, giving a tighter crumb, while higher-hydration doughs at 75 percent and above are slack and sticky but reward you with the open, airy holes prized in artisan bread and Neapolitan pizza. A dough hydration calculator lets you put a precise figure on a recipe so you can compare it to others and adjust with intent rather than guesswork.\n\nThe calculation follows the baker's percentage convention, where flour is always 100 percent and every other ingredient is measured against it. Hydration is therefore the water weight divided by the flour weight, times 100. Five hundred grams of flour with 350 grams of water works out to 70 percent hydration. Because it is a ratio to flour, the percentage stays meaningful whether you mix a small test batch or a big production dough. Home bakers, sourdough keepers and pizza makers all rely on a dough hydration calculator to hit a target texture and reproduce their best loaves.",
    example: {
      inputs: { flourGrams: 500, waterGrams: 350 },
      explanation: "350 g water ÷ 500 g flour × 100 = 70% hydration.",
    },
    faqs: [
      {
        question: "What is baker's hydration?",
        answer: "Hydration is the amount of water in a dough expressed as a percentage of the flour weight, using the baker's percentage system where flour is always 100 percent. So a dough with 500 grams of flour and 350 grams of water is 70 percent hydration. It is a compact way to describe how wet a dough is, and because it is measured against flour rather than total weight, it stays comparable across recipes of any size.",
      },
      {
        question: "What hydration should I use for bread?",
        answer: "It depends on the style. Sandwich loaves and enriched doughs often sit around 60 to 65 percent for a soft, easy-to-shape dough, while rustic and artisan breads run higher, from 70 up to 80 percent or more, for an open, airy crumb. Higher hydration is stickier and harder to handle but yields those large, irregular holes. Start near 70 percent for a versatile loaf and adjust to the texture you prefer.",
      },
      {
        question: "Does higher hydration make better bread?",
        answer: "Not automatically — it depends on what you are baking and your skill with wet dough. Higher hydration promotes an open, moist crumb and a longer shelf life, which suits ciabatta and country loaves, but slack dough is trickier to shape and needs good technique. Lower hydration is more forgiving and gives a tighter, more uniform crumb ideal for sandwich bread. The best hydration is the one that matches your recipe and handling ability.",
      },
      {
        question: "How do I increase or decrease hydration?",
        answer: "Adjust the water relative to the flour. To raise hydration, add more water or reduce the flour; to lower it, do the reverse. Because the percentage is water divided by flour, small changes move the figure noticeably, so alter water in modest increments and re-check the result. Keep in mind that different flours absorb water differently — wholemeal and high-protein bread flours drink more — so the same percentage can feel wetter or drier depending on the flour.",
      },
      {
        question: "Should I count starter or other liquids in hydration?",
        answer: "For a precise figure, yes. A sourdough starter contains both flour and water, so bakers doing exact calculations add the starter's flour to the total flour and its water to the total water before working out hydration. Other wet ingredients like milk, oil or eggs also contribute moisture in enriched doughs. This calculator handles the core flour-and-water ratio; for starter-inclusive precision, fold those amounts into the flour and water figures you enter.",
      },
    ],
    relatedCalculators: ["pizza-dough-calculator", "baking-conversion-calculator", "yeast-converter-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Baker's percentage convention",
  },
  {
    id: "brine",
    slug: "brine-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Brine Calculator",
    shortDescription: "Find the salt weight for a brine at any concentration.",
    seoTitle: "Brine Calculator — Salt for Wet Brining and Fermenting",
    metaDescription:
      "Free brine calculator. Enter water in litres and a salt percentage to get the exact grams of salt for brining meat, poultry or fermenting vegetables.",
    primaryKeyword: "brine calculator",
    secondaryKeywords: ["salt brine calculator", "brining salt ratio", "wet brine calculator"],
    fields: [
      { id: "waterLiters", label: "Water", type: "number", unit: "L", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "saltPercent", label: "Salt concentration", type: "number", unit: "%", placeholder: "5", defaultValue: 5, required: true, span: 1, min: 0, step: 0.1 },
    ],
    results: [{ id: "saltGrams", label: "Salt needed", format: "number", decimals: 0, unit: "g", isPrimary: true }],
    formula: "salt (g) = water (L) × 1000 × salt% ÷ 100",
    formulaExplanation:
      "A brine's strength is the weight of salt relative to the weight of water. Since one litre of water weighs 1000 grams, multiplying the litres by 1000 gives the water weight in grams, and taking the chosen percentage of that yields the salt needed. Two litres of water at 5% needs 100 grams of salt. Because the figure scales directly with both water volume and percentage, you can size any batch and target any concentration while keeping the salt-to-water ratio, and therefore the effect on the food, consistent.",
    explanation:
      "Brining transforms how meat, poultry and vegetables turn out, and this brine calculator gives you the precise weight of salt to dissolve in your water for any concentration you choose. A wet brine is simply salted water, and the salt percentage is what determines whether you get a gentle seasoning brine, a stronger cure, or a fermentation brine for pickles and vegetables.\n\nGetting the salt right matters because concentration controls the outcome. A brine that is too weak barely seasons and does little to keep meat juicy, while one that is too strong can leave food unpleasantly salty or, in fermentation, halt the good bacteria you are relying on. A brine calculator removes the guesswork so you can hit a repeatable percentage every time — a 5 percent brine for poultry, for instance, or the classic range used for fermenting vegetables — instead of eyeballing handfuls of salt.\n\nThe math rests on the fact that one litre of water weighs 1,000 grams. The salt weight is the water in litres times 1,000, times the salt percentage divided by 100. So two litres of water at a 5 percent concentration needs 100 grams of salt. Because it scales directly with both the water and the percentage, you can size a brine for a single chicken breast or a large fermentation crock and keep the strength identical. Cooks brining a holiday turkey, barbecue enthusiasts, and home fermenters all rely on a brine calculator to salt their water accurately.",
    example: {
      inputs: { waterLiters: 2, saltPercent: 5 },
      explanation: "2 L × 1000 × 5 ÷ 100 = 100 g of salt for a 5% brine.",
    },
    faqs: [
      {
        question: "What salt concentration should I use for brining meat?",
        answer: "For a standard wet brine on poultry and pork, a concentration of about 5 to 8 percent salt by weight of water is common, seasoning the meat and helping it retain moisture during cooking. Lighter brines around 3 to 5 percent suit shorter soaks or delicate cuts. Stronger brines act faster but risk over-salting, so match the percentage and soaking time to the size of the cut and check a trusted recipe for specifics.",
      },
      {
        question: "Does the type of salt change the amount?",
        answer: "This calculator works by weight, so the grams it gives are correct for any salt — table, kosher or sea salt — because a gram of salt is a gram regardless of crystal size. The difference only matters if you measure by volume, since coarse kosher salt fills a spoon less densely than fine table salt. Weighing the salt on a scale, as this tool assumes, sidesteps that problem entirely and keeps your brine consistent.",
      },
      {
        question: "How much salt do I need for fermenting vegetables?",
        answer: "Vegetable ferments like sauerkraut and pickles typically use a brine around 2 to 5 percent salt, strong enough to favour the beneficial lactic-acid bacteria while suppressing spoilage organisms. Many pickle recipes land near 3.5 percent. Enter your water volume and the target percentage to get the exact salt weight. Staying within the recommended range is important for fermentation safety, so follow a tested recipe for the concentration and timing.",
      },
      {
        question: "Should I account for the food displacing water?",
        answer: "For most home brining the small volume the food adds is not worth adjusting for, and using the water you pour in gives a close enough concentration. For precise fermentation, some cooks weigh the water plus the vegetables together and calculate salt against that combined weight for tighter control. This calculator bases the salt on the water alone, which is the simplest and most common method for brining meat and quick pickles.",
      },
      {
        question: "Can I reuse or scale a brine?",
        answer: "You can scale a brine freely — because the salt is a fixed percentage of the water, just enter the new water volume and the tool gives the matching salt weight, keeping the strength identical for a bigger or smaller batch. Reusing a brine, however, is not recommended for food safety, since it has been in contact with raw food and is diluted by released juices. Mix a fresh brine each time for reliable, safe results.",
      },
    ],
    relatedCalculators: ["meat-roasting-time-calculator", "cooking-time-calculator", "recipe-servings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard brining ratios",
  },
  {
    id: "meat-roasting-time",
    slug: "meat-roasting-time-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Meat Roasting Time Calculator",
    shortDescription: "Estimate roasting time from weight, rate and resting.",
    seoTitle: "Meat Roasting Time Calculator — Cooking Time by Weight",
    metaDescription:
      "Free meat roasting time calculator. Enter weight in kilograms, minutes per kilogram and resting time to estimate total roasting time for any joint.",
    primaryKeyword: "meat roasting time calculator",
    secondaryKeywords: ["roast cooking time calculator", "roasting time by weight", "meat cooking time calculator"],
    fields: [
      { id: "weightKg", label: "Weight", type: "number", unit: "kg", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "minutesPerKg", label: "Minutes per kilogram", type: "number", unit: "min/kg", placeholder: "40", defaultValue: 40, required: true, span: 1, min: 0, step: 1 },
      { id: "restMinutes", label: "Resting time", type: "number", unit: "min", placeholder: "15", defaultValue: 15, required: false, span: 2, min: 0, step: 1 },
    ],
    results: [
      { id: "cookingMinutes", label: "Cooking time", format: "duration", isPrimary: true },
      { id: "totalMinutes", label: "Total time with resting", format: "duration", isPrimary: false },
    ],
    formula: "cooking time = weight × minutes per kg; total = cooking time + resting time",
    formulaExplanation:
      "Roasting time scales with weight because heat has to travel from the surface to the centre of the joint, and a heavier piece has more mass to warm through. Multiplying the weight in kilograms by a per-kilogram rate gives the oven time; the rate you pick reflects the meat and how well done you want it. Adding the resting time gives the total to plan around, since a roast keeps cooking and its juices redistribute off the heat. Both parts are linear, so the schedule scales cleanly with the size of the joint.",
    explanation:
      "Timing a roast so it lands cooked-through but not dried out is far easier when you anchor it to weight, and this meat roasting time calculator turns a joint's weight, a per-kilogram cooking rate and a resting period into a clear schedule. You choose the rate that matches your meat and doneness, and the tool returns both the oven time and the total time including the all-important rest.\n\nThis matters because a roast's cooking time is driven by how long heat takes to reach the centre, which grows with the size of the joint. Using minutes per kilogram gives a dependable estimate you can plan the rest of the meal around, from when the oven goes on to when the plates hit the table. A meat roasting time calculator also builds in resting time, which many cooks forget — the period off the heat where juices settle and carry-over cooking finishes the job.\n\nThe calculation is straightforward: cooking time equals the weight in kilograms multiplied by your chosen minutes-per-kilogram rate, and the total adds the resting minutes on top. A two-kilogram joint at 40 minutes per kilogram needs about 80 minutes in the oven, plus a 15-minute rest for 95 minutes in all. Because the rate is adjustable, you can dial in beef, lamb, pork or poultry and your preferred doneness. Crucially, roasting time is a guide, not a guarantee — oven accuracy, bone and starting temperature all shift it — so always confirm doneness with a meat thermometer. Cooks planning a Sunday roast or a holiday centrepiece rely on a meat roasting time calculator to bring the meal together on time.",
    example: {
      inputs: { weightKg: 2, minutesPerKg: 40, restMinutes: 15 },
      explanation: "2 kg × 40 min/kg = 80 min cooking, plus 15 min resting = 95 min total.",
    },
    faqs: [
      {
        question: "How do I choose the minutes-per-kilogram rate?",
        answer: "The rate depends on the meat and how well done you want it. Roughly, beef and lamb for medium sit around 40 minutes per kilogram, pork nearer 55 to 65, and chicken about 45, though rates vary with recipe and oven temperature. Use a lower rate for rarer beef and a higher one for well-done. Because these are guides, treat the calculated time as a schedule and confirm the real doneness with a meat thermometer.",
      },
      {
        question: "Why does the calculator include resting time?",
        answer: "Resting is a crucial step that many cooks overlook. After roasting, letting the meat sit allows the juices to redistribute and the internal temperature to climb a few more degrees through carry-over cooking, so the meat is juicier and easier to carve. This calculator adds your resting minutes to the cooking time to give a realistic total, helping you plan when to start so the roast is ready — rested and all — exactly when you want to serve.",
      },
      {
        question: "Should I use a thermometer as well?",
        answer: "Yes, always for anything where safety or doneness matters. Time alone never guarantees a roast is properly cooked because ovens, cuts and starting temperatures vary. A meat thermometer inserted into the thickest part, away from bone, is the definitive test — for example around 75°C for poultry and lower targets for beef depending on doneness. Use the calculated time to plan and to know when to start checking, then let the thermometer make the final call.",
      },
      {
        question: "Does bone-in or stuffed meat change the time?",
        answer: "It can. Bone conducts heat differently, so bone-in joints may cook a little faster near the bone but slower through dense muscle. Stuffing a bird adds significant time because the heat must also bring the filling up to a safe temperature, which slows the whole roast. In both cases, increase the minutes-per-kilogram rate or simply lean more heavily on a thermometer in the thickest section rather than trusting the time alone.",
      },
      {
        question: "Should I take the meat out of the fridge first?",
        answer: "Letting a joint sit at room temperature for a while before roasting helps it cook more evenly, since a fridge-cold centre takes longer to warm through and can leave the outside overdone before the middle is ready. Many cooks rest larger roasts out of the fridge for 30 to 60 minutes beforehand, following food-safety limits. A colder starting point pushes the real cooking time up, so factor that in and verify with a thermometer.",
      },
    ],
    relatedCalculators: ["cooking-time-calculator", "oven-temperature-converter", "brine-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard roasting guidance",
  },
  {
    id: "pizza-dough",
    slug: "pizza-dough-calculator",
    category: "Cooking",
    categorySlug: "cooking",
    title: "Pizza Dough Calculator",
    shortDescription: "Get flour, water, salt and yeast for your pizza dough balls.",
    seoTitle: "Pizza Dough Calculator — Flour, Water, Salt and Yeast",
    metaDescription:
      "Free pizza dough calculator. Enter the number of dough balls, ball weight and hydration to get exact flour, water, salt and yeast from baker's percentages.",
    primaryKeyword: "pizza dough calculator",
    secondaryKeywords: ["pizza dough recipe calculator", "neapolitan dough calculator", "pizza dough ball calculator"],
    fields: [
      { id: "numberOfBalls", label: "Number of dough balls", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 1 },
      { id: "ballWeightGrams", label: "Ball weight", type: "number", unit: "g", placeholder: "250", defaultValue: 250, required: true, span: 1, min: 0, step: 1 },
      { id: "hydrationPercent", label: "Hydration", type: "number", unit: "%", placeholder: "62", defaultValue: 62, required: true, span: 2, min: 0, step: 1 },
    ],
    results: [
      { id: "flourGrams", label: "Flour", format: "number", decimals: 0, unit: "g", isPrimary: true },
      { id: "waterGrams", label: "Water", format: "number", decimals: 0, unit: "g", isPrimary: false },
      { id: "saltGrams", label: "Salt", format: "number", decimals: 1, unit: "g", isPrimary: false },
      { id: "yeastGrams", label: "Yeast", format: "number", decimals: 1, unit: "g", isPrimary: false },
    ],
    formula: "total dough = balls × ball weight; flour = total ÷ (1 + hydration/100 + 0.025 + 0.005)",
    formulaExplanation:
      "Pizza dough is built on baker's percentages, where flour is 100% and every other ingredient is a percentage of the flour. With hydration as a chosen percentage, salt at 2.5% and yeast at 0.5%, the total dough weight equals the flour multiplied by (1 + hydration/100 + 0.025 + 0.005). Rearranging, the flour needed is the total dough weight divided by that same factor. Once the flour is known, water is flour times the hydration percentage, salt is 2.5% of flour and yeast 0.5%, so the whole recipe follows from the flour figure.",
    explanation:
      "Making pizza dough well means working backwards from how many bases you want to precise ingredient weights, and this pizza dough calculator does exactly that using baker's percentages. You enter the number of dough balls, how much each should weigh, and your target hydration, and the tool returns the flour, water, salt and yeast to weigh out.\n\nThis approach matters because great pizza is a matter of ratios, not rough handfuls. The weight of each ball sets the size of the pizza — around 250 grams is typical for a Neapolitan-style base — and the hydration sets the texture, from a firmer, crisper crust at lower percentages to a lighter, more open one higher up. A pizza dough calculator lets you scale from a couple of pizzas to a party's worth while keeping the recipe perfectly in proportion, so every batch behaves the same.\n\nThe method uses baker's percentages, where flour is 100 percent and the other ingredients are set against it: hydration as your chosen water percentage, salt at 2.5 percent and yeast at 0.5 percent. The total dough weight is the number of balls times the ball weight, and the flour is that total divided by one plus the hydration fraction plus the salt and yeast fractions. Water, salt and yeast then follow directly from the flour. So four 250-gram balls at 62 percent hydration need about 606 grams of flour, 376 of water, 15 of salt and 3 of yeast. Home pizza makers, dough-obsessed hobbyists and anyone hosting a pizza night rely on a pizza dough calculator to nail the recipe every time.",
    example: {
      inputs: { numberOfBalls: 4, ballWeightGrams: 250, hydrationPercent: 62 },
      explanation: "4 × 250 g = 1000 g dough → about 606 g flour, 376 g water, 15 g salt, 3 g yeast.",
    },
    faqs: [
      {
        question: "How heavy should each pizza dough ball be?",
        answer: "It depends on the pizza size and style. Neapolitan-style bases are commonly 250 to 280 grams, giving a roughly 30-centimetre pizza with a puffy rim. Smaller personal pizzas might use 200 grams, while larger or thicker bases run heavier. Enter your preferred ball weight and the calculator scales everything else to match. Choosing a consistent ball weight is what makes your pizzas come out the same size and thickness batch after batch.",
      },
      {
        question: "What hydration is best for pizza dough?",
        answer: "For home ovens, hydration around 60 to 65 percent is a forgiving and popular range, producing a dough that is easy to stretch and bakes into a crisp yet tender crust. Higher hydration of 70 percent or more gives a lighter, more open and airy crumb favoured for Neapolitan pizza in very hot ovens, but the wetter dough is harder to handle. Start near 62 percent and adjust once you are comfortable managing the dough.",
      },
      {
        question: "Why are salt and yeast such small amounts?",
        answer: "In baker's percentages, salt and yeast are measured against the flour, and pizza dough uses only about 2.5 percent salt and 0.5 percent yeast. Salt controls flavour and tightens the gluten, so too much makes the dough tough while too little leaves it bland and slack. Yeast is kept low because pizza dough is usually given a long, slow rise, which develops flavour and needs only a little yeast to reach a good, well-fermented result.",
      },
      {
        question: "Can I use this for a long cold ferment?",
        answer: "Yes. The ingredient weights the calculator gives work for both same-day and long cold-fermented doughs, since the recipe proportions are the same. For a slow rise in the fridge over one to three days, the modest 0.5 percent yeast is ideal because the dough ferments gradually, deepening flavour and improving digestibility. Just mix to these weights, then choose your fermentation schedule — a longer cold prove generally rewards you with a tastier, more extensible crust.",
      },
      {
        question: "How do I scale the recipe for more pizzas?",
        answer: "Simply change the number of dough balls, and the calculator recomputes the flour, water, salt and yeast to match while keeping every ratio identical. Because the recipe is built on baker's percentages, doubling the balls doubles all the ingredients, so a batch for eight tastes and handles just like a batch for four. This makes it easy to plan for a crowd — decide how many pizzas you need and weigh out exactly what the tool specifies.",
      },
    ],
    relatedCalculators: ["dough-hydration-calculator", "yeast-converter-calculator", "baking-conversion-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Baker's percentage convention",
  },
];
