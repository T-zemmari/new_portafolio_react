import "./CardTwo.css";

const CardTwo = ({ keyID,title, onClick }) => {
  return (
    <div className="contenedor_card_two" onClick={onClick} id={keyID} style={{cursor:'pointer'}}>
      <h2>{title}</h2>
    </div>
  );
};

export default CardTwo;
