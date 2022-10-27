
import React from "react";
import Title from "../../../helper/Title";
import { NavLink } from "react-router-dom";
import Orders from "../order/Orders";
export default function PastOrders() {
 

  return (
    <>

    
      <Title>Geçmiş Siparilerim</Title>

      <div className="  container h-[240px] bg-white border-2    rounded-lg ">
   
        <div  className="ml-4"><Orders  /></div>
       
       
      </div>
    </>
  );
}
