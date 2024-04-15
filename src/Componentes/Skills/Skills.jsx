import { useEffect, useState, useRef } from "react";
import {
  infoSkillsFront,
  infoSkillsBack,
  infoSkillsDatabase,
  infoSkillsUtils,
} from "../../constantes";
import CardTwo from "../CardTwo/CardTwo";
import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  const [arraySkills, setArraySkills] = useState([]);
  const [activeElement, setActiveElement] = useState("Backend");
  const [showCards, setShowCards] = useState([]);

  const cardsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setArraySkills(infoSkillsFront);
  }, []);

  useEffect(() => {
    if (activeElement === "Frontend") setArraySkills(infoSkillsFront);
    if (activeElement === "Backend") setArraySkills(infoSkillsBack);
    if (activeElement === "Base de datos") setArraySkills(infoSkillsDatabase);
    if (activeElement === "Utils") setArraySkills(infoSkillsUtils);
  }, [activeElement]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("Skills");
      if (!container) return;
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const cardsToShow = [];

      const cardsElement = cardsRef.current;
      const skillsElement = skillsRef.current;

      if (cardsElement && skillsElement) {
        const cardsRect = cardsElement.getBoundingClientRect();
        const skillsRect = skillsElement.getBoundingClientRect();

        if (
          cardsRect.top < windowHeight - containerTop &&
          cardsRect.bottom >= -containerTop
        ) {
          cardsToShow.push(cardsElement);
        }

        if (
          skillsRect.top < windowHeight - containerTop &&
          skillsRect.bottom >= -containerTop
        ) {
          cardsToShow.push(skillsElement);
        }
      }

      setShowCards(cardsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mostrarElemento = (elemento) => {
    setActiveElement(elemento);
  };

  const infoCards = [
    {
      id: "Frontend",
      title: "FRONTEND",
      onClick: () => mostrarElemento("Frontend"),
    },
    {
      id: "Backend",
      title: "BACKEND",
      onClick: () => mostrarElemento("Backend"),
    },
    {
      id: "Base de datos",
      title: "BASE DE DATOS",
      onClick: () => mostrarElemento("Base de datos"),
    },
    {
      id: "Utils",
      title: "UTILS",
      onClick: () => mostrarElemento("Utils"),
    },
  ];

  return (
    <div
      className="w-full flex flex-col mt-16 p-6 md:px-24 md:p-12 md:mt-0"
      id="Skills"
    >
      <h1 className="text-[#b7b7b7] text-[20px] font-bold">Skills</h1>
      <div className="flex justify-start items-center w-full h-[30px] text-white md:text-[38px] font-bold md:py-6 md:mt-2">
        MIS HABILIDADES
      </div>
      <div className="w-full min-h-[500px] flex flex-col lg:flex-row gap-2">
        <motion.div
          ref={cardsRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={showCards.includes(cardsRef.current) ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex w-full lg:w-3/6 h-[400px] mt-10 rounded-[10px] flex-col md:flex-row justify-center items-center gap-2 md:flex-wrap p-4 lg:mt-32"
          id="contenedor_tarjetas_skills"
        >
          {infoCards?.map((item) => (
            <CardTwo
              key={item.id}
              title={item.title}
              onClick={item.onClick}
              keyID={item.id}
              active={activeElement === item.id}
            />
          ))}
        </motion.div>
        <motion.div
          ref={skillsRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={showCards.includes(skillsRef.current) ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/6 h-[400px] flex flex-col justify-center items-start  gap-4 rounded-[10px] mt-10 border border-[#403ca3] md:p-4 lg:mt-32"
          id="contenedor_info_skills"
        >
          {arraySkills?.map((item) => (
            <SkillCard
              key={item.id}
              level={item.level}
              percent_level={item.percent_level}
              icon={item.icon}
              skill={item.skill}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
