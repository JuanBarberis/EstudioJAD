import React from 'react'
import './servicios.css'
import { PiLightbulbFilamentThin, PiArmchairThin, PiHammerThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Servicios = () => {

    const navigate = useNavigate()
    const data = [
        {
            type: 'ARQUITECTURA',
            text: ['Proyecto', ' Obra', 'Remodelación'],
            icono: <PiLightbulbFilamentThin className="icono-servicio" />,
            navigation: '/arquitectura'
        },
        {
            type: 'INTERIORISMO',
            text: ['Asesoramiento', 'Diseño de interiores', 'Equipamiento'],
            icono: <PiArmchairThin className="icono-servicio" />,
            navigation: '/interiorismo'

        },
        {
            type: 'CONSTRUCCION',
            text: ['Sistema de contratación llave en mano'],
            icono: <PiHammerThin className="icono-servicio" />,
            navigation: '/construccion'
        },
    ]

    return (
        <div className='div-servicios' id='servicios'>
            <h2 className='title-servicios'>NUESTROS SERVICIOS</h2>
            <div className='div-map-servicios'>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='servicio-item'>

                                    <div className='icon-container'>
                                        {item.icono}
                                        <h2 className='type-container'>{item.type}</h2>
                                    </div>
                                    {item.text.map((textItem, textIndex) => (
                                        <p key={textIndex} className='text-container'>{` ${textItem}`}</p>
                                    ))}
                                    <button className='button-servicios' onClick={() => navigate(`${item.navigation}`)}>Leer mas</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Servicios