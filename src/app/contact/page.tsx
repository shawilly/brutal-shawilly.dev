import ContactLinks from '@/components/contact-links'

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex max-w-[750px] flex-col items-center justify-start">
        <h1 className="py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider invert dark:invert-0 sm:text-[4rem]">
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

        <ContactLinks />

        <div className="mt-12 rounded-base border-2 border-border bg-white p-6 text-center shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark">
          <p className="font-[family-name:var(--font-darker-grotesque)] text-base sm:text-lg">
            Based in <span className="font-bold">Ireland</span> / Available for{' '}
            <span className="font-bold">remote</span> work worldwide
          </p>
        </div>
      </div>
    </div>
  )
}
