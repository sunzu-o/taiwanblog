import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "妙遊沖繩｜在地生活日本人帶路的私房玩法",
    template: "%s｜妙遊沖繩",
  },
  description:
    "在地生活日本人帶路，分享沖繩私房景點、美食、交通攻略。最真實的沖繩旅遊資訊，專為台灣旅客打造。",
  keywords: ["沖繩", "旅遊", "台灣", "景點", "美食", "攻略"],
  openGraph: {
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
