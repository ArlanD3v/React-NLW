import Image from 'next/image'
import logo from '../assets/rankdev.svg'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="h-dvh flex-items-center justify-center gap-16 flex-col md:flex-row">
        <div className="flex flex-col gap-10 w-full max-w-[550px]">
          <Image src={logo} alt="RankDev" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span>High Level Developer</span>
            Dome of the best 2k25
          </h1>
        </div>
      </div>
    </main>
  )
}
// pause 1:18
