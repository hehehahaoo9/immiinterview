import type { CategoryId, Question } from "./types";

export const questions: Question[] = [
  {
    id: "mot-01",
    category: "motivation",
    title: "為何申請入境事務助理員？",
    prompt:
      "請說明你申請入境事務助理員的原因，以及這個職位如何配合你的能力與職業目標。",
    hint: "建議框架：\n1. 動機：服務市民、維護出入境秩序、穩定而有意義的公職。\n2. 對職位的理解：前線執法支援、輪班、接觸不同旅客。\n3. 個人匹配：溝通、耐性、責任感、抗壓。\n4. 收結：願意學習程序並長期服務。",
  },
  {
    id: "mot-02",
    category: "motivation",
    title: "你如何理解這個職位的日常工作？",
    prompt:
      "入境事務助理員與入境事務主任的角色有何不同？你認為前線工作最重要的三件事是什麼？",
    hint: "建議框架：\n1. 職位定位：支援管制、檢查、旅客接待及部門日常運作。\n2. 與主任分別：助理員偏執行與前線支援，主任偏決策與個案處理。\n3. 三件要事：依法辦事、禮貌專業、保持警覺。\n4. 補充：願意接受上級指示及輪班安排。",
  },
  {
    id: "mot-03",
    category: "motivation",
    title: "輪班、戶外及高壓環境你如何應付？",
    prompt:
      "前線工作可能涉及輪班、長時間站立、人流高峰及情緒激動的旅客。你會如何調整自己？",
    hint: "建議框架：\n1. 承認現實：工作性質要求體能、紀律與穩定作息。\n2. 具體方法：睡眠、運動、時間管理、與家人溝通。\n3. 工作態度：高峰時保持冷靜、不把情緒帶回崗位。\n4. 例子：過往實習、兼職或團體活動中的抗壓經驗。",
  },
  {
    id: "sce-01",
    category: "scenario",
    title: "旅客情緒激動並拒絕檢查",
    prompt:
      "在管制站，一名旅客大聲投訴輪候太久，拒絕出示旅行證件。你會如何處理？",
    hint: "建議框架：\n1. 安全與秩序：保持距離、留意周圍人流，避免衝突升級。\n2. 溝通：平靜說明檢查是法定程序，輪候情況可簡短解釋。\n3. 程序：重複要求出示證件；仍拒絕則按指引向上司報告。\n4. 原則：有禮、堅定、不爭辯、不自行作出超出職權的決定。",
  },
  {
    id: "sce-02",
    category: "scenario",
    title: "懷疑旅行證件有問題",
    prompt:
      "檢查時你覺得某本護照的照片頁手感或印刷異常。你下一步會怎樣做？",
    hint: "建議框架：\n1. 保持專業：不要當面指控對方使用假證件。\n2. 核對：按訓練檢查防偽特徵、對比旅客樣貌及行程。\n3. 上報：立即通知上司或指定同事，交由有權限人員跟進。\n4. 現場控制：禮貌請旅客稍候，避免打草驚蛇或引起騷動。",
  },
  {
    id: "sce-03",
    category: "scenario",
    title: "同事遲到，你獨自面對人龍",
    prompt:
      "繁忙時段你的拍檔尚未到崗，旅客開始抱怨。你會如何安排？",
    hint: "建議框架：\n1. 優先：維持通道安全及基本秩序，不要獨自承擔超出能力的工作。\n2. 通報：盡快通知上司人手不足。\n3. 現場：清晰指示旅客排隊，必要時暫停非緊急協助。\n4. 態度：對旅客道歉要適度，重點是解釋正在調配人手，而非推卸。",
  },
  {
    id: "dep-01",
    category: "department",
    title: "入境處的主要職能",
    prompt:
      "請簡述香港入境事務處的主要職責，以及前線人員在當中扮演的角色。",
    hint: "建議框架：\n1. 出入境管制：處理香港居民及旅客進出。\n2. 身份證明：身份證、簽證及旅行證件相關服務。\n3. 執法：打擊非法入境、逾期逗留等。\n4. 前線角色：執行檢查、接待、協助調查及維持櫃檯／管制站運作。",
  },
  {
    id: "dep-02",
    category: "department",
    title: "逗留條件與逾期逗留",
    prompt:
      "旅客或非永久性居民違反逗留條件、逾期逗留，前線人員應有什麼基本意識？",
    hint: "建議框架：\n1. 概念：入境後必須遵守獲准的逗留條件及期限。\n2. 常見情況：過期簽證／逗留、非法工作、提供虛假資料。\n3. 前線做法：核對證件及逗留標籤／電子紀錄，發現疑點即上報。\n4. 原則：不憑猜測處罰，依程序交由有權限人員處理。",
  },
  {
    id: "dep-03",
    category: "department",
    title: "自助過關與櫃檯檢查的分別",
    prompt:
      "e-Channel 等自助過關設施普及後，入境事務助理員的工作還有什麼價值？",
    hint: "建議框架：\n1. 科技輔助：加快合資格旅客過關，減少輪候。\n2. 人的角色：處理例外情況、協助有需要旅客、監察異常。\n3. 風險意識：自助通道不是全無風險，仍需觀察及支援。\n4. 收結：科技提升效率，前線人員負責把關質素與應變。",
  },
];

export function getQuestionsByCategory(category: CategoryId): Question[] {
  return questions.filter((question) => question.category === category);
}

export function getQuestion(id: string): Question | undefined {
  return questions.find((question) => question.id === id);
}

export function getAdjacentQuestion(
  category: CategoryId,
  currentId: string,
): { prev?: Question; next?: Question } {
  const list = getQuestionsByCategory(category);
  const index = list.findIndex((question) => question.id === currentId);
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
}
