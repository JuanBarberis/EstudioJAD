import React, { useEffect } from 'react'
import './allproyects.css'
import { useNavigate } from 'react-router-dom'
import Imagen1 from '../../../assets/imagenes/betania-plazaII.jpg'
import Imagen2 from '../../../assets/imagenes/Cocina-AG-PORTADA PORTFOLIO.jpg'
import Imagen3 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.4.jpg'
import Ituzaingo from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.1.jpg'
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap'

const AllProyects = () => {

    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            nombre: 'BETANIA I',
            imagen: Imagen3,
            className: 'clase1'
        },
        {
            id: 2,
            nombre: 'BETANIA II',
            imagen: Imagen1,
            className: 'clase1'

        },
        {
            id: 3,
            nombre: 'CASA AG',
            imagen: Imagen2,
            className: 'clase2'
        },
        {
            id: 4,
            nombre: 'ITUZAINGO',
            imagen: Ituzaingo,
            className: 'clase1'

        },
      
     
    ]
    const handleProjectClick = (id) => {
        navigate(`/proyectos/${id}`);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='div-all-proyects'>
            <div className='div-all-proyectos-container'>
                {data.map((item, index) => (
                    <div
                        className='container-all-proyectos'
                        key={index}
                        onClick={() => handleProjectClick(item.id)}
                    >
                        <img
                            src={item.imagen}
                            className='todos-los-proyectos'
                            alt={item.nombre}
                        />
                        <h2 className='project-name-all'>{item.nombre}</h2>
                    </div>
                ))}
            </div>
            <button className='button-back' onClick={() => navigate(-1)}>Volver atrás</button>
            <BotonWhatsapp />

        </div>
    )
}

export default AllProyects