"use client"

import Image from "next/image"
import ConnectWalletSection from "./components/ConnectWalletSection"
import SeasonTableHeader from "./components/SeasonTableHeader"
import LeaderboardTable from "./components/LeaderboardTable"
import LearnMoreSection from "./components/LearnMoreSection"
import SeasonsSection from "./components/SeasonsSection"
import { useState } from "react"

export default function HomePage() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <div className="flex flex-wrap items-center px-1 lg:px-44 justify-between">
        <div>
          <p className="text-informary text-center">
            // Welcome to <strong className="text-white"> Season #2!</strong>
          </p>
          <h3 className="font-semibold mt-5 text-5xl">Symmio Points Program</h3>
        </div>
        <Image
          src="/imgs/main/donut.svg"
          alt="Donut"
          width="344"
          height="336"
        />
      </div>

      <ConnectWalletSection />
      <SeasonTableHeader search={search} setSearch={setSearch} />

      <LeaderboardTable search={search} setSearch={setSearch} />

      <LearnMoreSection />
      <SeasonsSection />
    </div>
  )
}
