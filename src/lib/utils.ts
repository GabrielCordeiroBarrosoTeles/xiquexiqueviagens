import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatParcelamento(preco: number, parcelas: number): string {
  return `${parcelas}x de ${formatCurrency(preco / parcelas)}`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

// Número placeholder — trocar em um único lugar quando a ONG informar o real.
const WHATSAPP_NUMERO = "5500000000000";

export function whatsappUrl(mensagem?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}
