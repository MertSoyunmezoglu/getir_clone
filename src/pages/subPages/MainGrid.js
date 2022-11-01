import React from "react";
import Basket from "../../components/ui/basket/Basket";

import SideBar from "../../components/ui/sidebar/home/SideBar";
import ProductItem from "../../components/ui/product/ProductItem";
import Title from "../../helper/Title";
import { ContextProvider } from "context/GlobalContext";
import GetOrder from "components/ui/order/GetOrder";
import { NavLink } from "react-router-dom";

export default function MainGrid() {
  const {windowWidth,totalCartAmount} = ContextProvider()
  return (
    <div class=" lg:mx-auto mx-2 xl:container mb-12 relative md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 ">
      
    <aside class="  md:col-span-1 lg:col-span-1  bg-gray-100">
        <Title>Kategoriler</Title>
        <SideBar />
      </aside>

      <main class="md:col-span-3   lg:w-auto lg:col-span-3 xl:col-span-3 lg:mr-20 bg-gray-100">
        <Title>Ürünler</Title>
        <ProductItem />
      </main>

     {windowWidth < 999 ? null : (
      <aside class=" lg:col-span-1 xl:col-span-1 lg:-ml-20   bg-gray-100">
      <Title>Sepetim</Title>
      <Basket />
    </aside>
     )}
     {windowWidth > 640 ? null :<aside> <div className=" w-full mt-4 flex justify-between flex-col">    {totalCartAmount > 0 && (
      <NavLink to="/odeme">
     
     <GetOrder totalCartAmount={totalCartAmount} /> 
      </NavLink>
    )}</div></aside>}
    </div>
  );
}
