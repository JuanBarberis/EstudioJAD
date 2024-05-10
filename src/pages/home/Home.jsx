import React, { useEffect, useState } from 'react'
import './home.css'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'
import imagen1 from '../../assets/imagenes/imagen1.jpg'
import imagen2 from '../../assets/imagenes/imagen2.jpg'
import imagen3 from '../../assets/imagenes/imagen3.jpg'
import imagen4 from '../../assets/imagenes/imagen4.jpg'
import imagen5 from '../../assets/imagenes/imagen5.jpg'
import iconoWsp from '../../assets/imagenes/icono-whatsapp.png'


const Home = () => {

    const [showMessage, setShowMessage] = useState(false);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // const carruselImage = [
    //     {
    //         original: imagen1,
    //         thumbnail: imagen1,
    //     },
    //     {
    //         original: imagen2,
    //         thumbnail: imagen2,
    //     },
    //     {
    //         original: imagen3,
    //         thumbnail: imagen3,
    //     },
    //     {
    //         original: imagen5,
    //         thumbnail: imagen5,
    //     },
    //     {
    //         original: imagen4,
    //         thumbnail: imagen4,
    //     }
    // ]

    // const imageStyles = {

    //     width: windowWidth,
    //     height: '100%',
    //     objectFit: 'cover',

    // };

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = '543513586001';
        const message = 'Hola, queria realizar una consulta.';
        // Construye el enlace para dirigir al usuario a WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // Redirecciona al usuario a WhatsApp
        window.location.href = url;
    };

    const handleWhatsAppMouseEnter = () => {
        setShowMessage(true);
    };

    const handleWhatsAppMouseLeave = () => {
        setShowMessage(false);
    };

    return (
        <div className='div-home' id='inicio'>

            {/* <ImageGallery
                items={carruselImage}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                autoPlay={true}
                slideDuration={1000}
                slideInterval={3000}
                renderItem={(item) => {
                    return (
                        <div className="image-gallery-image">
                            <img src={item.original} style={imageStyles} alt="" />
                        </div>
                    );
                }}
            /> */}

            <p className='texto-presentacion'>ESTUDIO JAD</p>
            <div className="whatsapp-container" onMouseEnter={handleWhatsAppMouseEnter} onMouseLeave={handleWhatsAppMouseLeave}>
                <img
                    src={iconoWsp}
                    className="icono-whatsapp"
                    alt="WhatsApp"
                    onClick={handleWhatsAppClick}
                    style={{
                        width:'60px',
                        height:'60px',
                        position:'fixed',
                        bottom:0,
                        right:0,
                        marginBottom:'20px',
                        marginRight:'20px',
                        cursor:'pointer'
                    }}
                   
                />
                {showMessage && <p className="whatsapp-message">¡Conversemos!</p>}
            </div>
        </div>
    )
}

export default Home;
