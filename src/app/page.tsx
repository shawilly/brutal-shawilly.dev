import Links from '@/components/links'

export default function Home() {
  return (
    <div className="max-w-screen flex max-h-screen flex-col items-center justify-center px-4">
      <h1 className="py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider invert dark:invert-0 sm:text-[4rem]">
        Shane Williams
      </h1>

      <p className="mt-4 text-lg font-semibold underline underline-offset-8 sm:text-xl">
        Full Stack Software Engineer
      </p>

      <div className="mt-8 max-w-xl text-center font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
        <p className="text-mainAccent dark:text-main">
          Building scalable systems from IoT platforms to web applications
        </p>
        <p className="mt-2">
          4+ years delivering production systems with TypeScript, Go, React &
          Node.js
        </p>
        <p className="mt-4 text-sm opacity-80">Based in Ireland / Remote</p>
      </div>

      <Links />
    </div>
  )
}
