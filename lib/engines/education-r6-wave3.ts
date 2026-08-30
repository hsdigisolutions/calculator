import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Education — Round 6 Wave 3 engines. Pure functions. Invalid → NaN (or "—" for text). */

const finite = (x: number) => Number.isFinite(x);

// Map a 0–100 percentage onto a common US letter grade.
const letterFor = (pct: number): string => {
  if (!finite(pct)) return "—";
  if (pct >= 90) return "A";
  if (pct >= 80) return "B";
  if (pct >= 70) return "C";
  if (pct >= 60) return "D";
  return "F";
};

// Score needed on the final exam to reach a desired overall grade.
const finalGrade: ComputeFn = (i) => {
  const currentGrade = num(i.currentGrade);
  const desiredGrade = num(i.desiredGrade);
  const finalWeight = num(i.finalWeight);
  if (![currentGrade, desiredGrade, finalWeight].every(finite) || finalWeight === 0)
    return { requiredFinalScore: NaN };
  const w = finalWeight / 100;
  const requiredFinalScore = (desiredGrade - currentGrade * (1 - w)) / w;
  return { requiredFinalScore };
};

// Weighted average of up to three scored components; rows with 0/blank weight are ignored.
const weightedGrade: ComputeFn = (i) => {
  const pairs: [number, number][] = [
    [num(i.score1), num(i.weight1)],
    [num(i.score2), num(i.weight2)],
    [num(i.score3), num(i.weight3)],
  ];
  let weighted = 0;
  let totalWeight = 0;
  for (const [score, weight] of pairs) {
    if (finite(score) && finite(weight) && weight > 0) {
      weighted += score * weight;
      totalWeight += weight;
    }
  }
  if (totalWeight === 0) return { weightedAverage: NaN };
  return { weightedAverage: weighted / totalWeight };
};

// Raw points earned as a percentage, plus its letter grade.
const testScore: ComputeFn = (i) => {
  const pointsEarned = num(i.pointsEarned);
  const pointsPossible = num(i.pointsPossible);
  if (![pointsEarned, pointsPossible].every(finite) || pointsPossible === 0)
    return { percentage: NaN, letterGrade: "—" };
  const percentage = (pointsEarned / pointsPossible) * 100;
  return { percentage, letterGrade: letterFor(percentage) };
};

// Convert a 4.0-scale GPA into an approximate percentage and letter.
const gpaToPercentage: ComputeFn = (i) => {
  const gpa = num(i.gpa);
  if (!finite(gpa)) return { percentage: NaN, letterGrade: "—" };
  const percentage = (gpa / 4) * 100;
  return { percentage, letterGrade: letterFor(percentage) };
};

// Blend a running cumulative GPA with a new semester, weighting by credits.
const cumulativeGpa: ComputeFn = (i) => {
  const currentGpa = num(i.currentGpa);
  const currentCredits = num(i.currentCredits);
  const semesterGpa = num(i.semesterGpa);
  const semesterCredits = num(i.semesterCredits);
  if (![currentGpa, currentCredits, semesterGpa, semesterCredits].every(finite))
    return { cumulativeGpa: NaN };
  const totalCredits = currentCredits + semesterCredits;
  if (totalCredits === 0) return { cumulativeGpa: NaN };
  const cumulativeGpa =
    (currentGpa * currentCredits + semesterGpa * semesterCredits) / totalCredits;
  return { cumulativeGpa };
};

// Minutes needed to read a word count at a given reading speed.
const readingTime: ComputeFn = (i) => {
  const wordCount = num(i.wordCount);
  const wpmRaw = num(i.wordsPerMinute);
  const wordsPerMinute = finite(wpmRaw) ? wpmRaw : 200;
  if (!finite(wordCount) || wordsPerMinute <= 0) return { minutes: NaN };
  return { minutes: wordCount / wordsPerMinute };
};

// Recommended weekly out-of-class study hours from a course load.
const studyTime: ComputeFn = (i) => {
  const creditHours = num(i.creditHours);
  const hpcRaw = num(i.hoursPerCreditPerWeek);
  const hoursPerCredit = finite(hpcRaw) ? hpcRaw : 2;
  if (!finite(creditHours)) return { weeklyStudyHours: NaN };
  return { weeklyStudyHours: creditHours * hoursPerCredit };
};

// Estimate total word count from a page count and words-per-page density.
const wordsPerPage: ComputeFn = (i) => {
  const pages = num(i.pages);
  const wppRaw = num(i.wordsPerPage);
  const wordsPerPage = finite(wppRaw) ? wppRaw : 500;
  if (!finite(pages)) return { totalWords: NaN };
  return { totalWords: pages * wordsPerPage };
};

// Linear-shift curve: raise every score so the class top hits the target maximum.
const gradeCurve: ComputeFn = (i) => {
  const studentScore = num(i.studentScore);
  const highestClassScore = num(i.highestClassScore);
  const targetRaw = num(i.targetMax);
  const targetMax = finite(targetRaw) ? targetRaw : 100;
  if (![studentScore, highestClassScore].every(finite)) return { curvedScore: NaN };
  return { curvedScore: studentScore + (targetMax - highestClassScore) };
};

// Attendance rate and count of missed classes.
const attendance: ComputeFn = (i) => {
  const classesAttended = num(i.classesAttended);
  const totalClasses = num(i.totalClasses);
  if (![classesAttended, totalClasses].every(finite) || totalClasses === 0)
    return { attendanceRate: NaN, classesMissed: NaN };
  return {
    attendanceRate: (classesAttended / totalClasses) * 100,
    classesMissed: totalClasses - classesAttended,
  };
};

export const educationR6Engines: Record<string, ComputeFn> = {
  "final-grade": finalGrade,
  "weighted-grade": weightedGrade,
  "test-score": testScore,
  "gpa-to-percentage": gpaToPercentage,
  "cumulative-gpa": cumulativeGpa,
  "reading-time": readingTime,
  "study-time": studyTime,
  "words-per-page": wordsPerPage,
  "grade-curve": gradeCurve,
  "attendance": attendance,
};
