import { Supplier } from "../types/supplier";
import { MicroCMSSupplierRaw } from "../types/microcmsRaw";

// カテゴリからテーマカラーを決定するマップ
const categoryColorMap: { [key: string]: string } = {
    meat: "red",
    fish: "blue",
    alcohol: "yellow",
    general: "purple",
    vegetable: "green",
};

// どんな形式で画像が届いてもMicroCMSImage型に整えるヘルパー
const ensureImage = (img: any): any => {
    if (!img) return undefined;
    if (typeof img === 'string') return { url: img, width: 800, height: 600 };
    if (Array.isArray(img) && img.length > 0) return ensureImage(img[0]);
    if (img.url) return img;
    return undefined;
};

export const mapMicroCMSToSupplier = (raw: MicroCMSSupplierRaw): Supplier => {
    // カテゴリ取得（文字列または配列に対応）
    let categoryRaw = "meat";
    if (Array.isArray(raw.category) && raw.category.length > 0) {
        categoryRaw = raw.category[0];
    } else if (typeof raw.category === "string") {
        categoryRaw = raw.category;
    }
    const themeColor = categoryColorMap[categoryRaw] || "red";

    // こだわりポイントの変換
    const policyPoints = [];
    if (raw.feature_1_title || raw.feature_1_desc) {
        policyPoints.push({
            fieldId: "policyPoint" as const,
            title: raw.feature_1_title || "",
            description: raw.feature_1_desc || "",
        });
    }
    if (raw.feature_2_title || raw.feature_2_desc) {
        policyPoints.push({
            fieldId: "policyPoint" as const,
            title: raw.feature_2_title || "",
            description: raw.feature_2_desc || "",
        });
    }
    if (raw.feature_3_title || raw.feature_3_desc) {
        policyPoints.push({
            fieldId: "policyPoint" as const,
            title: raw.feature_3_title || "",
            description: raw.feature_3_desc || "",
        });
    }

    // おすすめ商品の変換
    const recommendedItems = [];
    if (raw.product_1_name) {
        recommendedItems.push({
            fieldId: "recommendedItem" as const,
            name: raw.product_1_name,
            image: ensureImage(raw.product_1_image),
            spec: raw.product_1_desc,
            priceInfo: raw.product_1_price,
        });
    }
    if (raw.product_2_name) {
        recommendedItems.push({
            fieldId: "recommendedItem" as const,
            name: raw.product_2_name,
            image: ensureImage((raw as any).product_2_image), // キーの有無に関わらずチェック
            spec: raw.product_2_desc,
            priceInfo: raw.product_2_price,
        });
    }
    if (raw.product_3_name) {
        recommendedItems.push({
            fieldId: "recommendedItem" as const,
            name: raw.product_3_name,
            image: ensureImage((raw as any).product_3_image),
            spec: raw.product_3_desc,
            priceInfo: raw.product_3_price,
        });
    }

    return {
        id: raw.id,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        publishedAt: raw.publishedAt,
        revisedAt: raw.revisedAt,

        name: raw.name || "名称未設定",
        category: Array.isArray(raw.category) ? raw.category : raw.category ? [raw.category] : [],
        mainImage: ensureImage(raw.main_imgage || raw.main_image || (raw as any).image),
        description: raw.description || "",
        url: raw.URL || "",
        tags: [],
        themeColor: themeColor,

        catchCopy: raw.catch_copy || (raw as any).catchcopy || (raw as any).catch_phrase,
        introductionTitle: `${raw.name || ""}のこだわり`,
        policyPoints: policyPoints,
        recommendedItems: recommendedItems,
    } as any;
};
