import './imagenSlider.css'
import { useEffect, useState } from "react"
import img1 from "../assets/medicionElectrica.png"
import img2 from "../assets/pozoTierra.png"
import img3 from "../assets/pozoTierra2.png"
import img4 from "../assets/sistemaSeguridad.png"
import img5 from "../assets/alarma-seguridad2.png"


const images = [img1, img2, img3, img4, img5]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
     <section className="slider-wrapper">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </section>
  )
}
