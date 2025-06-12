import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/shadcn/lib/utils";

export const BadgeVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "",
        flat: "bg-secondary",
        outline: "border border-current bg-transparent",
      },
      color: {
        primary: "",
        amber: "",
        emerald: "",
        sky: "",
        indigo: "",
        purple: "",
        rose: "",
        grey: "",
      },
      size: {
        md: "min-h-7 px-2 py-0.5 text-sm",
        sm: "min-h-5 px-1.5 py-0.5 text-xs [&_svg]:!size-3",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-none",
      },
    },
    compoundVariants: [
      // Primary
      {
        color: "primary",
        class: "text-primary",
      },
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-voidGrey",
      },

      // Amber
      {
        color: "amber",
        class: "text-amber-500",
      },
      {
        variant: "solid",
        color: "amber",
        class: "bg-amber-500 text-amber-950",
      },

      // Emerald
      {
        color: "emerald",
        class: "text-emerald-500",
      },
      {
        variant: "solid",
        color: "emerald",
        class: "bg-emerald-500 text-emerald-950",
      },

      // Sky
      {
        color: "sky",
        class: "text-sky-500",
      },
      {
        variant: "solid",
        color: "sky",
        class: "bg-sky-500 text-sky-950",
      },

      // Indigo
      {
        color: "indigo",
        class: "text-indigo-500",
      },
      {
        variant: "solid",
        color: "indigo",
        class: "bg-indigo-500 text-indigo-950",
      },

      // Purple
      {
        color: "purple",
        class: "text-purple-500",
      },
      {
        variant: "solid",
        color: "purple",
        class: "bg-purple-500 text-purple-950",
      },

      // Rose
      {
        color: "rose",
        class: "text-rose-500",
      },
      {
        variant: "solid",
        color: "rose",
        class: "bg-rose-500 text-rose-950",
      },

      // Grey
      {
        color: "grey",
        class: "text-primary-midGrey",
      },
      {
        variant: "solid",
        color: "grey",
        class: "bg-primary-midGrey text-primary-voidGrey",
      },
    ],
    defaultVariants: {
      size: "md",
      rounded: true,
      color: "primary",
      variant: "solid",
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof BadgeVariants> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return <Comp ref={ref} className={cn(BadgeVariants({ variant, color, size, rounded }), className)} {...props} />;
  },
);

Badge.displayName = "Badge";
