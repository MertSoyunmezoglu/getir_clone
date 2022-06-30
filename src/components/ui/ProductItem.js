import React from 'react'
import {HiPlus} from 'react-icons/hi'

export default function ProductItem({product}) {
  return (
    
    <div className='bg-white flex flex-col items-center relative text-center p-4 hover:bg-yellow-50'>
        <button className="hover:text-secondary-brand-color bg-white shadow-md hover:border-secondary-brand-color text-black-600 absolute top-4 right-4 w-8 h-8  flex items-center justify-center border border-gray-200 rounded-md"><HiPlus/></button>
        <img src={product.image} alt={product.title}/>
        <div className='  font-semibold text-brand-color'>{product.price} ₺</div>
        <div>{product.title}</div>
        <div className=' text-gray-400'>{product.alt}</div>
    </div>
  )
}
