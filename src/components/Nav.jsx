import './Nav.css'
import Logo from '../assets/logo.png'

function nav() {
    return (
        <header className='nav-wrapper'>
            <nav className="nav">
                <div className='nav-brand'>
                    <img src={Logo} alt="AC Energy" className='nav-logo'/>
                    <h1 className='nav-title'>AC Energy</h1>
                </div>
                <ul className='nav-links'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Servicios</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default nav