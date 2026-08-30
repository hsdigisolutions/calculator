import type { CalculatorDefinition, CalculatorField } from "../types";

const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};

export const healthR7Calculators: CalculatorDefinition[] = [
  {
    id: "calories-burned-activity",
    slug: "calories-burned-by-activity-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Calories Burned by Activity Calculator",
    shortDescription: "Estimate calories burned from an activity's MET value, your weight and time.",
    seoTitle: "Calories Burned by Activity Calculator — MET Formula",
    metaDescription:
      "Free calories burned calculator. Estimate energy used during any exercise from its MET value, your body weight and how many minutes you were active.",
    primaryKeyword: "calories burned by activity calculator",
    secondaryKeywords: ["met calorie calculator", "exercise calories burned", "calories burned calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "metValue", label: "Activity MET value", type: "number", unit: "MET", placeholder: "8", required: true, span: 1, min: 0, step: 0.1, helpText: "e.g. walking ≈ 3.5, running ≈ 9.8, cycling ≈ 8." },
      { id: "minutes", label: "Duration", type: "number", unit: "minutes", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "caloriesBurned", label: "Calories burned", format: "number", decimals: 0, unit: "kcal", isPrimary: true },
    ],
    formula: "Calories = MET × 3.5 × weight(kg) ÷ 200 × minutes",
    explanation:
      "The calories burned by activity calculator turns any exercise into an energy figure using its MET value, the metabolic equivalent of task. One MET is the energy your body uses sitting quietly at rest, roughly 3.5 millilitres of oxygen per kilogram of body weight each minute, and every activity is rated as a multiple of that baseline. Walking briskly might be 3.5 METs, jogging around 7, and vigorous cycling or running 8 to 12, meaning they burn that many times more energy than resting. Because oxygen consumption relates directly to calories burned, multiplying an activity's MET value by your body weight and duration gives a solid estimate of the calories you have spent. A calories burned by activity calculator is useful whether you are managing weight, planning a training programme, or simply curious how a workout compares. Heavier people burn more calories doing the same activity because moving more mass costs more energy, which is why the formula scales with weight. Keep in mind the result is an estimate: real energy expenditure varies with fitness, efficiency, terrain, temperature and individual metabolism, and published MET values are population averages. Fitness trackers use similar logic but add heart-rate data. Use this figure to compare activities and guide planning rather than as a precise measurement, and remember that consistency across days matters far more than the exact number burned in any single session.",
    formulaExplanation:
      "The formula rests on the fact that one MET equals about 3.5 millilitres of oxygen consumed per kilogram of body weight per minute, and burning one litre of oxygen releases roughly five kilocalories. Multiplying MET by 3.5 and by your weight gives oxygen use per minute; dividing by 200 converts that oxygen volume into kilocalories, and multiplying by the minutes exercised totals the energy spent. Heavier bodies and longer or more intense sessions all raise the result proportionally.",
    example: {
      inputs: { weightKg: 70, metValue: 8, minutes: 30 },
      explanation: "For a 70 kg person doing an 8-MET activity for 30 minutes: 8 × 3.5 × 70 ÷ 200 × 30 = 294 kcal.",
    },
    faqs: [
      { question: "What is a MET value and where do I find one?", answer: "A MET, or metabolic equivalent of task, expresses how much energy an activity uses compared with sitting at rest, which is defined as one MET. Brisk walking is about 3.5 METs, general cycling around 8, and running roughly 9 to 12. Published compendiums of physical activities list MET values for hundreds of exercises, and many fitness apps display them. Choose the value that best matches your effort level for the closest estimate." },
      { question: "How accurate is a MET-based calorie estimate?", answer: "It is a reasonable approximation but not exact. The formula uses population-average MET values and assumes typical efficiency, so it cannot capture your individual fitness, movement economy, terrain, weather or body composition. Two people of the same weight doing the same workout can burn noticeably different amounts. Treat the number as a useful guide for comparing activities and planning, not as a precise measurement of your personal energy expenditure on that specific day." },
      { question: "Why does body weight affect calories burned?", answer: "Moving a heavier body requires more energy because there is more mass to accelerate, support and transport against gravity. That is why the formula multiplies by your weight in kilograms: a larger person burns more calories doing the identical activity than a lighter person over the same time. As you lose weight, the calories burned for a given activity fall slightly, which is one reason weight loss can gradually slow if intake is not adjusted." },
      { question: "Does this include the calories I would burn anyway at rest?", answer: "The MET formula estimates total energy used during the activity, which technically includes the one MET you would spend resting for that time. For most everyday planning this gross figure is fine. If you want the net calories attributable purely to the exercise, subtract your resting expenditure for the same minutes, roughly one MET. The difference is usually small for vigorous activity but more noticeable for light movement." },
      { question: "How can I use this to lose weight?", answer: "Weight change depends on the balance between calories eaten and calories burned. Knowing roughly how many calories an activity burns helps you plan a sustainable deficit alongside diet. Because about 7,700 kilocalories equal one kilogram of body fat, regular activity adds up meaningfully over weeks. However, exercise alone rarely creates a large deficit, and appetite often rises to compensate, so pair activity with mindful eating rather than relying on burning calories back through workouts." },
    ],
    relatedCalculators: ["tdee-calculator", "bmr-calculator", "steps-to-calories-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Compendium of Physical Activities (MET values)",
    sourceUrl: "https://pacompendium.com/",
  },
  {
    id: "body-frame-size",
    slug: "body-frame-size-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Body Frame Size Calculator",
    shortDescription: "Determine small, medium or large frame from height and wrist size.",
    seoTitle: "Body Frame Size Calculator — Small, Medium or Large",
    metaDescription:
      "Free body frame size calculator. Divide your height by your wrist circumference to classify your skeletal frame as small, medium or large.",
    primaryKeyword: "body frame size calculator",
    secondaryKeywords: ["frame size calculator", "wrist frame size", "small medium large frame"],
    fields: [
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
      { id: "wristCm", label: "Wrist circumference", type: "number", unit: "cm", placeholder: "17", required: true, span: 1, min: 0, step: 0.1 },
    ],
    results: [
      { id: "ratio", label: "Height-to-wrist ratio", format: "number", decimals: 1, isPrimary: false },
      { id: "frame", label: "Frame size", format: "text", isPrimary: true },
    ],
    formula: "Ratio = height ÷ wrist; small if r > 10.4, medium 9.6–10.4, large if r < 9.6",
    explanation:
      "Body frame size describes the underlying skeletal build you inherited, and it helps put weight and body-composition figures into fairer context. Two people of the same height can have very different bone structures, so a body frame size calculator classifies your frame as small, medium or large by comparing your height with the circumference of your wrist. The wrist is chosen because it carries very little fat or muscle, so its measurement mostly reflects bone size, making it a convenient proxy for overall skeletal build. This tool divides height by wrist circumference: a higher ratio means a slender skeleton relative to height, classed as a small frame, while a lower ratio indicates a heavier bone structure and a large frame, with medium in between. Knowing your frame size matters because ideal-weight tables and body mass index do not account for skeletal differences. A large-framed person naturally carries more weight in bone and supporting tissue and may sit at the higher end of a healthy weight range, whereas a small-framed person of the same height belongs lower. A body frame size calculator therefore refines how you interpret targets rather than serving as a health diagnosis itself. Measure your wrist just below the bony bump, on the hand side, snug against the skin, using the same units as your height. Treat frame size as a helpful adjustment to weight guidance, not a fixed rule, and combine it with other measures for a fuller picture of your body.",
    formulaExplanation:
      "The method works because wrist circumference tracks skeletal size closely while being almost free of fat and muscle, so dividing height by wrist gives a dimensionless ratio that expresses how slender or robust your frame is relative to your stature. A tall person with a thin wrist produces a high ratio and a small-frame classification, whereas a shorter person with a thick wrist yields a low ratio and a large frame. The 9.6 and 10.4 cut-points come from standard reference bands used to sort people into three frame categories.",
    example: {
      inputs: { heightCm: 180, wristCm: 16 },
      explanation: "180 ÷ 16 = 11.25, which is above 10.4, so this indicates a small frame.",
    },
    faqs: [
      { question: "Why use the wrist to judge frame size?", answer: "The wrist is mostly bone, tendon and skin with almost no fat or muscle to distort the measurement, so its circumference is a stable indicator of skeletal size that changes little with weight gain or loss. That reliability makes it a practical proxy for your overall bone structure. Other methods use elbow breadth, but the wrist is easier to measure accurately at home with just a flexible tape, which is why it is widely used." },
      { question: "How does frame size affect my ideal weight?", answer: "Standard ideal-weight tables assume an average build, but skeletal size shifts the healthy range. A large-framed person carries more bone and connective tissue, so their healthy weight sits toward the upper end of a range for their height, while a small-framed person belongs lower. Accounting for frame size prevents a naturally robust person from being labelled overweight, or a slight person from thinking a high-end weight is fine for them." },
      { question: "Can I change my body frame size?", answer: "Not meaningfully in adulthood. Frame size reflects your skeleton, which is largely set by genetics and finished growing after adolescence. You can change muscle, fat and overall weight through diet and training, but the length and thickness of your bones stay essentially fixed. That permanence is actually useful: because frame does not shift with weight, it provides a stable reference point for interpreting your weight and body-composition goals over time." },
      { question: "Where exactly should I measure my wrist?", answer: "Wrap a flexible tape around the smallest part of your wrist, just below the wrist bone toward the hand, on your dominant arm. Keep the tape snug against the skin but not tight enough to compress it, and read the measurement in the same units you used for your height. Measuring at the same spot each time gives consistent results. Avoid measuring over a watch or jewellery, which would inflate the figure." },
      { question: "Is frame size the same as body type?", answer: "No, though the ideas overlap. Frame size refers specifically to skeletal build, small, medium or large, based on bone dimensions. Body type, or somatotype, describes a broader pattern of build and metabolism, often labelled ectomorph, mesomorph or endomorph, which blends bone structure with muscularity and fat distribution. Frame size is one component of body type but measures only the skeleton, whereas somatotype attempts to capture your whole physique and how readily you gain muscle or fat." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "waist-to-hip-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "MedlinePlus / NIH body frame size guidance",
    sourceUrl: "https://medlineplus.gov/ency/imagepages/17182.htm",
  },
  {
    id: "pregnancy-weight-gain",
    slug: "pregnancy-weight-gain-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Pregnancy Weight Gain Calculator",
    shortDescription: "Find the recommended weight-gain range for pregnancy from pre-pregnancy BMI.",
    seoTitle: "Pregnancy Weight Gain Calculator — IOM Guidelines",
    metaDescription:
      "Free pregnancy weight gain calculator. Use your pre-pregnancy weight and height to find the recommended total weight-gain range from official IOM guidelines.",
    primaryKeyword: "pregnancy weight gain calculator",
    secondaryKeywords: ["recommended pregnancy weight gain", "iom weight gain", "healthy pregnancy weight"],
    fields: [
      { id: "prePregnancyWeightKg", label: "Pre-pregnancy weight", type: "number", unit: "kg", placeholder: "62", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", placeholder: "165", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "bmi", label: "Pre-pregnancy BMI", format: "number", decimals: 1, unit: "kg/m²", isPrimary: false },
      { id: "recommendedGainLowKg", label: "Recommended gain (low)", format: "number", decimals: 1, unit: "kg", isPrimary: true },
      { id: "recommendedGainHighKg", label: "Recommended gain (high)", format: "number", decimals: 1, unit: "kg", isPrimary: false },
    ],
    formula: "BMI = kg ÷ m²; IOM ranges: <18.5 → 12.5–18, 18.5–24.9 → 11.5–16, 25–29.9 → 7–11.5, ≥30 → 5–9 kg",
    explanation:
      "How much weight to gain during pregnancy is one of the most common questions expectant mothers ask, and a pregnancy weight gain calculator answers it using your body mass index before you conceived. The amount your body should gain over a full-term single pregnancy depends heavily on where you started: someone who began underweight needs to gain more to support a healthy baby, while someone who began with obesity is advised to gain less to reduce complications. This tool applies the widely used guidelines from the Institute of Medicine, now the National Academy of Medicine, which set recommended total gain ranges for each pre-pregnancy BMI category. It first computes your pre-pregnancy BMI from the weight and height you enter, then returns the recommended gain window in kilograms. Gaining within the recommended range supports the baby's growth and the mother's changing body, including the placenta, amniotic fluid, expanded blood volume, larger breasts and fat stores for breastfeeding, while lowering risks such as gestational diabetes, high blood pressure, a very large or very small baby, and difficult delivery. A pregnancy weight gain calculator gives a clear target range, but pregnancy is highly individual and gain is rarely steady week to week, tending to accelerate in later trimesters. These figures apply to a single baby; twins require more. Always use the result as general guidance and let your midwife or obstetrician tailor advice to your specific health, because they monitor the full picture that no calculator can see.",
    formulaExplanation:
      "The calculator first finds body mass index by dividing your pre-pregnancy weight in kilograms by the square of your height in metres, which sorts you into an underweight, normal, overweight or obese band. Each band maps to an evidence-based total weight-gain range established by the Institute of Medicine, because women who begin lighter can safely gain more to nourish the pregnancy, while those who begin heavier are advised to gain less to limit the risk of complications for both mother and baby.",
    example: {
      inputs: { prePregnancyWeightKg: 62, heightCm: 165 },
      explanation: "62 ÷ 1.65² ≈ 22.8 BMI, in the normal range, so the recommended total gain is 11.5–16 kg.",
    },
    faqs: [
      { question: "Are these weight-gain ranges for a single baby or twins?", answer: "The ranges this calculator uses are for a single, full-term pregnancy. Carrying twins requires substantially more weight gain to support two babies, and the Institute of Medicine publishes separate, higher ranges for twin pregnancies, roughly 17 to 25 kilograms for a normal-weight mother. If you are expecting multiples, do not rely on the single-baby figures here; ask your obstetrician for the appropriate twin guidance tailored to your pre-pregnancy BMI." },
      { question: "What happens if I gain more than the recommended amount?", answer: "Gaining well above the recommended range raises the chance of gestational diabetes, high blood pressure, a larger baby that can complicate delivery, more caesarean sections, and greater difficulty losing the weight afterward. It can also increase the child's later risk of obesity. That said, one week of higher gain is not a crisis. Focus on the overall trend, eat nutrient-dense foods, stay active as advised, and let your care provider guide any adjustments rather than restricting sharply." },
      { question: "Is it dangerous to gain too little during pregnancy?", answer: "Yes, gaining too little can be harmful. Insufficient weight gain is linked to a higher risk of a low-birth-weight baby, preterm birth and problems with the baby's growth and development. Underweight mothers especially need adequate gain to support the pregnancy. If you are struggling to gain enough because of nausea, appetite loss or food access, tell your midwife or doctor, who can help with nutrition strategies and monitor the baby's growth closely to keep things on track." },
      { question: "When during pregnancy does most weight gain happen?", answer: "Weight gain is usually slow in the first trimester, often just half a kilogram to two kilograms total, then picks up in the second and third trimesters as the baby, placenta and fluids grow rapidly. A common pattern is around 0.4 to 0.5 kilograms per week in the later months for a normal-weight woman. Because the pace is uneven, judging progress against the total range and your provider's checks matters more than any single week's change." },
      { question: "Does the recommended gain include the baby's weight?", answer: "Yes. The recommended total is your whole-body gain, which includes the baby, the placenta, amniotic fluid, extra blood and fluid, the enlarged uterus and breasts, and maternal fat stores laid down for breastfeeding. The baby itself is only about three to four kilograms of the total. This is why the recommended figures are considerably larger than the baby's birth weight, and why most of the gain is normal, healthy and necessary rather than fat alone." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "Institute of Medicine (IOM) pregnancy weight-gain guidelines",
    sourceUrl: "https://www.cdc.gov/reproductive-health/maternal-infant-health/pregnancy-weight-gain.html",
  },
  {
    id: "weight-loss-calorie-goal",
    slug: "weight-loss-calorie-goal-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Weight Loss Calorie Goal Calculator",
    shortDescription: "Find the daily calorie target for a chosen weekly weight-loss rate.",
    seoTitle: "Weight Loss Calorie Goal Calculator — Daily Target",
    metaDescription:
      "Free weight loss calorie calculator. Enter your maintenance calories and a weekly loss target to get the daily calorie goal and weekly deficit you need.",
    primaryKeyword: "weight loss calorie goal calculator",
    secondaryKeywords: ["calorie deficit calculator", "daily calorie goal", "weight loss calorie target"],
    fields: [
      { id: "tdee", label: "Maintenance calories (TDEE)", type: "number", unit: "kcal/day", placeholder: "2500", required: true, span: 2, min: 0, helpText: "Your total daily energy expenditure." },
      {
        id: "weeklyLossKg", label: "Target weekly loss", type: "select", required: true, span: 2, defaultValue: "0.5",
        options: [
          { value: "0.25", label: "0.25 kg / week (gentle)" },
          { value: "0.5", label: "0.5 kg / week (moderate)" },
          { value: "0.75", label: "0.75 kg / week (fast)" },
          { value: "1", label: "1 kg / week (aggressive)" },
        ],
      },
    ],
    results: [
      { id: "dailyCalories", label: "Daily calorie goal", format: "number", decimals: 0, unit: "kcal/day", isPrimary: true },
      { id: "weeklyDeficit", label: "Weekly calorie deficit", format: "number", decimals: 0, unit: "kcal/week", isPrimary: false },
    ],
    formula: "Daily calories = TDEE − (weekly loss × 7700 ÷ 7); weekly deficit = weekly loss × 7700",
    explanation:
      "Losing weight comes down to a sustained calorie deficit, eating fewer calories than your body burns, and a weight loss calorie goal calculator tells you exactly how many calories to aim for each day to hit a target rate of loss. It starts from your total daily energy expenditure, or TDEE, the maintenance level at which your weight stays stable, then subtracts the deficit needed to shed a chosen amount of weight per week. The tool uses the widely cited estimate that one kilogram of body fat stores roughly 7,700 kilocalories, so to lose half a kilogram a week you need a weekly deficit of about 3,850 calories, or 550 fewer per day. A weight loss calorie goal calculator lets you pick a pace that fits your life, from a gentle quarter kilogram a week to a more aggressive kilogram, and shows both the daily target and the total weekly deficit behind it. Slower rates are generally easier to sustain and better preserve muscle, while very aggressive deficits can leave you hungry, tired and prone to rebound. Most guidance suggests not dropping below roughly 1,200 calories a day for women or 1,500 for men without supervision, and this calculator does not enforce that floor, so sanity-check the result. Real-world loss is rarely perfectly linear because water weight, adaptation and adherence all fluctuate. Use the figure as a practical starting target, adjust based on how your weight actually trends over a few weeks, and prioritise nutrient-dense food and protein to stay healthy while losing.",
    formulaExplanation:
      "The calculation relies on the well-known approximation that about 7,700 kilocalories are stored in one kilogram of body fat. Multiplying your chosen weekly loss in kilograms by 7,700 gives the total calorie deficit you must create across the week; dividing that by seven spreads it into a daily shortfall. Subtracting that daily shortfall from your maintenance calories, your TDEE, yields the daily calorie goal that should, on average, produce the target rate of loss over time.",
    example: {
      inputs: { tdee: 2500, weeklyLossKg: 0.5 },
      explanation: "For a 2,500 kcal TDEE losing 0.5 kg/week: deficit 0.5 × 7700 = 3850/week, so 2500 − 550 = 1,950 kcal/day.",
    },
    faqs: [
      { question: "Is 7,700 calories per kilogram an exact number?", answer: "It is a widely used approximation, not a precise constant. The figure assumes weight lost is pure body fat, but real weight change also includes water, glycogen and some lean tissue, especially early on. Metabolism also adapts as you lose, slightly reducing your burn. So actual loss can run a little faster at first and slower later than the formula predicts. Treat the target as a solid starting estimate and adjust based on your real weekly trend." },
      { question: "How low can I safely set my calorie goal?", answer: "Most health authorities advise against dropping below roughly 1,200 calories a day for women or 1,500 for men without medical supervision, because very low intakes make it hard to get enough nutrients and can cost you muscle. If this calculator returns a target below those floors, choose a gentler weekly loss rate or increase your activity to widen the deficit instead. Slower, sustainable loss almost always beats an extreme diet you cannot maintain." },
      { question: "Why is my real weight loss not matching the prediction?", answer: "Short-term weight swings from water, sodium, carbohydrate intake, hormones and digestion easily mask fat loss on the scale, so a week can show no change even with a genuine deficit. Metabolic adaptation and small inaccuracies in estimating your maintenance calories or food intake also add up. Judge progress over three to four weeks rather than day to day, and if the trend stalls, tighten your tracking or slightly increase the deficit." },
      { question: "Should I lose weight through diet or exercise?", answer: "Both help, but diet usually drives most of the deficit because it is far easier to eat 500 fewer calories than to burn 500 through exercise, and appetite often rises after hard workouts. Exercise remains valuable for preserving muscle, protecting metabolic and heart health, and improving mood. The best approach combines a moderate dietary deficit with regular activity, especially resistance training, so you lose fat while keeping the muscle that keeps your metabolism higher." },
      { question: "How much protein should I eat while losing weight?", answer: "Eating adequate protein while in a deficit helps preserve muscle mass and keeps you fuller, which supports adherence. Common guidance is around 1.6 to 2.2 grams of protein per kilogram of body weight for people actively losing weight and training. Spreading protein across meals and pairing it with resistance exercise gives the best muscle-sparing effect. Prioritising protein within your reduced calorie budget makes weight loss healthier and helps ensure most of what you lose is fat." },
    ],
    relatedCalculators: ["tdee-calculator", "bmr-calculator", "macro-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "NIH / CDC energy balance guidance (≈7700 kcal per kg)",
    sourceUrl: "https://www.niddk.nih.gov/health-information/weight-management",
  },
  {
    id: "heart-rate-zones",
    slug: "heart-rate-zones-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Heart Rate Zones Calculator",
    shortDescription: "Calculate your max heart rate and training zone boundaries from age.",
    seoTitle: "Heart Rate Zones Calculator — Training Zones by Age",
    metaDescription:
      "Free heart rate zones calculator. Enter your age to find your maximum heart rate and the beats-per-minute boundaries for zones 2, 3 and 4.",
    primaryKeyword: "heart rate zones calculator",
    secondaryKeywords: ["training heart rate zones", "cardio zones calculator", "hr zones by age"],
    fields: [
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "maxHeartRate", label: "Maximum heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: true },
      { id: "zone2Bpm", label: "Zone 2 start (60%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "zone3Bpm", label: "Zone 3 start (70%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "zone4Bpm", label: "Zone 4 start (85%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
    ],
    formula: "Max HR = 220 − age; zone starts at 60%, 70% and 85% of max HR",
    explanation:
      "Heart rate zones are the backbone of structured cardio training, dividing effort into bands so you can train each energy system on purpose rather than by guesswork. A heart rate zones calculator estimates your maximum heart rate from your age using the classic 220-minus-age formula, then marks the beats-per-minute boundaries that separate the main training zones. Zone 2, starting near 60 percent of maximum, is the easy aerobic range where you build endurance and burn fat efficiently and can hold a conversation. Zone 3, around 70 percent, is a moderate tempo that improves aerobic capacity. Zone 4, from about 85 percent upward, is the hard threshold and high-intensity range that lifts your ceiling and sharpens speed but can only be held briefly. Training across the right mix of zones, plenty of easy work and smaller doses of hard, is how endurance athletes and everyday exercisers alike make steady progress while managing fatigue. A heart rate zones calculator gives you concrete pulse targets to aim for with a chest strap or wrist monitor, turning vague intensity into numbers. Remember the 220-minus-age formula is a population average and your true maximum can differ by ten to fifteen beats, so the zones are a starting framework rather than exact personal limits. For precise zones, a lab test or field test of your actual maximum or lactate threshold is more accurate. Anyone with a heart condition should get medical clearance before training hard near their upper zones.",
    formulaExplanation:
      "Maximum heart rate falls gradually with age because the heart's pacemaker cells slow and become less responsive over time, dropping roughly one beat per year, which the 220-minus-age formula approximates for the average adult. Each training zone is then defined as a percentage of that estimated maximum: multiplying by 0.6, 0.7 and 0.85 marks where the easy aerobic, moderate tempo and hard threshold zones begin, giving you concrete beats-per-minute targets to pace your workouts by intensity.",
    example: {
      inputs: { age: 30 },
      explanation: "At age 30, max HR = 220 − 30 = 190 bpm; zone 2 starts near 114, zone 3 near 133, zone 4 near 162 bpm.",
    },
    faqs: [
      { question: "How accurate is the 220-minus-age formula?", answer: "It is a convenient average but imprecise for individuals, with real maximum heart rates commonly differing by ten to fifteen beats per minute in either direction. Maximum heart rate depends more on genetics and physiology than age alone. Alternative equations such as 208 minus 0.7 times age fit large groups slightly better. For general training the simple formula is adequate, but for serious performance work a measured maximum from a supervised test gives far more reliable zones." },
      { question: "Why is zone 2 training so popular?", answer: "Zone 2, the easy aerobic range around 60 to 70 percent of maximum, builds the aerobic base that underpins all endurance. Training here improves your body's ability to use fat for fuel, increases capillary and mitochondrial density, and can be sustained for long durations with low fatigue, so you can accumulate lots of it. Many coaches advise spending the bulk of weekly training in zone 2, reserving harder zones for shorter, targeted sessions." },
      { question: "How do I measure my heart rate during exercise?", answer: "A chest-strap monitor is the most accurate for exercise, reading the heart's electrical signal much like an ECG, while wrist-based optical sensors are convenient but can lag or misread during rapid changes and high intensity. You can also check manually by counting your pulse for fifteen seconds and multiplying by four, though this is impractical mid-effort. For zone training, a strap or a good wrist device gives real-time feedback so you can hold the target range." },
      { question: "Should I train in all the zones?", answer: "A balanced programme touches several zones for different purposes: easy zones build endurance and aid recovery, moderate zones raise aerobic capacity, and hard zones lift threshold and speed. A common effective pattern is mostly easy training with a smaller share of hard work, sometimes called polarised training. Spending too much time in the moderate middle can leave you tired without the gains of either extreme. Match your zone mix to your goals and recovery." },
      { question: "Is a higher maximum heart rate better?", answer: "No. Maximum heart rate is largely determined by age and genetics and is not a measure of fitness, so a higher or lower maximum does not make one person fitter than another. What matters is performance and efficiency at a given effort, such as running faster at the same heart rate as you get fitter. Do not compare your maximum with others; use your own value to set personal training zones." },
    ],
    relatedCalculators: ["max-heart-rate-calculator", "target-heart-rate-calculator", "tdee-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American Heart Association target heart-rate guidance",
    sourceUrl: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates",
  },
  {
    id: "daily-protein-intake",
    slug: "daily-protein-intake-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Daily Protein Intake Calculator",
    shortDescription: "Estimate daily protein needs from body weight and activity level.",
    seoTitle: "Daily Protein Intake Calculator — Grams per Day",
    metaDescription:
      "Free daily protein intake calculator. Multiply your body weight by an activity-based factor to estimate how many grams of protein you need each day.",
    primaryKeyword: "daily protein intake calculator",
    secondaryKeywords: ["protein calculator", "how much protein per day", "protein grams calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      {
        id: "activityFactor", label: "Goal / activity level", type: "select", required: true, span: 1, defaultValue: "1.2",
        options: [
          { value: "0.8", label: "Sedentary / RDA (0.8 g/kg)" },
          { value: "1.2", label: "Active adult (1.2 g/kg)" },
          { value: "1.6", label: "Building muscle (1.6 g/kg)" },
          { value: "2.0", label: "Athlete / cutting (2.0 g/kg)" },
        ],
      },
    ],
    results: [
      { id: "proteinGrams", label: "Daily protein target", format: "number", decimals: 0, unit: "g/day", isPrimary: true },
    ],
    formula: "Protein (g/day) = body weight (kg) × activity factor (g/kg)",
    explanation:
      "Protein is the macronutrient your body uses to build and repair muscle, skin, enzymes, hormones and immune cells, and getting enough each day is essential for health, recovery and body composition. A daily protein intake calculator estimates your target in grams by multiplying your body weight by a factor tied to your activity level and goals. The baseline recommended dietary allowance is about 0.8 grams per kilogram of body weight, enough to prevent deficiency in a sedentary adult, but that figure is a minimum rather than an optimum. People who exercise regularly benefit from more, commonly 1.2 to 1.6 grams per kilogram, while those actively building muscle or dieting to preserve lean mass often aim for up to about 2.0 grams per kilogram. A daily protein intake calculator lets you match the factor to where you sit on that spectrum, from sedentary to serious athlete. Adequate protein supports muscle protein synthesis, helps you feel full so it aids weight management, and becomes especially important with age as the body resists muscle building and older adults need more to counter natural muscle loss. Spreading intake across meals, roughly 20 to 40 grams each, uses protein more effectively than loading it all at once. This calculator gives a practical daily gram target to plan meals around, whether your aim is general health, athletic performance or fat loss with muscle retention. Very high intakes are generally safe for healthy people, but those with kidney disease should follow medical advice on protein.",
    formulaExplanation:
      "The calculation scales protein need to body size because larger bodies contain more lean tissue to maintain and repair, so grams are set per kilogram of body weight. The activity factor adjusts that per-kilogram amount to your demands: sedentary adults need only the baseline near 0.8 grams, whereas training breaks down and rebuilds muscle, raising requirements toward 1.6 to 2.0 grams. Multiplying your weight in kilograms by the chosen factor yields a daily protein target in grams that reflects both your size and your goals.",
    example: {
      inputs: { weightKg: 80, activityFactor: 1.6 },
      explanation: "An 80 kg person building muscle at 1.6 g/kg needs 80 × 1.6 = 128 g of protein per day.",
    },
    faqs: [
      { question: "Is more protein always better?", answer: "Up to a point, more protein helps active people build and preserve muscle and stay full, but benefits plateau. For most goals, intakes beyond roughly 2.0 to 2.2 grams per kilogram give little extra muscle benefit while displacing other nutrients. Very high intakes are generally safe for healthy kidneys but are usually unnecessary. Rather than maximising protein, aim for an adequate, consistent amount spread across the day and paired with resistance training for the best results." },
      { question: "Can eating too much protein harm my kidneys?", answer: "In people with healthy kidneys, higher protein intakes have not been shown to cause kidney damage, and research supports their safety for active individuals. However, those with existing chronic kidney disease are often advised to limit protein, because their kidneys struggle to process the byproducts. If you have kidney problems, diabetes affecting your kidneys, or another relevant condition, follow your doctor's or dietitian's guidance rather than a general calculator when setting your protein target." },
      { question: "Does it matter when I eat protein?", answer: "Total daily protein matters most, but distribution helps. Muscle protein synthesis responds to meals, and spreading intake across three or four meals of roughly 20 to 40 grams each stimulates it more consistently than eating most protein in one sitting. Including protein after training and before longer overnight fasts can be beneficial. For general health the exact timing is minor, but for building or preserving muscle, even spacing across the day gives a modest edge." },
      { question: "Do older adults need more protein?", answer: "Yes. With age, muscles become less responsive to protein, a phenomenon called anabolic resistance, and older adults tend to lose muscle mass, which threatens strength and independence. Many experts recommend older adults aim higher than the standard allowance, often around 1.0 to 1.2 grams per kilogram or more, alongside resistance exercise. Getting enough high-quality protein at each meal helps counter age-related muscle loss and supports mobility, bone health and recovery from illness." },
      { question: "Can I get enough protein on a plant-based diet?", answer: "Yes, with a little planning. Plant foods such as legumes, tofu, tempeh, seitan, lentils, beans, nuts, seeds and whole grains provide plenty of protein, and eating a variety across the day supplies all essential amino acids. Plant proteins are sometimes lower in certain amino acids like leucine, so vegans may aim slightly higher in total intake and include concentrated sources or a supplement. Meeting the same per-kilogram targets is entirely achievable without animal products." },
    ],
    relatedCalculators: ["macro-calculator", "tdee-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "NIH / Dietary Reference Intakes for protein",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK56068/",
  },
  {
    id: "exercise-hydration",
    slug: "exercise-hydration-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Exercise Hydration Calculator",
    shortDescription: "Estimate the fluid to replace during exercise from duration and sweat rate.",
    seoTitle: "Exercise Hydration Calculator — Fluid Replacement",
    metaDescription:
      "Free exercise hydration calculator. Estimate how much fluid to drink during a workout from its duration and your sweat rate, in litres and ounces.",
    primaryKeyword: "exercise hydration calculator",
    secondaryKeywords: ["sweat rate calculator", "workout fluid replacement", "hydration during exercise"],
    fields: [
      { id: "exerciseMinutes", label: "Exercise duration", type: "number", unit: "minutes", placeholder: "90", required: true, span: 1, min: 0 },
      { id: "sweatRateLitersPerHour", label: "Sweat rate", type: "number", unit: "L/hour", placeholder: "1", defaultValue: "1", required: true, span: 1, min: 0, step: 0.1, helpText: "Typical range 0.5–2 L/hour; more in heat." },
    ],
    results: [
      { id: "fluidNeededLiters", label: "Fluid to replace", format: "number", decimals: 2, unit: "L", isPrimary: true },
      { id: "fluidNeededOz", label: "Fluid to replace", format: "number", decimals: 0, unit: "fl oz", isPrimary: false },
    ],
    formula: "Fluid (L) = duration(min) ÷ 60 × sweat rate (L/hour); ounces = litres × 33.814",
    explanation:
      "Staying properly hydrated during exercise protects both performance and safety, because losing even a small percentage of body weight in sweat can impair endurance, concentration and temperature control. An exercise hydration calculator estimates how much fluid you should aim to replace during a session based on how long you work out and how fast you sweat. Sweat rate varies enormously between people and conditions: a typical range is about half a litre to two litres per hour, but it climbs in heat and humidity, at high intensity, and for larger or heavily kitted athletes. This tool multiplies your session duration by your hourly sweat rate to give a target fluid volume in both litres and fluid ounces. Replacing fluids during longer or hotter sessions helps you avoid the fatigue, cramping, elevated heart rate and heat stress that dehydration brings. An exercise hydration calculator is especially useful for runners, cyclists, team-sport players and anyone training in warm weather who wants a concrete drinking target rather than guessing. The most accurate way to know your personal sweat rate is to weigh yourself before and after a workout, since each kilogram of weight lost equals roughly one litre of sweat, then adjust the figure you enter here. Remember that drinking to thirst works well for most people in most situations, and over-drinking plain water can dilute blood sodium dangerously in a condition called hyponatraemia. For sessions beyond an hour, especially in heat, include electrolytes as well as fluid, and treat this estimate as a planning guide.",
    formulaExplanation:
      "The calculation converts your workout length into hours by dividing minutes by sixty, then multiplies by your sweat rate in litres per hour to estimate total sweat lost, which is the fluid you aim to replace. Because one litre equals about 33.814 US fluid ounces, the result is also shown in ounces for convenience. The logic assumes you want to roughly match fluid intake to sweat output so body-water loss stays small enough to protect performance and safety.",
    example: {
      inputs: { exerciseMinutes: 90, sweatRateLitersPerHour: 1 },
      explanation: "A 90-minute session at 1 L/hour: 90 ÷ 60 × 1 = 1.5 L, which is about 51 fluid ounces.",
    },
    faqs: [
      { question: "How do I measure my personal sweat rate?", answer: "Weigh yourself unclothed just before a workout and again immediately after, drying off first, and note any fluid you drank during the session. Each kilogram of body weight lost equals about one litre of sweat; add back the volume you drank to get total sweat. Divide by the hours exercised for your hourly rate. Doing this in conditions similar to your usual training gives a personalised figure far more accurate than a generic estimate." },
      { question: "Can I drink too much water during exercise?", answer: "Yes. Drinking far more than you sweat can dilute the sodium in your blood, causing exercise-associated hyponatraemia, a potentially dangerous condition with symptoms like nausea, headache, confusion and, in severe cases, seizures. It is most often seen in slower endurance athletes who over-drink plain water. Aim to roughly match intake to sweat losses rather than drinking as much as possible, and use electrolyte drinks for long sessions. Drinking to thirst is a safe guide for most people." },
      { question: "Do I need sports drinks or is water enough?", answer: "For sessions under about an hour, plain water is usually sufficient. For longer or very intense exercise, especially in heat, drinks containing sodium and other electrolytes help replace what you lose in sweat, maintain fluid balance and, with some carbohydrate, sustain energy. Electrolytes also reduce the risk of hyponatraemia during prolonged efforts. Choose based on duration, intensity and sweat saltiness; if you notice white salt stains on clothing, you likely lose more sodium and benefit from electrolytes." },
      { question: "What are the warning signs of dehydration during exercise?", answer: "Early signs include thirst, a dry mouth, dark urine, fatigue setting in sooner than usual, a higher heart rate at your normal effort, and reduced performance. As it worsens you may feel dizzy, get a headache, cramp, or feel nauseated, and stop sweating in severe heat illness, which is a medical emergency. If you notice these signs, slow down, move to shade, and drink fluids with electrolytes. Preventing dehydration by drinking steadily is far better than treating it." },
      { question: "Should I hydrate before and after exercise too?", answer: "Absolutely. Arriving well hydrated matters as much as drinking during exercise, so aim to drink fluids in the hours beforehand until your urine is pale. During the session, sip to replace losses as this calculator estimates. Afterward, rehydrate by drinking roughly 1.2 to 1.5 litres for every kilogram of body weight lost, including sodium to help retain the fluid. Spreading intake before, during and after keeps you in better balance than trying to catch up all at once." },
    ],
    relatedCalculators: ["water-intake-calculator", "tdee-calculator", "calories-burned-by-activity-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American College of Sports Medicine (ACSM) hydration position stand",
    sourceUrl: "https://journals.lww.com/acsm-msse/fulltext/2007/02000/exercise_and_fluid_replacement.22.aspx",
  },
  {
    id: "steps-to-calories",
    slug: "steps-to-calories-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Steps to Calories Calculator",
    shortDescription: "Convert a daily step count into an estimate of calories burned.",
    seoTitle: "Steps to Calories Calculator — Convert Steps Burned",
    metaDescription:
      "Free steps to calories calculator. Convert your daily step count and body weight into an estimate of how many calories those steps burned.",
    primaryKeyword: "steps to calories calculator",
    secondaryKeywords: ["steps calorie calculator", "calories burned walking", "convert steps to calories"],
    fields: [
      { id: "steps", label: "Number of steps", type: "number", unit: "steps", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "caloriesBurned", label: "Calories burned", format: "number", decimals: 0, unit: "kcal", isPrimary: true },
    ],
    formula: "Calories = steps × weight(kg) × 0.00057",
    explanation:
      "Walking is one of the most accessible forms of exercise, and tracking steps is a simple way to gauge daily activity, but a raw step count says little about energy used unless you convert it. A steps to calories calculator translates the number of steps you take into an estimate of calories burned, scaled by your body weight because moving a heavier body costs more energy per step. This tool multiplies your steps by your weight in kilograms and a small conversion constant that reflects the average energy cost of a single step. The result gives a practical sense of how much a walk, a busy day of errands, or a deliberate ten-thousand-step target actually contributes to your energy expenditure. A steps to calories calculator is handy for anyone using a pedometer, phone or smartwatch who wants to connect their step goal to weight management or general fitness. It also helps put popular targets in perspective: the widely cited ten thousand steps a day is a helpful motivational round number rather than a strict scientific threshold, and research shows meaningful health benefits accrue well below it, with gains continuing as steps rise. Keep in mind that this is an estimate: actual calories depend on your stride length, walking speed, incline, fitness and terrain, none of which a simple step count captures. Faster or uphill walking burns more per step than the average built into the constant. Use the figure as an easy, motivating approximation to track trends and support activity goals rather than a precise measurement.",
    formulaExplanation:
      "The formula multiplies your step count by your body weight because each step must lift and move your mass, so heavier people spend more energy per step. The constant 0.00057 represents the approximate kilocalories burned per step per kilogram of body weight, derived from average walking data across stride length and pace. Multiplying the three together, steps, weight and the constant, gives a quick estimate of total calories burned, though real values shift with speed, incline and individual gait.",
    example: {
      inputs: { steps: 10000, weightKg: 70 },
      explanation: "For 10,000 steps at 70 kg: 10,000 × 70 × 0.00057 = 399 kcal burned.",
    },
    faqs: [
      { question: "How many calories does 10,000 steps burn?", answer: "It depends mainly on your body weight, but for a person of around 70 kilograms, ten thousand steps burn roughly 400 calories using this estimate. A heavier person burns more and a lighter person less, since energy scales with the mass being moved. Speed and terrain also matter, so brisk or uphill walking burns more than the average. Treat 400 as a ballpark for a typical adult rather than a fixed figure for everyone." },
      { question: "Is 10,000 steps a day a scientific target?", answer: "Not originally. The ten-thousand-step goal began as a marketing slogan for a Japanese pedometer in the 1960s, not a research finding. Studies since show substantial health benefits at lower counts, with mortality risk dropping notably from around four to seven thousand steps a day and continuing to improve as steps increase, plateauing higher up. Ten thousand remains a fine motivational target, but do not feel it is a strict minimum; more movement of any amount helps." },
      { question: "Why does body weight change the calorie estimate?", answer: "Every step requires energy to lift, support and propel your body mass, so a heavier person expends more calories covering the same number of steps than a lighter person. That is why the formula multiplies steps by weight rather than using a flat per-step figure. It also means that as you lose weight, the calories burned per step gradually fall, which is one reason a step goal that once created a deficit may burn slightly less over time." },
      { question: "How accurate are step-based calorie estimates?", answer: "They are rough approximations. A simple steps-to-calories formula uses an average energy cost per step and cannot account for your individual stride length, walking speed, incline, fitness or efficiency, all of which affect real energy use. Fitness trackers refine estimates by adding heart rate and motion data but still carry error. Use the number to track your own trends and stay motivated rather than treating it as a precise measurement of exactly how many calories you burned." },
      { question: "Are steps enough exercise on their own?", answer: "Walking and accumulating steps deliver real benefits for heart health, mood, blood sugar and weight management, and a high daily step count is genuinely valuable. However, steps mostly provide low-to-moderate aerobic activity and do little for muscular strength. For well-rounded fitness, combine regular walking with resistance training a couple of times a week and some higher-intensity cardio. Steps are an excellent foundation of daily movement, but they work best as part of a broader routine." },
    ],
    relatedCalculators: ["calories-burned-by-activity-calculator", "tdee-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "CDC physical activity guidance",
    sourceUrl: "https://www.cdc.gov/physical-activity-basics/benefits/index.html",
  },
  {
    id: "blood-pressure-category",
    slug: "blood-pressure-category-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Blood Pressure Category Calculator",
    shortDescription: "Classify a blood pressure reading using AHA categories.",
    seoTitle: "Blood Pressure Category Calculator — AHA Chart",
    metaDescription:
      "Free blood pressure category calculator. Enter your systolic and diastolic numbers to see where your reading falls on the American Heart Association chart.",
    primaryKeyword: "blood pressure category calculator",
    secondaryKeywords: ["blood pressure chart", "bp category calculator", "hypertension stage calculator"],
    fields: [
      { id: "systolic", label: "Systolic (top number)", type: "number", unit: "mmHg", placeholder: "120", required: true, span: 1, min: 0 },
      { id: "diastolic", label: "Diastolic (bottom number)", type: "number", unit: "mmHg", placeholder: "80", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "category", label: "Blood pressure category", format: "text", isPrimary: true },
    ],
    formula: "AHA: Normal <120/<80; Elevated 120–129/<80; Stage 1 130–139 or 80–89; Stage 2 ≥140 or ≥90; Crisis ≥180 or ≥120",
    explanation:
      "Blood pressure is the force your circulating blood exerts against artery walls, written as two numbers: systolic, the higher figure during a heartbeat, over diastolic, the lower figure between beats. A blood pressure category calculator takes those two numbers and tells you which band your reading falls into under the American Heart Association classification, from normal through elevated and the stages of hypertension to a hypertensive crisis. Knowing your category matters because high blood pressure is a leading, largely silent risk factor for heart attack, stroke, heart failure and kidney disease, often causing no symptoms until damage is advanced. Under the AHA scheme, a reading below 120 over 80 is normal; a systolic of 120 to 129 with a diastolic under 80 is elevated; stage 1 hypertension is 130 to 139 systolic or 80 to 89 diastolic; stage 2 is 140 or above systolic or 90 or above diastolic; and a reading at or above 180 over 120 is a hypertensive crisis needing urgent attention. Note the classification uses whichever number, systolic or diastolic, lands in the higher category. A blood pressure category calculator helps you interpret a home or clinic reading quickly, but a single measurement is only a snapshot; blood pressure fluctuates with stress, activity, caffeine, time of day and measurement technique. Diagnosis relies on multiple readings over time under proper conditions. Use this tool for awareness and to prompt conversations with your doctor, not to diagnose or change treatment yourself, and seek immediate care for crisis-level readings, especially with symptoms.",
    formulaExplanation:
      "The calculator sorts a reading by comparing the systolic and diastolic values against the American Heart Association's thresholds, and it deliberately assigns the higher of the two categories the numbers fall into, because risk follows the worse figure. For example, a normal systolic paired with a raised diastolic still counts as hypertension. The bands escalate from normal to elevated to stage 1 and stage 2 hypertension, with a separate crisis level for very high readings that demand prompt medical evaluation.",
    example: {
      inputs: { systolic: 135, diastolic: 85 },
      explanation: "135 systolic falls in the 130–139 band and 85 diastolic in 80–89, so this is Hypertension stage 1.",
    },
    faqs: [
      { question: "Which number matters more, systolic or diastolic?", answer: "Both matter, and this classification uses whichever falls into the higher category. Historically diastolic drew attention, but systolic pressure is now considered the stronger predictor of cardiovascular risk in most adults over about fifty, as arteries stiffen with age. In younger people diastolic can be more informative. Because either elevated number raises risk, treatment targets both. If one of your numbers is high while the other is normal, you are still classified by the higher, more concerning value." },
      { question: "Why can a single reading be misleading?", answer: "Blood pressure naturally varies throughout the day and rises with stress, caffeine, exercise, a full bladder, talking, or the anxiety of a clinic visit, known as white-coat effect. A single high reading does not confirm hypertension, and one normal reading does not rule it out. Doctors diagnose based on several measurements taken correctly on different days, often supported by home or 24-hour monitoring. Use this calculator to interpret a reading, but base any diagnosis on a proper series." },
      { question: "What should I do about a hypertensive crisis reading?", answer: "A reading at or above 180 over 120 is a hypertensive crisis. If you get this figure, rest a few minutes and measure again; if it remains that high, contact your doctor promptly. If it is accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness or weakness, vision changes, or difficulty speaking, treat it as a medical emergency and call emergency services immediately, as it may signal organ damage in progress that needs urgent treatment." },
      { question: "How can I lower high blood pressure?", answer: "Lifestyle changes are the foundation and can be very effective: reducing sodium, eating more fruits, vegetables and whole grains as in the DASH diet, staying physically active, losing excess weight, limiting alcohol, not smoking, managing stress and sleeping well. For many people with stage 1 or higher hypertension, doctors also prescribe medication. The right approach depends on your category, overall cardiovascular risk and other conditions, so work with your healthcare provider to set a plan and monitor progress." },
      { question: "How should I measure blood pressure accurately at home?", answer: "Sit quietly for five minutes with your back supported and feet flat, avoid caffeine, exercise and smoking for thirty minutes beforehand, and empty your bladder. Rest your arm on a table at heart level, use a properly sized cuff on bare skin, and do not talk during the reading. Take two or three measurements a minute apart and record the average, at the same times each day. Good technique makes home readings far more reliable and useful." },
    ],
    relatedCalculators: ["bmi-calculator", "max-heart-rate-calculator", "waist-to-hip-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "American Heart Association blood pressure categories",
    sourceUrl: "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
  },
  {
    id: "waist-to-hip-ratio",
    slug: "waist-to-hip-ratio-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Waist-to-Hip Ratio Calculator",
    shortDescription: "Assess fat-distribution health risk from waist and hip measurements.",
    seoTitle: "Waist-to-Hip Ratio Calculator — WHR & Risk",
    metaDescription:
      "Free waist-to-hip ratio calculator. Divide your waist by your hip measurement to assess body-fat distribution and health risk using WHO thresholds.",
    primaryKeyword: "waist to hip ratio calculator",
    secondaryKeywords: ["whr calculator", "waist hip ratio", "body shape risk calculator"],
    fields: [
      { id: "waistCm", label: "Waist circumference", type: "number", unit: "cm", placeholder: "85", required: true, span: 1, min: 0 },
      { id: "hipCm", label: "Hip circumference", type: "number", unit: "cm", placeholder: "100", required: true, span: 1, min: 0 },
      sexField,
    ],
    results: [
      { id: "whr", label: "Waist-to-hip ratio", format: "number", decimals: 2, isPrimary: true },
      { id: "riskCategory", label: "Risk category", format: "text", isPrimary: false },
    ],
    formula: "WHR = waist ÷ hip; elevated risk when >0.90 (men) or >0.85 (women) per WHO",
    explanation:
      "The waist-to-hip ratio compares the circumference of your waist with that of your hips, and it is a long-established measure of how body fat is distributed, which turns out to matter as much as how much fat you carry. A waist-to-hip ratio calculator divides your waist measurement by your hip measurement to produce a single number that reflects your body shape. A higher ratio means proportionally more fat around the abdomen, the so-called apple shape, while a lower ratio reflects fat carried around the hips and thighs, the pear shape. This distinction is important because abdominal, or visceral, fat sits around internal organs and is strongly linked to heart disease, type 2 diabetes and other metabolic problems, whereas fat on the hips and thighs carries less risk. The World Health Organization considers the risk elevated when the ratio exceeds about 0.90 in men or 0.85 in women, reflecting the different body-fat patterns between sexes. A waist-to-hip ratio calculator therefore adds context that weight or body mass index alone cannot, flagging central fat even in people whose overall weight looks normal. Measure your waist at its narrowest point or midway between the lowest rib and the hip bone, and your hips at their widest, keeping the tape snug and level and breathing normally. Because the ratio depends on measurement technique, take care to be consistent. Treat the result as a screening indicator that prompts attention to central fat and metabolic health, not a diagnosis, and combine it with other measures and professional advice.",
    formulaExplanation:
      "The ratio divides waist circumference by hip circumference, producing a dimensionless number that captures where your body stores fat rather than how much you weigh. A value near or above the WHO thresholds means fat is concentrated around the abdomen, which surrounds organs and drives metabolic risk, whereas a lower value reflects hip and thigh storage that is metabolically safer. The thresholds differ by sex, higher for men, because typical healthy fat distribution and hormonal patterns place women's fat more around the hips.",
    example: {
      inputs: { waistCm: 85, hipCm: 100, sex: "male" },
      explanation: "85 ÷ 100 = 0.85, which is below the male threshold of 0.90, so this falls in the low-risk band.",
    },
    faqs: [
      { question: "How is waist-to-hip ratio different from BMI?", answer: "Body mass index compares weight to height and estimates whether you carry excess weight overall, but it cannot tell where fat sits or distinguish fat from muscle. Waist-to-hip ratio instead reveals fat distribution, highlighting abdominal fat that is especially harmful to metabolic and heart health. Someone can have a normal BMI yet a high ratio, signalling hidden central fat and raised risk. Using both measures together gives a fuller picture than either alone." },
      { question: "Why do men and women have different thresholds?", answer: "Men and women naturally store fat in different patterns because of hormonal differences. Women tend to carry more fat around the hips, thighs and buttocks, giving them lower waist-to-hip ratios on average, while men more readily accumulate fat around the abdomen. The World Health Organization sets a higher cut-off for men, about 0.90 versus 0.85 for women, so that each sex is judged against its own typical distribution and the thresholds reflect comparable levels of health risk." },
      { question: "Where exactly should I measure my waist and hips?", answer: "Measure your waist at the narrowest point of your torso, roughly midway between the lowest rib and the top of the hip bone, and your hips at the widest part of your buttocks. Keep the tape snug against the skin without compressing it, level all the way around, and take readings after breathing out normally while standing relaxed. Consistency is key, because small differences in placement noticeably change the ratio, so measure the same way each time." },
      { question: "Is waist-to-hip ratio a reliable health measure?", answer: "It is a useful and well-studied indicator of fat distribution, and a high ratio is associated with greater risk of cardiovascular disease and type 2 diabetes, sometimes predicting risk better than BMI. However, it has limits: it can be affected by measurement error, is less meaningful during pregnancy, and does not directly measure visceral fat. It works best as one screening tool among several, alongside waist circumference, BMI and clinical assessment, rather than a standalone diagnosis." },
      { question: "Can I improve my waist-to-hip ratio?", answer: "Yes, primarily by reducing abdominal fat, which shrinks the waist and lowers the ratio, since hip circumference changes less. A combination of a modest calorie deficit, regular aerobic exercise, resistance training, adequate sleep and limiting alcohol and refined sugar helps reduce visceral fat over time. Spot reduction does not work, so overall fat loss is the route. Even modest reductions in waist size meaningfully improve the ratio and, more importantly, the metabolic risk it reflects." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "waist-to-height-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "health",
    formulaSource: "World Health Organization waist-hip ratio report (2008)",
    sourceUrl: "https://www.who.int/publications/i/item/9789241501491",
  },
];
