import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Profile from "../profile/Profile";
import { ContextProvider } from "context/GlobalContext";

export default function AuthHeader() {

  const {windowWidth} = ContextProvider()
  const [click, setClick] = useState(false);

  const toggleClick = () => {
    setClick(!click);
  };
 
  return (
    <nav className=" hidden sm:flex   gap-x-6  ">
      <button className=" text-white  text-opacity-80 flex items-center gap-1  xl:text-base font-medium transition-all  hover:text-opacity-100">
        <BiGlobe size={20} /> {windowWidth > 1024 && "Türkçe (TR)"}
      </button>
      <button className=" text-white  text-opacity-80 flex  xl:text-base  items-center gap-1  transition-all   hover:text-opacity-100">
        <HiGift size={20} /> {windowWidth > 1024 && " Kampanyalar"}
      </button>
      <button className=" text-white  text-opacity-80 flex  xl:text-base  items-center gap-1    hover:text-opacity-100">
        <div className=" bg-brand-color  justify-center z-40 ">
          <div className="flex items-center justify-center ">
            <div className=" relative inline-block text-left dropdown">
              <span className="rounded-md shadow-sm">
                {" "}
                <button
                  className="inline-flex mt-1 justify-center w-full px-4 text-base font-semibold leading-5 text-gray-300 transition duration-150 ease-in-out bg-brand-color rounded-md hover:text-white focus:outline-none  f"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  aria-controls="headlessui-menu-items-117"
                  onClick={toggleClick}
                >
                  <span className=" mr-2">
                    <FaUser size={16} />
                  </span>
                  <span>{windowWidth > 1024 && "Profil"}</span>
                  <svg
                    className="w-5 h-5 ml-1 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
             <Profile click={click}/>
            </div>
          </div>
        </div>
      </button>
    </nav>
   
  );
}
