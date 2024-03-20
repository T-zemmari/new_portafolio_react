import { useState } from "react";

const MenuToggleOne = () => {
  return (
    <>
      <div
        className={`w-full h-[300px] border-indigo-600 flex flex-column justify-center items-center relative`}
      >
        <div className="w-1/6 relative">
           <button className={`w-[100px] h-[100px] rounded-full bg-violet-700 text-white`}>MENU</button>
        <button className={`w-[50px] h-[50px] rounded-full text-white absolute -top-4 -left-20`}></button>
        <button className={`w-[50px] h-[50px] rounded-full text-white absolute -top-16 left-2`}></button>
        <button className={`w-[50px] h-[50px] rounded-full text-white absolute -top-16 right-20`}></button>
        <button className={`w-[50px] h-[50px] rounded-full text-white absolute -top-4 right-2`}></button>
        </div>
       
      </div>
    </>
  );
};

export default MenuToggleOne;
