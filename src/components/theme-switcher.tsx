'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'
import { Button } from './ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        className="relative overflow-hidden rounded-base border-2 border-border bg-secondaryBlack px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-sky-400 dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {/* Stars */}
        <div className="absolute top-2 ml-8 block h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />
        <div className="absolute top-[2px] mr-6 h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />
        <div className="absolute bottom-[2px] mr-4 h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />
        <div className="absolute bottom-[2px] mr-4 h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />
        <div className="absolute bottom-2 ml-8 block h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />
        <div className="absolute mr-10 block h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0" />

        {/* Clouds */}
        <div className="absolute bottom-3 ml-12 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-2 ml-10 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-1 ml-10 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-1 ml-8 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-1 ml-6 block h-2 w-2 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-1 ml-4 block h-2 w-2 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />

        <div className="absolute bottom-3 mr-12 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-2 mr-10 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />
        <div className="absolute bottom-1 mr-10 block h-3 w-3 rounded-full bg-white opacity-0 transition-all dark:opacity-100" />

        <Sun className="m500:h-4 m500:w-4 hidden h-8 w-8 scale-150 fill-yellow-500 stroke-yellow-500 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 inline h-8 w-8 rotate-0 scale-125 fill-slate-300 stroke-slate-300 transition-all dark:hidden dark:-rotate-90 dark:scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
