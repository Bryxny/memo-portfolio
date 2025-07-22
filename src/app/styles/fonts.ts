import { Geist, Geist_Mono, Caveat } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: "400",
});
