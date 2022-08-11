import { ContextProvider } from "context/GlobalContext";
import React, { useState } from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { IoRemoveOutline } from "react-icons/io";

export default function Cart() {
  const { state, increase, decrease, removeFromCart,setOrder,order } = ContextProvider();

   console.log("order",order);
  const totalCartAmount = state.cart
    .reduce((total, price) => total + price.count * price.price, 0)
    .toFixed(2);
  console.log("dsadasdasdasdasd", totalCartAmount);
  return (
    <div className="  mt-5 mx-auto">
      {state.cart.map((product) => (
        <div className="flex  object-cover  justify-between" key={product.id}>
          <span className="product  inline-grid   ">
            {product.title}
            <span>₺ {product.price}</span>
            <span className=" flex   border-t-2 border-primary-brand-color opacity-10 w-44 -ml-4 m-2 "></span>
          </span>

          <div className="mt-2 block mx-auto">
            <span className=" absolute   right-36  text-gray-100 w-8 h-8 bg-primary-brand-color pt-1 text-center  ">
              {product.count}
            </span>
            <div className=" container mx-auto ">
              {product.count > 1 && (
                <button
                  onClick={() => decrease(product.id)}
                  className=" absolute border-x-y right-44 shadow-xl  rounded-l-lg h-8 w-8 "
                >
                  <FiMinus
                    className=" ml-2 text-primary-brand-color"
                    size={14}
                  />
                </button>
              )}
              {product.count <= 1 && (
                <button
                  className="absolute border-x-y right-44 shadow-xl    rounded-l-lg h-8 w-8"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FiTrash2
                    className="ml-1.5 text-primary-brand-color"
                    size={20}
                  />
                </button>
              )}
              <button
                onClick={() => increase(product.id)}
                className=" absolute right-28 shadow-xl border-x-y rounded-r-lg h-8 w-8 "
              >
                <FiPlus className=" ml-2 text-primary-brand-color" size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {totalCartAmount>0 && <button onClick={()=>setOrder(totalCartAmount)} className=" relative hover:bg-secondary-brand-color w-64 -ml-2  bg-primary-brand-color rounded-lg h-12">
        <span className=" font-semibold justify-between ml-8 text-white">Sepete git
        <span className= " hover:text-secondary-brand-color font-semibold bg-white text-primary-brand-color  border-x-y border-primary-brand-color   ml-16 py-3 px-3 w-20 rounded-r-lg">
        ₺ {totalCartAmount}</span>
        </span>
      </button>}
    </div>
  )
}
