import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LETO14 Music — Музыка, которую хочется переслушивать",
  description:
    "LETO14 music — лейбл про хорошую музыку, наполненную эмоцией и настроением. Сильные мелодии, живые тексты, красивые голоса.",
  openGraph: {
    title: "LETO14 Music",
    description: "Музыка, которую хочется переслушивать",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f]`}>
        {children}
      </body>
    </html>
  );
}
