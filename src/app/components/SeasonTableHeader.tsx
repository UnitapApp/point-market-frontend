"use client"

import { FC } from "react"
import { cn, Select, SelectItem } from "@nextui-org/react"
import { BsSearch } from "react-icons/bs"

export default function SeasonTableHeader() {
  return (
    <div className="flex items-center border-divider-color px-14 h-20">
      <SeasonTab seasonNumber={1} />
      <SeasonTab seasonNumber={2} />
      <SearchBar />
      <DaysFilter />
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className="relative flex-1 border-l border-divider-color h-full">
      <BsSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        className="outline-none w-full p-5 pl-14 bg-transparent h-full border-none"
        type="text"
        placeholder="Search By Wallet Address"
      />
    </div>
  )
}

const DaysFilter = () => {
  return (
    <div className="border-l border-r px-4 flex items-center gap-4 border-divider-color h-full">
      <span className="text-informary">Filter By</span>

      <Select variant="bordered" className="w-32" selectedKeys={["30"]}>
        <SelectItem key={30} value={30}>
          30 Days
        </SelectItem>
        <SelectItem key={60} value={30}>
          60 Days
        </SelectItem>
        <SelectItem key={90} value={30}>
          90 Days
        </SelectItem>
      </Select>
    </div>
  )
}

const SeasonTab: FC<{ seasonNumber: number; isActive?: boolean }> = ({
  seasonNumber,
  isActive,
}) => {
  return (
    <button
      className={cn(
        "flex border-l border-divider-color px-16 h-full items-center gap-4",
        isActive ? "text-white" : "text-body-text",
      )}
    >
      Season #{seasonNumber}
    </button>
  )
}
