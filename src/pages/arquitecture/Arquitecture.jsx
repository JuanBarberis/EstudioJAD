import React, { useEffect } from 'react'
import './arquitecture.css'
import ReactImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jpg'
import imagen3 from '../../assets/imagenes/imagen3.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'
import { Link as ScrollLink } from 'react-scroll';
import Divider from '../../components/divider/Divider'

const Arquitecture = () => {


  const carruselImage = [
    {
      original: imagen1,
      thumbnail: imagen1,
      description: 'ARQUITECTURA'
    },
    {
      original: imagen2,
      thumbnail: imagen2,
      description: 'INTERIORISMO'
    },
    {
      original: imagen3,
      thumbnail: imagen3,
      description: 'CONSTRUCCION '
    },

  ]

  const infoServicio = [
    {
      id: 1,
      title: 'PROYECTO',
      subtitle: [
        {
          id: 1,
          title: 'PROCESEO DE DISEÑO',
          subtitle: 'Anteproyecto',
          description: ['Busqueda del diseño, croquis preliminares', 'Planos de Arquitectura ', 'Maqueta virtual 3D ', 'Renders, imágenes fotorealistas en 3D ']
        },
        {
          id: 2,
          title: 'PROCESO TECNICO',
          subtitle: 'Proyecto Ejecutivo',
          description: ['Proyecto de Ingeniería ', '	Proyecto de Instalaciones ', 'Plano Municipal según Normativa del Municipio', 'Computo Métrico de materiales', 'Presupuesto de Obra / Costo de la Inversión']
        }
      ],
      imagen: imagen1,
    },
    {
      id: 2,
      title: 'OBRA',
      subtitle: [
        {
          id: 1,
          title: 'PROCESO DE EJECUCION DE OBRA',
          subtitle: '',
          description: ['	Plan de Avance con Tiempos y Recursos según Etapas de la obra', '	Tramites preliminares para el inicio de obra (permiso de edificación, alta de servicios, cerco de obra, obrador, etc.) ', 'Administración de Materiales/Recursos', 'Equipos de Trabajos Especializados para cada Etapa', 'Dirección Técnica de obra por Profesionales designados']
        },
      ],
      imagen: imagen2,
    },
    {
      id: 3,
      title: 'REMODELACIÓN',
      subtitle: [
        {
          id: 1,
          title: 'PROCESEO DE DISEÑO',
          subtitle: 'Proyecto de Refacción',
          description: ['Releavamiento fotográfico y medidas de los espacios a intervenir', 'Planteo de ideas preliminares', 'Planos 2D del proyecto de Refaccion', 'Presupuesto de obra / Costo de la Inversión']
        },
        {
          id: 2,
          title: 'PROCESO DE OBRA',
          subtitle: 'Ejecución de Obra de Refacción',
          description: ['Administración de Materiales/Recursos', '	Equipos de Trabajos Especializados ', 'Dirección Técnica de obra por Profesionales designados']
        }
      ],
      imagen: imagen3,
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='div-arquitecture'>
        <ReactImageGallery
          items={carruselImage}
          showNav={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          autoPlay={true}
          slideDuration={4000}
          slideInterval={3000}
          renderItem={(item) => (
            <div className="arquitecture-gallery">
              <img src={item.original} className='img-arquitecture-carrousel' alt={item.description} />

            </div>
          )}
        />
        <div className='div-text-arquitectura'>
          <p className='texto-bienvenida-arquitectura'>{'ARQUITECTURA'}</p>
          <p className='texto-presentacion-arquitectura'>{'Transformamos los espacios vacíos en escenarios con vida'}</p>
          <ScrollLink to="contacto" spy={true} smooth={true} offset={-70} duration={800} className='scroll-link-arquitecture'>
            <button className='boton-presupuesto'>Pedi tu presupuesto</button>
          </ScrollLink>
        </div>

        <div className='container-presentacion-arquitectura'>
          <div className='container-presentacion-h3-h6'>
            <h6 className='h6-presentacion-arquitectura'>NUESTRAS ESPECIALIDADES</h6>
            <h3 className='h3-presentacion-arquitectura'>Arquitectura Residencial, Comercial y Corporativa</h3>
            <p className='p-presentacion-arquitectura'>Te guiamos en todas las etapas de tu proyecto con una propuesta integral. Nuestros servicios de arquitectura incluyen
            </p>
          </div>
          <div className='container-presentacion-arquitectura-p'>
            <ScrollLink to="PROYECTO" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-arquitectura'>PROYECTO</p>
            </ScrollLink>
            <Divider thickness={"1px"} height={"30px"} color={"black"} direction={"vertical"} />
            <ScrollLink to="OBRA" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-arquitectura'>OBRA</p>
            </ScrollLink>
            <Divider thickness={"1.5px"} height={"30px"} color={"black"} direction={"vertical"} />
            <ScrollLink to="REMODELACIÓN" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-arquitectura'>REMODELACIÓN</p>
            </ScrollLink>
          </div>
          <div className='container-recomendacion-arquitectura'>
            <p className='p-recomendacion-arquitectura'>si contas con un terreno, te recomendamos los servicios de Proyecto + Obra </p>
          </div>
        </div>

        <div className='div-container-arquitecture'>
          {infoServicio.map((item, index) => {
            return (
              <>
                {
                  item.id === 3 &&
                  (
                    <div key={index} className='container-remodelacion-propiedad'>
                      <p className='p-remodelacion-propiedad'>Para remodelar o ampliar tu vivienda existente, consulta nuestro servicio de Remodelación a continuación</p>
                    </div>
                  )
                }

                <div
                  id={item.title}
                  key={index}
                  className={`div-container-item ${index % 2 !== 0 ? 'div-container-item-reverse' : ''
                    }`}
                >

                  <div className='div-contain-info'>
                    <h1 className='title-arquitectura'>{item.title}</h1>
                    {item.subtitle.map((subItem, subIndex) => (
                      <div className='info-detallada-arquitectura' key={subIndex}>
                        <h2 className='h2-title-arquitectura'>{subItem.title}</h2>
                        <p className={subItem.subtitle ? 'p-subtitle-arquitectura' : ''}>
                          {subItem.subtitle}
                        </p>
                        {subItem.description.map((desc, descIndex) => (
                          <p key={descIndex} className='descripcion-arquitectura'>
                            {`- ${desc}`}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <img
                    src={item.imagen}
                    alt={item.title}
                    className='imagen-arquitecture'
                  />
                </div>
              </>
            )
          })

          }
        </div>
      </div>
      <BotonWhatsapp />
    </>

  )
}

export default Arquitecture