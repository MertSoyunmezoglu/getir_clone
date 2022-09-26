import { NavLink } from "react-router-dom";
import React, { useState } from "react";


 
 export default function SideBarSubItem({pathname,pathname2,pathname3,category: { title, image, item,key, pathTitle }}) {
  console.log(item.subTitle);
   return (
   <>{pathname === "kategoriler" ? <NavLink
   to={`/${pathname}/${pathTitle.toLowerCase()}/${item.subTitle}`}
 >

   <li
     key={key}
     className="text-md font-semibold text-gray-600  py-1 px-16  transition-all cursor-pointer hover:bg-white"
   >
     <a href="#">{item.subTitle}
     </a>
   </li>
 </NavLink>:
 <NavLink
   to={`/${pathname}/${pathname2}/${pathTitle.toLowerCase()}/${item.subTitle}`}
 >

   <li
     key={key}
     className="text-md font-semibold text-gray-600  py-1 px-16  transition-all cursor-pointer hover:bg-white"
   >
     <a href="#">{item.subTitle}
     </a>
   </li>
 </NavLink>}</>
    )}