import { useEffect, useState, useRef } from "react";
import "./About.css";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const cardRefs = useRef([]);
  const [borderIntensities, setBorderIntensities] = useState([0, 0, 0]);

  const handleMouseMove = (event, index) => {
    const cardRect = cardRefs.current[index].getBoundingClientRect();
    const offsetX = Math.abs(event.clientX - cardRect.left);
    const offsetY = Math.abs(event.clientY - cardRect.top);
    const distanceFromBorder = Math.min(offsetX, offsetY);
    const maxDistance = Math.sqrt(
      Math.pow(cardRect.width / 2, 2) + Math.pow(cardRect.height / 2, 2)
    );
    const intensity = 1 - distanceFromBorder / maxDistance;
    setBorderIntensities((prevIntensities) => {
      const newIntensities = [...prevIntensities];
      newIntensities[index] = intensity;
      return newIntensities;
    });
  };

  const handleMouseLeave = (index) => {
    setBorderIntensities((prevIntensities) => {
      const newIntensities = [...prevIntensities];
      newIntensities[index] = 0; // Restablecer la intensidad del borde
      return newIntensities;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText.length < text.length) {
          return text.substring(0, prevText.length + 1);
        } else {
          clearInterval(interval);
          return prevText;
        }
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const text =
    "Soy un desarrollador apasionado con experiencia en React, PHP y otras tecnologías.";

  const texto_1 = `
    <p class="text-white">
      Como especialista en frontend, me enfoco en crear interfaces atractivas y funcionales utilizando HTML, CSS, y JavaScript, así como frameworks como React.
      Desarrollo experiencias dinámicas y receptivas que cautivan a los usuarios y mejoran la interacción con el sitio web.
    </p>
  `;

  const texto_2 = `
    <p class="text-white">
      Lidero el desarrollo de sistemas web complejos, desde sitios dinámicos hasta aplicaciones empresariales. He trabajado con Symfony, React y Django para crear aplicaciones robustas y escalables, acelerando el proceso de desarrollo y manteniendo un código limpio y modula
    </p>
  `;

  const texto_3 = `
    <p class="text-white">
      Como profesional en bases de datos, diseño y administro sistemas eficientes y escalables. 
      Utilizo modelado y consultas SQL para asegurar estructuras sólidas y acceso eficiente a la información, 
      optimizando y asegurando la integridad de los datos.
    </p>
  `;

  const addLineBreaks = (text) => {
    return text.replace(/\.\s+/g, ".<br/>");
  };

  const cardsData = [
    {
      color: "#262726",
      borderColor: "#ff00407a",
      content: addLineBreaks(texto_1),
      title: "FRONTEND",
      boxShadow: "#ff0040db",
    },
    {
      color: "#262726",
      borderColor: "#00ffff4f",
      content: addLineBreaks(texto_2),
      title: "BACKEND",
      boxShadow: "#00ffffb3",
    },
    {
      color: "#262726",
      borderColor: "#ab0cdf",
      content: addLineBreaks(texto_3),
      title: "BASES DE DATOS",
      boxShadow: "#fb0cffd6",
    },
  ];

  return (
    <div
      className="contenedor_about w-full min-h-[600px] flex flex-col justify-start items-start gap-1 mt-24 p-8 md:p-24 md:mt-24"
      id="Sobre-mi"
    >
      <h1 className="text-[#b7b7b7] text-[20px] font-bold">Introducción</h1>
      <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
        RESUMEN
      </div>
      <div className="contenedor_header_about flex  justify-start items-center w-full h-[30px] py-14  text-white md:text-[16px] font-bold md:py-8 ">
        {displayText}
      </div>
      <div className="contenedor_body_about w-full grid grid-cols-1 gap-8 mt-10 md:mt-5 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(element) => (cardRefs.current[index] = element)}
            className="transition-transform duration-700 card rounded-lg overflow-hidden shadow-lg hover:scale-105 "
            style={{
              backgroundColor: card.color,
              border: `2px solid ${card.borderColor}`,
              boxShadow: `0px 0px 10px ${card.boxShadow}`,
              filter: `brightness(${1 - borderIntensities[index]})`,
            }}
            onMouseMove={(event) => handleMouseMove(event, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="font-bold text-xl mb-2 text-white flex justify-center items-center h-16">
              <h3 className="border-b-4 border-orange-700 py-2">
                {card.title}
              </h3>
            </div>
            <div
              className="text-gray-200 text-base  px-8 py-4 leading-6 pb-8 font-semibold"
              dangerouslySetInnerHTML={{ __html: card.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
