import React, { useEffect } from 'react'
import './construction.css'
import ReactImageGallery from 'react-image-gallery'
import portadaConstruccion from '../../assets/imagenes/portada-construccion.jpg'
import imagen1 from '../../assets/imagenes/PORTADA.VISTA.CONSTRUCCION.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'
import { Link as ScrollLink } from 'react-scroll';
import Divider from '../../components/divider/Divider'

const Construction = () => {

  const infoServicio = [
    {
      id: 1,
      title: 'CONTRATACION LLAVE EN MANO',
      subtitle: [
        {
          id: 1,
          title: 'PROCESO DE EJECUCION DE OBRA',
          subtitle: '',
          description: [
            'Computo Métrico de Materiales',
            'Presupuesto de Obra',
            'Plan de Avance',
            'Planificación  de inversión por Etapas',
            'Tramites preliminares para el inicio de obra',
            'Administración de Materiales',
            'Equipos de Trabajos Especializados para cada Etapa',
            'Dirección Técnica '
          ]
        },
      ],
      imagen: imagen1,
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='div-arquitecture'>
    
        <div className="arquitecture-gallery">
          <img src={portadaConstruccion} className='img-arquitecture-carrousel' alt={'portadaConstruccion'} />
        </div>
        
        <div className='div-text-construction'>
          <p className='texto-bienvenida-construction'>{'CONSTRUCCION'}</p>
          <p className='texto-presentacion-construction'>{'Materializamos tu proyecto'}</p>
          <ScrollLink to="contacto" spy={true} smooth={true} offset={-70} duration={800} className='scroll-link-arquitecture'>
            <button className='boton-presupuesto'>Pedi tu presupuesto</button>
          </ScrollLink>
        </div>
        <div className='container-presentacion-construccion'>
          <div className='container-presentacion-h3-h6'>
            <p className='p-presentacion-construccion'>Te acompañamos desde el inicio hasta el final de todo el proceso, con una propuesta integral que se amolda independientemente a la etapa en la que se encuentre tu proyecto. Nuestro servicios dentro de Construccion
            </p>
          </div>
          <div className='container-presentacion-arquitectura-p'>
            <Divider thickness={"1.5px"} height={"30px"} color={"black"} direction={"vertical"} />
            <ScrollLink to="CONTRATACION LLAVE EN MANO" spy={true} smooth={true} offset={-70} duration={800}>
              <p className='p-servicios-arquitectura'>CONTRATACION LLAVE EN MANO</p>
            </ScrollLink>
            <Divider thickness={"1.5px"} height={"30px"} color={"black"} direction={"vertical"} />

          </div>

        </div>
        <div className='div-container-construccion' >
          {infoServicio.map((item, index) => {
            return (
              <>
                <div
                  id={item.title}
                  key={index}
                  className={`div-container-item-construccion ${index % 2 !== 0 ? 'div-container-item-reverse-construccion' : ''
                    }`}
                >

                  <div className='div-contain-info-construccion'>
                    {
                      item.id === 1 &&
                      (
                        <div key={index} className='container-construccion-propiedad'>
                          <p className='p-construccion-propiedad'>Si contas con un Proyecto de Arquitectura o Refaccion y queres comenzar con la construccion te recomendamos el servicio de Sistema de Contratacion Llave en mano que te detallamos debajo</p>
                        </div>
                      )
                    }
                    <h1 className='title-construccion'>{item.title}</h1>
                    {item.id != 2 &&
                      (<Divider width={'100%'} />)
                    }
                    {item.subtitle.map((subItem, subIndex) => (
                      <div className='info-detallada-construccion' key={subIndex}>
                        <h2 className='h2-title-construccion'>{subItem.title}</h2>
                        <p className={subItem.subtitle ? 'p-subtitle-construccion' : ''}>
                          {subItem.subtitle}
                        </p>
                        {subItem.description.map((desc, descIndex) => (
                          <p key={descIndex} className='descripcion-construccion'>
                            {`- ${desc}`}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div
                  className='div-imagen-arquitectura'
                  >

                    <img
                      src={item.imagen}
                      alt={item.title}
                      className='imagen-arquitecture'
                    />
                  </div>
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

export default Construction