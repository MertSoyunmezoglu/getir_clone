import React from 'react'

export default function WaterCard({card:{imageWater,index,titleWater,descriptionWater}}) {
  return (
    <div key={index} className='bg-white rounded-lg w-full h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          
         <img className='mb-3 mt-10' src={imageWater} alt="cardsImage" />
                   <h6 className=' text-lg font-semibold text-primary-brand-color'>{titleWater}<p className=' text-sm font-medium mx-2 text-gray-500'>{ descriptionWater}</p></h6> 
    </div>

  )
}
