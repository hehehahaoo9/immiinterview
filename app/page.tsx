import { CategoryList } from "@/components/CategoryList";
import { ProgressHeader } from "@/components/ProgressHeader";

export default function HomePage() {
  return (
    <main>
      <ProgressHeader title="面試練習" />
      <section className="hero">
        <h1>入境事務助理員面試準備</h1>
        <p className="lead">
          先選題型，再按題練習。可先寫自己的答案，有需要時才打開答題框架。進度會保存在這個瀏覽器。
        </p>
      </section>
      <CategoryList />
    </main>
  );
}
