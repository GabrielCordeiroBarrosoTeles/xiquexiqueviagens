import { MapPin, CreditCard, PiggyBank, Plane, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ComoFuncionaStep, LucideIconName } from "@/types/como-funciona";

const iconMap: Record<LucideIconName, LucideIcon> = { MapPin, CreditCard, PiggyBank, Plane };

export function StepCard({ step }: { step: ComoFuncionaStep }) {
  const Icon = iconMap[step.icone] ?? MapPin;
  return (
    <Card className="group h-full bg-card border-border transition-shadow hover:shadow-md">
      <CardContent className="pt-6 pb-6 flex flex-col items-start">
        <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-primary transition-colors mb-4">
          <Icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" aria-hidden />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-cyan text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
            {step.passo}
          </span>
        </div>
        <h3 className="font-bold text-foreground mb-1.5">{step.titulo}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{step.descricao}</p>
      </CardContent>
    </Card>
  );
}
