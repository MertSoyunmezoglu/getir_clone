import React, { useState } from "react";

export default function PriceBarWater() {
    const [priceWater, setPriceWater] = useState(true)
  return (
    <>
      
      <div className=" bg-getir-bag h-8 w-9 mb-2">
        <label className="ml-12 text-gray-500 text-sm">MİNİMUM </label>
        <span className="ml-12 flex font-semibold text-lg">₺34,90</span>
      </div>
      <div className=" bg-getir-bottle w-5 mb-2 h-9">
        <label className="ml-12 text-gray-500 text-sm">MİNİMUM </label>
        <span className="ml-12 flex font-semibold text-lg ">₺0,00</span>{" "}
      </div>
    </>
  );
}
