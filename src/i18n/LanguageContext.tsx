import { createContext, useEffect, useMemo, useState, ReactNode } from 'react'
import { en, type Dict } from './en'
import { he } from './he'

export type Lang = 'en' | 'he'

const DICTS: Record<Lang, Dict> = { en, he }
const STORAGE_KEY = 'idan-kashy-lang'

type LanguageContextValue = {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: en,
  setLang: () => {},
})

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'he') return stored
  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('he') ? 'he' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    const dict = DICTS[lang]
    document.documentElement.lang = dict.htmlLang
    document.documentElement.dir = dict.dir
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage may be unavailable (private mode); ignore.
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: DICTS[lang], setLang: setLangState }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
