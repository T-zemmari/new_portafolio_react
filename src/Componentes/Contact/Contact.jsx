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

        <div className="w-full mt-24 h-[600px] flex justify-center items-center ">

          <div className='formulario_padre w-[100%] md:w-[60%] h-[90%] border-2 border-[#161455] bg-[#161455] flex flex-col-reverse justify-start'>
            <div className="w-[100%] h-[100px] md:w-[150px] md:h-[100%] bg-[#7e57c2]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
