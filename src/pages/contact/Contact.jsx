import React, { useState } from 'react'
import './contact.css'

const Contact = () => {

  // const [contacto, setContacto] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    mail: '',
    message: '',
    reason: '',
    telefono: ''
  });
  const [data, setData] = useState({
    name: '',
    mail: '',
    message: '',
    reason: '',
    telefono: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefono") {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setData({
        ...data,
        [name]: onlyNums
      });
    } else {
      setData({
        ...data,
        [name]: value
      });
    }
    setErrors({
      ...errors,
      [name]: ''
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si los campos están vacíos
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = 'El nombre no puede estar vacío';
    }
    if (!data.mail.trim()) {
      newErrors.mail = 'El correo electrónico no puede estar vacío';
    } else if (!/\S+@\S+\.\S+/.test(data.mail)) {
      newErrors.mail = 'El correo electrónico no es válido';
    }
    if (!data.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío';
    }
    if (!data.reason.trim()) {
      newErrors.reason = 'Debe seleccionar un motivo de consulta';
    }
    if (!data.telefono.trim()) {
      newErrors.telefono = 'El numero de telefono no puede estar vacío';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Si no hay errores, enviar el formulario
      // Aquí puedes agregar tu lógica para enviar el formulario, por ejemplo, una llamada a una API
      setData({
        name: '',
        mail: '',
        message: '',
        reason: '',
        telefono: ''
      })
    }
  };


  return (
    <div className='div-contact' id='contacto'>
      <div className='div-container-contact'>
        <div className='div-todo-proyecto'>
          <h2 className='todo-proyecto'>Todo proyecto comienza con una conversación</h2>
        </div>
        <div className='div-hablemos'>
          <h6 className='text-hablemos'>HABLEMOS</h6>
          <h2 className='text-dejanos-datos'>Dejanos tus datos</h2>
          <p className='text-equipo'>NOS PONDREMOS EN CONTACTO PARA ASESORARTE</p>
        </div>
      </div>
      <form className={'form-contacto'} >
        {/* <form className={contacto ? 'contacto active' : 'contacto'} action="https://formsubmit.co/6d4a06dc809795eb8671e9f32e82bd1e" method="POST"  > */}
        <label className='label-form' for="name">Nombre</label>
        <input className='input-form' type="text" id="name" name="name" value={data.name} onChange={handleChange} />
        {
          errors.name &&
          <p className="error-message">{errors.name}</p>
        }
        <label className='label-form' htmlFor="telefono">Telefono</label>
        <input className='input-form' type="text" id="telefono" name="telefono" value={data.telefono} onChange={handleChange} pattern="[0-9]*" />
        {
          errors.telefono &&
          <p className="error-message">{errors.telefono}</p>
        }
        <label className='label-form' for="mail">Correo electrónico</label>
        <input className='input-form' type="email" id="mail" name="mail" value={data.mail} onChange={handleChange} />
        {
          errors.mail &&
          <p className="error-message">{errors.mail}</p>
        }
        <label className='label-form' for="reason">Motivo de consulta</label>
        <select className='input-form' id="reason" name="reason" value={data.reason} onChange={handleChange}>
          <option className='option-select' value="">Selecciona un motivo</option>
          <option className='option-select' value="arquitectura">Arquitectura</option>
          <option className='option-select' value="interiorismo">Interiorismo</option>
          <option className='option-select' value="construccion">Construcción</option>
        </select>
        {errors.reason && <p className="error-message">{errors.reason}</p>}
        <label className='label-form' for="msg">Mensaje:</label>
        <textarea className='area-form' id="msg" name="message" value={data.message} onChange={handleChange} />
        {
          errors.message &&
          <p className="error-message">{errors.message}</p>
        }
        <button className='button-form' type='submit' id='submit' onClick={handleSubmit}>
          Enviar
        </button>
        {/* <button className='button-form' type='submit' id='submit'> Enviar</button> */}

        <input type='hidden' name='_next' />
        {/* <input type='hidden' name='_next' value="https://juanbarberis.vercel.app/" /> */}
        <input type='hidden' name='_captcha' value="false" />
      </form>
    </div>
  )
}

export default Contact