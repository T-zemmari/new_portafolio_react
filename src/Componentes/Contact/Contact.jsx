import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import SwAlert from "../SwAlert/SwAlert";
import { myLinks } from "../../constantes";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactoDiv = document.getElementById("Contacto");
      if (!contactoDiv) return;

      const rect = contactoDiv.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (value.trim() === "") {
      setErrors({ ...errors, [id]: `Por favor, ingresa tu ${id}` });
    } else {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;

    // Validar correo electrónico utilizando la expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    let formErrors = {};
    if (nombre === "") {
      formErrors = { ...formErrors, nombre: `Por favor, ingresa tu nombre` };
    }
    if (email === "" || !isValidEmail) {
      formErrors = {
        ...formErrors,
        email: `Por favor, ingresa un correo electrónico válido`,
      };
    }
    if (mensaje === "") {
      formErrors = { ...formErrors, mensaje: `El campo mensaje está vacío` };
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          "service_vbri4b8",
          "template_9k463tc",
          {
            subject: "Hola de parte de " + nombre,
            name: nombre,
            email: email,
            message: mensaje,
          },
          "J5IKpSLiG5SGLK5pD"
        )
        .then(
          (result) => {
            console.log(result.text);
            SwAlert(`Tu mensaje ha sido enviado correctamente. ¡Gracias!`);
            setFormData({
              nombre: "",
              email: "",
              mensaje: "",
            });
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            SwAlert(`Error!`);
          }
        );
    } else {
      SwAlert(`Por favor, rellena el formulario correctamente`);
    }
  };

  return (
    <>
      <div
        className="contenedor_contact flex flex-col mt-16 p-12 md:py-2 md:px-24 md:mt-0"
        id="Contacto"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Contacto</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
            POR FAVOR, RELLENA EL SIGUIENTE FORMULARIO
        </div>

        <div className="w-full mt-24 lg:h-[720px] lg:h-[620px]  flex justify-center items-center ">
          <div className="formulario_padre w-[100%] md:w-[60%] h-[90%] border-2 border-[#161455] bg-[#161455] flex flex-col-reverse md:flex-row justify-start">
            <div className="div_lateral w-[100%] h-[100px] md:w-[20%] md:h-[100%] bg-[#7e57c2] flex justify-center items-center lg:items-end p-12 gap-2">
              {myLinks?.map((item) => {
                return (
                  <a href={item?.link} target="_blank" key={item.id}>
                    <div
                      className="w-[30px] h-[30px] bg-center bg-cover"
                      style={{ backgroundImage: `url(${item?.icon})` }}
                    ></div>
                  </a>
                );
              })}
            </div>
            <div className="contacto_campos ld:w-[80%] p-6 lg:py-12 lg:px-24">
              <h3 className="text-white font-bold">Contacta-me</h3>
              <p>
                Siéntete libre de contactarnos en cualquier momento. Nos
                pondremos en contacto contigo tan pronto como sea posible!
              </p>
              <form onSubmit={handleSubmit} className="lg:p-12">
                <motion.input
                  type="text"
                  className="form-control form-group"
                  placeholder="Nombre"
                  id="nombre"
                  onChange={handleChange}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8 }}
                  value={formData.nombre}
                />
                {errors.nombre && (
                  <small className="text-[#c53568]">{errors.nombre}</small>
                )}
                <motion.input
                  type="email"
                  className="form-control form-group"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 1 }}
                  value={formData.email}
                />
                {errors.email && (
                  <small className="text-[#c53568]">{errors.email}</small>
                )}
                <motion.textarea
                  className="form-control form-group min-h-[65px]"
                  placeholder="Mensaje"
                  id="mensaje"
                  onChange={handleChange}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 1.1 }}
                  value={formData.mensaje}
                ></motion.textarea>
                {errors.mensaje && (
                  <small className="text-[#c53568]">{errors.mensaje}</small>
                )}
                <button type="submit" className="form_submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
