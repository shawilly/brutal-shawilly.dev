import ContactLinks from '@/components/contact-links'

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex max-w-[750px] flex-col items-center justify-start">
        <h1 className="py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider invert dark:invert-0 sm:text-[4rem]">
          Get in touch
        </h1>

        <ContactLinks />
      </div>
    </div>
  )
}
