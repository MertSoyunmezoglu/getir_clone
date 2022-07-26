import React from 'react'

export default function HomeCard({card:{image,index,title,description}}) {
  return (
    <div key={index} className='bg-white rounded-lg w-full h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          
         <img className='mb-3 mt-10' src={image} alt="cardsImage" />
                   <h6 className=' text-md font-semibold text-primary-brand-color'>{title}<p className=' text-sm font-thin text-gray-500'>{ description}</p></h6> 
    </div>

  )
}
