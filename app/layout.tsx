import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import OfflineBanner from "./components/OfflineBanner";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinical Assistant — MOH Guidelines",
  description: "Clinical assistant that answers questions using Ethiopian MOH guidelines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 py-6">{children}</main>
        <Footer />
        <OfflineBanner enabled={false} />
      </body>
    </html>
  );
}
