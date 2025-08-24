import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的参赛前台",
  description: "演示站点",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      {/* 不再使用 next/font 的变量，避免下载外网字体 */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
