import Badge from './ui/Badge'
import { Button } from './ui/Button'
import { SiGooglechrome } from '@icons-pack/react-simple-icons'
import { ArrowDown } from 'lucide-react'
import WakaTimePopup from './PopupShowcase'

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between w-full h-[94dvh] relative px-6 md:px-20 py-12 md:py-0 gap-8"
    >
      <section className="relative overflow-hidden flex flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
        <Badge>Open Source Wakatime Browser Extension</Badge>
        <h1 className="display-title text-center mb-5 max-w-2xl text-4xl font-bold leading-[1.02] sm:text-7xl">
          Wakatime for <br />
          <span className="font-semibold tracking-tight text-cycle">
            Apps Script
          </span>
        </h1>
        <p className="max-w-xl text-center sm:text-lg">
          Track your coding activity in the Google Apps Script editor. Set your
          machine name, paste your API key, and start sending heartbeats to your
          WakaTime dashboard instantly.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Button variant="default">
            <SiGooglechrome className="size-4" />
            Get Started
          </Button>
          <Button href="/#how-it-works" variant="secondaryglow">
            See how it works
            <ArrowDown className="size-4" />
          </Button>
        </div>
      </section>
      <WakaTimePopup />
    </div>
  )
}
