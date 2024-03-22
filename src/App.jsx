import { BrowserRouter } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar";
import Hero from "./Componentes/Hero/Hero";
import About from "./Componentes/About/About";
import Skills from "./Componentes/Skills/Skills";
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <div className="contendor_app">
         <Navbar/>
         <Hero/>
         <About/>
         <Skills/>
    </div>
    </BrowserRouter>
  );
};

export default App;
