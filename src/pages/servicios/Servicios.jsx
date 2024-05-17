import React from 'react'
import './servicios.css'
import { PiLightbulbFilamentThin, PiKeyLight, PiPencilLineThin } from "react-icons/pi";
import { LiaToolsSolid, LiaPencilRulerSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const Servicios = () => {

    const navigate = useNavigate()
    const data = [
        {
            type: 'ARQUITECTURA',
            text: 'Te acompañamos en el proceso de elegir juntos cada revestimiento y detalle que corone tu espacio.',
            icono: <PiLightbulbFilamentThin className="icono-servicio" />,
            navigation: '/arquitectura'
        },
        {
            type: 'INTERIORISMO',
            text: 'Desarrollamos distintos sistemas constructivos según la necesidad y preferencia del cliente.',
            icono: <LiaPencilRulerSolid className="icono-servicio" />,
            navigation: '/interiorismo'

        },
        {
            type: 'CONSTRUCCION',
            text: 'Nos apasiona transformar espacios, viendo y explotando el máximo potencial que tienen.',
            icono: <LiaToolsSolid className="icono-servicio" />,
            navigation: '/construccion'
        },
    ]

    return (
        <div className='div-servicios' id='servicios'>
            {/* <h2 className='title-servicios'>Nuestros Servicios</h2> */}
            <div className='div-map-servicios'>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='servicio-item'>
                                    <div className='icon-container'>
                                        {item.icono}
                                    </div>
                                    <h2 className='type-container'>{item.type}</h2>
                                    <p className='text-container'>{item.text}</p>
                                    <button className='button-servicios' onClick={()=>navigate(`${item.navigation}`)}>Leer mas</button>
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