import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-3xl flex-col items-center justify-start lg:max-w-4xl">
        <div className="mb-10 font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
          <h1 className="shimmer-text mb-8 font-[family-name:var(--font-press-start)] text-2xl font-heading tracking-widest sm:text-4xl">
            About Me
          </h1>
          <p className="leading-relaxed">
            I&apos;m <span className="font-bold">Shane Williams</span>, a senior
            full-stack software engineer with over 5 years experience building
            production systems. I specialize in{' '}
            <span className="text-mainAccent dark:text-main">
              TypeScript, Go, React, and Node.js
            </span>
            , with a focus on scalable architectures and clean code.
          </p>
          <p className="mt-4 leading-relaxed">
            Currently at ResourceKraft, I&apos;m architecting IoT energy
            management platforms that process real-time data from thousands of
            devices. Previously at BioRender, I helped scale internal tooling
            for a platform used by millions of scientists worldwide.
          </p>
          <p className="mt-4 leading-relaxed">
            I care deeply about developer experience, maintainable code, and
            building systems that actually work. When I&apos;m not coding,
            you&apos;ll find me contributing to open source, tweaking my Neovim
            config, or working on side projects.
          </p>
        </div>

        <Skills />

        <div className="mt-8 rounded-base border-2 border-border bg-white p-4 text-center shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark">
          <p className="font-[family-name:var(--font-darker-grotesque)] text-sm sm:text-base">
            Outside of tech: chess, writing music, Olympic weightlifting, and
            family time.
          </p>
        </div>
      </div>
    </div>
  )
}
