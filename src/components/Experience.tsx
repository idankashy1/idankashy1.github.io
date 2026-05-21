import { EXPERIENCE } from '../data/projects'
import { useTranslation } from '../i18n/useTranslation'

export default function Experience() {
  const { t } = useTranslation()
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">{t.experience.label}</div>
        <h2 className="section-title">{t.experience.title}</h2>
        <p className="section-sub">{t.experience.sub}</p>
        <div className="timeline" style={{ marginTop: 56 }}>
          {EXPERIENCE.map((e) => {
            const item = t.experience.items[e.key]
            return (
              <div key={e.key} className="tl-item">
                <div className="tl-meta">
                  <span>{item.period}</span><span className="dot"></span>
                  <span>{item.type}</span><span className="dot"></span>
                  <span>{item.org}</span>
                </div>
                <h3 className="tl-role">{item.role}</h3>
                <ul className="tl-points">
                  {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
