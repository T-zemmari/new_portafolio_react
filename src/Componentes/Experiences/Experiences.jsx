import "./Experiences.css";
import { experiencias } from "../../constantes";
import { useEffect } from "react";

const Experiences = () => {
  useEffect(() => {
    console.log(experiencias);
  }, []);

  return (
    <div className="contenedor_experiencias min-h-[900px] flex flex-col mt-16 p-8 md:p-24 md:mt-0 " id="Experiencias">
      <h1 className="text-[#b7b7b7] text-[20px] font-bold">Experiencias</h1>
      <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2" id="contenedor_mi_trayectoria_laboral">
        MI TRAYECTORIA LABORAL
      </div>
      <div className="contenedor_tarjetas_experiencias w-full min-h-[100%] p-10 mt-24 flex flex-col ">
        {experiencias.map((experience) => (
          <div
            key={experience.id}
            className={`experiencia w-full min-h-[250px] border-2 border-indigo-950 p-6 flex flex-row
              `}
          >
            <div className={`contenddor_izquierdo w-[49%] h-[100%] ${experience.id % 2 === 0 ? '' : 'hidden'}`}>
              <div className="titulo">{experience.title}</div>
              <div className="company_name">{experience.company_name}</div>
              <div className="date">{experience.date}</div>
              <ul className="points">
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="w-[1%] h-[100%] bg-white"></div>
            <div className={`contenddor_derecho w-[49%] h-[100%] ${experience.id % 2 !== 0 ? '' : 'hidden'}`}>
              <div className="titulo">{experience.title}</div>
              <div className="company_name">{experience.company_name}</div>
              <div className="date">{experience.date}</div>
              <ul className="points">
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
