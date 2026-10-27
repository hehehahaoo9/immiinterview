"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/lib/types";
import { getAdjacentQuestion } from "@/lib/questions";
import { loadProgress, saveAnswer } from "@/lib/storage";

export function PracticeView({ question }: { question: Question }) {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [saved, setSaved] = useState(false);

  const { prev, next } = useMemo(
    () => getAdjacentQuestion(question.category, question.id),
    [question.category, question.id],
  );

  useEffect(() => {
    const stored = loadProgress().answers[question.id] ?? "";
    setAnswer(stored);
    setShowHint(false);
    setShowSample(false);
    setSaved(false);
  }, [question.id]);

  function handleChange(value: string) {
    setAnswer(value);
    saveAnswer(question.id, value);
    setSaved(true);
  }

  return (
    <article className="question-page">
      <h1>{question.title}</h1>
      <p className="prompt">{question.prompt}</p>

      <div className="actions">
        <button
          type="button"
          className="secondary"
          onClick={() => setShowHint((value) => !value)}
        >
          {showHint ? "隱藏提示" : "顯示提示"}
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => setShowSample((value) => !value)}
        >
          {showSample ? "隱藏完整答案" : "顯示完整答案"}
        </button>
      </div>

      {showHint ? <div className="hint">{question.hint}</div> : null}
      {showSample ? (
        <div className="sample">
          <strong>參考答案</strong>
          <p>{question.sampleAnswer}</p>
        </div>
      ) : null}

      <textarea
        value={answer}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="在此輸入你的答題要點或完整答案。"
      />
      {saved ? <p className="meta">已儲存至本機瀏覽器。</p> : null}

      <div className="nav-row">
        {prev ? (
          <Link
            className="button secondary"
            href={`/practice/${question.category}/${prev.id}`}
          >
            上一題
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            className="button secondary"
            href={`/practice/${question.category}/${next.id}`}
          >
            下一題
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
