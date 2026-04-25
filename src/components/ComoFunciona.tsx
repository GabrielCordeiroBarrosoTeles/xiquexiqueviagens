import { comoFunciona } from "@/lib/mock-data";
import { StepCard } from "@/components/StepCard";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui/link-button";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Simples assim"
          title="Como Funciona"
          description="Viagens pré-pagas no carnê: você paga mensalmente e viaja quando quitar."
          eyebrowColor="text-cyan-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {comoFunciona.map((step) => (
            <StepCard key={step.passo} step={step} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Pronto para realizar seu sonho?</h3>
          <p className="text-orange-100 mb-6 text-sm">
            Fale com a gente pelo WhatsApp e monte seu carnê agora mesmo.
          </p>
          <LinkButton href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" size="lg" className="rounded-full bg-white text-orange-500 hover:bg-orange-50 border-0">
            Falar no WhatsApp
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
