import { IconType, SiGithub } from '@icons-pack/react-simple-icons'
import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Links() {
  const links: {
    icon?: IconType
    name: string
    href: string
    primary?: boolean
  }[] = [
    {
      name: 'Get in Touch',
      icon: Mail,
      href: '/contact',
      primary: true,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      href: 'https://github.com/shawilly',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shanebarrywilliams/',
    },
  ]

  return (
    <div className="mx-auto mt-16 flex w-full flex-col flex-wrap items-center justify-start gap-4 sm:flex-row sm:justify-center">
      {links.map((link, id) => {
        return (
          <Link
            target={link.name === 'Get in Touch' ? '_self' : '_blank'}
            key={id}
            href={link.href}
          >
            <Button
              key={`btn-${link.name}`}
              className={`cursor-pointer rounded-base border-2 border-border px-6 py-3 text-center font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:text-darkText dark:shadow-dark dark:hover:shadow-none ${
                link.primary
                  ? 'bg-main text-white'
                  : 'bg-white dark:bg-secondaryBlack'
              }`}
            >
              <div className="flex flex-row items-center justify-center gap-3">
                {link.icon ? <link.icon className="h-5 w-5" /> : null}
                <span className="text-sm font-semibold sm:text-base">
                  {link.name}
                </span>
              </div>
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
