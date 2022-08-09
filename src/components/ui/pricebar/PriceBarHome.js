import React, { useState } from "react";

export default function PriceBarHome() {
  return (
    <>
      <div className=" flex   bg-white  h-20  sm:flex-row sm:pl-12 items-center  ">
      <div className=" gap-32 flex"> 
      <div className=" bg-getir-bag-home h-9 w-9 mb-2">
          <label className="ml-12 text-gray-500 text-sm">MİNİMUM </label>
          <span className="ml-12 flex font-semibold text-lg">₺60,00</span>
        </div>
        <div className=" bg-getir-motor w-9 mb-2 h-8">
          <label className="ml-16 text-gray-500 text-sm">GETİRMESİ </label>
          <span className="ml-16 w-24 flex font-semibold text-lg  ">
            ₺0 - ₺10,99
          </span>{" "}
          </div>
        </div>

        <div className="  col-4 ml-60 h-20 w-full bg-pricebar-bg  "></div>

        <div className="overflow-hidden before:w-auto before:h-20 before:mt-[200px] before:z-10 before:bg-gradient-to-r before:ml-96 before:from-white before:to-transparent before:absolute before:inset-0"></div>
      </div>
    </>
  );
}
