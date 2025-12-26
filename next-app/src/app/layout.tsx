import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { FontAwesomeCDN } from "@/components/FontAwesomeCDN";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "仕入れ先・卸会社紹介 | ラクシーレ",
  description: "厳選した仕入れ先が見つかる、飲食店向け仕入れ・卸サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <FontAwesomeCDN />
      </head>
      <body className={`${notoSansJP.className} antialiased bg-[#fdfbf7] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
