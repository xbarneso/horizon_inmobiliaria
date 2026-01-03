import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'properties', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Properties />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
