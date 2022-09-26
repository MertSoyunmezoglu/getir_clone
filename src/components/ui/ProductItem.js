import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { ContextProvider } from "context/GlobalContext";
import category from "api/categories.json";

export default function ProductItem({ product }) {
  const { state, addToCart } = ContextProvider();
  const [categories, setCategories] = useState([]);
  const [show , setShow] = useState(false);


  const pathname = (window.location.pathname==="/kategoriler" ? window.location.pathname.split("/")[3]:window.location.pathname.split("/")[2]  )
  console.log(pathname);
  

  return (
    <div  className=" bg-gray-100 mx-4  text-sm overflow-hidden  w-full font-semibold ">
      <div  className="grid-cols-1 grid  h-screen  box-content   overflow-y-scroll md:text-xs sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-0.5 gap-y-0.5  ">
        {!show &&  state.productList.map((product ) => (
         
          <div className="bg-white  items-center relative text-center p-4 hover:bg-yellow-50">
            <button
              onClick={() => addToCart(product)}
              className=" bg-white shadow-md  hover:border-secondary-brand-color text-black-600 absolute top-4 right-4 w-8 h-8  flex items-center justify-center border border-gray-200 rounded-md"
            >
              <HiPlus />
            </button>

            <img src={product.image} alt="product" />
            <div className=" text-primary-brand-color text-sm ">
              ₺ {product.price}
            </div>
            <div className="   text-sm">{product.title}</div>
            <div className=" text-gray-400 text-sm">{product.alt}</div>
            <div className=" text-gray-400 text-sm">{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
