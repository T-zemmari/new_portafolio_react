import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div
        className="contenedor_contact flex flex-col mt-16 p-12 md:py-2 md:px-24 md:mt-0"
        id="Contacto"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Contacto</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          RELLENA EL SIGUIENTE FORMULARIO
        </div>
      </div>
    </>
  );
};

export default Contact;
