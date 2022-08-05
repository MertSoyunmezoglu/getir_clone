import React from "react";
import PriceBarWater from "./ui/pricebar/PriceBarWater";

export default function PriceBar() {



    const {priceWater } = PriceBarWater;
    console.log(priceWater);
  return (
    <>
      <div className=" flex   bg-white  h-20  sm:flex-row sm:pl-12 items-center  gap-24">
       <PriceBarWater/>
        <div className="  col-4 ml-72 h-20 w-full bg-pricebar-bg  ">
        </div>
       
          <div className="overflow-hidden before:w-auto before:h-20 before:mt-[200px] before:z-10 before:bg-gradient-to-r before:ml-80  before:from-white before:to-transparent before:absolute before:inset-0">
            
         
          </div>
       
      </div>
    </>
  );
}
