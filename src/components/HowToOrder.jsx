const HowToOrder = () => {
  const steps = [
    {
      number: "1",
      title: "Elige tu bebida",
      description: "Explora nuestro menú y selecciona tu café favorito con el tamaño perfecto"
    },
    {
      number: "2", 
      title: "Haz tu pedido",
      description: "Contactanos por WhatsApp o nuestra plataforma. ¡Es súper fácil!"
    },
    {
      number: "3",
      title: "Recíbelo en minutos",
      description: "Preparamos tu orden al momento y la llevamos fresca hasta tu puerta"
    }
  ]

  return (
    <section className="how-to-order-section">
      <div className="container">
        <h2 className="section-title">¿Cómo Pedir? ¡Súper Fácil!</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToOrder