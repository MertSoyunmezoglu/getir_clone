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
   
    <div className="  mt-16  ">
    <Helmet>
    <title>Adreslerim | Getir</title>
  </Helmet>
      Adreslerim
      <div className=" w-[36rem] mt-2 h-auto truncate overflow-hidden font-semibold rounded-lg bg-white">
      
      <div className=" py-4 ml-8 text-gray-400 ">{address }</div>
        <div className=" text-sm  text-gray-400  ml-8  ">
          Adres Ekle
        </div>
       
        <button onClick={handleMapsModal} className=" text-sm opacity-70 ml-8 my-4 grid grid-cols-4 ">
          <img
            src="https://cdn.getir.com/address-emojies/House.svg"
            alt="checkmark"
          />
          <span className=" -ml-52">Ev adresi ekle</span>
          <HiPlus className=" ml-56 text-brand-color" size={16} />
        </button>
        <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
       
        <button onClick={handleMapsModal} className=" text-sm opacity-70 ml-8 my-4 grid grid-cols-4 ">
          <img
            src="https://cdn.getir.com/address-emojies/Plaza.svg"
            alt="checkmark"
          />
          <span className=" -ml-52">İş adresi ekle</span>
          <HiPlus className=" ml-56 text-brand-color" size={16} />
        </button>
        <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
        
        <button onClick={handleMapsModal} className=" text-sm opacity-70 ml-8 my-4 pb-4 grid grid-cols-4 ">
          <img
            src="https://cdn.getir.com/address-emojies/Park.svg"
            alt="checkmark"
          />
          <span className=" -ml-48">Diğer adres ekle</span>
          <HiPlus className=" ml-56 text-brand-color" size={16} />
        </button>
      </div>
    </div>
  );
}
