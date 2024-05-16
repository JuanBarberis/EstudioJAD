import React from 'react'
import './proyects.css'
import Imagen1 from '../../assets/imagenes/imagen1.jpg'
import Imagen2 from '../../assets/imagenes/imagen2.jpg'
import Imagen3 from '../../assets/imagenes/imagen3.jpg'
import Imagen4 from '../../assets/imagenes/imagen4.jpg'
import Imagen5 from '../../assets/imagenes/imagen5.jpg'
import { useNavigate } from 'react-router-dom'

const Proyects = () => {


    const navigate = useNavigate();
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
    ]

    const handleProjectClick = (id) => {
        navigate(`/proyectos/${id}`);
    };

    return (
        <div className='div-proyects' id='proyectos'>
            <h1 className='title-proyect'>Portfolio</h1>
            <div className='div-proyectos-container'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='container-proyectos' key={index}
                                onClick={() => handleProjectClick(item.id)}
                                
                            >
                                <img src={item.imagen} className={item.className === 'clase1' ? 'clase1' : 'clase2'} />
                                <h2 className='project-name'>{item.nombre}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Proyects;
