import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Horizon Inmobiliaria" />
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#properties" 
            className={activeSection === 'properties' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('properties')
            }}
          >
            Propiedades
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }}
          >
            Nosotros
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('services')
            }}
          >
            Servicios
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Contáctanos
          </a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
