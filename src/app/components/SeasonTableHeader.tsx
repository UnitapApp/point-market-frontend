"use client"

import { FC } from "react"
import { cn, Select, SelectItem } from "@nextui-org/react"
import { BsSearch } from "react-icons/bs"

export default function SeasonTableHeader({
  search,
  setSearch,
  activeSeason,
  setActiveSeason,
  daysFilter,
  setDaysFilter,
}: {
  search: string
  setSearch: (value: string) => void
  activeSeason: number
  setActiveSeason: (season: number) => void
  daysFilter: number
  setDaysFilter: (value: number) => void
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-2 items-center border-divider-color px-0 lg:px-14 h-auto lg:h-20">
      <div className="flex items-center mb-2 h-full gap-2">
        <SeasonTab
          seasonNumber={1}
          isActive={activeSeason === 1}
          onClick={() => setActiveSeason(1)}
        />
        <SeasonTab
          seasonNumber={2}
          isActive={activeSeason === 2}
          onClick={() => setActiveSeason(2)}
        />
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <DaysFilter daysFilter={daysFilter} setDaysFilter={setDaysFilter} />
    </div>
  )
}

const SearchBar = ({
  search,
  setSearch,
}: {
  search: string
  setSearch: (value: string) => void
}) => {
  return (
    <div className="relative w-full border-l border-divider-color h-full">
      <BsSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none w-full p-5 pl-14 bg-transparent h-full border-none"
        type="text"
        placeholder="Search By Wallet Address"
      />
    </div>
  )
}

const DaysFilter: FC<{
  daysFilter: number
  setDaysFilter: (value: number) => void
}> = ({ daysFilter, setDaysFilter }) => {
  return (
    <div className="border-l border-r px-4 py-2 md:py-0 w-full justify-between flex items-center gap-4 border-divider-color h-full">
      <span className="text-informary">Filter By</span>

      <Select
        variant="bordered"
        className="w-32"
        selectedKeys={[daysFilter.toString()]}
        onSelectionChange={(keys) =>
          setDaysFilter(parseInt([...keys][0].toString()))
        }
      >
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

const SeasonTab: FC<{
  seasonNumber: number
  isActive?: boolean
  onClick: () => void
}> = ({ seasonNumber, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex border-l border-divider-color px-16 h-full items-center gap-4",
        isActive ? "text-white border-b-3" : "text-body-text",
      )}
    >
      Season #{seasonNumber}
    </button>
  )
}
