'use client'

import { createContext, useContext, ReactNode, useMemo } from 'react'
import { ResumeData } from './resumeTypes'
import defaultResume from './defaultResume.json'

interface ResumeContextType {
  resume: ResumeData
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children, customResume }: { children: ReactNode; customResume?: ResumeData }) {
  // Use custom resume if provided, otherwise use default
  const resume = useMemo(() => customResume || (defaultResume as ResumeData), [customResume])

  return (
    <ResumeContext.Provider value={{ resume }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider')
  }
  return context
}
