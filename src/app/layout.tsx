import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonGradient from "@/components/ButtonGradient";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600"],
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  weight: ["400", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300"],
})

export const metadata: Metadata = {
  title: "Leonify",
  description: "Pagina WEB de Leonify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" 
    className="overflow-x-hidden" 
    >
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <ButtonGradient />
        <Footer />
      </body>
    </html>
  );
}
