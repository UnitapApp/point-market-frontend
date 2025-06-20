"use client"

import { FC } from "react"
import { cn } from "@nextui-org/react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/shadcn/components/ui/accordion/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/shadcn/components/ui/tabs"

export default function SeasonsSection() {
  return (
    <div>
      <Accordion type="single">
        <AccordionItem value="1" aria-label="Accordion 1">
          <AccordionTrigger>
            <SeasonSection
              season="Season 1"
              text=" June 3, 2024 - November 4, 2024"
            />
          </AccordionTrigger>
          <AccordionContent className="bg-transparent">
            <SeasonOneTabsSection />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="2"
          aria-label="Accordion 2"
          className="border-none"
        >
          <AccordionTrigger>
            <SeasonSection
              season="Season 2"
              text="November 4 - September 16 2025"
            />
          </AccordionTrigger>
          <AccordionContent className="bg-transparent">
            <SeasonTwoTabsSection />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
        "flex border-none px-12 border-[#847D7D4D] border-l-4 border-l-transparent gap-2 items-center h-24",
        isActive ? "bg-[#847D7D33] border-l-primary" : "",
      )}
    >
      <strong className="text-white">{season}</strong>
      <p className="text-informary">{text}</p>
      {/* <FaAngleDown
        className={cn(
          "ml-auto transition-all",
          isActive ? "rotate-180 text-primary" : "",
        )}
        size={20}
      /> */}
    </div>
  )
}

const SeasonTwoTabsSection = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="w-full overflow-auto">
        <TabsList className="w-full min-w-max md:grid md:grid-cols-4">
          <TabsTrigger className="flex-1 px-4" value="overview">
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger className="flex-1 px-4" value="total">
            TOTAL POINTS AWARDED
          </TabsTrigger>
          <TabsTrigger className="flex-1 px-4" value="earn">
            HOW DO I EARN POINTS?
          </TabsTrigger>
          <TabsTrigger className="flex-1 px-4" value="points">
            DO POINTS = $SYMM?
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="overview">
        <div className="relative flex flex-col md:flex-row gap-8 items-center justify-evenly min-h-[512px] p-4">
          <Backlight className="absolute bottom-0 right-0" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/human-section.svg"
            alt="human vectors"
            className="w-full max-w-[279px] h-auto"
          />
          <p className="max-w-[600px] text-informary leading-loose">
            Starting on November 4, 2024, Season 2 will continue to drive growth
            and engagement across the Symmio ecosystem and will run for{" "}
            <strong className="text-white">11 months</strong> or until
            <strong className="text-white">$150,000,000</strong> in open
            interest is reached—whichever comes first.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="total">
        <div className="relative flex-wrap gap-y-5 flex items-center justify-evenly h-[512]">
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
      </TabsContent>
      <TabsContent value="earn">
        <div className="relative flex-wrap gap-y-5 flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 right-1/2" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/wireframe-section.svg"
            alt="wireframe vectors"
          />
          <div className="max-w-[600px] text-informary leading-loose">
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
            <p>
              A complete detailed list can be found{" "}
              <a
                href="https://docs.symmio.foundation/token-related/tokenomics/symmio-points/season-2"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="points">
        <div className="relative flex-wrap gap-y-5 flex items-center justify-evenly h-[512]">
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
      </TabsContent>
    </Tabs>
  )
}

const SeasonOneTabsSection = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="w-full overflow-auto">
        <TabsList className="w-full min-w-max md:grid md:grid-cols-2">
          <TabsTrigger className="flex-1 px-4" value="overview">
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger className="flex-1 px-4" value="total">
            TOTAL POINTS AWARDED
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="overview">
        <div className="relative flex flex-col md:flex-row gap-8 items-center justify-evenly min-h-[512px] p-4">
          <Backlight className="absolute bottom-0 right-0" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/human-section.svg"
            alt="human vectors"
            className="w-full max-w-[279px] h-auto"
          />
          <p className="max-w-[600px] text-informary leading-loose">
            The Season 1 points program was quietly launched on June 3, 2024,
            with an initial announcement on Discord,{" "}
            <a
              href="https://discord.com/channels/1106198408202563665/1108401306672046170/1247199457070813355"
              className="text-blue-500"
              target="_blank"
            >
              linked here
            </a>
            . Season 1 ended on November 4, 2024, with the launch of Symmio’s
            Season 2 Points Program.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="total">
        <div className="relative flex-wrap gap-y-5 flex items-center justify-evenly h-[512]">
          <Backlight className="absolute bottom-0 left-1/2" />

          <Image
            width="279"
            height="351"
            src="/imgs/main/union-section.svg"
            alt="union"
          />
          <div>
            <h3 className="text-3xl text-informary">In total</h3>
            <h1 className="text-4xl mt-3 text-white">9,240,000</h1>
            <p className="text-3xl mt-3 text-informary">
              points were awarded for{" "}
              <span className="text-primary">Season 1</span>.
            </p>
          </div>
        </div>
      </TabsContent>
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
