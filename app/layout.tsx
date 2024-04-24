import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplicativo de receitas",
  description: "Seu site de receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <div className="bg-cyan-50 ">
        <h1 className="text-center text-3xl">
          {" "}
          © 2024 Systan Sistema Tecnologico
        </h1>
      </div>
    </html>
  );
}
