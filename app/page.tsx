import PageLoader from '@/components/layout/PageLoader'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import TechMarquee from '@/components/sections/TechMarquee'
import Differentiators from '@/components/sections/Differentiators'
import Process from '@/components/sections/Process'
import Team from '@/components/sections/Team'
import CtaFinal from '@/components/sections/CtaFinal'

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <TechMarquee />
        <Differentiators />
        <Process />
        <Team />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
