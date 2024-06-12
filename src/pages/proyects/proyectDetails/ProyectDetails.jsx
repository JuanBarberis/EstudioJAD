import React, { useEffect } from 'react'
import './proyectDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import Imagen1 from '../../../assets/imagenes/betania-plazaII.jpg'
import betaniaPlaza1 from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.1.jpg'
import betaniaPlaza2 from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.2.jpg'
import betaniaPlaza3 from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.3.jpg'
import betaniaPlaza4 from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.4.jpg'
import betaniaPlaza5 from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.5.jpg'
import betaniaPlaza1Proceso from '../../../assets/imagenes/BETANIA-PLAZA-II-PROCESO.OBRA.1.jpg'
import betaniaPlaza2Proceso from '../../../assets/imagenes/BETANIA-PLAZA-II-PROCESO.OBRA.2.jpg'
import betaniaPlaza3Proceso from '../../../assets/imagenes/BETANIA-PLAZA-II-PROCESO.OBRA.3.jpg'
import betaniaPlaza4Proceso from '../../../assets/imagenes/BETANIA-PLAZA-II-PROCESO.OBRA.4.jpg'
import betaniaPlaza5Proceso from '../../../assets/imagenes/BETANIA-PLAZA-II-PROCESO.OBRA.5.jpg'
import casaAgPortada from '../../../assets/imagenes/Portada-home-1.jpg'
import casaAgFinalizada1 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.1.jpg'
import casaAgFinalizada2 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.2.jpg'
import casaAgFinalizada3 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.3.jpg'
import casaAgFinalizada4 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.4.jpg'
import casaAgFinalizada5 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.5.jpg'
import casaAgFinalizada6 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.6.jpg'
import casaAgFinalizada7 from '../../../assets/imagenes/Cocina-AG-FINAL.OBRA.7.jpg'
import casaAgProceso1 from '../../../assets/imagenes/Cocina-AG-PROCESO.OBRA.1.jpg'
import casaAgProceso2 from '../../../assets/imagenes/Cocina-AG-PROCESO.OBRA.2.jpg'
import casaAgProceso3 from '../../../assets/imagenes/Cocina-AG-PROCESO.OBRA.3.jpg'
import betaniaPlazaIFinal1 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.1.jpg'
import betaniaPlazaIFinal2 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.2.jpg'
import betaniaPlazaIFinal3 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.3.jpg'
import betaniaPlazaIFinal4 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.4.jpg'
import betaniaPlazaIFinal5 from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.5.jpg'
import betaniaPlazaIProceso1 from '../../../assets/imagenes/BETANIA-PLAZA-I-PROCESO.OBRA.1.jpg'
import betaniaPlazaIProceso2 from '../../../assets/imagenes/BETANIA-PLAZA-I-PROCESO.OBRA.2.jpg'
import betaniaPlazaIProceso3 from '../../../assets/imagenes/BETANIA-PLAZA-I-PROCESO.OBRA.3.jpg'
import betaniaPlazaIProceso4 from '../../../assets/imagenes/BETANIA-PLAZA-I-PROCESO.OBRA.4.jpg'
import betaniaPlazaIProceso5 from '../../../assets/imagenes/BETANIA-PLAZA-I-PROCESO.OBRA.5.jpg'

import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap';

const ProyectDetails = () => {
    const projectId = useParams();
    const navigate = useNavigate()

    // Aquí puedes obtener los detalles del proyecto usando el projectId
    // Por simplicidad, usamos datos estáticos. En una aplicación real, obtendrás datos de una API o un contexto.

    const projectData = {
        1: {
            nombre: 'BETANIA PLAZA II',
            descripcion: 'Descripción del Proyecto 1',
            portada: Imagen1,
            images: [
                { src: betaniaPlaza1, type: 'finalizado' },
                { src: betaniaPlaza2, type: 'finalizado' },
                { src: betaniaPlaza3, type: 'finalizado' },
                { src: betaniaPlaza4, type: 'finalizado' },
                { src: betaniaPlaza5, type: 'finalizado' },
                { src: betaniaPlaza1Proceso, type: 'proceso' },
                { src: betaniaPlaza2Proceso, type: 'proceso' },
                { src: betaniaPlaza3Proceso, type: 'proceso' },
                { src: betaniaPlaza4Proceso, type: 'proceso' },
                { src: betaniaPlaza5Proceso, type: 'proceso' },
            ],
            location: 'Nueva Cordoba',
            año: '2023',
            typeService: 'Arquitectura'
        },
        2: {
            nombre: 'CASA AG',
            descripcion: 'Descripción del Proyecto 2',
            portada: casaAgPortada,
            images: [
                { src: casaAgFinalizada1, type: 'finalizado' },
                { src: casaAgFinalizada2, type: 'finalizado' },
                { src: casaAgFinalizada3, type: 'finalizado' },
                { src: casaAgFinalizada4, type: 'finalizado' },
                { src: casaAgFinalizada5, type: 'finalizado' },
                { src: casaAgFinalizada6, type: 'finalizado' },
                { src: casaAgFinalizada7, type: 'finalizado' },
                { src: casaAgProceso1, type: 'proceso' },
                { src: casaAgProceso2, type: 'proceso' },
                { src: casaAgProceso3, type: 'proceso' },
               
            ],
            location: 'Villa Belgrano',
            año: '2023',
            typeService: 'Remodelación'
        },
        3: {
            nombre: 'BETANIA PLAZA I',
            descripcion: 'Descripción del Proyecto 1',
            portada: betaniaPlazaIFinal4,
            images: [
                { src: betaniaPlazaIFinal1, type: 'finalizado' },
                { src: betaniaPlazaIFinal2, type: 'finalizado' },
                { src: betaniaPlazaIFinal3, type: 'finalizado' },
                { src: betaniaPlazaIFinal4, type: 'finalizado' },
                { src: betaniaPlazaIFinal5, type: 'finalizado' },
                { src: betaniaPlazaIProceso1, type: 'proceso' },
                { src: betaniaPlazaIProceso2, type: 'proceso' },
                { src: betaniaPlazaIProceso3, type: 'proceso' },
                { src: betaniaPlazaIProceso4, type: 'proceso' },
                { src: betaniaPlazaIProceso5, type: 'proceso' },
            ],
            location: 'Nueva Cordoba',
            año: '2023',
            typeService: 'Arquitectura'
        },
    };

    const project = projectData[projectId.proyectId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }
    
    let lastType = null;

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
                    <p className='p-description-proyect-detail'>{project.location}</p>
                </div>
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>AÑO</h3>
                    <p className='p-description-proyect-detail'>{project.año}</p>
                </div>
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>TIPO DE SERVICIO</h3>
                    <p className='p-description-proyect-detail'>{project.typeService}</p>
                </div>
            </div>

            <div className='contain-image-proyect-detail'>
                {project.images.map((image, index) => {

                    const sectionTitle = image.type !== lastType ? (
                        <h2 key={`${image.type}-title`} className='title-proyecto-details'>
                            {image.type === 'finalizado' ? 'FINAL DE OBRA' : 'PROYECTO EN PROCESO'}
                        </h2>
                    ) : null;
                    lastType = image.type;

                    return (
                        <div key={index}>
                            {sectionTitle}
                            <div className='div-image-detail'>
                                <img className='image-proyect-detail' src={image.src} alt={`Imagen ${index + 1}`} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className='button-ver-todos' onClick={() => navigate(-1)}>Volver atras</button>
            <BotonWhatsapp />

        </div>
    )
}

export default ProyectDetails