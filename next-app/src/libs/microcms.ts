// MicroCMSクライアントの初期化
// 環境変数がない場合はクライアントを作成しない（nullを許容する設計に変更、アクセス時にチェック）
import { createClient } from "microcms-js-sdk";

export const client =
  process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY
    ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY,
    })
    : null;

