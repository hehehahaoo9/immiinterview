import Link from "next/link";
import { notFound } from "next/navigation";
import { QuestionList } from "@/components/QuestionList";
import { ProgressHeader } from "@/components/ProgressHeader";
import { getCategory, isCategoryId } from "@/lib/categories";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isCategoryId(category)) notFound();

  const meta = getCategory(category);
  if (!meta) notFound();

  return (
    <main className="panel">
      <ProgressHeader title={meta.name} />
      <Link href="/" className="back">
        ← 返回題型
      </Link>
      <h1>{meta.name}</h1>
      <p className="lead">{meta.description}</p>
      <QuestionList category={category} />
    </main>
  );
}
