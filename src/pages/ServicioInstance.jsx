import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import servicios from "../data/servicios"
import "../css/ServicioInstance.css"

function ServicioInstance() {
  const { id } = useParams()
  const servicio = servicios.find(s => s.id === parseInt(id))

  if (!servicio) {
    return <h2>Servicio no encontrado</h2>
  }

  // Construimos rutas dinámicas
  const imagen1 = new URL(`../assets/servicios/${id}_1.png`, import.meta.url).href

  let imagen2
  try {
    imagen2 = new URL(`../assets/servicios/${id}_2.png`, import.meta.url).href
  } catch {
    imagen2 = null
  }

  return (
    <>
      <Nav />

      <div className="servicio-instance-container">

        <div className="servicio-content">

          {/* Imagen principal */}
          <img src={imagen1} alt={servicio.nombre} className="servicio-img" />

          {/* Texto */}
          <div className="servicio-texto">
              <h1>{servicio.nombre}</h1>
              <p>{servicio.descripcion}</p>
          </div>

          {/* Segunda imagen si existe */}
          {imagen2 && (
            <img src={imagen2} alt={servicio.nombre} className="servicio-img secundaria" onError={() => setMostrarImagen2(false)} />
          )}

        </div>

      </div>

      <Footer />
    </>
  )
}

export default ServicioInstance