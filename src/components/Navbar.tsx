"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useScrolled } from "@/hooks/useScrolled";
import { cn, whatsappUrl } from "@/lib/utils";

const links = [
  { href: "#instagram", label: "Instagram" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#destinos", label: "Destinos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
          <Image
            src="/logo.png"
            alt=""
            width={38}
            height={38}
            className="rounded-full"
            aria-hidden
          />
          <span className="font-bold text-sm leading-tight text-foreground">
            XiqueXique <span className="text-primary font-medium">Viagens</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <LinkButton
            href={whatsappUrl("Oi! Cheguei pelo site da XiqueXique.")}
            target="_blank"
            rel="noopener noreferrer"
            size="default"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 h-9"
          >
            <MessageCircle size={14} aria-hidden />
            WhatsApp
          </LinkButton>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground h-11 w-11"
                aria-label="Abrir menu"
              />
            }
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Image src="/logo.png" alt="" width={32} height={32} className="rounded-full" aria-hidden />
                XiqueXique Viagens
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6 px-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-foreground hover:text-primary py-3 border-b border-border transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <LinkButton
                href={whatsappUrl("Oi! Cheguei pelo site da XiqueXique.")}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-11"
              >
                <MessageCircle size={16} aria-hidden />
                Falar no WhatsApp
              </LinkButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
