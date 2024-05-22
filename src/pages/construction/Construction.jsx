import React, { useEffect } from 'react'
import './construction.css'
import ReactImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jpg'
import imagen3 from '../../assets/imagenes/imagen3.jpg'
import imagen4 from '../../assets/imagenes/imagen4.jpg'
import imagen5 from '../../assets/imagenes/imagen5.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'

const Construction = () => {

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

  const data = [
    {
      id: 1,
      title: 'Desde Cero',
      subtitle: '',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, incidunt.',
      image: imagen1
    },
    {
      id: 2,
      title: 'Ante Proyecto',
      subtitle: 'Proceso Creativo',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, incidunt.',
      image: imagen2
    },
    {
      id: 3,
      title: 'Proyecto',
      subtitle: 'Etapa de formalizacion',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, incidunt.',
      image: imagen3
    },
    {
      id: 4,
      title: 'Construcción',
      subtitle: 'Etapa de concretación',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, incidunt.',
      image: imagen5
    },
    {
      id: 5,
      title: 'Final de obra',
      subtitle: 'Momento de disfrutar',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, incidunt.',
      image: imagen4
    },
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
          <p className='texto-bienvenida-arquitectura'>{'Construccion'}</p>
          <p className='texto-presentacion-arquitectura'>{'Creamos para vos !'}</p>
        </div>
        <div className='div-container-arquitecture' >
          {
            data.map((item, index) => {
              return (
                <>
                  <div className={item.id % 2 === 0 ? 'div-container-draft' : 'div-container-draft2'}>
                    <div className='div-contain-info'>
                      <div className='div-contain-title'>
                        <p className='text-title-arquitecture'>{item.title}</p>
                        <p className='text-subtitle-arquitecture'> {item.subtitle} </p>
                      </div>
                      <p className='text-describe-arquitecture'>{item.description}</p>
                    </div>
                    <img src={item.image}  className='imagen-arquitecture'/>
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