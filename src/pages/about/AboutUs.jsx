import React, { useEffect } from 'react'
import './aboutus.css'
import imgJuan from '../../assets/imagenes/Arq-juanPablo.jpg'
import imgAgus from '../../assets/imagenes/Dis-Int-Agustina.jpg'

//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

const AboutUs = () => {

 useEffect(()=>{
  Aos.init({
    duration:1200,
  })
 },[])

  return (
    <div className='div-aboutus' id='quienes-somos'>
      <div className='div-title-about'>
        <div className='div-title-estudio'>
          <h2 className='title-about'>NUESTRO </h2>
          <h2 className='title-about2'> ESTUDIO</h2>
        </div>
        <p data-aos="fade-up" className='text-jad'>Somos un Estudio de Arquitectura e Interiorismo, fundado en 2018, conformado por un equipo profesional, exigente, contemporáneo y centrados en el detalle. Combinamos el diseño y la construcción para dar las mejores soluciones con estilo y vanguardia, y así transformar un rincón, en el lugar más soñado.
          Gracias al trabajo interdisciplinario mantenemos un nivel de servicio personalizado en el cual te acompañamos en todo el proceso, desde el inicio del proyecto hasta la materialización de la obra
        </p>
      </div>
      <div className='container-map' data-aos="fade-up">
        <div className='div-nombres'>
          <img src={imgJuan} className='img-quienes-somos' alt='img-juanPablo' />
          <p className='texto-nombre' >Arquitecto Juan Pablo Dousdourian</p>
        </div>
        <div className='div-nombres'>
          <img src={imgAgus} className='img-quienes-somos' alt='img-Agustina' />
          <p className='texto-nombre'>Lic. Diseño de Interiores Agustina Dousdourian</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs