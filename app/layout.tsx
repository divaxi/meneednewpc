import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Hero from '@/components/hero';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const trimPoster = localFont({
  src: [
    {
      path: '../public/fonts/trimposter-goals-compressed.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/trimposter-goals-compresseditalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/trimposter-goals-fat.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: "--font-trimposter-raw",
})

export const metadata: Metadata = {
  title: 'Me need new laptop',
  description: 'Personal portfolio and blog to express my need for a new laptop',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-red-600">
      <body className={`${inter.variable} ${trimPoster.variable} font-sans antialiased`}>
        <Hero />
        {children}
      </body>
    </html>
  )
}
