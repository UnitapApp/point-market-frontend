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

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [activeSeason, setActiveSeason] = useState(1)
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/points")

      setData(data.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap items-center px-1 lg:px-44 justify-center md:justify-between">
        <div className="lg:w-auto text-center md:text-left w-full">
          <p className="text-informary">
            {"// Welcome to "}
            <strong className="text-white"> Season #2!</strong>
          </p>
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

      <ConnectWalletSection />

      <SeasonTableHeader
        search={search}
        setSearch={setSearch}
        activeSeason={activeSeason}
        setActiveSeason={setActiveSeason}
      />
      {activeSeason === 2 ? (
        <LeaderboardTable
          key={2}
          data={data}
          search={search}
          setSearch={setSearch}
        />
      ) : (
        <LeaderboardTable
          key={1}
          data={pointsData}
          search={search}
          setSearch={setSearch}
        />
      )}
      <LearnMoreSection />
      <SeasonsSection />
    </div>
  )
}
