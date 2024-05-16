import React from 'react'
import { Link } from 'react-scroll';
import './menuhamburguesa.css'
import { motion } from "framer-motion";

const MenuHamburguesa = ({ handleRender }) => {

    return (

        <motion.div
            className='nav-container-hamburguesa active'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -50 }} // Animación de salida
        >
            <div className='profile' onClick={handleRender}>
                <Link activeClass="active" onClick={handleRender} to="inicio" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa' >Inicio</Link>
                <Link activeClass="active" onClick={handleRender} to="quienes-somos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Quienes Somos</Link>
                <Link activeClass="active" onClick={handleRender} to="servicios" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Servicios</Link>
                <Link activeClass="active" onClick={handleRender} to="proyectos" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Proyectos</Link>
                <Link activeClass="active" onClick={handleRender} to="contacto" spy={true} smooth={true} offset={0} duration={800} className='link-menu-hamburguesa'  >Contacto</Link>
            </div>
        </motion.div>
    )
}

export default MenuHamburguesa