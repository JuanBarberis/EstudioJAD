import React, { useEffect } from 'react'
import './arquitecture.css'
import ReactImageGallery from 'react-image-gallery'
import portadaArquitectura from '../../assets/imagenes/portada-arquitectura.jpg'
import imagen1 from '../../assets/imagenes/PORTADA.VISTA.PROYECTO.jpg'
import imagen2 from '../../assets/imagenes/PORTADA.VISTA.OBRA.jpg'
import imagen3 from '../../assets/imagenes/BAÑO-RONDEAU-FINAL.OBRA.5.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'
import { Link as ScrollLink } from 'react-scroll';
import Divider from '../../components/divider/Divider'
//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

const Arquitecture = () => {

  const infoServicio = [
    {
      id: 1,
      title: 'PROYECTO',
      subtitle: [
        {
          id: 1,
          title: 'PROCESO DE DISEÑO',
          subtitle: 'Anteproyecto',
          description: ['Busqueda del diseño, croquis preliminares', 'Planos de Arquitectura ', 'Maqueta virtual 3D ', 'Imágenes fotorealistas en 3D ']
        },
        {
          id: 2,
          title: 'PROCESO TECNICO',
          subtitle: 'Proyecto Ejecutivo',
          description: ['Proyecto de Ingeniería ', '	Proyecto de Instalaciones ', 'Plano Municipal', 'Computo Métrico de materiales', 'Presupuesto de Obra / Costo de la Inversión']
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
          description: ['	Plan de Avance', 'Planificación de Inversión por Etapas', '	Tramites preliminares para el inicio de obra ', 'Administración de Materiales/Recursos', 'Equipos de Trabajos Especializados para cada Etapa', 'Dirección Técnica de obra por Profesionales designados']
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
          title: 'PROCESO DE DISEÑO',
          subtitle: 'Proyecto de Refacción',
          description: ['Relevamiento fotográfico de  espacios a intervenir', 'Planteo de ideas preliminares', 'Planos 2D del proyecto de Refaccion', 'Presupuesto de obra / Costo de la Inversión']
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
    Aos.init({duration:1200,})
  }, []);

  return (
    <>
      <div className='div-arquitecture'>

        <div className="arquitecture-gallery">
          <img src={portadaArquitectura} className='img-arquitecture-carrousel' alt={'imagenArquitectura'} />
        </div>

        <div className='div-text-arquitectura'data-aos="fade-up">
          <p className='texto-bienvenida-arquitectura'>{'ARQUITECTURA'}</p>
          <p className='texto-presentacion-arquitectura'>{'Transformamos los espacios vacíos en escenarios con vida'}</p>
          <ScrollLink to="contacto" spy={true} smooth={true} offset={-70} duration={800} className='scroll-link-arquitecture'>
            <button className='boton-presupuesto'>Pedi tu presupuesto</button>
          </ScrollLink>
        </div>

        <div className='container-presentacion-arquitectura'data-aos="fade-down">
          <div className='container-presentacion-h3-h6'>
            <h6 className='h6-presentacion-arquitectura'>Nuestras especialidades</h6>
            <h3 className='h3-presentacion-arquitectura'>Arquitectura Residencial, Comercial y Corporativa</h3>
            <p className='p-presentacion-arquitectura'>Te acompañamos en todas las etapas de tu proyecto con una propuesta integral. Nuestros servicios de arquitectura incluyen
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

        </div>

        <div className='div-container-arquitecture'>
          {infoServicio.map((item, index) => {
            return (
              <>
                <div
                  id={item.title}
                  key={index}
                  className={`div-container-item ${index % 2 !== 0 ? 'div-container-item-reverse' : ''
                    }`}
                >

                  <div className='div-contain-info-arquitectura'data-aos="fade-right">
                    {
                      item.id === 1 &&
                      (
                        <div key={index} className='container-proyecto-propiedad'>
                          <p className='p-proyecto-propiedad'>Si contas solo con un terreno y queres comenzar el proceso de construir te recomendamos los servicios de Proyecto + Obra :</p>
                        </div>
                      )
                    }
                    {
                      item.id === 3 &&
                      (
                        <div key={index} className='container-remodelacion-propiedad'>
                          <p className='p-remodelacion-propiedad'>Si contas con una unidad ya construida y queres remodelar o ampliar los espacios, te recomendamos: </p>
                        </div>
                      )
                    }
                    <h1 className='title-arquitectura'>{item.title}</h1>
                    {item.subtitle.map((subItem, subIndex) => (
                      <div className='info-detallada-arquitectura' key={subIndex} >
                        {item.id === 2 &&
                          (<Divider />)
                        }
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
                  <div
                  className='div-imagen-arquitectura'
                  
                  >

                    <img
                      src={item.imagen}
                      alt={item.title}
                      className='imagen-arquitecture'
                      data-aos="fade-left"
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

export default Arquitecture