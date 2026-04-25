import { destinos } from "@/lib/mock-data";
import { DestinoCard } from "@/components/DestinoCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Destinos() {
  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Nossos Pacotes"
          title="Destinos Incríveis"
          description="Parcele sua viagem no carnê e realize o sonho de conhecer o Brasil."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinos.map((destino) => (
            <DestinoCard key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </section>
  );
}
