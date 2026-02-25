import './Footer.css'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer" id='contacto'>
      <div className="footer-content">

        <div className="footer-brand">
          <img src={Logo} alt="AC Energy" className="footer-logo" />
          <div className="footer-text">
            <h4>AC Energy</h4>
            <p>
              Soluciones en ingeniería y tecnología para proyectos comerciales,
              residenciales e industriales.
            </p>
          </div>
        </div>

        <div className='footer-contact'>
          <h4>Contacto</h4>
          <p>Email: ac.energy.peru@gmail.com</p>
          <p>
            Tel:  
            <a 
              href="https://wa.me/51923689925"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}+51 923 689 925
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AC Energy. Todos los derechos reservados.
        <p>Hecho por Josue Chamba B.</p>
      </div>
    </footer>
  )
}

export default Footer
