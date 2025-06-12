import { cn } from "@/shared/shadcn/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { isNotNil } from "ramda"

export const BadgeVariants = cva(
  [
    "absolute right-0 top-0 min-h-4 min-w-4 -translate-y-1.5 translate-x-1.5 rounded-full p-[2px] text-xs leading-none",
  ],
  {
    variants: {
      variant: {
        solid: "",
        flat: "bg-secondary text-foreground",
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
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-voidGrey",
      },
      {
        variant: "solid",
        color: "amber",
        class: "bg-amber-500 text-amber-950",
      },
      {
        variant: "solid",
        color: "emerald",
        class: "bg-emerald-500 text-emerald-950",
      },
      {
        variant: "solid",
        color: "sky",
        class: "bg-sky-500 text-sky-950",
      },
      {
        variant: "solid",
        color: "indigo",
        class: "bg-indigo-500 text-indigo-950",
      },
      {
        variant: "solid",
        color: "purple",
        class: "bg-purple-500 text-purple-950",
      },
      {
        variant: "solid",
        color: "rose",
        class: "bg-rose-500 text-rose-950",
      },
      {
        variant: "solid",
        color: "grey",
        class: "bg-primary-midGrey text-primary-voidGrey",
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "flat",
    },
  },
)

export interface NotificationBadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof BadgeVariants> {
  label?: string | number
  show?: boolean
}

export const NotificationBadge = (props: NotificationBadgeProps) => {
  const {
    label,
    className,
    children,
    variant,
    color,
    show = true,
    ...divProps
  } = props

  return (
    <div {...divProps} className={cn(className, "relative")}>
      {children}

      {show && isNotNil(label) && (
        <div className={cn(BadgeVariants({ variant, color }))}>{label}</div>
      )}
    </div>
  )
}
