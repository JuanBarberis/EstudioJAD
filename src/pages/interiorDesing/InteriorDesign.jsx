import React, { useEffect } from 'react'
import './interiordesign.css'
import ReactImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jpg'
import imagen3 from '../../assets/imagenes/imagen3.jpg'
import imagen4 from '../../assets/imagenes/imagen4.jpg'
import imagen5 from '../../assets/imagenes/imagen5.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'
import { Link as ScrollLink } from 'react-scroll';
import Divider from '../../components/divider/Divider'


const InteriorDesing = () => {

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
      title: 'ASESORAMIENTO',
      subtitle: [
        {
          id: 1,
          title: 'ASESORIA',
          subtitle: '',
          description: ['Relevamiento de ambiente a intervenir', 'Moodboard con propuesta']
        },
      ],
      imagen: imagen1,
    },
    {
      id: 2,
      title: 'DISEÑO DE INTERIORES',
      subtitle: [
        {
          id: 1,
          title: 'PROCESO DE DISEÑO',
          subtitle: 'Proyecto de Interiorismo',
          description: ['	Busqueda del Estilo, croquis preliminares', '	Esquemas en 2D ', 'Maqueta virtual 3D ', 'Presupuesto de obra / Costo de la inversión ']
        },
        {
          id: 2,
          title: 'PROCESO DE OBRA',
          subtitle: 'Ejecucion de Obra de Interiorismo',
          description: ['Fabricacion e Instalacion de Mobiliarios con nuestro Equipo Especializado', 'Administracion de Materiales', 'Conduccion Tecnica, por profesionales en Interiorismo ']
        },
      ],
      imagen: imagen2,
    },
    {
      id: 3,
      title: 'EQUIPAMIENTO',
      subtitle: [
        {
          id: 1,
          title: 'FABRICACION A MEDIDA',
          subtitle: '',
          description: ['Diseño a medida de Mobiliario ', 'Fabricacion e Instalacion con nuestro Equipo de Carpinteros y Herreros']
        },
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
        <div className='div-text-interior'>
          <p className='texto-bienvenida-interior'>{'INTERIORISMO'}</p>
          <p className='texto-presentacion-interior'>{'Estudiamos a las texturas para que nos reciten sensaciones'}</p>
          <ScrollLink to="contacto" spy={true} smooth={true} offset={-70} duration={800} className='scroll-link-arquitecture'>
            <button className='boton-presupuesto'>Pedi tu presupuesto</button>
          </ScrollLink>
        </div>

        <div className='container-presentacion-interiorismo'>
          <div className='container-presentacion-h3-h6'>
            <h6 className='h6-presentacion-interiorismo'>NUESTRAS ESPECIALIDADES</h6>
            <h3 className='h3-presentacion-interiorismo'>Interiorismo para Alquileres Temporarios, Viviendas y Locales Comerciales</h3>
            <p className='p-presentacion-interiorismo'>Te guiamos en todas las etapas de tu proyecto con una propuesta integral. Nuestros servicios de interiorismo incluyen
            </p>
          </div>
          <div className='container-presentacion-interiorismo-p'>
            <ScrollLink to="ASESORAMIENTO" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-interiorismo'>ASESORAMIENTO </p>
            </ScrollLink>
            <Divider thickness={"1.5px"} height={"30px"} color={"black"} direction={"vertical"} />
            <ScrollLink to="DISEÑO DE INTERIORES" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-interiorismo'>DISEÑO DE INTERIORES</p>
            </ScrollLink>
            <Divider thickness={"1.5px"} height={"30px"} color={"black"} direction={"vertical"} />
            <ScrollLink to="EQUIPAMIENTO" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-interiorismo'>EQUIPAMIENTO</p>
            </ScrollLink>
          </div>
          <div className='container-recomendacion-interiorismo'>
            <p className='p-recomendacion-interiorismo'>Si queres darle vida a tus ambientes interiores, eso si.. ¡ con diseño y buen gusto! te recomendamos el servicio de Interiorismo </p>
          </div>
        </div>

        <div className='div-container-interiorismo'>
          {infoServicio.map((item, index) => {
            console.log(item)
            return (
              <>
                <div
                  id={item.title}
                  key={index}
                  className={`div-container-item ${index % 2 !== 0 ? 'div-container-item-reverse' : ''
                    }`}
                >

                  <div className='div-contain-info-interiorismo'>
                    <h1 className='title-interiorismo'>{item.title}</h1>
                    {item.id != 2 &&
                      (<Divider width={'80%'} />)
                    }
                    {item.subtitle.map((subItem, subIndex) => (
                      <div className='info-detallada-interiorismo' key={subIndex}>
                        <h2 className='h2-title-interiorismo'>{subItem.title}</h2>
                        <p className={subItem.subtitle ? 'p-subtitle-interiorismo' : ''}>
                          {subItem.subtitle}
                        </p>
                        {subItem.description.map((desc, descIndex) => (
                          <p key={descIndex} className='descripcion-interiorismo'>
                            {`- ${desc}`}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <img
                    src={item.imagen}
                    alt={item.title}
                    className='imagen-interiorismo'
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

export default InteriorDesing