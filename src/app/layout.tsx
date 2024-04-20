import RootHead from "@/components/head";
import { clsx } from "clsx";
import { Noto_Sans_KR } from "next/font/google";
import React from "react";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
} from "../../lib/constants";
import Footer from "./_components/Footer";
import Gnb from "./_components/Gnb";
import Providers from "./_providers/Providers";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--noto-sans-kr",
});

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <RootHead />
      <body className={clsx(notoSansKr.className, "bg-bg-100 dark:bg-bg-900")}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Gnb />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
