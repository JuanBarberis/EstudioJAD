import React, { useEffect } from 'react'
import './proyectDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap';
import projectData from '../../../assets/utils/ProjectData';

//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

const ProyectDetails = () => {

    const projectId = useParams();
    const navigate = useNavigate()


    const project = projectData[projectId.proyectId];

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({duration:1200,})
    }, []);

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }


    return (
        <div className='proyect-detail'>
            <div className='container-proyect-detail-portada'>
                <img className='imagen-portada-proyect-detail' src={project.portada} alt={project.nombre} />
                <div className='container-name-proyect-detail' data-aos='fade-up'>
                    <h2 className='obras-proyect-detail'>OBRAS</h2>
                    <h1 className='name-proyect-detail'>{project.nombre}</h1>
                </div>
            </div>
            <div className='contain-description-proyect-detail' data-aos='fade-up'>
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
                <div className='contain-location-proyect-detail'>
                    <h3 className='title-description-proyect-detail'>CATEGORIA</h3>
                    <p className='p-description-proyect-detail'>{project.category}</p>
                </div>
            </div>

            <div className='div-title-projet-detail' data-aos='fade-up'>
                <h2 className='title-project'>{project.nombre}</h2>
                {project.descripcion.map((item) => {
                    return (
                        <p className='description-project-detail'>{item}</p>

                    )
                })}
            </div>

            <div className='contain-image-proyect-detail'>
                <h2 className='title-proyecto-details' data-aos='fade-up'>
                    FINAL DE OBRA
                </h2>
                <div className='div-section-title'>
                    {
                        project.imgFinalizado.map((item, index) => {
                            return (
                                <>
                                    <div className='div-image-detail' data-aos='fade-up'>
                                        <img className='image-proyect-detail' src={item.src} alt={project.nombre} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <h2 className='title-proyecto-details' data-aos='fade-up'>
                    PROCESO DE OBRA " ANTES "
                </h2>
                <div className='div-section-title'>
                    {
                        project.imgProceso.map((item, index) => {
                            return (
                                <>
                                    <div className='div-image-detail' data-aos='fade-up'>
                                        <img className='image-proyect-detail' src={item.src} alt={project.nombre} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <button data-aos='fade-up' className='button-ver-todos' onClick={() => navigate(-1)}>Volver atras</button>
            <BotonWhatsapp />

        </div>
    )
}

export default ProyectDetails