import type { CalculatorDefinition } from "../types";

export const constructionExtraCalculators: CalculatorDefinition[] = [
  {
    id: "concrete",
    slug: "concrete-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Concrete Calculator",
    shortDescription: "Estimate concrete volume and bags needed.",
    seoTitle: "Concrete Calculator — Cubic Yards & Bags",
    metaDescription:
      "Free concrete calculator. Estimate the cubic yards, cubic feet and number of bags of concrete needed for a slab.",
    primaryKeyword: "concrete calculator",
    secondaryKeywords: ["concrete yardage calculator", "concrete bags calculator", "cubic yards of concrete"],
    fields: [
      { id: "length", label: "Length", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "width", label: "Width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "thickness", label: "Thickness", type: "number", unit: "in", placeholder: "4", required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "cubicYards", label: "Concrete needed", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "cubicFeet", label: "In cubic feet", format: "number", decimals: 2, unit: "ft³", isPrimary: false },
      { id: "bags60", label: "60 lb bags", format: "number", decimals: 0, unit: "bags", isPrimary: false },
      { id: "bags80", label: "80 lb bags", format: "number", decimals: 0, unit: "bags", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (thickness ÷ 12); ÷ 27 for cubic yards",
    explanation:
      "A concrete calculator works out the volume of a slab and translates it into the units you actually order in: cubic yards, cubic feet, and the number of 60 or 80 pound bags. You supply length, width and thickness, and the tool multiplies them into a volume, converting the thickness from inches to feet so every dimension shares the same scale before dividing by 27 to reach cubic yards. Volume is the language of concrete because ready-mix trucks are billed by the cubic yard and bags are rated by the cubic feet they yield. Underestimating leaves you scrambling mid-pour, and a cold joint where fresh concrete meets partly set concrete is a permanent weak line. Overestimating wastes money on material that sets before it can be used. A concrete calculator lets you commit to a number with confidence and add a sensible margin on purpose rather than by accident. The length-times-width-times-thickness method is standard estimation practice because it is exactly how a rectangular pour occupies space. Contractors, landscapers, DIY builders and estimators use a concrete calculator for footings, driveways, patios and slabs, then order 5 to 10 percent extra to cover spillage, uneven subgrade and the odd overfilled form.",
    formulaExplanation:
      "Length times width gives the slab's footprint in square feet, and multiplying by thickness turns that flat area into a three-dimensional volume. Thickness is divided by 12 first because it is entered in inches while length and width are in feet, so all three must share one unit. Dividing the resulting cubic feet by 27 converts to cubic yards, since one cubic yard contains 27 cubic feet.",
    formulaSource: "Standard construction estimation (volume method)",
    example: {
      inputs: { length: 10, width: 10, thickness: 4 },
      explanation: "10 × 10 × (4÷12) = 33.33 ft³ ≈ 1.23 yd³, or about 75 sixty-pound bags.",
    },
    faqs: [
      { question: "How much extra concrete should I order?", answer: "Add 5 to 10 percent to the calculated volume for most jobs. The extra absorbs spillage, uneven or over-dug subgrade, forms that bow slightly under the weight, and the material left clinging to tools and the chute. For a large or complex pour, or one you cannot easily top up later, lean toward the higher end. Running short mid-pour is far more costly than a small surplus, since a cold joint permanently weakens the slab." },
      { question: "Should I use bags or ready-mix concrete?", answer: "Bags suit small jobs — a few post holes, a compact pad or repairs — where mixing by hand or in a small mixer is manageable. Once you pass roughly one cubic yard, ready-mix delivery is usually cheaper per yard, far faster, and gives a consistent mix across the whole pour. Above a cubic yard, hand-mixing dozens of bags also risks the first section setting before the last is placed, creating weak joints." },
      { question: "How many bags of concrete make a cubic yard?", answer: "It depends on bag size, because larger bags yield more finished volume. A 60 pound bag produces about 0.45 cubic feet, so roughly 60 of them make one cubic yard. An 80 pound bag yields about 0.60 cubic feet, so about 45 make a cubic yard. That difference is why buying larger bags means handling fewer of them, though each one is heavier to lift and pour." },
      { question: "How thick should a concrete slab be?", answer: "Four inches is the standard minimum for patios, walkways and residential floors that carry only foot traffic. Step up to five or six inches for driveways and areas holding vehicles, and thicker still with steel reinforcement for heavy loads. Thickness drives volume directly in the formula above, so every extra inch noticeably increases the concrete you need. Always check local building codes, which set required minimums for your specific application." },
      { question: "Does this calculator include a margin for waste?", answer: "No. The result is the exact geometric volume of the slab you describe, with no allowance added, so the figure stays transparent and easy to check. Add your own waste margin on top — typically 5 to 10 percent — before placing the order. Keeping the raw volume separate lets you scale the margin to the job: a tidy indoor pad needs less cushion than a large outdoor slab poured over rough, uneven ground." },
    ],
    relatedCalculators: ["paint-calculator", "tile-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "tile",
    slug: "tile-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Tile Calculator",
    shortDescription: "Estimate how many tiles you need.",
    seoTitle: "Tile Calculator — How Many Tiles Do I Need?",
    metaDescription:
      "Free tile calculator. Estimate the number of tiles needed for a floor or wall from the area, tile size and a waste allowance.",
    primaryKeyword: "tile calculator",
    secondaryKeywords: ["how many tiles do i need", "tile flooring calculator", "tiles per square foot"],
    fields: [
      { id: "area", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "120", required: true, span: 2, min: 0, step: 0.01 },
      { id: "tileWidth", label: "Tile width", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "tileHeight", label: "Tile height", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "waste", label: "Waste allowance", type: "number", unit: "%", placeholder: "10", required: false, span: 2, min: 0, max: 50, defaultValue: 10, helpText: "Extra for cuts and breakage (usually 10%)." },
    ],
    results: [
      { id: "withWaste", label: "Tiles to buy", format: "number", decimals: 0, unit: "tiles", isPrimary: true, description: "Includes waste allowance" },
      { id: "tiles", label: "Tiles for exact area", format: "number", decimals: 0, unit: "tiles", isPrimary: false },
      { id: "tileAreaSqft", label: "Area per tile", format: "number", decimals: 3, unit: "sq ft", isPrimary: false },
    ],
    formula: "Tiles = area ÷ tile area, then × (1 + waste%), rounded up",
    explanation:
      "A tile calculator tells you how many tiles to buy for a floor or wall, starting from the area you need to cover and the size of the tile you have chosen. It first works out the area a single tile spans by multiplying its width and height and converting from square inches to square feet, then divides the total project area by that figure to reach the exact tile count. Finally it adds a waste allowance for cuts and breakage and rounds up to whole tiles, because you cannot buy a fraction of one. That waste step is the reason a tile calculator beats a quick mental estimate. Real installations lose tiles to edge cuts, corners, breakage during handling, and the occasional flawed piece, and dye lots vary between production batches — so ordering the bare minimum almost guarantees a shortfall and a mismatched top-up. The area-divided-by-tile-area method is standard estimation practice because coverage is fundamentally about fitting one area inside another. Homeowners, tilers, renovators and builders reach for a tile calculator when quoting or ordering for a bathroom, kitchen, splashback or whole floor, adding around 10 percent waste for straight layouts and more for diagonal or heavily cut rooms.",
    formulaExplanation:
      "Tile width times height gives the area one tile covers, divided by 144 to convert square inches into square feet so it matches the project area's units. Dividing the total area by that per-tile area yields how many tiles fill the space exactly. Multiplying by one plus the waste percentage adds spare tiles for cuts and breakage, and rounding up ensures you buy whole, usable pieces rather than fractions.",
    formulaSource: "Standard construction estimation",
    example: {
      inputs: { area: 120, tileWidth: 12, tileHeight: 12, waste: 10 },
      explanation: "A 12×12 tile covers 1 ft². 120 ÷ 1 = 120 tiles, plus 10% waste = 132 tiles to buy.",
    },
    faqs: [
      { question: "How much waste should I allow for tiling?", answer: "Allow around 10 percent for a standard straight or grid layout in a simple rectangular room. Step up to 15 percent for diagonal patterns, herringbone, or rooms with many corners, alcoves and pipe cutouts, because each cut wastes part of a tile. Large-format tiles and intricate mosaics can push waste higher still. When in doubt, add the higher figure — the cost of a few spare boxes is trivial next to halting the job to reorder." },
      { question: "How many tiles do I need per square foot?", answer: "Divide 144 by the area of one tile in square inches to get tiles per square foot. A 12 by 12 inch tile covers exactly one square foot, so you need one per square foot. Smaller 6 by 6 inch tiles cover a quarter of a square foot each, so you need four. The tool does this automatically from the tile dimensions you enter, then applies your waste allowance." },
      { question: "Should I buy extra tiles from the same batch?", answer: "Yes, always keep a few spare tiles beyond the calculated amount, and make sure they come from the same production batch. Tile colour and finish shift subtly between dye lots, so a future repair using freshly bought tiles can stand out against the original field. Store the labelled spares somewhere safe. Replacing a single cracked tile years later is simple only if you kept matching pieces from the initial order." },
      { question: "Does this calculator work for wall tiles?", answer: "Yes. The method is identical for walls and floors — enter the wall area to be tiled and the tile size in exactly the same way. Measure the wall height and width, multiply for the area, and subtract large openings such as windows or a vanity if you like. Walls often use different tile sizes than floors, so calculate each surface separately and add a waste margin suited to its layout and cut complexity." },
      { question: "How do I measure the area to tile?", answer: "For a rectangular floor, multiply the room length by its width to get square feet. For an irregular space, split it into rectangles, calculate each, and add them together. For walls, multiply height by width for each wall and sum them, subtracting large openings only if they are substantial. Measure carefully and round area up rather than down, then let the waste allowance handle cuts and the inevitable breakages." },
    ],
    relatedCalculators: ["paint-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
