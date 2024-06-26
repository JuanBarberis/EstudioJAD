import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/imagenes/logo-vector.png'
// import { Link } from 'react-scroll';
import MenuHamburguesa from '../menuHamburguesa/MenuHamburguesa';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate,  } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleRender = () => {
        setIsOpen(!isOpen);
    }

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
           
        }
    }
    


    const handleLinkClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    const navClass = location.pathname === '/all-proyects'
        ? 'nav-container-black'
        : (navbar ? 'nav-container-active' : 'nav-container');

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);


    return (
        <div className={navClass}>
            <Link to="/inicio" spy={true} smooth={true} duration={800} className='img-logo'>
                <img src={logo} alt='img-logo' className='logo-nav' />
            </Link>
            
               
                <div className='div-menuhamburguesa'>
                    {
                        !isOpen ? (
                            <IoMenu onClick={handleRender} className='menuhamburguesa' />
                        ) : (
                            <IoClose onClick={handleRender} className='menuhamburguesa' />
                        )
                    }
                </div>

            


            {isOpen && <MenuHamburguesa open={isOpen} />}

            <div className='link-container'>
                <button className='link-path' onClick={() => handleLinkClick('/', 'inicio')}>INICIO</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'servicios')}>SERVICIOS</button>
                <button className='link-path' onClick={() => navigate('/all-proyects')}>PORTFOLIO</button>
                {/* <button className='link-path' onClick={() => handleLinkClick('/', 'proyectos')}>PORTFOLIO</button> */}
                <button className='link-path' onClick={() => handleLinkClick('/', 'quienes-somos')}>ESTUDIO</button>
                <button className='link-path' onClick={() => handleLinkClick('/', 'contacto')}>CONTACTO</button>
            </div>

        </div>


    )
}
