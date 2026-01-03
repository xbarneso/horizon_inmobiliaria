import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PropertyModal from './PropertyModal'
import ImageCarousel from './ImageCarousel'
import './Properties.css'

const Properties = ({ onModalChange }) => {
  const [ref, isVisible] = useScrollAnimation()
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const properties = [
    {
      id: 1,
      title: "IMPRESIONANTE PISO CON ASOMBROSAS VISTAS",
      location: "L'Antiga Esquerra de l'Eixample, Barcelona Capital",
      price: 895000,
      bedrooms: 2,
      bathrooms: 2,
      area: 118,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af90?w=800"
      ],
      description: "Excepcional piso en el corazón del Eixample izquierdo con vistas panorámicas a la ciudad. Esta propiedad luminosa cuenta con diseño moderno, acabados de alta calidad y una distribución funcional. Perfecta para quienes buscan elegancia y comodidad en una de las zonas más exclusivas de Barcelona."
    },
    {
      id: 2,
      title: "ESPECTACULAR VIVIENDA DE 140 m² CON PÁRQUING",
      location: "Eixample (Fort Pienc), Barcelona Capital",
      price: 750000,
      bedrooms: 5,
      bathrooms: 2,
      area: 140,
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
      ],
      description: "Amplia vivienda familiar con 5 dormitorios y plaza de aparcamiento incluida. Ubicada en Fort Pienc, una zona bien comunicada y con excelentes servicios. Ideal para familias que buscan espacio y comodidad cerca del centro de Barcelona."
    },
    {
      id: 3,
      title: "VIVIENDA AMUEBLADA IDEAL COMO INVERSIÓN",
      location: "Eixample (Fort Pienc), Barcelona Capital",
      price: 420000,
      bedrooms: 1,
      bathrooms: 1,
      area: 82,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800"
      ],
      description: "Moderno apartamento completamente amueblado, listo para entrar a vivir. Excelente opción de inversión con gran potencial de alquiler. Situado en una zona estratégica del Eixample con fácil acceso al transporte público y servicios."
    },
    {
      id: 4,
      title: "APARTAMENTO MODERNO CON TERRAZA",
      location: "Gràcia, Barcelona Capital",
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      area: 105,
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
      ],
      description: "Encantador apartamento en el barrio de Gràcia con terraza privada. Combina el encanto del barrio con un diseño moderno y actual. Perfecto para disfrutar de la vida al aire libre en el centro de Barcelona."
    },
    {
      id: 5,
      title: "LOFT DIÁFANO EN EL CENTRO",
      location: "Ciutat Vella, Barcelona Capital",
      price: 520000,
      bedrooms: 2,
      bathrooms: 1,
      area: 95,
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af90?w=800",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
      ],
      description: "Espacioso loft en el corazón del casco antiguo de Barcelona. Espacio abierto con techos altos y grandes ventanales que aportan luz natural. Ubicación privilegiada cerca de los principales puntos de interés turístico y cultural."
    },
    {
      id: 6,
      title: "PENTHOUSE CON VISTAS AL MAR",
      location: "Barceloneta, Barcelona Capital",
      price: 1200000,
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
      ],
      description: "Lujoso penthouse con vistas espectaculares al mar Mediterráneo. Propiedad de alto standing con 4 dormitorios, 3 baños y amplias terrazas. Ubicado en primera línea de playa en el barrio de Barceloneta, ofrece un estilo de vida exclusivo frente al mar."
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handlePropertyClick = (property) => {
    // Abrir el modal
    setSelectedProperty(property)
    setIsModalOpen(true)
    
    // Notificar al App que el modal está abierto
    if (onModalChange) {
      onModalChange(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProperty(null)
    
    // Notificar al App que el modal está cerrado
    if (onModalChange) {
      onModalChange(false)
    }
  }

  return (
    <section id="properties" className="properties" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in-up' : ''}`}>
        <h2 className="section-title">Propiedades Destacadas</h2>
        <p className="section-subtitle">
          ESTAS SON NUESTRAS PROPIEDADES MÁS EXCLUSIVAS
        </p>
        
        <div className={`properties-grid ${isVisible ? 'visible' : ''}`}>
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="property-card"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="property-image">
                <ImageCarousel images={property.images || [property.image]} alt={property.title} />
                <div className="property-badge">Destacada</div>
              </div>
              <div className="property-content">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <div className="property-price">{formatPrice(property.price)}</div>
                <div className="property-features">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    {property.bedrooms} Dorm.
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                      <path d="M12 6v4M8 10h8"></path>
                    </svg>
                    {property.bathrooms} Baño{property.bathrooms > 1 ? 's' : ''}
                  </span>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                    {property.area} m²
                  </span>
                </div>
                <button 
                  className="property-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePropertyClick(property)
                  }}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <div className="properties-cta">
          <button className="btn btn-primary">Ver Todas las Propiedades</button>
        </div>
      </div>
    </section>
  )
}

export default Properties
