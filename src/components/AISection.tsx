import { AI_USES } from '../data/projects'
import { useTranslation } from '../i18n/useTranslation'

export default function AISection() {
  const { t } = useTranslation()
  const tags = ['Claude Code', 'Amazon Q', 'Codex', 'ChatGPT', 'Agents', 'RAG', 'Automation']
  const tagPositions: React.CSSProperties[] = [
    { top: '12%', left: '12%' },
    { top: '8%',  right: '20%' },
    { top: '42%', left: '0%' },
    { top: '44%', right: '2%' },
    { bottom: '16%', left: '16%' },
    { bottom: '10%', right: '14%' },
    { bottom: '40%', left: '44%' },
  ]
  return (
    <section className="ai-section" id="ai">
      <div className="container">
        <div className="ai-hero">
          <div>
            <div className="section-label">{t.ai.label}</div>
            <h2 className="ai-headline">
              {t.ai.headlineLead} <em>{t.ai.headlineAccent}</em>{t.ai.headlineTail}
            </h2>
            <div className="ai-quote">{t.ai.quote}</div>
          </div>
          <div className="ai-orbit">
            <div className="ai-orbit-ring r2"></div>
            <div className="ai-orbit-ring r1"></div>
            <div className="ai-orbit-core">AI</div>
            {tags.map((tag, i) => (
              <span key={i} className="ai-orbit-tag" style={tagPositions[i]}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="ai-grid">
          {AI_USES.map((u) => {
            const item = t.ai.uses[u.key]
            return (
              <div key={u.key} className="ai-cell">
                <div className="ai-cell-num">{u.num}</div>
                <div className="ai-cell-title">{item.title}</div>
                <p className="ai-cell-desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
