import "./ProjectCard.css";

const ProjectCard = ({
  bgImage,
  content,
  projectName,
  source_code_link,
  icon,
}) => {
  return (
    <div className="project-card w-full lg:w-[35%] h-[500px] sm:h-[400px] p-4 bg-[#ffffff2e] rounded-lg">
      <div
        className="project-image w-full h-[200px] bg-center bg-cover rounded-t-md "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="project-overlay">
          <h2 className="project-title">{projectName}</h2>
        </div>
      </div>
      <div className="project-content text-white p-2">
        <p>{content}</p>
        <div className="project-links">
          <a
            href={source_code_link}
            className="link w-[2em] h-[2em] bg-center bg-cover"
            style={{ backgroundImage: `url(${icon})` }}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
