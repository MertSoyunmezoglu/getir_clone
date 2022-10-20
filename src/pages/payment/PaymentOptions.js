import React from "react";
import { HiPlus } from "react-icons/hi";
export default function PaymentOptions() {
  return (
    <div className="w-[44rem]">
      {" "}
      <div className="   text-primary-brand-color  items-center">
        <button className="  bg-purple-100  m-5  w-8 h-8   border border-gray-200 rounded-md">
          <HiPlus className=" ml-2 text-primary-brand-color" />
        </button>
        <span className=" font-semibold">Kredi / Banka Kartı Ekle</span>
        <div className=" mx-5 flex flex-col w-full md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

        <button className=" bg-purple-100   m-5  w-8 h-8   border border-gray-200 rounded-md">
          <HiPlus className=" ml-2 text-primary-brand-color" />
        </button>
        <span className=" font-semibold">BKM Express ile Kart Ekle</span>
        <div className=" mx-5 flex flex-col w-full md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>
        <div className=" float-right gap-x-4 my-4 text-xs text-gray-500 flex">
          Kart bilgileri MasterPass güvencesiyle tutulmaktadır.
          <img src="https://getir.com/_next/static/images/masterpass-logo-090c084512a1f97fd3c69cac108359c8.svg" alt="masterpass" />
        </div>
      </div>
    </div>
  );
}
