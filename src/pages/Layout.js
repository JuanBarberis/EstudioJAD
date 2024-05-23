import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayouts } from '../layouts/MainLayouts'
import Home from './home/Home'
import AboutUs from './about/AboutUs'
import Proyects from './proyects/Proyects'
import Contact from './contact/Contact'
import Servicios from './servicios/Servicios'
import ProyectDetails from './proyects/proyectDetails/ProyectDetails'
import LandingPage from '../layouts/LandingPage'
import Arquitecture from './arquitecture/Arquitecture'
import InteriorDesign from './interiorDesing/InteriorDesign'
import Construction from './construction/Construction'
import AllProyects from './proyects/allProyects/AllProyects'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        children: [
            { path: 'inicio', element: <Home /> },
            { path: 'quienes-somos', element: <AboutUs /> },
            { path: 'servicios', element: <Servicios /> },
            { path: 'contacto', element: <Contact /> },
            { path: 'proyectos', element: <Proyects /> },
        ]
    },
    {
        path: '/',
        element: < MainLayouts />,
        children: [
            { path: '/proyectos/:proyectId', element: <ProyectDetails /> },
            { path: '/arquitectura', element: <Arquitecture /> },
            { path: '/interiorismo', element: <InteriorDesign /> },
            { path: '/construccion', element: <Construction /> },
            { path: '/all-proyects', element: <AllProyects /> },
        ]
    }
])