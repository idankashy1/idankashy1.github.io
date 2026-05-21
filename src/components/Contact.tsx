import { MailIcon, GitHubIcon, LinkedInIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'
import { LINKS } from '../data/links'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="section-label">{t.contact.label}</div>
          <h2 className="contact-cta">
            {t.contact.ctaLead} <em>{t.contact.ctaAccent}</em>{t.contact.ctaTail}
          </h2>
          <a href={`mailto:${LINKS.email}`} className="btn primary">
            <MailIcon /> {LINKS.email}
          </a>
          <div className="contact-row">
            <div className="contact-item">
              <div className="label">{t.contact.emailLabel}</div>
              <a href={`mailto:${LINKS.email}`} className="val"><MailIcon /> {LINKS.email}</a>
            </div>
            <div className="contact-item">
              <div className="label">{t.contact.githubLabel}</div>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="val"><GitHubIcon /> {LINKS.githubDisplay}</a>
            </div>
            <div className="contact-item">
              <div className="label">{t.contact.linkedinLabel}</div>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="val"><LinkedInIcon /> {LINKS.linkedinDisplay}</a>
            </div>
            <div className="contact-item">
              <div className="label">{t.contact.locationLabel}</div>
              <span className="val">{t.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
