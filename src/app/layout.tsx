import Nav from '@/components/nav'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Inter, Darker_Grotesque } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const darkerGrotesque = Darker_Grotesque({
  variable: '--font-darker-grotesque',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shane Williams | Lead Software Engineer',
  description:
    'Lead software engineer specializing in TypeScript, Go, React, and Node.js. Leading delivery of scalable systems from IoT platforms to web applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${darkerGrotesque.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <div className="mx-auto w-full max-w-5xl px-5 pb-16 pt-28 lg:max-w-6xl xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
