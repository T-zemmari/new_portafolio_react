import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  php,
  pyton,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  tedyBusiness,
  matchReady,
  github1,
  miImagenUno,
  icnContact,
  icnExper,
  icnTitul,
  icnWorks,
  bgWaveOne,
  icnAbout,
  icnSkills,
  symfony,
  mysql,
  sqlite,
  proyectoTGGImg,
  proyectoCssUtils,
  proyectoTmEscapade,
  watching,
  facebook,
  linkdin,
  github2,
  facebook2,
  linkdin2,
  github3,
} from "./assets/imgs";

export const miNombre = "Tarek";
export const misApellidos = "Zemmari Kissani";
export const miImagUno = miImagenUno;

export const icnContact1 = icnContact;
export const icnExper1 = icnExper;
export const icnTitul1 = icnTitul;
export const icnWorks1 = icnWorks;

export const bgWave1 = bgWaveOne;

const myLinks = [
  {
    id: 0,
    nombre: "linkdin",
    icon: linkdin,
    icon2: linkdin2,
    link: "https://www.linkedin.com/in/tarek-zemmari/",
  },
  {
    id: 1,
    nombre: "github",
    icon: github2,
    icon2: github3,
    link: "https://github.com/T-zemmari/",
  },
  {
    id: 2,
    nombre: "facebook",
    icon: facebook,
    icon2: facebook2,
    link: "https://www.facebook.com/tzemmari/",
  },
];

export const navLinks = [
  {
    id: "Sobre-mi",
    title: "Sobre mi",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Mis-proyectos",
    title: "Trabajos",
  },
  {
    id: "Experiencias",
    title: "Experiencias",
  },
  {
    id: "Estudios",
    title: "Titulos",
  },
  {
    id: "Contacto",
    title: "Contacto",
  },
];

export const navLinksIcons = [
  {
    id: "Sobre-mi",
    icon: icnAbout,
  },
  {
    id: "Skills",
    icon: icnSkills,
  },
  {
    id: "Mis-proyectos",
    icon: icnWorks,
  },
  {
    id: "Experiencias",
    icon: icnExper,
  },
  {
    id: "Estudios",
    icon: icnTitul,
  },
  {
    id: "Contacto",
    icon: icnContact,
  },
];

// Skills Frontend
export const infoSkillsFront = [
  {
    id: 1,
    skill: "Html",
    level: "Intermedio",
    percent_level: "95",
    icon: html,
  },
  {
    id: 2,
    skill: "CSS",
    level: "Intermedio",
    percent_level: "85",
    icon: css,
  },
  {
    id: 3,
    skill: "JavaScript",
    level: "Avanzado",
    percent_level: "90",
    icon: javascript,
  },
  {
    id: 4,
    skill: "React",
    level: "Intermedio",
    percent_level: "80",
    icon: reactjs,
  },
];

// Skills Backend
export const infoSkillsBack = [
  {
    id: 1,
    skill: "Node.js",
    level: "Avanzado",
    percent_level: "85",
    icon: nodejs,
  },
  {
    id: 2,
    skill: "PHP",
    level: "Avanzado",
    percent_level: "90",
    icon: php,
  },
  {
    id: 3,
    skill: "Python",
    level: "Intermedio",
    percent_level: "60",
    icon: pyton,
  },
  {
    id: 4,
    skill: "Symfony",
    level: "Intermedio",
    percent_level: "80",
    icon: symfony,
  },
];

// Skills Base de datos
export const infoSkillsDatabase = [
  {
    id: 1,
    skill: "MySQL",
    level: "Avanzado",
    percent_level: "90",
    icon: mysql,
  },
  {
    id: 2,
    skill: "MongoDB",
    level: "Intermedio",
    percent_level: "60",
    icon: mongodb,
  },

  {
    id: 3,
    skill: "Sqlite",
    level: "Intermedio",
    percent_level: "65",
    icon: sqlite,
  },
];

// Skills Base de datos
export const infoSkillsUtils = [
  {
    id: 1,
    skill: "Docker",
    level: "Avanzado",
    percent_level: "80",
    icon: docker,
  },
  {
    id: 2,
    skill: "GIT",
    level: "Intermedio",
    percent_level: "70",
    icon: git,
  },

  {
    id: 3,
    skill: "Redux",
    level: "Avanzado",
    percent_level: "85",
    icon: redux,
  },
];

/* Servicios*/

const servicios = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

/* Tecnologias */

const tecnologias = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

/* Experiencias */

const experiencias = [
  {
    id: 0,
    title: "Full Stack Developer",
    company_name: "Tedy Business",
    icon: tedyBusiness,
    iconBg: "#383E56",
    date: "Diciembre 2021 - Actualmente",
    points: [
      "Desarrollo y mantenimiento de las aplicaciones web utilizando React.js PHP Node.js y otras tecnologías relacionadas.",
      "Creación de una aplicación desde cero para el centro de llamadas, que incluye conferencias de video y llamadas telefónicas desde la propia aplicación, utilizada para las 7 plataformas de tipo marketplace como perfumes24h.com y redperfume.com, entre otras.",
      "Participación activa en revisiones de código y proporcionar retroalimentación constructiva para mejorar la calidad del código y la eficiencia del equipo de desarrollo.",
    ],
  },
  {
    id: 1,
    title: "Full Stack Developer",
    company_name: "Match Ready",
    icon: matchReady,
    iconBg: "#383E56",
    date: "Junio 2021 - Diciembre 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js Symfony y otras tecnologías relacionadas.",
      "Colaboración con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de diseño responsive y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y brindar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    id: 3,
    title: "Field Service Enginner",
    company_name: "Tintas Y Soporte Sl",
    date: "JUNIO 2018 - ENERO 2020",
    points: [
      "Instalación y mantenimiento de equipos informáticos en entornos empresariales.",
      "Resolución de problemas de hardware y software en equipos informáticos.",
      "Gestión de inventario de equipos y suministros.",
    ],
  },
  {
    id: 4,
    title: "Electrónico Encargado Departamento Técnico",
    company_name: "Universo Movil",
    date: "FEBRERO 2015 - JUNIO 2018",
    points: [
      "Gestión y supervisión del departamento técnico de una tienda de telefonía móvil.",
      "Reparación de dispositivos móviles y electrónicos.",
      "Atención al cliente y asesoramiento técnico.",
    ],
  },
  {
    id: 5,
    title: "Administrador",
    company_name: "Empresa transportes Tayru",
    date: "FEBRERO 2010 - MARZO 2020",
    points: [
      "Gestión administrativa y financiera de la empresa.",
      "Coordinación de la logística y distribución de productos.",
      "Supervisión del mantenimiento de la flota de vehículos.",
    ],
  },
  {
    id: 6,
    title: "Electrónico",
    company_name: "SAT RotanaNet",
    date: "FEBRERO 2004 - JUNIO 2010",
    points: [
      "Reparación y mantenimiento de equipos electrónicos y de telecomunicaciones.",
      "Diagnóstico de fallos y sustitución de componentes defectuosos.",
      "Atención al cliente y soporte técnico.",
    ],
  },
];

/* Testimnonios */

const testimonios = [
  {
    testimonio:
      "No creía posible hacer un sitio web tan hermoso, pero Tarek me demostró lo contrario.",
    nombre: "Kimo",
    cargo: "CEO",
    empresa: "Tm escapade",
    imagen: "",
  },
];

/* Mis Proyectos */

const proyectos = [
  {
    id: 0,
    title: "TM-Escapade",
    content:
      "TM-Escapade es una aplicación web de agencia de viajes desarrollada en PHP con Metronic. Destaca por su enfoque en la experiencia del usuario y la facilidad de navegación. Buscamos talento para seguir mejorando la plataforma y crear experiencias únicas para nuestros usuarios",
    backgroundImage: proyectoTmEscapade,
    sourceCodeLink: "https://github.com/T-zemmari/tm_escapade.git",
    sourceDeploy: "",
    iconDeploy: watching,
    icon: github1,
  },
  {
    id: 1,
    title: "Css Utils",
    content:
      "CSS Utils: Aplicación en React + Tailwind para generar propiedades CSS personalizadas como sombras de caja y fondos ondulados.",
    backgroundImage: proyectoCssUtils,
    sourceCodeLink: "https://github.com/T-zemmari/css_utils.git",
    sourceDeploy: "https://t-zemmari.github.io/css_utils",
    iconDeploy: watching,
    icon: github1,
  },
  {
    id: 2,
    title: "TGG",
    content:
      "Una aplicación web en React para crear gradientes CSS personalizados con colores y direcciones específicas. Fácil de usar y con código CSS generado automáticamente",
    backgroundImage: proyectoTGGImg,
    sourceCodeLink: "https://github.com/T-zemmari/t_gradient_generator.git",
    sourceDeploy: "https://t-zemmari.github.io/t_gradient_generator/",
    iconDeploy: watching,
    icon: github1,
  },
];

export { tecnologias, experiencias, testimonios, proyectos, servicios ,myLinks};
