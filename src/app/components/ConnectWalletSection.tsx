"use client"

import { useGlobalContext } from "@/context/globalProvider"
import { shortenAddress } from "@/utils"
import { useWalletAccount } from "@/utils/wallet"
import { FaAngleDown } from "react-icons/fa6"
import { LuCrown, LuLogOut } from "react-icons/lu"
import { Address, isAddressEqual } from "viem"
import { FC, useState } from "react"
import { useDisconnect } from "wagmi"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"

export type ActiveDataProps = { activeData: any[] }

export default function ConnectWalletSection({ activeData }: ActiveDataProps) {
  const { address } = useWalletAccount()

  if (!address) {
    return (
      <section className="bg-[#847D7D1C] p-3 md:p-0 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-0 md:px-14 -mt-14 backdrop-blur-sm border-t border-b border-divider-color h-auto lg:h-40">
        <div className="flex border-l justify-center border-divider-color px-12 h-full items-center gap-4">
          <LuCrown size={30} />
          <h3 className="text-3xl font-[500]">Leaderboard</h3>
        </div>

        <ConnectWallet />
      </section>
    )
  }

  return (
    <section className="bg-[#847D7D1C] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center px-0 md:px-14 -mt-14 backdrop-blur-sm border-t border-b border-divider-color h-auto lg:h-40">
      <div className="flex justify-center border-l border-divider-color px-12 h-full items-center gap-4">
        <LuCrown size={30} />
        <h3 className="text-3xl font-[500]">Leaderboard</h3>
      </div>
      <WalletCard />
      <PointsCard activeData={activeData} />
      <RankingCard activeData={activeData} />
    </section>
  )
}

const ConnectWallet = () => {
  const { setIsWalletPromptOpen } = useGlobalContext()

  return (
    <div className="flex relative mt-5 md:mt-0 justify-center col-span-3 ml-auto border-divider-color border-r px-12 h-full items-center gap-4">
      <div className="bg-no-repeat pointer-events-none -z-10 bg-[url('/imgs/main/section-bg.svg')] absolute -top-9 left-0 right-0 -translate-x-10 h-60"></div>{" "}
      <button
        onClick={() => {
          setIsWalletPromptOpen(true)
        }}
        className="py-6 flex-1 w-full md:w-auto font-semibold text-base text-black bg-primary px-14"
      >
        Connect Wallet
      </button>
      <div className="md:ml-8"></div>
    </div>
  )
}

const WalletCard = () => {
  const { address } = useWalletAccount()
  const { disconnect } = useDisconnect()

  return (
    <Popover
      showArrow={false}
      backdrop="opaque"
      classNames={{
        base: ["before:bg-default-200"],
        content: [
          "border border-default-200",
          "bg-gradient-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
      placement="bottom"
    >
      <PopoverTrigger className="cursor-pointer">
        <div className="relative flex border-l justify-center border-divider-color px-12 h-full items-center gap-4">
          <div>
            <p className="text-informary">WALLET</p>
            <h3 className="text-2xl mt-2 font-[500]">
              {shortenAddress(address)}
            </h3>
          </div>
          <div className="ml-10 w-8 h-8 grid place-items-center cursor-pointer">
            <FaAngleDown className={`transition-transform `} />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2">
            <div className="w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
              <button
                onClick={() => {
                  disconnect()
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-white hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                <LuLogOut className="w-5 h-5 flex-shrink-0" />
                <span>Disconnect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

const PointsCard: FC<ActiveDataProps> = ({ activeData }) => {
  const { address } = useWalletAccount()

  const userPoints = activeData.find((item) =>
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

const RankingCard: FC<ActiveDataProps> = ({ activeData }) => {
  const { address } = useWalletAccount()

  const user = activeData
    .sort((a, b) => b.Point - a.Point)
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
