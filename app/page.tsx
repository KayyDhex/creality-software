import PageLoader from '@/components/layout/PageLoader'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import Differentiators from '@/components/sections/Differentiators'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import BlogPreview from '@/components/blog/BlogPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Differentiators />
        <Process />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
