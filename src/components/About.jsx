import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const About = () => {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <section id="about" className="about" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in-up' : ''}`}>
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <p className="section-subtitle">
          En Horizon Inmobiliaria innovamos constantemente para ofrecer a nuestros clientes 
          los mejores servicios con respecto al sector inmobiliario. Te ayudamos a gestionar 
          aquello que necesites desde el principio hasta el final.
        </p>
        
        <div className="founders-section">
          <div className="founder-card">
            <div className="founder-image">
              <img 
                src="/images/founders/daniel-garcia.jpg" 
                alt="Daniel García - Socio Fundador"
                onError={(e) => {
                  // Fallback a la imagen online si no existe localmente
                  e.target.src = "https://horizoninmobiliaria.com/wp-content/uploads/2022/05/daniel-garcia-horizon-inmobiliaria.jpg"
                }}
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Daniel García</h3>
              <p className="founder-role">Socio fundador de Horizon Inmobiliaria</p>
              <p className="founder-description">
                Originario de Asturias en 1983, con estudios en Administración y Dirección 
                de Empresas de la UNED, Daniel ha encontrado su hogar en Barcelona desde 2010, 
                donde se enamoró profundamente de la ciudad condal. Desde 2013, se ha dedicado 
                apasionadamente al mundo inmobiliario, acumulando experiencia en prestigiosas 
                agencias como Century21, Engel&Voelkers, y Consorcio de Nuevas Creaciones y Negocio.
              </p>
              <p className="founder-description">
                Con una sólida trayectoria, Daniel ha decidido dar un paso más allá, dando vida 
                a su propio proyecto: Horizon Inmobiliaria en Barcelona. Basado en sus valores, 
                cree en la importancia del factor humano en el ámbito inmobiliario. Su lema, 
                «Construir una experiencia positiva con el cliente es la garantía de que éste 
                lo compartirá con otros», refleja su compromiso de observar, entender y cuidar 
                a los clientes en cada etapa del proceso de compra o venta, reconociendo las 
                distintas necesidades de cada persona.
              </p>
            </div>
          </div>

          <div className="founder-card founder-card-reverse">
            <div className="founder-image">
              <img 
                src="/images/founders/christian-vela.jpg" 
                alt="Christian Vela Ruiz - Socio Fundador"
                onError={(e) => {
                  // Fallback a la imagen online si no existe localmente
                  e.target.src = "https://horizoninmobiliaria.com/wp-content/uploads/2022/05/christian-vela-horizon-inmobiliaria.jpg"
                }}
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Christian Vela Ruiz</h3>
              <p className="founder-role">Socio fundador de Horizon Inmobiliaria</p>
              <p className="founder-description">
                Nacido en Barcelona en 1981 y licenciado en Ciencias Empresariales por la UB, 
                Christian es un emprendedor curioso y decidido. Guiado por la convicción de 
                humanizar su negocio, marca e ilusión, se ha propuesto ofrecer un trato amable, 
                único y diferencial a las personas.
              </p>
              <p className="founder-description">
                Inmerso en el sector inmobiliario, Christian brinda a sus clientes una experiencia 
                grata e inigualable, centrándose en la conexión persona a persona hasta lograr 
                satisfacer sus necesidades. Con experiencia como agente inmobiliario en Century21 
                y otras agencias, su residencia en Barcelona le ha otorgado un profundo conocimiento 
                del mercado local, permitiéndole entender de primera mano las necesidades de aquellos 
                que buscan su hogar ideal.
              </p>
              <p className="founder-description">
                Después de cometer los errores necesarios para llegar a este punto, Christian ha 
                decidido dar un giro de 180º en su carrera, aventurándose en la creación de su 
                propio negocio, Horizon Inmobiliaria. Su regla de oro: «Tratar a cada cliente como 
                si fuera un familiar tuyo».
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
