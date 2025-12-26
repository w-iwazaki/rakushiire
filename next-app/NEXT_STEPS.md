# Next.js移行ガイド & MicroCMS設定手順

## 1. 環境変数の設定
MicroCMSと連携するために、環境変数ファイルを作成してください。

`/Users/vegekul-800/Desktop/rakushiire/next-app/.env.local` というファイルを新規作成し、以下の内容を記述します。

```bash
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

*   **SERVICE_DOMAIN**: MicroCMSの管理画面URL `https://{your-service-domain}.microcms.io` のサブドメイン部分です。
*   **API_KEY**: MicroCMS管理画面の「権限管理」>「APIキー」から取得できる `X-MICROCMS-API-KEY` です。

設定後、開発サーバーを再起動してください。
```bash
cd next-app
npm run dev
```

## 2. MicroCMSのAPIスキーマ設定
今回作成したプログラムは、以下のデータ構造（スキーマ）を想定しています。
MicroCMSの管理画面で `suppliers` というエンドポイントIDでAPIを作成し、以下のフィールドを設定してください。

### API設定
*   **エンドポイントID**: `suppliers`
*   **APIの型**: リスト形式

### フィールド設定 (APIスキーマ)

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
| :--- | :--- | :--- | :--- | :--- |
| `name` | 会社名 | テキストフィールド | 必須 | 例: グリルミート東京 |
| `category` | カテゴリ | 複数選択 | 必須 | 選択肢: `meat` (肉), `fish` (魚), `alcohol` (酒), `general` (総合), `vegetable` (野菜) |
| `mainImage` | メイン画像 | 画像 | 任意 |  |
| `description` | リスト用説明 | テキストエリア | 必須 | 一覧ページに表示される短い説明 |
| `tags` | タグ | 複数選択 | 任意 | 例: 豊洲直送, 神経締め |
| `themeColor` | テーマカラー | セレクト | 任意 | 選択肢: `red`, `blue`, `yellow`, `purple`, `green` |
| `catchCopy` | キャッチコピー | テキストフィールド | 任意 | 詳細ページのヒーローエリア用 |
| `introductionTitle` | こだわりタイトル | テキストフィールド | 任意 | デフォルト: "{会社名}のこだわり" |
| `policyPoints` | こだわりポイント | 繰り返し | 任意 | 以下の繰り返しフィールドを作成 |

**[繰り返しフィールド: policyPoints の中身]**
*   `title` (テキスト): ポイントのタイトル
*   `description` (テキストエリア): ポイントの説明

※ すでにスキーマ設定済みの場合は、`src/types/supplier.ts` の型定義を、実際のIDに合わせて修正してください。

## 3. ディレクトリ構成
```
next-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # トップページ (MicroCMSから一覧取得)
│   │   ├── layout.tsx        # 全体レイアウト
│   │   ├── globals.css       # グローバルスタイル (Tailwind)
│   │   └── suppliers/
│   │       └── [id]/
│   │           └── page.tsx  # 詳細ページ (動的ルーティング)
│   ├── components/
│   │   ├── CategorySection.tsx
│   │   └── SupplierCard.tsx
│   ├── libs/
│   │   ├── api.ts            # データ取得関数 (MicroCMS / Mock)
│   │   ├── microcms.ts       # SDK初期化
│   │   └── mockData.ts       # 開発用モックデータ
│   └── types/
│       └── supplier.ts       # 型定義
```
