import { useRef, useState } from "react";
import {
  icnContact1,
  icnExper1,
  icnTitul1,
  icnWorks1,
  bgWave1,
} from "../../constantes.js";
import './MenuToggleOne.css';

const MenuToggleOne = () => {
  const menuRef = useRef(null);
  const [menuToggled, setMenuToggled] = useState("hidden");
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const handelMenuToggle = () => {
    setMenuToggled(menuToggled === "hidden" ? "" : "hidden");
    setisButtonClicked(!isButtonClicked)
  };
  return (
    <>
      <div
        className={`w-full h-[386px] border-0 border-indigo-600 flex flex-column justify-center items-center relative`}
        style={{ backgroundImage: `url(${bgWave1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}
      >
        <div className="relative">
          <button
            ref={menuRef}
            className={`w-[100px] h-[100px] rounded-full bg-[#ec4104] text-white ${isButtonClicked ? "border-t-8" : ""} focus:outline-none transition-all duration-200`}
            onClick={handelMenuToggle}
          >
            MENU
          </button>
          <button
            className={`menu_buttons ${menuToggled}  w-[50px] h-[50px] border-0 rounded-full  absolute -top-0 -left-[60px] bg-center bg-cover hover:w-[60px] hover:h-[60px] hover:-left-[70px]`}
            style={{ backgroundImage: `url(${icnContact1})` }}
          ></button>
          <button
            className={`menu_buttons ${menuToggled} w-[50px] h-[50px] border-0 rounded-full  absolute -top-16 -left-4 bg-center bg-cover hover:w-[60px] hover:h-[60px] hover:-left-[20px]`}
            style={{ backgroundImage: `url(${icnExper1})` }}
          ></button>
          <button
            className={`menu_buttons  ${menuToggled} w-[50px] h-[50px] border-0 rounded-full  absolute -top-16 left-16 bg-center bg-cover hover:w-[60px] hover:h-[60px] hover:left[-30px]`}
            style={{ backgroundImage: `url(${icnWorks1})` }}
          ></button>
          <button
            className={`menu_buttons  ${menuToggled} w-[50px] h-[50px] border-0 rounded-full  absolute -top-0 left-[110px] bg-center bg-cover hover:w-[60px] hover:h-[60px] hover:left-[118px]`}
            style={{ backgroundImage: `url(${icnTitul1})` }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default MenuToggleOne;
