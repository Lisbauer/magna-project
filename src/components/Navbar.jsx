import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo_li_container'>
        <img className='logo_magna' src="./images/logo.png" alt="logo magna" />
            <ul className='ul_box'>
                <li><a href="">Home</a></li>
                <li><a href="">Quiénes somos</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar