import React from "react";

export default function PriceBarWater() {
    
    const [priceBig, setPriceBig] = useState(true)
  return (
    <>
      
      <div className=" bg-getir-bag-home h-8 w-9 mb-2">
        <label className="ml-12 text-gray-500 text-sm">MİNİMUM </label>
        <span className="ml-12 flex font-semibold text-lg">₺70,00</span>
      </div>
      <div className=" bg-getir-car w-5 mb-2 h-9">
        <label className="ml-12 text-gray-500 text-sm">GETİRMESİ </label>
        <span className="ml-12 flex font-semibold text-lg ">₺0 - ₺5,99</span> 
      </div>
    </>
  );
}
