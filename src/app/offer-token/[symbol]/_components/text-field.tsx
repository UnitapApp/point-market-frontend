import { Fira_Code } from "next/font/google"
import { Inter } from "next/font/google"
import { FC, PropsWithChildren } from "react"

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
})

const TextField: FC<
  PropsWithChildren & {
    label: string
    className?: string
    disabled?: boolean
    placeholder?: string
  }
> = ({ label, className, children, disabled, placeholder }) => {
  return (
    <div
      className={`relative ${className ?? ""} flex overflow-hidden rounded-2xl border border-gray60 bg-gray40 ${firaCode}`}
    >
      <label className="w-32 bg-[#1B1B29] p-3 text-center text-gray100">
        {label}
      </label>

      <input
        disabled={disabled}
        type="number"
        placeholder={placeholder ?? "0.00"}
        className="flex-1 bg-gray40 disabled:opacity-60 p-3"
      />

      {children}
    </div>
  )
}

export default TextField
