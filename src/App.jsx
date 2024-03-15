import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./Componentes/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="contendor_app">
         <Navbar/>
    </div>
    </BrowserRouter>
  );
};

export default App;
