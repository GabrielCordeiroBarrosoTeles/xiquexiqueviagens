import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";

const ods = [
  {
    numero: "10",
    titulo: "Redução das Desigualdades",
    descricao: "Tornamos o turismo acessível para pessoas de baixa renda, democratizando o direito de viajar.",
  },
  {
    numero: "12",
    titulo: "Consumo Responsável",
    descricao: "Promovemos o turismo sustentável, respeitando o meio ambiente e as comunidades locais.",
  },
];

export default function ODS() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-4 hover:bg-white/20">
              Nosso Compromisso
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turismo que transforma
            </h2>
            <p className="text-green-100 leading-relaxed mb-6">
              A XiqueXique Viagens apoia os Objetivos de Desenvolvimento Sustentável da ONU, acreditando que o turismo pode ser uma força de transformação social e ambiental.
            </p>
              <LinkButton href="https://odsbrasil.gov.br/" target="_blank" rel="noopener noreferrer" variant="outline" className="rounded-full border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                Saiba mais sobre as ODS
              </LinkButton>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ods.map((item) => (
              <Card key={item.numero} className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="text-4xl font-black mb-2">ODS {item.numero}</div>
                  <h3 className="font-bold text-base mb-1">{item.titulo}</h3>
                  <p className="text-green-100 text-sm leading-relaxed">{item.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
