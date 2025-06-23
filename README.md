# 大賀万博 (Oga Expo) - My Project Showcase

[![Deploy on portfolio.aiichiro.jp](https://img.shields.io/badge/Live%20Demo-portfolio.aiichiro.jp-blue?style=for-the-badge&logo=vercel)](https://portfolio.aiichiro.jp/)

私の制作したプロジェクトを一同に集めた、"万博"のようなショーケースサイトです。
各プロジェクトの概要を素早く把握し、GitHubリポジトリやデモサイトへ簡単にアクセスできるハブとして機能します。

**👇 今すぐサイトを体験！**
### [https://portfolio.aiichiro.jp/](https://portfolio.aiichiro.jp/)

![image](https://github.com/user-attachments/assets/06222f84-6415-43ad-8a35-7d8eb89bc222)

---

## 🌟 プロジェクトの特徴 (Features)

このサイトは、私のポートフォリオをよりインタラクティブに、そして分かりやすく見せるための工夫を凝らしています。

-   **🗂️ プロジェクトの一覧とフィルタリング**
    -   制作したリポジトリ（コンテンツ）をカード形式で一覧表示。
    -   `React` `TypeScript` などのトピックタグで、関心のある技術スタックのプロジェクトを瞬時に絞り込めます。

-   **📄 動的なREADME表示**
    -   コンテンツ詳細ページでは、GitHubリポジトリの`README.md`を直接読み込んで表示。常に最新の情報を確認できます。

-   **🔗 GitHubライクなURL設計**
    -   `portfolio.aiichiro.jp/オーナー名/リポジトリ名` という、GitHubと同じ直感的なURL構造を採用。どのプロジェクトを見ているかが一目瞭然です。

-   **💖 ログイン不要のリアクション機能**
    -   アカウント作成やログインは一切不要。誰でも気軽に絵文字でリアクション（応援）を送ることができます。

-   **🚀 外部リンクへのクイックアクセス**
    -   各詳細ページから、該当するGitHubリポジトリとデプロイ先のデモサイトへワンクリックで遷移できます。

## 💡 こだわりのポイント： 設計思想

### ログイン不要のリアクション機能

このアプリのリアクション機能は、**あえてログインを不要**にしています。
これは、訪問者が感じた「これ面白い！」「すごい！」というポジティブな感情を、その場で手間なく伝えられる体験を最優先したかったためです。

複数回のクリックといった厳密な不正操作防止策は実装せず、**「手軽さ」と「気軽なフィードバック」を重視する**という設計思想に基づいています。

### GitHubと連携したURL設計

URLを `portfolio.aiichiro.jp/owner/repo_name` というパス構造にすることで、以下のメリットを生み出しています。

1.  **直感性**: GitHubユーザーにとって馴染み深く、URLだけでどのプロジェクトか推測できます。
2.  **拡張性**: 将来的に他のGitHubユーザーのプロジェクトも表示できるような拡張の可能性も秘めています。
    （例: Next.jsのDynamic Routes `[owner]/[repo]` を利用して実装）

## 🛠️ 使用技術 (Tech Stack)

このプロジェクトは、以下の技術を主に使用して構築されています。

-   **Frontend**: (Next.js, TypeScript, React)
-   **Styling**: (Tailwind CSS, Shadcn/ui)
-   **State Management**: (Zustand)
-   **Data Source**: GitHub API
-   **Database**: (Supabase)  *リアクション機能用*
-   **Deployment**: Vercel


## 🚀 ローカルでの実行方法 (Getting Started)

このプロジェクトをご自身の環境で動かす場合は、以下の手順に従ってください。

1.  **リポジトリをクローン**
    ```sh
    git clone https://github.com/your-username/your-repository.git
    ```
2.  **ディレクトリに移動**
    ```sh
    cd your-repository
    ```
3.  **依存関係をインストール**
    ```sh
    npm install
    # または yarn install
    ```
4.  **環境変数を設定**
    `.env.local.example` を参考に `.env.local` ファイルを作成し、必要なAPIキーなどを設定してください。
    
5.  **開発サーバーを起動**
    ```sh
    npm run dev
    # または yarn dev
    ```
    ブラウザで `http://localhost:3000` を開いてください。
