import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se implementaría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          ESTAREMOS ENCANTADOS DE AYUDARTE
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Teléfono</h3>
              <p>93 148 58 87</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Móvil</h3>
              <p>633 28 77 63</p>
              <p>613 00 61 35</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>administrador@horizoninmobiliaria.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Dirección</h3>
              <p>C/ de la Diputació, 188</p>
              <p>Barcelona</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Horario</h3>
              <p>Lunes-Viernes</p>
              <p>9:00 – 17:30</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre (Obligatorio)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email (Obligatorio)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono (Obligatorio)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="123 456 789"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje (Obligatorio)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntanos cómo podemos ayudarte..."
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox" required />
                <span>Estoy de acuerdo con la política de privacidad. (Obligatorio)</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-form">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
