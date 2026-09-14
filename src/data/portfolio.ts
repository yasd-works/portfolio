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
  { href: '#projects', label: '取り組んだこと', en: 'Projects' },
  { href: '#skills', label: 'できること', en: 'Skills' },
  { href: '#experience', label: '私について', en: 'About' },
];

export const workflow = ['課題を聞く', '要件を整理する', '小さく試す', '実装する', '運用・改善する'];

export const featuredProjects = [
  {
    kind: 'prediction', category: 'データサイエンス', title: '故障の予兆を、もっと早く。',
    description: '航空機の運航データから部品の故障を予測。独自の解析手法を取り入れ、直近の担当モデルの精度を改善しました。',
    before: '既存モデルの精度を高め、故障の兆候を早く捉えたい。',
    approach: 'データの抽出・クレンジング、仮説検証からモデルの設計・実装・精度評価まで担当。予兆検知のリードタイムも3日から7日に延伸しました。',
    tags: ['Python', '機械学習', 'データ分析'],
  },
  {
    kind: 'automation', category: '業務自動化', title: '毎日2時間の転記を、自動化。',
    description: 'SaaSとGoogle WorkspaceをAPIで接続。データの取得からスプレッドシートへの反映まで、繰り返しの作業を仕組みにしました。',
    before: '日々のコピー＆ペーストに約2時間かかり、他の業務に手が回らない。',
    approach: '現場の相談を受け、必要なデータと更新の流れを整理。改善提案・要件定義から実装まで担当し、毎日の手動転記を自動化しました。',
    tags: ['API連携', 'GAS', 'Google Workspace'],
  },
  {
    kind: 'ux', category: '現場のUX改善', title: '探す手間から、見直す。',
    description: '数千行のシートから入力先を探していた整備現場へ。普段使うポータルに、絞り込みと入力欄をまとめました。',
    before: '調査結果を記入するたびに、集計列も混在する大きなシートから入力先を探していた。',
    approach: 'ヒアリングをもとにスプレッドシートのデータ構造を整理し、APIでポータルと連携。必要な情報だけを絞り込んで記入できるようにし、入力先を探す手間を大幅に減らしました。',
    tags: ['ヒアリング', 'UI設計', 'データ構造設計'],
  },
  {
    kind: 'web', category: 'Web開発・チーム運営', title: 'つくる。その先の運営まで。',
    description: '28名の制作体制で育てる情報ポータル。PMと開発主担当を兼ね、Web画面・サーバーレス基盤・内製CMSを構築しました。',
    before: '継続的なコンテンツ更新を支える基盤と、制作チームが動ける仕組みが必要だった。',
    approach: '企画・要件定義から設計・開発・運用まで担当。ライター26名、アシスタントエンジニア1名を含む体制で、進行・品質管理とアクセス解析による改善を続けています。',
    tags: ['Astro', 'TypeScript', 'Cloudflare', 'PM'],
  },
];

export const otherProjects = [
  { title: '10年以上続いた分析の前提を、PoCで検証。', label: '仮説検証・分析基盤', description: '「1フライトずつしか扱えない」と考えられていた分析ソフトのファイル入出力に着目。PoCで複数フライトにまたがる分析を検証・実装し、従来ツールに起因する約1日の通知遅延を解消しました。' },
  { title: 'データ準備を、8時間から1時間へ。', label: '処理の高速化', description: '根本的な処理アルゴリズムの改修とマルチスレッド化により、データの抽出・処理を約8倍に高速化。分析を始めるまでの待ち時間を短縮しました。' },
  { title: '目視検査に、AIという選択肢を。', label: 'AI活用・PoC', description: 'PDFとWebページを比較する検査業務に対し、改善提案・要件定義からPythonによる検査補助PoCまで担当。LLMによる誤字脱字チェックの精度向上も提案しました。' },
  { title: 'レガシーコードの移行を、LLMで支援。', label: '生成AI・開発支援', description: '他部署で進むC言語からVB.NETへの移行に対し、LLM活用を提案。要件に合わせたコード変換プロンプトを設計・提供しました。' },
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
