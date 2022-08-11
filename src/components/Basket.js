import React from "react";
import Cart from "./Cart";
import PastOrders from "./PastOrders";

export default function Basket() {
  return (
    <>
    <div className=" mx-4   px-12  overflow-y-auto overflow-x-hidden container h-[450px] bg-white border-2   border-brand-yellow rounded-lg mt-10">
 
     
    <Cart/>
    </div>
    <PastOrders/></>
  );
}
