"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      richColors
      theme="dark"
      className="toaster group"
      icons={{ error: null }}
      toastOptions={{
        classNames: {
          description: "group-[.toast]:text-muted-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          error: "!bg-destructive !text-destructive-foreground !border-destructive-border-50",
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground !rounded-[2px] group-[.toaster]:border-border border group-[.toaster]:shadow-lg",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
