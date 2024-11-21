import Image from "next/image"

export default function LearnMoreSection() {
  return (
    <div className="h-[512px] flex flex-col justify-center items-center bg-[url('/imgs/main/learn-more-bg.svg')]">
      <Image alt="Symmio" width={30} height={30} src="/imgs/symmio.svg" />

      <h3 className="text-4xl font-bold mt-10">
        Learn more about Symmio <span className="text-primary">Points </span>
      </h3>

      <div className="text-informary mt-10">
        Symmetry Labs A.G. does not operate its own Frontend to ensure
        censorship resistance of the underlying bilateral & intent technology.
      </div>
    </div>
  )
}
