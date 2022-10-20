import React from "react";

import PaymentOptions from "./PaymentOptions";

export default function PaymentMethods() {
  return (
    <div className="  mt-16  ">
      Ödeme Yöntemlerim
      <div className=" text-sm  w-[36rem] mt-2 h-40  font-semibold rounded-lg bg-white">
       <PaymentOptions/>
      </div>
    </div>
  );
}
