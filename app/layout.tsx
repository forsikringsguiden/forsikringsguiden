import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forsikringsguiden — Sammenlign forsikringer og spar penger",
  description:
    "Norges uavhengige forsikringsguide. Sammenlign priser på bil-, hus-, innbo- og reiseforsikring. Oppdatert for 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${plusJakartaSans.variable} ${sourceSerif4.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
