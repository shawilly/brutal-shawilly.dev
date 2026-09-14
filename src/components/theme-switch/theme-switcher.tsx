'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return placeholder with same dimensions to prevent layout shift
    return (
      <Button className="rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark sm:text-base">
        <div className="m500:h-4 m500:w-4 h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      className="rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="m500:h-4 m500:w-4 hidden h-5 w-5 dark:inline" />
      <Moon className="m500:h-4 m500:w-4 inline h-5 w-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
