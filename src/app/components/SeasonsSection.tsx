import { FC } from "react"
import { FaAngleDown } from "react-icons/fa"
import { cn } from "@nextui-org/react"

export default function SeasonsSection() {
  return (
    <div>
      <SeasonSection
        season="Season #1"
        text="Lorem ipsum is a dummy or placeholder text "
      />
      <SeasonSection
        isActive
        season="Season #2"
        text="Lorem ipsum is a dummy or placeholder text "
      />
    </div>
  )
}

const SeasonSection: FC<{
  text: string
  season: string
  isActive?: boolean
}> = ({ season, text, isActive }) => {
  return (
    <div
      className={cn(
        "flex border-t px-12 border-[#847D7D4D] border-l-4 border-l-transparent gap-2 items-center h-24",
        isActive ? "bg-[#847D7D33] border-l-primary" : "",
      )}
    >
      <strong className="text-white">{season}</strong>
      <p className="text-informary">{text}</p>
      <FaAngleDown
        className={cn(
          "ml-auto transition-all",
          isActive ? "rotate-180 text-primary" : "",
        )}
        size={20}
      />
    </div>
  )
}
