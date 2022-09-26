import React, { useState } from "react";

import { BiGlobe } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import { ContextProvider } from "context/GlobalContext";
import { useUserAuth } from "context/UserAuthContext";

export default function ValidHeader() {
  const { number, name } = ContextProvider();
  const windowWidth = useWindowWidth();
  const { logOut, user } = useUserAuth();
  const [click, setClick] = useState(false)
  const navigate = useNavigate();
  console.log(user);

  const toggleClick = () => {
setClick(!click)  
  }
  const handleLogout = () => {
    try {
      logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className=" hidden sm:flex   gap-x-8 ml-8">
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
                    onClick={(toggleClick)}
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
                {click && <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    className="absolute right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div className="px-4 ">
                      <p className="text-sm leading-5 text-gray-600 font-medium truncate">
                        {name}
                      </p>
                      <p className="text-sm leading-5 text-gray-600 font-medium truncate">
                        {number}
                      </p>
                    </div>
                    <div className="py-1  font-semibold ">
                      <a
                        href="#"
                        tabindex="0"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        Adreslerim
                      </a>
                      <a
                        href="#"
                        tabindex="1"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        Favori Ürünlerim
                      </a>
                      <a
                        href="#"
                        tabindex="2"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        Geçmiş Siparişlerim
                      </a>

                      <a
                        href="#"
                        tabindex="3"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        Ödeme Yöntemlerim
                      </a>
                      <a
                        href="#"
                        tabindex="4"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100  hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        Fatura Bilgilerim
                      </a>
                      <a
                        href="#"
                        tabindex="5"
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 hover:text-secondary-brand-color text-left"
                        role="menuitem"
                      >
                        İletişim Tercihlerim
                      </a>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="text-gray-600 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:bg-purple-100 text-left hover:text-secondary-brand-color"
                        role="menuitem"
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  </div>
                </div>}
              </div>
            </div>
          </div>
          
      </button>
    </nav>
  );
}
