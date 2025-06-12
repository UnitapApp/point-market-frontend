import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/shadcn/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:bg-primary-focus",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-primary/10 text-primary hover:border-primary-hover hover:bg-primary-hover/10 focus-visible:border-primary-focus",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:bg-secondary-focus",
        ghost: "text-primary hover:bg-secondary-hover hover:text-primary",
        link: "text-foreground underline-offset-4 hover:text-primary hover:underline",
        linkSecondary: "text-muted-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6",
        lg: "h-12 px-8",
        icon: "h-12 w-12 [&_svg]:size-6",
        "icon-sm": "h-10 w-10 [&_svg]:size-4",
        "icon-xs": "h-8 w-8 [&_svg]:size-4",
        "icon-xss": "h-7 w-7 [&_svg]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
