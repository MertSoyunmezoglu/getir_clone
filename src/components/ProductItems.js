import React, { useEffect, useState } from "react";
import Products from "api/products.json";
import ProductItem from "./ui/ProductItem";

export default function ProductItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className=" bg-slate-100 text-sm font-semibold gap-2 ">

      <div className=" grid grid-cols-1 md:text-xs sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-0.5 gap-y-0.5 pt-6 rounded-lg overflow-hidden ">
        {products.length &&
          products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </div>
    </div>
  );
}
