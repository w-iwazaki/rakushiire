import { getSupplierDetail, getSupplierList } from "@/libs/api";
import Link from "next/link";
import { notFound } from "next/navigation";

// MicroCMSの更新を即座に反映するため、キャッシュを無効化
export const revalidate = 0;
// 静的生成のためのパス生成（generateStaticParams）
export async function generateStaticParams() {
    const { contents: suppliers } = await getSupplierList();
    return suppliers.map((supplier) => ({
        id: supplier.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>;
};

// テーマカラーの設定マップ
const themeConfig: { [key: string]: { bg: string; text: string; lightBg: string; border: string; accent: string } } = {
    red: { bg: "bg-red-600", text: "text-red-700", lightBg: "bg-red-50", border: "border-red-400", accent: "text-red-300" },
    blue: { bg: "bg-blue-600", text: "text-blue-700", lightBg: "bg-blue-50", border: "border-blue-400", accent: "text-blue-300" },
    yellow: { bg: "bg-yellow-600", text: "text-yellow-700", lightBg: "bg-yellow-50", border: "border-yellow-400", accent: "text-amber-300" },
    purple: { bg: "bg-purple-600", text: "text-purple-700", lightBg: "bg-purple-50", border: "border-purple-400", accent: "text-purple-300" },
    green: { bg: "bg-green-600", text: "text-green-700", lightBg: "bg-green-50", border: "border-green-400", accent: "text-green-300" },
};

export default async function DetailPage({ params }: Props) {
    try {
        const { id } = await params;
        const supplier = await getSupplierDetail(id);

        if (!supplier) {
            notFound();
        }

        const theme = themeConfig[supplier.themeColor || "red"] || themeConfig.red;

        // メイン画像
        const mainImageUrl = supplier.mainImage?.url;

        return (
            <div className="bg-slate-50 min-h-screen pb-20">
                {/* パンくずリスト */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-3 text-xs text-gray-500">
                        <Link href="/" className="hover:text-gray-800 transition">TOP</Link> &gt; <span className="font-medium text-gray-800">{supplier.name}</span>
                    </div>
                </div>

                {/* メイン画像エリア (画像のみ) */}
                <section className="bg-white">
                    <div className="container mx-auto px-0 md:px-4 md:py-6 max-w-5xl">
                        <div className="relative aspect-video md:rounded-2xl overflow-hidden shadow-sm">
                            {mainImageUrl ? (
                                <img
                                    src={mainImageUrl}
                                    alt={supplier.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <span className="text-xl font-bold">no image</span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 基本情報エリア (画像の下) */}
                <section className="bg-white border-b">
                    <div className="container mx-auto px-4 py-10 max-w-4xl text-center">
                        <div className={`mb-4 inline-block ${theme.lightBg} ${theme.text} px-4 py-1 rounded-full text-sm font-bold border ${theme.border}`}>
                            {supplier.tags?.[0] || "厳選仕入れ先"}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                            {supplier.name}
                        </h1>

                        <div className="w-16 h-1 bg-gray-200 mx-auto mb-8 rounded-full"></div>

                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            {supplier.description}
                        </p>
                    </div>
                </section>

                <main className="container mx-auto px-4 max-w-6xl mt-12 space-y-16">
                    <section>
                        <div className="grid md:grid-cols-3 gap-8">
                            {supplier.policyPoints && supplier.policyPoints.length > 0 ? (
                                supplier.policyPoints.map((point, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                                        <div className={`text-3xl ${theme.text} mb-4`}>
                                            <i className={`fa-solid ${index === 0 ? 'fa-gem' : index === 1 ? 'fa-medal' : 'fa-certificate'}`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">{point.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                                    </div>
                                ))
                            ) : (
                                [1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                        <div className={`text-3xl ${theme.text} mb-4`}><i className="fa-solid fa-star"></i></div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">こだわりポイント {i}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            ここに{supplier.name}のこだわりポイントが入ります。
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>

                    <section>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mt-4 text-gray-900">おすすめ商品</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {supplier.recommendedItems && supplier.recommendedItems.length > 0 ? (
                                supplier.recommendedItems.map((item, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition duration-300">
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            {item.image?.url ? (
                                                <img
                                                    src={item.image.url}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-slate-50 uppercase tracking-tighter text-sm">
                                                    no image
                                                </div>
                                            )}
                                            <div className={`absolute top-4 left-4 ${theme.bg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                                                商品 {index + 1}
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                                            <div className="bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100 flex-1">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.spec || "商品の特徴がこちらに入ります。"}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xs font-bold text-gray-400">参考価格</span>
                                                <span className={`text-xl font-black ${theme.text}`}>
                                                    {item.priceInfo || "お問い合わせ"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-10 text-gray-400 italic">
                                    おすすめ商品は準備中です。
                                </div>
                            )}
                        </div>
                    </section>
                </main>

                {/* CTAエリア - ボタンのみのコンパクトなデザイン */}
                <section className={`py-12 ${theme.bg} text-white mt-12 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                    <div className="container mx-auto px-4 max-w-sm text-center relative z-10">
                        <div className="flex justify-center">
                            <a
                                href={supplier.url || "#"}
                                target={supplier.url ? "_blank" : undefined}
                                rel={supplier.url ? "noopener noreferrer" : undefined}
                                className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-gray-50 transition transform hover:-translate-y-1 w-full flex items-center justify-center"
                            >
                                <span>商品一覧・注文ページへ <i className="fa-solid fa-arrow-right ml-3 opacity-30 group-hover:opacity-100 transition"></i></span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        );
    } catch (error: any) {
        console.error("DetailPage rendering error:", error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
                    <div className="text-red-500 text-5xl mb-4">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">ページを表示できません</h1>
                    <p className="text-gray-600 mb-6">
                        申し訳ありませんが、このページの読み込み中にエラーが発生しました。
                        しばらくしてから再度お試しいただくか、管理者にお問い合わせください。
                    </p>
                    <div className="bg-red-50 p-4 rounded-xl text-left mb-6 overflow-auto max-h-40">
                        <p className="text-xs font-mono text-red-800 break-all">
                            {error?.message || "Unknown error"}
                        </p>
                    </div>
                    <Link href="/" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                        一覧に戻る
                    </Link>
                </div>
            </div>
        );
    }
}
