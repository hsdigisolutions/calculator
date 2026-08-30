import type { CalculatorDefinition } from "../types";

export const constructionR8Calculators: CalculatorDefinition[] = [
  {
    id: "stair",
    slug: "stair-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Stair Calculator",
    shortDescription: "Work out steps, riser height and total run for a staircase.",
    seoTitle: "Stair Calculator — Steps, Riser Height & Run",
    metaDescription:
      "Free stair calculator. Find the number of steps, the actual riser height and the total run of a staircase from the total rise, target riser and tread depth.",
    primaryKeyword: "stair calculator",
    secondaryKeywords: ["staircase calculator", "how many stairs do i need", "stair riser calculator"],
    fields: [
      { id: "totalRiseIn", label: "Total rise", type: "number", unit: "in", placeholder: "45", required: true, span: 2, min: 0, step: 0.1, helpText: "Vertical height from finished floor to finished floor." },
      { id: "riserHeightIn", label: "Target riser height", type: "number", unit: "in", placeholder: "7.5", required: false, span: 1, min: 1, step: 0.1, defaultValue: 7.5 },
      { id: "treadDepthIn", label: "Tread depth", type: "number", unit: "in", placeholder: "10", required: false, span: 1, min: 1, step: 0.1, defaultValue: 10 },
    ],
    results: [
      { id: "numberOfSteps", label: "Number of steps", format: "number", decimals: 0, unit: "steps", isPrimary: true },
      { id: "actualRiserHeightIn", label: "Actual riser height", format: "number", decimals: 2, unit: "in", isPrimary: false, description: "Total rise shared evenly across the steps" },
      { id: "totalRunIn", label: "Total run", format: "number", decimals: 1, unit: "in", isPrimary: false, description: "Horizontal length of the stair" },
    ],
    formula: "Steps = ⌈total rise ÷ target riser⌉; actual riser = total rise ÷ steps; total run = (steps − 1) × tread depth",
    formulaExplanation:
      "The total rise is the fixed vertical distance the stair must climb, so dividing it by your target riser height gives roughly how many steps are needed, and rounding up ensures the risers end up a little shorter rather than taller than the target. Dividing the total rise by that whole number of steps gives the actual riser height, which is identical for every step because building codes require uniform risers. The total run uses one fewer tread than there are steps, since the top step lands on the upper floor and needs no tread of its own, multiplied by the tread depth.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A stair calculator turns the one measurement you cannot change — the total rise from one finished floor to the next — into a buildable staircase by working out how many steps it needs, how tall each riser will be, and how much horizontal room the flight will occupy. You enter the total rise plus your preferred riser height and tread depth, and the tool divides the rise by the target riser and rounds up to a whole number of steps, because you can only build complete risers. It then shares the total rise evenly across those steps to find the actual riser height, which almost always differs slightly from your target and, crucially, is the same for every step: uneven risers are a serious trip hazard and are prohibited by building codes, which typically allow only a small variation between the tallest and shortest riser in a flight. The total run tells you whether the stair will fit the space you have, using one fewer tread than steps because the final step is the upper floor itself. Comfortable stairs balance riser and tread so the climb feels natural, often checked against a rule such as two risers plus one tread landing near 25 inches. Carpenters, deck builders and remodelers use this to lay out a stringer before cutting, and homeowners use it to see whether a staircase will fit. Always confirm riser, tread and headroom limits against your local building code.",
    example: {
      inputs: { totalRiseIn: 45, riserHeightIn: 7.5, treadDepthIn: 10 },
      explanation: "45 ÷ 7.5 = 6 steps; actual riser = 45 ÷ 6 = 7.5 in; total run = (6 − 1) × 10 = 50 in.",
    },
    faqs: [
      { question: "What is a comfortable stair riser height?", answer: "Most codes cap risers around 7.75 inches, and a comfortable, easy climb usually falls between 7 and 7.5 inches. Taller risers make a steeper, more tiring stair, while very short risers stretch the run and take more floor space. This calculator lets you set a target riser, then reports the actual height once the rise is divided into whole steps, so you can adjust until it feels right." },
      { question: "Why must all the risers be the same height?", answer: "People climb stairs by feel, expecting every step to be identical, so a single riser that is taller or shorter than the rest is a common cause of trips and falls. Building codes reflect this by allowing only a small variation, often three-eighths of an inch, between the largest and smallest riser in a flight. That is why the calculator divides the total rise evenly across all the steps rather than leaving an odd step at the top." },
      { question: "How is the total run different from the total rise?", answer: "The total rise is the vertical height the stair climbs, measured floor to floor, while the total run is the horizontal distance it covers from the bottom step to the top. Run depends on tread depth and the number of treads, using one fewer tread than steps because the top step is the landing. Checking the run early tells you whether the staircase will actually fit the available floor space." },
      { question: "What tread depth should I use?", answer: "Tread depth, the front-to-back walking surface, is commonly around 10 to 11 inches, with codes setting a minimum near 10 inches for the part you step on. Deeper treads feel safer and more comfortable but lengthen the total run and demand more floor space. Pair tread depth and riser height together so the stair is neither too steep nor too shallow, and confirm both against your local code." },
      { question: "Does this calculator replace local building codes?", answer: "No. It is a planning tool that gives you a sound starting layout for steps, riser height and run, but the legally binding figures come from your local building code and any inspector. Codes govern maximum riser, minimum tread, minimum headroom, handrail requirements and nosing, and they vary by jurisdiction. Use this result to design and check feasibility, then verify every dimension against the code that applies to your project." },
    ],
    relatedCalculators: ["concrete-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "wallpaper",
    slug: "wallpaper-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Wallpaper Calculator",
    shortDescription: "Estimate how many rolls of wallpaper a wall needs.",
    seoTitle: "Wallpaper Calculator — Rolls Needed",
    metaDescription:
      "Free wallpaper calculator. Estimate how many rolls of wallpaper you need for a wall from its width and height and the roll's dimensions.",
    primaryKeyword: "wallpaper calculator",
    secondaryKeywords: ["how many rolls of wallpaper do i need", "wallpaper rolls calculator", "wallpaper coverage calculator"],
    fields: [
      { id: "wallWidthFt", label: "Wall width", type: "number", unit: "ft", placeholder: "15", required: true, span: 1, min: 0, step: 0.01 },
      { id: "wallHeightFt", label: "Wall height", type: "number", unit: "ft", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "rollWidthFt", label: "Roll width", type: "number", unit: "ft", placeholder: "1.73", required: false, span: 1, min: 0, step: 0.01, defaultValue: 1.73, helpText: "Standard European roll ≈ 1.73 ft (0.53 m)." },
      { id: "rollLengthFt", label: "Roll length", type: "number", unit: "ft", placeholder: "33", required: false, span: 1, min: 0, step: 0.1, defaultValue: 33, helpText: "Standard roll ≈ 33 ft (10 m)." },
    ],
    results: [
      { id: "rollsNeeded", label: "Rolls needed", format: "number", decimals: 0, unit: "rolls", isPrimary: true },
      { id: "stripsNeeded", label: "Strips to hang", format: "number", decimals: 0, unit: "strips", isPrimary: false },
      { id: "stripsPerRoll", label: "Strips per roll", format: "number", decimals: 0, unit: "strips", isPrimary: false },
    ],
    formula: "Strips per roll = ⌊roll length ÷ wall height⌋; strips needed = ⌈wall width ÷ roll width⌉; rolls = ⌈strips needed ÷ strips per roll⌉",
    formulaExplanation:
      "Wallpaper hangs in vertical strips cut from a roll, so the estimate works in whole strips rather than raw area. Dividing the roll length by the wall height and rounding down gives how many full-height strips one roll yields, discarding the leftover that is too short to reach the ceiling. Dividing the wall width by the roll width and rounding up gives how many strips are needed to span the wall side to side, since a partial strip still requires a full-width piece. Dividing the strips needed by the strips each roll provides, and rounding up, gives the number of whole rolls to buy.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A wallpaper calculator estimates how many rolls you need to cover a wall, and it works the way a decorator actually hangs paper: in full-height vertical strips cut from each roll. You enter the wall's width and height and the roll's width and length, and the tool first works out how many strips it can cut from one roll by dividing the roll length by the wall height and rounding down, because any remainder that is shorter than the wall cannot be used as a full drop. It then counts how many strips are needed to cover the wall's width, dividing width by roll width and rounding up, and finally divides the strips needed by the strips per roll to reach the number of rolls. Estimating in strips rather than dividing raw areas matters because the offcut left at the top or bottom of each drop is usually wasted, so a simple area calculation understates the real requirement. This estimate does not subtract doors and windows, which is deliberately conservative and helps absorb the extra paper lost to pattern matching, where repeating designs force you to line up motifs between strips and trim more from each drop. For a bold pattern with a long repeat, or a wall with many openings, buy an extra roll from the same batch so colours match, and check the dye-lot number on every roll before you start.",
    example: {
      inputs: { wallWidthFt: 15, wallHeightFt: 8, rollWidthFt: 1.73, rollLengthFt: 33 },
      explanation: "Strips per roll = ⌊33 ÷ 8⌋ = 4; strips needed = ⌈15 ÷ 1.73⌉ = 9; rolls = ⌈9 ÷ 4⌉ = 3.",
    },
    faqs: [
      { question: "How many rolls of wallpaper do I need?", answer: "It depends on the wall size and the roll dimensions. The calculator counts how many full-height strips one roll yields, then how many strips span the wall's width, and divides one by the other. A taller wall yields fewer strips per roll, so it needs more rolls for the same width. Enter the exact roll size printed on the packaging, since standard European and American rolls differ in both width and length." },
      { question: "Should I subtract doors and windows?", answer: "This calculator does not subtract them, which keeps the estimate conservative and helps cover the extra paper lost to pattern matching and mistakes. For a wall with a single door or window, leaving them in is the safe choice. Only for very large openings, such as a wide patio door or floor-to-ceiling window, is it worth reducing the width you enter, and even then keep a generous margin." },
      { question: "How does pattern repeat affect how much I need?", answer: "A repeating pattern must line up between neighbouring strips, so you trim waste from the top of each drop to align the motif. The longer the repeat, the more you lose per strip and the more rolls you need. Plain or random-match papers waste the least. If your paper has a large repeat, add an extra roll beyond this estimate and check the repeat length on the label before ordering." },
      { question: "Why buy rolls from the same batch?", answer: "Wallpaper is printed in production runs, and colour can shift subtly between batches, so paper from different batches placed side by side may show a visible seam in shade. Every roll carries a batch or dye-lot number; buy all your rolls with the same number, and buy one or two spare at the same time. Matching a colour later from a different batch is the most common cause of a mismatched feature wall." },
      { question: "Does roll width and length vary between products?", answer: "Yes, considerably. A common European roll is about 0.53 metres wide and 10 metres long, roughly 1.73 by 33 feet, while American rolls and specialty papers use different sizes. Because the strip count depends directly on these dimensions, using the wrong figures throws off the whole estimate. Read the exact width and length from the roll's packaging and enter them here rather than relying on a generic default." },
    ],
    relatedCalculators: ["paint-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "paver",
    slug: "paver-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Paver Calculator",
    shortDescription: "Estimate how many pavers you need for a patio or path.",
    seoTitle: "Paver Calculator — How Many Pavers Do I Need?",
    metaDescription:
      "Free paver calculator. Estimate how many pavers you need for a patio, walkway or driveway from the area and paver size, with a waste margin.",
    primaryKeyword: "paver calculator",
    secondaryKeywords: ["how many pavers do i need", "patio paver calculator", "paver coverage calculator"],
    fields: [
      { id: "areaSqFt", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "100", required: true, span: 2, min: 0, step: 0.01 },
      { id: "paverLengthIn", label: "Paver length", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "paverWidthIn", label: "Paver width", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "wastePercent", label: "Waste allowance", type: "number", unit: "%", placeholder: "5", required: false, span: 2, min: 0, max: 50, defaultValue: 5, helpText: "Extra for cuts, breakage and edges." },
    ],
    results: [
      { id: "paversNeeded", label: "Pavers needed", format: "number", decimals: 0, unit: "pavers", isPrimary: true, description: "Includes waste allowance" },
    ],
    formula: "Paver area (ft²) = (length × width) ÷ 144; pavers = ⌈area ÷ paver area × (1 + waste%)⌉",
    formulaExplanation:
      "Each paver's face area is found by multiplying its length and width in inches and dividing by 144, the number of square inches in a square foot, so it can be compared with the project area measured in square feet. Dividing the total area by that per-paver area gives the number of pavers needed to tile the surface with no gaps. Multiplying by one plus the waste fraction adds a margin for the pavers cut down at borders and curves, plus those cracked in handling, and rounding up ensures you buy whole pavers because a fraction of a paver cannot be purchased.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A paver calculator estimates how many pavers you need to surface a patio, walkway, driveway or pool surround, from the total area and the size of a single paver. Because pavers are sold and laid as whole units, the tool converts each paver's dimensions from inches into square feet, divides the project area by that figure to find how many pavers tile the surface, and adds a waste margin before rounding up. The waste allowance is the part that saves the job: pavers are cut to fit against edges, around curves and at corners, and the offcuts are rarely reusable, while some crack during delivery, handling and compaction. A five to ten percent margin covers this for a simple rectangular layout, and intricate patterns such as herringbone or circular designs, or areas with many angled edges, waste more and deserve a higher figure. Ordering the exact count almost always leaves you short, and a top-up order may arrive from a different production batch with a slightly different colour or texture that stands out in the finished surface. This estimate counts the pavers themselves; it does not size the base gravel, bedding sand or polymeric joint sand a proper installation needs, so plan those separately from the same area. Landscapers, hardscape contractors and homeowners use it to price a project and order close to the right quantity, keeping a few spare pavers from the same batch for future repairs.",
    example: {
      inputs: { areaSqFt: 100, paverLengthIn: 12, paverWidthIn: 12, wastePercent: 5 },
      explanation: "Paver area = (12 × 12) ÷ 144 = 1 ft²; 100 ÷ 1 × 1.05 = 105 pavers.",
    },
    faqs: [
      { question: "How many pavers do I need per square foot?", answer: "Divide one by the paver's area in square feet. A 12-by-12-inch paver covers exactly one square foot, so you need about one per square foot, while a 6-by-6-inch paver covers a quarter of a square foot and needs four. The calculator does this conversion for you from the paver dimensions you enter, then adds a waste margin, so you get the total count rather than a per-square-foot rate to multiply yourself." },
      { question: "How much waste should I add for pavers?", answer: "Five percent is a sensible default for a simple rectangular patio laid in a straight or running-bond pattern, and it is the calculator's starting value. Herringbone, basketweave, circular and diagonal layouts waste more because of the angled cuts, so use ten percent or higher for those. The margin covers pavers cut to fit borders and curves plus breakage in handling. A small surplus is far cheaper than a second batch that may not match." },
      { question: "Does this calculator include the base and sand?", answer: "No. It counts only the pavers themselves. A durable installation also needs a compacted gravel base, usually four to six inches deep, a bedding layer of sand, and polymeric jointing sand swept between the pavers. Calculate the gravel and bedding sand from the same area and your chosen depths, and buy jointing sand according to the paver size and joint width, since narrower joints and larger pavers use less." },
      { question: "Why should I keep spare pavers?", answer: "Pavers are produced in batches, and colour and texture can shift subtly between production runs. If you crack or stain a paver years later and replace it with newly bought stock, the repair can stand out against the weathered originals. Setting aside a small number of spares from your original batch, stored dry and out of the sun, lets you make an invisible repair. Ordering a slight surplus for this reason is common practice." },
      { question: "How do I measure an irregular patio for pavers?", answer: "Split the shape into simple rectangles and, where needed, triangles, calculate the area of each, and add them together before entering the total. For curved edges, approximate with the rectangle that best contains the curve and let the waste margin absorb the overage. Measuring slightly generously and rounding the area up is safer than rounding down, because running short means an extra delivery and a possible batch mismatch." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "topsoil",
    slug: "topsoil-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Topsoil Calculator",
    shortDescription: "Estimate cubic yards of topsoil needed for a bed or lawn.",
    seoTitle: "Topsoil Calculator — Cubic Yards & Cubic Feet",
    metaDescription:
      "Free topsoil calculator. Estimate the cubic yards and cubic feet of topsoil needed to fill a bed or level a lawn from length, width and depth.",
    primaryKeyword: "topsoil calculator",
    secondaryKeywords: ["how much topsoil do i need", "topsoil yardage calculator", "soil volume calculator"],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depthIn", label: "Depth", type: "number", unit: "in", placeholder: "6", required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "cubicYards", label: "Topsoil needed", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (depth ÷ 12); yd³ = ft³ ÷ 27",
    formulaExplanation:
      "Length times width gives the ground area the topsoil will cover in square feet, and multiplying by depth turns that flat area into a three-dimensional volume. Depth is divided by 12 first because it is entered in inches while length and width are in feet, so all three dimensions share one unit before they are multiplied. The result is the volume in cubic feet, which suits small bagged purchases. Dividing that figure by 27 converts to cubic yards, because one cubic yard contains 27 cubic feet, and cubic yards are the unit bulk topsoil suppliers quote and trucks are loaded by.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A topsoil calculator works out how much soil you need to fill a raised bed, top-dress a lawn, level a low spot or start a new garden, and reports it in both the cubic yards suppliers deliver by and the cubic feet bagged soil is sold in. You enter the length and width of the area and the depth of soil you want to add, and the tool multiplies them into a volume, converting the depth from inches to feet so every dimension shares one scale, then divides by 27 to reach cubic yards. Soil is handled by volume because it is a loose, bulky material bought either in bags or by the truckload rather than in tidy units. Getting the depth right matters agriculturally as well as financially: most vegetables and lawns want a good depth of loose, workable soil for roots, while too shallow a layer dries out and starves plants. Because soil settles noticeably after it is spread and watered, and always scatters a little during the work, it is wise to round the area up and add a small margin so the finished, settled depth still meets your target. Bulk delivery by the cubic yard is far cheaper for large projects, while bags suit small beds and easy handling. The length-times-width-times-depth method is standard practice because a layer of topsoil is simply a shallow rectangular volume. Gardeners, landscapers and homeowners rely on it to price a delivery and avoid the second trip that a short order forces.",
    example: {
      inputs: { lengthFt: 20, widthFt: 10, depthIn: 6 },
      explanation: "20 × 10 × (6 ÷ 12) = 100 ft³; 100 ÷ 27 ≈ 3.70 yd³ of topsoil.",
    },
    faqs: [
      { question: "How many cubic feet are in a cubic yard of topsoil?", answer: "There are 27 cubic feet in a cubic yard, because a cubic yard is a cube three feet on each side and three times three times three equals twenty-seven. That is why the calculator divides the cubic-feet volume by 27 to reach cubic yards. Since a common bag of topsoil holds three-quarters or one cubic foot, a single cubic yard equals dozens of bags, which is why bulk delivery is much cheaper for large areas." },
      { question: "How deep should topsoil be?", answer: "It depends on the use. Top-dressing an existing lawn needs only a quarter to half an inch, while establishing a new lawn wants three to six inches of good soil. Raised beds and vegetable gardens benefit from a deeper layer, often eight to twelve inches, so roots have loose soil to grow into. Depth drives the volume directly in the formula, so every extra inch adds noticeable material and cost." },
      { question: "Should I order extra topsoil for settling?", answer: "Yes. Freshly delivered topsoil is fluffy and loose, and it compacts as it is spread, watered and walked on, so the settled depth ends up less than the loose depth you place. Adding roughly five to ten percent, or simply rounding your area and depth up, means the finished grade still meets your target. Soil is easy to spread thinly over a lawn or bank up in a bed, so a small surplus is rarely wasted." },
      { question: "How much does a cubic yard of topsoil weigh?", answer: "A cubic yard of topsoil typically weighs around 1,800 to 2,200 pounds, roughly one ton, though wet soil and soil heavy with clay or sand weigh more, while dry, screened compost-rich soil weighs less. Weight matters for transport, since a small trailer or pickup can safely carry only part of a cubic yard. Ask your supplier for the weight of their specific product if you are hauling it yourself." },
      { question: "Is bagged or bulk topsoil cheaper?", answer: "Bulk topsoil delivered by the cubic yard is almost always cheaper per unit volume than bagged soil, because you avoid paying for packaging and bagging labour. The trade-off is a delivery fee and a pile you must barrow and spread yourself. For a small raised bed a few bags are easier to handle and transport, while filling several beds or topping a lawn strongly favours a bulk load once you pass roughly one cubic yard." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "sod",
    slug: "sod-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Sod Calculator",
    shortDescription: "Estimate rolls and pallets of sod needed for a lawn.",
    seoTitle: "Sod Calculator — Rolls & Pallets Needed",
    metaDescription:
      "Free sod calculator. Estimate the area, rolls and pallets of sod you need to turf a lawn from the length and width of the space.",
    primaryKeyword: "sod calculator",
    secondaryKeywords: ["how much sod do i need", "sod rolls calculator", "turf calculator"],
    fields: [
      { id: "lengthFt", label: "Lawn length", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Lawn width", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "rollsNeeded", label: "Sod rolls needed", format: "number", decimals: 0, unit: "rolls", isPrimary: true, description: "At ~10 sq ft per roll" },
      { id: "pallets", label: "Pallets", format: "number", decimals: 0, unit: "pallets", isPrimary: false, description: "At ~450 sq ft per pallet" },
      { id: "areaSqFt", label: "Area to cover", format: "number", decimals: 1, unit: "sq ft", isPrimary: false },
    ],
    formula: "Area = length × width; rolls = ⌈area ÷ 10⌉; pallets = ⌈area ÷ 450⌉",
    formulaExplanation:
      "Length times width gives the lawn area in square feet, the figure sod is sold by. Dividing that area by 10 gives the number of rolls, since a standard sod roll covers about 10 square feet, and rounding up buys whole rolls because a partial roll cannot be ordered. Dividing the area by 450 gives the number of pallets, since a typical pallet holds roughly 450 square feet of sod, and again rounding up ensures whole pallets. Both counts come from the same area, letting you choose rolls for a small patch or pallets for a larger lawn.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A sod calculator tells you how much sod, or turf, you need to lay a new lawn, giving the answer in both the individual rolls sold for small jobs and the pallets used for larger areas. You enter the length and width of the space, and the tool multiplies them for the area in square feet, then divides by the coverage of a roll and of a pallet, rounding each up to whole units. Sod is sold by area because it is laid like a green carpet, and buying enough in one delivery matters more than with many materials: sod is a living product that must be laid within a day or so of being cut and delivered, before the roots dry out, so running short mid-job risks leaving bare strips while a second batch is ordered and the first begins to yellow. Because lawns are rarely perfect rectangles and every piece is trimmed to fit around beds, paths and curves, it is wise to add a waste margin of around five to ten percent on top of this estimate, and to measure irregular areas by splitting them into rectangles. Coverage figures vary by supplier — rolls and slabs come in different sizes and pallets hold different totals — so confirm the exact coverage with your grower and adjust if it differs from the common values used here. Landscapers, turf installers and homeowners use it to price a lawn and schedule a delivery so the sod arrives fresh and is laid the same day.",
    example: {
      inputs: { lengthFt: 30, widthFt: 30 },
      explanation: "Area = 30 × 30 = 900 ft²; rolls = ⌈900 ÷ 10⌉ = 90; pallets = ⌈900 ÷ 450⌉ = 2.",
    },
    faqs: [
      { question: "How much area does a roll or pallet of sod cover?", answer: "This calculator assumes about 10 square feet per roll and 450 square feet per pallet, which are common figures, but coverage varies by supplier and region. Sod comes as rolls, slabs or big rolls of different sizes, and a pallet may hold anywhere from around 400 to 700 square feet. Always confirm the exact coverage with your grower before ordering, and adjust your expectations if their product differs from these defaults." },
      { question: "Should I order extra sod for waste?", answer: "Yes. Every piece of sod is trimmed to fit against beds, paths, trees and curves, and those offcuts are rarely reusable, while a few pieces may be damaged or dry out. Adding roughly five to ten percent on top of this estimate covers the trimming and losses so you are not left with bare strips. Because sod is perishable and must be laid quickly, a small surplus is far better than pausing to reorder." },
      { question: "How do I measure an irregular lawn for sod?", answer: "Divide the area into simple rectangles, and where needed triangles, calculate each piece separately, and add them together before entering the total. For a curved border, approximate it with the rectangle that best contains the curve and let a waste margin absorb the overage. Measuring generously and rounding the area up is safer than rounding down, since sod is cut to order and a shortfall means a fresh delivery and possible delay." },
      { question: "How soon must sod be laid after delivery?", answer: "As soon as possible, ideally within 24 hours of it being harvested and delivered, and sooner in hot weather. Sod is a living product with cut roots, and stacked on a pallet it heats up and dries out quickly, yellowing within a day or two. Prepare and level the soil before the sod arrives so you can lay it immediately, water it thoroughly right after laying, and keep it moist while the roots establish." },
      { question: "Do I need to prepare the soil before laying sod?", answer: "Yes, good preparation is essential for the sod to root and thrive. Remove old grass and weeds, loosen and grade the soil so it drains and sits slightly below paths, and add topsoil or compost if the ground is poor. A firm, level, moist seedbed lets the sod make close contact and knit in quickly. Skipping this step is the most common reason a new sod lawn fails to establish and develops dry, patchy areas." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "board-foot",
    slug: "board-foot-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Board Foot Calculator",
    shortDescription: "Calculate board feet of lumber from its dimensions.",
    seoTitle: "Board Foot Calculator — Lumber Volume",
    metaDescription:
      "Free board foot calculator. Calculate the board feet of lumber from board thickness, width, length and quantity for pricing and ordering hardwood.",
    primaryKeyword: "board foot calculator",
    secondaryKeywords: ["board feet calculator", "lumber board foot calculator", "how to calculate board feet"],
    fields: [
      { id: "thicknessIn", label: "Thickness", type: "number", unit: "in", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "widthIn", label: "Width", type: "number", unit: "in", placeholder: "6", required: true, span: 1, min: 0, step: 0.1 },
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "quantity", label: "Quantity", type: "number", unit: "boards", placeholder: "1", required: false, span: 1, min: 0, step: 1, defaultValue: 1 },
    ],
    results: [
      { id: "boardFeet", label: "Board feet", format: "number", decimals: 2, unit: "bd ft", isPrimary: true },
    ],
    formula: "Board feet = (thickness in × width in × (length ft × 12)) ÷ 144 × quantity",
    formulaExplanation:
      "A board foot is a unit of lumber volume equal to 144 cubic inches — one square foot of board one inch thick. To find it, the thickness and width in inches are multiplied by the length converted to inches by multiplying feet by 12, giving the board's volume in cubic inches. Dividing that by 144 converts the volume into board feet. Multiplying by the quantity of identical boards gives the total for the whole order. Because all three dimensions are brought into inches first, the formula works for any combination of nominal or actual sizes you enter.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A board foot calculator converts a board's dimensions into board feet, the volume unit hardwood lumber is priced and sold by. One board foot equals 144 cubic inches — the volume of a piece one foot square and one inch thick — and the tool finds it by multiplying thickness and width in inches by the length in inches, dividing by 144, and multiplying by how many identical boards you have. Board feet matter because hardwood is not sold by the running foot or the piece like softwood framing lumber; it is sold by volume, so a thick, wide plank costs far more than a thin, narrow one of the same length. Knowing the board footage lets you compare prices between suppliers, budget a project, and check that a quote is fair. A key subtlety is nominal versus actual size: rough-sawn lumber is often quoted at its nominal thickness in quarters, such as four-quarter for a nominally one-inch board, and board feet are traditionally calculated on the nominal dimensions rather than the smaller planed size, so enter the thickness your supplier prices by. This calculator gives the exact board footage of the boards you describe; it does not add an allowance for the waste created when you rip, joint and plane rough stock down to finished parts, and that loss is real — woodworkers commonly buy 20 to 40 percent more board feet than the finished project needs to cover defects, grain selection and offcuts. Furniture makers, carpenters and sawmills use board feet as the common language for pricing and ordering wood.",
    example: {
      inputs: { thicknessIn: 2, widthIn: 6, lengthFt: 8, quantity: 10 },
      explanation: "(2 × 6 × (8 × 12)) ÷ 144 = 8 bd ft per board; × 10 boards = 80 board feet.",
    },
    faqs: [
      { question: "What is a board foot?", answer: "A board foot is a unit of lumber volume equal to 144 cubic inches, which is the same as a board one foot long, one foot wide and one inch thick. It measures the amount of wood regardless of the board's exact shape, so a one-by-twelve that is one foot long and a two-by-six that is one foot long both contain one board foot. Hardwood is priced per board foot, making it the standard unit for buying and comparing lumber." },
      { question: "How do I calculate board feet by hand?", answer: "Multiply the thickness in inches by the width in inches by the length in inches, then divide by 144. If the length is in feet, multiply it by twelve first to convert to inches, or use the shortcut of thickness times width times length-in-feet divided by twelve. Multiply the result by the number of identical boards. Bringing every dimension into the same unit before multiplying is the step people most often get wrong." },
      { question: "Should I use nominal or actual thickness?", answer: "Use the thickness your supplier prices by, which for rough hardwood is usually the nominal size quoted in quarters — four-quarter means a nominal one inch, eight-quarter means two inches. Board feet are traditionally figured on nominal dimensions, so a planed board still counts at its rough thickness. If you enter the smaller finished thickness, you will underestimate the board feet and the price. Confirm with your supplier which dimension their quote is based on." },
      { question: "How much extra lumber should I buy?", answer: "Plan to buy more board feet than your finished project needs, commonly 20 to 40 percent extra for furniture and cabinetry. Rough lumber loses volume when you rip, joint and plane it to final size, boards contain knots, splits and colour you cut around, and matching grain across a piece means rejecting some stock. This calculator gives the exact footage of the boards you enter, so add your waste allowance on top before ordering to avoid running short." },
      { question: "Is board foot the same as a linear or square foot?", answer: "No. A linear or running foot measures only length regardless of thickness or width, and a square foot measures area, while a board foot measures volume, combining all three dimensions. Two boards of the same length can have very different board footage if one is thicker or wider. This is why hardwood is sold by the board foot rather than the running foot, since it captures how much actual wood you are buying." },
    ],
    relatedCalculators: ["flooring-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "wall-stud",
    slug: "wall-stud-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Wall Stud Calculator",
    shortDescription: "Estimate how many studs a wall needs at a given spacing.",
    seoTitle: "Wall Stud Calculator — Studs Needed",
    metaDescription:
      "Free wall stud calculator. Estimate how many studs you need to frame a wall from its length and the on-center stud spacing.",
    primaryKeyword: "wall stud calculator",
    secondaryKeywords: ["how many studs do i need", "stud spacing calculator", "wall framing calculator"],
    fields: [
      { id: "wallLengthFt", label: "Wall length", type: "number", unit: "ft", placeholder: "20", required: true, span: 2, min: 0, step: 0.01 },
      { id: "studSpacingIn", label: "Stud spacing", type: "number", unit: "in", placeholder: "16", required: false, span: 2, min: 1, step: 0.1, defaultValue: 16, helpText: "On-center spacing (commonly 16 or 24 in)." },
    ],
    results: [
      { id: "studs", label: "Studs needed", format: "number", decimals: 0, unit: "studs", isPrimary: true, description: "Field studs, before extras for openings" },
    ],
    formula: "Studs = ⌈(wall length × 12) ÷ spacing⌉ + 1",
    formulaExplanation:
      "The wall length in feet is multiplied by 12 to convert it to inches so it shares units with the on-center spacing. Dividing that length by the spacing and rounding up gives the number of gaps between studs across the wall, and adding one places a stud at the far end as well, because a run of evenly spaced studs needs one more stud than the number of bays between them. This is the fencepost principle: five bays need six studs. The result counts the regularly spaced field studs and does not yet include the extra framing that door and window openings require.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A wall stud calculator estimates how many vertical studs you need to frame a wall, from the wall's length and the on-center spacing between studs. It divides the length by the spacing to count the bays between studs, then adds one because a line of studs always needs one more than the number of gaps — the same fencepost logic that means a fence with five sections has six posts. Spacing is the key choice: 16 inches on center is the most common for load-bearing and general framing, giving a stiff wall and convenient support for standard 4-foot-wide sheet materials, while 24 inches on center uses fewer studs and suits some non-load-bearing or advanced-framing situations. The result counts the evenly spaced field studs; it deliberately does not add the extra pieces that openings and connections require, and those add up quickly. Every door and window needs king studs and jack studs on each side, a header across the top, and cripple studs above and below the opening, while wall ends, corners and T-intersections where partitions meet need extra studs and blocking for structure and for something to fasten drywall to. Because of all this, framers order noticeably more studs than a bare field count suggests, typically adding 10 to 15 percent or itemizing each opening and corner. Carpenters, builders and DIYers use this estimate as a starting point to price framing lumber, then add the extras for their specific wall layout and follow the stud size, spacing and structural requirements set by their local building code.",
    example: {
      inputs: { wallLengthFt: 20, studSpacingIn: 16 },
      explanation: "(20 × 12) ÷ 16 = 15 bays; ⌈15⌉ + 1 = 16 field studs before extras for openings and corners.",
    },
    faqs: [
      { question: "Should studs be 16 or 24 inches on center?", answer: "Sixteen inches on center is the most common spacing, giving a strong, stiff wall and lining up with the 48-inch width of standard drywall and sheathing so panel edges land on studs. Twenty-four inches on center uses fewer studs and less lumber, and is allowed for many non-load-bearing walls and some engineered load-bearing situations. The right spacing depends on the load, the stud size and your building code, so confirm it before framing." },
      { question: "Why does the formula add one stud?", answer: "Dividing the wall length by the spacing counts the bays, or gaps, between studs, not the studs themselves. A wall with fifteen bays has sixteen studs, because a stud sits at both ends as well as between every pair of bays. Adding one places that final end stud. This fencepost principle is easy to overlook, and skipping the plus-one leaves you one stud short and a wall end without framing to fasten to." },
      { question: "Does this include studs for doors and windows?", answer: "No. This is a field-stud count for a plain wall. Each opening needs additional framing: king studs running full height on both sides, jack or trimmer studs supporting the header, the header itself, and cripple studs above and below the opening. These extras can add several studs per opening, so count your doors and windows separately and add their framing to this baseline before ordering lumber for the wall." },
      { question: "How many extra studs should I buy?", answer: "Add roughly 10 to 15 percent to the field-stud count, or better, itemize the extras: two or more king and jack studs per opening, headers, cripples, and additional studs at every corner and wall intersection for structure and drywall backing. Also allow for a few studs that are too bowed, split or crowned to use. Buying a small surplus of framing lumber is cheaper and faster than a mid-job trip to the yard." },
      { question: "Do wall corners and intersections need extra studs?", answer: "Yes. Corners are built up from multiple studs, or a stud plus blocking, to form a rigid connection and to provide a nailing surface for the drywall returning on the inside of each wall. Where an interior partition meets another wall, a T-intersection, you also add studs or backing so both walls fasten together and the drywall has support. These extras are on top of the field studs this calculator counts, so include them in your total." },
    ],
    relatedCalculators: ["concrete-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "excavation",
    slug: "excavation-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Excavation Calculator",
    shortDescription: "Estimate cubic yards of soil to excavate and haul away.",
    seoTitle: "Excavation Calculator — Cubic Yards of Soil",
    metaDescription:
      "Free excavation calculator. Estimate the cubic yards and cubic feet of soil to dig out and haul away for a footing, foundation or pool.",
    primaryKeyword: "excavation calculator",
    secondaryKeywords: ["how much dirt do i need to remove", "cut and fill calculator", "soil excavation volume"],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depthFt", label: "Depth", type: "number", unit: "ft", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "cubicYards", label: "Volume to excavate", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × depth; yd³ = ft³ ÷ 27",
    formulaExplanation:
      "Length, width and depth are all entered in feet, so multiplying them together directly gives the volume of the excavation in cubic feet without any unit conversion. Dividing that figure by 27 converts to cubic yards, because a cubic yard is a cube three feet on each side and therefore contains 27 cubic feet. Cubic yards are the unit excavation is quoted, hauled and charged by, since dump trucks and disposal fees are measured that way. The result is the in-place, undisturbed volume of soil; loosened spoil swells and takes up more space once it is dug out.",
    formulaSource: "Standard construction estimation",
    explanation:
      "An excavation calculator estimates how much soil you must dig out for a footing, foundation, basement, pool, pond or trench, and reports it in the cubic yards that dump trucks and disposal fees are measured by. You enter the length, width and depth of the hole in feet, and the tool multiplies them for the volume in cubic feet, then divides by 27 to reach cubic yards. Knowing this figure up front drives the whole earthwork plan: it tells you how many truckloads of spoil must be hauled away, roughly what disposal will cost, and whether the machine and site access suit the job. A crucial real-world adjustment is soil swell, sometimes called the bulking factor. Undisturbed ground is compacted, but once you dig it out the soil loosens and expands, so the same earth takes up noticeably more space as a pile or in a truck than it did in the ground — commonly 15 to 30 percent more depending on the soil, with clay swelling more than sand. This calculator gives the in-place, bank volume, so multiply the result by a swell factor to size trucks and estimate haul-away loads. Conversely, if you are backfilling and compacting soil, it shrinks below its loose volume. The estimate also assumes vertical sides; deep excavations are often sloped or benched back for safety, which increases the volume removed. Contractors, builders and homeowners use it to plan haulage, price disposal and compare quotes. Always follow local rules on shoring, sloping and calling utility locators before any digging begins.",
    example: {
      inputs: { lengthFt: 30, widthFt: 20, depthFt: 3 },
      explanation: "30 × 20 × 3 = 1,800 ft³; 1,800 ÷ 27 ≈ 66.67 yd³ of soil to excavate before any swell.",
    },
    faqs: [
      { question: "What is soil swell and why does it matter?", answer: "Soil swell, or bulking, is the way earth expands once it is dug out of the compacted ground and loosened. The same volume that sat tight in the bank takes up more space as a loose pile or in a truck, commonly 15 to 30 percent more depending on soil type. It matters because you haul and dispose of the loose volume, not the in-place figure, so multiply this result by a swell factor when sizing trucks and estimating disposal loads." },
      { question: "Does this give bank or loose volume?", answer: "It gives the bank volume, the in-place volume of undisturbed soil measured by the hole's dimensions. Once excavated, that soil loosens and swells, so the loose volume you actually load and haul is larger. For truck loads and disposal, multiply the bank cubic yards by a swell factor for your soil, around 1.15 for sand up to 1.30 or more for clay. If you are compacting fill, the volume shrinks instead." },
      { question: "How many cubic yards fit in a dump truck?", answer: "It varies with the truck. A standard tandem dump truck typically carries around 10 to 14 cubic yards of loose soil, while smaller trucks carry less and articulated or larger trucks more. Weight limits can matter more than volume for heavy, wet soil, since a full load by volume may exceed the legal weight. Divide your loose, swollen volume by the truck's capacity to estimate the number of loads to haul away." },
      { question: "Should I account for sloped excavation sides?", answer: "Often yes. This calculator assumes vertical walls, but deep excavations are frequently sloped back or benched for safety to prevent collapse, and sloping adds volume beyond the simple box because the top of the hole is wider than the bottom. For a rough footing or shallow dig, vertical sides are a reasonable approximation, but for deep or unstable excavations, add volume for the slope and follow the required safety measures and shoring rules." },
      { question: "Do I need to call before I dig?", answer: "Yes, always. Before any excavation you should have underground utilities located and marked, since striking a gas, electric, water or communications line is dangerous and costly. In many areas a free locating service must be called a few days before digging. This calculator plans the earthwork volume only; it is no substitute for utility location, permits, and the local rules on shoring and safe excavation, which you must follow before breaking ground." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "asphalt",
    slug: "asphalt-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Asphalt Calculator",
    shortDescription: "Estimate tons of asphalt for a driveway or lot.",
    seoTitle: "Asphalt Calculator — Tons Needed",
    metaDescription:
      "Free asphalt calculator. Estimate the tons of hot-mix asphalt needed to pave a driveway or lot from length, width, thickness and mix density.",
    primaryKeyword: "asphalt calculator",
    secondaryKeywords: ["how much asphalt do i need", "asphalt tonnage calculator", "hot mix asphalt calculator"],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "100", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "thicknessIn", label: "Thickness", type: "number", unit: "in", placeholder: "3", required: true, span: 1, min: 0, step: 0.1 },
      { id: "densityLbPerCubicFt", label: "Mix density", type: "number", unit: "lb/ft³", placeholder: "145", required: false, span: 1, min: 0, step: 1, defaultValue: 145, helpText: "Hot-mix asphalt ≈ 145 lb/ft³." },
    ],
    results: [
      { id: "tons", label: "Asphalt needed", format: "number", decimals: 2, unit: "tons", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (thickness ÷ 12); tons = volume × density ÷ 2000",
    formulaExplanation:
      "Length times width gives the area to be paved in square feet, and multiplying by thickness turns that flat area into a volume, with the thickness divided by 12 first to convert inches to feet so all dimensions share one unit. That gives the compacted volume of asphalt in cubic feet. Multiplying by the mix density in pounds per cubic foot converts volume into weight in pounds, because density is weight per unit volume. Dividing by 2,000 converts pounds into US tons, the unit asphalt plants sell and trucks are weighed by. Denser mixes weigh more per cubic foot and so need more tons for the same volume.",
    formulaSource: "Standard construction estimation",
    explanation:
      "An asphalt calculator estimates how much hot-mix asphalt you need to pave a driveway, parking lot, path or road, expressed in the tons that asphalt plants sell by and trucks are weighed by. You enter the length, width and compacted thickness of the paving plus the mix density, and the tool multiplies the dimensions into a volume — converting thickness from inches to feet — then multiplies by density and divides by 2,000 to turn that volume into tons. Working in tons matters because asphalt is priced and delivered by weight, not volume, and it is denser than it looks, so a modest area at a few inches thick adds up to several tons quickly. Density is the input people overlook: typical hot-mix asphalt runs around 145 pounds per cubic foot, but the exact figure depends on the aggregate and mix design, and using the right value keeps the tonnage accurate. This estimate gives the compacted asphalt needed for the surface layer at the thickness you enter; a proper driveway or lot is usually built on a compacted aggregate base several inches thick, which you size separately, and larger jobs may use a binder course beneath the surface course. Because asphalt must be laid and rolled hot in a continuous operation, ordering enough in one delivery is important — a shortfall means a cold joint or a second load, and a small surplus is better than stopping the paver. It is also wise to add a few percent for the material lost to compaction and edges. Paving contractors, estimators and homeowners use it to price a job and order the right tonnage.",
    example: {
      inputs: { lengthFt: 100, widthFt: 20, thicknessIn: 3, densityLbPerCubicFt: 145 },
      explanation: "100 × 20 × (3 ÷ 12) = 500 ft³; 500 × 145 ÷ 2000 = 36.25 tons of asphalt.",
    },
    faqs: [
      { question: "How thick should an asphalt driveway be?", answer: "A residential asphalt driveway usually has about 2 to 3 inches of compacted surface asphalt over a compacted aggregate base of 4 to 8 inches, with heavier use or poor soils calling for more. Thickness drives the tonnage directly in the formula, so every extra inch adds weight and cost. The right build-up depends on the traffic, the subgrade and local practice, so confirm the layer thicknesses with a paving contractor for your site." },
      { question: "What density should I use for asphalt?", answer: "Typical hot-mix asphalt weighs about 145 pounds per cubic foot, which is the calculator's default, but the exact density depends on the aggregate, the mix design and how well it is compacted. Some mixes run a little lighter or heavier. For an accurate order, ask your asphalt supplier for the density, or unit weight, of the specific mix you are buying and enter it, since density feeds straight into the tonnage the plant will bill you for." },
      { question: "Does this include the gravel base?", answer: "No. This estimate covers only the asphalt surface layer at the thickness you enter. A durable driveway or lot is built on a compacted aggregate base, commonly crushed stone several inches deep, which spreads loads and drains water, and you should calculate that base separately from the same area and your chosen depth. Larger projects may also have a thicker binder course beneath the surface course, adding more asphalt tonnage." },
      { question: "How much extra asphalt should I order?", answer: "Add a small margin, often around 5 percent, to cover the material lost to compaction, uneven subgrade, and spillage and trimming at the edges. Because asphalt must be placed and rolled while hot in one continuous operation, running short risks a cold joint where new asphalt meets a cooled edge, which is a weak point. Ordering slightly over and having the crew feather out any surplus is better than pausing to bring a second load." },
      { question: "Why is asphalt sold by the ton instead of volume?", answer: "Asphalt plants produce and load hot mix by weight, and trucks are weighed at the scale, so the whole supply chain is priced per ton rather than per cubic yard. Weight is also a consistent measure regardless of how loose or compacted the mix is at any moment. That is why this calculator converts the volume you need into tons using the mix density, giving you the figure the supplier will actually quote and invoice." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "plywood-sheet",
    slug: "plywood-sheet-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Plywood Sheet Calculator",
    shortDescription: "Estimate how many sheets of plywood cover an area.",
    seoTitle: "Plywood Sheet Calculator — Sheets Needed",
    metaDescription:
      "Free plywood sheet calculator. Estimate how many sheets of plywood or OSB you need to cover a floor, wall or roof area.",
    primaryKeyword: "plywood sheet calculator",
    secondaryKeywords: ["how many sheets of plywood do i need", "plywood calculator", "osb sheet calculator"],
    fields: [
      { id: "areaSqFt", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "500", required: true, span: 2, min: 0, step: 0.01 },
      { id: "sheetSqFt", label: "Coverage per sheet", type: "number", unit: "sq ft", placeholder: "32", required: false, span: 2, min: 0, step: 0.1, defaultValue: 32, helpText: "A 4×8 sheet covers 32 sq ft." },
    ],
    results: [
      { id: "sheets", label: "Sheets needed", format: "number", decimals: 0, unit: "sheets", isPrimary: true },
    ],
    formula: "Sheets = ⌈area ÷ coverage per sheet⌉",
    formulaExplanation:
      "The total area you need to cover is divided by the area a single sheet covers, which for the standard 4-by-8-foot sheet is 32 square feet. The result is how many sheets are required to blanket the surface with no gaps. Because plywood is sold only in whole sheets and a partial sheet still counts as one purchase, the figure is rounded up. Entering the coverage of the sheet size you are actually buying keeps the estimate accurate, since a 4-by-8 sheet covers 32 square feet while other sizes cover different amounts and would change the count.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A plywood sheet calculator tells you how many sheets of plywood or OSB you need to cover a floor, wall, roof deck or other flat surface, from the total area and the coverage of one sheet. It divides the area by the per-sheet coverage — 32 square feet for the standard 4-by-8-foot sheet — and rounds up, because sheets are sold whole and you cannot buy a fraction of one. This gives a clean baseline, but real jobs need a waste margin on top: sheets are cut to fit against walls, around openings, at roof edges and into corners, and those offcuts often cannot be reused, so it is wise to add roughly 10 percent, and more for cut-up or irregular layouts. A pure area division also ignores how sheets are laid out. Structural sheathing on floors, walls and roofs is usually installed in a staggered pattern with the joints offset row to row for strength, and panel edges must land on framing members such as joists, studs or rafters, so a sheet is frequently trimmed simply to make its edge fall on a support. That layout reality means the true sheet count can exceed the bare area estimate, especially on narrow or oddly proportioned surfaces. This tool handles the area-based count; enter the coverage of the sheet size you are buying, since thicker structural panels and specialty sizes come in the same 4-by-8 footprint but sheathing, subfloor and underlayment can differ. Builders, roofers and DIYers use it to price sheathing and load the truck, then add a waste margin for their specific layout.",
    example: {
      inputs: { areaSqFt: 500, sheetSqFt: 32 },
      explanation: "500 ÷ 32 = 15.6 → 16 sheets of plywood before adding any waste for cuts.",
    },
    faqs: [
      { question: "How many square feet does a sheet of plywood cover?", answer: "A standard 4-by-8-foot sheet covers 32 square feet, which is the calculator's default coverage. Sheets also come in other sizes, such as 4-by-9 or 5-by-5 for some specialty panels, covering different amounts. Thickness does not change the footprint, so a thin underlayment sheet and a thick subfloor sheet both cover 32 square feet if they are 4-by-8. Enter the coverage of the exact sheet you are buying for an accurate count." },
      { question: "How much waste should I add for plywood?", answer: "Around 10 percent is a reasonable allowance for a simple layout, and more for surfaces with many openings, angles or narrow runs. The margin covers sheets cut to fit against walls, around windows and doors, at roof edges, and to land panel edges on framing. Offcuts are often too small to reuse. This calculator gives the bare area count, so add your waste margin on top before ordering to avoid a shortfall partway through the job." },
      { question: "Why do plywood joints need to be staggered?", answer: "Staggering the joints, so the end seams do not line up from one row to the next, spreads loads across the framing and prevents a continuous weak line through the sheathing. It is standard practice for floors, walls and roofs and produces a stiffer, stronger assembly. Staggering means some sheets are cut to start a row offset, which creates offcuts and can raise the total sheet count slightly above a simple area division, so plan for it." },
      { question: "Do panel edges have to land on framing?", answer: "For structural sheathing, yes. The edges of floor, wall and roof panels must be supported by and fastened to framing members such as joists, studs or rafters, sometimes with blocking added between them for edge support. This means a sheet is often trimmed so its edge falls on a support rather than spanning past one, which creates waste. It is a key reason the real sheet count can exceed the bare area estimate on many layouts." },
      { question: "Is OSB estimated the same way as plywood?", answer: "Yes. Oriented strand board, or OSB, comes in the same standard 4-by-8-foot sheets as plywood and covers the same 32 square feet, so the sheet count from this calculator applies to either. OSB is often used interchangeably with plywood for subfloors, wall sheathing and roof decking, and is usually cheaper. Choose the material to suit the application and moisture exposure, but the area-based count and the waste margin you add work the same for both." },
    ],
    relatedCalculators: ["flooring-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
