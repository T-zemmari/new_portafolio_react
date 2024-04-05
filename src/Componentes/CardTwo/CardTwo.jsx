import { useEffect } from "react";
import "./CardTwo.css";

const CardTwo = ({ keyID, title, onClick, active }) => {
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div
      className={`contenedor_card_two ${active ? "active" : ""}`}
      onClick={onClick}
      id={keyID}
      style={{ cursor: "pointer" }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default CardTwo;
