
import React from "react";
import Title from "./ui/Title";
import { NavLink } from "react-router-dom";
import Orders from "./Orders";
export default function PastOrders() {
 

  
  return (
    <>
      <Title>Geçmiş Siparilerim</Title>

      <div className=" mx-4 container h-[240px] bg-white border-2    rounded-lg ">
      
        <div  className="ml-4"><Orders  /></div>
        <NavLink to="/hesap/gecmis-siparislerim">
        <button className=" -ml-16 w-64 h-10 rounded-lg bg-purple-100">
          <span> Tümünü Gör</span>
        </button>
        </NavLink>
       
      </div>
    </>
  );
}
