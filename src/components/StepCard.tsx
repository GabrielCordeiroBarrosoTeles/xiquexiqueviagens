import { MapPin, CreditCard, PiggyBank, Plane, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ComoFuncionaStep, LucideIconName } from "@/types/como-funciona";

const iconMap: Record<LucideIconName, LucideIcon> = { MapPin, CreditCard, PiggyBank, Plane };

export function StepCard({ step }: { step: ComoFuncionaStep }) {
  const Icon = iconMap[step.icone] ?? MapPin;
  return (
    <Card className="text-center group hover:shadow-md transition-shadow">
      <CardContent className="pt-6 pb-6 flex flex-col items-center">
        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 group-hover:bg-orange-500 transition-colors mb-4">
          <Icon size={28} className="text-orange-500 group-hover:text-white transition-colors" />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {step.passo}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{step.titulo}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{step.descricao}</p>
      </CardContent>
    </Card>
  );
}
