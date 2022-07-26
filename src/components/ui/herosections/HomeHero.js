import React from 'react'

export default function HomeHero({section:{index, image}}) {
  return (
    <div key={index}>
    <div>
    <img className='w-full object-cover h-[500px]' src ={image}/>
  </div>
  </div>
  )
}
