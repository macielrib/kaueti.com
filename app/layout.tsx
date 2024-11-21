import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Poppins } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dmsans",
});

const satoshi = localFont({
  src: [
    {
      path: "fonts/Satoshi-Variable.woff2", 
      weight: "300 900",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-VariableItalic.woff2", 
      weight: "300 900",
      style: "italic",
    },
    {
      path: "fonts/Satoshi-Light.woff2", 
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Regular.woff2", 
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Bold.woff2", 
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Kauê — Software Developer",
  description: "Desenvolvedor apaixonado por criar experiências digitais intuitivas e elegantes, com foco em performance e qualidade.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "Web Development",
  ],
  authors: [{ name: "Kauê", url: "https://github.com/kauecarv" }],
  creator: "Kauê",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kaueds.com",
    title: "Kauê — Software Developer",
    description: "Desenvolvedor apaixonado por criar experiências digitais intuitivas e elegantes.",
    siteName: "Kauê",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauê — Software Developer",
    description: "Desenvolvedor apaixonado por criar experiências digitais intuitivas e elegantes.",
    creator: "@kaue",
  },
  themeColor: "#18181B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmsans.variable} ${instrument.variable} ${poppins.variable} ${satoshi.variable} antialiased bg-[#0D0D0D] text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
