import { ContextProvider } from "context/GlobalContext";
import React, { useEffect } from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import GetOrder from "../order/GetOrder";
import EmptyBasket from "./EmptyBasket";

export default function Cart() {
  const {
    state,
    increase,
    decrease,
    removeFromCart,
    totalCartAmount 
  } = ContextProvider();
  


  return (
    <div className="  mt-5   lg:px-4 md:px-6 xl:px-8">
      {totalCartAmount < 1 && (
       <EmptyBasket/>
      )}
      {state.cart.map((product) => (
        <ul>
          <li
            className=" grid  md:grid-cols-3    justify-between"
            key={product.id}
          >
            <div className=" col-span-2 overflow-hidden truncate "> 
            <p className="product  inline-grid    ">
              {product.title}
              <span className=" text-brand-color font-semibold tracking-wide">
                ₺{product.price}
              </span>
              <div className=" border-t-2 border-primary-brand-color opacity-10 w-44 my-2 mb-5  "></div>
            </p>
            </div>

            <div className=" col-span-1">
              <div className="   mx-auto justify-between flex ">
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
                <div className="px-1 text-gray-100 w-8 h-8 bg-primary-brand-color pt-1 text-center  ">
                  {product.count}
                </div>
                <button
                  onClick={() => increase(product.id)}
                  className="  shadow-xl border-x-y rounded-r-lg h-8 w-8 "
                >
                  <FiPlus
                    className=" ml-2 text-primary-brand-color"
                    size={14}
                  />
                </button>
              </div>
            </div>
          </li>
        </ul>
      ))}
      {totalCartAmount > 0 && (
        <NavLink to="/odeme">
       
       <GetOrder totalCartAmount={totalCartAmount} /> 
        </NavLink>
      )}
    </div>
  );
}
