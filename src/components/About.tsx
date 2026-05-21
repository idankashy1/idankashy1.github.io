import { useTranslation } from '../i18n/useTranslation'

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">{t.about.label}</div>
        <h2 className="section-title">{t.about.title}<br/>{t.about.titleBreak}</h2>
        <div className="about-grid" style={{ marginTop: 40 }}>
          <div className="about-prose">
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
          </div>
          <div className="about-stats">
            <div className="stat"><div className="stat-num">{t.about.stat1Value}<span className="unit"> {t.about.stat1Unit}</span></div><div className="stat-label">{t.about.stat1Label}</div></div>
            <div className="stat"><div className="stat-num">{t.about.stat2Value}<span className="unit"> {t.about.stat2Unit}</span></div><div className="stat-label">{t.about.stat2Label}</div></div>
            <div className="stat"><div className="stat-num">{t.about.stat3Value}<span className="unit"> {t.about.stat3Unit}</span></div><div className="stat-label">{t.about.stat3Label}</div></div>
            <div className="stat"><div className="stat-num">{t.about.stat4Value}<span className="unit">{t.about.stat4Unit}</span></div><div className="stat-label">{t.about.stat4Label}</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
