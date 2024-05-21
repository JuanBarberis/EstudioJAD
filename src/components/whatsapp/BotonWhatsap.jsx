import React, { useState } from 'react'
import './botonwhatsapp.css'
import iconWsp from '../../assets/imagenes/icono-whatsapp.png'

const BotonWhatsapp = () => {

    const [showMessage, setShowMessage] = useState(false);

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
        <div className="whatsapp-container" onMouseEnter={handleWhatsAppMouseEnter} onMouseLeave={handleWhatsAppMouseLeave}>
            <img
                src={iconWsp}
                className="icono-whatsapp"
                alt="WhatsApp"
                onClick={handleWhatsAppClick}
                style={{
                    width: '60px',
                    height: '60px',
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    marginBottom: '20px',
                    marginRight: '20px',
                    cursor: 'pointer'
                }}
            />
            {showMessage && <p className="whatsapp-message">¡Conversemos!</p>}
        </div>
    )
}

export default BotonWhatsapp