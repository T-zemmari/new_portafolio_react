import './SkillCard.css';

const SkillCard = ({  skill, level, percent_level, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={icon} alt={skill} />
      </div>
      <div className="skill-info">
        <h3>{skill}</h3>
        {/*<p>Nivel: {level}</p>*/}
        <div className="progress-wrapper">
          <progress value={percent_level} max="100"></progress>
          <span className='custom_skill_span'>{percent_level}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
