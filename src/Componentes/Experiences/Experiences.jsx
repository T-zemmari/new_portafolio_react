import { useEffect, useRef } from "react";
import { experiencias } from "../../constantes";
import './Experiences.css';

const Experiences = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const experiences = container.querySelectorAll(".experiencia");
      experiences.forEach((experience, index) => {
        const rect = experience.getBoundingClientRect();
        const distanceFromCenter = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        const scale = Math.min(
          1,
          Math.max(0, 1 - distanceFromCenter / window.innerHeight)
        );

        experience.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="contenedor_experiencias min-h-[900px] flex flex-col mt-16 p-8 md:p-24 md:mt-0"
      id="Experiencias"
      ref={containerRef}
    >
      <h1 className="text-[#b7b7b7] text-[20px] font-bold">Experiencias</h1>
      <div
        className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2"
        id="contenedor_mi_trayectoria_laboral"
      >
        MI TRAYECTORIA LABORAL
      </div>
      <div className="contenedor_tarjetas_experiencias w-full h-[100%] p-10 mt-24 flex flex-col gap-0 justify-center items-center ">
        {experiencias.map((experience, index) => (
          <div
            key={experience.id}
            className={`experiencia w-[90%] min-h-[250px] border-2 border-indigo-950 p-16 flex flex-col 
            justify-startr items-center gap-4 bg-[#161455] rounded-xl
              ${
                index % 2 === 0 ? "contenedor_izquierdo" : "contenedor_derecho"
              } text-white p-4`}
          >
            <div className="titulo h-[40px] experience_title text-4xl font-bold uppercase">
              {experience.title}
            </div>
            <div className="company_name text-2xl">{experience.company_name}</div>
            <div className="date text-2xl">{experience.date}</div>
            <ul className="points font-bold">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
