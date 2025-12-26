import Link from "next/link";
import Image from "next/image";
import { Supplier } from "@/types/supplier";

type Props = {
    supplier: Supplier;
};

const categoryColors: { [key: string]: { bg: string; text: string; button: string; buttonHover: string } } = {
    red: { bg: "bg-red-600", text: "text-red-600", button: "bg-red-600", buttonHover: "hover:bg-red-700" },
    blue: { bg: "bg-blue-600", text: "text-blue-600", button: "bg-blue-600", buttonHover: "hover:bg-blue-700" },
    yellow: { bg: "bg-yellow-600", text: "text-yellow-600", button: "bg-yellow-600", buttonHover: "hover:bg-yellow-700" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", button: "bg-purple-600", buttonHover: "hover:bg-purple-700" },
    green: { bg: "bg-green-600", text: "text-green-600", button: "bg-green-600", buttonHover: "hover:bg-green-700" },
};

export default function SupplierCard({ supplier }: Props) {
    const color = categoryColors[supplier.themeColor || "red"] || categoryColors.red;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
            {/* メイン画像エリア */}
            <div className="relative h-56 bg-gray-50 overflow-hidden">
                {supplier.mainImage?.url ? (
                    <img
                        src={supplier.mainImage.url}
                        alt={supplier.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-50">
                        <i className="fa-regular fa-image text-4xl mb-2 opacity-20"></i>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">no image</span>
                    </div>
                )}
                {/* カテゴリに応じたアクセントライン */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 ${supplier.themeColor === 'red' ? 'bg-red-500' : supplier.themeColor === 'blue' ? 'bg-blue-500' : supplier.themeColor === 'yellow' ? 'bg-yellow-500' : supplier.themeColor === 'purple' ? 'bg-purple-500' : 'bg-green-500'}`}></div>
            </div>

            <div className="p-7 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                        {supplier.name}
                    </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {supplier.description}
                </p>

                <Link
                    href={`/${supplier.id}`}
                    className={`relative overflow-hidden inline-flex items-center justify-center w-full px-6 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-2xl group-hover:bg-orange-600 shadow-lg active:scale-95`}
                >
                    <span className="relative z-10 flex items-center">
                        詳細を見る
                        <i className="fa-solid fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
}
