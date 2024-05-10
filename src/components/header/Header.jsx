import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/imagenes/logo.png'
import { Link } from 'react-scroll';
import MenuHamburguesa from '../menuHamburguesa/MenuHamburguesa';
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {

    const [render, setRender] = useState(false);
    const [navbar, setNavnar] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const handleRender = () => {
        // setRender(!render)
        setIsOpen(!isOpen);
        console.log(isOpen)
    }


    return (
        <div className='nav-container'>
            <Link to="inicio" spy={true} smooth={true} duration={800} className='img-logo'>
                <img src={logo} alt='img-logo' width={200} height={100} />
            </Link>
            {isOpen ? <FiX onClick={handleRender} className='menuhamburguesa' /> : <FiMenu onClick={handleRender} className='menuhamburguesa' />}
            {isOpen ? <MenuHamburguesa handleRender={handleRender} /> : ' '}
            <div className='link-container'>
                <Link className='link-path' to='inicio' spy={true} smooth={true} offset={0} duration={800}>Inicio</Link>
                <Link to='quienes-somos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Quienes Somos</Link>
                <Link to='proyectos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Proyectos</Link>
                <Link to='contacto' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Contacto</Link>
            </div>

        </div>
    )
}
