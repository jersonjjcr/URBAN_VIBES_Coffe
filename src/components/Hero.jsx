const Hero = ({ onOpenOrder }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Tu Café Favorito
            <span className="highlight"> Sin Salir de Casa</span>
          </h1>
          <p className="hero-subtitle">
            Café artesanal colombiano directo a tu puerta. 
            Sabor premium, delivery rápido y la frescura que necesitas para energizar tu día.
          </p>
          <p className="hero-schedule">
            📍 Entregamos de 6:00 AM a 10:00 PM | ⚡ Delivery en 30 minutos
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onOpenOrder}>
              🛒 Hacer Pedido
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('menu')}>
              Ver Menú
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-photo-container">
            <img src="/img1 (2).png" alt="Urban Vibes Coffee - Café Premium" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero