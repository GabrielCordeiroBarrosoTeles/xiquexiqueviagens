import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Depoimento } from "@/types/depoimento";

export function DepoimentoCard({ dep }: { dep: Depoimento }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: dep.nota }).map((_, i) => (
            <Star key={i} size={15} className="fill-orange-400 text-orange-400" />
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{dep.texto}"</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-orange-400 to-cyan-500 text-white text-xs font-bold">
              {dep.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{dep.nome}</p>
            <p className="text-muted-foreground text-xs">{dep.cidade}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
