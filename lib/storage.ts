import type { ProgressState } from "./types";
import { questions } from "./questions";

export const STORAGE_KEY = "imm-assistant-interview-progress";

const emptyProgress = (): ProgressState => ({
  answers: {},
  completedIds: [],
});

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      answers: parsed.answers ?? {},
      completedIds: parsed.completedIds ?? [],
    };
  } catch {
    return emptyProgress();
  }
}

export function saveAnswer(questionId: string, answer: string): ProgressState {
  const current = loadProgress();
  const trimmed = answer.trim();
  const answers = { ...current.answers, [questionId]: answer };
  const completed = new Set(current.completedIds);

  if (trimmed) completed.add(questionId);
  else completed.delete(questionId);

  const next: ProgressState = {
    answers,
    completedIds: Array.from(completed),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function getProgressSummary(progress: ProgressState) {
  const total = questions.length;
  const completed = questions.filter((question) =>
    progress.completedIds.includes(question.id),
  ).length;

  return { completed, total };
}
