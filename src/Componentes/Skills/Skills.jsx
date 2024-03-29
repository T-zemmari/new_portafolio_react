import { useEffect, useState } from "react";
import {
  infoSkillsFront,
  infoSkillsBack,
  infoSkillsDatabase,
  infoSkillsUtils,
} from "../../constantes";
import CardTwo from "../CardTwo/CardTwo";
import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  const [arraySkills, setArraySkills] = useState([]);
  const [element, setElement] = useState("Frontend");

  useEffect(() => {
    setArraySkills(infoSkillsFront);
  }, []);

  useEffect(() => {
    if (element === "Frontend") setArraySkills(infoSkillsFront);
    if (element === "Backend") setArraySkills(infoSkillsBack);
    if (element === "Base de datos") setArraySkills(infoSkillsDatabase);
    if (element === "Utils") setArraySkills(infoSkillsUtils);
  }, [element]);

  const mostrarElemento = (elemento) => {
    setElement(elemento);
  };
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
    {
      id: "3",
      title: "UTILS",
      onclick: () => mostrarElemento("Utils"),
    },
  ];
  return (
    <>
      <div
        className="w-full flex flex-col mt-16 p-6 md:px-24 md:p-12 md:mt-0"
        id="Skills"
      >
        <h1 className="text-[#b7b7b7] text-[20px] font-bold">Skills</h1>
        <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
          MIS HABILIDADES
        </div>
        <div className="w-full min-h-[500px] flex flex-col md:flex-row gap-2">
          <div
            className=" flex w-full md:w-3/6 h-[400px] mt-10 rounded-[10px]  flex-col md:flex-row justify-center items-center gap-2 md:flex-wrap p-4"
            id="contenedor_tarjetas_skills"
          >
            {infoCards?.map((item) => {
              return (
                <CardTwo
                  key={item.id}
                  title={item.title}
                  onClick={item.onclick}
                  keyID={item.id}
                />
              );
            })}
          </div>
          <div className="w-full md:w-3/6 h-[400px] flex flex-col justify-center items-start  gap-4 rounded-[10px] mt-10 border border-[#403ca3] md:p-4">
            {arraySkills?.map((item) => {
              return <SkillCard key={item.id} level={item.level} percent_level={item.percent_level} icon={item.icon} skill={item.skill}/>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
