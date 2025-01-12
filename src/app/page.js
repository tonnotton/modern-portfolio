import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3b82f6,transparent)] opacity-30 animate-pulse" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />

        {/* Main Content */}
        <div className="row-start-2 w-full px-8 sm:px-20 space-y-32 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}