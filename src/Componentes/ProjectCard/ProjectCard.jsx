import "./ProjectCard.css";
import robotto from "../../assets/fonts//roboto/Roboto-Black.ttf";
import { useState } from "react";

const ProjectCard = ({
  bgImage,
  content,
  projectName,
  sourceCodeLink,
  icon,
  iconDeploy,
  sourceDeploy,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowDescrpction = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="project-card w-full lg:w-[35%] h-[370px] p-4 bg-[#ffffff2e] rounded-lg flex flex-col justify-start items-center relative">
      <div
        className="project-image w-full h-[250px] bg-center bg-cover rounded-t-md"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="project-overlay h-[60px] flex flex-row justify-center items-center">
        <h2 className="project-title text-white font-bold uppercase text-xl">
          {projectName}
        </h2>
      </div>
      <div className="w-full h-[80px] flex flex-row items-center justify-between">
        <button
          className="w-[150px] h-[55px] border-2 border-white text-white hover:text-orange-400 font-bold flex justify-center items-center"
          onClick={handleShowDescrpction}
        >
          Ver mas
        </button>
        <div className={`flex justify-end items-center`}>
          <a
            href={sourceDeploy}
            className="link h-[55px] flex justify-center items-center"
            target="_blank"
          >
            <div
              className="link w-[50px] h-[50px] bg-center bg-cover mr-4"
              style={{ backgroundImage: `url(${iconDeploy})` }}
            ></div>
          </a>
          <a
            href={sourceCodeLink}
            className="link h-[55px] flex justify-center items-center"
            target="_blank"
          >
            <div
              className="link w-[50px] h-[50px] bg-center bg-cover mr-4"
              style={{ backgroundImage: `url(${icon})` }}
            ></div>
          </a>
        </div>
      </div>
      <div
        className={`project-content h-[170px] ${
          expanded ? "" : "hidden"
        } text-white p-4 absolute bottom-[-180px] left-0 flex justify-start items-start bg-[#ffffff2e]`}
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
