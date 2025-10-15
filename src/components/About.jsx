const About = () => {
  const features = [
    { icon: '🌸', text: 'Bourbon Rosado Selectivo' },
    { icon: '🤝', text: 'Directo de Caficultores' },
    { icon: '🚚', text: 'Delivery en 30 Minutos' },
    { icon: '🏙️', text: 'Sabor Urbano Auténtico' }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Somos Urban Vibes Coffee</h2>
            <p>
              Nacimos en 2025 con una misión simple: llevar el mejor café colombiano 
              directo a tu hogar, oficina o donde necesites esa pausa perfecta. 
              Sin complicaciones, sin salir de casa.
            </p>
            <p>
              <strong>Nuestro secreto: Bourbon Rosado Selectivo.</strong> No trabajamos con cualquier café. 
              Nos especializamos en la variedad <em>Bourbon Rosado</em>, uno de los granos más exquisitos 
              y aromáticos que produce Colombia. Esta variedad especial, conocida por sus notas dulces, 
              frutales y su acidez equilibrada, es la base de todas nuestras preparaciones.
            </p>
            <p>
              <strong>Directo de finca a tu taza.</strong> Trabajamos mano a mano con caficultores 
              seleccionados de regiones como Huila, Nariño y Cauca. No hay intermediarios. 
              Visitamos las fincas, conocemos a los productores, entendemos sus procesos y 
              garantizamos precios justos que les permitan seguir cultivando este oro líquido.
            </p>
            <p>
              Creemos que cada sorbo debe contar una historia. Por eso cada grano de Bourbon Rosado 
              que llega a nuestras preparaciones ha sido cultivado con amor, procesado con dedicación 
              artesanal y tostado para resaltar esas notas únicas que solo esta variedad puede ofrecer.
            </p>
            <p>
              <strong>Más que café, impacto social.</strong> Cuando eliges Urban Vibes Coffee, 
              no solo disfrutas de una bebida excepcional. Apoyas directamente a familias caficultoras, 
              contribuyes a la preservación de variedades tradicionales como el Bourbon Rosado y 
              fortaleces la cadena de valor del café colombiano.
            </p>
            <p>
              <strong>Lo que nos hace diferentes:</strong> No tenemos local físico porque 
              preferimos invertir en calidad, en nuestros caficultores aliados y en llegar hasta ti 
              con la frescura que mereces. Somos café de origen, con propósito y delivery de verdad.
            </p>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="/ubv.png" alt="Urban Vibes Coffee Team" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About