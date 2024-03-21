import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const text =
    "Soy un desarrollador apasionado con experiencia en React, PHP y otras tecnologías.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex).toLocaleUpperCase());
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const contenido = `
    <p class="text-white">
      Soy un apasionado desarrollador con una amplia experiencia en PHP
      y otras tecnologías relacionadas. Durante los últimos años, me he
      destacado como experto en PHP, trabajando en una variedad de
      proyectos desafiantes que han fortalecido mis habilidades y
      ampliado mi conocimiento en el campo del desarrollo web.
    </p>
    <p class="text-white">
      Como experto en PHP, he liderado el desarrollo de sistemas web
      complejos, desde sitios web dinámicos hasta aplicaciones
      empresariales a gran escala. Mi experiencia abarca desde la
      creación de aplicaciones desde cero hasta la optimización y el
      mantenimiento de sistemas existentes. He trabajado con frameworks
      como Symfony, React, Django para desarrollar aplicaciones web
      robustas y escalables. Estos frameworks me han permitido acelerar
      el proceso de desarrollo y mantener un código limpio y modular.
    </p>
    <p class="text-white">
      Además de mi experiencia en PHP, también tengo conocimientos
      sólidos en tecnologías complementarias como MySQL, para el
      almacenamiento y la gestión de datos. He diseñado y optimizado
      bases de datos complejas para garantizar un rendimiento óptimo y
      una escalabilidad sin problemas.
    </p>
    <p class="text-white">
      Mi enfoque en la seguridad, el rendimiento y la usabilidad me ha
      permitido crear aplicaciones web que no solo son funcionales y
      eficientes, sino también fáciles de usar y atractivas para los
      usuarios finales. En resumen, soy un desarrollador altamente
      capacitado y motivado que está comprometido a ofrecer soluciones
      de alta calidad que cumplan con los requisitos del cliente y
      superen sus expectativas. Estoy emocionado de seguir creciendo y
      aprendiendo en el emocionante mundo del desarrollo web.
    </p>
  `;

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="contenedor_about w-full h-[600px] flex flex-col justify-center items-center bg-black p-24">
      <div className="contenedor_header_about flex justify-center items-center w-full h-[30px] border-b-4  border-orange-700 text-white text-[24px] font-bold py-12">
        {displayText}
      </div>
      <div
        className="contenedor_body_about w-5/6 h-[400px] mt-10 border-1 border-b-amber-950"
        dangerouslySetInnerHTML={createMarkup(contenido)}
      ></div>
    </div>
  );
};

export default About;
