import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validar el nombre
    if (formData.nombre.trim() === '') {
      newErrors.nombre = 'Por favor, ingresa tu nombre';
      valid = false;
    }

    // Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido';
      valid = false;
    }

    // Validar el mensaje
    if (formData.mensaje.trim() === '') {
      newErrors.mensaje = 'Por favor, ingresa tu mensaje';
      valid = false;
    }

    if (valid) {
      console.log('Formulario enviado:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="contenedor_contact flex flex-col mt-16 p-12 md:py-2 md:px-24 md:mt-0" id="Contacto">
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Contacto</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          RELLENA EL SIGUIENTE FORMULARIO
        </div>

        <div className="w-full mt-24 h-[620px]  flex justify-center items-center ">
          <div className="formulario_padre w-[100%] md:w-[60%] h-[90%] border-2 border-[#161455] bg-[#161455] flex flex-col-reverse md:flex-row justify-start">
            <div className="div_lateral w-[100%] h-[100px] md:w-[20%] md:h-[100%] bg-[#7e57c2]"></div>
            <div className="contacto_campos md:w-[80%] py-12 px-24">
              <h3 className="text-white font-bold">Contacta-me</h3>
              <p>
                Siéntete libre de contactarnos en cualquier momento. Nos pondremos en contacto contigo tan pronto como sea posible!
              </p>
              <input type="text" className="form-control form-group" placeholder="Nombre" id="nombre" onChange={handleChange} />
              {errors.nombre && <small className="text-[#c53568]">{errors.nombre}</small>}
              <input type="text" className="form-control form-group" placeholder="Email" id="email" onChange={handleChange} />
              {errors.email && <small className="text-[#c53568]">{errors.email}</small>}
              <textarea className="form-control form-group min-h-[65px]" placeholder="Mensaje" id="mensaje" onChange={handleChange}></textarea>
              {errors.mensaje && <small className="text-[#c53568]">{errors.mensaje}</small>}
              <button className="form_submit" onClick={handleSubmit}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
