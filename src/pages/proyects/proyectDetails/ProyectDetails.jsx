import React from 'react'
import './proyectDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import Imagen1 from '../../../assets/imagenes/imagen1.jpg'
import Imagen2 from '../../../assets/imagenes/imagen2.jpg'
import Imagen3 from '../../../assets/imagenes/imagen3.jpg'
import Imagen4 from '../../../assets/imagenes/imagen4.jpg'
import Imagen5 from '../../../assets/imagenes/imagen5.jpg'

const ProyectDetails = () => {
    const projectId = useParams();
    const navigate = useNavigate()

    // Aquí puedes obtener los detalles del proyecto usando el projectId
    // Por simplicidad, usamos datos estáticos. En una aplicación real, obtendrás datos de una API o un contexto.

    const projectData = {
        1: { nombre: 'Proyecto 1', descripcion: 'Descripción del Proyecto 1', imagen: Imagen1 },
        2: { nombre: 'Proyecto 2', descripcion: 'Descripción del Proyecto 2', imagen: Imagen2 },
        3: { nombre: 'Proyecto 3', descripcion: 'Descripción del Proyecto 3', imagen: Imagen3 },
        4: { nombre: 'Proyecto 4', descripcion: 'Descripción del Proyecto 4', imagen: Imagen4 },
        5: { nombre: 'Proyecto 5', descripcion: 'Descripción del Proyecto 5', imagen: Imagen5 },
    };
  
    const project = projectData[projectId.proyectId];

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }
    return (
        <div className='proyect-detail'>
            <h1>{project.nombre}</h1>
            <img src={project.imagen} alt={project.nombre} />
            <p>{project.descripcion}</p>
            <button onClick={()=> navigate(-1)}>Volver atras</button>
        </div>
    )
}

export default ProyectDetails