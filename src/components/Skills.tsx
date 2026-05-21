import { SKILLS } from '../data/skills'
import { useTranslation } from '../i18n/useTranslation'

export default function Skills() {
  const { t } = useTranslation()
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">{t.skills.label}</div>
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-sub">{t.skills.sub}</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div key={s.key} className="skill-card">
              <div className="skill-head">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-title">{t.skills.cat[s.key]}</div>
              </div>
              <div className="skill-list">
                {s.items.map((tech, j) => <span key={j} className="skill-tag">{tech}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
