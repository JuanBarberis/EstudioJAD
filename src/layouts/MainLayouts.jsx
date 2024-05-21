import React from 'react'
import { Header } from '../components/header/Header'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about/AboutUs'
import Proyects from '../pages/proyects/Proyects'
import Contact from '../pages/contact/Contact'
import Servicios from '../pages/servicios/Servicios'
import { Outlet } from 'react-router-dom'
import ProyectDetails from '../pages/proyects/proyectDetails/ProyectDetails'

export const MainLayouts = () => {
    return (
        <>
            
                {/* <Header /> */}
                <Outlet />
                <Contact />
         

        </>
    )
}
