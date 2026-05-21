import type { Dict } from '../i18n/en'

export type SkillCategoryKey = keyof Dict['skills']['cat']

export type SkillCategory = {
  key: SkillCategoryKey
  icon: string
  items: string[] // tech names — same across languages
}

export const SKILLS: SkillCategory[] = [
  { key: 'backend',   icon: '{ }', items: ['C#', '.NET Core', 'ASP.NET Web API', 'Entity Framework', 'REST APIs'] },
  { key: 'databases', icon: 'DB',  items: ['Oracle', 'SQL Developer', 'SQL Server', 'SSMS', 'Stored Procedures', 'Indexes', 'Views', 'Triggers', 'Performance'] },
  { key: 'frontend',  icon: '</>', items: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS'] },
  { key: 'data',      icon: '∑',   items: ['SSIS', 'ControlM', 'MQ', 'Power BI', 'DAX', 'Reporting', 'Secure environments', 'Air-gapped systems'] },
  { key: 'ai',        icon: 'AI',  items: ['Claude Code', 'Amazon Q', 'Codex', 'ChatGPT', 'AI Agents', 'Prompt Engineering', 'Workflow Automation'] },
  { key: 'devops',    icon: '⌘',   items: ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'IIS', 'Elastic Stack'] },
]
