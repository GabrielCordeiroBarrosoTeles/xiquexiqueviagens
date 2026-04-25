import { MessageCircle } from "lucide-react";
import { comoFunciona, faq } from "@/lib/mock-data";
import { StepCard } from "@/components/StepCard";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";
import { whatsappUrl } from "@/lib/utils";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-brand-cream-deep">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Sem mistério"
          title="Como funciona"
          description="Viagem parcelada no carnê: você paga mensalmente, a gente cuida do resto."
          eyebrowColor="text-brand-cyan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {comoFunciona.map((step) => (
            <StepCard key={step.passo} step={step} />
          ))}
        </div>

        {/* FAQ inline — sanfona nativa, sem JS */}
        <div className="max-w-2xl mx-auto mb-14">
          <h3 className="text-center text-lg font-semibold text-foreground mb-4">
            Perguntas que a gente mais escuta
          </h3>
          <div className="space-y-2">
            {faq.map((item) => (
              <details
                key={item.pergunta}
                className="group rounded-xl bg-card border border-border px-4 py-3 open:shadow-sm transition-shadow"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm font-medium text-foreground list-none [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <span
                    aria-hidden
                    className="text-primary text-xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Bora começar seu carnê?</h3>
          <p className="text-orange-50 mb-6 max-w-md mx-auto">
            Chama no WhatsApp que a gente monta um plano do seu jeito — sem compromisso.
          </p>
          <LinkButton
            href={whatsappUrl("Oi! Quero montar um carnê de viagem.")}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="rounded-full bg-white text-orange-600 hover:bg-orange-50 border-0 h-12 px-6 text-base gap-2"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
