"use client"

import { useGlobalContext } from "@/context/globalProvider"
import { shortenAddress } from "@/utils"
import { useWalletAccount, useWalletConnection } from "@/utils/wallet"
import { FaAngleDown } from "react-icons/fa6"
import { LuCrown } from "react-icons/lu"
import data from "@/components/points.json"
import { Address, isAddressEqual } from "viem"

export default function ConnectWalletSection() {
  const { address } = useWalletAccount()

  if (!address) {
    return (
      <section className="bg-[#847D7D1C] relative grid grid-cols-4 items-center px-14 -mt-14 backdrop-blur-sm border-t border-b border-divider-color h-40">
        <div className="flex border-l border-divider-color px-12 h-full items-center gap-4">
          <LuCrown size={30} />
          <h3 className="text-3xl font-[500]">Leaderboard</h3>
        </div>

        <ConnectWallet />
      </section>
    )
  }

  return (
    <section className="bg-[#847D7D1C] relative grid grid-cols-4 items-center px-14 -mt-14 backdrop-blur-sm border-t border-b border-divider-color h-40">
      <div className="flex border-l border-divider-color px-12 h-full items-center gap-4">
        <LuCrown size={30} />
        <h3 className="text-3xl font-[500]">Leaderboard</h3>
      </div>
      <WalletCard />
      <PointsCard />
      <RankingCard />
    </section>
  )
}

const ConnectWallet = () => {
  const { setIsWalletPromptOpen } = useGlobalContext()

  return (
    <div className="flex col-span-3 ml-auto border-divider-color border-r px-12 h-full items-center gap-4">
      <button
        onClick={() => setIsWalletPromptOpen(true)}
        className="py-6 font-semibold text-base text-black bg-primary px-14"
      >
        Connect Wallet
      </button>

      <div className="ml-8"></div>
    </div>
  )
}

const WalletCard = () => {
  const { address } = useWalletAccount()

  return (
    <div className="flex border-l border-divider-color px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">WALLET</p>
        <h3 className="text-2xl mt-2 font-[500]">{shortenAddress(address)}</h3>
      </div>
      <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div>
    </div>
  )
}

const PointsCard = () => {
  const { address } = useWalletAccount()

  const userPoints = data.find((item) =>
    isAddressEqual(address!, item.user as Address),
  )

  return (
    <div className="flex border-l border-divider-color relative px-12 h-full items-center gap-4">
      <div className="bg-no-repeat bg-[url('/imgs/main/section-bg.svg')] absolute -top-9 left-0 right-0 -translate-x-10 h-60"></div>{" "}
      <div>
        <p className="text-informary">POINTS</p>
        <h3 className="text-2xl mt-2 font-[500]">{userPoints?.Point ?? "-"}</h3>
      </div>
      <div className="ml-8"></div>
      {/* <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div> */}
    </div>
  )
}

const RankingCard = () => {
  const { address } = useWalletAccount()

  const user = data
    .sort((a, b) => a.Point - b.Point)
    .map((item, key) => ({ ...item, rank: key + 1, id: key }))
    .find((item) => isAddressEqual(address!, item.user as Address))

  return (
    <div className="flex border-l border-divider-color border-r px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">RANK</p>
        <h3 className="text-2xl mt-2 font-[500]">{user?.rank ?? "-"}</h3>
      </div>
      <div className="ml-8"></div>
      {/* <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div> */}
    </div>
  )
}
