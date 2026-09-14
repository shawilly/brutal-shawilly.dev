'use client'

import clsx from 'clsx'
import { PanelTopOpen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeSwitcher } from './theme-switch/theme-switcher'
import { Button } from './ui/button'

const SECTIONS = ['top', 'about', 'work', 'contact']

const SECTION_LINKS = [
  { href: '/#top', text: 'Home', section: 'top' },
  { href: '/#about', text: 'About', section: 'about' },
  { href: '/#work', text: 'Work', section: 'work' },
  { href: '/#contact', text: 'Contact', section: 'contact' },
]

export default function Nav() {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      const current = ref.current

      if (!current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [])

  useEffect(() => {
    if (path !== '/') {
      setActiveSection(null)
      return
    }

    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [path])

  const baseLinkClassName =
    'cursor-pointer rounded-base border-2 border-border px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none sm:text-base'

  const getLinkClassName = (isActive: boolean) =>
    clsx(
      baseLinkClassName,
      isActive
        ? 'bg-main text-white dark:bg-main dark:text-white'
        : 'bg-white dark:bg-darkBg dark:text-darkText',
    )

  return (
    <div className="fixed top-5 z-50 mx-auto w-screen">
      <div className="mx-auto flex w-full max-w-screen-md cursor-pointer items-center justify-center px-5">
        <Button
          className={clsx(isOpen ? 'hidden' : 'sm:hidden')}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <PanelTopOpen />
        </Button>

        <nav
          ref={ref}
          className={clsx(
            'absolute left-5 top-14 w-[90%] flex-col gap-3 rounded-base border-2 border-border bg-bg p-3 text-sm font-base text-text shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark sm:static sm:flex sm:w-max sm:flex-row sm:gap-4 sm:p-2.5 sm:px-5 sm:text-base w450:gap-4',
            isOpen ? 'flex' : 'hidden sm:flex',
          )}
        >
          {SECTION_LINKS.map((link, index) => (
            <Link
              key={link.href}
              id={`nav-button-${index + 1}`}
              href={link.href}
              className={getLinkClassName(activeSection === link.section)}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/resume"
            className={getLinkClassName(path === '/resume')}
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  )
}
