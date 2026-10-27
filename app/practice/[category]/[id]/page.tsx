import Link from "next/link";
import { notFound } from "next/navigation";
import { PracticeView } from "@/components/PracticeView";
import { ProgressHeader } from "@/components/ProgressHeader";
import { isCategoryId } from "@/lib/categories";
import { getQuestion } from "@/lib/questions";

type Props = {
  params: Promise<{ category: string; id: string }>;
};

export default async function QuestionPage({ params }: Props) {
  const { category, id } = await params;
  if (!isCategoryId(category)) notFound();

  const question = getQuestion(id);
  if (!question || question.category !== category) notFound();

  return (
    <main>
      <ProgressHeader title="練習題" />
      <Link href={`/practice/${category}`} className="back">
        ← 返回題目列表
      </Link>
      <PracticeView question={question} />
    </main>
  );
}
