import React from 'react'
import { Header } from '../components/header/Header'
import Contact from '../pages/contact/Contact'
import { Outlet } from 'react-router-dom'

export const MainLayouts = () => {
    return (
        <>
            
                <Header />
                <Outlet />
                <Contact />
         

        </>
    )
}
