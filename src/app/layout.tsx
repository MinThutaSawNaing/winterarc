import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import '@/lib/fontawesome'
import './globals.css'

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Winter Arc Myanmar',
  description:
    'Winter Arc Myanmar builds modern web, mobile, and cloud products for ambitious teams.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-[var(--color-surface)] text-[var(--color-ink)] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
