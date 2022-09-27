import { ContextProvider } from "context/GlobalContext";
import React from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
 
export default function Cart() {
  const { state, increase, decrease, removeFromCart,setOrder } = ContextProvider();

   
  const totalCartAmount = state.cart
    .reduce((total, price) => total + price.count * price.price, 0)
    .toFixed(2);

  return (
    <div className="  mt-5 mx-auto  ">
    {totalCartAmount <1 &&
      <div>
       
       <img className="  mt-32 mx-auto item pb-12"
         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
      alt="basket" />
        <h2 className=" whitespace-nowrap text-center text-md text-primary-brand-color font-semibold">Sepetiniz şuan boş</h2>
        <h2 className=" text-sm   mt-4 text-center  text-gray-300 font-semibold ">Sipariş vermek için sepetinize ürün ekleyin</h2>  
      </div>
     
      }
      {state.cart.map((product) => (
        <ul>
        <li className=" grid grid-cols-1  md:grid-cols-2    justify-between" key={product.id}>
          <p className="product  inline-grid w-36  truncate">
            {product.title}
            <span className=" text-brand-color font-semibold tracking-wide">₺{product.price}</span>
            <span className=" border-t-2 border-primary-brand-color opacity-10 w-60 my-2 mb-5  "></span>
          </p>

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
      {totalCartAmount>0 && <button onClick={()=>setOrder(totalCartAmount)} className="  mb-4 hover:bg-secondary-brand-color w-64 -ml-2  bg-primary-brand-color rounded-lg h-12">
        <span className=" font-semibold justify-between ml-9  text-white">Sipariş ver
        <span className= " hover:text-secondary-brand-color font-semibold bg-white text-primary-brand-color  border-x-y border-primary-brand-color  ml-12 py-3 px-3  rounded-r-lg">
        ₺ {totalCartAmount}</span>
        </span>
      </button>}
    </div>
  )
}
