import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import '@/lib/fontawesome'
import {
  googleSiteVerification,
  siteDescription,
  siteKeywords,
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
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl || undefined }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        canonical: siteUrl,
      }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteTitle,
    description: siteDescription,
    siteName,
    url: siteUrl || undefined,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/logo.jpg`,
            alt: `${siteName} logo`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: siteUrl ? [`${siteUrl}/logo.jpg`] : undefined,
  },
  manifest: '/site.webmanifest',
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        className={`${bodyFont.variable} ${displayFont.variable} bg-[var(--color-bg)] text-[var(--color-ink)] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
