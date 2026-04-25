"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatParcelamento, whatsappUrl } from "@/lib/utils";
import { DestinoModal } from "@/components/DestinoModal";
import type { Destino } from "@/types/destino";

export function DestinoCard({ destino }: { destino: Destino }) {
  const [open, setOpen] = useState(false);
  const parcela = destino.preco / destino.parcelas;
  const waMessage = `Oi! Quero saber mais sobre a viagem pra ${destino.nome} (${destino.estado}).`;

  return (
    <>
      <Card className="overflow-hidden group p-0 gap-0 bg-card border-border hover:shadow-lg transition-shadow">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block h-52 w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Ver detalhes da viagem para ${destino.nome}`}
        >
          <Image
            src={destino.imagem}
            alt={destino.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            {destino.destaque && (
              <Badge className="bg-primary text-primary-foreground border-0 hover:bg-primary font-medium">
                Destaque
              </Badge>
            )}
          </div>
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 bg-black/60 text-white border-0 hover:bg-black/60 font-medium"
          >
            {destino.categoria}
          </Badge>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
            <h3 className="font-bold text-lg leading-tight drop-shadow">{destino.nome}</h3>
            <span className="flex items-center gap-1 text-xs opacity-90">
              <MapPin size={12} aria-hidden />
              {destino.estado}
            </span>
          </div>
        </button>

        <CardContent className="pt-4 pb-0">
          <p className="text-muted-foreground text-sm leading-relaxed">{destino.descricao}</p>
        </CardContent>

        <CardFooter className="flex items-end justify-between bg-transparent border-0 pt-4 pb-5 px-5 gap-3">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground leading-none mb-1">a partir de</p>
            <p className="text-primary font-extrabold text-2xl leading-none">
              {formatCurrency(parcela)}
              <span className="text-sm font-medium text-muted-foreground">/mês</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {formatParcelamento(destino.preco, destino.parcelas)}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 shrink-0">
            <LinkButton
              href={whatsappUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5"
            >
              <MessageCircle size={15} aria-hidden />
              Quero esse
            </LinkButton>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(true)}
              className="text-xs text-muted-foreground"
            >
              ver detalhes
            </Button>
          </div>
        </CardFooter>
      </Card>
      <DestinoModal destino={destino} open={open} onOpenChange={setOpen} />
    </>
  );
}
