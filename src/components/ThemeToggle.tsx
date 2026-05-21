import { useTheme } from '../theme/useTheme'
import { useTranslation } from '../i18n/useTranslation'
import { SunIcon, MoonIcon } from './Icons'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const targetIsLight = theme === 'dark'
  const label = targetIsLight ? t.nav.themeToggleLight : t.nav.themeToggleDark
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {targetIsLight ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
