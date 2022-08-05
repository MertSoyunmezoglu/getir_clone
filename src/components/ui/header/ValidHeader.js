import React from 'react'
import { openModal } from "store/modal";
import { BiGlobe } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

import { useWindowWidth } from "@react-hook/window-size";

export default function ValidHeader() {
    const windowWidth = useWindowWidth();


  return (
    <nav className=" hidden sm:flex   gap-x-8 ml-8">
    <button className=" text-white  text-opacity-80 flex items-center gap-1  xl:text-base font-medium transition-all  hover:text-opacity-100">
      <BiGlobe size={20} /> {windowWidth > 1024 && "Türkçe (TR)"}
    </button>
    <button

      className=" text-white  text-opacity-80 flex  xl:text-base  items-center gap-1  transition-all   hover:text-opacity-100"
    >
      <HiGift size={20} /> {windowWidth > 1024 && " Kampanyalar"}
    </button>
    <button
  
      className=" text-white  text-opacity-80 flex  xl:text-base  items-center gap-1    hover:text-opacity-100"
    >
      <FaUser size={16} /> {windowWidth > 1024 && "Profil"}
    </button>
  </nav>
  )
}
