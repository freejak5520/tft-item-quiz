import { Analytics } from "@vercel/analytics/react";
import { clsx } from "clsx";
import { Noto_Sans_KR } from "next/font/google";
import React from "react";
import Footer from "./_components/Footer";
import Providers from "./_providers/Providers";
import "./globals.css";
import Gnb from "./_components/Gnb";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--noto-sans-kr",
});

export const metadata = {
  title: "롤체 - 아이템 조합 퀴즈",
  description: "롤체, 롤토체스, 전략적 팀 전투, 아이템 조합 퀴즈",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_AdaptiveHelm.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_ArchangelsStaff.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_BFSword.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Bloodthirster.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_BlueBuff.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_BrambleVest.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_ChainVest.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Crownguard.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Deathblade.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_DragonsClaw.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_ForceOfNature.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_FrozenHeart.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_GargoyleStoneplate.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_GiantsBelt.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_GuardianAngel.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_GuinsoosRageblade.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_HextechGunblade.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_InfinityEdge.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_IonicSpark.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_JeweledGauntlet.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_LastWhisper.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Leviathan.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_MadredsBloodrazor.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Morellonomicon.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_NeedlesslyLargeRod.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_NegatronCloak.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_NightHarvester.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_PowerGauntlet.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Quicksilver.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_RabadonsDeathcap.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_RapidFireCannon.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_RecurveBow.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_RedBuff.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Redemption.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_RunaansHurricane.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_SparringGloves.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_Spatula.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_SpearOfShojin.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_SpectralGauntlet.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_StatikkShiv.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_SteraksGage.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_TearOfTheGoddess.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_ThiefsGloves.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_TitansResolve.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_UnstableConcoction.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT_Item_WarmogsArmor.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_8bitEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_EmoEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_JazzEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_KDAEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_PBJEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_PentakillEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_PunkEmblem.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/img/items/TFT10_Item_TrueDamageEmblem.webp"
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={clsx(notoSansKr.className, "bg-bg-100 dark:bg-bg-900")}>
        <Providers>
          <Gnb />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
