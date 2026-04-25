import { ArrowDown } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* ODS badges */}
      <div className="absolute top-24 right-4 md:right-8 flex flex-col gap-2">
        <Badge className="bg-cyan-500 text-white border-0 hover:bg-cyan-500">ODS 10</Badge>
        <Badge className="bg-green-600 text-white border-0 hover:bg-green-600">ODS 12</Badge>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <Badge
          variant="outline"
          className="border-orange-400/50 text-orange-300 bg-orange-500/10 mb-6"
        >
          Agência de Turismo Socioambiental
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Viajar é um{" "}
          <span className="text-orange-400">direito</span>{" "}
          de todos
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Realizamos sonhos com viagens pré-pagas no carnê, sem juros e sem burocracia.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="#destinos" size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white border-0">
            Ver Destinos
          </LinkButton>
          <LinkButton href="#como-funciona" size="lg" variant="outline" className="rounded-full border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
            Como Funciona
          </LinkButton>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          {[
            { valor: "2.7k+", label: "Seguidores" },
            { valor: "500+", label: "Viagens Realizadas" },
            { valor: "12x", label: "Sem Juros" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-orange-400">{stat.valor}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#destinos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
