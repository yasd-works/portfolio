export const profile = {
  name: 'Yasuda.y',
  role: 'DX Engineer & Data Scientist',
  bio: 'Python, AI, Serverless Architecture',
  github: 'https://github.com/yasd-works',
  description:
    '現場の課題を整理し、Python・AIによる業務改善からWebサービスの設計・開発・運用までを支援するDXエンジニア、Yasuda.yのポートフォリオ。',
  summary:
    '現場の課題ヒアリングから、AI（LLM）やPythonを活用したプロトタイプ（PoC）の構築、業務の自動化までを一貫して推進。データサイエンスの知見とWebインフラの構築力を掛け合わせ、実務で使い続けられる仕組みをつくります。',
};

export const navigation = [
  { href: '#projects', label: '実績', en: 'Projects' },
  { href: '#skills', label: 'スキル', en: 'Skills' },
  { href: '#experience', label: '経歴', en: 'Experience' },
];

// Career metrics are scoped to the source skill sheet, not live analytics.
export const metrics = [
  { value: '0.25 → 0.85', label: '故障予測モデルのF1スコア', note: '担当した直近の1モデルで改善' },
  { value: '8h → 1h', label: 'データ抽出・処理時間', note: '既存プログラムの改修による短縮' },
  { value: '11万', unit: 'PV', label: '情報ポータルの閲覧数', note: '職務経歴書更新時点の直近30日間' },
];

export type Project = {
  number: string;
  category: string;
  title: string;
  before: string;
  after: string;
  outcome: string;
  tags: string[];
  icon: 'scan' | 'flow' | 'code' | 'layers';
};

// The first three cases were completed at the airline. The owner confirmed
// responsibility for consulting, requirements definition, and implementation.
export const projects: Project[] = [
  {
    number: '01',
    category: 'AI導入・ITコンサルティング',
    title: '目視検査に、AIという選択肢を。',
    before: 'PDFとWebページの目視比較に工数がかかり、見落としや確認品質のばらつきが発生。',
    after: '航空会社で、課題整理・提案から要件定義、Pythonによる検査補助PoCの実装までを担当。LLMによる誤字脱字チェックの精度向上も提案。',
    outcome: '課題の発見から、検証できるPoCへ',
    tags: ['Python', 'LLM', 'PoC開発', 'DX推進'],
    icon: 'scan',
  },
  {
    number: '02',
    category: '業務自動化',
    title: '毎回2時間の転記を、自動化。',
    before: 'SaaSからデータを取り出し、スプレッドシートへ手作業でコピーする業務に毎回2時間。',
    after: '航空会社で、業務改善の提案・要件定義から実装までを担当。APIとスクレイピングでデータ元から直接抽出・連携する仕組みを構築し、転記を自動化。',
    outcome: 'データ抽出から連携まで、自動で完結',
    tags: ['Python', 'GAS', 'API', '業務改善'],
    icon: 'flow',
  },
  {
    number: '03',
    category: '生成AI活用',
    title: 'レガシーコードの移行を支援。',
    before: '他部署で進むC言語からVB.NETへの移行で、既存コードの書き換えが大きな負荷に。',
    after: '航空会社で、LLM活用の提案・要件定義から実装までを担当。専用の変換プロンプトを設計・提供し、他部署のコード移行を支援。',
    outcome: '生成AIを、具体的な開発業務に適用',
    tags: ['LLM', 'Prompt Engineering', 'VB.NET'],
    icon: 'code',
  },
  {
    number: '04',
    category: 'Web開発・プロジェクトマネジメント',
    title: '28名で育てる、情報ポータル。',
    before: 'コンテンツの継続更新を支えるインフラと、ライター26名を含む制作体制の運用が必要。',
    after: 'Cloudflareによるサーバーレス基盤と内製CMSを構築。PMと開発主担当を兼任し、直近30日間で約11万PV・約1.2万MAUを記録したサイトを運営。',
    outcome: '企画・実装・チーム運営を一貫して担当',
    tags: ['Cloudflare', 'Astro', 'TypeScript', 'PM'],
    icon: 'layers',
  },
];

export const skillGroups = [
  {
    number: '01',
    title: 'AI & Data Science',
    description: 'データから仮説を立て、業務で使えるモデルとツールへ。',
    tags: ['Python', 'LLM', 'faster-whisper', 'OpenCV', '機械学習モデリング', 'データ分析', 'Tableau', 'SPSS'],
  },
  {
    number: '02',
    title: 'Cloud & Infrastructure',
    description: '継続的な運用を見据えたサーバーレス基盤を設計。',
    tags: ['Cloudflare Workers', 'D1', 'R2', 'Queues', 'AWS CLI', 'Linux'],
  },
  {
    number: '03',
    title: 'Frontend & Backend',
    description: '使いやすい画面から、データ連携の仕組みまで実装。',
    tags: ['Astro', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Hono', 'SQL', 'GAS'],
  },
  {
    number: '04',
    title: 'Management',
    description: '現場の要望を整理し、実装とチームの進行をつなぐ。',
    tags: ['要件定義', 'DX推進提案', '開発PM', '進捗・品質管理', '約30名規模のチーム運営'],
  },
];

export const experience = [
  {
    period: '現在',
    title: 'フリーランス / DXエンジニア',
    role: 'DX Engineering & Consulting',
    description: '課題整理、AI・Pythonを活用した業務改善、Webサービス開発を軸に活動。データ分析とシステム実装の両面から支援します。',
    current: true,
  },
  {
    period: '2025.12 — 現在',
    title: '情報ポータルの開発・運営',
    role: 'PM / Full-stack Engineer · 副業として開始',
    description: '28名の制作体制で、企画・要件定義から開発、運用までを担当。Cloudflare上の基盤、内製CMS、外部APIとの連携を構築。',
  },
  {
    period: '2023.12 — 2026.07',
    title: '大手航空会社',
    role: 'Data Scientist',
    description: '航空機部品の故障予測モデルを計10件構築。直近のモデルでF1スコア0.25→0.85、予兆検知3日→7日に改善。検査補助PoC・データ連携の自動化・生成AIによる移行支援も、提案から要件定義・実装まで担当。',
  },
  {
    period: '2020.03 — 2023.02',
    title: '航空自衛隊',
    role: '航空機操縦訓練 / 組織マネジメント',
    description: '航空機操縦訓練と幹部としての人員統率を経験。VBAを活用した行政文書の自動作成・物品管理システム開発、基地内ポータルのUI改善を推進。',
  },
];
