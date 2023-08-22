import "normalize.css";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AOSInit } from "../components/Aos";

const gothamPro = localFont({
  src: [
    {
      path: "../fonts/GothamPro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GothamPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GothamPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/GothamPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Clover Research",
  description: "Маркетинговые исследования в медицине и фармацевтике",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <AOSInit />
      <body className={gothamPro.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
