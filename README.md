# yasd.works portfolio

Yasuda.yのDXエンジニア・データサイエンティスト向けポートフォリオ。AstroとTailwind CSSで構築した日本語の静的サイトです。

## 開発

Node.js 22.12.0以上の対応する偶数メジャー版が必要です。この環境ではNode.js 24.13.0を使用しています。

```powershell
cd F:\portfolio\site
npm ci
npm run dev
```

初回セットアップ済みのPCでは `npm run dev` だけで起動できます。標準URLは http://127.0.0.1:4321 です。使用中の場合は別のポートになるため、起動時に表示されるURLを開いてください。

```powershell
npm run check      # Astro / TypeScriptの型チェック
npm run build      # dist/ に静的サイトを生成
npm run validate   # 型チェックとビルド
npm run preview    # ビルド済みサイトを確認
```

PowerShellの実行ポリシーで `npm.ps1` が止まる場合は、同じコマンドを `npm.cmd run dev` のように実行してください。

### 「Another astro dev server is already running」と表示された場合

このプロジェクトの開発サーバーが、別のターミナルやバックグラウンドですでに起動しています。表示されたURLをブラウザで開くと、そのサーバーを利用できます。標準ポートが使用中の場合は4323など別のポートになるため、実際に表示されたURLを使ってください。

```powershell
npm run dev:status   # 稼働状態・URL・PIDを確認
npm run dev:stop     # このプロジェクトの開発サーバーを停止
npm run dev         # 手元のターミナルで起動
```

起動済みサーバーを置き換えて再起動したい場合は `npm run dev:restart` を使えます。このコマンドは既存の開発サーバーを停止し、コンテンツキャッシュを再構築して起動します。

通常のターミナルで手前に起動しているサーバーは `Ctrl+C` で終了できます。バックグラウンドのサーバーは、確認が終わったら `npm run dev:stop` で停止してください。

## 構成

```text
public/                  favicon、仮プロフィール画像
src/
  components/            Header、Hero、Projects、Skills、Experience、Footer
  data/portfolio.ts      プロフィール・実績・スキル・経歴の編集元
  layouts/Layout.astro   共通HTML、メタ情報
  pages/index.astro      トップページ
  styles/global.css      Tailwind CSS、色・フォントの定義
docs/                    GitHub初期設定、プロフィールREADME原稿
```

## 内容を編集する

- 名前、紹介文、実績、スキル、経歴は `src/data/portfolio.ts` に集約しています。
- 写真は `public/profile-icon.png` に配置し、開発サーバーを再起動するか再ビルドしてください。初期状態は指定プロンプトに従って外部の仮画像URLを使用し、読み込めない場合は同梱のSVGを表示します。
- 色とフォントは `src/styles/global.css` の `@theme` で変更できます。
- セクションへのリンク、スマホ用メニュー、Escapeキーでのメニュー閉じる操作を実装しています。
- GitHubリンクは `https://github.com/yasd-works` です。問い合わせ先は未指定のため、公開用メールアドレスやフォームの決定後に導線を追加します。

## 技術上の選択

- Astroの静的出力を使用し、サーバー処理やデータベースは必要ありません。
- Tailwind CSS 4は公式のViteプラグイン `@tailwindcss/vite` で統合しています。
- 依存バージョンは `package.json` と `package-lock.json` に固定しています。
- TypeScript 7は採用した `@astrojs/check` の対応範囲外のため、対応する6系を使用しています。
- CSSのレスポンシブ対応、キーボードフォーカス、本文スキップリンク、動きを減らす設定に対応しています。

## 公開前の仕上げ

1. プロフィール画像と問い合わせ先を設定。
2. 実績の公開範囲、個別案件の時期、指標の集計条件を確認。
3. 公開URLが決まったら `astro.config.mjs` の `site`、canonical、OG画像、sitemapを追加。サブディレクトリで公開する場合は `base` と画像・内部リンクのパスも調整。
4. `npm run validate` を実行してから公開。

## 初期構築時の検証

2026-09-14に `npm run validate` が成功し、型チェックはエラー・警告ともに0件でした。静的ビルドをChromeで開き、1440 / 768 / 390 / 320px幅で横のはみ出しがないこと、ページ内リンク、スマホのメニュー操作、画像取得失敗時の代替表示を確認しています。

原本の職務経歴書と非公開の検討メモはプロジェクトの外に保存します。`public/` に置いたファイルはそのまま配信されます。

GitHub設定は [初期設定ガイド](docs/github-setup.md)、自己紹介READMEの保存場所と掲載方法は [プロフィールREADMEの案内](docs/github-profile.md) を参照してください。

公式資料: [Astro導入](https://docs.astro.build/en/install-and-setup/)、[Tailwind CSSとAstro](https://tailwindcss.com/docs/installation/framework-guides/astro)
