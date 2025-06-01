import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Santhosh Kumar R | Senior Software Engineer',
  description: 'Cloud-native engineer with 7+ years of experience in automation, GenAI, and high-scale systems.',
  keywords: ['Software Engineer', 'Cloud Native', 'Full Stack', 'Python', 'Go', 'AWS', 'Azure', 'DevOps'],
  authors: [{ name: 'Santhosh Kumar R' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://santhoshkr93.github.io',
    title: 'Santhosh Kumar R | Senior Software Engineer',
    description: 'Cloud-native engineer with 7+ years of experience in automation, GenAI, and high-scale systems.',
    siteName: 'Santhosh Kumar R Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santhosh Kumar R | Senior Software Engineer',
    description: 'Cloud-native engineer with 7+ years of experience in automation, GenAI, and high-scale systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} bg-background text-foreground selection:bg-accent-primary/20 selection:text-accent-primary-foreground`}>
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 