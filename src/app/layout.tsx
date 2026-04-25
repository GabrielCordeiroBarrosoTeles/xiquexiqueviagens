import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XiqueXique Viagens — Turismo Socioambiental",
  description:
    "Agência de viagens e turismo socioambiental. Acessibilizamos o direito de viajar com viagens pré-pagas no carnê. Apoiamos as ODS 10 e 12.",
  keywords: ["viagens", "turismo", "carnê", "acessível", "socioambiental", "ODS"],
  openGraph: {
    title: "XiqueXique Viagens",
    description: "Acessibilizamos o direito de viajar e ser mais feliz.",
    url: "https://xiquexiqueviagens.com.br",
    siteName: "XiqueXique Viagens",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
