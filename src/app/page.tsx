import Image from "next/image"
import ConnectWalletSection from "./components/ConnectWalletSection"
import SeasonTableHeader from "./components/SeasonTableHeader"

export default function HomePage() {
  return (
    <div>
      <div className="flex items-center px-32 justify-between">
        <div>
          <p className="text-informary">
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
      <SeasonTableHeader />
    </div>
  )
}
