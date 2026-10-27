"use client";

import { useEffect, useState } from "react";
import { questions } from "@/lib/questions";
import { getProgressSummary, loadProgress } from "@/lib/storage";

export function ProgressHeader({ title }: { title: string }) {
  const [label, setLabel] = useState(`進度 0 / ${questions.length}`);

  useEffect(() => {
    const summary = getProgressSummary(loadProgress());
    setLabel(`進度 ${summary.completed} / ${summary.total}`);
  }, []);

  return (
    <header className="site-header">
      <div>
        <strong>{title}</strong>
        <p>香港入境事務助理員面試準備</p>
      </div>
      <span className="progress-chip">{label}</span>
    </header>
  );
}
