import ContactLinks from '@/components/contact-links'

export default function Contact() {
  return (
    <div className="max-w-screen flex max-h-screen flex-col">
      <h1 className="pt-8 font-[family-name:var(--font-sixtyfour)] text-2xl font-heading text-slate-800 underline underline-offset-4 dark:text-yellow-300 sm:text-4xl">
        Get in touch
      </h1>

      <ContactLinks />
    </div>
  )
}
