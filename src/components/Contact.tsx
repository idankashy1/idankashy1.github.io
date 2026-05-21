import { useRef, useState } from 'react'
import { MailIcon, GitHubIcon, LinkedInIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'
import { LINKS } from '../data/links'

export default function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  /** Clicking an email link tries to open the user's mail app via `mailto:`
   *  AND copies the address to the clipboard. The mailto:-only path quietly
   *  fails on browsers with no mail handler (most desktop Chrome installs).
   *  The clipboard copy is the universal fallback so the visitor always walks
   *  away with the address ready to paste. */
  const handleEmailClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(LINKS.email).catch(() => {})
    }
    setCopied(true)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="section-label">{t.contact.label}</div>
          <h2 className="contact-cta">
            {t.contact.ctaLead} <em>{t.contact.ctaAccent}</em>{t.contact.ctaTail}
          </h2>
          <a href={`mailto:${LINKS.email}`} className="btn primary" onClick={handleEmailClick}>
            <MailIcon /> {LINKS.email}
          </a>
          <div className="contact-row">
            <div className="contact-item">
              <div className="label">{t.contact.emailLabel}</div>
              <a href={`mailto:${LINKS.email}`} className="val" onClick={handleEmailClick}><MailIcon /> {LINKS.email}</a>
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

      {copied && (
        <div className="copy-toast" role="status" aria-live="polite">
          <span className="copy-toast-check" aria-hidden="true">✓</span>
          {t.contact.emailCopied}
        </div>
      )}
    </section>
  )
}
