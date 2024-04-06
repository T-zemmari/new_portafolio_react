import { BrowserRouter } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar";
import Hero from "./Componentes/Hero/Hero";
import About from "./Componentes/About/About";
import Skills from "./Componentes/Skills/Skills";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";
import Experiences from "./Componentes/Experiences/Experiences";
import Studies from "./Componentes/Studies/Studies";
import Projects from "./Componentes/Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="contendor_app">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
