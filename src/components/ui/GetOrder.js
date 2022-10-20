import React, { useEffect } from 'react'

export default function GetOrder({totalCartAmount,totalPrice }) {
    
    const pathname = window.location.pathname;
  return (
    <button
   
    className="  mb-4 hover:bg-secondary-brand-color w-full h-full -ml-2  bg-primary-brand-color rounded-lg  "
  >
    <span className=" font-semibold justify-between ml-9 text-base  text-white">
      Sipariş ver
      <span className=" hover:text-secondary-brand-color font-semibold bg-white text-primary-brand-color  border-x-y border-primary-brand-color  ml-12 py-3 px-3  rounded-r-lg">
        ₺ {pathname==="/odeme" ?   totalPrice : totalCartAmount  }
      </span>
    </span>
  </button>
  )
}
