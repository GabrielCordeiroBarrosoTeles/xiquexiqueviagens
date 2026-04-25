import { cn } from "@/lib/utils";
import type { SectionHeaderProps } from "@/types/section-header";

export function SectionHeader({
  eyebrow,
  title,
  description,
  eyebrowColor = "text-orange-500",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <span className={cn("text-sm font-semibold uppercase tracking-wider", eyebrowColor)}>
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
