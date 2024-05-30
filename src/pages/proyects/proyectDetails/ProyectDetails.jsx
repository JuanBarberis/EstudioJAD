import React, { useEffect } from 'react'
import './proyectDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import Imagen1 from '../../../assets/imagenes/imagen1.jpg'
import Imagen2 from '../../../assets/imagenes/imagen2.jpg'
import Imagen3 from '../../../assets/imagenes/imagen3.jpg'
import Imagen4 from '../../../assets/imagenes/imagen4.jpg'
import Imagen5 from '../../../assets/imagenes/imagen5.jpg'
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap';

const ProyectDetails = () => {
    const projectId = useParams();
    const navigate = useNavigate()

    // Aquí puedes obtener los detalles del proyecto usando el projectId
    // Por simplicidad, usamos datos estáticos. En una aplicación real, obtendrás datos de una API o un contexto.

    const projectData = {
        1: {
            nombre: 'Proyecto 1',
            descripcion: 'Descripción del Proyecto 1',
            portada: Imagen1,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        2: {
            nombre: 'Proyecto 2',
            descripcion: 'Descripción del Proyecto 2',
            portada: Imagen2,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        3: {
            nombre: 'Proyecto 3',
            descripcion: 'Descripción del Proyecto 3',
            portada: Imagen3,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        4: {
            nombre: 'Proyecto 4',
            descripcion: 'Descripción del Proyecto 4',
            portada: Imagen4,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        5: {
            nombre: 'Proyecto 5',
            descripcion: 'Descripción del Proyecto 5',
            portada: Imagen5,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        6: {
            nombre: 'Proyecto 6',
            descripcion: 'Descripción del Proyecto 6',
            portada: Imagen1,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        7: {
            nombre: 'Proyecto 7',
            descripcion: 'Descripción del Proyecto 7',
            portada: Imagen2,
            imagesProyect: [
                Imagen1,
                Imagen2,
                Imagen3,
                Imagen4,
            ],
            location: 'ejemplo1',
            año: '2024',
            typeService: 'Arquitectura'
        },
        // 8: { nombre: 'Proyecto 8', descripcion: 'Descripción del Proyecto 8', imagen: Imagen3 },
        // 9: { nombre: 'Proyecto 9', descripcion: 'Descripción del Proyecto 9', imagen: Imagen4 },
        // 10: { nombre: 'Proyecto 10', descripcion: 'Descripción del Proyecto 10', imagen: Imagen5 },
    };

    const project = projectData[projectId.proyectId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }


    return (
        <div className='proyect-detail'>
            <div className='container-proyect-detail-portada'>
                <img className='imagen-portada-proyect-detail' src={project.portada} alt={project.nombre} />
                <div className='container-name-proyect-detail'>
                    <h1 className='name-proyect-detail'>{project.nombre}</h1>
                </div>
            </div>
            <div className='contain-description-proyect-detail'>
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>UBICACIÓN</h3>
                    <p>{project.location}</p>
                </div>
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>AÑO</h3>
                    <p>{project.año}</p>
                </div>
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>TIPO DE SERVICIO</h3>
                    <p>{project.typeService}</p>
                </div>
            </div>

            <div className='contain-image-proyect-detail'>
                {
                    project.imagesProyect.map((item, index) => {
                        return (
                            <div className='div-image-detail' key={index}>
                                <img className='image-proyect-detail' src={item} />
                            </div>
                        )
                    })
                }
            </div>
            <button className='button-ver-todos' onClick={() => navigate(-1)}>Volver atras</button>
            <BotonWhatsapp />

        </div>
    )
}

export default ProyectDetails