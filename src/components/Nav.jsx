import './Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import servicios from '../data/servicios'

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = window.innerWidth <= 768;
    const [dropdownOpen, setDropdownOpen] = useState(false)

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
                    <li><Link to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >Inicio</Link></li>

                    
                    <li 
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link to="/servicios">Servicios</Link>

                        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                            {servicios
                            .filter(servicio => servicio.activo)
                            .map(servicio => (
                                <li key={servicio.id}>
                                <Link 
                                    to={`/servicios/${servicio.id}`}
                                    onClick={() => {
                                    setDropdownOpen(false)
                                    setMenuOpen(false)
                                    }}
                                >
                                    {servicio.nombre}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        {isMobile ? (
                            <a 
                            href="https://wa.me/51923689925" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Contacto
                            </a>
                        ) : (
                            <a href="#contacto">Contacto</a>
                        )}
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav