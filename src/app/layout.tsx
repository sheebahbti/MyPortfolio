import type { Metadata } from 'next'
import './globals.css'
import { ResumeProvider } from '@/lib/resumeContext'

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
      <body className="bg-slate-900 text-white font-sans">
        <ResumeProvider>{children}</ResumeProvider>
      </body>
    </html>
  )
}
