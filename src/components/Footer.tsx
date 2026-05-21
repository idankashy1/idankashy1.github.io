import { useTranslation } from '../i18n/useTranslation'
import { LINKS } from '../data/links'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} {t.footer.copyright}</div>
        <div className="footer-links">
          <a href={LINKS.github} target="_blank" rel="noreferrer">{t.footer.github}</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">{t.footer.linkedin}</a>
          <a href={`mailto:${LINKS.email}`}>{t.footer.email}</a>
        </div>
      </div>
    </footer>
  )
}
