import { createContext, useEffect, useMemo, useState, ReactNode } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'idan-kashy-theme'

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

function detectInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  // index.html has already applied data-theme synchronously to avoid flash.
  // Trust localStorage; default to dark per design intent.
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(detectInitialTheme)

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage may be unavailable (private mode); ignore.
    }
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
