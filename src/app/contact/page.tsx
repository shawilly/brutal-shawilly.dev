import ContactLinks from '@/components/contact-links'
import { Button } from '@/components/ui/button'
import { Calendar, Download } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex max-w-[750px] flex-col items-center justify-start">
        <h1 className="neon-text py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider sm:text-[4rem]">
          Get in touch
        </h1>

        <div className="mb-8 text-center font-[family-name:var(--font-darker-grotesque)] text-lg font-semibold tracking-wide sm:text-xl">
          <p className="text-mainAccent dark:text-main">
            Looking for a senior full-stack engineer?
          </p>
          <p className="mt-2">
            I&apos;m open to new opportunities and would love to hear about your
            project.
          </p>
        </div>

        {/* Quick Actions for Recruiters */}
        <div className="mb-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Link
            href="https://calendly.com/shawilly"
            target="_blank"
            className="flex-1"
          >
            <Button className="w-full cursor-pointer rounded-base border-2 border-border bg-main px-6 py-3 text-white shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </Link>
          <Link href="/shane-williams-cv.pdf" target="_blank" className="flex-1">
            <Button className="w-full cursor-pointer rounded-base border-2 border-border bg-white px-6 py-3 shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </Link>
        </div>

        <div className="mb-6 text-center text-sm opacity-70">
          or reach me directly
        </div>

        <ContactLinks />

        <div className="mt-12 rounded-base border-2 border-border bg-white p-6 text-center shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark">
          <p className="font-[family-name:var(--font-darker-grotesque)] text-base sm:text-lg">
            Based in <span className="font-bold">Ireland</span> / Available for{' '}
            <span className="font-bold">remote</span> work worldwide
          </p>
          <p className="mt-2 text-sm opacity-70">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}
