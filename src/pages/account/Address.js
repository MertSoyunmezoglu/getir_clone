import React from "react";
import { Helmet } from "react-helmet";
 
import { HiPlus } from "react-icons/hi";
import { openModal } from "store/modal";

import store from "store";
import { ContextProvider } from "context/GlobalContext";
export default function Address() {
  const {  address } = ContextProvider();
  const handleMapsModal = () => {
    store.dispatch(openModal({ name: "adres" }));
  };
  return (
   
    <div className=" sm:mt-16 mb-12 ">
    <Helmet>
    <title>Adreslerim | Getir</title>
  </Helmet>
      Adreslerim
      <div className=" sm:w-[24rem] lg:w-[44rem] h-[22rem] mt-2  truncate overflow-hidden font-semibold rounded-lg bg-white">
      
      <div className=" py-4 ml-8 text-gray-400 ">{address }</div>
        <div className=" text-sm  text-gray-400  ml-8  ">
          Adres Ekle
        </div>
       
        <button onClick={handleMapsModal} className=" w-full text-sm relative px-8 opacity-70  my-4 grid grid-cols-3 ">
          <div className=" col-span-1">
          <img
            src="https://cdn.getir.com/address-emojies/House.svg"
            alt="checkmark"
          />
          </div>
          <span className=" col-span-1 relative sm:right-20 lg:right-40">Ev adresi ekle</span>
          <HiPlus className=" col-span-1 flex relative left-40 text-brand-color" size={16} />
        </button>
        <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
       
        <button onClick={handleMapsModal} className=" w-full text-sm relative px-8 opacity-70  my-4 grid grid-cols-3 ">
          <div className=" col-span-1">
          <img
            src="https://cdn.getir.com/address-emojies/Plaza.svg"
            alt="checkmark"
          />
          </div>
          <span className=" col-span-1 relative sm:right-20 lg:right-40">İş adresi ekle</span>
          <HiPlus className=" col-span-1 flex relative left-40 text-brand-color" size={16} />
        </button>
        <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
        
        <button onClick={handleMapsModal} className=" w-full text-sm relative px-8 opacity-70  my-4 grid grid-cols-3 ">
          <div className=" col-span-1">
          <img
            src="https://cdn.getir.com/address-emojies/Park.svg"
            alt="checkmark"
          /></div>
          <span className="  col-span-1 relative sm:right-20 lg:right-40">Diğer adres ekle</span>
          <HiPlus className="col-span-1 flex relative left-40 text-brand-color" size={16} />
        </button>
      </div>
    </div>
  );
}
