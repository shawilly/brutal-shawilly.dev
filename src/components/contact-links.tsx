import { IconType, SiGithub } from '@icons-pack/react-simple-icons'
import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactLinks() {
  const links: {
    name: string
    label: string
    icon: IconType
    href: string
  }[] = [
    {
      name: 'email',
      label: 'shane@shawilly.dev',
      icon: Mail,
      href: 'mailto:shane@shawilly.dev',
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shanebarrywilliams/',
    },
    {
      name: 'github',
      label: 'GitHub',
      icon: SiGithub,
      href: 'https://github.com/shawilly',
    },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
      {links.map((link) => (
        <Link
          key={link.name}
          target={link.name === 'email' ? '_self' : '_blank'}
          rel={link.name === 'email' ? undefined : 'noopener noreferrer'}
          href={link.href}
          className="flex items-center gap-2 opacity-80 transition-opacity hover:text-mainAccent hover:opacity-100 dark:hover:text-main"
        >
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      ))}
    </div>
  )
}
