import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Mensaje enviado! Te contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const openWhatsApp = () => {
    const phoneNumber = "573027532474"
    const message = "¡Hola! Tengo una pregunta sobre Urban Vibes Coffee"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const contactInfo = [
    { icon: '📱', text: 'WhatsApp: +57 302 753 2474', action: openWhatsApp },
    { icon: '✉️', text: 'hola@urbanvibes.coffee' },
    { icon: '🕒', text: 'Lun-Dom: 6:00 AM - 10:00 PM' },
    { icon: '🚚', text: 'Cobertura: Zona urbana y alrededores' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">¡Hablemos de Café!</h2>
        <p className="contact-intro">
          ¿Tienes preguntas? ¿Quieres ser parte de nuestro equipo? ¿Ideas para nuevos sabores? 
          ¡Nos encanta escucharte!
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contáctanos</h3>
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className={`contact-item ${item.action ? 'clickable' : ''}`}
                onClick={item.action}
              >
                <span className="contact-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}

          </div>
          
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Tu nombre" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Tu email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Cuéntanos... ¿qué necesitas?" 
                rows="4" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact