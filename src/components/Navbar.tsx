"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
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
import { cn } from "@/lib/utils";

const links = [
  { href: "#destinos", label: "Destinos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="XiqueXique Viagens"
            width={38}
            height={38}
            className="rounded-full"
          />
          <span
            className={cn(
              "font-bold text-sm leading-tight transition-colors",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            XiqueXique{" "}
            <span className="text-orange-400 font-normal">Viagens</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors hover:text-orange-500",
                scrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              {l.label}
            </a>
          ))}
          <LinkButton href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" size="sm" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white border-0">
            Fale Conosco
          </LinkButton>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className={cn("md:hidden", scrolled ? "text-gray-900" : "text-white")}
                aria-label="Abrir menu"
              />
            }
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Image src="/logo.png" alt="XiqueXique Viagens" width={32} height={32} className="rounded-full" />
                XiqueXique Viagens
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6 px-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <LinkButton href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white border-0">
                Falar no WhatsApp
              </LinkButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
