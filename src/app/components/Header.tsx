"use client"

import Image from "next/image"
import Link from "next/link"
import { FaRegFileLines, FaDiscord, FaBars } from "react-icons/fa6"
import { GoArrowUpRight } from "react-icons/go"
import { SiGitbook } from "react-icons/si"
import { PiMediumLogoFill } from "react-icons/pi"
import { BsMenuButtonFill, BsTwitterX } from "react-icons/bs"
import { useState } from "react"
import { cn } from "@nextui-org/react"

export function HeaderLink({ href, title }: { href: string; title: string }) {
  return (
    <Link className="hover:text-white transition-colors" href={href}>
      {title}
    </Link>
  )
}

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)

  return (
    <>
      <header className="h-20 border-b md:absolute static top-0 left-0 right-0 text-sm backdrop-blur-sm border-[#847D7D4D] px-3 lg:px-20 flex items-center gap-10">
        <Link href="/">
          <Image src="/Logo white.svg" alt="Symmio" width={170} height={40} />
        </Link>

        <div className="block ml-auto lg:hidden">
          <FaBars onClick={() => setIsHeaderOpen(!isHeaderOpen)} size={24} />
        </div>

        <div className="ml-0 lg:ml-auto hidden lg:flex items-center gap-10">
          <HeaderLink href="https://docs.symmio.foundation/" title="Docs" />
          <HeaderLink
            href="https://app.symmio.foundation/staking"
            title="Staking"
          />
          <HeaderLink
            href="https://docs.symmio.foundation/token-related/tokenomics/symmio-points"
            title="Points"
          />
        </div>

        {/* <div className="ml-14 text-gray100 hidden lg:flex items-center gap-8">
          <Link target="_blank" href="https://docs.symmio.foundation/">
            <SiGitbook />
          </Link>
          <Link target="_blank" href="https://medium.com/symmio-publication">
            <PiMediumLogoFill size={20} />
          </Link>
          <Link target="_blank" href="https://twitter.com/symm_io">
            <BsTwitterX size={18} />
          </Link>
          <Link target="_blank" href="https://discord.gg/symmio">
            <FaDiscord size={20} />
          </Link>
        </div> */}
      </header>
      <div
        className={cn(
          "fixed bottom-0 flex items-center justify-center gap-8 flex-wrap transition-all left-0 right-0 top-20 bg-gray00/90 z-10",
          isHeaderOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <Link
          className="hover:text-white transition-colors"
          target="_blank"
          href="https://docs.symmio.foundation/"
        >
          <SiGitbook />
        </Link>
        <Link
          className="hover:text-white transition-colors"
          target="_blank"
          href="https://medium.com/symmio-publication"
        >
          <PiMediumLogoFill size={22} />
        </Link>
        <Link
          className="hover:text-white transition-colors"
          target="_blank"
          href="https://twitter.com/symm_io"
        >
          <BsTwitterX size={20} />
        </Link>
        <Link
          className="hover:text-white transition-colors"
          target="_blank"
          href="https://discord.gg/symmio"
        >
          <FaDiscord size={22} />
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/SYMM-IO/docs/blob/main/Whitepaper/SYMMIO_paper_0_8.pdf"
            target="_blank"
            className="flex gap-2 items-center hover:text-primary transition-colors"
          >
            <span>White Paper</span>
            <FaRegFileLines />
          </Link>
          <Link
            href="https://www.symm.io/frontends"
            className="flex text-primary gap-2 items-center"
          >
            <span>Trade</span>
            <GoArrowUpRight size={20} className="-mb-1" />
          </Link>
        </div>
      </div>
    </>
  )
}
