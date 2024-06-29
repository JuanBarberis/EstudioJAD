import React, { useEffect } from 'react'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about/AboutUs'
import Servicios from '../pages/servicios/Servicios'
import Contact from '../pages/contact/Contact'
import { Header } from '../components/header/Header'
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const LandingPage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.sectionId) {
            scroller.scrollTo(location.state.sectionId, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <>
            <Header />
           
            <div id='inicio'><Home /></div>
            <div id='servicios'><Servicios /></div>
            {/* <div id='proyectos'><Proyects /></div> */}
            <div id='quienes-somos'><AboutUs /></div>
            <div id='contacto'><Contact /></div>
        </>
    )
}

export default LandingPage