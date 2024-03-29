import { ContextProvider } from "context/GlobalContext";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";

import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SideBarSubItem from "./SideBarSubItem";

export default function SideBarItem({
  category: { title, image, items, pathTitle },
}) {
  const { handleClick } = ContextProvider();
  const [isOpen, setIsOpen] = useState(false);



  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const pathname = window.location.pathname.split("/")[1];
  const pathname2 = window.location.pathname.split("/")[2];
  const pathname3 = window.location.pathname;



  return (
    <section>
      <nav className=" block   rounded-lg ">
        {pathname === "kategoriler" ? (
          <NavLink onClick={() => handleClick(pathname3)} to={`/${pathname}/${pathTitle.toLowerCase()}`}>
            <button
              onClick={toggleCollapse}
              className="   grid grid-cols-3  gap-x-4  text-center sm:items-start  transition w-full ml-1 focus:bg-purple-100 hover:bg-purple-100 text-gray-700   hover:text-primary-brand-color sm:text-left p-0.5 m-0.5  "
            >
              <span className="  justify-between    tracking-normal">
                <img
                  src={image}
                  alt={title}
                  className=" w-8 h-8  border-x-y border-opacity-30 rounded-lg "
                />
              </span>
              <span className=" font-semibold mt-2  relative  md:left-2/4 lg:left-1/4  md:-ml-12  lg:text-sm">{title}</span>

              <span
                className={`transition-all relative left-1/3 flex mt-2 mx-auto transform text-gray-400 ${
                  isOpen ? " rotate-180 " : ""
                }`}
              >
                <IoIosArrowDown size={18} />
              </span>
            </button>
          </NavLink>
        ) : (
          <NavLink onClick={() => handleClick(pathname3)} to={`/${pathname}/${pathname2}/${pathTitle.toLowerCase()}`}>
          <button
          onClick={toggleCollapse}
          className="  grid grid-cols-3  gap-x-4  text-center sm:items-start  transition w-full ml-1 focus:bg-purple-100 hover:bg-purple-100 text-gray-700   hover:text-primary-brand-color sm:text-left p-0.5 m-0.5  "
        >
          <span className="  justify-between  tracking-normal">
            <img
              src={image}
              alt={title}
              className=" w-8 h-8  border-x-y border-opacity-30 rounded-lg "
            />
          </span>
          <span className=" font-semibold mt-2  relative  md:left-2/4 lg:left-1/4  md:-ml-12  lg:text-sm ">{title}</span>

          <span
            className={`transition-all relative left-1/3 flex mt-2 mx-auto transform text-gray-400 ${
              isOpen ? " rotate-180 " : ""
            }`}
          >
            <IoIosArrowDown size={18} />
          </span>
        </button>
          </NavLink>
        )}
        <Collapse isOpened={isOpen}>
        <nav>
   <ul className=" bg-slate-50 -mr-6 transition-all  ">
     {items &&
       items.map((item ,key ) => (   
         
        <SideBarSubItem pathname={pathname} key={key} pathname2={pathname2} pathname3={pathname3} category={{ item, pathTitle }} />

       ))}
   </ul>
 </nav>
        </Collapse>
      </nav>
    </section>
  );
}
