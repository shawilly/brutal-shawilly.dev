import { IconType, SiGmail } from '@icons-pack/react-simple-icons'
import { Linkedin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function ContactLinks() {
  const links: {
    icon: IconType
    name: string
    href: string
    color: string
  }[] = [
    {
      name: 'email',
      icon: SiGmail,
      color: 'default',
      href: 'mailto:shane@shawilly.dev',
    },
    {
      name: 'phone',
      icon: PhoneCall,
      color: '#2BEDA7',
      href: 'tel:+353833626936',
    },
    {
      name: 'linkedin',
      icon: Linkedin,
      color: '#0D597F',
      href: 'https://www.linkedin.com/in/shanebarrywilliams/',
    },
  ]

  return (
    <div className="mr-auto mt-8 flex w-full flex-col items-center gap-8">
      {links.map((link, id) => {
        return (
          <Button
            key={`btn-${link.name}`}
            className="w-full cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
          >
            <Link
              target="_blank"
              key={id}
              href={link.href}
              className="flex flex-row items-center justify-center gap-4 font-[family-name:var(--font-sixtyfour)] text-2xl"
            >
              <link.icon
                title={link.name}
                className="h-12 w-12 dark:text-2xl"
                color={link.color}
              />
              {link.name}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
