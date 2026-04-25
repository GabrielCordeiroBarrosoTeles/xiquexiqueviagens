import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { whatsappUrl } from "@/lib/utils";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-foreground/95 text-background/80 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="" width={36} height={36} className="rounded-full bg-white" aria-hidden />
              <span className="text-background font-bold">XiqueXique Viagens</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Acessibilizamos o direito de viajar. Viagens parceladas no carnê, sem juros.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-0 hover:bg-cyan-500/20 font-medium">ODS 10</Badge>
              <Badge className="bg-green-500/20 text-green-300 border-0 hover:bg-green-500/20 font-medium">ODS 12</Badge>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-background font-semibold mb-4">Fale com a gente</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl("Oi! Cheguei pelo site da XiqueXique.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={16} aria-hidden /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/xiquexiqueviagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <InstagramIcon size={16} /> @xiquexiqueviagens
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@xiquexiqueviagens.com.br"
                  className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <Mail size={16} aria-hidden /> contato@xiquexiqueviagens.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-background font-semibold mb-4">Navegar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#destinos" className="hover:text-primary transition-colors">Destinos</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#instagram" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/10 mb-6" />

        <p className="text-center text-xs text-background/50">
          © {new Date().getFullYear()} XiqueXique Viagens — Agência de turismo socioambiental.
        </p>
      </div>
    </footer>
  );
}
