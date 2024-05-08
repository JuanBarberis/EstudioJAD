import React from 'react'
import { Header } from '../components/header/Header'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about/AboutUs'
import Proyects from '../pages/proyects/Proyects'
import Contact from '../pages/contact/Contact'

export const MainLayouts = () => {
    return (
        <>
            <Header />
            <Home />
            <AboutUs />
            <Proyects />
            <Contact />
        </>
    )
}
