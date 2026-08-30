import type { CalculatorDefinition, CalculatorField } from "../types";

const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};

export const healthMoreCalculators: CalculatorDefinition[] = [
  {
    id: "body-surface-area",
    slug: "body-surface-area-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Body Surface Area Calculator",
    shortDescription: "Estimate body surface area from height and weight.",
    seoTitle: "Body Surface Area Calculator — DuBois BSA Formula",
    metaDescription:
      "Free body surface area calculator. Estimate your BSA in square metres from height and weight using the classic DuBois & DuBois formula.",
    primaryKeyword: "body surface area calculator",
    secondaryKeywords: ["bsa calculator", "dubois formula", "body surface area formula"],
    fields: [
      { id: "weight", label: "Weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "height", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "bsa", label: "Body surface area", format: "number", decimals: 2, unit: "m²", isPrimary: true },
    ],
    formula: "BSA = 0.007184 × height(cm)^0.725 × weight(kg)^0.425",
    explanation:
      "Body surface area is the total measured area of the outside of the human body, expressed in square metres, and it is one of the most useful size descriptors in clinical medicine. Rather than height or weight alone, many physiological quantities scale more closely with surface area, which is why a body surface area calculator sits at the heart of chemotherapy dosing, cardiac index measurement and burn assessment. This tool uses the DuBois and DuBois equation, published in 1916, which the two researchers derived by wrapping subjects in moulded paper patterns and measuring the area against height and weight. The formula multiplies a constant by height raised to one power and weight raised to another, capturing how area grows with both stature and mass but not in simple proportion to either. Oncologists rely on a body surface area calculator because many cytotoxic drugs have a narrow safety margin and are dosed per square metre to balance efficacy against toxicity. Cardiologists divide cardiac output by surface area to compare hearts of different body sizes fairly. Because the DuBois formula was built on a small sample, several alternatives exist, but it remains the default in most clinical references. Treat the result as a standard estimate for reference and dosing context, and always defer to your care team for any medical decision it informs.",
    formulaExplanation:
      "The DuBois equation raises height and weight to fractional powers because surface area does not grow in direct proportion to either dimension. Weight scales roughly with volume, a cubic quantity, while area is a squared quantity, so the exponents of 0.725 for height and 0.425 for weight reconcile the two. The leading constant, 0.007184, calibrates the result to square metres from centimetres and kilograms.",
    example: {
      inputs: { weight: 70, height: 175 },
      explanation: "For 70 kg and 175 cm: 0.007184 × 175^0.725 × 70^0.425 ≈ 1.85 m².",
    },
    faqs: [
      { question: "Why is body surface area used for drug dosing?", answer: "Many drugs, especially chemotherapy agents, distribute and clear in proportion to body size, and surface area tracks that better than weight alone. Dosing per square metre helps keep concentrations within a narrow therapeutic window across patients of very different builds. It is not perfect, and some newer protocols use flat or weight-based dosing, but per-BSA dosing remains standard for many cytotoxic and paediatric medications where precision matters most." },
      { question: "Which BSA formula is most accurate?", answer: "No single formula is universally best, because each was derived from a limited sample. DuBois and DuBois from 1916 remains the most widely cited and is the clinical default. Mosteller offers a simpler square-root version that is easier to compute by hand and gives very similar results. Haycock and Gehan-George are tuned for children. For most adults the differences between them are small, typically a few percent." },
      { question: "What is a normal body surface area?", answer: "For an average adult, body surface area is often quoted as around 1.7 square metres, with most adults falling between roughly 1.5 and 2.0. Men tend to sit higher than women because of greater average height and weight. Children have much smaller values that rise with growth. Because BSA depends on both height and weight, there is no single normal figure, only a typical range." },
      { question: "How does BSA differ from BMI?", answer: "Body mass index divides weight by height squared to gauge whether weight is proportionate to height, and it is used to screen for underweight or obesity. Body surface area instead estimates the physical area of the skin and is used for dosing and physiological scaling. BMI is a ratio with no direct physical meaning, whereas BSA is an actual area in square metres. They answer entirely different questions." },
      { question: "Can I calculate BSA in pounds and inches?", answer: "The DuBois formula in this tool expects kilograms and centimetres, so convert first: divide pounds by 2.205 for kilograms, and multiply inches by 2.54 for centimetres. Enter those metric values to get a result in square metres. Some versions of the formula are published with imperial constants, but converting your inputs to metric is the simplest way to use this calculator accurately." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "max-heart-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "DuBois & DuBois (1916)",
  },
  {
    id: "waist-to-height-ratio",
    slug: "waist-to-height-ratio-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Waist-to-Height Ratio Calculator",
    shortDescription: "Assess central fat risk from waist and height.",
    seoTitle: "Waist-to-Height Ratio Calculator — WHtR & Risk",
    metaDescription:
      "Free waist-to-height ratio calculator. Divide your waist by your height to gauge central fat and health risk against simple thresholds.",
    primaryKeyword: "waist to height ratio calculator",
    secondaryKeywords: ["whtr calculator", "waist height ratio", "central obesity calculator"],
    fields: [
      { id: "waist", label: "Waist", type: "number", unit: "cm", placeholder: "80", required: true, span: 1, min: 0 },
      { id: "height", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ratio", label: "Waist-to-height ratio", format: "number", decimals: 2, isPrimary: true },
      { id: "category", label: "Category", format: "text", isPrimary: false },
    ],
    formula: "Ratio = waist ÷ height (same unit); healthy when below 0.5",
    explanation:
      "The waist-to-height ratio divides your waist circumference by your height, and it has emerged as one of the simplest yet most powerful screens for the health risks tied to central body fat. Unlike body mass index, which cannot tell where fat sits, this ratio zeroes in on abdominal fat, the visceral kind that wraps around organs and is most strongly linked to heart disease, type 2 diabetes and metabolic syndrome. A waist-to-height ratio calculator turns two tape measurements into a single number you can interpret at a glance. The guiding rule, popularised by researchers and adopted in several national guidelines, is memorably simple: keep your waist to less than half your height. A ratio below 0.5 is generally considered healthy, values from 0.5 to 0.6 signal increased risk, and above 0.6 marks high risk, while an unusually low value may reflect being underweight. Because both measurements share the same unit, the ratio works identically whether you measure in centimetres or inches. Clinicians and researchers favour a waist-to-height ratio calculator because studies repeatedly find it predicts cardiometabolic outcomes as well as or better than BMI, yet it needs only a tape measure. Measure your waist at the midpoint between the lowest rib and the top of the hip bone, snug but not compressing, after a normal exhale, and treat the result as a screening prompt rather than a diagnosis.",
    formulaExplanation:
      "The ratio simply divides waist by height, so it is dimensionless and works in any consistent unit. It improves on waist circumference alone because a given waist means something different on a tall versus a short person; scaling by height normalises for body size. The 0.5 threshold reflects large-population evidence that carrying a waist wider than half your height sharply raises cardiometabolic risk.",
    example: {
      inputs: { waist: 80, height: 175 },
      explanation: "80 ÷ 175 ≈ 0.46, which is below 0.5 and therefore falls in the Healthy band.",
    },
    faqs: [
      { question: "Why is waist-to-height ratio better than BMI?", answer: "BMI uses only weight and height, so it cannot distinguish muscle from fat or tell where fat is stored. Waist-to-height ratio directly reflects abdominal fat, the visceral fat most strongly tied to heart disease and diabetes. Many studies find it predicts these outcomes as well as or better than BMI, and it flags risk in people whose BMI looks normal but who carry excess weight around the middle." },
      { question: "What is a healthy waist-to-height ratio?", answer: "The widely used guide is to keep your waist under half your height, so a ratio below 0.5 is considered healthy for most adults. Values from 0.5 to 0.6 indicate increased risk, and above 0.6 signals high risk. A ratio well below 0.4 may suggest being underweight. These bands apply broadly across sexes and ethnicities, which is part of the measure's appeal." },
      { question: "Where exactly should I measure my waist?", answer: "Measure at the midpoint between the bottom of your lowest rib and the top of your hip bone, which is usually roughly at or just above the navel. Keep the tape horizontal and snug against the skin without compressing it, and take the reading after breathing out normally. Measuring on bare skin at the same point each time gives the most consistent and comparable results." },
      { question: "Does the ratio work for all body types?", answer: "The waist-to-height ratio is more consistent across different heights, sexes and ethnic groups than waist circumference alone, which is a major strength. It does have limits: it is less validated for pregnant women, growing children and highly muscular athletes with large waists from muscle rather than fat. For the general adult population, though, it is a robust and simple screening tool that needs no adjustment by group." },
      { question: "Can I lower my waist-to-height ratio?", answer: "Yes. Because the height part is fixed, the ratio falls as your waist shrinks, which happens when you lose abdominal fat. A modest calorie deficit, regular aerobic and resistance exercise, adequate sleep and limiting refined sugar and alcohol all help reduce visceral fat over time. Even a few centimetres off your waist meaningfully improves the ratio and, more importantly, the underlying metabolic risk it reflects." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "body-surface-area-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "sleep-debt",
    slug: "sleep-debt-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Sleep Debt Calculator",
    shortDescription: "Track accumulated sleep lost against your target.",
    seoTitle: "Sleep Debt Calculator — Track Lost Sleep",
    metaDescription:
      "Free sleep debt calculator. Compare your ideal and actual sleep over several nights to see how many hours of sleep debt you have built up.",
    primaryKeyword: "sleep debt calculator",
    secondaryKeywords: ["sleep deficit calculator", "how much sleep debt", "lost sleep calculator"],
    fields: [
      { id: "idealHours", label: "Ideal sleep per night", type: "number", unit: "hours", placeholder: "8", required: true, span: 1, min: 0 },
      { id: "actualHours", label: "Actual sleep per night", type: "number", unit: "hours", placeholder: "6.5", required: true, span: 1, min: 0, step: 0.1 },
      { id: "nights", label: "Number of nights", type: "number", unit: "nights", placeholder: "7", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "sleepDebt", label: "Total sleep debt", format: "number", decimals: 1, unit: "hours", isPrimary: true },
      { id: "weeklyAverage", label: "Nightly shortfall", format: "number", decimals: 1, unit: "hours/night", isPrimary: false },
    ],
    formula: "Sleep debt = (ideal hours − actual hours) × nights",
    explanation:
      "Sleep debt is the running total of sleep you have missed relative to how much your body actually needs, and it accumulates quietly night after night until the effects become hard to ignore. A sleep debt calculator makes that invisible tally visible by comparing your ideal nightly sleep with what you truly get, then multiplying the shortfall across a stretch of nights. Sleep researchers describe this as a biological debt because the deficit does not simply vanish; losing an hour a night for a week leaves you as impaired as pulling a full all-nighter, with measurable declines in attention, memory, mood, immune function and glucose control. Most adults need between seven and nine hours, so a common ideal target is eight, though the right figure is personal. This sleep debt calculator reports both your cumulative debt and the average nightly gap driving it, which helps you see whether a rough week was a one-off or part of a chronic pattern. People use a sleep debt calculator to decide how much recovery sleep to prioritise, to justify an earlier bedtime, or simply to understand why they feel foggy despite functioning. You cannot repay a large debt in a single lie-in, but consistently adding sleep over several nights gradually restores performance. Treat the number as an awareness tool that motivates better sleep habits rather than a precise clinical measurement of impairment.",
    formulaExplanation:
      "The calculation is a straightforward accumulation: each night you fall short by the difference between your ideal and actual hours, and that gap repeats across the nights you specify. Multiplying the nightly shortfall by the number of nights sums the total lost sleep. The nightly shortfall on its own shows the daily habit, while the product reveals how quickly small, repeated deficits compound into a large debt.",
    example: {
      inputs: { idealHours: 8, actualHours: 6.5, nights: 7 },
      explanation: "A 1.5-hour nightly shortfall over 7 nights builds 10.5 hours of sleep debt.",
    },
    faqs: [
      { question: "Can you fully recover from sleep debt?", answer: "Small, recent debts can be largely repaid within a few nights of extra sleep, and a couple of longer weekend nights help. Chronic, long-standing debt is harder to erase and a single long lie-in will not undo weeks of deprivation. The reliable fix is consistently sleeping enough over an extended period. Research suggests some effects of prolonged sleep loss, on metabolism and mood, may take longer to reverse than the tiredness itself." },
      { question: "How much sleep do I actually need?", answer: "Most adults need seven to nine hours per night, with the average sitting near eight, though genuine need varies with genetics, age and health. Teenagers need more, often eight to ten hours. The best personal test is how you feel: if you wake without an alarm feeling refreshed and stay alert through the day without heavy caffeine, you are likely meeting your need. Set your ideal figure in this tool accordingly." },
      { question: "Is sleep debt the same as insomnia?", answer: "No. Sleep debt is simply the accumulated gap between the sleep you need and the sleep you get, whatever the cause, often lifestyle or schedule. Insomnia is a clinical sleep disorder marked by difficulty falling or staying asleep despite adequate opportunity, and it frequently produces sleep debt as a result. If you regularly cannot sleep even when you have the time and want to, that points toward insomnia and merits professional advice." },
      { question: "Can I catch up on sleep at the weekend?", answer: "Partly. A modest weekend lie-in can reduce a small weekday debt and relieve some tiredness, but it does not fully restore attention and metabolic markers, and swinging your schedule too far can disrupt your body clock and make Monday harder. Sleeping in by an hour or two is more sustainable than a marathon lie-in. Spreading recovery across several consistent nights beats trying to repay everything at once." },
      { question: "What are the signs of too much sleep debt?", answer: "Common signs include persistent daytime sleepiness, difficulty concentrating, irritability, low mood, stronger cravings for sugar and caffeine, slower reactions and getting sick more often. You may nod off easily when inactive or rely on alarms to wake. Over the long term, chronic sleep debt is linked to higher risks of weight gain, high blood pressure and impaired glucose control, which is why treating persistent debt as a real health issue matters." },
    ],
    relatedCalculators: ["max-heart-rate-calculator", "water-intake-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "blood-alcohol-content",
    slug: "blood-alcohol-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Blood Alcohol Content Calculator",
    shortDescription: "Estimate your BAC from drinks, weight and time.",
    seoTitle: "Blood Alcohol Content Calculator — Estimate BAC",
    metaDescription:
      "Free blood alcohol content calculator. Estimate your BAC from standard drinks, body weight, sex and hours elapsed using the Widmark method.",
    primaryKeyword: "blood alcohol content calculator",
    secondaryKeywords: ["bac calculator", "widmark formula", "estimate blood alcohol"],
    fields: [
      { id: "drinks", label: "Standard drinks", type: "number", unit: "drinks", placeholder: "3", required: true, span: 1, min: 0, helpText: "Each ≈ 14 g of pure alcohol." },
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "hours", label: "Hours since first drink", type: "number", unit: "hours", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      sexField,
    ],
    results: [
      { id: "bac", label: "Estimated BAC", format: "percentage", decimals: 3, isPrimary: true },
    ],
    formula: "BAC = (grams ÷ (weight_g × r)) × 100 − 0.015 × hours; r = 0.68 male, 0.55 female",
    explanation:
      "Blood alcohol content is the percentage of alcohol in your bloodstream, and it is the measure police, doctors and the law use to gauge intoxication. A blood alcohol content calculator estimates that figure from how much you have drunk, your body weight, your sex and how long has passed since you started drinking. It applies the Widmark formula, devised by Swedish chemist Erik Widmark in the 1930s and still the foundation of forensic alcohol calculations today. The method rests on the fact that alcohol spreads through the body's water, so a heavier person and, on average, a man dilute the same amount of alcohol into a larger volume and reach a lower peak. Each standard drink contributes about 14 grams of pure alcohol, and the body then clears it at a roughly steady rate near 0.015 percent per hour regardless of what you do. This blood alcohol content calculator subtracts that elimination over the hours elapsed to approximate your current level. People use it to understand roughly how alcohol affects them and how long it lingers, but the output is only an estimate. Real BAC depends on food, hydration, medications, drinking speed, liver health and individual variation that no formula captures. Crucially, never rely on a blood alcohol content calculator to decide whether it is safe or legal to drive; if you have been drinking, do not drive, and arrange another way home.",
    formulaExplanation:
      "Widmark's method divides the grams of alcohol consumed by the body's water volume, approximated as body mass times a distribution ratio, which is about 0.68 for men and 0.55 for women reflecting typical differences in body water. Multiplying by 100 converts to a percentage. The body then eliminates alcohol at a near-constant 0.015 percent per hour, so that amount is subtracted for every hour that has passed since drinking began.",
    example: {
      inputs: { drinks: 3, weightKg: 70, hours: 2, sex: "male" },
      explanation: "3 drinks give 42 g: (42 ÷ (70,000 × 0.68)) × 100 − 0.015 × 2 ≈ 0.058% BAC.",
    },
    faqs: [
      { question: "How accurate is a BAC calculator?", answer: "It gives a rough estimate, not a precise reading. The Widmark formula ignores factors that strongly affect real blood alcohol, including food in your stomach, drinking speed, hydration, medications, liver function and individual metabolism. Two people with identical inputs can test quite differently. Only a breathalyser or blood test measures actual BAC. Treat any calculator result as a general guide to how alcohol may affect you, never as proof you are under a legal limit." },
      { question: "What counts as one standard drink?", answer: "A standard drink contains about 14 grams of pure alcohol, which is the amount in roughly 350 ml of regular beer at 5 percent, 150 ml of wine at 12 percent, or 45 ml of spirits at 40 percent. Definitions vary slightly by country, and many real-world pours, especially wine and cocktails, are larger than one standard drink, so it is easy to underestimate how many you have actually consumed." },
      { question: "How long does it take for alcohol to leave your system?", answer: "The body eliminates alcohol at a fairly steady rate of about one standard drink per hour, or roughly 0.015 percent BAC per hour, and almost nothing speeds this up. Coffee, cold showers, food and water do not sober you faster; only time does. So a peak BAC of 0.08 percent takes over five hours to return to zero. This is why alcohol can still be present the morning after heavy drinking." },
      { question: "Can I use this to decide if I can drive?", answer: "No, absolutely not. This calculator is for general awareness only and must never be used to judge whether you are fit or legal to drive. The estimate can easily be lower than your true BAC, and legal limits and impairment vary. The only safe rule after drinking is not to drive at all. Plan ahead with a designated driver, a taxi, public transport or a ride service instead." },
      { question: "Why do men and women process alcohol differently?", answer: "On average, women have a higher proportion of body fat and less body water than men of the same weight, so alcohol distributes into a smaller volume and reaches a higher concentration. Women also tend to have lower levels of the stomach enzyme that begins breaking down alcohol. The Widmark formula reflects this with a lower distribution ratio for women, which is why the same drinks can produce a higher BAC in a woman than a man of equal weight." },
    ],
    relatedCalculators: ["water-intake-calculator", "body-surface-area-calculator", "max-heart-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "max-heart-rate",
    slug: "max-heart-rate-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Max Heart Rate Calculator",
    shortDescription: "Estimate maximum heart rate and training zones.",
    seoTitle: "Max Heart Rate Calculator — MHR & Training Zones",
    metaDescription:
      "Free max heart rate calculator. Estimate your maximum heart rate from age and see fat-burn and cardio training zones in beats per minute.",
    primaryKeyword: "max heart rate calculator",
    secondaryKeywords: ["maximum heart rate", "target heart rate zones", "mhr calculator"],
    fields: [
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "maxHeartRate", label: "Maximum heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: true },
      { id: "fatBurnLow", label: "Fat-burn zone (50%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "cardioHigh", label: "Cardio zone (85%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
    ],
    formula: "Max heart rate = 220 − age; zones at 50% and 85% of that maximum",
    explanation:
      "Maximum heart rate is the highest number of beats per minute your heart can reach during all-out effort, and it is the anchor for every heart-rate training zone. A max heart rate calculator estimates that ceiling from your age using the familiar 220-minus-age formula, a rule of thumb that has guided exercisers, coaches and cardiac rehab programmes for decades. Once you know your maximum, you can express any workout intensity as a percentage of it, which is far more meaningful than a raw pulse figure. This tool also marks out two practical anchors: the lower end of the moderate range near 50 percent, often labelled the fat-burning zone, and 85 percent, the upper edge of vigorous cardio training. Training between these points builds aerobic fitness efficiently while keeping effort sustainable, whereas brief intervals above them push anaerobic capacity. Endurance athletes, gym-goers and anyone using a heart-rate monitor rely on a max heart rate calculator to set targets that match their goals, from easy recovery jogs to hard threshold sessions. It is important to understand that 220-minus-age is a population average with a wide margin of error, easily ten to fifteen beats in either direction, because true maximum varies with genetics and fitness, not just age. For a precise figure, a supervised maximal exercise test is the gold standard, and anyone with a heart condition should seek medical guidance before training near their limit.",
    formulaExplanation:
      "The 220-minus-age formula works because maximum heart rate declines steadily with age as the heart's pacemaker cells and responsiveness change, falling by roughly one beat per year. Subtracting age from 220 approximates that trend for the average adult. Training zones are then simple percentages of this maximum: multiplying by 0.5 and 0.85 marks the moderate and vigorous boundaries that define effective aerobic exercise.",
    example: {
      inputs: { age: 30 },
      explanation: "220 − 30 = 190 bpm; the fat-burn zone starts near 95 bpm and cardio tops around 162 bpm.",
    },
    faqs: [
      { question: "How accurate is the 220-minus-age formula?", answer: "It is a useful average but far from precise for any individual. Studies show real maximum heart rate can differ from the estimate by ten to fifteen beats per minute in either direction, because it depends on genetics and physiology more than age alone. Alternative formulas such as 208 minus 0.7 times age fit large populations slightly better. For everyday training the simple version is fine, but do not treat the exact number as gospel." },
      { question: "What is the fat-burning heart rate zone?", answer: "The fat-burning zone is roughly 50 to 70 percent of your maximum heart rate, a moderate intensity where the body draws a higher proportion of energy from fat. It is real, but the name can mislead: higher-intensity exercise burns more total calories and often more total fat overall, even if a smaller percentage comes from fat. The zone is genuinely useful for building an aerobic base and for longer, sustainable sessions." },
      { question: "Why should I train using heart rate zones?", answer: "Heart-rate zones let you match effort to purpose objectively rather than by feel alone. Easy zones build endurance and aid recovery, moderate zones improve aerobic capacity, and hard zones raise threshold and speed. Training by zone helps prevent the common trap of going too hard on easy days and too easy on hard days. It also lets you gauge progress, since a lower heart rate at the same pace signals improving fitness." },
      { question: "Does a lower resting heart rate mean I am fitter?", answer: "Often, yes. A lower resting heart rate generally reflects a stronger, more efficient heart that pumps more blood per beat, which is common in trained endurance athletes whose resting rates can dip below 50. That said, resting rate is also influenced by genetics, stress, sleep, caffeine and medication, so it is only one signal. A resting rate that is unusually low with symptoms, or unusually high, is worth discussing with a doctor." },
      { question: "Should I see a doctor before training at high intensity?", answer: "If you have a heart condition, high blood pressure, diabetes, are over 40 and previously inactive, or notice chest pain, dizziness or breathlessness, you should consult a doctor before pushing near your maximum heart rate. High-intensity exercise is safe and beneficial for most people, but a medical check first is sensible if any risk factors apply. A supervised exercise test also gives a far more accurate personal maximum than any age-based formula." },
    ],
    relatedCalculators: ["running-pace-calculator", "bmr-calculator", "water-intake-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
];
