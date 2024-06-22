import React from 'react'
import './aboutus.css'
import imgEjemplo from '../../assets/imagenes/img-ejemplo.jpg'
import imgfoto from '../../assets/imagenes/juan-agus.jpg'
import imgJuan from '../../assets/imagenes/Arq-juanPablo.jpg'
import imgAgus from '../../assets/imagenes/Dis-Int-Agustina.jpg'


const AboutUs = () => {

  // const data = [
  //   {
  //     nombre: 'Juan Pablo Dousdourian',
  //     profesion: 'Arquitecto',
  //     img: imgfoto,
  //     text: 'es el corazón arquitectónico de Estudio JAD. Con una sólida formación y una trayectoria que abarca diversos proyectos residenciales y comerciales,  aporta una visión estructurada y detallada a cada diseño. Su enfoque meticuloso y su pasión por la innovación aseguran que cada proyecto no solo sea estéticamente impresionante sino también funcional y sostenible.'

  //   },
  //   {
  //     nombre: 'Agustina Dousdourian',
  //     profesion: 'Diseñadora De Interiores',
  //     img: imgfoto,
  //     text: ' su excepcional talento en el diseño de interiores. Su habilidad para crear espacios armoniosos y acogedores, junto con un agudo sentido estético, le permite transformar cualquier entorno en un reflejo de la personalidad y las aspiraciones de nuestros clientes. '
  //   }
  // ]

  return (
    <div className='div-aboutus' id='quienes-somos'>
      <div className='div-title-about'>
        <div className='div-title-estudio'>
          <h2 className='title-about'>NUESTRO </h2>
          <h2 className='title-about2'> ESTUDIO</h2>
        </div>
        <p className='text-jad'>Somos un Estudio de Arquitectura e Interiorismo, fundado en 2018, conformado por un equipo profesional, exigente, contemporáneo y centrados en el detalle. Combinamos el diseño y la construcción para dar las mejores soluciones con estilo y vanguardia, y así transformar un rincón, en el lugar más soñado.
          Gracias al trabajo interdisciplinario mantenemos un nivel de servicio personalizado en el cual te acompañamos en todo el proceso, desde el inicio del proyecto hasta la materialización de la obra
        </p>
      </div>
      <div className='container-map'>
        <div className='div-nombres'>
          <img src={imgJuan} className='img-quienes-somos' />
          <p className='texto-nombre' >Arquitecto Juan Pablo Dousdourian</p>
        </div>
        <div className='div-nombres'>
          <img src={imgAgus} className='img-quienes-somos' />
          <p className='texto-nombre'>Lic. Diseño de Interiores Agustina Dousdourian</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs