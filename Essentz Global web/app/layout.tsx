import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Essentz Global - Premium Luxury Perfumes',
  description: 'Discover premium handcrafted perfumes by Essentz Global. Awaken your inner essence with our luxury fragrance collection.',
  keywords: 'luxury perfume, fragrance, premium cologne, perfume brand',
  authors: [{ name: 'Essentz Global' }],
  openGraph: {
    title: 'Essentz Global - Your Inner Essence',
    description: 'Premium Crafted Perfumes for the Modern World',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
