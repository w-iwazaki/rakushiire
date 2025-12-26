import { getSupplierList } from "@/libs/api";
import Link from "next/link";
import CategorySection from "@/components/CategorySection";

// MicroCMSの更新を即座に反映するため、キャッシュを無効化
export const revalidate = 0;

export default async function Home() {
  console.log("DEBUG: HOME PAGE RENDERING at", new Date().toISOString());
  const { contents: suppliers } = await getSupplierList();

  // カテゴリごとにデータをフィルタリング
  const meatSuppliers = suppliers.filter((s) => s.category.includes("meat"));
  const fishSuppliers = suppliers.filter((s) => s.category.includes("fish"));
  const alcoholSuppliers = suppliers.filter((s) => s.category.includes("alcohol"));
  const generalSuppliers = suppliers.filter((s) => s.category.includes("general"));
  const vegetableSuppliers = suppliers.filter((s) => s.category.includes("vegetable"));

  return (
    <>
      {/* ヘッダーエリア */}
      <header className="bg-[#ff9a3c] text-white pb-16 pt-12 px-4 relative overflow-hidden" style={{ backgroundColor: '#ff9a3c', color: 'white' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1 text-sm font-bold mb-4 animate-pulse">
            ✨ 新規出店、続々追加中！
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight drop-shadow-md">
            ピッタリな仕入れ先が<br className="md:hidden" />きっと見つかる！<br />
            <span className="text-yellow-200">卸会社のご紹介</span>
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-95 max-w-4xl mx-auto leading-relaxed">
            ラクシーレには厳選した仕入れ先が揃っています。<br />
            価格、品質、品揃え、配送の柔軟性など、重視ポイントに合わせてお選びいただけます。<br />
            ぜひ各社の詳細ページをご覧ください。
          </p>
        </div>

        {/* 装飾用アイコン */}
        <i className="fa-solid fa-carrot absolute bottom-[-20px] left-[10%] text-9xl text-white opacity-10 rotate-12"></i>
        <i className="fa-solid fa-fish absolute top-[20px] right-[5%] text-8xl text-white opacity-10 -rotate-12"></i>
      </header>

      {/* カテゴリナビゲーション */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto py-2 md:justify-center no-scrollbar">
            <Link href="#meat" className="flex-shrink-0 flex items-center space-x-2 bg-red-50 text-red-700 px-5 py-2 rounded-full font-bold hover:bg-red-100 transition whitespace-nowrap border border-red-100">
              <i className="fa-solid fa-drumstick-bite"></i> <span>肉類</span>
            </Link>
            <Link href="#fish" className="flex-shrink-0 flex items-center space-x-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-bold hover:bg-blue-100 transition whitespace-nowrap border border-blue-100">
              <i className="fa-solid fa-fish"></i> <span>魚類</span>
            </Link>
            <Link href="#alcohol" className="flex-shrink-0 flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-5 py-2 rounded-full font-bold hover:bg-yellow-100 transition whitespace-nowrap border border-yellow-100">
              <i className="fa-solid fa-wine-glass"></i> <span>酒類・飲料</span>
            </Link>
            <Link href="#general" className="flex-shrink-0 flex items-center space-x-2 bg-purple-50 text-purple-700 px-5 py-2 rounded-full font-bold hover:bg-purple-100 transition whitespace-nowrap border border-purple-100">
              <i className="fa-solid fa-utensils"></i> <span>総合食品</span>
            </Link>
            <Link href="#vegetable" className="flex-shrink-0 flex items-center space-x-2 bg-green-50 text-green-700 px-5 py-2 rounded-full font-bold hover:bg-green-100 transition whitespace-nowrap border border-green-100">
              <i className="fa-solid fa-carrot"></i> <span>野菜・果物</span>
            </Link>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-12 max-w-6xl space-y-20">
        <CategorySection
          id="meat"
          title="肉類"
          iconClass="fa-solid fa-drumstick-bite"
          color="red"
          suppliers={meatSuppliers}
        />
        <hr className="border-gray-200 border-dashed" />

        <CategorySection
          id="fish"
          title="魚類"
          iconClass="fa-solid fa-fish"
          color="blue"
          suppliers={fishSuppliers}
        />
        <hr className="border-gray-200 border-dashed" />

        <CategorySection
          id="alcohol"
          title="酒類・飲料"
          iconClass="fa-solid fa-wine-glass"
          color="yellow"
          suppliers={alcoholSuppliers}
        />
        <hr className="border-gray-200 border-dashed" />

        <CategorySection
          id="general"
          title="総合食品"
          iconClass="fa-solid fa-utensils"
          color="purple"
          suppliers={generalSuppliers}
        />
        <hr className="border-gray-200 border-dashed" />

        <CategorySection
          id="vegetable"
          title="野菜・果物"
          iconClass="fa-solid fa-carrot"
          color="green"
          suppliers={vegetableSuppliers}
        />
      </main>

    </>
  );
}
