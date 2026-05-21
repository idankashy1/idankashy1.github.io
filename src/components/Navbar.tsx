import { ArrowIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { t } = useTranslation()
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot"></span>
          <span>idan.kashy</span>
        </a>
        <div className="nav-links">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#ai">{t.nav.ai}</a>
          <a href="#experience">{t.nav.experience}</a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <LanguageToggle />
          <a href="#contact" className="nav-cta">
            {t.nav.getInTouch} <ArrowIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}
