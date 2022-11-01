import React from "react";

import PaymentOptions from "./PaymentOptions";

export default function PaymentMethods() {
  return (
    <div className="  md:mt-16  ">
      Ödeme Yöntemlerim
      <div className=" text-sm sm:w-[28rem] md:w-[36rem] w-auto mt-2 h-48 mb-4  font-semibold rounded-lg bg-white">
       <PaymentOptions/>
      </div>
    </div>
  );
}
