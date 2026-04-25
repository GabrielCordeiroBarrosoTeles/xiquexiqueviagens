"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { formatCurrency, formatParcelamento } from "@/lib/utils";
import { DestinoModal } from "@/components/DestinoModal";
import type { Destino } from "@/types/destino";

export function DestinoCard({ destino }: { destino: Destino }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Card onClick={() => setOpen(true)} className="overflow-hidden group hover:shadow-md transition-shadow p-0 gap-0 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {destino.destaque && (
            <Badge className="bg-orange-500 text-white border-0 hover:bg-orange-500">
              Destaque
            </Badge>
          )}
        </div>
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-black/50 text-white border-0 hover:bg-black/50"
        >
          {destino.categoria}
        </Badge>
      </div>

      <CardContent className="pt-4 pb-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-gray-900 text-base leading-tight">{destino.nome}</h3>
          <span className="flex items-center gap-1 text-muted-foreground text-xs shrink-0">
            <MapPin size={11} />
            {destino.estado}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{destino.descricao}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between bg-transparent border-0 pt-3 pb-4 px-4">
        <div>
          <p className="text-xs text-muted-foreground">a partir de</p>
          <p className="text-orange-500 font-bold text-lg leading-tight">
            {formatCurrency(destino.preco / destino.parcelas)}
            <span className="text-xs font-normal text-muted-foreground">/mês</span>
          </p>
          <p className="text-xs text-muted-foreground">{formatParcelamento(destino.preco, destino.parcelas)}</p>
        </div>
        <LinkButton href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" size="sm" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white border-0" onClick={(e) => e.stopPropagation()}>
          Quero ir!
        </LinkButton>
      </CardFooter>
    </Card>
    {open && <DestinoModal destino={destino} onClose={() => setOpen(false)} />}
    </>
  );
}
