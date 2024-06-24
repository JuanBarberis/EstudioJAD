import React, { useEffect } from 'react'
import './servicios.css'
import { PiLightbulbFilamentThin, PiArmchairThin, PiHammerThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
// import fondoServicios from '../../assets/imagenes/fondo-servicios.png'
import fondoServicios from '../../assets/imagenes/Portada-Servicios.jpg'
//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

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

    useEffect(()=>{
        Aos.init({
            duration:1200,
        })
    },{})

    return (
        <div className='div-servicios' id='servicios'>

            <div className='div-fondo-servicios' data-aos="fade-up">
                <img className='fondo-servicios' src={fondoServicios} />
                <div className='div-title-servicios'>
                    <h2 className='title-servicios'>NUESTROS </h2>
                    <h2 className='title-servicios2'> SERVICIOS</h2>
                </div>
            </div>


            <div className='div-map-servicios'data-aos="fade-up">
                {data.map((item, index) => (
                    <div key={index} className='servicio-item'>
                        <div className='icon-container'>
                            {item.icono}
                            <h2 className='type-container'>{item.type}</h2>
                        </div>
                        {item.text.map((textItem, textIndex) => (
                            <p key={textIndex} className='text-container'>{textItem}</p>
                        ))}
                        <button className='button-servicios' onClick={() => navigate(item.navigation)}>Leer más</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicios