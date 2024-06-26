import React, { useEffect } from 'react'
import './allproyects.css'
import { useNavigate } from 'react-router-dom'
import BetaniaPlazaII from '../../../assets/imagenes/BETANIA-PLAZA-II-FINAL.OBRA.1.jpg'
import CasaAg from '../../../assets/imagenes/Cocina-AG-PORTADA PORTFOLIO.jpg'
import BetaniaPlazaI from '../../../assets/imagenes/BETANIA-PLAZA-I-FINAL.OBRA.4.jpg'
import Ituzaingo from '../../../assets/imagenes/ITUZAINGO-FINAL.OBRA.1.jpg'
import CasaNg from '../../../assets/imagenes/CASA.NG-FINAL.OBRA.1.jpg'
import Oriza from '../../../assets/imagenes/ORIZA-FINAL.OBRA.1.jpg'
import Sorelle from '../../../assets/imagenes/SORELLE-FINAL.OBRA.1.jpg'
import Rondeau from '../../../assets/imagenes/BAÑO-RONDEAU-FINAL.OBRA.4.jpg'
import Duomo from '../../../assets/imagenes/DUOMO-FINAL.OBRA.2.jpg'
import BotonWhatsapp from '../../../components/whatsapp/BotonWhatsap'
//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

const AllProyects = () => {

    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            nombre: 'BETANIA I',
            imagen: BetaniaPlazaI,
            className: 'clase1'
        },
        {
            id: 2,
            nombre: 'BETANIA II',
            imagen: BetaniaPlazaII,
            className: 'clase1'

        },
        {
            id: 3,
            nombre: 'COCINA AG',
            imagen: CasaAg,
            className: 'clase2'
        },
        {
            id: 4,
            nombre: 'ITUZAINGO',
            imagen: Ituzaingo,
            className: 'clase1'

        },
        {
            id: 5,
            nombre: 'RONDEAU',
            imagen: Rondeau,
            className: 'clase1'

        },
        {
            id: 6,
            nombre: 'CASA NG',
            imagen: CasaNg,
            className: 'clase1'

        },
        {
            id: 7,
            nombre: 'ORIZA',
            imagen: Oriza,
            className: 'clase1'

        },
        {
            id: 8,
            nombre: 'SORELLE',
            imagen: Sorelle,
            className: 'clase1'

        },
        {
            id: 9,
            nombre: 'DUOMO',
            imagen: Duomo,
            className: 'clase1'

        },


    ]
    const handleProjectClick = (id) => {
        navigate(`/proyectos/${id}`);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({
            duration: 1200,
        })
    }, []);

    return (
        <div className='div-all-proyects'>
            <div className='div-all-proyectos-container' data-aos="fade-up"
            >
                {data.map((item, index) => (
                    <div
                        className='container-all-proyectos'
                        key={index}
                        onClick={() => handleProjectClick(item.id)}
                    >
                        <img
                            src={item.imagen}
                            className='todos-los-proyectos'
                            alt={item.nombre}
                        />
                        <h2 className='project-name-all'>{item.nombre}</h2>

                    </div>
                ))}
            </div>
            <button className='button-back' onClick={() => navigate(-1)}>Volver atrás</button>
            <BotonWhatsapp />

        </div>
    )
}

export default AllProyects