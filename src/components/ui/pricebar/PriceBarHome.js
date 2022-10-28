import React, { useState } from "react";

export default function PriceBarHome() {
  return (
    <>
      <div className=" flex mb-4  bg-white  h-16  sm:flex-row sm:pl-12 items-center  ">
        <div className=" gap-32 flex ml-12">
          <div className=" bg-getir-bag-home h-9 w-9 mb-2">
            <label className="ml-12 text-gray-500 text-xs">MİNİMUM </label>
            <span className="ml-12 flex font-semibold text-md">₺60,00</span>
          </div>
          <div className=" bg-getir-motor w-9 h-8">
            <label className="ml-16 text-gray-500 text-xs">GETİRMESİ </label>
            <span className="ml-16 w-24 flex font-semibold text-md  ">
              ₺0 - ₺10,99
            </span>{" "}
          </div>
        </div>

        <div className="  col-4 ml-60 h-16 w-full bg-pricebar-bg  "></div>

        <div className="  overflow-hidden before:w-auto  before:h-16 before:mt-[88px] sm:before:mt-[120px] before:z-10 before:bg-gradient-to-r before:ml-[420px] before:from-white before:to-transparent before:absolute before:inset-0"></div>
      </div>
    </>
  );
}
