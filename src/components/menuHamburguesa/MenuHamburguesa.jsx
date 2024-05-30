import React, { useState } from 'react'
// import { Link } from 'react-scroll';
import './menuhamburguesa.css'
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const MenuHamburguesa = ({ handleRender }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const params = useParams()
    const navParams = params.proyectId
    const handleLinkClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    const navClass = location.pathname === '/all-proyects'
        ? 'nav-container-hamburguesa-black'
        // : navParams ? 'nav-container-hamburguesa-black'
            : 'nav-container-hamburguesa';

    return (

        <motion.div
            className={navClass}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='profile' onClick={handleRender}>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'inicio')}>INICIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'servicios')}>SERVICIOS</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'proyectos')}>PORTFOLIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'quienes-somos')}>ESTUDIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'contacto')}>CONTACTO</button>
            </div>
        </motion.div>
    )
}

export default MenuHamburguesa