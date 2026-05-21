import { useTranslation } from '../i18n/useTranslation'

export default function LanguageToggle() {
  const { lang, setLang, t } = useTranslation()
  const next = lang === 'en' ? 'he' : 'en'
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(next)}
      aria-label={t.nav.langToggleAria}
      title={t.nav.langToggleAria}
    >
      <span className="lang-toggle-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      </span>
      <span className="lang-toggle-label">{t.nav.langToggle}</span>
    </button>
  )
}
