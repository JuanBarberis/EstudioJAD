import React from 'react'
import {  NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../imagenes/logo.png'

export const Header = () => {
    return (
        <div className='nav-container'>
            <NavLink to={'/'} className='img-logo-link'>
                <img className='img-logo' src={logo} alt='img-logo' />
            </NavLink>
            <div className='link-container'>
                <NavLink to={'inicio'} className='link-path' activeClassName='active-link'>Inicio</NavLink>
                <NavLink to={'quienes-somos'} className='link-path' activeClassName='active-link'>Quienes Somos</NavLink>
                <NavLink to={'proyectos'} className='link-path' activeClassName='active-link'>Proyectos</NavLink>
                <NavLink to={'contacto'} className='link-path' activeClassName='active-link'>Contacto</NavLink>
            </div>

        </div>
    )
}
