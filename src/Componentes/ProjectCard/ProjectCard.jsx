import React from "react";
import "./ProjectCard.css"; // Asegúrate de importar el archivo de estilos CSS correspondiente

const ProjectCard = ({ bgImage, content, projectName }) => {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="project-overlay">
          <h2 className="project-title">{projectName}</h2>
        </div>
      </div>
      <div className="project-content">
        <p>{content}</p>
        <div className="project-links">
          <a href="#" className="link">Ver más</a>
          <a href="#" className="link">Código fuente</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
