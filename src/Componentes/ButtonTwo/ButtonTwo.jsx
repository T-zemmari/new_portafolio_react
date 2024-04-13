import "./ButtonTwo.css";

const ButtonTwo = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 78;
      section.scrollIntoView({ behavior: "smooth", top: offset});
    }
  };

  return (
    <>
      <button
        className="button_two_custom"
        onClick={() => scrollToSection("Contacto")}
      >
        Contacta me
      </button>
    </>
  );
};

export default ButtonTwo;
