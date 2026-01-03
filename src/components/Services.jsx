import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const Services = () => {
  const [ref, isVisible] = useScrollAnimation()
  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Comprar",
      description: "Te acompañamos en todo el proceso de compra, seas particular o inversor. Encontramos la propiedad perfecta para ti."
    },
    {
      id: 2,
      icon: "💰",
      title: "Vender",
      description: "Vendemos tu propiedad al mejor precio y en tiempo récord. Máxima transparencia y profesionalidad."
    },
    {
      id: 3,
      icon: "🌱",
      title: "Bioconstrucción",
      description: "Especialistas en construcción sostenible y respetuosa con el medio ambiente. El futuro de la construcción."
    },
    {
      id: 4,
      icon: "📋",
      title: "Asesoramiento",
      description: "Servicios de tasación, consultoría inmobiliaria y gestión completa de documentación legal."
    },
    {
      id: 5,
      icon: "🏗️",
      title: "Gestión Integral",
      description: "Gestionamos todo el proceso desde el principio hasta el final, para tu tranquilidad."
    },
    {
      id: 6,
      icon: "📊",
      title: "Inversores",
      description: "Oportunidades de inversión inmobiliaria con análisis detallado de rentabilidad y mercado."
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in-up' : ''}`}>
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones completas para todas tus necesidades inmobiliarias
        </p>
        
        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Más información →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
