import Image from "next/image"

export default function LearnMoreSection() {
  return (
    <div className="h-[512px] flex flex-col justify-center items-center bg-[url('/imgs/main/learn-more-bg.svg')]">
      <Image alt="Symmio" width={30} height={30} src="/imgs/symmio.svg" />

      <h3 className="text-4xl font-bold mt-10">
        Learn more about Symmio <span className="text-primary">Points </span>
      </h3>

      <div className="text-informary mt-10">
        The Symmio Points Program was stealth-launched on June 3, 2024, with a
        subtle announcement on Discord - designed to reward loyal users for
        their meaningful contributions.
      </div>
      <div className="text-informary mt-10">
        Points reflect each user{"'"}s ongoing activity and commitment across
        the Symmio ecosystem, serving as a transparent record of genuine
        engagement throughout the campaign.
      </div>
    </div>
  )
}
