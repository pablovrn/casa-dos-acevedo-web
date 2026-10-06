import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "Casa dos Acevedo - de Maior5 apartamentos",
  description:
    "Casa dos Acevedo: apartamentos vacacionales. Apartamento vacacional en pleno corazón de la villa de Verín.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${newsreader.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
