import React from 'react'
import './home.css'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jpg'
import imagen3 from '../../assets/imagenes/imagen3.jpg'
import imagen5 from '../../assets/imagenes/imagen5.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'


const Home = () => {

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
        {
            original: imagen5,
            thumbnail: imagen5,
            description: 'SOMOS ESTUDIO JAD '
        },

    ]

    return (
        <div className='div-home' id='inicio'>
            <ImageGallery
                items={carruselImage}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                autoPlay={true}
                slideDuration={9000}
                slideInterval={5000}
                renderItem={(item) => (
                    <div className="image-gallery">
                        <img src={item.original} className='img-home-carrousel' alt="" />
                    </div>
                )}
            />
            <div className='div-text-welcome'>
                <p className='texto-presentacion'>{'CREAMOS ESPACIOS QUE POTENCIAN TUS SENTIDOS'}</p>
                <p className='texto-bienvenida'>{'Bienvenidos, te invitamos a pasar.'}</p>
            </div>

            <BotonWhatsapp />
        </div>
    )
}

export default Home;
