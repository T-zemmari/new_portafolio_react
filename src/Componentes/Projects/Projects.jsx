import ProjectCard from "../ProjectCard/ProjectCard";
import { proyectos } from "../../constantes";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div
        className="contenedor_proyectos flex flex-col mt-16 p-8 md:p-24 md:mt-0"
        id="Mis-trabajos"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Proyectos</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          ALGUNOS DE MIS PROYECTOS
        </div>
        <div className="w-full min-h-[500px] flex flex-col justify-center items-center sm:flex-row mt-12 sm:mt-36">
          <div className="w-full sm:5/6 min-h-[500px] p-4 sm:p-10 flex flex-col  justify-around items-center gap-4 sm:flex-row  overflow-clip ">
            {proyectos?.map((item) => {
              return (
                <ProjectCard
                  key={item.id}
                  isActive={item.id === 2 ? true : false}
                  bgImage={item.backgroundImage}
                  content={item.content}
                  proyectName={item.title}
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
