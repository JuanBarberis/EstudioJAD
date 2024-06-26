import React from 'react'
import './menuhamburguesa.css'
import { motion } from "framer-motion";
import {  useLocation, useNavigate } from 'react-router-dom'

const MenuHamburguesa = () => {

    const navigate = useNavigate();
    const location = useLocation();

    
    const handleLinkClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    const navClass = location.pathname === '/all-proyects'
        ? 'nav-container-hamburguesa-black'
            : 'nav-container-hamburguesa';

    return (

        <motion.div
            className={navClass}
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='profile' >
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'inicio')}>INICIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'servicios')}>SERVICIOS</button>
                <button className='link-menu-hamburguesa' onClick={() => navigate('/all-proyects')}>PORTFOLIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'quienes-somos')}>ESTUDIO</button>
                <button className='link-menu-hamburguesa' onClick={() => handleLinkClick('/', 'contacto')}>CONTACTO</button>
            </div>
        </motion.div>
    )
}

export default MenuHamburguesa