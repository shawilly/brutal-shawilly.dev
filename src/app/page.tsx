import Links from '@/components/links'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <Link
        href="/contact"
        className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-base border-2 border-border bg-white px-4 py-2 text-sm shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark dark:hover:shadow-none"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span className="font-semibold">Open to new opportunities</span>
      </Link>

      <h1 className="neon-text py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider sm:text-[4rem]">
        Shane Williams
      </h1>

      <p className="shimmer-text mt-4 text-lg font-semibold underline underline-offset-8 sm:text-xl">
        Senior Full Stack Software Engineer
      </p>

      <div className="mt-8 max-w-xl text-center font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
        <p className="text-mainAccent dark:text-main">
          Building scalable systems from IoT platforms and web/mobile apps
        </p>
        <p className="mt-2">
          5+ years delivering enterprise production systems
        </p>
        <p className="mt-4 text-sm opacity-80">Based in Ireland / Remote</p>
      </div>

      <Links />
    </div>
  )
}
