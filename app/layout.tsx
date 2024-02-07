import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PocketChef",
  description: "Solving the age old problem of making something to eat out of the ingredients you have. Just enter what ingredients you have or want to use and let PocketChef give you some recipes and inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
