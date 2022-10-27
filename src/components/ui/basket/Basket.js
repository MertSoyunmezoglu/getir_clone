import React from "react";
import Cart from "./Cart";
import PastOrders from "../order/PastOrders";

export default function Basket() {
  return (
    <>
      <div className=" overflow-y-visible overflow-x-hidden h-[350px] bg-white border-2   border-brand-yellow rounded-lg ">
        <Cart />
      </div>
      <PastOrders />
    </>
  );
}
