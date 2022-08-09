import React from 'react'
import {HiPlus} from 'react-icons/hi'

export default function ProductItem({product}) {
  return (
    
    <div className='bg-white block items-center relative text-center p-4 hover:bg-yellow-50'>
        <button className="text-secondary-brand-color bg-white shadow-md  hover:border-secondary-brand-color text-black-600 absolute top-4 right-4 w-8 h-8  flex items-center justify-center border border-gray-200 rounded-md"><HiPlus/></button>
        <img src={product.image} alt={product.title}/>
     
        <div>{product.title}</div>
        
    </div>
  )
}
