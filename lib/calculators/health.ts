import type { CalculatorDefinition } from "../types";

const systemField = {
  id: "system",
  label: "Units",
  type: "select" as const,
  required: false,
  span: 2 as const,
  defaultValue: "metric",
  options: [
    { value: "metric", label: "Metric (kg, cm)" },
    { value: "imperial", label: "Imperial (lb, in)" },
  ],
};

export const healthCalculators: CalculatorDefinition[] = [
  {
    id: "bmi",
    slug: "bmi-calculator",
    category: "Health",
    categorySlug: "health",
    title: "BMI Calculator",
    shortDescription: "Calculate your Body Mass Index and category.",
    seoTitle: "BMI Calculator — Free Body Mass Index Calculator",
    metaDescription:
      "Free BMI calculator. Find your Body Mass Index from height and weight in metric or imperial units, and see your WHO weight category.",
    primaryKeyword: "bmi calculator",
    secondaryKeywords: ["body mass index calculator", "bmi chart", "healthy weight calculator"],
    fields: [
      systemField,
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg (metric) or lb (imperial)" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm (metric) or inches (imperial)" },
    ],
    results: [
      { id: "bmi", label: "BMI", format: "number", decimals: 1, isPrimary: true },
      { id: "category", label: "Category", format: "text", isPrimary: false },
    ],
    formula: "BMI = weight (kg) ÷ height (m)²  ·  Imperial: BMI = 703 × lb ÷ in²",
    explanation:
      "Body Mass Index is a screening figure that relates a person's weight to their height, expressed as a single number in kilograms per square metre. Adolphe Quetelet devised it in the 1830s as a way to describe populations, and it later became the standard first-pass measure of weight status because it needs only two easily taken measurements and no equipment beyond scales and a stadiometer. This bmi calculator applies the World Health Organization thresholds: underweight below 18.5, normal from 18.5 to 24.9, overweight from 25 to 29.9, and obese at 30 and above. Those cut points matter because BMI tracks, at the group level, with the risk of conditions such as type 2 diabetes, hypertension and cardiovascular disease, which is why clinics use it to flag people for closer assessment. The WHO adopted these ranges after reviewing large cohort data linking body mass to mortality and morbidity. Doctors, dietitians, insurers and public-health researchers all reach for a bmi calculator as a fast, standardised starting point. It has a real limitation: because it measures total mass, not composition, this bmi calculator can misclassify very muscular athletes as overweight and can understate fat in older adults who have lost lean tissue.",
    formulaExplanation:
      "Weight is divided by height squared because, across adults of similar build, body mass scales roughly with the square of height rather than height itself. Squaring the height therefore normalises weight so that tall and short people can be compared on one scale. The imperial version multiplies pounds over inches squared by 703 to convert the result into the same metric kg/m² units.",
    example: {
      inputs: { system: "metric", weight: 70, height: 175 },
      explanation: "70 kg at 1.75 m: 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which is in the normal range.",
    },
    faqs: [
      { question: "What is a normal BMI for men and women?", answer: "The healthy band is 18.5 to 24.9 for both sexes, since the WHO applies the same adult cut points to men and women. Sex differences in muscle and fat distribution are not built into the number itself. Use it only as a broad screen, and pair it with a waist measurement or body-fat testing for a fuller picture of an individual's overall health." },
      { question: "How accurate is BMI?", answer: "As a population screen it correlates well with body fat and health risk, but for one person it can mislead. It reads only total mass, so a muscular athlete may land in the overweight range while carrying little fat, and a sedentary older adult may sit in the normal range despite high fat. Treat it as a flag, not a verdict." },
      { question: "Does BMI apply to children?", answer: "Not with these adult categories. Children and teenagers grow at different rates, so they use age- and sex-specific BMI-for-age percentiles from growth charts instead. A child in the 85th to 95th percentile is considered overweight. This tool is built for adults aged 20 and over; use a paediatric percentile chart for anyone younger. A doctor or paediatrician can plot the correct percentile and interpret it against the child's growth history." },
      { question: "How often should I recalculate my BMI?", answer: "For most adults, checking every few months is plenty, since height is stable and weight moves slowly. Recalculate after a deliberate change in weight, a new training programme, or a shift in health goals. Frequent daily checks add little, because normal fluctuations in food and water can move the scale by a kilogram or two without changing your real status." },
      { question: "Can I use BMI if I am very athletic?", answer: "You can calculate it, but interpret it carefully. Muscle is denser than fat, so athletes and heavy lifters often score as overweight or obese while being lean and healthy. If that describes you, a body-fat percentage estimate or a waist-to-height ratio gives a more meaningful reading than BMI alone. The number is still worth tracking for trends over time, even when the category label itself misjudges your build." },
    ],
    relatedCalculators: ["bmr-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "World Health Organization (WHO), Technical Report Series 854 (1995)",
    sourceUrl: "https://www.who.int/publications/i/item/physical-status",
  },
  {
    id: "bmr",
    slug: "bmr-calculator",
    category: "Health",
    categorySlug: "health",
    title: "BMR Calculator",
    shortDescription: "Estimate your daily calories burned at rest.",
    seoTitle: "BMR Calculator — Free Basal Metabolic Rate Calculator",
    metaDescription:
      "Free BMR calculator using the Mifflin-St Jeor equation. Estimate the calories your body burns at rest each day from age, sex, height and weight.",
    primaryKeyword: "bmr calculator",
    secondaryKeywords: ["basal metabolic rate calculator", "calories burned at rest", "mifflin st jeor calculator"],
    fields: [
      systemField,
      {
        id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "weight", label: "Weight", type: "number", placeholder: "70", required: true, span: 1, min: 0, helpText: "kg or lb" },
      { id: "height", label: "Height", type: "number", placeholder: "175", required: true, span: 1, min: 0, helpText: "cm or in" },
    ],
    results: [
      { id: "bmr", label: "BMR", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "maintenance", label: "Sedentary maintenance", format: "number", decimals: 0, unit: "kcal/day", isPrimary: false, description: "BMR × 1.2" },
    ],
    formula: "Mifflin-St Jeor: BMR = 10×kg + 6.25×cm − 5×age + s  (s = +5 male, −161 female)",
    explanation:
      "Basal Metabolic Rate is the energy your body spends at complete rest just to keep essential systems running: circulation, breathing, cell repair, brain activity and temperature regulation. It represents the largest slice of most people's daily calorie burn, typically 60 to 70 percent, which is why any bmr calculator sits at the foundation of nutrition planning. This bmr calculator uses the Mifflin-St Jeor equation, published in 1990 after the authors measured resting energy expenditure by indirect calorimetry in hundreds of adults and fitted a regression to weight, height, age and sex. Validation studies have since shown it predicts resting metabolism more accurately for today's populations than the older 1919 Harris-Benedict equation, which tended to overestimate. That accuracy is why registered dietitians, sports scientists and weight-management clinics adopted it as their default. Age enters the equation because metabolism slows as lean tissue declines over the years, and sex is included because men generally carry more muscle, which is metabolically active. The sedentary maintenance figure shown here multiplies your result by 1.2 to approximate daily needs with little exercise. Anyone setting calorie targets for fat loss, maintenance or muscle gain starts from a bmr calculator, then layers activity on top to reach total daily needs.",
    formulaExplanation:
      "The coefficients come from regression on indirect-calorimetry data. Each kilogram of body mass adds about 10 kcal and each centimetre of height 6.25 kcal, since larger bodies have more metabolising tissue. Age subtracts 5 kcal per year to reflect declining lean mass over time, and the sex constant (+5 for men, −161 for women) captures men's typically higher proportion of metabolically active muscle.",
    example: {
      inputs: { system: "metric", sex: "male", age: 30, weight: 70, height: 175 },
      explanation: "10×70 + 6.25×175 − 5×30 + 5 = 700 + 1093.75 − 150 + 5 ≈ 1,649 kcal/day.",
    },
    faqs: [
      { question: "What is the difference between BMR and TDEE?", answer: "BMR is the energy you burn at complete rest for vital functions only. TDEE, or Total Daily Energy Expenditure, takes that BMR and multiplies it by an activity factor to fold in walking, exercise and the effort of digesting food. BMR is the floor; TDEE is what you actually spend across a full day. You eat around TDEE to maintain weight, not around BMR." },
      { question: "How accurate is the Mifflin-St Jeor equation?", answer: "It predicts resting metabolism within about 10 percent for roughly 80 percent of healthy adults, and outperforms the older Harris-Benedict formula for modern populations. Accuracy drops for people at the extremes of body composition, such as elite athletes or those with obesity, because the equation cannot see how much of your mass is muscle versus fat. For most people it is the best estimate without lab testing." },
      { question: "Should I eat exactly my BMR calories?", answer: "No. BMR covers only resting functions, so eating at that level while living an active life creates a large, unintended deficit. Your realistic intake for maintenance is BMR multiplied by an activity factor. Even for weight loss, dropping to bare BMR is rarely advised. Use your TDEE as the reference point and apply a moderate deficit from there instead, rather than eating down at your resting rate." },
      { question: "What is a normal BMR for men and women?", answer: "It depends on size and age, but a typical adult man falls near 1,600 to 1,900 kcal per day and a typical woman near 1,300 to 1,500, because men usually carry more lean mass. There is no single correct value: taller, heavier and younger people burn more at rest. Your own figure from this equation matters more than any average." },
      { question: "How often should I recalculate my BMR?", answer: "Recalculate whenever your weight changes by a few kilograms, since body mass is the biggest driver of the result. A significant shift in muscle from training, or simply getting older by a year or two, also nudges it. Checking every one to two months during an active weight-change phase keeps your calorie targets aligned; there is little value in daily recalculation." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Mifflin MD et al., Am J Clin Nutr. 1990;51(2):241-247",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
  },
];
