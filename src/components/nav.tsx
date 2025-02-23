'use client'

import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'

export default function Nav() {
  const path = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      const current = ref.current

      if (!current?.contains(event.target as Node)) {
        setIsOpen(!open)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [ref])

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/work', text: 'Work' },
    { path: '/contact', text: 'Contact' },
  ]

  return (
    <div className="fixed left-0 top-5 z-50 w-full font-[family-name:var(--font-pixelify)]">
      <div className="mx-auto flex w-full max-w-screen-md items-center justify-between px-5">
        <Button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <ChevronDown className="h-6 w-6" />
          )}
        </Button>

        <nav
          ref={ref}
          className={clsx(
            'absolute left-5 top-14 w-[90%] flex-col gap-3 rounded-lg border-2 border-border bg-main p-3 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:static sm:flex sm:w-max sm:flex-row sm:gap-5 sm:p-2.5 sm:px-5 sm:text-base w450:gap-4',
            isOpen ? 'flex' : 'hidden sm:flex',
          )}
        >
          {links.map((link) => (
            <Button
              key={`btn-${link.path}`}
              className={clsx(
                'cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base',
                path === link.path
                  ? 'bg-[#90ed91] dark:bg-white dark:text-text'
                  : 'font-base',
              )}
              onClick={() => {
                setIsOpen(!isOpen) // Toggle the open/close state
                // Optionally, navigate to the link if you want this to be part of the button's behavior
                if (isOpen) {
                  router.push(link.path) // For navigation, you can use Next.js `router.push` here
                }
              }}
            >
              <Link key={link.path} href={link.path}>
                {link.text}
              </Link>
            </Button>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  )
}
