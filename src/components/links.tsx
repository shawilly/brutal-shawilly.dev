import { SiGithub } from '@icons-pack/react-simple-icons'
import { FileText, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Links() {
  return (
    <div className="mx-auto mt-16 flex w-full flex-col items-center gap-5">
      <Link href="/resume">
        <Button className="cursor-pointer rounded-base border-2 border-border bg-main px-8 py-4 text-center font-base text-white shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none">
          <div className="flex flex-row items-center justify-center gap-3">
            <FileText className="h-5 w-5" />
            <span className="text-base font-semibold">View Resume</span>
          </div>
        </Button>
      </Link>

      <Link
        href="#contact"
        className="text-sm font-semibold text-mainAccent underline-offset-4 hover:underline dark:text-main"
      >
        Get in touch →
      </Link>

      <div className="mt-2 flex items-center gap-4">
        <Link
          href="https://github.com/shawilly"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="opacity-70 transition-opacity hover:opacity-100"
        >
          <SiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/shanebarrywilliams/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="opacity-70 transition-opacity hover:opacity-100"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
