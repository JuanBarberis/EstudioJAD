import React from 'react'
import './aboutus.css'
import imgEjemplo from '../../assets/imagenes/img-ejemplo.jpg'
import imgfoto from '../../assets/imagenes/juan-agus.jpg'


const AboutUs = () => {

  const data = [
    {
      nombre: 'Juan Pablo Dousdourian',
      profesion: 'Arquitecto',
      img: imgfoto,
      text: 'es el corazón arquitectónico de Estudio JAD. Con una sólida formación y una trayectoria que abarca diversos proyectos residenciales y comerciales,  aporta una visión estructurada y detallada a cada diseño. Su enfoque meticuloso y su pasión por la innovación aseguran que cada proyecto no solo sea estéticamente impresionante sino también funcional y sostenible.'

    },
    {
      nombre: 'Agustina Dousdourian',
      profesion: 'Diseñadora De Interiores',
      img: imgfoto,
      text: ' su excepcional talento en el diseño de interiores. Su habilidad para crear espacios armoniosos y acogedores, junto con un agudo sentido estético, le permite transformar cualquier entorno en un reflejo de la personalidad y las aspiraciones de nuestros clientes. '
    }
  ]

  return (
    <div className='div-aboutus' id='quienes-somos'>
      <div className='div-title-about'>
        <h2 className='title-about'>¿QUIENES SOMOS?</h2>
        <p className='text-jad'>Somos un Estudio de Arquitectura e Interiorismo, conformado por un equipo profesional, exigente, contemporáneo y centrados en el detalle. Combinamos el diseño y la construcción para dar las mejores soluciones con estilo y vanguardia, y así transformar un rincón, en el lugar más soñado.
          Gracias al trabajo interdisciplinario mantenemos un nivel de servicio personalizado en el cual te acompañamos en todo el proceso, desde el inicio del proyecto hasta la materialización de la obra
        </p>
        <div className='div-nombres'>
          <p className='texto-nombre' >Arq. Juan Pablo Dousdourian</p>
          <p className='texto-nombre'>Dis. Agustina Dousdourian</p>
        </div>
      </div>
      <div className='container-map'>
        <img src={imgfoto} className='img-quienes-somos' />
      </div>
    </div>
  )
}

export default AboutUs