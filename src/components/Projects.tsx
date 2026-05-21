import { PROJECTS } from '../data/projects'
import { ExternalIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">{t.projects.label}</div>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-sub">{t.projects.sub}</p>
        <div className="projects-grid">
          {PROJECTS.map((p) => {
            const item = t.projects.items[p.key]
            return (
              <div key={p.key} className={'project-card' + (p.featured ? ' featured' : '')}>
                <div className="project-head">
                  <span className="project-tag">{item.tag}</span>
                  <span className="project-num">/ {p.num}</span>
                </div>
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.desc}</p>
                <div className="project-meta">
                  <div className="project-row">
                    <span className="label">{t.projects.stackLabel}</span>
                    <div className="project-tech">{p.tech.map((tech, j) => <span key={j}>{tech}</span>)}</div>
                  </div>
                  <div className="project-row">
                    <span className="label">{t.projects.valueLabel}</span>
                    <span className="val">{item.value}</span>
                  </div>
                </div>
                <a href="#" className="project-link">{t.projects.viewDetails} <ExternalIcon /></a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
