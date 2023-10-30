import { useState } from "react";

const Nav = () => {
  const [BgColor, setBgColor] = useState("defaule");
  const BgColors = () => {
    if (window.scrollY >= 20) {
      setBgColor("defaule header_Bg");
    } else {
      setBgColor("defaule");
    }
  };
  window.addEventListener('scroll' , BgColors)
  return (
    <>
    <div className={BgColor}>

      <div className="bg-gray-100 flex justify-center items-center w-full sticky " >
        <div className="px-4 py-3 text-blue-500 font-normal space-x-3">
          <a
            href="#"
            className=" hover:text-blue-400 hover:translate-y-2 duration-300 text-xl"
          >
            All
          </a>
          <a
            href="#"
            className=" hover:text-blue-400 hover:translate-y-2 duration-300 text-xl"
          >
            BreakFast
          </a>
          <a
            href="#"
            className=" hover:text-blue-400 hover:translate-y-2 duration-300 text-xl"
          >
            Lunch
          </a>
          <a
            href="#"
            className=" hover:text-blue-400 hover:translate-y-2 duration-300 text-xl"
          >
            Shanks
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Nav;
