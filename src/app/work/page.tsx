import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Testimonials from '@/components/sections/testimonials'

export default function Work() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <Experience />
        <Projects />
        <Testimonials />
      </div>
    </div>
  )
}
