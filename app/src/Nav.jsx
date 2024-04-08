import { useState } from 'react'
import './Nav.css'
import alfaLogo from '/alfa.svg'

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container">
        <a className="alfaLogo"href="index.html">
            <img src={alfaLogo} className="logo" alt="Alfa logo" />
        </a>
        <button className="menu-toggle" onClick={handleMenuToggle}>Menú</button>
            <ul className={`menu ${menuOpen ? 'show-menu' : ''}`}>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Cuenta</a></li>
                <li><a href='#'>Acerca de</a></li>
            </ul>
      </div>
    </>
  )
}

export default NavigationBar;
