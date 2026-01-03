import { useEffect, useRef } from 'react'
import ImageCarousel from './ImageCarousel'
import './PropertyModal.css'

const PropertyModal = ({ property, isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      
      // Centrar el modal en el viewport visible
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ 
            behavior: 'instant', 
            block: 'center', 
            inline: 'center' 
          })
        }
      }, 10)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen || !property) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div 
      className="property-modal-overlay" 
      onClick={onClose}
      ref={overlayRef}
    >
      <div 
        className="property-modal" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className="property-modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="property-modal-content">
          <div className="property-modal-image">
            <ImageCarousel 
              images={property.images || [property.image]} 
              alt={property.title} 
            />
          </div>
          
          <div className="property-modal-details">
            <h2 className="property-modal-title">{property.title}</h2>
            <p className="property-modal-location">{property.location}</p>
            
            <div className="property-modal-price">
              {formatPrice(property.price)}
            </div>
            
            <div className="property-modal-features">
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <div>
                  <span className="feature-label">Dormitorios</span>
                  <span className="feature-value">{property.bedrooms}</span>
                </div>
              </div>
              
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                  <path d="M12 6v4M8 10h8"></path>
                </svg>
                <div>
                  <span className="feature-label">Baños</span>
                  <span className="feature-value">{property.bathrooms}</span>
                </div>
              </div>
              
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                </svg>
                <div>
                  <span className="feature-label">Superficie</span>
                  <span className="feature-value">{property.area} m²</span>
                </div>
              </div>
            </div>
            
            {property.description && (
              <div className="property-modal-description">
                <h3>Descripción</h3>
                <p>{property.description}</p>
              </div>
            )}
            
            <div className="property-modal-actions">
              <button className="btn btn-primary" onClick={() => {
                // Aquí podrías agregar lógica para contactar
                window.location.href = '#contact'
                onClose()
              }}>
                Solicitar Información
              </button>
              <button className="btn btn-secondary" onClick={() => {
                // Aquí podrías agregar lógica para agendar visita
                window.location.href = '#contact'
                onClose()
              }}>
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyModal
