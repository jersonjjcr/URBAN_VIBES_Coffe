import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <img src="/logo_uv.png" alt="Urban Vibes Logo" className="logo-image" />
          <div className="brand-text">
            <span className="urban">URBAN</span>
            <span className="vibes">VIBES</span>
          </div>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('menu')}>Menú</button></li>
          <li><button onClick={() => scrollToSection('about')}>Nosotros</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
        </ul>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Header