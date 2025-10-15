const Community = () => {
  const testimonials = [
    {
      text: "El mejor café que he probado en delivery. Llega súper rápido y siempre caliente ☕",
      author: "María C.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      text: "Mi latte de las mañanas nunca falla. Urban Vibes es parte de mi rutina diaria 💙",
      author: "Carlos R.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      text: "Los frappés están increíbles y el brownie... ¡no puedo parar de pedirlo! 🍫",
      author: "Ana L.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ]

  return (
    <section className="community-section">
      <div className="container">
        <h2 className="section-title">Somos Más que Café, Somos Comunidad</h2>
        <p className="community-intro">
          Miles de personas ya forman parte de la familia Urban Vibes. 
          Cada día llevamos sonrisas y energía a hogares y oficinas en toda la ciudad.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <span className="testimonial-author">- {testimonial.author}</span>
            </div>
          ))}
        </div>
        
        <div className="community-cta">
          <h3>¿Ya probaste nuestro café?</h3>
          <p>Comparte tu experiencia en redes sociales y etiquétanos</p>
          <div className="social-hashtags">
            <span>#UrbanVibesCoffee</span>
            <span>#CaféDelivery</span>
            <span>#CaféColombiano</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community