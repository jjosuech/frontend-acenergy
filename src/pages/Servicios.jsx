import Nav from "../components/Nav"
import '../css/Servicios.css'
import Footer from "../components/Footer"
import servicios from "../data/servicios"
import { Link } from "react-router-dom"

function Servicios() {

  return (
    <>
    <Nav />

      <div className="servicios-container">

        <div className="servicios-banner">
          <h1>Nuestros Servicios</h1>
        </div>

        <div className="servicios-list">
          {servicios
            .filter(servicio => servicio.activo)
            .map(servicio => (
              <Link 
                to={`/servicios/${servicio.id}`} 
                key={servicio.id} 
                className="servicio-card"
              >
                <h3>{servicio.nombre}</h3>
              </Link>
          ))}
        </div>
      </div>

    <Footer />
    </>
  )
}

export default Servicios
