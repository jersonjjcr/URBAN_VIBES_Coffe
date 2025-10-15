const Footer = () => {
  const footerLinks = [
    { text: 'Inicio', href: '#home' },
    { text: 'Menú', href: '#menu' },
    { text: 'Nosotros', href: '#about' },
    { text: 'Contacto', href: '#contact' }
  ]

  const socialLinks = [
    { icon: '📷', href: 'https://instagram.com/urbanvibescoffee', label: 'Instagram' },
    { icon: '📘', href: 'https://facebook.com/urbanvibescoffee', label: 'Facebook' },
    { icon: '🐦', href: 'https://twitter.com/urbanvibescoffee', label: 'Twitter' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo_uv.png" alt="Urban Vibes Logo" className="footer-logo-image" />
              <span>URBAN VIBES</span>
            </div>
            <p className="footer-slogan">Delivery rápido, sabor artesanal</p>
          </div>
          
          <div className="footer-info">
            <h4>Horarios</h4>
            <p>Lunes a Domingo</p>
            <p>6:00 AM - 10:00 PM</p>
            <p>🚚 Delivery en 30 min</p>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="hashtag">#UrbanVibesCoffee</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Urban Vibes Coffee. Hecho con ❤️ y mucho café.</p>
          <p className="footer-thanks">Gracias por apoyar el café local colombiano</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer