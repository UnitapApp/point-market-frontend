import Image from "next/image"
import Link from "next/link"

const CodePage = () => {
  return (
    <div className="flex w-full mt-20  items-center justify-center">
      <div className="background-dashboard relative flex bg-[url('/assets/images/hackathon/bg-cover.svg')] bg-contain bg-no-repeat min-h-[478px] w-full max-w-[572px] flex-col items-center rounded-[20px] border-2 border-gray30 px-5 pt-[60px] md:px-0 ">
        <div className={`text-[24px] mb-9 font-bold gradient-text-hackaThon`}>
          Hackathon Source Codes
        </div>
        <article className="m-2">
          <h3>
            Backend
            <small className="ml-2">(EigenLayer AVS)</small>
          </h3>

          <Link
            className="flex mt-5 items-center gap-4"
            target="_blank"
            href="https://github.com/UnitapApp/point-market-backend "
          >
            <Image
              src="/assets/images/footer/github.svg"
              alt="github"
              width={50}
              height={50}
            />
            https://github.com/UnitapApp/point-market-backend
          </Link>
        </article>
        <article className="mt-10">
          <h3>Contracts</h3>

          <Link
            className="flex mt-5 items-center gap-4"
            target="_blank"
            href="https://github.com/UnitapApp/point-market-contracts"
          >
            <Image
              src="/assets/images/footer/github.svg"
              alt="github"
              width={50}
              height={50}
            />
            https://github.com/UnitapApp/point-market-contracts
          </Link>
        </article>
        <article className="m-2 mb-10 mt-10">
          <h3>Frontend</h3>

          <Link
            className="flex mt-5 items-center gap-4"
            target="_blank"
            href="https://github.com/UnitapApp/point-market-frontend"
          >
            <Image
              src="/assets/images/footer/github.svg"
              alt="github"
              width={50}
              height={50}
            />
            https://github.com/UnitapApp/point-market-frontend
          </Link>
        </article>
      </div>
    </div>
  )
}

export default CodePage
