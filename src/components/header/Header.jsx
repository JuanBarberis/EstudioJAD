import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../imagenes/logo.png'
import { Link } from 'react-scroll';

export const Header = () => {
    return (
        <div className='nav-container'>
            <NavLink to={'/'} className='img-logo-link'>
                <img className='img-logo' src={logo} alt='img-logo' />
            </NavLink>
            <div className='link-container'>
                <Link className='link-path' to='inicio' spy={true} smooth={true} offset={0} duration={800}>Inicio</Link>
                <Link to='quienes-somos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Quienes Somos</Link>
                <Link to='proyectos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Proyectos</Link>
                <Link to='contacto' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Contacto</Link>
            </div>

        </div>
    )
}
