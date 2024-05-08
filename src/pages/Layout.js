import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayouts } from '../layouts/MainLayouts'
import Home from './home/Home'
import AboutUs from './about/AboutUs'
import Proyects from './proyects/Proyects'
import Contact from './contact/Contact'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            { path: 'inicio', element: <Home /> },
            { path: 'quienes-somos', element: <AboutUs /> },
            { path: 'proyectos', element: <Proyects /> },
            { path: 'contacto', element: <Contact /> },
        ]
    }
])