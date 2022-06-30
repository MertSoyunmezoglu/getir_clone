import React, { useEffect, useState } from 'react'
import cardsData from 'api/cards';
export default function  Cards() {
 
  const [cards, setCards] = useState([])
  useEffect(() => {
    setCards(cardsData)
  }, [ ])
  
  return (
    <div className=" container bg-gray-100 grid grid-cols-3  gap-x-4 pt-6 pb-16 "> 
      {cards.length && cards.map((card)=> (
        <div className='bg-white rounded-lg  h-80 gap-2 flex flex-col text-center items-center transition hover:scale-105'> 
          <img className='mb-3 mt-10' src={card.image} alt="cardsImage" />
          <h6 className=' text-md font-semibold text-primary-brand-color'>{card.title}</h6>
          <p className=' text-sm font-thin text-gray-500'>{card.description}</p>
        </div>

      ))}
    </div>
  )
}
