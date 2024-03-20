import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    tmEscapadeImage,
    miImagenUno,
    icnContact,
    icnExper,
    icnTitul,
    icnWorks,
    bgWaveOne,
} from "./assets/imgs";


export const miNombre='Tarek';
export const misApellidos="Zemmari Kissani";
export const miImagUno=miImagenUno;

export const icnContact1=icnContact;
export const icnExper1=icnExper;
export const icnTitul1=icnTitul;
export const icnWorks1=icnWorks;

export const bgWave1=bgWaveOne;

export const navLinks = [
    {
        id: "sobre_mi",
        title: "Sobre mi",
    },
    {
        id: "mis_trabajos",
        title: "Trabajos",
    },
    {
        id: "contacto",
        title: "Contacto",
    },
];

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

const experiencias = [
    {
        title: "Full stack developer",
        company_name: "Match ready",
        icon: matchReady,
        iconBg: "#383E56",
        date: "Junio 2021 - Diciembre 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack developer",
        company_name: "Tedy business",
        icon: tedyBusiness,
        iconBg: "#383E56",
        date: "Diciembre 2021 - Actualmente",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonios = [
    {
        testimonio: "No creía posible hacer un sitio web tan hermoso, pero Tarek me demostró lo contrario.",
        nombre: "Kimo",
        cargo: "CEO",
        empresa: "Tm escapade",
        imagen: "",
    },
];


const proyectos = [
    {
        name: "TM-Escapade",
        description:
            "Bienvenido a TM-Escapade, tu puerta de entrada a experiencias inolvidables en Marruecos. En TM-Escapade, no solo organizamos viajes, sino que creamos memorias que perduran toda la vida.",
        tags: [
            {
                name: "experiencias",
                color: "blue-text-gradient",
            },
            {
                name: "viajes",
                color: "green-text-gradient",
            },
            {
                name: "Marrakech",
                color: "pink-text-gradient",
            },
        ],
        image: tmEscapadeImage,
        source_code_link: "https://github.com/tm-escapade",
    },
];


export { tecnologias, experiencias, testimonios, proyectos, servicios };
