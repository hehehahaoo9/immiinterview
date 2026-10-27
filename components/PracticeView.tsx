"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/lib/types";
import { getAdjacentQuestion } from "@/lib/questions";
import { loadProgress, saveAnswer } from "@/lib/storage";

export function PracticeView({ question }: { question: Question }) {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [saved, setSaved] = useState(false);

  const { prev, next } = useMemo(
    () => getAdjacentQuestion(question.category, question.id),
    [question.category, question.id],
  );

  useEffect(() => {
    const stored = loadProgress().answers[question.id] ?? "";
    setAnswer(stored);
    setShowHint(false);
    setFeedback("");
    setSaved(false);
  }, [question.id]);

  function handleChange(value: string) {
    setAnswer(value);
    saveAnswer(question.id, value);
    setSaved(true);
  }

  function requestFeedback() {
    setFeedback(
      "AI 反饋尚未接上 API。之後會根據你的答案，就結構、部門意識與表達清晰度給予建議。",
    );
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
        <button type="button" onClick={requestFeedback} disabled={!answer.trim()}>
          AI 反饋
        </button>
      </div>

      {showHint ? <div className="hint">{question.hint}</div> : null}

      <textarea
        value={answer}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="在此輸入你的答題要點或完整答案。"
      />
      {saved ? <p className="meta">已儲存至本機瀏覽器。</p> : null}

      {feedback ? <div className="feedback">{feedback}</div> : null}

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
