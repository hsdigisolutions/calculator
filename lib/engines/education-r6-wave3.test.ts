import { describe, it, expect } from "vitest";
import { educationR6Engines } from "./education-r6-wave3";

const run = (id: string, inputs: Record<string, string>) => educationR6Engines[id](inputs);

describe("education r6 wave3 engines", () => {
  it("final-grade: score needed on the final exam", () => {
    // Current 85, want 90 overall, final worth 40%.
    const r = run("final-grade", { currentGrade: "85", desiredGrade: "90", finalWeight: "40" });
    // (90 - 85*0.6) / 0.4 = (90 - 51) / 0.4 = 97.5
    expect(r.requiredFinalScore as number).toBeCloseTo(97.5, 6);
  });

  it("final-grade: zero final weight is impossible → NaN", () => {
    const r = run("final-grade", { currentGrade: "85", desiredGrade: "90", finalWeight: "0" });
    expect(Number.isNaN(r.requiredFinalScore as number)).toBe(true);
  });

  it("weighted-grade: weighted average of scored components", () => {
    const r = run("weighted-grade", {
      score1: "88", weight1: "20",
      score2: "92", weight2: "30",
      score3: "79", weight3: "50",
    });
    // (88*20 + 92*30 + 79*50) / 100 = 84.7
    expect(r.weightedAverage as number).toBeCloseTo(84.7, 6);
  });

  it("weighted-grade: rows with blank/zero weight are ignored", () => {
    const r = run("weighted-grade", {
      score1: "90", weight1: "1",
      score2: "60", weight2: "0",
      score3: "80", weight3: "",
    });
    expect(r.weightedAverage as number).toBeCloseTo(90, 6);
  });

  it("weighted-grade: no weights → NaN", () => {
    const r = run("weighted-grade", { score1: "90", weight1: "", score2: "", weight2: "", score3: "", weight3: "" });
    expect(Number.isNaN(r.weightedAverage as number)).toBe(true);
  });

  it("test-score: percentage and letter grade", () => {
    const r = run("test-score", { pointsEarned: "42", pointsPossible: "50" });
    expect(r.percentage as number).toBeCloseTo(84, 6);
    expect(r.letterGrade).toBe("B");
  });

  it("test-score: zero points possible → NaN and dash", () => {
    const r = run("test-score", { pointsEarned: "42", pointsPossible: "0" });
    expect(Number.isNaN(r.percentage as number)).toBe(true);
    expect(r.letterGrade).toBe("—");
  });

  it("gpa-to-percentage: 3.6 GPA maps to 90%", () => {
    const r = run("gpa-to-percentage", { gpa: "3.6" });
    expect(r.percentage as number).toBeCloseTo(90, 6);
    expect(r.letterGrade).toBe("A");
  });

  it("cumulative-gpa: blends prior and new semester by credits", () => {
    const r = run("cumulative-gpa", {
      currentGpa: "3.4", currentCredits: "60",
      semesterGpa: "3.8", semesterCredits: "15",
    });
    // (3.4*60 + 3.8*15) / 75 = (204 + 57) / 75 = 3.48
    expect(r.cumulativeGpa as number).toBeCloseTo(3.48, 6);
  });

  it("cumulative-gpa: zero total credits → NaN", () => {
    const r = run("cumulative-gpa", {
      currentGpa: "3.4", currentCredits: "0",
      semesterGpa: "3.8", semesterCredits: "0",
    });
    expect(Number.isNaN(r.cumulativeGpa as number)).toBe(true);
  });

  it("reading-time: uses default 200 wpm when blank", () => {
    const r = run("reading-time", { wordCount: "1000", wordsPerMinute: "" });
    expect(r.minutes as number).toBeCloseTo(5, 6);
  });

  it("reading-time: custom speed", () => {
    const r = run("reading-time", { wordCount: "1200", wordsPerMinute: "300" });
    expect(r.minutes as number).toBeCloseTo(4, 6);
  });

  it("study-time: default 2 hours per credit per week", () => {
    const r = run("study-time", { creditHours: "15", hoursPerCreditPerWeek: "" });
    expect(r.weeklyStudyHours as number).toBeCloseTo(30, 6);
  });

  it("words-per-page: default 500 words per page", () => {
    const r = run("words-per-page", { pages: "10", wordsPerPage: "" });
    expect(r.totalWords as number).toBeCloseTo(5000, 6);
  });

  it("grade-curve: shifts score so top hits target max", () => {
    const r = run("grade-curve", { studentScore: "70", highestClassScore: "88", targetMax: "100" });
    // 70 + (100 - 88) = 82
    expect(r.curvedScore as number).toBeCloseTo(82, 6);
  });

  it("attendance: rate and missed classes", () => {
    const r = run("attendance", { classesAttended: "27", totalClasses: "30" });
    expect(r.attendanceRate as number).toBeCloseTo(90, 6);
    expect(r.classesMissed as number).toBe(3);
  });

  it("attendance: zero total classes → NaN", () => {
    const r = run("attendance", { classesAttended: "0", totalClasses: "0" });
    expect(Number.isNaN(r.attendanceRate as number)).toBe(true);
    expect(Number.isNaN(r.classesMissed as number)).toBe(true);
  });

  it("returns NaN when a required input is missing", () => {
    expect(Number.isNaN(run("final-grade", { currentGrade: "", desiredGrade: "90", finalWeight: "40" }).requiredFinalScore as number)).toBe(true);
    expect(Number.isNaN(run("cumulative-gpa", { currentGpa: "3", currentCredits: "", semesterGpa: "4", semesterCredits: "12" }).cumulativeGpa as number)).toBe(true);
  });
});
