import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quizmoji',
  description: 'Quiz de emojis para você testar seus conhecimentos.',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
