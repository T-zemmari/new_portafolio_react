import { my_styles } from "../../my_styles.js";
import { miImagUno } from "../../constantes.js";
import ButtonOne from "../ButtonOne/ButtonOne.jsx";
import ButtonTwo from "../ButtonTwo/ButtonTwo.jsx";

const Hero = () => {
  return (
    <>
    <section className={`w-full h-full flex flex-col md:flex-row md:items-center mt-28 lg:mt-52 px-10 py-0 lg:px-40 lg:py-5 `}>
      <div className={`w-full h-5/6 sm:w-3/6 lg:w-4/6 ${my_styles.paddingX} flex flex-row items-start justify-center gap-5`}>
        <div className={`flex flex-col justify-start items-center `}>
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80  bg-[#915EFF]" />
        </div>

        <div>
          <h1 className={`${my_styles.heroHeadText} text-white`}>
            Hola, Soy <span className="text-[#915EFF]">Tarek</span>
          </h1>
          <p className={`${my_styles.heroSubText} text-white-200 mt-10`}>
            Programador y desarrollador full stack,
            <br className="sm:block hidden" /> especializado en crear soluciones
            web completas.
          </p>
          <div className="w-full flex flex-row justify-start gap-2 mt-12">
            {/*<ButtonOne animation={"animate-left-right"}>Contacto</ButtonOne>*/}
            <ButtonTwo/>
          </div>
        </div>
      </div>

      <div className={`w-full sm:w-3/6 lg:w-2/6 h-5/6 ${my_styles.paddingX} md:-mt-0  flex flex-row justify-center items-start`}>
        <div className={`contenedor_imagnen w-60 max-w-96 h-96  mt-20 md:mt-0 border border-indigo-600 rounded-full bg-[url('${miImagUno}')]  bg-center bg-cover`}></div>
      </div>
    </section>
    </>
  );
};

export default Hero;
