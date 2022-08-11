import { ContextProvider } from "context/GlobalContext";
import React from "react";
import Title from "./ui/Title";
import { FcHome } from "react-icons/fc";
export default function PastOrders() {
  const { order } = ContextProvider();

  const showDate = new Date();
  const dateTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    " " +
    showDate.toLocaleDateString();
  return (
    <>
      <Title>Geçmiş Siparilerim</Title>

      <div className=" mx-4      container h-[350px] bg-white border-2    rounded-lg ">
        <div className="grid grid-cols-1  md:text-xs w-60 -ml-10 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-y-0.5 pt-6 rounded-lg overflow-hidden ">
          <span className="border-t rounded-full border-gra-500 w-10 h-10">
            <FcHome className="    m-1" size={24} />
          </span>
          <span className="  text-xs text-gray-400  text-nowrap">
            {dateTime}{" "}
          </span>
          <div className=" bg-getir-order w-6 h-10"> 
          </div>
          <span className="  text-sm  bg-purple-200 font-semibold p-1  my-2 rounded-r-lg  text-primary-brand-color">
          ₺  {order}
          </span>
        </div>
      </div>
    </>
  );
}
