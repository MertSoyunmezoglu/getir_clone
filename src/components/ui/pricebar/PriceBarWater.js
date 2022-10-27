import React, { useState } from "react";

export default function PriceBarWater() {
  return (
    <>
      <div className=" flex   bg-white  h-20  sm:flex-row sm:pl-12 items-center  ">
        <div className=" gap-32 flex ml-12">
          <div className=" bg-getir-bag h-8 w-9 mb-2">
            <label className="ml-12 text-gray-500 text-xs">MİNİMUM </label>
            <span className="ml-12 flex font-semibold text-md">₺34,90</span>
          </div>
          <div className=" bg-getir-bottle w-5 mb-2 h-9">
            <label className="ml-12 text-gray-500 text-xs">MİNİMUM </label>
            <span className="ml-12 flex font-semibold text-md ">₺0,00</span>
          </div>
        </div>
        <div className="  col-4 ml-60 h-20 w-full bg-pricebar-bg  "></div>

        <div className="overflow-hidden before:w-auto before:h-20 before:mt-[120px] before:z-10 before:bg-gradient-to-r before:ml-96 before:from-white before:to-transparent before:absolute before:inset-0"></div>
      </div>
    </>
  );
}
