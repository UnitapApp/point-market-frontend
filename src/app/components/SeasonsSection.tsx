"use client"

import { FC } from "react"
import { FaAngleDown } from "react-icons/fa"
import { cn, Tab, Tabs } from "@nextui-org/react"
import Image from "next/image"

export default function SeasonsSection() {
  return (
    <div>
      <SeasonSection
        season="Season #1"
        text="Lorem ipsum is a dummy or placeholder text "
      />
      <SeasonSection
        isActive
        season="Season #2"
        text="Lorem ipsum is a dummy or placeholder text "
      />

      <SeasonOneTabsSection />
    </div>
  )
}

const SeasonSection: FC<{
  text: string
  season: string
  isActive?: boolean
}> = ({ season, text, isActive }) => {
  return (
    <div
      className={cn(
        "flex border-t px-12 border-[#847D7D4D] border-l-4 border-l-transparent gap-2 items-center h-24",
        isActive ? "bg-[#847D7D33] border-l-primary" : "",
      )}
    >
      <strong className="text-white">{season}</strong>
      <p className="text-informary">{text}</p>
      <FaAngleDown
        className={cn(
          "ml-auto transition-all",
          isActive ? "rotate-180 text-primary" : "",
        )}
        size={20}
      />
    </div>
  )
}

const SeasonOneTabsSection = () => {
  return (
    <Tabs
      variant="underlined"
      className=""
      classNames={{
        tab: "py-7 border-r first:border-l border-divider-color",
        tabList: "gap-0 px-12 border-b border-divider",
        cursor: "w-full",
      }}
      fullWidth
    >
      <Tab title="OVERVIEW">
        <div className="relative flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 right-0" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/human-section.svg"
            alt="human vectors"
          />
          <p className="max-w-[600px] text-informary leading-loose">
            Starting on November 4, 2024, Season 2 will continue with daily
            rewards of <strong className="text-white">60,000</strong> points to
            drive growth and engagement across the Symmio ecosystem and will go
            on for 4 months or till{" "}
            <strong className="text-white">$150,000,000</strong> OI, whatever
            happens earlier, Season 2 will also continue to run after TGE
            happened. 
          </p>
        </div>
      </Tab>
      <Tab title="TOTAL POINTS AWARDED">
        <div className="relative flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 left-1/2" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/union-section.svg"
            alt="union"
          />
          <div>
            <h3 className="text-3xl text-informary">In total</h3>
            <h1 className="text-4xl mt-3 text-white"> 7,200,000</h1>
            <p className="text-3xl mt-3 text-informary">
              points will be awarded for{" "}
              <span className="text-primary">season 2</span>.
            </p>
          </div>
        </div>
      </Tab>
      <Tab title="HOW DO I EARN POINTS?">
        <div className="relative flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 right-1/2" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/wireframe-section.svg"
            alt="wireframe vectors"
          />
          <p className="max-w-[600px] text-informary leading-loose">
            <p>
              In Season 2, points will be awarded for activity across the Symmio
              ecosystem such as:{" "}
            </p>
            <p>Positive uPnL during trading competitions</p>
            <p>
              Holding ecosystem tokens such as{" "}
              <strong className="text-white">$PEAR</strong> or{" "}
              <strong className="text-white">$INTX</strong>
            </p>
            <p>Generating trading volume across different Frontends</p>
            <p>
              Engaging with Symmio on Twitter, Discord, and other online
              communities
            </p>
            <p>A complete detailed list can be found here.</p>
          </p>
        </div>
      </Tab>
      <Tab title="DO POINTS = $SYMM?">
        <div className="relative flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 left-1/2 -translate-x-1/2" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/network-section.svg"
            alt="network vectors"
          />
          <p className="max-w-[600px] text-informary leading-loose">
            To maintain the integrity of the Symmio Points campaign, we will not
            disclose the exact calculation or distribution methods for points.
            This intentional vagueness is designed to prevent gaming of the
            program, ensuring that points reflect genuine engagement rather than
            exploitative behavior
          </p>
        </div>
      </Tab>
    </Tabs>
  )
}

export function Backlight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-96 h-96 blur-[50px] rounded-full bg-[#51C3ED2E] pointer-events-none",
        className,
      )}
    ></div>
  )
}
