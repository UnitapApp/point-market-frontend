"use client"

import Image from "next/image"
import Link from "next/link"
import { FaRegFileLines, FaDiscord, FaBars } from "react-icons/fa6"
import { GoArrowUpRight } from "react-icons/go"
import { SiGitbook } from "react-icons/si"
import { PiMediumLogoFill } from "react-icons/pi"
import { BsMenuButtonFill, BsTwitterX } from "react-icons/bs"
import { useState } from "react"

export function HeaderLink({ href, title }: { href: string; title: string }) {
  return <Link href={href}>{title}</Link>
}

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)

  return (
    <header className="h-20 border-b md:absolute static top-0 left-0 right-0 text-sm backdrop-blur-sm border-[#847D7D4D] px-3 lg:px-20 flex items-center gap-10">
      <Link href="/">
        <Image src="/imgs/logo.svg" alt="Symmio" width={170} height={40} />
      </Link>

      <div className="block ml-auto lg:hidden">
        <FaBars size={24} />
      </div>

      <div className="md:flex items-center hidden gap-5 text-body-text">
        <HeaderLink href="/symmio" title="Build on Symmio" />
        <HeaderLink href="/symmio" title="Hedger" />
        <HeaderLink href="/symmio" title="Protocol" />
        <HeaderLink href="/symmio" title="Points" />
      </div>

      <div className="ml-0 lg:ml-auto hidden lg:flex items-center gap-10">
        <Link href="#" className="flex gap-2 items-center">
          <span>White Paper</span>
          <FaRegFileLines />
        </Link>
        <Link href="#" className="flex text-primary gap-2 items-center">
          <span>Trade</span>
          <GoArrowUpRight size={20} className="-mb-1" />
        </Link>
      </div>

      <div className="ml-14 text-gray100 hidden lg:flex items-center gap-8">
        <Link href="#">
          <SiGitbook />
        </Link>
        <Link href="#">
          <PiMediumLogoFill size={20} />
        </Link>
        <Link href="#">
          <BsTwitterX size={18} />
        </Link>
        <Link href="#">
          <FaDiscord size={20} />
        </Link>
      </div>
    </header>
  )
}
