import type { Metadata } from 'next'
import { roboto } from './font'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Wordle - FrontEnd',
  description: 'Jorge Torres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${roboto.className} bg-[#f9f9f9] dark:bg-[#262B3C]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children} 2
        </ThemeProvider>
      </body>
    </html>
  )
}
