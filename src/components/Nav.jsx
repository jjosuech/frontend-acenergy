import './Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

function nav() {

    const [servicios, setServicios] = useState([])

    useEffect(() => {
        fetch("https://acenergy.onrender.com/api/servicios")
            .then(res => res.json())
            .then(data => setServicios(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <header className='nav-wrapper'>
            <nav className="nav">
                <div className='nav-brand'>
                    <img src={Logo} alt="AC Energy" className='nav-logo'/>
                    <h1 className='nav-title'>AC Energy</h1>
                </div>
                <ul className='nav-links'>
                    <li><Link to="/">Inicio</Link></li>


                    <li className="dropdown">
                        <Link to="/servicios">Servicios</Link>

                        <ul className="dropdown-menu">
                            {servicios.map(servicio => (
                                <li key={servicio.id}>
                                    {servicio.nombre}
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default nav