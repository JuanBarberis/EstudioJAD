import React, { useEffect } from 'react'
import './home.css'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/Portada-home-1.jpg'
import imagen2 from '../../assets/imagenes/Porta-home-2.jpg'
import imagen3 from '../../assets/imagenes/Portada-home-3.jpg'
import imagen4 from '../../assets/imagenes/Portada-home-4.jpg'
import imagen5 from '../../assets/imagenes/Portada-home-5.jpg'
import Rondeau from '../../assets/imagenes/Portada-HOME-7.jpg'
import CasaNG from '../../assets/imagenes/Portada-HOME-6.jpg'
import Oriza from '../../assets/imagenes/ORIZA-PORTADA.jpg'
import Duomo from '../../assets/imagenes/Portada-HOME-8.jpg'
import BotonWhatsapp from '../../components/whatsapp/BotonWhatsap'
//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

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
        {
            original: Duomo,
            thumbnail: Duomo,
        },

    ]

    useEffect(()=>{
        Aos.init({
            duration:1200
        })
    },[])

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
            <div className='div-text-welcome' data-aos="fade-up">
                <p className='texto-presentacion'>{'Creamos espacios que potencian tus sentidos'}</p>
                <p className='texto-bienvenida'>{'Bienvenidos, te invitamos a pasar.'}</p>
            </div>

            <BotonWhatsapp />
        </div>
    )
}

export default Home;
