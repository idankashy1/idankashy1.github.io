import type { Dict } from '../i18n/en'

export type ProjectKey = keyof Dict['projects']['items']

export type Project = {
  key: ProjectKey
  num: string
  tech: string[] // tech names — same across languages
  featured?: boolean
}

export const PROJECTS: Project[] = [
  { key: 'p1', num: '01', tech: ['Claude Code', 'Amazon Q', 'Codex', 'GitHub', 'CI/CD'], featured: true },
  { key: 'p2', num: '02', tech: ['.NET', 'SSIS', 'ControlM', 'MQ', 'Oracle', 'SQL Server'] },
  { key: 'p3', num: '03', tech: ['Power BI', 'Oracle', 'SQL', 'DAX', 'SSIS'] },
  { key: 'p4', num: '04', tech: ['C#', '.NET Core', 'React', 'SSIS', 'SQL Server', 'Oracle'] },
  { key: 'p5', num: '05', tech: ['Angular', 'C#', '.NET', 'Oracle', 'Full-text search'] },
  { key: 'p6', num: '06', tech: ['C#', '.NET', 'REST APIs', 'IIS', 'Elastic Stack'], featured: true },
]

export type AIUseKey = keyof Dict['ai']['uses']

export const AI_USES: { key: AIUseKey; num: string }[] = [
  { key: 'u1', num: '01' },
  { key: 'u2', num: '02' },
  { key: 'u3', num: '03' },
  { key: 'u4', num: '04' },
  { key: 'u5', num: '05' },
  { key: 'u6', num: '06' },
  { key: 'u7', num: '07' },
  { key: 'u8', num: '08' },
  { key: 'u9', num: '09' },
]

export type ExperienceKey = keyof Dict['experience']['items']

export const EXPERIENCE: { key: ExperienceKey }[] = [
  { key: 'e1' },
  { key: 'e2' },
  { key: 'e3' },
]
