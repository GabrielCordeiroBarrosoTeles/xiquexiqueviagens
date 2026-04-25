import { Sprout, Scale } from "lucide-react";

const itens = [
  {
    numero: "10",
    titulo: "Redução das desigualdades",
    descricao: "Tornamos viajar possível para quem nunca teve acesso.",
    Icon: Scale,
    cor: "text-cyan-700 bg-cyan-100",
  },
  {
    numero: "12",
    titulo: "Consumo responsável",
    descricao: "Turismo sustentável, respeitando natureza e comunidades locais.",
    Icon: Sprout,
    cor: "text-green-700 bg-green-100",
  },
];

export default function ODS() {
  return (
    <section className="py-14 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Nosso compromisso
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
              Turismo que transforma
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {itens.map(({ numero, titulo, descricao, Icon, cor }) => (
              <div
                key={numero}
                className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
              >
                <div className={`inline-flex items-center justify-center size-10 rounded-lg ${cor} shrink-0`}>
                  <Icon size={20} aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">ODS {numero}</p>
                  <p className="font-semibold text-foreground text-sm leading-tight">{titulo}</p>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
