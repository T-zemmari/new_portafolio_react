import "./ButtonTwo.css";

const ButtonTwo = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button className="button_two_custom" onClick={()=>scrollToSection('Contacto')}>Contacta me</button>
    </>
  );
};

export default ButtonTwo;
