import React from 'react'

export default function BigHero({section:{index, imageHeroBig}}) {
  return (
    <div key={index}>
    <div>
    <img className='w-full object-cover h-[500px]' src ={imageHeroBig}/>
  </div>
  </div>
  )
}
