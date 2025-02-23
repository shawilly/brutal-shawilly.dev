import Links from '@/components/links'

export default function Home() {
  return (
    <div className="max-w-screen flex max-h-screen flex-col">
      <h1 className="pt-8 font-[family-name:var(--font-press-start)] text-2xl font-heading text-slate-800 underline underline-offset-4 dark:text-yellow-300 sm:text-4xl">
        Shane Williams
      </h1>

      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          4+ years experience in Full Stack Engineering based in Mayo, Ireland
        </p>

        <br />

        <p className="text-mainAccent dark:text-main">
          Solving problems and building cool things
        </p>
      </div>
      <Links />
    </div>
  )
}
