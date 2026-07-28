import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ResumeProvider } from '@/lib/resumeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheeba Ahmed | Software Engineering Manager',
  description: 'Hands-on Software Engineering Manager with 15+ years of experience in cloud engineering, SaaS product development, and DevOps.',
  keywords: ['Software Engineering Manager', 'Azure', 'Kubernetes', 'AI', 'DevOps', 'SaaS'],
  authors: [{ name: 'Sheeba Ahmed' }],
  openGraph: {
    title: 'Sheeba Ahmed | Software Engineering Manager',
    description: 'Hands-on Engineering Leader | Cloud & AI Innovator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <ResumeProvider>{children}</ResumeProvider>
      </body>
    </html>
  )
}
