// lib/fonts.ts
import { Inter, Space_Grotesk, Press_Start_2P, Pixelify_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pixel",
});