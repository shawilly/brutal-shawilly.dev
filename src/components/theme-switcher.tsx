'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'
import { Button } from './ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Sun className="m500:h-4 m500:w-4 hidden h-6 w-6 stroke-text dark:inline" />
        <Moon className="m500:h-4 m500:w-4 inline h-6 w-6 rotate-0 scale-100 stroke-text transition-all dark:hidden dark:-rotate-90 dark:scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
