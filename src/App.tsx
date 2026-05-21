import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AskMeChat from './components/AskMeChat'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

export default function App() {
  // Scroll-triggered fade-in
  useEffect(() => {
    const els = document.querySelectorAll('section')
    els.forEach(el => el.classList.add('fade-in'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    els.forEach(el => io.observe(el))
    const hero = document.querySelector('.hero')
    if (hero) hero.classList.add('visible')
    return () => io.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <AISection />
        <Experience />
        <Contact />
        <Footer />
        <AskMeChat />
      </LanguageProvider>
    </ThemeProvider>
  )
}
