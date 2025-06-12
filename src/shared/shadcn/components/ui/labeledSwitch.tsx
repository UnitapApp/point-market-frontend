import { Switch } from "@/shared/shadcn/components/ui/switch"
import { cn } from "@/shared/shadcn/lib/utils"
import { cva } from "class-variance-authority"

// TODO: review this file
const outerWrapper = cva("flex w-fit", {
  variants: {
    variant: {
      outlined: "rounded-md border border-[input] border-opacity-30 p-4",
      default: "",
    },
    styleType: {
      destructive: "text-destructive",
      default: "",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    disabled: false,
    variant: "default",
    styleType: "default",
  },
})

const innerWrapper = cva("flex items-center gap-x-2", {
  variants: {
    position: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
  defaultVariants: {
    position: "left",
  },
})

interface LabeledSwitchProps {
  label: string
  description?: string
  disabled?: boolean
  position?: "left" | "right"
  variant?: "default" | "outlined"
  styleType?: "default" | "destructive"
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function LabeledSwitch({
  label,
  description,
  disabled = false,
  position = "left",
  variant = "default",
  styleType = "default",
  checked,
  onCheckedChange,
  className,
}: LabeledSwitchProps) {
  return (
    <div
      className={cn(outerWrapper({ variant, styleType, disabled }), className)}
    >
      <div className={innerWrapper({ position })}>
        <div className="flex flex-col">
          <span className="font-medium">{label}</span>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <Switch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
