import "./CardOne.css";

const CardOne = ({ content }) => {
  return (
    <div className="container">
      <div className="gradient-cards">
        <div className="card">
          <div className="container-card bg-green-box">
            <p className="card-title">Sobre mi</p>
            <p className="card-description">
                {content}
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
