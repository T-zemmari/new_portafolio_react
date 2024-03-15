import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./Componentes/Navbar/Navbar";
import Hero from "./Componentes/Hero/Hero";

const App = () => {
  return (
    <BrowserRouter>
    <div className="contendor_app">
         <Navbar/>
         <Hero/>
    </div>
    </BrowserRouter>
  );
};

export default App;
