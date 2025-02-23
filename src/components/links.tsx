import { IconType, SiGithub, SiGmail } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { Button } from './ui/button'
import { Contact } from 'lucide-react'

export default function Links() {
  const links: { icon?: IconType; name: string; href: string }[] = [
    {
      name: 'contact',
      icon: Contact,
      href: '/contact',
    },
    {
      name: 'github',
      icon: SiGithub,
      href: 'https://github.com/shawilly',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/shanebarrywilliams/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-8">
      {links.map((link, id) => {
        return (
          <Button
            key={`btn-${link.name}`}
            className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
          >
            <Link
              target={link.name === 'contact' ? '_self' : '_blank'}
              key={id}
              href={link.href}
              className="flex flex-row items-center justify-center gap-4"
            >
              {link.name}
              {link.icon ? (
                <link.icon
                  title={link.name}
                  className="h-12 w-12 dark:text-2xl"
                />
              ) : null}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
