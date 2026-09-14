import Links from '@/components/links'
import Link from 'next/link'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Testimonials from '@/components/sections/testimonials'
import ContactLinks from '@/components/contact-links'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

const sectionHeading =
  'mb-8 text-2xl font-bold text-mainAccent dark:text-main sm:text-3xl'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Hero */}
      <section
        id="top"
        className="flex w-full scroll-mt-24 flex-col items-center justify-center px-4 py-16 sm:py-20"
      >
        <Link
          href="#contact"
          className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-base border-2 border-border bg-white px-4 py-2 text-sm shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark dark:hover:shadow-none"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <span className="font-semibold">Open to new opportunities</span>
        </Link>

        <h1 className="py-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Shane Williams
        </h1>

        <p className="mt-2 text-lg font-semibold text-mainAccent dark:text-main sm:text-xl">
          Lead Software Engineer
        </p>

        <div className="mt-8 max-w-xl text-center text-base font-[family-name:var(--font-darker-grotesque)] font-semibold tracking-wide sm:text-xl">
          <p className="text-mainAccent dark:text-main">
            Building scalable systems from IoT platforms and web/mobile apps
          </p>
          <p className="mt-2">7+ years delivering enterprise production systems</p>
          <p className="mt-4 text-sm opacity-80">Based in Ireland / Remote</p>
        </div>

        <Links />
      </section>

      {/* About */}
      <section
        id="about"
        className="w-full scroll-mt-24 border-t-2 border-border px-4 py-16 dark:border-darkBorder sm:py-24"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <div className="mb-10 w-full font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
            <h2 className={sectionHeading}>About Me</h2>
            <p className="leading-relaxed">
              I&apos;m <span className="font-bold">Shane Williams</span>, a lead
              software engineer with over 7 years experience building
              production systems. I specialize in{' '}
              <span className="text-mainAccent dark:text-main">
                TypeScript, Go, React, and Node.js
              </span>
              , with a focus on scalable architectures and clean code.
            </p>
            <p className="mt-4 leading-relaxed">
              Currently at ResourceKraft, I lead a small engineering team
              delivering an enterprise IoT energy management platform. I own
              the architecture, the delivery, and production operations, and
              work directly with the client from roadmap through release. The
              platform processes real-time data from thousands of devices and
              is sold to commercial clients at six-figure annual contract
              values. Previously at BioRender, I helped scale internal
              tooling for a platform used by millions of scientists
              worldwide.
            </p>
            <p className="mt-4 leading-relaxed">
              I care deeply about developer experience, maintainable code,
              and building systems that actually work. When I&apos;m not
              coding, you&apos;ll find me contributing to open source,
              tweaking my Neovim config, or working on side projects.
            </p>
          </div>

          <Skills />

          <div className="mt-8 w-full rounded-base border-2 border-border bg-white p-4 text-center shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark">
            <p className="font-[family-name:var(--font-darker-grotesque)] text-sm sm:text-base">
              Outside of tech: chess, writing music, Olympic weightlifting,
              and family time.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="w-full scroll-mt-24 border-t-2 border-border px-4 py-16 dark:border-darkBorder sm:py-24"
      >
        <div className="mx-auto w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <Experience />
          <Projects />
          <Testimonials />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="w-full scroll-mt-24 border-t-2 border-border px-4 py-16 dark:border-darkBorder sm:py-24"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <h2 className={sectionHeading}>Get in Touch</h2>

          <div className="mb-8 text-center font-[family-name:var(--font-darker-grotesque)] text-lg font-semibold tracking-wide sm:text-xl">
            <p className="text-mainAccent dark:text-main">
              Looking for a lead software engineer?
            </p>
            <p className="mt-2">
              I&apos;m open to new opportunities and would love to hear about
              your project.
            </p>
          </div>

          <Link
            href="https://calendly.com/shawilly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer rounded-base border-2 border-border bg-main px-8 py-4 text-white shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </Link>

          <div className="mb-4 mt-6 text-sm opacity-70">
            or reach me directly
          </div>

          <ContactLinks />

          <p className="mt-10 text-center text-sm opacity-70">
            Based in Ireland, available for remote work worldwide. I
            typically respond within 24 hours.
          </p>
        </div>
      </section>
    </div>
  )
}
