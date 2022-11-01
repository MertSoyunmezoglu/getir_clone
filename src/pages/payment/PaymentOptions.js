import React from "react";
import { HiPlus } from "react-icons/hi";
export default function PaymentOptions() {
  return (
    <div className="w-full">
      {" "}
      <div className="   text-primary-brand-color  text-xxs md:text-xs lg:text-base items-center">
        <button className="  bg-purple-100  m-5  w-8 h-8   border border-gray-200 rounded-md">
          <HiPlus className=" ml-2 text-primary-brand-color" />
        </button>
        <span className=" font-semibold">Kredi / Banka Kartı Ekle</span>
        <div className=" flex flex-col w-full md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

        <button className=" bg-purple-100   m-5  w-8 h-8   border border-gray-200 rounded-md">
          <HiPlus className=" ml-2 text-primary-brand-color" />
        </button>
        <span className=" font-semibold">BKM Express ile Kart Ekle</span>
        <div className=" flex flex-col w-full md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>
        <div className="  relative float-right  sm:right-4 gap-x-4 my-4 text-xxs text-gray-500 flex">
          Kart bilgileri MasterPass güvencesiyle tutulmaktadır.
          <img src="https://getir.com/_next/static/images/masterpass-logo-090c084512a1f97fd3c69cac108359c8.svg" alt="masterpass" />
        </div>
      </div>
    </div>
  );
}
