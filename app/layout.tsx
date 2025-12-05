import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  variable: "--font-app-ubuntu",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Anime Hubber",
  description: "Blog para compartilhar notícias sobre animes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ubuntu.variable} antialiased text-paragraph text-typo-100`}
      >
        {children}
      </body>
    </html>
  );
}
