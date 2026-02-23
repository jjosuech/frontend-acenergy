import './Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import servicios from '../data/servicios'

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='nav-wrapper'>
            <nav className="nav">
                
                <div className='nav-brand'>
                    <img src={Logo} alt="AC Energy" className='nav-logo'/>
                    <h1 className='nav-title'>AC Energy</h1>
                </div>

                {/* BOTÓN HAMBURGUESA */}
                <div 
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/">Inicio</Link></li>

                    <li className="dropdown">
                        <Link to="/servicios">Servicios</Link>

                        <ul className="dropdown-menu">
                            {servicios
                                .filter(servicio => servicio.activo)
                                .map(servicio => (
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

export default Nav