import Links from '@/components/links'

export default function Home() {
  return (
    <div className="max-w-screen flex max-h-screen flex-col items-center justify-center">
      <h1 className="py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider invert dark:invert-0 sm:text-[4rem]">
        Shane Williams
      </h1>

      <p className="mt-4 text-lg underline underline-offset-8 sm:text-xl">
        Experienced Software Engineer
      </p>
      <div className="mt-8 font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
        <p className="text-mainAccent dark:text-main">
          Solving problems and building cool things
        </p>
        <p>
          4+ years experience in Full Stack Engineering based in Mayo, Ireland
        </p>
      </div>

      <Links />
    </div>
  )
}
