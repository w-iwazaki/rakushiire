import { MicroCMSImage } from "./supplier";

// MicroCMSから返ってくる生のデータ型（スネークケース、フラット構造）
export type MicroCMSSupplierRaw = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;

    // 基本情報
    name?: string;
    category?: string[] | string; // ["meat"] or "meat"
    description?: string;
    URL?: string; // 新設フィールド

    // 画像（タイポの可能性あるが画像の通り定義、無ければundefined）
    main_imgage?: MicroCMSImage;
    // 念のため正しいスペルも許容
    main_image?: MicroCMSImage;

    // 詳細ページ用
    catch_copy?: string;

    // こだわりポイント（フラット構造）
    feature_1_title?: string;
    feature_1_desc?: string;
    feature_2_title?: string;
    feature_2_desc?: string;
    feature_3_title?: string;
    feature_3_desc?: string;

    // おすすめ商品（フラット構造）
    product_1_name?: string;
    product_1_image?: MicroCMSImage;
    product_1_desc?: string;
    product_1_price?: string;

    product_2_name?: string;
    product_2_image?: MicroCMSImage;
    product_2_desc?: string;
    product_2_price?: string;

    product_3_name?: string;
    product_3_image?: MicroCMSImage;
    product_3_desc?: string;
    product_3_price?: string;
};

export type MicroCMSListResponseRaw = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: MicroCMSSupplierRaw[];
};
