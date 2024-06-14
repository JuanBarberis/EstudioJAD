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
import ituzaingoFinal1 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.1.jpg'
import ituzaingoFinal2 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.2.jpg'
import ituzaingoFinal3 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.3.jpg'
import ituzaingoFinal4 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.4.jpg'
import ituzaingoFinal5 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.5.jpg'
import ituzaingoFinal6 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.6.jpg'
import ituzaingoFinal7 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.7.jpg'
import ituzaingoFinal8 from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.8.jpg'
import ituzaingoProceso1 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.1.jpg'
import ituzaingoProceso2 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.2.jpg'
import ituzaingoProceso3 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.3.jpg'
import ituzaingoProceso4 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.4.jpg'
import ituzaingoProceso5 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.5.jpg'
import ituzaingoProceso6 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.6.jpg'
import ituzaingoProceso7 from '../../../assets/imagenes/ITUZAINGO-PROCESO.OBRA.7.jpg'
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap';

const ProyectDetails = () => {

    const projectId = useParams();
    const navigate = useNavigate()

    const projectData = {
        1: {
            nombre: 'BETANIA PLAZA I',
            descripcion: ['Les presentamos Betania Plaza I, un trabajo integral de Proyecto y Ejecución de Obra, con la condición del comitente de ser un departamento destinado únicamente para alquiler temporario ubicado en el Centro de Ciudad de Córdoba.', 'De la premisa de su funcionalidad nace la idea de trabajar con materiales simples, austeros y de bajo mantenimiento como la madera aplicando una identidad al espacio y creando una calidez que se acompaña con sus tonalidades neutras en los muros.', 'La integración de espejos orgánicos y el estratégico juego de la iluminación amplía notablemente la sensación del espacio logrando una transformación completa del departamento y generando el confort de sus habitantes temporarios.'],
            portada: betaniaPlazaIFinal4,
            imgFinalizado: [

                { src: betaniaPlazaIFinal1 },
                { src: betaniaPlazaIFinal2 },
                { src: betaniaPlazaIFinal3 },
                { src: betaniaPlazaIFinal4 },
                { src: betaniaPlazaIFinal5 },
            ],
            imgProceso: [
                { src: betaniaPlazaIProceso1 },
                { src: betaniaPlazaIProceso2 },
                { src: betaniaPlazaIProceso3 },
                { src: betaniaPlazaIProceso4 },
                { src: betaniaPlazaIProceso5 },
            ],
            location: 'Nueva Córdoba, Córdoba',
            año: '2023',
            typeService: 'Interiorismo '
        },
        2: {
            nombre: 'BETANIA PLAZA II',
            descripcion: ['Les presentamos Betania Plaza II, un trabajo integral de Proyecto y Ejecución de obra que se realizó paralelamente a Betania Plaza I', 'De la condición de sus comitentes, departamento destinado a ser utilizado como alquiler temporario mediante la plataforma Airbnb, nace la idea de trabajar con materiales simples, austeros y de bajo mantenimiento como la madera, aplicando una identidad al espacio y al mismo tiempo crear un contraste con las tonalidades frías elegidas para las paredes.', 'La intervención de un estratégico juego de la iluminación es la fórmula que nos lleva a lograr la sensación de amplitud de los ambientes que tanto se buscaba. De esta forma, se genera una transformación completa del departamento y el confort de sus habitantes temporarios.'],
            portada: Imagen1,
            imgFinalizado: [

                { src: betaniaPlaza1 },
                { src: betaniaPlaza2 },
                { src: betaniaPlaza3 },
                { src: betaniaPlaza4 },
                { src: betaniaPlaza5 },
            ],
            imgProceso: [
                { src: betaniaPlaza1Proceso },
                { src: betaniaPlaza2Proceso },
                { src: betaniaPlaza3Proceso },
                { src: betaniaPlaza4Proceso },
                { src: betaniaPlaza5Proceso },
            ],

            location: 'Nueva Córdoba, Córdoba',
            año: '2023',
            typeService: 'Interiorismo '
        },
        3: {
            nombre: 'CASA AG',
            descripcion: ['Les presentamos Cocina AG, un trabajo integral de Proyecto y Ejecución de Obra de una Remodelación que se le realizó a esta cocina de una vivienda ubicada en Villa Belgrano, zona norte de la Ciudad de Córdoba. Del encargo de sus dueños de cambiarle la cara y modernizar este espacio tan importante dentro de la casa y sumarle un valor agregado a la propiedad, nace la idea de trabajar con un diseño atemporal y funcional sobre todas la cosas.', 'La paleta de colores neutros como el gris topo dialogan con las vetas de la Piedra PuraStone quien es la protagonista en este proyecto. Los muebles laqueados blanco acompañan con su brillo y suman al gran valor del ambiente.', 'Como siempre la intervención de la estratégica iluminación en el proyecto termina de cerrar el diseño y le aporta su calidez.La reorganización y estudiada ubicación de los artefactos de cocina junto al diseño de los muebles que amplían el lugar de guardado, le generaron la funcionalidad deseada a los comitentes, logrando una cocina amplia y cómoda para sus habitantes.'],
            portada: casaAgPortada,
            imgFinalizado: [
                { src: casaAgFinalizada1 },
                { src: casaAgFinalizada2 },
                { src: casaAgFinalizada3 },
                { src: casaAgFinalizada4 },
                { src: casaAgFinalizada5 },
                { src: casaAgFinalizada6 },
                { src: casaAgFinalizada7 },
            ],
            imgProceso: [
                { src: casaAgProceso1 },
                { src: casaAgProceso2 },
                { src: casaAgProceso3 },
            ],

            location: 'Villa Belgrano, Cordoba',
            año: '2022',
            typeService: 'Remodelación'
        },
        4: {
            nombre: 'ITUZAINGO',
            descripcion: ['Les presentamos Ituzaingó, un trabajo integral de Proyecto y Ejecución de Obra, la condición del comitente consistia en un departamento que iba a ser destinado para alquiler temporario mediante la plataforma Airbnb, ubicado en Nueva Cordoba, zona céntrica de nuestra Ciudad. De la premisa de su funcionalidad nace la idea de trabajar con materiales simples, austeros y de bajo mantenimiento como la madera utilizando la misma en sus diversas texturas para aplicar una identidad al espacio y crear un diálogo armónico con las tonalidades neutras elegidas para esta tipología.', 'El diseño estratégico de la iluminación junto al juego de espejos amplios pensados en ubicaciones claves, es la fórmula que nos lleva a lograr la sensación de amplitud del espacio que tanto se buscaba. La elección de la correcta Decoración como último detalle termina de generar así una transformación completa del departamento y lograr el confort de sus habitantes temporarios, realzando de esta manera el valor del alquiler de la propiedad.'],
            portada: ituzaingoFinal1,
            imgFinalizado: [
                { src: ituzaingoFinal1 },
                { src: ituzaingoFinal2 },
                { src: ituzaingoFinal3 },
                { src: ituzaingoFinal4 },
                { src: ituzaingoFinal5 },
                { src: ituzaingoFinal6 },
                { src: ituzaingoFinal7 },
                { src: ituzaingoFinal8 },
            ],
            imgProceso: [
                { src: ituzaingoProceso1 },
                { src: ituzaingoProceso2 },
                { src: ituzaingoProceso3 },
                { src: ituzaingoProceso4 },
                { src: ituzaingoProceso5 },
                { src: ituzaingoProceso6 },
                { src: ituzaingoProceso7 },
            ],

            location: 'Nueva Córdoba, Córdoba',
            año: '2023',
            typeService: 'Interiorismo'
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
                    <h2 className='obras-proyect-detail'>OBRAS</h2>
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

            <div className='div-title-projet-detail'>
                <h2 className='title-project'>{project.nombre}</h2>
                {project.descripcion.map((item) => {
                    return (
                        <p className='description-project-detail'>{item}</p>

                    )
                })}
            </div>

            <div className='contain-image-proyect-detail'>
                <h2 className='title-proyecto-details'>
                    FINAL DE OBRA
                </h2>
                <div className='div-section-title'>
                    {
                        project.imgFinalizado.map((item, index) => {
                            return (
                                <>
                                    <div className='div-image-detail'>
                                        <img className='image-proyect-detail' src={item.src} alt={project.nombre} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <h2 className='title-proyecto-details'>
                    PROYECTO EN PROCESO " EL ANTES "
                </h2>
                <div className='div-section-title'>
                    {
                        project.imgProceso.map((item, index) => {
                            return (
                                <>
                                    <div className='div-image-detail'>
                                        <img className='image-proyect-detail' src={item.src} alt={project.nombre} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <button className='button-ver-todos' onClick={() => navigate(-1)}>Volver atras</button>
            <BotonWhatsapp />

        </div>
    )
}

export default ProyectDetails