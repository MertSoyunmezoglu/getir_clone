import React from 'react'

export default function BazaarCard({card:{imageBazaar,index,titleBazaar}}) {
  return (
    <div key={index} className='bg-white rounded-lg w-full h-96 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          
         <img className='mb-3 mt-16 h-40' src={imageBazaar} alt="cardsImage" />
          <h6 className=' text-lg font-semibold mx-2 px-12 text-primary-brand-color'>{titleBazaar}</h6> 
    </div>

  )
}
