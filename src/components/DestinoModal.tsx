"use client";

import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { formatCurrency, formatParcelamento } from "@/lib/utils";
import type { Destino } from "@/types/destino";

interface DestinoModalProps {
  destino: Destino;
  onClose: () => void;
}

export function DestinoModal({ destino, onClose }: DestinoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56">
          <Image
            src={destino.imagem}
            alt={destino.nome}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
          >
            <X size={18} />
          </button>
          {destino.destaque && (
            <Badge className="absolute top-3 left-3 bg-orange-500 text-white border-0 hover:bg-orange-500">
              Destaque
            </Badge>
          )}
          <Badge
            variant="secondary"
            className="absolute bottom-3 left-3 bg-black/50 text-white border-0 hover:bg-black/50"
          >
            {destino.categoria}
          </Badge>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2 className="font-bold text-gray-900 text-xl">{destino.nome}</h2>
            <span className="flex items-center gap-1 text-muted-foreground text-sm shrink-0 mt-1">
              <MapPin size={13} />
              {destino.estado}
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {destino.descricao}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">a partir de</p>
              <p className="text-orange-500 font-bold text-2xl leading-tight">
                {formatCurrency(destino.preco / destino.parcelas)}
                <span className="text-sm font-normal text-muted-foreground">/mês</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {formatParcelamento(destino.preco, destino.parcelas)}
              </p>
            </div>
            <LinkButton
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 hover:bg-orange-600 text-white border-0"
            >
              Quero ir!
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
