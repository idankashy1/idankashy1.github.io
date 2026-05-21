import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import { KNOWLEDGE_EN, KNOWLEDGE_HE, type KnowledgeEntry } from '../data/chatKnowledge'

type Message = {
  id: number
  role: 'user' | 'ai'
  text: string
  /** While true, `text` is rendered with a typewriter effect. */
  typing?: boolean
}

/** Build-time env var. If set, the chat hits this Cloudflare Worker for real AI.
 *  If not set, falls back to local keyword matching. See worker/README.md. */
const CHAT_API_URL = (import.meta.env.VITE_CHAT_API_URL as string | undefined) || ''

/** Static fallback: scores each KB entry by how many of its keywords appear as
 *  substrings of the question. Used when the Worker is unavailable. */
function findBestMatch(question: string, kb: KnowledgeEntry[]): KnowledgeEntry | null {
  const q = question.toLowerCase().trim()
  if (q.length < 2) return null
  let bestScore = 0
  let best: KnowledgeEntry | null = null
  for (const entry of kb) {
    let score = 0
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) score += kw.length
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return bestScore >= 3 ? best : null
}

/** Calls the Cloudflare Worker for a real AI response.
 *  Returns null on any failure so the caller can fall back gracefully. */
async function fetchAIResponse(
  question: string,
  history: { role: 'user' | 'assistant'; content: string }[],
): Promise<string | null> {
  if (!CHAT_API_URL) return null
  try {
    const res = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, history }),
    })
    if (!res.ok) return null
    const data = (await res.json()) as { answer?: string }
    return data.answer?.trim() || null
  } catch {
    return null
  }
}

/** Renders text progressively at ~45 characters per second, for AI feel. */
function useTypewriter(text: string, enabled: boolean): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState(enabled ? '' : text)
  const [done, setDone] = useState(!enabled)
  useEffect(() => {
    if (!enabled) {
      setDisplayed(text)
      setDone(true)
      return
    }
    setDisplayed('')
    setDone(false)
    const cps = 45
    const stepMs = 1000 / cps
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      if (i >= text.length) {
        setDisplayed(text)
        setDone(true)
        window.clearInterval(id)
      } else {
        setDisplayed(text.slice(0, i))
      }
    }, stepMs)
    return () => window.clearInterval(id)
  }, [text, enabled])
  return { displayed, done }
}

function TypingDots() {
  return (
    <span className="chat-dots" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
  )
}

function MessageBubble({ msg }: { msg: Message }) {
  const { displayed } = useTypewriter(msg.text, msg.role === 'ai' && msg.typing === true)
  return (
    <div className={`chat-msg chat-msg-${msg.role}`}>
      {msg.role === 'ai' && <div className="chat-avatar" aria-hidden="true">IK</div>}
      <div className="chat-bubble">{displayed}</div>
    </div>
  )
}

export default function AskMeChat() {
  const { t, lang } = useTranslation()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [thinking, setThinking] = useState(false)
  const [pulseHidden, setPulseHidden] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nextId = useRef(1)

  const kb = lang === 'he' ? KNOWLEDGE_HE : KNOWLEDGE_EN

  /** Inject the welcome message the first time the chat opens. */
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: nextId.current++, role: 'ai', text: t.chat.welcomeMessage, typing: false }])
    }
  }, [open, messages.length, t.chat.welcomeMessage])

  /** Keep scroll pinned to the latest message. */
  useEffect(() => {
    const el = scrollerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, thinking])

  /** Esc to close. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  /** Focus input when panel opens. */
  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 250)
      return () => window.clearTimeout(id)
    }
  }, [open])

  const send = async (text: string) => {
    const q = text.trim()
    if (!q) return
    const userMsg: Message = { id: nextId.current++, role: 'user', text: q }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setThinking(true)

    // Build conversation history for the Worker (exclude the welcome bubble).
    const history: { role: 'user' | 'assistant'; content: string }[] = messages
      .filter(m => m.id !== 1)
      .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }))

    // Try real AI first; fall back to keyword matching if unavailable.
    const aiText = await fetchAIResponse(q, history)
    const responseText =
      aiText ?? findBestMatch(q, kb)?.response ?? t.chat.fallback

    setThinking(false)
    setMessages(prev => [...prev, { id: nextId.current++, role: 'ai', text: responseText, typing: true }])
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const handleOpen = () => {
    setOpen(true)
    setPulseHidden(true)
  }

  const suggestions = [
    t.chat.suggestionProjects,
    t.chat.suggestionAI,
    t.chat.suggestionStack,
    t.chat.suggestionLeumi,
  ]

  return (
    <>
      <button
        type="button"
        className={`chat-fab${pulseHidden ? ' pulse-off' : ''}`}
        onClick={handleOpen}
        aria-label={t.chat.buttonAriaOpen}
        aria-expanded={open}
        title={t.chat.buttonAriaOpen}
        style={{ visibility: open ? 'hidden' : 'visible' }}
      >
        <svg className="chat-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          <path d="M18 14 L18.7 16.3 L21 17 L18.7 17.7 L18 20 L17.3 17.7 L15 17 L17.3 16.3 Z" opacity="0.7" />
        </svg>
        <span className="chat-fab-label">{t.chat.badge}</span>
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label={t.chat.headerTitle}>
          <header className="chat-header">
            <div className="chat-header-id">
              <div className="chat-avatar" aria-hidden="true">IK</div>
              <div className="chat-header-text">
                <div className="chat-header-title">{t.chat.headerTitle}</div>
                <div className="chat-header-status">
                  <span className="chat-live-dot" aria-hidden="true"></span>
                  {t.chat.headerStatus}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label={t.chat.closeAria}
              title={t.chat.closeAria}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </header>

          <div className="chat-body" ref={scrollerRef}>
            {messages.map(msg => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}
            {thinking && (
              <div className="chat-msg chat-msg-ai">
                <div className="chat-avatar" aria-hidden="true">IK</div>
                <div className="chat-bubble chat-bubble-typing" aria-label={t.chat.typingAria}>
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && !thinking && (
            <div className="chat-suggestions">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  className="chat-suggestion"
                  onClick={() => send(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="chat-input-row" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder={t.chat.placeholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              aria-label={t.chat.placeholder}
            />
            <button
              type="submit"
              className="chat-send"
              aria-label={t.chat.sendAria}
              title={t.chat.sendAria}
              disabled={!input.trim() || thinking}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12 L19 12 M13 6 L19 12 L13 18" />
              </svg>
            </button>
          </form>

          <div className="chat-disclaimer">{t.chat.disclaimer}</div>
        </div>
      )}
    </>
  )
}
