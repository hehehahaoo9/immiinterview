"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/categories";
import { getQuestionsByCategory } from "@/lib/questions";
import { loadProgress } from "@/lib/storage";

export function CategoryList() {
  const [doneByCategory, setDoneByCategory] = useState<Record<string, number>>(
    {},
  );

  useEffect(() => {
    const progress = loadProgress();
    const next: Record<string, number> = {};
    for (const category of categories) {
      next[category.id] = getQuestionsByCategory(category.id).filter((question) =>
        progress.completedIds.includes(question.id),
      ).length;
    }
    setDoneByCategory(next);
  }, []);

  return (
    <section className="grid">
      {categories.map((category) => {
        const total = getQuestionsByCategory(category.id).length;
        const done = doneByCategory[category.id] ?? 0;
        return (
          <Link
            key={category.id}
            href={`/practice/${category.id}`}
            className="card"
          >
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <p className="meta" style={{ marginTop: 10 }}>
              已作答 {done} / {total}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
