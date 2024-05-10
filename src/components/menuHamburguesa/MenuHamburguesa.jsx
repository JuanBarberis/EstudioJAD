import React from 'react'
import { Link } from 'react-scroll';
import './menuhamburguesa.css'

const MenuHamburguesa = ({ handleRender }) => {
    return (
        <div className='nav-container-hamburguesa active' >
            <div className='profile'onClick={handleRender}>
                <Link activeClass="active" onClick={handleRender}  to="inicio" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa' >Inicio</Link>
                <Link activeClass="active" onClick={handleRender} to="quienes-somos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Quienes Somos</Link>
                <Link activeClass="active" onClick={handleRender} to="proyectos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Proyectos</Link>
                <Link activeClass="active" onClick={handleRender} to="contacto" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Contacto</Link>
            </div>
        </div >
    )
}

export default MenuHamburguesa