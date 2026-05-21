import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'
import { LINKS } from '../data/links'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1>
              {t.hero.titleLead} <span className="accent-text">{t.hero.titleAccent}</span><br />
              {t.hero.titleTail}
            </h1>
            <p className="hero-tagline">
              <span>~</span> {t.hero.taglineRole1} <span>/</span> {t.hero.taglineRole2} <span>/</span> {t.hero.taglineRole3}
            </p>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">{t.hero.viewProjects} <ArrowIcon /></a>
              <a href="#contact" className="btn"><MailIcon /> {t.hero.contactMe}</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn"><GitHubIcon /> {t.hero.github}</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn"><LinkedInIcon /> {t.hero.linkedin}</a>
            </div>
            <div className="hero-metrics" aria-label="Profile metrics">
              <div className="hero-metric">
                <span className="hero-metric-value">{t.hero.metric1Value}</span>
                <span className="hero-metric-label">{t.hero.metric1Label}</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value mint">{t.hero.metric2Value}</span>
                <span className="hero-metric-label">{t.hero.metric2Label}</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value violet">{t.hero.metric3Value}</span>
                <span className="hero-metric-label">{t.hero.metric3Label}</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value">{t.hero.metric4Value}</span>
                <span className="hero-metric-label">{t.hero.metric4Label}</span>
              </div>
            </div>
          </div>

          <aside className="hero-side-col" aria-hidden="true">
            <div className="hero-avatar">
              <div className="hero-avatar-ring" />
              <img src="/profile.jpg" alt={t.hero.profileAlt} className="hero-avatar-img" />
            </div>
            <div className="hero-side">
              <div className="hero-side-bar">
                <div className="dots"><span></span><span></span><span></span></div>
                <span className="file">{t.hero.codeFile}</span>
              </div>
              <div className="hero-side-body">
                <div><span className="c">{t.hero.codeComment1}</span></div>
                <div><span className="k">const</span> <span className="n">idan</span> <span className="k">=</span> {'{'}</div>
                <div>&nbsp;&nbsp;<span className="p">role</span>: <span className="s">{t.hero.codeRole}</span>,</div>
                <div>&nbsp;&nbsp;<span className="p">focus</span>: [<span className="s">"Architecture"</span>, <span className="s">"End-to-end"</span>, <span className="s">"AI"</span>],</div>
                <div>&nbsp;&nbsp;<span className="p">stack</span>: <span className="s">".NET · Angular · React · SQL"</span>,</div>
                <div>&nbsp;&nbsp;<span className="p">domain</span>: <span className="s">{t.hero.codeDomain}</span>,</div>
                <div>&nbsp;&nbsp;<span className="p">accelerator</span>: <span className="s">"Claude · Amazon Q · Codex"</span>,</div>
                <div>&nbsp;&nbsp;<span className="p">status</span>: <span className="s">{t.hero.codeStatus}</span>,</div>
                <div>{'}'};</div>
                <div style={{ marginTop: 8 }}><span className="c">{t.hero.codeComment2}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
