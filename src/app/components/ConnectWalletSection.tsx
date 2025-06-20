"use client"

import { useGlobalContext } from "@/context/globalProvider"
import { shortenAddress } from "@/utils"
import { useWalletAccount } from "@/utils/wallet"
import { FaAngleDown } from "react-icons/fa6"
import { LuCrown, LuLogOut } from "react-icons/lu"
import { Address, isAddressEqual } from "viem"
import { FC, useState, useMemo, memo, useEffect } from "react"
import { useDisconnect } from "wagmi"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/shadcn/components/ui/popover"

export type ActiveDataProps = { activeData: any[] }

export function ConnectWalletSection({ activeData }: ActiveDataProps) {
  const { address } = useWalletAccount()

  const [userData, setUserdata] = useState(null as null | any)

  useEffect(() => {
    if (!address) {
      setUserdata(null)
      return
    }

    setTimeout(() => {
      const sortedData = activeData
        .sort((a, b) => b.Point - a.Point)
        .map((item, key) => ({ ...item, rank: key + 1, id: item.id ?? key }))

      setUserdata(
        sortedData.find((item) =>
          isAddressEqual(address!, item.user as Address),
        ),
      )
    })
  }, [activeData, address])

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
      <PointsCard userData={userData} />
      <RankingCard userData={userData} />
    </section>
  )
}

const ConnectWallet = () => {
  const { setIsWalletPromptOpen } = useGlobalContext()

  return (
    <div className="flex relative mx-auto md:mr-0 mt-5 md:mt-0 justify-center col-span-3 ml-auto border-divider-color border-r px-12 h-full items-center gap-4">
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
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative flex border-l justify-center border-divider-color px-12 h-full items-center gap-4 cursor-pointer">
          <div>
            <p className="text-informary">WALLET</p>
            <h3 className="text-2xl mt-2 font-[500]">
              {shortenAddress(address)}
            </h3>
          </div>
          <div className="ml-10 w-8 h-8 grid place-items-center cursor-pointer">
            <FaAngleDown className="transition-transform" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <button
          onClick={() => {
            disconnect()
          }}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-white hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
        >
          <LuLogOut className="w-5 h-5 flex-shrink-0" />
          <span>Disconnect Wallet</span>
        </button>
      </PopoverContent>
    </Popover>
  )
}

const PointsCard: FC<{ userData: any | null }> = ({ userData }) => {
  return (
    <div className="flex border-l border-divider-color relative px-12 h-full items-center gap-4">
      <div className="bg-no-repeat bg-[url('/imgs/main/section-bg.svg')] absolute -top-9 left-0 right-0 -translate-x-10 h-60"></div>{" "}
      <div>
        <p className="text-informary">POINTS</p>
        <h3 className="text-2xl mt-2 font-[500]">{userData?.Point ?? "-"}</h3>
      </div>
      <div className="ml-8"></div>
    </div>
  )
}

const RankingCard: FC<{ userData: any | null }> = ({ userData }) => {
  return (
    <div className="flex border-l border-divider-color border-r px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">RANK</p>
        <h3 className="text-2xl mt-2 font-[500]">{userData?.rank ?? "-"}</h3>
      </div>
      <div className="ml-8"></div>
    </div>
  )
}

const ConnectWalletSectionMemo = memo(ConnectWalletSection)

export default ConnectWalletSectionMemo
