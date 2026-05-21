import { useEffect, useState } from 'react'
import { ArrowIcon, BurgerIcon, CloseIcon } from './Icons'
import { useTranslation } from '../i18n/useTranslation'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  // iOS-safe body scroll lock + Escape-to-close.
  // Plain `body { overflow: hidden }` is silently ignored by iOS Safari for
  // the document scroller, so we use the position-fixed-with-offset trick:
  //   1. Capture current scrollY.
  //   2. Pin body to that offset so the visible viewport stays put.
  //   3. Add `.menu-open` so CSS can swap the navbar from sticky → fixed
  //      (sticky breaks once body is taken out of normal flow).
  //   4. On close: undo everything and restore the scroll position.
  useEffect(() => {
    if (!menuOpen) return
    const scrollY = window.scrollY
    const body = document.body
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.classList.add('menu-open')

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      const savedTop = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
      // Restore scroll position after unlocking.
      if (savedTop) window.scrollTo(0, Math.abs(parseInt(savedTop, 10)))
    }
  }, [menuOpen])

  const closeAndScrollTo = (hash: string) => () => {
    setMenuOpen(false)
    // Allow drawer close to render before scrolling.
    requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="dot"></span>
          <span>idan.kashy</span>
        </a>

        {/* Desktop nav links — hidden under 768px */}
        <div className="nav-links">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#ai">{t.nav.ai}</a>
          <a href="#experience">{t.nav.experience}</a>
        </div>

        {/* Right cluster: toggles always visible; CTA on desktop, burger on mobile */}
        <div className="nav-right">
          <ThemeToggle />
          <LanguageToggle />
          <a href="#contact" className="nav-cta nav-cta-desktop">
            {t.nav.getInTouch} <ArrowIcon />
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? t.chat.closeAria : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — nav links + Get in touch CTA */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav-drawer-links">
          <a href="#projects" onClick={closeAndScrollTo('#projects')}>{t.nav.projects}</a>
          <a href="#about" onClick={closeAndScrollTo('#about')}>{t.nav.about}</a>
          <a href="#skills" onClick={closeAndScrollTo('#skills')}>{t.nav.skills}</a>
          <a href="#ai" onClick={closeAndScrollTo('#ai')}>{t.nav.ai}</a>
          <a href="#experience" onClick={closeAndScrollTo('#experience')}>{t.nav.experience}</a>
        </div>
        <a
          href="#contact"
          className="btn primary nav-drawer-cta"
          onClick={closeAndScrollTo('#contact')}
        >
          {t.nav.getInTouch} <ArrowIcon />
        </a>
      </div>
    </nav>
  )
}
