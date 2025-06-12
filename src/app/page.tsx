"use client"

import Image from "next/image"
import ConnectWalletSection from "./components/ConnectWalletSection"
import SeasonTableHeader from "./components/SeasonTableHeader"
import LeaderboardTable from "./components/LeaderboardTable"
import LearnMoreSection from "./components/LearnMoreSection"
import SeasonsSection from "./components/SeasonsSection"
import { useEffect, useState } from "react"
import pointsData from "@/components/points.json"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [activeSeason, setActiveSeason] = useState(1)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["points"],
    queryFn: () => axios.get("/api/points").then((res) => res.data),
  })

  const [daysFilter, setDaysFilter] = useState(90)

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap items-center px-1 lg:px-44 justify-center md:justify-between">
        <div className="lg:w-auto text-center md:text-left w-full">
          <h3 className="font-semibold mt-5 mb-2 text-2xl lg:text-5xl">
            Symmio Points Program
          </h3>
        </div>
        <Image
          src="/imgs/main/donut.svg"
          alt="Donut"
          width="344"
          height="336"
        />
      </div>

      <ConnectWalletSection
        activeData={activeSeason === 2 ? (pointsData as any[]) : (data ?? [])}
      />

      <SeasonTableHeader
        daysFilter={daysFilter}
        setDaysFilter={setDaysFilter}
        search={search}
        setSearch={setSearch}
        activeSeason={activeSeason}
        setActiveSeason={setActiveSeason}
      />
      {activeSeason === 2 ? (
        <LeaderboardTable
          key={2}
          data={pointsData as any[]}
          search={search}
          setSearch={setSearch}
          daysToFilter={daysFilter}
          season={2}
        />
      ) : (
        <LeaderboardTable
          key={(data ?? [])?.length}
          data={data ?? []}
          search={search}
          season={1}
          setSearch={setSearch}
          daysToFilter={daysFilter}
          loading={isLoading}
        />
      )}
      <LearnMoreSection />
      <div className="container mx-auto">
        <SeasonsSection />
      </div>
    </div>
  )
}
