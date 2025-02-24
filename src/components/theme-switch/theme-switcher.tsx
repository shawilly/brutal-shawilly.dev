'use client'

import { Circle, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'
import { RandomClouds } from './clouds'
import StarField from './star-field'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a placeholder
  }

  return (
    <>
      <Button
        className="relative overflow-hidden rounded-base border-2 border-border bg-secondaryBlack px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-sky-400 dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <StarField />
        <div className="inset-0 z-20 hidden dark:absolute dark:block">
          <RandomClouds />
        </div>
        <Circle className="m500:h-8 m500:w-8 z-10 hidden h-12 w-12 scale-150 fill-yellow-500 stroke-yellow-500 transition-all duration-300 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 inline h-8 w-8 rotate-0 scale-125 fill-slate-300 stroke-slate-300 transition-all duration-300 dark:hidden dark:-rotate-90 dark:scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
