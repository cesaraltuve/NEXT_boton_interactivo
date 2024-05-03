import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "./lib/utils";
import GrainEffect from "./components/visualEffects/grain-effect";
import Cursor from "./components/cursor/cursor";


//FONTS
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Cesar Altuve",
  description: "Portafolio de Cesar Altuve",
};

//Metadata
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(
        MainFont.className,
        OswaldFont.variable,
        PixelFont.variable

      )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
