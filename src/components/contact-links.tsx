import { IconType, SiGithub, SiGmail } from '@icons-pack/react-simple-icons'
import { Linkedin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function ContactLinks() {
  const links: {
    icon: IconType
    name: string
    label: string
    href: string
    color: string
    primary?: boolean
  }[] = [
    {
      name: 'email',
      label: 'shane@shawilly.dev',
      icon: SiGmail,
      color: 'default',
      href: 'mailto:shane@shawilly.dev',
      primary: true,
    },
    {
      name: 'linkedin',
      label: 'LinkedIn Profile',
      icon: Linkedin,
      color: '#0D597F',
      href: 'https://www.linkedin.com/in/shanebarrywilliams/',
    },
    {
      name: 'github',
      label: 'GitHub Profile',
      icon: SiGithub,
      color: 'default',
      href: 'https://github.com/shawilly',
    },
    {
      name: 'phone',
      label: '+353 83 362 6936',
      icon: PhoneCall,
      color: '#2BEDA7',
      href: 'tel:+353833626936',
    },
  ]

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {links.map((link, id) => {
        return (
          <Link
            target={link.name === 'email' ? '_self' : '_blank'}
            key={id}
            href={link.href}
            className="w-full max-w-md"
          >
            <Button
              key={`btn-${link.name}`}
              className={`w-full cursor-pointer rounded-base border-2 border-border px-6 py-3 text-center font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:text-darkText dark:shadow-dark dark:hover:shadow-none ${
                link.primary
                  ? 'bg-main text-white dark:bg-main'
                  : 'bg-white dark:bg-secondaryBlack'
              }`}
            >
              <div className="flex w-full flex-row items-center justify-between gap-4">
                <link.icon
                  title={link.name}
                  className="h-6 w-6 flex-shrink-0"
                  color={link.color}
                />
                <span className="flex-grow text-left text-sm sm:text-base">
                  {link.label}
                </span>
              </div>
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
