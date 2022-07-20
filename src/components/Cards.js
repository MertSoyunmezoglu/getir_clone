import React, { useEffect, useState } from 'react'
import cardsData from 'api/cards';
export default function  Cards({active}) {
 
  const [cards, setCards] = useState([])
  useEffect(() => {
    setCards(cardsData)
    
  }, [])
 
  
  return (
    <div className=" mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 pb-10 ">
    {active = true} 
      {cards.length && cards.map((card, index)=> (
        <div key={index} className='bg-white rounded-lg w-full h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          
         <img className='mb-3 mt-10' src={card.image} alt="cardsImage" />
         
          {active===true ?  <h6 className=' text-md font-semibold text-primary-brand-color'>{card.title}<p className=' text-sm font-thin text-gray-500'>{card.description}</p></h6> 
           :<h6 className=' text-md font-semibold text-primary-brand-color'>{card.titlefood}</h6>}
        
        </div>

      ))}
    </div>
  )
}
