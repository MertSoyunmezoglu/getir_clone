import React from 'react'

export default function FoodCard({card:{image,index,titlefood}}) {
  return (
    <div key={index} className='bg-white rounded-lg w-full h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          
         <img className='mb-3 mt-10' src={image} alt="cardsImage" />
          <h6 className=' text-md font-semibold px-12 text-primary-brand-color'>{titlefood}</h6> 
    </div>

  )
}
