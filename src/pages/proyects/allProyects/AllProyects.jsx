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
            año: '2023',
            imagen: BetaniaPlazaI,
            className: 'clase1'
        },
        {
            id: 2,
            nombre: 'BETANIA II',
            año: '2023',
            imagen: BetaniaPlazaII,
            className: 'clase1'

        },
        {
            id: 3,
            nombre: 'COCINA AG',
            año: '2022',
            imagen: CasaAg,
            className: 'clase2'
        },
        {
            id: 4,
            nombre: 'ITUZAINGO',
            año: '2023',
            imagen: Ituzaingo,
            className: 'clase1'

        },
        {
            id: 5,
            nombre: 'RONDEAU',
            año: '2024',
            imagen: Rondeau,
            className: 'clase1'

        },
        {
            id: 6,
            nombre: 'CASA NG',
            año: '2023',
            imagen: CasaNg,
            className: 'clase1'

        },
        {
            id: 7,
            nombre: 'ORIZA',
            año: '2019',
            imagen: Oriza,
            className: 'clase1'

        },
        {
            id: 8,
            nombre: 'SORELLE',
            año: '2020',
            imagen: Sorelle,
            className: 'clase1'

        },
        {
            id: 9,
            nombre: 'DUOMO',
            año: '2021',
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
                        <div style={{display: 'flex', flexDirection:'column', justifyContent: "center", marginTop:20, gap:5}}>
                            <h2 className='project-name-all'>{item.nombre}</h2>
                            <p style={{fontSize:16, fontWeight:200}} className='project-name-all'>{item.año}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='button-back' onClick={() => navigate(-1)}>Volver atrás</button>
            <BotonWhatsapp />

        </div>
    )
}

export default AllProyects