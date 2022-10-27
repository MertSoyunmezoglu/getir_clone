import React from 'react'
import {AiTwotoneStar,AiOutlineHeart} from "react-icons/ai";
export default function RestaurantItems({restaurantimg}) {
  return (
    <>
   
          <img src={restaurantimg} alt="Kampanyalar" className="rounded-lg" />
            <span className="relative sm:absolute  right-2 top-0 z-[40] flex items-center">
             <AiOutlineHeart className=" text-white  opacity-80 m-4 hover:text-primary-brand-color transition-all " size={28} />
            </span>

          <div className="relative w-10 gap-x-1 text-xs rounded-sm h-4    sm:absolute left-4 bottom-2 z-[40] flex items-center">
          </div>
    
        </>
  )
}
