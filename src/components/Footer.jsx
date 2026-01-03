import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Horizon Inmobiliaria</h3>
            <p>
              Tu hogar, nuestro camino. Innovamos constantemente para ofrecer 
              los mejores servicios inmobiliarios en Barcelona.
            </p>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#services">Comprar</a></li>
              <li><a href="#services">Vender</a></li>
              <li><a href="#services">Bioconstrucción</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#properties">Propiedades</a></li>
              <li><a href="#services">Servicios</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>Tel: 93 148 58 87</li>
              <li>Móvil: 633 28 77 63</li>
              <li>Email: administrador@horizoninmobiliaria.com</li>
              <li>C/ de la Diputació, 188 Barcelona</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; HORIZON INMOBILIARIA 2024</p>
          <div className="footer-links">
            <a href="#legal">AVISO LEGAL</a>
            <a href="#privacy">POLÍTICA DE PRIVACIDAD</a>
            <a href="#cookies">POLÍTICA DE COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
