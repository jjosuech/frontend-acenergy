import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import '../css/Servicios.css'
import Footer from "../components/Footer"

function Servicios() {

  const [servicios, setServicios] = useState([])

  useEffect(() => {
    fetch("https://acenergy.onrender.com/api/servicios")
      .then(res => res.json())
      .then(data => setServicios(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    <Nav />

      <div className="servicios-container">

        <div className="servicios-banner">
          <h1>Nuestros Servicios</h1>
        </div>

        <div className="servicios-list">
          {servicios.map(servicio => (
            <div key={servicio.id} className="servicio-card">
              <h3>{servicio.nombre}</h3>
            </div>
          ))}
        </div>

      </div>

    <Footer />
    </>
  )
}

export default Servicios
