import "./ProjectCard.css";
import robotto from "../../assets/fonts//roboto/Roboto-Black.ttf";
import { useState } from "react";
import SwAlert from "../SwAlert/SwAlert";

const ProjectCard = ({
  id,
  bgImage,
  content,
  projectName,
  sourceCodeLink,
  icon,
  iconDeploy,
  sourceDeploy,
  style,
  isPrivate,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowDescription = () => {
    setExpanded(!expanded);
  };

  const mostrarAlert = () => {
    SwAlert(
      `Este proyecto está actualmente en modo privado. Por favor, contáctame para obtener acceso autorizado`
    );
  };

  return (
    <div
      className={`project-card w-full lg:w-[100%] ${
        !expanded ? "h-[370px]" : "h-[770px]"
      } p-4 bg-[#ffffff2e] lg:h-[370px] rounded-lg flex flex-col justify-center items-start relative transition-all`}
      id={id}
      style={style}
    >
      <div
        className="project-image w-full h-[250px] md:h-[250px] bg-center bg-cover rounded-t-md"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="project-overlay h-[60px] flex flex-row justify-center items-center">
        <h2 className="project-title text-white font-bold uppercase text-xl">
          {projectName}
        </h2>
      </div>
      <div className="w-full h-[80px] flex flex-row items-center justify-between">
        <button
          className="w-[150px] h-[45px] sm:h-[55px] border-2 border-white text-white hover:text-orange-400 font-bold flex justify-center items-center"
          onClick={handleShowDescription}
        >
          Ver más
        </button>
        <div className={`flex justify-end items-center`}>
          {!isPrivate && sourceDeploy &&
            sourceDeploy !==
              "" &&(
            <a
              href={sourceDeploy}
              className="link h-[55px] flex justify-center items-center"
              target="_blank"
            >
              <div
                className="link w-[50px] h-[50px] bg-center bg-cover mr-4"
                style={{ backgroundImage: `url(${iconDeploy})` }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d96716]"></span>
                </span>
              </div>
            </a>
          )}
          {!isPrivate &&
            (
                <a
                  href={sourceCodeLink}
                  className="link h-[55px] flex justify-center items-center"
                  target="_blank"
                >
                  <div
                    className="link w-[50px] h-[50px] bg-center bg-cover mr-4 "
                    style={{
                      backgroundImage: `url(${icon})`,
                      cursor: "pointer",
                    }}
                  ></div>
                </a>
              )}
          {isPrivate && (
            <div
              className="link w-[50px] h-[50px] bg-center bg-cover mr-4 "
              style={{ backgroundImage: `url(${icon})`, cursor: "pointer" }}
              onClick={mostrarAlert}
            ></div>
          )}
        </div>
      </div>
      <div
        className={`project-content min-h-[170px] ${
          expanded ? "" : "hidden"
        } text-white p-4 mt-10 lg:absolute lg:bottom-[-180px] lg:left-0 flex justify-start items-start bg-[#ffffff2e]`}
      >
        <p
          className="content_p"
          style={{ fontFamily: `${robotto} !important` }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
