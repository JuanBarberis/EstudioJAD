import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './contact.css'
import { CiInstagram, CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
//aos libreria 
import 'aos/dist/aos.css';
import Aos from 'aos'

const Contact = () => {

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
    reason: '',
    user_phone: ''
  });
  const [data, setData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    reason: '',
    user_phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_phone") {
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

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_ziksivg', 'template_2fj7fro', form.current, {
        publicKey: 'AJ2kV_-tJWmjFQPMr',
      })
      .then(
        (result) => {
          if (result.status === 200 && result.text === 'OK') {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Formulario enviado con exito!",
              text: 'A la brevedad nos pondremos en contacto',
              showConfirmButton: false,
              timer: 3000
            });
            setData({
              user_name: '',
              user_email: '',
              message: '',
              reason: '',
              user_phone: ''
            });
            form.current.reset();

          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Ups!",
              text: 'algo salio mal, vuelva a intentar',
              showConfirmButton: false,
              timer: 3000
            });
            setData({
              user_name: '',
              user_email: '',
              message: '',
              reason: '',
              user_phone: ''
            });
          }
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ups!",
            text: 'algo salio mal, vuelva a intentar',
            showConfirmButton: false,
            timer: 3000
          });
          setIsSubmitting(false);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si los campos están vacíos
    const newErrors = {};
    if (!data.user_name.trim()) {
      newErrors.user_name = 'El nombre no puede estar vacío';
    }
    if (!data.user_email.trim()) {
      newErrors.user_email = 'El correo electrónico no puede estar vacío';
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      newErrors.user_email = 'El correo electrónico no es válido';
    }
    if (!data.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío';
    }
    if (!data.reason.trim()) {
      newErrors.reason = 'Debe seleccionar un motivo de consulta';
    }
    if (!data.user_phone.trim()) {
      newErrors.user_phone = 'El numero de telefono no puede estar vacío';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      sendEmail(e)
      setIsSubmitting(true);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])

  return (
    <div className='div-all-contact'>

      <div className='div-contact' id='contacto'>
        <div className='div-container-contact' data-aos="fade-right">
          <div className='div-contacto-formulario' >
            <div className='div-todo-proyecto'>
              <h2 className='todo-proyecto'>Todo proyecto comienza con una conversación</h2>
            </div>
            <div className='div-hablemos'>
              <h6 className='text-hablemos'>HABLEMOS</h6>
              <h2 className='text-dejanos-datos'>Dejanos tus datos</h2>
              <p className='text-equipo'>NOS PONDREMOS EN CONTACTO PARA ASESORARTE</p>
            </div>
            <div className='div-contact-media' >
              <a
                href="https://www.instagram.com/estudio.jad"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 200 }}
              >
                <div className='social-media' >
                  <CiInstagram />
                  <p className='social-media-p' style={{ margin: 0 }}>EstudioJad</p>
                </div>
              </a>

              <div className='social-media' >
                <FaWhatsapp />
                <p className='social-media-p' style={{ margin: 0, fontWeight: 200 }}>351 358-6001</p>
              </div>

              <div className='social-media' >
                <CiMail />
                <p className='social-media-p' style={{ margin: 0, fontWeight: 200 }}>estudiojad.arq@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} className={'form-contacto'} data-aos="fade-left">

          <label className='label-form'>Nombre</label>
          <input className='input-form' type="text" name="user_name" onChange={handleChange} />
          {errors.user_name && <p className="error-message">{errors.user_name}</p>}

          <label className='label-form'>Email</label>
          <input className='input-form' type="email" name="user_email" onChange={handleChange} />
          {errors.user_email && <p className="error-message">{errors.user_email}</p>}

          <label className='label-form' >Telefono</label>
          <input className='input-form' type="number" name="user_phone" pattern="[0-9]*" onChange={handleChange} />
          {errors.user_phone && <p className="error-message">{errors.user_phone}</p>}

          <label className='label-form' for="reason">Motivo de consulta</label>
          <select className='input-form' name="reason" onChange={handleChange} >
            <option className='option-select' value="">Selecciona un motivo</option>
            <option className='option-select' value="arquitectura">Arquitectura</option>
            <option className='option-select' value="interiorismo">Interiorismo</option>
            <option className='option-select' value="construccion">Construcción</option>
          </select>
          {errors.reason && <p className="error-message">{errors.reason}</p>}

          <label className='label-form'>Mensaje</label>
          <textarea className='area-form' name="message" onChange={handleChange} />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button className='button-form' type='submit' disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>

  )
}

export default Contact