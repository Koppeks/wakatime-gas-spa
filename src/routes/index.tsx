import { Features } from '#/components/Features'
import GridBackground from '#/components/GridBackground'
import Hero from '#/components/Hero'
import { HowItWorks } from '#/components/HowItWork'
import { Support } from '#/components/Support'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap">
      <GridBackground />
      <Hero />
      <HowItWorks />
      <Features />
      <Support />
    </main>
  )
}
