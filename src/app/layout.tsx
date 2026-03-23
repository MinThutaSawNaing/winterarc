import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import '@/lib/fontawesome'
import {
  siteDescription,
  siteDescriptionMy,
  siteKeywords,
  siteMetaDescription,
  siteName,
  siteTitle,
  siteUrl,
} from '@/lib/site'
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
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteTitle,
  description: siteMetaDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: siteUrl
    ? {
        canonical: '/',
      }
    : undefined,
  other: {
    'content-language': 'en, my',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteTitle,
    description: `${siteDescription} ${siteDescriptionMy}`,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteMetaDescription,
  },
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
    <html lang="en" data-lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-[var(--color-surface)] text-[var(--color-ink)] antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
