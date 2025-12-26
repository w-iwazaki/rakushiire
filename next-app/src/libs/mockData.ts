import { Supplier } from "../types/supplier";

export const mockSuppliers: Supplier[] = [
    {
        id: "grill_meat_tokyo",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "グリルミート東京",
        category: ["meat"],
        description: "US、オージー、欧州産まで。ステーキやローストビーフに最適な赤身肉のラインナップに自信あり。",
        tags: ["輸入肉", "塊肉", "バル向け"],
        themeColor: "red",
        mainImage: { url: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
        catchCopy: "世界の牧場から、「最高の赤身肉」をあなたの店へ",
        introductionTitle: "グリルミート東京のこだわり",
        policyPoints: [
            {
                fieldId: "policyPoint",
                title: "世界中から厳選した赤身肉",
                description: "USプライムビーフ、オージー・グレインフェッド、アイルランド産グラスフェッドなど、メニューに合わせて最適な産地をご提案します。"
            },
            {
                fieldId: "policyPoint",
                title: "ブロック肉での提供",
                description: "真空パックされたブロック状態でお届けするため、鮮度劣化が少なく、歩留まりの計算もしやすいのが特徴です。"
            },
            {
                fieldId: "policyPoint",
                title: "バル・ビストロ特化",
                description: "カジュアルな価格帯で提供できる、味とコストのバランスが良い部位（カイノミ、サガリ、ランプなど）を豊富に在庫しています。"
            }
        ]
    },
    {
        id: "yamada_meat",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "精肉の匠 ヤマダ",
        category: ["meat"],
        description: "芝浦市場の権利を持つ老舗。A5ランク黒毛和牛から新鮮ホルモンまで、焼肉店・高級店御用達の品質。",
        tags: ["和牛", "ホルモン", "オーダーカット"],
        themeColor: "red",
        mainImage: { url: "https://images.unsplash.com/photo-1558030006-d35974213386?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
        catchCopy: "一頭買いの技術と信頼。本物の和牛を、適正価格で。",
    },
    {
        id: "uomi",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "株式会社 魚見水産",
        category: ["fish"],
        description: "豊洲の目利きが選ぶ「朝獲れ鮮魚」を翌日店舗へ。ミシュラン店から居酒屋まで幅広く対応する確かな技術。",
        tags: ["豊洲直送", "神経締め", "小ロットOK"],
        themeColor: "blue",
        mainImage: { url: "https://images.unsplash.com/photo-1535230919294-f18702b85e06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
        catchCopy: "豊洲の朝を、そのまま店舗へ。",
        policyPoints: [
            {
                fieldId: "policyPoint",
                title: "毎朝の目利きと情報発信",
                description: "その日の水揚げ状況をLINEでリアルタイム配信。「今日の最高の一匹」を逃しません。"
            },
            {
                fieldId: "policyPoint",
                title: "神経締め・血抜き技術",
                description: "魚のポテンシャルを最大限に引き出すため、魚種に合わせた適切な処理を施してから発送します。"
            }
        ]
    },
    {
        id: "ocean_blue",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "オーシャンブルー水産",
        category: ["fish"],
        description: "超低温冷凍技術で、獲れたての鮮度をキープ。世界中の海から厳選したマグロとエビをお届けします。",
        tags: ["冷凍技術", "マグロ特化"],
        themeColor: "blue",
        mainImage: { url: "https://images.unsplash.com/photo-1615141982880-131f4754d0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
    {
        id: "sake_selection",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "SAKE selection",
        category: ["alcohol"],
        description: "全国の蔵元との直接取引で、希少な日本酒を適正価格でご提供します。",
        tags: ["地酒", "クラフトビール", "直取引"],
        themeColor: "yellow",
        mainImage: { url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
    {
        id: "world_liquors",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "ワールドリカーズ",
        category: ["alcohol"],
        description: "ソムリエ厳選のコストパフォーマンスに優れたワインを多数ラインナップ。",
        tags: ["ワイン", "ウイスキー", "ソムリエ厳選"],
        themeColor: "yellow",
        mainImage: { url: "https://images.unsplash.com/photo-1569937756447-380d529a6745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
    {
        id: "promart",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "業務用食品のプロマート",
        category: ["general"],
        description: "厨房の必需品がすべて揃う。大手メーカー品からPB商品まで圧倒的な品揃え。",
        tags: ["調味料", "乾物", "PB商品"],
        themeColor: "purple",
        mainImage: { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
    {
        id: "vegicle",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "株式会社 ベジクル",
        category: ["vegetable"],
        description: "大田市場の機能と全国の契約産地ネットワークを融合。「今、一番美味しい野菜」をご提案します。",
        tags: ["産直野菜", "珍しい野菜", "配送網充実"],
        themeColor: "green",
        mainImage: { url: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
    {
        id: "fresh_farm",
        createdAt: "", updatedAt: "", publishedAt: "", revisedAt: "",
        name: "フレッシュファーム",
        category: ["vegetable"],
        description: "オーガニック野菜とフレッシュハーブの専門店。カフェやイタリアン向けの彩り野菜が得意です。",
        tags: ["有機野菜", "ハーブ"],
        themeColor: "green",
        mainImage: { url: "https://images.unsplash.com/photo-1595855709912-60b11739c549?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: 800, width: 800 },
    },
];
