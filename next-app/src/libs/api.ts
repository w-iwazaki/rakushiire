import { client } from "./microcms";
import type { Supplier, SupplierListResponse } from "../types/supplier";
import { mockSuppliers } from "./mockData";
import { MicroCMSListResponseRaw, MicroCMSSupplierRaw } from "../types/microcmsRaw";
import { mapMicroCMSToSupplier } from "./mapper";
import { unstable_noStore as noStore } from 'next/cache';

// 仕入れ先一覧を取得
export const getSupplierList = async (): Promise<SupplierListResponse> => {
    noStore();
    // クライアントがない場合はモックデータを返す
    if (!client) {
        console.warn("MicroCMS Client is not initialized. Using mock data.");
        return {
            totalCount: mockSuppliers.length,
            offset: 0,
            limit: 100,
            contents: mockSuppliers,
        };
    }

    try {
        // Raw型で取得
        const data = await client.get<MicroCMSListResponseRaw>({
            endpoint: "shiire",
            queries: { limit: 100 },
        });
        console.log("SUCCESS: MicroCMS Sample Data (1st content):", JSON.stringify(data.contents[0], null, 2));

        // Mapperでアプリ用型に変換
        return {
            ...data,
            contents: data.contents.map(mapMicroCMSToSupplier),
        };
    } catch (error) {
        console.error("Failed to fetch data from MicroCMS:", error);
        // エラー時もとりあえずモックデータを返しておく（フォールバック）
        return {
            totalCount: mockSuppliers.length,
            offset: 0,
            limit: 100,
            contents: mockSuppliers,
        };
    }
};

// 特定の仕入れ先詳細を取得
export const getSupplierDetail = async (contentId: string): Promise<Supplier | null> => {
    noStore();
    // クライアントがない場合はモックデータを返す
    if (!client) {
        const mock = mockSuppliers.find((s) => s.id === contentId);
        return mock || null;
    }

    try {
        // Raw型で取得
        const data = await client.get<MicroCMSSupplierRaw>({
            endpoint: "shiire",
            contentId,
        });
        // Mapperで変換
        return mapMicroCMSToSupplier(data);
    } catch (error) {
        console.error("Failed to fetch detail from MicroCMS:", error);
        const mock = mockSuppliers.find((s) => s.id === contentId);
        return mock || null;
    }
};
