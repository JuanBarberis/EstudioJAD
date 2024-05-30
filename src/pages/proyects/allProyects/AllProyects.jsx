import React, { useEffect } from 'react'
import './allproyects.css'
import { useNavigate } from 'react-router-dom'
import Imagen1 from '../../../assets/imagenes/imagen1.jpg'
import Imagen2 from '../../../assets/imagenes/imagen2.jpg'
import Imagen3 from '../../../assets/imagenes/imagen3.jpg'
import Imagen4 from '../../../assets/imagenes/imagen4.jpg'
import Imagen5 from '../../../assets/imagenes/imagen5.jpg'
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap'

const AllProyects = () => {

    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            nombre: 'Proyecto 1',
            imagen: Imagen1,
            className: 'clase1'

        },
        {
            id: 2,
            nombre: 'Proyecto 2',
            imagen: Imagen2,
            className: 'clase2'
        },
        {
            id: 3,
            nombre: 'Proyecto 3',
            imagen: Imagen3,
            className: 'clase1'
        },
        {
            id: 4,
            nombre: 'Proyecto 4',
            imagen: Imagen4,
            className: 'clase2'
        },
        {
            id: 5,
            nombre: 'Proyecto 5',
            imagen: Imagen5,
            className: 'clase1'
        },
        {
            id: 6,
            nombre: 'Proyecto 6',
            imagen: Imagen1,
            className: 'clase1'

        },
        {
            id: 7,
            nombre: 'Proyecto 7',
            imagen: Imagen2,
            className: 'clase2'
        },
        {
            id: 8,
            nombre: 'Proyecto 8',
            imagen: Imagen3,
            className: 'clase1'
        },
        {
            id: 9,
            nombre: 'Proyecto 9',
            imagen: Imagen4,
            className: 'clase2'
        },
        {
            id: 10,
            nombre: 'Proyecto 10',
            imagen: Imagen5,
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