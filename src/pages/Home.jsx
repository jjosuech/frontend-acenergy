import { useEffect, useState, useRef } from 'react'
import "../css/Home.css";
import Gif from "../assets/energiaElectrica.gif";
import Aliados from "../assets/AliadoSertpro.png";
import Aliado2 from "../assets/AliadosCoensa.png";
import Aliado3 from "../assets/logobuldog.png";
import InfoImage from "../assets/transparentinfo.png";
import Ingeniero1 from "../assets/ingenieroElectrico1.png";
import Ingeniero2 from "../assets/ingenieroElectrico2.png";
import obrero from "../assets/obrero.png";

import Nav from "../components/Nav";
import ImageSlider from "../components/imagenSlider";
import Footer from "../components/Footer";


function Home() {
  useEffect(() => {
    const section = document.querySelector('.about-parallax')
    const image = document.querySelector('.about-image')

    if (!section || !image) return

    const handleScroll = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches

      // EN MÓVIL
      if (isMobile) {
        image.style.transform = "none"
        return
      }

      // EN PC 
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height)

        const translate = (progress - 0.5) * 120

        image.style.transform = `translateY(${translate}px) scale(1.2)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])


  return (
    <>
      <Nav />
      <ImageSlider />

      <main className='main-content'>
        <div className="engineer-container">
          <img src={Ingeniero1} alt="Ingeniero" className="engineer-img img-default" />
          <img src={Ingeniero2} alt="Ingeniero saludando" className="engineer-img img-hover" />
        </div>

        <div className="mission-vision">
          <h2>Misión</h2>
          <p>Brindar soluciones integrales en servicios generales e ingeniería, 
            garantizando calidad, seguridad y eficiencia en cada proyecto, mediante el uso de 
            tecnología confiable y un equipo altamente capacitado.</p>
          <h2>Visión</h2>
          <p>Ser una empresa líder y referente en servicios generales e ingeniería, 
            reconocida por su compromiso, innovación y excelencia en la ejecución de proyectos a nivel nacional.</p>
        </div>
      </main>

      <section className="stats-section" style={{backgroundImage: `url(${obrero})`}}>
        <div className='stats'>
          <Stat number={10} suffix="+" text="Años de experiencia" />
          <Stat number={500} suffix="+" text="Proyectos realizados" />
          <Stat number={100} suffix="%" text="Seguridad y confianza" />
        </div>
      </section>
      
      {/* ===== BLOQUE COMO LA IMAGEN DE REFERENCIA ===== */}
      <section className="about-parallax">
        <div className="about-text">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos una empresa de ingeniería especializada en el desarrollo de
            soluciones integrando lo último en tecnología para seguridad electrónica,
            telecomunicaciones y redes eléctricas.
          </p>
          <p>
            Garantizamos resultados de alto nivel técnico con excelente concepto
            arquitectónico y respaldo de las mejores marcas del mercado.
          </p>
        </div>

        

        <div className="about-image-wrapper">
          <img
            src={InfoImage}
            alt="Equipo de trabajo"
            className="about-image"
          />
        </div>
      </section>

      <div className="gif-container">
        <img 
          src={Gif} 
          alt="GIF de energía" 
          className="background-gif"
        />
        <div className='overlay-content'>
          <h3 className='overlay-text'>Socios Confiables</h3>
          <img src={Aliados}alt="Empresa aliada" className="overlay-logo"/>
          <img src={Aliado3} alt="Empresa aliada3" className='overlay-logo3' />
          <img src={Aliado2} alt="Empresa alidas2"className='overlay-logo2'/>
        </div>
      </div>




      
      <Footer />
    </> 
  )
}

function Stat({ number, suffix, text }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          let current = 0
          const increment = number / 40

          const interval = setInterval(() => {
            current += increment
            if (current >= number) {
              setCount(number)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, 25)
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [number])

  return (
    <div className="stat" ref={ref}>
      <h3>
        {count}
        {suffix}
      </h3>
      <span>{text}</span>
    </div>
  )
}

export default Home
