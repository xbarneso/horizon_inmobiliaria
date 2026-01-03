import './Hero.css'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/barcelona-aerial.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-fallback"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          TU HOGAR,<br />NUESTRO CAMINO
        </h1>
        <p className="hero-subtitle">
          Descubre propiedades exclusivas en Barcelona
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('properties')}
          >
            Ver Propiedades
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Contáctanos
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
