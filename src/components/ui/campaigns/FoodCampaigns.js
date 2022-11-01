import React from 'react'

export default function FoodKitchen({kitchen:{index,imageKitchen,titleKitchen}}) {
  return (
    
    <div className=" gap-x-1 px-2  w-full h-full ">
    <a href="#" className="  flex flex-col rounded-lg  items-center text-sm transition bg-white  text-center " key={index}>
    
    <img src={imageKitchen} className="rounded-lg  w-36 h-12 md:h-20 px-2 "/>
    <h2  className="border-t border-gray-100 pt-2 pb-4 w-full text-xxs md:text-xs font-semibold text-primary-brand-color">{titleKitchen}</h2>
    </a>
    </div>
  )
}
