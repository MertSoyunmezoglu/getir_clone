import { ContextProvider } from "context/GlobalContext";
import React, { useState } from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { IoRemoveOutline } from "react-icons/io";

export default function Cart() {
  const { state, increase, decrease, removeFromCart,setOrder } = ContextProvider();

   
  const totalCartAmount = state.cart
    .reduce((total, price) => total + price.count * price.price, 0)
    .toFixed(2);
  console.log("dsadasdasdasdasd", totalCartAmount);
  return (
    <div className="  mt-5 mx-auto  ">
      {state.cart.map((product) => (
        <ul>
        <li className=" grid grid-cols-1  md:grid-cols-2   justify-between" key={product.id}>
          <span className="product  inline-grid   ">
            {product.title}
            <span className=" text-brand-color font-semibold tracking-wide">₺{product.price}</span>
            <span className=" border-t-2 border-primary-brand-color opacity-10 w-60 my-2 mb-6  "></span>
          </span>

          <div className="flex   justify-between">
        
            <div className="  ml-10 mx-auto justify-between flex ">
              {product.count > 1 && (
                <button
                  onClick={() => decrease(product.id)}
                  className="  col-span-1 border-x-y  shadow-xl  rounded-l-lg h-8 w-8 "
                >
                  <FiMinus
                    className=" ml-2 text-primary-brand-color"
                    size={14}
                  />
                </button>
              )}
     
              {product.count <= 1 && (
                <button
                  className=" border-x-y  shadow-xl    rounded-l-lg h-8 w-8"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FiTrash2
                    className="ml-1.5 text-primary-brand-color"
                    size={20}
                  />
                </button>
              )}
              <span className="    text-gray-100 w-8 h-8 bg-primary-brand-color pt-1 text-center  ">
              {product.count}
            </span>
              <button
                onClick={() => increase(product.id)}
                className="  shadow-xl border-x-y rounded-r-lg h-8 w-8 "
              >
                <FiPlus className=" ml-2 text-primary-brand-color" size={14} />
              </button>
            </div>
          </div>
        </li>
        </ul>
      ))}
      {totalCartAmount>0 && <button onClick={()=>setOrder(totalCartAmount)} className="relative block hover:bg-secondary-brand-color w-64 -ml-2  bg-primary-brand-color rounded-lg h-12">
        <span className=" font-semibold justify-between ml-8 text-white">Sepete git
        <span className= " hover:text-secondary-brand-color font-semibold bg-white text-primary-brand-color  border-x-y border-primary-brand-color   ml-16 py-3 px-3 w-20 rounded-r-lg">
        ₺ {totalCartAmount}</span>
        </span>
      </button>}
    </div>
  )
}
