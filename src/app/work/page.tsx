import Experience from '@/components/sections/experience'
import Testimonials from '@/components/sections/testimonials'

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 font-[family-name:var(--font-press-start)] text-2xl font-heading sm:text-4xl">
        Work
      </h1>

      <Experience />
      <Testimonials />
    </div>
  )
}
