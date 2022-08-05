import React, { useEffect, useState } from "react";
import Products from "api/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className=" bg-slate-100 text-sm font-semibold gap-2 pt-6">
      <span className=" flex items-center">Favoriler</span>
      <div className=" grid grid-cols-2 md:text-xs sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 2xl:gap-x-1 gap-y-1 pt-6 rounded-lg overflow-hidden ">
        {products.length &&
          products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </div>
    </div>
  );
}
