import React from "react";
import Cart from "./Cart";
import PastOrders from "./PastOrders";

export default function Basket() {
  return (
    <>
    <div className=" mx-4   px-12   container h-[350px] bg-white border-2   border-brand-yellow rounded-lg mt-10">
 
     
    <Cart/>
    </div>
    <PastOrders/></>
  );
}
