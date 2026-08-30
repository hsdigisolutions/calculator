import { describe, it, expect } from "vitest";
import { healthR7Engines } from "./health-r7-wave3";

const run = (id: string, inputs: Record<string, string>) => healthR7Engines[id](inputs);
const isNaNresult = (v: unknown) => Number.isNaN(v as number);

describe("health r7 wave3 engines", () => {
  it("calories-burned-activity: MET formula", () => {
    const r = run("calories-burned-activity", { weightKg: "70", metValue: "8", minutes: "30" });
    // 8 * 3.5 * 70 / 200 * 30 = 294
    expect(r.caloriesBurned as number).toBeCloseTo(294, 5);
  });
  it("calories-burned-activity: zero/invalid → NaN", () => {
    expect(isNaNresult(run("calories-burned-activity", { weightKg: "0", metValue: "8", minutes: "30" }).caloriesBurned)).toBe(true);
    expect(isNaNresult(run("calories-burned-activity", { weightKg: "", metValue: "8", minutes: "30" }).caloriesBurned)).toBe(true);
    expect(isNaNresult(run("calories-burned-activity", { weightKg: "70", metValue: "-1", minutes: "30" }).caloriesBurned)).toBe(true);
  });

  it("body-frame-size: ratio and bands", () => {
    const small = run("body-frame-size", { heightCm: "180", wristCm: "16" }); // 11.25 > 10.4
    expect(small.ratio as number).toBeCloseTo(11.25, 2);
    expect(small.frame).toBe("Small frame");
    expect(run("body-frame-size", { heightCm: "175", wristCm: "17.5" }).frame).toBe("Medium frame"); // 10.0
    expect(run("body-frame-size", { heightCm: "170", wristCm: "18" }).frame).toBe("Large frame"); // 9.44
  });
  it("body-frame-size: invalid → NaN and dash", () => {
    const r = run("body-frame-size", { heightCm: "0", wristCm: "16" });
    expect(isNaNresult(r.ratio)).toBe(true);
    expect(r.frame).toBe("—");
  });

  it("pregnancy-weight-gain: IOM ranges by BMI", () => {
    // 60 kg, 165 cm → BMI 22.04 → normal → 11.5-16
    const normal = run("pregnancy-weight-gain", { prePregnancyWeightKg: "60", heightCm: "165" });
    expect(normal.bmi as number).toBeCloseTo(22.04, 1);
    expect(normal.recommendedGainLowKg).toBe(11.5);
    expect(normal.recommendedGainHighKg).toBe(16);
    // underweight
    const under = run("pregnancy-weight-gain", { prePregnancyWeightKg: "45", heightCm: "170" }); // BMI 15.6
    expect(under.recommendedGainLowKg).toBe(12.5);
    expect(under.recommendedGainHighKg).toBe(18);
    // overweight
    const over = run("pregnancy-weight-gain", { prePregnancyWeightKg: "80", heightCm: "170" }); // BMI 27.7
    expect(over.recommendedGainLowKg).toBe(7);
    expect(over.recommendedGainHighKg).toBe(11.5);
    // obese
    const obese = run("pregnancy-weight-gain", { prePregnancyWeightKg: "95", heightCm: "170" }); // BMI 32.9
    expect(obese.recommendedGainLowKg).toBe(5);
    expect(obese.recommendedGainHighKg).toBe(9);
  });
  it("pregnancy-weight-gain: invalid → NaN", () => {
    expect(isNaNresult(run("pregnancy-weight-gain", { prePregnancyWeightKg: "", heightCm: "165" }).recommendedGainLowKg)).toBe(true);
  });

  it("weight-loss-calorie-goal: daily target and weekly deficit", () => {
    const r = run("weight-loss-calorie-goal", { tdee: "2500", weeklyLossKg: "0.5" });
    // weeklyDeficit = 3850; daily = 2500 - 550 = 1950
    expect(r.weeklyDeficit as number).toBeCloseTo(3850, 5);
    expect(r.dailyCalories as number).toBeCloseTo(1950, 5);
  });
  it("weight-loss-calorie-goal: invalid → NaN", () => {
    expect(isNaNresult(run("weight-loss-calorie-goal", { tdee: "0", weeklyLossKg: "0.5" }).dailyCalories)).toBe(true);
  });

  it("heart-rate-zones: max and zone boundaries", () => {
    const r = run("heart-rate-zones", { age: "30" });
    expect(r.maxHeartRate as number).toBe(190);
    expect(r.zone2Bpm as number).toBeCloseTo(114, 5);
    expect(r.zone3Bpm as number).toBeCloseTo(133, 5);
    expect(r.zone4Bpm as number).toBeCloseTo(161.5, 5);
  });
  it("heart-rate-zones: invalid → NaN", () => {
    expect(isNaNresult(run("heart-rate-zones", { age: "0" }).maxHeartRate)).toBe(true);
    expect(isNaNresult(run("heart-rate-zones", { age: "" }).maxHeartRate)).toBe(true);
  });

  it("daily-protein-intake: grams per kg", () => {
    const r = run("daily-protein-intake", { weightKg: "80", activityFactor: "1.6" });
    expect(r.proteinGrams as number).toBeCloseTo(128, 5);
  });
  it("daily-protein-intake: invalid → NaN", () => {
    expect(isNaNresult(run("daily-protein-intake", { weightKg: "0", activityFactor: "1.6" }).proteinGrams)).toBe(true);
  });

  it("exercise-hydration: liters and ounces", () => {
    const r = run("exercise-hydration", { exerciseMinutes: "90", sweatRateLitersPerHour: "1" });
    expect(r.fluidNeededLiters as number).toBeCloseTo(1.5, 5);
    expect(r.fluidNeededOz as number).toBeCloseTo(50.721, 2);
  });
  it("exercise-hydration: invalid → NaN", () => {
    expect(isNaNresult(run("exercise-hydration", { exerciseMinutes: "90", sweatRateLitersPerHour: "0" }).fluidNeededLiters)).toBe(true);
  });

  it("steps-to-calories: steps × weight × constant", () => {
    const r = run("steps-to-calories", { steps: "10000", weightKg: "70" });
    // 10000 * 70 * 0.00057 = 399
    expect(r.caloriesBurned as number).toBeCloseTo(399, 5);
  });
  it("steps-to-calories: invalid → NaN", () => {
    expect(isNaNresult(run("steps-to-calories", { steps: "10000", weightKg: "0" }).caloriesBurned)).toBe(true);
  });

  it("blood-pressure-category: AHA bands", () => {
    expect(run("blood-pressure-category", { systolic: "115", diastolic: "75" }).category).toBe("Normal");
    expect(run("blood-pressure-category", { systolic: "125", diastolic: "78" }).category).toBe("Elevated");
    expect(run("blood-pressure-category", { systolic: "135", diastolic: "85" }).category).toBe("Hypertension stage 1");
    expect(run("blood-pressure-category", { systolic: "150", diastolic: "95" }).category).toBe("Hypertension stage 2");
    expect(run("blood-pressure-category", { systolic: "185", diastolic: "125" }).category).toBe("Hypertensive crisis");
    // diastolic-driven stage 1
    expect(run("blood-pressure-category", { systolic: "118", diastolic: "82" }).category).toBe("Hypertension stage 1");
  });
  it("blood-pressure-category: invalid → dash", () => {
    expect(run("blood-pressure-category", { systolic: "0", diastolic: "80" }).category).toBe("—");
  });

  it("waist-to-hip-ratio: ratio and sex-specific risk", () => {
    const male = run("waist-to-hip-ratio", { waistCm: "100", hipCm: "100", sex: "male" }); // 1.0 > 0.9
    expect(male.whr as number).toBeCloseTo(1.0, 5);
    expect(male.riskCategory).toBe("Elevated risk");
    const maleLow = run("waist-to-hip-ratio", { waistCm: "80", hipCm: "100", sex: "male" }); // 0.8
    expect(maleLow.riskCategory).toBe("Low risk");
    const female = run("waist-to-hip-ratio", { waistCm: "88", hipCm: "100", sex: "female" }); // 0.88 > 0.85
    expect(female.riskCategory).toBe("Elevated risk");
  });
  it("waist-to-hip-ratio: invalid → NaN and dash", () => {
    const r = run("waist-to-hip-ratio", { waistCm: "0", hipCm: "100", sex: "male" });
    expect(isNaNresult(r.whr)).toBe(true);
    expect(r.riskCategory).toBe("—");
  });
});
