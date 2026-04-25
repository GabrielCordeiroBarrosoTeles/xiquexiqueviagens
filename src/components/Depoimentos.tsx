import { MessageCircle } from "lucide-react";
import { depoimentos } from "@/lib/mock-data";
import { DepoimentoCard } from "@/components/DepoimentoCard";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { whatsappUrl } from "@/lib/utils";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 bg-brand-cream-deep">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Gente que já viajou com a gente"
          title="Histórias reais"
          description="Pessoas que realizaram o sonho de viajar pagando no carnê."
          eyebrowColor="text-brand-green"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {depoimentos.map((dep) => (
            <DepoimentoCard key={dep.id} dep={dep} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-3">Já viajou com a gente? Conta sua história.</p>
          <LinkButton
            href={whatsappUrl("Oi! Queria contar minha história de viagem com a XiqueXique.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="rounded-full gap-2 h-11"
          >
            <MessageCircle size={16} aria-hidden />
            Contar minha história
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
