"use client";

import { cn } from "@/shared/shadcn/lib/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import * as React from "react";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: "sm" | "md";
}

const switchTrack = cva(
  "relative inline-flex cursor-pointer rounded-full bg-input transition-colors focus-visible:bg-primary-hover focus-visible:outline-none data-[state=checked]:bg-primary",
  {
    variants: {
      size: {
        md: "h-[24px] w-[44px]",
        sm: "h-[20px] w-[36px]",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

const switchThumb = cva(
  "absolute left-[2px] top-1/2 -translate-y-1/2 translate-x-0 rounded-full bg-background shadow transition-transform",
  {
    variants: {
      size: {
        md: "h-[20px] w-[20px] data-[state=checked]:translate-x-[20px]",
        sm: "h-[16px] w-[16px] data-[state=checked]:translate-x-[16px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const { size = "md", disabled, className, ...rest } = props;

  return (
    <SwitchPrimitive.Root
      ref={ref}
      disabled={disabled}
      className={cn(switchTrack({ size, disabled }), className)}
      {...rest}
    >
      <SwitchPrimitive.Thumb className={switchThumb({ size })} />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = SwitchPrimitive.Root.displayName;
