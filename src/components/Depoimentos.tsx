import { depoimentos } from "@/lib/mock-data";
import { DepoimentoCard } from "@/components/DepoimentoCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Quem já viajou"
          title="Depoimentos"
          description="Histórias reais de quem realizou o sonho de viajar."
          eyebrowColor="text-green-600"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((dep) => (
            <DepoimentoCard key={dep.id} dep={dep} />
          ))}
        </div>
      </div>
    </section>
  );
}
