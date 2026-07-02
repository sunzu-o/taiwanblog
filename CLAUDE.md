# Taiwan Blog - 沖縄情報ブログ（台湾人観光客向け）

## プロジェクト概要

台湾人観光客に向けて沖縄の観光・グルメ・文化情報を繁体字中国語で自動執筆・投稿するブログサイト。
Claude APIを使って記事を生成し、静的サイトとして公開する。

## ターゲット読者

- 台湾から沖縄を訪れる観光客
- 言語：繁体字中国語（Traditional Chinese）
- 沖縄旅行の計画・現地情報を探している人

## 記事の方針

- 繁体字中国語で執筆（簡体字不可）
- 台湾人が馴染みやすい比較表現・文化的文脈を使う（例：「和高雄類似的海岸線...」）
- 正確な情報のみ掲載（営業時間・価格は変動するため要注意）
- SEOを意識した自然なキーワード配置

## 記事カテゴリ

- 観光スポット（景點介紹）
- グルメ・食事（美食推薦）
- 交通・アクセス（交通攻略）
- ショッピング（購物指南）
- 宿泊（住宿推薦）
- 季節・イベント（季節活動）
- 実用情報（實用資訊）：マナー、チップ文化、免税など

## 技術スタック

- **フレームワーク**：Next.js 15（App Router）
- **言語**：TypeScript
- **スタイリング**：Tailwind CSS v4
- **コンテンツ管理**：markdown ファイル（content/posts/）
- **AI記事生成**：Anthropic Claude API（claude-sonnet-4-6）
- **デプロイ**：Vercel
- **パッケージマネージャ**：npm

## ディレクトリ構成

```
taiwanblog/
├── app/               # Next.js App Router
│   ├── page.tsx       # トップページ
│   ├── [slug]/        # 記事詳細ページ
│   └── layout.tsx     # 共通レイアウト
├── content/           # markdown記事ファイル
│   └── posts/
├── scripts/           # 記事自動生成スクリプト
│   └── generate-post.ts
├── components/        # UIコンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
├── lib/               # ユーティリティ・API呼び出し
│   └── posts.ts
└── public/            # 静的ファイル
```

## 記事自動生成フロー

1. `scripts/generate-post.ts` を実行
2. Claude API にトピックを渡して繁体字中国語で記事生成
3. `content/posts/` に markdown ファイルとして保存
4. Vercel への自動デプロイ（Git push）

## 開発コマンド

```bash
npm run dev          # 開発サーバー起動（http://localhost:3000）
npm run build        # 本番ビルド
npm run generate     # 記事自動生成
```

## 注意事項

- Claude API キーは `.env.local` に保管（`.gitignore` 済み）
- 生成した記事は必ず内容を確認してから公開する
- 観光情報は定期的に最新情報へ更新する
