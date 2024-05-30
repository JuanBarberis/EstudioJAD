import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/imagenes/logo-vector.png'
// import { Link } from 'react-scroll';
import MenuHamburguesa from '../menuHamburguesa/MenuHamburguesa';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const params = useParams()
    const navParams = params.proyectId
    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleRender = () => {
        setRender(!render)
        setIsOpen(!isOpen);
    }

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    const handleLinkClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };
    const navClass = location.pathname === '/all-proyects'
        ? 'nav-container-black'
        // : navParams ? 'nav-container-black'
            : (navbar ? 'nav-container-active' : 'nav-container');

    return (
        <div className={navClass}>
            <Link to="/inicio" spy={true} smooth={true} duration={800} className='img-logo'>
                <img src={logo} alt='img-logo' className='logo-nav' />
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
                {/* <Link className='link-path' to='inicio' spy={true} smooth={true} offset={0} duration={800}>INICIO</Link>
                <Link className='link-path' to='servicios' spy={true} smooth={true} offset={10} duration={800}>SERVICIOS</Link>
                <Link className='link-path' to='proyectos' spy={true} smooth={true} offset={-100} duration={800}>PORTFOLIO</Link>
                <Link className='link-path' to='quienes-somos' spy={true} smooth={true} offset={-50} duration={800}>ESTUDIO</Link>
                <Link className='link-path' to='contacto' spy={true} smooth={true} offset={0} duration={800}>CONTACTO</Link> */}
                <button className='link-path' onClick={() => handleLinkClick('/', 'inicio')}>INICIO</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'servicios')}>SERVICIOS</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'proyectos')}>PORTFOLIO</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'quienes-somos')}>ESTUDIO</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'contacto')}>CONTACTO</button>
            </div>

        </div>


    )
}
