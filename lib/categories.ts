import type { Category, CategoryId } from "./types";

export const categories: Category[] = [
  {
    id: "motivation",
    name: "動機題",
    description: "申請原因、對職位的理解，以及個人特質是否適合前線工作。",
  },
  {
    id: "scenario",
    name: "情景題",
    description: "模擬櫃檯、管制站及突發情況，練習判斷、溝通與程序意識。",
  },
  {
    id: "department",
    name: "部門知識題",
    description: "入境處職能、前線角色，以及公開可查的基本部門知識。",
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function isCategoryId(value: string): value is CategoryId {
  return categories.some((category) => category.id === value);
}
