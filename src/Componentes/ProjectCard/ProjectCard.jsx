import "./ProjectCard.css";

const ProjectCard = ({isActive,bgImage}) => {
  return (
    <div className={`project_card w-full sm:w-[350px] h-[450px] ${isActive?'sm:h-[480px]':'sm:h-[450px]'} flex flex-col border-1  bg-white rounded-[10px] overflow-auto`}>
     <div className={`w-full h-[35%] border-b border-orange-600 rounded-b-lg bg-center bg-cover bg-no-repeat`} style={{backgroundImage:`url(${bgImage})`}}></div>
    </div>
  );
};

export default ProjectCard;
