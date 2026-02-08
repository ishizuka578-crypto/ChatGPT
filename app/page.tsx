import "./globals.css";
import type { Metadata } from "next";

const title =
  "採用に手が回らない小規模企業のためのスカウト特化型・採用代行";
const description =
  "10〜50名規模の企業向けに、スカウト文面設計から送信運用、反応率改善、初期対応整理までを伴走。採用が止まる前に30分で課題を整理します。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
        {/* TODO: Analytics script will be added here later. */}
      </body>
    </html>
  );
}
