import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 font-[family-name:var(--font-press-start)] text-2xl font-heading text-blue-500 dark:text-cyan-400 sm:text-4xl">
        About
      </h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Terminal fanatic that loves coding, solving problems, and making life
          easier for people. I’m all about smart, scalable solutions and always
          leveling up through learning. To me, teamwork and communication matter
          just as much as the code itself.
        </p>
      </div>

      <Skills />
    </div>
  )
}
