import React from 'react'
import './home.css'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/Portada-home-1.jpg'
import imagen2 from '../../assets/imagenes/Porta-home-2.jpg'
import imagen3 from '../../assets/imagenes/Portada-home-3.jpg'
import imagen4 from '../../assets/imagenes/Portada-home-4.jpg'
import imagen5 from '../../assets/imagenes/Portada-home-5.jpg'
import Rondeau from '../../assets/imagenes/BAÑO-RONDEAU-PORTADA.jpg'
import CasaNG from '../../assets/imagenes/CASA.NG-PORTADA.jpg'
import Oriza from '../../assets/imagenes/ORIZA-PORTADA.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'


const Home = () => {

    const carruselImage = [
        {
            original: imagen1,
            thumbnail: imagen1,
        },
        {
            original: imagen2,
            thumbnail: imagen2,
        },
        {
            original: imagen3,
            thumbnail: imagen3,
        },
        {
            original: imagen4,
            thumbnail: imagen4,
        },
        {
            original: imagen5,
            thumbnail: imagen5,
        },
        {
            original: Rondeau,
            thumbnail: Rondeau,
        },
        {
            original: CasaNG,
            thumbnail: CasaNG,
        },
        {
            original: Oriza,
            thumbnail: Oriza,
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
                slideDuration={5000}
                slideInterval={5000}
                renderItem={(item) => (
                    <div className="image-gallery">
                        <img src={item.original} className='img-home-carrousel' alt="" />
                    </div>
                )}
            />
            <div className='div-text-welcome'>
                <p className='texto-presentacion'>{'Creamos espacios que potencian tus sentidos'}</p>
                <p className='texto-bienvenida'>{'Bienvenidos, te invitamos a pasar.'}</p>
            </div>

            <BotonWhatsapp />
        </div>
    )
}

export default Home;
