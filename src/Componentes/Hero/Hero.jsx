import { my_styles } from "../../my_styles.js";
import { miImagUno } from "../../constantes.js";
import ButtonTwo from "../ButtonTwo/ButtonTwo.jsx";
import { motion } from "framer-motion";
import MenuToggleOne from "../MenuToggleOne/MenuToggleOne.jsx";
import { useEffect, useState } from "react";


const Hero = () => {
  const [mostrarTexto2, setMostrarTexto2] = useState(false);
  const [mostrarTexto3, setMostrarTexto3] = useState(false);
  const [renderTexto1, setRenderTexto1] = useState("");
  const [renderTexto2, setRenderTexto2] = useState("");
  const [renderTexto3, setRenderTexto3] = useState("");

  const texto1 = "Hola, soy";
  const texto2 = "Tarek";
  const texto3 ="Programador y desarrollador full stack,especializado en crear soluciones web completas.";

  useEffect(() => {
    const interval1 = setInterval(() => {
      setRenderTexto1((prevText) => {
        if (prevText.length < texto1.length) {
          return texto1.substring(0, prevText.length + 1);
        } else {
          clearInterval(interval1);
          setMostrarTexto2(true);
          return prevText;
        }
      });
    }, 50);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {   
      const interval2 = setInterval(() => {
        setRenderTexto2((prevText) => {
          if (prevText.length < texto2.length) {
            return texto2.substring(0, prevText.length + 1);
          } else {
            clearInterval(interval2);
            setMostrarTexto3(true);
            return prevText;
          }
        });
      }, 100);
      return () => clearInterval(interval2);
   
  }, [mostrarTexto2]);

  useEffect(() => {   
    const interval3 = setInterval(() => {
      setRenderTexto3((prevText) => {
        if (prevText.length < texto3.length) {
          return texto3.substring(0, prevText.length + 1);
        } else {
          clearInterval(interval3);
          return prevText;
        }
      });
    }, 30);
    return () => clearInterval(interval3);
 
}, [mostrarTexto3]);

  return (
    <>
      <section
        id="hero_container"
        className={`w-full min-h-full mt-28 py-0 flex flex-col md:flex-row md:items-start lg:px-5 lg:mt-40 lg:p[120px] `}
      >
        <div className={`w-full h-5/6 flex flex-row items-start justify-start gap-5 sm:w-3/6 lg:w-3/6 ${my_styles.paddingX} `}>
          
          <div>
            <h1 className={`${my_styles.heroHeadText} text-white`}>
              {renderTexto1}{" "}
              <motion.span
                initial={{
                  color: "#fff",
                }}
                transition={{ duration: 1 }}
                animate={{
                  color: "#915EFF",
                }}
              >
                {renderTexto2}
              </motion.span>
            </h1>
            <p className={`${my_styles.heroSubText} text-white-200 mt-10`}>
              {renderTexto3}
            </p>
            <div className="w-full flex flex-row justify-start gap-2 mt-14">
              {/*<ButtonOne animation={"animate-left-right"}>Contacto</ButtonOne>*/}
              <ButtonTwo />
            </div>
          </div>
        </div>

        <div
          className={`w-full max-w-6/6  sm:w-3/6 lg:w-3/6 h-6/6 ${my_styles.paddingX} md:-mt-8.5  flex flex-row justify-center items-start`}
        >
          <div
            className={`contenedor_imagnen w-[55rem] max-w-96 h-96 mt-16 md:mt-0 border-double border-4 border-indigo-600 rounded-full bg-[url('${miImagUno}')]  bg-center bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${miImagUno})` }}
          ></div>
        </div>
      </section>
      <section className={`w-full h-[300px]`}>
        <MenuToggleOne />
      </section>
    </>
  );
};

export default Hero;
