import * as React from "react";

import { cn } from "@/shared/shadcn/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full bg-secondary text-base ring-offset-background file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:bg-secondary-hover focus-visible:bg-secondary-hover focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-secondary md:text-sm",
  {
    variants: {
      size: {
        sm: "h-10 px-3 py-2",
        md: "h-12 px-2 py-1",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, "aria-invalid": ariaInvalid, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        autoComplete="off"
        className={cn(inputVariants({ size }), ariaInvalid ? "border-destructive" : "", className)}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
