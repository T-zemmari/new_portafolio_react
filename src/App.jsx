import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./Componentes/Navbar/Navbar";
import Hero from "./Componentes/Hero/Hero";
import About from "./Componentes/About/About";

const App = () => {
  return (
    <BrowserRouter>
    <div className="contendor_app">
         <Navbar/>
         <Hero/>
         <About/>
    </div>
    </BrowserRouter>
  );
};

export default App;
