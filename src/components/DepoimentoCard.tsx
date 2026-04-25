import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Depoimento } from "@/types/depoimento";

export function DepoimentoCard({ dep }: { dep: Depoimento }) {
  return (
    <Card className="h-full bg-card border-border hover:shadow-md transition-shadow">
      <CardContent className="pt-7 pb-6 flex flex-col h-full">
        <Quote size={28} className="text-primary/30 mb-3" aria-hidden />
        <p className="text-foreground text-base leading-relaxed mb-6 flex-1 italic">
          “{dep.texto}”
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarFallback className="bg-gradient-to-br from-primary to-brand-cyan text-white text-sm font-bold">
              {dep.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{dep.nome}</p>
            <p className="text-muted-foreground text-sm">{dep.cidade}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
