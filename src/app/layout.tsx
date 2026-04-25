import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "XiqueXique Viagens — Viaje agora, pague aos poucos",
  description:
    "Viagens parceladas no carnê, sem juros e sem consulta ao SPC. Turismo socioambiental para quem quer sair da rotina sem apertar o orçamento.",
  keywords: ["viagem parcelada", "carnê de viagem", "turismo acessível", "sem juros", "ONG de turismo", "ODS"],
  applicationName: "XiqueXique Viagens",
  appleWebApp: {
    capable: true,
    title: "XiqueXique",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "XiqueXique Viagens",
    description: "Viaje agora, pague aos poucos. Sem juros, sem consulta ao SPC.",
    url: "https://xiquexiqueviagens.com.br",
    siteName: "XiqueXique Viagens",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
