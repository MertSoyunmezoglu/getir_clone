import React, { useEffect, useState } from 'react';
import Products from 'api/products.json';
import ProductItem from './ui/ProductItem';

export default function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, [])
  
  return (
    <div className="container bg-slate-100 text-sm font-semibold gap-2 pt-6">
     <span className=' ml-6 flex items-center'>Favoriler</span> 
      <div className=' grid grid-cols-8  ga pt-6 rounded-lg overflow-hidden '>
        {products.length && products.map((product,index)=>(
          <ProductItem product={product} key={index}/>
        ))}
      </div>
    </div>
  )
}
