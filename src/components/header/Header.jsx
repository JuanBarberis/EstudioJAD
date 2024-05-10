import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/imagenes/logo.png'
import { Link } from 'react-scroll';
import MenuHamburguesa from '../menuHamburguesa/MenuHamburguesa';
import { IoMenu, IoClose } from "react-icons/io5";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(false);

    const handleRender = () => {
        setRender(!render)
        setIsOpen(!isOpen);
    }

    return (
        <div className='nav-container'>
            <Link to="inicio" spy={true} smooth={true} duration={800} className='img-logo'>
                <img src={logo} alt='img-logo' width={200} height={100} />
            </Link>
            {
                isOpen ?
                    <div className='div-menuhamburguesa'>
                        <IoClose onClick={handleRender} className='menuhamburguesa' />
                    </div>
                    :
                    <div className='div-menuhamburguesa'>
                        <IoMenu onClick={handleRender} className='menuhamburguesa' />
                    </div>
            }
            {render ? <MenuHamburguesa handleRender={handleRender} open={isOpen} /> : ''}

            <div className='link-container'>
                <Link className='link-path' to='inicio' spy={true} smooth={true} offset={0} duration={800}>Inicio</Link>
                <Link to='quienes-somos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Quienes Somos</Link>
                <Link to='proyectos' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Proyectos</Link>
                <Link to='contacto' className='link-path' spy={true} smooth={true} offset={0} duration={800}>Contacto</Link>
            </div>

        </div>


    )
}
