import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/ui/link-button";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const destinos = ["Chapada Diamantina", "Lençóis Maranhenses", "Fernando de Noronha", "Bonito", "Pantanal", "Jericoacoara"];

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-gray-400 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="XiqueXique Viagens" width={36} height={36} className="rounded-full" />
              <span className="text-white font-bold">XiqueXique Viagens</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Agência de viagens e turismo socioambiental. Acessibilizamos o direito de viajar e ser mais feliz.
            </p>
            <div className="flex gap-2">
              <LinkButton href="https://www.instagram.com/xiquexiqueviagens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-pink-600">
                <InstagramIcon size={16} />
              </LinkButton>
              <LinkButton href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-green-600">
                <MessageCircle size={16} />
              </LinkButton>
              <LinkButton href="mailto:contato@xiquexiqueviagens.com.br" aria-label="E-mail" variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-orange-500">
                <Mail size={16} />
              </LinkButton>
            </div>
          </div>

          {/* Destinos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Destinos</h4>
            <ul className="space-y-2 text-sm">
              {destinos.map((d) => (
                <li key={d}>
                  <a href="#destinos" className="hover:text-orange-400 transition-colors">{d}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/xiquexiqueviagens/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                  <InstagramIcon size={14} /> @xiquexiqueviagens
                </a>
              </li>
              <li>
                <a href="mailto:contato@xiquexiqueviagens.com.br" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <Mail size={14} /> contato@xiquexiqueviagens.com.br
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-500 mb-2">Apoiamos</p>
              <div className="flex gap-2">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-0 hover:bg-cyan-500/20">ODS 10</Badge>
                <Badge className="bg-green-600/20 text-green-400 border-0 hover:bg-green-600/20">ODS 12</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-6" />

        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} XiqueXique Viagens — Agência de Turismo Socioambiental. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
