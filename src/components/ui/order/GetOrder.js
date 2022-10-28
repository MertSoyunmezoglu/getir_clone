import React, { useEffect } from "react";

export default function GetOrder({ totalCartAmount, totalPrice }) {
  const pathname = window.location.pathname;
  return (
    <div className="h-12 w-auto">
      <button className=" grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 mb-4 w-full hover:bg-secondary-brand-color items-center text-center     bg-primary-brand-color rounded-lg  ">
        <span className=" lg:col-span-4 md:col-span-3 sm:col-span-1 font-semibold  my-3  text-base  text-white">
          Sipariş ver
        </span>
        <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 py-3  hover:text-secondary-brand-color  font-semibold bg-white text-primary-brand-color  border-x-y border-primary-brand-color h-full  rounded-r-lg">
          <span className=" py-4 ">₺ {pathname === "/odeme" ? totalPrice : totalCartAmount}</span>
        </span>
      </button>
    </div>
  );
}
