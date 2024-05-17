import React from 'react'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about/AboutUs'
import Servicios from '../pages/servicios/Servicios'
import Proyects from '../pages/proyects/Proyects'
import Contact from '../pages/contact/Contact'
import { Header } from '../components/header/Header'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Home />
            <Servicios />
            <Proyects />
            <AboutUs />
            <Contact />
        </>
    )
}

export default LandingPage