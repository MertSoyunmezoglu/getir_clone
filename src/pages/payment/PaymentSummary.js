import GetOrder from "components/ui/order/GetOrder";
import { ContextProvider } from "context/GlobalContext";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
export default function PaymentSummary() {
  const { totalCartAmount, pathname } = ContextProvider();

  var totalCartAmountParse = parseFloat(totalCartAmount);
  const totalPrice = (totalCartAmountParse + 10.99 + 0.25).toFixed(2);
  return (
    <>
      <div className=" bg-white w-auto  text-xs  lg:text-sm xl:text-lg rounded-lg">
        <ol className=" h-auto">
          <li className="grid  grid-cols-3 items-center text-primary-brand-color  ">
            <button className=" bg-purple-100    m-5  w-8 h-8   border border-gray-200 rounded-md">
              <HiPlus className=" ml-2 " />
            </button>
            <span className=" font-semibold  relative right-1/4  lg:right-2/4">Kampanya Seçin</span>
            <MdOutlineArrowForwardIos size={22} className="   relative left-3/4 md:left-1/2 xl:left-2/3" />
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

          <li className="grid grid-cols-3 items-center justify-between    tracking-normal  text-primary-brand-color">
            <button className=" bg-purple-100  m-5  w-8 h-8   border border-gray-200 rounded-md">
              <HiPlus className=" ml-2  " />
            </button>
            <span className=" font-semibold relative right-1/4 lg:right-2/4  ">Fatura Bilgisi Ekle</span>
            <MdOutlineArrowForwardIos size={22} className=" relative left-3/4 md:left-1/2 xl:left-2/3" />
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

          <li className=" ml-5 my-4 grid grid-cols-2  text-gray-500 font-semibold items-center ">
            <span>Sepet Tutarı </span>
            <span className="  relative left-3/4  md:left-2/4  xl:left-2/3 ">₺{totalCartAmount}</span>
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

          <li className=" ml-5 my-4 grid grid-cols-2  text-gray-500 font-semibold items-center ">
            <span>Getirmesi </span>
            <span className=" relative left-3/4  md:left-2/4  xl:left-2/3">₺10.99</span>
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

          <li className=" ml-5 my-4 grid grid-cols-2 text-gray-500 font-semibold  items-center ">
            <span>Poşet Ücreti</span>
            <span className="  relative left-3/4  md:left-2/4  xl:left-2/3">₺0.25</span>
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></div>

          <li className=" ml-5 my-4  grid grid-cols-2 text-gray-500 font-semibold items-center ">
            <span>Ödenecek Tutar</span>
            <span className="  relative left-3/4  md:left-2/4  xl:left-2/3">₺{totalPrice}</span>
          </li>
          <div className=" mx-5 flex flex-col w-auto md:flex-row items-center justify-start xs:justify-center"></div>
        </ol>
      </div>
     <div className=" h-16 w-auto mt-8"> <GetOrder totalPrice={totalPrice} pathname={pathname} /></div>
    </>
  );
}
