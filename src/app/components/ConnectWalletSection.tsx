import { FaAngleDown } from "react-icons/fa6"
import { LuCrown } from "react-icons/lu"

export default function ConnectWalletSection() {
  return (
    <section className="bg-[#847D7D1C] grid grid-cols-4 items-center px-14 -mt-14 backdrop-blur-sm border-t border-b border-divider-color h-40">
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

const WalletCard = () => {
  return (
    <div className="flex border-l border-divider-color px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">WALLET</p>
        <h3 className="text-2xl mt-2 font-[500]">0xc876...581e</h3>
      </div>
      <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div>
    </div>
  )
}

const PointsCard = () => {
  return (
    <div className="flex border-l border-divider-color px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">POINTS</p>
        <h3 className="text-2xl mt-2 font-[500]">312,780</h3>
      </div>
      <div className="ml-8"></div>
      {/* <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div> */}
    </div>
  )
}

const RankingCard = () => {
  return (
    <div className="flex border-l border-divider-color border-r px-12 h-full items-center gap-4">
      <div>
        <p className="text-informary">RANK</p>
        <h3 className="text-2xl mt-2 font-[500]">1578</h3>
      </div>
      <div className="ml-8"></div>
      {/* <div className="w-8 h-8 ml-10 bg-[#ffffff12] rounded-full grid place-items-center">
        <FaAngleDown />
      </div> */}
    </div>
  )
}
