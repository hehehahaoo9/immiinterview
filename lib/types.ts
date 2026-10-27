export type CategoryId = "motivation" | "scenario" | "department";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
};

export type Question = {
  id: string;
  category: CategoryId;
  title: string;
  prompt: string;
  hint: string;
};

export type ProgressState = {
  answers: Record<string, string>;
  completedIds: string[];
};
