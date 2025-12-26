export type MicroCMSImage = {
    url: string;
    height: number;
    width: number;
};

export type Supplier = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
    nameEn?: string; // 英語表記（ロゴ用など）
    category: string[]; // カテゴリ（複数選択可を想定）
    mainImage?: MicroCMSImage;
    description: string; // 一覧・ヘッダー用の短い説明
    url?: string; // 外部注文用URL
    tags?: string[]; // 特徴タグ（"豊洲直送", "神経締め" など）
    themeColor?: string; // "red", "blue", "yellow", "purple", "green" など

    // 詳細ページ用コンテンツ
    catchCopy?: string; // ヒーローエリアのキャッチコピー
    introductionTitle?: string; // "こだわり"セクションのタイトル
    policyPoints?: { // こだわりポイント（繰り返しフィールドを想定）
        fieldId: "policyPoint";
        title: string;
        iconClass?: string; // FontAwesomeクラス名など
        description: string;
    }[];
    recommendedItems?: { // おすすめ商品（繰り返しフィールドを想定）
        fieldId: "recommendedItem";
        name: string;
        image?: MicroCMSImage;
        priceInfo?: string; // "会員価格を表示" など
        badge?: string; // "人気No.1", "限定品" など
        suggestion?: string; // "シェフへの提案" テキスト
        origin?: string; // 産地
        spec?: string; // 規格
    }[];

    // スペック表
    deliveryArea?: string;
    leadTime?: string;
    minLot?: string;
    shippingCost?: string;

    // CTA
    ctaMessageTitle?: string;
    ctaMessageBody?: string;
};

export type SupplierListResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Supplier[];
};
