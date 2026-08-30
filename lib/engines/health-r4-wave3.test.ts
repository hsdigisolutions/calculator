import { describe, it, expect } from "vitest";
import { healthR4Engines } from "./health-r4-wave3";

const run = (key: string, inputs: Record<string, string>) => healthR4Engines[key](inputs);

describe("health r4 wave3 engines", () => {
  it("lean-body-mass: Boer male", () => {
    const r = run("lean-body-mass", { weightKg: "80", heightCm: "180", sex: "male" });
    // 0.407*80 + 0.267*180 - 19.2 = 32.56 + 48.06 - 19.2 = 61.42
    expect(r.leanBodyMass as number).toBeCloseTo(61.42, 2);
    expect(r.bodyFatMass as number).toBeCloseTo(18.58, 2);
  });

  it("lean-body-mass: Boer female", () => {
    const r = run("lean-body-mass", { weightKg: "60", heightCm: "165", sex: "female" });
    // 0.252*60 + 0.473*165 - 48.3 = 15.12 + 78.045 - 48.3 = 44.865
    expect(r.leanBodyMass as number).toBeCloseTo(44.865, 2);
  });

  it("lean-body-mass: invalid -> NaN", () => {
    const r = run("lean-body-mass", { weightKg: "0", heightCm: "180", sex: "male" });
    expect(Number.isNaN(r.leanBodyMass as number)).toBe(true);
  });

  it("army-body-fat: Navy male", () => {
    const r = run("army-body-fat", { sex: "male", heightCm: "180", neckCm: "38", waistCm: "85" });
    // 495/(1.0324 - 0.19077*log10(47) + 0.15456*log10(180)) - 450 ≈ 16.1
    expect(r.bodyFatPercent as number).toBeCloseTo(16.1, 1);
  });

  it("army-body-fat: Navy female uses hip", () => {
    const r = run("army-body-fat", {
      sex: "female",
      heightCm: "165",
      neckCm: "32",
      waistCm: "72",
      hipCm: "95",
    });
    expect(r.bodyFatPercent as number).toBeGreaterThan(0);
    expect(Number.isFinite(r.bodyFatPercent as number)).toBe(true);
  });

  it("army-body-fat: invalid (waist<=neck) -> NaN", () => {
    const r = run("army-body-fat", { sex: "male", heightCm: "180", neckCm: "40", waistCm: "38" });
    expect(Number.isNaN(r.bodyFatPercent as number)).toBe(true);
  });

  it("target-heart-rate: simple percent when no resting", () => {
    const r = run("target-heart-rate", { age: "30", intensityPercent: "70" });
    // maxHR 190, target 133
    expect(r.maxHeartRate).toBe(190);
    expect(r.targetBpm as number).toBeCloseTo(133, 5);
  });

  it("target-heart-rate: Karvonen with resting", () => {
    const r = run("target-heart-rate", {
      age: "30",
      restingHeartRate: "60",
      intensityPercent: "70",
    });
    // ((190-60)*0.7)+60 = 91+60 = 151
    expect(r.targetBpm as number).toBeCloseTo(151, 5);
  });

  it("target-heart-rate: invalid -> NaN", () => {
    const r = run("target-heart-rate", { age: "abc", intensityPercent: "70" });
    expect(Number.isNaN(r.targetBpm as number)).toBe(true);
  });

  it("calorie-deficit: deficit and target calories", () => {
    const r = run("calorie-deficit", {
      maintenanceCalories: "2500",
      targetWeightLossKg: "5",
      weeks: "10",
    });
    // total 38500, /70 = 550
    expect(r.dailyDeficit as number).toBeCloseTo(550, 5);
    expect(r.dailyCalories as number).toBeCloseTo(1950, 5);
  });

  it("calorie-deficit: zero weeks -> NaN", () => {
    const r = run("calorie-deficit", {
      maintenanceCalories: "2500",
      targetWeightLossKg: "5",
      weeks: "0",
    });
    expect(Number.isNaN(r.dailyDeficit as number)).toBe(true);
  });

  it("water-intake-daily: baseline plus exercise", () => {
    const r = run("water-intake-daily", { weightKg: "70", exerciseMinutes: "60" });
    // (35*70 + 2*350)/1000 = (2450+700)/1000 = 3.15
    expect(r.litersPerDay as number).toBeCloseTo(3.15, 5);
    expect(r.ouncesPerDay as number).toBeCloseTo(106.51, 1);
  });

  it("water-intake-daily: no exercise", () => {
    const r = run("water-intake-daily", { weightKg: "70" });
    expect(r.litersPerDay as number).toBeCloseTo(2.45, 5);
  });

  it("water-intake-daily: invalid -> NaN", () => {
    const r = run("water-intake-daily", { weightKg: "0" });
    expect(Number.isNaN(r.litersPerDay as number)).toBe(true);
  });

  it("ponderal-index: weight over height cubed", () => {
    const r = run("ponderal-index", { weightKg: "70", heightCm: "175" });
    // 70 / 1.75^3 = 70 / 5.359375 ≈ 13.06
    expect(r.ponderalIndex as number).toBeCloseTo(13.06, 1);
  });

  it("ponderal-index: invalid -> NaN", () => {
    const r = run("ponderal-index", { weightKg: "70", heightCm: "0" });
    expect(Number.isNaN(r.ponderalIndex as number)).toBe(true);
  });

  it("alcohol-units: UK units and grams", () => {
    const r = run("alcohol-units", { volumeMl: "500", abvPercent: "5" });
    // units = 500*5/1000 = 2.5 ; grams = 500*0.05*0.789 = 19.725
    expect(r.units as number).toBeCloseTo(2.5, 5);
    expect(r.gramsAlcohol as number).toBeCloseTo(19.725, 3);
  });

  it("alcohol-units: invalid -> NaN", () => {
    const r = run("alcohol-units", { volumeMl: "abc", abvPercent: "5" });
    expect(Number.isNaN(r.units as number)).toBe(true);
  });

  it("sleep-cycle: bedtimes wrap correctly", () => {
    const r = run("sleep-cycle", { wakeHour: "7", wakeMinute: "0" });
    // wake 420 min. 6 cycles: 420 - (540+15) = -135 -> +1440 = 1305 -> 21:45
    expect(r.bedtime6cycles).toBe("21:45");
    // 5 cycles: 420 - (450+15) = -45 -> 1395 -> 23:15
    expect(r.bedtime5cycles).toBe("23:15");
    // 4 cycles: 420 - (360+15) = 45 -> 00:45
    expect(r.bedtime4cycles).toBe("00:45");
  });

  it("sleep-cycle: invalid -> em dash", () => {
    const r = run("sleep-cycle", { wakeHour: "30", wakeMinute: "0" });
    expect(r.bedtime6cycles).toBe("—");
  });

  it("macros-by-goal: balanced split", () => {
    const r = run("macros-by-goal", { calories: "2000", goal: "balanced" });
    // protein 30% -> 600/4=150 ; carbs 40% -> 800/4=200 ; fat 30% -> 600/9=66.67
    expect(r.proteinGrams as number).toBeCloseTo(150, 5);
    expect(r.carbsGrams as number).toBeCloseTo(200, 5);
    expect(r.fatGrams as number).toBeCloseTo(66.667, 2);
  });

  it("macros-by-goal: lowcarb split", () => {
    const r = run("macros-by-goal", { calories: "2000", goal: "lowcarb" });
    // protein 40% 800/4=200 ; carbs 20% 400/4=100 ; fat 40% 800/9=88.89
    expect(r.proteinGrams as number).toBeCloseTo(200, 5);
    expect(r.carbsGrams as number).toBeCloseTo(100, 5);
    expect(r.fatGrams as number).toBeCloseTo(88.889, 2);
  });

  it("macros-by-goal: invalid -> NaN", () => {
    const r = run("macros-by-goal", { calories: "0", goal: "balanced" });
    expect(Number.isNaN(r.proteinGrams as number)).toBe(true);
  });

  it("bmi-prime: bmi and prime", () => {
    const r = run("bmi-prime", { weightKg: "70", heightCm: "175" });
    // bmi = 70/1.75^2 = 70/3.0625 = 22.857 ; prime = 0.914
    expect(r.bmi as number).toBeCloseTo(22.857, 2);
    expect(r.bmiPrime as number).toBeCloseTo(0.914, 2);
  });

  it("bmi-prime: invalid -> NaN", () => {
    const r = run("bmi-prime", { weightKg: "70", heightCm: "0" });
    expect(Number.isNaN(r.bmiPrime as number)).toBe(true);
  });
});
