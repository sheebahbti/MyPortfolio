export interface ResumeData {
  name: string
  title: string
  skills: SkillCategory[]
  experience: Experience[]
  projects: Project[]
  education?: Education[]
}

export interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

export interface Experience {
  period: string
  title: string
  company: string
  location: string
  highlights: string[]
  color: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

export interface Education {
  degree: string
  school: string
  year: string
}
