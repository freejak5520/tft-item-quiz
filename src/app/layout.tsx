import { clsx } from "clsx";
import type { Metadata } from "next";
import React from "react";
import Providers from "../providers/Providers";
import Footer from "@/components/footer";
import Gnb from "@/components/gnb";
import RootHead from "@/components/head";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TITLE } from "@/lib/constants";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    images: "/og-image.webp",
  },
} satisfies Metadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <RootHead />
      <body className={clsx("bg-bg-100 dark:bg-bg-900")}>
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
};

export default RootLayout;
