import { destinos } from "@/lib/mock-data";
import { DestinoCard } from "@/components/DestinoCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Destinos() {
  return (
    <section id="destinos" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Pra onde a gente vai"
          title="Destinos no carnê"
          description="Escolha um dos pacotes ou fala com a gente pra montar do jeito que cabe no seu bolso."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {destinos.map((destino) => (
            <DestinoCard key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </section>
  );
}
