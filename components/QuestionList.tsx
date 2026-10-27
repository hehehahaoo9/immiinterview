"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CategoryId } from "@/lib/types";
import { getQuestionsByCategory } from "@/lib/questions";
import { loadProgress } from "@/lib/storage";

export function QuestionList({ category }: { category: CategoryId }) {
  const items = getQuestionsByCategory(category);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(loadProgress().completedIds);
  }, []);

  return (
    <section className="list">
      {items.map((question) => {
        const done = completed.includes(question.id);
        return (
          <Link
            key={question.id}
            href={`/practice/${category}/${question.id}`}
            className="card list-item"
          >
            <div>
              <h2>{question.title}</h2>
              <p>{question.prompt}</p>
            </div>
            <span className={done ? "badge done" : "badge"}>
              {done ? "已作答" : "未作答"}
            </span>
          </Link>
        );
      })}
    </section>
  );
}
