import React from 'react'
import { CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';
import './menuhamburguesa.css'

const MenuHamburguesa = ({ handleRender }) => {
    return (
        <div className='nav-container-hamburguesa active'>
            {/* <CgClose onClick={handleRender} className='close-menu' /> */}
            <div className='profile'>
                <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa' >Inicio</Link>
                <Link activeClass="active" to="quienes-somos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Quienes Somos</Link>
                <Link activeClass="active" to="proyectos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Proyectos</Link>
                <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Contacto</Link>
            </div>
        </div >
    )
}

export default MenuHamburguesa