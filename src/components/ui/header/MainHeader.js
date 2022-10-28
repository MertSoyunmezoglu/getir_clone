import React from 'react'
import { openModal } from "store/modal";
import { BiGlobe } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import store from "store";
import { ContextProvider } from 'context/GlobalContext';

export default function MainHeader() {
  const {windowWidth} = ContextProvider()
    const handleRegisterModal = () => {
        store.dispatch(openModal({ name: "register" }));
      };
      const handleLoginModal = () => {
        store.dispatch(openModal({ name: "login" }));
      };
  return (
    <nav className=" hidden sm:flex   gap-x-8 ml-8">
    <button className=" text-white  text-opacity-80 flex items-center gap-1  xl:text-base font-medium transition-all  hover:text-opacity-100">
      <BiGlobe size={20} /> {windowWidth > 1024 && "Türkçe (TR)"}
    </button>
    <button
      onClick={handleLoginModal}
      className=" text-white  text-opacity-80 flex  xl:text-base font-semibold items-center gap-1  transition-all   hover:text-opacity-100"
    >
      <FaUser size={14} /> {windowWidth > 1024 && " Giriş Yap"}
    </button>
    <button
      onClick={handleRegisterModal}
      className=" text-white  text-opacity-80 flex  xl:text-base font-semibold items-center gap-1    hover:text-opacity-100"
    >
      <HiUserAdd size={20} /> {windowWidth > 1024 && " Kayıt Ol"}
    </button>
  </nav>
  )
}
