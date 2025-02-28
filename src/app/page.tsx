import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { AtSign, Mail, RadioTower, TicketCheck, UserRound } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/rankdev.svg'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="RankDev" width={108.5} height={30} />

          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left ">
            <span className="text-primary">High Level Developer</span>
            Dome of the best 2k25
          </h1>
        </div>

        <div className="flex gap-5 items-stretch flex-col md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between ">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                About Event
              </h2>
              <span className="text-danger font-semibold text-xs flex items-center gap-1">
                LIVE <RadioTower className="size-5 text-danger" />
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              An event made by and for the best developers passionate about
              create innovative solutions and share knowledge. Let's go Dive
              into the latest trends in development software, systems
              architecture and emerging technologies, with lectures, workshops
              and hackathons.
              <br />
              <br />
              March 15th to 17th | From 6pm to 9pm | Online & Free{''}
            </p>
          </div>
          <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Registration
            </h2>
            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <UserRound className="size-5 text-[#b6ffa0]" />
                </InputIcon>
                <InputField type="text" placeholder="Full name" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail className="size-5 text-[#31a2ff]" />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <AtSign className="size-5 text-secondary" />
                </InputIcon>
                <InputField type="url" placeholder="Social Media" />
              </InputRoot>
            </div>

            <Button type="submit">
              Confirm
              <TicketCheck />
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
