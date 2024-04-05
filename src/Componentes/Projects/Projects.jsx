import ProjectCard from "../ProjectCard/ProjectCard";
import { proyectos } from "../../constantes";
import { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("Mis-proyectos");
      if (!container) return;
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const cardsToShow = [];

      proyectos.forEach((item, index) => {
        const card = document.getElementById(`project-card-${item.id}`);
        if (!card) return;
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - containerTop && cardTop > -card.offsetHeight) {
          cardsToShow.push(index);
        }
      });

      setShowCards(cardsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamo a handleScroll() para mostrar las tarjetas al principio
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="contenedor_proyectos w-full min-h-full flex flex-col mt-16 p-4 md:p-16 lg:p-24 md:mt-0"
        id="Mis-proyectos"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Proyectos</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          ALGUNOS DE MIS PROYECTOS
        </div>
        <div className="w-full min-h-[500px] flex flex-col justify-center items-center sm:flex-row mt-12 sm:mt-36">
          <div className="w-full min-h-[500px] p-4 sm:p-10 flex flex-col justify-around items-center gap-8 lg:gap-4 lg:flex-row ">
            {proyectos?.map((item, index) => {
              return (
                <ProjectCard
                  key={item.id}
                  id={`project-card-${item.id}`}
                  isActive={item.id === 2 ? true : false}
                  bgImage={item.backgroundImage}
                  content={item.content}
                  projectName={item.title}
                  sourceCodeLink={item.sourceCodeLink}
                  icon={item.icon}
                  sourceDeploy={item.sourceDeploy}
                  iconDeploy={item.iconDeploy}
                  style={{
                    opacity: showCards.includes(index) ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    transitionDelay: `${index * 0.2}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
