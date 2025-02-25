import ContactLinks from '@/components/contact-links'

export default function Contact() {
  return (
    <div className="max-w-screen flex max-h-screen flex-col">
      <h1 className="py-8 font-[family-name:var(--font-nabla)] text-4xl tracking-wider invert dark:invert-0 sm:text-[4rem]">
        Get in touch
      </h1>

      <ContactLinks />
    </div>
  )
}
