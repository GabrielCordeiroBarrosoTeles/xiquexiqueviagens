import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LinkButtonProps } from "@/types/link-button";

export function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
