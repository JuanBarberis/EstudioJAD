import React from 'react'
import './servicios.css'
import { PiLightbulbFilamentThin, PiKeyLight , PiPencilLineThin } from "react-icons/pi";
import { LiaToolsSolid, LiaPencilRulerSolid } from "react-icons/lia";

const Servicios = () => {

    const data = [
        {
            type: 'INTERIORISMO',
            text: 'Te acompañamos en el proceso de elegir juntos cada revestimiento y detalle que corone tu espacio.',
            icono: <PiLightbulbFilamentThin className="icono-servicio" />
        },
        {
            type: 'CONSTRUCCIÓN',
            text: 'Desarrollamos distintos sistemas constructivos según la necesidad y preferencia del cliente.',
            icono: <LiaPencilRulerSolid className="icono-servicio" />
        },
        {
            type: 'REFACCIÓN',
            text: 'Nos apasiona transformar espacios, viendo y explotando el máximo potencial que tienen.',
            icono: <LiaToolsSolid className="icono-servicio" />
        },
        {
            type: 'PLANOS',
            text: 'Relevamientos y proyectos, resolvemos de forma integral desde el 2D hasta el 3D.',
            icono: <PiPencilLineThin className="icono-servicio" />
        },
        {
            type: 'CONTRATACIÓN',
            text: 'Desde conducción técnica hasta llave en mano, elegí el que necesites y dispongas.',
            icono: <PiKeyLight  className="icono-servicio" />
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