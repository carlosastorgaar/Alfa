import { useState } from 'react'
import './Nav.css'
import alfaLogo from '/alfa.svg'

function Nav() {
  
  return (
    <>
      <div className="conteiner">
        <a href="#" target="_blank">
            <img src={alfaLogo} className="logo" alt="Vite logo" />
        </a>
        <ul className="menu">
            <li>Inicio</li>
            <li>Cuenta</li>
            <li>Acerca de</li>
        </ul>
      </div>
    </>
  )
}

export default Nav
