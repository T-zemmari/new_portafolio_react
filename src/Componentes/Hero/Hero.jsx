import { styles } from "../../styles.js";
import { miImagUno } from "../../constantes.js";

const Hero = () => {
  return (
    <section className={`w-full h-screen flex flex-col md:flex-row mt-40 md:mt-52 px-10 py-0 md:px-20 md:py-5 `}>
      <div className={`w-full md:w-3/6 ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className={`flex flex-grow flex-col justify-center items-center mt-5`}>
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80  bg-[#915EFF]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, Soy <span className="text-[#915EFF]">Tarek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-200`}>
            Programador y desarrollador full stack,<br className="sm:block hidden" /> especializado {" "}        
          en crear soluciones web completas.
          </p>
        </div>
      </div>

      <div className={`w-full md:w-3/6 ${styles.paddingX} flex flex-row items-start justify-center md:-mt-16 bg-[url('${miImagUno}')] bg-no-repeat bg-center bg-cover`} style={{height: '60%'}}></div>
    </section>
  );
};

export default Hero;
