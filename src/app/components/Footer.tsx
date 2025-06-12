import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa6"
import { PiMediumLogoFill } from "react-icons/pi"
import { SiGitbook } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-[#0a0505] mt-20 border-t border-divider flex flex-col justify-center items-center overflow-hidden">
      <div className="border-x border-[#847d7d4d] grid grid-rows-auto grid-cols-1 md:grid-cols-2 auto-cols-fr justify-between items-stretch w-full max-w-[1440px] h-full relative">
        <div className="z-[1] flex-col flex relative w-full">
          <div className="flex-col flex min-h-16 pr-20 pt-24 items-stretch">
            <div className="flex text-white justify-between items-center">
              <a
                href="https://www.symmio.foundation/"
                className="navbar-logo-wrap-copy w-inline-block"
              >
                <div className="">
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673dfee63ebb2ee7f1ff3f07_Logo%20white.svg"
                    loading="lazy"
                    alt=""
                    className="logo-image-footer"
                  />
                </div>
              </a>
              <div className="ml-14 text-gray100 hidden lg:flex items-center gap-8">
                <Link target="_blank" href="https://docs.symmio.foundation/">
                  <SiGitbook />
                </Link>
                <Link
                  target="_blank"
                  href="https://medium.com/symmio-publication"
                >
                  <PiMediumLogoFill size={20} />
                </Link>
                <Link target="_blank" href="https://twitter.com/symm_io">
                  <BsTwitterX size={18} />
                </Link>
                <Link target="_blank" href="https://discord.gg/symmio">
                  <FaDiscord size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="z-[1] h-full"></div>
        </div>
        <div className="backdrop-blur-md border-l border-divider w-full flex flex-col py-20 relative">
          <div className="flex flex-col p-4">
            <div className="footer-link-block-v10-copy">
              <div className="text-stone-500 font-semibold">Learn more</div>
              <div className="flex mt-5 flex-wrap gap-12">
                <a
                  href="https://docs.symm.io/"
                  className="footer-link-block-v10 w-inline-block"
                >
                  <div className="">Protocol Introduction</div>
                </a>
                <a
                  href="https://github.com/SYMM-IO/docs/blob/main/Whitepaper/SYMMIO_paper_0_8.pdf"
                  target="_blank"
                  className="gap-2 brightness-[300%] hover:text-primary cursor-pointer no-underline transition-all duration-200 flex"
                >
                  <div className="">Whitepaper</div>
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673b709e9411d4683cbf921b_arrow-up.svg"
                    loading="lazy"
                    alt=""
                    className="w-3"
                  />
                </a>
                <a
                  href="https://docs.symmio.foundation/"
                  target="_blank"
                  className="gap-2 brightness-[300%] hover:text-primary cursor-pointer no-underline transition-all duration-200 flex"
                >
                  <div className="">Protocol Documentation</div>
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673b709e9411d4683cbf921b_arrow-up.svg"
                    loading="lazy"
                    alt=""
                    className="w-3"
                  />
                </a>
                <a
                  href="https://analytics.symm.io/"
                  target="_blank"
                  className="gap-2 brightness-[300%] hover:text-primary cursor-pointer no-underline transition-all duration-200 flex"
                >
                  <div className="">Analytics</div>
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673b709e9411d4683cbf921b_arrow-up.svg"
                    loading="lazy"
                    alt=""
                    className="w-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="footer-link-block-v10-copy">
              <div className=" text-stone-500 font-semibold">Take action</div>
              <div className="flex mt-5 flex-wrap gap-12">
                <a
                  href="https://docs.symm.io/building-on-symmio/builders-introduction"
                  target="_blank"
                  className="gap-2 brightness-[300%] hover:text-primary cursor-pointer no-underline transition-all duration-200 flex"
                >
                  <div className="">Build on Symmio</div>
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673b709e9411d4683cbf921b_arrow-up.svg"
                    loading="lazy"
                    alt=""
                    className="w-3"
                  />
                </a>
                <a
                  href="https://www.symm.io/frontends"
                  className="footer-link-block-v10 w-inline-block"
                >
                  <div className="">Start Trading</div>
                </a>
                <a
                  href="https://app.youform.com/forms/ljshiwqv"
                  target="_blank"
                  className="gap-2 brightness-[300%] hover:text-primary cursor-pointer no-underline transition-all duration-200 flex"
                >
                  <div className="">Contact Us</div>
                  <img
                    src="https://cdn.prod.website-files.com/673b709e9411d4683cbf9172/673b709e9411d4683cbf921b_arrow-up.svg"
                    loading="lazy"
                    alt=""
                    className="w-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-16 items-start justify-center px-5 md:px-60 w-full border-t border-divider">
        <div className="justify-start w-full flex mt-2 h-16">
          <div className="">© Symmio 2024</div>
        </div>
      </div>
    </footer>
  )
}
