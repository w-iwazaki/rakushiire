import { Supplier } from "@/types/supplier";
import SupplierCard from "./SupplierCard";

type Props = {
    id: string;
    title: string;
    subtitle?: string;
    iconClass: string;
    color: "red" | "blue" | "yellow" | "purple" | "green";
    suppliers: Supplier[];
};

const colors = {
    red: { bg: "bg-red-100", text: "text-red-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
};

export default function CategorySection({ id, title, subtitle, iconClass, color, suppliers }: Props) {
    const theme = colors[color];

    return (
        <section id={id} className="scroll-mt-28">
            <div className="flex items-center mb-8">
                <div className={`${theme.bg} p-3 rounded-xl mr-4 ${theme.text}`}>
                    <i className={`${iconClass} text-3xl`}></i>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                    {subtitle && <p className="text-gray-500 text-sm font-bold">{subtitle}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {suppliers.map((supplier) => (
                    <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
            </div>
        </section>
    );
}
