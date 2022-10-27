import React from "react";
import Basket from "../../components/ui/basket/Basket";

import SideBar from "../../components/ui/sidebar/home/SideBar";
import ProductItem from "../../components/ui/product/ProductItem";
import Title from "../../helper/Title";

export default function MainGrid() {
  return (
    <div class="mx-auto container mb-12 grid grid-cols-5">
      <aside class=" md:col-span-1  bg-gray-100">
        <Title>Kategoriler</Title>
        <SideBar />
      </aside>

      <main class="col-span-8 md:col-span-3  mr-20 bg-gray-100">
        <Title>Yeni Ürünler</Title>
        <ProductItem />
      </main>

      <aside class="col-span-8 md:col-span-1 -ml-20   bg-gray-100">
        <Title>Sepetim</Title>
        <Basket />
      </aside>
    </div>
  );
}
