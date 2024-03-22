import { useState } from "react";
import CardTwo from "../CardTwo/CardTwo";
import "./Skills.css";

const Skills = () => {
  const [active, setActive] = useState("Frontend");

  const mostrarElemento = (elemento) => {};
  const infoCards = [
    {
      id: "0",
      title: "FRONTEND",
      onclick: () => mostrarElemento("Frontend"),
    },
    {
      id: "1",
      title: "BACKEND",
      onclick: () => mostrarElemento("Backend"),
    },
    {
      id: "2",
      title: "BASE DE DATOS",
      onclick: () => mostrarElemento("Base de datos"),
    },
  ];
  return (
    <>
      <div
        className="w-full flex flex-col mt-16 p-12 md:py-2 md:px-24 md:mt-0"
        id="Skills"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Skills</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          MIS HABILIDADES
        </div>
        <div className="w-full min-h-[500px] flex flex-col-reverse md:flex-row gap-2">
          <div
            className=" flex w-full md:w-3/6 h-[400px]  mt-10 rounded-[10px] border-2 border-[#403ca3] flex-col md:flex-row justify-center items-center gap-2 md:flex-wrap p-4"
            id="contenedor_tarjetas_skills"
          >
            {infoCards?.map((item) => {
              return (
                <CardTwo
                  key={item.id}
                  title={item.title}
                  onlick={item.onclick}
                  keyID={item.id}
                />
              );
            })}
          </div>
          <div className=" flex w-full md:w-3/6 h-[400px]  rounded-[10px] mt-10 border-2 border-[#403ca3]"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
