import { my_styles } from "../../my_styles.js";
import { miImagUno } from "../../constantes.js";
import ButtonTwo from "../ButtonTwo/ButtonTwo.jsx";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <>
    <section className={`w-full min-h-full mt-28 py-0 flex flex-col md:flex-row md:items-start lg:px-5 lg:mt-32 lg:p[120px] `}>
      <div className={`w-full h-5/6 flex flex-row items-start justify-center gap-5 sm:w-3/6 lg:w-3/6 ${my_styles.paddingX} `}>
        <div className={`flex flex-col justify-start items-center `}>
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-96 bg-[#915EFF] sm:h-96  " />
        </div>

        <div>
          <h1 className={`${my_styles.heroHeadText} text-white`}>
            Hola, Soy <motion.span 
            initial={{ 
              color: "#fff",
             }}
            transition={{duration:1}}
            animate={{ 
              color:'#915EFF',

            }}
            >Tarek
            </motion.span>
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

      <div className={`w-full sm:w-3/6 lg:w-3/6 h-6/6 ${my_styles.paddingX} md:-mt-0  flex flex-row justify-center items-start`}>
        <div className={`contenedor_imagnen w-[55rem] max-w-96 h-96 md:mt-0 border border-indigo-600 rounded-full bg-[url('${miImagUno}')]  bg-center bg-cover bg-no-repeat`} style={{backgroundImage:`url(${miImagUno})`}}></div>
      </div>
    </section>
    </>
  );
};

export default Hero;
