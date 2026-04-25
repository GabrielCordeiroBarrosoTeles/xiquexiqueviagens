"use client";

import Image from "next/image";
import { MapPin, MessageCircle, X } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { cn, formatCurrency, formatParcelamento, whatsappUrl } from "@/lib/utils";
import type { Destino } from "@/types/destino";

interface DestinoModalProps {
  destino: Destino;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DestinoModal({ destino, open, onOpenChange }: DestinoModalProps) {
  const parcela = destino.preco / destino.parcelas;
  const waMessage = `Oi! Quero saber mais sobre a viagem pra ${destino.nome} (${destino.estado}).`;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-black/60 transition-opacity duration-150",
            "data-[ending-style]:opacity-0 data-starting-style:opacity-0"
          )}
        />
        <Dialog.Viewport className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6 pointer-events-none">
          <Dialog.Popup
            className={cn(
              "pointer-events-auto flex max-h-[min(90vh,40rem)] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-card shadow-xl",
              "text-foreground",
              "transition duration-200 ease-out",
              "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
              "data-[starting-style]:scale-95 data-[starting-style]:opacity-0"
            )}
          >
            <div className="relative h-56 shrink-0">
              <Image
                src={destino.imagem}
                alt={destino.nome}
                fill
                className="object-cover"
                sizes="(max-width: 448px) 100vw, 448px"
              />
              <Dialog.Close
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    type="button"
                    aria-label="Fechar"
                    className="absolute top-3 right-3 bg-black/50 text-white hover:bg-black/70 hover:text-white"
                  />
                }
              >
                <X size={16} />
              </Dialog.Close>
              {destino.destaque && (
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0 hover:bg-primary">
                  Destaque
                </Badge>
              )}
              <Badge className="absolute bottom-3 left-3 bg-black/60 text-white border-0 hover:bg-black/60">
                {destino.categoria}
              </Badge>
            </div>

            <div className="p-5 overflow-y-auto">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Dialog.Title className="font-bold text-foreground text-xl leading-tight">
                  {destino.nome}
                </Dialog.Title>
                <span className="flex items-center gap-1 text-muted-foreground text-sm shrink-0 mt-1">
                  <MapPin size={13} aria-hidden />
                  {destino.estado}
                </span>
              </div>

              <Dialog.Description className="text-muted-foreground text-sm leading-relaxed mb-5">
                {destino.descricao}
              </Dialog.Description>

              <div className="rounded-xl bg-brand-cream-deep p-4 mb-5">
                <p className="text-xs text-muted-foreground">a partir de</p>
                <p className="text-primary font-extrabold text-3xl leading-tight">
                  {formatCurrency(parcela)}
                  <span className="text-sm font-medium text-muted-foreground">/mês</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {formatParcelamento(destino.preco, destino.parcelas)} · sem juros
                </p>
              </div>

              <LinkButton
                href={whatsappUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base gap-2"
              >
                <MessageCircle size={18} aria-hidden />
                Quero essa viagem
              </LinkButton>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
