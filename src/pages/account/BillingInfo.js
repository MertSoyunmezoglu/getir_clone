import React from "react";
import { Helmet } from "react-helmet";
import { HiPlus } from "react-icons/hi";

export default function BillingInfo() {
  return (
    <div className="  md:mt-16 mb-12  ">
      <Helmet>
        <title>Fatura Bilgilerim | Getir</title>
      </Helmet>
      Fatura Bilgileri
      <div className=" text-sm  lg:w-[36rem] sm:w-[28rem] w-auto mt-2 h-32  font-semibold rounded-lg bg-white">
        <div className=" text-center  text-gray-600     pt-2    ">
          Fatura Bilginiz yok.
        </div>
        <div className=" gap-x-2 flex text-primary-brand-color  items-center">
        <button
      
        className=" bg-white shadow-md m-5  w-8 h-8   border border-gray-200 rounded-md"
      >
        <HiPlus className=" ml-2 text-primary-brand-color" />
       
      </button>
      <span>Fatura Bilgisi Ekle</span>
      </div>
      </div>
    </div>
  );
}
