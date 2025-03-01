import Nav from '@/components/nav'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import {
  Pixelify_Sans,
  Press_Start_2P,
  Nabla,
  Darker_Grotesque,
} from 'next/font/google'
import './globals.css'

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  weight: ['400'],
  subsets: ['latin'],
})

const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  weight: ['400'],
  subsets: ['latin'],
})

const darkerGrotesque = Darker_Grotesque({
  variable: '--font-darker-grotesque',
  weight: ['400'],
  subsets: ['latin'],
})

const nabla = Nabla({
  variable: '--font-nabla',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shawilly',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} ${darkerGrotesque.variable} ${pressStart.variable} ${nabla.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <div className="mx-auto w-[750px] max-w-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pb-10 pt-28 font-[family-name:var(--font-pixelify)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
