# yasd.works portfolio

Yasuda.yのDXエンジニア・データサイエンティスト向けポートフォリオ。AstroとTailwind CSSで構築した日本語の静的サイトです。

## 開発

Node.js 22.12.0以上の対応する偶数メジャー版が必要です。この環境ではNode.js 24.13.0を使用しています。

```powershell
cd F:\portfolio\site
npm ci
npm run dev
```

初回セットアップ済みのPCでは `npm run dev` だけで起動できます。標準URLは http://127.0.0.1:4321/portfolio/ です。使用中の場合は別のポートになるため、起動時に表示されるURLを開いてください。

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
public/                  favicon、公開用の画像
src/
  components/            Header、Hero、Projects、Skills、Experience、Footer
  data/portfolio.ts      プロフィール・実績・スキル・経歴の編集元
  layouts/Layout.astro   共通HTML、メタ情報
  pages/index.astro      トップページ
  styles/global.css      Tailwind CSS、色・フォントの定義
docs/                    GitHub初期設定、プロフィールREADME原稿
```

## 内容を編集する

- 名前、実績、スキル、経歴は `src/data/portfolio.ts` で編集できます。冒頭のコピーは `Hero.astro`、自己紹介の文章は `Experience.astro` にあります。
- 写真を追加する場合は `public/profile-icon.png` に配置し、再ビルドしてください。「私について」に表示されます。未設定時は写真を表示しません。
- 色とフォントは `src/styles/global.css` の `@theme` で変更できます。
- セクションへのリンク、スマホ用メニュー、Escapeキーでのメニュー閉じる操作を実装しています。
- GitHubリンクは `https://github.com/yasd-works` です。問い合わせ先は未指定のため、公開用メールアドレスやフォームの決定後に導線を追加します。

## デザイン

白とブルーを基調に、「その『仕方ない』を、技術で変える。」というメッセージを中心に構成しています。冒頭ではデータ分析とシステム実装の2つの専門性を示し、実績は大きさの異なるカードで掲載。詳細は標準HTMLの開閉要素で読めます。

故障予測のF1スコアは直近の1モデル、PV・MAUは職務経歴書更新時点の直近30日間の概数です。数値を更新するときは対象と集計時点も合わせて修正してください。

## 技術上の選択

- Astroの静的出力を使用し、サーバー処理やデータベースは必要ありません。
- Tailwind CSS 4は公式のViteプラグイン `@tailwindcss/vite` で統合しています。
- 依存バージョンは `package.json` と `package-lock.json` に固定しています。
- TypeScript 7は採用した `@astrojs/check` の対応範囲外のため、対応する6系を使用しています。
- CSSのレスポンシブ対応、キーボードフォーカス、本文スキップリンク、動きを減らす設定に対応しています。

## GitHub Pagesへの公開

公開URL: [https://yasd-works.github.io/portfolio/](https://yasd-works.github.io/portfolio/)

`main`へのpushをきっかけに、`.github/workflows/deploy.yml`が依存関係のインストール、`npm run validate`、GitHub Pagesへの公開を順に実行します。型チェックやビルドに失敗した場合は公開しません。GitHubのActionsタブで進行状況とエラーを確認でき、手動実行も可能です。

GitHub側の公開元は **Settings → Pages → Build and deployment → Source → GitHub Actions** を使用します。リポジトリ直下にAstroプロジェクトがあるため、ビルド対象のサブフォルダ指定は不要です。

`astro.config.mjs`の`site`と`base`を公開URLに合わせ、画像やfaviconには`import.meta.env.BASE_URL`を使用しています。ローカルの開発・プレビューでも`/portfolio/`を開いてください。

## 今後の仕上げ

1. プロフィール画像と問い合わせ先を設定。
2. 実績の公開範囲、個別案件の時期、指標の集計条件を確認。
3. OG画像とsitemapを追加。公開URL、canonical、サブディレクトリのパスは設定済みです。
4. `npm run validate` を実行してから公開。

## 初期構築時の検証

2026-09-14に `npm run validate` が成功し、型チェックはエラー・警告ともに0件でした。静的ビルドをChromeで開き、1440 / 768 / 390 / 320px幅で横のはみ出しがないこと、ページ内リンク、スマホのメニュー操作、画像取得失敗時の代替表示を確認しています。

2026-09-15の明るいテーマへの刷新では、`npm run validate`、1440 / 768 / 390 / 320px幅の表示、ページ内リンク、実績詳細のクリック・キーボード開閉、モバイルメニューのリンク選択・Escapeでの閉鎖を確認しました。

原本の職務経歴書と非公開の検討メモはプロジェクトの外に保存します。`public/` に置いたファイルはそのまま配信されます。

GitHub設定は [初期設定ガイド](docs/github-setup.md)、自己紹介READMEの保存場所と掲載方法は [プロフィールREADMEの案内](docs/github-profile.md) を参照してください。

公式資料: [Astro導入](https://docs.astro.build/en/install-and-setup/)、[Tailwind CSSとAstro](https://tailwindcss.com/docs/installation/framework-guides/astro)
