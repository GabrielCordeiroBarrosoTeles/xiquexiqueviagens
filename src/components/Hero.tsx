import Image from "next/image";
import { ArrowDown, Check, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { whatsappUrl } from "@/lib/utils";

const trustPoints = [
  "Sem juros",
  "Sem consulta ao SPC",
  "500+ viagens realizadas",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Blobs decorativos suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <Badge
            variant="outline"
            className="mb-5 border-orange-300 bg-orange-50 text-orange-700 font-medium"
          >
            Agência de turismo socioambiental
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Viaje agora,
            <br />
            <span className="text-primary">pague aos poucos.</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Planos de viagem em carnê, sem juros e sem consulta ao SPC.
            Pra quem quer sair da rotina sem apertar o orçamento.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <LinkButton
              href={whatsappUrl("Oi! Queria saber como funciona o carnê de viagem da XiqueXique.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base gap-2"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </LinkButton>
            <LinkButton
              href="#destinos"
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-6 text-base"
            >
              Ver destinos
            </LinkButton>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {trustPoints.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-brand-green" aria-hidden />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-2">
            <Badge className="bg-cyan-100 text-cyan-800 border-0 hover:bg-cyan-100 font-medium">ODS 10</Badge>
            <Badge className="bg-green-100 text-green-800 border-0 hover:bg-green-100 font-medium">ODS 12</Badge>
          </div>
        </div>

        {/* Foto */}
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-border">
          <Image
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=900&q=80"
            alt="Pessoas felizes curtindo uma viagem"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur p-4 shadow-lg">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              A partir de
            </p>
            <p className="text-2xl font-extrabold text-foreground">
              12x de R$ 74<span className="text-sm font-normal text-muted-foreground"> /mês</span>
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">sem juros, no carnê</p>
          </div>
        </div>
      </div>

      <a
        href="#como-funciona"
        className="hidden md:inline-flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Rolar para entender como funciona"
      >
        <ArrowDown size={16} className="animate-bounce" /> como funciona
      </a>
    </section>
  );
}
