import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influo AI - 专属AI品牌营销团队",
  description: "让AI记住你的品牌，然后创造属于你的一切内容。从每一次交互沉淀品牌记忆，让内容越来越像你。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
