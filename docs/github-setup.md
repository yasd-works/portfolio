# yasd-works のGitHub初期設定

2026-09-15更新。公式資料に基づく設定手順です。アカウント内の設定画面にはアクセスしていないため、アカウント設定の項目は推奨設定です。サイトのローカルリポジトリは `F:\portfolio\site`、接続先は `https://github.com/yasd-works/portfolio.git` です。

## 1. メールアドレスの確認とアカウント保護

- [Emails](https://github.com/settings/emails) で登録メールの認証を完了します。
- `Keep my email addresses private` を有効にし、表示されるGitHub発行の `noreply` アドレスを控えます。番号部分を推測せず、画面の値をそのまま使ってください。
- 個人アドレスの公開を避けたい場合は `Block command line pushes that expose my email` も有効にします。
- [Password and authentication](https://github.com/settings/security) で認証アプリによる2FAを設定し、回復コードをパスワードマネージャー等へ保管します。続けてWindows Hello等のパスキーを追加すると、普段のログインが簡単になります。

公式: [コミットメールの設定](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)、[2FAの設定](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)

## 2. 案件獲得につながるプロフィール

[Public profile](https://github.com/settings/profile) に以下を設定します。

| 項目 | 設定案 |
| --- | --- |
| Name | Yasuda.y |
| Bio | DX Engineer / Data Scientist. Python・AIによる業務改善から、Webサービスの設計・開発・運用まで。 |
| Profile picture | ポートフォリオと同じ画像 |
| URL | サイト公開後にポートフォリオURL |
| Public email | 仕事用として公開してよい連絡先を決めてから設定 |

自己紹介用に公開リポジトリ `yasd-works/yasd-works` を作り、ルートに `README.md` を置くとプロフィールに表示されます。公開用の本文は `F:\portfolio\yasd-works\README.md`、掲載手順は同じフォルダの `github-profile.md` に用意しました。

サイトのコード用リポジトリ `yasd-works/portfolio` と、プロフィール用の `yasd-works/yasd-works` は別用途です。公開できる成果物ができたら、プロフィール上のPinnedへ追加します。

公式: [プロフィールREADME](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)

## 3. このPCと接続する

WindowsではHTTPSとGit Credential Manager、またはGitHub CLIによるブラウザ認証が使えます。確認時点のPCにはNode.js 24.13.0とGit 2.40.1があり、GitHub CLI (`gh`) はPATH上で見つかりませんでした。

Git for Windowsに同梱されるGit Credential Managerを使う場合は、最初の認証が必要なGit操作で開くブラウザにて `yasd-works` でログインします。別アカウントの既存設定は変更せず、このリポジトリのアカウントを確認してください。

GitHub CLIを追加した場合は次を実行します。

```powershell
gh auth login
gh auth status
```

`GitHub.com` → `HTTPS` → ブラウザ認証を選び、ログイン先が `yasd-works` であることを確認します。アカウントのパスワードをGitのパスワードとして入力する方法は使いません。

公式: [HTTPSの認証情報管理](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)

## 4. このプロジェクトのコミット名とメール

他の仕事や個人リポジトリに影響しないよう、まずこのリポジトリだけに設定します。メールはGitHubの設定画面に表示された値に置き換えてから実行してください。

```powershell
cd F:\portfolio\site
git config user.name "Yasuda.y"
git config user.email "GitHubのEmails画面に表示されたnoreplyアドレス"
git config --get user.name
git config --get user.email
```

GitHubアカウントの認証と、このコミット作者情報は別の設定です。設定したメールがGitHubアカウントに紐づいていることを確認します。

### Windowsで所有者エラーが出る場合

`detected dubious ownership` は、リポジトリのフォルダ所有者とGitを実行するWindowsユーザーが異なる場合に表示されます。自分が管理するこの作業フォルダを信頼する設定は、次のように対象パスを限定します。

```powershell
git config --global --add safe.directory F:/portfolio/site
cd F:\portfolio\site
git status
```

`fatal: not in a git directory` も、今回のように所有者チェックでリポジトリが認識されず表示されることがあります。設定後に `git status` が成功すれば、作者情報の設定やコミットを進められます。

## 5. ソースコード用リポジトリを作成して接続

初稿を確認してから、GitHubで所有者 `yasd-works`、名前 `portfolio` の空リポジトリを作ります。最初はPrivateで構いません。ローカルにREADMEがあるため、GitHub側でREADME・.gitignore・ライセンスを自動作成しない形が簡単です。

以下はリポジトリ作成・認証・作者設定を終えた後の実行用です。`git remote -v` に正しい `origin` がすでに表示される場合、`git remote add origin` の行は省略してください。

```powershell
cd F:\portfolio\site
git status --short
git add .
git diff --cached --stat
git diff --cached
git commit -m "Build initial Astro portfolio"
git remote add origin https://github.com/yasd-works/portfolio.git
git push -u origin main
```

`git add` は必ず `site` 内で実行します。職務経歴書のExcelは親フォルダに保存し、Webサイトに同梱しません。`.env`、`node_modules`、`dist` も除外済みです。

コマンドはコードブロック内の文字だけをコピーします。`PS F:\portfolio\site>` や `>>`、行末の `\` は含めません。メールの `@` の前に `\` は不要です。リモートURLにはMarkdownの `[表示名](URL)` 形式を使わず、`https://github.com/yasd-works/portfolio.git` をそのまま指定してください。

## 6. 接続後に整える項目

- About: サイトの説明と公開URL。Topics例: `astro`, `typescript`, `portfolio`, `python`, `data-science`。
- Dependabot alertsを有効にし、依存ライブラリの更新を継続的に確認。
- CIで `npm ci` → `npm run validate` を実行し、pushやPRでビルドを確認。
- デプロイ先と独自ドメインを決め、リポジトリと連携。
- 公開できる小規模なPython自動化ツールや、公開データを使った分析事例を追加。

初回コミット時点で、画像や自己紹介文も含めて外部公開できる内容に整えると、その後の運用が容易になります。
