import { useState } from 'react'
import './ImageCarousel.css'

const ImageCarousel = ({ images, alt = "Imagen" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        {images.length > 1 && (
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
        )}
        
        <div className="carousel-slide-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={image} alt={`${alt} - ${index + 1}`} />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <button 
            className="carousel-button carousel-button-next" 
            onClick={goToNext}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
